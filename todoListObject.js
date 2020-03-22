var todoList = {
  todos:['Item 1','Item 2','Item 3'],
  showTodosList: function (){
    console.log('My Todo :', this.todos)
  },
  addTodo: function(newItem) {
    this.todos.push(newItem),
    this.showTodosList()
  },
  editTodo: function(number,editItem){
    this.todos[number-1]=editItem,
    this.showTodosList()
  },
  deleteTodo: function(number,many){
    this.todos.splice(number-1,many),
    this.showTodosList()
  },
}

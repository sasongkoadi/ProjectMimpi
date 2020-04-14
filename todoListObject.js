var todoList = {
  todos:[],
  // This function to show data array on var todos
  showTodosList: function (){
    console.log('My Todo :', this.todos)
  },
  // This function to add item data on array var todos
  addTodo: function(newItem) {
    this.todos.push(newItem),
    this.showTodosList()
  },
  // This function to edit item data on array var todos
  editTodo: function(number,editItem){
    this.todos[number-1]=editItem,
    this.showTodosList()
  },
  // This function to delete item data on array var todos
  // Every number inside array, using number 1 to n 
  deleteTodo: function(number,many){
    this.todos.splice(number-1,many),
    this.showTodosList()
  },
  //This add object using function
  //This function to add object on array var todos
  addTodoObject: function(newTodoList){
    this.todos.push({
      todoList: newTodoList,
      complete: false,
    })
    this.showTodosList()
  },
  // This function to edit object inside array var todos
  // Every number inside array, using number 1 to n
  editTodoObject: function(number,editTodoList){
    this.todos[number-1].todoList = editTodoList;
    this.showTodosList();
  },
  // This function to edit complete boolean value
  changeToggleComplete: function(number){
    this.todos[number-1].complete = !this.todos[number-1].complete;
    this.showTodosList();
  },
  // This function using another line of code with same result
  changeToggleCompleteTesting: function (number){
    var todo = this.todos[number-1];
    todo.complete = !todo.complete;
    this.showTodosList();
  },
  addTodosLooping: function(howManyLoop){
    for(var x = 1 ; x < howManyLoop+1 ; x++){
      this.todos.push({
        kegiatan: 'Belajar '+x,
        status: false
      })
      console.log(this.todos[this.todos.length-x])
    };
    this.showTodosList();
  },
}


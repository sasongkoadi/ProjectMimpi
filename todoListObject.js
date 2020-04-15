var todoList = {
  todos:[],
  // This function to show data array on var todos
  showTodosList: function (){
    if (this.todos.length == 0){
      console.log('This todos is empty')
    } else {
    console.log('My Todo :')
    for (var x = 0; x < this.todos.length; x++){
      console.log(this.todos[x])
      } 
    }
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
    var arrayLength = this.todos.length
    if (this.todos.length == 0) {
      for(var x = 0; x < howManyLoop; x++){
        this.todos.push({
          todoList: 'Belajar'+ x,
          status: false,
        })
      } 
      this.showTodosList();
    } else {
      for (var y = this.todos.length; y < (arrayLength+howManyLoop); y++){
        this.todos.push({
          todoList: 'Belajar'+ y,
          status: false,
        })
      }
      this.showTodosList();
     };
   },
}

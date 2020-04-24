var todoList = {
  todos: [],

  showTodosList: function(){
    debugger;
    if (this.todos.length === 0){
      console.log('My Todo List Is Empty')
    } else {
      for(var i=0; i<this.todos.length; i++){
        if (this.todos[i].complete === true) {
           console.log('( X ) '+this.todos[i].kegiatan)
        } else {
           console.log('(   ) '+this.todos[i].kegiatan)
        }
      }
    }
  },

  addTodosList: function(howMany){
    debugger;
    var totalTodos=this.todos.length;
    var count=this.todos.length;
    for(var x=this.todos.length; x<totalTodos+howMany; x++){
      count++;
      this.todos.push({
        kegiatan: 'Belajar '+count,
        complete: false
      });
    }
    this.showTodosList();
  },

  addTodo: function(newTodo){
    this.todos.push({
      kegiatan: newTodo,
      complete: false,
    })
    this.showTodosList();
  },

  editTodo: function(number, editTodo){
    debugger;
    this.todos[number-1].kegiatan = editTodo;
    this.showTodosList();
    
  },

  deleteTodos: function(number,howMany){
    debugger;
    this.todos.splice(number-1,howMany);
    this.showTodosList();
  },

  toggleAll: function(){
    debugger;
    var totalTodos= this.todos.length
    var count=0
    for(var i=0; i<this.todos.length; i++){
      if(this.todos[i].complete === true){
        count++;
      }
    }
    
    if(totalTodos===count){
      for(var x=0; x<this.todos.length; x++){
        this.todos[x].complete = false;
      }
    } else {
      for(var y=0; y<this.todos.length; y++){
        this.todos[y].complete = true
      }
    }
    this.showTodosList();
  },

  completeTodo: function(number){
    debugger;
    var todo = this.todos;
    console.log(todo);
    todo[number-1].complete = !todo[number-1].complete
    this.showTodosList();
  }
};

var handlers = {
  displayTodosButton: function(){
    todoList.showTodosList();
  },
  toggleAll: function(){
    todoList.toggleAll();
  },
  addTodo: function() {
    debugger;
    var addTodoText = document.getElementById('addTodoTextInput');
    console.log(addTodoText);
    todoList.addTodo(addTodoText.value);
    addTodoText.value = '';
  },
  editTodo: function(){
    debugger;
    var editNumberInput = document.getElementById('editNumberInput');
    var editTextInput = document.getElementById('editTextInput');
    todoList.editTodo(editNumberInput.valueAsNumber,editTextInput.value);
    editNumberInput.value = '';
    editTextInput.value = '';
  },
  deleteTodo: function() {
    debugger;
    var positionDeleteInput = document.getElementById('positionDeleteInput');
    todoList.deleteTodos(positionDeleteInput.valueAsNumber,1);
    positionDeleteInput.value = "";
  },
  toggleComplete: function() {
    debugger;
    var positionToggleComplete = document.getElementById('positionToggleComplete');
    todoList.completeTodo(positionToggleComplete.valueAsNumber);
    positionToggleComplete.value = '';
  },
}

/*  
var displayTodosButton = document.getElementById('displayTodosButton').addEventListener('click',function (){
  todoList.showTodosList();
})

var toggleAll = document.getElementById('toggleAllTodos').addEventListener('click', function() {
  todoList.toggleAll();
})*/




var todoList = {
  todos: [],
  
  addTodosList: function(howMany){
    var totalTodos=this.todos.length;
    var count=this.todos.length;
    for(var x=this.todos.length; x<totalTodos+howMany; x++){
      count++;
      this.todos.push({
        kegiatan: 'Belajar '+count,
        complete: false
      });
    }
    view.displayTodo();
  },

  addTodo: function(newTodo){
    this.todos.push({
      kegiatan: newTodo,
      complete: false,
    })
    view.displayTodo();
  },

  editTodo: function(number, editTodo){
    this.todos[number-1].kegiatan = editTodo;
    view.displayTodo();
    
  },

  deleteTodos: function(number,howMany){
    this.todos.splice(number-1,howMany);
    view.displayTodo();
  },

  toggleAll: function(){
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
    view.displayTodo();
  },

  completeTodo: function(number){
    var todo = this.todos;
    console.log(todo);
    todo[number-1].complete = !todo[number-1].complete
    view.displayTodo();
  }
};

var handlers = {
  toggleAll: function(){
    todoList.toggleAll();
  },
  addTodo: function() {
    var addTodoText = document.getElementById('addTodoTextInput');
    todoList.addTodo(addTodoText.value);
    addTodoText.value = '';
  },
  editTodo: function(){
    var editNumberInput = document.getElementById('editNumberInput');
    var editTextInput = document.getElementById('editTextInput');
    todoList.editTodo(editNumberInput.valueAsNumber,editTextInput.value);
    editNumberInput.value = '';
    editTextInput.value = '';
  },
  deleteTodo: function() {
    var positionDeleteInput = document.getElementById('positionDeleteInput');
    todoList.deleteTodos(positionDeleteInput.valueAsNumber,1);
    positionDeleteInput.value = "";
  },
  toggleComplete: function() {
    var positionToggleComplete = document.getElementById('positionToggleComplete');
    todoList.completeTodo(positionToggleComplete.valueAsNumber);
    positionToggleComplete.value = '';
  },
}

var view = {
  displayTodo : function(){
    var todosUl = document.querySelector('ul');
    todosUl.innerHTML='';
    for (var i=0; i<todoList.todos.length; i++){
      var todoLi = document.createElement('li');
      var todo = todoList.todos[i]
      if(todo.complete === true){
        todoTextWithCompletion = '( X ) '+todo.kegiatan
      } else {
        todoTextWithCompletion = '(   ) '+todo.kegiatan
      }
      todoLi.textContent = todoTextWithCompletion;
      todosUl.appendChild(todoLi);
    }
  }
}





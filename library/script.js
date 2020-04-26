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
  },

  addTodo: function(newTodo){
    this.todos.push({
      kegiatan: newTodo,
      complete: false,
    })
  },

  editTodo: function(number, editTodo){
    this.todos[number-1].kegiatan = editTodo;
  },

  deleteTodos: function(number,howMany){
    this.todos.splice(number-1,howMany);
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
  },

  completeTodo: function(number){
    var todo = this.todos;
    todo[number-1].complete = !todo[number-1].complete
  }
};

var handlers = {
  toggleAll: function(){
    todoList.toggleAll();
    view.displayTodo();
  },
  addTodo: function() {
    var addTodoText = document.getElementById('addTodoTextInput');
    todoList.addTodo(addTodoText.value);
    addTodoText.value = '';
    view.displayTodo();
  },
  editTodo: function(){
    var editNumberInput = document.getElementById('editNumberInput');
    var editTextInput = document.getElementById('editTextInput');
    todoList.editTodo(editNumberInput.valueAsNumber,editTextInput.value);
    editNumberInput.value = '';
    editTextInput.value = '';
    view.displayTodo();
  },
  deleteTodo: function() {
    var positionDeleteInput = document.getElementById('positionDeleteInput');
    todoList.deleteTodos(positionDeleteInput.valueAsNumber,1);
    positionDeleteInput.value = "";
    view.displayTodo();
  },
  deleteAllTodos: function(){
    var todo = todoList.todos;
    var allTodos = todoList.todos.length;
    todo.splice(0,allTodos); 
    view.displayTodo();
  },
  toggleComplete: function() {
    var positionToggleComplete = document.getElementById('positionToggleComplete');
    todoList.completeTodo(positionToggleComplete.valueAsNumber);
    positionToggleComplete.value = '';
    view.displayTodo();
  },
  addTodosList: function(){
    var inputNumber = document.getElementById('addTodoTextInput');
    todoList.addTodosList(inputNumber.valueAsNumber);
    inputNumber.value = ''
    view.displayTodo();
  },
  hiddenExtra: function(){
    document.getElementById('addTodoButton').innerHTML= 'Add Random Todo' ;
    document.getElementById('addTodoButton').onclick = function() { handlers.addTodosList() };
    document.getElementById('addTodoTextInput').type = 'number';
    document.getElementById('addTodoTextInput').placeholder = 'How many';
    document.getElementById('extra').innerHTML = 'Back';
    document.getElementById('extra').onclick = function(){ handlers.backExtra() }
  },
  backExtra: function(){
    document.getElementById('addTodoButton').innerHTML = 'Add Todo';
    document.getElementById('addTodoButton').onclick = function(){ handlers.addTodo() }
    document.getElementById('addTodoTextInput').type = 'text';
    document.getElementById('addTodoTextInput').placeholder = 'Write your todo';
    document.getElementById('extra').innerHTML = 'Extra';
    document.getElementById('extra').onclick = function(){ handlers.hiddenExtra() }
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


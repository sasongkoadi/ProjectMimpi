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
    this.todos[number].kegiatan = editTodo;
  },

  deleteTodos: function(number){
    this.todos.splice(number,1);
  },

  toggleAll: function(){
    var totalTodos= this.todos.length
    var count=0
    this.todos.forEach(function(todo){
      if (todo.complete === true) return count++
    })
    totalTodos===count?this.changeComplete(false):this.changeComplete(true)
  },

  changeComplete: function(status){
    var todo = todoList.todos
    for(var i=0;i<todoList.todos.length;i++){
      todo[i].complete = status; 
    }
  },
  
  completeTodo: function(number){
    var todo = this.todos;
    todo[number].complete = !todo[number].complete
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
  editTodo: function(id,editTodo){
    todoList.editTodo(id,editTodo);
    view.displayTodo();
  },
  deleteTodo: function(position) {
    todoList.deleteTodos(position);
    view.displayTodo();
  },
  deleteAllTodos: function(){
    var todo = todoList.todos;
    var allTodos = todoList.todos.length;
    todo.splice(0,allTodos); 
    view.displayTodo();
  },
  toggleComplete: function(position) {
    todoList.completeTodo(position);
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
    document.getElementById('addTodoTextInput').type = 'text'; document.getElementById('addTodoTextInput').placeholder = 'Write your todo';
    document.getElementById('extra').innerHTML = 'Extra';
    document.getElementById('extra').onclick = function(){ handlers.hiddenExtra() }
  },
  editButton: function(id) {
    view.displayTodo();
    document.getElementById(id).innerHTML = '<input id="editInput"> <button id="editInputButton">Submit</button> <button onclick=view.displayTodo()>Cancel</button>'
    var editTodo = document.getElementById('editInput');
    document.getElementById('editInputButton').onclick = function() { handlers.editTodo(id, editTodo.value) }
  },
}

var view = {
  elementReUse: {
    ul : document.querySelector('ul'),
  },
  displayTodo : function(){
    var todosUl = this.elementReUse.ul;
    todosUl.innerHTML='';
    todoList.todos.forEach(function(todo,position){
      var todoLi = document.createElement('li');
      todo.complete === true? todoTextWithCompletion = '( X ) '+todo.kegiatan : todoTextWithCompletion = '(  ) '+todo.kegiatan
      todoLi.textContent = todoTextWithCompletion;
      todoLi.id = position ;
      todoLi.appendChild(this.createEditButton());
      todoLi.appendChild(this.createDeleteButton());
      todoLi.appendChild(this.createToggleButton());
      todosUl.appendChild(todoLi);
    },this)
  }, 
  createDeleteButton: function() {
    var deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.className = 'deleteButton';
    return deleteButton;
  },
  createEditButton: function(){
    var editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.className = 'editButton';
    return editButton;
  },
  createToggleButton: function() {
    var toggleButton = document.createElement('button');
    toggleButton.textContent = 'Complete'
    toggleButton.className = 'toggleButton'
    return toggleButton;
  },
  setUpEventListeners: function() {
    var todosUl = this.elementReUse.ul
    todosUl.addEventListener('click', function(){
      var elementClick = event.target;
      if (elementClick.className === 'toggleButton')  handlers.toggleComplete(parseInt(elementClick.parentNode.id)); 
      if (elementClick.className === 'editButton') return handlers.editButton(parseInt(elementClick.parentNode.id));
      if (elementClick.className === 'deleteButton') return handlers.deleteTodo(parseInt(elementClick.parentNode.id));
    })   
  },
}

view.setUpEventListeners()

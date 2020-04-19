var todoList = {
  todos: [],

  showTodosList: function(){
    for(var i=0; i<this.todos.length; i++){
      if (this.todos[i].complete === true) {
        console.log('( X ) '+this.todos[i].kegiatan)
      } else {
        console.log('(   ) '+this.todos[i].kegiatan)
      }
    }
  },

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
    this.todos[number-1].kegiatan = editTodo;
    this.showTodosList();
    
  },

  deleteTodos: function(number,howMany){
    this.todos.splice(number-1,howMany);
    this.showTodosList();
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
    this.showTodosList();
  },

  completeTodo: function(number){
    this.todos[number-1].complete = true;
    this.showTodosList();
  }
}

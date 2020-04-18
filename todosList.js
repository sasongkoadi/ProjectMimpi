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

 
}

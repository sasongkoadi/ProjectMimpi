    if(totalTodos===count){
      for(var x=0; x<this.todos.length; x++){
        this.todos[x].complete = false;
      }
    } else {
      for(var y=0; y<this.todos.length; y++){
        this.todos[y].complete = true
      }
    }

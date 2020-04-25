  showTodosList: function(){
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
  }

var todoLi = document.createElement('li')
var todoUl = document.querySelector('ul')
todoUl.appendChild(todoLi)


  
var displayTodosButton = document.getElementById('displayTodosButton').addEventListener('click',function (){
  todoList.showTodosList();
})

var toggleAll = document.getElementById('toggleAllTodos').addEventListener('click', function() {
  todoList.toggleAll();
})

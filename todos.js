var todos=['Item 1', 'Item 2', 'Item 3']

function showTodos(){
	console.log(todos)
}

function addTodos(){
	todos.push('add new item')
}

function removeTodos(angka){
	todos.splice(angka,1)
}

function editTodo(angka,edit){
  todos[angka-1]=edit
}

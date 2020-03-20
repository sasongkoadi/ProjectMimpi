var todos=['Item 1', 'Item 2', 'Item 3']

function showTodos(){
	console.log(todos)
}

function addTodos(addNewTodo){
	todos.push(addNewTodo)
  showTodos()
}

function removeTodos(urutan,jumlah){
	todos.splice(urutan-1,jumlah)
  showTodos()
}

function editTodo(angka,edit){
  todos[angka-1]=edit
  showTodos()
}
function showInformation(){
  console.log('Add new Todos list using addTodos(tambah todo list)')
  console.log('remove Todos list using removeTodos(pilih todo,jumlah todo yang mau dihapus)')
  console.log('Edit Todos list using editTodo(pilih todo list, rename todo list)')
}

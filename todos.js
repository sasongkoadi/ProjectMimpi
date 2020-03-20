var todos=['Item 1', 'Item 2', 'Item 3']
//Show todos List
function showTodos(){
  console.log('My todos : ' ,todos)
}
// Add new todos list
function addTodos(addNewTodo){
	todos.push(addNewTodo)
  showTodos()
}
// Delete todo from list
function deleteTodos(urutan,jumlah){
	todos.splice(urutan-1,jumlah)
  showTodos()
}
// Edit Todo list
function editTodos(angka,edit){
  todos[angka-1]=edit
  showTodos()
}
// Show information 
function showInformation(){
  console.log('Add new Todos list using addTodos(tambah todo list)')
  console.log('remove Todos list using removeTodos(pilih todo,jumlah todo yang mau dihapus)')
  console.log('Edit Todos list using editTodo(pilih todo list, rename todo list)')
}

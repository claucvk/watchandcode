var todos = [ 'item 1', 'item 2', 'item 3'];

//It should have a function to display todos.
function displayTodos() {
  console.log('My todos:', todos);
}
displayTodos();

//It should have a function to add todos
function addTodo(todo) {
  todos.push(todo);
  displayTodos();
}

addTodo("hello there")
addTodo("oula la")

//It should have a function to change todos
function changeTodo(position, newValue) {
 todos[position] = newValue;
 displayTodos()
}
changeTodo(0, "hola")
changeTodo(1, "hi")
changeTodo(2, "salut")
changeTodo(3, "marhaba")
changeTodo(4, "Hallo")


//It should have a function to delete todos
function deleteTodo(position) {
  todos.splice(position, 1);
  displayTodos();
}

deleteTodo(3);

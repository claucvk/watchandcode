//How to create an object and how to access to its properties or data
var myComputer = {
  operatingSystem: 'macbookPro',
  screenSize: '13 inches',
  purchaseYear: 'late 2011'
};
myComputer.operatingSystem;
myComputer.screenSize;
myComputer.purchaseYear;

//Functions on an object (methods)
var me = {
  name: "Claudia",
  sayName: function() {
    console.log(this.name);
  }
}
me.sayName();

//It should store the todos array on an object.
var todoList = {
  todos: ["item 1", "item 2", "item 3"],
  //It should have a displayTodos method
  displayTodos: function() {
    console.log("My Todos", this.todos);
  },
//It should have an addTodo method
  addTodo: function(todo) {
   this.todos.push(todo);
   this.displayTodos();
  },
  //It should have a changeTodo method
  changeTodo: function(position, newValue) {
    this.todos[position] = newValue;
    this.displayTodos();
  },
  //It should have a deleteTodo method
  deleteTodo: function(position) {
    this.todos.splice(position, 1);
    this.displayTodos();
  }
};

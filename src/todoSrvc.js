angular.module("app").factory("todoSrvc", function($http) {
  return {
    todos: ["Make todo list", "edit a todo list"],
    addTodo(todo) {
      this.todos.push(todo);
    },
    edit(index, todo) {
      this.todos[index] = todo;
    },
    getTodos() {
      return $http.get("/todos").then(console.log);
    }
  };
});

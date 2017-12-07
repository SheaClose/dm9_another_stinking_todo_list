angular.module("app").component("todoView", {
  templateUrl: "./src/components/todoView/todoList/todoList.html",
  controller: function todoListComp(todoSrvc) {
    this.todos = todoSrvc.getTodos();
    this.input = "";
    this.addTodo = todo => {
      todoSrvc.addTodo(todo);
      this.input = "";
    };
  },
  controllerAs: "tdv"
});

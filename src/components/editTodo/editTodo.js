angular.module("app").component("editTodo", {
  template: `
    <input-comp input-value="et.input" submit="et.editTodo(et.input)" button-label="Edit Todo" ></input-comp>
  `,
  controller: function editTodo(todoSrvc, $state) {
    this.input = todoSrvc.todos[$state.params.index];
    this.editTodo = todo => {
      todoSrvc.edit($state.params.index, todo);
      $state.go("home");
    };
  },
  controllerAs: "et"
});

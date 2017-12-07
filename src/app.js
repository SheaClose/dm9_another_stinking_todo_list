angular
  .module("app", ["ui.router"])
  .config(function($urlRouterProvider, $stateProvider) {
    $urlRouterProvider.otherwise("/");

    $stateProvider
      .state({
        name: "home",
        url: "/",
        component: "todoView"
      })
      .state({
        name: "edit",
        url: "/edit/:index",
        component: "editTodo"
      });
  });

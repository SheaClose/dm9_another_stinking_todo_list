angular.module("app").component("inputComp", {
  templateUrl: "./src/components/todoView/inputComp/inputComp.html",
  controller: function inputComp() {},
  controllerAs: "ic",
  bindings: {
    buttonLabel: "@",
    submit: "&",
    inputValue: "="
  }
});

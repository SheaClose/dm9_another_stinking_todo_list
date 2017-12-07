angular.module("app").component("navComp", {
  template: `<nav class="nav">
    <div ui-sref="home">
      Home
    </div>
    <div ui-sref="edit({index:0})">
      Edit
    </div>
  </nav>`
});

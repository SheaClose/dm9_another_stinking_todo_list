const express = require("express"),
  cors = require("cors"),
  app = express();

app.use(express.static(__dirname + "/"));

app.get("/todos", (req, res) => {
  res.send(["Make todo list", "edit a todo list"]);
});

app.listen(3000, () => console.log("listing on 3000"));

const express = require("express");
const bodyParser = require("body-parser");

const app = express();


app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

let todos =["Hoc Bai", "Mua Do"];

app.post("/", function(req, res){
let todo = req.body.newItem;
todos.push(todo);
res.redirect("/");
});



app.get("/", function(req, res) {
  let today = new Date();
let options = {
  weekday: "long",
  day: "numeric",
  month: "long"
};

let day = today.toLocaleDateString("en-US",options);

  res.render("list", {
    todos: todos ,
    kindOfDay: day
  });

});


app.listen(3000, function() {
  console.log("Server started on port 3000");
});

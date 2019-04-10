//引入需要之套件

//server
const express = require("express");
const port = 3000;
const app = express();

//handlebars
const exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//body-parser
const bdparser = require("body-parser");

//啟動監聽
app.listen(port, () => {
  console.log("this is e04_generate project");
});

//靜態檔案路由
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index");
});

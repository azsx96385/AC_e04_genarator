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

//function
let e04_generate = require("./e04_generate");

//啟動監聽
app.listen(port, () => {
  console.log("this is e04_generate project");
});

//靜態檔案路由
app.use(express.static("public"));
app.use(bdparser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index");
});

app.post("/generate", (req, res) => {
  let e04Sentence = e04_generate(req.body);
  let eng = "";
  let des = "";
  let ent = "";
  if (req.body.target === "engineer") {
    eng += "YES";
  } else if (req.body.target === "designer") {
    des += "YES";
  } else if (req.body.target === "entrepreneur") {
    ent += "YES";
  }

  res.render("index", {
    e04Sentence: e04Sentence,
    eng: eng,
    des: des,
    ent: ent
  });
});

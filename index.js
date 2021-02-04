var express = require("express");
var app = express();
var path = require("path");
var public = path.join(__dirname, "public");
app.use(express.static(__dirname + "/static"));
app.use(express.static("./public"));
// app.use(express.static("./public/assets"));
app.use("/img", express.static(path.join(__dirname, "..", "assets", "img")));
app.use("/tone", express.static(path.join(__dirname, "..", "assets", "tone")));

// app.get("/", (req, res) => {
//   console.log("da oprobamo");
//   res.send("<h1>oj jebate</h1>");
// });

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.listen(process.env.PORT || 8080, () =>
  console.log("szervusz szervuszinho")
);

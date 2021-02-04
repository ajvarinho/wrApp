var express = require("express");
var app = express();
app.use(express.static(__dirname + "/static"));
app.use(express.static("./public"));

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

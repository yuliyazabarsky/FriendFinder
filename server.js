var express = require("express");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

app.listen(PORT, function() {
    console.log(`App listening on PORT `+ PORT);
});

app.get("/", function(req, res) {
    res.json(path.join(__dirname, "public/home.html"));
  });
  
var express = require('express');
var app = express();

var port = process.env.port || 3000

app.get('/', function (req, res) {
  console.log("Request Made")
  res.send('Hello World!');
});
app.listen(port, function () {
  console.log('Example app listening on port 3000!');
});
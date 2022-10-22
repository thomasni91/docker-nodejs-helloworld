require('dotenv').config()

var express = require('express');

// Constants
var DEFAULT_PORT = 8080;
var PORT = process.env.PORT || DEFAULT_PORT;

// App
var app = express();
app.get('/', function (req, res) {
  res.send(PORT);
});

app.listen(PORT)
console.log('Running on http://localhost:' + PORT);

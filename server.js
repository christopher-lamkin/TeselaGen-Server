var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000;

var sequence = require('./sequenceGenerator.js');

app.get('/sequence', function (req, res){
  res.send(sequence());
});

app.listen(PORT, function(){
  console.log('Express listening on port ' + PORT + '!');
});

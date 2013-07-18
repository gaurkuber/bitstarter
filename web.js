var fs = require('fs');
var express = require('express');
var htmlfile="index.html";//var buffer = Buffer(fs.readFileSync('index.html', 'utf-8'));

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
//  response.send(buffer.toString('utf-8', 0, 27));
  var html = fs.readFileSync(htmlfile).toString();
  response.send(html);
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});

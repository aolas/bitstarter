var express = require('express');
var app = express();
app.use(express.logger());

fs = require('fs');
fs.readFile('/etc/hosts', 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
  //console.log(data);
  app.get('/', function(request, response) {                                                         response.Asend(data);
  });
 
});



var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});

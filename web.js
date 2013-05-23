var express = require("express");
var app = express();
var exec = require('child_process').exec;
app.use(express.logger());
app.get('/proxy', function(request, response) {
  var worker_status = [];
  var bootWorker = exec('heroku scale worker=1', function (error, stdout, stderr) {
		worker_status.push(stdout);
		if (error !== null) {
  		console.log('Error booting worker');
		}
  });
  response.send('\n\n Cloak: [Online]' + '\n Worker: [' + worker_status + ']');
  setTimeout(function(response) {
  		response.send('\n\n Cloak: [Online] + \n Worker: [' + worker_status + ']');
  }, 1000);
});
var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Bound to Heroku default: " + port);
});
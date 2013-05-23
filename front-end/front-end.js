var express = require("express");
var app = express();
var getHtml = require('request'); 
var exec = require('child_process').exec;
var worker_status = [];	
app.use(express.logger());
var time = "";
app.get('/', function(request, response) {
  response.send('CLOAK :' + ' [ IP ] --> Load a new IP by passing the "start" command appended the url request.' );
});
app.get('/start', function(request, response) {
  var time = new Date();
  var bootWorker = exec('cd ~/cloak/app && heroku scale worker=1', function (error, stdout, stderr) {
	console.log(stdout); 
	if (error !== null) {
  		console.log('ERROR STARTING WORKER');
	}
  });
  	response.send('cloak.herokuapp.com:8888'); 
});
app.get('/end', function(request, response) {
  var killWorker = exec('cd ~/cloak/app && heroku scale worker=0', function(error, stdout, stderr) {
  worker_status.push(stdout);
  response.send('\n\n CLOAK' + ' : [ ' + worker_status + ']');
	if (error !== null) {
  		console.log('ERROR KILLING WORKER');
	}
  });
});
var port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log("Bound: " + port);
});

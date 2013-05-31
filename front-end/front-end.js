/*/ 
Cloak
patrick@noodle.org, May 2013

TODO
var https, change when auto detect is complete. 
/*/
var express = require("express");
var app = express();
var getHtml = require('request'); 
var exec = require('child_process').exec;
var worker_status = [];	
app.use(express.logger());
var time = "";
var https = 'active'; // CHANGE THIS IF AUTO ASSIGN is COMPLETE.
console.log('\n\nCLOAK v0.0.1\n============\nDNS: http://cloak.herokuapp.com\nHTTPS: ' + https + '\n');
app.get('/', function(request, response) {
  response.send('CLOAK :' + ' [ IP ] --> Load a new IP by passing the "start" command appended the url request.' );
});
app.get('/refresh', function(request, response) {
  var time = new Date();
  
  var killWorker = exec('cd ~/cloak_re/heroku && heroku scale web=0', function (error, stdout, stderr) {
	console.log(stdout); 
	if (error !== null) {
  		console.log('ERROR STARTING WORKER');
	}
  });
  setTimeout(function() { 
  	var bootWorker = exec('cd ~/cloak_re/heroku && heroku scale web=1', function (error, stdout, stderr) {
		console.log(stdout); 
		if (error !== null) {
  			console.log('ERROR STARTING WORKER');
		}
  	});
  	console.log('CLOAK: Sent a refreshing new IP.\n' + new Date()); 
   }, 4000); 
  response.send('CLOAK: Please use cloak.herokuapp.com for your requests...'); // CHANGE THIS TO THE APP NAME GIVEN BY HEROKU.
});
app.get('/cluster', function(request, response) {
  var time = new Date();
  var bootCluster = exec('cd ~/cloak_re/heroku && heroku scale web=100', function (error, stdout, stderr) {
	console.log(stdout); 
	if (error !== null) {
  		console.log('CLOAK: Error booting Cluster.');
	}
  });
  setTimeout(function() { 
  	var bootWorker = exec('cd ~/cloak_re/heroku && heroku scale web=0', function (error, stdout, stderr) {
		console.log(stdout); 
		if (error !== null) {
  			console.log('CLOAK: Error spinning down Dynos, get to Heroku and stop them.');
		}
  	});
  	console.log('CLOAK: Sent a refreshing new IP.\n' + new Date()); 
   }, 10000000); 
  response.send('CLOAK: Please use cloak.herokuapp.com for your requests...'); // CHANGE THIS TO THE APP NAME GIVEN BY HEROKU.
});
var port = 7473;
app.listen(port, function() {
  console.log("BOUND: " + port);
});

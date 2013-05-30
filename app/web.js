var express = require('express');
var app = express();
var port = process.env.PORT || 8080
var events = require('events');
var emitter = new events.EventEmitter;

var request = require('request'); 
var http = require('http'); 
var Requester = require('requester'),
    requester = new Requester({debug: 1});
app.get('/', function(req, res) {
	var bucket = [];
	var targets = require('url').parse(req.url);
	
	emitter.getTarget = function(url) { 
		var self = this;
		console.log(url); 
		var r = requester.get('http://' + url, function (body) {
    		self.emit('heard', body);  
		});
	}
	emitter.once('heard', function(body) { 
		res.send(body); 
	}); 
	emitter.getTarget(targets.query);

});
 
app.listen(port);
console.log('Listening on port 3001...idiot.');



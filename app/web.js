/*/ 
Cloak
patrick@noodle.org, May 2013

TODO
1. Add Redirect to refresh page.
/*/

var express = require('express');
var app = express();
var port = process.env.PORT || 3001
var events = require('events');
var emitter = new events.EventEmitter;
var http = require('http'); 
var Requester = require('requester'),
    requester = new Requester({debug: 1});
app.get('/', function(req, res) {
	try { 
		var bucket = [];
		var targets = require('url').parse(req.url);
			emitter.getTarget = function(url) { 
			var self = this;
			console.log(url); 
			var r = requester.get(url, function (body) {
    			self.emit('heard', body);  
			});
		}
		emitter.once('heard', function(body) { 
			res.send(body); 
		}); 
		emitter.getTarget(targets.query);
	} catch (err) { 
		res.send('CLOAK ERROR: Please enter a target url.' + err); 
	} 

});

app.get('/refresh', function(req, res) {
	try { 
		var bucket = [];
		var targets = "http://cloak.routedirector.com:7473/refresh";
			emitter.getIP = function(url) { 
			var self = this;
			var refreshing_sprite = "CLOAK: Boot signal sent! Please wait 15 seconds before running your process.";
			console.log(url); 
			var r = requester.get(url, function (body) {
    			self.emit('refresh', refreshing_sprite);  
			});
		}
		emitter.once('refresh', function(body) { 
			res.send(body); 
		}); 
		emitter.getIP(targets);
	} catch (err) { 
		res.send('CLOAK ERROR: Please enter a target url.' + err); 
	} 

});

app.get('/cluster', function(req, res) {
	try { 
		var bucket = [];
		var targets = "http://cloak.routedirector.com:7473/cluster";
			emitter.getIP = function(url) { 
			var self = this;
			var refreshing_sprite = "CLOAK: A cluster of 100 workers has been deployed for 3 hours. Please wait 2 minutes before running your process.";
			console.log(url); 
			var r = requester.get(url, function (body) {
    			self.emit('refresh', refreshing_sprite);  
			});
		}
		emitter.once('refresh', function(body) { 
			res.send(body); 
		}); 
		emitter.getIP(targets);
	} catch (err) { 
		res.send('CLOAK ERROR: Please enter a target url.' + err); 
	} 

});
 
app.get('/help', function(req, res) {
	res.send('CLOAK: Please create your request by appending the target domain to the cloak address, ex: "cloak.herokuapp.com/?http://www.google.com"' ); 
}); 

app.listen(port);
console.log('BOUND:' + port);



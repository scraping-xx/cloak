var express = require('express');
var app = express();
var port = process.env.PORT || 3001
var events = require('events');
var emitter = new events.EventEmitter;
var http = require('http'); 
var Requester = require('requester'),
    requester = new Requester({debug: 1});
app.get('/', function(req, res) {
	var bucket = [];
	var targets = require('url').parse(req.url);
	var auth = require('url').parse(req.url).auth;
	var hash = require('url').parse(req.url).hash;
	res.send('Query: ' + targets.query + '\nhttps: ' + hash + '\n\nFull Text\n' + targets);

});
 
app.listen(port);
console.log('BOUND:' + port);
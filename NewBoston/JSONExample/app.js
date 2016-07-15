var express = require('express');
var http    = require('http');
var fs      = require('fs');
var app     = express();

app.locals.videodata = require('./videodata.json');

function showJSON(request, response) {
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write(app.locals.videodata.categoryName);
    response.end();
}

http.createServer(showJSON).listen(2222);
console.log("server is running...");

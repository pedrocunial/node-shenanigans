var connect = require('connect');
var http    = require('http');

// This is pretty standard naming convention
var app = connect();

function doFirst(request, response, next) {
    console.log("Bacon");
// The next makes it go to the next "use" added to the app
    next();
}

function doSecond(request, response, next) {
    // Which is this one!
    console.log("Tuna");
    next();
}

// Whenever they connect to our webserver we are going to
// send this response
app.use(doFirst);
app.use(doSecond);

http.createServer(app).listen(8888);
console.log("Server is running...");

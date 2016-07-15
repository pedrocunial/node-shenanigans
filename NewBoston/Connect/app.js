var connect = require('connect');
var http    = require('http');
var app     = connect();

function profile(request, response) {
    console.log("User requested profile");
}

function forum(request, response) {
    console.log("User requested forum");
}

app.use('/forum', forum);
app.use('/profile', profile);

http.createServer(app).listen(8888);
console.log("Server is running...");

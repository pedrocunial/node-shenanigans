var http = require('http');

function onRequest(request, response) {
    console.log("A user made a request", request.url);
    // Write head takes some parameters
    // 0 - status code (404, 200 etc)
    // 1 - header information (what type of data are you sending)
    response.writeHead(200, {"Context-Type": "text/plain"});
    response.write("Here is your response");
    response.end();
}

// The create server method requires a requestListener
http.createServer(onRequest).listen(8888);
console.log("Server is now running...");

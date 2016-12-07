var http = require('http');

var server = http.createServer(function(request, response){
        console.log("received a request");
        console.log(request);
        response.write("Hello from the other side");
        response.end();
});

server.listen(3000);
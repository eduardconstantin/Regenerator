var http = require('http');
http.createServer(function (req, res) {
    console.log('Got request for ' + req.url);
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('<h1>Test Bitch!</h1>');
}).listen(process.env.PORT);
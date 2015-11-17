var http = require('http');
var fs = require('fs');

http.createServer(function (request, response) {
	response.writeHead(200);
	fs.readFile('index.html', function (error, content) {
		response.write(content, {
			Content - Type: 'text/html'
		});
		response.end();
	});
}).listen(9527);

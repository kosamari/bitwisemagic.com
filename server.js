var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('THIS SITE WILL BE SOMETHING INTERESTING. MAYBE.');
}).listen(5020);
console.log('Server running at 5020');
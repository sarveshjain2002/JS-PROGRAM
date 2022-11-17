var http = require('http');
var uc = require('upper-case');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(uc.upperCase("hello,welcome to p.r pote college of engineering and management!"));
  res.end();
}).listen(3000);
//Check output on web browser http://localhost:3000/

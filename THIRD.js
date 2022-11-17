var http = require('http');

http.createServer(function(req,res)
{
res.writeHead(200,{'Context-Type':'text/html'});
res.write('Congrats you have created a web serverr');
res.end();}).listen(8081);

console.log('Node.js Web Server at Port 8081 is running....');



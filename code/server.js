/* 
 * File Server 
 */

var http = require('http');
var fs = require('fs');
var portNo = 1337;

http.createServer(function(request, response){
    
    response.writeHead(200, {
        'Content-Type': 'text/html',
        'Access-Control-Allow-Origin' : '*'
    });

    var readStream = fs.createReadStream(__dirname + '/index.html');
  
    readStream.pipe(response);
    
}).listen(portNo);

console.log('Servidor iniciado al puerto ' + portNo);
/* 
 * File Server 
 */

var express = require('express');
var app     = express();
var path    = require('path');
var portNo = 1337;

app.get('/', function(request, response) {
    response.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(portNo);
console.log('Servidor iniciado al puerto ' + portNo);
var http = require('http');
var url = require('url');
function iniciar(route,handle){
function onRequest(request,response){
    var pathname = url.parse(request.url).pathname;
    console.log("Peticion  para " + pathname + " recibida" + request.url);
     route(handle,pathname,response);
    
}
http.createServer(onRequest).listen(8000);
console.log("server started");
}
exports.iniciar = iniciar;
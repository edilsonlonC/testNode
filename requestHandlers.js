var exec = require('child_process').exec;
function iniciar(response){
    
    
    console.log("manipulador de  'iniciar' ha sido llamado");
    var body = "<html> <form> <h2> test node </h2> <input type='text'/> <input type = 'submit' value='test'/></form> </html"
        response.writeHead(200,{"Content-Type": "text/html"});
        response.write(body);
        response.end();
    
}
function subir(){
    console.log("manipulador de  'subir' ha sido llamado");
    
}
exports.iniciar = iniciar;
exports.subir= subir;
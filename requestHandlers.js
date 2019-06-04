
function iniciar(){
    
    
    console.log("manipulador de  'iniciar' ha sido llamado");
    function sleep(miliSeconds){
        // Obten la hora actual
        var startTime = new Date().getTime();
        // atasca la cpu
        while (new Date().getTime < startTime + miliSeconds);
    }
    sleep(10000);
    return "iniciar";
}
function subir(){
    console.log("manipulador de  'subir' ha sido llamado");
    
}
exports.iniciar = iniciar;
exports.subir= subir;
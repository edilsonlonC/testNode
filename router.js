function route(handle,pathname){
    console.log("A punto de rutear una petición para " + pathname);
    //console.log(handle);
    
    if (typeof handle[pathname] === 'function' ){
        return handle[pathname]();
    }else{
        console.log("no se encontro manipulador para " + pathname);
        return "404 No encontrado";
    }
    
}
exports.route = route;
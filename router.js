function route(handle,pathname,response){
    console.log("A punto de rutear una petición para " + pathname);
    //console.log(handle);
    
    if (typeof handle[pathname] === 'function' ){
        return handle[pathname](response);
    }else{
        console.log("no se encontro manipulador para " + pathname);
        response.writeHead(404,{"Content-Type" : "text/html"});
    
        response.write("404 not found");
        response.end();
    }
    
}
exports.route = route;
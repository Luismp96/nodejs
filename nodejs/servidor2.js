//PARTE 3 MONGO DB Y NODE JS
//1.9 -> SERVIDOR CARGANDO HTML

//PARA IMPORTAR MODULO (HTTP EN ESTE CASO)
var servidor = require('http');

//MODULO FILE SYSTEM -> leer y escribir archivos
var archivos = require('fs');

//CREAMOS SERVIDOR (puerto 80)
servidor.createServer(function(req,res){

    //ESCRIBIMOS EN EL HTML
    res.writeHead(200,{'Content-Type':'text/html'});

    //MEDIANTE SWITCH DECIDIMOS DEPENDIENDO DE LA URL:
    switch(req.url){
        case "/":
            //LEEMOS UN HTML INICIO
            archivos.readFile('inicio.html',function(err,data){
                res.write(data);
                res.end("");
            });
            break;
        case "/sobremi":
            archivos.readFile('sobremi.html',function(err,data){
                res.write(data);
                res.end("");
            });
            break;
        case "/contacto":
            archivos.readFile('contacto.html',function(err,data){
                res.write(data);
                res.end("");
            });
            break;
        default:
            res.end("Pagina No Encontrada");
            break;
    }

}).listen(8080)
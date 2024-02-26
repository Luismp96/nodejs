//PARTE 3 MONGO DB Y NODE JS
//1.1 -> CREAMOS SERVIDOR

//PARA IMPORTAR MODULO (HTTP EN ESTE CASO)
var servidor = require('http');

//CREAMOS SERVIDOR (puerto 80)
servidor.createServer(function(req,res){

    //ESCRIBIMOS EN EL HTML
    res.writeHead(200,{'Content-Type':'text/html'});

    //SALIDA POR PANTALLA
    res.end("Hola Mundo desde Node.js");
    console.log("Alguien ha cargado la Web");


}).listen(8080)
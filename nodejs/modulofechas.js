//PARTE 3 MONGO DB Y NODE JS
//1.3

//PARA IMPORTAR MODULO 
var servidor = require('http');

//CREAMOS SERVIDOR (puerto 80)
servidor.createServer(function(req,res){

    //CREAMOS OBJETO CLASE FECHA
    fecha = new Date();

    //ESCRIBIMOS EN EL HTML
    res.writeHead(200,{'Content-Type':'text/html'});

    //SALIDA POR PANTALLA
    res.write("Hola Mundo desde Node.js");
    res.end(""+fecha.getFullYear()+"");
    console.log("Alguien ha cargado la Web");

}).listen(8080)
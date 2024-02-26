//PARTE 3 MONGO DB Y NODE JS
//1.6 -> LEER URL

//PARA IMPORTAR MODULO (HTTP EN ESTE CASO)
var servidor = require('http');

//CREAMOS SERVIDOR (puerto 80)
servidor.createServer(function(req,res){

    //ESCRIBIMOS EN EL HTML
    res.writeHead(200,{'Content-Type':'text/html'});

    //SALIDA POR PANTALLA
    //SE AÑADE ETIQUETA HTML
    res.write("<h1>Hola Mundo desde Node.js</h1>");

    //SACAMOS LA URL POR PANTALLA OBTENIDA DE REQUEST
    res.end(req.url);
    console.log("Alguien ha cargado la Web");


}).listen(8080)
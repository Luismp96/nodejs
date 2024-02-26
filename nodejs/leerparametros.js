//PARTE 3 MONGO DB Y NODE JS
//1.7 -> LEER DIFERENTES PARAMETROS DE LA URL

//PARA IMPORTAR MODULO (HTTP EN ESTE CASO)
var servidor = require('http');

//VARIABLE RUTA
var ruta = require('url');

//CREAMOS SERVIDOR (puerto 80)
servidor.createServer(function(req,res){

    //ESCRIBIMOS EN EL HTML
    res.writeHead(200,{'Content-Type':'text/html'});


    //EN LA VARIABLE PARAMETROS PARSEAMOS LOS DATOS QUE VENGAN EN URL
    var parametros = ruta.parse(req.url,true).query;
    //PARAMETRO URL NOMBRE
    res.write("Tu nombre es: " + parametros.nombre)

    res.write( "<br>");

    //PARAMETROS URL APELLIDOS
    res.write("Tus apellidos son: " + parametros.apellidos);
    res.end("");
}).listen(8080)
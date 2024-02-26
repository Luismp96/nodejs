//PARTE 3 MONGO DB Y NODE JS
//1.8 -> CREAMOS SERVIDOR + EXPLICACION CARGAR HTML

//PARA IMPORTAR MODULO (HTTP EN ESTE CASO)
var servidor = require('http');

//MODULO FILE SYSTEM -> leer y escribir archivos
var archivos = require('fs');

//CREAMOS SERVIDOR (puerto 80)
servidor.createServer(function(req,res){

    //AL LEER HTML (inicio.html generado)
    archivos.readFile('inicio.html',function(err,data){
        //ESCRIBIMOS EN EL HTML
        res.writeHead(200,{'Content-Type':'text/html'});

        res.write(data);
        res.end("");
    });
    


}).listen(8080)
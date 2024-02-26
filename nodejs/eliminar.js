//PARTE 3 MONGO DB Y NODE JS
//2.3 -> ELIMINAR FICHERO CREADO

var archivos = require('fs');

//CREAMOS FICHERO

//SOBREESCRIBIMOS FICHERO
archivos.unlink('cambio.txt', function(err){
    if(err) throw err;
    console.log("Mision Cumplida");
})
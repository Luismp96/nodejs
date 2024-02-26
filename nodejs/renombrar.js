//PARTE 3 MONGO DB Y NODE JS
//2.2-> RENOMBRAR FICHERO CREADO

var archivos = require('fs');

//CREAMOS FICHERO

//SOBREESCRIBIMOS FICHERO
archivos.rename('nuevo.txt','cambio.txt', function(err){
    if(err) throw err;
    console.log("Mision Cumplida");
})
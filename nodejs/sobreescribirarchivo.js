//PARTE 3 MONGO DB Y NODE JS
//2.1-> SOBREESCRIBIR FICHERO CREADO

var archivos = require('fs');

//CREAMOS FICHERO

//SOBREESCRIBIMOS FICHERO
archivos.writeFile("nuevo.txt", "Este es mi contenido Sobreescribir\n", function(err){
    if(err) throw err;
    console.log("Mision Cumplida");
})
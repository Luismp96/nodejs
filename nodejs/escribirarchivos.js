//PARTE 3 MONGO DB Y NODE JS
//2.0-> ESCRIBIR FICHERO CREADO

var archivos = require('fs');

//CREAMOS FICHERO

//ESCRIBIMOS SOBRE LO QUE HAY EN FICHERO
archivos.appendFile("nuevo.txt", "Este es mi contenido\n", function(err){
    if(err) throw err;
    console.log("Mision Cumplida");
})

//PARTE 2 INI

//DECLARACION DE FUNCION

function saluda(){
    console.log("Hola Me llamo Luis");
    console.log("Tengo 27 años");
    console.log("Mi correo es 96luismartin@gmail.com");
}

function saludaJuan(){
    console.log("Hola Me llamo Juan");
    console.log("Tengo 44 años");
    console.log("Mi correo es juan@gmail.com");
}

//FUNCIONES CON PARAMETROS

function saluda(nombre,edad,correo){
    console.log("Hola Me llamo " + nombre);
    console.log("Tengo " +edad +" años.");
    console.log("Mi correo es " + correo);
}

//FUNCIONES CON RETURN -> DEVUELVEN ALGO
function saluda1(nombre,edad,correo){
    cadena = "";
    cadena += "Me llamo " + nombre + ".\n";
    cadena += "Tengo " + edad + " años\n";
    cadena += "Mi correo es " + correo + ".\n";
    return cadena;
}

//LLAMADA FUNCION
//saluda();
//saluda();
//saluda();
//saludaJuan();

//NO TIENE RETURN (CONSOLE.LOG DENTRO DE LA FUNCION)
saluda("Pepe", 50,"pepe@gmail.com");

//TIENE RETURN LA FUNCION
console.log(saluda1("Pepe", 50,"pepe@gmail.com"));

//PARTE 2 FIN

//************** */
// VARIABLES 
//************** */

//ASIGNACION
var edad = 45;

//ENCADENAMIENTO (+)
console.log("Tu edad es de " + edad + " años.");

//INCREMENTOS

    //-> sumamos 1
    console.log("SUMAMOS 1: " + (edad++));
    //-> restamos 1
    console.log("RESTAMOS 1: " + (edad--));


//OPERADORES ABREVIADOS

    //-> sumamos +3
    console.log("SUMAMOS 3: " + (edad += 3));
    //-> restamos 3
    console.log("RESTAMOS 3: " + (edad -= 3));

    //-> multiplicamos x2
    console.log("MULTIPLICAMOS POR 2:  " + (edad *= 2));

    //-> dividimos entre 2
    console.log("DIVIDIMOS ENTRE 2: " + (edad /= 2));


//VARIABLES GLOBALES

    var edad = 45;
    edad = 46;

    console.log("Tu edad es de " + edad + " años.");

//VARIABLES LOCALES


    let edad1 = 45;
    edad1 = 46;
    console.log("Tu edad es de " + edad1 + " años.");

//CONSTANTES (mayusculas)

    const CONSTANTEEDAD = 45;
    console.log("Tu edad es de " + CONSTANTEEDAD + " años.");



//PARTE 2 INI


//PARTE 2 FIN

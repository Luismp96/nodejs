//PARTE 2 INI


var edad = 45;

//BUCLE IF

if(edad <50){
    console.log("Eres Joven");
}


//BUCLE IF/ELSE
if (edad < 40){
    console.log("Eres Joven");
}else{
    console.log("Eres Mayor");
}

var diasemana = "viernes";
//IF/ ELSE IF

if(diasemana == "lunes"){
    console.log("Hoy es el peor dia de la semana");
}else if(diasemana == "martes"){
    console.log("Hoy es Martes");
}else if(diasemana == "miercoles"){
    console.log("Hoy es Miercoles");
}else if(diasemana == "jueves"){
    console.log("Estamos a mitad de Semana");
}else if(diasemana == "viernes"){
    console.log("Hoy empieza el fin de semana");
}else if(diasemana == "sabado"){
    console.log("Hoy es el mejor dia de la semana");
}else if(diasemana == "domingo"){
    console.log("Hoy es el ultimo dia de la semana");
}else{
    console.log("No reconozco el dia de la semana");
}


//SWITCH CASE

switch(diasemana){
    case ("lunes"):
        console.log("Hoy es el peor dia de la semana");
        break;
    case ("martes"):
        console.log("Hoy es Martes");
        break;
    case ("miercoles"):
        console.log("Hoy es Miercoles");
        break;
    case ("jueves"):
        console.log("Estamos a mitad de Semana");
        break;
    case ("viernes"):
        console.log("Hoy empieza el fin de semana");
        break;
    case ("sabado"):
        console.log("Hoy es el mejor dia de la semana");
        break;
    case ("domingo"):
        console.log("Hoy es el ultimo dia de la semana");
        break;
    default:
        console.log("No reconozco el dia de la semana");
        break;
}
//PARTE 2 FIN
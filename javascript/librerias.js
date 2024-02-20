var nota = 4.6;

//MATH

//REDONDEO AL MAS PROXIMO
console.log(Math.round(nota));

//REDONDEO A LA ALTA
console.log(Math.ceil(nota));

//REDONDEO A LA BAJA
console.log(Math.floor(nota));

//NUMEROS ALEATORIOS
numeroaleatorio = Math.random();
console.log(numeroaleatorio);

//TRIGONOMETRIA
var angulo = 0;

console.log("COSENO: " + Math.cos(angulo));
console.log("SENO: " + Math.sin(angulo));

angulo = Math.PI/2;
console.log("COSENO: " + Math.cos(angulo));
console.log("SENO: " + Math.sin(angulo));



//FECHAS

var fecha = new Date();

console.log("El año es: " + fecha.getFullYear());
console.log("El mes es: " + (fecha.getMonth() + 1));
console.log("El año es: " + fecha.getDate());

console.log("La hora es: " + fecha.getHours());
console.log("El minuto es: " + fecha.getMinutes());
console.log("El segundo es: " + fecha.getSeconds());

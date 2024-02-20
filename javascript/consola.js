console.log("HolaMundo desde JS");


//SALIDAS

//********************* */
//ADVERTENCIA EN CONSOLA
//********************* */

console.warn("Advertencia en la Consola");
console.error("Esto es un Error");
console.table("Esto es una tabla");

agenda = [];
agenda[0] = "Luis";
agenda[1] = "Martin";

console.table(agenda);

//********************* */
//OPERADORES ARITMETICOS
//********************* */

console.log(4+3);
console.log(4-3);
console.log(4*3);
console.log(4/3);
console.log(4%3);

//************* */
//COMPARADORES
//************* */

console.log(4<3);
console.log(4>3);
console.log(4==4);
console.log(4<=3);
console.log(4>=3);
console.log(4!=3);

    // ---> compara solo valor
    console.log(4=="4");
    // ---> compara valor y tipo de dato
    console.log(4==="4");

//******************** */
//OPERADORES BOOLEANOS
//******************* */

console.log(3 == 3 && 4 == 4);
console.log(3 == 3 && 4 == 4 && 5 == 5);
console.log(3 == 3 && 4 == 4 && 5 == 4);

console.log( 3 == 3 || 4 == 4 || 5 == 5);
console.log( 3 == 3 || 4 == 4 || 5 == 4);
console.log( 3 == 2 || 4 == 3 || 5 == 4);


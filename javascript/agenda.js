//PARTE 2 INI
var agenda1 = "Luis Martin";

console.log("La agenda es " + agenda1);


//COLECCIONES

var agenda = [];
agenda[0] = "Luis Martin";
console.log(agenda);

agenda[1] = "Alba Rubio";
console.log(agenda);

agenda[2] = "Jorge Martin";
console.table(agenda);

//AÑADIR AL ARRAY (PUSH)
agenda.push("Julia");
console.table(agenda);

//ELIMINAR ULTIMO ELEMENTO (POP)
agenda.pop();
console.table(agenda);

//ELIMINAR X POSICIONES DEL ARRAY A PARTIR DEL PARAMETRO 1 splice(posicionInicial,numeroelementos a borrar)
agenda.splice(0,1);
console.table(agenda);

//COLECCIONES ALFANUMERICAS

agenda1 = [];
agenda1['nombre'] = "Luis Martin";
agenda1['telefono'] = "647583912";
agenda1['email'] = "96luismartin@gmail.com";

console.table(agenda1);

//COLECCIONES MULTIDIMENSIONALES

var agenda2 = [];

agenda2[0] = [];
agenda2[0][0] = "Luis Martin";
agenda2[0][1] = "657489221";
agenda2[0][2] = "96luismartin@gmail.com";

agenda2[1] = [];
agenda2[1][0] = "Alba Rubio";
agenda2[1][1] = "60928321";
agenda2[1][2] = "arf@gmail.com";

agenda2[2] = [];
agenda2[2][0] = "Pepito Flores";
agenda2[2][1] = "758694110";
agenda2[2][2] = "ppf@gmail.com";

console.table(agenda2);

//PARTE 2 FIN

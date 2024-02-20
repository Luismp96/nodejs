
//HERENCIA 
//CLASE PADRE

class Animal{
    constructor(){
    }

    respira(){
        return "El animal esta respirando...";
    }
}



//CREAMOS CLASE
class Persona extends Animal{

    //CONSTRUCTOR
    constructor(){
        //HEREDA TODO DE LA CLASE PADRE
        super();
        //DISTINTOS ATRIBUTOS
        this.edad = 0;
        this.nombre="";
    }

    //GETTERS Y SETTERS
    setEdad(nuevaedad){
        this.edad = nuevaedad;
    }
    setNombre(nuevonombre){
        this.nombre = nuevonombre;
    }
    getEdad(){
        return this.edad;
    }
    getNombre(){
        return this.nombre;
    }

    saluda(){
        return "Hola, me llamo " + this.nombre + " y tengo " + this.edad + " años.";
    }
}

//CREAR INSTANCIA DEL OBJETO

var persona1 = new  Persona();

persona1.setEdad(55);
persona1.setNombre("Luis Martin");
console.log(persona1);
console.log(persona1.saluda());
console.log(persona1.respira());
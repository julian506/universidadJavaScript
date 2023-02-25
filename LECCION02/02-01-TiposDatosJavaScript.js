// Ejemplos de tipos de datos en JavaScript

// string
var nombre = 'Julián';
console.log(nombre, typeof(nombre));

// number
var numero = 1000;
console.log(numero, typeof(numero));

// object
var objeto = {
    nombre: 'Julián',
    apellidos: 'Pachón Castrillón',
    telefono: '312341235'
}
console.log(objeto, typeof(objeto));

// boolean
var bandera = true;
console.log(bandera, typeof(bandera));

// function
function miFuncion(){
    console.log('Esto es una función');
    console.log(typeof(miFuncion()));
}

var simbolo = Symbol("Mi simbolo");
console.log(simbolo, typeof(simbolo));

// class -> Son funciones
class Persona{
    constructor(nombre, apellido){
        this.nombre = nombre;
        this.apellido = apellido;
    }
}
console.log(Persona, typeof(Persona));

// undefined
var x;
console.log(x, typeof(x));
x = undefined;
console.log(x, typeof(x));


// null -> Ausencia de valor -> También son objetos
var y = null;
console.log(y, typeof(y));

// array -> También son objetos
var autos = ['BMW', 'Audi', 'Volvo'];
console.log(autos, typeof(autos));

// empty string -> Su tipo es string
var z = '';
console.log(z, typeof(z));
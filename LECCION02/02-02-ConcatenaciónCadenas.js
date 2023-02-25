var nombre = 'Juan';
var apellido = 'Pérez';

var nombreCompleto = nombre + ' ' + apellido;
console.log(nombreCompleto);

// En JS se evalúan las expresiones de izquierda a derecha. Como primero está nombre que es un string, entonces 
// convierte 219 a string y concatena
var x = nombre + 219;
console.log(x);

x = nombre + (2 + 4);
console.log(x);
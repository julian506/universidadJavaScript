// Se puede declarar una variable sin usar let, var o const
nombre = 'Julián';
console.log(nombre);

// La forma recomendada es usar let y directamente la asignación
let nombre2 = 'Julián';
console.log(nombre2);

// También se pueden definir constantes con const
const apellido = 'Pachón';
console.log(apellido);
apellido = 'Castrillón'; // Error porque no se puede reasignar el valor de una constante

// Se pueden declarar 2 o más variables en una misma línea
let x = 10, y = 20;
console.log(x, y);
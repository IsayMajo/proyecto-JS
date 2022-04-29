// los arreglos son estructuras que almacenan informacion en cualquier tipo de dato, es decir, string, int, double, array, objetos, entre otros. Los arreglos tienen operaciones tales como consultar, modificar, insertar y eliminar.
// los arreglos se declaran con corchetes [] 


// creacion de arreglos
var arreglo = [" Juan ", 14];
console.log(arreglo);

// arreglo de arreglos 
var notasestudiantes = [[ " sofia", 4.8],[ " Isa ", 4.6]];
console.log(notasestudiantes);
[Array(2,), Array (2),]

// consultar contenido del arreglo
console.log(notasestudiantes[0]);
[[ " Sofia ", 4.8 ], [ " Isa ", 4.6],]
console.log(notasestudiantes[0][0]);
console.log(notasestudiantes[1][1]);

// modificar elementos
console.log(arreglo[0] + " tiene " + arreglo [1]);
arreglo[1] = 15;
console.log(arreglo[0] + " tiene " + arreglo [1] + " años ");
notasestudiantes [1][1] = 5 
console.log(notasestudiantes [1][0] + " obtuvo " + notasestudiantes [1][1] + " nota final " );

// agregar elemento al arreglo
console.log(" sin agregar " + arreglo);
arreglo.push (" 10a ");
console.log(" agregado " + arreglo);

// agregar elementos al arreglo desde el inicio
console.log(" sin agregar " + arreglo);
arreglo.unshift(" perez ");
console.log(" agregado " + arreglo);

// eliminar elementos al arreglo
console.log(" sin eliminar " + arreglo);
arreglo.pop();
console.log(" eliminado " + arreglo);
arreglo.shift();
console.log(" eliminar.shift " + arreglo);

// ejercicio
// crear el arreglo con los valores


var arreglo = [" analisis ", " tecnologia ", " desarrollo "];
console.log( arreglo );
arreglo [2] = "BBDD";
console.log(arreglo);
arreglo.pop ();
console.log (" eliminado " + arreglo);
arreglo.unshift(" introduccion ");
console.log(" agregado " + arreglo);
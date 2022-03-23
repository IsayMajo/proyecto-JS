console.log("hola mundo");
// comentarios en linea
 /*comentario
 de
 varias
 lineas*/
 

//  variables
var nombreusuario; 
let edadusuario; 
// declarar variable
var nombrevariable; 
// crear variable sin asignar valor
/*inicializar variables:


/*asignar un valor
asignar un valor al momento de inicializar al momento de crear la variable
*/
var gradoestudiante=("10a"); 
/* asignar un valor : 
igualar una variable a un nuevo valor
*/
var edad=17;console.log(edadusuario);
edadusuario=edad;

console.log(edadusuario);

/* asignar valor desd el teclado:

existe dos maneras de hacerlos, la primera es por ventana emergente y la segunda es por medio de un formulario de html 
*/

var valor=prompt("ingrese un valor: ");
console.log("la variable vale " + valor );
 
/*constantes:
son valores que no puden ser cambiados durante la ejecucion del codigo. Las constantes siempre deben ser inicializadas  
*/
const PI=3.1416; 
// imprimir por consola
// simple
console.log("hola");
var grado = "10a";
console.log(grado)
// condenado
console.log(""+valor)
// operadores 
// suma 
var suma;
suma = 5+4;
console.log(suma)
var a = 12;
suma = a+8;
console.log(suma);
var b = 20;
suma = a+b;
console.log(suma);
// resta
var resultado;
resultado = a-b;
console.log(resultado);
resultado = b-a;
console.log(resultado);
// multiplicacion
var producto;
producto = a*b;
console.log(producto);
// division
var division;
division = a/b;
console.log(division);
division = b/a;
console.log(division);
// orden de operacion
var result;
result = a*b;
console.log(result);
result = a*b-10;
console.log(result);
result = a*(b-10);
console.log(result);
// exponente/potencia
var exp = 3**2;
console.log(exp);
exp = 3**3;
console.log(exp);
// cadenas o string
var cadenita1 = "3";
var cadenita2 = "5";
var sumacadenas = cadenita1 + cadenita2;
console.log(sumacadenas);

var nombrecito = "Isabela";
var apellidito = "Ruiz";
var nomcompleto = nombrecito + "  " + apellidito;
console.log(nomcompleto);
var longitud = nombrecito.length;
console.log(longitud);
console.log(nomcompleto.length);
//encontrar caracteres dada la posicion en el vector
var primeraletra;
primeraletra = nombrecito[0];
console.log(primeraletra);
console.log (nombrecito[1]);
//encontrar la ultima posicion de una cadena o vector
console.log(nombrecito[nombrecito.length - 1]);
 //se debe buscar la longitud de la cadena de restarle uno para encontrar la ultima letra
 //valores inmutables
 //las posiciones de una cadena se pueden consultar pero no reasignar su valor
 nombrecito[0] = "H";
 console.log(nombrecito);
 nombrecito = "Maria";
 console.log(nombrecito);
 //parseo o casting
 /*se trata de convertir las variables a otro tipo de datos, los cambios existentes son:
 *a entero parseInt()
 *a decimal parseFloat()
 *a cadena String()
 */
//convertir variable
var entero1=prompt("ingrese un entero");
var entero2=prompt("ingrese otro entero");
var sumaE=entero1+entero2;
console.log("sin parseInt" + sumaE);
//forma 1
/*convertir el dato justo en el momento en que se recibe por teclado 
esto implica que cuando se llame la variable ya este convertida al tipo de dato deseado
*/
entero1=parseInt(prompt( "ingrese un entero:  "));
entero2=parseInt(prompt("ingrese otro entero:  "));
sumaE=entero1+entero2;
console.log("convertido " + sumaE);
// perimetro
var P
var alt
var bas
alt=3;
bas=5;
P= alt + bas + alt + bas
console.log("el perimetro del rectangulo es" + P)
// primer punto

// crear variables
var metros;
var kilometros;

// solicitar valor al usuario
metros = prompt ("por favor ingrese el valor en metros");
// operacion
kilometros = metros / 1000;
// mostrar mensaje
console.log("la equivalencia de " +metros+ "m en km es " + kilometros+ "km")

// segundo punto
var distanciaAvion;
var combustible;
distanciaAvion = parseInt (prompt ("ingrese la distancia que volo en km"));
combustible = distanciaAvion * 2,9;
console.log(" el combustible que ha gastado en su vuelo es  " + combustible + "L");

// tercer punto
var kilolitros
kilolitros = combustible / 1000
console.log(" la equivalencia de " + combustible + " L a kilolitros es " + kilolitros + " KL ") 

// cuarto punto
var diametrocirculo;
var areacuadra2s;
var circunferenciacuadra2s;
var vesfera;
diametrocirculo = prompt (" ingrese el diametro del circulo ");
areacuadra2s = diametrocirculo / 2;
circunferenciacuadra2s = 2 * ( 3.1416);
console.log(" el radio del circulo es " + areacuadra2s + " y la circunferencia es" + circunferenciacuadra2s );
vesfera = ( 4 / 3 ) * 3.1416 * ( areacuadra2s ** 3 );
console.log (" el volumen de la esfera es " + vesfera );
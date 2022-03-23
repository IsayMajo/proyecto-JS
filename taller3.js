// punto 1
var litros;
var tiempo;
litros = prompt (" ingrese los litros que arroja ");
tiempo = litros * 1 / 145;
console.log (" la piscina tarde en llenarse en  " + tiempo );

// punto 2
var metros;
var milimetros;
metros = prompt (" por favor ingrese el valor en metros ");
milimetros = metros * 1000;
console.log(" la equivalendia de " + metros + " m en mm es " + milimetros + " mm ");

// punto 3
var decimetros;
decimetros = milimetros / 100;
console.log(" la equivalencia de " + milimetros + " mm en dm " + decimetros + " dm "); 

// punto 4
var kilometros;
kilometros = decimetros / 10000;
console.log(" la equivalencia de " + decimetros + " dm en km " + kilometros + " km " );

// punto 5
var tiempo;
var costo;
tiempo = prompt (" de cuanto fue la duracion de su llamada ");
costo = tiempo * 60 * 120; 
console.log (" el costo de los minutos son " + costo );

// punto 6
var horas;
var dinero;
horas = prompt (" cuantas horas tardo su clase ");
dinero =  40000 + (25000 * ( horas - 1 ));
console.log (" el dinero de las horas es " + dinero );

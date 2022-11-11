console.log("hola");

function saludo(){
    console.log("¿que tal?");
}
//llamado a la funcion(mala)
saludo();
function suma(){
var numero1=2;
var numero2=4;
console.log(numero1+numero2);
}
//nuena 
function sumita(){
    var numerito1=10;
    var numerito2=12;
    return numerito1+numerito2;
    
}
console.log(sumita());

//funcion con parametros
function sumar (num1,num2) {
    return num1 + num2;
}
console.log(sumar(3, 8));
//diseñe un algoritmo que retorne el doble de la 
//suma entre dos numeros
sumaNumeros=sumar(1,2);
function dobleNumero (sumaNumeros){
    return sumaNumeros*2;
}
console.log("el doble de la suma es:"+ dobleNumero(sumaNumeros));

/*SOLUCION 2
una funcion puede  ser llamada por otra
*/ 
function dobleNumero(num1, num2){
    return sumar (num1, num2)* 2;
}


var resultado = dobleNumero (5, 10);
console.log(" doble de la suma de dos numeros es " + resultado);

//Isabela Ruiz y Maria Jose Henao 
//taller2

//punto1
console.log(" punto1 ")
var ciclo1=0;
while ( ciclo1 < 7 ) {
console.log(" se repite " + ciclo1 );
ciclo1+= 1;
}

//punto2
console.log(" punto2 ")
var ciclo2=0;
while( ciclo2 <= 30 ) {
console.log(" son multiplos de tres: " + ciclo2);
ciclo2+= 3;
}

//punto3
console.log(" punto3 ")
var ciclo3=0;
while( ciclo3 <= 50 ) {
console.log(" este numero es par " + ciclo3);
ciclo3+= 2;
}

//punto4
console.log(" punto4 ")
var ciclo4=1
var impar=prompt ( "ingrese un numero" )
while ( ciclo4 <= impar ) {
console.log( "este numero es impar: " + ciclo4 )
ciclo4 += 2;
}

//punto5
console.log(" punto5 ")
var ciclo5 
ciclo5=prompt(" ingrese un numero ")
while((ciclo5 % 2)==0) {
console.log(ciclo5 + " es un numero par ")
ciclo5=prompt(" ingrese un numero ")
}

//punto6
console.log(" punto6 ")
var ciclo6=0
var edad;
var estudiantes=parseInt(prompt(" ingrese la cantidad de estudiantes "))

var acu

while(ciclo6<estudiantes) {
    var edad=parseInt(prompt("ingrese su edad"));
    acu+= edad
    ciclo6+=1;
}
console.log("el acumulado de edades es")    







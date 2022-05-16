

var CantSaludos = 0; //variable que cuenta la cantidad de saludos
 
while(CantSaludos < 5){ //se repite mientras la cantidad de saludos <5
    console.log("Hola "); //es la intruccion que se repite mientras el ciclo funciona
    CantSaludos += 1; //conteo de saludos se suma 1 con cada vuelta del ciclo 
}

//pregunta 1
//cambiar el 5

//pregunta 2
//3 veces


/*
var respuesta ="si";
 
while(respuesta=="si"){
    console.log("Dijo sí");
    respuesta=prompt("ingrese un valor");
}

*/

var valor = true;
var respuesta2;
 
while(valor){
    console.log("valor es " + valor);
    respuesta2=prompt("ingrese un valor 1 verdadero 0 falso");
    if(respuesta2 == 0){
        valor = false;
    }      
}



//taller de repaso ciclo white

//punto1

var ciclo1 = 0;
while ( ciclo1 < 5 ) {
console.log( 2 );
ciclo1+= 1; }

//punto2
var ciclo2=0;
while ( ciclo2 < 8 ) {
console.log(" va en la iteracion " + ciclo2 );
ciclo2+= 1;
}

//punto3
var ciclo3=0;
while( ciclo2 < 10 ) {
console.log(" va en la iteracion " + ciclo3);
ciclo3+= 2;
}

//punto4
var ciclo4= prompt (" ingrese ok para parar");
while ( ciclo4 != "ok" ) {
console.log(" dijo " + ciclo4 )
ciclo4=prompt (" ingrese ok para parar ");
}


//punto5 
console.log(" punto 5 ");
var ciclo5=prompt (" ingrese un negativo para detenerse");
while ( ciclo5>= 000) {
console.log(" dijo " + ciclo5)
ciclo5= prompt (" ingrese un negativo para detenerse");
}

//punto6
console.log(" punto 6 ");
var suma=0
var num1;
var num2;
while ( suma <=20) {
num1=parseInt( prompt("ingrese un valor "))
 num2=parseInt(prompt("ingrese otro valor"))
suma=num1+num2;
}




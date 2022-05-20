//Isabela Ruiz y Maria Jose Henao
//punto1

 console.log("punto1")
 var max = prompt(" ingrese el numero hasta donde quiere conocer los multiplos de 5");  
 var contador = 0;
 while ( contador <= max){
     if ( contador % 5 == 0) {
     console.log(" el " , contador , " si es multiplo de 5");
 }else { 
     console.log(" el " , contador, " no es multiplo de 5");
  }
  contador++;
 
}


//punto2
 console.log(" punto2 ") 
 var ciclo2=0
 var precio;
 var articulos=parseInt(prompt(" ingrese la cantidad de articulos ")) 

 var total=0

 while(ciclo2<articulos) {
    var precio=parseInt(prompt("ingrese el precio de cada articulo"));
    total+= precio
    ciclo2+= 1;
}
 console.log("el total a pagar es" + total )   

//punto3  
  console.log(" punto3 ")
var ciclo3= prompt (" ingrese no para parar");
var total2 = 0
while ( ciclo3 != "no" ) {
var precios=parseInt(prompt("ingrese el precio de cada articulo"));
 total2 += precios
ciclo3=prompt (" ingrese no para parar ");

}
console.log("el total a pagar es" + total2 ) 


//punto4 
console.log(" punto4 ")
var valortotal = 0;
var ciclo4 = 0;
var respuesta4=prompt(" si desea ingresar un articulo ponga si y si no lo desea ponga no ")
while ( respuesta4== "si") { 
  var precio=parseInt( prompt("ingrese el valor del articulo"));
  valortotal +=precio
  respuesta4=prompt(" si desea ingresar un articulo ponga si y si no lo desea ponga no")
 }
 console.log(" el valor total es " + valortotal)
 if (ciclo4>= 25) { 
   var descuento = valortotal*0.8
   console.log(" ya con el descuento el precio total es de " + descuento)
   } else if (ciclo4>=15) { 
     var descuento = valortotal*0.85
     console.log(" ya con el descuento el precio total es de " + descuento) 
 } else if (ciclo4 >= 8) { 
   var descuento = valortotal*0.90
   console.log(" ya con el descuento el precio total es de " + descuento)
 } else {
   console.log(" su compra tiene descuento")
   }

   //punto5
   console.log(" punto5 ") 
   var perdidas = 0
   var cantinota = parseInt(prompt(" ingrese la cantidad de notas que hay en el curso"));
   var notaactu
   var ciclo5 = 1
   var gano = 0

   while (ciclo5 <= cantinota){
     var notaactu=parseFloat(prompt("ingrese la nota final del estudiante" + ciclo5));
     ciclo5 += 1

     if(notaactu>= 3.5){ 
       console.log (" el estudiante gano la materia ")
       gano +=1
       } else {
         console.log(" el estudiante perdio la materia")
         perdidas += 1 
       }
       } 
if(gano<=perdidas){ 
  console.log(" debe abrirse el curso de verano ")
 }else{
   console.log(" la cantidad de estudiantes no es suficiente para el curso de verano ")
 }


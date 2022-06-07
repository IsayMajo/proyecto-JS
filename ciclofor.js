
console.log(" punto1 ")
for(var i=1;i<=10;i++){
    console.log(i)
}

console.log(" punto2 ")
for(var i=10;i>=1;i--){
    console.log(i)
}

console.log(" punto3 ")
var limite=prompt(" ingrese el limite ")
var sumatoria=0
for(var i=0; i<= limite; i++){
    sumatoria+= i;
}
console.log(sumatoria)

console.log(" punto4 ")
var inicio=parseInt(prompt(" ingrese el inicio "));
var fin=prompt (" ingrese el fin ");
for(var i=inicio; i<=fin; i++) {
    if(i%2==0){
        console.log(i);
    }
}


console.log(" punto5 ")
var arreglonombres=[];
for(var i=0; i<5; i++) {
    var nombre=prompt(" ingrese un nombre ");
    arreglonombres.push(nombre);
}
console.log(arreglonombres);


console.log(" punto6 ")
for(var  i=0; i<arreglonombres.length;i++){
    console.log(" el nombre " +i+ " es " + arreglonombres [i]);
}
//console.log(arreglonombres)
var cantinotas = parseInt(prompt(" ingrese la cantidad "))
var arreglonotas=[];
for(var i=0; i<cantinotas; i++){
    var nota=parseFloat(prompt(" nota " + (i+1)));
    arreglonotas.push(nota);
}


console.log(" punto7 ")
var sumatoria=0;
for(var i=0; i<cantinotas; i++){
    sumatoria=arreglonotas[i];
}
var promedio=sumatoria/cantinotas;
console.log(" el promedio de notas es " + promedio);



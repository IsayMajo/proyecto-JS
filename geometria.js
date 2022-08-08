//Isabela Ruiz 
//punto 2

function suma(num1, num2){
    var resultado = num1 + num2;
var mensaje =  resultado;
return resultado;
}
function resta(num1, num2){
    var resultado = num1 - num2;
var mensaje =  resultado;
return resultado;
}
function division(num1, num2){
    var resultado = num1 / num2;
var mensaje =  resultado;
return resultado;
}
function Multiplicacion(num1, num2){
    var resultado = num1 * num2;
var mensaje =  resultado;
return resultado;
}
function Potencia(num1, num2){
    var resultado = num1 ** num2;
var mensaje =  resultado;
return resultado;
}


    //punto 3
    function main_geometria(){
    var eleccion=prompt(" por favor ingrese si es area o perimetro \n 1.area \n 2.perimetro")
    var eleccionfigura=prompt(" escoja su figura \n 1.cuadrado \n 2.circulo")
    var figura1=parseFloat(prompt("porfavor ingrese el valor de sus lados"));
    var figura2=parseFloat(prompt("porfavor ingrese el valor de sus lados"));
    if(eleccion =="1"){
        if(eleccionfigura == 1){
            console.log(Multiplicacion(figura1, figura2));
        }else if (eleccionfigura == 2){
            var radio= potencia(figura1, 2)
            console.log(multiplicacion(radio, 3.14))
        }

    }else if(eleccion=="2"){
        if(eleccionfigura == 1){
            console.log(Multiplicacion(figura1, 4));
        }else if (eleccionfigura == 2){
            var radio= multiplicacion(figura1, 2)
            console.log(multiplicacion(radio, 3.14))
    }
       
    }   

    }
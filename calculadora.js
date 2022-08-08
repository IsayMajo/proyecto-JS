function suma(num1,num2){
    var resultado = num1 + num2;
    var mensaje = "el resulatdo de sumar " + num1 + " y " + num2 + " es " + resultado;
    return mensaje;
}
function resta(num1,num2){
    var resultado = num1 - num2;
    var mensaje = "el resulatdo de la resta " + num1 + " y " + num2 + " es " + resultado;
    return mensaje;
   }
   function multiplicacion(num1,num2){
    var resultado = num1 * num2;
    var mensaje = "el resulatdo de la multiplicacion " + num1 + " y " + num2 + " es " + resultado;
    return mensaje;
   }
   function divicion(num1,num2){
    var resultado = num1 / num2;
    var mensaje = "el resulatdo de la divicion " + num1 + " y " + num2 + " es " + resultado;
    return mensaje;
   }
   function potencia(num1,num2){
    var resultado = num1 ** num2;
    var mensaje = "el resulatdo de la potencia " + num1 + " y " + num2 + " es " + resultado;
    return mensaje;
   }
    function main_calculadora (){
        var eleccion=prompt("por favor ingrese el numero de la operacion que desea realizar: \n 1.sumar \n 2.resta \n 3.division \n 4.multiplicacion \n 5.potencia")
 
        var numero1=parseFloat(prompt("porfavor igrese el primer valor:"));
        var numero2=parseFloat(prompt("porfavor igrese el segundo valor:"));
        if(eleccion =="1"){
        console.log (suma(numero1,numero2));
       }else if(eleccion=="2"){
        console.log(resta(numero1, numero2));
       }else if(eleccion=="3"){
        console.log(divicion(numero1, numero2));
    }else if(eleccion=="4"){
        console.log(multiplicacion(numero1, numero2));
    }else if(eleccion=="5"){
        console.log(potencia(numero1, numero2));
    
       }
       
    }
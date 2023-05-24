function calcularVelocidad(distancia,tiempo) {
    var distancia = 800 ;
    var tiempo =  10;
    operacion = distancia / tiempo;
    console.log("El objeto fue a una velocidad de " + operacion + "KM/H");
    
}
calcularVelocidad();


function calcularVelocidad(distancia,tiempo) {
    velocidad = distancia / tiempo;
    console.log("El objeto fue a una velocidad de " + velocidad+ "KM/H");
}
calcularVelocidad(20,5);

var valorA = prompt("Introduce el valor de A");
var valorB = prompt("Introduce el valor de B");
var valorC = prompt("Introduce el valor de C");

function formulaGeneral(){
    interiorRaiz= (valorB * valorB)- (4 * valorA* valorC)
    raiz= Math.sqrt (interiorRaiz);
   // if (condition) {
        
   // }
    primerValor = (-valorB + raiz)/ (2*valorA);
    segundoValor = (-valorB - raiz)/ (2*valorA);

    console.log("El primer valor de X es " + primerValor, "el segundo valor de X es " + segundoValor);
}
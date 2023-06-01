/*

Bucles e iteraciones o repeticiones

en js es un bucle es una estructura de control que permite repetir un bloque de instrucciones, o lo que es lo mismo repetir una tarea tantas veces que queramos, gracias a esto automatizamos tareas repetitivas.

-While (mientras)
-Do while (hacer mientras)
-For (Para)

While (mientras)
Nos permite repetir un ciclo tantas veces quisieramos, prgunta constantemente hasta que termina la condicion.

---Este bucle nos sirve para realiza una tarea repetititva, mientras una condicion sea VERDADERA. A diferencia del if, que pregunta una vez y despues ejecuta el bloque de codigo, el while pregunta continuamete la condicion y ejecuta el bloque de codigo hasta que la condicon devueva FALSE.


*/


//Estructura basica de una while
/*
while (tenerSuenio){
    Hacer la dormicion;
}

Ejemplo de un cilo o bucle 
while (true){

    amarAMiCrush ();
    noAmarANadieMas;
} 


let rolDeUsuario ="registrado";

while (!"registrado") {
   function registrarUsuario (){
        console.log("Usuario Registrado");
   }

 }


 dejaloComprar ();





casos de uso de un ciclo While
    -Para verificar si un usuario esta registrado o no
    -Verificamos la disponibilidad de un producto(stock)
    -Realizar acciones sobre nuestro carrito de compras (revisar productos, aplicar descuentos, impuestos, actualizat informacion, etc..)
    -Recorrer publicaiones de un suaruo
    -Contador de likes
    -Seguimiento de segidores


*/

//let Felipe = "listaDeAmigos"
//let Fernanda= "bloqueada";

//while ("listaDeAmigos") {
    //console.log("Mostrar publicaiones");
    
//}






//codigo de mi sopita de verduritas con pollito
//Declaro e inicializo un array con mis ingredientes

var ingredientes= ["zanahoria", "cebolla", "apio", "papa", "espinacas", "pollito"]; //tenemos 6 elementos

//Declaramos una varaible llamada contador inicializada en 0, para usarla como un contador
var ingredientesAgregadosALaOlla = 0;

//mientas los ingredeintes agregado a la olla sean menos que los ingredientws que me quedasn disponibles...
while (ingredientesAgregadosALaOlla < ingredientes.length){


    //....ire agregando ingredientes a la olla ...
    console.log("agregando " + ingredientes [ingredientesAgregadosALaOlla]+ " a la olla");

    // y voy aumentando el contador para saber cuanso parar.
    ingredientesAgregadosALaOlla ++;

}
console.log("la sopita ya esta lista, yumi");

/*

Do - While (hacer mientras)

Es similar al while, con la diferencia de que la condicion se evalua despues de cada iteracion. Esto garantiza que el bloque de codigo se ejecute al menos una vez, incluso si la condicion inicial es falsa



do {
    //bloque de codigo que vamos a ejecutar
} while (condicion);


*/

console.log( "ejemplo de galletas con DO-While");

//variable tiempo de coccion que servira como contador
var tiempoTranscurridoDeCoccion =0;
//Usamos el ciclo do.while

do{
    console.log("horneando las galletas...");
    tiempoTranscurridoDeCoccion +=5;



    /*todo el bloque de codifo se va a evaluar mientras el tiempo de coccio sewa menor a 30 minutos. Esto es por que las galletas se pueden conicnar en 5, 10, 15, 20 o 25 minutos teniendo un maximo de 30. Si pasamos de se tiempo, puede que las galletas se quemen.*/

    //esto es como si revisaamos el horno casa 5 minutos
} while (tiempoTranscurridoDeCoccion <30); {
    console.log("las galletas estan listas");
}



/*For (para)

Se utiliza cuandos se conoce el numero exacto de iteraciones que se realizaran. Consiste en tres partes: inicializacion, condicion y expresion final.
El bloque de codigo se ejecuta mientras la condicion sea verdadera, y despues de cada iteracion se ejecuta la expresion final.


for (inicializacion; condicion ; expresion de iteracion){
    //Bloque de codigo a ejecutar
}


 - inicializacion: se ejecuta antes de que el bucle comience, y se utiliza para establecer una variable de control (contador)

 - condicion: se verificar antes de cada iteracion, y si se evalua como verdadera, el bucle se ejcuta. 

 - expresion de iteracion: se ejecuta al final de cada iteaciones, y se utiliza para actualizar o modificar la variable de control.


*/


//imprimirAsteriscos();
console.log("ejemplo de la pizza con For");



//Definir mi lista de pasos
var pasosDeRecetas =["preparar la masa", "agregar los ingredientes", "hornear la pizza"]; //tnemos 3 pasos

//Definir mi lista de tiempo por paso
var tiempoPorPaso =[15,10,20];

//En el ciclo for, para cada paso, se tiene un tiempo estimado. 

//para cada paso de la lista, voy a tomar en cuenta el tiempo que se necesita para hacerlo. Cada que vaya cumpliendo un paso, voy incrementado mi variable paso para saber cuantos pasos me queda pendiente. Cuando ya no hay pasoso, termina el proceso. 
for (var paso = 0; paso < pasosDeRecetas.length; paso++) {
    console.log("Realizando paso" + pasosDeRecetas[paso]);
    console.log("Esperando "+ tiempoPorPaso[paso]+ " minutos");
}

console.log("Disfruta tu pizza");



//Ejemplo contador con FOR (contador de un cohetes)

for (let i=10; i>0; i--){
    console.log("faltan " +i+ " segundos para el despegue");
}

//Ejemplos de for para cupones de descuento
for (let cupones =10; cupones>0; cupones-- ){
        console.log("Tenemos un total de " + cupones + " cupones disponibles");

}
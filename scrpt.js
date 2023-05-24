

//Peso de los payasos y muñecas en gramos
pesoPayaso = 112;
pesoMuñeca = 75;
//Los datos de el ultimo pedido
payasoVendido =27;
muñecaVendida =14;
//operaciones del envio
pesoVendidoPayaso = pesoPayaso * payasoVendido;
pesoVendidoMuñeca = pesoMuñeca * muñecaVendida;
totalDelPedido= (pesoVendidoPayaso + pesoVendidoMuñeca )/1000;
//Imprime el resultado  
console.log("Peso total del Paquete:" + totalDelPedido+ "kg");

/*
/*
Variable
Es un elemento del cual su valor puede cambir o variar dependiendo las circunsatancias
podria conciderarse un espacio de memoria. esta variable ocupa un espacio de memoria y dependiendo su valor o del elemento dentro de este espacio, es el tipo de variable que tenemos.  
Variable = recipiente donde pondremos el valor
Valor = la informacion con la que llenamos el recipente

Declarar = Ponerle nombre a nuestro recipiente
Inicializar = Llenar ese recipiente
*/
recipiente = "Agua";
recipiente = "Cafe";
recipiente = "Lapices";
recipiente = "Leche";
//Iniciamos esta linea de codigo para imprimir o mostrar la informaicon de mi recipiente
console.log(recipiente);
/*
QuieresSerMiNovio;
Edad;
Altura;
Peso;
Genero;
*/


/* Tipos de datos, primitivos y no primitivos
    -String: Sirven oara gregar valor en forma de texto . Para que se concidere asi el elemento o valor debe star dentro de comillas simples (''), dobles ("") y backticks(``)


    -Number: Sirven para agregar valores en formato numerico (para poder usarlos enoperaciones aritmeticas). Estos valores no usan comillas.
    
    
    -Boolean: Sircen para repsenrttar valores del tipo true o false(pueden ser encendido o apagado,  0 y 1,  si y no ).


    -Undefined: Sirve para representar un tipo de dato que no tiene valor. Cuando declaramos variables sin inicializar, tendremos datos del tipo undefined.



    -Null: Sirve para definir que un valor es nulo

    -noN (not at Number):Sirve para representar un valor que no es un numero. lo obtenemos si hacemos una operacion con una variable que no es un numero o con una operacion que no es posible.


    -Symbol
    -Object (no es primitivo)

    se le conoce como primitivos por que son datos que no puedens er modificados, ya vivenen con el lenguaje y se consideran el dato mas basico que existen dentro de la programacion. 



*/

//Ejemplo de la concatenación

apododefelipe = "Amante 'numero' uno de los chilaquieles verdes";
console.log(apododefelipe);


// Ejemplos de valores Numericos
edadDeFelipe = 31;
costoDeUnGansito = 18.50;
cuentaDeFelipe = -158.23;


console.log(edadDeFelipe);
console.log(costoDeUnGansito);
console.log(cuentaDeFelipe);



//Ejemplos de valores numericos/boolaneos
esAdministrador = true;
contraseñaCorrecta = false;
CuentaPremium = false;

/*Ejemplos de undefined
respuestaDeMiCrush;
precioBoletoEstacionamiento;
console.log(respuestaDeMiCrush);
*/

//Ejemplos de valores Nulos
respuestaDeMiCrush = null;
console.log(respuestaDeMiCrush);

//Ejemplo de NaN
OperacionMatematica = 0 / 0;
console.log(OperacionMatematica);



/*typeOf
Es una expresion que nos ayuda a saber que tipo de datos es el que nos estamos evaluando
typrof(elDatoEvaluar);
todos los resultados que arroja son cadenas con el tipo de datos que estamos evaluando.


*/

console.log(esAdministrador);
console.log(edadDeFelipe);
console.log(OperacionMatematica);


console.log(typeof (esAdministrador)); //boolean
console.log(typeof (edadDeFelipe)); // number  */


/*Tipos de variables

En JS tenemos 3 tipos principales de variables:


    - var: Era la forma principal de declarar variables. Es una variable muy flexible, tiene un scope (alcance) global, esto es, que el valor de esta variable esta disponible en todo el programa. 


    - let: Lo usamos para limitar el alcance de nuestras variables (scope), y si limita a un bloque de codigo o expresion (meter a la mama de bambi en una cajita), es una variable local.
 


    - const: Se usan para declarar una variable con un valor constante o inmutable (que no cambia). 



*/

var mamDeBambi = "false"
var cazador = "listo para disparar";
let nombre ="felipe Maqueda";
const pi =3.1416

/*
Funciones 

Una funcion es una agrupacion de instrucciones que se ejecutan cuando de llama o de invoca. Las funciones pueden recibir parametros y devolver valores. Es importante mencionar que las funciones no se ejecutan sino que se invoca.

Parametros =variable que necesitamos para alimentar mi funcion (todas las variables se tienen que utilizar)

Ejemplo: Limon, Azucar, Vasito de agua, Cuchara, Hielo, eagua.


Nombre para la funcion = Con el nombre, nosotros vamos a poder activar o invocar la funcion (basicamente, tenemos que llamrla para que funcione )
        Ejemplo: prepararAguitaDeLimon


Operaciones: conjunto de instrucciones (en orden especifico, como el sacar el indice de masa corporal)
        Ejemplo 1) Cortar Limon; 2) Exprimir Limon; 3) etcc...


Resultado: Las funciones generalmente deben tener un resultado.
        Ejemplo Vasito de agua de limon.
*/

/*1.- Creamos la funcion con la palabra rreservada y le ponemos un nombre. Despues, abrimos y cerramos parentesis() y abrimos y cerramos llaves {}
 el uso de las parentesis () es para abriri y cerrar parametros o argumentos y el uso de las llave {} demarca el limitar el bloque o la funcion 
 2.- Ponemos nuestros parametros (variables) dentro de los parentesis

 3.- Poner las instrucciones dentro de las llaves, utilizando los paametros o argumentos
 4.- Invocar la funcion escribiendo su nombre y abrimos y cerramos parentesis. 
 
 */
    let limon= " limon";
    let agua= " agua";
    let hielos= " Hielos";
    let azucar= " azucar";
    let vaso= " vaso";
    let cuchara= " cuchara";

function prepararAguitaDeLimon(limon, agua, hielos, azucar, vaso, cuchara) {
    
    var limon= " limon";
    var agua= " agua";
    var hielos= " Hielos";
    var azucar= " azucar";
    var vaso= " vaso";
    var cuchara= " cuchara";
    /*
    let limon= " limon";
    let agua= " agua";
    let hielos= " Hielos";
    let azucar= " azucar";
    let vaso= " vaso";
    let cuchara= " cuchara";
 */
    console.log("Cortar el limon" + limon);
    console.log("Exprimir el limon");
    console.log("Agregar el jugo de limon al vaso"+ vaso);
    console.log("Agregar los hielos al vaso"+ hielos);
    console.log("Agregar el agua al vaso"+ agua);
    console.log("Endulzamos al gusto"+ azucar);
    console.log("Mezclar y disfrutar"+ cuchara);
    console.log("Que rica aguita de limon :) ");
var cuchara= " tenedor"
}
prepararAguitaDeLimon();



// Ejemplo de las 3 formas de agregar parametros o funciones


//primera forma:Usando parametros dentro del parentesis e inicializando dentro de la funcion 

function suma(a,b){//valores estan en undefined (declaro)
var a= 5;//cambio el undefined por 5
var b= 7;//cambio el undefined por 7

operacion= a+b;//Hago mi suma utilizando dos valores
console.log(operacion);//Imprime mi operacion
}

suma();//Invocamos la funcion

//segunda forma; usando los valores dentro del parentesis, ya inicializados

function resta(a = 8, b = 5) {
    operacion= a - b;
    console.log(operacion);
    
}

resta();

//tercera forma; inicializando valores dentro de la invocacion
function multiplicacion(a, b) {
    operacion= a*b;
    console.log(operacion);
}


multiplicacion(3,5);
multiplicacion(8,6);
multiplicacion(9,3);
multiplicacion(3,5);
multiplicacion(1,5);
multiplicacion(3,7);
multiplicacion(8,4);
multiplicacion(12,6);
multiplicacion(2, ); //Se imprime NaN por que nos falta un parametro    

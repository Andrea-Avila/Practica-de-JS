

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


/*
 Arreglos (array, matrices, colecciones de datos)

En JavaScript, un array es un objeto. Esto porque es un elemento especial que tiene propiedades y métodos propios de los objetos. Además, al ser un objeto, puede ser accedido principalmente mediante índices numéricos (claves). 

Es importante mencionar que aunque los arrays sean un objeto, éstos están diseñados específicamente para almacenar y manipular conjuntos ordenados de datos. Los arrays ofrecen características y funcionalidades específicas para trabajar con elementos indexados numéricamente, lo que los distingue de los objetos regulares en JavaScript.



 */


//Formas de declarar un array o un arreglo
//1. Udando los corhcetes []

var miArray =[1, 2, 3, 4, 5, 6]
//Variable sin inicailizar
var colores;
//Areglo sin asignar a una variable 
["Azul", "Rojo", "Naranja", "Verde"]

//Variables colores declarados e inicializados
var colores = ["Azul", "Rojo", "Naranja", "Verde" ["Verde pastel", "Amarillo", "Rosa pastel" ]]

//Podemos tener distintos tipos de datos en un mismo arreglo
var datosFelipe = ("Felipe", 31, "Guadalajara", "Nikky", true, undefined, null );

 //Cada asignatura esta asociada a una variable individual

 var asignatura1 ="Matematicas";
 var asignatura2 ="Literatura";
 var asignatura3 ="Fisica";

 //Array
 var asignatura = ["Matematicas", "Literatura", "Fisica"];
console.log(typeof(asignatura));

//aceso o elemento de un arreglo
console.log("El elemento en la posicion 2 de mis asignaturas es: ", asignatura [2]);

//Si accedemos a un elemento que no exisste, nos mostrara un endefined porque el espacio existe pero no tieene ningun valor
console.log("El elemento en la posicion 2 de mis asignaturas es: ", asignatura [10]);

//Mostrar la longitud de mi arreglo
console.log(asignatura.length);


//Ejemplos de arrays
//Array carrito de compras
var carrito = ["Pantalones", "Camisas", "corbata"]
var publicacion =["Felipe","137","19-Mayo-2023"]

//Modificar los elementos dentro de arrays

//Reasignamos el valor a un elemento de nuestro arreglo por medio de su index
publicacion [1]= 138;
console.log(publicacion);


//No teniamos un elememto ne la posicion (index) 4 (indefinido =150)
publicacion [4] = 150;

//Metodo para agregar elementos al final de un arreglo
asignatura .push ("Biologia");
asignatura .push ("Ingles");
console.log(asignatura);

//Metodo para eliminar el ultimo elemento de un arreglo

asignatura .pop();
console.log(asignatura);



//Metodo para agregar elementos al principio de un arreglo
asignatura .unshift ("Quimica", "Educacion Fisica", "Artes");
console.log(asignatura);

//Metodo para eliminar elementos de un principio de un arreglo
asignatura .shift();
console.log(asignatura);

//Metodo para saber si mi arreglo incluye un elemento especifico

let carritoDeWalmart = ["Gansitos", "coquita", "Galletas Marias", "Mazapan"];
regalo = carritoDeWalmart .includes ("coquita");

if (regalo == true) {
    console.log("Te regalo un sarten");
}

var amigos = ["Felipe", "Mariana", "Fernanda", "Maara", "Gaby"]
var mejoresAmigos;
var publico;

if (!amigos) {
console.log("Mi meme de bob esponja");    
    
}

//Metodo para concatenar elementos
var listaDeGolosinas = ["Gansitos", "coquita", "Galletas Marias", "Mazapan"];
var listaDeFrutasyVerduras= ["Manzana", "Mangos", "Toronja", "Platanos", "Fresas"]

var listaDeComprasDeLaQuincena = listaDeGolosinas .concat(listaDeFrutasyVerduras);
console.log(listaDeComprasDeLaQuincena);

//Metodo para buscar un elemento en un arreglo y devolver el indice de su primer aparicio. Si el elemento no se encuentra, retorna -1

console.log(listaDeComprasDeLaQuincena.indexOf("Toronja"));

console.log(listaDeComprasDeLaQuincena.indexOf("Chicharrones"));

//Metodod para unir elementos de un arreglo en una cadena de texto
console.log(listaDeComprasDeLaQuincena .join('\n'));

console.log("Resumen de compra");
//Metodo para unir elementos de un arreglo en una cadena de texto
console.log(listaDeComprasDeLaQuincena.join(" *** "));


//Metodo para ocupar el elemento reverse
var animesPorVer= ["jojo's", "Jujutsu Kaisen", "Toyoko Revengers", "Overlord", "Assasination Classroom"];

//console.log( animesPorVer.reverse());Nos muestra el arreglo del ultimo elemento al primero osea al reves 
//console.log( animesPorVer.sort()); //Nos muestra el arreglo de manera ordenada alfabeticamente. 
//Nota si combinamos el reverse con el sort nos lo ordena alfabeticamente en reversa empezando con Z hasta la A
//console.log( animesPorVer.toString()); // Nos devuleve el arreglo como formato de texto y separado con comas 
//animesPorVer .splice(2, 0, "Naruto", "One Piece"); //Agrega un nuevo arreglo en el espacio que se le determino
//console.log(animesPorVer);



//Modificacion del arreglo (Push, Pop, shift, unshift, splice)

//Acceso y bsuqueda de elementos (indexOF, lastIndexof, Incluides)

//Transformacion de elementos (short, reverse, map, forEach)

//Operaciones logicas (every, some)

//Creacion de nuevos arreglos (slice, concat, join, reverse)



/*Metodo Splice, nos permite agregar, eliminar o reeemplazar elementos en posiciones especificas)
Sintaxis del splice

array .splice (Iniciamos, numeroElementoABorrar, ElementoAInsertar, elementoAInsertar);

*/
//Splace para borrar elementos
var abcedario = ["A", "B", "C", "D", "E"]; 

abcedario .splice (2,2);
console.log(abcedario);

//Splice para insertar elementos

abcedario.splice(2,0, "C","D");
console.log(abcedario);

//Splice para reemplazar elementos del arreglo
var vocales =["A", "E", "I", "O", "U"];

vocales.splice(1, 2, "COMER", "COMER", "COMER"); //nos reemplaza los datos E,Y para agregar tres frases mas que son comer ,comer, comer
console.log(vocales); //nos imprime el areglo




/*DOM

Cuando aprendemos a crear paginas web, normalmente comenzamos con la construccion de sitios que estan estructurados con HTML y que tienen CSS como fuente de estilo. Hasta este momento, nuestras paginas son estaticas. Si nosotros queremos convertir estas paginas a paginas dinamicas, debemos agregar JavaScript a la ecuacion. Debemos recordar que cuando hablamos de paginas dinamicas, nos referimos a paginas que cambian de acuerdo a los datos que nos envie el usuario, esto con el fin de brindar una experiencias mucho mas completa, ademas de tener tareas o acciones que se puedan automatizar.

DOM significa Document Object Model, o modelo de objetos de documento. Podemos hacer una analogia con un arbol, donde el DOM es el arbol y cada una de las etiquetas del HTML es un nodo o rama, ademas de que cada nodo puede tener una propiedad o un atributo, que es lo que nos permite saber que es lo que esta dentro de ese nodo.

Cuando nos referimos al DOM, nos referimos a esta estructura de arbol, que podremos modificar de forma rapida y dinamica desde el propio JS y donde podremos agregar, eliminar, modificar y cambiar el contenido de nuestras paginas. Gracias a que usamos JS para estas modificaciones, vamos a poder automatizar tareas que se realicen cuando el usuario haga alguna tarea determinada, como mover el raton, pulsar un boton, hacer click en alguna parte del documento, escribir un texto, etc.

En resumen, DOM es lo que nos permite manejar HTML con JavaScript a traves del navegador y podemos visualizarlo como un gran arbol, donde cada etiqueta puede representar un nodo, y cada nodo puede tener una propiedad o un atributo (hojitas de arbol); es la representación de la página web en la memoria del navegador, a la que podemos acceder a través de JS. 



Elementos del DOM


Todos los elementos del DOM se consideran nodos. 

 - Document (Es el nodo raiz)
 - Element (todas las etiquetas de HTML)
 - Texto (textos que estan dentro de las etiquetas)
 - Atributo (todos los atributos que pueden llegar a tener las etiquetas)
 - Comentario (Todos los comentarios del documento)



Comunicacion entre HTML y JS



Metodos de seleccion de elementos
Son elementos que nos van a permitir seleccionar uno o varios elementos o grupos de ellos del DOM. Estos metodos se utilizan en el documento , por eso se agrega un document.getElement


Tradicionales

    getElementByID : busca elementos por su id
    getElementsByClassName: busca por elementos por su clase
    getElementsByTagName


Modernos
    querySelector(): Busca el primer elemento que coincide con el selector de CSS
    querySelectorAll(): Busca todos los elementos que coinciden con el selector de CSS


*/


let parrafo = document.getElementById(parrafo1); //Le decimos que nos traiga del hmtl lo que encuentre por el ID que mencionamos

parrafo.style.color ="blue";
parrafo.innerHTML = "Hola felipe, bienvenido. Puedes comprar :D";
console.log(parrafo);

var parrafito =document .getElementsByClassName ("parrafo3");

//parrafito .style.color ="pink";

console.log(parrafito);

//trae elementos por nombre de etiqueta
var parrafosEtiqueta = document.getElementsByTagName ("p");
console.log(parrafosEtiqueta);

//metodos mas actuales
var parrafoQuerySelector = document.querySelector ("parrafo1");
var parrafoQuerySelectorAll = document.querySelector ("parrafos");
console.log(parrafoQuerySelectorAll);

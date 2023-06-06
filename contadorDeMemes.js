// 1- Traer p referenciar todos los elementos del html y los vamos a gauradar en varibles para pdoer utilizar despues


//Metodos de seleccion
let numeroContador =document.getElementById ("numeroContador");
let botonIncremento =document.getElementById ("botonIncrementar");
let botonDecremento =document.getElementById ("botonDecrementar");
let botonResetear = document.querySelector("#botonResetear");
let memeRandom = document .querySelector ("#memeRandom");

//declarar una variable con un esto inicial. por que nuestra varible tiene que tener un valor para que se pueda cam iar

var valorContador =0;



//Logica de negocio

function incrementar(params) {
    valorContador ++;
    numeroContador .innerHTML=valorContador;            //se mete al contenido y lo puedes modificar a tu antojo
}
incrementar ();

// function decrementar(params) {
    
// }

// function resetear(params) {
    
// }

// function mostrarImagen(params) {
    
// }
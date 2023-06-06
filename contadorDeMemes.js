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

// function incrementar(params) {
//     valorContador ++;
//     numeroContador .innerHTML=valorContador;            //se mete al contenido y lo puedes modificar a tu antojo
// }
// incrementar ();

// // function decrementar(params) {
    
// // }

// // function resetear(params) {
    
// // }

// // function mostrarImagen(params) {
    
// // }


var valorContador = 0;

function incrementar(){
    valorContador++;
    numContador.innerHTML = valorContador;

    if(valorContador%10==0){
        mostrarImagen();
    }
}

function decrementar(){
    valorContador--
    numContador.innerHTML = valorContador

    if(valorContador%10==0){
        mostrarImagen();
    }
}

function resetear(){
    valorContador =0
}

function mostrarImagen(){
    var colImagenes =["meme1.png","meme2.png","meme3.png","meme4.png"];

    let indexRandom= Math.floor(Math.random()*colImagenes.length);

    let urlAleatoria = colImagenes[indexRandom];

    memeRandom.src = "./assets/"+ urlAleatoria;

    memeRandom.style.display = "block";
}

botonIncremento.addEventListener("click",incrementar);
botonDecremento.addEventListener("click",decrementar);
botonResetear.addEventListener("click",resetear);



/*for(let i=0;i<11;i++){
    incrementar()
}
/*
for(let i=0;i<26;i++){
    decrementar()
}

resetear();

for(let i=0;i<15;i++){
    incrementar()
}*/
/*
function decrementar()

function resetear()

function mostrarImagen()*/
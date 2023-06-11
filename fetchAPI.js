//Javascrip Sincrono

console.log("Inicio de mi ejercicio sincrono ");
function dosSync() {
    console.log("Se ejecuta la funcion dos");
}
function unoSync() {
    console.log("Se ejecuta la funcion uno");
    dosSync();
    console.log("Se ejecuta la funcion tres");
}


unoSync();
console.log("Fin de syncrono");


/*
Ejemplos de tareas sincronas
-Ciclos
-Invocaciones a funciones
-Eventlist  (especificar cuando necesito el clik)
-Condicionales y todo lo que tenga que ver con toma de decisiones 
-promp y alerts

*/



//JavaScript Asincrono
console.log("Inicio de Asincrono");
function dosAsync(){
    setTimeout(function(){
        console.log("Dos");
    },5000); //Tiempo es en milisegundos
}
function unoAsync() {
    dosAsync();
    console.log("Tres");
}
unoAsync();
console.log("Fin de Asincrono");


/* 
-Funcion setTimeout
-Notificaciones de cierre de sesion en apps bancarias
-Spoty con su cola de reproduccion
-Conexiones al servidor
-Cargas de APIs

*/


/*
Ya que entendemos que la asincronia nos servira para conectarnos a un servidor que sin importar la respuesta que este nos de (exitosa o no), o incluso el timepo que tarde en responder (milisegundos o segundos), es encesario saber que hay varios mecanismos para manejar operaciones asincronas en JS

  
-Callbacks (llamadas de vuelta):La forma mas clasica de gestionar la sincronia
  
    -promises(Promesas):formas moderna
  
    -Async/await: forma moderna con una sintaxis mas ligera

*/


/*
Que es un callback (llamada de vuelta);

Un callback es una funcion que se pasa como argumento a otra funcion.Esta funcion se ejecutara despues de que la otra se haga.
Este mecanismo nos ayuda a controlar que cierto codigo no se ejecute antes de que el otro termine.

Para que las necesitamos ?


Sabemos que JS trabaja de forma descendente, entonces habra casos que queramos hacer que un codigo se ejecute despues de que ocurra otra cosa, y tambien de forma no secuncial.
*/
function hazClick() {
    console.log("Le hiciste clic al boton");
}
const boton =document .getElementById("boton");
//boton.addEventListener ("click" .hazClick());


//  Ejemplo de   Callback

//Defino una funcion que toma un numero y un callback (funcion) como parametros

//Creamos una funcion llamada dobleNumero, que toma un numero y una callback como argumentos (el calback es una funcion)
function dobleNumero(num,callback) {
    const resultado =num *2; //operacion comun y corriente
    callback (resultado);//Invocacion de ese callback con el resuldao como parametro
}

//definir una funcion para mostrar el resultado
function  mostratresultado(resultado) {
    console.log("el resultado es", resultado);
    
}
dobleNumero (5, mostratresultado);

/*
Promises (promesas)

Son otro mecanismo para manejar la asincronia. utilizar promesas hace que el codigo sea mas legible y practica que al usar callbacks, y como su nombre lo indica una promesa es algo que en un principio no sabemos sis e va a cumplir, pero en el futuro peden pasar varias cosas. la grna ventaja de utilizar promesas es que evitamos anidar muchas funciones, y usamos una sola funcion (metodo) para manejas los callbacks

promise.then   Se ejecuta cuando la promesa se cumpla y resivira el resultado como argumento 


promise.catch se ejecuta su la promesa es rechazasa y recibirá el error como argumento

Las promesas tienen estados:

-Pendiente (pending): Es el estado inicial de nuestra promesa, aqui aun no tenemos resultados.

fullfilled: Cuando la operacion asincrona se completa con exito(resolve)

-Rejected (Rechazo) Cuando la operacion falla /reject)

Tambien las promesas, al ser un objeto, tienen metodos


-then (function resolve): se ejecuta un callback llamado resolve cuando la promesa se cumple


-catch(function reject): Ejecuta un callback llamado reject cuando la promesa se rechaza.


-then (resolve, reject): Puedo ejecutar las dos funciones en el mismo metodo then.


*/


//Creo una funcion llamada obtenerProductos para poder utilizar promesas y hacer la conexion a mi url para obtener datos
function obtenerProductos() {
    //cuando se ejecute la funcion, quiero que retorne un nuevo objeto del tipo promesa
    //Especifico que este objeto promise tiene dos funciones: una cuando se resuelve, y otra cuando se rechaza
    return new Promise(function (resolve, reject) { //el objeto maneja dos funciones (resuelto, rechazo)
        fetch('https://fakestoreapi.com/products') //direccion a donde me voy a conectar y buscar
            .then(function (response) { //espero respuestas...
                if (response.ok) { //propiedad booleana (si o no hay respuesta)
                    return response.json();//metodo para convertir la respuesta a un objeto .json
                } else { //si no...
                    throw new Error("Error al obtener los productos. Error 404! Servidor no encontrado"); //lanzo un nuevo error (404)
                }
            })
            .then(function (data) { //Si hay una respuesta, resuelvo la promesa (exitosa) y ya tengo mis datos para despues jugar con ellos
                resolve(data);
            })
            .catch(function (error) { //Si no hay una respuesta, resulvo con un rechazo.
                reject(error);
            });
    });
};


// Uso de la promesa

// obtenerProductos()
//     .then(function (resultado) {
//         console.log(resultado);
//     })

//     .catch(function (error) {
//         console.log(error);
//     });

//Primer bloque para la conexion del servidor

const obtenerPokemon2 =new Promise ((resolve, reject)=>{
    fetch ('https://pokeapi.co/api/v2/pokemon/ditto')
    .then(respuesta =>{
        if (respuesta.ok){
            return respuesta .json ();
        }else{
            throw new Error ("Error 404");
        }
    })

    //Segundo bloque (cuando ya me conecte al servidor y encontro la infor)
    .then (datos =>{//Entonces estos datos...
        resolve(datos);//Se usan como parametro de mi resolucion.
    })
    //Tercer bloque (solo en caso de que no se ensuentre informacion)]
    .catch(error =>{
        reject("Mensaje de error, no encontramos tu pokemon" + error);
    });
});
























//Primer bloque para la conexion del servidor
const obtenerPokemon = new Promise((resolve, reject) =>{
    fetch('https://pokeapi.co/api/v2/pokemon/ditto') //me conecto y busco

    .then(respuesta =>{ //cuando se conecte...
        if (respuesta.ok){ //si la conexion es ok
            return respuesta.json(); //guardo el dato en .json
        } else { //si no me conecto...
            throw new Error ("Error 404"); //muestro un error
        }
    })

    //segundo bloque (cuando ya me conecte al servidor y encontro la info)
    .then(datos =>{ //entonces esos datos...
        resolve(datos); //se usan como parametro de mi resolucion
    })

    //tercer bloque (solo en caso de que no se encuentra informacion)
    .catch(error =>{
        reject("Mensaje de error, no encontramos tu pokemon" + error);
    });

});


//Ya que le di el mensaje a mi mesero (creacion de la promesa), ahora voy a poder mostrar la informacion si la promesa se resuelve (encuentra la info), o si se rechaza (no encuentra la info)

obtenerPokemon

.then(pokemon =>{ //el valor pokemon = datos obtenidos del servidor en .json
    console.log("Pokemon obtenido" , pokemon.name);
})
.catch(error => {
    console.log(error);
});


/*
Fetch API
Es una interfaz de js, que nos da un metodo llamado fetch, el cual nos permite manejar solicitudes(GET,POST,PUSH, DELETE).

Cuando usamos Fetch API sabemos que de forma implicia estamos usando promesas, tambien de forma implicita sabemos que esta promesas se puedne resolver o rechazar.
El metodo fetch tomas una URL como argumento y devuelve una promesa que se resuleve como un objeto llamado "response" . que incluye la respuetsa de la solicitud (a parde de decirnos que la conexcion es ok "pega" la informacion de lo que estamos consultando)

Ya que tenemos el objeto llamado "response", vamos a poder hacer un monton de cosas como acceder a la info, leer el contenido. verificarlo, etc.
*/

//Realizamos la peticion al servidor
fetch ('https://pokeapi.co/api/v2/pokemon/ditto')
    .then(pokeRespuesta =>{ //Cuando la promesa es verdadera ejecutamos la siguente funcion
        return pokeRespuesta .json ();//esta funcion retorna la pokeinfo en un .json
    })
     .then(pokeInfo => { //Cuanod la promesa de la conexion se resuelve, entonces ejecutamos esta otra funcion. Esta funcion guarda la informaion de la respuesta, y lo guarda en una nueva variable llamada pokeInfo
        console.log("El nombre del pokemon es: ", pokeInfo.name, " su numero de la pokedez es ", pokeInfo.id)
        console.log(pokeInfo);
    })
        .catch (pokeError =>{
            console.log("No se encontro informacion del pokemon" , +pokeError);
        })


//Manipulacion del DOM +fetch API
function traerPokemon(nombrePokemon) {
    fetch (`https://pokeapi.co/api/v2/pokemon/${nombrePokemon}`)
    
    //Guardo la respuesta en .json
    .then (respuesta => respuesta .json()) //Se resuleve la promesa

    //else .json lo asigno a una variable llamada datos, que usare para alimentar una funcion llamada crear Pokemon
    .then ((datos) =>{
        crearPokemon(datos);
    });
}

function crearPokemon(nombrePokemon) {
    const pokeImg=document.createElement("img");
    pokeImg.src=nombrePokemon.sprites.front_default;
}

const pokemonContainer = document.querySelector("#pokemonContainer");

//Manipulacion del DOM + Fetch API
function traerPokemon(nombrePokemon){
    fetch(`https://pokeapi.co/api/v2/pokemon/${nombrePokemon}`)

    //guardo la respuesta en .json
    .then(respuesta => respuesta.json()) //Se resuelve la promesa

    //ese .json lo asigno a una variable llamda datos, que usare para alimentar una funcion llamada crearPokemon
    .then((datos) =>{
        crearPokemon(datos);
    });
}
const input =document.getElementById("inputPokemon");
const button =document.getElementById("botonPokemon");

button.addEventListener("click", traerPokemon(input.value));
traerPokemon ("pikachu");
button.addEventListener("click", (e) => {
    e.preventDefault(); //prevenir que el navegador se actualice
    traerPokemon(input.value); //ejecuta la funcion traerPokemon
}
);

function crearPokemon(nombrePokemon){
    const pokeImg = document.createElement("img"); //creo una etiqueta img
    pokeImg.src = nombrePokemon.sprites.front_default; //front_default es el nombre de la propiedad donde esta la imagen de mi pokemon
    const h2 = document.createElement("h2"); //creo una etiqueta h2
    h2.innerHTML = nombrePokemon.name; //le pongo el nombre del pokemon a ese h2
    const pokeDiv = document.createElement("div"); //crearmos un div para poner mi pokemon
    //Inserto los elementos imagen y h2 a un div particular de cada pokemon
    pokeDiv.appendChild(pokeImg);
    pokeDiv.appendChild(h2);
    //inserto ese div particular en un div general que estan en el html
    pokemonContainer.appendChild(pokeDiv);

}


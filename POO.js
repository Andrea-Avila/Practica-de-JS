//Creamos un objeto casa(atritubos)
/*

Programacion Orientada a Objetos en Javascript

Paradigma de programacion que nos permite crear soluciones a problemas que se nos presentan, tomando como ejemplo los objetos del mundo real. 

Otras formas de programar:

- Programacion funcional
- Programacion imperativa
- Programacion declarativa


*/
// //Areglo (objeto)
// var casaArreglo =[3,2,1,4,2,"verde",6,"rojo"];

// const casa ={numHabitaciones:3, numPisos: 2, numBanios :1, color:"Rojo", }; //La diferencia radica en que podemos identificar los vectores y separarlos con un nomvbre y que le de un valor

// //Para imprimir la informacion de un objeto, utiliza la referencia al objeto, despues un punto, y por ultimo el nombre de la prpiedad o metodo que quiero mostrar.
// console.log("El color de mi casa es:  ", casa.color);


// //Instruccion: crear 50 casas con las mismas caracterisicas pero con diferentes colores

// //Clase para gnerar una plantilla, esta plantilla va a tener predefinidas las llavaes (keys) de nuestras propiedades, y cada que instancie o cree un nuevo o jeto, esa informacion se va a ir personalizando.

// class casaPlantilla {

//     //1.- Definir mis propiedades como variables, para posteriormente agregarle valores(este valor se la vamos a dar cuanto instanicemos el objeto)
//     numHabitaciones =0;
//     numBanios =0;
//     numPisos =0;
//     color ="";


//     //3.- Definir una funcion constructora. esta funcion es una funcion especial que se dedica unica y exclusivamente a tomar los datos que definimos como variables, para usarlos como parametros de construccion y asi poder instanciar nuestro objeto.

//     //Los parametros se deben pasar en forma estricta en el orden en el que fueron declarados para que casa valor que se use, se asigne a la variable correspondientes

//     constructor (numHabitaciones, numeroBanios, numPisos, color){
//         this.numHabitaciones = numHabitaciones;
//         this.numBanios = numeroBanios; 
//         this.numPisos = numPisos;
//         this.color = color;

//     }
//     //2.- Defininmos los metodos como funciones, por que estas funciones nos dicen que es lo que puede hacer mi objeto
//     encenderLuces (){
//         console.log("click, luces encendidas");
//     }
    
//     abrirVentanas(){
//         console.log("swiif, ventanas abiertas");
//     }

//     guardarmeDelFresnito(){
//         console.log("que agusticidad");
//     }



// }




// //En la clase definimos todo de forma "normal" (declarar las variabels como normalmente lo usamos = y ;, pero cuando el objeto se crea (instancia), se visualiza de otra forma con : y , entre cada uno)

// /*Instanciar objetos

// Para itanciar objets, usamos la siguientes sintaxis:

// variable con nombre =paLabraReservadaNew referecuaDeLaclase (parametros de construccion);
// let objeto = new ClaseObjeto (paranetris);

//

// //Tengo una variable llamada "casa de felipe", que es un nuevo objeto de la clase "casa o plantilla" y que tiene los siguientes paramentros
// let casaDeFelipe = new casaPlantilla(6,2,2,"Azul");
// console.log(casaDeFelipe);

// casaDeFelipe.guardarmeDelFresnito();
// casaDeFelipe.abrirVentanas();
// casaDeFelipe.encenderLuces();
// console.log(casaDeFelipe.numHabitaciones); //Se imprime por que es es un valor booleano


// let casadeGustavo =new casaPlantilla (4,5,1,"verde");
// let casaDeCarlos =new casaPlantilla (4,5,1,"verde");
// let casaDeItzel =new casaPlantilla (4,5,1,"verde");
// let casadeHector =new casaPlantilla (4,5,1,"verde");
// let casadeRicardo =new casaPlantilla (4,5,1,"verde");



//Ejemplo de POO con gatitos

// class gatitos{
//     //1.-propiedades
//     nombre = "";
//     edad =0;
//     tamanio = "";
//     caracter = "";
//     numeroVidas =0;
//     color = "";
//     raza = "";
//     vacunas = false;
//         //3 Constructor
//         constructor(nombre,edad,tamanio,caracter,numeroVidas,color,raza,vacunas){
//             this.nombre=nombre;
//             this.edad=edad;
//             this.tamanio=tamanio;
//             this.caracter=caracter;
//             this.numeroVidas=numeroVidas;
//             this.color=color;
//             this.raza=raza;
//             this.vacunas=vacunas;

//         }

//     //2.-Metodos
//         imprimirInfo(){
//             console.log("El nombre de mi gatito es ", this.nombre);
//             console.log("La edad de mi gatito es ", this.edad);
//             console.log("El tamanio de mi gatito es ", this.tamanio);
//             console.log("El caracter de mi gatito es ", this.caracter);
//             console.log("El numero de vidas de mi gatito es ", this.numeroVidas);
//             console.log("El color de mi gatito es ", this.color);
//             console.log("La raza de mi gatito es ", this.raza);
//             console.log("El gatito tiene todas sus vacunas ", this.vacunas);
        
//         };
        
//         maullar (){
//             console.log("Miau");
//         };

//         resguniar(){
//             console.log("El mishi, rompio el sillon");
//         };
//         ronronear (){
//             console.log("El mishi esta ronroniando");
//         };
//         cuidarGato(){
//             if (this.numeroVidas < 3) {
//                 console.log("cuida a tu gatito",this.nombre ,"por que tiene pocas vidas");
//             }
//         }
//         comerAmvorgesas(){
//             console.log("El gatito ",this.nombre ," comio su amvorgesa, esta contento");
//         };
// }

// //Instancair. Aqui le agregamos los datos que le demos a cada uno
// let juanchoDelCampo = new gatitos ("Juancho Del Campo", 5,"Grande","Tranquilo",4,"Naranja","angora",true);
// let nenito = new gatitos ("Nenito", 5,"Mediano","Travieso",2,"Gris","Desconocido",true);
// let tito = new gatitos ("Tito", 2,"Mediano","Mal Humorado",6,"Gris","Desconocido",true);
// let Motorcito = new gatitos ("Motorcito", 1,"chiquito","Amoroso",2,"Naranjira","Desconocido",false);
// let ElizabethIII = new gatitos ("Elizabeth III", 4,"Grande","Comelona",7,"Blanca","Persa",true);

// //Esto es para nos imprima los metosos :)
// juanchoDelCampo.imprimirInfo ();
// juanchoDelCampo.cuidarGato();
// nenito.imprimirInfo();
// nenito.cuidarGato();
// nenito.comerAmvorgesas();


//
 /*

JSON (JavaScript Object Notation)

Es un formato estandar basado en texto (string) para representar datos estructurados (objetos) basados en la sintaxis de objetos de JavaScript ({, :})


JSON es una estructura de datos (mantiene la estructura de un objeto de JS normal), que nos permite guardar datos en forma de objetos. La unica diferencia este que estos datos se guardan en un formato de texto, para poder hacer la comunicacion con nuestro servidor.

Para poder comunicarnos con un servidor, necesitamos convertir nuestro objeto a un objeto que pueda ser interpretado.

*/

// Objeto normal de JAVASCRIPT (tiene colores, me muestra las palabra reservadas)
objeto = {
    nombre: "Andrea",
    edad: 25,
}

console.log ("Este es un objeto normal: ", objeto);
console.log("Este es el nombre de mi objeto: ", objeto.nombre);


/*Como nuestro servidor no interpreta objetos "puros", necesitamos convertirlos a cadenas de texto. Este proceso se le conoce como serializar

La sintaxis para pasar de objeto normal de JS a JSON es:


JSON.stringify(objeto que quiero serializar)

*/

let objetoSerializado = (JSON.stringify(objeto));

//Podemos imprimir nuestro objeto serializado, y lo veremos como una cadena de texto
console.log("Este es un objeto serializado: ",objetoSerializado);

//Si tratamos de acceder a alguna de las propiedades de nuestro objeto serializado, no podremos ya que nos mostrara "undefined"
console.log(objetoSerializado.nombre);
console.log(JSON.stringify(objeto));
console.log(JSON.parse(objeto));


let objetoDeserializado =(JSON.parse(objetoSerializado));
console.log(objetoDeserializado);

console.log(objetoDeserializado.nombre);
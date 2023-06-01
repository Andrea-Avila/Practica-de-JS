/*
Control de flujo

Cuando hablamos de flujo de control hablamos del orden en que se ejecutan las instrucciones de un programa, siendo estas instrucciones las que determinan o controlan dicho flujo.

En un programa, a menos que el flujo de control se vea modificado por una instruccion de control (por ejemplo una condicional), el flujo de control se mantiene en el mismo orden en el que se escriben las instrucciones (de arriba a abajo y de izquierda a derecha).

Condicioneales
Son instructuras o condiciones que nos permiten modificar el orden natural de ejecucion de niestro programa. Son sentencias especificas que nos ayudan a decidi si una condicion se cumple o no (verdadero o falso ), a partir de esta resuestase ejecuta una o varias instrucciones.
Ejemplo:

Tengo limpia mi playera de la suerte ? //pregunta o instruccion que detona la condicion
true: Entonces voy a la fiesta// respuesta con su posible instruccion
false: Me quedo a mimir.// respuesta con su posible instruccion



*/

/*condicional if (si)
If nos sirve para validar si una condición se cumple o no. Si se cumple, entonces se ejecuta el bloque de código que esté dentro del if. Si no se cumple, entonces no se ejecuta ningún bloque de código.


Estructura basica de un if


if (condicion){

    //ejecuto este bloque de codigo
}

*/
//Felipe tiene 17 anios,y quiere ir a una fiesta.Dicha fiesta solo es par personas adultas (mayores de 18 anios). ayuda a Felipe a decidir si puede ir a la fiesta o no. 
//Evaluamos solo una expresion (si Felipe tiene menos de 18 anios), en caso de que sea verdadero, mostraremos el mensaje dentro del bloque. Si es falso, no mostrara nada porque nuestro programa no esta preparado para esa situacion (incertidumbre).

// let edadDeFelipe =19;
// let edadPermitida = 18;

// if (edadDeFelipe < 18) {
//    //  console.log("lo siento Felipe, no puedes ir a la fiesta");  

// }else (edadDeFelipe >= 18) 
//  //   console.log("Felicidades Felipe, puedes ir a la fiesta");


/*
Else (de otro modo -si no)

Utilizamos esta instruccion o sentencia para especifica que un bloque de codifo se ejecutara si la condicion es verdadera, y otro bloque de codigo se ejeciuta en caso de que la condicion sea falsa.

estrucutra basica del Else 

if(Condicion){
         // este bloque se ejecuta si la condicion es verdera
}
else {
    // este bloqu se ejecur si la condicion es falsa

}
*/



// let edadUsuario = true;
// //prompt("Ingresa tu edad");
// if (edadUsuario < edadPermitida) {
    
//     console.log("lo siento, no puedes ir a la fiesta");  

// }  else{ 
// //Se ejecuta cuando es falso que el ususario es mayor a la edad permitida
//     console.log("Felicidades tienes la edad permitida, puedes ir a la fiesta");
// }
 /*
 Test de nuestro progrma (valores que tambien se evaluan como falsos)

    -"false" (string)
    -NaN
    -false (boolean dispara verdadero)

 */
  
/*
Else if (ademas si / si no entones)
Esta condicional nos ayuda a ejecutar una nueva condicion en caso de que la primera sea falsa.Podemos usar todos las estructuras else if que sean necesarios, terminanado con una estructura else.

else es el puente entre una funcion y otra 


los operadores como <,>,=,==,===,and, or, !,++. 


Estructura basica del else if
if (condicion 1){
    //bloque de codigo que se ejecita si la condicion 1 es verdadera
    } else if (condicion 2){
    //bloque de codigo que se ejecuta si ak condicion es falsa y la condicion 2 es verdadera
    }else if (condicion 3){
    //bloque de codigo que se ejecuta si  la condicion 1 es falsa, y si la condicion 2 tambien es falsa
    }else{
        //Bloque de codigo que se ejecuta si todos los bloques de codigo (condicion 1, condicio 2, condicion 3)son falsas
    }

//Se pueden anidar X cantidad de else if entre el if que evalua la condicion inicial y es else que termina toda la expresion.

*/
/*
edadDavid = 19;
edadPermitida;
dineroDeDavid= 20;
coverDelAntro = 150;
if (edadDavid > edadPermitida){
    console.log("Muy bien, puede ir al antro");
    else if (dineroDeDavid >= coverDelAntro) {
    console.log("Si puedes etrar al antro");
}else{
    console.log("lo siento no tienes dinerito suficiente para pagar el cover");
}
//else{
  //  console.log("Lo siento no tienes la");
}
*/




// let hora = prompt("Ingrese la hora actual");
// if (hora <12){
//     console.log("Buenos días");
// }else if (hora <=19){
// console.log("Buenas tardes, que barbaro como pasa el tiempo");
// }else{
//     console.log("buenas noches, vamos a mimir");
// }

/* switch
Esta condicon nos permite hacer multiples operaciones y tomar decisiones en funcion de distintos estados de la variable. 
Evalua una expresion comparando el valor de un dato o variable, y ejecutando la instruccion asociada a ese caso .
 - case: Evalua el caso o condicion asociado que dispara un bloque de codigo
 - break: Termina el proceso sin que tengamos que pasar por todas las iteraciones o casos.
 - default: Termina el proceso en caso de que ninguna de las evaluaciones sea la correcta (similar al else)




switch (Expresion o condicion){
    case valor 1:
        Codifo que se ejecuta si la condicion es igual a valor1
    break;
    case valor 1:
        Codifo que se ejecuta si la condicion es igual a valor1
    break;
    case valor 1:
        Codifo que se ejecuta si la condicion es igual a valor1
    break;
    case valor 1:
        Codifo que se ejecuta si la condicion es igual a valor1
    break;
    case valor 1:
        Codifo que se ejecuta si la condicion es igual a valor1
    break;

    default:
     Ingresaste un piso incorrecto (un bloque de codigo que se ejecuta si no se cumple con ninguna de las condiciones anteriores)
}

}

*/

// let pisoDestino = prompt ("Ingresa el número del piso que quieras ir (1 al 5)");
// switch(pisoDestino){
//     //Para jugar con nuestros casoso, el tipo de datos debe coincidir para que se ejecute correctamente
//     case "1":
//         console.log("Vamos a piso 1 (Suena musica de elevador de fondo)");
//         break;
//     case "2":
//         console.log("Vamos a piso 2 (Suena musica de elevador de fondo)");
//         break;
//     case "3":
//         console.log("Vamos a piso 3 (Suena musica de elevador de fondo)");
//         break;
//     case "4":
//         console.log("Vamos a piso 4 (Suena musica de elevador de fondo)");
//         break;
//     case "5":
//         console.log("Vamos a piso 5 (Suena musica de elevador de fondo)");
//         break;

//     default:
//         console.log("Ingresaste un piso que no es valido");
    
// }

//Ejercicio de Evee


/*
 Operadores
 los operadores nos permiten realizar una operacion en uno o varios operandos (variables o datos)

 - Operadores de asignacion
 - Operadores de cadena
 - Operadores logicos
 - Operadoes de comparacion
 - Operadores aritmeticos



 operadores de Asignacion (=); Le asignaremos un valor a el operando

 los operadotres de asignacion (=) se utilizan para asignar valor a una variable. signa un valor al operando de la izquierda basado en el valor del operador de la derecha.

 */

 //Operadores de asignacion
 let edadDeFelipe =31;
 var recipiente = "cafe";

 /*
 
 operadores de asignacion (>,<,>=,<=,==,===, !=, !==)
 los operadore de comparacion nos ayudan a comparar dos expresione o valores y nos devuleven un valor boolean que representa la relacion de sus valores
 
 */
let numero1 = 13;
let numero2 =25;
let numero3 ="25";
let veinticinco = 25;

//Operador menor que
console.log("El valor " + numero1+ " es menor que el valor " + numero2 +" "+ (numero1<numero2));
//Operador mayor que
console.log("El valor " + numero1+ " es mayor que el valor " + numero2 +" "+ (numero1>numero2));
//Operador mayot o igual que
console.log("El valor " + numero3+ " es menor o igual que el valor " + numero2  +" "+(numero2>=numero3));
//operador de igualdad
console.log("¿El valor " + numero2+ " es igual que el valor " + numero3 +"? "+(numero2==numero3));

//Operador de igualdad estricta (evalua el valor y evalua el tipo de dato)
console.log("¿El valor " + numero2+ " es igual que el valor " + numero3 +"? "+(numero2===numero3));

//Otro ejemplo de operado de igualda estricta
console.log("¿El valor " + numero2+ " es igual que el valor " + numero3 +"? "+(numero2==="veinticinco"));
 
//Operador de desigualdad (!=) no es igual
console.log("¿El valor " + numero1 + " no es igual al valor " +numero2+ "? " +(numero1 != numero2)); //verdadero

//Operador de desigualdad estricta
console.log("¿El valor " + numero2 + " no es igual al valor " +numero3+ "? " +(numero2 !== numero3));

/*
Operadores logicos (&&(and), ||(or),!(not))
Los operadores logicos nos devuelven un resultado a partir de que se cumpla (o no) una condicion.El resultado sera un valor boolean y sus operadores son logicos o asimilables entre ellos (los podemos combinar, y, los podemos poner en un orden especifico)

AND (&&)
Sirve para determina si dosexpresiones son verdaderas.
-Si ambas expresiones son verdaderasmmel resukltadoe s verdadero.
-Si una de las dos expresiones es dfalsa, todo el resultado es falso.

OR (||)
Sirve para determinar si dos exptrsiones son falsas.
    -So cualquiera de estas afirmaciones es verdadera, todo es verdadero.
    -Si las dos afirmaciones son falsas, todo es falso


NOT (!)
Sirve para mostrar lo contrario a lo que estamos devolviendo

*/

//Ejemplo con AND (&&)

var num1=12;
var num2=24;
afirmacion1=(num1 > num2);//false
afirmacion2=(num1 != num2); //verdadero
console.log(afirmacion1 && afirmacion2); //IMPRIME TRUE PORQUE AMBAS AFIRMACIONES SON verdaderas

//Ejemplo con OR (||)

//Evalua dos condicionales y quiere que al menos alguna de las dos sea verdadera para que sea todo verdadero, no importa si el otro es falso
afirmacion3 =  (num1> num2);
afirmacion4 = (num1!=num2);
console.log(afirmacion3||afirmacion4);

//Ejemplo con Not (!)
console.log(!afirmacion3);//falso
console.log(!afirmacion4);//falso


//Ejercicio de combiacion de operaciones
num1 =12;
num2 =25;
num3 =25;
num4 =92;
num5 =91;

//op = (num1 < num2 ||num2< num3)&&(!(num1 != num2)&& num5 !=num3);
//console.log(op);

op2 = (num5 > num2 && num4 < num3) || (!(num1 === num2) || num3 != num3);
/* 
1- se cumple que num5 sea mayor que num2 VERDADER0
2.-No se cumple que num4 sea menor a num3 FALSO
3.-No se cumple por que num1 y num2 son estrictamente iguales FALSO
4.-Nos manda falso por que los numeros son igual es FALSO
5.-El primer parentesis es es Falso
6.-El segundo parentesis es VERDADERO
7 VERDADERO ?  

*/
console.log(op2);


/*
Operadores aritmeticos (suma +,resta -, multiplicacion*, divicion /,Residuo %, **,++, --)


+(suma); este operador suma dos o mas valores numericos.
-(resta); resta dos o mas valores numericos.
/*(Miltiplicacion): multiplica dos o mas valores numericos.
/(Divicion) Divide dos o mas valores numericos.
%(Modulo o residuo): Retorno el residuo de la division
**(Exponenciación) :Retorna el resultado de la potencia.Se escribe la base antes de los asteriscos, y el exponente despues de los asteriscos
++(incremento) Incrementa un valor de uno en uno
--(decremento) Decrementa un valor de uno en uno


*/

let valor1 = 55;
let valor2 = 17;
console.log("La suma del valor 1 y el valor 2 es  " ,(valor1 + valor2));//Ocupamos la coma para que nos imprima un dato ya que el uso de  (+) es para valores de texto
console.log("La resta del valor 1 y el valor 2 es " ,valor1 - valor2);//Resta el valor numero 1 con el 2
console.log("La multiplicacion del valor 1 y el valor 2 es", valor1 *27); //Multiplica el valor 1 con un segundo valor
console.log("La Divicion del valor 1 y el valor 2 es", valor1 *valor2); //Multiplica el valor 1 con un segundo valor
console.log("El residuo de la diviciones del valor 1 y el valor 2 es", valor1 % valor2);
console.log("El Exponente de la diviciones del valor 1 y el valor 2 es", valor1 ** valor2);
console.log("El residuo de la diviciones del valor 1 y el valor 2 es", ++valor1);
console.log("El residuo de la diviciones del valor 1 y el valor 2 es", --valor1);


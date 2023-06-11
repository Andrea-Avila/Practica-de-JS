//Aqui calcaulamos el sueldo por todos los dias trabajados para que se imprima una sola vez

// var sueldoPorDia = 156.78;
// var sueldoPorSemana = sueldoPorDia *7;  
// var sueldoPorMes = sueldoBrutoPorSemana*4;

// var sueldoBrutoDia = 160;
// var sueldoBrutoPorSemana = sueldoBrutoDia *7;
// var sueldoBrutoPorMes = sueldoBrutoPorSemana *4;


//Vamos a declarar nuestras propiedades  
class sueldos {
    //1.-propiedades
    nombre = "";
    isr = .31;
    edad = 0;
    rfc = "";
    sueldoPorDia = 156.78;
    numeroDiasTrabajados = 0;
    horasTrabajadas = 0;
    mereceBono = false;



    //3 Constructor
    //Agregamos el nombre, edad, efc, dias y horas trabajas
    constructor(nombre, edad, rfc, numeroDiasTrabajados, horasTrabajadas) {

        this.nombre = nombre;
        this.edad = edad;
        this.rfc = rfc;
        this.numeroDiasTrabajados = numeroDiasTrabajados;
        this.horasTrabajadas = horasTrabajadas;
        //          this.mereceBono=mereceBono; Se comenta por que se va a optimizar el que merezca un bono en una Funcion


    }

    //2.-Metodos
    imprimirInfo() {
        console.log("El nombre de mi colaborador es ", this.nombre);
        console.log("La edad de", this.nombre, " es de ", this.edad, " años");
        console.log("El RFC de", this.nombre, " es ", this.rfc);
        console.log("El numero de dias que", this.nombre, " trabajo es de ", this.numeroDiasTrabajados);
        console.log("El total de horas trabajadas en la semana de", this.nombre, " es de ", this.horasTrabajadas);

        return this.nombre;

    };

    calcularSueldoBruto() { //Hacemos las operaciones correspondientes por los dias trabajados

        var sueldoSemanal = (this.sueldoPorDia * this.numeroDiasTrabajados);
        console.log("El sueldo bruto por semana de ", this.nombre, " es de ", sueldoSemanal);


        var sueldoMensual = (4 * sueldoSemanal);
        console.log("El sueldo bruto por mes de ", this.nombre, " es de ", sueldoMensual);

        var sueldoQuincenal = (2 * sueldoSemanal);
        console.log("El sueldo bruto por quincena  de ", this.nombre, " es de ", sueldoQuincenal);
    }


    calcularSueldoNeto() {
        var sueldoimpuesto= (this.sueldoPorDia * this.numeroDiasTrabajados);
        var sueldoSemanalNeto =sueldoimpuesto-(sueldoimpuesto*0.31)

        console.log("El sueldo neto por semana de ", this.nombre, " es de ", sueldoSemanalNeto);
        
        var sueldoMensualNeto = (4 *sueldoSemanalNeto);
        console.log("El sueldo neto por mes de ", this.nombre, " es de ", sueldoMensualNeto);

        var sueldoQuincenalNeto = (2 * sueldoSemanalNeto);
        console.log("El sueldo neto por quincena  de ", this.nombre, " es de ", sueldoQuincenalNeto);
    
    }
    bono() {

        if (this.horasTrabajadas > 45) {
            console.log(this.nombre, " merece bono ? ", true);
            console.log("Felicidades ganaste una anvorgesa");
        } else
            console.log("no ganaste la anvorgesa lo siento :(");
    }
    comerAmvorgesas() {
        console.log("El colaborador comio su amvorgesa, esta contento");
    };
}

//Instancair
let pancho = new sueldos("pancho", 56, "prga764398hg5", 6, 48);
let panfila = new sueldos("panfila", 23, "PIHE172038GF6", 7, 49);
let merengano = new sueldos("merengano", 23, "aiga971207ug4", 7, 45);
let loki = new sueldos("loki", 33, "aiga971207ug4", 4, 40,);
let sutanita = new sueldos("sutanita", 28, "aiga971207ug4", 7, 49);

// console.log("El sueldo neto por dia de",this.nombre," es de ", sueldoPorDia); Se comenta para que no lo arroge solo una vez
// console.log("El sueldo neto por semana de",this.nombre," es de ", Se comenta para que no lo arroge solo una vezsueldoPorSemana);
// console.log("El sueldo neto por mes de",this.nombre," es de ", sueldoPorMes);Se comenta para que no lo arroge solo una vez


// console.log("El sueldo bruto por dia  ",this.nombre," es de ", sueldoBrutoDia);Se comenta para que no lo arroge solo una vez
// console.log("El sueldo bruto por semana de",this.nombre," es de ", Se comenta para que no lo arroge solo una vezsueldoBrutoPorSemana);
// console.log("El sueldo bruto por mes  de",this.nombre," es de ", Se comenta para que no lo arroge solo una vezsueldoBrutoPorMes);

console.log("<----------------------------------------------------->");
pancho.imprimirInfo();
pancho.bono();

pancho.calcularSueldoBruto();
console.log("<--------------->");
pancho.calcularSueldoNeto();


console.log("<----------------------------------------------------->");
panfila.imprimirInfo();
panfila.bono();
panfila.calcularSueldoBruto();
console.log("<--------------->");
panfila.calcularSueldoNeto();

console.log("<----------------------------------------------------->");
merengano.imprimirInfo();
merengano.bono();
merengano.calcularSueldoBruto();
console.log("<--------------->");
merengano.calcularSueldoNeto();

console.log("<----------------------------------------------------->");
loki.imprimirInfo();
loki.bono();
loki.calcularSueldoBruto();
console.log("<--------------->");
loki.calcularSueldoNeto();

console.log("<----------------------------------------------------->");
sutanita.imprimirInfo();
sutanita.bono();
sutanita.calcularSueldoBruto();
console.log("<--------------->");
sutanita.calcularSueldoNeto();

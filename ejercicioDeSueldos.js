    var sueldoPorDia = 156.78;
    var sueldoPorSemana = sueldoPorDia *7;
    var sueldoPorMes = sueldoBrutoPorSemana*4;

   var sueldoBrutoDia = 160;
    var sueldoBrutoPorSemana = sueldoBrutoDia *7;
    var sueldoBrutoPorMes = sueldoBrutoPorSemana *4;

class sueldos{
    //1.-propiedades
    nombre = "";    
    // sueldoPorSemana = 0;
    // sueldoPorMes = 0;

    // sueldoBrutoDia = 0;
    // sueldoBrutoPorSemana = 0;
    // sueldoBrutoPorMes = 0;

   // isr=sueldoBrutoPorMes *.31;

    edad =0;
    rfc = "";
    sueldoPorDia = 156.78;
    numeroDiasTrabajados =0;
    horasTrabajadas = 0;
    mereceBono = false;



        //3 Constructor
        constructor(nombre,edad,rfc,numeroDiasTrabajados,horasTrabajadas,mereceBono,){
            //sueldoPorDia,sueldoPorSemana,sueldoPorMes,sueldoBrutoDia,sueldoBrutoPorSemana,sueldoBrutoPorMes
            this.nombre=nombre;

            // this.sueldoPorDia=sueldoPorDia;
            // this.sueldoPorSemana=sueldoPorSemana;
            // this.sueldoPorMes=sueldoPorMes;

            // this.sueldoBrutoDia=sueldoBrutoDia;
            // this.sueldoBrutoPorSemana=sueldoBrutoPorSemana;
            // this.sueldoBrutoPorMes=sueldoBrutoPorMes;


            this.edad=edad;
            this.rfc=rfc;
            this.numeroDiasTrabajados=numeroDiasTrabajados;
            this.horasTrabajadas=horasTrabajadas;
            this.mereceBono=mereceBono;
    

        }

    //2.-Metodos
        imprimirInfo(){
            console.log("El nombre de mi colaborador es ", this.nombre);


            // console.log("El sueldo neto por dia de ",this.nombre," es de ", this.sueldoPorDia);
            // console.log("El sueldo neto por semana de",this.nombre," es de ", this.sueldoPorSemana);
            // console.log("El sueldo neto por mes de",this.nombre," es de ", this.sueldoPorMes);


            // console.log("El sueldo bruto por dia  ",this.nombre," es de ", this.sueldoPorDia);
            // console.log("El sueldo bruto por semana de",this.nombre," es de ", this.sueldoPorSemana);
            // console.log("El sueldo bruto por mes  de",this.nombre," es de ", this.sueldoPorMes);

            console.log("La edad de",this.nombre," es de ", this.edad," años");
            console.log("El RFC de",this.nombre," es ", this.rfc);
            console.log("El numero de dias que",this.nombre," trabajo es de ", this.numeroDiasTrabajados);
            console.log("El total de horas trabajadas en la semana de",this.nombre," es de ", this.horasTrabajadas);
            console.log(this.nombre," merece bono ? ", this.mereceBono);
            return this.nombre;
            
        };
        
        calcularSueldoPorSemana(){
            //sueldoPorDia
            var semana = this.sueldoPorDia *7;
            var semananeta =this.sueldoPorDia 

        }
        calcularSueldoPorMes(){

            this.sueldoPorDia
        }
        bono(){
            if (this.mereceBono === "true") {
             //  if (this.horasTrabajadas >45) {
                console.log("Felicidades ganaste una anvorgesa");
               //}
              
            }
            
            //else 
            //console.log("no ganaste la anvorgesa lo siento :(");
        }
        comerAmvorgesas(){
            console.log("El colaborador comio su amvorgesa, esta contento");
        };
}

//Instancair
let pancho = new sueldos ("pancho",56,"prga764398hg5",6,48,"true");


// let panfila = new sueldos  ("panfila", 156.78 ,23,"aiga971207ug4",4,72,true);
// let merengano = new sueldos  ("merengano", 156.78 ,23,"aiga971207ug4",4,72,true);
// let loki = new sueldos  ("loki", 156.78 ,23,"aiga971207ug4",4,72,false);
// let sutanita = new sueldos ("sutanita", 156.78 ,23,"aiga971207ug4",4,72,true);


console.log("El sueldo neto por dia de ",this.nombre," es de ", sueldoPorDia);
console.log("El sueldo neto por semana de",this.nombre," es de ", sueldoPorSemana);
console.log("El sueldo neto por mes de",this.nombre," es de ", sueldoPorMes);


console.log("El sueldo bruto por dia  ",this.nombre," es de ", sueldoBrutoDia);
console.log("El sueldo bruto por semana de",this.nombre," es de ", sueldoBrutoPorSemana);
console.log("El sueldo bruto por mes  de",this.nombre," es de ", sueldoBrutoPorMes);

pancho.imprimirInfo ();
pancho.bono();

// panfila.imprimirInfo();
// panfila.bono();
// merengano.imprimirInfo();
// merengano.bono();
// loki.imprimirInfo();
// loki.bono();
// sutanita.imprimirInfo();
// sutanita.bono();

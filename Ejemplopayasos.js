var ventaPayasos = prompt("introduce la cantidad de payasos vendidos"); //ventana que nos solicita la cantidad de payasos vendidos
var ventaMuñecas = prompt("introduce la cantidad de muñecas vendidas");//ventana que nos solicita la cantidad de muñecas vendidos


//Peso de los payasos y muñecas en gramos
const  pesoPayaso = 112;
const pesoMuñeca = 75;
/*Los datos de el ultimo pedido
payasoVendido =27;
muñecaVendida =14;
//operaciones del envio */

function calcularPeso(){
pesoVendidoPayaso = pesoPayaso * payasoVendido;
pesoVendidoMuñeca = pesoMuñeca * muñecaVendida;
totalDelPedido= (pesoVendidoPayaso + pesoVendidoMuñeca )/1000;
//Imprime el resultado  
console.log("Peso total del Paquete:" + totalDelPedido+ "kg");
}
calcularPeso();

Les dejo el código de lo que llevamos al momento: 
//1. Creamos un arreglo de objetos para nuestras tareas, estas tareas tendran atributos como id, titulo, estatus completada o no completada

//Esto donde se ejecuta? Del lado del cliente 

//Ejempo de un carrito de compras

//1. Declaramos una rreflo de objetos vacio

let carritoDeCompras =[
    {

    }
];

let producto = {
    id: 1,
    mombre: "camisa de pokemon",
    precio: 299.99,
    cantidad:1
};
//Mostar informacion del carrito de compras
console.log("Tienes ",carritoDeCompras.length,"en tu carrito de compras");//

//Agregar un nuvo producto a mi carrito de compras
carritoDeCompras .push (producto);

//Muestro la nueva informacion de mi carrito
console.log("tienes ",carritoDeCompras.length," en tu carrito de compras");// 1


//Actuzalizar la cantidad de productos en el carrito
let productoID =1; //Producto a actualizar
let nuevaCantidad=3;//cantidad nueva de productos que voy a comprar
                    //producto.cantidad =nuevaCantidad;
//Verifico si mi producto existe dntro del carrito de compras para poder modificarlo, si existe actualiza la cantidad, si no, no hago nada.Todo esto se evalua con base ene el id que estoy buscando y este debe coincidir  on el id del producto que deberia tener dentro de mi caarrito de compras.
let productoExistente = carritoDeCompras.find(productID => producto.id === productID);
    if (productoExistente) {
        productoExistente.cantidad=nuevaCantidad;
    }


console.log("tienes ",carritoDeCompras.length," en tu carrito de compras");

console.log(producto);



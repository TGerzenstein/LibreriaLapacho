

//let nombre = "Tatiana";
//let apellido = "Gerzenstein";


//const DNI = "33993423";

//let suma = 1+5;
//let resto = 1-7;
//let multi = 1*24;

//let num1 = 20;
//let num2 = 223;

//let nombreCompleto = nombre + " " + apellido


//let num1 = prompt ("Ingrese número");
//let num2 = prompt ("Ingrese número");

//let resultado = num1 + num2
//alert(resultado)+

/*for(let i=0; i<=10; i+=1){
    if(i===5){
    console.log("Saltamos el 5...");
    continue;
    }
    console.log(i)
}*/

//Condicionales: pedir password a través de prompt y si es 001200 mostrar un alert.


/*let dinero = Number(prompt("Total efectivo"));
let totalCarrito = 9000;

if(dinero > totalCarrito){
    alert("El envío de su compra es gratis.");
} else { (dinero < totalCarrito )
    alert("Su compra no incluye envío.");
}*/


//Ciclos

/*
for(let i=0; i<100; i+=1){
     console.log(i);
}   if (i%2 === 0){
    document.write("El número es"+ i)
}   else {
    document.write("El número es"+ i)
}
*/
/*
let libro;

do {
    libro = prompt("Ingresar libro") 
    if (libro != "esc"){
        console.log(libro);
    }
}while(libro != "esc")
*/


/*let metodoPago = prompt("Elija método de pago")

switch (metodoPago) {
    case "efectivo":
        console.log('Pagaste con ' + metodoPago );
        break;
    case "cheque":
        console.log('Pagaste con ' + metodoPago );
        break;
    case "tarjeta":
        console.log('Pagaste con '+ metodoPago);
        break;
    default:
        console.log('No aceptamos '+ metodoPago);
}
*/


/*
let dinero = Number(prompt("Total efectivo"));
let totalCarrito = 9000;

if(dinero > totalCarrito){
    alert("El envío de su compra es gratis.");
} else { (dinero < totalCarrito )
    alert("Su compra no incluye envío.");
*/

// 1) pedir el nombre al usuario 
// 2) mostrar productos para que usuario seleccione 
// 3) informar costo de envío
// 4) Elegir métodos de pago

/*

function elegirMetodoPago() {
    let metodoPago = prompt("Elija método de pago")

    switch (metodoPago) {
    case "efectivo":
        console.log('Pagaste con ' + metodoPago );
        break;
    case "tarjeta":
        console.log('Pagaste con ' + metodoPago );
        break;
    case "mercado pago":
        console.log('Pagaste con '+ metodoPago);
        break;
    default:
        console.log('No aceptamos '+ metodoPago);
    }
}

function calcularTotalProducto() {
        let producto = prompt("Ingrese el precio del producto");
        let impuestos = "12";
        let gastosEnvio = "800";
        let total = (producto + impuestos + gastosEnvio);
        alert("El precio total es de "+ total);
        elegirMetodoPago();

}

*/


function compraRealizada(total) {
    alert("Tu compra ha sido confirmada. El total es "+ total);
}


function elegirMetodoPago(total) {
    let metodoPago = prompt("Elija método de pago")

    switch (metodoPago) {
    case "efectivo":
        console.log('Pagaste con ' + metodoPago );
        break;
    case "tarjeta":
        console.log('Pagaste con ' + metodoPago );
        break;
    case "mercado pago":
        console.log('Pagaste con '+ metodoPago);
        break;
    default:
        console.log('No aceptamos '+ metodoPago);
    }
    compraRealizada(total);
}

function confirmarClave(total,clave){
        if (clave === "001200"){
            alert('Bienvenido Roberto');
        }else{
            alert("Contraseña incorrecta");
        }
        elegirMetodoPago(total);
}

function ingresarClave(total,contraseña) {
    if(contraseña) {
        let clave = prompt("Ingresar contraseña");
        confirmarClave(total,clave)
    }else {
        console.log("Es necesario ingresar una contraseña.")
    }
}

function iniciarSesion(total,monto) {
    let contraseña = confirm("Ingresar contraseña")
    ingresarClave(total,contraseña);
}

function seleccionarOperacion(total) {
    console.log ("1: Comprar ahora");
    console.log("2: Agregar al carrito");

    let op = prompt("Ingresar opción: 1 = Comprar ahora  ,  2 = Agregar al carrito");
    switch(op){
        case "1":
           let monto = alert("Para continuar, deberás registrarte en tu cuenta");
           iniciarSesion(total,monto);
           break;
        case "2":
           let carrito = alert("Seleccionar otro producto");
           seleccionarProducto();
           break;
        default:
           console.log("¿Deseas abandonar esta compra?");
    } 
}

/*
1) Seleccionar producto 
 */

function seleccionarProducto() {
    let libro = prompt("Ingresar el nombre del libro");
    let precio = parseInt(prompt("Ingrese el precio del producto"));
    alert("Seleccionaste producto");
    let impuestos = 12;
    let gastosEnvio = 800;
    let total = precio + impuestos + gastosEnvio;
    alert("El precio total es de "+ total);
    seleccionarOperacion(total);
}

seleccionarProducto()

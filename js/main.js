
//Lista de productos
const listadoDeProductos = [ 
    {
        título: "Virginia Woolf",
        precio: 6000,
        id: 1
    },
    {
        título: "Federico Garcia Lorca",
        precio: 3000,
        id: 2
    },
    {
        título: "Silvina Ocampo",
        precio: 1200,
        id: 3
    }
]; 

// Mi carrito
let carrito = [];

/*
1) Seleccionar producto. Ingresar id del producto.
*/

function seleccionarProducto() {
    let libro = parseInt(prompt("Ingresar ID del libro = Virginia Woolf - Id: 1 , Federico G Lorca - Id: 2 , Silvina Ocampo - Id: 3"));
    alert("Seleccionaste producto");
    let producto = encontrarProducto(libro);
    carrito.push(producto);
    let totalProductos = calcularTotalCarrito();
    let impuestos = 12;
    let gastosEnvio = 800;
    let total = totalProductos + impuestos + gastosEnvio;
    alert("El precio total es de "+ total);
    seleccionarOperacion(total);
}

seleccionarProducto();

function calcularTotalCarrito() {
    let totalCarrito = 0;
    carrito.forEach((producto)=> {
            totalCarrito = producto.precio + totalCarrito 
    });   
        return totalCarrito; 
}

function encontrarProducto(id) {
    const encontrado = listadoDeProductos.find((producto) => {
        return producto.id === id;
    });
    return encontrado;
}

/*
2) Seleccionar operacion. 
Mostrar opciones: 
a) Comprar ahora; b) Si selecciona comprar ahora, 
deberá registrarse.
a) Agregar al carrito; b) Si selecciona Agregar al carrito, 
continúa seleccionando otro producto.
*/

function seleccionarOperacion(total) {
    console.log ("1: Comprar ahora");
    console.log("2: Agregar al carrito");

    let op = prompt("Ingresar opción: 1 = Comprar ahora  ,  2 = Agregar al carrito");
    switch(op){
        case "1":
           let monto = alert("Para continuar, deberás registrarte en tu cuenta");
           iniciarSesion(total);
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
3) Iniciar sesion. 
*/

function iniciarSesion(total) {
    let correo = confirm("Iniciar sesion")
    //ingresarClave(total,contraseña);
    ingresarEmail(total,correo)
}

/*
4) Ingresar clave. 
*/
function ingresarEmail(total,correo) {
    if (correo) {
       let email = prompt("Ingresar e-mail");
       confirmarEmail(total,email);
    } else {
        console.log("Es necesario ingresar una dirección de e-mail");
    }
}

function confirmarEmail(total,email) {
        if (email === "robertovez@gmail.com"){
            alert("Ahora deberás ingresar una contraseña");
        }else{
            alert("Correo incorrecto");
        }
    ingresarClave(total,email);
}

function ingresarClave(total,email) {
    if(email) {
        let clave = prompt("Ingresar contraseña");
        confirmarClave(total,clave)
    }else {
        console.log("Es necesario ingresar una contraseña.");
    } 
}

/*
5) Validar clave. 
*/

function confirmarClave(total,clave) {
    if (clave === "001200"){
        alert("Bienvenido Roberto");
    }else{
        alert("Contraseña incorrecta");
    }
    elegirMetodoPago(total);
}

/*
6) Debe seleccionar método de pago. 
*/

function elegirMetodoPago(total) {
    let metodoPago = prompt("Elija método de pago: 1 = efectivo, 2 = tarjeta, 3 = mercado pago")

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

/*
7) Se informa la confirmación de la compra y se muestra el total.
*/

function compraRealizada(total) {
    alert("Tu compra ha sido confirmada. El total es "+ total);
}
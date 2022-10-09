
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

let producto1 = {
    título: "Virginia Woolf",
    precio: 1000,
    id: 1
}

let producto2 = {
    título: "Federico Garcia Lorca",
    precio: 1000,
    id: 2
}

let producto3 = {
    título: "Silvina Ocampo",
    precio: 1000,
    id: 3
}


/*
1) Seleccionar producto. Ingresar nombre y precio. Luego, muestra el total de la compra. 
*/

function seleccionarProducto() {
    let libro = parseInt(prompt("Ingresar el ID del libro"));
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
    let contraseña = confirm("Iniciar sesion")
    ingresarClave(total,contraseña);
}

/*
4) Ingresar clave. 
*/

function ingresarClave(total,contraseña) {
    if(contraseña) {
        let clave = prompt("Ingresar contraseña");
        confirmarClave(total,clave)
    }else {
        console.log("Es necesario ingresar una contraseña.")
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

/*
7) Se informa la confirmación de la compra y se muestra el total.
*/

function compraRealizada(total) {
    alert("Tu compra ha sido confirmada. El total es "+ total);
}
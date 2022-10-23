
const productList = [
    {id: 1, title: "Virginia Woolf", precio: 6000},
    {id: 2, title: "Federico Garcia Lorca", precio: 3000},
    {id: 3, title: "Silvina Ocampo", precio: 1200}
]
//agregar precio;
//Variables a inglés; 

var carrito = []

//document.querySelector("h2").textContent = "libro nuevo"
//console.log(document.querySelector("h2"))

//document.getElementById("parrafoNuevo").textContent = "La mayoría de los libros son buenos"
//console.log(document.getElementById("parrafoNuevo"))

const parrafoNuevo = document.querySelector("#parrafoNuevo")
//parrafoNuevo.textContent = "Hola si"
//parrafoNuevo.innerHTML = "<p>Resistencia - Chaco</p>"

const addToCartBtn = Array.from(document.getElementsByClassName("add-to-cart"))
console.log(addToCartBtn)
addToCartBtn.forEach(element => {
    element.addEventListener("click", addToCart)

});
function addToCart(event) {
    event.preventDefault()
    let prodId = this.id.split("-")
    prodId = parseInt(prodId[1]); 
    console.log(prodId);
    seleccionarProducto(prodId);
}

function seleccionarProducto(libro) {
//    let libro = parseInt(libro);
    let producto = encontrarProducto(libro);
    carrito.push(producto);
    let totalProductos = calcularTotalCarrito();
    let impuestos = 12;
    let gastosEnvio = 800;
    let total = totalProductos + impuestos + gastosEnvio;
    const carTotalelement = document.getElementById("cart-total");
    carTotalelement.innerHTML = total;

    //seleccionarOperacion(total);
}

function calcularTotalCarrito() {
    let totalCarrito = 0;
    carrito.forEach((producto)=> {
            totalCarrito = producto.precio + totalCarrito 
    });   
        return totalCarrito; 
}

function encontrarProducto(id) {
    const encontrado = productList.find((producto) => {
        return producto.id === id;
    });
    return encontrado;
}





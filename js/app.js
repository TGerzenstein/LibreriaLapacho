
const productList = [
    {id: 1, title: "Virginia Woolf", precio: 6000},
    {id: 2, title: "Federico Garcia Lorca", precio: 3000},
    {id: 3, title: "Silvina Ocampo", precio: 1200}
]

let localStorageCart = localStorage.getItem('myapp_cart');
if (localStorageCart) {
    localStorageCart = JSON.parse(localStorageCart)
}

var carrito = localStorageCart || [];

const addToCartBtn = Array.from(document.getElementsByClassName("add-to-cart"))
console.log(addToCartBtn);
addToCartBtn.forEach(element => {
    element.addEventListener("click", addToCart)
});

function addToCart(event) {
    event.preventDefault()
    let prodId = this.id.split("-")
    prodId = parseInt(prodId[1]); 
    console.log(prodId);
    seleccionarProducto(prodId);
};

function initShop() {
    let totalProductos = calcularTotalCarrito();
    let impuestos = 12;
    let gastosEnvio = 800;
    let total = totalProductos + impuestos + gastosEnvio;
    const carTotalelement = document.getElementById("cart-total");
    carTotalelement.innerHTML = total;
};

function seleccionarProducto(libro) {
    let producto = encontrarProducto(libro);
    carrito.push(producto);
    let totalProductos = calcularTotalCarrito();
    let impuestos = 12;
    let gastosEnvio = 800;
    let total = totalProductos + impuestos + gastosEnvio;
    const carTotalelement = document.getElementById("cart-total");
    carTotalelement.innerHTML = total;
    updateOrder(total);
    localStorage.setItem('myapp_cart', JSON.stringify(productList));
};

function calcularTotalCarrito() {
    let totalCarrito = 0;
    carrito.forEach((producto)=> {
            totalCarrito = producto.precio + totalCarrito 
    });   
        return totalCarrito; 
};

function encontrarProducto(id) {
    const encontrado = productList.find((producto) => {
        return producto.id === id;
    });
    return encontrado;
};

function updateOrder(total) {
    let ladrillo = '<div class="shop-box1">' +
    '<p>Un cuarto propio - Virginia Woolf</p>' +
    '<p>$ 6000</p>' +
  '</div>';
    let output = '' 
    carrito.forEach((producto) => {
         output += '<div class="shop-box1">' +
    '<p>'+ producto.title +'</p>' +
    '<p>'+ producto.precio +'</p>' + 
  '</div>';
    })
    output += '<p>'+ total +'</p>';
    console.log(output);
    let carTotalprod = document.getElementById("shop-box-list");
    carTotalprod.innerHTML = output;
};

initShop()

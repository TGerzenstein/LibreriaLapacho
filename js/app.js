
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
    const newDeleteElement = document.getElementById('delproduct-' + prodId)
    newDeleteElement.addEventListener("click", deleteProducts)
};

function initShop() {
    let totalProductos = calcularTotalCarrito();
    let additional = 0;
    if (totalProductos > 0) {
        let impuestos = 12;
        let gastosEnvio = 800;
        additional = impuestos + gastosEnvio;    
    }
    let total = totalProductos + additional;
    const carTotalelement = document.getElementById("cart-total");
    carTotalelement.innerHTML = total;
    updateOrder(total);
};

function seleccionarProducto(libro) {
    let producto = encontrarProducto(libro);
    carrito.push(producto);
    let totalProductos = calcularTotalCarrito();
    let additional = 0;
    if (totalProductos > 0) {
        let impuestos = 12;
        let gastosEnvio = 800;
        additional = impuestos + gastosEnvio;    
    }
    let total = totalProductos + additional;
    const carTotalelement = document.getElementById("cart-total");
    carTotalelement.innerHTML = total;
    updateOrder(total);
    localStorage.setItem('myapp_cart', JSON.stringify(carrito));
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
   
    let output = '' 
    carrito.forEach((producto) => {
         output += '<div class="shop-box1">' +
    '<p>'+ producto.title +'</p>' +
    '<p>'+ producto.precio +'</p>' + 
    '<button id="delproduct-'+ producto.id +'" class="remove-from-cart">Eliminar</button>' +
  '</div>';
    })
    output += '<p>'+ total +'</p>';
    console.log(output);
    let carTotalprod = document.getElementById("shop-box-list");
    carTotalprod.innerHTML = output;
};

initShop();


const quitToCartBtn = Array.from(document.getElementsByClassName("remove-from-cart"))
console.log(quitToCartBtn);
quitToCartBtn.forEach(element => {
    element.addEventListener("click", deleteProducts)
});

function deleteProducts(event) {
    event.preventDefault()
    let prodId = this.id.split("-")
    prodId = parseInt(prodId[1]); 
    let remove = carrito.findIndex(elements => elements.id === prodId);
    carrito.splice(remove);
    let totalProductos = calcularTotalCarrito();
    let additional = 0;
    if (totalProductos > 0) {
        let impuestos = 12;
        let gastosEnvio = 800;
        additional = impuestos + gastosEnvio;    
    }
    let total = totalProductos + additional;
    const carTotalelement = document.getElementById("cart-total");
    carTotalelement.innerHTML = total;
    updateOrder(total);
    localStorage.setItem('myapp_cart', JSON.stringify(carrito));
};





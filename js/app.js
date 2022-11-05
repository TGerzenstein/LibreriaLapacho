
//const productList = [
//    {id: 1, title: "Virginia Woolf", precio: 6000},
//    {id: 2, title: "Federico Garcia Lorca", precio: 3000},
//    {id: 3, title: "Silvina Ocampo", precio: 1200}
//]

    var productList = [];
let localStorageCart = localStorage.getItem('myapp_cart');
if (localStorageCart) {
    localStorageCart = JSON.parse(localStorageCart)
}

var carrito = localStorageCart || [];

function loadCatalog(){
     fetch('https://openlibrary.org/api/books?bibkeys=ISBN:0451526538,ISBN:8420431028&format=json&jscmd=data')
     .then(response => response.json())
     .then(data => {
        //console.log(data)
        Object.values(data).forEach(val => {
            productList.push({
                id: parseInt(val.identifiers.isbn_10[0]),
                title: val.title,
                precio: 500,
                cover: val.cover.medium
            });
           
          });
          //console.log(productList);
          let output = '';
          productList.forEach((producto) => {
            output += '<div class="card"  style="width: 18rem; height: 41rem;">' + 
        '<img src="'+ producto.cover +'" class="card-img-top" alt="...">' +
             '<div class="card-body">'+
             '<h5 class="card-title">'+ producto.title +'</h5>'+
             '<p class="card-text">' + producto.precio + ' +</p>' +
             '<button id="product-' + producto.id + '" class="btn btn-primary add-to-cart">' + ' Agregar al carrito ' + '</button>' + 
             '</div>' +
             '</div>'
       });
       let carTotalprod = document.getElementById("product-list");
       carTotalprod.innerHTML = output;
       const addToCartBtn = Array.from(document.getElementsByClassName("add-to-cart"))
       //console.log(addToCartBtn);
       addToCartBtn.forEach(element => {
       element.addEventListener("click", addToCart)
       });
    });
};


function addToCart(event) {
    event.preventDefault();
    let prodId = this.id.split("-");
    prodId = parseInt(prodId[1]); 
    console.log(prodId);
    seleccionarProducto(prodId);
    const newDeleteElement = document.getElementById('delproduct-' + prodId)
    newDeleteElement.addEventListener("click", deleteProducts)
};

function initShop() {
    loadCatalog();
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

    const quitToCartBtn = Array.from(document.getElementsByClassName("remove-from-cart"))
console.log(quitToCartBtn);
quitToCartBtn.forEach(element => {
    element.addEventListener("click", deleteProducts)
});
    
};

function seleccionarProducto(id) {
    let producto = encontrarProducto(id);
    console.log(carrito);
    carrito.push(producto)
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
    carrito.forEach((producto) => {
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
    });
    output += '<p style="padding: 1rem;"> Total: '+ total +'</p>';
    //console.log(output);
    let carTotalprod = document.getElementById("shop-box-list");
    carTotalprod.innerHTML = output;
};

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

function finishPurchase() {
    const newOrder = document.getElementById('order-block')
    const purchaseComplete = document.getElementById('purchase-complete')
    purchaseComplete.innerHTML = newOrder.outerHTML;
    const checkOut = document.getElementById('c-out')
    checkOut.classList.add('d-none');
    const listProducts = document.getElementById('product-list')
    listProducts.classList.add('d-none');
    const resumeShop = document.getElementById('resume')
    resumeShop.classList.add('d-none');
};

const deleteBook = document.getElementById('finish-purchase')
    deleteBook.addEventListener("click", finishPurchase);

initShop();
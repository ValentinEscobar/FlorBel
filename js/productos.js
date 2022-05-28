//Pagina PRODUCTOS
//boton comprar
let botonComprar=document.getElementById("btn__comprar");
botonComprar.addEventListener("click",btnComprar);
//funcion comprar
function btnComprar(){
    alert("felicidades por su compra")
}

/*
// funcion constructora de objetos de la pagina web
class Product{
    constructor(nameProduct, priceProduct) {
        this.nameProduct = nameProduct.toLowerCase();
        this.priceProduct = parseFloat(priceProduct);
    }
    discount() {
        this.precio = this.precio * 0.05;
    }
}
//Declaro un array para almacenar el producto y su precio
const products = [{nameProduct:"Jabon aloe", priceProduct:"120"},
                  {nameProduct:"jabon de Coco con semillas de Amapolas", priceProduct:"120"},
                  {nameProduct:"Escencia de bambu", priceProduct:"230"},
                  {nameProduct:"Mascarilla de arsilla", priceProduct:"100"}];

//Declaro un array para almacenar los productos que va comprando en el carrito
const carrito = [];
//funcion agregar productos a la web
function addProduct() {
    //ingresa el nuevo porducto
    nameProduct = prompt("Ingrese el nombre del nuevo producto");
    priceProduct = prompt("Ingrese el precio del nuevo producto");
    if ((nameProduct != "") && (priceProduct != "")) {
        //guarda el objeto producto en el array porducts
        products.push(new Product(nameProduct, priceProduct));
        //mensaje de confiramcion
        alert("su producto a sido agregado.")
    } else {
        alert("error al ingresar el producto")
    }   
}
//funcion eliminar productos de la web
function rmvProduct() {
    // ingresa el producto a eliminar
    let rmvProduct = prompt("Ingrese el producto que desea eliminar");
    //chequear si existe el producto ingresado
    let conditionrmv = products.indexOf(rmvProduct);
    if (conditionrmv!=-1) {
        //eliminacion de producto
        products.splice(conditionrmv, 1);
        // mensaje de confiramcion de eliminacion
        alert("Su producto a sido eliminado");
    } else {
        alert("El producto ingresado no existe")
    }
}
// //funcion agregar productos al carrito
// function addCarrito() {

// }
// //funcion eliminar productos del carrito
// function rmvCarrito() {
    
// }
// //funcion sumar el precio total de todos los productos del carrito
// function totalPurchase() {
// discount()
// }

*/

//Pagina PRODUCTOS
// funcion constructora de objetos de la pagina web
class Product{
    constructor(nameProduct, priceProduct) {
        this.nameProduct = nameProduct.toLowerCase();
        this.priceProduct = parseFloat(priceProduct);
        this.idProduct = idProduct;
    }
    discount() {
        this.precio = this.precio * 0.05;
    }
}
//Declaro un array para almacenar el producto y su precio
const products = [{
    idProduct: 1, 
    nameProduct:"Pack 5", 
    priceProduct:"480"
},
{
    idProduct: 2, 
    nameProduct:"Pack 6", 
    priceProduct:"480"
},
{
    idProduct: 3, 
    nameProduct:"Pack 6 Ultra", 
    priceProduct:"600"},
{
    idProduct: 4, 
    nameProduct:"Pack 6 Mega", 
    priceProduct:"360"},
{
    idProduct: 5, 
    nameProduct:"Pack 6 Estelar", 
    priceProduct:"360"
},
{
    idProduct: 6, 
    nameProduct:"Jabon de rosas", 
    priceProduct:"120"
},
{
    idProduct: 7, 
    nameProduct:"Jabon de avena y miel", 
    priceProduct:"120"
},
{
    idProduct: 8, 
    nameProduct:"Jabon de brisa marina", 
    priceProduct:"120"
},
{
    idProduct: 9, 
    nameProduct:"Jabon canela y cafe", 
    priceProduct:"120"
},
{
    idProduct: 10, 
    nameProduct:"Jabon carbon activado", 
    priceProduct:"120"
},
{
    idProduct: 11, 
    nameProduct:"Jabon coco", 
    priceProduct:"120"
},
{
    idProduct: 12, 
    nameProduct:"Jabon lavanda", 
    priceProduct:"120"
}];

//declaro variable carrito
let carrito;
// verificacion de contenido de array carrito
if(sessionStorage.getItem("carrito")!=null){
    //chequeo si hay elementos en el carrito
    carrito=JSON.parse(sessionStorage.getItem("carrito"));
    //mostrarlos por modal o push bar

}else{
    //Declaro un array para almacenar los productos que va comprando en el carritos
    carrito=[];
}

//funcion agregar al carrito
function addProductCarrito(newProductCarrito) {
    carrito.push(newProductCarrito);
    console.log(carrito);
    //alert("producto: "+newProductCarrito.nameProduct+" agregado al carro!")
    sessionStorage.setItem("carrito",JSON.stringify(carrito));
}

//Botones comprar
//boton comprar pack 5
let botonComprarPack5=document.getElementById("btn__comprar--pack5");
botonComprarPack5.addEventListener("click", function (){addProductCarrito(products[0])});
//boton comprar pack 6
let botonComprarPack6=document.getElementById("btn__comprar--pack6");
botonComprarPack6.addEventListener("click", function (){addProductCarrito(products[1])});
//boton comprar pack 6 Ultra
let botonComprarPack6U=document.getElementById("btn__comprar--pack6u");
botonComprarPack6U.addEventListener("click", function (){addProductCarrito(products[2])});
//boton comprar pack 6 Mega
let botonComprarPack6M=document.getElementById("btn__comprar--pack6m");
botonComprarPack6M.addEventListener("click", function (){addProductCarrito(products[3])});
//boton comprar pack 6 Estekar
let botonComprarPack6E=document.getElementById("btn__comprar--pack6e");
botonComprarPack6E.addEventListener("click", function (){addProductCarrito(products[4])});
 //boton comprar jabon de rosas
 let botonComprarjabonrosas=document.getElementById("btn__comprar--jabonrosas");
 botonComprarjabonrosas.addEventListener("click", function (){addProductCarrito(products[5])});
 //boton comprar jabon de avena y miel
 let botonComprarjabonavenaymiel=document.getElementById("btn__comprar--jabonavenaymiel");
 botonComprarjabonavenaymiel.addEventListener("click", function (){addProductCarrito(products[6])});
 //boton comprar jabon de brisa marina
 let botonComprarjabonbrisamarina=document.getElementById("btn__comprar--jabonbrisamarina");
 botonComprarjabonbrisamarina.addEventListener("click", function (){addProductCarrito(products[7])});
 //boton comprar jabon de canela y cafe
 let botonComprarjaboncanelaycafe=document.getElementById("btn__comprar--jaboncanelaycafe");
 botonComprarjaboncanelaycafe.addEventListener("click", function (){addProductCarrito(products[8])});
 //boton comprar jabon de carbon activado
 let botonComprarjaboncarbonactivado=document.getElementById("btn__comprar--jaboncarbonactivado");
 botonComprarjaboncarbonactivado.addEventListener("click", function (){addProductCarrito(products[9])});
 //boton comprar jabon de coco
 let botonComprarjaboncoco=document.getElementById("btn__comprar--jaboncoco");
 botonComprarjaboncoco.addEventListener("click", function (){addProductCarrito(products[10])});
 //boton comprar jabon de lavanda
 let botonComprarjabonlavanda=document.getElementById("btn__comprar--jabonlavanda");
 botonComprarjabonlavanda.addEventListener("click", function (){addProductCarrito(products[11])});


/*
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

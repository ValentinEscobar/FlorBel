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
    let conditionrmv = products.indexOf(rmvProduct)
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
//declaracion de usuario y contraseña de administrador
let user="admin";
let password="root";
//funcion registrarse
function signin(){
    user = prompt("registre un Usuario:");
    password = prompt("registre una contaseña:");
    // verificar registro de usuario y contraseña
    if ((user != "") && (password != "")) {
        alert("Usuario: "+user+" Registrado");
    } else {
        alert("Error al registrar usuario y/o contraseña");
    }
}
//funcion inicio de sesion
let comprobador;
function login() {
    userin = prompt("ingrese su Usuario:");
    passin = prompt("ingrese su contaseña:");
    // comprobacion de usuario y contraseña correctos
    if ((user == userin) && (password == passin)) {
        alert("bienvenido/a");
        comprobador = true;
    } else {
        alert("Usuario y/o contraseña incorrectos");
        comprobador = false;
    }
}
//funcion felicitar por la compra
// function congratsPurchase() {
//     alert("Felicidades por la compra de su nuevo "+carrito.join("\n"));
// }
// funcion mostrar productos en stock
function showProducts() {
    //funcion de orden superior para recorrer el array de productos y mostrar la lista con el precio en consola
    products.forEach((products) => {
        console.log("Producto: "+products.nameProduct+" $"+products.priceProduct);
    })
}
// funcion mostrar productos en el carrito
// function showCarritoProducts() {
//     //funcion de orden superior para recorrer el array de carrito y mostrar la lista con el precio en consola
//     products.forEach((carrito) => {
//         console.log("actualmente usted tiene en su carrrito: "+carrito.nameProduct+" $"+carrito.priceProduct)
//     })
// }
let option = parseInt(prompt("Opcion N°1: Mostrar productos en stock\nOpcion N°2: Comprar producto.\nOpcion N°3: Comuniquese con nosotros\nOpcion N°4: Visitar nuestro local\nOpcion N°5: Ingresar para administrar el inventario"));
// Opcion N°1: Mostrar productos en stock
if (option == 1) {
    // Lista de productos con su precio
    showProducts();
 } 
 // Opcion N°2: Comprar producto.
 else if (option == 2){
    // Lista de productos para agregar al carrito
    showProducts();
    // Producto que quiere comprar
    let productIn = prompt("Ingrese el producto que quiere comprar")
    // Verificar si existe producto
    let encontrado=products.find((products)=> products.nameProduct == productIn);
    alert("Felicidades por la compra de su "+encontrado.nameProduct+" $"+encontrado.priceProduct);
 } 
 // Opcion N°3: Comuniquese con nosotros
 else if (option == 3){
    // Lugar donde escribe el mensaje
    prompt("Escriba su mensaje porfavor.");
    // Confirmacion de envio de mensaje
    alert("Su mensaje a sido enviado, contestaremos a la breveded.");
 } 
 // Opcion N°4: Visitar nuestro local
 else if (option == 4){
    let nameVisit = prompt("Ingrese su nombre para agendar visita:");
    let dateVisit = prompt("Ingrese fecha de visita:");
    // retorno con el nombre y fecha de visita
    alert("Señora/or "+nameVisit+" usted esta agendado para el dia "+dateVisit);
} 
// Opcion N°5: Ingresar para administrar el inventario
else if (option == 5){
    // preguntar si login o signin
    let optionlog = parseInt(prompt("Ingrese 1 para ingresar o 2 para registrarse"));
    // Opcion 1 Logearse
    if (optionlog == 1) {
        login();
        if (comprobador == true) {
            let optionUser = parseInt(prompt("elija que desee realizar:\n1:Agregar productos a la web\n2:Eliminar productos a la web\n3:Modificar producto de la web"));
            //agregar producto a la web
            if (optionUser == 1) {
                let continput = parseInt(prompt("ingrese cuantas productos desea ingresar"))
                if (continput!=0) {
                    for (let i = 0; i < continput; i++) {
                        addProduct();
                    }
                    showProducts();
                } else {
                    alert("error al ingresar opcion")
                }
    } 
    //eliminar producto a la web
    else if (optionUser == 2) {
        rmvProduct()
    } 
    //modificar producto de la web
    else if (optionUser == 3) {
        alert("Modificar producto de la web");
    } else{
        alert("Opcion incorrecta");
    }
        }
    } 
    // Opcion 2 registrarse
    else if (optionlog == 2){
        signin();
    } else{
        alert("Opcion incorrecta");
    }
}
// Alerta de error en caso de no ingresar una opcion correcta
else {
     alert("Opcion invalida.")
}
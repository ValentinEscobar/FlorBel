//Pagina PRODUCTOS

// // funcion constructora de objetos de la pagina web
// class Product{
//     constructor(nameProduct, priceProduct) {
//         this.nameProduct = nameProduct.toLowerCase();
//         this.priceProduct = parseFloat(priceProduct);
//         this.idProduct = idProduct;
//     }
//     discount() {
//         this.precio = this.precio * 0.05;
//     }
// }

//Declaro un array para almacenar el producto y su precio
const products = [{
    idProduct: 1, 
    nameProduct:"Pack 5", 
    priceProduct:"480",
    imgProduct: "../assets/img/caja-pack1.jpg",
    shortDescription: "Llevate 5 jabones y paga solo 4"
},
{
    idProduct: 2, 
    nameProduct:"Jabon de rosas", 
    priceProduct:"120",
    imgProduct: "../assets/img/jabon-rosas2.jpg",
    shortDescription: "Jabón de rosas para pieles sencibles, mantiene tu piel suave."
},
{
    idProduct: 3, 
    nameProduct:"Jabon de avena y miel", 
    priceProduct:"120",
    imgProduct: "../assets/img/jabon-avenaymiel.jpg",
    shortDescription: "Hidrata y deja tu piel suave, ademas tiene un aroma exquisito."
},
{
    idProduct: 4, 
    nameProduct:"Jabon de brisa marina", 
    priceProduct:"120",
    imgProduct: "../assets/img/jabon-brisamarina.jpg",
    shortDescription: "Con un apareciencia única! un aroma que transporta."
},
{
    idProduct: 5, 
    nameProduct:"Jabon canela y cafe", 
    priceProduct:"120",
    imgProduct: "../assets/img/jabon-canelacafe.jpg",
    shortDescription: "¿Sos amante del café como yo? Nada mejor que una exfoliación que te deje un suave aroma a café!"
},
{
    idProduct: 6, 
    nameProduct:"Jabon carbon activado", 
    priceProduct:"120",
    imgProduct: "../assets/img/jabon-carbonactivado.jpg",
    shortDescription: "Jabón con propiedades antioxidates."
},
{
    idProduct: 7, 
    nameProduct:"Jabon coco", 
    priceProduct:"120",
    imgProduct: "../assets/img/jabon-coco.jpg",
    shortDescription: "Exelente para nutrir e hidratar tu piel, ademas es apto para todo tipo de piel."
},
{
    idProduct: 8, 
    nameProduct:"Jabon lavanda", 
    priceProduct:"120",
    imgProduct: "../assets/img/jabon-lavanda.jpg",
    shortDescription: "Jabón con propiedades relajates para nunca dejar de mimar tu piel."
}];

const listaProductos = document.getElementById("listProducts")
const listaCarrito = document.getElementById("carrito")
//declaro variable carrito
const carrito = []

//funcion para organizar en cards los productos
const renderProductos = (mostrando) =>{

    mostrando.forEach(element => {
        
        let card = document.createElement('div')
        card.className = "card"
        card.style = "width: 20rem;"
        card.innerHTML = `
        <img src=${element.imgProduct}></img>
        <h3>${element.nameProduct}</h3>
        <p>${element.shortDescription}</p>
        <p>${element.priceProduct}</p>
        <button class="btn btn-carrito btn-success" id=${element.idProduct}>Agregar al carrito</button>
        `

        listaProductos.appendChild(card)

    });

}
//Llamo a la funcion para que muestre todos los productos del array products en pantalla 
renderProductos(products);


const buttons = document.getElementsByClassName("btn-carrito")

for(const button of buttons){
    button.addEventListener('click', (e)=>{
    
        
    let elemento = products.find(element=> element.id == e.target.id);
    juanito(elemento);
    // addCarrito(product);


    })
}

//funcion usando libreria para mostrar notificacion de agregado al carrito
function juanito (products) {

         Toastify({
             text: `Agregaste ${products.nameProduct.toLowerCase()} al carrito`,
             duration: 3000,
             gravity: "top",
             position: "right", 
             stopOnFocus: true,
             style: {
               background: "linear-gradient(to right, #00b09b, #96c93d)",
             },
             onClick: function(){
    
             } // Callback after click
           }).showToast();
}

/*
function addCarrito (elementPurchase) {
     

     let seRepite = carrito.findIndex(element => element.titulo == objeto.titulo)
     console.log(seRepite)
     console.log(carrito)

     if(seRepite == -1){
         elementPurchase.cantidad = 1
         carrito.push(objeto)
     }else{
         carrito[seRepite].cantidad ++
     }
    

    listaCarrito.innerHTML = ''



    for(const product of carrito){
        let li = document.createElement("li")
        li.innerHTML= `
        <div>
        <p>${product.titulo}</p> 
        <p>${product.precio}</p>
        <p>${product.cantidad}</p>
        </div>
        `
        listaCarrito.appendChild(li)
    }
}
*/


/*
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
    alert("producto: "+newProductCarrito.nameProduct+" agregado al carro!")
    sessionStorage.setItem("carrito",JSON.stringify(carrito));
}
*/

// un JS que tenga solo los productos

// hacer que automaticamente por cada objeto genere una tarjeta que contenga la imagen, el nombre, una breve descripcion, precio y el boton comprar

// hacer una funcion para recorrer cada boton y asignarle la funcion del boton

//agregar el sweet alert en cada boton comprar y en el boton de finalizar la compra


/*
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

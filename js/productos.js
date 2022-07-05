//Pagina PRODUCTOS

//Declaro un array para almacenar la informacion de los productos
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

// verificacion de contenido de array carrito
if(sessionStorage.getItem("carrito")!=null){
    //chequeo si hay elementos en el carrito
    carrito=JSON.parse(sessionStorage.getItem("carrito"));

}else{

    //Declaro un array para almacenar los productos que va comprando en el carritos
    carrito=[];

}


const listaProductos = document.getElementById("listProducts")
const listaCarrito = document.getElementById("carrito")

//funcion para organizar en cards los productos
const renderProductos = (mostrando) =>{

    mostrando.forEach(element => {
        
        let card = document.createElement('div')
        card.className = "d-flex flex-column p-2 bd-highlight justify-content-center card card-productos"
        card.style = "width: 20rem;"
        card.innerHTML = `
        <img src=${element.imgProduct}></img>
        <h3>${element.nameProduct}</h3>
        <p>${element.shortDescription}</p>
        <h5>${element.priceProduct}</h5>
        <button class="btn btn-carrito btn-success" id=${element.idProduct}>Agregar al carrito</button>
        `
        listaProductos.appendChild(card)
    });
}

//Llamo a la funcion para que muestre todos los productos del array products en pantalla 
renderProductos(products);

//declaro una variable que llama a todos los botones con la clase "btn-carrito"
const buttons = document.getElementsByClassName("btn-carrito")

//for of para recorrer los botones y asignarles un listener, un find, una funcion de alerta y una funcion de agregar al carrito
for(const button of buttons){
    button.addEventListener('click', (e)=>{
    let elemento = products.find(element=> element.idProduct == e.target.id);
    //funcion usando libreria para mostrar notificacion de agregado al carrito
    successpurchase(elemento);
    //funcion de agregado al carrito
    addCarrito(elemento);
    })
}

//funcion usando libreria para mostrar notificacion de agregado al carrito
function successpurchase (produ) {
    Swal.fire({
        icon: 'success',
        title: `${produ.nameProduct.toLowerCase()}`,
        text: `Agregaste ${produ.nameProduct.toLowerCase()} al carrito`,
      })
         
}

//funcion de agregado al carrito
function addCarrito (elementPurchase) {
     

     let seRepite = carrito.findIndex(Productos => products.nameProduct == elementPurchase.nameProduct)
     console.log(seRepite)
     console.log(carrito)

     if(seRepite == -1){
         elementPurchase.cantidad = 1
         carrito.push(elementPurchase)
         sessionStorage.setItem("carrito",JSON.stringify(carrito));
     }else{
         carrito[seRepite].cantidad ++
         sessionStorage.setItem("carrito",JSON.stringify(carrito));
     }

//tabla carrito
let tabla=document.createElement("table");
tabla.className="table table-striped";
let tablaCarrito = document.createElement("tbody");
// limpia el array carrito de todo lo anterior
listaCarrito.innerHTML = ''
//recorre el carrito y si hay nuevos productos los ingresa
for(const product of carrito){
    let fila=document.createElement("tr");
    fila.innerHTML=`
        <td>${product.nameProduct}</td>
        <td>$ ${product.priceProduct}</td>
        `;
        tablaCarrito.appendChild(fila);
}

tabla.appendChild(tablaCarrito);

let tablePosition=document.getElementById("carrito");
tablePosition.appendChild(tabla);
}

//funcion usando libreria de compra realizada
function successAllPurchase () {
    if (sessionStorage.getItem("carrito")!=null) {
        Swal.fire({
            icon: 'success',
            title: `Su compra a sido realizada`,
            text: `Nos comunicaremos a la brevedad para enviarle su compra.`,
        })
    }else{
        Swal.fire({
            icon: 'error',
            title: `No hay articulos en el carrito`,
            text: `Seleccione los articulos que quiera comprar para poder realizar su compra correctamente.`,
          })
    }
}

//declaro una variable que llama al boton para confirmar compra
let purchaseButton = document.getElementById("purchaseAll")

//Funcion de boton para confirmar la compra
purchaseButton.addEventListener("click", successAllPurchase);

//traigo la estructura a traves de un id para poder insertarle una card con un appenchild
const listaproximosProdu = document.getElementById("listaProximosProductos");

//traigo el json local para poner los productos que proximamente saldran a la venta
function obtenerproximosproductos(){
    const URLJSON="../proximosProductos.json";
    //agrego un boton 
    document.querySelector("#listaProximosProductos").innerHTML='<button id="cargarproxproductos" class="btn btn-danger">Ver prox productos</button>';
    //evento para el boton
    document.querySelector("#cargarproxproductos").onclick=()=>{
        fetch(URLJSON)
            .then((respuesta)=>respuesta.json())
            .then((data)=>{
                let prodProx=data.productosProximos;
                //for of de todos los productos que tengo en el json
                for(const productprox of prodProx){
                    //incerto en la pagina todos los proximos productos que saldran a la venta
                    let card = document.createElement('div')
                    card.className = "d-flex flex-column p-2 bd-highlight justify-content-center card card-productos"
                    card.style = "width: 20rem;"
                    card.innerHTML = `
                    <img src=${productprox.imagen}></img>
                    <h3>${productprox.nombre}</h3>
                    <p>${productprox.descripcion}</p>
                    `
                    listaproximosProdu.appendChild(card)
                }
            })
            .catch((error)=>{
                console.log("Error: "+error);
            });
    }
}
//llamo a la funcion de proximos productos para ver cuales son los nuevos productos
obtenerproximosproductos();

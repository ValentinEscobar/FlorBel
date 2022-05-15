
function FelicitacionPrducto(parametroF) {
    alert("Felicidades por su nuevo "+ parametroF)
}

let entrada = parseInt(prompt("Opcion N°1: Mostrar productos en stock\nOpcion N°2: Comprar producto.\nOpcion N°3: Comuniquese con nosotros\nOpcion N°4: Visitar nuestro local\nOpcion N°5: Ingresar producto"))
// Opcion N°1: Mostrar productos en stock
if (entrada == 1) {
    // Lista de productos con su precio
    alert("Estos son los productos actualmente en stock\nProducto 1: jabon de aloe $120\nProducto 2: jabon de Coco con semillas de Amapola $120\nProducto 3: Escencia de bambu $250\nProducto 4: Mascarrilla de arsilla $300");
 } 
 // Opcion N°2: Comprar producto.
 else if (entrada == 2){
     // Lista de productos para comprar
    let numEnt = parseInt(prompt("¿que desea comprar? \nProducto 1: jabon de aloe \nProducto 2: jabon de Coco con semillas de Amapola \nProducto 3: Escencia de bambu \nProducto 4: Mascarilla de arsilla "));
    // Mensaje de compra segun el producto seleccionado
    switch (numEnt) {
        case 1:
            FelicitacionPrducto("Jabon de aloe");
            break;
        case 2:
            FelicitacionPrducto("jabon de Coco con semillas de Amapolas");
            break;
            case 3:
                FelicitacionPrducto("Escencia de bambu");
                break;
            case 4:
                FelicitacionPrducto("Mascarilla de arsilla");
                break;
        default:
            alert("No Existe el producto seleccionado.");
            break;
        }
 } 
 // Opcion N°3: Comuniquese con nosotros
 else if (entrada == 3){
    // Lugar donde escribe el mensaje
    prompt("Escriba su mensaje porfavor.");
    // Confirmacion de envio de mensaje
    alert("Su mensaje a sido enviado, contestaremos a la breveded.");

 } 
 // Opcion N°4: Visitar nuestro local
 else if (entrada == 4){
    let nombreVisita = prompt("Ingrese su nombre para agendar visita:");
    let fechaVisita = prompt("Ingrese fecha de visita:");
    // retorno con el nombre y fecha de visita
    alert("Señora/or "+nombreVisita+" usted esta agendado para el dia "+fechaVisita)

} 
// Opcion N°5: Ingresar producto
else if (entrada == 5){
    // Define cuantos productos quiere introducir
    let cantProdcutos = parseInt(prompt("¿Cuantos productos desea ingresar?"));
    // Retorno la cantidad de veces que eligio ingresar productos
    for (let i = 1; i < cantProdcutos; i++) {
        let producto = prompt("ingrese un producto.")
        let precioproducto = prompt("ingrese el precio del producto.")
    }
// Alerta de error en caso de no ingresar una opcion correcta
} else {
     alert("error")
}

//Pagina CONTACTO

//declaracion de llamado de elementos por ID
let campoNombre=document.getElementById("nombre");
let campoEmail=document.getElementById("email");
let campoTelefono=document.getElementById("telefono");
let formContacto=document.getElementById("formContacto");
//validacion de campos
formContacto.addEventListener("submit",validarFormulario);
//funcion validar informacion antes de enviar
function validarFormulario(ev){
    if((campoNombre.value=="")||(campoEmail.value=="")||(campoTelefono.value=="")||(isNaN(campoTelefono.value))){
        ev.preventDefault();
        alert("Ingrese la informacion correctamente");
    }else{
        alert("Enviado con exito");
    }
}
//funcion comprobacion de datos de nombre
campoNombre.oninput=()=>{
    if(!isNaN(campoNombre.value)){
        campoNombre.style.color="red";
    }else{
        campoNombre.style.color="black";
    }
}
//funcion comprobacion de datos de Telefono
campoTelefono.oninput=()=>{
    if(isNaN(campoTelefono.value)){
        campoTelefono.style.color="red";
    }else{
        campoTelefono.style.color="black";
    }
}

//Pagina INDEX
//usario y contraseña

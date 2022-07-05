//Pagina CONTACTO

//declaracion de llamado de elementos por ID
let campoNombre=document.getElementById("nombre");
let campoEmail=document.getElementById("email");
let campoTelefono=document.getElementById("telefono");
let formContacto=document.getElementById("formContacto");

//declaracion de que evento escuchar
formContacto.addEventListener("submit",validarFormulario);

//funcion validar informacion antes de enviar
function validarFormulario(ev){
    if((campoNombre.value=="")||(campoEmail.value=="")||(campoTelefono.value=="")||(isNaN(campoTelefono.value))){
        ev.preventDefault();
        errorinf ();
    }else{
        sendsuccess ();
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

//funcion usando libreria para mostrar notificacion de error al ingresar informacion
function errorinf () {
    Swal.fire({
        icon: 'error',
        title: 'No se puede enviar',
        text: 'La informacion no ah sido ingresada correctamente, compruebe que todos sus datos esten correctos'
      })
         
}

//funcion usando libreria para mostrar notificacion de confirmacion
function sendsuccess () {
    Swal.fire({
        icon: 'success',
        title: 'Enviado con exito',
        text: 'Sus datos han sido enviados correctamente.'
      })
         
}
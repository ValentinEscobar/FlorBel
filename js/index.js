/*
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
    }
}else if (optionlog == 2){
    signin();
} else{
    alert("Opcion incorrecta");
}
*/
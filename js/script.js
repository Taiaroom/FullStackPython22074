function bienvenida () {
    alert("¡Bienvenidos!");
    nombre=prompt("Ingrese su nombre:");
    console.log(nombre);
    edad=parseInt(prompt("Ingrese su edad:"));
    console.log(edad);
    if (edad>=18) {
        alert("Sos mayor de edad. Puedes ver esta página.");
    } else {
        alert("No sos mayor de edad. No puedes ver esta página.");
    }
}
function opcion () {
    opcion=parseInt(prompt("Selecione una opcion: 1-primera, 2-segunda, 3-tercera"));
    switch (opcion) {
        case 1: 
            alert("Primera opcion");
            break;
        case 2: 
            alert("Segunda opcion");
            break;
        case 3: 
            alert("Tercera opcion");
            break;
        default:
            alert("La opcion no es valida");
    }
}
function time(){
    now = new Date();
    localtime = now.toString();
    utctime = now.toGMTString();
    document.write("<b>Hora local:</b> " + localtime + "<br>");
    document.write("<b>UTC tiempo:</b> " + utctime);
}

function saludar(){
    var1="¡Hola ";
    var2="! Bienvenido/a a"
    document.write("<h1>" + var1 + nombre +  var2 + "</h1>");
}
function form() {
    var formulario = document.getElementsByName('formulario')[0],
        elementos = formulario.elements,
        boton = document.getElementById('btn');

    var validarNombre = function(e){
        if (formulario.nombre.value == 0){
            alert("Completa el campo nombre");
            e.preventDefault();
        }
    };
    var validarApellido = function(e){
        if (formulario.apellido.value == 0){
            alert("Completa el campo apellido");
            e.preventDefault();
        }
    };
    var validarMail = function(e){
        if (formulario.mail.value == 0){
            alert("Completa el campo e-mail");
            e.preventDefault();
        }
    };
    var validarRadio = function(e){
        if (formulario.sexo[0].checked == true || 
            formulario.sexo[1].checked == true){
        } else{
            alert("Completa el campo sexo");
            e.preventDefault();
        }
    };
    var validarCheckbox = function(e){
        if (formulario.terminos.checked == false){
            alert("Acepta los términos y condiciones");
            e.preventDefault();
        }
    };

    var validar = function(e){
        validarNombre(e);
        validarApellido(e);
        validarMail(e);
        validarRadio(e);
        validarCheckbox(e);
    };
    formulario.addEventListener("submit", validar);
}
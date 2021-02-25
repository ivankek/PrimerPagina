function validacionContacto(){ 
var nombre = document.getElementById("nombre2");
var email = document.getElementById("email");
var telefono = document.getElementById("tele2");
var consulta = document.getElementById("consulta");
var expresionesRegularesEmail = /^[0-9a-zA-Z._.-]+\@[0-9a-zA-Z._.-]+\.[0-9a-zA-Z]+$/
var expresionesRegularesTelefono = /^[0-9]{4}[-][0-9]{4}$/

var mensajeError = " ";
var errorBoolean = false;
errorContacto.style.color = 'red';
    
    if(nombre.value == null || nombre.value == ''){
    mensajeError += "<p>Ingresar nombre y apellido<p>"
    errorBoolean = true;
    nombre.focus();
    }

    if(telefono.value == null || telefono.value == ''){
     
            } 
     
     else if (!expresionesRegularesTelefono.test(document.getElementById("tele2").value)) {
     error = true;
     mensajeError += "<p>Ingrese un formato de telefono correcto";
            }        
            
    if(email.value == null || email.value == ''){
                mensajeError += "<p>Ingresar email<p>"
                errorBoolean = true;
                email.focus();
                }
                
    else if (!expresionesRegularesEmail.test(document.getElementById("email").value)) {
                    error = true;
                    mensajeError += "<p>Ingrese un formato de email correcto.<br> Ejemplo: ejemplo@ejemplo.com</p>"
                }

    if(consulta.value == null || consulta.value == ''){
        mensajeError += "<p>Ingrese su consulta<p>"
        errorBoolean = true;
        consulta.focus();
    }
  
            
                if (errorBoolean == true) {
                    document.getElementById("errorContacto").innerHTML = mensajeError;
                    return false;
                } else {
                    document.getElementById("errorContacto").style.display = "none";
                    var mensajeFormularioCompletado = "";
                    seHaCompletadoContacto.style.color = 'green';
                    mensajeFormularioCompletado = "El formulario fue completado correctamente";
                    document.getElementById("seHaCompletadoContacto").innerHTML = mensajeFormularioCompletado;
                    return false;
                }      

}

function contarCaracteres() {    
    const cantidad = 1000;
    var caracteres = document.getElementById("consulta").value.length;
    var restantes = cantidad - caracteres;
    document.getElementById("caracteres").innerHTML = restantes;
  
}


function validacion(){

var nombre = document.getElementById("nombre");
var dni = document.getElementById("dni");
var telefono = document.getElementById("telefono");
var enfermedades = 0;

var mensajeError = "";
var errorBoolean = false;
error.style.color = 'red';

if(nombre.value == null || nombre.value == ''){
mensajeError += "<p>Ingresar nombre y apellido<p>"
errorBoolean = true;
nombre.focus();
}

if(dni.value == null || dni.value == ''){
    mensajeError += "<p>Ingresar dni<p>"
    errorBoolean = true;
    dni.focus();
    }

if(telefono.value == null || telefono.value == ''){
        mensajeError += "<p>Ingresar teléfono<p>"
        errorBoolean = true;
        telefono.focus();
        }   

    
   
var seleccionado = "no";
var sintomas= document.getElementsByName("fiebre"); 
for(i in sintomas){
    if(sintomas[i].checked){
        seleccionado = "si";
        enfermedades++;
    }
}

if(seleccionado == "no"){
    mensajeError+= "<p>Seleccionar si tuvo fiebre mayor a 38<p>"
    errorBoolean = true;
}

var seleccionado = "no";
var sintomas= document.getElementsByName("cabeza"); 
for(i in sintomas){
    if(sintomas[i].checked){
        seleccionado = "si";
        enfermedades++;
    }
}

if(seleccionado == "no"){
    mensajeError+= "<p>Seleccionar si tuvo dolor de cabeza<p>"
    errorBoolean = true;
}

var seleccionado = "no";
var sintomas= document.getElementsByName("tos"); 
for(i in sintomas){
    if(sintomas[i].checked){
        seleccionado = "si";
        enfermedades++;
    }
}

if(seleccionado == "no"){
    mensajeError+= "<p>Seleccionar si tuvo tos persistente<p>"
    errorBoolean = true;
}

var seleccionado = "no";
var sintomas= document.getElementsByName("garganta"); 
for(i in sintomas){
    if(sintomas[i].checked){
        seleccionado = "si";
        enfermedades++;
    }
}

if(seleccionado == "no"){
    mensajeError+= "<p>Seleccionar si tuvo dolor de garganta<p>"
    errorBoolean = true;
}

var seleccionado = "no";
var sintomas= document.getElementsByName("respirar"); 
for(i in sintomas){
    if(sintomas[i].checked){
        seleccionado = "si";
        enfermedades++;
    }
}

if(seleccionado == "no"){
    mensajeError+= "<p>Seleccionar si tuvo dificultad para respirar<p>"
    errorBoolean = true;
}
        

if (errorBoolean == true) {
    document.getElementById("error").innerHTML = mensajeError;
    return false;
} else {
    document.getElementById("error").style.display = "none";
    var mensajeFormularioCompletado = "";
    seHaCompletado.style.color = 'green';
    mensajeFormularioCompletado = "El formulario fue completado correctamente, " + enfermedades+ " síntomas de COVID-19 fueron registrados.";
    document.getElementById("seHaCompletado").innerHTML = mensajeFormularioCompletado;
    return false;
}

}


function ocultarPaises(){

    document.getElementById("visitados").style.display = "none";

}

function mostrarPaises(){

    document.getElementById("visitados").style.display = "block";

}

function ocultarDireccionYLocalidad(){
 document.getElementById("direccion").style.display = "none";
 document.getElementById("localidad").style.display = "none";
}

function mostrarDireccionYLocalidad(){

document.getElementById("direccion").style.display = "flex";
document.getElementById("localidad").style.display = "flex";

}


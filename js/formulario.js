

var regexNombre = /^[A-ZÁÉÍÓÚÑ'][a-záéíóúñ']{1,}([ ][A-ZÁÉÍÓÚÑ'][a-záéíóúñ']{1,}){0,}$/;
var regexCorreo = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
var regexTelefonoNacional = /^\d{10}$/;

if (!regexNombre.test(nombre)) {
        
      alert("Por favor, introduce un nombre válido.");



var nombre=document.getElementById("nombre";
var mensajeNombre=document.getElementsByClassName("mensajeNombre"[0];
var circleCrossNombre=document.getElementsByClassName("circleCrossNombre")
nombre.addEventListener("blur,()=>{
        if(!regexNombre.test(nombre.value)){
            mensajeNombre.classList.remove 
        }
}

)





}
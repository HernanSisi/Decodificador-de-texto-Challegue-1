var vacio=document.querySelector(".salida-vacia");
var llena=document.querySelector(".salida-llena");

llena.style.display = "none";

//llamando a los botones
var botonEncriptar = document.querySelector("#boton-Encriptar");
var botonDesencriptar = document.querySelector("#boton-Desencriptar");

botonEncriptar.classList.add("desactivado");
botonDesencriptar.classList.add("desactivado");

//AGREGAMOS EL escuchador de evento
botonEncriptar.addEventListener("click", function(){
    if (!botonEncriptar.classList.contains("desactivado")) {
        var texto = "";
        texto = document.getElementById("entrada-textarea").value;
        texto = texto.replace(/e/g,"enter");
        texto = texto.replace(/i/g,"imes");
        texto = texto.replace(/a/g,"ai");
        texto = texto.replace(/o/g,"ober");
        texto = texto.replace(/u/g,"ufat");
        document.getElementById("entrada-textarea").value="";
        vacio.style.display = "none";
        llena.style.display = "flex";
        llena.querySelector("#salida-texto").value = "";
        llena.querySelector("#salida-texto").value = texto;
        botonEncriptar.classList.add("desactivado");
        botonDesencriptar.classList.add("desactivado");
    }
})
botonDesencriptar.addEventListener("click", function(){
    if (!botonDesencriptar.classList.contains("desactivado")) {
        var texto = "";
        texto = document.getElementById("entrada-textarea").value;
        texto = texto.replace(/enter/g,"e");
        texto = texto.replace(/imes/g,"i");
        texto = texto.replace(/ai/g,"a");
        texto = texto.replace(/ober/g,"o");
        texto = texto.replace(/ufat/g,"u");
        document.getElementById("entrada-textarea").value="";
        vacio.style.display = "none";
        llena.style.display = "flex";
        llena.querySelector("#salida-texto").value = "";
        llena.querySelector("#salida-texto").value = texto;
        botonEncriptar.classList.add("desactivado");
        botonDesencriptar.classList.add("desactivado");
    }
})

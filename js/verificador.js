var textEntrada = document.querySelector("#entrada-textarea");

textEntrada.addEventListener("input", function(){
    var texto = "";
    texto = document.getElementById("entrada-textarea").value;
    var temp = texto.toLowerCase();
    temp = temp.replace(/á/gi, "a");
    temp = temp.replace(/é/gi, "e");
    temp = temp.replace(/í/gi, "i");
    temp = temp.replace(/ó/gi, "o");
    temp = temp.replace(/ú/gi, "u");
    document.getElementById("entrada-textarea").value=temp;
    if (texto.length>0) {
        var botonEncriptar = document.querySelector("#boton-Encriptar");
        var botonDesencriptar = document.querySelector("#boton-Desencriptar");
        botonDesencriptar.classList.remove("desactivado");
        botonEncriptar.classList.remove("desactivado");
    } else if(texto.length==0){
        var botonEncriptar = document.querySelector("#boton-Encriptar");
        var botonDesencriptar = document.querySelector("#boton-Desencriptar");
        botonDesencriptar.classList.add("desactivado");
        botonEncriptar.classList.add("desactivado");
    }
})
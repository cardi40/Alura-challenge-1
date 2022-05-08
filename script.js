var botonEncriptar = document.querySelector("#btn-encriptar");
var botonDesencriptar = document.querySelector("#btn-desencriptar");
var botonCopiar = document.querySelector("#btn-copiar");
var mensaje = document.querySelector("#input-text");
var mensajeMostrado = document.querySelector("#mensaje-mostrado");

function encriptar(texto){
  var texto = mensaje.value;

  nuevoMensaje = texto.replace (/e/gi, "enter");
  nuevoMensaje = nuevoMensaje.replace (/i/gi, "imes");
  nuevoMensaje = nuevoMensaje.replace (/a/gi, "ai");
  nuevoMensaje = nuevoMensaje.replace (/o/gi, "ober");
  nuevoMensaje = nuevoMensaje.replace (/u/gi, "ufat");
  return(nuevoMensaje);
}

function desencriptar(texto){
  var texto = mensaje.value;
  
  var nuevoMensaje = texto.replace (/enter/gi, "e");
  nuevoMensaje = nuevoMensaje.replace (/imes/gi, "i");
  nuevoMensaje = nuevoMensaje.replace (/ai/gi, "a");
  nuevoMensaje = nuevoMensaje.replace (/ober/gi, "o");
  nuevoMensaje = nuevoMensaje.replace (/ufat/gi, "u");
  return(nuevoMensaje);
}

function ocultar(){
  document.querySelector("#muneco").style.display = "none";
  document.querySelector("#h4").style.display = "none";
  document.querySelector("#h6").style.display = "none";
}

function mostrar(){
  document.querySelector("#mensaje-mostrado").style.display = "block";
  document.querySelector("#btn-copiar").style.display = "block";
}

function copy() {
  let copyText = document.querySelector("#mensaje-mostrado");
  copyText.select();
  document.execCommand("copy");
}

botonEncriptar.addEventListener("click", function(event){
  event.preventDefault();
  ocultar();
  mostrar();
  mensajeMostrado.value = encriptar(mensaje);
})

botonDesencriptar.addEventListener("click", function(event){
  event.preventDefault();
  ocultar();
  mostrar();
  mensajeMostrado.value = desencriptar(mensaje);
})

botonCopiar.addEventListener("click", copy);



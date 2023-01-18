const mensaje = document.querySelector('.texto')
const btnDesencriptar = document.querySelector('.boton-desencriptar')
const btnEncriptar = document.querySelector('.boton-encriptar')
const btnCopiar = document.querySelector('.boton-copiar')
const respuesta = document.querySelector('.info-respuesta')
let mensajeEncriptado = "";
const resultadoEncriptado = document.querySelector('.texto-encriptado');

/*Event to click*/
btnEncriptar.addEventListener('click', encriptar);

/* Functions for addEventListener */
function encriptar() {

    for (let index = 0; index < mensaje.value.length; index++) {

        let letraActual = mensaje.value.charAt(index)
        if (letraActual === "a") {
            mensajeEncriptado = mensajeEncriptado + "ai"
        } else if (letraActual === "e") {
            mensajeEncriptado = mensajeEncriptado + "enter"
        } else if (letraActual === "i") {
            mensajeEncriptado = mensajeEncriptado + "imes"
        } else if (letraActual === "o") {
            mensajeEncriptado = mensajeEncriptado + "ober"
        } else if (letraActual === "u") {
            mensajeEncriptado = mensajeEncriptado + "ufat"
        } else {
            mensajeEncriptado = mensajeEncriptado + letraActual;
        }
        
    }

    resultadoEncriptado.innerText = mensajeEncriptado;
    respuesta.classList.add("inactive")
    btnCopiar.classList.remove("inactive")     
    console.log("Mensaje encriptado: " + mensajeEncriptado)

}


/*Functions */

/**
 * Función que permite validar que el mensaje no contenga letras mayúsculas, con acentos ni caracteres especiales
 * @param {e} e 
 * @returns false cuando se ingresa un dato no válido 
 */
function soloLetras(e) {
    let key = e.keyCode || e.which
    let tecla = String.fromCharCode(key).toString()
    let letras = "abcdefghijklmnopqrstuvwxyz"

    if (letras.indexOf(tecla) == -1) {
        alert("Por favor, ingresar solo letras minúsculas y sin acentos")
        return false
    }

}
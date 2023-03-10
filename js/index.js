const mensaje = document.querySelector('.texto')
const btnDesencriptar = document.querySelector('.boton-desencriptar')
const btnEncriptar = document.querySelector('.boton-encriptar')
const btnCopiar = document.querySelector('.boton-copiar')
const respuesta = document.querySelector('.info-respuesta')
const textoResultado = document.querySelector('.mensaje-resultado')
let mensajeEncriptado = "";
const resultadoEncriptado = document.querySelector('.texto-encriptado');


/*Event to click*/
btnEncriptar.addEventListener('click', encriptar);
btnDesencriptar.addEventListener('click', desencriptar);
btnCopiar.addEventListener('click', copiar);

/* Functions for addEventListener */
function encriptar() {

    mensajeEncriptado = "";
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
    cambioDatos(mensajeEncriptado)

}

function desencriptar() {
    mensajeEncriptado = mensaje.value
    if (mensajeEncriptado.includes("ai")) {
        mensajeEncriptado = mensajeEncriptado.replaceAll("ai", "a")
    } if (mensajeEncriptado.includes("enter")) {
        mensajeEncriptado = mensajeEncriptado.replaceAll("enter", "e")
    } if (mensajeEncriptado.includes("imes")) {
        mensajeEncriptado = mensajeEncriptado.replaceAll("imes", "i")
    } if (mensajeEncriptado.includes("ober")) {
        mensajeEncriptado = mensajeEncriptado.replaceAll("ober", "o")
    } if (mensajeEncriptado.includes("ufat")) {
        mensajeEncriptado = mensajeEncriptado.replaceAll("ufat", "u")
    }
    cambioDatos(mensajeEncriptado)
}

function cambioDatos(mensajeEncriptado) {

    resultadoEncriptado.innerText = mensajeEncriptado;
    resultadoEncriptado.classList.remove("inactive")
    respuesta.classList.add("inactive")
    textoResultado.classList.remove("inactive")
    btnCopiar.classList.remove("inactive")
    document.getElementsByClassName("texto")[0].value = "";
}


/*Functions */

/**
 * Funci??n que permite validar que el mensaje no contenga letras may??sculas, con acentos ni caracteres especiales
 * @param {e} e 
 * @returns false cuando se ingresa un dato no v??lido 
 */
function soloLetras(e) {
    let key = e.keyCode || e.which
    let tecla = String.fromCharCode(key).toString()
    let letras = "abcdefghijklmnopqrstuvwxyz "

    if (letras.indexOf(tecla) == -1) {
        alert("Por favor, ingresar solo letras min??sculas y sin acentos")
        return false
    }

}

/**
 * Funci??n que permite copiar el resultado del texto encriptado o desencriptado
 */
function copiar(){
    navigator.clipboard.writeText(resultadoEncriptado.textContent);    
    respuesta.classList.remove("inactive")
    textoResultado.classList.add("inactive")
    resultadoEncriptado.classList.add("inactive")
    btnCopiar.classList.add("inactive")
    document.getElementsByClassName("texto")[0].value = "";  
    alert("El mensaje se copio exitosamente: " + resultadoEncriptado.textContent)
}
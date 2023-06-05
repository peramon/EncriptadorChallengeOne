console.log('Bienvenido desarrollador Backend')

const frase = document.querySelector(".frase");
const frase_encriptada = document.querySelector(".frase-encriptada");
const copia = document.querySelector(".copiar");
const mensaje_uno = document.querySelector(".mensaje-uno");
const mensaje_dos = document.querySelector(".mensaje-dos");
//copia.style.display = "none"


function validarTexto(){
    let textoEscrito = document.querySelector(".frase").value;
    let validador = textoEscrito.match(/^[a-z\s]+$/);

    if(!validador || validador === 0) {
        alert("Solo son permitidas letras minúsculas y sin acentos")
        location.reload();
        return true;
    }
}

function encriptarTexto(stringEncriptada){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"], [" ","w"]];
    stringEncriptada = stringEncriptada.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])

        }

    }
    mensaje_uno.textContent = "";
    mensaje_dos.textContent = "";
    return stringEncriptada
}

function accionEncriptar(){
    if(!validarTexto()) {
        const textoEncriptado = encriptarTexto(frase.value)
        frase_encriptada.value = textoEncriptado
        frase_encriptada.style.backgroundImage = "none"
        frase.value = "";
        copia.style.display = "block"
    
    }
}

function desencriptarTexto(stringDesencriptada){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringDesencriptada.includes(matrizCodigo[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1] , matrizCodigo[i][0])

        }

    }
    return stringDesencriptada
}

function accionDesencriptar(){
    const textoEncriptado = desencriptarTexto(frase.value)
    frase_encriptada.value = textoEncriptado
    frase.value = "";
    
}

function copiar(){
    frase_encriptada.select();
    navigator.clipboard.writeText(frase_encriptada.value)
    frase_encriptada.value = "";
    alert("Texto Copiado");
    frase_encriptada.reload();
}





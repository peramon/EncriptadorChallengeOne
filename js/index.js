console.log('Bienvenido desarrollador Backend')

const frase = document.querySelector(".frase");
const frase_encriptada = document.querySelector(".frase-encriptada");



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





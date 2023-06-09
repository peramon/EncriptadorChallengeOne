console.log('Bienvenido desarrollador Backend')

const frase = document.querySelector(".frase");
const frase_encriptada = document.querySelector(".frase-encriptada");
const copia = document.querySelector(".copiar");
const mensaje_uno = document.querySelector(".mensaje-uno");
const mensaje_dos = document.querySelector(".mensaje-dos");

// Alerta
const alertaMessage = document.querySelector(".modal");

// TextArea Placeholder frase
const placeFrase = document.querySelector(".frase");

// Desabilitar el text area del texto encriptado
frase_encriptada.disabled = true;

/* redesEfecto(); */
repetirPlaceholder(1025);


function validarTexto() {
    let textoEscrito = document.querySelector(".frase").value;
    let validador = textoEscrito.match(/^[a-z\s]+$/);

    if (!validador || validador === 0) {
        alert("Solo son permitidas letras minúsculas y sin acentos")
        location.reload();
        return true;
    }
}

function encriptarTexto(stringEncriptada) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"], [" ", "w"]];
    stringEncriptada = stringEncriptada.toLowerCase()

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])

        }

    }
    mensaje_uno.textContent = "";
    mensaje_dos.textContent = "";
    return stringEncriptada
}

function accionEncriptar() {
    if (!validarTexto()) {
        const textoEncriptado = encriptarTexto(frase.value)
        frase_encriptada.value = textoEncriptado
        frase_encriptada.style.backgroundImage = "none"
        frase.value = "";
        copia.style.display = "block"
/*         mostrarAlerta(); */
    }
}

function desencriptarTexto(stringDesencriptada) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"], [" ", "w"]];
    stringDesencriptada = stringDesencriptada.toLowerCase()

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringDesencriptada.includes(matrizCodigo[i][1])) {
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])

        }

    }
    return stringDesencriptada
}

function accionDesencriptar() {
    const textoEncriptado = desencriptarTexto(frase.value)
    frase_encriptada.value = textoEncriptado
    frase.value = "";

}

function copiar() {
    frase_encriptada.select();
    navigator.clipboard.writeText(frase_encriptada.value)
    frase_encriptada.value = "";
    alertaMessage.style.display = "block";
    setTimeout(() => {
        alertaMessage.style.display = "none";
    }, 2300);
}

/* function redesEfecto() {
    const logo_linkedin = document.querySelector(".logo-linkedin")
    const logo_github = document.querySelector(".logo-github")
    let angulo = 0;
    let angulo_negativo = 0;
    setInterval(() => {
        angulo += 5;
        angulo_negativo -= 5;
        logo_linkedin.style.transform = "rotate(" + angulo + "deg)";
        logo_github.style.transform = "rotate(" + angulo_negativo + "deg)";
    }, 50);
} */

function cerrarAlerta() {
    alertaMessage.style.display = "none";
}

async function repetirPlaceholder(maximo) {
    /* let str = ' | Ingrese el texto aquí...';
    let cadena = "";
    let conteo = 2;
    console.log(str.length);
    for (let index = 2; index < str.length; index++) {
        cadena += str[index] + "";
        setInterval(() => {
            placeFrase.placeholder = cadena;
            console.log(str[index]);
            console.log(index);
            
        }, 2000);
    } */
    placeFrase.placeholder = " |";
    var cadena = ' Ingrese el texto aquí... ';
    var index = 0;
    let contador;
    if (maximo > 0) {
        placeFrase.addEventListener("click", function () {
            clearInterval(intervalo);
            placeFrase.placeholder = "";
        });
        var intervalo = setInterval(function () {
            if (maximo > 0 && index < cadena.length) {
                placeFrase.placeholder += cadena[index];
                index++;
                if (index == cadena.length) {
                    repetirPlaceholder(maximo);
                }
            } else {
                clearInterval(intervalo);
            }
            maximo--;
        }, 150);
    }
}





const body = document.querySelector('body');
const dollContainer = document.querySelector('.doll__container');
const textElement = document.querySelector('#texto');
const description1 = document.querySelector('.description__1');
const description2 = document.querySelector('.description__2');
const textareaContainer = document.querySelector('.textarea__container');
const copyButtonContainer = document.querySelector('.copy__button__container');

//Función que maneja los cambios al redimensionar la ventana
function resizeHandler() {
  if (body.clientWidth > 1000) {
    dollContainer.style.display = 'block';
  } else {
    dollContainer.style.display = 'none';
  }
}

function hideDollContainer() {
    dollContainer.style.display = 'none';
    textElement.removeEventListener('click', textClickHandler);
  }

//Función que maneja los cambios al hacer click en el elemento con id "texto"
function textClickHandler() {
    description1.classList.add('hide');
    description2.classList.add('hide');
    textareaContainer.classList.remove('hide');
    copyButtonContainer.classList.remove('hide');
    // dollContainer.style.display = 'none'; 
    hideDollContainer();
  }
  
//Asignar los eventos necesarios
window.addEventListener('resize', resizeHandler);
textElement.addEventListener('click', textClickHandler);

//Manejar el estado inicial de la página
resizeHandler();
description1.classList.remove('hide');
description2.classList.remove('hide');
textareaContainer.classList.add('hide');
copyButtonContainer.classList.add('hide');


// *Encriptation stars  

var opcion = "";

function setOption(valor) {
    opcion = valor;
    var cifrar = document.getElementById("cifrar");
    var descifrar = document.getElementById("descifrar");
    if (valor === "cifrar") {
        cifrar.style.backgroundColor = "lightblue";
        descifrar.style.backgroundColor = "";
    } else if (valor === "descifrar") {
        cifrar.style.backgroundColor = "";
        descifrar.style.backgroundColor = "lightblue";
    }
    convertir();
}

function resizeHandler() {
    if (body.clientWidth > 1000 && dollContainer.style.display !== 'none') {
      dollContainer.style.display = 'block';
    } else {
      dollContainer.style.display = 'none';
    }
  }

function convertir() {
    var texto = document.getElementById("texto").value.toLowerCase();
    var resultado = "";

    // Eliminar letras con acentos y caracteres no permitidos
    texto = texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9 ]/g, "");

    if (opcion === "cifrar") {
        for (var i = 0; i < texto.length; i++) {
            if (texto[i] === "e") {
                resultado += "enter";
            } else if (texto[i] === "i") {
                resultado += "imes";
            } else if (texto[i] === "a") {
                resultado += "ai";
            } else if (texto[i] === "o") {
                resultado += "ober";
            } else if (texto[i] === "u") {
                resultado += "ufat";
            } else {
                resultado += texto[i];
            }
        }
    } else if (opcion === "descifrar") {
        var i = 0;
        while (i < texto.length) {
            if (texto[i] === "e") {
                resultado += "e";
                i += 5;
            } else if (texto[i] === "i") {
                resultado += "i";
                i += 4;
            } else if (texto[i] === "a") {
                resultado += "a";
                i += 2;
            } else if (texto[i] === "o") {
                resultado += "o";
                i += 4;
            } else if (texto[i] === "u") {
                resultado += "u";
                i += 4;
            } else {
                resultado += texto[i];
                i++;
            }
        }
    }

    document.getElementById("resultado").value = resultado;
}


function copiar() {
    var resultado = document.getElementById("resultado");
    resultado.select();
    document.execCommand("copy");
    alert("El texto ha sido copiado");
}
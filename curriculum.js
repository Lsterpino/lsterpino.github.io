const boton = document.getElementById('boton');

var titulos = document.querySelectorAll("h2");
var secciones = document.querySelectorAll("section");
var contenidos = document.getElementsByClassName("contenido");

boton.addEventListener('click', () => {
    let nombre = document.getElementById('nombre').value;
    let apellido = document.getElementById('apellido').value;
    let email = document.getElementById('email').value;
    let mensaje = document.getElementById('mensaje').value;
    let respuesta = document.getElementById('respuesta');
    respuesta.style.display = "block";

    if (nombre === "" || apellido === "" || email === "" || mensaje === "") {
        respuesta.style.color = "#ff0000";
        respuesta.innerHTML = "Lo siento, debes completar todos los campos";

    }
    else {
        respuesta.style.color = "#f7d127";
        respuesta.innerHTML = "Recibi tu mensaje " + nombre + ", contestare a la brevedad ";
    }
});

const botonDatos = document.getElementById('boton_datos');

botonDatos.addEventListener('click', () => {
    let posicion = 0;
    predeterminado(posicion);
    estiloTitulo(posicion);
    estiloSeccion(posicion);
});


const botonExperiencia = document.getElementById('boton_experiencia');

botonExperiencia.addEventListener('click', () => {
    let posicion = 1;
    predeterminado(posicion);
    estiloTitulo(posicion);
    estiloSeccion(posicion);
});

const botonHabilidades = document.getElementById('boton_habilidades');

botonHabilidades.addEventListener('click', () => {
    let posicion = 2;
    predeterminado(posicion);
    estiloTitulo(posicion);
    estiloSeccion(posicion);
});

const botonContacto = document.getElementById('boton_contacto');

botonContacto.addEventListener('click', () => {
    let posicion = 3;
    predeterminado(posicion);
    estiloTitulo(posicion);
});

//Funciones

function predeterminado(posicion) {
    let contador = 0;
    for (contador; contador < 3; contador++) {
        if (contador !== posicion) {
            titulos[contador].style.color = "#091450";
            titulos[contador].style.fontSize = "1.5em";
            titulos[contador].style.textShadow = "#000000 0px 0px";
            secciones[contador].style.border = "none";
            secciones[contador].style.boxShadow = "none";
            secciones[contador].style.backgroundColor = "#b4daec";
        }
    }
    titulos[3].style.color = "#ffffff";
    titulos[3].style.fontSize = "1.5em";
    titulos[contador].style.textShadow = "#000000 0px 0px";
}

function estiloTitulo(numero) {
    let titulo = titulos[numero];
    titulo.style.color = "#f7d127";
    titulo.style.fontSize = "2em";
    if (numero !== 3) {
        titulo.style.textShadow = "#091450 1px 1px";
    } else {
        titulo.style.textShadow = "#8c969b 1px 1px";
    }
    titulo.style.transition = "all 650ms";
}

function estiloSeccion(numero) {
    let seccion = secciones[numero];
    seccion.style.border = "solid #626161 1px";
    seccion.style.boxShadow = "#626161 1px 2.5px";
    seccion.style.transition = "box-shadow 650ms";
    seccion.style.backgroundColor = "#94cee9";
}


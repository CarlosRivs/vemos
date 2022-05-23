var elementosP = document.getElementsByTagName("p");

var segundoP = document.getElementById("segundo");

// 1. CREAR EL ELEMENTO
var elemento = document.createElement("h2");
// 2. CREAR UN NODO DE TEXTO
var contenido = document.createTextNode("ESTE ES EL SUBTITULO");
// 3. AÑADIR EL NODO EL TEXTO AL ELEMENTO
elemento.appendChild(contenido);
// 4. AGREGAR ATRIBUTOS AL ELEMENTO
elemento.setAttribute("style", "background-color: red;");
// 5. AGREGAR EL ELEMENTO AL DOCUMENTO
document.getElementById("subtitulo").appendChild(elemento);




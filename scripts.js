// scripts.js

// Obtén referencia al botón "Agregar al carrito"
const addToCartButtons = document.querySelectorAll('.producto button');

// Obtén referencia al contador del carrito
const cartCountElement = document.querySelector('.cart-count');

// Inicializa la cantidad en el carrito
let cartCount = 0;

// Añade un event listener a cada botón "Agregar al carrito"
addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Incrementa la cantidad en el carrito al hacer clic en el botón
        cartCount++;
        // Actualiza el texto del contador del carrito
        cartCountElement.textContent = cartCount;
    });
});
// scripts.js

// ... (otro código anterior) ...

// Función para avanzar al siguiente paso del formulario asistente
function siguientePaso(nextStep) {
    // Oculta el paso actual
    const pasoActual = document.getElementById(`paso-${nextStep - 1}`);
    pasoActual.style.display = 'none';

    // Muestra el siguiente paso
    const siguientePaso = document.getElementById(`paso-${nextStep}`);
    siguientePaso.style.display = 'block';
}

// Función para generar un resumen del formulario
function generarResumen() {
    const resumenDiv = document.getElementById('resumen');
    const formulario = document.getElementById('wizard-form');

    // Recopila los datos del formulario
    const nombre = formulario.querySelector('#nombre').value;
    const email = formulario.querySelector('#email').value;
    const mensaje = formulario.querySelector('#mensaje').value;

    // Muestra el resumen en el div correspondiente
    resumenDiv.innerHTML = `<h3>Resumen del Formulario</h3>
                           <p><strong>Nombre:</strong> ${nombre}</p>
                           <p><strong>Email:</strong> ${email}</p>
                           <p><strong>Mensaje:</strong> ${mensaje}</p>`;
}

// ... (otro código posterior) ...
// Función para inicializar la validación del formulario
function inicializarValidacion() {
    const formulario = document.getElementById('wizard-form');

    // Define las reglas de validación
    const reglas = {
        nombre: {
            presence: true,
        },
        email: {
            presence: true,
            email: true,
        },
        mensaje: {
            presence: true,
        },
    };

    // Configura Validate.js para el formulario
    const validador = new window.Validate(formulario, reglas);

    // Agrega un event listener para validar el formulario al hacer clic en el botón "Generar Resumen"
    const botonGenerarResumen = formulario.querySelector('button[type="button"][onclick="generarResumen()"]');
    botonGenerarResumen.addEventListener('click', function () {
        const validacionExitosa = validador.validate();

        // Si la validación es exitosa, genera el resumen
        if (validacionExitosa) {
            generarResumen();
        }
    });
}

// Llama a la función para inicializar la validación del formulario
inicializarValidacion();

// Función para realizar la solicitud a la API y visualizar los resultados
function consumirAPI() {
    // URL de la API (en este ejemplo, utilizamos JSONPlaceholder)
    const apiURL = 'https://jsonplaceholder.typicode.com/posts';

    // Realiza la solicitud AJAX utilizando jQuery
    $.ajax({
        url: apiURL,
        method: 'GET',
        success: function (data) {
            // Maneja los datos obtenidos de la API
            visualizarResultados(data);
        },
        error: function (error) {
            console.error('Error al consumir la API:', error);
        }
    });
}

// Función para visualizar los resultados obtenidos de la API
function visualizarResultados(resultados) {
    const resultadosDiv = document.getElementById('resultados-api');

    // Limpia el contenido anterior
    resultadosDiv.innerHTML = '';

    // Crea elementos HTML para mostrar los resultados
    const listaResultados = document.createElement('ul');

    resultados.forEach(resultado => {
        const itemResultado = document.createElement('li');
        itemResultado.textContent = resultado.title;
        listaResultados.appendChild(itemResultado);
    });

    resultadosDiv.appendChild(listaResultados);
}

// Llama a la función para consumir la API cuando la página está lista
$(document).ready(function () {
    consumirAPI();
});

// Funciones JavaScript según sea necesario
// ...

// Función para avanzar al siguiente paso del formulario asistente
function siguientePaso(nextStep) {
        // Oculta el paso actual
        const pasoActual = document.getElementById(`paso-${nextStep - 1}`);
        pasoActual.style.display = "none"
}
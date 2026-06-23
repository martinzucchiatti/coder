// Selección de elementos
const contenedor = document.querySelector('#contenedor-actividades');
const btnLoadMore = document.querySelector('#load-more');

let actividades = [];
let itemsVisibles = 3; 

// Función para obtener datos vía Fetch
async function cargarActividades() {
    try {
        const response = await fetch('./datos.json');
        actividades = await response.json();
        renderizarActividades();
    } catch (error) {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'No se pudieron cargar los datos desde el servidor.'
        });
    }
}

// Renderizado de tarjetas en el DOM
function renderizarActividades() {
    contenedor.innerHTML = ''; 
    const mostrar = actividades.slice(0, itemsVisibles);
    
    mostrar.forEach(act => {
        contenedor.innerHTML += `
            <div class="actividad">
                <img src="${act.img}" alt="${act.nombre}">
                <div class="texto-actividad">
                    <h4>${act.nombre}</h4>
                    <p>${act.descripcion}</p>
                </div>
            </div>
        `;
    });
}

// Evento del botón "Cargar más"
btnLoadMore.addEventListener('click', () => {
    itemsVisibles += 3;
    renderizarActividades();
    
    // Ocultar botón si ya no hay más elementos
    if (itemsVisibles >= actividades.length) {
        btnLoadMore.style.display = 'none';
    }
});




cargarActividades();
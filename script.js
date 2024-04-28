

function mostrar(){
    document.querySelector('nav').classList.toggle('show');
}

// Obtener todos los enlaces del menú
const links = document.querySelectorAll('nav a');

// Función para agregar la clase "active" al enlace seleccionado
function setActiveLink(event) {
    // Eliminar la clase "active" de todos los enlaces
    links.forEach(link => link.classList.remove('active'));
    // Agregar la clase "active" al enlace seleccionado
    event.target.classList.add('active');
}

// Escuchar el evento de clic en cada enlace y llamar a la función setActiveLink
links.forEach(link => {
    link.addEventListener('click', setActiveLink);
});

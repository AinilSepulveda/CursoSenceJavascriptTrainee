
const btnArriba = document.getElementById('btnArriba');

// Mostrar/ocultar botón según scroll
window.addEventListener('scroll', () => {
    if (window.scrollY > 10) {
        btnArriba.style.display = 'block';
    } else {
        btnArriba.style.display = 'none';
    }
});

// Smooth scroll al hacer clic
btnArriba.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Función para mostrar alerta (del botón de acción)
function mostrarAlerta() {
    alert('¡Perfecto! Has completado la sección de estructura del proyecto.');
}
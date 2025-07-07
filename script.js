// Menú hamburguesa
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav ul');

menuToggle.addEventListener('click', () => {
    nav.classList.toggle('active');
});

// Validación de formulario
const form = document.getElementById('contact-form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = form.querySelector('input[type="text"]').value;
    const email = form.querySelector('input[type="email"]').value;
    const message = form.querySelector('textarea').value;

    if (name && email && message) {
        alert('Formulario enviado con éxito');
        form.reset();
    } else {
        alert('Por favor, completa todos los campos');
    }
});

// Carrusel simple para Casos de Éxito (opcional, puede reemplazarse con Swiper.js)
const caseCards = document.querySelectorAll('.case-card');
let currentCase = 0;

function showCase(index) {
    caseCards.forEach((card, i) => {
        card.style.display = i === index ? 'block' : 'none';
    });
}

// Inicializar carrusel (mostrar solo el primer caso en móviles)
if (window.innerWidth <= 768) {
    showCase(currentCase);
    setInterval(() => {
        currentCase = (currentCase + 1) % caseCards.length;
        showCase(currentCase);
    }, 5000); // Cambia cada 5 segundos
}

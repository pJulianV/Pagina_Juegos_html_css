// script.js - interactividad: filtros y validación de formulario

// Función para filtrar galería - expuesta globalmente para pruebas
window.filterGallery = function (filter) {
    const items = document.querySelectorAll('.product-1');
    items.forEach(item => {
        const cat = item.dataset.category || 'all';
        if (filter === 'all' || filter === cat) {
            item.style.display = '';
        } else {
            item.style.display = 'none';
        }
    });
};

// Función para validar email - expuesta globalmente para pruebas
window.validateEmail = function (value) {
    if (!value) return false;
    // validación simple: debe contener @ y un punto después
    const re = /^\S+@\S+\.\S+$/;
    return re.test(value);
};

document.addEventListener('DOMContentLoaded', function () {
    // FILTROS: busca botones con clase .filter-btn y items con data-category
    const filterButtons = document.querySelectorAll('.filter-btn');
    const gallery = document.getElementById('gallery');

    if (filterButtons && gallery) {
        filterButtons.forEach(btn => {
            btn.addEventListener('click', function () {
                const filter = this.dataset.filter;
                window.filterGallery(filter);
                // marcar botón activo visualmente
                filterButtons.forEach(b => b.classList.remove('active'));
                this.classList.add('active');
            });
        });
    }

    // FORM VALIDATION Y ENVÍO DE EMAIL
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const email = document.getElementById('email');
            const nombre = document.getElementById('nombre');
            const mensaje = document.getElementById('mensaje');
            const err = document.getElementById('formError');
            const ok = document.getElementById('formSuccess');
            err.style.display = 'none';
            ok.style.display = 'none';

            const valid = window.validateEmail(email.value);
            if (!email.value || !valid) {
                err.textContent = 'Por favor ingresa un correo electrónico válido.';
                err.style.display = 'block';
                return false;
            }

            // Enviar email al backend
            fetch('/api/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    nombre: nombre.value || 'Usuario',
                    email: email.value,
                    mensaje: mensaje.value
                })
            })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    ok.textContent = 'Mensaje enviado correctamente. Gracias.';
                    ok.style.display = 'block';
                    contactForm.reset();
                } else {
                    err.textContent = data.error || 'Error al enviar el mensaje.';
                    err.style.display = 'block';
                }
            })
            .catch(error => {
                err.textContent = 'Error de conexión. Verifica que el servidor está corriendo.';
                err.style.display = 'block';
                console.error('Error:', error);
            });

            return false;
        });
    }
});

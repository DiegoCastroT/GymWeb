document.addEventListener('DOMContentLoaded', function() {
    const toggleLinks = document.querySelectorAll('.toggle-link');
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');

    toggleLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault(); // Previene la acción predeterminada del enlace
            if (loginForm.style.display !== 'none') {
                loginForm.style.display = 'none';
                registerForm.style.display = 'block';
            } else {
                loginForm.style.display = 'block';
                registerForm.style.display = 'none';
            }
        });
    });
});
// Bloqueia o carregamento da página até a validação
document.addEventListener('DOMContentLoaded', function () {
    const isLoggedIn = sessionStorage.getItem('isLoggedIn');
    const userRole = sessionStorage.getItem('userRole');

    // Redireciona imediatamente se o usuário não estiver autorizado
    if (isLoggedIn !== 'true' || userRole !== 'admin') {
        alert('Acesso negado. Você precisa ser um administrador para acessar esta página.');
        window.location.href = 'index.html';
    } else {
        // Mostra o corpo após a validação
        document.body.style.display = 'block';
    }
});

// Verifica se o usuário está logado e se tem o papel de administrador
document.addEventListener('DOMContentLoaded', function() {
    const isLoggedIn = sessionStorage.getItem('isLoggedIn');
    const userRole = sessionStorage.getItem('userRole');

    // Redireciona para a página inicial se não estiver logado ou se não for administrador
    if (isLoggedIn !== 'true' || userRole !== 'admin') {
        alert('Acesso negado. Você precisa ser um administrador para acessar esta página.');
        window.location.href = 'index.html';
    }
});

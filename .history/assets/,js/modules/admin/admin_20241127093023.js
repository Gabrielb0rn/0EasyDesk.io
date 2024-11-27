document.addEventListener('DOMContentLoaded', function () {
    const loading = document.getElementById('loading');
    const mainContent = document.getElementById('main-content');

    // Exibe "verificando acesso" durante a validação
    loading.style.display = 'block';

    // Simula a validação (substitua com sua lógica de validação real)
    setTimeout(() => {
        const isLoggedIn = sessionStorage.getItem('isLoggedIn');
        const userRole = sessionStorage.getItem('userRole');

        if (isLoggedIn !== 'true' || userRole !== 'admin') {
            alert('Acesso negado. Você precisa ser um administrador para acessar esta página.');
            window.location.href = 'index.html';
        } else {
            // Oculta a mensagem de carregamento e exibe o conteúdo principal
            loading.style.display = 'none';
            mainContent.style.display = 'block';
        }
    }, 2000); // Tempo de simulação de 2 segundos
});
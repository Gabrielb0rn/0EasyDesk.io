document.addEventListener('DOMContentLoaded', function () {
    const isLoggedIn = sessionStorage.getItem('isLoggedIn');
    const userRole = sessionStorage.getItem('userRole');
    const loadingScreen = document.getElementById('loading-screen');
    const header = document.querySelector('header');
    const main = document.querySelector('main');

    // Simula uma pequena espera para a verificação (opcional)
    setTimeout(() => {
        if (isLoggedIn !== 'true' || userRole !== 'admin') {
            alert('Acesso negado. Você precisa ser um administrador para acessar esta página.');
            window.location.href = 'index.html';
        } else {
            // Oculta a tela de carregamento
            loadingScreen.style.display = 'none';
            // Mostra o conteúdo da página
            header.style.display = 'block';
            main.style.display = 'block';
            document.body.style.overflow = 'auto'; // Libera a rolagem
        }
    }, 1000); // Tempo simulado de verificação
});
document.addEventListener('DOMContentLoaded', function () {
    const isLoggedIn = sessionStorage.getItem('isLoggedIn');
    const userRole = sessionStorage.getItem('userRole');
    const loadingScreen = document.getElementById('loading-screen');
    const header = document.querySelector('header');
    const main = document.querySelector('main');

    // Simula uma pequena espera para a verificação (opcional)
    setTimeout(() => {
        if (isLoggedIn !== 'true' || userRole !== 'admin') {
            alert('Acesso negado. Você precisa ser um administrador para acessar esta página.');
            window.location.href = 'index.html';
        } else {
            // Oculta a tela de carregamento
            loadingScreen.style.display = 'none';
            // Mostra o conteúdo da página
            header.style.display = 'block';
            main.style.display = 'block';
            document.body.style.overflow = 'auto'; // Libera a rolagem
        }
    }, 1000); // Tempo simulado de verificação
});

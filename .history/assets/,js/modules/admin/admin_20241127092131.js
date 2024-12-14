// Bloqueia o carregamento visual inicial da página
document.write('<h1 style="text-align:center; color:red;">Verificando acesso...</h1>');

// Verifica as permissões assim que o DOM começa a carregar
document.addEventListener('DOMContentLoaded', function() {
    const isLoggedIn = sessionStorage.getItem('isLoggedIn');
    const userRole = sessionStorage.getItem('userRole');

    // Redireciona para a página inicial se não estiver logado ou se não for administrador
    if (isLoggedIn !== 'true' || userRole !== 'admin') {
        alert('Acesso negado. Você precisa ser um administrador para acessar esta página.');
        window.location.href = 'index.html';
    } else {
        // Remove o bloqueio visual e carrega o conteúdo original da página
        document.body.style.display = 'block';
    }
});

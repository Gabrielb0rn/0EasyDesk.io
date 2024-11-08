window.onload = function() {
    const loginData = JSON.parse(localStorage.getItem('login'));
    
    if (loginData && loginData.name) {
        document.getElementById('user-info').innerHTML = `<b>Usuário:</b> ${loginData.name}`;
    } else {
        document.getElementById('user-info').innerHTML = `<b>Nenhum usuário logado.</b>`;
    }
}

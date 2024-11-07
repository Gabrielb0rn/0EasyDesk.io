function irParaLogin() {
    document.location.href = './login.html'
}

function cadastrar() {
    const name = document.getElementById('name').value;
    const password = document.getElementById('password').value;

// EXERCICIO verificar se o usuário preencheu o nome e a senha antes de adicionar ao localStorage 
    
// EXERCICIO fazer uma função para verificar se o usuário inseriu letras e números na senha antes de adicionar ao localStorage

    const obj = {
        name: name,
        password: password
    };

    localStorage.setItem('login', JSON.stringify(obj));
    
    alert('Usuário cadastrado')
    document.getElementById('name').value = '';
    document.getElementById('password').value = '';
}
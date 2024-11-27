const predefinedUser = { 
    name: 'Admin User',
    email: 'admin@admin',
    password: '123',
    role: 'admin'
};

// Armazena o usuário pré-definido no localStorage
localStorage.setItem('predefinedUser', JSON.stringify(predefinedUser));

document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário

    // Captura os valores dos inputs
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Recupera os dados do localStorage
    const storedUser = JSON.parse(localStorage.getItem('user')); // Usuário registrado
    const storedPredefinedUser = JSON.parse(localStorage.getItem('predefinedUser')); // Usuário pré-definido

    // Verifica se as credenciais estão corretas (usuário registrado ou pré-definido)
    if ((storedUser && storedUser.email === email && storedUser.password === password) ||
        (storedPredefinedUser && storedPredefinedUser.email === email && storedPredefinedUser.password === password)) {
        
        // Define o status de login e tipo de usuário no sessionStorage
        sessionStorage.setItem('isLoggedIn', 'true');
        sessionStorage.setItem('userRole', storedPredefinedUser.email === email ? 'admin' : 'user');

        alert('Login bem-sucedido!');
        window.location.href = 'index.html';
    } else {
        alert('Email ou senha incorretos.');
    }
});

document.getElementById('login-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Impede o envio do formulário

    // Captura os valores dos inputs
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Recupera os dados do localStorage
    const storedUser = JSON.parse(localStorage.getItem('user')); // Usuário registrado
    const storedPredefinedUser = JSON.parse(localStorage.getItem('predefinedUser')); // Usuário pré-definido

    // Verifica se as credenciais estão corretas (usuário registrado ou pré-definido)
    if (
        (storedUser && storedUser.email === email && storedUser.password === password) ||
        (storedPredefinedUser && storedPredefinedUser.email === email && storedPredefinedUser.password === password)
    ) {
        // Define o status de login e tipo de usuário no sessionStorage
        const userRole = storedPredefinedUser.email === email ? 'admin' : 'user';
        sessionStorage.setItem('isLoggedIn', 'true');
        sessionStorage.setItem('userRole', userRole);

        alert('Login bem-sucedido!');

        // Redireciona automaticamente o administrador para admin.html
        if (userRole === 'admin') {
            window.location.href = 'admin.html';
        } else {
            window.location.href = 'index.html';
        }
    } else {
        alert('Email ou senha incorretos.');
    }
});
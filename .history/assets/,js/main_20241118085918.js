function toggleTheme() {
    // Alterna a classe 'dark-theme' no body
    document.body.classList.toggle('dark-theme');

    // Verifica se o tema dark está ativado e armazena isso no localStorage
    if (document.body.classList.contains('dark-theme')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
}

// Função para aplicar o tema salvo no localStorage ao carregar a página
function applyTheme() {
    // Verifica o valor armazenado no localStorage
    const savedTheme = localStorage.getItem('theme');

    // Se o tema salvo for 'dark', aplica a classe 'dark-theme' no body
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-theme');
    } else {
        document.body.classList.remove('dark-theme');
    }
}

// Chama a função para aplicar o tema ao carregar a página
document.addEventListener('DOMContentLoaded', function() {
    applyTheme(); // Aplica o tema salvo ao carregar a página

});

document.addEventListener('DOMContentLoaded', function() {
    // Função para registrar novo usuário
    function registerUser(name, email, password) {
        let users = JSON.parse(localStorage.getItem('users')) || [];
        let user = { name, email, password };
        users.push(user);
        localStorage.setItem('users', JSON.stringify(users));
    }

    // Função para autenticar usuário
    function loginUser(email, password) {
        let users = JSON.parse(localStorage.getItem('users')) || [];
        let user = users.find(user => user.email === email && user.password === password);
        return user ? true : false;
    }

    // Função para verificar se usuário está logado
    function checkLogin() {
        let isLoggedIn = localStorage.getItem('isLoggedIn');
        if (!isLoggedIn && window.location.pathname !== '/index.html' && window.location.pathname !== '/register.html') {
            window.location.href = 'index.html';
        }
    }
    
    // Adicionar usuário admin
    function addAdminUser() {
        let users = JSON.parse(localStorage.getItem('users')) || [];
        let adminExists = users.some(user => user.email === 'admin@admin.com');
        if (!adminExists) {
            users.push({ name: 'admin', email: 'admin@admin.com', password: 'admin' });
            localStorage.setItem('users', JSON.stringify(users));
        }
    }

    // Adicionar usuário admin no carregamento da página
    addAdminUser();

    // Eventos da página de cadastro
    if (window.location.pathname.endsWith('register.html')) {
        document.getElementById('registerForm').addEventListener('submit', function(event) {
            event.preventDefault();
            let name = document.getElementById('name').value;
            let email = document.getElementById('email').value;
            let password = document.getElementById('password').value;
            registerUser(name, email, password);
            alert('Usuário registrado com sucesso!');
            window.location.href = 'index.html';
        });
    }

    // Eventos da página de login
    if (window.location.pathname.endsWith('index.html')) {
        document.getElementById('loginForm').addEventListener('submit', function(event) {
            event.preventDefault();
            let email = document.getElementById('email').value;
            let password = document.getElementById('password').value;
            if (loginUser(email, password)) {
                localStorage.setItem('isLoggedIn', true);
                window.location.href = 'dashboard.html';
            } else {
                alert('E-mail ou senha incorretos.');
            }
        });
    }

    // Eventos da página de gerenciamento de produtos
    if (window.location.pathname.endsWith('dashboard.html')) {
        checkLogin();
        document.getElementById('productForm').addEventListener('submit', function(event) {
            event.preventDefault();
            let name = document.getElementById('productName').value;
            let description = document.getElementById('productDescription').value;
            let price = document.getElementById('productPrice').value;
            let quantity = document.getElementById('productQuantity').value;
            saveProduct(name, description, price, quantity);
            alert('Produto salvo com sucesso!');
            displayProducts();
        });

        function displayProducts() {
            let productList = document.getElementById('productList');
            productList.innerHTML = '';
            let products = listProducts();
            products.forEach(product => {
                let productElement = document.createElement('div');
                productElement.className = 'product';
                productElement.innerHTML = `
                    <h3>${product.name}</h3>
                    <p>${product.description}</p>
                    <p>Preço: ${product.price}</p>
                    <p>Quantidade: ${product.quantity}</p>
                    <button onclick="editProduct(${product.id}, '${product.name}', '${product.description}', ${product.price}, ${product.quantity})">Editar</button>
                    <button onclick="deleteProduct(${product.id})">Excluir</button>
                `;
                productList.appendChild(productElement);
            });
        }

        displayProducts();
    }
    
});

// Ajusta a navbar dinamicamente com base no status de login
const authSection = document.getElementById('auth-section');
const isLoggedIn = sessionStorage.getItem('isLoggedIn');
const userRole = sessionStorage.getItem('userRole');

if (isLoggedIn === 'true') {
    if (userRole === 'admin') {
        console.log('Exibindo ícone de admin...');
        authSection.innerHTML = `
        <div class="theme-toggle">
        <img src="assets/.css/icons/nav/bright-sun-light-svgrepo-com.svg" alt="Mudar Tema" onclick="toggleTheme()">
        </div>
            <div class="nav-links">>
                <img src="assets/.css/icons/admin/crown-svgrepo-com.svg" alt="Admin" width="24px" height="auto">
            </div>
            <button class="logout" onclick="logout()">Logout</button>
            `;
    } else {
        authSection.innerHTML = `
            <button class="logout" onclick="logout()">Logout</button>
        `;
    }
} else {
    authSection.innerHTML = `
        <div class="theme-toggle">
        <img src="assets/.css/icons/nav/bright-sun-light-svgrepo-com.svg" alt="Mudar Tema" onclick="toggleTheme()">
        </div>
        <a href="login.html"><button class="sign-in">Login</button></a>
        <a href="register.html"><button>Register</button></a>
    `;
}

function logout() {
    sessionStorage.clear();
    alert('Você saiu.');
    window.location.href = 'product.html';
    authSection.innerHTML = `
        <a href="login.html"><button class="sign-in">Login</button></a>
        <a href="register.html"><button>Register</button></a>
    `;
}
// Função para exibir produtos cadastrados na página inicial como cards
function exibirProduto() {
    // 1. Recupera os produtos armazenados no localStorage, ou um array vazio se não houver produtos salvos
    const produtos = JSON.parse(localStorage.getItem('produtos')) || [];

    // 2. Seleciona o elemento HTML onde os produtos serão exibidos (ul com id "listaProdutos")
    const listaProdutos = document.getElementById('listaProdutos');
    
    // 3. Limpa o conteúdo atual da lista para evitar duplicação de produtos quando a página é recarregada
    listaProdutos.innerHTML = '';

    // 4. Percorre cada produto no array "produtos" e cria um card para exibi-lo
    for (let produto of produtos) {
        // 5. Cria um elemento <li> que servirá como o card do produto
        const li = document.createElement('li');
        li.classList.add('produto-item'); // Adiciona uma classe para aplicar o estilo de card

        // 6. Cria um elemento <img> para exibir a imagem do produto e define o src e o texto alternativo (alt)
        const img = document.createElement('img');
        img.src = produto.urlImage; // Define a URL da imagem do produto
        img.alt = produto.nome; // Define o nome do produto como texto alternativo da imagem
        img.classList.add('produto-img'); // Classe para aplicar o estilo da imagem

        // 7. Cria um parágrafo <p> para exibir o nome do produto
        const nome = document.createElement('p');
        nome.textContent = produto.nome; // Define o texto como o nome do produto

        // 8. Cria um parágrafo <p> para exibir o preço do produto, adicionando a palavra "Preço:"
        const preco = document.createElement('p');
        preco.innerHTML = `<span>Preço:</span> R$${produto.preco}`; // Define o texto como "Preço: R$" seguido pelo valor

        // 9. Cria um parágrafo <p> para exibir a descrição do produto, com a palavra "Descrição:"
        const descricao = document.createElement('p');
        descricao.innerHTML = `<span>Descrição:</span> ${produto.descricao}`; // Define o texto como "Descrição:" seguido pela descrição

        // 10. Adiciona a imagem, o nome, o preço e a descrição ao elemento <li> (card)
        li.appendChild(img);
        li.appendChild(nome);
        li.appendChild(preco);
        li.appendChild(descricao);

        // 11. Adiciona o card (li) à lista de produtos (ul) na página
        listaProdutos.appendChild(li);
    }
}

// Executa a função ao carregar a página inicial
window.onload = exibirProduto;

// Função para verificar se o usuário é admin e exibir o botão
function checkAdminAccess() {
    const isLoggedIn = sessionStorage.getItem('isLoggedIn');
    const userRole = sessionStorage.getItem('userRole');

    // Verifica se o usuário está logado e é admin
    if (isLoggedIn === 'true' && userRole === 'admin') {
        const adminButtonContainer = document.getElementById('admin-access');
        adminButtonContainer.innerHTML = `
            <div class="admin-access">
            <button id="adminButton" onclick="redirectToAdmin()">Editar Produtos como Admin</button>
        </div>
        `;
    }
}

// Função para redirecionar para a página de admin
function redirectToAdmin() {
    const isAdmin = confirm("Você é um administrador? Insira a senha na próxima página.");
    if (isAdmin) {
        window.location.href = "admin.html";
    }
}

// Verifica o acesso de admin ao carregar a página
window.onload = function() {
    exibirProduto();
    checkAdminAccess();
};

// Simulando a obtenção do papel do usuário. Em um cenário real, isso pode vir de um cookie ou de uma API.
const userRole = "user"; // Mude para "admin" para testar o acesso.

// Verifica se o usuário tem o papel de admin
if (userRole !== "admin") {
    document.body.innerHTML = "<h1>Sem acesso!</h1>";
    // Ou redirecionar para outra página, por exemplo:
    // window.location.href = "index.html"; // Redireciona para a página inicial
} else {
    
    document.body.innerHTML = "<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>EasyDesk</title>
    <link rel="stylesheet" href="assets\.css\main.css">
    <link rel="stylesheet" href="assets\.css\components\product\product.css">
    <link rel="stylesheet" href="assets\.css\components\cadastro-produto\index.css">
    <link rel="shortcut icon" href="assets\.css\favicon\EasyDeskLogo.ico" type="image/x-icon">
</head>
<body>
    <header>
        <nav>
            <div class="left-section">
                <div class="logo">
                    <a href="index.html"><img src="assets\.css\favicon\EasyDeskLogo.ico" alt="Logo EasyDesk"></a>
                </div>
                <ul class="nav-links">
                    <li>
                        <img src="assets\.css\icons\nav\about-svgrepo-com.svg" alt="Sobre Nós">
                        <a href="about.html">Sobre Nós</a>
                    </li>
                    <li>
                        <img src="assets\.css\icons\nav\services-20px-svgrepo-com.svg" alt="Serviços">
                        <a href="services.html">Serviços</a>
                    </li>
                    <li>
                        <img src="assets\.css\icons\nav\prices-svgrepo-com.svg" alt="Preços / Planos">
                        <a href="prices.html">Preços / Planos</a>
                    </li>
                    <li>
                        <img src="assets\.css\icons\nav\shopping-bags-shopping-bag-svgrepo-com.svg" alt="Produtos">
                        <a href="product.html">Produtos</a>
                    </li>
                    <li>
                        <img src="assets\.css\icons\nav\contact-us-filled-svgrepo-com.svg" alt="Nos contate">
                        <a href="contactus.html">Nos contate</a>
                    </li>
                </ul>
            </div>
            <div class="auth-buttons" id="auth-section">
                <div class="theme-toggle">
                    <img src="assets\.css\icons\nav\bright-sun-light-svgrepo-com.svg" alt="Mudar Tema" onclick="toggleTheme()">
                </div>
                
                <a href="login.html"><button class="sign-in">Login</button></a>
                <a href="register.html"><button>Register</button></a>
            </div>
        </nav>
    </header>
    <main>
        <h1>Cadastro de Produto</h1>
        <input type="text" id="nome" placeholder="Nome do Produto" required>
        <input type="number" id="preco" placeholder="Preço do Produto" required>
        <input type="text" id="descricao" placeholder="Descrição do Produto" required>
        <input type="text" id="urlImage" placeholder="URL da imagem do Produto" required>
        <button type="button" onclick="cadastrarProduto()">Cadastrar Produto</button>
    
        <div id="produtos">
            <h2>Produtos Cadastrados</h2>
            <button onclick="limparProdutos()">Limpar lista</button>
            <ul id="listaProdutos"></ul>
        </div> 
    </main>
        
    </div>
    <script src="assets\,js\modules\cadastro-produto\cadastro-produto.js"></script>
    <script src="assets\,js\modules\cadastro-produto\index.js"></script>
    <script src="assets\,js\modules\product\product.js"></script>
        <script src="assets\,js\main.js"></script>
</body>
</html>";
    
}
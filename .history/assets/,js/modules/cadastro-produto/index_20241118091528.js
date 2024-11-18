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

// Verifica se o usuário tem o papel de admin
if (userRole !== "admin") {
    alert("Sem acesso!");
    window.location.href = "index.html"; // Redireciona para a página inicial
    document.body.innerHTML = "<h1>Bem-vindo à página Admin!</h1>"
} else {
    window.location.href = "admin.html";
    
}
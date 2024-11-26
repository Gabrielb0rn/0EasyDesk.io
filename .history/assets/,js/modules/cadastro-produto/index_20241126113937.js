// Função para exibir produtos cadastrados na página inicial como cards
function exibirProduto() {
    const produtos = JSON.parse(localStorage.getItem('produtos')) || [];
    const listaProdutos = document.getElementById('listaProdutos');
    listaProdutos.innerHTML = '';

    produtos.forEach(produto => {
        const li = document.createElement('li');
        li.classList.add('product-card'); // Use esta classe no CSS para estilizar os cards

        const img = document.createElement('img');
        img.src = produto.urlImage;
        img.alt = produto.nome;
        img.classList.add('product-image'); // Adicione essa classe para estilizar imagens no CSS

        const nome = document.createElement('h2');
        nome.textContent = produto.nome;

        const preco = document.createElement('p');
        preco.innerHTML = `<strong>Preço:</strong> R$${produto.preco}`;

        const descricao = document.createElement('p');
        descricao.innerHTML = `<strong>Descrição:</strong> ${produto.descricao}`;

        li.appendChild(img);
        li.appendChild(nome);
        li.appendChild(preco);
        li.appendChild(descricao);

        listaProdutos.appendChild(li);
    });
}

window.onload = exibirProduto;

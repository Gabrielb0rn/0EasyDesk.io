// Função para filtrar produtos por categoria
function filterProducts(category) {
    const sections = document.querySelectorAll('.product-section');
    sections.forEach(section => {
        section.classList.add('hidden'); // Esconde todas as seções
    });
    document.getElementById(category).classList.remove('hidden'); // Mostra a seção da categoria selecionada
}

// Função para mostrar os detalhes do produto
function showProductDetails(productCard) {
    const detailsContent = document.getElementById('details-content');
    const similarProducts = document.getElementById('similar-products');

    // Obtém os dados do produto selecionado
    const title = productCard.querySelector('.product-title').innerText;
    const price = productCard.querySelector('.product-price').innerText;
    const image = productCard.querySelector('.product-image').src;

    // Exibe os detalhes do produto
    detailsContent.innerHTML = `
        <img src="${image}" alt="${title}" class="product-image">
        <h2>${title}</h2>
        <p>${price}</p>
        <p>Detalhes do produto: Este é um produto incrível!</p>
    `;

    // Adiciona produtos semelhantes (exemplo)
    similarProducts.innerHTML = `
        <div class="product-card" onclick="showProductDetails(this)">
            <img src="assets/.css/images/product/recomendados/recomendado1.png" alt="Produto Semelhante 1" class="product-image">
            <h2>Produto Semelhante 1</h2>
            <p>R$ 199,99</p>
        </div>
        <div class="product-card" onclick="showProductDetails(this)">
            <img src="assets/.css/images/product/recomendados/recomendado2.png" alt="Produto Semelhante 2" class="product-image">
            <h2>Produto Semelhante 2</h2>
            <p>R$ 249,99</p>
        </div>
    `;

    // Exibe a seção de detalhes do produto
    document.getElementById('product-details').classList.remove('hidden');
}

// Função para fechar os detalhes do produto
function closeProductDetails() {
    document.getElementById('product-details').classList.add('hidden'); // Esconde a seção de detalhes
    document.getElementById('details-content').innerHTML = ''; // Limpa o conteúdo dos detalhes
    document.getElementById('similar-products').innerHTML = ''; // Limpa os produtos semelhantes
}

// Adiciona eventos de clique para os botões de categoria
document.querySelectorAll('.category-button').forEach(button => {
    button.addEventListener('click', () => {
        filterProducts(button.dataset.category); // Filtra produtos pela categoria
    });
});

// Função para filtrar produtos por faixa de preço
function filterByPrice() {
    const minPrice = parseFloat(document.getElementById('min-price').value) || 0;
    const maxPrice = parseFloat(document.getElementById('max-price').value) || Infinity;

    const productCards = document.querySelectorAll('.product-card');
    productCards.forEach(card => {
        const priceText = card.querySelector('.product-price').innerText.replace('R$ ', '').replace(',', '.');
        const price = parseFloat(priceText);
        if (price >= minPrice && price <= maxPrice) {
            card.style.display = 'block'; // Mostra o card se estiver dentro da faixa de preço
        } else {
            card.style.display = 'none'; // Esconde o card se não estiver dentro da faixa de preço
        }
    });
}

// Adiciona evento de clique para o botão de filtro de preço
document.getElementById('filter-price-button').addEventListener('click', filterByPrice);
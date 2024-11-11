function filterProducts(category) {
    const sections = document.querySelectorAll('.product-section');
    sections.forEach(section => {
        section.classList.add('hidden');
    });
    document.getElementById(category).classList.remove('hidden');
}

function showProductDetails(productCard) {
    const detailsContent = document.getElementById('details-content');
    const similarProducts = document.getElementById('similar-products');

    // Exibir detalhes do produto
    const title = productCard.querySelector('.product-title').innerText;
    const price = productCard.querySelector('.product-price').innerText;
    const image = productCard.querySelector('.product-image').src;

    detailsContent.innerHTML = `
        <img src="${image}" alt="${title}" class="product-image">
        <h2>${title}</h2>
        <p>${price}</p>
        <p>Detalhes do produto: Este é um produto incrível!</p>
    `;

    // Adicionar produtos semelhantes
    similarProducts.innerHTML = `
        <div class="product-card" onclick="showProductDetails(this)">
            <img src="assets/.css/images/product/recomendados/recomendado1.png" alt="Produto Semelhante 1" class="product-image">
            <h2>Produto Semelhante 1</h2>
            <p>R$ 199,99</p>
        </div>
        <div class="product-card" onclick="showProductDetails(this)">
            <img src=" assets/.css/images/product/recomendados/recomendado2.png" alt="Produto Semelhante 2" class="product-image">
            <h2>Produto Semelhante 2</h2>
            <p>R$ 249,99</p>
        </div>
    `;

    // Exibir detalhes do produto
    document.getElementById('product-details').classList.remove('hidden');
}

function closeProductDetails() {
    document.getElementById('product-details').classList.add('hidden');
    document.getElementById('details-content').innerHTML = '';
    document.getElementById('similar-products').innerHTML = '';
}

// Exemplo de como chamar a função de filtro ao clicar em uma categoria
document.querySelectorAll('.category-button').forEach(button => {
    button.addEventListener('click', () => {
        filterProducts(button.dataset.category);
    });
});
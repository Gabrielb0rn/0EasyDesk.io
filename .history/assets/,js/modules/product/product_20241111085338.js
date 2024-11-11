// Função para exibir apenas a seção de produtos selecionada
function filterProducts(category) {
    const sections = document.querySelectorAll('.product-section');
    
    // Esconder todas as seções
    sections.forEach(section => {
        section.classList.remove('active');
        section.classList.add('hidden');
        
    });

    // Exibir apenas a seção selecionada
    const activeSection = document.getElementById(category);
    activeSection.classList.remove('hidden');
    activeSection.classList.add('active');
}

// Exibir automaticamente os itens recomendados ao carregar a página
window.addEventListener('DOMContentLoaded', () => {
    filterProducts('recomendados');
});

document.querySelectorAll('.product-card').forEach(card => {
    card.addEventListener('click', function() {
        // Mostra detalhes do produto
        const productId = this.getAttribute('data-id');
        showProductDetails(productId);

        // Minimiza os outros produtos
        document.querySelectorAll('.product-card').forEach(otherCard => {
            if (otherCard !== this) {
                otherCard.classList.add('minimized');
            }
        });
    });
});

function showProductDetails(selectedProduct) {
    // Obter todos os produtos
    const allProducts = document.querySelectorAll('.product-card');
    
    // Minimizar todos os produtos
    allProducts.forEach(product => {
        if (product !== selectedProduct) {
            product.classList.add('minimized'); // Minimizar produto
            product.classList.remove('selected'); // Garantir que o produto não está selecionado
        }
    });
    
    // Exibir detalhes do produto selecionado
    selectedProduct.classList.toggle('selected'); // Alternar a classe 'selected' para exibir os detalhes
    selectedProduct.classList.remove('minimized'); // Garantir que o produto selecionado não está minimizado
}


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
    
    // Minimizar todos os produtos, exceto o selecionado
    allProducts.forEach(product => {
        if (product !== selectedProduct) {
            product.classList.add('minimized'); // Minimiza os outros produtos
            product.classList.remove('selected'); // Remove a classe 'selected' dos outros
        }
    });

    // Alternar entre maximizar o produto selecionado ou desmarcar
    if (selectedProduct.classList.contains('selected')) {
        selectedProduct.classList.remove('selected'); // Desmarcar se já estiver selecionado
    } else {
        selectedProduct.classList.add('selected'); // Marcar como selecionado
    }
    
    // Mostrar detalhes do produto
    selectedProduct.querySelector('.product-details').classList.toggle('hidden');
}

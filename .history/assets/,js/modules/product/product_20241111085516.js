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

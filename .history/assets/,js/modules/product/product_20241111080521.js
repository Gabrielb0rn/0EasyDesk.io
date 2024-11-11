document.addEventListener('DOMContentLoaded', function() {
    const productCards = document.querySelectorAll('.product-card');
    const becomeSupplierBtn = document.getElementById('become-supplier-btn');
    const editProductsBtn = document.getElementById('edit-products-btn');

    productCards.forEach(card => {
        card.addEventListener('click', function() {
            alert('Produto selecionado: ' + this.querySelector('.product-title').innerText);
        });
    });

    becomeSupplierBtn.addEventListener('click', function() {
        alert('Interessado em se tornar fornecedor? Entre em contato conosco!');
    });

    editProductsBtn.addEventListener('click', function() {
        alert('Opção de edição de produtos em desenvolvimento!');
    });
});

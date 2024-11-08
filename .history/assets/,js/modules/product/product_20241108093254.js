// assets/js/products.js

document.addEventListener('DOMContentLoaded', function() {
    const productCards = document.querySelectorAll('.product-card');

    productCards.forEach(card => {
        card.addEventListener('click', function() {
            alert('Produto selecionado: ' + this.querySelector('.product-title').innerText);
        });
    });
});
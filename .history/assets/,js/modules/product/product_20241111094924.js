// assets/js/modules/product/product.js
function filterProducts(category) {
    const productItems = document.querySelectorAll(".product-item");
    productItems.forEach(item => {
        const itemCategory = item.getAttribute("data-category");
        item.style.display = (category === "todos" || itemCategory === category) ? "block" : "none";
    });
}

// Selecionar todas as categorias e adicionar eventos
document.addEventListener("DOMContentLoaded", () => {
    const categoryButtons = document.querySelectorAll(".sidebar ul li");
    categoryButtons.forEach(button => {
        button.addEventListener("click", () => {
            const selectedCategory = button.getAttribute("data-category");
            filterProducts(selectedCategory);
        });
    });
});

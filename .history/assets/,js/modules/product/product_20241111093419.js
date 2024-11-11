// Função para filtrar produtos por categoria
function filterProducts(category) {
    const sections = document.querySelectorAll('.product-section');
    
    // Esconde todas as seções
    sections.forEach(section => {
        section.classList.add('hidden');
    });

    // Mostra apenas a seção selecionada
    if (category) {
        document.getElementById(category).classList.remove('hidden');
    }
}

// Função para inicializar a página com "Recomendados" como padrão
function initializeProducts() {
    filterProducts('recomendados'); // Mostra "Recomendados" por padrão
}

// Chama a função de inicialização ao carregar a página
window.onload = initializeProducts;

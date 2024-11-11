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

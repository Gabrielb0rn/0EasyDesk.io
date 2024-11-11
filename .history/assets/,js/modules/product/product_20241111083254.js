// Função para exibir apenas a seção de produtos selecionada
function filterProducts(category) {
    const sections = document.querySelectorAll('.product-section');

    // Esconder todas as seções
    sections.forEach(section => {
        section.classList.add('hidden');
    });

    // Exibir apenas a seção selecionada
    if (category === 'recomendados') {
        document.getElementById('recomendados').classList.remove('hidden');
    } else {
        // Oculta "Recomendados" ao selecionar qualquer outra categoria
        document.getElementById('recomendados').classList.add('hidden'); 
        document.getElementById(category).classList.remove('hidden');
    }
}

// Exibir automaticamente os itens recomendados ao carregar a página
window.addEventListener('DOMContentLoaded', () => {
    filterProducts('recomendados');
});

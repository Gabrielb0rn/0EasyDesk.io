function filterProducts(category) {
    const sections = document.querySelectorAll('.product-section');
    
    sections.forEach(section => {
        section.classList.add('hidden');
    });

    document.getElementById(category).classList.remove('hidden');
    document.getElementById(category).classList.add('active');
}

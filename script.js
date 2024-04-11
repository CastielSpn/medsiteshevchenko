const productCards = document.querySelectorAll('.product-card');
const onas = document.querySelectorAll('.contact');

productCards.forEach(card => {
    card.addEventListener('mouseover', () => {
        card.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.5)';
    });

    card.addEventListener('mouseout', () => {
        card.style.boxShadow = 'none';
    });
});

onas.forEach(card => {
    card.addEventListener('mouseover', () => {
        card.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.5)';
    });

    card.addEventListener('mouseout', () => {
        card.style.boxShadow = 'none';
    });
});

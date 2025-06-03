window.addEventListener('load', () => {
    const techCards = document.querySelectorAll('.tech-card');

    techCards.forEach(card => {
        const icon = card.querySelector('i');
        if (!icon) return;

        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;

            const deltaX = (e.clientX - centerX) * 0.15;
            const deltaY = (e.clientY - centerY) * 0.15;

            icon.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
        });

        card.addEventListener('mouseleave', () => {
            icon.style.transform = 'translate(0, 0)';
        });
    });

    // ScrollReveal animação
    ScrollReveal().reveal('.sr-section', {
        origin: 'bottom',
        distance: '60px',
        duration: 1000,
        easing: 'ease-out',
        reset: false,
        interval: 150
    });
});

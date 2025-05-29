document.addEventListener('DOMContentLoaded', () => {
    const serviceCards = document.querySelectorAll('.servico-card');

    serviceCards.forEach(card => {
        let lastMouseMove = 0;

        card.addEventListener('mousemove', (e) => {
            const now = Date.now();
            if (now - lastMouseMove < 5) return;

            lastMouseMove = now;
            const cardRect = card.getBoundingClientRect();
            const centerX = cardRect.left + cardRect.width / 2;
            const centerY = cardRect.top + cardRect.height / 2;
            const mouseX = e.clientX;
            const mouseY = e.clientY;

            const deltaX = (mouseX - centerX) * 0.2;
            const deltaY = (mouseY - centerY) * 0.2;

            const icon = card.querySelector('i');
            if (icon) {
                icon.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
            }
        });

        card.addEventListener('mouseleave', () => {
            const icon = card.querySelector('i');
            if (icon) {
                icon.style.transform = 'translate(0, 0)';
            }
        });
    });
});
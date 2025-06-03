document.addEventListener('DOMContentLoaded', () => {
    const techCards = document.querySelectorAll('.tech-card');

    techCards.forEach(card => {
        let lastMove = 0;

        card.addEventListener('mousemove', (e) => {
            const now = Date.now();
            if (now - lastMove < 10) return;
            lastMove = now;

            const rect = card.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;
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

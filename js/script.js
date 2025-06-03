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
    document.querySelector('.contato-form').addEventListener('submit', function (e) {
        e.preventDefault();
        const form = e.target;
        const data = new FormData(form);

        fetch(form.action, {
            method: 'POST',
            body: data
        })
            .then(res => res.text())
            .then(response => {
                if (response.trim() === "OK") {
                    alert("Mensagem enviada com sucesso!");
                    form.reset();
                    window.open('https://wa.me/5541999657531?text=Recebi+sua+mensagem+do+site!', '_blank');
                } else {
                    alert("Erro: " + response);
                }
            })
            .catch(() => alert("Erro ao enviar a mensagem."));
    });
});

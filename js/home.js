
const memberCards = document.querySelectorAll('.member-card');

if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries, currentObserver) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                currentObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.12
    });

    memberCards.forEach((card) => {
        card.classList.add('will-animate');
        observer.observe(card);
    });
} else {
    memberCards.forEach((card) => {
        card.classList.add('is-visible');
    });
}

function toggleMenu() {
    const menu = document.getElementById('mobileMenu');
    menu.classList.toggle('active');
}



window.addEventListener("load", function () {
    setTimeout(function () {
        document.body.classList.add("loaded");
    }, 1500); // Preloader stays for 1.5 seconds before disappearing
});


const filterBtns = document.querySelectorAll('.filter-btn');
const cards = document.querySelectorAll('.project-card');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filter = btn.dataset.filter;

        cards.forEach(card => {
            const cat = card.dataset.category;
            if (filter === 'all' || cat === filter) {
                card.classList.remove('hidden');
                card.style.animation = 'none';
                card.offsetHeight; // reflow
                card.style.animation = '';
            } else {
                card.classList.add('hidden');
            }
        });
    });
});


// Animate skill bars on scroll into view
const fills = document.querySelectorAll('.skill-fill');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animated');
        }
    });
}, { threshold: 0.3 });

fills.forEach(f => observer.observe(f));
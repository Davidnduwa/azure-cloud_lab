// Simple intersection observer for enter animations
const observer = new IntersectionObserver((entries) => {
entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('enter'); });
}, { threshold: 0.2 });


document.querySelectorAll('.tile').forEach((el) => observer.observe(el));

// BENER TEAM - JAVASCRIPT

// Tahun otomatis di footer
document.getElementById("year").textContent =
    new Date().getFullYear();

// Animasi saat elemen masuk ke layar
const animatedElements = document.querySelectorAll(
    ".member-card, .section-heading, .about-content, .project-card"
);

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.15
});

animatedElements.forEach((element) => {
    element.classList.add("reveal");
    observer.observe(element);
});

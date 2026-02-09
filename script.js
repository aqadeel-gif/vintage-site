// script.js
const observerOptions = {
    threshold: 0.2 // Trigger when 20% of the element is visible
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Select all sections to animate
document.querySelectorAll('section').forEach(section => {
    section.classList.add('fade-in'); // Add initial hidden state
    observer.observe(section);
});

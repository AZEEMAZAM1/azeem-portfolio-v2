// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Mobile menu toggle (optional - for responsive version)
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });
}

// Close menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

console.log('Portfolio website loaded successfully!');


// Contact Popup Toggle
function toggleContactPopup() {
    const popup = document.getElementById('contactPopup');
    popup.classList.toggle('active');
}

// Close popup when clicking outside
document.addEventListener('click', function(e) {
    const popup = document.getElementById('contactPopup');
    if (e.target === popup) {
        popup.classList.remove('active');
    }
});

// Close popup with Escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        const popup = document.getElementById('contactPopup');
        popup.classList.remove('active');
    }
});

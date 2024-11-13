document.addEventListener('DOMContentLoaded', () => {
    // Handle form submission
    const form = document.querySelector('form');
    
    if (form) {
        form.addEventListener('submit', (event) => {
            event.preventDefault();
            alert('Form submitted successfully!');
        });
    }
    
    // Handle card clicks
    const frontendCard = document.getElementById('frontend-card');
    const backendCard = document.getElementById('backend-card');
    const webdesignCard = document.getElementById('webdesign-card');

    if (frontendCard) {
        frontendCard.addEventListener('click', () => {
            alert('You clicked on Front-End Development');
        });
    }

    if (backendCard) {
        backendCard.addEventListener('click', () => {
            alert('You clicked on Back-End Development');
        });
    }

    if (webdesignCard) {
        webdesignCard.addEventListener('click', () => {
            alert('You clicked on Web Designing');
        });
    }
});

function toggleMenu() {
    const navMenu = document.querySelector('.nav-menu');
    if (navMenu) {
        navMenu.classList.toggle('active');
    } else {
        console.error('Element with class "nav-menu" not found.');
    }
}
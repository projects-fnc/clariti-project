// Navigation active state management
document.addEventListener('DOMContentLoaded', function() {
    // Set active navigation link based on current page
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        const linkHref = link.getAttribute('href');
        if (linkHref === currentPage || 
            (currentPage === '' && linkHref === 'index.html') ||
            (currentPage === '/' && linkHref === 'index.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
    
    // Add active class to header based on page
    const header = document.getElementById('header');
    if (header && currentPage !== 'index.html') {
        header.classList.add('solid');
        const logoImg = header.querySelector('.logo-img img');
        if (logoImg && logoImg.dataset.logoScrolled) {
            logoImg.src = logoImg.dataset.logoScrolled;
        }
    }
});
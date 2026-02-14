(() => {
    // DOM Elements
    const header = document.getElementById("header");
    const mobileToggle = document.getElementById("mobile-toggle");
    const nav = document.getElementById("main-nav");
    
    // Mobile menu toggle
    if (mobileToggle && nav) {
        mobileToggle.addEventListener("click", () => {
            nav.classList.toggle("active");
        });
    }
    
    // Close mobile menu when clicking a link
    const navLinks = document.querySelectorAll("#main-nav a");
    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            nav.classList.remove("active");
        });
    });
    
    // Smooth scroll for anchor links (internal page links)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Skip if it's not an anchor link to current page
            if (href === '#' || href.startsWith('#!')) return;
            
            // If it's an anchor link
            if (href.startsWith('#')) {
                e.preventDefault();
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 100,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
    
    // Header background change on scroll
    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }
    
    // Scroll animation for elements with class "fade-up"
    // (used on about, services, etc.)
    const fadeElements = document.querySelectorAll('.fade-up');
    
    const isInViewport = (element, offset = 100) => {
        const rect = element.getBoundingClientRect();
        return rect.top <= (window.innerHeight - offset) && rect.bottom >= 0;
    };
    
    const checkFade = () => {
        fadeElements.forEach(el => {
            if (isInViewport(el) && !el.classList.contains('visible')) {
                el.classList.add('visible');
            }
        });
    };
    
    if (fadeElements.length > 0) {
        // Set initial transition
        fadeElements.forEach(el => {
            el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        });
        
        window.addEventListener('scroll', checkFade);
        window.addEventListener('load', checkFade);
        setTimeout(checkFade, 300);
    }
})();
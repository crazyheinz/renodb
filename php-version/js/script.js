/**
 * RenoDB - JavaScript
 * Smooth scrolling and interactive elements
 */

document.addEventListener('DOMContentLoaded', function() {
    
    // Smooth scrolling voor anchor links
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

    // Scroll to top button (optioneel)
    const scrollTopBtn = document.createElement('button');
    scrollTopBtn.innerHTML = '↑';
    scrollTopBtn.className = 'fixed bottom-8 right-8 bg-blue-600 text-white w-12 h-12 rounded-full shadow-lg hover:bg-blue-700 transition-all opacity-0 pointer-events-none';
    scrollTopBtn.setAttribute('aria-label', 'Scroll naar boven');
    document.body.appendChild(scrollTopBtn);

    // Toon/verberg scroll to top button
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            scrollTopBtn.style.opacity = '1';
            scrollTopBtn.style.pointerEvents = 'auto';
        } else {
            scrollTopBtn.style.opacity = '0';
            scrollTopBtn.style.pointerEvents = 'none';
        }
    });

    scrollTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Analytics tracking (optioneel - voeg je Google Analytics code toe)
    // gtag('event', 'page_view', {
    //     page_title: document.title,
    //     page_location: window.location.href,
    //     page_path: window.location.pathname
    // });

    // WhatsApp button click tracking
    document.querySelectorAll('a[href^="https://wa.me"]').forEach(link => {
        link.addEventListener('click', function() {
            console.log('WhatsApp contact initiated');
            // Voeg hier je analytics tracking toe indien gewenst
        });
    });

    // Ringtwice button click tracking
    document.querySelectorAll('a[href*="ringtwice.be"]').forEach(link => {
        link.addEventListener('click', function() {
            console.log('Ringtwice profile visited');
            // Voeg hier je analytics tracking toe indien gewenst
        });
    });
});

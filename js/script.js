document.addEventListener('DOMContentLoaded', (event) => {
    gsap.from('.my-name', { duration: 1, y: -20, opacity: 0, ease: 'power2.out' }); // Animate name in header
    gsap.from('.contact-title', { duration: 1, x: -100, opacity: 0, delay: 0.5, ease: 'power3.out' });
    gsap.from('.eye-icon', { duration: 1, opacity: 0, y: 20, delay: 0.7, ease: 'power3.out' });
    gsap.to('.eye-icon', { duration: 1.5, y: 0, opacity: 1, delay: 0.7, ease: 'elastic.out(1, 0.7)' });
    gsap.from('.email', { duration: 1, opacity: 0, y: 20, delay: 1, ease: 'power3.out' });
    gsap.to('.email', { duration: 1, y: 0, opacity: 1, delay: 1, ease: 'power3.out' });


    gsap.from('.contact-text', { duration: 1, opacity: 0, y: 20, delay: 1.3, ease: 'power3.out' });
    gsap.to('.contact-text', { duration: 1, y: 0, opacity: 1, delay: 1.3, ease: 'power3.out' });
    gsap.from('.faq-section', { duration: 1, opacity: 0, y: 20, delay: 1.5, ease: 'power3.out' });
    gsap.to('.faq-section', { duration: 1, y: 0, opacity: 1, delay: 1.5, ease: 'power3.out' });
    gsap.from('.social-links', { duration: 1, opacity: 0, y: 20, delay: 1.7, ease: 'power3.out' });
    gsap.to('.social-links', { duration: 1, y: 0, opacity: 1, delay: 1.7, ease: 'power3.out' });
});
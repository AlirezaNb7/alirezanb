document.addEventListener('DOMContentLoaded', () => {
    // Initialize GSAP animations

    // Create a timeline for sequenced animations
    const tl = gsap.timeline({
        defaults: {
            duration: 1.2,
            ease: 'power3.out'
        }
    });

    // Animate header
    tl.to('.header', {
        opacity: 1,
        y: 0,
        duration: 1
    });

    // Animate "GET IN TOUCH" text
    tl.to('.get-in-touch', {
        opacity: 1,
        x: 0,
        duration: 1.2
    }, '-=0.5');

    // Animate contact info glass card
    tl.to('.contact-info', {
        opacity: 1,
        y: 0,
        duration: 1
    }, '-=0.8');

    // Animate quote at the bottom
    tl.to('.quote', {
        opacity: 1,
        y: 0,
        duration: 1
    }, '-=0.6');

    // Create floating animation for the glass elements
    gsap.to(['.header', '.contact-info', '.quote'], {
        y: '10px',
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        stagger: 0.2
    });

    // Create subtle parallax effect on mousemove
    const container = document.querySelector('.container');

    document.addEventListener('mousemove', (e) => {
        const xValue = (e.clientX - window.innerWidth / 2) / 40;
        const yValue = (e.clientY - window.innerHeight / 2) / 40;

        gsap.to('.get-in-touch', {
            x: xValue,
            y: yValue,
            duration: 1.5,
            ease: 'power3.out'
        });

        gsap.to('.header', {
            x: xValue * 0.5,
            y: yValue * 0.5,
            duration: 1.5,
            ease: 'power3.out'
        });

        gsap.to('.contact-info', {
            x: -xValue * 0.3,
            y: -yValue * 0.3,
            duration: 1.5,
            ease: 'power3.out'
        });

        gsap.to('.quote', {
            x: -xValue * 0.2,
            y: -yValue * 0.2,
            duration: 1.5,
            ease: 'power3.out'
        });
    });

    // Add random floating stars/sparkles effect
    const createStars = () => {
        const starsCount = 20;
        const container = document.querySelector('body');

        for (let i = 0; i < starsCount; i++) {
            const star = document.createElement('div');
            star.classList.add('star');
            star.style.cssText = `
        position: absolute;
        font-size: ${Math.random() * 20 + 10}px;
        opacity: ${Math.random() * 0.3 + 0.1};
        top: ${Math.random() * 100}vh;
        left: ${Math.random() * 100}vw;
        z-index: -1;
        color: rgba(255, 255, 255, 0.3);
      `;
            star.textContent = '✧';
            container.appendChild(star);

            // Animate each star
            gsap.to(star, {
                y: '-=30',
                duration: Math.random() * 3 + 2,
                repeat: -1,
                yoyo: true,
                ease: 'sine.inOut',
                delay: Math.random() * 2
            });

            gsap.to(star, {
                opacity: Math.random() * 0.2 + 0.1,
                duration: Math.random() * 2 + 1,
                repeat: -1,
                yoyo: true,
                ease: 'sine.inOut',
                delay: Math.random() * 1
            });
        }
    };

    createStars();
});

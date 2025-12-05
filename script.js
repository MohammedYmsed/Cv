document.addEventListener('DOMContentLoaded', () => {
    gsap.registerPlugin(ScrollTrigger);

    // Hero Animations
    const heroTimeline = gsap.timeline();

    heroTimeline.to('.hero-title', {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out'
    })
        .to('.hero-subtitle', {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: 'power3.out'
        }, '-=0.6')
        .to('.hero-description', {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: 'power3.out'
        }, '-=0.6')
        .to('.cta-button', {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'back.out(1.7)'
        }, '-=0.4');

    // About Section Animations
    gsap.utils.toArray('.reveal-text').forEach((text, i) => {
        gsap.to(text, {
            scrollTrigger: {
                trigger: '#about',
                start: 'top 70%',
                toggleActions: 'play none none reverse'
            },
            opacity: 1,
            y: 0,
            duration: 0.8,
            delay: i * 0.2,
            ease: 'power2.out'
        });
    });

    // Skills Animations
    gsap.set('.skill-card', { y: 50, opacity: 0 });
    ScrollTrigger.batch('.skill-card', {
        start: 'top 85%',
        onEnter: batch => gsap.to(batch, {
            opacity: 1,
            y: 0,
            stagger: 0.15,
            duration: 0.8,
            ease: 'power3.out',
            overwrite: true
        })
    });

    // Projects Animations
    gsap.set('.project-card', { y: 50, opacity: 0 });
    ScrollTrigger.batch('.project-card', {
        start: 'top 85%',
        onEnter: batch => gsap.to(batch, {
            opacity: 1,
            y: 0,
            stagger: 0.15,
            duration: 0.8,
            ease: 'power3.out',
            overwrite: true
        })
    });

    // Smooth Scroll for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Custom Cursor Logic
    const cursor = document.querySelector('.cursor');
    const follower = document.querySelector('.cursor-follower');
    const links = document.querySelectorAll('a, button, .project-card, .skill-card');

    document.addEventListener('mousemove', (e) => {
        gsap.to(cursor, {
            x: e.clientX,
            y: e.clientY,
            duration: 0.1
        });
        gsap.to(follower, {
            x: e.clientX,
            y: e.clientY,
            duration: 0.3
        });
    });

    links.forEach(link => {
        link.addEventListener('mouseenter', () => {
            follower.classList.add('cursor-hover');
        });
        link.addEventListener('mouseleave', () => {
            follower.classList.remove('cursor-hover');
        });
    });
});

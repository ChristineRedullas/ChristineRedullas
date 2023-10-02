// script.js

document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('.fullscreen-section');
    const navLinks = document.querySelectorAll('#navbar .nav-link');

    window.addEventListener('scroll', function () {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').substring(1) === current) {
                link.classList.add('active');
            }
        });
    });
});

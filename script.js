// Create stars and shooting stars with faster animations
    function createStars() {
        const container = document.getElementById('stars-container');
        const starCount = 200; // You can increase this for more stars
        const shootingStarCount = 5; // Increased from 3 to 5 for more activity
        
        // Create twinkling stars
        for (let i = 0; i < starCount; i++) {
            const star = document.createElement('div');
            star.classList.add('star');
            
            // Random size between 1px and 3px
            const size = Math.random() * 2 + 1;
            star.style.width = `${size}px`;
            star.style.height = `${size}px`;
            
            // Random position
            star.style.left = `${Math.random() * 100}%`;
            star.style.top = `${Math.random() * 100}%`;
            
            // FASTER twinkle animation (reduced duration range)
            star.style.setProperty('--duration', `${Math.random() * 3 + 1}s`); // Was 5+3
            star.style.animationDelay = `${Math.random() * 3}s`; // Was 5
            
            container.appendChild(star);
        }
        
        // Create shooting stars
        for (let i = 0; i < shootingStarCount; i++) {
            const shootingStar = document.createElement('div');
            shootingStar.classList.add('shooting-star');
            
            // Random position
            const startX = Math.random() * 20;
            const startY = Math.random() * 20;
            shootingStar.style.left = `${startX}%`;
            shootingStar.style.top = `${startY}%`;
            
            // Random distance and direction
            const distanceX = Math.random() * 500 + 500;
            const distanceY = Math.random() * 200 + 100;
            shootingStar.style.setProperty('--distance-x', `${distanceX}px`);
            shootingStar.style.setProperty('--distance-y', `${distanceY}px`);
            
            // FASTER shooting animation (reduced duration range)
            const duration = Math.random() * 2 + 2; // Was 5+5
            shootingStar.style.setProperty('--duration', `${duration}s`);
            shootingStar.style.animationDelay = `${Math.random() * 10}s`; // Was 20
            
            container.appendChild(shootingStar);
        }
    }

        // Mobile Navigation
        const hamburger = document.querySelector('.hamburger');
        const navLinks = document.querySelector('.nav-links');

        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            hamburger.innerHTML = navLinks.classList.contains('active') ? 
                '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
        });

        // Close mobile menu when clicking a link
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                // Only close menu if it's not an external link
                if (!link.getAttribute('href').startsWith('http') && 
                    !link.getAttribute('href').startsWith('mailto') &&
                    !link.getAttribute('href').startsWith('tel')) {
                    navLinks.classList.remove('active');
                    hamburger.innerHTML = '<i class="fas fa-bars"></i>';
                }
            });
        });

        // Header scroll effect
        const header = document.getElementById('header');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });

        // Scroll animations
        const animateOnScroll = () => {
            const elements = document.querySelectorAll('.project-card, .section-title, .about-text, .about-img, .contact-info, .contact-form, .pricing-table');
            
            elements.forEach(element => {
                const elementPosition = element.getBoundingClientRect().top;
                const screenPosition = window.innerHeight / 1.2;
                
                if (elementPosition < screenPosition) {
                    element.classList.add('animate');
                }
            });
        };

        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            });
        });

        // Initialize
        document.addEventListener('DOMContentLoaded', () => {
            createStars();
            animateOnScroll();
            window.addEventListener('scroll', animateOnScroll);
        });

        
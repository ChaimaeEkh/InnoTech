document.addEventListener('DOMContentLoaded', () => {
    // Menu Toggle Functionality
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const languageSelector = document.getElementById('language-selector');
    const mobileLanguageSelector = document.getElementById('mobile-language-selector');

    // Function to toggle menu
    function toggleMenu() {
        menuToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
        document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
    }

    // Menu event listeners
    menuToggle.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleMenu();
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (navMenu.classList.contains('active') && 
            !navMenu.contains(e.target) && 
            !menuToggle.contains(e.target)) {
            toggleMenu();
        }
    });

    // Prevent clicks inside the menu from closing it
    navMenu.addEventListener('click', (e) => {
        e.stopPropagation();
    });

    // Close menu when clicking a nav link
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                toggleMenu(); // Close menu first
                setTimeout(() => { // Wait for menu animation
                    targetElement.scrollIntoView({
                        behavior: 'smooth'
                    });
                }, 300);
            }
        });
    });

    // Translation functionality
    fetch('package.json')
        .then(response => response.json())
        .then(data => {
            const translations = data.translations;

            function updateLanguage(lang) {
                // Update HTML lang attribute
                document.documentElement.lang = lang;
                languageSelector.value = lang;
                mobileLanguageSelector.value = lang;

                // Update all elements with data-translate attribute
                document.querySelectorAll('[data-translate]').forEach(element => {
                    const key = element.getAttribute('data-translate');
                    const translation = getNestedTranslation(translations[lang], key);

                    if (translation) {
                        if (element.tagName === 'INPUT' && element.type !== 'submit') {
                            element.placeholder = translation;
                        } else if (element.tagName === 'TEXTAREA') {
                            element.placeholder = translation;
                        } else {
                            element.textContent = translation;
                        }
                    }
                });

                // Handle RTL for Arabic
                document.body.style.direction = lang === 'ar' ? 'rtl' : 'ltr';
            }

            function getNestedTranslation(obj, path) {
                return path.split('.').reduce((p, c) => p && p[c], obj);
            }

            // Set initial language
            const browserLang = navigator.language.split('-')[0];
            const defaultLang = ['en', 'fr', 'ar'].includes(browserLang) ? browserLang : 'en';
            updateLanguage(defaultLang);

            // Language selector event listeners
            languageSelector.addEventListener('change', (e) => {
                updateLanguage(e.target.value);
            });

            mobileLanguageSelector.addEventListener('change', (e) => {
                updateLanguage(e.target.value);
                toggleMenu(); // Close menu after selecting language
            });
        })
        .catch(error => {
            console.error('Error loading translations:', error);
        });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Form submission handler
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Basic form validation
            const inputs = this.querySelectorAll('input, textarea');
            let isValid = true;
            
            inputs.forEach(input => {
                if (!input.value.trim()) {
                    isValid = false;
                    input.classList.add('error');
                } else {
                    input.classList.remove('error');
                }
            });
            
            if (isValid) {
                // In a real application, you would send this data to a server
                alert('Merci pour votre message ! Nous vous répondrons bientôt.');
                this.reset();
            }
        });
    }

    // Add scroll animation for sections
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Observe sections for animations
    const sections = document.querySelectorAll('.services, .about, .contact, .products, .technologies, .portfolio, .team');
    sections.forEach(section => {
        observer.observe(section);
    });

    // Interactive product and technology cards
    const productCards = document.querySelectorAll('.product-card, .technology-card');
    productCards.forEach(card => {
        card.addEventListener('click', () => {
            // Potential modal or detailed view implementation
            alert('Détails du produit/technologie à venir !');
        });
    });

    // Portfolio image preview
    const portfolioCards = document.querySelectorAll('.portfolio-card');
    portfolioCards.forEach(card => {
        const img = card.querySelector('img');
        if (img) {
            img.addEventListener('click', () => {
                // Create a modal or lightbox for image preview
                const modal = document.createElement('div');
                modal.classList.add('image-modal');
                modal.innerHTML = `
                    <div class="modal-content">
                        <span class="close-modal">&times;</span>
                        <img src="${img.src}" alt="${img.alt}">
                    </div>
                `;
                document.body.appendChild(modal);

                modal.querySelector('.close-modal').addEventListener('click', () => {
                    document.body.removeChild(modal);
                });
            });
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
  // Translations
  const translations = {
      "en": {
          "nav": {
              "home": "Home",
              "services": "Services",
              "about": "About",
              "products": "Products",
              "technologies": "Technologies",
              "portfolio": "Portfolio",
              "team": "Team",
              "contact": "Contact"
          },
          "sections": {
              "hero": {
                  "title": "Transform Your Ideas into Digital Solutions",
                  "subtitle": "We Create Technologies That Inspire and Innovate"
              },
              "services": {
                  "title": "Our Services",
                  "items": {
                      "0": {
                          "title": "Web Development",
                          "description": "Modern and performant web solutions"
                      },
                      "1": {
                          "title": "Mobile Applications",
                          "description": "Innovative apps for iOS and Android"
                      },
                      "2": {
                          "title": "Cloud Computing",
                          "description": "Secure and scalable cloud solutions"
                      }
                  }
              },
              "about": {
                  "title": "Our Mission",
                  "description": "At InnoTech, we believe in the power of technological innovation to transform businesses. Our team of experts combines creativity and technical expertise to develop customized digital solutions."
              },
              "products": {
                  "title": "Our Products",
                  "items": {
                      "0": {
                          "title": "Product 1",
                          "description": "Description of product 1"
                      },
                      "1": {
                          "title": "Product 2",
                          "description": "Description of product 2"
                      },
                      "2": {
                          "title": "Product 3",
                          "description": "Description of product 3"
                      }
                  }
              },
              "technologies": {
                  "title": "Our Technologies"
              },
              "portfolio": {
                  "title": "Our Portfolio"
              },
              "team": {
                  "title": "Our Team"
              }
          },
          "contact": {
              "title": "Contact Us",
              "name_placeholder": "Your Name",
              "email_placeholder": "Your Email",
              "phone_placeholder": "Your Phone Number",
              "message_placeholder": "Your Message",
              "submit": "Send Message"
          }
      },
      "fr": {
          "nav": {
              "home": "Accueil",
              "services": "Services",
              "about": "À propos",
              "products": "Produits",
              "technologies": "Technologies",
              "portfolio": "Portfolio",
              "team": "Équipe",
              "contact": "Contact"
          },
          "sections": {
              "hero": {
                  "title": "Transformez Vos Idées en Solutions Numériques",
                  "subtitle": "Nous Créons des Technologies qui Inspirent et Innovent"
              },
              "services": {
                  "title": "Nos Services",
                  "items": {
                      "0": {
                          "title": "Développement Web",
                          "description": "Solutions web modernes et performantes"
                      },
                      "1": {
                          "title": "Applications Mobiles",
                          "description": "Applications innovantes pour iOS et Android"
                      },
                      "2": {
                          "title": "Cloud Computing",
                          "description": "Solutions cloud sécurisées et évolutives"
                      }
                  }
              },
              "about": {
                  "title": "Notre Mission",
                  "description": "Chez InnoTech, nous croyons au pouvoir de l'innovation technologique pour transformer les entreprises. Notre équipe d'experts combine créativité et expertise technique pour développer des solutions numériques personnalisées."
              },
              "products": {
                  "title": "Nos Produits",
                  "items": {
                      "0": {
                          "title": "Produit 1",
                          "description": "Description du produit 1"
                      },
                      "1": {
                          "title": "Produit 2",
                          "description": "Description du produit 2"
                      },
                      "2": {
                          "title": "Produit 3",
                          "description": "Description du produit 3"
                      }
                  }
              },
              "technologies": {
                  "title": "Nos Technologies"
              },
              "portfolio": {
                  "title": "Notre Portfolio"
              },
              "team": {
                  "title": "Notre Équipe"
              }
          },
          "contact": {
              "title": "Contactez-nous",
              "name_placeholder": "Votre Nom",
              "email_placeholder": "Votre Email",
              "phone_placeholder": "Votre Numéro de Téléphone",
              "message_placeholder": "Votre Message",
              "submit": "Envoyer le Message"
          }
      },
      "ar": {
          "nav": {
              "home": "الرئيسية",
              "services": "خدماتنا",
              "about": "من نحن",
              "products": "منتجاتنا",
              "technologies": "التقنيات",
              "portfolio": "أعمالنا",
              "team": "فريقنا",
              "contact": "اتصل بنا"
          },
          "sections": {
              "hero": {
                  "title": "حول أفكارك إلى حلول رقمية",
                  "subtitle": "نبتكر تقنيات تلهم وتبدع"
              },
              "services": {
                  "title": "خدماتنا",
                  "items": {
                      "0": {
                          "title": "تطوير المواقع",
                          "description": "حلول ويب حديثة وفعالة"
                      },
                      "1": {
                          "title": "تطبيقات الجوال",
                          "description": "تطبيقات مبتكرة لـ iOS وAndroid"
                      },
                      "2": {
                          "title": "الحوسبة السحابية",
                          "description": "حلول سحابية آمنة وقابلة للتطوير"
                      }
                  }
              },
              "about": {
                  "title": "مهمتنا",
                  "description": "في InnoTech، نؤمن بقوة الابتكار التكنولوجي في تحويل الأعمال. يجمع فريق الخبراء لدينا بين الإبداع والخبرة التقنية لتطوير حلول رقمية مخصصة."
              },
              "products": {
                  "title": "منتجاتنا",
                  "items": {
                      "0": {
                          "title": "المنتج 1",
                          "description": "وصف المنتج 1"
                      },
                      "1": {
                          "title": "المنتج 2",
                          "description": "وصف المنتج 2"
                      },
                      "2": {
                          "title": "المنتج 3",
                          "description": "وصف المنتج 3"
                      }
                  }
              },
              "technologies": {
                  "title": "تقنياتنا"
              },
              "portfolio": {
                  "title": "أعمالنا"
              },
              "team": {
                  "title": "فريقنا"
              }
          },
          "contact": {
              "title": "اتصل بنا",
              "name_placeholder": "اسمك",
              "email_placeholder": "بريدك الإلكتروني",
              "phone_placeholder": "رقم هاتفك",
              "message_placeholder": "رسالتك",
              "submit": "إرسال الرسالة"
          }
      }
  };

  const menuToggle = document.querySelector('.menu-toggle');
  const navMenu = document.querySelector('.nav-menu');
  const languageSelector = document.getElementById('language-selector');

  // updateLg
  function updateLanguage(lang) {
      document.documentElement.lang = lang;
      languageSelector.value = lang;
      document.querySelectorAll('[data-translate]').forEach(element => {
          const key = element.getAttribute('data-translate');
          const keys = key.split('.');
          let translation = translations[lang];
          for (const k of keys) {
              if (translation && translation[k]) {
                  translation = translation[k];
              } else {
                  translation = null;
                  break;
              }
          }

          if (translation) {
              if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                  element.placeholder = translation;
              } else {
                  element.textContent = translation;
              }
          }
      });
      // RTL arabic
      document.body.dir = lang === 'ar' ? 'rtl' : 'ltr';
      if (lang === 'ar') {
          navMenu.style.left = 'auto';
          navMenu.style.right = '-100%';
      } else {
          navMenu.style.right = 'auto';
          navMenu.style.left = '-100%';
      }
  }

  // toggle-menu
  function toggleMenu() {
      menuToggle.classList.toggle('active');
      navMenu.classList.toggle('active');
      const currentLang = document.documentElement.lang;
      if (navMenu.classList.contains('active')) {
          navMenu.style.left = currentLang === 'ar' ? 'auto' : '0';
          navMenu.style.right = currentLang === 'ar' ? '0' : 'auto';
      } else {
          navMenu.style.left = currentLang === 'ar' ? 'auto' : '-100%';
          navMenu.style.right = currentLang === 'ar' ? '-100%' : 'auto';
      }
  }

  menuToggle.addEventListener('click', toggleMenu);
  
  languageSelector.addEventListener('change', (e) => {
      updateLanguage(e.target.value);
  });

  // scrolling
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
          e.preventDefault();
          const targetId = this.getAttribute('href');
          const targetElement = document.querySelector(targetId);
          
          if (targetElement) {
              if (navMenu.classList.contains('active')) {
                  toggleMenu();
              }
              setTimeout(() => {
                  targetElement.scrollIntoView({
                      behavior: 'smooth'
                  });
              }, 300);
          }
      });
  });

  // Contact
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
      contactForm.addEventListener('submit', function(e) {
          e.preventDefault();
          
          const formData = new FormData(this);
          const currentLang = document.documentElement.lang;
          let isValid = true;
          formData.forEach((value, key) => {
              if (!value.trim() && key !== 'phone') { // Phone is optional
                  isValid = false;
              }
          });
          
          if (isValid) {
              //messages
              const messages = {
                  'en': 'Thank you for your message! We will get back to you soon.',
                  'fr': 'Merci pour votre message ! Nous vous répondrons bientôt.',
                  'ar': 'شكراً لرسالتك! سنرد عليك قريباً.'
              };
              alert(messages[currentLang]);
              this.reset();
          } else {
              const errorMessages = {
                  'en': 'Please fill in all required fields.',
                  'fr': 'Veuillez remplir tous les champs obligatoires.',
                  'ar': 'يرجى ملء جميع الحقول المطلوبة.'
              };
              alert(errorMessages[currentLang]);
          }
      });
  }

  const browserLang = navigator.language.split('-')[0];
  const defaultLang = ['en', 'fr', 'ar'].includes(browserLang) ? browserLang : 'en';
  updateLanguage(defaultLang);

  // animations
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
  document.querySelectorAll('section').forEach(section => {
      observer.observe(section);
  });
});
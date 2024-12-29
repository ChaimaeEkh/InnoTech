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
                "title": "Our Cutting-Edge Products",
                "description": "Explore our innovative solutions designed to meet the evolving needs of businesses in the digital age.",
                "items": {
                    "0": {
                        "title": "AI-Powered Analytics",
                        "description": "Leverage the power of artificial intelligence to unlock valuable insights from your data."
                    },
                    "1": {
                        "title": "Cloud Integration Platform",
                        "description": "Seamlessly connect and manage your business processes with our secure cloud solutions."
                    },
                    "2": {
                        "title": "Advanced Cybersecurity",
                        "description": "Protect your digital assets with state-of-the-art security systems and real-time monitoring."
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
                "title": "Transformez vos idées en solutions numériques",
                "subtitle": "Nous créons des technologies qui inspirent et innovent"
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
                        "title": "Informatique en Nuage",
                        "description": "Solutions cloud sécurisées et évolutives"
                    }
                }
            },
            "about": {
                "title": "Notre Mission",
                "description": "Chez InnoTech, nous croyons en la puissance de l'innovation technologique pour transformer les entreprises. Notre équipe d'experts combine créativité et expertise technique pour développer des solutions numériques sur mesure."
            },
            "products": {
                "title": "Nos Produits de Pointe",
                "description": "Découvrez nos solutions innovantes conçues pour répondre aux besoins évolutifs des entreprises à l'ère numérique.",
                "items": {
                    "0": {
                        "title": "Analyse Powered by AI",
                        "description": "Exploitez la puissance de l'intelligence artificielle pour obtenir des informations précieuses de vos données."
                    },
                    "1": {
                        "title": "Plateforme d'Intégration Cloud",
                        "description": "Connectez et gérez sans effort vos processus commerciaux avec nos solutions cloud sécurisées."
                    },
                    "2": {
                        "title": "Cybersécurité Avancée",
                        "description": "Protégez vos actifs numériques avec des systèmes de sécurité de pointe et une surveillance en temps réel."
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
            "name_placeholder": "Votre nom",
            "email_placeholder": "Votre e-mail",
            "phone_placeholder": "Votre numéro de téléphone",
            "message_placeholder": "Votre message",
            "submit": "Envoyer le message"
        }
    },
    "ar": {
        "nav": {
            "home": "الصفحة الرئيسية",
            "services": "الخدمات",
            "about": "حول",
            "products": "المنتجات",
            "technologies": "التقنيات",
            "portfolio": "المشاريع",
            "team": "الفريق",
            "contact": "اتصل بنا"
        },
        "sections": {
            "hero": {
                "title": "حول أفكارك إلى حلول رقمية",
                "subtitle": "نحن نخلق تقنيات تلهم وتبتكر"
            },
            "services": {
                "title": "خدماتنا",
                "items": {
                    "0": {
                        "title": "تطوير الويب",
                        "description": "حلول ويب حديثة وفعالة"
                    },
                    "1": {
                        "title": "تطبيقات الهاتف المحمول",
                        "description": "تطبيقات مبتكرة لـ iOS و Android"
                    },
                    "2": {
                        "title": "الحوسبة السحابية",
                        "description": "حلول سحابية آمنة وقابلة للتوسع"
                    }
                }
            },
            "about": {
                "title": "مهمتنا",
                "description": "في InnoTech، نؤمن بقوة الابتكار التكنولوجي لتحويل الأعمال. يجمع فريقنا من الخبراء بين الإبداع والخبرة التقنية لتطوير حلول رقمية مخصصة."
            },
            "products": {
                "title": "منتجاتنا المتطورة",
                "description": "اكتشف حلولنا المبتكرة المصممة لتلبية احتياجات الأعمال المتطورة في العصر الرقمي.",
                "items": {
                    "0": {
                        "title": "التحليلات المدعومة بالذكاء الاصطناعي",
                        "description": "استفد من قوة الذكاء الاصطناعي لاستخراج رؤى قيمة من بياناتك."
                    },
                    "1": {
                        "title": "منصة التكامل السحابي",
                        "description": "قم بربط وإدارة عمليات الأعمال الخاصة بك بسلاسة باستخدام حلولنا السحابية الآمنة."
                    },
                    "2": {
                      "title": "الأمن السيبراني المتقدم",
                      "description": "حافظ على أصولك الرقمية باستخدام أنظمة أمان متطورة ومراقبة في الوقت الفعلي."
                  }
                }
            },
            "technologies": {
                "title": "تقنياتنا"
            },
            "portfolio": {
                "title": "محفظتنا"
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
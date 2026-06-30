document.addEventListener('DOMContentLoaded', () => {

    // Preloader
    const preloader = document.getElementById('preloader');
    window.addEventListener('load', () => {
        setTimeout(() => preloader.classList.add('hidden'), 800);
    });
    setTimeout(() => preloader.classList.add('hidden'), 3000);

    // Header scroll effect
    const header = document.getElementById('header');
    const flashBanner = document.getElementById('flashBanner');
    let lastScroll = 0;

    function handleScroll() {
        const scrollY = window.scrollY;

        if (scrollY > 80) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }

        // Update header top position based on flash banner visibility
        if (flashBanner && flashBanner.style.display === 'none') {
            header.style.top = header.classList.contains('scrolled') ? '0' : '0';
        }

        lastScroll = scrollY;
    }

    window.addEventListener('scroll', handleScroll, { passive: true });

    // Hamburger menu
    const hamburger = document.getElementById('hamburger');
    const mobileNav = document.getElementById('mobileNav');

    if (hamburger && mobileNav) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            mobileNav.classList.toggle('open');
            document.body.style.overflow = mobileNav.classList.contains('open') ? 'hidden' : '';
        });

        mobileNav.querySelectorAll('.mobile-nav-link').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                mobileNav.classList.remove('open');
                document.body.style.overflow = '';
            });
        });
    }

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', (e) => {
            const target = document.querySelector(link.getAttribute('href'));
            if (target) {
                e.preventDefault();
                const offset = 80;
                const top = target.getBoundingClientRect().top + window.scrollY - offset;
                window.scrollTo({ top, behavior: 'smooth' });
            }
        });
    });

    // AOS (Animate On Scroll) — custom implementation
    const observerOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const delay = parseInt(entry.target.dataset.aosDelay) || 0;
                setTimeout(() => {
                    entry.target.classList.add('aos-animate');
                }, delay);
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('[data-aos]').forEach(el => observer.observe(el));

    // Counter animation
    function animateCounter(el) {
        const target = parseInt(el.dataset.count);
        const duration = 2000;
        const start = performance.now();

        function update(now) {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = Math.floor(eased * target);

            if (target >= 1000) {
                el.textContent = current.toLocaleString('fr-FR');
            } else {
                el.textContent = current;
            }

            if (progress < 1) {
                requestAnimationFrame(update);
            } else {
                if (target >= 1000) {
                    el.textContent = target.toLocaleString('fr-FR');
                } else {
                    el.textContent = target;
                }
            }
        }

        requestAnimationFrame(update);
    }

    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counters = entry.target.querySelectorAll('[data-count]');
                counters.forEach(counter => animateCounter(counter));
                counterObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });

    const heroStats = document.querySelector('.hero-stats');
    if (heroStats) counterObserver.observe(heroStats);

    const impactGrid = document.querySelector('.impact-grid');
    if (impactGrid) counterObserver.observe(impactGrid);

    // Testimonial Slider
    const track = document.getElementById('testimonialTrack');
    const dotsContainer = document.getElementById('testimonialDots');
    const prevBtn = document.getElementById('prevTestimonial');
    const nextBtn = document.getElementById('nextTestimonial');

    if (track && dotsContainer) {
        const cards = track.querySelectorAll('.testimonial-card');
        let currentSlide = 0;
        const totalSlides = cards.length;

        // Create dots
        for (let i = 0; i < totalSlides; i++) {
            const dot = document.createElement('div');
            dot.classList.add('testimonial-dot');
            if (i === 0) dot.classList.add('active');
            dot.addEventListener('click', () => goToSlide(i));
            dotsContainer.appendChild(dot);
        }

        function goToSlide(index) {
            currentSlide = index;
            track.style.transform = `translateX(-${currentSlide * 100}%)`;
            dotsContainer.querySelectorAll('.testimonial-dot').forEach((dot, i) => {
                dot.classList.toggle('active', i === currentSlide);
            });
        }

        if (prevBtn) {
            prevBtn.addEventListener('click', () => {
                goToSlide(currentSlide === 0 ? totalSlides - 1 : currentSlide - 1);
            });
        }

        if (nextBtn) {
            nextBtn.addEventListener('click', () => {
                goToSlide(currentSlide === totalSlides - 1 ? 0 : currentSlide + 1);
            });
        }

        // Auto-play
        let autoPlay = setInterval(() => {
            goToSlide(currentSlide === totalSlides - 1 ? 0 : currentSlide + 1);
        }, 6000);

        track.closest('.testimonials-slider').addEventListener('mouseenter', () => clearInterval(autoPlay));
        track.closest('.testimonials-slider').addEventListener('mouseleave', () => {
            autoPlay = setInterval(() => {
                goToSlide(currentSlide === totalSlides - 1 ? 0 : currentSlide + 1);
            }, 6000);
        });
    }

    // Back to top
    const backToTop = document.getElementById('backToTop');
    if (backToTop) {
        window.addEventListener('scroll', () => {
            backToTop.classList.toggle('visible', window.scrollY > 500);
        }, { passive: true });

        backToTop.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // Particles effect in hero
    const particlesContainer = document.getElementById('particles');
    if (particlesContainer) {
        for (let i = 0; i < 30; i++) {
            const particle = document.createElement('div');
            particle.style.cssText = `
                position: absolute;
                width: ${Math.random() * 4 + 2}px;
                height: ${Math.random() * 4 + 2}px;
                background: rgba(255,255,255,${Math.random() * 0.15 + 0.05});
                border-radius: 50%;
                top: ${Math.random() * 100}%;
                left: ${Math.random() * 100}%;
                animation: particleFloat ${Math.random() * 10 + 10}s linear infinite;
                animation-delay: ${Math.random() * -20}s;
            `;
            particlesContainer.appendChild(particle);
        }

        const style = document.createElement('style');
        style.textContent = `
            @keyframes particleFloat {
                0% { transform: translateY(0) translateX(0); opacity: 0; }
                10% { opacity: 1; }
                90% { opacity: 1; }
                100% { transform: translateY(-100vh) translateX(${Math.random() * 200 - 100}px); opacity: 0; }
            }
        `;
        document.head.appendChild(style);
    }

    // Active nav link highlighting
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const top = section.offsetTop - 150;
            if (window.scrollY >= top) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    }, { passive: true });

    // Hero Rotating Text
    const words = document.querySelectorAll('.hero-word');
    if (words.length > 0) {
        let currentWord = 0;

        setInterval(() => {
            words[currentWord].classList.remove('active');
            words[currentWord].classList.add('exit-up');

            setTimeout(() => {
                words[currentWord].classList.remove('exit-up');
                currentWord = (currentWord + 1) % words.length;
                words[currentWord].classList.add('active');
            }, 500);
        }, 3000);
    }

    // Donation Form Logic
    const donAmounts = document.querySelectorAll('.don-amount');
    const donFreqs = document.querySelectorAll('.don-freq');
    const customAmountInput = document.getElementById('customAmount');
    const donSubmit = document.querySelector('.don-submit');
    let selectedAmount = 25000;

    donAmounts.forEach(btn => {
        btn.addEventListener('click', () => {
            donAmounts.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            selectedAmount = parseInt(btn.dataset.amount);
            if (customAmountInput) customAmountInput.value = '';
            updateDonButton();
        });
    });

    if (customAmountInput) {
        customAmountInput.addEventListener('input', () => {
            const val = parseInt(customAmountInput.value);
            if (val > 0) {
                donAmounts.forEach(b => b.classList.remove('active'));
                selectedAmount = val;
                updateDonButton();
            }
        });
    }

    donFreqs.forEach(btn => {
        btn.addEventListener('click', () => {
            donFreqs.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            updateDonButton();
        });
    });

    function updateDonButton() {
        if (!donSubmit) return;
        const lang = (window.HOUKAI18N && window.HOUKAI18N.getLang) ? window.HOUKAI18N.getLang() : 'fr';
        const donateWord = (window.HOUKAI18N && window.HOUKAI18N.T && window.HOUKAI18N.T['don_submit']) ? window.HOUKAI18N.T['don_submit'][lang] : 'Donner';
        const freq = document.querySelector('.don-freq.active');
        const freqLabel = freq && freq.dataset.freq === 'monthly' ? (lang === 'en' ? '/month' : '/mois') : '';
        const formatted = selectedAmount.toLocaleString('fr-FR');
        donSubmit.innerHTML = `<i class="fas fa-heart"></i> ${donateWord} ${formatted} FCFA${freqLabel}`;
    }

    // ==============================
    // Système de Grades Donateurs
    // ==============================
    const DONOR_GRADES = [
        { name: 'Bronze',   icon: '🥉', min: 0,        max: 49999,    color: '#CD7F32' },
        { name: 'Argent',   icon: '🥈', min: 50000,    max: 99999,    color: '#C0C0C0' },
        { name: 'Or',       icon: '🥇', min: 100000,   max: 499999,   color: '#FFD700' },
        { name: 'Étoile',   icon: '⭐', min: 500000,   max: 999999,   color: '#FFD700' },
        { name: 'Diamant',  icon: '💠', min: 1000000,  max: 2999999,  color: '#B9F2FF' },
        { name: 'Platine',  icon: '💎', min: 3000000,  max: Infinity, color: '#E5E4E2' }
    ];

    function getDonorGrade(montant) {
        return DONOR_GRADES.find(g => montant >= g.min && montant <= g.max) || DONOR_GRADES[0];
    }

    // ==============================
    // Google Sheets Integration
    // ==============================
    // IMPORTANT: Remplacez cette URL par l'URL de votre Google Apps Script déployé
    const GOOGLE_SHEET_URL = 'https://script.google.com/macros/s/AKfycbzCn6QrBORXWYdHTKbtAXSHK4I5A804-4nvQ-VKYQL-GeKvO_GC2EwUdIWqafpA9fFuFw/exec';

    function sendToGoogleSheets(data, sheetName) {
        data.sheet = sheetName;
        data.date = new Date().toLocaleString('fr-FR', { timeZone: 'Africa/Abidjan' });

        // Si l'URL n'est pas configurée, on simule l'envoi
        if (GOOGLE_SHEET_URL === 'VOTRE_URL_GOOGLE_APPS_SCRIPT_ICI') {
            console.log(`[DEMO] Données ${sheetName}:`, data);
            return Promise.resolve({ result: 'success' });
        }

        return fetch(GOOGLE_SHEET_URL, {
            method: 'POST',
            mode: 'no-cors',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });
    }

    // ==============================
    // Modal helpers
    // ==============================
    function openModal(id) {
        document.getElementById(id).classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeModal(id) {
        document.getElementById(id).classList.remove('active');
        document.body.style.overflow = '';
    }

    // Close modals on overlay click or close button
    document.querySelectorAll('.modal-overlay').forEach(modal => {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) closeModal(modal.id);
        });
    });

    document.querySelectorAll('.modal-close').forEach(btn => {
        btn.addEventListener('click', () => {
            closeModal(btn.closest('.modal-overlay').id);
        });
    });

    // Close modal on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            document.querySelectorAll('.modal-overlay.active').forEach(m => closeModal(m.id));
        }
    });

    // ==============================
    // Donation Form Submit
    // ==============================
    const donForm = document.getElementById('donForm');
    if (donForm) {
        donForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const formData = new FormData(donForm);
            const freq = document.querySelector('.don-freq.active');
            const frequence = freq ? (freq.dataset.freq === 'monthly' ? 'Mensuel' : 'Don unique') : 'Don unique';
            const formatted = selectedAmount.toLocaleString('fr-FR');

            const grade = getDonorGrade(selectedAmount);

            const isAnonyme = document.getElementById('donAnonyme') && document.getElementById('donAnonyme').checked;

            const data = {
                nom: isAnonyme ? 'Donateur Anonyme' : formData.get('nom'),
                email: formData.get('email'),
                telephone: formData.get('telephone') || 'Non renseigné',
                montant: selectedAmount,
                montant_format: formatted + ' FCFA',
                frequence: frequence,
                programme: formData.get('programme'),
                grade: grade.name,
                anonyme: isAnonyme ? 'Oui' : 'Non'
            };

            // Disable button while sending
            const submitBtn = donForm.querySelector('.don-submit');
            const originalText = submitBtn.innerHTML;
            submitBtn.innerHTML = '<i class="fas fa-spinner"></i> Envoi en cours...';
            submitBtn.classList.add('btn-loading');

            function showDonConfirmation() {
                submitBtn.innerHTML = originalText;
                submitBtn.classList.remove('btn-loading');

                // Show confirmation modal with donor info + grade
                const modalInfo = document.getElementById('modalDonorInfo');
                const displayName = isAnonyme ? 'Donateur Anonyme <i class="fas fa-user-secret"></i>' : data.nom;
                modalInfo.innerHTML = `
                    <strong>${displayName}</strong> — Don de <strong>${formatted} FCFA</strong> (${frequence})<br>
                    Programme : ${data.programme}
                    <div class="donor-grade-badge" style="margin-top: 16px; padding: 12px 20px; background: linear-gradient(135deg, ${grade.color}22, ${grade.color}44); border: 2px solid ${grade.color}; border-radius: 12px; display: inline-block;">
                        <span style="font-size: 1.5rem;">${grade.icon}</span>
                        <span style="font-weight: 700; font-size: 1.1rem; margin-left: 8px; color: var(--navy);">Grade ${grade.name}</span>
                    </div>
                `;

                openModal('donConfirmModal');

                // Reset form
                donForm.reset();
                donAmounts.forEach(b => b.classList.remove('active'));
                donAmounts[2].classList.add('active');
                selectedAmount = 25000;
                updateDonButton();
            }

            sendToGoogleSheets(data, 'Dons').then(showDonConfirmation).catch(showDonConfirmation);
        });
    }

    // ==============================
    // Bénévole Buttons → Open Modal
    // ==============================
    document.querySelectorAll('a[href="#benevolat"], #benevolat, a[href="#"]:not([href="#don"])').forEach(link => {
        if (link.textContent.includes('Bénévole') || link.id === 'benevolat') {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                openModal('benevoleModal');
            });
        }
    });

    // ==============================
    // Activité Detail + Inscription
    // ==============================
    document.querySelectorAll('.activite-detail-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const card = btn.closest('.activite-card');
            const content = document.getElementById('activiteDetailContent');
            content.innerHTML = `
                <div style="margin-bottom: 20px;">
                    <span style="display: inline-block; background: linear-gradient(135deg, var(--orange), var(--red)); color: white; padding: 4px 14px; border-radius: 15px; font-size: 0.8rem; font-weight: 600; text-transform: uppercase; letter-spacing: 1px;">${card.dataset.programme}</span>
                </div>
                <h3 style="font-family: var(--font-heading); font-size: 1.5rem; color: var(--navy); margin-bottom: 16px;">${card.dataset.activite}</h3>
                <div style="display: flex; flex-wrap: wrap; gap: 16px; margin-bottom: 20px; font-size: 0.9rem; color: var(--grey);">
                    <span><i class="far fa-calendar" style="color: var(--orange); margin-right: 6px;"></i> ${card.dataset.date}</span>
                    <span><i class="fas fa-map-marker-alt" style="color: var(--orange); margin-right: 6px;"></i> ${card.dataset.lieu}</span>
                    <span><i class="fas fa-users" style="color: var(--orange); margin-right: 6px;"></i> ${card.dataset.places} places</span>
                </div>
                <p style="font-size: 1.05rem; line-height: 1.8; color: #444; margin-bottom: 24px;">${card.dataset.description}</p>
                <button class="btn btn-primary btn-lg activite-detail-participer-btn" style="width: 100%;" data-activite="${card.dataset.activite}">
                    <i class="fas fa-hand-point-up"></i> Je veux participer
                </button>
            `;
            openModal('activiteDetailModal');

            // Attach event to the "Je veux participer" button inside detail modal
            setTimeout(() => {
                const participerBtn = document.querySelector('.activite-detail-participer-btn');
                if (participerBtn) {
                    participerBtn.addEventListener('click', () => {
                        const activiteName = participerBtn.dataset.activite;
                        closeModal('activiteDetailModal');
                        setTimeout(() => {
                            const targetCard = document.querySelector(`.activite-card[data-activite="${activiteName}"]`);
                            if (targetCard) {
                                const inscrireBtn = targetCard.querySelector('.activite-inscrire-btn');
                                if (inscrireBtn) inscrireBtn.click();
                            }
                        }, 300);
                    });
                }
            }, 100);
        });
    });

    document.querySelectorAll('.activite-inscrire-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const card = btn.closest('.activite-card');
            document.getElementById('activiteModalTitle').textContent = `S'inscrire : ${card.dataset.activite}`;
            document.getElementById('activiteModalDesc').innerHTML = `<strong>${card.dataset.date}</strong> — ${card.dataset.lieu} (${card.dataset.places} places)`;
            document.getElementById('activiteFormNom').value = card.dataset.activite;
            openModal('activiteModal');
        });
    });

    // Activité form submit
    const activiteForm = document.getElementById('activiteForm');
    if (activiteForm) {
        activiteForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const formData = new FormData(activiteForm);
            const data = {
                nom: formData.get('nom'),
                email: formData.get('email'),
                telephone: formData.get('telephone'),
                ville: formData.get('ville') || 'Non renseigné',
                activite: formData.get('activite_nom'),
                message: formData.get('message') || '',
                date: new Date().toLocaleDateString('fr-FR')
            };

            const submitBtn = activiteForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerHTML;
            submitBtn.innerHTML = '<i class="fas fa-spinner"></i> Envoi en cours...';
            submitBtn.classList.add('btn-loading');

            // Send to Google Sheets (Activités tab)
            sendToGoogleSheets({
                sheet: 'Activites',
                date: data.date,
                nom: data.nom,
                email: data.email,
                telephone: data.telephone,
                ville: data.ville,
                activite: data.activite,
                message: data.message
            }, 'Activites').then(() => {
                submitBtn.innerHTML = originalText;
                submitBtn.classList.remove('btn-loading');
                closeModal('activiteModal');
                document.getElementById('activiteParticipantName').textContent = data.nom;
                document.getElementById('activiteConfirmName').textContent = data.activite;
                openModal('activiteConfirmModal');
                activiteForm.reset();
            }).catch(() => {
                submitBtn.innerHTML = originalText;
                submitBtn.classList.remove('btn-loading');
                closeModal('activiteModal');
                document.getElementById('activiteParticipantName').textContent = data.nom;
                document.getElementById('activiteConfirmName').textContent = data.activite;
                openModal('activiteConfirmModal');
                activiteForm.reset();
            });
        });
    }

    // Close activity modals
    ['closeActiviteModal', 'closeActiviteDetailModal', 'closeActiviteConfirmModal'].forEach(id => {
        const btn = document.getElementById(id);
        if (btn) {
            btn.addEventListener('click', () => {
                closeModal(btn.closest('.modal-overlay').id);
            });
        }
    });

    // Also handle the "Nous Rejoindre" button
    document.querySelectorAll('a').forEach(link => {
        if (link.textContent.includes('Nous Rejoindre')) {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                openModal('benevoleModal');
            });
        }
    });

    // ==============================
    // Bénévole Form Submit
    // ==============================
    const benevoleForm = document.getElementById('benevoleForm');
    if (benevoleForm) {
        benevoleForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const formData = new FormData(benevoleForm);
            const data = {
                nom: formData.get('nom'),
                email: formData.get('email'),
                telephone: formData.get('telephone'),
                ville: formData.get('ville') || 'Non renseigné',
                programme_interet: formData.get('programme_interet') || 'Non précisé',
                motivation: formData.get('motivation') || 'Non renseigné'
            };

            const submitBtn = benevoleForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerHTML;
            submitBtn.innerHTML = '<i class="fas fa-spinner"></i> Envoi en cours...';
            submitBtn.classList.add('btn-loading');

            sendToGoogleSheets(data, 'Benevoles').then(() => {
                submitBtn.innerHTML = originalText;
                submitBtn.classList.remove('btn-loading');

                closeModal('benevoleModal');

                // Show confirmation
                document.getElementById('benevoleName').textContent = data.nom;
                openModal('benevoleConfirmModal');

                benevoleForm.reset();
            }).catch(() => {
                submitBtn.innerHTML = originalText;
                submitBtn.classList.remove('btn-loading');
                closeModal('benevoleModal');
                document.getElementById('benevoleName').textContent = data.nom;
                openModal('benevoleConfirmModal');
                benevoleForm.reset();
            });
        });
    }
});

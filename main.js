// ========================================
// APRICUS — Shared JavaScript
// ========================================

document.addEventListener('DOMContentLoaded', () => {

  // Mobile menu toggle
  const mobileToggle = document.querySelector('.mobile-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (mobileToggle) {
    mobileToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });
  }

  // Nav background on scroll
  const nav = document.querySelector('.nav');
  if (nav) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        nav.style.background = 'rgba(250, 246, 239, 0.95)';
        nav.style.boxShadow = '0 1px 20px rgba(0,0,0,0.04)';
      } else {
        nav.style.background = 'rgba(250, 246, 239, 0.85)';
        nav.style.boxShadow = 'none';
      }
    });
  }

  // Intersection observer for fade-up animations on scroll
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.animationPlayState = 'running';
        entry.target.classList.add('visible');
      }
    });
  }, observerOptions);

  document.querySelectorAll('.observe').forEach(el => {
    observer.observe(el);
  });

  // FAQ accordion
  document.querySelectorAll('.faq-item').forEach(item => {
    const question = item.querySelector('.faq-question');
    if (question) {
      question.addEventListener('click', () => {
        const isOpen = item.classList.contains('open');
        document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
        if (!isOpen) item.classList.add('open');
      });
    }
  });

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href === '#') return;
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // Testimonial slider
  const slides = document.querySelectorAll('.testimonial-slide');
  const dots = document.querySelectorAll('.testimonial-dot');
  let currentSlide = 0;

  function showSlide(index) {
    slides.forEach((s, i) => s.classList.toggle('active', i === index));
    dots.forEach((d, i) => d.classList.toggle('active', i === index));
    currentSlide = index;
  }

  dots.forEach((dot, i) => {
    dot.addEventListener('click', () => showSlide(i));
  });

  if (slides.length > 0) {
    setInterval(() => {
      showSlide((currentSlide + 1) % slides.length);
    }, 6000);
  }

  // Contact form submission
  const contactForm = document.querySelector('.contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const button = contactForm.querySelector('button[type="submit"]');
      const originalText = button.textContent;
      button.textContent = 'Sending...';
      button.disabled = true;

      setTimeout(() => {
        button.textContent = '✓ Message Sent';
        button.style.background = '#5a8a3a';
        contactForm.reset();
        setTimeout(() => {
          button.textContent = originalText;
          button.disabled = false;
          button.style.background = '';
        }, 3000);
      }, 1000);
    });
  }
});

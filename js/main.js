// ==========================================
// APRICUS v2 — Shared JavaScript
// ==========================================

document.addEventListener('DOMContentLoaded', () => {

  // ── Mobile menu ──────────────────────────
  const mobileToggle = document.querySelector('.mobile-toggle');
  const navLinks = document.querySelector('.nav-links');
  if (mobileToggle) {
    mobileToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });
  }

  // ── Scroll fade-in observer ──────────────
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

  document.querySelectorAll('.observe').forEach(el => observer.observe(el));

  // ── Stat counters ────────────────────────
  const counters = document.querySelectorAll('[data-counter]');
  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseInt(el.dataset.counter, 10);
        const duration = 1500;
        const start = performance.now();

        function tick(now) {
          const progress = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          el.textContent = Math.floor(eased * target);
          if (progress < 1) requestAnimationFrame(tick);
          else el.textContent = target;
        }
        requestAnimationFrame(tick);
        counterObserver.unobserve(el);
      }
    });
  }, { threshold: 0.4 });

  counters.forEach(el => counterObserver.observe(el));

  // ── FAQ accordion ────────────────────────
  document.querySelectorAll('.faq-item').forEach(item => {
    const q = item.querySelector('.faq-question');
    if (!q) return;
    q.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
      if (!isOpen) item.classList.add('open');
    });
  });

  // ── Smooth scroll for anchors ────────────
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const href = a.getAttribute('href');
      if (href === '#') return;
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        const top = target.getBoundingClientRect().top + window.pageYOffset - 80;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });

  // ── Testimonial slider ───────────────────
  const slides = document.querySelectorAll('.testimonial-slide');
  const dots = document.querySelectorAll('.testimonial-dot');
  let current = 0;

  function showSlide(i) {
    slides.forEach((s, idx) => s.classList.toggle('active', idx === i));
    dots.forEach((d, idx) => d.classList.toggle('active', idx === i));
    current = i;
  }

  dots.forEach((d, i) => d.addEventListener('click', () => showSlide(i)));

  if (slides.length > 0) {
    setInterval(() => showSlide((current + 1) % slides.length), 7000);
  }

  // ── Programs page tabs ───────────────────
  const programTabs = document.querySelectorAll('.program-tab');
  const programSections = document.querySelectorAll('.program-block');
  if (programTabs.length && programSections.length) {
    window.addEventListener('scroll', () => {
      let curr = '';
      programSections.forEach(s => {
        if (window.pageYOffset >= s.offsetTop - 200) curr = s.id;
      });
      programTabs.forEach(t => {
        t.classList.toggle('active', t.getAttribute('href') === '#' + curr);
      });
    });
  }

  // ── FAQ category nav (FAQ page) ──────────
  const catLinks = document.querySelectorAll('.faq-cat-link');
  const categories = document.querySelectorAll('.faq-category');
  if (catLinks.length && categories.length) {
    window.addEventListener('scroll', () => {
      let curr = '';
      categories.forEach(c => {
        if (window.pageYOffset >= c.offsetTop - 200) curr = c.id;
      });
      catLinks.forEach(l => {
        l.classList.toggle('active', l.getAttribute('href') === '#' + curr);
      });
    });
  }

  // ── Contact form ─────────────────────────
  const contactForm = document.querySelector('.contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', e => {
      e.preventDefault();
      const btn = contactForm.querySelector('button[type="submit"]');
      const original = btn.textContent;
      btn.textContent = 'Sending...';
      btn.disabled = true;
      setTimeout(() => {
        btn.textContent = '✓ Message sent';
        btn.style.background = '#16a34a';
        btn.style.borderColor = '#16a34a';
        contactForm.reset();
        setTimeout(() => {
          btn.textContent = original;
          btn.disabled = false;
          btn.style.background = '';
          btn.style.borderColor = '';
        }, 3500);
      }, 800);
    });
  }
});

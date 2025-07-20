// main.js — AdVentus Group Website

document.addEventListener("DOMContentLoaded", () => {
  // --- Scroll Animations (AOS) ---
  if (window.AOS) {
    AOS.init({
      duration: 700,
      once: true,
      offset: 60,
      easing: 'ease-out-cubic',
      mirror: false,
      disable: window.innerWidth < 600
    });
  }

  // Mobile nav toggle
  const navToggle = document.getElementById("navToggle");
  const navMenu = document.getElementById("navMenu");
  if (navToggle && navMenu) {
    navToggle.addEventListener("click", () => {
      navMenu.classList.toggle("open");
    });
  }

  // --- Click Tracking for UX/SEO Insight ---
  function logClick(element, label) {
    const time = new Date().toISOString();
    console.log(`[ClickTrack] ${label} | Time: ${time}`);
  }

  // Track .cta-btn clicks
  document.querySelectorAll('.cta-btn').forEach(btn => {
    btn.addEventListener('click', () => logClick(btn, '.cta-btn'));
  });

  // Track navigation link clicks (footer and nav)
  document.querySelectorAll('nav a, .footer-links a').forEach(link => {
    link.addEventListener('click', () =>
      logClick(link, `NavLink: ${link.textContent.trim()}`)
    );
  });

  // Track contact form submit button
  const contactForm = document.querySelector('.contact-form form');
  if (contactForm) {
    const submitBtn = contactForm.querySelector('button[type="submit"], input[type="submit"]');
    if (submitBtn) {
      submitBtn.addEventListener('click', () => logClick(submitBtn, 'Contact Form Submit'));
    }
  }

  // Placeholder for future enhancements
  console.log("AdVentus Group JS loaded.");
});

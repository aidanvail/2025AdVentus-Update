// main.js — AdVentus Group Website

document.addEventListener("DOMContentLoaded", () => {
  // --- Scroll Animations (AOS) ---
  if (window.AOS) {
    AOS.init({
      duration: 700, // Animation duration in ms
      once: true,    // Only animate once per element
      offset: 60,    // Offset (px) from the original trigger point
      easing: 'ease-out-cubic',
      mirror: false, // Don't animate out while scrolling past
      disable: window.innerWidth < 600 // Disable on very small screens for performance
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

  // --- Scroll Animations (AOS) ---
  if (window.AOS) {
    AOS.init({
      duration: 700, // Animation duration in ms
      once: true,    // Only animate once per element
      offset: 60,    // Offset (px) from the original trigger point
      easing: 'ease-out-cubic',
      mirror: false, // Don't animate out while scrolling past
      disable: window.innerWidth < 600 // Disable on very small screens for performance
    });
  }

  // --- Click Tracking for UX/SEO Insight ---
  function logClick(element, label) {
    const time = new Date().toISOString();
    console.log(`[ClickTrack] ${label} | Time: ${time}`);
  }

  // Track .cta-btn clicks
  document.querySelectorAll('.cta-btn').forEach(btn => {
    btn.addEventListener('click', function () {
      logClick(this, '.cta-btn');
    });
  });

  // Track navigation link clicks (footer and nav)
  document.querySelectorAll('nav a, .footer-links a').forEach(link => {
    link.addEventListener('click', function () {
      logClick(this, `NavLink: ${this.textContent.trim()}`);
    });
  });

  // Track contact form submit button
  const contactForm = document.querySelector('.contact-form form');
  if (contactForm) {
    const submitBtn = contactForm.querySelector('button[type="submit"], input[type="submit"]');
    if (submitBtn) {
      submitBtn.addEventListener('click', function () {
        logClick(this, 'Contact Form Submit');
      });
    }
  }

  // Placeholder for future enhancements
  console.log("AdVentus Group JS loaded.");
});
  
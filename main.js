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

  // --- Dynamic Table of Contents ---
  const tocLayouts = document.querySelectorAll('.toc-layout');
  tocLayouts.forEach(layout => {
    const content = layout.querySelector('.toc-content');
    const list = layout.querySelector('.toc-list');
    const sidebar = layout.querySelector('.toc-sidebar');
    if (!content || !list || !sidebar) {
      return;
    }

    const headings = content.querySelectorAll('h2, h3');
    if (!headings.length) {
      sidebar.setAttribute('hidden', '');
      return;
    }

    const toggleButton = sidebar.querySelector('.toc-toggle');
    if (toggleButton) {
      sidebar.setAttribute('data-expanded', 'false');
      toggleButton.addEventListener('click', () => {
        const expanded = sidebar.getAttribute('data-expanded') === 'true';
        const nextState = (!expanded).toString();
        sidebar.setAttribute('data-expanded', nextState);
        toggleButton.setAttribute('aria-expanded', nextState);
      });
    }

    const tocEntries = [];
    const slugCounts = new Map();

    headings.forEach((heading, index) => {
      const level = heading.tagName.toLowerCase();
      const text = heading.textContent.trim();
      let slug =
        heading.id ||
        text
          .toLowerCase()
          .replace(/[^a-z0-9\s-]/g, '')
          .replace(/\s+/g, '-')
          .replace(/-+/g, '-')
          .replace(/^-|-$/g, '');
      if (!slug) {
        slug = `section-${index + 1}`;
      }

      const occurrence = slugCounts.get(slug) || 0;
      slugCounts.set(slug, occurrence + 1);
      if (occurrence > 0) {
        slug = `${slug}-${occurrence}`;
      }

      if (!heading.id) {
        heading.id = slug;
      }

      const listItem = document.createElement('li');
      listItem.classList.add(`toc-level-${level}`);

      const link = document.createElement('a');
      link.className = 'toc-link';
      link.href = `#${heading.id}`;
      link.textContent = text;

      listItem.appendChild(link);
      list.appendChild(listItem);

      tocEntries.push({ heading, link });
    });

    if (!tocEntries.length) {
      sidebar.setAttribute('hidden', '');
      return;
    }

    tocEntries[0].link.classList.add('active');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          tocEntries.forEach(item => {
            item.link.classList.toggle('active', item.heading === entry.target);
          });
        }
      });
    }, {
      rootMargin: '-45% 0px -45% 0px',
      threshold: 0
    });

    headings.forEach(heading => observer.observe(heading));
  });

  // Placeholder for future enhancements
  console.log("AdVentus Group JS loaded.");
});
  
document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.getElementById('hamburger');
  const navLinks  = document.getElementById('navLinks');

  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('open');
    });

    // Close mobile menu when a link is clicked
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
      });
    });
  }

  // ===== CONTACT FORM (opens email client) =====
  const sendBtn = document.getElementById('cf-send');
  if (sendBtn) {
    sendBtn.addEventListener('click', () => {
      const name  = document.getElementById('cf-name').value.trim();
      const email = document.getElementById('cf-email').value.trim();
      const msg   = document.getElementById('cf-msg').value.trim();

      const subject = encodeURIComponent(`Portfolio contact from ${name || 'visitor'}`);
      const body    = encodeURIComponent(
        `Name: ${name}\nEmail: ${email}\n\nMessage:\n${msg}`
      );

      window.location.href = `mailto:sharonxal02@gmail.com?subject=${subject}&body=${body}`;
    });
  }

  // ===== ACTIVE NAV LINK ON SCROLL =====
  const sections = document.querySelectorAll('section[id]');
  const navAnchors = document.querySelectorAll('.nav-links a');

  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(sec => {
      const top = sec.offsetTop - 100;
      if (window.scrollY >= top) current = sec.getAttribute('id');
    });
    navAnchors.forEach(a => {
      a.style.color = a.getAttribute('href') === `#${current}`
        ? 'var(--accent)'
        : 'var(--muted)';
    });
  });
});
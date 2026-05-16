
document.addEventListener('DOMContentLoaded', () => {

  // ===== MOBILE NAV TOGGLE =====
  const hamburger = document.getElementById('hamburger');
  const navLinks  = document.getElementById('navLinks');

  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('open');
    });
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => navLinks.classList.remove('open'));
    });
  }

  // ===== HERO PARTICLES =====
  const particles = document.getElementById('particles');
  if (particles) {
    const colors = ['#4f8ef7', '#a855f7', '#ec4899', '#ffffff'];
    for (let i = 0; i < 25; i++) {
      const p = document.createElement('div');
      p.className = 'particle';
      const size = Math.random() * 3 + 1;
      p.style.width = size + 'px';
      p.style.height = size + 'px';
      p.style.left = Math.random() * 100 + '%';
      p.style.background = colors[Math.floor(Math.random() * colors.length)];
      p.style.boxShadow = `0 0 6px ${p.style.background}`;
      p.style.animationDuration = (Math.random() * 8 + 8) + 's';
      p.style.animationDelay = (Math.random() * 10) + 's';
      particles.appendChild(p);
    }
  }

  // ===== ABOUT READ MORE =====
  const aboutBtn = document.getElementById('aboutReadMore');
  const aboutMore = document.getElementById('aboutMore');
  if (aboutBtn && aboutMore) {
    aboutBtn.addEventListener('click', () => {
      const expanded = aboutMore.classList.toggle('expanded');
      aboutBtn.classList.toggle('active');
      aboutBtn.querySelector('.rm-text').textContent = expanded ? 'Read less' : 'Read more';
    });
  }

  // ===== RESEARCH CARD MODAL POPUP =====
  const modal = document.getElementById('researchModal');
  const modalBody = document.getElementById('modalBody');
  const modalClose = document.getElementById('modalClose');

  function openModal(card) {
    // Extract data from the clicked card
    const icon = card.querySelector('.res-icon').innerHTML;
    const title = card.querySelector('.res-title').textContent;
    const badge = card.querySelector('.res-badge').textContent;
    const extraHTML = card.querySelector('.res-extra').innerHTML;
    const desc = card.querySelector('.res-desc').textContent;

    modalBody.innerHTML = `
      <div class="modal-icon">${icon}</div>
      <div class="modal-title">${title}</div>
      <div class="modal-badge">${badge}</div>
      <p>${desc}</p>
      <div class="modal-divider"></div>
      ${extraHTML}
    `;

    modal.classList.add('active');
    document.body.classList.add('modal-open');
  }

  function closeModal() {
    modal.classList.remove('active');
    document.body.classList.remove('modal-open');
  }

  document.querySelectorAll('.res-readmore').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const card = btn.closest('.res-card');
      openModal(card);
    });
  });

  if (modalClose) modalClose.addEventListener('click', closeModal);

  // Close when clicking outside modal content
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeModal();
    });
  }

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) closeModal();
  });

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

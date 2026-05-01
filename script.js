// ── Navbar scroll ──────────────────────────────────────────────
window.addEventListener('scroll', () => {
  document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 40);
});

// ── Particles ──────────────────────────────────────────────────
(function createParticles() {
  const container = document.getElementById('particles');
  if (!container) return;
  const colors = ['#6C63FF', '#00D4FF', '#00FFB2'];
  for (let i = 0; i < 30; i++) {
    const p = document.createElement('div');
    p.className = 'particle';
    p.style.cssText = `
      left:${Math.random() * 100}%;
      animation-duration:${6 + Math.random() * 10}s;
      animation-delay:${Math.random() * 8}s;
      background:${colors[Math.floor(Math.random() * colors.length)]};
      width:${1 + Math.random() * 3}px;
      height:${1 + Math.random() * 3}px;
    `;
    container.appendChild(p);
  }
})();

// ── Scroll fade-up ─────────────────────────────────────────────
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.1 });
document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

// ── Counter animation ──────────────────────────────────────────
function animateCounter(el) {
  const target = parseInt(el.dataset.target, 10);
  const prefix = el.dataset.prefix || '';
  const suffix = el.dataset.suffix || '';
  const duration = 2000;
  const step = target / (duration / 16);
  let current = 0;
  const timer = setInterval(() => {
    current = Math.min(current + step, target);
    el.textContent = prefix + Math.floor(current).toLocaleString('pt-BR') + suffix;
    if (current >= target) clearInterval(timer);
  }, 16);
}

const statsObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      animateCounter(e.target);
      statsObserver.unobserve(e.target);
    }
  });
}, { threshold: 0.5 });
document.querySelectorAll('.stat-number[data-target]').forEach(el => statsObserver.observe(el));

// ── Chat animation ─────────────────────────────────────────────
function runChatSequence() {
  const steps = [
    { delay: 800,  show: 'typing1' },
    { delay: 2000, hide: 'typing1', show: 'resp1' },
    { delay: 1000, show: 'msg2' },
    { delay: 800,  show: 'resp2' },
    { delay: 1000, show: 'msg3' },
    { delay: 800,  show: 'resp3' },
  ];
  let total = 0;
  steps.forEach(s => {
    total += s.delay;
    setTimeout(() => {
      if (s.hide) document.getElementById(s.hide)?.classList.add('hidden');
      if (s.show) document.getElementById(s.show)?.classList.remove('hidden');
    }, total);
  });
  // Loop
  setTimeout(() => {
    ['typing1','resp1','msg2','resp2','msg3','resp3'].forEach(id => {
      const el = document.getElementById(id);
      if (el) {
        el.classList.add('hidden');
        if (id === 'typing1') el.classList.remove('hidden');
      }
    });
    setTimeout(runChatSequence, 600);
  }, total + 3000);
}
window.addEventListener('load', () => setTimeout(runChatSequence, 1200));

// ── Urgency counter subtle pulse ───────────────────────────────
const vagasEl = document.getElementById('vagas');
if (vagasEl) {
  let v = 7;
  setInterval(() => {
    vagasEl.style.transform = 'scale(1.08)';
    setTimeout(() => { vagasEl.style.transform = 'scale(1)'; vagasEl.style.transition = 'transform .3s'; }, 300);
  }, 4000);
}

// ── Smooth anchor scroll for nav links ─────────────────────────
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) { e.preventDefault(); target.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
  });
});

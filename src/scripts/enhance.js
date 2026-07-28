/**
 * Progressive enhancements: count-up, stagger reveals, path-rail focus,
 * soft pointer spotlight. Page is complete without this; motion only.
 * Animate transform / opacity only. Respects prefers-reduced-motion.
 */
const motionOk = window.matchMedia('(prefers-reduced-motion: no-preference)').matches;

function countUp(el) {
  const target = Number(el.dataset.countup);
  const suffix = el.dataset.suffix ?? '';
  const format = (n) => n.toLocaleString('en-US') + suffix;
  if (!Number.isFinite(target)) return;
  const duration = 900;
  const start = performance.now();
  const tick = (now) => {
    const t = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - t, 4);
    el.textContent = format(Math.round(target * eased));
    if (t < 1) requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
}

function setupCountUp() {
  if (!motionOk) return;
  const seen = new WeakSet();
  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting || seen.has(entry.target)) continue;
        seen.add(entry.target);
        observer.unobserve(entry.target);
        countUp(entry.target);
      }
    },
    { threshold: 0.6 }
  );
  document.querySelectorAll('[data-countup]').forEach((el) => observer.observe(el));
}

function setupStagger() {
  document.querySelectorAll('[data-stagger]').forEach((root) => {
    root.classList.add('stagger-ready');
    root.querySelectorAll('[data-stagger-item]').forEach((item, i) => {
      item.style.setProperty('--stagger-i', String(i));
    });
    if (!motionOk) {
      root.classList.add('is-in');
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          root.classList.add('is-in');
          io.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    io.observe(root);
  });
}

function setupPathRail() {
  const rail = document.querySelector('[data-path-rail]');
  if (!rail || !motionOk) return;
  const steps = [...rail.querySelectorAll('[data-path-step]')];
  if (!steps.length) return;

  const io = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        const el = entry.target;
        el.classList.add('is-active');
        window.setTimeout(() => el.classList.remove('is-active'), 1200);
      }
    },
    { threshold: 0.55 }
  );
  steps.forEach((step) => io.observe(step));
}

function setupSpotlight() {
  if (!motionOk || window.matchMedia('(pointer: coarse)').matches) return;
  document.querySelectorAll('[data-spotlight]').forEach((host) => {
    host.classList.add('spotlight-host');
    host.addEventListener('pointermove', (e) => {
      const rect = host.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      host.style.setProperty('--spot-x', `${x}%`);
      host.style.setProperty('--spot-y', `${y}%`);
    });
  });
}

setupCountUp();
setupStagger();
setupPathRail();
setupSpotlight();

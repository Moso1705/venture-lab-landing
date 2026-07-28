/**
 * Progressive enhancements shared across the site: count-up numbers and
 * numbers, one-shot on first intersection. The page is
 * complete without this file; everything here only adds motion.
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

if (motionOk) {
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

/**
 * Progressive enhancements shared across the site: count-up numbers and
 * text-scramble labels, both one-shot on first intersection. The page is
 * complete without this file; everything here only adds motion.
 */
const motionOk = window.matchMedia('(prefers-reduced-motion: no-preference)').matches;

const GLYPHS = '!<>-_\\/[]{}=+*^?#';

function scramble(el) {
  const original = el.textContent;
  const frames = 24;
  let frame = 0;
  const tick = () => {
    frame += 1;
    const progress = frame / frames;
    el.textContent = [...original]
      .map((ch, i) => {
        if (ch === ' ' || i / original.length < progress) return ch;
        return GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
      })
      .join('');
    if (frame < frames) requestAnimationFrame(tick);
    else el.textContent = original;
  };
  requestAnimationFrame(tick);
}

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
        if (entry.target.dataset.countup !== undefined) countUp(entry.target);
        else scramble(entry.target);
      }
    },
    { threshold: 0.6 }
  );
  document.querySelectorAll('[data-countup], [data-scramble]').forEach((el) => observer.observe(el));
}

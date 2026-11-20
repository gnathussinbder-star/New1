/* Accessibility helpers for text scaling; saved only on this device. */
(() => {
  const key = 'hbe-font-scale';
  let scale = 100;
  try { scale = Number(localStorage.getItem(key)) || 100; } catch (_) {}
  const apply = () => { document.documentElement.style.setProperty('--hbe-font-scale', `${scale}%`); document.documentElement.style.fontSize = `calc(16px * ${scale / 100})`; };
  const save = () => { apply(); try { localStorage.setItem(key, String(scale)); } catch (_) {} };
  document.addEventListener('click', event => {
    const button = event.target.closest('[data-font-increase],[data-font-decrease],[data-font-reset]');
    if (!button) return;
    if (button.hasAttribute('data-font-increase')) scale = Math.min(125, scale + 5);
    else if (button.hasAttribute('data-font-decrease')) scale = Math.max(90, scale - 5);
    else scale = 100;
    save();
  });
  apply();
})();

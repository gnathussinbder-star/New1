(() => {
  if (!('serviceWorker' in navigator) || !/^https?:$/.test(location.protocol)) return;
  const script = document.currentScript;
  const root = new URL('../../', script.src);
  window.addEventListener('load', () => navigator.serviceWorker.register(new URL('sw.js', root).href, {scope: root.pathname}).catch(() => {}), {once:true});
})();

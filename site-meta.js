/* Portable metadata: adjusts canonical and social URLs to the actual Pages URL. */
(() => {
  try {
    const current = new URL(location.href);
    current.hash = '';
    const script = document.currentScript;
    const root = new URL('../../', script.src);
    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) canonical.href = current.href;
    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) ogUrl.content = current.href;
    const ogImage = document.querySelector('meta[property="og:image"]');
    if (ogImage) ogImage.content = new URL('assets/img/og-image.jpg', root).href;
    const twitterImage = document.querySelector('meta[name="twitter:image"]');
    if (twitterImage) twitterImage.content = new URL('assets/img/og-image.jpg', root).href;
    document.querySelectorAll('script[type="application/ld+json"]').forEach(node => {
      try {
        const data = JSON.parse(node.textContent);
        if (data && data['@type'] === 'EducationalOrganization') {
          data.url = root.href;
          data.logo = new URL('assets/img/hbe-logo-512.png', root).href;
          node.textContent = JSON.stringify(data);
        }
      } catch (_) {}
    });
  } catch (_) { /* Static HTML remains functional if metadata enhancement is unavailable. */ }
})();

// /scripts/include-work-head.js
(() => {
  const head = document.head;

  // Prevent double-inject
  if (document.querySelector('link[data-plyr]')) return;

  const addLink = (href) => {
    const l = document.createElement('link');
    l.rel = 'stylesheet';
    l.href = href;
    l.setAttribute('data-plyr', '1');
    head.appendChild(l);
  };

  const addScript = (src, onload) => {
    const s = document.createElement('script');
    s.src = src;
    s.defer = true;
    s.onload = onload;
    s.onerror = (e) => console.error('Plyr load error:', e);
    head.appendChild(s);
  };

  // 1) Plyr CSS
  addLink('https://cdn.jsdelivr.net/npm/plyr@3.7.8/dist/plyr.css');

  // 2) Plyr JS, then init every <video>
  addScript('https://cdn.jsdelivr.net/npm/plyr@3.7.8/dist/plyr.polyfilled.min.js', () => {
    try {
      Plyr.setup('video');
    } catch (e) {
      console.error('Plyr init error:', e);
    }
  });
})();

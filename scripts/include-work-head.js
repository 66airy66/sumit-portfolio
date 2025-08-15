// /scripts/include-work-head.js
(function () {
  // 1) Load Plyr CSS
  if (!document.querySelector('link[href*="plyr.css"]')) {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://cdn.jsdelivr.net/npm/plyr@3.7.8/dist/plyr.css';
    document.head.appendChild(link);
  }

  // 2) Load Plyr JS, then init
  function loadScript(src, onload) {
    const s = document.createElement('script');
    s.src = src;
    s.defer = true;
    s.onload = onload;
    document.head.appendChild(s);
  }

  function initPlayers() {
    if (!window.Plyr) return;
    // Attach to all project videos
    const options = {
      controls: [
        'play','progress','current-time','mute','volume',
        'settings','pip','airplay','fullscreen'
      ],
      tooltips: { controls: true, seek: true },
      keyboard: { global: true },
      clickToPlay: true
    };
    Plyr.setup('.project-video', options);
  }

  if (window.Plyr) {
    // Plyr already present
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', initPlayers);
    } else {
      initPlayers();
    }
  } else {
    // Load Plyr, then init (handles DOM already loaded or not)
    loadScript('https://cdn.jsdelivr.net/npm/plyr@3.7.8/dist/plyr.polyfilled.min.js', () => {
      if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initPlayers);
      } else {
        initPlayers();
      }
    });
  }
})();

// scripts/include-header.js
(() => {
  // If this is a GitHub *project* page (username.github.io/<REPO>/),
  // set this to your repository name. Works on custom domains too.
  const REPO = "sumit-portfolio";

  // Files live under /<REPO>/ on *.github.io project sites; under / on custom domains.
  const base = location.hostname.endsWith("github.io") ? `/${REPO}/` : "/";

  const mount = document.getElementById("site-header");
  if (!mount) return;

  fetch(`${base}header.html`, { cache: "no-cache" })
    .then((r) => {
      if (!r.ok) throw new Error(`HTTP ${r.status}`);
      return r.text();
    })
    .then((html) => {
      mount.innerHTML = html;

      // ✅ Auto-highlight current nav link
      const filename = location.pathname.split("/").pop() || "index.html";
      mount.querySelectorAll(".nav a").forEach((a) => {
        if (a.getAttribute("href") === filename) a.classList.add("active");
      });

      // ✅ Ensure Font Awesome is loaded on *every* page (icons in footer/header)
      if (!document.querySelector('link[href*="font-awesome"]')) {
        const fa = document.createElement("link");
        fa.rel = "stylesheet";
        fa.href =
          "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css";
        document.head.appendChild(fa);
      }
    })
    .catch((err) => console.error("Header include failed:", err));
})();

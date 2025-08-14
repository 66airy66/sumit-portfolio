// scripts/include-footer.js
(() => {
  const REPO = "sumit-portfolio";
  const base = location.hostname.endsWith("github.io") ? `/${REPO}/` : "/";

  const mount = document.getElementById("site-footer");
  if (!mount) return;

  fetch(`${base}footer.html`, { cache: "no-cache" })
    .then(r => {
      if (!r.ok) throw new Error(`HTTP ${r.status}`);
      return r.text();
    })
    .then(html => {
      mount.innerHTML = html;
    })
    .catch(err => console.error("Footer include failed:", err));
})();

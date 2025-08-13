// scripts/include-header.js
(() => {
  // If this repo is published as a GitHub *project* page (username.github.io/<REPO>/),
  // set REPO to your repository name. If you later use a custom domain, this still works.
  const REPO = "sumit-portfolio";

  // When hosted on *.github.io project pages, files live under /<REPO>/.
  // On a custom domain (or user/organization root), they live under /.
  const base = location.hostname.endsWith("github.io") ? `/${REPO}/` : "/";

  // Find the placeholder div
  const mount = document.getElementById("site-header");
  if (!mount) return;

  // Load header.html and inject it
  fetch(`${base}header.html`, { cache: "no-cache" })
    .then((r) => {
      if (!r.ok) throw new Error(`HTTP ${r.status}`);
      return r.text();
    })
    .then((html) => {
      mount.innerHTML = html;

      // OPTIONAL: highlight the current nav link
      const filename = location.pathname.split("/").pop() || "index.html";
      mount.querySelectorAll(".nav a").forEach((a) => {
        if (a.getAttribute("href") === filename) {
          a.classList.add("active"); // you already have .nav .active{ opacity:.6 } in CSS
        }
      });
    })
    .catch((err) => console.error("Header include failed:", err));
})();

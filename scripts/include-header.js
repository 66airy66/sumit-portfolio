<!-- scripts/include-header.js -->
<script>
// --- CONFIG: set this to your repo name (for project pages on github.io) ---
const REPO = "sumit-portfolio"; // <- change if you rename the repo

// If it's a github.io project site, the root path includes /REPO/.
// If it's a custom domain or a user site root, it's just "/".
const base = location.hostname.endsWith("github.io") ? `/${REPO}/` : "/";

// Fetch and inject the header.html into the placeholder:
fetch(`${base}header.html`)
  .then(r => r.text())
  .then(html => {
    const mount = document.getElementById("site-header");
    if (mount) mount.innerHTML = html;
  })
  .catch(err => console.error("Header include failed:", err));
</script>

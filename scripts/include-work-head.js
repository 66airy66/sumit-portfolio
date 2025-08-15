// /scripts/include-work-head.js
document.addEventListener("DOMContentLoaded", function () {
  fetch("../includes/work-head.html")
    .then(response => response.text())
    .then(data => {
      document.head.insertAdjacentHTML("afterbegin", data);
    })
    .catch(error => console.error("Error loading work head:", error));
});

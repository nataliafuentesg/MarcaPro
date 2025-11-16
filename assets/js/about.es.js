(function () {
  "use strict";
  const resolveAsset = window.__resolveAsset || ((p) => p);

  // Tech stack (ES)
  const STACK = [
    { icon: "bi bi-code-slash",  label: "Vue 3" },
    { icon: "bi bi-hdd-network", label: "Spring Boot" },
    { icon: "bi bi-database",    label: "PostgreSQL" },
    { icon: "bi bi-lock",        label: "JWT/Auth" },
    { icon: "bi bi-credit-card", label: "Stripe" },
    { icon: "bi bi-graph-up-arrow", label: "GA4/Tags" },
    { icon: "bi bi-cloud-upload",   label: "Netlify" },
    { icon: "bi bi-cpu",            label: "Railway" }
  ];

  function renderStack() {
    const grid = document.getElementById("stackGrid");
    if (!grid) return;
    grid.innerHTML = "";
    const frag = document.createDocumentFragment();
    STACK.forEach((item) => {
      const col = document.createElement("div");
      col.className = "col-6 col-md-3";
      col.innerHTML = `
        <div class="features-item">
          <i class="${item.icon}"></i>
          <h3>${item.label}</h3>
        </div>`;
      frag.appendChild(col);
    });
    grid.appendChild(frag);
  }

  window.addEventListener("load", renderStack);
})();

// Minimal page-specific behavior shared by EN/ES services pages
(function(){
  function init() {
    // Init AOS if present
    if (window.AOS) AOS.init({ once: true, duration: 600, easing: "ease-out" });

    // Optional: ensure current nav item has .active if markup missed it
    try {
      const path = location.pathname.toLowerCase();
      document.querySelectorAll('#navmenu a').forEach(a => {
        const href = (a.getAttribute('href') || '').toLowerCase();
        if (href && path.endsWith(href.split('/').pop())) {
          a.classList.add('active');
        }
      });
    } catch(e){ /* noop */ }
  }
  document.addEventListener('DOMContentLoaded', init);
})();

(function () {
  "use strict";

  // Resolve asset (keeps your previous behavior safe if you move pages around)
  function resolveAsset(path) {
    if (!path) return path;
    if (/^https?:\/\//.test(path) || path.startsWith("/")) return path;
    const base = location.pathname.includes("/assets/pages/") ? "../../" : "/";
    return base + String(path).replace(/^\.\//, "");
  }
  window.__resolveAsset = resolveAsset;

  // Header scrolled
  function toggleScrolled() {
    const header = document.querySelector("#header");
    if (!header || !header.classList.contains("fixed-top")) return;
    if (window.scrollY > 100) document.body.classList.add("scrolled");
    else document.body.classList.remove("scrolled");
  }
  document.addEventListener("scroll", toggleScrolled, { passive: true });
  window.addEventListener("load", toggleScrolled);

  // Mobile nav
  const mobileNavToggleBtn = document.querySelector(".mobile-nav-toggle");
  function mobileNavToggle() {
    document.body.classList.toggle("mobile-nav-active");
    if (mobileNavToggleBtn) {
      mobileNavToggleBtn.classList.toggle("bi-list");
      mobileNavToggleBtn.classList.toggle("bi-x");
    }
  }
  if (mobileNavToggleBtn) mobileNavToggleBtn.addEventListener("click", mobileNavToggle);
  document.querySelectorAll("#navmenu a").forEach((a) => {
    a.addEventListener("click", () => {
      if (document.body.classList.contains("mobile-nav-active")) mobileNavToggle();
    });
  });

  // Preloader
  const preloader = document.querySelector("#preloader");
  if (preloader) window.addEventListener("load", () => preloader.remove());

  // Scroll-top
  const scrollTop = document.querySelector(".scroll-top");
  function toggleScrollTop() {
    if (!scrollTop) return;
    if (window.scrollY > 100) scrollTop.classList.add("active");
    else scrollTop.classList.remove("active");
  }
  if (scrollTop) {
    scrollTop.addEventListener("click", (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
  window.addEventListener("load", toggleScrollTop);
  document.addEventListener("scroll", toggleScrollTop, { passive: true });

  // AOS
  function aosInit() {
    if (window.AOS) window.AOS.init({ duration: 600, easing: "ease-in-out", once: true, mirror: false });
  }
  window.addEventListener("load", aosInit);

  // Respect scroll-margin-top on initial hash
  window.addEventListener("load", function () {
    if (window.location.hash) {
      const section = document.querySelector(window.location.hash);
      if (section) {
        setTimeout(() => {
          const mt = parseInt(getComputedStyle(section).scrollMarginTop || "0", 10);
          window.scrollTo({ top: section.offsetTop - mt, behavior: "smooth" });
        }, 100);
      }
    }
  });
})();

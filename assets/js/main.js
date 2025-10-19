/* assets/js/main.js */
(function () {
  "use strict";

  /* =========================
     Helpers / UI base
     ========================= */
  function resolveAsset(path) {
    if (!path) return path;
    if (/^https?:\/\//.test(path) || path.startsWith("/")) return path;
    const base = location.pathname.includes("/assets/pages/") ? "../../" : "./";
    return base + String(path).replace(/^\.\//, "");
  }

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

  // Corrige desplazamiento al entrar con #hash (respeta scroll-margin-top)
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

  /* =========================
     Nav activo por PATH + Scrollspy
     ========================= */
  function normalizePath(p) {
    return p.replace(/\/index\.html$/, "/").replace(/\/$/, "");
  }

  function setActiveNavByPath() {
    const links = document.querySelectorAll("#navmenu a");
    const here = normalizePath(location.pathname);
    let matched = false;

    links.forEach((a) => {
      a.classList.remove("active");
      const href = a.getAttribute("href") || "";
      if (href.startsWith("#")) return;
      try {
        const url = new URL(a.getAttribute("href"), location.origin);
        const path = normalizePath(url.pathname);
        if (path === here) {
          a.classList.add("active");
          matched = true;
        }
      } catch (_) { }
    });

    if (!matched) {
      const samePageHero = Array.from(links).find((a) => (a.getAttribute("href") || "").startsWith("#hero"));
      if (samePageHero) samePageHero.classList.add("active");
    }
  }

  const navmenulinks = document.querySelectorAll("#navmenu a");
  function isSameDocumentLink(a) {
    const href = a.getAttribute("href") || "";
    if (href.startsWith("#")) return true;
    try {
      const url = new URL(href, location.href);
      return normalizePath(url.pathname) === normalizePath(location.pathname) && !!url.hash;
    } catch {
      return false;
    }
  }
  function navmenuScrollspy() {
    const pos = window.scrollY + 200;
    navmenulinks.forEach((link) => {
      if (!isSameDocumentLink(link)) return;
      const href = link.getAttribute("href");
      const hash = href && href.startsWith("#") ? href : new URL(href, location.href).hash;
      const sec = hash ? document.querySelector(hash) : null;
      if (!sec) return;
      const top = sec.offsetTop;
      const bottom = top + sec.offsetHeight;
      if (pos >= top && pos <= bottom) {
        document.querySelectorAll("#navmenu a.active").forEach((l) => l.classList.remove("active"));
        link.classList.add("active");
      }
    });
  }
  window.addEventListener("load", () => {
    setActiveNavByPath();
    navmenuScrollspy();
  });
  document.addEventListener("scroll", navmenuScrollspy, { passive: true });

  /* =========================
     I18N (diccionario + aplicación)
     ========================= */
  const I18N = {
    en: {
      // Nav / Footer
      "nav.home": "Home",
      "nav.about": "About",
      "nav.services": "Services",
      "nav.projects": "Projects",
      "footer.quick": "Quick links",
      "footer.services": "Services",

      // Home
      "hero.badge": "Full-stack + Growth for modern brands",
      "hero.title": 'Build. Launch. <span class="text-primary">Scale.</span>',
      "hero.subtitle":
        "Custom websites & e-commerce (Spring Boot + Vue) and performance marketing for U.S. audiences. Clean design, fast delivery, measurable results.",
      "hero.ctaEmail": "Email us",
      "hero.ctaIg": "DM on Instagram",
      "hero.badgeStripe": "Stripe-ready",
      "hero.badgeInfra": "Netlify / Railway",
      "hero.badgeAnalytics": "Ads & Analytics",

      "about.h3": "About Us",
      "about.h2": "Dev + Marketing under one roof",
      "about.p1":
        "We ship full-stack websites and growth frameworks. Vue 3 frontends, Spring Boot backends, solid infra, and ads that actually convert. Designed for speed, clarity, and ROI.",
      "about.fullstack.title": "Full-Stack",
      "about.fullstack.desc": "Vue 3 + Spring Boot + PostgreSQL. Clean APIs, secure auth, Stripe checkout.",
      "about.ecommerce.title": "E-commerce",
      "about.ecommerce.desc": "Variant logic, carts, orders, webhooks, taxes, U.S. Stripe setup end-to-end.",
      "about.growth.title": "Growth",
      "about.growth.desc": "Meta & Google Ads, pixels, events, CRO, content engines that scale.",
      "about.deploy.title": "Deploy",
      "about.deploy.desc": "Netlify frontends, Railway/Neon DB, CI/CD, logging, uptime, SSL right.",

      "process.h2": "How we work",
      "process.lead1": "Simple process,",
      "process.lead2": "fast outcomes",
      "process.1.title": "Discovery",
      "process.1.desc": "30-min call: goals, audience, offers, budget.",
      "process.1.li1": "Baseline audit",
      "process.1.li2": "Scope & timeline",
      "process.1.li3": "Tech & channels",
      "process.2.title": "Build",
      "process.2.desc": "Design system + front/back integration.",
      "process.2.li1": "Vue 3 UI",
      "process.2.li2": "Spring Boot API",
      "process.2.li3": "Stripe, auth, CMS",
      "process.3.title": "Launch",
      "process.3.desc": "Netlify + Railway, SSL, domains, pixels.",
      "process.3.li1": "Perf & QA",
      "process.3.li2": "Analytics events",
      "process.3.li3": "On-page SEO",
      "process.4.title": "Grow",
      "process.4.desc": "Ad funnels + content engine.",
      "process.4.li1": "A/B tests",
      "process.4.li2": "ROAS tracking",
      "process.4.li3": "Monthly sprints",

      // Services
      "services.badge": "Growth & Analytics",
      "services.h1": 'Scale with <span class="text-primary">real growth</span>.',
      "services.lead": "SEO & performance, CRO, Meta/Google Ads and analytics pipelines that prove ROI.",

      "svc.web.h2": "Web Apps",
      "svc.web.lead1": "Dashboards, portals",
      "svc.web.lead2": "and APIs",
      "svc.web.front.title": "Frontend (Vue 3)",
      "svc.web.front.desc": "Design system, accessibility, performance, base SEO.",
      "svc.web.back.title": "Backend (Spring Boot)",
      "svc.web.back.desc": "REST APIs, JWT auth, roles, Stripe & third-party integrations.",
      "svc.web.learn": "Learn more",

      "svc.ecom.h2": "E-commerce",
      "svc.ecom.lead1": "Stripe, taxes",
      "svc.ecom.lead2": "and shipping",
      "svc.ecom.cat.title": "Catalog & Variants",
      "svc.ecom.cat.desc": "Sizes, colors, stock, collections.",
      "svc.ecom.cart.title": "Cart & Checkout",
      "svc.ecom.cart.desc": "Stripe Checkout, coupons, taxes.",
      "svc.ecom.orders.title": "Orders & Webhooks",
      "svc.ecom.orders.desc": "Confirmations, statuses, reports.",

      "svc.content.h2": "Content",
      "svc.content.lead1": "Reels, UGC",
      "svc.content.lead2": "brand kits",
      "svc.content.video.title": "Short-form video",
      "svc.content.video.desc": "Script, shoot, edit & calendar.",
      "svc.content.brand.title": "Branding",
      "svc.content.brand.desc": "Brand manual, type, color.",
      "svc.content.kits.title": "Social kits",
      "svc.content.kits.desc": "IG/TikTok/YouTube templates.",

      "svc.growth.h2": "Growth & Ads",
      "svc.growth.lead1": "Meta Suite",
      "svc.growth.lead2": "Google/GA4",
      "svc.growth.funnel.title": "Funnels",
      "svc.growth.funnel.desc": "Top/Mid/Bottom, offers & creatives.",
      "svc.growth.meta.title": "Meta Ads",
      "svc.growth.meta.desc": "Targeting, events, remarketing.",
      "svc.growth.analytics.title": "Measurement",
      "svc.growth.analytics.desc": "GA4 dashboards, ROAS, sprints.",

      // Projects (toolbar + botones + cuentas)
      "projects.h2": "Projects",
      "projects.lead1": "Explore",
      "projects.lead2": "Client Work & Case Studies",
      "projects.hero.badge": "Template-free · 100% code",
      "projects.hero.h1": "Projects.",
      "projects.hero.lead": "Client Work & Case Studies",
      "projects.hero.social":
        "We also manage social media with AI-assisted content, video editing, and performance tracking across Meta / Google for measurable growth.",
      "projects.filter.all": "All",
      "projects.filter.web": "Web",
      "projects.filter.ecommerce": "E-commerce",
      "projects.filter.marketing": "Marketing",
      "projects.filter.branding": "Branding",
      "projects.search.placeholder": "Search projects",
      "projects.sort.az": "A → Z",
      "projects.sort.za": "Z → A",
      "projects.sort.new": "Newest",
      "projects.btn.case": "Case study",
      "projects.btn.visit": "Visit",
      "projects.btn.github": "GitHub",
      "projects.accounts.h2": "Social Accounts We Manage",
      "projects.accounts.pet.note": "UGC, AI-assisted reels, local ads and reporting.",
      "projects.accounts.can.note": "Brand kit, community, and reach campaigns.",
      "projects.accounts.tasca.note": "Food content and reservations.",

      // CTA (global)
      "cta.title": "Have a project in mind?",
      "cta.copy": "Tell us about your product, timeline, and goals. We’ll reply within 24 hours.",
      "cta.email": "info@marcapro.agency",
      "cta.ig": "Instagram"
    },

    es: {
      // Nav / Footer
      "nav.home": "Inicio",
      "nav.about": "Nosotros",
      "nav.services": "Servicios",
      "nav.projects": "Proyectos",
      "footer.quick": "Accesos rápidos",
      "footer.services": "Servicios",

      // Home
      "hero.badge": "Full-stack + Growth para marcas modernas",
      "hero.title": 'Construye. Lanza. <span class="text-primary">Escala.</span>',
      "hero.subtitle":
        "Sitios web y e-commerce (Spring Boot + Vue) y marketing de resultados para audiencias en EE. UU. Diseño limpio, entrega rápida y resultados medibles.",
      "hero.ctaEmail": "Escríbenos",
      "hero.ctaIg": "DM en Instagram",
      "hero.badgeStripe": "Listo para Stripe",
      "hero.badgeInfra": "Netlify / Railway",
      "hero.badgeAnalytics": "Ads & Analytics",

      "about.h3": "Nosotros",
      "about.h2": "Dev + Marketing en un solo equipo",
      "about.p1":
        "Entregamos sitios full-stack y marcos de crecimiento. Frontend en Vue 3, backend Spring Boot, infraestructura sólida y anuncios que convierten. Pensado para velocidad, claridad y ROI.",
      "about.fullstack.title": "Full-Stack",
      "about.fullstack.desc":
        "Vue 3 + Spring Boot + PostgreSQL. APIs limpias, auth segura y checkout con Stripe.",
      "about.ecommerce.title": "E-commerce",
      "about.ecommerce.desc":
        "Variantes, carrito, órdenes, webhooks, impuestos y Stripe para EE. UU. de punta a punta.",
      "about.growth.title": "Growth",
      "about.growth.desc":
        "Meta y Google Ads, píxeles, eventos, CRO y motores de contenido escalables.",
      "about.deploy.title": "Deploy",
      "about.deploy.desc":
        "Front en Netlify, back en Railway/Neon, CI/CD, logging, uptime y SSL bien hecho.",

      "process.h2": "Cómo trabajamos",
      "process.lead1": "Proceso simple,",
      "process.lead2": "resultados rápidos",
      "process.1.title": "Descubrimiento",
      "process.1.desc": "Llamada de 30 min: objetivos, audiencia, oferta y presupuesto.",
      "process.1.li1": "Auditoría base",
      "process.1.li2": "Alcance y tiempos",
      "process.1.li3": "Tech y canales",
      "process.2.title": "Construcción",
      "process.2.desc": "Design system + integración front/back.",
      "process.2.li1": "UI con Vue 3",
      "process.2.li2": "API Spring Boot",
      "process.2.li3": "Stripe, auth, CMS",
      "process.3.title": "Lanzamiento",
      "process.3.desc": "Netlify + Railway, SSL, dominios y píxeles.",
      "process.3.li1": "Performance & QA",
      "process.3.li2": "Eventos de analítica",
      "process.3.li3": "SEO on-page",
      "process.4.title": "Crecimiento",
      "process.4.desc": "Embudos de anuncios + motor de contenido.",
      "process.4.li1": "Tests A/B",
      "process.4.li2": "Tracking de ROAS",
      "process.4.li3": "Sprints mensuales",

      // Services
      "services.badge": "Crecimiento y Analítica",
      "services.h1": 'Escala con <span class="text-primary">crecimiento real</span>.',
      "services.lead":
        "SEO y performance, CRO, anuncios Meta/Google y pipelines de analítica que demuestran el ROI.",

      "svc.web.h2": "Web Apps",
      "svc.web.lead1": "Dashboards, portales",
      "svc.web.lead2": "y APIs",
      "svc.web.front.title": "Frontend (Vue 3)",
      "svc.web.front.desc": "Design system, accesibilidad, performance y SEO base.",
      "svc.web.back.title": "Backend (Spring Boot)",
      "svc.web.back.desc": "APIs REST, auth JWT, roles, Stripe e integraciones.",
      "svc.web.learn": "Ver más",

      "svc.ecom.h2": "E-commerce",
      "svc.ecom.lead1": "Stripe, impuestos",
      "svc.ecom.lead2": "y envíos",
      "svc.ecom.cat.title": "Catálogo y variantes",
      "svc.ecom.cat.desc": "Tallas, colores, stock y colecciones.",
      "svc.ecom.cart.title": "Carrito y checkout",
      "svc.ecom.cart.desc": "Stripe Checkout, cupones e impuestos.",
      "svc.ecom.orders.title": "Órdenes y webhooks",
      "svc.ecom.orders.desc": "Confirmaciones, estados y reportes.",

      "svc.content.h2": "Contenido",
      "svc.content.lead1": "Reels, UGC",
      "svc.content.lead2": "brand kits",
      "svc.content.video.title": "Video corto",
      "svc.content.video.desc": "Guión, grabación, edición y calendar.",
      "svc.content.brand.title": "Branding",
      "svc.content.brand.desc": "Manual de marca, tipografía y color.",
      "svc.content.kits.title": "Kits sociales",
      "svc.content.kits.desc": "Plantillas IG/TikTok/YouTube.",

      "svc.growth.h2": "Growth & Ads",
      "svc.growth.lead1": "Meta Suite",
      "svc.growth.lead2": "Google/GA4",
      "svc.growth.funnel.title": "Embudos",
      "svc.growth.funnel.desc": "Top/Mid/Bottom, ofertas y creatividades.",
      "svc.growth.meta.title": "Meta Ads",
      "svc.growth.meta.desc": "Segmentación, eventos y remarketing.",
      "svc.growth.analytics.title": "Medición",
      "svc.growth.analytics.desc": "Dashboards GA4, ROAS y sprints.",

      // Projects
      "projects.h2": "Proyectos",
      "projects.lead1": "Explora",
      "projects.lead2": "Trabajos y Casos de Estudio",
      "projects.hero.badge": "Sin plantillas · 100% código",
      "projects.hero.h1": "Proyectos.",
      "projects.hero.lead": "Trabajos y Casos de Estudio",
      "projects.hero.social":
        "También gestionamos redes con contenido asistido por IA, edición de video y tracking de performance en Meta/Google para crecer con métricas.",
      "projects.filter.all": "Todos",
      "projects.filter.web": "Web",
      "projects.filter.ecommerce": "E-commerce",
      "projects.filter.marketing": "Marketing",
      "projects.filter.branding": "Branding",
      "projects.search.placeholder": "Buscar proyectos",
      "projects.sort.az": "A → Z",
      "projects.sort.za": "Z → A",
      "projects.sort.new": "Más nuevo",
      "projects.btn.case": "Caso de estudio",
      "projects.btn.visit": "Visitar",
      "projects.btn.github": "GitHub",
      "projects.accounts.h2": "Cuentas que manejamos",
      "projects.accounts.pet.note": "UGC, reels con IA, pauta local y reporting.",
      "projects.accounts.can.note": "Brand kit, comunidad y campañas de alcance.",
      "projects.accounts.tasca.note": "Contenido gastronómico y reservas.",

      // CTA
      "cta.title": "¿Tienes un proyecto en mente?",
      "cta.copy":
        "Cuéntanos sobre el producto, tiempos y objetivos. Respondemos en menos de 24 horas.",
      "cta.email": "info@marcapro.agency",
      "cta.ig": "Instagram"
    },
  };

  // === Plans: claves añadidas (sin referencias circulares) ===
  Object.assign(I18N.en, {
    "nav.plans": "Plans",
    "plans.hero.badge": "Transparent pricing",
    "plans.hero.title": "Clear plans — web, social, ads & branding",
    "plans.hero.subtitle": "USA: web & ads · Colombia: web, social & ads · Branding: global",
    "plans.hero.note": "Prices shown by tab (USD/COP). Ad spend not included.",
    "plans.billing.upfrontTop": "Pay upfront",
    "plans.billing.upfrontBottom": "Save more",
    "plans.billing.monthlyTop": "Pay monthly",
    "plans.billing.monthlyBottom": "Monthly",
    "plans.tabs.usaWeb": "USA — Web",
    "plans.tabs.usaAds": "USA — Ads",
    "plans.tabs.colWeb": "Colombia — Web",
    "plans.tabs.colSocial": "Colombia — Social",
    "plans.tabs.colAds": "Colombia — Ads",
    "plans.tabs.branding": "Global — Branding",
    "plans.generic.plusMaintenance": "+ maintenance",
    "plans.generic.select": "Select",
    "plans.generic.email": "Email",
    "plans.generic.maintenance": "Maintenance:",
    "plans.generic.perMonth": "/mo",
    "plans.generic.oneTime": "one-time",
    "plans.generic.request": "Request",
    "plans.usaWeb.starter.title": "Starter (Landing)",
    "plans.usaWeb.starter.subtitle": "Static multi-page, SEO basics, responsive",
    "plans.usaWeb.starter.f1": "Custom design",
    "plans.usaWeb.starter.f2": "Responsive",
    "plans.usaWeb.starter.f3": "On-page SEO",
    "plans.usaWeb.growth.title": "Growth",
    "plans.usaWeb.growth.subtitle": "Multi-page site, tracking, CRO & ad-ready",
    "plans.usaWeb.growth.f1": "Admin / CMS",
    "plans.usaWeb.growth.f2": "GA4 & conversion events",
    "plans.usaWeb.growth.f3": "Basic CRO setup",
    "plans.usaWeb.ecom.title": "E-commerce",
    "plans.usaWeb.ecom.subtitle": "Variants, Stripe, orders & webhooks",
    "plans.usaWeb.ecom.f1": "Variants & inventory",
    "plans.usaWeb.ecom.f2": "Stripe integration",
    "plans.usaWeb.ecom.f3": "Orders & webhook",
    "plans.usaAds.setup.title": "Ads Setup (Meta + Google)",
    "plans.usaAds.setup.subtitle": "Account audit, pixels, conversions, first campaigns",
    "plans.usaAds.setup.f1": "Events & conversions",
    "plans.usaAds.setup.f2": "Audiences & structure",
    "plans.usaAds.setup.f3": "First campaigns live",
    "plans.usaAds.mgmt.title": "Ads Management",
    "plans.usaAds.mgmt.subtitle": "Weekly optimization & reporting",
    "plans.usaAds.mgmt.f1": "Meta & Google",
    "plans.usaAds.mgmt.f2": "A/B testing",
    "plans.usaAds.mgmt.f3": "ROAS tracking",
    "plans.colWeb.static.title": "Static Page",
    "plans.colWeb.static.subtitle": "Informational/landing, no backend",
    "plans.colWeb.static.f1": "3–6 sections",
    "plans.colWeb.static.f2": "Basic SEO",
    "plans.colWeb.static.f3": "Responsive",
    "plans.colWeb.back.title": "Website with Backend",
    "plans.colWeb.back.subtitle": "Admin, DB & business logic",
    "plans.colWeb.back.f1": "Auth / admin panel",
    "plans.colWeb.back.f2": "Integrations",
    "plans.colWeb.back.f3": "Metrics",
    "plans.colWeb.ecom.title": "E-commerce",
    "plans.colWeb.ecom.subtitle": "Catalog, payments & inventory",
    "plans.colWeb.ecom.f1": "Gateway (Stripe/PayU)",
    "plans.colWeb.ecom.f2": "Variants + stock",
    "plans.colWeb.ecom.f3": "Orders & webhooks",
    "plans.colSocial.basic.title": "Basic",
    "plans.colSocial.basic.subtitle": "8 posts/month + calendar",
    "plans.colSocial.basic.f1": "Copywriting",
    "plans.colSocial.basic.f2": "Templates",
    "plans.colSocial.basic.f3": "Scheduling",
    "plans.colSocial.pro.title": "Pro",
    "plans.colSocial.pro.subtitle": "12–16 posts + reels",
    "plans.colSocial.pro.f1": "Reels + editing",
    "plans.colSocial.pro.f2": "Optimization",
    "plans.colSocial.pro.f3": "Monthly report",
    "plans.colSocial.full.title": "Full + Ads",
    "plans.colSocial.full.subtitle": "20 posts + ads management",
    "plans.colSocial.full.f1": "Meta & Google",
    "plans.colSocial.full.f2": "Testing",
    "plans.colSocial.full.f3": "Basic ROAS",
    "plans.colAds.setup.title": "Ads Setup (Meta + Google)",
    "plans.colAds.setup.subtitle": "Technical implementation and first campaigns",
    "plans.colAds.setup.f1": "Events and conversions",
    "plans.colAds.setup.f2": "Structure and audiences",
    "plans.colAds.setup.f3": "First campaigns",
    "plans.colAds.mgmt.title": "Monthly Ads Management",
    "plans.colAds.mgmt.subtitle": "Weekly optimization and reports",
    "plans.colAds.mgmt.f1": "Meta & Google",
    "plans.colAds.mgmt.f2": "A/B testing",
    "plans.colAds.mgmt.f3": "Performance report",
    "plans.branding.basic.title": "Logo + Basic Guide",
    "plans.branding.basic.subtitle": "2 proposals, palette, typography, applications",
    "plans.branding.basic.f1": "Final editable logo",
    "plans.branding.basic.f2": "Usage guide",
    "plans.branding.basic.f3": "Basic social kit",
    "plans.branding.full.title": "Full Rebranding",
    "plans.branding.full.subtitle": "Story, identity and extended applications",
    "plans.branding.full.f1": "Story & positioning",
    "plans.branding.full.f2": "Extended brandbook",
    "plans.branding.full.f3": "Marketing kit",
    "plans.branding.note": "Branding is one-time. No maintenance included.",
    "plans.addons.title": "Add-ons",
    "plans.addons.note": "In USA and Colombia we handle Ads as an independent service (see Ads tabs). Ad spend is separate.",
    "plans.cta.ready": "Ready to start?",
    "plans.cta.email": "Email us",
    "plans.cta.ig": "Instagram",
    "plans.cta.custom": "Prefer custom? We build tailored quotes — let's talk.",
    "plans.pricing.includes": "includes implementation + maintenance",
    "plans.pricing.after": "then",
    "plans.pricing.varies": "Maintenance varies by scope (static, backend, e-commerce).",

  });

  Object.assign(I18N.es, {
    "nav.plans": "Planes",
    "plans.hero.badge": "Precios transparentes",
    "plans.hero.title": "Planes claros — web, social, pauta y branding",
    "plans.hero.subtitle": "USA: web y pauta · Colombia: web, social y pauta · Branding: global",
    "plans.hero.note": "Los precios se muestran por pestaña (USD/COP). No incluye pauta.",
    "plans.billing.upfrontTop": "Pago único",
    "plans.billing.upfrontBottom": "Ahorras más",
    "plans.billing.monthlyTop": "Pago mensual",
    "plans.billing.monthlyBottom": "Mensual",
    "plans.tabs.usaWeb": "USA — Web",
    "plans.tabs.usaAds": "USA — Ads",
    "plans.tabs.colWeb": "Colombia — Web",
    "plans.tabs.colSocial": "Colombia — Social",
    "plans.tabs.colAds": "Colombia — Ads",
    "plans.tabs.branding": "Global — Branding",
    "plans.generic.plusMaintenance": "+ mantenimiento",
    "plans.generic.select": "Seleccionar",
    "plans.generic.email": "Email",
    "plans.generic.maintenance": "Mantenimiento:",
    "plans.generic.perMonth": "/mes",
    "plans.generic.oneTime": "único",
    "plans.generic.request": "Solicitar",
    "plans.usaWeb.starter.title": "Starter (Landing)",
    "plans.usaWeb.starter.subtitle": "Multipágina estática, SEO básico, responsive",
    "plans.usaWeb.starter.f1": "Diseño a medida",
    "plans.usaWeb.starter.f2": "Responsive",
    "plans.usaWeb.starter.f3": "SEO on-page",
    "plans.usaWeb.growth.title": "Growth",
    "plans.usaWeb.growth.subtitle": "Multipágina, medición, CRO y lista para pauta",
    "plans.usaWeb.growth.f1": "Admin / CMS",
    "plans.usaWeb.growth.f2": "GA4 y conversiones",
    "plans.usaWeb.growth.f3": "CRO básico",
    "plans.usaWeb.ecom.title": "E-commerce",
    "plans.usaWeb.ecom.subtitle": "Variantes, Stripe, pedidos y webhooks",
    "plans.usaWeb.ecom.f1": "Variantes e inventario",
    "plans.usaWeb.ecom.f2": "Integración con Stripe",
    "plans.usaWeb.ecom.f3": "Pedidos y webhook",
    "plans.usaAds.setup.title": "Setup de Ads (Meta + Google)",
    "plans.usaAds.setup.subtitle": "Auditoría, píxeles, conversiones y primeras campañas",
    "plans.usaAds.setup.f1": "Eventos y conversiones",
    "plans.usaAds.setup.f2": "Audiencias y estructura",
    "plans.usaAds.setup.f3": "Primeras campañas activas",
    "plans.usaAds.mgmt.title": "Gestión de Ads",
    "plans.usaAds.mgmt.subtitle": "Optimización semanal y reportes",
    "plans.usaAds.mgmt.f1": "Meta y Google",
    "plans.usaAds.mgmt.f2": "A/B testing",
    "plans.usaAds.mgmt.f3": "Seguimiento de ROAS",
    "plans.colWeb.static.title": "Página Estática",
    "plans.colWeb.static.subtitle": "Informativa/landing, sin backend",
    "plans.colWeb.static.f1": "3–6 secciones",
    "plans.colWeb.static.f2": "SEO básico",
    "plans.colWeb.static.f3": "Responsive",
    "plans.colWeb.back.title": "Web con Backend",
    "plans.colWeb.back.subtitle": "Admin, BD y lógica de negocio",
    "plans.colWeb.back.f1": "Autenticación / panel",
    "plans.colWeb.back.f2": "Integraciones",
    "plans.colWeb.back.f3": "Métricas",
    "plans.colWeb.ecom.title": "E-commerce",
    "plans.colWeb.ecom.subtitle": "Catálogo, pagos e inventario",
    "plans.colWeb.ecom.f1": "Pasarela (Stripe/PayU)",
    "plans.colWeb.ecom.f2": "Variantes + stock",
    "plans.colWeb.ecom.f3": "Pedidos y webhooks",
    "plans.colSocial.basic.title": "Básico",
    "plans.colSocial.basic.subtitle": "8 piezas/mes + parrilla",
    "plans.colSocial.basic.f1": "Copywriting",
    "plans.colSocial.basic.f2": "Plantillas",
    "plans.colSocial.basic.f3": "Programación",
    "plans.colSocial.pro.title": "Pro",
    "plans.colSocial.pro.subtitle": "12–16 piezas + reels",
    "plans.colSocial.pro.f1": "Reels + edición",
    "plans.colSocial.pro.f2": "Optimización",
    "plans.colSocial.pro.f3": "Informe mensual",
    "plans.colSocial.full.title": "Full + Ads",
    "plans.colSocial.full.subtitle": "20 piezas + administración de pauta",
    "plans.colSocial.full.f1": "Meta y Google",
    "plans.colSocial.full.f2": "Testing",
    "plans.colSocial.full.f3": "ROAS básico",
    "plans.colAds.setup.title": "Setup de Ads (Meta + Google)",
    "plans.colAds.setup.subtitle": "Implementación técnica y primeras campañas",
    "plans.colAds.setup.f1": "Eventos y conversiones",
    "plans.colAds.setup.f2": "Estructura y audiencias",
    "plans.colAds.setup.f3": "Primeras campañas",
    "plans.colAds.mgmt.title": "Gestión Mensual de Ads",
    "plans.colAds.mgmt.subtitle": "Optimización semanal y reportes",
    "plans.colAds.mgmt.f1": "Meta y Google",
    "plans.colAds.mgmt.f2": "A/B testing",
    "plans.colAds.mgmt.f3": "Informe de desempeño",
    "plans.branding.basic.title": "Logo + Manual Básico",
    "plans.branding.basic.subtitle": "2 propuestas, paleta, tipografía, aplicaciones",
    "plans.branding.basic.f1": "Logo final editable",
    "plans.branding.basic.f2": "Guía de uso",
    "plans.branding.basic.f3": "Kit social básico",
    "plans.branding.full.title": "Rebranding Completo",
    "plans.branding.full.subtitle": "Narrativa, identidad y aplicaciones extendidas",
    "plans.branding.full.f1": "Story y posicionamiento",
    "plans.branding.full.f2": "Manual extendido",
    "plans.branding.full.f3": "Kit de marketing",
    "plans.branding.note": "Branding es cobro único. No incluye mantenimiento.",
    "plans.addons.title": "Add-ons",
    "plans.addons.note": "En USA y Colombia manejamos Ads como servicio independiente (ver pestañas de Ads). El gasto en pauta es aparte.",
    "plans.cta.ready": "¿Listo para empezar?",
    "plans.cta.email": "Escríbenos",
    "plans.cta.ig": "Instagram",
    "plans.cta.custom": "¿Prefieres a la medida? Armamos una cotización — conversemos.",
    "plans.pricing.includes": "incluye implementación + mantenimiento",
    "plans.pricing.after": "luego",
    "plans.pricing.varies": "El mantenimiento varía según el alcance (estático, backend, e-commerce).",

  });

  let currentLang = "en";
  function t(key) {
    const dict = I18N[currentLang] || I18N.en;
    return Object.prototype.hasOwnProperty.call(dict, key) ? dict[key] : key;
  }

  function applyI18n(lang = "en") {
    currentLang = I18N[lang] ? lang : "en";
    document.documentElement.setAttribute("lang", currentLang);
    const dict = I18N[currentLang] || I18N.en;

    // Texto plano
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (dict[key] != null) el.textContent = dict[key];
    });

    // HTML enriquecido
    document.querySelectorAll("[data-i18n-html]").forEach((el) => {
      const key = el.getAttribute("data-i18n-html");
      if (dict[key] != null) el.innerHTML = dict[key];
    });

    // Atributos (placeholder, title, content, etc.)
    document.querySelectorAll("[data-i18n-attr]").forEach((el) => {
      const map = el.getAttribute("data-i18n-attr") || "";
      map.split(";").forEach((pair) => {
        const [attr, key] = pair.split(":").map((s) => s && s.trim());
        if (!attr || !key) return;
        if (dict[key] != null) {
          if (attr.toLowerCase() === "content") {
            el.setAttribute(attr, dict[key]); // <meta>
          } else if (attr.toLowerCase() === "title" && el.tagName === "TITLE") {
            el.textContent = dict[key];
            document.title = dict[key];
          } else {
            el.setAttribute(attr, dict[key]);
          }
        }
      });
    });

    // Botones de idioma activos
    document.querySelectorAll(".btn-lang").forEach((b) => {
      const active = b.getAttribute("data-lang") === currentLang;
      b.classList.toggle("active", active);
      b.setAttribute("aria-pressed", active ? "true" : "false");
    });

    // Re-render dinámico de páginas que dependen de i18n
    rerenderProjectsIfNeeded();
    // hook para la página de planes (si existe plans.js escuchará este evento)
    try {
      window.dispatchEvent(new CustomEvent("i18n:changed", { detail: { lang: currentLang, t } }));
      // compat: si plans.js expone una función global opcional
      if (typeof window.rerenderPlans === "function") window.rerenderPlans();
    } catch { }

    localStorage.setItem("lang", currentLang);
  }

  function wireLangButtons() {
    document.querySelectorAll(".btn-lang").forEach((btn) => {
      btn.addEventListener("click", () => applyI18n(btn.getAttribute("data-lang")));
    });
  }

  /* =========================
     Projects: data + render
     ========================= */
  const PROJECTS = [
    {
      id: 6,
      title: "Eventex",
      type: "web",
      sector: "Events & Uniforms",
      img: "assets/images/eventex.png",
      live: "https://www.eventex.com.co",
      github: null,
      tags: ["Static site", "SEO", "Lead capture"],
      challenge: "Renew presence & capture with new domain.",
      solutions: [
        "SEO structure, sitemap, metatags",
        "Dotaciones & events sections",
        "CTAs to email/IG while backend is built",
      ],
      results: "Better indexing and base for campaigns.",
    },
    {
      id: 5,
      title: "Canbridge",
      type: "branding",
      sector: "Dog School — Therapy & Boarding",
      img: "assets/images/canbridge.png",
      live: "https://canbridgeguarderiacanina.com",
      github: null,
      tags: ["Brand Kit", "Website", "UGC", "Community"],
      challenge: "Unify brand & fill daycare/therapy slots.",
      solutions: [
        "Brand manual (colors/fonts/voice)",
        "Service landing + testimonials",
        "Pixar-like UGC for awareness",
      ],
      results: "Higher recall and WhatsApp/IG inquiries.",
    },
    {
      id: 4,
      title: "Pet Station",
      type: "marketing",
      sector: "Vet Clinic — Grooming & Health",
      img: "assets/images/petstation.png",
      live: "https://petstationvet.com",
      github: null,
      tags: ["Content", "Reels", "Landing", "Meta Ads"],
      challenge: "Increase grooming & dental bookings.",
      solutions: [
        "Reels calendar (CapCut/Canva)",
        "Landing + WhatsApp CTA",
        "Event tagging & local campaigns",
      ],
      results: "Consistent weekly growth of paid/organic leads.",
    },
    {
      id: 3,
      title: "Pintxo Pincho",
      type: "web",
      sector: "Restaurant — Pintxos & Drinks",
      img: "assets/images/pintxo.png",
      live: "https://pintxopincho.com/",
      github: null,
      tags: ["Vue 3", "Railway", "Drinks Menu", "CORS"],
      challenge: "Fast site for menu/promos.",
      solutions: [
        "Admin for highlights",
        "Static caching + paginated endpoints",
        "CORS hardening on Railway",
      ],
      results: "Load times <1.5s in key pages.",
    },
    {
      id: 2,
      title: "Tasca",
      type: "web",
      sector: "Restaurant — Spanish Tapas",
      img: "assets/images/tasca.png",
      live: "https://tascatapas.com",
      github: null,
      tags: ["Vue 3", "Menu", "SEO", "Netlify"],
      challenge: "Redesign focused on reservations and performance.",
      solutions: ["SPA routes + admin", "Menu, drinks, events, gallery", "Tock widget + SEO schema"],
      results: "Higher clarity and organic CTR.",
    },
    {
      id: 1,
      title: "Valkha",
      type: "ecommerce",
      sector: "E-commerce — Sportswear",
      img: "assets/images/valkha.png",
      live: "https://valkha-front.netlify.app/",
      github: null,
      tags: ["Vue 3", "Spring Boot", "Stripe", "PostgreSQL", "Netlify/Railway"],
      challenge:
        "Launch sportswear store with variants, cart, Stripe checkout and admin.",
      solutions: [
        "Vue 3 + Pinia; product variants & gallery",
        "Spring Boot API with JWT; session/user cart",
        "Stripe Checkout (USD), webhooks & orders",
        "Netlify (front) + Railway (back) + PG",
      ],
      results: "Fast checkout and stable base for performance campaigns.",
    },
  ];

  function initProjects() {
    const grid = document.getElementById("projectsGrid");
    if (!grid) return;

    const filters = document.getElementById("projectsFilters");
    const searchInput = document.getElementById("projectsSearch");
    const sortSelect = document.getElementById("projectsSort");
    const logosRow = document.getElementById("logosRow");

    let activeList = [...PROJECTS];

    function cardButtonsHTML(p) {
      return `
        <div class="project-actions">
          <button class="btn btn-sm btn-outline-dark" data-case="${p.id}">
            <i class="bi bi-journal-text me-1"></i> ${t("projects.btn.case")}
          </button>
          ${p.live
          ? `<a class="btn btn-sm btn-primary" href="${p.live}" target="_blank" rel="noopener">
                 <i class="bi bi-globe me-1"></i> ${t("projects.btn.visit")}
               </a>`
          : ""
        }
          ${p.github
          ? `<a class="btn btn-sm btn-outline-secondary" href="${p.github}" target="_blank" rel="noopener">
                 <i class="bi bi-github me-1"></i> ${t("projects.btn.github")}
               </a>`
          : ""
        }
        </div>`;
    }

    function render(list) {
      grid.innerHTML = "";
      const frag = document.createDocumentFragment();
      list.forEach((p) => {
        const col = document.createElement("div");
        col.className = "col-sm-6 col-lg-4";
        col.innerHTML = `
          <div class="project-card h-100">
            <img class="project-thumb"
                 src="${resolveAsset(p.img)}"
                 alt="${p.title} — ${p.sector}"
                 loading="lazy" decoding="async" width="640" height="400">
            <div class="project-body">
              <h5 class="project-title">${p.title}</h5>
              <div class="small text-muted">${p.sector}</div>
              <div class="project-tags mt-1">
                ${p.tags.slice(0, 3).map((t_) => `<span class="project-tag">${t_}</span>`).join("")}
              </div>
              ${cardButtonsHTML(p)}
            </div>
          </div>`;
        frag.appendChild(col);
      });
      grid.appendChild(frag);

      grid.querySelectorAll("[data-case]").forEach((btn) => {
        btn.addEventListener("click", (e) => {
          const id = Number(e.currentTarget.getAttribute("data-case"));
          const item = PROJECTS.find((x) => x.id === id);
          if (item) openCaseStudy(item);
        });
      });
    }

    function openCaseStudy(p) {
      const modalEl = document.getElementById("caseStudyModal");
      if (!modalEl) return;
      modalEl.querySelector("#caseStudyTitle").textContent = p.title;
      modalEl.querySelector("#caseStudyChallenge").textContent = p.challenge;
      modalEl.querySelector("#caseStudySolutions").innerHTML = p.solutions.map((s) => `<li>${s}</li>`).join("");
      const res = modalEl.querySelector("#caseStudyResults");
      res.textContent = p.results;
      res.classList.toggle("d-none", !p.results);
      const live = modalEl.querySelector("#caseStudyLive");
      const git = modalEl.querySelector("#caseStudyGithub");
      if (live) {
        if (p.live) {
          live.classList.remove("d-none");
          live.href = p.live;
        } else live.classList.add("d-none");
      }
      if (git) {
        if (p.github) {
          git.classList.remove("d-none");
          git.href = p.github;
        } else git.classList.add("d-none");
      }
      const tags = modalEl.querySelector("#caseStudyTags");
      if (tags) {
        tags.innerHTML = p.tags
          .map((t_) => `<span class="badge rounded-pill text-bg-light border">${t_}</span>`)
          .join("");
      }
      if (window.bootstrap?.Modal) new bootstrap.Modal(modalEl).show();
    }

    // Filtros por tipo
    if (filters) {
      filters.querySelectorAll(".nav-link").forEach((btn) => {
        btn.addEventListener("click", () => {
          filters.querySelectorAll(".nav-link").forEach((b) => b.classList.remove("active"));
          btn.classList.add("active");
          const f = btn.getAttribute("data-filter");
          activeList = f === "all" ? [...PROJECTS] : PROJECTS.filter((p) => p.type === f);
          applySearchAndSort();
        });
      });
    }

    function applySearchAndSort() {
      let list = [...activeList];
      const q = (searchInput?.value || "").trim().toLowerCase();
      if (q) {
        list = list.filter((p) => {
          const hay = [p.title, p.sector, ...(p.tags || [])].join(" ").toLowerCase();
          return hay.includes(q);
        });
      }
      const sort = (sortSelect?.value || "az").toLowerCase();
      if (sort === "az") list.sort((a, b) => a.title.localeCompare(b.title));
      else if (sort === "za") list.sort((a, b) => b.title.localeCompare(a.title));
      else if (sort === "new") list.sort((a, b) => b.id - a.id);
      else if (sort === "old") list.sort((a, b) => a.id - b.id);

      render(list);
    }

    if (searchInput) searchInput.addEventListener("input", applySearchAndSort);
    if (sortSelect) sortSelect.addEventListener("change", applySearchAndSort);

    // Logos (opcional)
    if (logosRow) {
      const logos = [
        "assets/images/logos/valkha.svg",
        "assets/images/logos/tasca.svg",
        "assets/images/logos/pintxo.svg",
        "assets/images/logos/petstation.svg",
        "assets/images/logos/canbridge.svg",
        "assets/images/logos/eventex.svg",
      ];
      logosRow.innerHTML = logos.map((src) => `<img src="${resolveAsset(src)}" alt="" height="26"/>`).join("");
    }

    render(PROJECTS);
  }

  function rerenderProjectsIfNeeded() {
    const grid = document.getElementById("projectsGrid");
    if (!grid) return;
    const activeBtn = document.querySelector("#projectsFilters .nav-link.active");
    if (!activeBtn) return initProjects();
    const f = activeBtn.getAttribute("data-filter");
    const list = f === "all" ? PROJECTS : PROJECTS.filter((p) => p.type === f);

    // Si hay controles de búsqueda/orden, disparamos sus eventos para que reconstruyan
    const searchInput = document.getElementById("projectsSearch");
    const sortSelect = document.getElementById("projectsSort");
    if (searchInput || sortSelect) {
      const evt = new Event("change");
      if (searchInput) searchInput.dispatchEvent(evt);
      if (sortSelect) sortSelect.dispatchEvent(evt);
      return;
    }

    // Si no hay controles, renderizamos directo
    grid.innerHTML = "";
    const frag = document.createDocumentFragment();
    list.forEach((p) => {
      const col = document.createElement("div");
      col.className = "col-sm-6 col-lg-4";
      col.innerHTML = `
        <div class="project-card h-100">
          <img class="project-thumb"
               src="${resolveAsset(p.img)}"
               alt="${p.title} — ${p.sector}"
               loading="lazy" decoding="async" width="640" height="400">
          <div class="project-body">
            <h5 class="project-title">${p.title}</h5>
            <div class="small text-muted">${p.sector}</div>
            <div class="project-tags mt-1">
              ${p.tags.slice(0, 3).map((t_) => `<span class="project-tag">${t_}</span>`).join("")}
            </div>
            <div class="project-actions">
              <button class="btn btn-sm btn-outline-dark" data-case="${p.id}">
                <i class="bi bi-journal-text me-1"></i> ${t("projects.btn.case")}
              </button>
              ${p.live
          ? `<a class="btn btn-sm btn-primary" href="${p.live}" target="_blank" rel="noopener">
                     <i class="bi bi-globe me-1"></i> ${t("projects.btn.visit")}
                   </a>`
          : ""
        }
              ${p.github
          ? `<a class="btn btn-sm btn-outline-secondary" href="${p.github}" target="_blank" rel="noopener">
                     <i class="bi bi-github me-1"></i> ${t("projects.btn.github")}
                   </a>`
          : ""
        }
            </div>
          </div>
        </div>`;
      frag.appendChild(col);
    });
    grid.appendChild(frag);
    grid.querySelectorAll("[data-case]").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        const id = Number(e.currentTarget.getAttribute("data-case"));
        const item = PROJECTS.find((x) => x.id === id);
        if (!item) return;
        const modalEl = document.getElementById("caseStudyModal");
        if (!modalEl) return;
        modalEl.querySelector("#caseStudyTitle").textContent = item.title;
        modalEl.querySelector("#caseStudyChallenge").textContent = item.challenge;
        modalEl.querySelector("#caseStudySolutions").innerHTML = item.solutions.map((s) => `<li>${s}</li>`).join("");
        const res = modalEl.querySelector("#caseStudyResults");
        res.textContent = item.results;
        res.classList.toggle("d-none", !item.results);
        const live = modalEl.querySelector("#caseStudyLive");
        const git = modalEl.querySelector("#caseStudyGithub");
        if (live) {
          if (item.live) { live.classList.remove("d-none"); live.href = item.live; }
          else live.classList.add("d-none");
        }
        if (git) {
          if (item.github) { git.classList.remove("d-none"); git.href = item.github; }
          else git.classList.add("d-none");
        }
        if (window.bootstrap?.Modal) new bootstrap.Modal(modalEl).show();
      });
    });
  }

  // Init después de carga
  window.addEventListener("load", () => {
    wireLangButtons();
    const saved = localStorage.getItem("lang");
    const inferred = ((navigator.language || "").toLowerCase().startsWith("es")) ? "es" : "en";
    applyI18n(saved || inferred);
    initProjects();
  });

  // Exponer util por si otros scripts lo necesitan (opcional)
  window.__i18n = { t, applyI18n, get lang() { return currentLang; } };
})();

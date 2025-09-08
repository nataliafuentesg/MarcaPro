/**
 * MarcaPro main.js — EN/ES + Projects + utilidades (Bootstrap/AOS)
 */
(function () {
  "use strict";

  /* =========================
     UTILIDADES DE UI
     ========================= */

  // .scrolled en body si el header es fixed-top
  function toggleScrolled() {
    const body = document.body;
    const header = document.querySelector('#header');
    if (!header || !header.classList.contains('fixed-top')) return;
    window.scrollY > 100 ? body.classList.add('scrolled') : body.classList.remove('scrolled');
  }
  document.addEventListener('scroll', toggleScrolled);
  window.addEventListener('load', toggleScrolled);

  // Mobile nav toggle
  const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');
  function mobileNavToggle() {
    document.body.classList.toggle('mobile-nav-active');
    if (mobileNavToggleBtn) {
      mobileNavToggleBtn.classList.toggle('bi-list');
      mobileNavToggleBtn.classList.toggle('bi-x');
    }
  }
  if (mobileNavToggleBtn) mobileNavToggleBtn.addEventListener('click', mobileNavToggle);

  // Cerrar mobile nav al hacer click en links
  document.querySelectorAll('#navmenu a').forEach(a => {
    a.addEventListener('click', () => {
      if (document.body.classList.contains('mobile-nav-active')) mobileNavToggle();
    });
  });

  // Preloader
  const preloader = document.querySelector('#preloader');
  if (preloader) window.addEventListener('load', () => preloader.remove());

  // Scroll top button
  const scrollTop = document.querySelector('.scroll-top');
  function toggleScrollTop() {
    if (!scrollTop) return;
    window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
  }
  if (scrollTop) {
    scrollTop.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
  window.addEventListener('load', toggleScrollTop);
  document.addEventListener('scroll', toggleScrollTop);

  // AOS
  function aosInit() {
    if (window.AOS) AOS.init({ duration: 600, easing: 'ease-in-out', once: true, mirror: false });
  }
  window.addEventListener('load', aosInit);

  // Corrige scroll si hay hash al cargar
  window.addEventListener('load', function () {
    if (window.location.hash) {
      const section = document.querySelector(window.location.hash);
      if (section) {
        setTimeout(() => {
          const mt = parseInt(getComputedStyle(section).scrollMarginTop || '0', 10);
          window.scrollTo({ top: section.offsetTop - mt, behavior: 'smooth' });
        }, 100);
      }
    }
  });

  // Scrollspy simple
  const navmenulinks = document.querySelectorAll('.navmenu a');
  function navmenuScrollspy() {
    const pos = window.scrollY + 200;
    navmenulinks.forEach(link => {
      if (!link.hash) return;
      const sec = document.querySelector(link.hash);
      if (!sec) return;
      if (pos >= sec.offsetTop && pos <= (sec.offsetTop + sec.offsetHeight)) {
        document.querySelectorAll('.navmenu a.active').forEach(l => l.classList.remove('active'));
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }
  window.addEventListener('load', navmenuScrollspy);
  document.addEventListener('scroll', navmenuScrollspy);

  /* =========================
     I18N (EN por defecto)
     ========================= */
  const I18N = {
    en: {
      // Nav
      'nav.home': 'Home', 'nav.about': 'About', 'nav.services': 'Services', 'nav.projects': 'Projects',
      // Hero
      'hero.badge': 'Full-stack + Growth for modern brands',
      'hero.title': 'Build. Launch. <span class="text-primary">Scale.</span>',
      'hero.subtitle': 'Custom websites & e-commerce (Spring Boot + Vue) and performance marketing for U.S. audiences. Clean design, fast delivery, measurable results.',
      'hero.ctaEmail': 'Email us', 'hero.ctaIg': 'DM on Instagram',
      'hero.badgeStripe': 'Stripe-ready', 'hero.badgeInfra': 'Netlify / Railway', 'hero.badgeAnalytics': 'Ads & Analytics',
      // About
      'about.h3': 'About Us', 'about.h2': 'Dev + Marketing under one roof',
      'about.p1': 'We ship full-stack websites and growth frameworks. Vue 3 frontends, Spring Boot backends, solid infra, and ads that actually convert. Designed for speed, clarity, and ROI.',
      'about.fullstack.title': 'Full-Stack', 'about.fullstack.desc': 'Vue 3 + Spring Boot + PostgreSQL. Clean APIs, secure auth, Stripe checkout.',
      'about.ecommerce.title': 'E-commerce', 'about.ecommerce.desc': 'Variant logic, carts, orders, webhooks, taxes, U.S. Stripe setup end-to-end.',
      'about.growth.title': 'Growth', 'about.growth.desc': 'Meta & Google Ads, pixels, events, CRO, content engines that scale.',
      'about.deploy.title': 'Deploy', 'about.deploy.desc': 'Netlify frontends, Railway/Neon DB, CI/CD, logging, uptime, SSL right.',
      // Process
      'process.h2': 'How we work', 'process.lead1': 'Simple process,', 'process.lead2': 'fast outcomes',
      'process.1.title': 'Discovery', 'process.1.desc': '30-min call: goals, audience, offers, budget.',
      'process.1.li1': 'Baseline audit', 'process.1.li2': 'Scope & timeline', 'process.1.li3': 'Tech & channels',
      'process.2.title': 'Build', 'process.2.desc': 'Design system + front/back integration.',
      'process.2.li1': 'Vue 3 UI', 'process.2.li2': 'Spring Boot API', 'process.2.li3': 'Stripe, auth, CMS',
      'process.3.title': 'Launch', 'process.3.desc': 'Netlify + Railway, SSL, domains, pixels.',
      'process.3.li1': 'Perf & QA', 'process.3.li2': 'Analytics events', 'process.3.li3': 'On-page SEO',
      'process.4.title': 'Grow', 'process.4.desc': 'Ad funnels + content engine.',
      'process.4.li1': 'A/B tests', 'process.4.li2': 'ROAS tracking', 'process.4.li3': 'Monthly sprints',
      // Projects
      'projects.h2': 'Projects', 'projects.lead1': 'Explore', 'projects.lead2': 'Client Work & Case Studies',
      // CTA
      'cta.title': 'Have a project in mind?', 'cta.copy': 'Tell us about your product, timeline, and goals. We’ll reply within 24 hours.',
      'cta.email': 'info@marcapro.agency', 'cta.ig': 'Instagram',

      /* ==== SERVICES (svc.*) ==== */
      'svc.hero.badge':'Services',
      'svc.hero.h1':'What we do',
      'svc.hero.subtitle':'Full-stack development, e-commerce, content, and growth/ads.',
      'svc.web.h2':'Web Apps',
      'svc.web.lead1':'Dashboards, portals', 'svc.web.lead2':'and APIs',
      'svc.web.front.title':'Frontend (Vue 3)',
      'svc.web.front.desc':'Design system, accessibility, performance, base SEO.',
      'svc.web.back.title':'Backend (Spring Boot)',
      'svc.web.back.desc':'REST APIs, JWT auth, roles, Stripe & third-party integrations.',
      'svc.web.learn':'Learn more',
      'svc.ecom.h2':'E-commerce',
      'svc.ecom.lead1':'Stripe, taxes', 'svc.ecom.lead2':'and shipping',
      'svc.ecom.cat.title':'Catalog & Variants', 'svc.ecom.cat.desc':'Sizes, colors, stock, collections.',
      'svc.ecom.cart.title':'Cart & Checkout', 'svc.ecom.cart.desc':'Stripe Checkout, coupons, taxes.',
      'svc.ecom.orders.title':'Orders & Webhooks', 'svc.ecom.orders.desc':'Confirmations, statuses, reports.',
      'svc.content.h2':'Content',
      'svc.content.lead1':'Reels, UGC', 'svc.content.lead2':'brand kits',
      'svc.content.video.title':'Short-form video', 'svc.content.video.desc':'Script, shoot, edit & calendar.',
      'svc.content.brand.title':'Branding', 'svc.content.brand.desc':'Brand manual, type, color.',
      'svc.content.kits.title':'Social kits', 'svc.content.kits.desc':'IG/TikTok/YouTube templates.',
      'svc.growth.h2':'Growth & Ads',
      'svc.growth.lead1':'Meta Suite', 'svc.growth.lead2':'Google/GA4',
      'svc.growth.funnel.title':'Funnels', 'svc.growth.funnel.desc':'Top/Mid/Bottom, offers & creatives.',
      'svc.growth.meta.title':'Meta Ads', 'svc.growth.meta.desc':'Targeting, events, remarketing.',
      'svc.growth.analytics.title':'Measurement', 'svc.growth.analytics.desc':'GA4 dashboards, ROAS, sprints.',

      /* ==== WEB DESIGN (webd.*) ==== */
      'webd.badge':'Web Design',
      'webd.h1':'Custom Web Design — no templates.',
      'webd.subtitle':'Pixel-perfect UI, fast by default, built with Vue 3 + Spring Boot. 100% coded for your brand — not a theme.',
      'webd.pill.custom':'100% custom code',
      'webd.pill.redesign':'Expert redesigns',
      'webd.pill.performance':'Performance & SEO',
      'webd.cta.quote':'Get a quote',
      'webd.cta.work':'See our work',
      'webd.why.h2':'Why custom-built instead of templates?',
      'webd.why.lead1':'Faster, clearer,', 'webd.why.lead2':'easier to scale',
      'webd.why.point1.title':'Performance by design',
      'webd.why.point1.desc':'No bloat. Clean components, minimal JS, Core Web Vitals in check.',
      'webd.why.point2.title':'Brand-true UI',
      'webd.why.point2.desc':'Layouts and components crafted for your tone, not a generic theme.',
      'webd.why.point3.title':'SEO-ready, analytics-ready',
      'webd.why.point3.desc':'Semantic HTML, tags, and events built-in for GA4 and Meta pixels.',
      'webd.templates.title':'Typical template issues',
      'webd.templates.li1':'Heavy plugins and CSS you don’t use.',
      'webd.templates.li2':'Limited layouts; hard to match your brand.',
      'webd.templates.li3':'Slow scores and messy SEO.',
      'webd.templates.li4':'Costly to maintain or extend.',
      'webd.redesign.h2':'Redesigns that move the needle',
      'webd.redesign.lead1':'Audit → Wireframe → ', 'webd.redesign.lead2':'UI Build → Launch',
      'webd.redesign.s1.title':'Audit', 'webd.redesign.s1.desc':'Analytics, heatmaps, SEO and content inventory.',
      'webd.redesign.s2.title':'Wireframe', 'webd.redesign.s2.desc':'Structure, messaging, and conversion points.',
      'webd.redesign.s3.title':'UI Build', 'webd.redesign.s3.desc':'Vue components + Spring Boot API, SEO & tags.',
      'webd.redesign.s4.title':'Launch & Iterate', 'webd.redesign.s4.desc':'Perf/QA, pixels, A/B tests and monthly sprints.',
      'webd.scope.h2':'Scope & Deliverables',
      'webd.scope.lead1':'Everything you need', 'webd.scope.lead2':'for a real business site',
      'webd.scope.landing.title':'Landing / Multi-page', 'webd.scope.landing.desc':'Home, About, Services, Projects, FAQ, 404.',
      'webd.scope.ecom.title':'E-commerce', 'webd.scope.ecom.desc':'Variants, cart, orders, Stripe, taxes and shipping.',
      'webd.scope.analytics.title':'SEO & Analytics', 'webd.scope.analytics.desc':'GA4/Tags, Meta pixels, events, sitemap & meta.',
      'webd.packages.h2':'Packages', 'webd.packages.lead1':'Clear scope,', 'webd.packages.lead2':'measurable outcomes',
      'webd.pkg.starter.title':'Starter', 'webd.pkg.starter.desc':'One-page or simple multi-page site.',
      'webd.pkg.starter.li1':'Custom design — no templates', 'webd.pkg.starter.li2':'Responsive, fast, SEO base', 'webd.pkg.starter.li3':'GA4 & basic events',
      'webd.pkg.growth.title':'Growth', 'webd.pkg.growth.desc':'Multi-page + blog/sections, ready for ads.',
      'webd.pkg.growth.li1':'Design system + components', 'webd.pkg.growth.li2':'Events for funnels & ROAS', 'webd.pkg.growth.li3':'Monthly sprints (optional)',
      'webd.pkg.custom.title':'Custom', 'webd.pkg.custom.desc':'E-commerce or complex features.',
      'webd.pkg.custom.li1':'Vue 3 + Spring Boot + PG', 'webd.pkg.custom.li2':'Stripe, auth, webhooks', 'webd.pkg.custom.li3':'Integrations & dashboards',
      'webd.faq.h2':'FAQ', 'webd.faq.lead1':'Straight answers', 'webd.faq.lead2':'no fluff',
      'webd.faq.q1.title':'Do you use templates?', 'webd.faq.q1.desc':'No. Everything is coded to your brand. That’s how we keep speed high and UX on point.',
      'webd.faq.q2.title':'Timelines?', 'webd.faq.q2.desc':'Starter ~2–3 weeks. Growth ~3–6 weeks. Custom varies by scope.',
      'webd.cta.title':'Ready to build or redesign?', 'webd.cta.copy':'Tell us goals, scope and timeline. We’ll reply within 24 hours.',

      'projects.filter.all':'All','projects.filter.web':'Web','projects.filter.ecommerce':'E-commerce',
      'projects.filter.marketing':'Marketing','projects.filter.branding':'Branding',
      'projects.search.placeholder':'Search projects',
      'projects.sort.az':'A → Z','projects.sort.za':'Z → A','projects.sort.new':'Newest',
      'projects.btn.case':'Case study','projects.btn.visit':'Visit','projects.btn.github':'GitHub',
      'projects.usp.code':'No templates — 100% code',
      'projects.usp.ads':'Google Ads & Meta Ads',
      'projects.usp.social':'IG · TikTok · YouTube management'
    },

    es: {
      // Nav
      'nav.home': 'Inicio', 'nav.about': 'Nosotros', 'nav.services': 'Servicios', 'nav.projects': 'Proyectos',
      // Hero
      'hero.badge': 'Full-stack + Growth para marcas modernas',
      'hero.title': 'Construye. Lanza. <span class="text-primary">Escala.</span>',
      'hero.subtitle': 'Sitios web y e-commerce (Spring Boot + Vue) y marketing de resultados para audiencias en EE. UU. Diseño limpio, entrega rápida y resultados medibles.',
      'hero.ctaEmail': 'Escríbenos', 'hero.ctaIg': 'DM en Instagram',
      'hero.badgeStripe': 'Listo para Stripe', 'hero.badgeInfra': 'Netlify / Railway', 'hero.badgeAnalytics': 'Ads & Analytics',
      // About
      'about.h3': 'Nosotros', 'about.h2': 'Dev + Marketing en un solo equipo',
      'about.p1': 'Entregamos sitios full-stack y marcos de crecimiento. Frontend en Vue 3, backend Spring Boot, infraestructura sólida y anuncios que convierten. Pensado para velocidad, claridad y ROI.',
      'about.fullstack.title': 'Full-Stack', 'about.fullstack.desc': 'Vue 3 + Spring Boot + PostgreSQL. APIs limpias, auth segura y checkout con Stripe.',
      'about.ecommerce.title': 'E-commerce', 'about.ecommerce.desc': 'Variantes, carrito, órdenes, webhooks, impuestos y Stripe para EE. UU. de punta a punta.',
      'about.growth.title': 'Growth', 'about.growth.desc': 'Meta y Google Ads, píxeles, eventos, CRO y motores de contenido escalables.',
      'about.deploy.title': 'Deploy', 'about.deploy.desc': 'Front en Netlify, back en Railway/Neon, CI/CD, logging, uptime y SSL bien hecho.',
      // Process
      'process.h2': 'Cómo trabajamos', 'process.lead1': 'Proceso simple,', 'process.lead2': 'resultados rápidos',
      'process.1.title': 'Descubrimiento', 'process.1.desc': 'Llamada de 30 min: objetivos, audiencia, oferta y presupuesto.',
      'process.1.li1': 'Auditoría base', 'process.1.li2': 'Alcance y tiempos', 'process.1.li3': 'Tech y canales',
      'process.2.title': 'Construcción', 'process.2.desc': 'Design system + integración front/back.',
      'process.2.li1': 'UI con Vue 3', 'process.2.li2': 'API Spring Boot', 'process.2.li3': 'Stripe, auth, CMS',
      'process.3.title': 'Lanzamiento', 'process.3.desc': 'Netlify + Railway, SSL, dominios y píxeles.',
      'process.3.li1': 'Performance & QA', 'process.3.li2': 'Eventos de analítica', 'process.3.li3': 'SEO on-page',
      'process.4.title': 'Crecimiento', 'process.4.desc': 'Embudos de anuncios + motor de contenido.',
      'process.4.li1': 'Tests A/B', 'process.4.li2': 'Tracking de ROAS', 'process.4.li3': 'Sprints mensuales',
      // Projects
      'projects.h2': 'Proyectos', 'projects.lead1': 'Explora', 'projects.lead2': 'Trabajos y Casos de Estudio',
      // CTA
      'cta.title': '¿Tienes un proyecto en mente?', 'cta.copy': 'Cuéntanos sobre el producto, tiempos y objetivos. Respondemos en menos de 24 horas.',
      'cta.email': 'info@marcapro.agency', 'cta.ig': 'Instagram',

      /* ==== SERVICES (svc.*) ==== */
      'svc.hero.badge':'Servicios',
      'svc.hero.h1':'Qué hacemos',
      'svc.hero.subtitle':'Desarrollo full-stack, e-commerce, contenido y growth/ads.',
      'svc.web.h2':'Web Apps',
      'svc.web.lead1':'Dashboards, portales', 'svc.web.lead2':'y APIs',
      'svc.web.front.title':'Frontend (Vue 3)',
      'svc.web.front.desc':'Design system, accesibilidad, performance y SEO base.',
      'svc.web.back.title':'Backend (Spring Boot)',
      'svc.web.back.desc':'APIs REST, auth JWT, roles, Stripe e integraciones.',
      'svc.web.learn':'Ver más',
      'svc.ecom.h2':'E-commerce',
      'svc.ecom.lead1':'Stripe, impuestos', 'svc.ecom.lead2':'y envíos',
      'svc.ecom.cat.title':'Catálogo y variantes', 'svc.ecom.cat.desc':'Tallas, colores, stock y colecciones.',
      'svc.ecom.cart.title':'Carrito y checkout', 'svc.ecom.cart.desc':'Stripe Checkout, cupones e impuestos.',
      'svc.ecom.orders.title':'Órdenes y webhooks', 'svc.ecom.orders.desc':'Confirmaciones, estados y reportes.',
      'svc.content.h2':'Contenido',
      'svc.content.lead1':'Reels, UGC', 'svc.content.lead2':'brand kits',
      'svc.content.video.title':'Video corto', 'svc.content.video.desc':'Guión, grabación, edición y calendar.',
      'svc.content.brand.title':'Branding', 'svc.content.brand.desc':'Manual de marca, tipografía y color.',
      'svc.content.kits.title':'Kits sociales', 'svc.content.kits.desc':'Plantillas IG/TikTok/YouTube.',
      'svc.growth.h2':'Growth & Ads',
      'svc.growth.lead1':'Meta Suite', 'svc.growth.lead2':'Google/GA4',
      'svc.growth.funnel.title':'Embudos', 'svc.growth.funnel.desc':'Top/Mid/Bottom, ofertas y creatividades.',
      'svc.growth.meta.title':'Meta Ads', 'svc.growth.meta.desc':'Segmentación, eventos y remarketing.',
      'svc.growth.analytics.title':'Medición', 'svc.growth.analytics.desc':'Dashboards GA4, ROAS y sprints.',

      /* ==== WEB DESIGN (webd.*) ==== */
      'webd.badge':'Diseño Web',
      'webd.h1':'Diseño web a medida — sin plantillas.',
      'webd.subtitle':'UI pixel-perfect, rápido por defecto, hecho con Vue 3 + Spring Boot. 100% código para tu marca — no un tema.',
      'webd.pill.custom':'100% código propio',
      'webd.pill.redesign':'Rediseños expertos',
      'webd.pill.performance':'Performance & SEO',
      'webd.cta.quote':'Pedir cotización',
      'webd.cta.work':'Ver trabajos',
      'webd.why.h2':'¿Por qué 100% a medida y no plantillas?',
      'webd.why.lead1':'Más rápido, claro,', 'webd.why.lead2':'y escalable',
      'webd.why.point1.title':'Performance por diseño',
      'webd.why.point1.desc':'Sin bloat. Componentes limpios, JS mínimo y Web Vitals en verde.',
      'webd.why.point2.title':'UI fiel a tu marca',
      'webd.why.point2.desc':'Layouts y componentes hechos a tu tono, no a uno genérico.',
      'webd.why.point3.title':'SEO-ready y analytics-ready',
      'webd.why.point3.desc':'HTML semántico, metatags y eventos para GA4 y píxeles de Meta.',
      'webd.templates.title':'Problemas típicos de plantillas',
      'webd.templates.li1':'Plugins y CSS pesados que no usas.',
      'webd.templates.li2':'Layouts limitados; difícil calzar con tu marca.',
      'webd.templates.li3':'Scores lentos y SEO desordenado.',
      'webd.templates.li4':'Caro de mantener o extender.',
      'webd.redesign.h2':'Rediseños que sí mueven la aguja',
      'webd.redesign.lead1':'Auditoría → Wireframe → ', 'webd.redesign.lead2':'UI Build → Lanzamiento',
      'webd.redesign.s1.title':'Auditoría', 'webd.redesign.s1.desc':'Analytics, heatmaps, SEO e inventario de contenidos.',
      'webd.redesign.s2.title':'Wireframe', 'webd.redesign.s2.desc':'Estructura, mensajes y puntos de conversión.',
      'webd.redesign.s3.title':'UI Build', 'webd.redesign.s3.desc':'Componentes Vue + API Spring Boot, SEO & tags.',
      'webd.redesign.s4.title':'Lanzar e iterar', 'webd.redesign.s4.desc':'Perf/QA, píxeles, A/B tests y sprints mensuales.',
      'webd.scope.h2':'Alcance & Entregables',
      'webd.scope.lead1':'Todo lo necesario', 'webd.scope.lead2':'para un sitio real de negocio',
      'webd.scope.landing.title':'Landing / Multipágina', 'webd.scope.landing.desc':'Home, Nosotros, Servicios, Proyectos, FAQ, 404.',
      'webd.scope.ecom.title':'E-commerce', 'webd.scope.ecom.desc':'Variantes, carrito, órdenes, Stripe, impuestos y envíos.',
      'webd.scope.analytics.title':'SEO & Analytics', 'webd.scope.analytics.desc':'GA4/Tags, píxeles de Meta, eventos, sitemap y meta.',
      'webd.packages.h2':'Paquetes', 'webd.packages.lead1':'Alcance claro,', 'webd.packages.lead2':'resultados medibles',
      'webd.pkg.starter.title':'Starter', 'webd.pkg.starter.desc':'One-page o multipágina simple.',
      'webd.pkg.starter.li1':'Diseño a medida — sin plantillas', 'webd.pkg.starter.li2':'Responsive, rápido, SEO base', 'webd.pkg.starter.li3':'GA4 y eventos básicos',
      'webd.pkg.growth.title':'Growth', 'webd.pkg.growth.desc':'Multipágina + blog/secciones, listo para pauta.',
      'webd.pkg.growth.li1':'Design system + componentes', 'webd.pkg.growth.li2':'Eventos para funnels y ROAS', 'webd.pkg.growth.li3':'Sprints mensuales (opcional)',
      'webd.pkg.custom.title':'Custom', 'webd.pkg.custom.desc':'E-commerce o features complejos.',
      'webd.pkg.custom.li1':'Vue 3 + Spring Boot + PG', 'webd.pkg.custom.li2':'Stripe, auth, webhooks', 'webd.pkg.custom.li3':'Integraciones y dashboards',
      'webd.faq.h2':'FAQ', 'webd.faq.lead1':'Respuestas directas', 'webd.faq.lead2':'sin humo',
      'webd.faq.q1.title':'¿Usan plantillas?', 'webd.faq.q1.desc':'No. Todo se codifica a tu marca. Así mantenemos velocidad y UX.',
      'webd.faq.q2.title':'¿Tiempos?', 'webd.faq.q2.desc':'Starter ~2–3 semanas. Growth ~3–6 semanas. Custom depende del alcance.',
      'webd.cta.title':'¿Listo para construir o rediseñar?', 'webd.cta.copy':'Cuéntanos objetivos, alcance y tiempos. Respondemos en 24h.',

      'projects.filter.all':'Todos','projects.filter.web':'Web','projects.filter.ecommerce':'E-commerce',
      'projects.filter.marketing':'Marketing','projects.filter.branding':'Branding',
      'projects.search.placeholder':'Buscar proyectos',
      'projects.sort.az':'A → Z','projects.sort.za':'Z → A','projects.sort.new':'Más nuevo',
      'projects.btn.case':'Caso de estudio','projects.btn.visit':'Visitar','projects.btn.github':'GitHub',
      'projects.usp.code':'Sin plantillas — 100% código',
      'projects.usp.ads':'Google Ads & Meta Ads',
      'projects.usp.social':'Gestión IG · TikTok · YouTube'
    }
  };

  function applyI18n(lang = 'en') {
    const dict = I18N[lang] || I18N.en;
    document.documentElement.setAttribute('lang', lang);

    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (dict[key] != null) el.textContent = dict[key];
    });
    document.querySelectorAll('[data-i18n-html]').forEach(el => {
      const key = el.getAttribute('data-i18n-html');
      if (dict[key] != null) el.innerHTML = dict[key];
    });

    document.querySelectorAll('.btn-lang').forEach(b => {
      b.classList.toggle('active', b.getAttribute('data-lang') === lang);
    });

    localStorage.setItem('lang', lang);
  }

  document.querySelectorAll('.btn-lang').forEach(btn => {
    btn.addEventListener('click', () => applyI18n(btn.getAttribute('data-lang')));
  });

  // Inicializa (EN por defecto)
  const savedLang = localStorage.getItem('lang');
  applyI18n(savedLang || 'en');

  /* =========================
     Projects: data + render
     ========================= */
  const PROJECTS = [
    {
      id: 1, title: 'Valkha', type: 'ecommerce',
      sector: 'E-commerce — Sportswear',
      img: 'assets/images/valkha.png',
      live: 'https://valkha.netlify.app/', github: null,
      tags: ['Vue 3', 'Spring Boot', 'Stripe', 'PostgreSQL', 'Netlify/Railway'],
      challenge: 'Launch sportswear store with variants, cart, Stripe checkout and admin.',
      solutions: [
        'Vue 3 + Pinia; product variants & gallery',
        'Spring Boot API with JWT; session/user cart',
        'Stripe Checkout (USD), webhooks & orders',
        'Netlify (front) + Railway (back) + PG'
      ],
      results: 'Fast checkout and stable base for performance campaigns.'
    },
    {
      id: 2, title: 'Tasca', type: 'web',
      sector: 'Restaurant — Spanish Tapas',
      img: 'assets/images/tasca.png',
      live: 'https://tascatapas.com', github: null,
      tags: ['Vue 3', 'Menu', 'SEO', 'Netlify'],
      challenge: 'Redesign focused on reservations and performance.',
      solutions: ['SPA routes + admin', 'Menu, drinks, events, gallery', 'Tock widget + SEO schema'],
      results: 'Higher clarity and organic CTR.'
    },
    {
      id: 3, title: 'Pintxo Pincho', type: 'web',
      sector: 'Restaurant — Pintxos & Drinks',
      img: 'assets/images/pintxo.png',
      live: 'https://pintxo-pincho.netlify.app/', github: null,
      tags: ['Vue 3', 'Railway', 'Drinks Menu', 'CORS'],
      challenge: 'Fast site for menu/promos.', solutions: ['Admin for highlights', 'Static caching + paginated endpoints', 'CORS hardening on Railway'],
      results: 'Load times <1.5s in key pages.'
    },
    {
      id: 4, title: 'Pet Station', type: 'marketing',
      sector: 'Vet Clinic — Grooming & Health',
      img: 'assets/images/petstation.png',
      live: 'https://petstationvet.com', github: null,
      tags: ['Content', 'Reels', 'Landing', 'Meta Ads'],
      challenge: 'Increase grooming & dental bookings.',
      solutions: ['Reels calendar (CapCut/Canva)', 'Landing + WhatsApp CTA', 'Event tagging & local campaigns'],
      results: 'Consistent weekly growth of paid/organic leads.'
    },
    {
      id: 5, title: 'Canbridge', type: 'branding',
      sector: 'Dog School — Therapy & Boarding',
      img: 'assets/images/canbridge.png',
      live: 'https://canbridgeguarderiacanina.com', github: null,
      tags: ['Brand Kit', 'Website', 'UGC', 'Community'],
      challenge: 'Unify brand & fill daycare/therapy slots.',
      solutions: ['Brand manual (colors/fonts/voice)', 'Service landing + testimonials', 'Pixar-like UGC for awareness'],
      results: 'Higher recall and WhatsApp/IG inquiries.'
    },
    {
      id: 6, title: 'Eventex', type: 'web',
      sector: 'Events & Uniforms',
      img: 'assets/images/eventex.png',
      live: 'https://www.eventex.com.co', github: null,
      tags: ['Static site', 'SEO', 'Lead capture'],
      challenge: 'Renew presence & capture with new domain.',
      solutions: ['SEO structure, sitemap, metatags', 'Dotaciones & events sections', 'CTAs to email/IG while backend is built'],
      results: 'Better indexing and base for campaigns.'
    }
  ];

  function initProjects() {
    const grid = document.getElementById('projectsGrid');
    const filters = document.getElementById('projectsFilters');
    const logosRow = document.getElementById('logosRow');
    if (!grid) return;

    function render(list) {
      grid.innerHTML = '';
      const frag = document.createDocumentFragment();
      list.forEach(p => {
        const col = document.createElement('div');
        col.className = 'col-sm-6 col-lg-4';
        col.innerHTML = `
          <div class="project-card">
            <img class="project-thumb" src="${p.img}" alt="${p.title}">
            <div class="project-body">
              <h5 class="project-title">${p.title}</h5>
              <div class="small text-muted">${p.sector}</div>
              <div class="project-tags mt-1">
                ${p.tags.slice(0,3).map(t=>`<span class="project-tag">${t}</span>`).join('')}
              </div>
              <div class="project-actions">
                <button class="btn btn-sm btn-outline-dark" data-case="${p.id}">
                  <i class="bi bi-journal-text me-1"></i> Case study
                </button>
                ${p.live ? `<a class="btn btn-sm btn-primary" href="${p.live}" target="_blank" rel="noopener">
                  <i class="bi bi-globe me-1"></i> Visit
                </a>` : ''}
                ${p.github ? `<a class="btn btn-sm btn-outline-secondary" href="${p.github}" target="_blank" rel="noopener">
                  <i class="bi bi-github me-1"></i> GitHub
                </a>` : ''}
              </div>
            </div>
          </div>`;
        frag.appendChild(col);
      });
      grid.appendChild(frag);

      grid.querySelectorAll('[data-case]').forEach(btn => {
        btn.addEventListener('click', e => {
          const id = Number(e.currentTarget.getAttribute('data-case'));
          const item = PROJECTS.find(x => x.id === id);
          if (item) openCaseStudy(item);
        });
      });
    }

    if (filters) {
      filters.querySelectorAll('.nav-link').forEach(btn => {
        btn.addEventListener('click', () => {
          filters.querySelectorAll('.nav-link').forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
          const f = btn.getAttribute('data-filter');
          const list = f === 'all' ? PROJECTS : PROJECTS.filter(p => p.type === f);
          render(list);
        });
      });
    }

    function openCaseStudy(p) {
      const modalEl = document.getElementById('caseStudyModal');
      if (!modalEl) return;
      modalEl.querySelector('#caseStudyTitle').textContent = p.title;
      modalEl.querySelector('#caseStudyChallenge').textContent = p.challenge;
      modalEl.querySelector('#caseStudySolutions').innerHTML = p.solutions.map(s => `<li>${s}</li>`).join('');
      const res = modalEl.querySelector('#caseStudyResults');
      res.textContent = p.results; res.classList.remove('d-none');
      const live = modalEl.querySelector('#caseStudyLive');
      const git = modalEl.querySelector('#caseStudyGithub');
      if (p.live) { live.classList.remove('d-none'); live.href = p.live; } else { live.classList.add('d-none'); }
      if (p.github) { git.classList.remove('d-none'); git.href = p.github; } else { git.classList.add('d-none'); }
      modalEl.querySelector('#caseStudyTags').innerHTML = p.tags.map(t => `<span class="badge rounded-pill text-bg-light border">${t}</span>`).join('');
      const bsModal = new bootstrap.Modal(modalEl);
      bsModal.show();
    }

    if (logosRow) {
      const logos = [
        'assets/images/logos/valkha.svg',
        'assets/images/logos/tasca.svg',
        'assets/images/logos/pintxo.svg',
        'assets/images/logos/petstation.svg',
        'assets/images/logos/canbridge.svg',
        'assets/images/logos/eventex.svg'
      ];
      logosRow.innerHTML = logos.map(src => `<img src="${src}" alt="" height="26" />`).join('');
    }

    render(PROJECTS);
  }

  window.addEventListener('load', initProjects);
})();

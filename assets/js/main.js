/**
 * MarcaPro main.js — EN/ES + Projects + utilidades (Bootstrap/AOS)
 */

(function () {
  "use strict";

  /* =========================
     UTILIDADES DE UI (mantener)
     ========================= */

  // .scrolled en body si el header es fixed-top
  function toggleScrolled() {
    const selectBody = document.querySelector('body');
    const selectHeader = document.querySelector('#header');
    if (!selectHeader) return;
    if (!selectHeader.classList.contains('fixed-top')) return;
    window.scrollY > 100 ? selectBody.classList.add('scrolled') : selectBody.classList.remove('scrolled');
  }
  document.addEventListener('scroll', toggleScrolled);
  window.addEventListener('load', toggleScrolled);

  // Mobile nav toggle
  const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');
  function mobileNavToggle() {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    mobileNavToggleBtn.classList.toggle('bi-list');
    mobileNavToggleBtn.classList.toggle('bi-x');
  }
  if (mobileNavToggleBtn) mobileNavToggleBtn.addEventListener('click', mobileNavToggle);

  // Cerrar mobile nav al hacer click en links del nav
  document.querySelectorAll('#navmenu a').forEach(a => {
    a.addEventListener('click', () => {
      if (document.querySelector('.mobile-nav-active')) mobileNavToggle();
    });
  });

  // Preloader
  const preloader = document.querySelector('#preloader');
  if (preloader) {
    window.addEventListener('load', () => preloader.remove());
  }

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
    if (window.AOS) {
      AOS.init({ duration: 600, easing: 'ease-in-out', once: true, mirror: false });
    }
  }
  window.addEventListener('load', aosInit);

  // Fijar posición correcta si hay hash al cargar
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

  // Scrollspy manual
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
     I18N SIMPLE (EN por defecto)
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
      'cta.email': 'info@marcapro.agency', 'cta.ig': 'Instagram'
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
      'cta.email': 'info@marcapro.agency', 'cta.ig': 'Instagram'
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

  // Inicializa en EN por defecto (si no hay preferencia guardada)
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
      live: 'https://valkhasport.com', github: null,
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
      live: 'https://pintxopincho.com', github: null,
      tags: ['Vue 3', 'Railway', 'Drinks Menu', 'CORS'],
      challenge: 'Fast site for menu/promos.', solutions: ['Admin for highlights', 'Static caching + paginated endpoints', 'CORS hardening on Railway'],
      results: 'Load times <1.5s in key pages.'
    },
    {
      id: 4, title: 'Pet Station', type: 'web',
      sector: 'Vet Clinic — Grooming & Health',
      img: 'assets/images/petstation.png',
      live: 'https://petstationvet.com', github: null,
      tags: ['Content', 'Reels', 'Landing', 'Meta Ads'],
      challenge: 'Increase grooming & dental bookings.',
      solutions: ['Reels calendar (CapCut/Canva)', 'Landing + WhatsApp CTA', 'Event tagging & local campaigns'],
      results: 'Consistent weekly growth of paid/organic leads.'
    },
    {
      id: 5, title: 'Canbridge', type: 'web',
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


  /* =========================
   Projects data + rendering
   ========================= */

const PROJECTS = [
  {
    id: 1,
    title: 'Valkha',
    type: 'ecommerce',       // para filtros: web | ecommerce | marketing | branding
    sector: 'E-commerce — Sportswear',
    img: 'assets/images/valkha.png',   // reemplaza por tu ruta real
    live: 'https://valkhasport.com',
    github: null,
    tags: ['Vue 3', 'Spring Boot', 'Stripe', 'PostgreSQL', 'Netlify/Railway'],
    challenge: 'Lanzar tienda de ropa deportiva con variantes (talla/color), carrito, checkout en Stripe y panel admin.',
    solutions: [
      'Frontend en Vue 3 + Pinia, sliders y página de producto con variantes',
      'API Spring Boot segura con JWT y carrito por sesión/usuario',
      'Stripe Checkout (USD), webhooks y creación de órdenes',
      'Despliegue: Netlify (front) + Railway (back) + NeonDB/PG'
    ],
    results: 'Checkout estable y rápido, base para campañas de conversión (Meta/Google).'
  },
  {
    id: 2,
    title: 'Tasca',
    type: 'web',
    sector: 'Restaurant — Spanish Tapas',
    img: 'assets/images/tasca.png',
    live: 'https://tascatapas.com', // si cambia, pon la URL correcta o deja null
    github: null,
    tags: ['Vue 3', 'Menu CMS', 'SEO', 'Netlify'],
    challenge: 'Rediseño con foco en reservas y performance.',
    solutions: [
      'Arquitectura SPA con rutas públicas y admin',
      'Secciones: menú, drinks, eventos, galería',
      'Integración de widget de reservas (Tock) y schema SEO'
    ],
    results: 'Mejor CTR en orgánico y claridad de la carta.'
  },
  {
    id: 3,
    title: 'Pintxo Pincho',
    type: 'web',
    sector: 'Restaurant — Pintxos & Drinks',
    img: 'assets/images/pintxo.png',
    live: 'https://pintxopincho.com', // ajusta si tienes otra
    github: null,
    tags: ['Vue 3', 'Railway', 'Drinks Menu', 'CORS hardening'],
    challenge: 'Sitio veloz para cartas de comida/bebida y promos.',
    solutions: [
      'Ruteo claro y admin para ofertas destacadas',
      'Caching estático + endpoints paginados',
      'Resolución de CORS en entorno Railway'
    ],
    results: 'Tiempo de carga <1.5s en páginas clave.'
  },
  {
    id: 4,
    title: 'Pet Station',
    type: 'marketing',
    sector: 'Vet Clinic — Grooming & Health',
    img: 'assets/images/petstation.png',
    live: 'https://petstationvet.com', // si no existe, pon null
    github: null,
    tags: ['Content', 'Reels', 'Landing', 'Meta Ads'],
    challenge: 'Aumentar citas de grooming y odontología veterinaria.',
    solutions: [
      'Calendario de reels y creatividades (CapCut/Canva)',
      'Landing con formularios y WhatsApp CTA',
      'Etiquetado de eventos y campañas locales'
    ],
    results: 'Incremento semanal sostenido de leads orgánicos/pagos.'
  },
  {
    id: 5,
    title: 'Canbridge',
    type: 'branding',
    sector: 'Dog School — Therapy & Boarding',
    img: 'assets/images/canbridge.png',
    live: 'https://canbridgeguarderiacanina.com', // si no existe, pon null
    github: null,
    tags: ['Brand Kit', 'Website', 'UGC', 'Community'],
    challenge: 'Unificar marca y captar cupos para guardería y terapia.',
    solutions: [
      'Manual de marca (colores, tipografías, voz)',
      'Landing con secciones de servicios y testimonios',
      'UGC estilo “Pixar-like” para awareness'
    ],
    results: 'Mayor recordación y consultas por WhatsApp/IG.'
  },
  {
    id: 6,
    title: 'Eventex',
    type: 'web',
    sector: 'Events & Uniforms',
    img: 'assets/images/eventex.png',
    live: 'https://www.eventex.com.co',
    github: null,
    tags: ['Static site', 'SEO', 'Lead capture'],
    challenge: 'Renovar presencia y captación con dominio nuevo.',
    solutions: [
      'Estructura SEO, sitemap, metatags',
      'Sección de dotaciones y eventos',
      'CTAs a correo/IG mientras se implementa backend'
    ],
    results: 'Mejor indexación y base para campañas.'
  }
];

(function initProjects(){
  const grid = document.getElementById('projectsGrid');
  const filters = document.getElementById('projectsFilters');
  const logosRow = document.getElementById('logosRow');

  if (!grid) return;

  // Render grid
  function render(list){
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

    // Bind modal buttons
    grid.querySelectorAll('[data-case]').forEach(btn=>{
      btn.addEventListener('click', e=>{
        const id = Number(e.currentTarget.getAttribute('data-case'));
        const item = PROJECTS.find(x=>x.id===id);
        if (item) openCaseStudy(item);
      });
    });
  }

  // Filter logic
  if (filters){
    filters.querySelectorAll('.nav-link').forEach(btn=>{
      btn.addEventListener('click', ()=>{
        filters.querySelectorAll('.nav-link').forEach(b=>b.classList.remove('active'));
        btn.classList.add('active');
        const f = btn.getAttribute('data-filter');
        const list = f==='all' ? PROJECTS : PROJECTS.filter(p=>p.type===f);
        render(list);
      });
    });
  }

  // Case study modal
  function openCaseStudy(p){
    const modalEl = document.getElementById('caseStudyModal');
    if (!modalEl) return;
    modalEl.querySelector('#caseStudyTitle').textContent = p.title;
    modalEl.querySelector('#caseStudyChallenge').textContent = p.challenge;
    const ul = modalEl.querySelector('#caseStudySolutions');
    ul.innerHTML = p.solutions.map(s=>`<li>${s}</li>`).join('');
    const res = modalEl.querySelector('#caseStudyResults');
    res.textContent = p.results;
    res.classList.remove('d-none');
    const live = modalEl.querySelector('#caseStudyLive');
    const git = modalEl.querySelector('#caseStudyGithub');
    if (p.live) { live.classList.remove('d-none'); live.href = p.live; }
    else { live.classList.add('d-none'); }
    if (p.github) { git.classList.remove('d-none'); git.href = p.github; }
    else { git.classList.add('d-none'); }

    const tags = modalEl.querySelector('#caseStudyTags');
    tags.innerHTML = p.tags.map(t=>`<span class="badge rounded-pill text-bg-light border">${t}</span>`).join('');

    const bsModal = new bootstrap.Modal(modalEl);
    bsModal.show();
  }

  // “Trusted by” logos (opcional, pon tus rutas reales o quita este bloque)
  if (logosRow){
    const logos = [
      'assets/images/logos/valkha.svg',
      'assets/images/logos/tasca.svg',
      'assets/images/logos/pintxo.svg',
      'assets/images/logos/petstation.svg',
      'assets/images/logos/canbridge.svg',
      'assets/images/logos/eventex.svg',
    ];
    logosRow.innerHTML = logos.map(src=>`<img src="${src}" alt="" height="26" />`).join('');
  }

  // Initial render
  render(PROJECTS);
})();

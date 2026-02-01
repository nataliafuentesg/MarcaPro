// /assets/js/projects.es.js
(function () {
  const projects = [
    {
      id: 'cushion',
      name: 'Cushion',
      subtitle: 'E-commerce de esmeraldas de lujo',
      year: 2026,
      categories: ['web', 'ecommerce', 'branding'],
      thumb: '/assets/images/cushion.png',
      description: 'Tienda exclusiva de joyas con experiencia de compra premium y canal de venta personalizado por WhatsApp.',
      challenge: 'Crear una experiencia digital de lujo para esmeraldas donde los clientes puedan personalizar piezas y coordinar compras sin pasarela de pago tradicional.',
      solutions: [
        'Frontend en Vite + Vue 3 optimizado para fotografía de alta resolución.',
        'Backend en Spring Boot para la gestión de productos, inventario y personalización.',
        'Integración directa con WhatsApp para cierre de ventas, tallaje y logística.',
        'Despliegue de alto rendimiento en Cloudflare (Front) y Hetzner (Back).'
      ],
      results: 'Una tienda con estética premium que conecta el catálogo digital con una asesoría de lujo personalizada.',
      tags: ['Vite', 'Vue 3', 'Spring Boot', 'WhatsApp Commerce', 'Hetzner'],
      liveUrl: 'https://esmeraldas-cushion-ecommerce.pages.dev/',
      githubUrl: null
    },
    {
      id: 'petstation',
      name: 'Pet Station',
      subtitle: 'Pet shop y gestión de mascotas',
      categories: ['web', 'ecommerce'],
      year: 2026,
      thumb: '/assets/images/petstation.png',
      description: 'E-commerce con perfiles de mascotas y filtrado inteligente de productos.',
      challenge: 'Construir una experiencia de compra donde los usuarios gestionen sus mascotas y el sitio filtre productos específicos para ellas.',
      solutions: [
        'Panel de usuario para perfiles de mascotas (raza, edad, historial).',
        'Sistema de filtrado dinámico que recomienda productos según la mascota seleccionada.',
        'Carrito de compras integrado con redirección a WhatsApp para coordinar envíos.',
        'Backend robusto en Spring Boot para la gestión de usuarios y datos de mascotas.'
      ],
      results: 'Aumento en la retención de usuarios gracias a la personalización y un flujo de compra ágil vía chat.',
      tags: ['Vue 3', 'Spring Boot', 'Mascotas', 'Venta por WhatsApp', 'Cloudflare'],
      liveUrl: 'https://pet-station-frontend.pages.dev/',
      githubUrl: null
    },
    {
      id: 'lcs',
      name: 'Luis Carlos Segura',
      subtitle: 'Página web — campaña política',
      year: 2024,
      categories: ['web'],
      thumb: '/assets/images/luis-carlos-segura-rubiano.png',
      tags: ['Vue 3', 'Spring Boot', 'PostgreSQL', 'API Newsletter', 'Cloudflare/Hetzner'],
      liveUrl: 'https://luiscarlossegura.com',
      githubUrl: '',
      challenge: 'Crear una página web moderna, rápida y clara para un líder público, con SEO sólido e integración de newsletter.',
      solutions: [
        'Frontend en Vue 3 con diseño modular, animaciones y UX responsive.',
        'Backend en Spring Boot para newsletter, formularios y endpoints seguros.',
        'SEO completo: Open Graph, meta tags, sitemap, schema y carga optimizada.',
        'Deploy en Cloudflare (frontend) y Hetzner (backend) con SSL y CI/CD.'
      ],
      results: 'Un sitio profesional y rápido que mejora la visibilidad, facilita la comunicación y capta leads de manera efectiva.',
    },

    {
      id: 'tasca',
      name: 'Tasca Restaurant',
      subtitle: 'Restaurante de tapas en Boston',
      categories: ['web', 'ecommerce', 'marketing', 'branding'],
      year: 2024,
      thumb: '/assets/images/tasca.png',
      description: 'Sitio web completo con backend para gestión de ofertas, menú y lista de vinos, más manejo de redes sociales y pauta.',
      challenge: 'Modernizar la presencia digital de un restaurante tradicional, integrando reservas externas, menú actualizado y campañas de temporada sin depender de plantillas.',
      solutions: [
        'Diseño y desarrollo del sitio completo en Vue 3 + backend en Spring Boot.',
        'Módulo interno para gestionar ofertas, menú, bebidas y listados de vinos.',
        'Integración con Tock para reservas y tracking de eventos en GA4.',
        'Gestión de redes sociales (Meta Suite) y campañas de Meta Ads orientadas a reservas.'
      ],
      results: 'Incremento en clics hacia reservas y tráfico orgánico medible desde Google y Meta. Infraestructura lista para escalar campañas de temporada.',
      tags: ['Vue 3', 'Spring Boot', 'Restaurante', 'Reservas', 'Meta Ads', 'GA4'],
      liveUrl: 'https://tascarestapas.com/',
      githubUrl: null
    },
    {
      id: 'pintxo',
      name: 'Pintxo Pincho',
      subtitle: 'Tapas bar & wine',
      categories: ['web', 'ecommerce', 'marketing', 'branding'],
      year: 2024,
      thumb: '/assets/images/pintxo.png',
      description: 'Página web completa con backend para menú, bebidas y ofertas, más campañas de redes y anuncios.',
      challenge: 'Lanzar un nuevo concepto de tapas con identidad clara, sitio optimizado para móviles y capacidad de comunicar promociones de forma dinámica.',
      solutions: [
        'Diseño de la web en Vue 3 con foco en menús claros y fotografía.',
        'Backend en Spring Boot para gestionar cartas, ofertas y eventos especiales.',
        'Integración de píxel de Meta y GA4 para medir campañas.',
        'Gestión de redes sociales (contenido, carruseles y reels) alineados a la marca.'
      ],
      results: 'Lanzamiento del sitio con base SEO sólida y estructura lista para campañas de performance en Meta y Google.',
      tags: ['Vue 3', 'Spring Boot', 'Restaurante', 'Menú digital', 'Meta Ads'],
      liveUrl: 'https://pintxopincho.com/',
      githubUrl: null
    },
    {
      id: 'petstation',
      name: 'Pet Station',
      subtitle: 'Clínica veterinaria & peluquería',
      categories: ['web', 'marketing', 'branding'],
      year: 2023,
      thumb: '/assets/images/petstation.png',
      description: 'Sitio web completo con sistema de reservas usando Google Apps Script, más contenido y ads.',
      challenge: 'Centralizar reservas de servicios (peluquería, consulta, hotel) y mejorar la comunicación con clientes en Instagram y otros canales.',
      solutions: [
        'Diseño completo del sitio web con enfoque en servicios y testimonios.',
        'Implementación de formularios de reserva conectados a Google Sheets mediante Apps Script.',
        'Configuración de Meta Suite y campañas orientadas a mensajes y reservas.',
        'Producción de contenido (reels, piezas educativas y de entretenimiento) para fortalecer la marca.'
      ],
      results: 'Flujo de reservas más claro y trazable, con incremento en mensajes y citas agendadas desde redes sociales.',
      tags: ['Web corporativa', 'Apps Script', 'Reservas', 'Veterinaria', 'Meta Ads', 'Reels'],
      liveUrl: 'https://petstationvet.com/',
      githubUrl: null
    },
    {
      id: 'canbridge',
      name: 'Canbridge',
      subtitle: 'Colegio canino & terapias',
      categories: ['web', 'marketing', 'branding'],
      year: 2023,
      thumb: '/assets/images/canbridge.png',
      description: 'Diseño completo del sitio web y manejo de redes con contenido educativo y emocional.',
      challenge: 'Comunicar un servicio especializado (guardería, terapia y educación canina) de forma cercana, profesional y entendible para tutores.',
      solutions: [
        'Diseño del sitio web con secciones claras para servicios, testimonios y proceso de admisión.',
        'Integración de formularios de contacto y embudos simples hacia WhatsApp.',
        'Calendario de contenido con reels educativos, tips y piezas emocionales.',
        'Gestión de Meta Ads para alcance local en la zona de influencia.'
      ],
      results: 'Mayor claridad en la propuesta de valor y aumento en consultas entrantes desde la web e Instagram.',
      tags: ['Web corporativa', 'Colegio canino', 'Reels', 'Meta Ads', 'Contenido educativo'],
      liveUrl: 'https://canbridgeguarderiacanina.com/',
      githubUrl: null
    },
    {
      id: 'valkha',
      name: 'Valkha',
      subtitle: 'E-commerce fashion (EE. UU.)',
      categories: ['web', 'ecommerce', 'branding'],
      year: 2024,
      thumb: '/assets/images/valkha.png',
      description: 'E-commerce full-stack con gestión de variantes, carrito, checkout con Stripe y panel de usuario.',
      challenge: 'Construir una tienda de moda lista para operar en EE. UU. con variantes, carrito persistente y checkout seguro, sin depender de plataformas cerradas.',
      solutions: [
        'Frontend en Vue 3 con páginas de colecciones, detalle de producto y carrito lateral.',
        'Backend en Spring Boot con gestión de productos, variantes, direcciones y órdenes.',
        'Integración de Stripe Checkout, webhooks para órdenes y soporte para impuestos y envíos.',
        'Arquitectura preparada para campañas de performance y tracking de eventos.'
      ],
      results: 'Base sólida para un e-commerce escalable orientado a mercado estadounidense, listo para conectar campañas de Ads.',
      tags: ['Vue 3', 'Spring Boot', 'Stripe', 'E-commerce', 'PostgreSQL'],
      liveUrl: 'https://valkhasport.com/', // ajusta si cambia
      githubUrl: 'https://github.com/nataliaf1412/valkha-backend' // ejemplo; ajusta si quieres
    },
    {
      id: 'corporate-site',
      name: 'Sitio corporativo',
      subtitle: 'Página institucional para empresa de operaciones',
      categories: ['web', 'branding'],
      year: 2022,
      thumb: '/assets/images/B2B-Template.png',
      description: 'Página corporativa a medida para comunicar servicios, experiencia y mapa de operaciones de la empresa.',
      challenge: 'Presentar los servicios y la cobertura geográfica de una empresa de operaciones de forma clara, sin usar plantillas genéricas.',
      solutions: [
        'Diseño de página corporativa con secciones de servicios, experiencia, clientes y mapa de operación.',
        'Implementación de mapa visual donde se muestran las ciudades y zonas donde ha operado la empresa.',
        'Optimización básica de performance y SEO on-page para mejorar visibilidad.',
        'Estructura adaptable para futuras secciones (blog, casos de estudio, etc.).'
      ],
      results: 'Mejor presentación institucional y comunicación clara del alcance operativo de la empresa.',
      tags: ['Página corporativa', 'Mapa de operaciones', 'SEO on-page'],
      liveUrl: 'https://corporate-template.pages.dev/',
      githubUrl: null
    }
  ];

  // ---- DOM refs ----
  const gridEl = document.getElementById('projectsGrid');
  const filtersEl = document.getElementById('projectsFilters');
  const searchEl = document.getElementById('projectsSearch');
  const sortEl = document.getElementById('projectsSort');

  const modalEl = document.getElementById('caseStudyModal');
  const modalTitle = document.getElementById('caseStudyTitle');
  const modalChallenge = document.getElementById('caseStudyChallenge');
  const modalSolutions = document.getElementById('caseStudySolutions');
  const modalResultsWrap = document.getElementById('caseStudyResultsWrap');
  const modalResults = document.getElementById('caseStudyResults');
  const modalTags = document.getElementById('caseStudyTags');
  const modalLive = document.getElementById('caseStudyLive');
  const modalGithub = document.getElementById('caseStudyGithub');

  if (!gridEl) return; // por si se carga en otra página por error

  let state = {
    filter: 'all',
    search: '',
    sort: 'new'
  };

  function normalize(str) {
    return (str || '').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  }

  function getFilteredProjects() {
    return projects
      .filter(p => {
        if (state.filter !== 'all' && !p.categories.includes(state.filter)) return false;

        const q = normalize(state.search);
        if (!q) return true;

        const haystack = [
          p.name,
          p.subtitle,
          p.description,
          p.challenge,
          ...(p.tags || [])
        ].join(' ');
        return normalize(haystack).includes(q);
      })
      .sort((a, b) => {
        switch (state.sort) {
          case 'az':
            return a.name.localeCompare(b.name);
          case 'za':
            return b.name.localeCompare(a.name);
          case 'new':
            return (b.year || 0) - (a.year || 0);
          case 'old':
            return (a.year || 0) - (b.year || 0);
          default:
            return 0;
        }
      });
  }

  function createTagLabel(cat) {
    switch (cat) {
      case 'web': return 'Web';
      case 'ecommerce': return 'E-commerce';
      case 'marketing': return 'Marketing';
      case 'branding': return 'Branding';
      default: return cat;
    }
  }

  function renderProjects() {
    const list = getFilteredProjects();
    gridEl.innerHTML = '';

    if (!list.length) {
      gridEl.innerHTML = `
        <div class="col-12">
          <div class="alert alert-light border">
            No encontramos proyectos con esos filtros. Prueba ajustar la categoría o la búsqueda.
          </div>
        </div>`;
      return;
    }

    list.forEach(p => {
      const col = document.createElement('div');
      col.className = 'col-12 col-md-6 col-lg-4';

      const tagsHtml = (p.categories || [])
        .map(c => `<span class="project-tag">${createTagLabel(c)}</span>`)
        .join(' ');

      const extraTagsHtml = (p.tags || [])
        .map(t => `<span class="project-tag">${t}</span>`)
        .join(' ');

      col.innerHTML = `
        <article class="project-card h-100 d-flex flex-column">
          <img src="${p.thumb}" alt="${p.name}" class="project-thumb" loading="lazy">
          <div class="project-body d-flex flex-column flex-grow-1">
            <h3 class="project-title h5 mb-1">${p.name}</h3>
            ${p.subtitle ? `<p class="small text-muted mb-2">${p.subtitle}</p>` : ''}
            <p class="mb-2 small">${p.description}</p>
            <div class="project-tags mb-2">
              ${tagsHtml}
              ${extraTagsHtml}
            </div>
            <div class="project-actions mt-auto d-flex flex-wrap gap-2">
              <button class="btn btn-sm btn-outline-dark" data-project-id="${p.id}" data-action="case">
                Ver caso
              </button>
              ${p.liveUrl ? `
              <a href="${p.liveUrl}" target="_blank" rel="noopener" class="btn btn-sm btn-outline-secondary">
                Ver sitio
              </a>` : ''}
            </div>
          </div>
        </article>
      `;
      gridEl.appendChild(col);
    });
  }

  function openModal(projectId) {
    const p = projects.find(x => x.id === projectId);
    if (!p) return;

    modalTitle.textContent = p.name;
    modalChallenge.textContent = p.challenge || '';

    modalSolutions.innerHTML = '';
    (p.solutions || []).forEach(sol => {
      const li = document.createElement('li');
      li.textContent = sol;
      modalSolutions.appendChild(li);
    });

    if (p.results) {
      modalResultsWrap.style.display = '';
      modalResults.textContent = p.results;
    } else {
      modalResultsWrap.style.display = 'none';
      modalResults.textContent = '';
    }

    modalTags.innerHTML = '';
    (p.tags || []).forEach(tag => {
      const span = document.createElement('span');
      span.className = 'badge rounded-pill text-bg-light';
      span.textContent = tag;
      modalTags.appendChild(span);
    });

    if (p.liveUrl) {
      modalLive.classList.remove('d-none');
      modalLive.href = p.liveUrl;
    } else {
      modalLive.classList.add('d-none');
      modalLive.removeAttribute('href');
    }

    if (p.githubUrl) {
      modalGithub.classList.remove('d-none');
      modalGithub.href = p.githubUrl;
    } else {
      modalGithub.classList.add('d-none');
      modalGithub.removeAttribute('href');
    }

    const bsModal = new bootstrap.Modal(modalEl);
    bsModal.show();
  }

  // ---- Eventos ----
  if (filtersEl) {
    filtersEl.addEventListener('click', e => {
      const btn = e.target.closest('[data-filter]');
      if (!btn) return;

      const filter = btn.getAttribute('data-filter');
      state.filter = filter;

      filtersEl.querySelectorAll('.nav-link').forEach(el => el.classList.remove('active'));
      btn.classList.add('active');

      renderProjects();
    });
  }

  if (searchEl) {
    searchEl.addEventListener('input', e => {
      state.search = e.target.value || '';
      renderProjects();
    });
  }

  if (sortEl) {
    sortEl.addEventListener('change', e => {
      state.sort = e.target.value || 'new';
      renderProjects();
    });
  }

  gridEl.addEventListener('click', e => {
    const btn = e.target.closest('[data-action="case"]');
    if (!btn) return;
    const id = btn.getAttribute('data-project-id');
    openModal(id);
  });

  // Init
  renderProjects();
})();

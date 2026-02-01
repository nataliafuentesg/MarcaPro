// home.es.js — Proyectos destacados en el index (ES)

document.addEventListener('DOMContentLoaded', () => {
  const projects = [
    {
      id: 'cushion',
      name: 'Cushion',
      subtitle: 'Joyas y Esmeraldas',
      year: 2026,
      categories: ['ecommerce', 'web', 'branding'],
      thumbnail: '/assets/images/cushion.png',
      tags: ['Vite', 'Vue 3', 'Spring Boot', 'WhatsApp Sales'],
      liveUrl: 'https://esmeraldas-cushion-ecommerce.pages.dev/',
      githubUrl: '',
      challenge: 'Crear una experiencia de lujo para la venta de esmeraldas, permitiendo personalización y contacto directo sin pasarelas de pago rígidas.',
      solutions: [
        'Desarrollo con Vite y Vue 3 centrado en la exhibición de producto de alta gama.',
        'Flujo de compra personalizado: carrito de compras que dirige a WhatsApp para coordinar detalles y envíos.',
        'Arquitectura robusta con Spring Boot desplegada en Hetzner y Cloudflare.',
      ],
      results: 'Una tienda premium que humaniza la venta de joyas, facilitando la personalización y la confianza del cliente.',
    },
    {
      id: 'pet-station',
      name: 'Pet Station',
      subtitle: 'E-commerce & Pet Health',
      year: 2026,
      categories: ['ecommerce', 'web'],
      thumbnail: '/assets/images/pet-station.png',
      tags: ['Vue 3', 'Spring Boot', 'User Dashboard', 'WhatsApp'],
      liveUrl: 'https://pet-station-frontend.pages.dev/',
      githubUrl: '',
      challenge: 'Evolucionar de un sitio de servicios a un e-commerce con gestión de mascotas y filtrado inteligente de productos.',
      solutions: [
        'Interfaz de usuario con perfiles personalizados para gestionar los datos de cada mascota.',
        'Sistema de filtrado dinámico: la tienda recomienda productos según la especie y necesidades de la mascota del perfil.',
        'Cierre de venta por WhatsApp para una gestión logística más flexible.',
      ],
      results: 'Aumento en la recurrencia de usuarios gracias a la personalización del perfil y mayor agilidad en pedidos.',
    },
    {
      id: 'lcs',
      name: 'Luis Carlos Segura',
      subtitle: 'Página web — campaña política',
      year: 2024,
      categories: ['web'],
      thumbnail: '/assets/images/luis-carlos-segura-rubiano.png',
      tags: ['Vue 3', 'Spring Boot', 'PostgreSQL', 'API Newsletter', 'Cloudflare/Hetzner'],
      liveUrl: 'https://luiscarlossegura.com',
      githubUrl: '',
      challenge: 'Crear una página web moderna, rápida y clara para un líder público, con SEO sólido e integración de newsletter.',
      solutions: [
        'Frontend en Vue 3 con diseño modular, animaciones y UX responsive.',
        'Backend en Spring Boot para newsletter, formularios y control seguro de endpoints.',
        'SEO completo: Open Graph, meta tags, sitemap, schema y carga rápida.',
        'Deploy en Cloudflare (frontend) y Hetzner (backend) con SSL y CI/CD.',
      ],
      results: 'Un sitio profesional y rápido que mejora la visibilidad, facilita la comunicación y capta leads de manera efectiva.',
    },

    {
      id: 'valkha',
      name: 'Valkha',
      subtitle: 'E-commerce de moda',
      year: 2024,
      categories: ['ecommerce', 'web'],
      thumbnail: '/assets/images/valkha.png',
      tags: ['Vue 3', 'Spring Boot', 'Stripe', 'E-commerce'],
      liveUrl: 'https://valkha.com',
      githubUrl: '',
      challenge: 'Lanzar un e-commerce de moda para EE. UU. con catálogo flexible de tallas y colores, impuestos configurables y pagos seguros.',
      solutions: [
        'Frontend en Vue 3 con páginas de colección, detalle de producto y carrito lateral.',
        'Backend en Spring Boot con manejo de variantes, stock, órdenes y webhook de Stripe.',
        'Stripe Checkout para pagos en USD, cupones, impuestos y shipping dinámico.'
      ],
      results: 'Checkout funcional en pruebas, carrito estable y base técnica lista para escalar en campañas de performance.',
    },
    {
      id: 'tasca',
      name: 'Tasca',
      subtitle: 'Restaurante de tapas — Boston',
      year: 2024,
      categories: ['web', 'marketing', 'branding'],
      thumbnail: '/assets/images/tasca.png',
      tags: ['Web', 'Growth', 'Meta Ads', 'GA4'],
      liveUrl: 'https://tascarestaurant.com',
      githubUrl: '',
      challenge: 'Actualizar el sitio de un restaurante con más de 25 años, haciéndolo fácil de navegar y listo para reservas online y campañas de Ads.',
      solutions: [
        'Rediseño completo del sitio con foco en menú, reservas y experiencias.',
        'Integración con Tock, Google Analytics 4, Search Console y píxel de Meta.',
        'Base para campañas de Meta Ads con eventos de reservas, mapa y llamadas.'
      ],
      results: 'Sitio preparado para campañas siempre encendidas e interfaz clara para usuarios de escritorio y móvil.',
    },
    {
      id: 'pintxo',
      name: 'Pintxo Pincho',
      subtitle: 'Tapas & wine bar — Woburn',
      year: 2024,
      categories: ['web', 'marketing', 'branding'],
      thumbnail: '/assets/images/pintxo.png',
      tags: ['Web', 'Branding', 'Launch', 'Meta Ads'],
      liveUrl: 'https://pintxopincho.com',
      githubUrl: '',
      challenge: 'Crear la presencia digital de un nuevo bar de tapas desde cero, alineando web, marca y primeras campañas.',
      solutions: [
        'Diseño de sitio ligero centrado en menú, reservas y fotos de ambiente.',
        'Identidad visual propia: paleta oliva, tipografías y tono de marca.',
        'Setup inicial de Meta y Google para futuras campañas y medición.'
      ],
      results: 'Lanzamiento digital coherente con la experiencia física, listo para crecer con pauta y contenido.',
    },
    {
      id: 'pet-station',
      name: 'Pet Station',
      subtitle: 'Clínica veterinaria',
      year: 2023,
      categories: ['web', 'marketing'],
      thumbnail: '/assets/images/petstation.png',
      tags: ['Web', 'Reservas', 'Content', 'Meta Ads'],
      liveUrl: 'https://petstationvet.com',
      githubUrl: '',
      challenge: 'Unificar servicios (veterinaria, peluquería y más) en un sitio claro con reservas online y contenido constante.',
      solutions: [
        'Sitio con páginas de servicio, blog y llamadas a reservar por WhatsApp / formulario.',
        'Sistema de reservas apoyado en Google Apps Script / Google Calendar.',
        'Motor de contenido con reels educativos y de humor para redes sociales.'
      ],
      results: 'Más claridad de servicios, mayor número de consultas por canales digitales y base de contenido organizada.',
    },
    {
      id: 'canbridge',
      name: 'Canbridge',
      subtitle: 'Colegio canino & terapias',
      year: 2023,
      categories: ['web', 'marketing', 'branding'],
      thumbnail: '/assets/images/canbridge.png',
      tags: ['Web', 'Branding', 'Content', 'Meta Ads'],
      liveUrl: 'https://canbridge.co',
      githubUrl: '',
      challenge: 'Contar servicios complejos (educación, terapias, guardería) de forma simple para tutores y profesionales.',
      solutions: [
        'Sitio con secciones para programas, casos, equipo y preguntas frecuentes.',
        'Línea gráfica amigable para explicar procesos y resultados.',
        'Calendario de contenido en redes con enfoque educativo y emocional.'
      ],
      results: 'Mejor entendimiento de los servicios y aumento de consultas cualificadas desde redes y web.',
    },
    {
      id: 'corporate-site',
      name: 'Sitio corporativo B2B',
      subtitle: 'Empresa de dotaciones / eventos',
      year: 2022,
      categories: ['web', 'branding'],
      thumbnail: '/assets/images/B2B-Template.png',
      tags: ['Landing', 'Catálogo', 'B2B'],
      liveUrl: 'https://corporate-template.pages.dev/',
      githubUrl: '',
      challenge: 'Diseñar una página corporativa clara para presentar servicios B2B, productos y zonas de operación.',
      solutions: [
        'One-page con secciones de servicios, sectores atendidos y mapa de operaciones.',
        'Formulario de contacto para cotizaciones y consultas específicas.',
        'Enfoque en claridad de oferta y confianza para empresas.'
      ],
      results: 'Sitio corporativo listo para usar en cotizaciones, catálogos digitales y campañas puntuales.',
    }
  ];

  const gridEl = document.getElementById('projectsGrid');
  const filtersEl = document.getElementById('projectsFilters');
  const searchEl = document.getElementById('projectsSearch'); // puede no existir en home
  const sortEl = document.getElementById('projectsSort');   // idem

  if (!gridEl) return;

  let currentFilter = 'all';
  let currentSearch = '';
  let currentSort = 'new';

  function applyFilters() {
    let list = [...projects];

    if (currentFilter !== 'all') {
      list = list.filter(p => p.categories.includes(currentFilter));
    }

    if (currentSearch.trim()) {
      const term = currentSearch.toLowerCase();
      list = list.filter(p =>
        p.name.toLowerCase().includes(term) ||
        (p.subtitle && p.subtitle.toLowerCase().includes(term)) ||
        p.tags.some(t => t.toLowerCase().includes(term))
      );
    }

    switch (currentSort) {
      case 'az':
        list.sort((a, b) => a.name.localeCompare(b.name, 'es'));
        break;
      case 'za':
        list.sort((a, b) => b.name.localeCompare(a.name, 'es'));
        break;
      case 'old':
        list.sort((a, b) => a.year - b.year);
        break;
      case 'new':
      default:
        list.sort((a, b) => b.year - a.year);
        break;
    }

    renderGrid(list);
  }

  function renderGrid(list) {
    gridEl.innerHTML = '';

    if (!list.length) {
      gridEl.innerHTML = `
        <div class="col-12">
          <div class="alert alert-secondary mb-0">
            No encontramos proyectos con ese filtro. Prueba con otro término.
          </div>
        </div>`;
      return;
    }

    list.forEach(p => {
      const col = document.createElement('div');
      col.className = 'col-md-6 col-lg-4';

      col.innerHTML = `
        <article class="project-card h-100 d-flex flex-column">
          <img src="${p.thumbnail}" alt="${p.name}" class="project-thumb" loading="lazy">
          <div class="project-body d-flex flex-column flex-grow-1">
            <div class="d-flex justify-content-between align-items-start mb-1">
              <h3 class="project-title h5 mb-0">${p.name}</h3>
              <span class="badge text-bg-light">${p.year}</span>
            </div>
            ${p.subtitle ? `<p class="mb-2 small text-muted">${p.subtitle}</p>` : ''}
            <div class="project-tags mb-2">
              ${p.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('')}
            </div>
            <div class="project-actions mt-auto d-flex flex-wrap gap-2">
              <button type="button"
                      class="btn btn-outline-dark btn-sm js-case-study"
                      data-id="${p.id}">
                Ver caso
              </button>
              ${p.liveUrl && p.liveUrl !== '#'
          ? `<a href="${p.liveUrl}" target="_blank" rel="noopener" class="btn btn-light btn-sm">
                     <i class="bi bi-globe me-1"></i>Ver sitio
                   </a>`
          : ''}
            </div>
          </div>
        </article>
      `;

      gridEl.appendChild(col);
    });

    attachCaseStudyHandlers(list);
  }

  function attachCaseStudyHandlers(list) {
    const modalEl = document.getElementById('caseStudyModal');
    if (!modalEl || typeof bootstrap === 'undefined') return;

    const bsModal = bootstrap.Modal.getOrCreateInstance(modalEl);
    const titleEl = modalEl.querySelector('#caseStudyTitle');
    const challengeEl = modalEl.querySelector('#caseStudyChallenge');
    const solutionsEl = modalEl.querySelector('#caseStudySolutions');
    const resultsEl = modalEl.querySelector('#caseStudyResults');
    const tagsWrap = modalEl.querySelector('#caseStudyTags');
    const liveBtn = modalEl.querySelector('#caseStudyLive');
    const githubBtn = modalEl.querySelector('#caseStudyGithub');

    function onCaseStudyClick(evt) {
      const id = evt.currentTarget.getAttribute('data-id');
      const project = list.find(p => p.id === id);
      if (!project) return;

      titleEl.textContent = project.name;
      challengeEl.textContent = project.challenge || '';

      solutionsEl.innerHTML = (project.solutions || [])
        .map(s => `<li>${s}</li>`)
        .join('');

      if (project.results) {
        resultsEl.textContent = project.results;
        resultsEl.classList.remove('d-none');
      } else {
        resultsEl.textContent = '';
        resultsEl.classList.add('d-none');
      }

      tagsWrap.innerHTML = (project.tags || [])
        .map(t => `<span class="badge bg-light text-dark border">${t}</span>`)
        .join('');

      if (project.liveUrl && project.liveUrl !== '#') {
        liveBtn.href = project.liveUrl;
        liveBtn.classList.remove('d-none');
      } else {
        liveBtn.classList.add('d-none');
      }

      if (project.githubUrl) {
        githubBtn.href = project.githubUrl;
        githubBtn.classList.remove('d-none');
      } else {
        githubBtn.classList.add('d-none');
      }

      bsModal.show();
    }

    // Limpia y vuelve a asignar listeners a TODOS los botones del grid
    document.querySelectorAll('.js-case-study').forEach(btn => {
      btn.replaceWith(btn.cloneNode(true));
    });
    document.querySelectorAll('.js-case-study').forEach(btn => {
      btn.addEventListener('click', onCaseStudyClick);
    });
  }

  // Filtros (solo los que existan en el home)
  if (filtersEl) {
    filtersEl.addEventListener('click', (e) => {
      const btn = e.target.closest('[data-filter]');
      if (!btn) return;
      currentFilter = btn.getAttribute('data-filter');

      filtersEl.querySelectorAll('.nav-link').forEach(link => link.classList.remove('active'));
      btn.classList.add('active');

      applyFilters();
    });
  }

  if (searchEl) {
    searchEl.addEventListener('input', (e) => {
      currentSearch = e.target.value;
      applyFilters();
    });
  }

  if (sortEl) {
    sortEl.addEventListener('change', (e) => {
      currentSort = e.target.value;
      applyFilters();
    });
  }

  // Primera carga
  applyFilters();
});

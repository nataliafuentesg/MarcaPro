// /assets/js/projects.en.js
(function () {
  const projects = [
    {
      id: 'lcs',
      name: 'Luis Carlos Segura',
      subtitle: 'Political campaign website',
      year: 2025,
      categories: ['web'],
      thumb: '/assets/images/luis-carlos-segura.png',
      tags: ['Vue 3', 'Spring Boot', 'PostgreSQL', 'Newsletter API', 'Cloudflare/Hetzner'],
      liveUrl: 'https://luiscarlossegura.com',
      githubUrl: '',
      challenge: 'Build a fast, modern website for a public figure with strong SEO, newsletter tools, and a clean UX.',
      solutions: [
        'Vue 3 frontend with modular sections, animations and mobile-first UX.',
        'Custom Spring Boot backend for newsletter, forms and secure API endpoints.',
        'Full SEO implementation: Open Graph, meta tags, sitemap and structured data.',
        'Deployment using Cloudflare (frontend) and Hetzner (backend) with SSL and CI/CD.'
      ],
      results: 'A professional, fast-loading website that improves visibility, captures leads and strengthens communication with the community.',
    },

    {
      id: 'tasca',
      name: 'Tasca Restaurant',
      subtitle: 'Tapas restaurant in Boston',
      categories: ['web', 'ecommerce', 'marketing', 'branding'],
      year: 2025,
      thumb: '/assets/images/tasca.png',
      description: 'Full website with backend to manage offers, menu and wine list, plus social media and ads management.',
      challenge: 'Modernize the digital presence of a traditional restaurant, integrating external bookings, updated menu and seasonal offers without templates.',
      solutions: [
        'Designed and built the full website in Vue 3 with a Spring Boot backend.',
        'Internal module to manage offers, menu, drinks and wine lists.',
        'Integration with Tock for reservations and event tracking in GA4.',
        'Ongoing social media management (Meta Suite) and Meta Ads campaigns focused on reservations.'
      ],
      results: 'Increase in clicks to reservations and measurable traffic from Google and Meta. Infrastructure ready to scale seasonal campaigns.',
      tags: ['Vue 3', 'Spring Boot', 'Restaurant', 'Reservations', 'Meta Ads', 'GA4'],
      liveUrl: 'https://tascatapas.com/',
      githubUrl: null
    },
    {
      id: 'pintxo',
      name: 'Pintxo Pincho',
      subtitle: 'Tapas bar & wine',
      categories: ['web', 'ecommerce', 'marketing', 'branding'],
      year: 2025,
      thumb: '/assets/images/pintxo.png',
      description: 'Full website with backend for menu, drinks and offers, plus social media and ads campaigns.',
      challenge: 'Launch a new tapas concept with a clear identity, mobile-first site and the ability to communicate promotions dynamically.',
      solutions: [
        'Website design in Vue 3 with a strong focus on menus and photography.',
        'Spring Boot backend to manage menus, offers and special events.',
        'Meta pixel and GA4 setup to measure campaigns end-to-end.',
        'Social media management (content, carousels and reels) aligned with the brand.'
      ],
      results: 'Site launched with solid SEO fundamentals and a structure ready for performance campaigns on Meta and Google.',
      tags: ['Vue 3', 'Spring Boot', 'Restaurant', 'Digital menu', 'Meta Ads'],
      liveUrl: 'https://pintxopincho.com/',
      githubUrl: null
    },
    {
      id: 'petstation',
      name: 'Pet Station',
      subtitle: 'Vet clinic & grooming',
      categories: ['web', 'marketing', 'branding'],
      year: 2023,
      thumb: '/assets/images/petstation.png',
      description: 'Full website with a booking system powered by Google Apps Script, plus content and ads.',
      challenge: 'Centralize bookings for services (grooming, vet, hotel) and improve communication with clients on Instagram and other channels.',
      solutions: [
        'Full website design with a service-first structure and testimonials.',
        'Booking forms connected to Google Sheets via Apps Script.',
        'Meta Suite setup and campaigns focused on messages and bookings.',
        'Content production (reels, educational and entertaining pieces) to strengthen the brand.'
      ],
      results: 'Clearer and more traceable booking flow, with increased messages and appointments coming from social media.',
      tags: ['Corporate site', 'Apps Script', 'Bookings', 'Vet clinic', 'Meta Ads', 'Reels'],
      liveUrl: 'https://petstationvet.com/',
      githubUrl: null
    },
    {
      id: 'canbridge',
      name: 'Canbridge',
      subtitle: 'Dog school & therapies',
      categories: ['web', 'marketing', 'branding'],
      year: 2023,
      thumb: '/assets/images/canbridge.png',
      description: 'Full website design and social media management with educational and emotional content.',
      challenge: 'Communicate a specialized service (daycare, therapy and dog training) in a friendly, professional and easy-to-understand way for pet parents.',
      solutions: [
        'Website design with clear sections for services, testimonials and admission process.',
        'Contact forms and simple funnels leading to WhatsApp.',
        'Content calendar with educational reels, tips and emotional stories.',
        'Meta Ads campaigns targeting the local area.'
      ],
      results: 'Stronger value proposition and more inquiries through the website and Instagram.',
      tags: ['Corporate site', 'Dog school', 'Reels', 'Meta Ads', 'Educational content'],
      liveUrl: 'https://canbridgeguarderiacanina.com/',
      githubUrl: null
    },
    {
      id: 'valkha',
      name: 'Valkha',
      subtitle: 'Fashion e-commerce (US)',
      categories: ['web', 'ecommerce', 'branding'],
      year: 2025,
      thumb: '/assets/images/valkha.png',
      description: 'Full-stack e-commerce with variants, cart, Stripe Checkout and user dashboard.',
      challenge: 'Build a fashion store ready for the US market with variants, persistent cart and secure checkout, without relying on closed platforms.',
      solutions: [
        'Vue 3 frontend with collections, product detail pages and a global cart sidebar.',
        'Spring Boot backend with products, variants, addresses and orders management.',
        'Stripe Checkout integration, order webhooks and support for taxes and shipping.',
        'Architecture ready for performance campaigns and event tracking.'
      ],
      results: 'Solid foundation for a scalable e-commerce targeting the US market, ready to plug performance campaigns.',
      tags: ['Vue 3', 'Spring Boot', 'Stripe', 'E-commerce', 'PostgreSQL'],
      liveUrl: 'https://valkhasport.com',
      githubUrl: 'https://github.com/nataliaf1412/valkha-backend'
    },
    {
      id: 'corporate-site',
      name: 'Corporate site',
      subtitle: 'Institutional page for an operations company',
      categories: ['web', 'branding'],
      year: 2025,
      thumb: '/assets/images/B2B-Template.png',
      description: 'Tailor-made corporate page to communicate services, track record and operations map.',
      challenge: 'Present services and geographic coverage in a clear way, avoiding generic templates.',
      solutions: [
        'Corporate page layout with sections for services, experience, clients and operations map.',
        'Interactive map showing the cities and regions where the company operates.',
        'Basic performance tuning and on-page SEO to improve visibility.',
        'Structure ready for future sections (blog, case studies, etc.).'
      ],
      results: 'Stronger institutional presence and clearer communication of the company’s operational reach.',
      tags: ['Corporate site', 'Operations map', 'SEO on-page'],
      liveUrl: 'https://corporate-template.pages.dev/',
      githubUrl: 'https://github.com/nataliafuentesg/eventex'
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

  if (!gridEl) return;

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
            No projects found with those filters. Try adjusting the category or search.
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
                View case
              </button>
              ${p.liveUrl ? `
              <a href="${p.liveUrl}" target="_blank" rel="noopener" class="btn btn-sm btn-outline-secondary">
                View site
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

  // ---- Events ----
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

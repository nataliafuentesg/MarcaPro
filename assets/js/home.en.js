// home.en.js — Featured projects on home (EN)

document.addEventListener('DOMContentLoaded', () => {
  const projects = [
    {
      id: 'lcs',
      name: 'Luis Carlos Segura',
      subtitle: 'Political campaign website',
      year: 2025,
      categories: ['web'],
      thumbnail: '/assets/images/luis-carlos-segura.png',
      tags: ['Vue 3', 'Spring Boot', 'PostgreSQL', 'Newsletter API', 'Cloudflare/Hetzner'],
      liveUrl: 'https://luiscarlossegura.com',
      githubUrl: '',
      challenge: 'Build a fast, modern website for a public figure with strong SEO, newsletter tools, and a clean UX.',
      solutions: [
        'Vue 3 frontend with modular sections, animations and mobile-first UX.',
        'Custom Spring Boot backend for newsletter, forms and secure API endpoints.',
        'Full SEO implementation: Open Graph, meta tags, sitemap and structured data.',
        'Deployment using Cloudflare (frontend) and Hetzner (backend) with SSL and CI/CD.',
      ],
      results: 'A professional, fast-loading website that improves visibility, captures leads and supports communication with the community.',
    },


    {
      id: 'valkha',
      name: 'Valkha',
      subtitle: 'Fashion e-commerce',
      year: 2025,
      categories: ['ecommerce', 'web'],
      thumbnail: '/assets/images/valkha.png',
      tags: ['Vue 3', 'Spring Boot', 'Stripe', 'E-commerce'],
      liveUrl: 'https://valkhasport.com',
      githubUrl: '',
      challenge: 'Launch a fashion e-commerce for the U.S. market with flexible variants, taxes and secure payments.',
      solutions: [
        'Vue 3 frontend with collections, product detail pages and a global cart sidebar.',
        'Spring Boot backend handling variants, stock, orders and Stripe webhook.',
        'Stripe Checkout in USD with coupons, taxes and shipping calculations.'
      ],
      results: 'Stable cart and checkout in testing, with a technical base ready for performance campaigns.',
    },
    {
      id: 'tasca',
      name: 'Tasca',
      subtitle: 'Tapas restaurant — Boston',
      year: 2025,
      categories: ['web', 'marketing', 'branding'],
      thumbnail: '/assets/images/tasca.png',
      tags: ['Web', 'Growth', 'Meta Ads', 'GA4'],
      liveUrl: 'https://tascatapas.com',
      githubUrl: '',
      challenge: 'Refresh the website of a 25+ year restaurant, making it easier to navigate and ready for online reservations and Ads.',
      solutions: [
        'Full redesign focused on menu, reservations and experiences.',
        'Integration with Tock, Google Analytics 4, Search Console and Meta pixel.',
        'Base for always-on Meta Ads with reservation, map and call events.'
      ],
      results: 'A clear, mobile-friendly site fully wired for ongoing campaigns and tracking.',
    },
    {
      id: 'pintxo',
      name: 'Pintxo Pincho',
      subtitle: 'Tapas & wine bar — Woburn',
      year: 2025,
      categories: ['web', 'marketing', 'branding'],
      thumbnail: '/assets/images/pintxo.png',
      tags: ['Web', 'Branding', 'Launch', 'Meta Ads'],
      liveUrl: 'https://pintxopincho.com',
      githubUrl: '',
      challenge: 'Create the digital presence for a new tapas bar, aligning website, brand and first campaigns.',
      solutions: [
        'Lightweight site focused on menu, reservations and photography.',
        'Custom visual identity: palette, type and tone aligned with the brand.',
        'Initial Meta & Google setup for tracking and future campaigns.'
      ],
      results: 'A consistent digital launch aligned with the in-person experience, ready to scale with ads and content.',
    },
    {
      id: 'pet-station',
      name: 'Pet Station',
      subtitle: 'Vet clinic & grooming',
      year: 2023,
      categories: ['web', 'marketing'],
      thumbnail: '/assets/images/petstation.png',
      tags: ['Web', 'Bookings', 'Content', 'Meta Ads'],
      liveUrl: 'https://petstationvet.com',
      githubUrl: '',
      challenge: 'Bring together multiple services (vet, grooming and more) into a clear site with online bookings and consistent content.',
      solutions: [
        'Website with service pages, blog and strong booking CTAs.',
        'Booking system supported by Google Apps Script / Google Calendar.',
        'Content engine with educational and entertaining reels for social media.'
      ],
      results: 'Clearer service offering, more inbound requests and a structured content base.',
    },
    {
      id: 'canbridge',
      name: 'Canbridge',
      subtitle: 'Dog school & therapies',
      year: 2023,
      categories: ['web', 'marketing', 'branding'],
      thumbnail: '/assets/images/canbridge.png',
      tags: ['Web', 'Branding', 'Content', 'Meta Ads'],
      liveUrl: 'https://canbridgeguarderiacanina.com',
      githubUrl: '',
      challenge: 'Explain complex services (education, therapies, boarding) in a simple way for pet parents and professionals.',
      solutions: [
        'Website with sections for programs, case studies, team and FAQs.',
        'Friendly visual language to explain processes and outcomes.',
        'Content calendar focused on education and emotional storytelling.'
      ],
      results: 'Better understanding of services and more qualified leads from web and social channels.',
    },
    {
      id: 'corporate-site',
      name: 'Corporate B2B site',
      subtitle: 'Equipment / events company',
      year: 2025,
      categories: ['web', 'branding'],
      thumbnail: '/assets/images/B2B-Template.png',
      tags: ['Landing', 'Catalog', 'B2B'],
      liveUrl: 'https://corporate-template.pages.dev/',
      githubUrl: '',
      challenge: 'Design a clear corporate page to present B2B services, products and operating areas.',
      solutions: [
        'One-page site with services, sectors served and operations map.',
        'Contact form for quotes and specific inquiries.',
        'Clarity-first approach to build trust with companies.'
      ],
      results: 'Corporate site ready to be used in quotes, digital catalogs and occasional campaigns.',
    }
  ];

  const gridEl = document.getElementById('projectsGrid');
  const filtersEl = document.getElementById('projectsFilters');
  const searchEl = document.getElementById('projectsSearch'); // optional
  const sortEl = document.getElementById('projectsSort');   // optional

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
        list.sort((a, b) => a.name.localeCompare(b.name, 'en'));
        break;
      case 'za':
        list.sort((a, b) => b.name.localeCompare(a.name, 'en'));
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
            No projects found with that filter. Try another term.
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
                View case
              </button>
              ${p.liveUrl && p.liveUrl !== '#'
          ? `<a href="${p.liveUrl}" target="_blank" rel="noopener" class="btn btn-light btn-sm">
                     <i class="bi bi-globe me-1"></i>View site
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

    // Reset de listeners y asignación nueva
    document.querySelectorAll('.js-case-study').forEach(btn => {
      btn.replaceWith(btn.cloneNode(true));
    });
    document.querySelectorAll('.js-case-study').forEach(btn => {
      btn.addEventListener('click', onCaseStudyClick);
    });
  }

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

  applyFilters();
});

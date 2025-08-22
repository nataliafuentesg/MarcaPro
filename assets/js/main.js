(function() {
    "use strict";
 
    function toggleScrolled() {
      const selectBody = document.querySelector('body');
      const selectHeader = document.querySelector('#header');
      if (!selectHeader.classList.contains('scroll-up-sticky') && !selectHeader.classList.contains('sticky-top') && !selectHeader.classList.contains('fixed-top')) return;
      window.scrollY > 100 ? selectBody.classList.add('scrolled') : selectBody.classList.remove('scrolled');
    }
  
    document.addEventListener('scroll', toggleScrolled);
    window.addEventListener('load', toggleScrolled);
  

    const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');
  
    function mobileNavToogle() {
      document.querySelector('body').classList.toggle('mobile-nav-active');
      mobileNavToggleBtn.classList.toggle('bi-list');
      mobileNavToggleBtn.classList.toggle('bi-x');
    }
    mobileNavToggleBtn.addEventListener('click', mobileNavToogle);
  
    /**
     * Hide mobile nav on same-page/hash links
     */
    document.querySelectorAll('#navmenu a').forEach(navmenu => {
      navmenu.addEventListener('click', () => {
        if (document.querySelector('.mobile-nav-active')) {
          mobileNavToogle();
        }
      });
  
    });
  
    /**
     * Toggle mobile nav dropdowns
     */
    document.querySelectorAll('.navmenu .toggle-dropdown').forEach(navmenu => {
      navmenu.addEventListener('click', function(e) {
        e.preventDefault();
        this.parentNode.classList.toggle('active');
        this.parentNode.nextElementSibling.classList.toggle('dropdown-active');
        e.stopImmediatePropagation();
      });
    });
  
    /**
     * Preloader
     */
    const preloader = document.querySelector('#preloader');
    if (preloader) {
      window.addEventListener('load', () => {
        preloader.remove();
      });
    }
  
    /**
     * Scroll top button
     */
    let scrollTop = document.querySelector('.scroll-top');
  
    function toggleScrollTop() {
      if (scrollTop) {
        window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
      }
    }
    scrollTop.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  
    window.addEventListener('load', toggleScrollTop);
    document.addEventListener('scroll', toggleScrollTop);
  
    /**
     * Animation on scroll function and init
     */
    function aosInit() {
      AOS.init({
        duration: 600,
        easing: 'ease-in-out',
        once: true,
        mirror: false
      });
    }
    window.addEventListener('load', aosInit);
  
    /**
     * Initiate glightbox
     */
    const glightbox = GLightbox({
      selector: '.glightbox'
    });
  
    /**
     * Initiate Pure Counter
     */
    new PureCounter();
  
    /**
     * Init swiper sliders
     */
    function initSwiper() {
      document.querySelectorAll(".init-swiper").forEach(function(swiperElement) {
        let config = JSON.parse(
          swiperElement.querySelector(".swiper-config").innerHTML.trim()
        );
  
        if (swiperElement.classList.contains("swiper-tab")) {
          initSwiperWithCustomPagination(swiperElement, config);
        } else {
          new Swiper(swiperElement, config);
        }
      });
    }
  
    window.addEventListener("load", initSwiper);
  
    /**
     * Frequently Asked Questions Toggle
     */
    document.querySelectorAll('.faq-item h3, .faq-item .faq-toggle').forEach((faqItem) => {
      faqItem.addEventListener('click', () => {
        faqItem.parentNode.classList.toggle('faq-active');
      });
    });
  
    /**
     * Correct scrolling position upon page load for URLs containing hash links.
     */
    window.addEventListener('load', function(e) {
      if (window.location.hash) {
        if (document.querySelector(window.location.hash)) {
          setTimeout(() => {
            let section = document.querySelector(window.location.hash);
            let scrollMarginTop = getComputedStyle(section).scrollMarginTop;
            window.scrollTo({
              top: section.offsetTop - parseInt(scrollMarginTop),
              behavior: 'smooth'
            });
          }, 100);
        }
      }
    });
  
    /**
     * Navmenu Scrollspy
     */
    let navmenulinks = document.querySelectorAll('.navmenu a');
  
    function navmenuScrollspy() {
      navmenulinks.forEach(navmenulink => {
        if (!navmenulink.hash) return;
        let section = document.querySelector(navmenulink.hash);
        if (!section) return;
        let position = window.scrollY + 200;
        if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
          document.querySelectorAll('.navmenu a.active').forEach(link => link.classList.remove('active'));
          navmenulink.classList.add('active');
        } else {
          navmenulink.classList.remove('active');
        }
      })
    }
    window.addEventListener('load', navmenuScrollspy);
    document.addEventListener('scroll', navmenuScrollspy);
  
  })();

    // ===== Projects (dynamic) =====
    function initProjects() {
      const grid = document.getElementById('projectsGrid');
      if (!grid) return;
  
      const filters = document.querySelectorAll('#projectsFilters [data-filter]');
      const logosRow = document.getElementById('logosRow');
      let projectsData = [];
      let activeFilter = 'all';
      const toBadge = (txt) => `<span class="badge rounded-pill bg-secondary-subtle text-body border">${txt}</span>`;
  
      const buildCard = (p, idx) => {
        const tags = (p.stack || []).map(toBadge).join(' ');
        const live = p.links?.live ? `<a href="${p.links.live}" target="_blank" rel="noopener" class="btn btn-sm btn-primary"><i class="bi bi-globe me-1"></i>Live</a>` : '';
        const github = p.links?.github ? `<a href="${p.links.github}" target="_blank" rel="noopener" class="btn btn-sm btn-outline-dark"><i class="bi bi-github me-1"></i>Code</a>` : '';
        const ig = p.links?.instagram ? `<a href="${p.links.instagram}" target="_blank" rel="noopener" class="btn btn-sm btn-outline-dark"><i class="bi bi-instagram me-1"></i>IG</a>` : '';
  
        // GLightbox: anchor por cada item de la galería, agrupados por data-gallery
        const galleryId = `gallery-${p.id}`;
        const gItems = (p.gallery || []).map((src) => `<a href="${src}" class="glightbox" data-gallery="${galleryId}" aria-hidden="true"></a>`).join('');
  
        const delay = 100 + (idx % 3) * 100; // efecto AOS escalonado
  
        return `
          <div class="col-lg-4 col-md-6 project-col" data-cats="${(p.category||[]).join(',')}" data-aos="zoom-in" data-aos-delay="${delay}">
            <div class="card h-100 shadow-sm border-0 overflow-hidden">
              <img src="${p.thumb}" alt="${p.name}" class="card-img-top" style="aspect-ratio:16/10;object-fit:cover;">
              <div class="card-body d-flex flex-column">
                <h5 class="card-title mb-1">${p.name}</h5>
                <p class="text-muted small mb-2">${p.summary || ''}</p>
                <div class="d-flex flex-wrap gap-1 mb-3">${tags}</div>
                <div class="mt-auto d-flex justify-content-between align-items-center">
                  <div class="d-flex gap-2">
                    ${live} ${github} ${ig}
                  </div>
                  <button class="btn btn-sm btn-outline-primary" data-case="${p.id}">
                    Case study
                  </button>
                </div>
              </div>
              ${gItems}
            </div>
          </div>
        `;
      };
  
      const applyFilter = (f) => {
        activeFilter = f;
        grid.querySelectorAll('.project-col').forEach(col => {
          const cats = (col.getAttribute('data-cats') || '').toLowerCase();
          const show = f === 'all' ? true : cats.split(',').map(s => s.trim()).includes(f);
          col.classList.toggle('d-none', !show);
        });
      };
  
      const wireCaseStudyButtons = () => {
        grid.querySelectorAll('[data-case]').forEach(btn => {
          btn.addEventListener('click', (e) => {
            const id = e.currentTarget.getAttribute('data-case');
            const p = projectsData.find(x => x.id === id);
            if (!p) return;
  
            const titleEl = document.getElementById('caseStudyTitle');
            const chEl = document.getElementById('caseStudyChallenge');
            const solEl = document.getElementById('caseStudySolutions');
            const resEl = document.getElementById('caseStudyResults');
            const tagsEl = document.getElementById('caseStudyTags');
            const liveEl = document.getElementById('caseStudyLive');
            const ghEl = document.getElementById('caseStudyGithub');
  
            titleEl.textContent = p.name;
            chEl.textContent = p.caseStudy?.challenge || '';
            solEl.innerHTML = (p.caseStudy?.solutions || []).map(s => `<li>${s}</li>`).join('');
            if (p.caseStudy?.results) {
              resEl.textContent = p.caseStudy.results;
              resEl.classList.remove('d-none');
            } else {
              resEl.classList.add('d-none');
            }
            tagsEl.innerHTML = (p.caseStudy?.tags || []).map(t => toBadge(t)).join(' ');
  
            if (p.links?.live) { liveEl.href = p.links.live; liveEl.classList.remove('d-none'); } else { liveEl.classList.add('d-none'); }
            if (p.links?.github) { ghEl.href = p.links.github; ghEl.classList.remove('d-none'); } else { ghEl.classList.add('d-none'); }
  
            new bootstrap.Modal(document.getElementById('caseStudyModal')).show();
          });
        });
      };
  
      const initGallery = () => {
        // Re-inicializa GLightbox para los elementos agregados
        if (window.GLightbox) GLightbox({ selector: '.glightbox' });
      };
  
      const render = (json) => {
        projectsData = json.projects || [];
        grid.innerHTML = projectsData.map((p, i) => buildCard(p, i)).join('');
  
        // Logos
        if (logosRow && json.logos?.length) {
          logosRow.innerHTML = json.logos.map(l => `<img src="${l.logo}" alt="${l.name}" title="${l.name}" style="height:34px;filter:grayscale(100%);opacity:.85;">`).join('');
        }
  
        initGallery();
        wireCaseStudyButtons();
  
        // AOS refresca (contenido inyectado después del load)
        if (window.AOS && AOS.refreshHard) AOS.refreshHard();
  
        // Filtro inicial
        applyFilter(activeFilter);
      };
  
      // Click filtros
      filters.forEach(btn => {
        btn.addEventListener('click', (e) => {
          filters.forEach(b => b.classList.remove('active'));
          e.currentTarget.classList.add('active');
          applyFilter(e.currentTarget.getAttribute('data-filter'));
        });
      });
  
      // Carga del JSON
      fetch('./public/data/projects.json', { headers: { 'Accept': 'application/json' } })
        .then(r => r.ok ? r.json() : Promise.reject(r.status))
        .then(render)
        .catch(() => {
          // Fallback simple
          render({
            logos: [],
            projects: [{
              id: 'sample',
              name: 'Sample Project',
              thumb: 'https://picsum.photos/800/500',
              gallery: [],
              category: ['web'],
              stack: ['Bootstrap'],
              links: {},
              summary: 'Fallback card.'
            }]
          });
        });
    }
  
    window.addEventListener('load', initProjects);
  
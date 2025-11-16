(function () {
  "use strict";

  // ---------- DATA (ES) ----------
  const DATA = {
    usaWeb: {
      currency: "USD",
      note: "No incluye hosting ni dominio. Las comisiones de Stripe las factura Stripe.",
      plans: [
        {
          name: "Starter Site",
          tagline: "1–3 páginas, captura de leads",
          monthly: 350,
          upfront: 1500,
          features: [
            "Diseño a medida (sin plantillas)",
            "Sitio Vue 3 + formulario",
            "SEO básico y analítica",
            "Entrega 1–2 semanas"
          ]
        },
        {
          name: "Business",
          tagline: "Multipágina + blog",
          monthly: 690,
          upfront: 2800,
          highlight: true,
          features: [
            "Vue 3 + CMS para blog",
            "Accesibilidad, performance y on-page SEO",
            "GA4 + eventos con GTM",
            "Entrega 3–4 semanas"
          ]
        },
        {
          name: "E-commerce",
          tagline: "Stripe Checkout y órdenes",
          monthly: 990,
          upfront: 4200,
          features: [
            "Productos, variantes y stock",
            "Stripe Checkout + cupones + impuestos",
            "Panel de órdenes y correos",
            "Entrega 4–6 semanas"
          ]
        }
      ]
    },

    usaAds: {
      currency: "USD",
      note: "No incluye inversión publicitaria.",
      plans: [
        {
          name: "Starter Ads",
          tagline: "Una red",
          monthly: 350,
          upfront: 950,
          features: [
            "Una plataforma (Meta o Google)",
            "2–3 campañas, 4–6 creativos",
            "Optimización semanal",
            "Reporte simple"
          ]
        },
        {
          name: "Growth Ads",
          tagline: "Meta + Google",
          monthly: 690,
          upfront: 1850,
          highlight: true,
          features: [
            "Embudo completo (TOFU/MOFU/BOFU)",
            "Eventos y remarketing",
            "Sprints de testing creativo",
            "Dashboard de ROAS"
          ]
        },
        {
          name: "Scale",
          tagline: "Testing agresivo",
          monthly: 1200,
          upfront: 3200,
          features: [
            "Estrategias de presupuesto/puja",
            "Creativos semanales",
            "Server events / CAPI",
            "Looker Studio avanzado"
          ]
        }
      ]
    },

    colWeb: {
      currency: "COP",
      note: "No incluye hosting ni dominio. Las comisiones de Stripe las factura Stripe.",
      plans: [
        {
          name: "Landing",
          tagline: "1–3 secciones rápidas",
          monthly: 1200000,
          upfront: 4500000,
          features: [
            "Diseño a medida",
            "Vue 3 + formulario de contacto",
            "SEO básico y analítica",
            "Entrega 1–2 semanas"
          ]
        },
        {
          name: "Corporativa",
          tagline: "Múltiples páginas + blog",
          monthly: 2400000,
          upfront: 9000000,
          highlight: true,
          features: [
            "Vue 3 + CMS (blog)",
            "Accesibilidad y performance",
            "GA4 + eventos con GTM",
            "Entrega 3–4 semanas"
          ]
        },
        {
          name: "E-commerce",
          tagline: "Stripe y órdenes",
          monthly: 3500000,
          upfront: 14000000,
          features: [
            "Catálogo con variantes",
            "Checkout con Stripe + cupones + impuestos",
            "Admin de órdenes y correos",
            "Entrega 4–6 semanas"
          ]
        }
      ]
    },

    colSocial: {
      currency: "COP",
      note: "No incluye pauta.",
      plans: [
        {
          name: "Starter Social",
          tagline: "12 piezas/mes",
          monthly: 900000,
          upfront: 2400000,
          features: [
            "Calendario mensual",
            "9 imágenes + 3 reels",
            "Copy y hashtags",
            "Moderación básica"
          ]
        },
        {
          name: "Growth Social",
          tagline: "20 piezas/mes",
          monthly: 1600000,
          upfront: 4200000,
          highlight: true,
          features: [
            "12 imágenes + 8 reels (IA/UGC)",
            "Guías de marca",
            "Reportes quincenales",
            "Soporte en lanzamientos"
          ]
        },
        {
          name: "Content Engine",
          tagline: "30 piezas/mes",
          monthly: 2400000,
          upfront: 6800000,
          features: [
            "Banco de plantillas",
            "Guiones y edición",
            "IG/TikTok/YT Shorts",
            "Reporte avanzado"
          ]
        }
      ]
    },

    colAds: {
      currency: "COP",
      note: "No incluye inversión publicitaria.",
      plans: [
        {
          name: "Arranque",
          tagline: "Una red",
          monthly: 700000,
          upfront: 1800000,
          features: [
            "Meta o Google",
            "2 campañas / 4–6 creativos",
            "Optimización semanal",
            "Reporte simple"
          ]
        },
        {
          name: "Crecimiento",
          tagline: "Meta + Google",
          monthly: 1200000,
          upfront: 3200000,
          highlight: true,
          features: [
            "Embudo completo",
            "Remarketing y eventos",
            "Testing creativo",
            "Dashboard de ROAS"
          ]
        },
        {
          name: "Escala",
          tagline: "Testing agresivo",
          monthly: 2200000,
          upfront: 6000000,
          features: [
            "Estrategias de puja",
            "Lanzamientos semanales",
            "Server events / CAPI",
            "Looker Studio a medida"
          ]
        }
      ]
    },

    branding: {
      currency: "USD",
      note: "Aplica globalmente. Entregables editables.",
      plans: [
        {
          name: "Brand Essentials",
          tagline: "Logo + color + tipografía",
          monthly: 300,
          upfront: 1200,
          features: [
            "3 rutas de logo",
            "Paleta primaria/secundaria",
            "Tipografía y usos",
            "Mini brand book (10p)"
          ]
        },
        {
          name: "Brand Kit",
          tagline: "Manual de marca",
          monthly: 600,
          upfront: 2400,
          highlight: true,
          features: [
            "Sistema de logo y variantes",
            "Guía de tono y estilo",
            "Iconografía y layouts",
            "Brand book (30–40p)"
          ]
        },
        {
          name: "Go-to-Market",
          tagline: "Kit + landing + ads básicos",
          monthly: 1200,
          upfront: 4800,
          features: [
            "Brand Kit completo",
            "Landing (1–3 secciones)",
            "Piezas base para ads (6–8)",
            "Checklist de lanzamiento"
          ]
        }
      ]
    }
  };

  // ---------- HELPERS ----------
  const fmt = (currency, amount) =>
    new Intl.NumberFormat(undefined, { style: "currency", currency }).format(amount);

  function cardTemplate(plan, currency, billing) {
    const price = billing === "upfront" ? plan.upfront : plan.monthly;
    const priceNote = billing === "upfront" ? "único" : "al mes";
    return `
      <div class="col-md-4">
        <div class="pricing-item h-100 ${plan.highlight ? "featured" : ""}">
          <div class="pricing-header">
            <h3 class="mb-0">${plan.name}</h3>
            <small class="text-muted d-block">${plan.tagline || ""}</small>
          </div>
          <div class="price my-3">
            <span class="display-5 fw-bold">${fmt(currency, price)}</span>
            <span class="text-muted">/${priceNote}</span>
          </div>
          <ul class="list-unstyled small mb-3">
            ${plan.features.map(f => `<li class="d-flex align-items-start gap-2"><i class="bi bi-check2-circle"></i><span>${f}</span></li>`).join("")}
          </ul>
          <div class="mt-auto d-grid">
            <a class="btn ${plan.highlight ? "btn-primary" : "btn-outline-primary"}" href="mailto:info@marcapro.agency?subject=${encodeURIComponent("Interés en: "+plan.name)}">Quiero este plan</a>
          </div>
        </div>
      </div>
    `;
  }

  // ---------- RENDER ----------
  let state = {
    tab: "usaWeb",
    billing: "monthly"
  };

  const grid = document.getElementById("plansGrid");
  const tabs = document.getElementById("plansTabs");

  function render() {
    const bucket = DATA[state.tab];
    if (!bucket) return;
    grid.innerHTML = bucket.plans.map(p => cardTemplate(p, bucket.currency, state.billing)).join("");
    const noteId = "plans-note";
    let note = document.getElementById(noteId);
    if (!note) {
      note = document.createElement("div");
      note.id = noteId;
      note.className = "container mt-2";
      grid.parentElement.appendChild(note);
    }
    note.innerHTML = `<p class="small text-muted mb-0"><i class="bi bi-info-circle me-1"></i>${bucket.note}</p>`;
  }

  tabs?.addEventListener("click", (e) => {
    const btn = e.target.closest("button[data-tab]");
    if (!btn) return;
    tabs.querySelectorAll(".nav-link").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    state.tab = btn.dataset.tab;
    render();
  });

  const btnMonthly = document.getElementById("btnMonthly");
  const btnUpfront = document.getElementById("btnUpfront");

  function setBilling(kind) {
    state.billing = kind;
    const primary = "btn btn-primary w-100";
    const outline = "btn btn-outline-primary w-100";
    btnMonthly.className = kind === "monthly" ? primary : outline;
    btnUpfront.className  = kind === "upfront"  ? primary : outline;
    btnMonthly.setAttribute("aria-pressed", String(kind === "monthly"));
    btnUpfront.setAttribute("aria-pressed",  String(kind === "upfront"));
    render();
  }

  btnMonthly?.addEventListener("click", () => setBilling("monthly"));
  btnUpfront?.addEventListener("click", () => setBilling("upfront"));

  // Deep-link por hash: #tab=colAds&billing=upfront
  function readHash() {
    const params = new URLSearchParams(location.hash.replace(/^#/, ""));
    const tab = params.get("tab");
    const billing = params.get("billing");
    if (tab && DATA[tab]) {
      state.tab = tab;
      tabs.querySelectorAll(".nav-link").forEach(b => {
        b.classList.toggle("active", b.dataset.tab === tab);
      });
    }
    if (billing === "upfront" || billing === "monthly") setBilling(billing);
  }

  window.addEventListener("hashchange", readHash);

  // Init
  setBilling("monthly");
  render();
  readHash();
})();

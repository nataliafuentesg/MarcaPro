/* assets/js/plans.js */
(function () {
  "use strict";

  // ===== Helpers =====
  const $ = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));
  const I = () => (window.__i18n || { t: (k) => k, lang: "en" });
  const t = (k) => I().t(k);

  const state = {
    billing: "monthly", // 'monthly' | 'upfront'
    tab: "usaWeb",
  };

  const fmt = {
    USD: (n) =>
      new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
      }).format(n),
    COP: (n) =>
      new Intl.NumberFormat("es-CO", {
        style: "currency",
        currency: "COP",
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
      }).format(n),
  };

  // ===== Reglas de negocio =====
  // Mínimo mantenimiento por moneda
  const MIN_MAINT = { USD: 100, COP: 100000 };

  // ===== Data con onboarding mensual =====
  // monthly: { intro: { months, price }, maint: number }  (en USD/COP según tab)
  // upfront: number | null
  // maintenance visible: usa "maint" y respeta mínimo por moneda
  const PLANS = {
    usaWeb: {
      currency: "USD",
      items: [
        {
          key: "plans.usaWeb.starter",
          price: {
            monthly: { intro: { months: 4, price: 200 }, maint: 100 },
            upfront: 1200,
          },
          features: ["f1", "f2", "f3"],
        },
        {
          key: "plans.usaWeb.growth",
          price: {
            monthly: { intro: { months: 4, price: 320 }, maint: 140 },
            upfront: 2600,
          },
          features: ["f1", "f2", "f3"],
        },
        {
          key: "plans.usaWeb.ecom",
          price: {
            monthly: { intro: { months: 4, price: 520 }, maint: 180 },
            upfront: 4200,
          },
          features: ["f1", "f2", "f3"],
        },
      ],
    },

    usaAds: {
      currency: "USD",
      items: [
        {
          key: "plans.usaAds.setup",
          price: { monthly: null, upfront: 600 }, // one-time
          features: ["f1", "f2", "f3"],
        },
        {
          key: "plans.usaAds.mgmt",
          price: { monthly: { intro: { months: 3, price: 550 }, maint: 350 }, upfront: null },
          features: ["f1", "f2", "f3"],
        },
      ],
    },

    colWeb: {
      currency: "COP",
      items: [
        {
          key: "plans.colWeb.static",
          price: {
            monthly: { intro: { months: 4, price: 420000 }, maint: 100000 },
            upfront: 1900000,
          },
          features: ["f1", "f2", "f3"],
        },
        {
          key: "plans.colWeb.back",
          price: {
            monthly: { intro: { months: 4, price: 780000 }, maint: 160000 },
            upfront: 3600000,
          },
          features: ["f1", "f2", "f3"],
        },
        {
          key: "plans.colWeb.ecom",
          price: {
            monthly: { intro: { months: 4, price: 1080000 }, maint: 220000 },
            upfront: 5200000,
          },
          features: ["f1", "f2", "f3"],
        },
      ],
    },

    colSocial: {
      currency: "COP",
      items: [
        {
          key: "plans.colSocial.basic",
          price: { monthly: { intro: { months: 3, price: 950000 }, maint: 650000 }, upfront: null },
          features: ["f1", "f2", "f3"],
        },
        {
          key: "plans.colSocial.pro",
          price: { monthly: { intro: { months: 3, price: 1350000 }, maint: 900000 }, upfront: null },
          features: ["f1", "f2", "f3"],
        },
        {
          key: "plans.colSocial.full",
          price: { monthly: { intro: { months: 3, price: 1950000 }, maint: 1350000 }, upfront: null },
          features: ["f1", "f2", "f3"],
        },
      ],
    },

    colAds: {
      currency: "COP",
      items: [
        {
          key: "plans.colAds.setup",
          price: { monthly: null, upfront: 900000 }, // one-time
          features: ["f1", "f2", "f3"],
        },
        {
          key: "plans.colAds.mgmt",
          price: { monthly: { intro: { months: 3, price: 1400000 }, maint: 1000000 }, upfront: null },
          features: ["f1", "f2", "f3"],
        },
      ],
    },

    branding: {
      currency: "USD",
      items: [
        {
          key: "plans.branding.basic",
          price: { monthly: null, upfront: 680 },
          features: ["f1", "f2", "f3"],
        },
        {
          key: "plans.branding.full",
          price: { monthly: null, upfront: 1800 },
          features: ["f1", "f2", "f3"],
        },
      ],
      noteKey: "plans.branding.note",
    },
  };

  // ===== UI wiring =====
  const grid = $("#plansGrid");
  if (!grid) return;

  function setBilling(b) {
    state.billing = b;
    const btnUpfront = $("#btnUpfront");
    const btnMonthly = $("#btnMonthly");
    if (btnUpfront && btnMonthly) {
      const isUp = b === "upfront";
      btnUpfront.classList.toggle("btn-primary", isUp);
      btnUpfront.classList.toggle("btn-outline-primary", !isUp);
      btnUpfront.setAttribute("aria-pressed", isUp ? "true" : "false");

      btnMonthly.classList.toggle("btn-primary", !isUp);
      btnMonthly.classList.toggle("btn-outline-primary", isUp);
      btnMonthly.setAttribute("aria-pressed", !isUp ? "true" : "false");
    }
    render();
  }

  function setTab(tab) {
    state.tab = tab;
    $$("#plansTabs .nav-link").forEach((b) => {
      b.classList.toggle("active", b.getAttribute("data-tab") === tab);
    });
    render();
  }

  function priceMonthlyBlock(m, currency) {
    // Aplica mínimo de mantenimiento por moneda
    const minMaint = MIN_MAINT[currency] || 0;
    const maint = Math.max(m.maint || 0, minMaint);

    const perMonth = t("plans.generic.perMonth");

    // “Primeros N meses: $X/mes”
    const introLine =
      m.intro && m.intro.months && m.intro.price
        ? `<div><strong>${fmt[currency](m.intro.price)}</strong> ${perMonth} <span class="opacity-75">(${t("plans.billing.monthlyTop")} ${m.intro.months})</span></div>`
        : "";

    // “Luego: $Y/mes”
    const thenLine = `<div>${t("plans.generic.maintenance")} <strong>${fmt[currency](maint)}</strong> ${perMonth}</div>`;

    return `
      <div class="plan-price plan-price--stack">
        ${introLine}
        ${thenLine}
      </div>`;
  }

  function priceBlock(p, currency) {
    const oneTime = t("plans.generic.oneTime");
    if (state.billing === "upfront") {
      if (p.upfront) {
        return `<div class="plan-price">
          <span class="plan-amount">${fmt[currency](p.upfront)}</span>
          <span class="plan-per">${oneTime}</span>
        </div>`;
      }
      // si no hay upfront pero sí mensual, muestra el mensual (intro+maint)
      if (p.monthly) return priceMonthlyBlock(p.monthly, currency);
      return `<div class="plan-price"><span class="plan-amount">${t("plans.generic.request")}</span></div>`;
    }

    // Monthly
    if (p.monthly) return priceMonthlyBlock(p.monthly, currency);
    // si no hay mensual, cae a one-time
    if (p.upfront) {
      return `<div class="plan-price">
        <span class="plan-amount">${fmt[currency](p.upfront)}</span>
        <span class="plan-per">${oneTime}</span>
      </div>`;
    }
    return `<div class="plan-price"><span class="plan-amount">${t("plans.generic.request")}</span></div>`;
  }

  function render() {
    const lang = I().lang || "en";
    const tab = PLANS[state.tab];
    if (!tab) return (grid.innerHTML = "");

    const cards = tab.items
      .map((item) => {
        const title = t(`${item.key}.title`);
        const subtitle = t(`${item.key}.subtitle`);
        const f1 = t(`${item.key}.${item.features[0]}`);
        const f2 = t(`${item.key}.${item.features[1]}`);
        const f3 = t(`${item.key}.${item.features[2]}`);

        const priceHtml = priceBlock(item.price, tab.currency);

        const ctaTxt = t("plans.generic.email");
        const href = "mailto:info@marcapro.agency";

        return `
          <div class="col-md-6 col-lg-4">
            <article class="plan-card h-100">
              <div class="plan-card-body">
                <header class="mb-2">
                  <h5 class="plan-title">${title}</h5>
                  <div class="plan-subtitle small text-muted">${subtitle}</div>
                </header>

                ${priceHtml}

                <ul class="plan-features mt-3">
                  <li>${f1}</li>
                  <li>${f2}</li>
                  <li>${f3}</li>
                </ul>

                <div class="mt-3 d-grid">
                  <a class="btn btn-primary" href="${href}">
                    <i class="bi bi-envelope me-1"></i>${ctaTxt}
                  </a>
                </div>
              </div>
            </article>
          </div>
        `;
      })
      .join("");

    const note =
      state.tab === "branding" && tab.noteKey
        ? `<div class="col-12"><div class="alert alert-light border mt-2">${t(tab.noteKey)}</div></div>`
        : "";

    grid.innerHTML = cards + note;
  }

  // ===== Listeners =====
  $$("#plansTabs .nav-link").forEach((btn) => {
    btn.addEventListener("click", () => setTab(btn.getAttribute("data-tab")));
  });

  const up = $("#btnUpfront");
  const mo = $("#btnMonthly");
  if (up) up.addEventListener("click", () => setBilling("upfront"));
  if (mo) mo.addEventListener("click", () => setBilling("monthly"));

  window.addEventListener("i18n:changed", () => render());

  // ===== First paint =====
  setBilling("monthly");
  const activeTabBtn = $("#plansTabs .nav-link.active");
  setTab(activeTabBtn ? activeTabBtn.getAttribute("data-tab") : "usaWeb");

  // Exponer por si el main quiere forzar re-render
  window.rerenderPlans = render;
})();

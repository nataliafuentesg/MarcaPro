/* plans.js
 - Renders prices (data-price-key)
 - Billing toggle (upfront / installments) saved in localStorage 'billing'
 - Local i18n for this page (applies data-i18n attributes here) and integrates with global main.js if available
 - Load after main.js
*/
(function () {
  "use strict";

  /* =========================
     PRICE CATALOG
     ========================= */
  const PRICES = {
    us: {
      starter: { upfront: 800, monthly: 100, installments: 4, installmentUnit: 300 },
      growth:  { upfront: 3200, monthly: 200, installments: 4, installmentUnit: 800 },
      ecom:    { upfront: 4200, monthly: 400, installments: 4, installmentUnit: 1050 }
    },
    co: {
      web: {
        basic: { upfront: 350, monthly: 40, installments: 4, installmentUnit: 100 },
        full:  { upfront: 1200, monthly: 120, installments: 4, installmentUnit: 300 },
        ecom:  { upfront: 1800, monthly: 220, installments: 4, installmentUnit: 450 }
      },
      social: {
        ai: { monthly: 180 },
        monthlyshoot: { monthly: 450 },
        weekly: { monthly: 900 }
      }
    }
  };

  function fmt(n) { return (typeof n === 'number') ? n.toLocaleString('en-US', { minimumFractionDigits: 0 }) : n; }

  /* RENDER PRICES into elements with data-price-key */
  function renderPrices(billing) {
    billing = billing || localStorage.getItem('billing') || 'upfront';

    document.querySelectorAll('[data-price-key]').forEach(el => {
      const key = el.getAttribute('data-price-key');
      if (!key) return;
      const parts = key.split('.');
      try {
        if (parts[0] === 'us') {
          const plan = PRICES.us[parts[1]];
          if (!plan) return;
          if (parts[2] === 'monthly') el.textContent = fmt(plan.monthly);
          else if (parts[2] === 'upfront') {
            if (billing === 'installments') {
              el.textContent = fmt(plan.installmentUnit);
              el.setAttribute('data-display', `${plan.installments}×${fmt(plan.installmentUnit)}`);
            } else {
              el.textContent = fmt(plan.upfront);
              el.removeAttribute('data-display');
            }
          }
        } else if (parts[0] === 'co') {
          if (parts[1] === 'web') {
            const plan = PRICES.co.web[parts[2]];
            if (!plan) return;
            if (parts[3] === 'monthly') el.textContent = fmt(plan.monthly);
            else if (parts[3] === 'upfront') {
              if (billing === 'installments') {
                el.textContent = fmt(plan.installmentUnit);
                el.setAttribute('data-display', `${plan.installments}×${fmt(plan.installmentUnit)}`);
              } else {
                el.textContent = fmt(plan.upfront);
                el.removeAttribute('data-display');
              }
            }
          } else if (parts[1] === 'social') {
            const plan = PRICES.co.social[parts[2]];
            if (!plan) return;
            if (parts[3] === 'monthly') el.textContent = fmt(plan.monthly);
          }
        }
      } catch (e) { /* ignore */ }
    });

    // add/remove helper labels for installments
    document.querySelectorAll('[data-price-key]').forEach(el => {
      const d = el.getAttribute('data-display');
      const container = el.closest('.plan-card') || el.parentElement;
      if (!container) return;
      let helper = container.querySelector('.installment-label');
      if (d) {
        if (!helper) {
          helper = document.createElement('div');
          helper.className = 'small text-muted installment-label';
          container.appendChild(helper);
        }
        helper.textContent = `${d} — installments`;
      } else {
        if (helper) helper.remove();
      }
    });

    // billing explanation text
    const explain = document.getElementById('billing-explain');
    if (explain) {
      if (billing === 'installments') {
        explain.textContent = `Example: Starter ${PRICES.us.starter.installments}×$${fmt(PRICES.us.starter.installmentUnit)} (then $${fmt(PRICES.us.starter.monthly)}/mo maintenance).`;
      } else {
        explain.textContent = 'Pay upfront to reduce implementation cost; maintenance still applies monthly.';
      }
    }

    document.documentElement.setAttribute('data-billing', billing);
  }

  /* INIT billing toggle buttons */
  function initBillingButtons() {
    const btns = Array.from(document.querySelectorAll('.billing-btn'));
    if (!btns.length) return;
    btns.forEach(btn => {
      btn.addEventListener('click', () => {
        const mode = btn.getAttribute('data-billing') || 'upfront';
        localStorage.setItem('billing', mode);
        btns.forEach(b => {
          const on = b === btn;
          b.classList.toggle('active', on);
          b.setAttribute('aria-pressed', on ? 'true' : 'false');
        });
        renderPrices(mode);
      });
    });
    const saved = localStorage.getItem('billing') || 'upfront';
    btns.forEach(b => {
      const on = b.getAttribute('data-billing') === saved;
      b.classList.toggle('active', on);
      b.setAttribute('aria-pressed', on ? 'true' : 'false');
    });
    renderPrices(saved);
  }

  /* =========================
     LOCAL I18N (page-level)
     ========================= */
  const PLANS_I18N = {
    en: {
      'plans.hero.badge':'Simple pricing for real results',
      'plans.hero.title':'Plans — Web & Social',
      'plans.hero.lead':'Clear packages for USA (web-focused) and Colombia (web + social). Upfront, installments, or monthly maintenance.',
      'plans.hero.note':'All prices in USD. Ads spend is separate — we manage ad budgets and reporting.',
      'plans.billing.upfront':'Pay upfront',
      'plans.billing.upfront.sub':'One-time implementation (discounted)',
      'plans.billing.installments':'4× Installments',
      'plans.billing.installments.sub':'Spread cost over 4 months',
      'plans.tab.us':'USA — Web',
      'plans.tab.co':'Colombia — Web & Social',
      'plans.price.implementation':'Implementation',
      'plans.price.maintenance':'Maintenance:',
      'plans.cta.email':'Email',
      'plans.cta.ig':'Instagram',
      'plans.cta.quote':'Get quote',
      'plans.cta.discuss':'Discuss',
      'plans.cta.book':'Book',
      'plans.cta.contact':'Contact',
      'plans.addon.title':'Ads & Measurement (add-on)',
      'plans.addon.copy':'Meta/Google ad management is billed separately (ad budgets + management fee). Ask for ROAS forecasts and recommended monthly budgets.',
      'plans.social.title':'Social Media — Content & Management',
      'plans.location.title':'On-location shoots',
      'plans.location.copy':'We operate from Bogotá / Chía. Travel beyond this area may include extra logistics fees — we\'ll quote per job.',
      'plans.custom.title':'Custom plans',
      'plans.custom.copy':'Need something tailored? We build combined packages (web + content + ads) — let\'s talk and draft a proposal with transparent billing.',
      'plans.cta.talk':'Talk to us',

      /* US plans */
      'plans.us.starter.title':'Starter',
      'plans.us.starter.sub':'Static / Brochure',
      'plans.us.starter.f1':'One-page or few pages',
      'plans.us.starter.f2':'Responsive & SEO base',
      'plans.us.starter.f3':'Canonical & sitemap',

      'plans.us.growth.title':'Growth',
      'plans.us.growth.sub':'Multi-page + Ads-ready',
      'plans.us.growth.f1':'Design system + CMS-ready',
      'plans.us.growth.f2':'Events, GA4, Meta pixels',
      'plans.us.growth.f3':'A/B friendly & performance',

      'plans.us.ecom.title':'E-commerce',
      'plans.us.ecom.sub':'Stripe, variants & orders',
      'plans.us.ecom.f1':'Product variants, cart & checkout',
      'plans.us.ecom.f2':'Orders, webhooks, invoices',
      'plans.us.ecom.f3':'U.S. Stripe setup & taxes',

      /* CO web */
      'plans.co.web.basic.title':'Web — Basic',
      'plans.co.web.basic.sub':'Static site',
      'plans.co.web.basic.f1':'Few pages — fast delivery',
      'plans.co.web.basic.f2':'Basic SEO & contact CTA',

      'plans.co.web.full.title':'Web — Full',
      'plans.co.web.full.sub':'Backend / Integrations',
      'plans.co.web.full.f1':'API integrations, auth, webhooks',
      'plans.co.web.full.f2':'Performance & GA4',

      'plans.co.web.ecom.title':'E-commerce',
      'plans.co.web.ecom.sub':'Stripe / Payments',
      'plans.co.web.ecom.f1':'Catalog & variants',
      'plans.co.web.ecom.f2':'Checkout & orders',

      /* Social */
      'plans.social.basic.title':'Social — Basic (AI)',
      'plans.social.basic.sub':'12 posts / month (AI-assisted)',
      'plans.social.basic.f1':'Calendar + captions',
      'plans.social.basic.f2':'Hashtag & simple editing',

      'plans.social.monthly.title':'Social — On-location (1×/mo)',
      'plans.social.monthly.sub':'Monthly shooting in Bogotá / Chía area',
      'plans.social.monthly.f1':'1 shoot per month + edits',
      'plans.social.monthly.f2':'Reels & short edits',

      'plans.social.weekly.title':'Social — Weekly (On-location)',
      'plans.social.weekly.sub':'Weekly shoots (Bogotá / Chía) — premium',
      'plans.social.weekly.f1':'Weekly content & edit',
      'plans.social.weekly.f2':'Ad creative + reporting'
    },

    es: {
      'plans.hero.badge':'Precios claros para resultados reales',
      'plans.hero.title':'Planes — Web & Social',
      'plans.hero.lead':'Paquetes claros para EE. UU. (enfocado en web) y Colombia (web + redes). Pago al contado, cuotas o mantenimiento mensual.',
      'plans.hero.note':'Precios en USD. La pauta (ads) se factura aparte — gestionamos presupuestos e informes.',
      'plans.billing.upfront':'Pagar al contado',
      'plans.billing.upfront.sub':'Implementación única (descuento)',
      'plans.billing.installments':'4× Cuotas',
      'plans.billing.installments.sub':'Divide el costo en 4 meses',
      'plans.tab.us':'EE. UU. — Web',
      'plans.tab.co':'Colombia — Web y Redes',
      'plans.price.implementation':'Implementación',
      'plans.price.maintenance':'Mantenimiento:',
      'plans.cta.email':'Email',
      'plans.cta.ig':'Instagram',
      'plans.cta.quote':'Pedir cotización',
      'plans.cta.discuss':'Hablar',
      'plans.cta.book':'Reservar',
      'plans.cta.contact':'Contactar',
      'plans.addon.title':'Pauta & Medición (add-on)',
      'plans.addon.copy':'La gestión de anuncios (Meta/Google) se factura aparte (presupuesto de anuncios + fee de gestión). Pregunta por proyecciones de ROAS y presupuestos recomendados.',
      'plans.social.title':'Redes — Contenido y Gestión',
      'plans.location.title':'Grabaciones en sitio',
      'plans.location.copy':'Operamos desde Bogotá / Chía. Desplazamientos fuera de la zona pueden tener costes extra — cotizamos por trabajo.',
      'plans.custom.title':'Planes personalizados',
      'plans.custom.copy':'¿Necesitas algo a medida? Armamos paquetes combinados (web + contenido + ads) — hablemos y presentamos una propuesta con facturación transparente.',
      'plans.cta.talk':'Hablemos',

      /* US plans (español simple) */
      'plans.us.starter.title':'Starter',
      'plans.us.starter.sub':'Estático / Folleto',
      'plans.us.starter.f1':'Una página o pocas páginas',
      'plans.us.starter.f2':'Responsive y SEO básico',
      'plans.us.starter.f3':'Canonical & sitemap',

      'plans.us.growth.title':'Growth',
      'plans.us.growth.sub':'Multipágina + listo para ads',
      'plans.us.growth.f1':'Design system + preparado para CMS',
      'plans.us.growth.f2':'Eventos, GA4, píxeles Meta',
      'plans.us.growth.f3':'A/B ready & performance',

      'plans.us.ecom.title':'E-commerce',
      'plans.us.ecom.sub':'Stripe, variantes & órdenes',
      'plans.us.ecom.f1':'Variantes de producto, carrito y checkout',
      'plans.us.ecom.f2':'Órdenes, webhooks, facturación',
      'plans.us.ecom.f3':'Setup Stripe EE. UU. & impuestos',

      /* CO web */
      'plans.co.web.basic.title':'Web — Básica',
      'plans.co.web.basic.sub':'Sitio estático',
      'plans.co.web.basic.f1':'Pocas páginas — entrega rápida',
      'plans.co.web.basic.f2':'SEO básico & CTA de contacto',

      'plans.co.web.full.title':'Web — Completa',
      'plans.co.web.full.sub':'Backend / Integraciones',
      'plans.co.web.full.f1':'Integraciones API, auth, webhooks',
      'plans.co.web.full.f2':'Performance & GA4',

      'plans.co.web.ecom.title':'E-commerce',
      'plans.co.web.ecom.sub':'Stripe / Pagos',
      'plans.co.web.ecom.f1':'Catálogo & variantes',
      'plans.co.web.ecom.f2':'Checkout & órdenes',

      /* Social */
      'plans.social.basic.title':'Social — Básico (IA)',
      'plans.social.basic.sub':'12 posts / mes (IA asistida)',
      'plans.social.basic.f1':'Calendario + captions',
      'plans.social.basic.f2':'Hashtags y edición básica',

      'plans.social.monthly.title':'Social — En sitio (1×/mes)',
      'plans.social.monthly.sub':'Grabación mensual en Bogotá / Chía',
      'plans.social.monthly.f1':'1 grabación al mes + ediciones',
      'plans.social.monthly.f2':'Reels y cortes cortos',

      'plans.social.weekly.title':'Social — Semanal (En sitio)',
      'plans.social.weekly.sub':'Grabaciones semanales — premium',
      'plans.social.weekly.f1':'Contenido semanal + edición',
      'plans.social.weekly.f2':'Creativos para ads + reporting'
    }
  };

  /* Apply local translations for elements with data-i18n (and data-i18n-attr if used) */
  function applyLocalI18n(lang = 'en') {
    const dict = PLANS_I18N[lang] || PLANS_I18N.en;
    document.documentElement.setAttribute('lang', lang);

    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (dict[key] != null) el.textContent = dict[key];
    });

    // smaller subset: attributes e.g. placeholder (not used heavily here, but ready)
    document.querySelectorAll('[data-i18n-attr]').forEach(el => {
      const spec = el.getAttribute('data-i18n-attr'); // format "attr:key"
      // allow multiple pair comma separated attr:key
      spec.split(',').forEach(pair => {
        const [attr, k] = pair.split(':').map(s => s && s.trim());
        if (attr && k && (dict[k] != null)) el.setAttribute(attr, dict[k]);
      });
    });

    // set .btn-lang active state
    document.querySelectorAll('.btn-lang').forEach(b => {
      const is = b.getAttribute('data-lang') === lang;
      b.classList.toggle('active', is);
      b.setAttribute('aria-pressed', is ? 'true' : 'false');
    });

    // attempt to call global main applyI18n if exposed (keeps site consistent)
    try {
      if (typeof window.applyI18n === 'function') {
        window.applyI18n(lang);
      } else {
        // also dispatch a generic event in case main.js listens
        window.dispatchEvent(new CustomEvent('i18n:changed', { detail: { lang } }));
      }
    } catch (e) { /* noop */ }

    localStorage.setItem('lang', lang);
  }

  /* Bind language buttons (local) */
  function initLangButtons() {
    const btns = Array.from(document.querySelectorAll('.btn-lang'));
    if (!btns.length) return;
    btns.forEach(btn => {
      btn.addEventListener('click', () => {
        const lang = btn.getAttribute('data-lang') || 'en';
        applyLocalI18n(lang);
      });
    });

    // initialize from localStorage (or default en)
    const saved = localStorage.getItem('lang') || 'en';
    applyLocalI18n(saved);
  }

  /* Keep prices updated if localStorage changed in another tab */
  window.addEventListener('storage', (ev) => {
    if (ev.key === 'billing') renderPrices(ev.newValue);
    if (ev.key === 'lang') applyLocalI18n(ev.newValue);
  });

  /* Init on load */
  window.addEventListener('load', () => {
    initBillingButtons();
    initLangButtons();
  });

})();

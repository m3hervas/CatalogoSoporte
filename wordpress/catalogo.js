/* Catálogo Soporte TV para WordPress — generado desde index.html con build_wordpress.py */
(function () {
const host = document.getElementById("catalogo-soporte-app");
if (!host || host.shadowRoot) return;

["https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600;700&display=swap"].forEach(href => {
  if (!document.querySelector(`link[href="${href}"]`)) {
    const l = document.createElement("link");
    l.rel = "stylesheet"; l.href = href;
    document.head.appendChild(l);
  }
});

const shadow = host.attachShadow({ mode: "open" });
shadow.innerHTML = "<style>" + "\n  #catalogo-soporte {\n    --bg: #0A1222;\n    --bg-deep: #111C33;\n    --panel: #FFFFFF;\n    --panel-line: #E4E8ED;\n    --ink: #1B222B;\n    --ink-soft: #5C6672;\n    --paper-shadow: rgba(0,0,0,0.35);\n    --accent: #2B79C2;\n    --accent-soft: #D9E7F5;\n\n    --lenovo: #E2231A;\n    --lenovo-soft: #FBDAD8;\n    --samsung: #1428A0;\n    --samsung-soft: #DCE1F5;\n    --apple: #5B6470;\n    --apple-soft: #E7E9EC;\n\n    --android-tag: #1E8E5A;\n    --android-tag-soft: #D8F0E2;\n    --ipad-tag: #40474F;\n    --ipad-tag-soft: #E7E9EC;\n\n    --ease-out: cubic-bezier(0.23, 1, 0.32, 1);\n    --ease-drawer: cubic-bezier(0.32, 0.72, 0, 1);\n\n    padding-top: env(safe-area-inset-top, 0px);\n    padding-bottom: env(safe-area-inset-bottom, 0px);\n    box-sizing: border-box;\n  }\n\n  @media (prefers-color-scheme: light) {\n    #catalogo-soporte {\n      --bg: #0A1222;\n      --bg-deep: #111C33;\n      --panel: #FFFFFF;\n      --ink: #1B222B;\n    }\n  }\n\n  #catalogo-soporte {\n    --bg: #0A1222;\n    --bg-deep: #111C33;\n    --panel: #FFFFFF;\n    --ink: #1B222B;\n  }\n\n  #catalogo-soporte * { box-sizing: border-box; }\n\n  #catalogo-soporte button, #catalogo-soporte .filter-select { -webkit-tap-highlight-color: transparent; }\n\n  #catalogo-soporte {\n    margin: 0;\n    height: 100%;\n    background: var(--bg);\n    color: var(--panel);\n    font-family: 'Inter', sans-serif;\n    overflow-x: hidden;\n  }\n\n  #catalogo-soporte {\n    min-height: 100%;\n    background: radial-gradient(1200px 640px at 8% -12%, rgba(61,139,255,0.20), transparent 60%),\n                radial-gradient(900px 560px at 100% 112%, rgba(99,102,241,0.16), transparent 60%),\n                var(--bg);\n    background-attachment: fixed;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    padding: 12px 20px 0;\n  }\n\n  \n  #catalogo-soporte #dynamicHero {\n    position: fixed;\n    top: 84px;\n    left: 50%;\n    width: min(1440px, calc(100% - 32px));\n    height: 360px;\n    z-index: 0;\n    border-radius: 24px;\n    overflow: hidden;\n    border: 1px solid rgba(255,255,255,0.14);\n    box-shadow: 0 24px 60px rgba(4,12,24,0.45);\n    opacity: 0;\n    transform: translateX(-50%) translateY(var(--hero-shift, 0px));\n    transition: opacity 0.5s ease;\n    pointer-events: none;\n  }\n\n  #catalogo-soporte #dynamicHero.active { opacity: 1; }\n  #catalogo-soporte #dynamicHero.featured { height: 520px; }\n\n  #catalogo-soporte .hero-media, #catalogo-soporte .hero-shade {\n    position: absolute;\n    inset: 0;\n  }\n\n  #catalogo-soporte .hero-media {\n    background-size: cover;\n    background-repeat: no-repeat;\n    transform: scale(1.08);\n    transition: transform 1.4s cubic-bezier(.2,.7,.2,1);\n  }\n\n  #catalogo-soporte #dynamicHero.active .hero-media { transform: scale(1); }\n\n  @media (max-width: 720px) {\n    #catalogo-soporte #dynamicHero { top: 72px; width: calc(100% - 20px); border-radius: 18px; height: 300px; }\n    #catalogo-soporte #dynamicHero.featured { height: 420px; }\n  }\n\n  @media (prefers-reduced-motion: reduce) {\n    #catalogo-soporte .hero-media { transform: none; transition: none; }\n  }\n\n  \n\n  #catalogo-soporte .bg-power {\n    position: fixed;\n    top: 50%;\n    left: 50%;\n    width: min(70vw, 520px);\n    height: min(70vw, 520px);\n    transform: translate(-50%, -50%);\n    z-index: 0;\n    pointer-events: none;\n    opacity: 0.22;\n    filter: blur(14px);\n  }\n\n  #catalogo-soporte .bg-power svg { width: 100%; height: 100%; }\n\n  #catalogo-soporte .category-card.is-test { position: relative; }\n\n  #catalogo-soporte .test-badge {\n    position: absolute;\n    top: 10px;\n    right: 10px;\n    font-size: 10.5px;\n    font-weight: 700;\n    letter-spacing: 0.06em;\n    padding: 3px 8px;\n    border-radius: 999px;\n    background: #FFF1CC;\n    color: #8A5A00;\n  }\n\n  #catalogo-soporte #pageContent {\n    position: relative;\n    z-index: 1;\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n  }\n\n  #catalogo-soporte header {\n    text-align: center;\n    max-width: 640px;\n    margin-bottom: 30px;\n  }\n\n  #catalogo-soporte .eyebrow {\n    font-family: 'Space Grotesk', sans-serif;\n    font-weight: 600;\n    font-size: 13px;\n    letter-spacing: 0.08em;\n    text-transform: uppercase;\n    color: #BFE0FF;\n    margin: 0 0 12px;\n  }\n\n  #catalogo-soporte .brand-header {\n    display: flex;\n    align-items: center;\n    gap: 12px;\n    justify-content: center;\n    margin-bottom: 14px;\n  }\n\n  #catalogo-soporte .brand-header svg {\n    width: 38px;\n    height: 38px;\n    flex-shrink: 0;\n  }\n\n  #catalogo-soporte h1 {\n    font-family: 'Space Grotesk', sans-serif;\n    font-weight: 700;\n    font-size: clamp(30px, 6vw, 44px);\n    line-height: 1.05;\n    margin: 0;\n    color: #F5F7FA;\n  }\n\n  #catalogo-soporte header p {\n    font-size: 15.5px;\n    line-height: 1.6;\n    color: #B7C1CC;\n    margin: 0;\n    max-width: 48ch;\n    margin-left: auto;\n    margin-right: auto;\n  }\n\n  #catalogo-soporte .filters {\n    display: flex;\n    gap: 10px;\n    flex-wrap: wrap;\n    justify-content: center;\n  }\n\n  #catalogo-soporte .filter-btn {\n    font-family: 'Inter', sans-serif;\n    font-size: 13px;\n    font-weight: 600;\n    padding: 8px 18px;\n    border-radius: 999px;\n    border: 1.5px solid rgba(255,255,255,0.18);\n    background: transparent;\n    color: #C7CFD8;\n    cursor: pointer;\n    transition: color 150ms ease, border-color 150ms ease, background-color 150ms ease;\n  }\n\n  #catalogo-soporte .filter-btn:hover {\n    border-color: var(--accent);\n    color: #F5F7FA;\n  }\n\n  #catalogo-soporte .filter-btn.active {\n    background: var(--accent);\n    border-color: var(--accent);\n    color: #08131F;\n  }\n\n  #catalogo-soporte .landing[hidden], #catalogo-soporte .catalog-view[hidden] {\n    display: none !important;\n  }\n\n  \n  #catalogo-soporte .landing {\n    display: flex;\n    gap: 22px;\n    flex-wrap: wrap;\n    justify-content: center;\n    max-width: 900px;\n  }\n\n  #catalogo-soporte .category-card {\n    width: 190px;\n    background: var(--panel);\n    border: none;\n    border-radius: 12px;\n    padding: 30px 20px 24px;\n    cursor: pointer;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 10px;\n    box-shadow: 0 10px 24px var(--paper-shadow);\n    transition: transform 200ms var(--ease-out), box-shadow 200ms var(--ease-out);\n    font-family: inherit;\n  }\n\n  #catalogo-soporte .category-card:focus-visible {\n    transform: translateY(-4px);\n    box-shadow: 0 16px 30px var(--paper-shadow);\n  }\n\n  @media (hover: hover) and (pointer: fine) {\n    #catalogo-soporte .category-card:hover {\n      transform: translateY(-4px);\n      box-shadow: 0 16px 30px var(--paper-shadow);\n    }\n  }\n\n  #catalogo-soporte .category-card:active { transform: scale(0.97); transition-duration: 120ms; }\n\n  #catalogo-soporte .category-card:focus-visible {\n    outline: 3px solid var(--accent);\n    outline-offset: 3px;\n  }\n\n  #catalogo-soporte .category-icon {\n    width: 72px;\n    height: 72px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  }\n\n  #catalogo-soporte .category-icon svg { width: 100%; height: 100%; }\n\n  #catalogo-soporte .category-label {\n    font-family: 'Space Grotesk', sans-serif;\n    font-weight: 700;\n    font-size: 18px;\n    color: var(--ink);\n  }\n\n  #catalogo-soporte .category-count {\n    font-size: 12px;\n    color: var(--ink-soft);\n  }\n\n  \n  #catalogo-soporte .catalog-view {\n    width: 100%;\n    max-width: 940px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n  }\n\n  #catalogo-soporte .back-btn {\n    align-self: flex-start;\n    background: transparent;\n    border: none;\n    color: #C7CFD8;\n    font-family: 'Inter', sans-serif;\n    font-size: 13.5px;\n    font-weight: 600;\n    cursor: pointer;\n    padding: 6px 0;\n    margin-bottom: 20px;\n  }\n\n  #catalogo-soporte .back-btn { transition: color 150ms ease, transform 150ms var(--ease-out); }\n  @media (hover: hover) and (pointer: fine) { #catalogo-soporte .back-btn:hover { color: #F5F7FA; transform: translateX(-2px); } }\n  #catalogo-soporte .back-btn:active { transform: scale(0.97); }\n\n  #catalogo-soporte .filter-row {\n    display: flex;\n    align-items: center;\n    gap: 14px;\n    flex-wrap: wrap;\n    justify-content: center;\n    margin-bottom: 16px;\n    width: 100%;\n  }\n\n  #catalogo-soporte .filter-label {\n    font-size: 12.5px;\n    font-weight: 700;\n    text-transform: uppercase;\n    letter-spacing: 0.04em;\n    color: #BFD3E8;\n    white-space: nowrap;\n    flex-shrink: 0;\n  }\n\n  @media (max-width: 480px) {\n    #catalogo-soporte .filter-row { justify-content: flex-start; }\n  }\n\n  #catalogo-soporte .filter-row:last-of-type { margin-bottom: 30px; }\n\n  #catalogo-soporte .filter-select {\n    appearance: none;\n    -webkit-appearance: none;\n    font-family: 'Inter', sans-serif;\n    font-size: 13.5px;\n    font-weight: 600;\n    color: #F5F7FA;\n    background: var(--bg-deep) url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"%23C7CFD8\" stroke-width=\"2\"><path d=\"M6 9l6 6 6-6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>') no-repeat right 14px center;\n    background-size: 16px;\n    border: 1.5px solid rgba(255,255,255,0.18);\n    border-radius: 10px;\n    padding: 9px 40px 9px 16px;\n    cursor: pointer;\n    min-width: 160px;\n    max-width: 100%;\n    transition: border-color 0.15s ease;\n  }\n\n  #catalogo-soporte .filter-select:hover {\n    border-color: var(--accent);\n  }\n\n  #catalogo-soporte .filter-select:focus-visible {\n    outline: 2px solid var(--accent);\n    outline-offset: 2px;\n  }\n\n  #catalogo-soporte .filter-select option {\n    background: var(--bg-deep);\n    color: #F5F7FA;\n  }\n\n  \n  #catalogo-soporte .empty-state {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    text-align: center;\n    gap: 8px;\n    padding: 50px 20px 30px;\n    max-width: 380px;\n  }\n\n  #catalogo-soporte .empty-icon {\n    width: 64px;\n    height: 64px;\n    margin-bottom: 10px;\n    opacity: 0.85;\n  }\n\n  #catalogo-soporte .empty-icon svg { width: 100%; height: 100%; }\n\n  #catalogo-soporte .empty-title {\n    font-family: 'Space Grotesk', sans-serif;\n    font-weight: 700;\n    font-size: 18px;\n    color: #F5F7FA;\n    margin: 0;\n  }\n\n  #catalogo-soporte .empty-sub {\n    font-size: 14px;\n    line-height: 1.55;\n    color: #B7C1CC;\n    margin: 0;\n  }\n\n  #catalogo-soporte .grid {\n    display: grid;\n    grid-template-columns: repeat(4, minmax(0, 210px));\n    gap: 18px;\n    width: 100%;\n    max-width: 940px;\n    justify-content: center;\n  }\n\n  @media (max-width: 940px) {\n    #catalogo-soporte .grid { grid-template-columns: repeat(3, minmax(0, 210px)); }\n  }\n\n  @media (max-width: 720px) {\n    #catalogo-soporte .grid { grid-template-columns: repeat(2, minmax(0, 210px)); }\n  }\n\n  @media (max-width: 480px) {\n    #catalogo-soporte .grid { grid-template-columns: minmax(0, 300px); }\n  }\n\n  #catalogo-soporte .card {\n    background: var(--panel);\n    border-radius: 10px;\n    padding: 20px 18px 18px;\n    cursor: pointer;\n    border: none;\n    text-align: left;\n    font-family: inherit;\n    box-shadow: 0 10px 22px var(--paper-shadow);\n    transition: transform 0.16s ease, box-shadow 0.16s ease;\n    display: flex;\n    flex-direction: column;\n    gap: 12px;\n  }\n\n  #catalogo-soporte .card:hover, #catalogo-soporte .card:focus-visible {\n    transform: translateY(-4px);\n    box-shadow: 0 16px 30px var(--paper-shadow);\n  }\n\n  #catalogo-soporte .card:focus-visible {\n    outline: 3px solid var(--accent);\n    outline-offset: 3px;\n  }\n\n  #catalogo-soporte .card.hidden { display: none; }\n\n  #catalogo-soporte .device-stage {\n    aspect-ratio: 1 / 0.85;\n    border-radius: 8px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    background: #F3F5F7;\n    overflow: hidden;\n  }\n\n  #catalogo-soporte .device-stage svg { width: 62%; height: 82%; }\n  #catalogo-soporte .device-stage img { width: 100%; height: 100%; object-fit: contain; padding: 6px; }\n\n  #catalogo-soporte .brand-line {\n    display: flex;\n    align-items: center;\n    gap: 6px;\n  }\n\n  #catalogo-soporte .brand-badge {\n    width: 18px;\n    height: 18px;\n    border-radius: 5px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    font-family: 'Space Grotesk', sans-serif;\n    font-weight: 700;\n    font-size: 10px;\n    color: #fff;\n    flex-shrink: 0;\n  }\n\n  #catalogo-soporte .brand-name {\n    font-size: 12px;\n    font-weight: 600;\n    color: var(--ink-soft);\n    text-transform: uppercase;\n    letter-spacing: 0.03em;\n  }\n\n  #catalogo-soporte .model-name {\n    font-family: 'Space Grotesk', sans-serif;\n    font-weight: 600;\n    font-size: 16px;\n    color: var(--ink);\n    line-height: 1.2;\n  }\n\n  #catalogo-soporte .cat-chip {\n    display: inline-block;\n    font-size: 10.5px;\n    font-weight: 700;\n    padding: 3px 10px;\n    border-radius: 999px;\n    width: fit-content;\n  }\n\n  #catalogo-soporte .card[data-cat=\"android\"] .cat-chip { background: var(--android-tag-soft); color: var(--android-tag); }\n  #catalogo-soporte .card[data-cat=\"ipad\"] .cat-chip { background: var(--ipad-tag-soft); color: var(--ipad-tag); }\n  #catalogo-soporte .card[data-cat=\"phone-android\"] .cat-chip { background: var(--android-tag-soft); color: var(--android-tag); }\n  #catalogo-soporte .card[data-cat=\"phone-apple\"] .cat-chip { background: var(--ipad-tag-soft); color: var(--ipad-tag); }\n  #catalogo-soporte .card[data-cat=\"accessory\"] .cat-chip { background: #EAE3F5; color: #6B4FA0; }\n  #catalogo-soporte .card[data-cat=\"monitor\"] .cat-chip { background: var(--accent-soft); color: #1B4A78; }\n  #catalogo-soporte .card[data-cat=\"connectivity\"] .cat-chip { background: #DDF3F1; color: #0F6E66; }\n\n  #catalogo-soporte .card-hint {\n    font-size: 11px;\n    color: var(--ink-soft);\n    opacity: 0.75;\n    margin-top: -2px;\n  }\n\n  \n  #catalogo-soporte .scrim {\n    position: fixed;\n    inset: 0;\n    background: rgba(6, 9, 12, 0.6);\n    opacity: 0;\n    pointer-events: none;\n    transition: opacity 220ms ease;\n    z-index: 10;\n  }\n\n  #catalogo-soporte .scrim.open { opacity: 1; pointer-events: auto; }\n\n  #catalogo-soporte .panel {\n    position: fixed;\n    left: 50%;\n    bottom: 0;\n    transform: translate(-50%, 100%);\n    width: min(480px, 100%);\n    max-height: min(84vh, 680px);\n    background: var(--panel);\n    border-radius: 26px 26px 0 0;\n    padding: 28px 26px calc(30px + env(safe-area-inset-bottom, 0px));\n    box-shadow: 0 -12px 40px rgba(0,0,0,0.45);\n    transition: transform 340ms var(--ease-drawer);\n    z-index: 11;\n    overflow-y: auto;\n    color: var(--ink);\n  }\n\n  #catalogo-soporte .panel.open { transform: translate(-50%, 0); }\n\n  #catalogo-soporte .panel-top {\n    display: flex;\n    align-items: flex-start;\n    justify-content: space-between;\n    gap: 14px;\n    margin-bottom: 8px;\n  }\n\n  #catalogo-soporte .panel-brand-line {\n    display: flex;\n    align-items: center;\n    gap: 8px;\n    margin-bottom: 4px;\n  }\n\n  #catalogo-soporte .panel-heading h2 {\n    font-family: 'Space Grotesk', sans-serif;\n    font-weight: 700;\n    font-size: 24px;\n    margin: 0 0 8px;\n  }\n\n  #catalogo-soporte .close-btn {\n    background: var(--bg-deep);\n    color: #F5F7FA;\n    border: none;\n    width: 34px;\n    height: 34px;\n    border-radius: 50%;\n    font-size: 18px;\n    line-height: 1;\n    cursor: pointer;\n    flex-shrink: 0;\n  }\n\n  #catalogo-soporte .close-btn { transition: background-color 150ms ease, transform 150ms var(--ease-out); }\n  @media (hover: hover) and (pointer: fine) { #catalogo-soporte .close-btn:hover { background: #000; } }\n  #catalogo-soporte .close-btn:active { transform: scale(0.92); }\n\n  #catalogo-soporte .panel-stage {\n    width: 150px;\n    height: 130px;\n    margin: 8px 0 18px;\n    border-radius: 10px;\n    background: #F3F5F7;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    overflow: hidden;\n  }\n\n  #catalogo-soporte .panel-stage svg { width: 60%; height: 80%; }\n  #catalogo-soporte .panel-stage img { width: 100%; height: 100%; object-fit: contain; padding: 8px; }\n\n  #catalogo-soporte .spec-title {\n    font-size: 11.5px;\n    font-weight: 700;\n    letter-spacing: 0.03em;\n    color: var(--ink-soft);\n    text-transform: uppercase;\n    margin: 0 0 10px;\n  }\n\n  #catalogo-soporte .spec-table {\n    display: grid;\n    grid-template-columns: auto 1fr;\n    row-gap: 10px;\n    column-gap: 16px;\n    margin-bottom: 20px;\n  }\n\n  #catalogo-soporte .spec-label {\n    font-size: 13px;\n    color: var(--ink-soft);\n  }\n\n  #catalogo-soporte .spec-value {\n    font-size: 13.5px;\n    font-weight: 600;\n    color: var(--ink);\n  }\n\n  #catalogo-soporte .rental-tag {\n    display: inline-flex;\n    align-items: center;\n    gap: 6px;\n    background: var(--accent-soft);\n    color: #1B4A78;\n    font-size: 12.5px;\n    font-weight: 700;\n    padding: 6px 14px;\n    border-radius: 999px;\n  }\n\n  #catalogo-soporte .rental-tag::before {\n    content: \"\";\n    width: 7px;\n    height: 7px;\n    border-radius: 50%;\n    background: #1B4A78;\n  }\n\n  \n  #catalogo-soporte .intro {\n    width: 100%;\n    min-height: 62vh;\n    min-height: 62svh;\n    display: flex;\n    flex-direction: column;\n    margin-bottom: 56px;\n  }\n\n  #catalogo-soporte .intro[hidden] { display: none !important; }\n\n  #catalogo-soporte .intro-card {\n    flex: 1;\n    width: 100%;\n    background: var(--panel);\n    color: var(--ink);\n    border-radius: 22px;\n    padding: clamp(28px, 4.5vw, 60px) clamp(24px, 6vw, 96px) clamp(48px, 5vw, 72px);\n    box-shadow: 0 18px 44px var(--paper-shadow);\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    gap: clamp(24px, 5vw, 72px);\n    position: relative;\n  }\n\n  #catalogo-soporte .intro-text { flex: 1 1 0; max-width: 620px; }\n\n  #catalogo-soporte .intro-card h2 {\n    font-family: 'Space Grotesk', sans-serif;\n    font-weight: 700;\n    font-size: clamp(30px, 4.2vw, 52px);\n    line-height: 1.05;\n    margin: 0 0 20px;\n  }\n\n  #catalogo-soporte .intro-card p {\n    font-size: clamp(15px, 1.6vw, 19px);\n    line-height: 1.6;\n    color: var(--ink-soft);\n    margin: 0 0 32px;\n    max-width: 52ch;\n  }\n\n  #catalogo-soporte .primary-btn {\n    font-family: 'Inter', sans-serif;\n    font-size: 15px;\n    font-weight: 700;\n    padding: 12px 26px;\n    border-radius: 999px;\n    border: none;\n    background: var(--accent);\n    color: #FFFFFF;\n    cursor: pointer;\n    transition: background-color 150ms ease, transform 160ms var(--ease-out);\n  }\n\n  #catalogo-soporte .intro-card .primary-btn { font-size: 17px; padding: 16px 36px; }\n\n  @media (hover: hover) and (pointer: fine) { #catalogo-soporte .primary-btn:hover { background: #1F64A5; transform: translateY(-1px); } }\n  #catalogo-soporte .primary-btn:active { transform: scale(0.97); }\n  #catalogo-soporte .primary-btn:focus-visible { outline: 3px solid #BFE0FF; outline-offset: 3px; }\n\n  #catalogo-soporte .intro-logo {\n    flex: 0 0 auto;\n    width: clamp(140px, 22vw, 300px);\n    aspect-ratio: 1;\n    object-fit: contain;\n  }\n\n  #catalogo-soporte .scroll-hint {\n    position: absolute;\n    left: 50%;\n    bottom: 22px;\n    transform: translateX(-50%);\n    background: none;\n    border: none;\n    font-family: 'Inter', sans-serif;\n    font-size: 13px;\n    font-weight: 600;\n    color: var(--ink-soft);\n    cursor: pointer;\n    animation: hint-bob 1.8s ease-in-out infinite;\n  }\n\n  @keyframes hint-bob {\n    0%, 100% { transform: translate(-50%, 0); }\n    50% { transform: translate(-50%, 6px); }\n  }\n\n  @media (max-width: 720px) {\n    #catalogo-soporte .intro-card { flex-direction: column-reverse; justify-content: center; text-align: center; padding-bottom: 64px; }\n    #catalogo-soporte .intro-card p { margin-left: auto; margin-right: auto; }\n    #catalogo-soporte .intro-logo { width: 140px; }\n  }\n\n  @media (prefers-reduced-motion: reduce) { #catalogo-soporte .scroll-hint { animation: none; } }\n\n  \n  #catalogo-soporte .rent-modal {\n    position: fixed;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -46%);\n    width: min(460px, calc(100% - 32px));\n    max-height: calc(100vh - 40px);\n    overflow-y: auto;\n    background: var(--panel);\n    color: var(--ink);\n    border-radius: 18px;\n    padding: 26px 24px 24px;\n    box-shadow: 0 20px 50px rgba(0,0,0,0.45);\n    z-index: 21;\n    opacity: 0;\n    pointer-events: none;\n    transform: translate(-50%, -50%) scale(0.96);\n    transition: opacity 220ms var(--ease-out), transform 220ms var(--ease-out);\n  }\n\n  #catalogo-soporte .rent-modal.open { opacity: 1; pointer-events: auto; transform: translate(-50%, -50%) scale(1); }\n\n  #catalogo-soporte .rent-scrim { z-index: 20; }\n\n  #catalogo-soporte .rent-modal h2 {\n    font-family: 'Space Grotesk', sans-serif;\n    font-weight: 700;\n    font-size: 22px;\n    margin: 0;\n  }\n\n  #catalogo-soporte .rent-modal .lead {\n    font-size: 13.5px;\n    color: var(--ink-soft);\n    line-height: 1.5;\n    margin: 6px 0 18px;\n  }\n\n  #catalogo-soporte .field { display: flex; flex-direction: column; gap: 6px; margin-bottom: 14px; }\n  #catalogo-soporte .field-row { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }\n\n  #catalogo-soporte .field label {\n    font-size: 12.5px;\n    font-weight: 700;\n    color: var(--ink);\n  }\n\n  #catalogo-soporte .field input, #catalogo-soporte .field textarea {\n    font-family: 'Inter', sans-serif;\n    font-size: 14px;\n    color: var(--ink);\n    background: #F5F7FA;\n    border: 1.5px solid var(--panel-line);\n    border-radius: 10px;\n    padding: 10px 12px;\n    width: 100%;\n  }\n\n  #catalogo-soporte .field textarea { min-height: 90px; resize: vertical; }\n\n  #catalogo-soporte .field input:focus, #catalogo-soporte .field textarea:focus {\n    outline: none;\n    border-color: var(--accent);\n    background: #FFFFFF;\n  }\n\n  #catalogo-soporte .field-error { font-size: 12.5px; color: #B42318; margin: -4px 0 12px; min-height: 0; }\n\n  #catalogo-soporte .rent-modal .primary-btn { width: 100%; margin-top: 4px; }\n  #catalogo-soporte .rent-modal .primary-btn:disabled { opacity: 0.6; cursor: wait; transform: none; }\n\n  #catalogo-soporte .rent-done { text-align: center; padding: 10px 0 4px; }\n  #catalogo-soporte .rent-done[hidden], #catalogo-soporte #rentForm[hidden] { display: none; }\n  #catalogo-soporte .rent-done-icon {\n    width: 56px; height: 56px; margin: 0 auto 14px;\n    border-radius: 50%; background: var(--android-tag-soft); color: var(--android-tag);\n    display: flex; align-items: center; justify-content: center;\n    font-size: 28px; font-weight: 700;\n  }\n  #catalogo-soporte .rent-done-title { font-family: 'Space Grotesk', sans-serif; font-weight: 700; font-size: 20px; margin: 0 0 6px; }\n  #catalogo-soporte .rent-done-sub { font-size: 14px; line-height: 1.5; color: var(--ink-soft); margin: 0 0 20px; }\n\n  @media (max-width: 420px) { #catalogo-soporte .field-row { grid-template-columns: 1fr; } }\n\n  \n  \n  #catalogo-soporte #viewStorage, #catalogo-soporte #viewTablets, #catalogo-soporte #viewPhones, #catalogo-soporte #viewAccessories, #catalogo-soporte #viewComputers, #catalogo-soporte #viewSurface, #catalogo-soporte #viewMonitors, #catalogo-soporte #viewConnectivity { max-width: 1421px; }\n\n  #catalogo-soporte .storage-grid {\n    display: grid;\n    grid-template-columns: repeat(auto-fill, minmax(min(100%, 459px), 459px));\n    justify-content: center;\n    gap: 22px;\n    width: 100%;\n  }\n\n  #catalogo-soporte .storage-empty {\n    grid-column: 1 / -1;\n    text-align: center;\n    color: #BFD3E8;\n    font-size: 14px;\n    padding: 30px 0;\n  }\n\n  #catalogo-soporte .storage-card {\n    background: var(--panel);\n    color: var(--ink);\n    border: 2.5px solid var(--accent);\n    border-radius: 16px;\n    overflow: hidden;\n    box-shadow: 0 10px 22px var(--paper-shadow);\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    min-height: 260px;\n  }\n\n  #catalogo-soporte .storage-card.hidden { display: none; }\n\n  \n  #catalogo-soporte button.model-card {\n    font: inherit;\n    text-align: left;\n    padding: 0;\n    cursor: pointer;\n    transition: transform 200ms var(--ease-out), box-shadow 200ms var(--ease-out);\n    -webkit-tap-highlight-color: transparent;\n  }\n\n  #catalogo-soporte button.model-card:focus-visible {\n    transform: translateY(-4px);\n    box-shadow: 0 16px 30px var(--paper-shadow);\n  }\n\n  #catalogo-soporte .model-card .storage-photo img { transition: transform 300ms var(--ease-out); }\n\n  @media (hover: hover) and (pointer: fine) {\n    #catalogo-soporte button.model-card:hover {\n      transform: translateY(-4px);\n      box-shadow: 0 16px 30px var(--paper-shadow);\n    }\n    #catalogo-soporte button.model-card:hover .storage-photo img { transform: scale(1.04); }\n  }\n\n  #catalogo-soporte button.model-card:active { transform: scale(0.98); transition-duration: 120ms; }\n\n  \n  @keyframes card-in {\n    from { opacity: 0; transform: translateY(10px); }\n  }\n\n  #catalogo-soporte .catalog-view.is-entering .storage-card {\n    animation: card-in 360ms var(--ease-out) backwards;\n    animation-delay: calc(min(var(--i, 0), 8) * 40ms);\n  }\n\n  #catalogo-soporte button.model-card:focus-visible { outline: 3px solid #BFE0FF; outline-offset: 3px; }\n\n  #catalogo-soporte .model-card .storage-icons { grid-template-columns: minmax(0, 1fr); }\n\n  #catalogo-soporte .model-card .card-hint { font-size: 11px; color: var(--ink-soft); }\n\n  #catalogo-soporte .storage-photo {\n    background: #F3F5F7;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    padding: 18px;\n  }\n\n  #catalogo-soporte .storage-photo svg, #catalogo-soporte .storage-photo img { width: 100%; height: 100%; object-fit: contain; }\n  #catalogo-soporte .storage-photo img { max-height: 224px; }\n\n  #catalogo-soporte .storage-info {\n    padding: 22px 20px;\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n    min-width: 0;\n  }\n\n  #catalogo-soporte .storage-info .brand-line { display: flex; align-items: center; gap: 8px; }\n  #catalogo-soporte .storage-info h3 {\n    font-family: 'Space Grotesk', sans-serif;\n    font-weight: 700;\n    font-size: 20px;\n    line-height: 1.2;\n    margin: 0;\n  }\n  #catalogo-soporte .storage-info .cat-chip { align-self: flex-start; background: var(--accent-soft); color: #1B4A78; }\n\n  #catalogo-soporte .storage-icons {\n    display: grid;\n    grid-template-columns: repeat(3, minmax(0, 1fr));\n    gap: 8px;\n    margin-top: auto;\n  }\n\n  #catalogo-soporte .storage-icon {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 4px;\n    background: var(--accent-soft);\n    color: #1B4A78;\n    border-radius: 10px;\n    padding: 8px 4px;\n    text-align: center;\n  }\n\n  #catalogo-soporte .storage-icon svg { width: 22px; height: 22px; }\n  #catalogo-soporte .storage-icon-wide { grid-column: 1 / -1; flex-direction: row; justify-content: center; gap: 8px; padding: 8px 10px; }\n  #catalogo-soporte .storage-icons { grid-template-columns: repeat(2, minmax(0, 1fr)); }\n  #catalogo-soporte .storage-icon span { font-size: 11px; font-weight: 700; line-height: 1.2; }\n\n  @media (max-width: 420px) {\n    #catalogo-soporte .storage-card { grid-template-columns: 1fr; }\n    #catalogo-soporte .storage-photo { aspect-ratio: 4 / 3; }\n  }\n\n  #catalogo-soporte footer {\n    margin-top: 44px;\n    font-size: 12.5px;\n    color: #BFD3E8;\n    text-align: center;\n  }\n\n  \n  #catalogo-soporte {\n    --accent: #3D8BFF;\n    --accent-2: #8CC2FF;\n    --line: rgba(255,255,255,0.09);\n    --mute: #93A6BF;\n    --font-display: 'Instrument Serif', Georgia, 'Times New Roman', serif;\n  }\n\n  #catalogo-soporte .bg-power { opacity: 0.10; }\n\n  #catalogo-soporte .scroll-progress {\n    position: fixed;\n    top: 0; left: 0; right: 0;\n    height: 2px;\n    z-index: 60;\n    transform-origin: 0 50%;\n    transform: scaleX(var(--p, 0));\n    background: linear-gradient(90deg, var(--accent), var(--accent-2));\n    pointer-events: none;\n  }\n\n  \n  #catalogo-soporte .site-nav {\n    position: sticky;\n    top: 12px;\n    z-index: 40;\n    width: min(1440px, 100%);\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    gap: 16px;\n    padding: 10px 10px 10px 16px;\n    margin-bottom: 28px;\n    border-radius: 18px;\n    border: 1px solid transparent;\n    transition: background-color 250ms ease, border-color 250ms ease, box-shadow 250ms ease;\n  }\n\n  #catalogo-soporte .site-nav.is-solid {\n    background: rgba(9,15,28,0.72);\n    -webkit-backdrop-filter: blur(16px) saturate(160%);\n    backdrop-filter: blur(16px) saturate(160%);\n    border-color: var(--line);\n    box-shadow: 0 12px 32px rgba(0,0,0,0.35);\n  }\n\n  #catalogo-soporte .nav-brand {\n    display: flex;\n    align-items: center;\n    gap: 10px;\n    color: #F5F7FA;\n    text-decoration: none;\n    font-weight: 700;\n    font-size: 15px;\n    letter-spacing: -0.01em;\n  }\n\n  #catalogo-soporte .nav-brand img { width: 28px; height: 28px; object-fit: contain; }\n\n  #catalogo-soporte .nav-menu { display: flex; align-items: center; gap: 4px; }\n\n  #catalogo-soporte .nav-link {\n    display: inline-flex;\n    align-items: center;\n    gap: 6px;\n    color: #C9D4E3;\n    text-decoration: none;\n    font: 500 14px/1 'Inter', sans-serif;\n    padding: 11px 13px;\n    border-radius: 10px;\n    background: none;\n    border: 0;\n    cursor: pointer;\n    transition: color 150ms ease, background-color 150ms ease;\n  }\n\n  @media (hover: hover) and (pointer: fine) {\n    #catalogo-soporte .nav-link:hover { color: #FFFFFF; background: rgba(255,255,255,0.06); }\n  }\n\n  #catalogo-soporte .nav-link:focus-visible, #catalogo-soporte .nav-dropdown a:focus-visible, #catalogo-soporte .nav-brand:focus-visible { outline: 2px solid var(--accent-2); outline-offset: 2px; }\n\n  #catalogo-soporte .nav-chevron { transition: transform 200ms var(--ease-out); }\n  #catalogo-soporte .nav-group.open .nav-chevron { transform: rotate(180deg); }\n\n  #catalogo-soporte .nav-cta { margin-left: 8px; padding: 11px 18px; font-size: 14px; }\n\n  #catalogo-soporte .nav-group { position: relative; }\n\n  #catalogo-soporte .nav-dropdown {\n    position: absolute;\n    top: calc(100% + 10px);\n    left: 50%;\n    width: 480px;\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    gap: 2px;\n    padding: 8px;\n    border-radius: 16px;\n    background: rgba(12,20,38,0.97);\n    -webkit-backdrop-filter: blur(16px);\n    backdrop-filter: blur(16px);\n    border: 1px solid var(--line);\n    box-shadow: 0 24px 60px rgba(0,0,0,0.5);\n    opacity: 0;\n    pointer-events: none;\n    transform: translate(-50%, -6px) scale(0.98);\n    transform-origin: top center;\n    transition: opacity 180ms var(--ease-out), transform 180ms var(--ease-out);\n  }\n\n  #catalogo-soporte .nav-group.open .nav-dropdown { opacity: 1; pointer-events: auto; transform: translate(-50%, 0) scale(1); }\n\n  #catalogo-soporte .nav-dropdown a {\n    display: block;\n    padding: 11px 12px;\n    border-radius: 10px;\n    color: #E3EAF4;\n    text-decoration: none;\n    font: 600 14px/1.25 'Inter', sans-serif;\n    transition: background-color 150ms ease;\n  }\n\n  #catalogo-soporte .nav-dropdown a small { display: block; margin-top: 3px; color: var(--mute); font-size: 12px; font-weight: 400; }\n\n  @media (hover: hover) and (pointer: fine) {\n    #catalogo-soporte .nav-dropdown a:hover { background: rgba(61,139,255,0.12); }\n  }\n\n  #catalogo-soporte .nav-toggle {\n    display: none;\n    width: 42px;\n    height: 42px;\n    border-radius: 12px;\n    border: 1px solid var(--line);\n    background: rgba(255,255,255,0.04);\n    cursor: pointer;\n    position: relative;\n  }\n\n  #catalogo-soporte .nav-toggle span {\n    position: absolute;\n    left: 12px; right: 12px;\n    height: 2px;\n    border-radius: 2px;\n    background: #F5F7FA;\n    transition: transform 200ms var(--ease-out), top 200ms var(--ease-out);\n  }\n\n  #catalogo-soporte .nav-toggle span:first-child { top: 16px; }\n  #catalogo-soporte .nav-toggle span:last-child { top: 24px; }\n  #catalogo-soporte .site-nav.menu-open .nav-toggle span:first-child { top: 20px; transform: rotate(45deg); }\n  #catalogo-soporte .site-nav.menu-open .nav-toggle span:last-child { top: 20px; transform: rotate(-45deg); }\n\n  @media (max-width: 860px) {\n    #catalogo-soporte .nav-toggle { display: block; }\n    #catalogo-soporte .site-nav { background: rgba(9,15,28,0.72); -webkit-backdrop-filter: blur(16px); backdrop-filter: blur(16px); border-color: var(--line); }\n    #catalogo-soporte .nav-menu {\n      position: absolute;\n      top: calc(100% + 8px);\n      left: 0; right: 0;\n      flex-direction: column;\n      align-items: stretch;\n      gap: 2px;\n      padding: 10px;\n      border-radius: 16px;\n      background: #0C1426;\n      border: 1px solid var(--line);\n      box-shadow: 0 24px 60px rgba(0,0,0,0.5);\n      opacity: 0;\n      pointer-events: none;\n      transform: translateY(-6px);\n      transition: opacity 180ms var(--ease-out), transform 180ms var(--ease-out);\n      max-height: calc(100vh - 100px);\n      overflow-y: auto;\n    }\n    #catalogo-soporte .site-nav.menu-open .nav-menu { opacity: 1; pointer-events: auto; transform: none; }\n    #catalogo-soporte .nav-link { justify-content: space-between; padding: 14px; font-size: 15px; }\n    #catalogo-soporte .nav-dropdown {\n      position: static;\n      width: auto;\n      grid-template-columns: 1fr;\n      transform: none;\n      box-shadow: none;\n      border: 0;\n      background: rgba(255,255,255,0.03);\n      display: none;\n      opacity: 1;\n      pointer-events: auto;\n    }\n    #catalogo-soporte .nav-group.open .nav-dropdown { display: grid; transform: none; }\n    #catalogo-soporte .nav-cta { margin: 6px 0 0; padding: 14px; }\n  }\n\n  \n  #catalogo-soporte .intro-card {\n    background: linear-gradient(160deg, #111D36 0%, #0B1427 100%);\n    color: #F5F7FA;\n    border: 1px solid var(--line);\n    box-shadow: 0 30px 80px rgba(0,0,0,0.45);\n    overflow: hidden;\n    isolation: isolate;\n  }\n\n  #catalogo-soporte .intro-glow {\n    position: absolute;\n    inset: -20%;\n    z-index: -1;\n    background:\n      radial-gradient(520px circle at var(--mx, 72%) var(--my, 38%), rgba(61,139,255,0.38), transparent 60%),\n      radial-gradient(640px circle at calc(var(--mx, 72%) - 28%) calc(var(--my, 38%) + 22%), rgba(99,102,241,0.24), transparent 62%);\n    filter: blur(28px);\n    pointer-events: none;\n  }\n\n  #catalogo-soporte .intro-eyebrow {\n    display: inline-flex;\n    align-items: center;\n    gap: 8px;\n    margin: 0 0 18px !important;\n    padding: 6px 12px;\n    border-radius: 999px;\n    border: 1px solid var(--line);\n    background: rgba(255,255,255,0.04);\n    font-size: 12.5px !important;\n    font-weight: 600;\n    letter-spacing: 0.04em;\n    color: #C9D4E3 !important;\n  }\n\n  #catalogo-soporte .intro-eyebrow .dot { width: 7px; height: 7px; border-radius: 50%; background: #34D399; box-shadow: 0 0 0 4px rgba(52,211,153,0.18); }\n\n  #catalogo-soporte .intro-card h2 {\n    font-family: var(--font-display);\n    font-weight: 400;\n    font-size: clamp(40px, 6vw, 78px);\n    line-height: 1.02;\n    letter-spacing: -0.01em;\n    margin-bottom: 18px;\n  }\n\n  #catalogo-soporte .intro-card h2 em { font-style: italic; color: var(--accent-2); }\n\n  #catalogo-soporte .intro-card p { color: #A9B8CC; }\n\n  #catalogo-soporte .intro-actions { display: flex; flex-wrap: wrap; align-items: center; gap: 12px; }\n\n  #catalogo-soporte .ghost-btn {\n    display: inline-flex;\n    align-items: center;\n    font: 600 17px/1 'Inter', sans-serif;\n    padding: 15px 30px;\n    border-radius: 999px;\n    border: 1px solid rgba(255,255,255,0.18);\n    color: #F5F7FA;\n    text-decoration: none;\n    transition: border-color 150ms ease, background-color 150ms ease, transform 160ms var(--ease-out);\n  }\n\n  @media (hover: hover) and (pointer: fine) {\n    #catalogo-soporte .ghost-btn:hover { border-color: rgba(255,255,255,0.4); background: rgba(255,255,255,0.05); }\n  }\n\n  #catalogo-soporte .ghost-btn:active { transform: scale(0.97); }\n\n  #catalogo-soporte .intro-stats {\n    display: flex;\n    flex-wrap: wrap;\n    gap: clamp(20px, 4vw, 52px);\n    margin: 36px 0 0;\n    padding-top: 26px;\n    border-top: 1px solid var(--line);\n  }\n\n  #catalogo-soporte .intro-stats dt { font-family: var(--font-display); font-size: clamp(34px, 3.4vw, 46px); line-height: 1; color: #FFFFFF; font-variant-numeric: tabular-nums; }\n  #catalogo-soporte .intro-stats dd { margin: 6px 0 0; color: var(--mute); font-size: 13px; }\n\n  @media (max-width: 720px) {\n    #catalogo-soporte .intro-actions, #catalogo-soporte .intro-stats { justify-content: center; }\n  }\n\n  #catalogo-soporte .intro-logo {\n    filter: drop-shadow(0 30px 60px rgba(61,139,255,0.35));\n    animation: logo-float 7s ease-in-out infinite;\n  }\n\n  @keyframes logo-float {\n    0%, 100% { transform: translateY(0); }\n    50% { transform: translateY(-10px); }\n  }\n\n  #catalogo-soporte .scroll-hint { color: var(--mute); }\n\n  \n  #catalogo-soporte .eyebrow { color: var(--accent-2); letter-spacing: 0.14em; font-size: 12px; }\n  #catalogo-soporte h1 { font-family: var(--font-display); font-weight: 400; font-size: clamp(42px, 7vw, 66px); letter-spacing: -0.01em; }\n  #catalogo-soporte header p { color: #A9B8CC; }\n\n  \n  #catalogo-soporte header.in-category .brand-header img { display: none; }\n  #catalogo-soporte header.in-category .eyebrow { color: #FFFFFF; opacity: 0.85; text-shadow: 0 2px 10px rgba(0,0,0,0.6); }\n  #catalogo-soporte header.in-category h1 {\n    font-family: 'Inter', sans-serif;\n    font-weight: 800;\n    font-size: clamp(36px, 5.4vw, 60px);\n    letter-spacing: -0.035em;\n    color: #FFFFFF;\n    text-shadow: 0 4px 28px rgba(0,0,0,0.55);\n  }\n  #catalogo-soporte header.in-category p:last-child {\n    color: #EEF4FB;\n    font-size: clamp(15px, 1.5vw, 18px);\n    font-weight: 500;\n    max-width: 54ch;\n    text-shadow: 0 2px 16px rgba(0,0,0,0.75);\n  }\n\n  \n  #catalogo-soporte .category-card {\n    width: 200px;\n    border-radius: 18px;\n    background: rgba(255,255,255,0.035);\n    border: 1px solid var(--line);\n    box-shadow: none;\n    -webkit-backdrop-filter: blur(6px);\n    backdrop-filter: blur(6px);\n  }\n\n  #catalogo-soporte .category-label { font-family: 'Inter', sans-serif; font-weight: 600; font-size: 16px; letter-spacing: -0.01em; color: #F1F5FB; }\n\n  @media (hover: hover) and (pointer: fine) {\n    #catalogo-soporte .category-card:hover {\n      border-color: rgba(61,139,255,0.55);\n      background: rgba(61,139,255,0.08);\n      box-shadow: 0 0 0 1px rgba(61,139,255,0.2), 0 20px 44px rgba(0,0,0,0.35);\n    }\n  }\n\n  #catalogo-soporte .category-card:focus-visible { outline: 2px solid var(--accent-2); }\n\n  \n  #catalogo-soporte .storage-card { border: 1.5px solid rgba(61,139,255,0.75); border-radius: 18px; }\n  #catalogo-soporte .storage-info h3 { font-family: 'Inter', sans-serif; font-weight: 700; letter-spacing: -0.015em; }\n\n  \n  #catalogo-soporte .filter-label { color: #E6EEF8; letter-spacing: 0.08em; font-size: 11.5px; text-shadow: 0 1px 10px rgba(0,0,0,0.7); }\n  #catalogo-soporte .filter-select { background-color: rgba(10,18,34,0.62); border-color: rgba(255,255,255,0.16); border-radius: 12px; -webkit-backdrop-filter: blur(10px); backdrop-filter: blur(10px); }\n  #catalogo-soporte .back-btn {\n    padding: 8px 14px;\n    border: 1px solid var(--line);\n    border-radius: 999px;\n    background: rgba(255,255,255,0.04);\n    -webkit-backdrop-filter: blur(8px);\n    backdrop-filter: blur(8px);\n  }\n\n  \n  #catalogo-soporte .site-footer {\n    width: min(1440px, 100%);\n    margin-top: 80px;\n    padding: 48px clamp(20px, 4vw, 48px) 28px;\n    border-top: 1px solid var(--line);\n    color: #A9B8CC;\n    text-align: left;\n    font-size: 14px;\n  }\n\n  #catalogo-soporte .footer-grid { display: grid; grid-template-columns: 2fr 1fr 1fr; gap: 40px; }\n  #catalogo-soporte .footer-logo { display: flex; align-items: center; gap: 10px; margin-bottom: 14px; color: #F5F7FA; font-size: 17px; }\n  #catalogo-soporte .footer-brand p { max-width: 42ch; line-height: 1.6; margin: 0 0 18px; }\n  #catalogo-soporte .footer-col { display: flex; flex-direction: column; gap: 10px; }\n  #catalogo-soporte .footer-col h4 { margin: 0 0 6px; color: #F5F7FA; font: 600 13px 'Inter', sans-serif; letter-spacing: 0.08em; text-transform: uppercase; }\n  #catalogo-soporte .footer-col a { color: #A9B8CC; text-decoration: none; transition: color 150ms ease; }\n  @media (hover: hover) and (pointer: fine) { #catalogo-soporte .footer-col a:hover { color: #FFFFFF; } }\n  #catalogo-soporte .footer-bottom { display: flex; flex-wrap: wrap; justify-content: space-between; gap: 10px; margin-top: 40px; padding-top: 20px; border-top: 1px solid var(--line); color: var(--mute); font-size: 12.5px; }\n\n  @media (max-width: 720px) {\n    #catalogo-soporte .footer-grid { grid-template-columns: 1fr 1fr; }\n    #catalogo-soporte .footer-brand { grid-column: 1 / -1; }\n  }\n\n  \n  #catalogo-soporte #pageContent.js-ready .reveal {\n    opacity: 0;\n    translate: 0 18px;\n    transition: opacity 700ms var(--ease-out), translate 700ms var(--ease-out),\n                transform 200ms var(--ease-out), box-shadow 200ms var(--ease-out),\n                border-color 200ms ease, background-color 200ms ease;\n    transition-delay: calc(var(--i, 0) * 55ms), calc(var(--i, 0) * 55ms), 0s, 0s, 0s, 0s;\n  }\n\n  #catalogo-soporte #pageContent.js-ready .reveal.is-visible { opacity: 1; translate: none; }\n\n  \n  @media (prefers-reduced-motion: reduce) {\n    #catalogo-soporte .intro-logo { animation: none; }\n  }\n\n  /* --- Integraci\u00f3n WordPress --- */\n  #catalogo-soporte {\n    position: relative;\n    width: 100vw;\n    max-width: 100vw;\n    margin-left: calc(50% - 50vw);\n    margin-right: calc(50% - 50vw);\n    height: auto;\n    min-height: 0;\n    overflow: hidden;\n    line-height: normal;\n    text-align: left;\n  }\n  #catalogo-soporte .bg-power, #catalogo-soporte #dynamicHero { position: absolute; }\n  #catalogo-soporte .bg-power { top: 50vh; }\n  #catalogo-soporte .scrim, #catalogo-soporte .rent-scrim { z-index: 99990; }\n  #catalogo-soporte .panel { z-index: 99991; }\n  #catalogo-soporte .rent-modal { z-index: 99992; }\n  #catalogo-soporte .intro { min-height: 62vh; }\n  #catalogo-soporte :where(h1, h2, h3, p, span, label, div) {\n    font-family: inherit; text-transform: none; letter-spacing: normal;\n  }\n  #catalogo-soporte :where(h1, h2, h3)::before, #catalogo-soporte :where(h1, h2, h3)::after { content: none; }\n  #catalogo-soporte :where(button, input, select, textarea) {\n    font-family: inherit; text-transform: none; letter-spacing: normal;\n    line-height: normal; min-height: 0; box-shadow: none; text-shadow: none;\n    margin: 0; width: auto; height: auto;\n  }\n  #catalogo-soporte :where(img) { max-width: none; height: auto; border: 0; box-shadow: none; border-radius: 0; }\n  #catalogo-soporte .scroll-progress { display: none; }\n  #catalogo-soporte .site-nav { top: 8px; }\n  #catalogo-soporte :where(header, footer, section, nav) {\n    background: none; border: 0; box-shadow: none; padding: 0; position: static;\n  }\n\n  :host { all: initial; display: block; }\n  #catalogo-soporte { width: 100%; max-width: none; margin: 0; }\n" + "</style>" + "<div id=\"catalogo-soporte\">\n<div class=\"bg-power\" aria-hidden=\"true\">\n  <svg viewBox=\"0 0 100 100\" xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" stroke=\"#8CC8FF\" stroke-width=\"9\" stroke-linecap=\"round\">\n    <path d=\"M32 26a32 32 0 1 0 36 0\"/>\n    <path d=\"M50 12v36\"/>\n  </svg>\n</div>\n\n<div id=\"dynamicHero\" aria-hidden=\"true\">\n  <div class=\"hero-media\" id=\"heroMedia\"></div>\n  <div class=\"hero-shade\" id=\"heroShade\"></div>\n</div>\n\n<div id=\"pageContent\">\n\n<div class=\"scroll-progress\" id=\"scrollProgress\" aria-hidden=\"true\"></div>\n\n<nav class=\"site-nav\" id=\"siteNav\" aria-label=\"Principal\">\n  <a class=\"nav-brand\" href=\"#\" data-nav=\"home\">\n    <img src=\"https://m3hervas.github.io/CatalogoSoporte/img/0c071240beed.webp\" alt=\"\" width=\"28\" height=\"28\">\n    <span>Soporte TV</span>\n  </a>\n  <button class=\"nav-toggle\" id=\"navToggle\" aria-expanded=\"false\" aria-controls=\"navMenu\" aria-label=\"Abrir men\u00fa\">\n    <span></span><span></span>\n  </button>\n  <div class=\"nav-menu\" id=\"navMenu\">\n    <a class=\"nav-link\" href=\"#\" data-nav=\"home\">Inicio</a>\n    <div class=\"nav-group\" id=\"navCatalog\">\n      <button class=\"nav-link\" id=\"navCatalogBtn\" aria-expanded=\"false\" aria-controls=\"navDropdown\">\n        Cat\u00e1logo\n        <svg class=\"nav-chevron\" viewBox=\"0 0 24 24\" width=\"14\" height=\"14\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M6 9l6 6 6-6\"/></svg>\n      </button>\n      <div class=\"nav-dropdown\" id=\"navDropdown\">\n        <a href=\"#tablets\" data-route=\"tablets\">Tablets<small>Android y iPad</small></a>\n        <a href=\"#moviles\" data-route=\"moviles\">M\u00f3viles<small>Android y iPhone</small></a>\n        <a href=\"#ordenadores\" data-route=\"ordenadores\">Ordenadores<small>Port\u00e1tiles, AIO y Mac</small></a>\n        <a href=\"#surface\" data-route=\"surface\">Surface<small>Microsoft Surface Pro</small></a>\n        <a href=\"#monitores\" data-route=\"monitores\">Monitores<small>LED, 4K y estudio</small></a>\n        <a href=\"#almacenamiento\" data-route=\"almacenamiento\">Almacenamiento<small>SSD port\u00e1tiles y de escritorio</small></a>\n        <a href=\"#conectividad\" data-route=\"conectividad\">Conectividad<small>MiFi, routers y Wi-Fi</small></a>\n        <a href=\"#accesorios\" data-route=\"accesorios\">Accesorios<small>Estabilizadores, luz, audio</small></a>\n      </div>\n    </div>\n    <a class=\"nav-link\" href=\"#contacto\" data-nav=\"contact\">Contacto</a>\n    <button class=\"primary-btn nav-cta\" data-nav=\"rent\">Alquilar ahora</button>\n  </div>\n</nav>\n\n<section class=\"intro\" id=\"intro\">\n  <div class=\"intro-card\">\n    <div class=\"intro-glow\" aria-hidden=\"true\"></div>\n    <div class=\"intro-text\">\n      <p class=\"intro-eyebrow\"><span class=\"dot\" aria-hidden=\"true\"></span>Soporte TV \u00b7 Alquiler profesional</p>\n      <h2>Alquiler de dispositivos para <em>eventos y producciones</em></h2>\n      <p>Tablets, m\u00f3viles, ordenadores y accesorios listos para tu evento, rodaje o producci\u00f3n. Elige el equipo que necesitas y te lo preparamos configurado y revisado.</p>\n      <div class=\"intro-actions\">\n        <button class=\"primary-btn\" id=\"openRent\">Alquilar ahora</button>\n        <a class=\"ghost-btn\" href=\"#catalogo\" data-nav=\"catalog\">Ver cat\u00e1logo</a>\n      </div>\n      <dl class=\"intro-stats\">\n        <div><dt data-count=\"models\">83</dt><dd>modelos disponibles</dd></div>\n        <div><dt data-count=\"categories\">8</dt><dd>categor\u00edas</dd></div>\n        <div><dt data-count=\"brands\">20</dt><dd>marcas</dd></div>\n      </dl>\n    </div>\n    <img class=\"intro-logo\" id=\"introLogo\" alt=\"Logo Soporte TV\">\n    <button class=\"scroll-hint\" id=\"scrollHint\">Ver cat\u00e1logo \u2193</button>\n  </div>\n</section>\n\n<header class=\"reveal\" id=\"catalogo\">\n  <p class=\"eyebrow\" id=\"catEyebrow\">Cat\u00e1logo interno</p>\n  <div class=\"brand-header\">\n    <img src=\"https://m3hervas.github.io/CatalogoSoporte/img/0c071240beed.webp\" alt=\"Logo Soporte TV\" style=\"width:38px;height:38px;object-fit:contain;\">\n    <h1 id=\"catTitle\">Soporte TV</h1>\n  </div>\n  <p id=\"catDesc\">Elige una categor\u00eda para ver los productos disponibles para alquiler.</p>\n</header>\n\n<div class=\"landing\" id=\"viewLanding\">\n  <button class=\"category-card\" id=\"goTablets\">\n    <div class=\"category-icon\" id=\"tabletIconLarge\"></div>\n    <span class=\"category-label\">Tablets</span>\n  </button>\n  <button class=\"category-card\" id=\"goPhones\">\n    <div class=\"category-icon\" id=\"phoneIconLarge\"></div>\n    <span class=\"category-label\">M\u00f3viles</span>\n  </button>\n  <button class=\"category-card\" id=\"goAccessories\">\n    <div class=\"category-icon\" id=\"accessoryIconLarge\"></div>\n    <span class=\"category-label\">Accesorios</span>\n  </button>\n  <button class=\"category-card\" id=\"goComputers\">\n    <div class=\"category-icon\" id=\"computerIconLarge\"></div>\n    <span class=\"category-label\">Ordenadores</span>\n  </button>\n  <button class=\"category-card\" id=\"goSurface\">\n    <div class=\"category-icon\" id=\"surfaceIconLarge\"></div>\n    <span class=\"category-label\">Surface</span>\n  </button>\n  <button class=\"category-card\" id=\"goMonitors\">\n    <div class=\"category-icon\" id=\"monitorIconLarge\"></div>\n    <span class=\"category-label\">Monitores</span>\n  </button>\n  <button class=\"category-card\" id=\"goConnectivity\">\n    <div class=\"category-icon\" id=\"connectivityIconLarge\"></div>\n    <span class=\"category-label\">Conectividad</span>\n  </button>\n  <button class=\"category-card\" id=\"goStorage\">\n    <div class=\"category-icon\" id=\"storageIconLarge\"></div>\n    <span class=\"category-label\">Almacenamiento</span>\n  </button>\n</div>\n\n<div class=\"catalog-view\" id=\"viewTablets\" hidden>\n  <button class=\"back-btn\" data-back>\u2190 Volver</button>\n\n  <div class=\"filter-row\">\n    <span class=\"filter-label\">Marca</span>\n    <select class=\"filter-select\" id=\"brandSelect\">\n      <option value=\"all\">Todas las marcas</option>\n      <option value=\"Lenovo\">Lenovo</option>\n      <option value=\"Samsung\">Samsung</option>\n      <option value=\"Apple\">Apple</option>\n    </select>\n  </div>\n\n  <div class=\"filter-row\">\n    <span class=\"filter-label\">Almacenamiento</span>\n    <select class=\"filter-select\" id=\"storageSelect\">\n      <option value=\"all\">Todos</option>\n      <option value=\"32 GB\">32 GB</option>\n      <option value=\"64 GB\">64 GB</option>\n      <option value=\"128 GB\">128 GB</option>\n      <option value=\"256 GB\">256 GB</option>\n    </select>\n  </div>\n\n  <div class=\"storage-grid\" id=\"grid\"></div>\n</div>\n\n<div class=\"catalog-view\" id=\"viewPhones\" hidden>\n  <button class=\"back-btn\" data-back>\u2190 Volver</button>\n\n  <div class=\"filter-row\">\n    <span class=\"filter-label\">Marca</span>\n    <select class=\"filter-select\" id=\"phoneBrandSelect\">\n      <option value=\"all\">Todas las marcas</option>\n      <option value=\"Xiaomi\">Xiaomi</option>\n      <option value=\"Samsung\">Samsung</option>\n      <option value=\"Apple\">Apple</option>\n    </select>\n  </div>\n\n  <div class=\"filter-row\">\n    <span class=\"filter-label\">Almacenamiento</span>\n    <select class=\"filter-select\" id=\"phoneStorageSelect\">\n      <option value=\"all\">Todos</option>\n      <option value=\"128 GB\">128 GB</option>\n      <option value=\"256 GB\">256 GB</option>\n      <option value=\"512 GB\">512 GB</option>\n    </select>\n  </div>\n\n  <div class=\"storage-grid\" id=\"gridPhones\"></div>\n</div>\n\n<div class=\"catalog-view\" id=\"viewAccessories\" hidden>\n  <button class=\"back-btn\" data-back>\u2190 Volver</button>\n\n  <div class=\"filter-row\">\n    <span class=\"filter-label\">Tipo</span>\n    <select class=\"filter-select\" id=\"accessoryTypeSelect\">\n      <option value=\"all\">Todos</option>\n      <option value=\"M\u00f3vil/C\u00e1mara\">M\u00f3vil / C\u00e1mara</option>\n      <option value=\"iPad\">iPad</option>\n    </select>\n  </div>\n\n  <div class=\"filter-row\">\n    <span class=\"filter-label\">Marca</span>\n    <select class=\"filter-select\" id=\"accessoryBrandSelect\">\n      <option value=\"all\">Todas las marcas</option>\n      <option value=\"Apple\">Apple</option>\n      <option value=\"Zhiyun\">Zhiyun</option>\n      <option value=\"Celly\">Celly</option>\n      <option value=\"Wacom\">Wacom</option>\n      <option value=\"Sin marca\">Sin marca</option>\n    </select>\n  </div>\n\n  <div class=\"storage-grid\" id=\"gridAccessories\"></div>\n</div>\n\n<div class=\"catalog-view\" id=\"viewComputers\" hidden>\n  <button class=\"back-btn\" data-back>\u2190 Volver</button>\n\n  <div class=\"filter-row\">\n    <span class=\"filter-label\">Tipo</span>\n    <select class=\"filter-select\" id=\"computerTypeSelect\">\n      <option value=\"all\">Todos</option>\n      <option value=\"Port\u00e1til\">Port\u00e1til</option>\n      <option value=\"AIO\">AIO (Todo en uno)</option>\n      <option value=\"iMac\">iMac</option>\n      <option value=\"CPU\">CPU</option>\n      <option value=\"CPU + Monitor\">CPU + Monitor</option>\n    </select>\n  </div>\n\n  <div class=\"filter-row\">\n    <span class=\"filter-label\">Marca</span>\n    <select class=\"filter-select\" id=\"computerBrandSelect\">\n      <option value=\"all\">Todas las marcas</option>\n      <option value=\"Apple\">Apple</option>\n      <option value=\"HP\">HP</option>\n      <option value=\"Multimarca\">Multimarca (Dell/HP/Lenovo)</option>\n    </select>\n  </div>\n\n  <div class=\"storage-grid\" id=\"gridComputers\"></div>\n</div>\n\n<div class=\"catalog-view\" id=\"viewSurface\" hidden>\n  <button class=\"back-btn\" data-back>\u2190 Volver</button>\n\n  <div class=\"filter-row\">\n    <span class=\"filter-label\">Procesador</span>\n    <select class=\"filter-select\" id=\"surfaceCpuSelect\">\n      <option value=\"all\">Todos</option>\n      <option value=\"i5\">Intel Core i5</option>\n      <option value=\"i7\">Intel Core i7</option>\n    </select>\n  </div>\n\n  <div class=\"filter-row\">\n    <span class=\"filter-label\">Almacenamiento</span>\n    <select class=\"filter-select\" id=\"surfaceStorageSelect\">\n      <option value=\"all\">Todos</option>\n      <option value=\"128 GB\">128 GB</option>\n      <option value=\"256 GB\">256 GB</option>\n      <option value=\"512 GB\">512 GB</option>\n    </select>\n  </div>\n\n  <div class=\"storage-grid\" id=\"gridSurface\"></div>\n</div>\n\n<div class=\"catalog-view\" id=\"viewMonitors\" hidden>\n  <button class=\"back-btn\" data-back>\u2190 Volver</button>\n\n  <div class=\"filter-row\">\n    <span class=\"filter-label\">Tipo</span>\n    <select class=\"filter-select\" id=\"monitorTypeSelect\">\n      <option value=\"all\">Todos</option>\n      <option value=\"LED\">LED</option>\n      <option value=\"4K\">4K</option>\n      <option value=\"Estudio 4K\">Estudio 4K</option>\n    </select>\n  </div>\n\n  <div class=\"filter-row\">\n    <span class=\"filter-label\">Tama\u00f1o</span>\n    <select class=\"filter-select\" id=\"monitorSizeSelect\">\n      <option value=\"all\">Todos</option>\n      <option value=\"24''\">24''</option>\n      <option value=\"27''\">27''</option>\n      <option value=\"65''\">65''</option>\n    </select>\n  </div>\n\n  <div class=\"storage-grid\" id=\"gridMonitors\"></div>\n</div>\n\n<div class=\"catalog-view\" id=\"viewConnectivity\" hidden>\n  <button class=\"back-btn\" data-back>\u2190 Volver</button>\n\n  <div class=\"filter-row\">\n    <span class=\"filter-label\">Tipo</span>\n    <select class=\"filter-select\" id=\"connTypeSelect\">\n      <option value=\"all\">Todos</option>\n      <option value=\"MiFi\">MiFi</option>\n      <option value=\"Router\">Router</option>\n      <option value=\"Punto de acceso\">Punto de acceso</option>\n    </select>\n  </div>\n\n  <div class=\"filter-row\">\n    <span class=\"filter-label\">Red</span>\n    <select class=\"filter-select\" id=\"connNetSelect\">\n      <option value=\"all\">Todas</option>\n      <option value=\"4G\">4G</option>\n      <option value=\"5G\">5G</option>\n    </select>\n  </div>\n\n  <div class=\"filter-row\">\n    <span class=\"filter-label\">Datos</span>\n    <select class=\"filter-select\" id=\"connDataSelect\">\n      <option value=\"all\">Todos</option>\n      <option value=\"240 GB\">Tarjeta de datos 240 GB</option>\n      <option value=\"Ilimitados\">Datos ilimitados</option>\n    </select>\n  </div>\n\n  <div class=\"storage-grid\" id=\"gridConnectivity\"></div>\n</div>\n\n<div class=\"catalog-view\" id=\"viewStorage\" hidden>\n  <button class=\"back-btn\" data-back>\u2190 Volver</button>\n\n  <div class=\"filter-row\">\n    <span class=\"filter-label\">Almacenamiento</span>\n    <select class=\"filter-select\" id=\"storageCapSelect\">\n      <option value=\"all\">Todas las capacidades</option>\n    </select>\n  </div>\n\n  <div class=\"filter-row\">\n    <span class=\"filter-label\">Velocidad</span>\n    <select class=\"filter-select\" id=\"storageSpeedSelect\">\n      <option value=\"all\">Todas</option>\n      <option value=\"0-1000\">Hasta 1000 MB/s</option>\n      <option value=\"1000-2000\">De 1000 a 2000 MB/s</option>\n      <option value=\"2000-99999\">M\u00e1s de 2000 MB/s</option>\n    </select>\n  </div>\n\n  <div class=\"storage-grid\" id=\"gridStorage\"></div>\n</div>\n\n<div class=\"catalog-view\" id=\"viewTest\" hidden>\n  <button class=\"back-btn\" data-back>\u2190 Volver</button>\n  <div class=\"empty-state\">\n    <div class=\"empty-icon\" id=\"testIconEmpty\"></div>\n    <p class=\"empty-title\">Productos en PRUEBA</p>\n    <p class=\"empty-sub\">Aqu\u00ed aparecer\u00e1n los equipos que estamos probando antes de a\u00f1adirlos al cat\u00e1logo de alquiler.</p>\n  </div>\n</div>\n\n<footer class=\"site-footer reveal\" id=\"contacto\">\n  <div class=\"footer-grid\">\n    <div class=\"footer-brand\">\n      <div class=\"footer-logo\">\n        <img src=\"https://m3hervas.github.io/CatalogoSoporte/img/0c071240beed.webp\" alt=\"\" width=\"32\" height=\"32\">\n        <strong>Soporte TV</strong>\n      </div>\n      <p>Alquiler de dispositivos para eventos, rodajes y producciones. Equipos configurados y revisados antes de cada entrega.</p>\n      <button class=\"primary-btn\" data-nav=\"rent\">Solicitar alquiler</button>\n    </div>\n    <div class=\"footer-col\">\n      <h4>Cat\u00e1logo</h4>\n      <a href=\"#tablets\" data-route=\"tablets\">Tablets</a>\n      <a href=\"#moviles\" data-route=\"moviles\">M\u00f3viles</a>\n      <a href=\"#ordenadores\" data-route=\"ordenadores\">Ordenadores</a>\n      <a href=\"#surface\" data-route=\"surface\">Surface</a>\n    </div>\n    <div class=\"footer-col\">\n      <h4>M\u00e1s equipos</h4>\n      <a href=\"#monitores\" data-route=\"monitores\">Monitores</a>\n      <a href=\"#almacenamiento\" data-route=\"almacenamiento\">Almacenamiento</a>\n      <a href=\"#conectividad\" data-route=\"conectividad\">Conectividad</a>\n      <a href=\"#accesorios\" data-route=\"accesorios\">Accesorios</a>\n    </div>\n  </div>\n  <div class=\"footer-bottom\">\n    <span>\u00a9 <span id=\"footerYear\">2026</span> Soporte TV</span>\n    <span>Cat\u00e1logo interno de equipos disponibles para alquiler</span>\n  </div>\n</footer>\n\n<div class=\"scrim\" id=\"scrim\"></div>\n<div class=\"panel\" id=\"panel\" role=\"dialog\" aria-modal=\"true\" aria-labelledby=\"panel-name\"></div>\n\n<div class=\"scrim rent-scrim\" id=\"rentScrim\"></div>\n<div class=\"rent-modal\" id=\"rentModal\" role=\"dialog\" aria-modal=\"true\" aria-labelledby=\"rentTitle\">\n  <div class=\"panel-top\">\n    <h2 id=\"rentTitle\">Solicitar alquiler</h2>\n    <button class=\"close-btn\" id=\"rentClose\" aria-label=\"Cerrar\">\u2715</button>\n  </div>\n  <p class=\"lead\">Cu\u00e9ntanos qu\u00e9 necesitas y te responderemos por correo lo antes posible.</p>\n  <form id=\"rentForm\" novalidate>\n    <div class=\"field\">\n      <label for=\"rentName\">Nombre</label>\n      <input id=\"rentName\" type=\"text\" autocomplete=\"name\" required>\n    </div>\n    <div class=\"field\">\n      <label for=\"rentEmail\">Tu correo</label>\n      <input id=\"rentEmail\" type=\"email\" autocomplete=\"email\" required>\n    </div>\n    <div class=\"field-row\">\n      <div class=\"field\">\n        <label for=\"rentFrom\">Desde</label>\n        <input id=\"rentFrom\" type=\"date\">\n      </div>\n      <div class=\"field\">\n        <label for=\"rentTo\">Hasta</label>\n        <input id=\"rentTo\" type=\"date\">\n      </div>\n    </div>\n    <div class=\"field\">\n      <label for=\"rentMsg\">\u00bfQu\u00e9 necesitas?</label>\n      <textarea id=\"rentMsg\" placeholder=\"Ej.: 4 iPad y 2 port\u00e1tiles para un evento\" required></textarea>\n    </div>\n    <p class=\"field-error\" id=\"rentError\" role=\"alert\"></p>\n    <button type=\"submit\" class=\"primary-btn\" id=\"rentSubmit\">Enviar solicitud</button>\n  </form>\n  <div class=\"rent-done\" id=\"rentDone\" hidden>\n    <div class=\"rent-done-icon\" aria-hidden=\"true\">\u2713</div>\n    <p class=\"rent-done-title\">\u00a1Solicitud enviada!</p>\n    <p class=\"rent-done-sub\">Gracias. Te contestaremos lo antes posible al correo que nos has indicado.</p>\n    <button type=\"button\" class=\"primary-btn\" id=\"rentDoneClose\">Cerrar</button>\n  </div>\n</div>\n\n</div>\n</div>";
const catRoot = shadow.getElementById("catalogo-soporte");

// Ocupar todo el ancho de la ventana aunque el tema meta el contenido en una columna
function fitFullWidth() {
  const st = host.style;
  st.setProperty("display", "block", "important");
  st.setProperty("margin-left", "0px", "important");
  st.setProperty("margin-right", "0px", "important");
  st.setProperty("padding", "0", "important");
  const w = document.documentElement.clientWidth;
  const left = host.getBoundingClientRect().left;
  st.setProperty("width", w + "px", "important");
  st.setProperty("max-width", w + "px", "important");
  st.setProperty("margin-left", -left + "px", "important");
}
fitFullWidth();
window.addEventListener("resize", fitFullWidth);

function tabletIcon(accent) {
  return `<svg viewBox="0 0 100 120" xmlns="http://www.w3.org/2000/svg">
    <rect x="6" y="4" width="88" height="112" rx="5" fill="#EDEFF2" stroke="${accent}" stroke-width="3"/>
    <rect x="14" y="16" width="72" height="88" rx="1.5" fill="#D9DEE4"/>
    <circle cx="50" cy="10" r="2.2" fill="${accent}"/>
    <rect x="38" y="108" width="24" height="4" rx="1" fill="${accent}"/>
  </svg>`;
}

function ipadIcon(accent) {
  return `<svg viewBox="0 0 100 120" xmlns="http://www.w3.org/2000/svg">
    <rect x="8" y="3" width="84" height="114" rx="7" fill="#F2F3F5" stroke="${accent}" stroke-width="2.5"/>
    <rect x="15" y="12" width="70" height="96" rx="2" fill="#DDE1E5"/>
    <circle cx="50" cy="7.5" r="1.8" fill="${accent}"/>
  </svg>`;
}

function appleBadge() {
  return `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M16.4 12.9c0-2.1 1.7-3.1 1.8-3.2-1-1.4-2.5-1.6-3-1.6-1.3-.1-2.5.8-3.1.8-.6 0-1.6-.7-2.7-.7-1.4 0-2.6.8-3.3 2-1.4 2.5-.4 6.1 1 8.1.7 1 1.5 2.1 2.6 2 1-.1 1.4-.7 2.7-.7 1.2 0 1.6.7 2.7.6 1.1 0 1.8-1 2.5-2 .8-1.2 1.1-2.3 1.1-2.4-.1 0-2.2-.8-2.2-3.3zM14.2 6.4c.6-.7 1-1.7.9-2.7-.9.1-1.9.6-2.5 1.3-.5.6-1 1.6-.9 2.6 1 .1 1.9-.5 2.5-1.2z" fill="#000"/>
  </svg>`;
}

function tabletIconLarge(accent) {
  return `<svg viewBox="0 0 100 120" xmlns="http://www.w3.org/2000/svg">
    <rect x="6" y="4" width="88" height="112" rx="6" fill="#EDEFF2" stroke="${accent}" stroke-width="4"/>
    <rect x="15" y="17" width="70" height="86" rx="2" fill="#D9DEE4"/>
    <circle cx="50" cy="10" r="2.6" fill="${accent}"/>
    <rect x="37" y="107" width="26" height="4.5" rx="1" fill="${accent}"/>
  </svg>`;
}

function phoneIcon(accent) {
  return `<svg viewBox="0 0 70 120" xmlns="http://www.w3.org/2000/svg">
    <rect x="4" y="4" width="62" height="112" rx="9" fill="#EDEFF2" stroke="${accent}" stroke-width="4"/>
    <rect x="11" y="16" width="48" height="84" rx="2" fill="#D9DEE4"/>
    <circle cx="35" cy="10" r="2.4" fill="${accent}"/>
    <rect x="24" y="106" width="22" height="4" rx="1" fill="${accent}"/>
  </svg>`;
}

function accessoryIcon(accent) {
  return `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <rect x="10" y="10" width="80" height="80" rx="16" fill="#EDEFF2" stroke="${accent}" stroke-width="4"/>
    <circle cx="50" cy="50" r="16" fill="none" stroke="${accent}" stroke-width="4"/>
    <line x1="50" y1="24" x2="50" y2="34" stroke="${accent}" stroke-width="4" stroke-linecap="round"/>
    <line x1="50" y1="66" x2="50" y2="76" stroke="${accent}" stroke-width="4" stroke-linecap="round"/>
    <line x1="24" y1="50" x2="34" y2="50" stroke="${accent}" stroke-width="4" stroke-linecap="round"/>
    <line x1="66" y1="50" x2="76" y2="50" stroke="${accent}" stroke-width="4" stroke-linecap="round"/>
  </svg>`;
}

function laptopIcon(accent) {
  return `<svg viewBox="0 0 120 100" xmlns="http://www.w3.org/2000/svg">
    <rect x="20" y="8" width="80" height="56" rx="4" fill="#EDEFF2" stroke="${accent}" stroke-width="3.5"/>
    <rect x="26" y="14" width="68" height="44" rx="1.5" fill="#D9DEE4"/>
    <path d="M8 80h104l-8 12H16z" fill="#EDEFF2" stroke="${accent}" stroke-width="3.5" stroke-linejoin="round"/>
  </svg>`;
}

function desktopIcon(accent) {
  return `<svg viewBox="0 0 120 100" xmlns="http://www.w3.org/2000/svg">
    <rect x="14" y="10" width="92" height="58" rx="4" fill="#EDEFF2" stroke="${accent}" stroke-width="3.5"/>
    <rect x="20" y="16" width="80" height="46" rx="1.5" fill="#D9DEE4"/>
    <rect x="48" y="68" width="24" height="10" fill="${accent}"/>
    <rect x="34" y="78" width="52" height="6" rx="2" fill="${accent}"/>
  </svg>`;
}

function testIcon(accent) {
  return `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="${accent}" stroke-width="5" stroke-linecap="round" stroke-linejoin="round">
    <path d="M38 12h24M42 12v26L22 76a8 8 0 0 0 7 12h42a8 8 0 0 0 7-12L58 38V12"/>
    <path d="M30 64h40" stroke-width="4"/>
  </svg>`;
}

function monitorIcon(accent) {
  return `<svg viewBox="0 0 120 100" xmlns="http://www.w3.org/2000/svg">
    <rect x="10" y="8" width="100" height="62" rx="4" fill="#EDEFF2" stroke="${accent}" stroke-width="3.5"/>
    <rect x="17" y="15" width="86" height="48" rx="1.5" fill="#D9DEE4"/>
    <path d="M52 70h16l4 14H48z" fill="${accent}"/>
    <rect x="38" y="84" width="44" height="5" rx="2.5" fill="${accent}"/>
  </svg>`;
}

function routerIcon(accent) {
  return `<svg viewBox="0 0 120 100" xmlns="http://www.w3.org/2000/svg">
    <path d="M34 52V16M86 52V16" stroke="${accent}" stroke-width="4" stroke-linecap="round"/>
    <rect x="14" y="52" width="92" height="30" rx="8" fill="#EDEFF2" stroke="${accent}" stroke-width="3.5"/>
    <circle cx="32" cy="67" r="3" fill="${accent}"/>
    <circle cx="44" cy="67" r="3" fill="${accent}"/>
    <circle cx="56" cy="67" r="3" fill="${accent}"/>
  </svg>`;
}

function mifiIcon(accent) {
  return `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <rect x="16" y="26" width="68" height="50" rx="14" fill="#EDEFF2" stroke="${accent}" stroke-width="3.5"/>
    <path d="M35 52a21 21 0 0 1 30 0M41 58a12 12 0 0 1 18 0" fill="none" stroke="${accent}" stroke-width="3.5" stroke-linecap="round"/>
    <circle cx="50" cy="64" r="3.2" fill="${accent}"/>
  </svg>`;
}

function accessPointIcon(accent) {
  return `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <path d="M28 34a31 31 0 0 1 44 0M37 43a18 18 0 0 1 26 0" fill="none" stroke="${accent}" stroke-width="3.5" stroke-linecap="round"/>
    <circle cx="50" cy="50" r="3.2" fill="${accent}"/>
    <ellipse cx="50" cy="72" rx="34" ry="13" fill="#EDEFF2" stroke="${accent}" stroke-width="3.5"/>
    <circle cx="50" cy="72" r="3" fill="${accent}"/>
  </svg>`;
}

function driveIcon(accent) {
  return `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <rect x="22" y="12" width="56" height="76" rx="12" fill="#EDEFF2" stroke="${accent}" stroke-width="3.5"/>
    <rect x="32" y="24" width="36" height="40" rx="5" fill="#D9DEE4"/>
    <circle cx="50" cy="76" r="3.5" fill="${accent}"/>
  </svg>`;
}

// Drawn drive (until real photos are added): label, body colour, accent colour and shape
function driveArt(label, body, accent, shape = "loop") {
  const text = (y, size = 13) => `<text x="80" y="${y}" text-anchor="middle" font-family="Inter, sans-serif" font-size="${size}" font-weight="700" fill="#E9ECEF">${label}</text>`;
  if (shape === "desk") {
    return `<svg viewBox="0 0 160 120" xmlns="http://www.w3.org/2000/svg">
      <rect x="40" y="8" width="80" height="104" rx="14" fill="${body}"/>
      <rect x="40" y="96" width="80" height="16" rx="8" fill="${accent}"/>
      ${text(60, 12)}
    </svg>`;
  }
  if (shape === "blade") {
    return `<svg viewBox="0 0 160 120" xmlns="http://www.w3.org/2000/svg">
      <rect x="14" y="40" width="132" height="40" rx="8" fill="${body}"/>
      <rect x="14" y="40" width="18" height="40" rx="6" fill="${accent}"/>
      ${text(65, 11)}
    </svg>`;
  }
  if (shape === "raid") {
    const bays = Array.from({ length: 8 }, (_, i) => `<rect x="${30 + i * 13}" y="34" width="9" height="52" rx="2" fill="${accent}"/>`).join("");
    return `<svg viewBox="0 0 160 120" xmlns="http://www.w3.org/2000/svg">
      <rect x="18" y="16" width="124" height="88" rx="10" fill="${body}"/>
      ${bays}
      ${text(100, 9)}
    </svg>`;
  }
  if (shape === "dock") {
    return `<svg viewBox="0 0 160 120" xmlns="http://www.w3.org/2000/svg">
      <rect x="32" y="10" width="96" height="100" rx="16" fill="${body}"/>
      <circle cx="80" cy="50" r="22" fill="none" stroke="${accent}" stroke-width="4"/>
      ${text(96, 11)}
    </svg>`;
  }
  const detail = shape === "phone"
    ? `<circle cx="80" cy="60" r="26" fill="none" stroke="${accent}" stroke-width="4" opacity="0.8"/>`
    : `<path d="M110 14h10a18 18 0 0 1 18 18v10h-12a16 16 0 0 0-16-16z" fill="${accent}"/>
       <circle cx="124" cy="28" r="5" fill="${body}"/>`;
  return `<svg viewBox="0 0 160 120" xmlns="http://www.w3.org/2000/svg">
    <rect x="22" y="14" width="116" height="92" rx="18" fill="${body}"/>
    <rect x="28" y="20" width="104" height="80" rx="14" fill="#FFFFFF" opacity="0.07"/>
    ${detail}
    ${text(66)}
    <rect x="70" y="102" width="20" height="4" rx="2" fill="#1E2126"/>
  </svg>`;
}

const STORAGE_ICONS = {
  cpu: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="6" y="6" width="12" height="12" rx="2"/><path d="M9 2v4M15 2v4M9 18v4M15 18v4M2 9h4M2 15h4M18 9h4M18 15h4"/></svg>`,
  screen: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="12" rx="2"/><path d="M9 20h6M12 16v4"/></svg>`,
  signal: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.5a10 10 0 0 1 14 0M8.5 16a5 5 0 0 1 7 0"/><circle cx="12" cy="19.5" r="1"/></svg>`,
  tag: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.6 13.4 13.4 20.6a2 2 0 0 1-2.8 0L3 13V3h10l7.6 7.6a2 2 0 0 1 0 2.8z"/><circle cx="7.5" cy="7.5" r="1.5"/></svg>`,
  capacity: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5.5" rx="7.5" ry="2.5"/><path d="M4.5 5.5v13c0 1.4 3.4 2.5 7.5 2.5s7.5-1.1 7.5-2.5v-13"/><path d="M4.5 12c0 1.4 3.4 2.5 7.5 2.5s7.5-1.1 7.5-2.5"/></svg>`,
  speed: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M13 3 5 14h6l-1 7 8-11h-6z"/></svg>`,
  port: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="8.5" width="18" height="7" rx="3.5"/><path d="M8 12h8"/></svg>`
};

function surfaceIcon(accent) {
  return `<svg viewBox="0 0 110 100" xmlns="http://www.w3.org/2000/svg">
    <rect x="12" y="6" width="86" height="62" rx="5" fill="#EDEFF2" stroke="${accent}" stroke-width="3.5"/>
    <rect x="19" y="13" width="72" height="48" rx="1.5" fill="#D9DEE4"/>
    <path d="M30 74h50l12 18H18z" fill="none" stroke="${accent}" stroke-width="3.5" stroke-linejoin="round"/>
  </svg>`;
}

const PRODUCTS = [
  {
    cat: "android", catLabel: "Tablet Android", brand: "Lenovo", brandCode: "L", brandColor: "var(--lenovo)",
    model: "Lenovo Tab",
    photo: "https://m3hervas.github.io/CatalogoSoporte/img/8e1960cc2518.webp",
    storage: "128 GB",
    icon: tabletIcon("#E2231A"),
    specs: [
      ["Categoría", "Tablet Android"],
      ["RAM", "4 GB"],
      ["Almacenamiento", "128 GB"],
      ["Procesador", "Octa-core"],
      ["Pantalla", "10,1 ''"]
    ]
  },
  {
    cat: "android", catLabel: "Tablet Android", brand: "Samsung", brandCode: "S", brandColor: "var(--samsung)",
    model: "Galaxy Tab A8",
    photo: "https://m3hervas.github.io/CatalogoSoporte/img/32ab31015f6d.webp",
    storage: "64 GB",
    icon: tabletIcon("#1428A0"),
    specs: [
      ["Categoría", "Tablet Android"],
      ["Almacenamiento", "64 GB"],
      ["Procesador", "Octa-core"],
      ["Pantalla", "10,5 ''"]
    ]
  },
  {
    cat: "android", catLabel: "Tablet Android", brand: "Samsung", brandCode: "S", brandColor: "var(--samsung)",
    model: "Galaxy Tab S9 Ultra",
    storage: "256 GB",
    photo: "https://m3hervas.github.io/CatalogoSoporte/img/d8dff3425faf.webp",
    icon: tabletIcon("#1428A0"),
    specs: [
      ["Categoría", "Tablet Android"],
      ["Almacenamiento", "256 GB"],
      ["Tipo de pantalla", "Dynamic AMOLED"],
      ["Pantalla", "14,6 ''"]
    ]
  },
  {
    cat: "ipad", catLabel: "iPad", brand: "Apple", brandCode: "A", brandColor: "var(--apple)",
    model: "iPad (5.ª generación)",
    photo: "https://m3hervas.github.io/CatalogoSoporte/img/a15b07509bed.webp",
    storage: "No especificado",
    icon: ipadIcon("#5B6470"),
    specs: [
      ["Categoría", "iPad"],
      ["Conectividad", "Wi-Fi"],
      ["Pantalla", "9,7 ''"]
    ]
  },
  {
    cat: "ipad", catLabel: "iPad", brand: "Apple", brandCode: "A", brandColor: "var(--apple)",
    model: "iPad (6.ª generación)",
    storage: "32 GB",
    photo: "https://m3hervas.github.io/CatalogoSoporte/img/91c90cb13796.webp",
    icon: ipadIcon("#5B6470"),
    specs: [
      ["Categoría", "iPad"],
      ["Almacenamiento", "32 GB"],
      ["Conectividad", "Wi-Fi"],
      ["Pantalla", "9,7 ''"]
    ]
  },
  {
    cat: "ipad", catLabel: "iPad", brand: "Apple", brandCode: "A", brandColor: "var(--apple)",
    model: "iPad (7.ª generación)",
    photo: "https://m3hervas.github.io/CatalogoSoporte/img/9bcd7f77dd4a.webp",
    storage: "32 GB",
    icon: ipadIcon("#5B6470"),
    specs: [
      ["Categoría", "iPad"],
      ["Almacenamiento", "32 GB"],
      ["Conectividad", "Wi-Fi"],
      ["Pantalla", "10,2 ''"]
    ]
  },
  {
    cat: "ipad", catLabel: "iPad", brand: "Apple", brandCode: "A", brandColor: "var(--apple)",
    model: "iPad (9.ª generación)",
    storage: "64 GB",
    photo: "https://m3hervas.github.io/CatalogoSoporte/img/67735d535de7.webp",
    icon: ipadIcon("#5B6470"),
    specs: [
      ["Categoría", "iPad"],
      ["Almacenamiento", "64 GB"],
      ["Conectividad", "Wi-Fi"],
      ["Pantalla", "10,2 ''"]
    ]
  },
  {
    cat: "ipad", catLabel: "iPad", brand: "Apple", brandCode: "A", brandColor: "var(--apple)",
    model: "iPad A16 (11.ª generación)",
    photo: "https://m3hervas.github.io/CatalogoSoporte/img/c66b71f8c552.webp",
    storage: "128 GB",
    icon: ipadIcon("#5B6470"),
    specs: [
      ["Categoría", "iPad"],
      ["Almacenamiento", "128 GB"],
      ["Conectividad", "Wi-Fi"],
      ["Pantalla", "11 ''"]
    ]
  },
  {
    cat: "ipad", catLabel: "iPad", brand: "Apple", brandCode: "A", brandColor: "var(--apple)",
    model: "iPad Air",
    photo: "https://m3hervas.github.io/CatalogoSoporte/img/b72c91bd6aa0.webp",
    storage: "64 GB",
    icon: ipadIcon("#5B6470"),
    specs: [
      ["Categoría", "iPad"],
      ["Almacenamiento", "64 GB"],
      ["Conectividad", "Wi-Fi + Cellular"],
      ["Pantalla", "10,5 ''"]
    ]
  },
  {
    cat: "ipad", catLabel: "iPad", brand: "Apple", brandCode: "A", brandColor: "var(--apple)",
    model: "iPad Air (M2)",
    photo: "https://m3hervas.github.io/CatalogoSoporte/img/aec32ce438e6.webp",
    storage: "128 GB",
    icon: ipadIcon("#5B6470"),
    specs: [
      ["Categoría", "iPad"],
      ["Almacenamiento", "128 GB"],
      ["Chip", "M2"],
      ["Conectividad", "Wi-Fi"],
      ["Pantalla", "13 ''"]
    ]
  },
  {
    cat: "ipad", catLabel: "iPad", brand: "Apple", brandCode: "A", brandColor: "var(--apple)",
    model: "iPad Pro",
    storage: "128 GB",
    photo: "https://m3hervas.github.io/CatalogoSoporte/img/b6e3d7465e9c.webp",
    icon: ipadIcon("#5B6470"),
    specs: [
      ["Categoría", "iPad"],
      ["Almacenamiento", "128 GB"],
      ["Conectividad", "Wi-Fi + Cellular"],
      ["Pantalla", "11 ''"]
    ]
  },
  {
    cat: "ipad", catLabel: "iPad", brand: "Apple", brandCode: "A", brandColor: "var(--apple)",
    model: "iPad Pro (4.ª generación)",
    photo: "https://m3hervas.github.io/CatalogoSoporte/img/3b9d1e8e7485.webp",
    storage: "128 GB",
    icon: ipadIcon("#5B6470"),
    specs: [
      ["Categoría", "iPad"],
      ["Almacenamiento", "128 GB"],
      ["Conectividad", "Wi-Fi + Cellular"],
      ["Pantalla", "12,9 ''"]
    ]
  },
  {
    cat: "ipad", catLabel: "iPad", brand: "Apple", brandCode: "A", brandColor: "var(--apple)",
    model: "iPad Pro",
    storage: "256 GB",
    photo: "https://m3hervas.github.io/CatalogoSoporte/img/b6e3d7465e9c.webp",
    icon: ipadIcon("#5B6470"),
    specs: [
      ["Categoría", "iPad"],
      ["Almacenamiento", "256 GB"],
      ["Pantalla", "11 ''"]
    ]
  }
];

const PHONES = [
  {
    cat: "phone-android", catLabel: "Móvil Android", brand: "Xiaomi", brandCode: "X", brandColor: "#FF6900",
    model: "Redmi Note 14", storage: "128 GB",
    photo: "https://m3hervas.github.io/CatalogoSoporte/img/d250bcf54915.webp",
    icon: phoneIcon("#FF6900"),
    specs: [
      ["Categoría", "Móvil Android"],
      ["Almacenamiento", "128 GB"],
      ["Pantalla", "6,67 ''"]
    ]
  },
  {
    cat: "phone-android", catLabel: "Móvil Android", brand: "Xiaomi", brandCode: "X", brandColor: "#FF6900",
    model: "Redmi 10 5G", storage: "128 GB",
    photo: "https://m3hervas.github.io/CatalogoSoporte/img/d1108cec7d67.webp",
    icon: phoneIcon("#FF6900"),
    specs: [
      ["Categoría", "Móvil Android"],
      ["Almacenamiento", "128 GB"],
      ["Pantalla", "6,58 ''"]
    ]
  },
  {
    cat: "phone-android", catLabel: "Móvil Android", brand: "Xiaomi", brandCode: "X", brandColor: "#FF6900",
    model: "Redmi 15C", storage: "128 GB",
    photo: "https://m3hervas.github.io/CatalogoSoporte/img/146814daab3b.webp",
    icon: phoneIcon("#FF6900"),
    specs: [
      ["Categoría", "Móvil Android"],
      ["Almacenamiento", "128 GB"],
      ["Pantalla", "6,9 ''"]
    ]
  },
  {
    cat: "phone-android", catLabel: "Móvil Android", brand: "Xiaomi", brandCode: "X", brandColor: "#FF6900",
    model: "Redmi 15C", storage: "256 GB",
    photo: "https://m3hervas.github.io/CatalogoSoporte/img/146814daab3b.webp",
    icon: phoneIcon("#FF6900"),
    specs: [
      ["Categoría", "Móvil Android"],
      ["Almacenamiento", "256 GB"],
      ["Pantalla", "6,9 ''"]
    ]
  },
  {
    cat: "phone-android", catLabel: "Móvil Android", brand: "Samsung", brandCode: "S", brandColor: "var(--samsung)",
    model: "Galaxy S24", storage: "128 GB",
    photo: "https://m3hervas.github.io/CatalogoSoporte/img/0c7b6bc00335.webp",
    icon: phoneIcon("#1428A0"),
    specs: [
      ["Categoría", "Móvil Android"],
      ["Almacenamiento", "128 GB"],
      ["Pantalla", "6,2 ''"]
    ]
  },
  {
    cat: "phone-android", catLabel: "Móvil Android", brand: "Samsung", brandCode: "S", brandColor: "var(--samsung)",
    model: "Galaxy S24", storage: "256 GB",
    photo: "https://m3hervas.github.io/CatalogoSoporte/img/0c7b6bc00335.webp",
    icon: phoneIcon("#1428A0"),
    specs: [
      ["Categoría", "Móvil Android"],
      ["Almacenamiento", "256 GB"],
      ["Pantalla", "6,2 ''"]
    ]
  },
  {
    cat: "phone-android", catLabel: "Móvil Android", brand: "Samsung", brandCode: "S", brandColor: "var(--samsung)",
    model: "Galaxy S25 FE", storage: "256 GB",
    photo: "https://m3hervas.github.io/CatalogoSoporte/img/b7033547deed.webp",
    icon: phoneIcon("#1428A0"),
    specs: [
      ["Categoría", "Móvil Android"],
      ["Almacenamiento", "256 GB"],
      ["Pantalla", "6,7 ''"]
    ]
  },
  {
    cat: "phone-apple", catLabel: "iPhone", brand: "Apple", brandCode: "A", brandColor: "var(--apple)",
    model: "iPhone 16 Pro", storage: "512 GB",
    photo: "https://m3hervas.github.io/CatalogoSoporte/img/bd56f9618090.webp",
    icon: phoneIcon("#5B6470"),
    specs: [
      ["Categoría", "iPhone"],
      ["Almacenamiento", "512 GB"],
      ["Pantalla", "6,3 ''"]
    ]
  },
  {
    cat: "phone-apple", catLabel: "iPhone", brand: "Apple", brandCode: "A", brandColor: "var(--apple)",
    model: "iPhone 17 Pro", storage: "512 GB",
    photo: "https://m3hervas.github.io/CatalogoSoporte/img/7f61abb0b486.webp",
    icon: phoneIcon("#5B6470"),
    specs: [
      ["Categoría", "iPhone"],
      ["Almacenamiento", "512 GB"],
      ["Pantalla", "6,3 ''"]
    ]
  }
];

const ACCESSORIES = [
  {
    cat: "accessory", catLabel: "Accesorio", group: "Móvil/Cámara", brand: "Apple", brandCode: "A", brandColor: "var(--apple)",
    model: "Adaptador USB-C a USB",
    icon: accessoryIcon("#5B6470"),
    specs: [
      ["Categoría", "Accesorio · Móvil/Cámara"],
      ["Marca", "Apple"]
    ]
  },
  {
    cat: "accessory", catLabel: "Accesorio", group: "Móvil/Cámara", brand: "Zhiyun", brandCode: "Z", brandColor: "#6B4FA0",
    model: "Smooth X Combo",
    icon: accessoryIcon("#6B4FA0"),
    specs: [
      ["Categoría", "Accesorio · Móvil/Cámara"],
      ["Tipo", "Estabilizador combo para móvil"]
    ]
  },
  {
    cat: "accessory", catLabel: "Accesorio", group: "Móvil/Cámara", brand: "", brandCode: "", brandColor: "#5C6672",
    model: "Aro de luz",
    icon: accessoryIcon("#5C6672"),
    specs: [
      ["Categoría", "Accesorio · Móvil/Cámara"]
    ]
  },
  {
    cat: "accessory", catLabel: "Accesorio", group: "Móvil/Cámara", brand: "", brandCode: "", brandColor: "#5C6672",
    model: "Micrófono inalámbrico",
    icon: accessoryIcon("#5C6672"),
    specs: [
      ["Categoría", "Accesorio · Móvil/Cámara"]
    ]
  },
  {
    cat: "accessory", catLabel: "Accesorio", group: "Móvil/Cámara", brand: "Celly", brandCode: "C", brandColor: "#E4572E",
    model: "Trípode",
    icon: accessoryIcon("#E4572E"),
    specs: [
      ["Categoría", "Accesorio · Móvil/Cámara"],
      ["Detalle", "360º / 19 cm"]
    ]
  },
  {
    cat: "accessory", catLabel: "Accesorio", group: "Móvil/Cámara", brand: "", brandCode: "", brandColor: "#5C6672",
    model: "Power bank",
    icon: accessoryIcon("#5C6672"),
    specs: [
      ["Categoría", "Accesorio · Móvil/Cámara"],
      ["Capacidad", "10000 mAh"],
      ["Conector", "USB-C"]
    ]
  },
  {
    cat: "accessory", catLabel: "Accesorio", group: "iPad", brand: "", brandCode: "", brandColor: "#5C6672",
    model: "Funda Rugged / Correa",
    icon: accessoryIcon("#5C6672"),
    specs: [
      ["Categoría", "Accesorio · iPad"]
    ]
  },
  {
    cat: "accessory", catLabel: "Accesorio", group: "iPad", brand: "", brandCode: "", brandColor: "#5C6672",
    model: "Funda con teclado",
    icon: accessoryIcon("#5C6672"),
    specs: [
      ["Categoría", "Accesorio · iPad"],
      ["Compatibilidad", "iPad 7.ª / 8.ª / 9.ª generación"]
    ]
  },
  {
    cat: "accessory", catLabel: "Accesorio", group: "iPad", brand: "Wacom", brandCode: "W", brandColor: "#0090C8",
    model: "Bamboo Fineline",
    icon: accessoryIcon("#0090C8"),
    specs: [
      ["Categoría", "Accesorio · iPad"],
      ["Marca", "Wacom"]
    ]
  },
  {
    cat: "accessory", catLabel: "Accesorio", group: "iPad", brand: "Apple", brandCode: "A", brandColor: "var(--apple)",
    model: "Apple Pencil",
    icon: accessoryIcon("#5B6470"),
    specs: [
      ["Categoría", "Accesorio · iPad"],
      ["Marca", "Apple"]
    ]
  }
];

const COMPUTERS = [
  {
    cat: "computer", catLabel: "Portátil", type: "Portátil", brand: "Multimarca", brandCode: "M", brandColor: "#5C6672",
    model: "Portátil i5 / 8GB / 256GB SSD / 14''",
    icon: laptopIcon("#5C6672"),
    specs: [
      ["Categoría", "Portátil"],
      ["Marcas disponibles", "Dell / HP / Lenovo"],
      ["Procesador", "Intel Core i5"],
      ["RAM", "8 GB"],
      ["Almacenamiento", "256 GB SSD"],
      ["Pantalla", "14 ''"],
      ["Incluye", "Maletín y ratón"]
    ]
  },
  {
    cat: "computer", catLabel: "Portátil", type: "Portátil", brand: "Multimarca", brandCode: "M", brandColor: "#5C6672",
    model: "Portátil i5 / 16GB / 256GB SSD / 14''",
    icon: laptopIcon("#5C6672"),
    specs: [
      ["Categoría", "Portátil"],
      ["Marcas disponibles", "Dell / HP / Lenovo"],
      ["Procesador", "Intel Core i5"],
      ["RAM", "16 GB"],
      ["Almacenamiento", "256 GB SSD"],
      ["Pantalla", "14 ''"],
      ["Incluye", "Maletín y ratón"]
    ]
  },
  {
    cat: "computer", catLabel: "Portátil", type: "Portátil", brand: "Multimarca", brandCode: "M", brandColor: "#5C6672",
    model: "Portátil i7 / 16GB / 256GB SSD / 14''",
    icon: laptopIcon("#5C6672"),
    specs: [
      ["Categoría", "Portátil"],
      ["Marcas disponibles", "Dell / HP / Lenovo"],
      ["Procesador", "Intel Core i7"],
      ["RAM", "16 GB"],
      ["Almacenamiento", "256 GB SSD"],
      ["Pantalla", "14 ''"],
      ["Incluye", "Maletín y ratón"]
    ]
  },
  {
    cat: "computer", catLabel: "Portátil", type: "Portátil", brand: "HP", brandCode: "H", brandColor: "#0096D6",
    model: "HP ZBook",
    icon: laptopIcon("#0096D6"),
    specs: [
      ["Categoría", "Portátil"],
      ["Marca", "HP"],
      ["Procesador", "Intel Core i7"],
      ["RAM", "32 GB"],
      ["Almacenamiento", "512 GB SSD"],
      ["Gráfica", "NVIDIA Quadro M2000"],
      ["Pantalla", "15,6 ''"],
      ["Incluye", "Maletín y ratón"]
    ]
  },
  {
    cat: "computer", catLabel: "Portátil", type: "Portátil", brand: "HP", brandCode: "H", brandColor: "#0096D6",
    model: "HP Victus",
    icon: laptopIcon("#0096D6"),
    specs: [
      ["Categoría", "Portátil"],
      ["Marca", "HP"],
      ["Procesador", "Intel Core i7"],
      ["RAM", "16 GB"],
      ["Almacenamiento", "512 GB SSD"],
      ["Gráfica", "NVIDIA RTX 3050"],
      ["Pantalla", "16 ''"],
      ["Incluye", "Maletín y ratón"]
    ]
  },
  {
    cat: "computer", catLabel: "Portátil", type: "Portátil", brand: "Apple", brandCode: "A", brandColor: "var(--apple)",
    model: "MacBook Pro 13''",
    icon: laptopIcon("#5B6470"),
    specs: [
      ["Categoría", "Portátil"],
      ["Marca", "Apple"],
      ["Pantalla", "13 ''"],
      ["Nota", "Configuración de entrada (desde)"]
    ]
  },
  {
    cat: "computer", catLabel: "Portátil", type: "Portátil", brand: "Apple", brandCode: "A", brandColor: "var(--apple)",
    model: "MacBook Air 13,6'' M1",
    icon: laptopIcon("#5B6470"),
    specs: [
      ["Categoría", "Portátil"],
      ["Chip", "Apple M1 (8 CPU / 7 GPU)"],
      ["RAM", "16 GB"],
      ["Almacenamiento", "256 GB SSD"],
      ["Pantalla", "13,6 ''"],
      ["Nota", "Configuración de entrada (desde)"]
    ]
  },
  {
    cat: "computer", catLabel: "Portátil", type: "Portátil", brand: "Apple", brandCode: "A", brandColor: "var(--apple)",
    model: "MacBook Air 13,6'' M2",
    icon: laptopIcon("#5B6470"),
    specs: [
      ["Categoría", "Portátil"],
      ["Chip", "Apple M2 (8 CPU / 8 GPU)"],
      ["RAM", "8 GB"],
      ["Almacenamiento", "256 GB SSD"],
      ["Pantalla", "13,6 ''"],
      ["Nota", "Configuración de entrada (desde)"]
    ]
  },
  {
    cat: "computer", catLabel: "Portátil", type: "Portátil", brand: "Apple", brandCode: "A", brandColor: "var(--apple)",
    model: "MacBook Air 13,6'' M4",
    icon: laptopIcon("#5B6470"),
    specs: [
      ["Categoría", "Portátil"],
      ["Chip", "Apple M4 (10 CPU / 8 GPU)"],
      ["RAM", "16 GB"],
      ["Almacenamiento", "256 GB SSD"],
      ["Pantalla", "13,6 ''"],
      ["Nota", "Configuración de entrada (desde)"]
    ]
  },
  {
    cat: "computer", catLabel: "Portátil", type: "Portátil", brand: "Apple", brandCode: "A", brandColor: "var(--apple)",
    model: "MacBook Pro 14'' M1 Pro",
    icon: laptopIcon("#5B6470"),
    specs: [
      ["Categoría", "Portátil"],
      ["Chip", "Apple M1 Pro"],
      ["RAM", "16 GB"],
      ["Almacenamiento", "512 GB SSD"],
      ["Pantalla", "14 ''"],
      ["Nota", "Configuración de entrada (desde)"]
    ]
  },
  {
    cat: "computer", catLabel: "Portátil", type: "Portátil", brand: "Apple", brandCode: "A", brandColor: "var(--apple)",
    model: "MacBook Pro 16''",
    icon: laptopIcon("#5B6470"),
    specs: [
      ["Categoría", "Portátil"],
      ["Procesador", "Intel Core i9"],
      ["RAM", "64 GB"],
      ["Almacenamiento", "1 TB SSD"],
      ["Pantalla", "16 ''"],
      ["Nota", "Configuración de entrada (desde)"]
    ]
  },
  {
    cat: "computer", catLabel: "AIO", type: "AIO", brand: "Multimarca", brandCode: "M", brandColor: "#5C6672",
    model: "AIO (Todo en uno) i5 / 16GB / 256GB SSD / 23,6''",
    icon: desktopIcon("#5C6672"),
    specs: [
      ["Categoría", "AIO (Todo en uno)"],
      ["Marcas disponibles", "HP / Dell / Lenovo"],
      ["Procesador", "Intel Core i5"],
      ["RAM", "16 GB"],
      ["Almacenamiento", "256 GB SSD"],
      ["Pantalla", "23,6 ''"],
      ["Incluye", "Ratón y teclado"]
    ]
  },
  {
    cat: "computer", catLabel: "iMac", type: "iMac", brand: "Apple", brandCode: "A", brandColor: "var(--apple)",
    model: "iMac 24''",
    icon: desktopIcon("#5B6470"),
    specs: [
      ["Categoría", "iMac"],
      ["Marca", "Apple"],
      ["Pantalla", "24 ''"],
      ["Nota", "Configuración de entrada (desde)"]
    ]
  },
  {
    cat: "computer", catLabel: "CPU", type: "CPU", brand: "Apple", brandCode: "A", brandColor: "var(--apple)",
    model: "Mac Mini",
    icon: desktopIcon("#5B6470"),
    specs: [
      ["Categoría", "CPU"],
      ["Marca", "Apple"],
      ["Nota", "Configuración de entrada (desde)"]
    ]
  },
  {
    cat: "computer", catLabel: "CPU", type: "CPU", brand: "Apple", brandCode: "A", brandColor: "var(--apple)",
    model: "Mac Studio",
    icon: desktopIcon("#5B6470"),
    specs: [
      ["Categoría", "CPU"],
      ["Marca", "Apple"],
      ["Nota", "Configuración de entrada (desde)"]
    ]
  },
  {
    cat: "computer", catLabel: "CPU", type: "CPU", brand: "Multimarca", brandCode: "M", brandColor: "#5C6672",
    model: "CPU i5 / 16GB / 256GB SSD",
    icon: desktopIcon("#5C6672"),
    specs: [
      ["Categoría", "CPU"],
      ["Marcas disponibles", "HP / Dell / Lenovo"],
      ["Procesador", "Intel Core i5"],
      ["RAM", "16 GB"],
      ["Almacenamiento", "256 GB SSD"],
      ["Incluye", "Ratón y teclado"]
    ]
  },
  {
    cat: "computer", catLabel: "CPU + Monitor", type: "CPU + Monitor", brand: "Multimarca", brandCode: "M", brandColor: "#5C6672",
    model: "CPU + Monitor i5 / 16GB / 256GB SSD",
    icon: desktopIcon("#5C6672"),
    specs: [
      ["Categoría", "CPU + Monitor"],
      ["Marcas disponibles", "HP / Dell / Lenovo"],
      ["Procesador", "Intel Core i5"],
      ["RAM", "16 GB"],
      ["Almacenamiento", "256 GB SSD"],
      ["Incluye", "Ratón y teclado"]
    ]
  },
  {
    cat: "computer", catLabel: "CPU", type: "CPU", brand: "HP", brandCode: "H", brandColor: "#0096D6",
    model: "HP Workstation",
    icon: desktopIcon("#0096D6"),
    specs: [
      ["Categoría", "Workstation"],
      ["Marca", "HP"],
      ["Modelos", "Z4 / Z6 / Z8"],
      ["Nota", "Configuración de entrada (desde)"]
    ]
  }
];

const SURFACE = [
  {
    cat: "surface", catLabel: "Surface", brand: "Microsoft", brandCode: "M", brandColor: "#00A4EF",
    model: "Surface Pro 7",
    photo: "https://m3hervas.github.io/CatalogoSoporte/img/4bc956164a80.webp", cpu: "i5", storage: "128 GB",
    icon: surfaceIcon("#00A4EF"),
    specs: [
      ["Categoría", "Surface"],
      ["Marca", "Microsoft"],
      ["Procesador", "Intel Core i5"],
      ["RAM", "8 GB"],
      ["Almacenamiento", "128 GB"],
      ["Pantalla", "12,3 ''"]
    ]
  },
  {
    cat: "surface", catLabel: "Surface", brand: "Microsoft", brandCode: "M", brandColor: "#00A4EF",
    model: "Surface Pro 7",
    photo: "https://m3hervas.github.io/CatalogoSoporte/img/4bc956164a80.webp", cpu: "i5", storage: "256 GB",
    icon: surfaceIcon("#00A4EF"),
    specs: [
      ["Categoría", "Surface"],
      ["Marca", "Microsoft"],
      ["Procesador", "Intel Core i5"],
      ["RAM", "8 GB"],
      ["Almacenamiento", "256 GB"],
      ["Pantalla", "12,3 ''"]
    ]
  },
  {
    cat: "surface", catLabel: "Surface", brand: "Microsoft", brandCode: "M", brandColor: "#00A4EF",
    model: "Surface Pro 7",
    photo: "https://m3hervas.github.io/CatalogoSoporte/img/4bc956164a80.webp", cpu: "i5", storage: "256 GB",
    icon: surfaceIcon("#00A4EF"),
    specs: [
      ["Categoría", "Surface"],
      ["Marca", "Microsoft"],
      ["Procesador", "Intel Core i5"],
      ["RAM", "16 GB"],
      ["Almacenamiento", "256 GB"],
      ["Pantalla", "12,3 ''"]
    ]
  },
  {
    cat: "surface", catLabel: "Surface", brand: "Microsoft", brandCode: "M", brandColor: "#00A4EF",
    model: "Surface Pro 7",
    photo: "https://m3hervas.github.io/CatalogoSoporte/img/4bc956164a80.webp", cpu: "i7", storage: "256 GB",
    icon: surfaceIcon("#00A4EF"),
    specs: [
      ["Categoría", "Surface"],
      ["Marca", "Microsoft"],
      ["Procesador", "Intel Core i7"],
      ["RAM", "16 GB"],
      ["Almacenamiento", "256 GB"],
      ["Pantalla", "12,3 ''"]
    ]
  },
  {
    cat: "surface", catLabel: "Surface", brand: "Microsoft", brandCode: "M", brandColor: "#00A4EF",
    model: "Surface Pro 7",
    photo: "https://m3hervas.github.io/CatalogoSoporte/img/4bc956164a80.webp", cpu: "i7", storage: "512 GB",
    icon: surfaceIcon("#00A4EF"),
    specs: [
      ["Categoría", "Surface"],
      ["Marca", "Microsoft"],
      ["Procesador", "Intel Core i7"],
      ["RAM", "16 GB"],
      ["Almacenamiento", "512 GB"],
      ["Pantalla", "12,3 ''"]
    ]
  }
];

const MONITORS = [
  {
    cat: "monitor", catLabel: "Monitor LED", type: "LED", group: "24''", brand: "Samsung / HP", brandCode: "S", brandColor: "var(--samsung)",
    model: "Monitor LED 24''",
    icon: monitorIcon("#1428A0"),
    specs: [
      ["Categoría", "Monitor LED"],
      ["Marcas disponibles", "Samsung / HP"],
      ["Pantalla", "24'' LED"]
    ]
  },
  {
    cat: "monitor", catLabel: "Monitor LED", type: "LED", group: "27''", brand: "LG / Nilox", brandCode: "L", brandColor: "#A50034",
    model: "Monitor LED 27''",
    icon: monitorIcon("#A50034"),
    specs: [
      ["Categoría", "Monitor LED"],
      ["Marcas disponibles", "LG / Nilox"],
      ["Pantalla", "27'' LED"]
    ]
  },
  {
    cat: "monitor", catLabel: "Monitor 4K", type: "4K", group: "27''", brand: "Samsung", brandCode: "S", brandColor: "var(--samsung)",
    model: "Samsung Odyssey 27''",
    icon: monitorIcon("#1428A0"),
    specs: [
      ["Categoría", "Monitor 4K"],
      ["Marca", "Samsung"],
      ["Modelo", "Odyssey"],
      ["Pantalla", "27''"],
      ["Resolución", "QHD"]
    ]
  },
  {
    cat: "monitor", catLabel: "Monitor de estudio 4K", type: "Estudio 4K", group: "24''", brand: "JVC", brandCode: "J", brandColor: "#004098",
    model: "Monitor de estudio JVC 24''",
    icon: monitorIcon("#004098"),
    specs: [
      ["Categoría", "Monitor de estudio 4K"],
      ["Marca", "JVC"],
      ["Pantalla", "24''"],
      ["Conexiones", "SDI / HDMI"]
    ]
  },
  {
    cat: "monitor", catLabel: "Monitor 4K", type: "4K", group: "65''", brand: "LG", brandCode: "L", brandColor: "#A50034",
    model: "Monitor LG 65'' 4K",
    icon: monitorIcon("#A50034"),
    specs: [
      ["Categoría", "Monitor 4K"],
      ["Marca", "LG"],
      ["Pantalla", "65''"],
      ["Resolución", "4K"]
    ]
  }
];

// MiFi y routers: cada combinación de red (4G/5G) y plan de datos
const DATA_PLANS = [
  { key: "240 GB", label: "Tarjeta de datos 240 GB", short: "240 GB" },
  { key: "Ilimitados", label: "Línea de datos ilimitados", short: "Datos ilimitados" }
];
const CONNECTIVITY = [];
["MiFi", "Router"].forEach(device => {
  ["4G", "5G"].forEach(net => {
    DATA_PLANS.forEach(plan => {
      CONNECTIVITY.push({
        cat: "connectivity", catLabel: device, type: device, group: net, storage: plan.key,
        model: `${device} ${net} · ${plan.short}`,
        icon: device === "MiFi" ? mifiIcon("#0F8A80") : routerIcon("#0F8A80"),
        specs: [
          ["Categoría", device],
          ["Red", net],
          ["Incluye", plan.label],
          ["Llamadas", "Ilimitadas"]
        ]
      });
    });
  });
});
CONNECTIVITY.push({
  cat: "connectivity", catLabel: "Punto de acceso", type: "Punto de acceso", brand: "Ubiquiti", brandCode: "U", brandColor: "#0559C9",
  model: "Punto de acceso inalámbrico Ubiquiti",
  icon: accessPointIcon("#0559C9"),
  specs: [
    ["Categoría", "Punto de acceso inalámbrico"],
    ["Marca", "Ubiquiti"],
    ["Incluye", "Instalación"]
  ]
});

// Each disk model (one card per model). Variants of the same model are listed together.
// Data taken from each model's page on sandisk.com.
const SANDISK = { brand: "SanDisk", brandCode: "S", brandColor: "#ED1C24" };
const SANDISK_PRO = { brand: "SanDisk Professional", brandCode: "P", brandColor: "#1D1D1F" };
const WD_BLACK = { brand: "WD_BLACK", brandCode: "W", brandColor: "#111111" };
const WD = { brand: "WD", brandCode: "W", brandColor: "#0067B4" };

const STORAGE = [
  // --- SanDisk ---
  { ...SANDISK, model: "SanDisk Extreme PRO Portable SSD (V3)", photo: "https://m3hervas.github.io/CatalogoSoporte/img/f66ffbfff6ca.webp", catLabel: "SSD externo portátil",
    art: driveArt("SanDisk", "#26292E", "#8A9099"),
    capacities: ["2 TB", "4 TB", "8 TB"], speed: "Hasta 4000 MB/s", port: "USB-C" },
  { ...SANDISK, model: "SanDisk Extreme PRO con USB4", photo: "https://m3hervas.github.io/CatalogoSoporte/img/99a830d1808a.webp", catLabel: "SSD externo portátil",
    art: driveArt("SanDisk", "#26292E", "#C9A227"),
    capacities: ["2 TB", "4 TB"], speed: "Hasta 3800 MB/s", port: "USB4 (compatible Thunderbolt 4)" },
  { ...SANDISK, model: "SanDisk Extreme PRO Portable SSD", photo: "https://m3hervas.github.io/CatalogoSoporte/img/3f556a5f5317.webp", catLabel: "SSD externo portátil",
    art: driveArt("SanDisk", "#2B2F36", "#9AA0A8"),
    capacities: ["1 TB", "2 TB", "4 TB"], speed: "Hasta 2000 MB/s", port: "USB-C (USB 3.2 Gen 2x2)" },
  { ...SANDISK, model: "SanDisk Extreme Portable SSD", photo: "https://m3hervas.github.io/CatalogoSoporte/img/95d999c99d09.webp", catLabel: "SSD externo portátil",
    art: driveArt("SanDisk", "#2B2F36", "#F26B21"),
    capacities: ["500 GB", "1 TB", "2 TB", "4 TB", "8 TB"], speed: "Hasta 1050 MB/s", port: "USB-C (USB 3.2 Gen 2)" },
  { ...SANDISK, model: "SanDisk Creator Pro Portable SSD", photo: "https://m3hervas.github.io/CatalogoSoporte/img/c98831065145.webp", catLabel: "SSD externo portátil · Creator",
    art: driveArt("SanDisk", "#2B2F36", "#7B5CD6"),
    capacities: ["1 TB", "2 TB", "4 TB"], speed: "Hasta 2000 MB/s", port: "USB-C (USB 3.2 Gen 2x2)" },
  { ...SANDISK, model: "SanDisk Portable SSD (V3)", photo: "https://m3hervas.github.io/CatalogoSoporte/img/df4b15126f98.webp", catLabel: "SSD externo portátil",
    art: driveArt("SanDisk", "#2B2F36", "#ED1C24"),
    capacities: ["500 GB", "1 TB", "2 TB"], speed: "Hasta 1000 MB/s", port: "USB-C (USB 3.2 Gen 2)" },
  { ...SANDISK, model: "SanDisk Portable SSD (firmware actualizado)", photo: "https://m3hervas.github.io/CatalogoSoporte/img/ee1f8f8b8cc0.webp", catLabel: "SSD externo portátil",
    art: driveArt("SanDisk", "#33373E", "#ED1C24"),
    capacities: ["1 TB", "2 TB"], speed: "Hasta 800 MB/s", port: "USB-C (USB 3.2 Gen 2)" },
  { ...SANDISK, model: "SanDisk Portable Drive", photo: "https://m3hervas.github.io/CatalogoSoporte/img/e30765c31eb4.webp", catLabel: "SSD externo portátil",
    art: driveArt("SanDisk", "#3A3F47", "#B8BEC6"),
    capacities: ["500 GB", "1 TB"], speed: "Hasta 600 MB/s", port: "USB-C (USB 3.2 Gen 2)" },
  { ...SANDISK, model: "SanDisk Phone SSD", photo: "https://m3hervas.github.io/CatalogoSoporte/img/c9670f9cc995.webp", catLabel: "SSD para móvil · MagSafe",
    art: driveArt("SanDisk", "#2F343B", "#C9CED6", "phone"),
    capacities: ["1 TB", "2 TB"], speed: "Hasta 1000 MB/s", port: "USB-C · MagSafe" },
  { ...SANDISK, model: "SanDisk Creator Phone SSD", photo: "https://m3hervas.github.io/CatalogoSoporte/img/844047ef7b7b.webp", catLabel: "SSD para móvil · MagSafe · Creator",
    art: driveArt("SanDisk", "#2F343B", "#7B5CD6", "phone"),
    capacities: ["1 TB", "2 TB"], speed: "Hasta 1000 MB/s", port: "USB-C (USB 3.2 Gen 2) · MagSafe" },
  { ...SANDISK, model: "SanDisk Desk Drive", photo: "https://m3hervas.github.io/CatalogoSoporte/img/c99a4d281a40.webp", catLabel: "SSD de escritorio",
    art: driveArt("SanDisk", "#2B2F36", "#ED1C24", "desk"),
    capacities: ["4 TB", "8 TB"], speed: "Hasta 1000 MB/s", port: "USB-C (USB 3.2 Gen 2)" },
  { ...SANDISK, model: "SanDisk Creator Desk Drive", photo: "https://m3hervas.github.io/CatalogoSoporte/img/99c5c5a0ba2a.webp", catLabel: "SSD de escritorio · Creator",
    art: driveArt("SanDisk", "#2B2F36", "#7B5CD6", "desk"),
    capacities: ["4 TB", "8 TB"], speed: "Hasta 1000 MB/s", port: "USB 3.2 Gen 2" },

  // --- SanDisk Professional ---
  { ...SANDISK_PRO, model: "SanDisk Professional PRO-G40 SSD", photo: "https://m3hervas.github.io/CatalogoSoporte/img/9dbd57126613.webp", catLabel: "SSD portátil · exFAT / APFS",
    art: driveArt("PRO-G40", "#1F2226", "#6C737C"),
    capacities: ["1 TB", "2 TB", "4 TB"], speed: "Hasta 2700–3000 MB/s", port: "Thunderbolt 3 · USB-C (USB 3.2 Gen 2)" },
  { ...SANDISK_PRO, model: "PRO-BLADE SSD Mag", photo: "https://m3hervas.github.io/CatalogoSoporte/img/59bd5cef5eb1.webp", catLabel: "Módulo SSD · ecosistema PRO-BLADE",
    art: driveArt("PRO-BLADE", "#2A2D31", "#6C737C", "blade"),
    capacities: ["1 TB", "2 TB", "4 TB"], speed: "Hasta 2000 MB/s (TRANSPORT) · 3000 MB/s (STATION)", port: "PRO-BLADE TRANSPORT / STATION" },
  { ...SANDISK_PRO, model: "PRO-BLADE TRANSPORT", photo: "https://m3hervas.github.io/CatalogoSoporte/img/a0bc7cc9394d.webp", catLabel: "Carcasa portátil para PRO-BLADE SSD Mag",
    art: driveArt("TRANSPORT", "#2A2D31", "#6C737C"),
    capacities: ["Vacía", "1 TB", "2 TB", "4 TB"], speed: "Hasta 2000 MB/s", port: "USB-C" },
  { ...SANDISK_PRO, model: "G-RAID SHUTTLE SSD", photo: "https://m3hervas.github.io/CatalogoSoporte/img/22deb6b46287.webp", catLabel: "RAID SSD transportable",
    art: driveArt("G-RAID SHUTTLE", "#2A2D31", "#6C737C", "raid"),
    capacities: ["16 TB", "32 TB"], speed: "Hasta 2800 MB/s", port: "Thunderbolt 3" },

  // --- WD_BLACK ---
  { ...WD_BLACK, model: "WD_BLACK P50 Game Drive SSD", photo: "https://m3hervas.github.io/CatalogoSoporte/img/34fd11217b7a.webp", catLabel: "SSD portátil para gaming",
    art: driveArt("WD_BLACK", "#141518", "#3A3D42"),
    capacities: ["500 GB", "1 TB", "2 TB", "4 TB"], speed: "Hasta 2000 MB/s", port: "USB-C (USB 3.2 Gen 2x2)" },
  { ...WD_BLACK, model: "WD_BLACK P40 Game Drive SSD", photo: "https://m3hervas.github.io/CatalogoSoporte/img/6c498b4a3858.webp", catLabel: "SSD portátil para gaming",
    art: driveArt("WD_BLACK", "#141518", "#B07CFF"),
    capacities: ["1 TB", "2 TB"], speed: "Hasta 2000 MB/s", port: "USB-C (USB 3.2 Gen 2x2)" },
  { ...WD_BLACK, model: "WD_BLACK D30 Game Drive SSD", photo: "https://m3hervas.github.io/CatalogoSoporte/img/46d6d5eac8f6.webp", catLabel: "SSD para consola",
    art: driveArt("WD_BLACK", "#141518", "#3A3D42", "desk"),
    capacities: ["2 TB"], speed: "Hasta 900 MB/s", port: "USB-C (USB 3.2 Gen 2)" },
  { ...WD_BLACK, model: "WD_BLACK D50 Game Dock NVMe SSD", photo: "https://m3hervas.github.io/CatalogoSoporte/img/fcec4f12f477.webp", catLabel: "Dock con SSD NVMe",
    art: driveArt("WD_BLACK", "#141518", "#B07CFF", "dock"),
    capacities: ["1 TB", "2 TB"], speed: "Hasta 3000 MB/s", port: "Thunderbolt 3" },

  // --- WD ---
  { ...WD, model: "WD Elements SE SSD", photo: "https://m3hervas.github.io/CatalogoSoporte/img/d043666a4598.webp", catLabel: "SSD externo portátil",
    art: driveArt("WD", "#1E2126", "#0067B4"),
    capacities: ["1 TB", "2 TB"], speed: "Hasta 400 MB/s", port: "Micro-B (USB 3.0)" }
];

function renderStorage(items, gridEl) {
  items.forEach(d => {
    const card = document.createElement("article");
    card.className = "storage-card";
    card.style.setProperty("--i", gridEl.children.length);
    card.dataset.type = d.type;
    card.dataset.caps = "|" + d.capacities.join("|") + "|";
    card.dataset.speed = Math.max(...(d.speed.match(/\d+/g) || [0]).map(Number));
    const media = d.photo ? `<img src="${d.photo}" alt="${d.model}" loading="lazy" decoding="async">` : d.art;
    card.innerHTML = `
      <div class="storage-photo">${media}</div>
      <div class="storage-info">
        <div class="brand-line">${badgeMarkup(d)}</div>
        <h3>${d.model}</h3>
        <span class="cat-chip">${d.catLabel}</span>
        <div class="storage-icons">
          <div class="storage-icon storage-icon-wide" title="Capacidades">${STORAGE_ICONS.capacity}<span>${d.capacities.join(" · ")}</span></div>
          <div class="storage-icon" title="Velocidad">${STORAGE_ICONS.speed}<span>${d.speed}</span></div>
          <div class="storage-icon" title="Conexión">${STORAGE_ICONS.port}<span>${d.port}</span></div>
        </div>
      </div>
    `;
    gridEl.appendChild(card);
  });
}

const scrim = shadow.getElementById("scrim");
const panel = shadow.getElementById("panel");

function badgeMarkup(p) {
  if (!p.brand) return "";
  const isApple = p.brand === "Apple";
  const badgeStyle = isApple ? "background:#ECEDEF; padding:3px;" : `background:${p.brandColor}`;
  const badgeContent = isApple ? appleBadge() : p.brandCode;
  return `
    <span class="brand-badge" style="${badgeStyle}">${badgeContent}</span>
    <span class="brand-name">${p.brand}</span>
  `;
}

// --- Model cards: one card per model; variants that only change storage are grouped ---
const sizeInGB = v => parseFloat(String(v).replace(",", ".")) * (/TB/i.test(v) ? 1000 : 1) || 0;

function groupByModel(items) {
  const groups = new Map();
  items.forEach(p => {
    const key = (p.brand || "") + "|" + p.model;
    if (!groups.has(key)) groups.set(key, []);
    groups.get(key).push(p);
  });
  return [...groups.values()].map(variants => {
    const first = variants[0];
    const storages = [...new Set(variants.map(v => v.storage || (v.specs.find(([l]) => l === "Almacenamiento") || [])[1]).filter(Boolean))]
      .sort((a, b) => sizeInGB(a) - sizeInGB(b));
    // Technical sheet: every label from every variant; differing values joined with " / "
    const labels = [];
    variants.forEach(v => v.specs.forEach(([l]) => { if (!labels.includes(l)) labels.push(l); }));
    const specs = labels.map(l => {
      const values = [...new Set(variants.map(v => (v.specs.find(([x]) => x === l) || [])[1]).filter(Boolean))];
      if (l === "Almacenamiento") values.sort((a, b) => sizeInGB(a) - sizeInGB(b));
      return [l, values.join(" / ")];
    });
    // If variants differ in more than storage, list each real configuration in the sheet
    const differing = labels.filter(l => l !== "Almacenamiento" && new Set(variants.map(v => (v.specs.find(([x]) => x === l) || [])[1] || "")).size > 1);
    if (differing.length) {
      const configs = variants.map(v => [...differing, "Almacenamiento"].map(l => (v.specs.find(([x]) => x === l) || [])[1]).filter(Boolean).join(" · "));
      specs.push(["Configuraciones", configs.join("<br>")]);
    }
    const allValues = attr => [...new Set(variants.map(v => v[attr]).filter(Boolean))].join("|");
    return {
      ...first, variants, storages, specs,
      storage: storages.join("|"), type: allValues("type"), group: allValues("group"), cpu: allValues("cpu")
    };
  });
}

// Value of a technical-sheet row ("" if missing)
const specOf = (p, label) => (p.specs.find(([l]) => l === label) || [])[1] || "";

// What each category shows in the info box of its cards
const CARD_INFO = {
  storage: p => ({ icon: STORAGE_ICONS.capacity, title: "Almacenamiento", text: p.storages.length ? p.storages.join(" · ") : "Consultar" }),
  computer: p => {
    const parts = [specOf(p, "Procesador") || specOf(p, "Chip"), specOf(p, "RAM"), specOf(p, "Almacenamiento")].filter(Boolean);
    if (p.variants.length > 1) {
      const cpus = [...new Set(p.variants.map(v => specOf(v, "Procesador") || specOf(v, "Chip")).filter(Boolean))];
      return { icon: STORAGE_ICONS.cpu, title: "Configuraciones", text: `${p.variants.length} configuraciones · ${cpus.join(" / ")}` };
    }
    return { icon: STORAGE_ICONS.cpu, title: "Configuración", text: parts.length ? parts.join(" · ") : (specOf(p, "Modelos") || "Configuración a medida") };
  },
  monitor: p => ({ icon: STORAGE_ICONS.screen, title: "Pantalla", text: [specOf(p, "Pantalla"), specOf(p, "Resolución")].filter(Boolean).join(" · ") }),
  connectivity: p => ({ icon: STORAGE_ICONS.signal, title: "Conexión",
    text: specOf(p, "Red") ? `${specOf(p, "Red")} · ${specOf(p, "Incluye")}` : `Incluye ${specOf(p, "Incluye").toLowerCase()}` }),
  accessory: p => ({ icon: STORAGE_ICONS.tag, title: "Uso", text: p.group ? "Para " + p.group.split("|").join(" / ") : p.catLabel })
};

function renderModelCards(items, gridEl, info = CARD_INFO.storage) {
  groupByModel(items).forEach(p => {
    const card = document.createElement("button");
    card.className = "storage-card model-card";
    card.dataset.cat = p.cat;
    card.dataset.brand = p.brand || "Sin marca";
    card.dataset.storage = p.storage;
    card.dataset.type = p.type || "";
    card.dataset.group = p.group || "";
    card.dataset.cpu = p.cpu || "";
    card.setAttribute("aria-haspopup", "dialog");
    const media = p.photo ? `<img src="${p.photo}" alt="${p.model}" loading="lazy" decoding="async">` : p.icon;
    const box = info(p);
    card.innerHTML = `
      <div class="storage-photo">${media}</div>
      <div class="storage-info">
        ${p.brand ? `<div class="brand-line">${badgeMarkup(p)}</div>` : ""}
        <h3>${p.model}</h3>
        <span class="cat-chip">${p.catLabel}</span>
        <div class="storage-icons">
          <div class="storage-icon storage-icon-wide" title="${box.title}">${box.icon}<span>${box.text}</span></div>
        </div>
        <span class="card-hint">Toca para ver la ficha técnica</span>
      </div>
    `;
    card.addEventListener("click", () => openPanel(p));
    card.style.setProperty("--i", gridEl.children.length);
    gridEl.appendChild(card);
  });
}

function openPanel(p) {
  const stageContent = p.photo ? `<img src="${p.photo}" alt="${p.model}" loading="lazy" decoding="async">` : p.icon;

  const rows = p.specs.map(([label, value]) => `
    <div class="spec-label">${label}</div>
    <div class="spec-value">${value}</div>
  `).join("");

  panel.innerHTML = `
    <div class="panel-top">
      <div class="panel-heading">
        ${p.brand ? `<div class="panel-brand-line">${badgeMarkup(p)}</div>` : ""}
        <h2 id="panel-name">${p.model}</h2>
      </div>
      <button class="close-btn" id="closeBtn" aria-label="Cerrar ficha">✕</button>
    </div>
    <div class="panel-stage">${stageContent}</div>
    <p class="spec-title">Ficha técnica</p>
    <div class="spec-table">${rows}</div>
    <span class="rental-tag">Disponible para alquiler</span>
  `;

  scrim.classList.add("open");
  panel.classList.add("open");
  shadow.getElementById("closeBtn").addEventListener("click", closePanel);
}

function closePanel() {
  scrim.classList.remove("open");
  panel.classList.remove("open");
}

scrim.addEventListener("click", closePanel);
document.addEventListener("keydown", e => {
  if (e.key === "Escape") closePanel();
});

renderModelCards(PRODUCTS, shadow.getElementById("grid"));
renderModelCards(PHONES, shadow.getElementById("gridPhones"));
renderModelCards(ACCESSORIES, shadow.getElementById("gridAccessories"), CARD_INFO.accessory);
renderModelCards(COMPUTERS, shadow.getElementById("gridComputers"), CARD_INFO.computer);
renderModelCards(SURFACE, shadow.getElementById("gridSurface"), CARD_INFO.computer);
renderModelCards(MONITORS, shadow.getElementById("gridMonitors"), CARD_INFO.monitor);
renderModelCards(CONNECTIVITY, shadow.getElementById("gridConnectivity"), CARD_INFO.connectivity);
renderStorage(STORAGE, shadow.getElementById("gridStorage"));
setupStorageFilters();

// Capacity options come from the data; speed is grouped in ranges (max read speed of each model)
function setupStorageFilters() {
  const grid = shadow.getElementById("gridStorage");
  const capSelect = shadow.getElementById("storageCapSelect");
  const speedSelect = shadow.getElementById("storageSpeedSelect");
  const toGB = c => parseFloat(c) * (c.includes("TB") ? 1000 : 1);
  const caps = [...new Set(STORAGE.flatMap(d => d.capacities))].filter(c => /\d/.test(c)).sort((a, b) => toGB(a) - toGB(b));
  caps.forEach(c => capSelect.add(new Option(c, c)));

  const empty = document.createElement("p");
  empty.className = "storage-empty";
  empty.textContent = "No hay discos con esos filtros.";
  empty.hidden = true;
  grid.appendChild(empty);

  function apply() {
    const cap = capSelect.value;
    const [min, max] = speedSelect.value === "all" ? [-1, Infinity] : speedSelect.value.split("-").map(Number);
    let visible = 0;
    grid.querySelectorAll(".storage-card").forEach(card => {
      const speed = Number(card.dataset.speed);
      const ok = (cap === "all" || card.dataset.caps.includes("|" + cap + "|")) && speed > min && speed <= max;
      card.classList.toggle("hidden", !ok);
      if (ok) visible++;
    });
    empty.hidden = visible > 0;
  }

  capSelect.addEventListener("change", apply);
  speedSelect.addEventListener("change", apply);
}

// --- View navigation ---
shadow.getElementById("tabletIconLarge").innerHTML = tabletIconLarge("#2B79C2");
shadow.getElementById("phoneIconLarge").innerHTML = phoneIcon("#2B79C2");
shadow.getElementById("accessoryIconLarge").innerHTML = accessoryIcon("#2B79C2");
shadow.getElementById("computerIconLarge").innerHTML = desktopIcon("#2B79C2");
shadow.getElementById("surfaceIconLarge").innerHTML = surfaceIcon("#2B79C2");
shadow.getElementById("monitorIconLarge").innerHTML = monitorIcon("#2B79C2");
shadow.getElementById("connectivityIconLarge").innerHTML = routerIcon("#2B79C2");
shadow.getElementById("storageIconLarge").innerHTML = driveIcon("#2B79C2");
shadow.getElementById("testIconEmpty").innerHTML = testIcon("#8CC8FF");

const viewLanding = shadow.getElementById("viewLanding");
const views = {
  tablets: shadow.getElementById("viewTablets"),
  phones: shadow.getElementById("viewPhones"),
  accessories: shadow.getElementById("viewAccessories"),
  computers: shadow.getElementById("viewComputers"),
  surface: shadow.getElementById("viewSurface"),
  monitors: shadow.getElementById("viewMonitors"),
  connectivity: shadow.getElementById("viewConnectivity"),
  storage: shadow.getElementById("viewStorage"),
  test: shadow.getElementById("viewTest")
};

const dynamicHero = shadow.getElementById("dynamicHero");
const heroMedia = shadow.getElementById("heroMedia");
const heroShade = shadow.getElementById("heroShade");
const heroImages = {
  computers: "https://m3hervas.github.io/CatalogoSoporte/img/440ee108e31f.webp",
  surface: "https://m3hervas.github.io/CatalogoSoporte/img/d07ffc8b9756.webp",
  phones: "https://m3hervas.github.io/CatalogoSoporte/img/4bd81d2e158b.webp",
  monitors: "https://m3hervas.github.io/CatalogoSoporte/img/9c1295dd1089.webp",
  connectivity: "https://m3hervas.github.io/CatalogoSoporte/img/7f673f981e4e.webp",
  storage: "https://m3hervas.github.io/CatalogoSoporte/img/hero-almacenamiento.webp",
  tablets: "https://m3hervas.github.io/CatalogoSoporte/img/hero-tablets.webp"
};

// Vertical position of each header photo (default: top). Higher % = image moved further up.
const heroPositions = {
  monitors: "center 35%",
  connectivity: "center 45%",
  storage: "center 24%",
  tablets: "center 50%"
};

// Headers that should stand out more: taller and with a lighter overlay
const heroFeatured = {
  storage: "linear-gradient(180deg, rgba(10,14,19,0.45) 0%, rgba(10,14,19,0.12) 30%, rgba(10,14,19,0.18) 62%, rgba(10,14,19,0.35) 100%)",
  tablets: "radial-gradient(ellipse 45% 55% at 50% 40%, rgba(10,20,35,0.55), rgba(10,20,35,0) 100%), linear-gradient(180deg, rgba(10,14,19,0.45) 0%, rgba(10,14,19,0.15) 30%, rgba(10,14,19,0.2) 62%, rgba(10,14,19,0.4) 100%)"
};

// Name and short description shown at the top of each category
const CATEGORY_INFO = {
  tablets: ["Tablets", "Tablets Android e iPad listas para tu evento, rodaje o producción."],
  phones: ["Móviles", "Smartphones Android e iPhone configurados y revisados antes de cada entrega."],
  accessories: ["Accesorios", "Estabilizadores, iluminación, audio y complementos para móvil, cámara e iPad."],
  computers: ["Ordenadores", "Portátiles, equipos todo en uno, Mac y estaciones de trabajo."],
  surface: ["Surface", "Microsoft Surface Pro en varias configuraciones de procesador, memoria y almacenamiento."],
  monitors: ["Monitores", "Monitores LED, 4K y de estudio, de 24'' a 65''."],
  connectivity: ["Conectividad", "MiFi y routers 4G/5G con datos, y puntos de acceso Wi-Fi con instalación."],
  storage: ["Almacenamiento", "Discos SSD portátiles y de escritorio de SanDisk, SanDisk Professional y WD."],
  test: ["Productos en prueba", "Equipos que estamos probando antes de añadirlos al catálogo."]
};
const HEADER_DEFAULT = ["Catálogo interno", "Soporte TV", "Elige una categoría para ver los productos disponibles para alquiler."];

function setCatalogHeader(key) {
  const info = key && CATEGORY_INFO[key];
  shadow.getElementById("catalogo").classList.toggle("in-category", !!info);
  shadow.getElementById("catEyebrow").textContent = info ? "Catálogo · Soporte TV" : HEADER_DEFAULT[0];
  shadow.getElementById("catTitle").textContent = info ? info[0] : HEADER_DEFAULT[1];
  shadow.getElementById("catDesc").textContent = info ? info[1] : HEADER_DEFAULT[2];
}

function showView(key) {
  setCatalogHeader(key);
  viewLanding.hidden = true;
  Object.values(views).forEach(v => v.hidden = true);
  views[key].hidden = false;
  views[key].classList.remove("is-entering");
  void views[key].offsetWidth;
  views[key].classList.add("is-entering");

  catRoot.scrollIntoView();

  if (heroImages[key]) {
    heroShade.style.background = heroFeatured[key] || "linear-gradient(180deg, rgba(10,14,19,0.35) 0%, rgba(10,14,19,0.5) 60%, rgba(10,14,19,0.62) 100%)";
    heroMedia.style.backgroundImage = `url("${heroImages[key]}")`;
    heroMedia.style.backgroundPosition = heroPositions[key] || "center center";
    dynamicHero.classList.toggle("featured", !!heroFeatured[key]);
    // Restart the entrance animation
    dynamicHero.classList.remove("active");
    void dynamicHero.offsetWidth;
    activeHeroKey = key;
    updateHeroOpacity();
    dynamicHero.classList.add("active");
    placeGridBelowHero();
  } else {
    deactivateHero();
  }
}

let activeHeroKey = null;
const HERO_FADE_DISTANCE = 260;

function getScrollY() {
  return Math.max(0, -catRoot.getBoundingClientRect().top);
}

// The product list starts just below the banner, whatever the screen size
function placeGridBelowHero() {
  Object.values(views).forEach(v => { const g = v.querySelector(".storage-grid"); if (g) g.style.marginTop = ""; });
  if (!activeHeroKey) return;
  const grid = views[activeHeroKey].querySelector(".storage-grid");
  if (!grid) return;
  const gap = dynamicHero.getBoundingClientRect().bottom + 28 - grid.getBoundingClientRect().top;
  if (gap > 0) grid.style.marginTop = gap + "px";
}

window.addEventListener("resize", () => { if (activeHeroKey && getScrollY() === 0) placeGridBelowHero(); });

function updateHeroOpacity() {
  if (!activeHeroKey) return;
  const y = getScrollY();
  dynamicHero.style.opacity = Math.max(0, 1 - y / HERO_FADE_DISTANCE);
  dynamicHero.style.setProperty("--hero-shift", `${-Math.min(y, HERO_FADE_DISTANCE) * 0.25}px`);
}

function deactivateHero() {
  activeHeroKey = null;
  placeGridBelowHero();
  dynamicHero.classList.remove("active");
  dynamicHero.style.opacity = "";
  dynamicHero.style.removeProperty("--hero-shift");
  heroMedia.style.backgroundImage = "";
  heroShade.style.background = "";
  dynamicHero.classList.remove("featured");
}

window.addEventListener("scroll", updateHeroOpacity, { passive: true });
document.addEventListener("scroll", updateHeroOpacity, { passive: true });

function showLanding() {
  setCatalogHeader(null);
  Object.values(views).forEach(v => v.hidden = true);
  viewLanding.hidden = false;
  deactivateHero();
}

// --- Routing: each category has its own address (#ordenadores, #tablets...) ---
const ROUTES = {
  tablets: "tablets",
  moviles: "phones",
  accesorios: "accessories",
  ordenadores: "computers",
  surface: "surface",
  monitores: "monitors",
  conectividad: "connectivity",
  almacenamiento: "storage",
  prueba: "test"
};
const SLUGS = Object.fromEntries(Object.entries(ROUTES).map(([slug, key]) => [key, slug]));
let navigatedFromLanding = false;

function goTo(key) {
  history.pushState(null, "", "#" + SLUGS[key]);
  navigatedFromLanding = true;
  route();
}

shadow.getElementById("goTablets").addEventListener("click", () => goTo("tablets"));
shadow.getElementById("goPhones").addEventListener("click", () => goTo("phones"));
shadow.getElementById("goAccessories").addEventListener("click", () => goTo("accessories"));
shadow.getElementById("goComputers").addEventListener("click", () => goTo("computers"));
shadow.getElementById("goSurface").addEventListener("click", () => goTo("surface"));
shadow.getElementById("goMonitors").addEventListener("click", () => goTo("monitors"));
shadow.getElementById("goConnectivity").addEventListener("click", () => goTo("connectivity"));
shadow.getElementById("goStorage").addEventListener("click", () => goTo("storage"));

catRoot.querySelectorAll("[data-back]").forEach(btn => {
  btn.addEventListener("click", () => {
    if (navigatedFromLanding) {
      history.back();
    } else {
      history.replaceState(null, "", location.pathname + location.search);
      route();
    }
  });
});

// --- Generic filters: any combination of dataset attributes per view ---
// filterDefs: [{ select: <el>, attr: "brand" }, { select: <el>, attr: "storage" }, ...]
function setupFilters(gridEl, filterDefs) {
  const active = {};
  filterDefs.forEach(f => { if (f.select) active[f.attr] = "all"; });

  function applyFilters() {
    gridEl.querySelectorAll(".card, .model-card").forEach(card => {
      const matches = filterDefs.every(f => {
        if (!f.select) return true;
        const val = active[f.attr];
        return val === "all" || (card.dataset[f.attr] || "").split("|").includes(val);
      });
      card.classList.toggle("hidden", !matches);
    });
  }

  filterDefs.forEach(f => {
    if (f.select) {
      f.select.addEventListener("change", (e) => {
        active[f.attr] = e.target.value;
        applyFilters();
      });
    }
  });
}

setupFilters(shadow.getElementById("grid"), [
  { select: shadow.getElementById("brandSelect"), attr: "brand" },
  { select: shadow.getElementById("storageSelect"), attr: "storage" }
]);

setupFilters(shadow.getElementById("gridPhones"), [
  { select: shadow.getElementById("phoneBrandSelect"), attr: "brand" },
  { select: shadow.getElementById("phoneStorageSelect"), attr: "storage" }
]);

setupFilters(shadow.getElementById("gridAccessories"), [
  { select: shadow.getElementById("accessoryTypeSelect"), attr: "group" },
  { select: shadow.getElementById("accessoryBrandSelect"), attr: "brand" }
]);

setupFilters(shadow.getElementById("gridComputers"), [
  { select: shadow.getElementById("computerTypeSelect"), attr: "type" },
  { select: shadow.getElementById("computerBrandSelect"), attr: "brand" }
]);

setupFilters(shadow.getElementById("gridSurface"), [
  { select: shadow.getElementById("surfaceCpuSelect"), attr: "cpu" },
  { select: shadow.getElementById("surfaceStorageSelect"), attr: "storage" }
]);

setupFilters(shadow.getElementById("gridMonitors"), [
  { select: shadow.getElementById("monitorTypeSelect"), attr: "type" },
  { select: shadow.getElementById("monitorSizeSelect"), attr: "group" }
]);

setupFilters(shadow.getElementById("gridConnectivity"), [
  { select: shadow.getElementById("connTypeSelect"), attr: "type" },
  { select: shadow.getElementById("connNetSelect"), attr: "group" },
  { select: shadow.getElementById("connDataSelect"), attr: "storage" }
]);

// --- Intro + rental request ---
// FormSubmit reenvía las solicitudes al correo (o alias) indicado al final de la URL
const FORM_ENDPOINT = "https://formsubmit.co/ajax/m3hervasspotify@gmail.com";

const intro = shadow.getElementById("intro");
shadow.getElementById("introLogo").src = catRoot.querySelector(".brand-header img").src;

const rentModal = shadow.getElementById("rentModal");
const rentScrim = shadow.getElementById("rentScrim");
const rentForm = shadow.getElementById("rentForm");
const rentError = shadow.getElementById("rentError");

const rentDone = shadow.getElementById("rentDone");
const rentSubmit = shadow.getElementById("rentSubmit");

function openRent() {
  rentForm.hidden = false;
  rentDone.hidden = true;
  rentScrim.classList.add("open");
  rentModal.classList.add("open");
  shadow.getElementById("rentName").focus();
}

function closeRent() {
  rentScrim.classList.remove("open");
  rentModal.classList.remove("open");
}

shadow.getElementById("openRent").addEventListener("click", openRent);
shadow.getElementById("scrollHint").addEventListener("click", () =>
  catRoot.querySelector("header").scrollIntoView({ behavior: "smooth" }));
shadow.getElementById("rentClose").addEventListener("click", closeRent);
shadow.getElementById("rentDoneClose").addEventListener("click", closeRent);
rentScrim.addEventListener("click", closeRent);
document.addEventListener("keydown", e => { if (e.key === "Escape") closeRent(); });
rentForm.addEventListener("input", () => { rentError.textContent = ""; });

rentForm.addEventListener("submit", async e => {
  e.preventDefault();
  const name = shadow.getElementById("rentName").value.trim();
  const email = shadow.getElementById("rentEmail").value.trim();
  const from = shadow.getElementById("rentFrom").value;
  const to = shadow.getElementById("rentTo").value;
  const msg = shadow.getElementById("rentMsg").value.trim();

  if (!name || !email || !msg) {
    rentError.textContent = "Rellena tu nombre, tu correo y qué necesitas.";
    return;
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    rentError.textContent = "Revisa tu correo, no parece válido.";
    return;
  }
  if (from && to && to < from) {
    rentError.textContent = "La fecha final no puede ser anterior a la inicial.";
    return;
  }

  rentSubmit.disabled = true;
  rentSubmit.textContent = "Enviando…";
  try {
    const res = await fetch(FORM_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json", "Accept": "application/json" },
      body: JSON.stringify({
        _subject: `Solicitud de alquiler — ${name}`,
        _template: "table",
        _captcha: "false",
        Nombre: name,
        email: email,
        Fechas: `${from || "—"} a ${to || "—"}`,
        "Qué necesita": msg
      })
    });
    const data = await res.json().catch(() => ({}));
    if (!res.ok || String(data.success) !== "true") throw new Error(data.message || res.status);
    rentForm.reset();
    rentForm.hidden = true;
    rentDone.hidden = false;
  } catch (err) {
    rentError.textContent = "No se ha podido enviar la solicitud. Inténtalo de nuevo en unos minutos.";
  } finally {
    rentSubmit.disabled = false;
    rentSubmit.textContent = "Enviar solicitud";
  }
});

// Show the view that matches the address; the intro only appears on the landing view
function route() {
  const key = ROUTES[decodeURIComponent(location.hash.slice(1))];
  if (key) {
    intro.hidden = true;
    showView(key);
  } else {
    const wasInCategory = viewLanding.hidden;
    intro.hidden = false;
    showLanding();
    if (wasInCategory) catRoot.querySelector("header").scrollIntoView();
  }
}

window.addEventListener("popstate", route);
window.addEventListener("hashchange", route);
route();

// --- Professional theme: navigation, reveal on scroll, counters, progress bar, pointer glow ---
(function initTheme() {
  const safe = (fn, name) => { try { fn(); } catch (err) { console.warn("[" + name + "]", err); } };
  const pageContent = shadow.getElementById("pageContent");
  pageContent.classList.add("js-ready");
  const onScroll = fn => {
    window.addEventListener("scroll", fn, { passive: true });
    document.body.addEventListener("scroll", fn, { passive: true });
    document.addEventListener("scroll", fn, { passive: true });
  };

  safe(() => {
    const nav = shadow.getElementById("siteNav");
    const toggle = shadow.getElementById("navToggle");
    const group = shadow.getElementById("navCatalog");
    const groupBtn = shadow.getElementById("navCatalogBtn");
    const setGroup = open => { group.classList.toggle("open", open); groupBtn.setAttribute("aria-expanded", String(open)); };
    const setMenu = open => { nav.classList.toggle("menu-open", open); toggle.setAttribute("aria-expanded", String(open)); };
    const closeAll = () => { setGroup(false); setMenu(false); };

    const updateSolid = () => nav.classList.toggle("is-solid", getScrollY() > 24);
    onScroll(updateSolid);
    updateSolid();

    toggle.addEventListener("click", () => setMenu(!nav.classList.contains("menu-open")));
    groupBtn.addEventListener("click", e => { e.stopPropagation(); setGroup(!group.classList.contains("open")); });
    document.addEventListener("click", e => { if (!e.composedPath().includes(nav)) closeAll(); });
    document.addEventListener("keydown", e => { if (e.key === "Escape") closeAll(); });

    const goHome = () => {
      if (location.hash) { history.pushState(null, "", location.pathname + location.search); route(); }
    };
    shadow.querySelectorAll("[data-nav]").forEach(el => el.addEventListener("click", e => {
      e.preventDefault();
      closeAll();
      const action = el.dataset.nav;
      if (action === "rent") openRent();
      else if (action === "home") { goHome(); pageContent.scrollIntoView({ behavior: "smooth", block: "start" }); }
      else if (action === "catalog") { goHome(); shadow.getElementById("catalogo").scrollIntoView({ behavior: "smooth", block: "start" }); }
      else if (action === "contact") shadow.getElementById("contacto").scrollIntoView({ behavior: "smooth", block: "start" });
    }));
    shadow.querySelectorAll("[data-route]").forEach(el => el.addEventListener("click", e => {
      e.preventDefault();
      closeAll();
      goTo(ROUTES[el.dataset.route]);
    }));
  }, "nav");

  safe(() => {
    shadow.querySelectorAll(".category-card").forEach((card, i) => { card.classList.add("reveal"); card.style.setProperty("--i", i); });
    const items = [...shadow.querySelectorAll(".reveal")];
    const showAll = () => items.forEach(el => el.classList.add("is-visible"));
    if (!("IntersectionObserver" in window)) return showAll();
    const io = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add("is-visible"); io.unobserve(entry.target); }
    }), { threshold: 0.05 });
    items.forEach(el => io.observe(el));
    setTimeout(showAll, 6000);   // safety net: never leave content hidden
  }, "reveal");

  safe(() => {
    const brands = new Set();
    [...PRODUCTS, ...PHONES, ...ACCESSORIES, ...COMPUTERS, ...SURFACE, ...MONITORS, ...CONNECTIVITY, ...STORAGE].forEach(p =>
      (p.brand || "").split("/").map(b => b.trim()).filter(b => b && b !== "Multimarca" && b !== "Sin marca").forEach(b => brands.add(b)));
    const values = {
      models: shadow.querySelectorAll(".catalog-view .storage-card").length,
      categories: Object.keys(views).filter(k => k !== "test").length,
      brands: brands.size
    };
    const counters = [...shadow.querySelectorAll("[data-count]")];
    counters.forEach(el => { el.textContent = values[el.dataset.count]; });
    const run = el => {
      const target = values[el.dataset.count];
      const start = performance.now();
      const step = now => {
        const t = Math.min(1, (now - start) / 1200);
        el.textContent = Math.round(target * (1 - Math.pow(1 - t, 3)));
        if (t < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    };
    if (!("IntersectionObserver" in window)) return;
    const io = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) { run(entry.target); io.unobserve(entry.target); }
    }), { threshold: 0.05 });
    counters.forEach(el => io.observe(el));
  }, "counters");

  safe(() => {
    const bar = shadow.getElementById("scrollProgress");
    const update = () => {
      const max = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight) - window.innerHeight;
      bar.style.setProperty("--p", max > 0 ? Math.min(1, getScrollY() / max) : 0);
    };
    onScroll(update);
    update();
  }, "progress");

  safe(() => {
    const card = shadow.querySelector(".intro-card");
    if (!matchMedia("(pointer: fine)").matches) return;
    let frame = 0;
    card.addEventListener("pointermove", e => {
      const r = card.getBoundingClientRect();
      const x = ((e.clientX - r.left) / r.width) * 100;
      const y = ((e.clientY - r.top) / r.height) * 100;
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        card.style.setProperty("--mx", x.toFixed(1) + "%");
        card.style.setProperty("--my", y.toFixed(1) + "%");
      });
    });
  }, "pointerGlow");

  safe(() => { shadow.getElementById("footerYear").textContent = new Date().getFullYear(); }, "year");
})();

})();

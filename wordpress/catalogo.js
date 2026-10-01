/* Catálogo Soporte TV para WordPress — generado desde index.html con build_wordpress.py */
(function () {
const host = document.getElementById("catalogo-soporte-app");
if (!host || host.shadowRoot) return;

["https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600;700&display=swap"].forEach(href => {
  if (!document.querySelector(`link[href="${href}"]`)) {
    const l = document.createElement("link");
    l.rel = "stylesheet"; l.href = href;
    document.head.appendChild(l);
  }
});

const shadow = host.attachShadow({ mode: "open" });
shadow.innerHTML = "<style>" + "\n  #catalogo-soporte {\n    --bg: #1F4A75;\n    --bg-deep: #163A5E;\n    --panel: #FFFFFF;\n    --panel-line: #E4E8ED;\n    --ink: #1B222B;\n    --ink-soft: #5C6672;\n    --paper-shadow: rgba(0,0,0,0.35);\n    --accent: #2B79C2;\n    --accent-soft: #D9E7F5;\n\n    --lenovo: #E2231A;\n    --lenovo-soft: #FBDAD8;\n    --samsung: #1428A0;\n    --samsung-soft: #DCE1F5;\n    --apple: #5B6470;\n    --apple-soft: #E7E9EC;\n\n    --android-tag: #1E8E5A;\n    --android-tag-soft: #D8F0E2;\n    --ipad-tag: #40474F;\n    --ipad-tag-soft: #E7E9EC;\n\n    padding-top: env(safe-area-inset-top, 0px);\n    padding-bottom: env(safe-area-inset-bottom, 0px);\n    box-sizing: border-box;\n  }\n\n  @media (prefers-color-scheme: light) {\n    #catalogo-soporte {\n      --bg: #1F4A75;\n      --bg-deep: #163A5E;\n      --panel: #FFFFFF;\n      --ink: #1B222B;\n    }\n  }\n\n  #catalogo-soporte {\n    --bg: #1F4A75;\n    --bg-deep: #163A5E;\n    --panel: #FFFFFF;\n    --ink: #1B222B;\n  }\n\n  #catalogo-soporte * { box-sizing: border-box; }\n\n  #catalogo-soporte {\n    margin: 0;\n    height: 100%;\n    background: var(--bg);\n    color: var(--panel);\n    font-family: 'Inter', sans-serif;\n    overflow-x: hidden;\n  }\n\n  #catalogo-soporte {\n    min-height: 100%;\n    background: radial-gradient(ellipse at 15% 0%, rgba(120,190,255,0.35), transparent 55%),\n                radial-gradient(ellipse at 90% 100%, rgba(70,150,230,0.30), transparent 60%),\n                linear-gradient(180deg, #2A5D8F 0%, var(--bg) 60%, #19406A 100%);\n    background-attachment: fixed;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    padding: 44px 20px 64px;\n  }\n\n  #catalogo-soporte #dynamicHero {\n    position: fixed;\n    top: 0;\n    left: 0;\n    right: 0;\n    height: 340px;\n    z-index: 0;\n    background-size: cover;\n    background-position: center top;\n    background-repeat: no-repeat;\n    opacity: 0;\n    pointer-events: none;\n  }\n\n  #catalogo-soporte #dynamicHero.active {\n    opacity: 1;\n  }\n\n  #catalogo-soporte .bg-power {\n    position: fixed;\n    top: 50%;\n    left: 50%;\n    width: min(70vw, 520px);\n    height: min(70vw, 520px);\n    transform: translate(-50%, -50%);\n    z-index: 0;\n    pointer-events: none;\n    opacity: 0.22;\n    filter: blur(14px);\n  }\n\n  #catalogo-soporte .bg-power svg { width: 100%; height: 100%; }\n\n  #catalogo-soporte .category-card.is-test { position: relative; }\n\n  #catalogo-soporte .test-badge {\n    position: absolute;\n    top: 10px;\n    right: 10px;\n    font-size: 10.5px;\n    font-weight: 700;\n    letter-spacing: 0.06em;\n    padding: 3px 8px;\n    border-radius: 999px;\n    background: #FFF1CC;\n    color: #8A5A00;\n  }\n\n  #catalogo-soporte #pageContent {\n    position: relative;\n    z-index: 1;\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n  }\n\n  #catalogo-soporte header {\n    text-align: center;\n    max-width: 640px;\n    margin-bottom: 30px;\n  }\n\n  #catalogo-soporte .eyebrow {\n    font-family: 'Space Grotesk', sans-serif;\n    font-weight: 600;\n    font-size: 13px;\n    letter-spacing: 0.08em;\n    text-transform: uppercase;\n    color: #BFE0FF;\n    margin: 0 0 12px;\n  }\n\n  #catalogo-soporte .brand-header {\n    display: flex;\n    align-items: center;\n    gap: 12px;\n    justify-content: center;\n    margin-bottom: 14px;\n  }\n\n  #catalogo-soporte .brand-header svg {\n    width: 38px;\n    height: 38px;\n    flex-shrink: 0;\n  }\n\n  #catalogo-soporte h1 {\n    font-family: 'Space Grotesk', sans-serif;\n    font-weight: 700;\n    font-size: clamp(30px, 6vw, 44px);\n    line-height: 1.05;\n    margin: 0;\n    color: #F5F7FA;\n  }\n\n  #catalogo-soporte header p {\n    font-size: 15.5px;\n    line-height: 1.6;\n    color: #B7C1CC;\n    margin: 0;\n    max-width: 48ch;\n    margin-left: auto;\n    margin-right: auto;\n  }\n\n  #catalogo-soporte .filters {\n    display: flex;\n    gap: 10px;\n    flex-wrap: wrap;\n    justify-content: center;\n  }\n\n  #catalogo-soporte .filter-btn {\n    font-family: 'Inter', sans-serif;\n    font-size: 13px;\n    font-weight: 600;\n    padding: 8px 18px;\n    border-radius: 999px;\n    border: 1.5px solid rgba(255,255,255,0.18);\n    background: transparent;\n    color: #C7CFD8;\n    cursor: pointer;\n    transition: all 0.15s ease;\n  }\n\n  #catalogo-soporte .filter-btn:hover {\n    border-color: var(--accent);\n    color: #F5F7FA;\n  }\n\n  #catalogo-soporte .filter-btn.active {\n    background: var(--accent);\n    border-color: var(--accent);\n    color: #08131F;\n  }\n\n  #catalogo-soporte .landing[hidden], #catalogo-soporte .catalog-view[hidden] {\n    display: none !important;\n  }\n\n  \n  #catalogo-soporte .landing {\n    display: flex;\n    gap: 22px;\n    flex-wrap: wrap;\n    justify-content: center;\n    max-width: 780px;\n  }\n\n  #catalogo-soporte .category-card {\n    width: 190px;\n    background: var(--panel);\n    border: none;\n    border-radius: 12px;\n    padding: 30px 20px 24px;\n    cursor: pointer;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 10px;\n    box-shadow: 0 10px 24px var(--paper-shadow);\n    transition: transform 0.18s ease, box-shadow 0.18s ease;\n    font-family: inherit;\n  }\n\n  #catalogo-soporte .category-card:hover, #catalogo-soporte .category-card:focus-visible {\n    transform: translateY(-4px);\n    box-shadow: 0 16px 30px var(--paper-shadow);\n  }\n\n  #catalogo-soporte .category-card:focus-visible {\n    outline: 3px solid var(--accent);\n    outline-offset: 3px;\n  }\n\n  #catalogo-soporte .category-icon {\n    width: 72px;\n    height: 72px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  }\n\n  #catalogo-soporte .category-icon svg { width: 100%; height: 100%; }\n\n  #catalogo-soporte .category-label {\n    font-family: 'Space Grotesk', sans-serif;\n    font-weight: 700;\n    font-size: 18px;\n    color: var(--ink);\n  }\n\n  #catalogo-soporte .category-count {\n    font-size: 12px;\n    color: var(--ink-soft);\n  }\n\n  \n  #catalogo-soporte .catalog-view {\n    width: 100%;\n    max-width: 940px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n  }\n\n  #catalogo-soporte .back-btn {\n    align-self: flex-start;\n    background: transparent;\n    border: none;\n    color: #C7CFD8;\n    font-family: 'Inter', sans-serif;\n    font-size: 13.5px;\n    font-weight: 600;\n    cursor: pointer;\n    padding: 6px 0;\n    margin-bottom: 20px;\n  }\n\n  #catalogo-soporte .back-btn:hover { color: #F5F7FA; }\n\n  #catalogo-soporte .filter-row {\n    display: flex;\n    align-items: center;\n    gap: 14px;\n    flex-wrap: wrap;\n    justify-content: center;\n    margin-bottom: 16px;\n    width: 100%;\n  }\n\n  #catalogo-soporte .filter-label {\n    font-size: 12.5px;\n    font-weight: 700;\n    text-transform: uppercase;\n    letter-spacing: 0.04em;\n    color: #BFD3E8;\n    white-space: nowrap;\n    flex-shrink: 0;\n  }\n\n  @media (max-width: 480px) {\n    #catalogo-soporte .filter-row { justify-content: flex-start; }\n  }\n\n  #catalogo-soporte .filter-row:last-of-type { margin-bottom: 30px; }\n\n  #catalogo-soporte .filter-select {\n    appearance: none;\n    -webkit-appearance: none;\n    font-family: 'Inter', sans-serif;\n    font-size: 13.5px;\n    font-weight: 600;\n    color: #F5F7FA;\n    background: var(--bg-deep) url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"%23C7CFD8\" stroke-width=\"2\"><path d=\"M6 9l6 6 6-6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>') no-repeat right 14px center;\n    background-size: 16px;\n    border: 1.5px solid rgba(255,255,255,0.18);\n    border-radius: 10px;\n    padding: 9px 40px 9px 16px;\n    cursor: pointer;\n    min-width: 160px;\n    max-width: 100%;\n    transition: border-color 0.15s ease;\n  }\n\n  #catalogo-soporte .filter-select:hover {\n    border-color: var(--accent);\n  }\n\n  #catalogo-soporte .filter-select:focus-visible {\n    outline: 2px solid var(--accent);\n    outline-offset: 2px;\n  }\n\n  #catalogo-soporte .filter-select option {\n    background: var(--bg-deep);\n    color: #F5F7FA;\n  }\n\n  \n  #catalogo-soporte .empty-state {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    text-align: center;\n    gap: 8px;\n    padding: 50px 20px 30px;\n    max-width: 380px;\n  }\n\n  #catalogo-soporte .empty-icon {\n    width: 64px;\n    height: 64px;\n    margin-bottom: 10px;\n    opacity: 0.85;\n  }\n\n  #catalogo-soporte .empty-icon svg { width: 100%; height: 100%; }\n\n  #catalogo-soporte .empty-title {\n    font-family: 'Space Grotesk', sans-serif;\n    font-weight: 700;\n    font-size: 18px;\n    color: #F5F7FA;\n    margin: 0;\n  }\n\n  #catalogo-soporte .empty-sub {\n    font-size: 14px;\n    line-height: 1.55;\n    color: #B7C1CC;\n    margin: 0;\n  }\n\n  #catalogo-soporte .grid {\n    display: grid;\n    grid-template-columns: repeat(4, minmax(0, 210px));\n    gap: 18px;\n    width: 100%;\n    max-width: 940px;\n    justify-content: center;\n  }\n\n  @media (max-width: 940px) {\n    #catalogo-soporte .grid { grid-template-columns: repeat(3, minmax(0, 210px)); }\n  }\n\n  @media (max-width: 720px) {\n    #catalogo-soporte .grid { grid-template-columns: repeat(2, minmax(0, 210px)); }\n  }\n\n  @media (max-width: 480px) {\n    #catalogo-soporte .grid { grid-template-columns: minmax(0, 300px); }\n  }\n\n  #catalogo-soporte .card {\n    background: var(--panel);\n    border-radius: 10px;\n    padding: 20px 18px 18px;\n    cursor: pointer;\n    border: none;\n    text-align: left;\n    font-family: inherit;\n    box-shadow: 0 10px 22px var(--paper-shadow);\n    transition: transform 0.16s ease, box-shadow 0.16s ease;\n    display: flex;\n    flex-direction: column;\n    gap: 12px;\n  }\n\n  #catalogo-soporte .card:hover, #catalogo-soporte .card:focus-visible {\n    transform: translateY(-4px);\n    box-shadow: 0 16px 30px var(--paper-shadow);\n  }\n\n  #catalogo-soporte .card:focus-visible {\n    outline: 3px solid var(--accent);\n    outline-offset: 3px;\n  }\n\n  #catalogo-soporte .card.hidden { display: none; }\n\n  #catalogo-soporte .device-stage {\n    aspect-ratio: 1 / 0.85;\n    border-radius: 8px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    background: #F3F5F7;\n    overflow: hidden;\n  }\n\n  #catalogo-soporte .device-stage svg { width: 62%; height: 82%; }\n  #catalogo-soporte .device-stage img { width: 100%; height: 100%; object-fit: contain; padding: 6px; }\n\n  #catalogo-soporte .brand-line {\n    display: flex;\n    align-items: center;\n    gap: 6px;\n  }\n\n  #catalogo-soporte .brand-badge {\n    width: 18px;\n    height: 18px;\n    border-radius: 5px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    font-family: 'Space Grotesk', sans-serif;\n    font-weight: 700;\n    font-size: 10px;\n    color: #fff;\n    flex-shrink: 0;\n  }\n\n  #catalogo-soporte .brand-name {\n    font-size: 12px;\n    font-weight: 600;\n    color: var(--ink-soft);\n    text-transform: uppercase;\n    letter-spacing: 0.03em;\n  }\n\n  #catalogo-soporte .model-name {\n    font-family: 'Space Grotesk', sans-serif;\n    font-weight: 600;\n    font-size: 16px;\n    color: var(--ink);\n    line-height: 1.2;\n  }\n\n  #catalogo-soporte .cat-chip {\n    display: inline-block;\n    font-size: 10.5px;\n    font-weight: 700;\n    padding: 3px 10px;\n    border-radius: 999px;\n    width: fit-content;\n  }\n\n  #catalogo-soporte .card[data-cat=\"android\"] .cat-chip { background: var(--android-tag-soft); color: var(--android-tag); }\n  #catalogo-soporte .card[data-cat=\"ipad\"] .cat-chip { background: var(--ipad-tag-soft); color: var(--ipad-tag); }\n  #catalogo-soporte .card[data-cat=\"phone-android\"] .cat-chip { background: var(--android-tag-soft); color: var(--android-tag); }\n  #catalogo-soporte .card[data-cat=\"phone-apple\"] .cat-chip { background: var(--ipad-tag-soft); color: var(--ipad-tag); }\n  #catalogo-soporte .card[data-cat=\"accessory\"] .cat-chip { background: #EAE3F5; color: #6B4FA0; }\n\n  #catalogo-soporte .card-hint {\n    font-size: 11px;\n    color: var(--ink-soft);\n    opacity: 0.75;\n    margin-top: -2px;\n  }\n\n  \n  #catalogo-soporte .scrim {\n    position: fixed;\n    inset: 0;\n    background: rgba(6, 9, 12, 0.6);\n    opacity: 0;\n    pointer-events: none;\n    transition: opacity 0.25s ease;\n    z-index: 10;\n  }\n\n  #catalogo-soporte .scrim.open { opacity: 1; pointer-events: auto; }\n\n  #catalogo-soporte .panel {\n    position: fixed;\n    left: 50%;\n    bottom: 0;\n    transform: translate(-50%, 100%);\n    width: min(480px, 100%);\n    max-height: min(84vh, 680px);\n    background: var(--panel);\n    border-radius: 26px 26px 0 0;\n    padding: 28px 26px calc(30px + env(safe-area-inset-bottom, 0px));\n    box-shadow: 0 -12px 40px rgba(0,0,0,0.45);\n    transition: transform 0.32s cubic-bezier(.32,.72,0,1);\n    z-index: 11;\n    overflow-y: auto;\n    color: var(--ink);\n  }\n\n  #catalogo-soporte .panel.open { transform: translate(-50%, 0); }\n\n  #catalogo-soporte .panel-top {\n    display: flex;\n    align-items: flex-start;\n    justify-content: space-between;\n    gap: 14px;\n    margin-bottom: 8px;\n  }\n\n  #catalogo-soporte .panel-brand-line {\n    display: flex;\n    align-items: center;\n    gap: 8px;\n    margin-bottom: 4px;\n  }\n\n  #catalogo-soporte .panel-heading h2 {\n    font-family: 'Space Grotesk', sans-serif;\n    font-weight: 700;\n    font-size: 24px;\n    margin: 0 0 8px;\n  }\n\n  #catalogo-soporte .close-btn {\n    background: var(--bg-deep);\n    color: #F5F7FA;\n    border: none;\n    width: 34px;\n    height: 34px;\n    border-radius: 50%;\n    font-size: 18px;\n    line-height: 1;\n    cursor: pointer;\n    flex-shrink: 0;\n  }\n\n  #catalogo-soporte .close-btn:hover { background: #000; }\n\n  #catalogo-soporte .panel-stage {\n    width: 150px;\n    height: 130px;\n    margin: 8px 0 18px;\n    border-radius: 10px;\n    background: #F3F5F7;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    overflow: hidden;\n  }\n\n  #catalogo-soporte .panel-stage svg { width: 60%; height: 80%; }\n  #catalogo-soporte .panel-stage img { width: 100%; height: 100%; object-fit: contain; padding: 8px; }\n\n  #catalogo-soporte .spec-title {\n    font-size: 11.5px;\n    font-weight: 700;\n    letter-spacing: 0.03em;\n    color: var(--ink-soft);\n    text-transform: uppercase;\n    margin: 0 0 10px;\n  }\n\n  #catalogo-soporte .spec-table {\n    display: grid;\n    grid-template-columns: auto 1fr;\n    row-gap: 10px;\n    column-gap: 16px;\n    margin-bottom: 20px;\n  }\n\n  #catalogo-soporte .spec-label {\n    font-size: 13px;\n    color: var(--ink-soft);\n  }\n\n  #catalogo-soporte .spec-value {\n    font-size: 13.5px;\n    font-weight: 600;\n    color: var(--ink);\n  }\n\n  #catalogo-soporte .rental-tag {\n    display: inline-flex;\n    align-items: center;\n    gap: 6px;\n    background: var(--accent-soft);\n    color: #1B4A78;\n    font-size: 12.5px;\n    font-weight: 700;\n    padding: 6px 14px;\n    border-radius: 999px;\n  }\n\n  #catalogo-soporte .rental-tag::before {\n    content: \"\";\n    width: 7px;\n    height: 7px;\n    border-radius: 50%;\n    background: #1B4A78;\n  }\n\n  \n  #catalogo-soporte .intro {\n    width: 100%;\n    min-height: calc(100vh - 64px);\n    min-height: calc(100svh - 64px);\n    display: flex;\n    flex-direction: column;\n    margin-bottom: 56px;\n  }\n\n  #catalogo-soporte .intro[hidden] { display: none !important; }\n\n  #catalogo-soporte .intro-card {\n    flex: 1;\n    width: 100%;\n    background: var(--panel);\n    color: var(--ink);\n    border-radius: 22px;\n    padding: clamp(32px, 6vw, 80px) clamp(24px, 6vw, 96px);\n    box-shadow: 0 18px 44px var(--paper-shadow);\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    gap: clamp(24px, 5vw, 72px);\n    position: relative;\n  }\n\n  #catalogo-soporte .intro-text { flex: 1 1 0; max-width: 620px; }\n\n  #catalogo-soporte .intro-card h2 {\n    font-family: 'Space Grotesk', sans-serif;\n    font-weight: 700;\n    font-size: clamp(32px, 5.5vw, 64px);\n    line-height: 1.05;\n    margin: 0 0 20px;\n  }\n\n  #catalogo-soporte .intro-card p {\n    font-size: clamp(15px, 1.6vw, 19px);\n    line-height: 1.6;\n    color: var(--ink-soft);\n    margin: 0 0 32px;\n    max-width: 52ch;\n  }\n\n  #catalogo-soporte .primary-btn {\n    font-family: 'Inter', sans-serif;\n    font-size: 15px;\n    font-weight: 700;\n    padding: 12px 26px;\n    border-radius: 999px;\n    border: none;\n    background: var(--accent);\n    color: #FFFFFF;\n    cursor: pointer;\n    transition: background 0.15s ease, transform 0.15s ease;\n  }\n\n  #catalogo-soporte .intro-card .primary-btn { font-size: 17px; padding: 16px 36px; }\n\n  #catalogo-soporte .primary-btn:hover { background: #1F64A5; transform: translateY(-1px); }\n  #catalogo-soporte .primary-btn:focus-visible { outline: 3px solid #BFE0FF; outline-offset: 3px; }\n\n  #catalogo-soporte .intro-logo {\n    flex: 0 0 auto;\n    width: clamp(160px, 32vw, 420px);\n    aspect-ratio: 1;\n    object-fit: contain;\n  }\n\n  #catalogo-soporte .scroll-hint {\n    position: absolute;\n    left: 50%;\n    bottom: 22px;\n    transform: translateX(-50%);\n    background: none;\n    border: none;\n    font-family: 'Inter', sans-serif;\n    font-size: 13px;\n    font-weight: 600;\n    color: var(--ink-soft);\n    cursor: pointer;\n    animation: hint-bob 1.8s ease-in-out infinite;\n  }\n\n  @keyframes hint-bob {\n    0%, 100% { transform: translate(-50%, 0); }\n    50% { transform: translate(-50%, 6px); }\n  }\n\n  @media (max-width: 720px) {\n    #catalogo-soporte .intro-card { flex-direction: column-reverse; justify-content: center; text-align: center; padding-bottom: 64px; }\n    #catalogo-soporte .intro-card p { margin-left: auto; margin-right: auto; }\n    #catalogo-soporte .intro-logo { width: 140px; }\n  }\n\n  @media (prefers-reduced-motion: reduce) { #catalogo-soporte .scroll-hint { animation: none; } }\n\n  \n  #catalogo-soporte .rent-modal {\n    position: fixed;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -46%);\n    width: min(460px, calc(100% - 32px));\n    max-height: calc(100vh - 40px);\n    overflow-y: auto;\n    background: var(--panel);\n    color: var(--ink);\n    border-radius: 18px;\n    padding: 26px 24px 24px;\n    box-shadow: 0 20px 50px rgba(0,0,0,0.45);\n    z-index: 21;\n    opacity: 0;\n    pointer-events: none;\n    transition: opacity 0.2s ease, transform 0.2s ease;\n  }\n\n  #catalogo-soporte .rent-modal.open { opacity: 1; pointer-events: auto; transform: translate(-50%, -50%); }\n\n  #catalogo-soporte .rent-scrim { z-index: 20; }\n\n  #catalogo-soporte .rent-modal h2 {\n    font-family: 'Space Grotesk', sans-serif;\n    font-weight: 700;\n    font-size: 22px;\n    margin: 0;\n  }\n\n  #catalogo-soporte .rent-modal .lead {\n    font-size: 13.5px;\n    color: var(--ink-soft);\n    line-height: 1.5;\n    margin: 6px 0 18px;\n  }\n\n  #catalogo-soporte .field { display: flex; flex-direction: column; gap: 6px; margin-bottom: 14px; }\n  #catalogo-soporte .field-row { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }\n\n  #catalogo-soporte .field label {\n    font-size: 12.5px;\n    font-weight: 700;\n    color: var(--ink);\n  }\n\n  #catalogo-soporte .field input, #catalogo-soporte .field textarea {\n    font-family: 'Inter', sans-serif;\n    font-size: 14px;\n    color: var(--ink);\n    background: #F5F7FA;\n    border: 1.5px solid var(--panel-line);\n    border-radius: 10px;\n    padding: 10px 12px;\n    width: 100%;\n  }\n\n  #catalogo-soporte .field textarea { min-height: 90px; resize: vertical; }\n\n  #catalogo-soporte .field input:focus, #catalogo-soporte .field textarea:focus {\n    outline: none;\n    border-color: var(--accent);\n    background: #FFFFFF;\n  }\n\n  #catalogo-soporte .field-error { font-size: 12.5px; color: #B42318; margin: -4px 0 12px; min-height: 0; }\n\n  #catalogo-soporte .rent-modal .primary-btn { width: 100%; margin-top: 4px; }\n\n  @media (max-width: 420px) { #catalogo-soporte .field-row { grid-template-columns: 1fr; } }\n\n  #catalogo-soporte footer {\n    margin-top: 44px;\n    font-size: 12.5px;\n    color: #BFD3E8;\n    text-align: center;\n  }\n\n  @media (prefers-reduced-motion: reduce) {\n    #catalogo-soporte .card, #catalogo-soporte .panel, #catalogo-soporte .scrim { transition: none !important; }\n  }\n\n  /* --- Integraci\u00f3n WordPress --- */\n  #catalogo-soporte {\n    position: relative;\n    width: 100vw;\n    max-width: 100vw;\n    margin-left: calc(50% - 50vw);\n    margin-right: calc(50% - 50vw);\n    height: auto;\n    min-height: 0;\n    overflow: hidden;\n    line-height: normal;\n    text-align: left;\n  }\n  #catalogo-soporte .bg-power, #catalogo-soporte #dynamicHero { position: absolute; }\n  #catalogo-soporte .bg-power { top: 50vh; }\n  #catalogo-soporte .scrim, #catalogo-soporte .rent-scrim { z-index: 99990; }\n  #catalogo-soporte .panel { z-index: 99991; }\n  #catalogo-soporte .rent-modal { z-index: 99992; }\n  #catalogo-soporte .intro { min-height: calc(100vh - 88px); }\n  #catalogo-soporte :where(h1, h2, h3, p, span, label, div) {\n    font-family: inherit; text-transform: none; letter-spacing: normal;\n  }\n  #catalogo-soporte :where(h1, h2, h3)::before, #catalogo-soporte :where(h1, h2, h3)::after { content: none; }\n  #catalogo-soporte :where(button, input, select, textarea) {\n    font-family: inherit; text-transform: none; letter-spacing: normal;\n    line-height: normal; min-height: 0; box-shadow: none; text-shadow: none;\n    margin: 0; width: auto; height: auto;\n  }\n  #catalogo-soporte :where(img) { max-width: none; height: auto; border: 0; box-shadow: none; border-radius: 0; }\n  #catalogo-soporte :where(header, footer, section, nav) {\n    background: none; border: 0; box-shadow: none; padding: 0; position: static;\n  }\n\n  :host { all: initial; display: block; }\n  #catalogo-soporte { width: 100%; max-width: none; margin: 0; }\n" + "</style>" + "<div id=\"catalogo-soporte\">\n<div class=\"bg-power\" aria-hidden=\"true\">\n  <svg viewBox=\"0 0 100 100\" xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" stroke=\"#8CC8FF\" stroke-width=\"9\" stroke-linecap=\"round\">\n    <path d=\"M32 26a32 32 0 1 0 36 0\"/>\n    <path d=\"M50 12v36\"/>\n  </svg>\n</div>\n\n<div id=\"dynamicHero\"></div>\n\n<div id=\"pageContent\">\n\n<section class=\"intro\" id=\"intro\">\n  <div class=\"intro-card\">\n    <div class=\"intro-text\">\n      <h2>Alquiler de dispositivos para eventos y producciones</h2>\n      <p>Tablets, m\u00f3viles, ordenadores y accesorios listos para tu evento, rodaje o producci\u00f3n. Elige el equipo que necesitas y te lo preparamos configurado y revisado.</p>\n      <button class=\"primary-btn\" id=\"openRent\">Alquilar ahora</button>\n    </div>\n    <img class=\"intro-logo\" id=\"introLogo\" alt=\"Logo Soporte TV\">\n    <button class=\"scroll-hint\" id=\"scrollHint\">Ver cat\u00e1logo \u2193</button>\n  </div>\n</section>\n\n<header>\n  <p class=\"eyebrow\">Cat\u00e1logo interno</p>\n  <div class=\"brand-header\">\n    <img src=\"https://m3hervas.github.io/CatalogoSoporte/img/5bc452a80984.png\" alt=\"Logo Soporte TV\" style=\"width:38px;height:38px;object-fit:contain;\">\n    <h1>Soporte TV</h1>\n  </div>\n  <p>Elige una categor\u00eda para ver los productos disponibles para alquiler.</p>\n</header>\n\n<div class=\"landing\" id=\"viewLanding\">\n  <button class=\"category-card\" id=\"goTablets\">\n    <div class=\"category-icon\" id=\"tabletIconLarge\"></div>\n    <span class=\"category-label\">Tablets</span>\n    <span class=\"category-count\">13 disponibles</span>\n  </button>\n  <button class=\"category-card\" id=\"goPhones\">\n    <div class=\"category-icon\" id=\"phoneIconLarge\"></div>\n    <span class=\"category-label\">M\u00f3viles</span>\n    <span class=\"category-count\">9 disponibles</span>\n  </button>\n  <button class=\"category-card\" id=\"goAccessories\">\n    <div class=\"category-icon\" id=\"accessoryIconLarge\"></div>\n    <span class=\"category-label\">Accesorios</span>\n    <span class=\"category-count\">10 disponibles</span>\n  </button>\n  <button class=\"category-card\" id=\"goComputers\">\n    <div class=\"category-icon\" id=\"computerIconLarge\"></div>\n    <span class=\"category-label\">Ordenadores</span>\n    <span class=\"category-count\">18 disponibles</span>\n  </button>\n  <button class=\"category-card\" id=\"goSurface\">\n    <div class=\"category-icon\" id=\"surfaceIconLarge\"></div>\n    <span class=\"category-label\">Surface</span>\n    <span class=\"category-count\">5 disponibles</span>\n  </button>\n  <button class=\"category-card is-test\" id=\"goTest\">\n    <span class=\"test-badge\">PRUEBA</span>\n    <div class=\"category-icon\" id=\"testIconLarge\"></div>\n    <span class=\"category-label\">Productos en PRUEBA</span>\n    <span class=\"category-count\">Pr\u00f3ximamente</span>\n  </button>\n</div>\n\n<div class=\"catalog-view\" id=\"viewTablets\" hidden>\n  <button class=\"back-btn\" data-back>\u2190 Volver</button>\n\n  <div class=\"filter-row\">\n    <span class=\"filter-label\">Marca</span>\n    <select class=\"filter-select\" id=\"brandSelect\">\n      <option value=\"all\">Todas las marcas</option>\n      <option value=\"Lenovo\">Lenovo</option>\n      <option value=\"Samsung\">Samsung</option>\n      <option value=\"Apple\">Apple</option>\n    </select>\n  </div>\n\n  <div class=\"filter-row\">\n    <span class=\"filter-label\">Almacenamiento</span>\n    <select class=\"filter-select\" id=\"storageSelect\">\n      <option value=\"all\">Todos</option>\n      <option value=\"32 GB\">32 GB</option>\n      <option value=\"64 GB\">64 GB</option>\n      <option value=\"128 GB\">128 GB</option>\n      <option value=\"256 GB\">256 GB</option>\n    </select>\n  </div>\n\n  <div class=\"grid\" id=\"grid\"></div>\n</div>\n\n<div class=\"catalog-view\" id=\"viewPhones\" hidden>\n  <button class=\"back-btn\" data-back>\u2190 Volver</button>\n\n  <div class=\"filter-row\">\n    <span class=\"filter-label\">Marca</span>\n    <select class=\"filter-select\" id=\"phoneBrandSelect\">\n      <option value=\"all\">Todas las marcas</option>\n      <option value=\"Xiaomi\">Xiaomi</option>\n      <option value=\"Samsung\">Samsung</option>\n      <option value=\"Apple\">Apple</option>\n    </select>\n  </div>\n\n  <div class=\"filter-row\">\n    <span class=\"filter-label\">Almacenamiento</span>\n    <select class=\"filter-select\" id=\"phoneStorageSelect\">\n      <option value=\"all\">Todos</option>\n      <option value=\"128 GB\">128 GB</option>\n      <option value=\"256 GB\">256 GB</option>\n      <option value=\"512 GB\">512 GB</option>\n    </select>\n  </div>\n\n  <div class=\"grid\" id=\"gridPhones\"></div>\n</div>\n\n<div class=\"catalog-view\" id=\"viewAccessories\" hidden>\n  <button class=\"back-btn\" data-back>\u2190 Volver</button>\n\n  <div class=\"filter-row\">\n    <span class=\"filter-label\">Tipo</span>\n    <select class=\"filter-select\" id=\"accessoryTypeSelect\">\n      <option value=\"all\">Todos</option>\n      <option value=\"M\u00f3vil/C\u00e1mara\">M\u00f3vil / C\u00e1mara</option>\n      <option value=\"iPad\">iPad</option>\n    </select>\n  </div>\n\n  <div class=\"filter-row\">\n    <span class=\"filter-label\">Marca</span>\n    <select class=\"filter-select\" id=\"accessoryBrandSelect\">\n      <option value=\"all\">Todas las marcas</option>\n      <option value=\"Apple\">Apple</option>\n      <option value=\"Zhiyun\">Zhiyun</option>\n      <option value=\"Celly\">Celly</option>\n      <option value=\"Wacom\">Wacom</option>\n      <option value=\"Sin marca\">Sin marca</option>\n    </select>\n  </div>\n\n  <div class=\"grid\" id=\"gridAccessories\"></div>\n</div>\n\n<div class=\"catalog-view\" id=\"viewComputers\" hidden>\n  <button class=\"back-btn\" data-back>\u2190 Volver</button>\n\n  <div class=\"filter-row\">\n    <span class=\"filter-label\">Tipo</span>\n    <select class=\"filter-select\" id=\"computerTypeSelect\">\n      <option value=\"all\">Todos</option>\n      <option value=\"Port\u00e1til\">Port\u00e1til</option>\n      <option value=\"AIO\">AIO (Todo en uno)</option>\n      <option value=\"iMac\">iMac</option>\n      <option value=\"CPU\">CPU</option>\n      <option value=\"CPU + Monitor\">CPU + Monitor</option>\n    </select>\n  </div>\n\n  <div class=\"filter-row\">\n    <span class=\"filter-label\">Marca</span>\n    <select class=\"filter-select\" id=\"computerBrandSelect\">\n      <option value=\"all\">Todas las marcas</option>\n      <option value=\"Apple\">Apple</option>\n      <option value=\"HP\">HP</option>\n      <option value=\"Multimarca\">Multimarca (Dell/HP/Lenovo)</option>\n    </select>\n  </div>\n\n  <div class=\"grid\" id=\"gridComputers\"></div>\n</div>\n\n<div class=\"catalog-view\" id=\"viewSurface\" hidden>\n  <button class=\"back-btn\" data-back>\u2190 Volver</button>\n\n  <div class=\"filter-row\">\n    <span class=\"filter-label\">Procesador</span>\n    <select class=\"filter-select\" id=\"surfaceCpuSelect\">\n      <option value=\"all\">Todos</option>\n      <option value=\"i5\">Intel Core i5</option>\n      <option value=\"i7\">Intel Core i7</option>\n    </select>\n  </div>\n\n  <div class=\"filter-row\">\n    <span class=\"filter-label\">Almacenamiento</span>\n    <select class=\"filter-select\" id=\"surfaceStorageSelect\">\n      <option value=\"all\">Todos</option>\n      <option value=\"128 GB\">128 GB</option>\n      <option value=\"256 GB\">256 GB</option>\n      <option value=\"512 GB\">512 GB</option>\n    </select>\n  </div>\n\n  <div class=\"grid\" id=\"gridSurface\"></div>\n</div>\n\n<div class=\"catalog-view\" id=\"viewTest\" hidden>\n  <button class=\"back-btn\" data-back>\u2190 Volver</button>\n  <div class=\"empty-state\">\n    <div class=\"empty-icon\" id=\"testIconEmpty\"></div>\n    <p class=\"empty-title\">Productos en PRUEBA</p>\n    <p class=\"empty-sub\">Aqu\u00ed aparecer\u00e1n los equipos que estamos probando antes de a\u00f1adirlos al cat\u00e1logo de alquiler.</p>\n  </div>\n</div>\n\n<footer>Soporte TV \u2014 cat\u00e1logo interno de equipos disponibles para alquiler.</footer>\n\n<div class=\"scrim\" id=\"scrim\"></div>\n<div class=\"panel\" id=\"panel\" role=\"dialog\" aria-modal=\"true\" aria-labelledby=\"panel-name\"></div>\n\n<div class=\"scrim rent-scrim\" id=\"rentScrim\"></div>\n<div class=\"rent-modal\" id=\"rentModal\" role=\"dialog\" aria-modal=\"true\" aria-labelledby=\"rentTitle\">\n  <div class=\"panel-top\">\n    <h2 id=\"rentTitle\">Solicitar alquiler</h2>\n    <button class=\"close-btn\" id=\"rentClose\" aria-label=\"Cerrar\">\u2715</button>\n  </div>\n  <p class=\"lead\">Cu\u00e9ntanos qu\u00e9 necesitas y se abrir\u00e1 tu correo con la solicitud lista para enviar.</p>\n  <form id=\"rentForm\" novalidate>\n    <div class=\"field\">\n      <label for=\"rentName\">Nombre</label>\n      <input id=\"rentName\" type=\"text\" autocomplete=\"name\" required>\n    </div>\n    <div class=\"field\">\n      <label for=\"rentEmail\">Tu correo</label>\n      <input id=\"rentEmail\" type=\"email\" autocomplete=\"email\" required>\n    </div>\n    <div class=\"field-row\">\n      <div class=\"field\">\n        <label for=\"rentFrom\">Desde</label>\n        <input id=\"rentFrom\" type=\"date\">\n      </div>\n      <div class=\"field\">\n        <label for=\"rentTo\">Hasta</label>\n        <input id=\"rentTo\" type=\"date\">\n      </div>\n    </div>\n    <div class=\"field\">\n      <label for=\"rentMsg\">\u00bfQu\u00e9 necesitas?</label>\n      <textarea id=\"rentMsg\" placeholder=\"Ej.: 4 iPad y 2 port\u00e1tiles para un evento\" required></textarea>\n    </div>\n    <p class=\"field-error\" id=\"rentError\" role=\"alert\"></p>\n    <button type=\"submit\" class=\"primary-btn\">Enviar solicitud</button>\n  </form>\n</div>\n\n</div>\n</div>";
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
    photo: "https://m3hervas.github.io/CatalogoSoporte/img/366569a3c54e.png",
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
    photo: "https://m3hervas.github.io/CatalogoSoporte/img/02b1d6489ce1.png",
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
    photo: "https://m3hervas.github.io/CatalogoSoporte/img/6506f1fc9fa8.png",
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
    photo: "https://m3hervas.github.io/CatalogoSoporte/img/ce3a7cad0f05.png",
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
    photo: "https://m3hervas.github.io/CatalogoSoporte/img/474ca226037c.png",
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
    photo: "https://m3hervas.github.io/CatalogoSoporte/img/0992940171c9.png",
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
    photo: "https://m3hervas.github.io/CatalogoSoporte/img/4a32f8d35d3b.png",
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
    photo: "https://m3hervas.github.io/CatalogoSoporte/img/6eeaa7111695.png",
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
    photo: "https://m3hervas.github.io/CatalogoSoporte/img/ba0fd8bee3c6.png",
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
    photo: "https://m3hervas.github.io/CatalogoSoporte/img/93a9c24031b3.png",
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
    photo: "https://m3hervas.github.io/CatalogoSoporte/img/494e20141cb8.png",
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
    photo: "https://m3hervas.github.io/CatalogoSoporte/img/1d72bbbdbf38.png",
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
    photo: "https://m3hervas.github.io/CatalogoSoporte/img/494e20141cb8.png",
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
    photo: "https://m3hervas.github.io/CatalogoSoporte/img/383119fefb8f.png",
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
    photo: "https://m3hervas.github.io/CatalogoSoporte/img/45af4b504265.png",
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
    photo: "https://m3hervas.github.io/CatalogoSoporte/img/3e83ea48d404.png",
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
    photo: "https://m3hervas.github.io/CatalogoSoporte/img/3e83ea48d404.png",
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
    photo: "https://m3hervas.github.io/CatalogoSoporte/img/13fd25bbe48d.png",
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
    photo: "https://m3hervas.github.io/CatalogoSoporte/img/13fd25bbe48d.png",
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
    photo: "https://m3hervas.github.io/CatalogoSoporte/img/9da4c29f951f.png",
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
    photo: "https://m3hervas.github.io/CatalogoSoporte/img/459d5f88f8e9.png",
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
    photo: "https://m3hervas.github.io/CatalogoSoporte/img/0ad08412c56b.png",
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
    photo: "https://m3hervas.github.io/CatalogoSoporte/img/bcc6ecb1aba1.png", cpu: "i5", storage: "128 GB",
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
    photo: "https://m3hervas.github.io/CatalogoSoporte/img/bcc6ecb1aba1.png", cpu: "i5", storage: "256 GB",
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
    photo: "https://m3hervas.github.io/CatalogoSoporte/img/bcc6ecb1aba1.png", cpu: "i5", storage: "256 GB",
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
    photo: "https://m3hervas.github.io/CatalogoSoporte/img/bcc6ecb1aba1.png", cpu: "i7", storage: "256 GB",
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
    photo: "https://m3hervas.github.io/CatalogoSoporte/img/bcc6ecb1aba1.png", cpu: "i7", storage: "512 GB",
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

function renderGrid(products, gridEl) {
  products.forEach(p => {
    const card = document.createElement("button");
    card.className = "card";
    card.dataset.cat = p.cat;
    card.dataset.brand = p.brand || "Sin marca";
    card.dataset.storage = p.storage || "";
    card.dataset.type = p.type || "";
    card.dataset.group = p.group || "";
    card.dataset.cpu = p.cpu || "";
    card.setAttribute("aria-haspopup", "dialog");
    const stageContent = p.photo ? `<img src="${p.photo}" alt="${p.model}">` : p.icon;
    card.innerHTML = `
      <div class="device-stage">${stageContent}</div>
      ${p.brand ? `<div class="brand-line">${badgeMarkup(p)}</div>` : ""}
      <span class="model-name">${p.model}</span>
      <span class="cat-chip">${p.catLabel}</span>
      <span class="card-hint">Toca para ver la ficha técnica</span>
    `;
    card.addEventListener("click", () => openPanel(p));
    gridEl.appendChild(card);
  });
}

function openPanel(p) {
  const stageContent = p.photo ? `<img src="${p.photo}" alt="${p.model}">` : p.icon;

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

renderGrid(PRODUCTS, shadow.getElementById("grid"));
renderGrid(PHONES, shadow.getElementById("gridPhones"));
renderGrid(ACCESSORIES, shadow.getElementById("gridAccessories"));
renderGrid(COMPUTERS, shadow.getElementById("gridComputers"));
renderGrid(SURFACE, shadow.getElementById("gridSurface"));

// --- View navigation ---
shadow.getElementById("tabletIconLarge").innerHTML = tabletIconLarge("#2B79C2");
shadow.getElementById("phoneIconLarge").innerHTML = phoneIcon("#2B79C2");
shadow.getElementById("accessoryIconLarge").innerHTML = accessoryIcon("#2B79C2");
shadow.getElementById("computerIconLarge").innerHTML = desktopIcon("#2B79C2");
shadow.getElementById("surfaceIconLarge").innerHTML = surfaceIcon("#2B79C2");
shadow.getElementById("testIconLarge").innerHTML = testIcon("#2B79C2");
shadow.getElementById("testIconEmpty").innerHTML = testIcon("#8CC8FF");

const viewLanding = shadow.getElementById("viewLanding");
const views = {
  tablets: shadow.getElementById("viewTablets"),
  phones: shadow.getElementById("viewPhones"),
  accessories: shadow.getElementById("viewAccessories"),
  computers: shadow.getElementById("viewComputers"),
  surface: shadow.getElementById("viewSurface"),
  test: shadow.getElementById("viewTest")
};

const dynamicHero = shadow.getElementById("dynamicHero");
const heroImages = {
  computers: "https://m3hervas.github.io/CatalogoSoporte/img/fccfea45b32c.png",
  surface: "https://m3hervas.github.io/CatalogoSoporte/img/25056b1574d2.png",
  phones: "https://m3hervas.github.io/CatalogoSoporte/img/7d72501bb6ef.png"
};

function showView(key) {
  viewLanding.hidden = true;
  Object.values(views).forEach(v => v.hidden = true);
  views[key].hidden = false;

  catRoot.scrollIntoView();

  if (heroImages[key]) {
    dynamicHero.style.backgroundImage =
      `linear-gradient(180deg, rgba(10,14,19,0.1) 0%, rgba(10,14,19,0.55) 55%, var(--bg) 100%), url("${heroImages[key]}")`;
    activeHeroKey = key;
    updateHeroOpacity();
    dynamicHero.classList.add("active");
  } else {
    deactivateHero();
  }
}

let activeHeroKey = null;
const HERO_FADE_DISTANCE = 260;

function getScrollY() {
  return Math.max(0, -catRoot.getBoundingClientRect().top);
}

function updateHeroOpacity() {
  if (!activeHeroKey) return;
  const fade = Math.max(0, 1 - getScrollY() / HERO_FADE_DISTANCE);
  dynamicHero.style.opacity = fade;
}

function deactivateHero() {
  activeHeroKey = null;
  dynamicHero.classList.remove("active");
  dynamicHero.style.opacity = "";
  dynamicHero.style.backgroundImage = "";
}

window.addEventListener("scroll", updateHeroOpacity, { passive: true });
document.addEventListener("scroll", updateHeroOpacity, { passive: true });

shadow.getElementById("goTablets").addEventListener("click", () => showView("tablets"));
shadow.getElementById("goPhones").addEventListener("click", () => showView("phones"));
shadow.getElementById("goAccessories").addEventListener("click", () => showView("accessories"));
shadow.getElementById("goComputers").addEventListener("click", () => showView("computers"));
shadow.getElementById("goSurface").addEventListener("click", () => showView("surface"));
shadow.getElementById("goTest").addEventListener("click", () => showView("test"));

catRoot.querySelectorAll("[data-back]").forEach(btn => {
  btn.addEventListener("click", () => {
    Object.values(views).forEach(v => v.hidden = true);
    viewLanding.hidden = false;
    deactivateHero();
    catRoot.scrollIntoView();
  });
});

// --- Generic filters: any combination of dataset attributes per view ---
// filterDefs: [{ select: <el>, attr: "brand" }, { select: <el>, attr: "storage" }, ...]
function setupFilters(gridEl, filterDefs) {
  const active = {};
  filterDefs.forEach(f => { if (f.select) active[f.attr] = "all"; });

  function applyFilters() {
    gridEl.querySelectorAll(".card").forEach(card => {
      const matches = filterDefs.every(f => {
        if (!f.select) return true;
        const val = active[f.attr];
        return val === "all" || card.dataset[f.attr] === val;
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

// --- Intro + rental request ---
const RENTAL_EMAIL = "CORREO@PENDIENTE.com";

const intro = shadow.getElementById("intro");
shadow.getElementById("introLogo").src = catRoot.querySelector(".brand-header img").src;

const rentModal = shadow.getElementById("rentModal");
const rentScrim = shadow.getElementById("rentScrim");
const rentForm = shadow.getElementById("rentForm");
const rentError = shadow.getElementById("rentError");

function openRent() {
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
rentScrim.addEventListener("click", closeRent);
document.addEventListener("keydown", e => { if (e.key === "Escape") closeRent(); });
rentForm.addEventListener("input", () => { rentError.textContent = ""; });

rentForm.addEventListener("submit", e => {
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

  const subject = `Solicitud de alquiler — ${name}`;
  const body = [
    `Nombre: ${name}`,
    `Correo: ${email}`,
    `Fechas: ${from || "—"} a ${to || "—"}`,
    "",
    msg
  ].join("\n");

  window.location.href = `mailto:${RENTAL_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  closeRent();
});

// Show the intro only on the landing view
catRoot.querySelectorAll(".category-card").forEach(c =>
  c.addEventListener("click", () => { intro.hidden = true; }));
catRoot.querySelectorAll("[data-back]").forEach(b =>
  b.addEventListener("click", () => { intro.hidden = false; }));

})();

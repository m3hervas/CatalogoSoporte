/* Catálogo Soporte TV para WordPress — generado desde index.html con build_wordpress.py */
(function () {
const host = document.getElementById("catalogo-soporte-app");
if (!host || host.shadowRoot) return;

["https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Inter:wght@400;500;600;700&display=swap"].forEach(href => {
  if (!document.querySelector(`link[href="${href}"]`)) {
    const l = document.createElement("link");
    l.rel = "stylesheet"; l.href = href;
    document.head.appendChild(l);
  }
});

const shadow = host.attachShadow({ mode: "open" });
shadow.innerHTML = "<style>" + "\n  #catalogo-soporte {\n    --bg: #F4F6FA;\n    --bg-deep: #FFFFFF;\n    --field-line: rgba(15,23,42,0.16);\n    --close-bg: #0F172A;\n    --panel: #FFFFFF;\n    --panel-line: #E4E8ED;\n    --ink: #1B222B;\n    --ink-soft: #5C6672;\n    --paper-shadow: rgba(15,23,42,0.10);\n    --accent: #2B79C2;\n    --accent-soft: #D9E7F5;\n\n    --lenovo: #E2231A;\n    --lenovo-soft: #FBDAD8;\n    --samsung: #1428A0;\n    --samsung-soft: #DCE1F5;\n    --apple: #5B6470;\n    --apple-soft: #E7E9EC;\n\n    --android-tag: #1E8E5A;\n    --android-tag-soft: #D8F0E2;\n    --ipad-tag: #40474F;\n    --ipad-tag-soft: #E7E9EC;\n\n    --ease-out: cubic-bezier(0.23, 1, 0.32, 1);\n    --ease-drawer: cubic-bezier(0.32, 0.72, 0, 1);\n\n    padding-top: env(safe-area-inset-top, 0px);\n    padding-bottom: env(safe-area-inset-bottom, 0px);\n    box-sizing: border-box;\n  }\n\n  #catalogo-soporte * { box-sizing: border-box; }\n\n  #catalogo-soporte button, #catalogo-soporte .filter-select { -webkit-tap-highlight-color: transparent; }\n\n  #catalogo-soporte {\n    margin: 0;\n    height: 100%;\n    background: var(--bg);\n    color: var(--panel);\n    font-family: 'Inter', sans-serif;\n    overflow-x: hidden;\n  }\n  #catalogo-soporte { color: #0F172A; }\n\n  #catalogo-soporte {\n    min-height: 100%;\n    background: radial-gradient(1200px 640px at 8% -12%, rgba(61,139,255,0.10), transparent 60%),\n                radial-gradient(900px 560px at 100% 112%, rgba(99,102,241,0.07), transparent 60%),\n                var(--bg);\n    background-attachment: fixed;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    padding: 12px 20px 0;\n  }\n\n  #catalogo-soporte .bg-power {\n    position: fixed;\n    top: 50%;\n    left: 50%;\n    width: min(70vw, 520px);\n    height: min(70vw, 520px);\n    transform: translate(-50%, -50%);\n    z-index: 0;\n    pointer-events: none;\n    opacity: 0.22;\n    filter: blur(14px);\n  }\n\n  #catalogo-soporte .bg-power svg { width: 100%; height: 100%; }\n\n  #catalogo-soporte #pageContent {\n    position: relative;\n    z-index: 1;\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n  }\n\n  #catalogo-soporte header {\n    text-align: center;\n    max-width: 640px;\n    margin-bottom: 30px;\n  }\n\n  #catalogo-soporte .eyebrow {\n    font-family: 'Inter', sans-serif;\n    font-weight: 600;\n    font-size: 13px;\n    letter-spacing: 0.08em;\n    text-transform: uppercase;\n    color: #BFE0FF;\n    margin: 0 0 12px;\n  }\n\n  #catalogo-soporte .brand-header {\n    display: flex;\n    align-items: center;\n    gap: 12px;\n    justify-content: center;\n    margin-bottom: 14px;\n  }\n\n  #catalogo-soporte .brand-header svg {\n    width: 38px;\n    height: 38px;\n    flex-shrink: 0;\n  }\n\n  #catalogo-soporte h1 {\n    font-family: 'Inter', sans-serif;\n    font-weight: 700;\n    font-size: clamp(30px, 6vw, 44px);\n    line-height: 1.05;\n    margin: 0;\n    color: #0F172A;\n  }\n\n  #catalogo-soporte header p {\n    font-size: 15.5px;\n    line-height: 1.6;\n    color: #B7C1CC;\n    margin: 0;\n    max-width: 48ch;\n    margin-left: auto;\n    margin-right: auto;\n  }\n\n  #catalogo-soporte .landing[hidden], #catalogo-soporte .catalog-view[hidden] {\n    display: none !important;\n  }\n\n  \n  #catalogo-soporte .landing {\n    display: flex;\n    gap: 22px;\n    flex-wrap: wrap;\n    justify-content: center;\n    max-width: 900px;\n  }\n\n  #catalogo-soporte .category-card {\n    width: 190px;\n    background: var(--panel);\n    border: none;\n    border-radius: 12px;\n    padding: 30px 20px 24px;\n    cursor: pointer;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 10px;\n    box-shadow: 0 10px 24px var(--paper-shadow);\n    transition: transform 200ms var(--ease-out), box-shadow 200ms var(--ease-out);\n    font-family: inherit;\n  }\n\n  #catalogo-soporte .category-card:focus-visible {\n    transform: translateY(-4px);\n    box-shadow: 0 16px 30px var(--paper-shadow);\n  }\n\n  @media (hover: hover) and (pointer: fine) {\n    #catalogo-soporte .category-card:hover {\n      transform: translateY(-4px);\n      box-shadow: 0 16px 30px var(--paper-shadow);\n    }\n  }\n\n  #catalogo-soporte .category-card:active { transform: scale(0.97); transition-duration: 120ms; }\n\n  #catalogo-soporte .category-card:focus-visible {\n    outline: 3px solid var(--accent);\n    outline-offset: 3px;\n  }\n\n  #catalogo-soporte .category-icon {\n    width: 72px;\n    height: 72px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  }\n\n  #catalogo-soporte .category-icon svg { width: 100%; height: 100%; }\n\n  #catalogo-soporte .category-label {\n    font-family: 'Inter', sans-serif;\n    font-weight: 700;\n    font-size: 18px;\n    color: var(--ink);\n  }\n\n  \n  #catalogo-soporte .catalog-view {\n    width: 100%;\n    max-width: 940px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n  }\n\n  #catalogo-soporte .back-btn {\n    align-self: flex-start;\n    background: transparent;\n    border: none;\n    color: #334155;\n    font-family: 'Inter', sans-serif;\n    font-size: 13.5px;\n    font-weight: 600;\n    cursor: pointer;\n    padding: 6px 0;\n    margin-bottom: 20px;\n  }\n\n  #catalogo-soporte .back-btn { transition: color 150ms ease, transform 150ms var(--ease-out); }\n  @media (hover: hover) and (pointer: fine) { #catalogo-soporte .back-btn:hover { color: #0F172A; transform: translateX(-2px); } }\n  #catalogo-soporte .back-btn:active { transform: scale(0.97); }\n\n  #catalogo-soporte .filter-row {\n    display: flex;\n    align-items: center;\n    gap: 14px;\n    flex-wrap: wrap;\n    justify-content: center;\n    margin-bottom: 16px;\n    width: 100%;\n  }\n\n  #catalogo-soporte .filter-label {\n    font-size: 12.5px;\n    font-weight: 700;\n    text-transform: uppercase;\n    letter-spacing: 0.04em;\n    color: #BFD3E8;\n    white-space: nowrap;\n    flex-shrink: 0;\n  }\n\n  @media (max-width: 480px) {\n    #catalogo-soporte .filter-row { justify-content: flex-start; }\n  }\n\n  #catalogo-soporte .filter-row:last-of-type { margin-bottom: 30px; }\n\n  #catalogo-soporte .filter-select {\n    appearance: none;\n    -webkit-appearance: none;\n    font-family: 'Inter', sans-serif;\n    font-size: 13.5px;\n    font-weight: 600;\n    color: #0F172A;\n    background: var(--bg-deep) url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"%23475569\" stroke-width=\"2\"><path d=\"M6 9l6 6 6-6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>') no-repeat right 14px center;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"%23C7CFD8\" stroke-width=\"2\"><path d=\"M6 9l6 6 6-6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>') no-repeat right 14px center;\n    background-size: 16px;\n    border: 1.5px solid rgba(255,255,255,0.18);\n    border-radius: 10px;\n    padding: 9px 40px 9px 16px;\n    cursor: pointer;\n    min-width: 160px;\n    max-width: 100%;\n    transition: border-color 0.15s ease;\n  }\n\n  #catalogo-soporte .filter-select:hover {\n    border-color: var(--accent);\n  }\n\n  #catalogo-soporte .filter-select:focus-visible {\n    outline: 2px solid var(--accent);\n    outline-offset: 2px;\n  }\n\n  #catalogo-soporte .filter-select option {\n    background: #FFFFFF;\n    color: #0F172A;\n  }\n\n\n\n\n  #catalogo-soporte .brand-line {\n    display: flex;\n    align-items: center;\n    gap: 6px;\n  }\n\n  #catalogo-soporte .brand-badge {\n    width: 18px;\n    height: 18px;\n    border-radius: 5px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    font-family: 'Inter', sans-serif;\n    font-weight: 700;\n    font-size: 10px;\n    color: #fff;\n    flex-shrink: 0;\n  }\n\n  #catalogo-soporte .brand-name {\n    font-size: 12px;\n    font-weight: 600;\n    color: var(--ink-soft);\n    text-transform: uppercase;\n    letter-spacing: 0.03em;\n  }\n\n  #catalogo-soporte .cat-chip {\n    display: inline-block;\n    font-size: 10.5px;\n    font-weight: 700;\n    padding: 3px 10px;\n    border-radius: 999px;\n    width: fit-content;\n  }\n\n  #catalogo-soporte .card-hint {\n    font-size: 11px;\n    color: var(--ink-soft);\n    opacity: 0.75;\n    margin-top: -2px;\n  }\n\n  \n  #catalogo-soporte .scrim {\n    position: fixed;\n    inset: 0;\n    background: rgba(6, 9, 12, 0.6);\n    opacity: 0;\n    pointer-events: none;\n    transition: opacity 220ms ease;\n    z-index: 10;\n  }\n\n  #catalogo-soporte .scrim.open { opacity: 1; pointer-events: auto; }\n\n  #catalogo-soporte .panel {\n    position: fixed;\n    left: 50%;\n    bottom: 0;\n    transform: translate(-50%, 100%);\n    width: min(480px, 100%);\n    max-height: min(84vh, 680px);\n    background: var(--panel);\n    border-radius: 26px 26px 0 0;\n    padding: 28px 26px calc(30px + env(safe-area-inset-bottom, 0px));\n    box-shadow: 0 -12px 40px rgba(0,0,0,0.45);\n    transition: transform 340ms var(--ease-drawer);\n    z-index: 11;\n    overflow-y: auto;\n    color: var(--ink);\n  }\n\n  #catalogo-soporte .panel.open { transform: translate(-50%, 0); }\n\n  #catalogo-soporte .panel-top {\n    display: flex;\n    align-items: flex-start;\n    justify-content: space-between;\n    gap: 14px;\n    margin-bottom: 8px;\n  }\n\n  #catalogo-soporte .panel-brand-line {\n    display: flex;\n    align-items: center;\n    gap: 8px;\n    margin-bottom: 4px;\n  }\n\n  #catalogo-soporte .panel-heading h2 {\n    font-family: 'Inter', sans-serif;\n    font-weight: 700;\n    font-size: 24px;\n    margin: 0 0 8px;\n  }\n\n  #catalogo-soporte .close-btn {\n    background: var(--close-bg);\n    color: #F5F7FA;\n    border: none;\n    width: 34px;\n    height: 34px;\n    border-radius: 50%;\n    font-size: 18px;\n    line-height: 1;\n    cursor: pointer;\n    flex-shrink: 0;\n  }\n\n  #catalogo-soporte .close-btn { transition: background-color 150ms ease, transform 150ms var(--ease-out); }\n  @media (hover: hover) and (pointer: fine) { #catalogo-soporte .close-btn:hover { background: #000; } }\n  #catalogo-soporte .close-btn:active { transform: scale(0.92); }\n\n  #catalogo-soporte .panel-stage {\n    width: 150px;\n    height: 130px;\n    margin: 8px 0 18px;\n    border-radius: 10px;\n    background: #F3F5F7;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    overflow: hidden;\n  }\n\n  #catalogo-soporte .panel-stage svg { width: 60%; height: 80%; }\n  #catalogo-soporte .panel-stage img { width: 100%; height: 100%; object-fit: contain; padding: 8px; }\n\n  #catalogo-soporte .spec-title {\n    font-size: 11.5px;\n    font-weight: 700;\n    letter-spacing: 0.03em;\n    color: var(--ink-soft);\n    text-transform: uppercase;\n    margin: 0 0 10px;\n  }\n\n  #catalogo-soporte .spec-table {\n    display: grid;\n    grid-template-columns: auto 1fr;\n    row-gap: 10px;\n    column-gap: 16px;\n    margin-bottom: 20px;\n  }\n\n  #catalogo-soporte .spec-label {\n    font-size: 13px;\n    color: var(--ink-soft);\n  }\n\n  #catalogo-soporte .spec-value {\n    font-size: 13.5px;\n    font-weight: 600;\n    color: var(--ink);\n  }\n\n  #catalogo-soporte .rental-tag {\n    display: inline-flex;\n    align-items: center;\n    gap: 6px;\n    background: var(--accent-soft);\n    color: #1B4A78;\n    font-size: 12.5px;\n    font-weight: 700;\n    padding: 6px 14px;\n    border-radius: 999px;\n  }\n\n  #catalogo-soporte .rental-tag::before {\n    content: \"\";\n    width: 7px;\n    height: 7px;\n    border-radius: 50%;\n    background: #1B4A78;\n  }\n\n  #catalogo-soporte .primary-btn {\n    font-family: 'Inter', sans-serif;\n    font-size: 15px;\n    font-weight: 700;\n    padding: 12px 26px;\n    border-radius: 999px;\n    border: none;\n    background: var(--accent);\n    color: #FFFFFF;\n    cursor: pointer;\n    transition: background-color 150ms ease, transform 160ms var(--ease-out);\n  }\n\n  @media (hover: hover) and (pointer: fine) { #catalogo-soporte .primary-btn:hover { background: #1F64A5; transform: translateY(-1px); } }\n  #catalogo-soporte .primary-btn:active { transform: scale(0.97); }\n  #catalogo-soporte .primary-btn:focus-visible { outline: 3px solid #BFE0FF; outline-offset: 3px; }\n\n  \n  #catalogo-soporte .rent-modal {\n    position: fixed;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -46%);\n    width: min(460px, calc(100% - 32px));\n    max-height: calc(100vh - 40px);\n    overflow-y: auto;\n    background: var(--panel);\n    color: var(--ink);\n    border-radius: 18px;\n    padding: 26px 24px 24px;\n    box-shadow: 0 20px 50px rgba(0,0,0,0.45);\n    z-index: 21;\n    opacity: 0;\n    pointer-events: none;\n    transform: translate(-50%, -50%) scale(0.96);\n    transition: opacity 220ms var(--ease-out), transform 220ms var(--ease-out);\n  }\n\n  #catalogo-soporte .rent-modal.open { opacity: 1; pointer-events: auto; transform: translate(-50%, -50%) scale(1); }\n\n  #catalogo-soporte .rent-scrim { z-index: 20; }\n\n  #catalogo-soporte .rent-modal h2 {\n    font-family: 'Inter', sans-serif;\n    font-weight: 700;\n    font-size: 22px;\n    margin: 0;\n  }\n\n  #catalogo-soporte .rent-modal .lead {\n    font-size: 13.5px;\n    color: var(--ink-soft);\n    line-height: 1.5;\n    margin: 6px 0 18px;\n  }\n\n  #catalogo-soporte .field { display: flex; flex-direction: column; gap: 6px; margin-bottom: 14px; }\n  #catalogo-soporte .field-row { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }\n\n  #catalogo-soporte .field label {\n    font-size: 12.5px;\n    font-weight: 700;\n    color: var(--ink);\n  }\n\n  #catalogo-soporte .field input, #catalogo-soporte .field textarea {\n    font-family: 'Inter', sans-serif;\n    font-size: 14px;\n    color: var(--ink);\n    background: #F5F7FA;\n    border: 1.5px solid var(--panel-line);\n    border-radius: 10px;\n    padding: 10px 12px;\n    width: 100%;\n  }\n\n  #catalogo-soporte .field textarea { min-height: 90px; resize: vertical; }\n\n  #catalogo-soporte .field input:focus, #catalogo-soporte .field textarea:focus {\n    outline: none;\n    border-color: var(--accent);\n    background: #FFFFFF;\n  }\n\n  #catalogo-soporte .field-error { font-size: 12.5px; color: #B42318; margin: -4px 0 12px; min-height: 0; }\n\n  #catalogo-soporte .rent-modal .primary-btn { width: 100%; margin-top: 4px; }\n  #catalogo-soporte .rent-modal .primary-btn:disabled { opacity: 0.6; cursor: wait; transform: none; }\n\n  #catalogo-soporte .panel-request { display: block; width: 100%; margin-top: 18px; }\n\n  #catalogo-soporte .rent-done { text-align: center; padding: 10px 0 4px; }\n  #catalogo-soporte .rent-done[hidden], #catalogo-soporte #rentForm[hidden] { display: none; }\n  #catalogo-soporte .rent-done-icon {\n    width: 56px; height: 56px; margin: 0 auto 14px;\n    border-radius: 50%; background: var(--android-tag-soft); color: var(--android-tag);\n    display: flex; align-items: center; justify-content: center;\n    font-size: 28px; font-weight: 700;\n  }\n  #catalogo-soporte .rent-done-title { font-family: 'Inter', sans-serif; font-weight: 700; font-size: 20px; margin: 0 0 6px; }\n  #catalogo-soporte .rent-done-sub { font-size: 14px; line-height: 1.5; color: var(--ink-soft); margin: 0 0 20px; }\n\n  @media (max-width: 420px) { #catalogo-soporte .field-row { grid-template-columns: 1fr; } }\n\n  \n  \n  #catalogo-soporte #viewStorage, #catalogo-soporte #viewTablets, #catalogo-soporte #viewPhones, #catalogo-soporte #viewAccessories, #catalogo-soporte #viewComputers, #catalogo-soporte #viewMac, #catalogo-soporte #viewCabins, #catalogo-soporte #viewVideoconf, #catalogo-soporte #viewPrinters, #catalogo-soporte #viewMonitors, #catalogo-soporte #viewConnectivity { max-width: none; }\n\n  #catalogo-soporte .storage-grid {\n    display: grid;\n    grid-template-columns: repeat(auto-fill, minmax(min(100%, 459px), 459px));\n    justify-content: center;\n    gap: 22px;\n    width: 100%;\n  }\n\n  #catalogo-soporte .storage-empty {\n    grid-column: 1 / -1;\n    text-align: center;\n    color: #475569;\n    font-size: 14px;\n    padding: 30px 0;\n  }\n\n  #catalogo-soporte .storage-card {\n    background: var(--panel);\n    color: var(--ink);\n    border: 2.5px solid var(--accent);\n    border-radius: 16px;\n    overflow: hidden;\n    box-shadow: 0 10px 22px var(--paper-shadow);\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    min-height: 260px;\n  }\n\n  #catalogo-soporte .storage-card.hidden { display: none; }\n\n  \n  #catalogo-soporte button.model-card {\n    font: inherit;\n    text-align: left;\n    padding: 0;\n    cursor: pointer;\n    transition: transform 200ms var(--ease-out), box-shadow 200ms var(--ease-out);\n    -webkit-tap-highlight-color: transparent;\n  }\n\n  #catalogo-soporte button.model-card:focus-visible {\n    transform: translateY(-4px);\n    box-shadow: 0 16px 30px var(--paper-shadow);\n  }\n\n  #catalogo-soporte .model-card .storage-photo img { transition: transform 300ms var(--ease-out); }\n\n  @media (hover: hover) and (pointer: fine) {\n    #catalogo-soporte button.model-card:hover {\n      transform: translateY(-4px);\n      box-shadow: 0 16px 30px var(--paper-shadow);\n    }\n    #catalogo-soporte button.model-card:hover .storage-photo img { transform: scale(1.04); }\n  }\n\n  #catalogo-soporte button.model-card:active { transform: scale(0.98); transition-duration: 120ms; }\n\n  \n  @keyframes card-in {\n    from { opacity: 0; transform: translateY(10px); }\n  }\n\n  #catalogo-soporte .catalog-view.is-entering .storage-card {\n    animation: card-in 360ms var(--ease-out) backwards;\n    animation-delay: calc(min(var(--i, 0), 8) * 40ms);\n  }\n\n  #catalogo-soporte button.model-card:focus-visible { outline: 3px solid #BFE0FF; outline-offset: 3px; }\n\n  #catalogo-soporte .model-card .storage-icons { grid-template-columns: repeat(2, minmax(0, 1fr)); }\n  #catalogo-soporte .model-card .storage-icon-small { flex-direction: row; justify-content: center; gap: 6px; padding: 8px 6px; }\n  #catalogo-soporte .model-card .storage-icon-small svg { width: 18px; height: 18px; flex-shrink: 0; }\n\n  #catalogo-soporte .model-card .card-hint { font-size: 11px; color: var(--ink-soft); }\n\n  #catalogo-soporte .storage-photo {\n    background: #F3F5F7;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    padding: 18px;\n  }\n\n  #catalogo-soporte .storage-photo svg, #catalogo-soporte .storage-photo img { width: 100%; height: 100%; object-fit: contain; }\n  #catalogo-soporte .storage-photo img { max-height: 224px; }\n\n  #catalogo-soporte .storage-info {\n    padding: 22px 20px;\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n    min-width: 0;\n  }\n\n  #catalogo-soporte .storage-info .brand-line { display: flex; align-items: center; gap: 8px; }\n  #catalogo-soporte .storage-info h3 {\n    font-family: 'Inter', sans-serif;\n    font-weight: 700;\n    font-size: 20px;\n    line-height: 1.2;\n    margin: 0;\n  }\n  #catalogo-soporte .storage-info .cat-chip { align-self: flex-start; background: var(--accent-soft); color: #1B4A78; }\n\n  #catalogo-soporte .storage-icons {\n    display: grid;\n    grid-template-columns: repeat(3, minmax(0, 1fr));\n    gap: 8px;\n    margin-top: auto;\n  }\n\n  #catalogo-soporte .storage-icon {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 4px;\n    background: var(--accent-soft);\n    color: #1B4A78;\n    border-radius: 10px;\n    padding: 8px 4px;\n    text-align: center;\n  }\n\n  #catalogo-soporte .storage-icon svg { width: 22px; height: 22px; }\n  #catalogo-soporte .storage-icon-wide { grid-column: 1 / -1; flex-direction: row; justify-content: center; gap: 8px; padding: 8px 10px; }\n  #catalogo-soporte .storage-icons { grid-template-columns: repeat(2, minmax(0, 1fr)); }\n  #catalogo-soporte .storage-icon span { font-size: 11px; font-weight: 700; line-height: 1.2; }\n\n  @media (max-width: 420px) {\n    #catalogo-soporte .storage-card { grid-template-columns: 1fr; }\n    #catalogo-soporte .storage-photo { aspect-ratio: 4 / 3; }\n  }\n\n  #catalogo-soporte footer {\n    margin-top: 44px;\n    font-size: 12.5px;\n    color: #BFD3E8;\n    text-align: center;\n  }\n\n  \n  #catalogo-soporte {\n    --accent: #3D8BFF;\n    --accent-2: #2B6FD6;\n    --line: rgba(15,23,42,0.10);\n    --mute: #64748B;\n    --font-display: 'Instrument Serif', Georgia, 'Times New Roman', serif;\n  }\n\n  #catalogo-soporte .bg-power { opacity: 0.05; }\n\n  #catalogo-soporte .scroll-progress {\n    position: fixed;\n    top: 0; left: 0; right: 0;\n    height: 2px;\n    z-index: 60;\n    transform-origin: 0 50%;\n    transform: scaleX(var(--p, 0));\n    background: linear-gradient(90deg, var(--accent), var(--accent-2));\n    pointer-events: none;\n  }\n\n  \n  #catalogo-soporte .site-nav {\n    position: sticky;\n    top: 12px;\n    z-index: 40;\n    width: min(1440px, 100%);\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    gap: 16px;\n    padding: 10px 10px 10px 16px;\n    margin-bottom: 28px;\n    border-radius: 18px;\n    border: 1px solid transparent;\n    transition: background-color 250ms ease, border-color 250ms ease, box-shadow 250ms ease;\n    background: rgba(255,255,255,0.86);\n    -webkit-backdrop-filter: blur(16px) saturate(160%);\n    backdrop-filter: blur(16px) saturate(160%);\n    border-color: var(--line);\n    box-shadow: 0 10px 30px rgba(15,23,42,0.08);\n  }\n  #catalogo-soporte[data-theme=\"dark\"] .site-nav { background: none; -webkit-backdrop-filter: none; backdrop-filter: none; border-color: transparent; box-shadow: none; }\n\n  #catalogo-soporte[data-theme=\"dark\"] .site-nav.is-solid {\n    background: rgba(9,15,28,0.72);\n    -webkit-backdrop-filter: blur(16px) saturate(160%);\n    backdrop-filter: blur(16px) saturate(160%);\n    border-color: var(--line);\n    box-shadow: 0 12px 32px rgba(0,0,0,0.35);\n  }\n\n  #catalogo-soporte .nav-brand {\n    display: flex;\n    align-items: center;\n    gap: 10px;\n    color: #0F172A;\n    text-decoration: none;\n    font-weight: 700;\n    font-size: 15px;\n    letter-spacing: -0.01em;\n  }\n\n  #catalogo-soporte .nav-brand img { width: auto; height: 30px; object-fit: contain; }\n  \n  #catalogo-soporte .brand-logo--dark { display: none; }\n  #catalogo-soporte[data-theme=\"dark\"] .brand-logo--light { display: none; }\n  #catalogo-soporte[data-theme=\"dark\"] .brand-logo--dark { display: block; }\n  #catalogo-soporte .brand-header .brand-logo { width: auto; height: clamp(46px, 7vw, 64px); }\n  #catalogo-soporte .footer-logo .brand-logo { width: auto; height: 34px; }\n  \n  #catalogo-soporte header:not(.in-category) #catTitle { position: absolute; width: 1px; height: 1px; overflow: hidden; clip: rect(0 0 0 0); white-space: nowrap; }\n\n  #catalogo-soporte .nav-menu { display: flex; align-items: center; gap: 4px; }\n\n  #catalogo-soporte .nav-link {\n    display: inline-flex;\n    align-items: center;\n    gap: 6px;\n    color: #334155;\n    text-decoration: none;\n    font: 500 14px/1 'Inter', sans-serif;\n    padding: 11px 13px;\n    border-radius: 10px;\n    background: none;\n    border: 0;\n    cursor: pointer;\n    transition: color 150ms ease, background-color 150ms ease;\n  }\n\n  @media (hover: hover) and (pointer: fine) {\n    #catalogo-soporte .nav-link:hover { color: #0F172A; background: rgba(15,23,42,0.05); }\n  }\n\n  #catalogo-soporte .nav-link:focus-visible, #catalogo-soporte .nav-dropdown a:focus-visible, #catalogo-soporte .nav-brand:focus-visible { outline: 2px solid var(--accent-2); outline-offset: 2px; }\n\n  #catalogo-soporte .nav-chevron { transition: transform 200ms var(--ease-out); }\n  #catalogo-soporte .nav-group.open .nav-chevron { transform: rotate(180deg); }\n\n  #catalogo-soporte .nav-cta { margin-left: 8px; padding: 11px 18px; font-size: 14px; }\n\n  #catalogo-soporte .nav-group { position: relative; }\n\n  #catalogo-soporte .nav-dropdown {\n    position: absolute;\n    top: calc(100% + 10px);\n    left: 50%;\n    width: 480px;\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    gap: 2px;\n    padding: 8px;\n    border-radius: 16px;\n    background: #FFFFFF;\n    -webkit-backdrop-filter: blur(16px);\n    backdrop-filter: blur(16px);\n    border: 1px solid var(--line);\n    box-shadow: 0 24px 60px rgba(15,23,42,0.14);\n    opacity: 0;\n    pointer-events: none;\n    transform: translate(-50%, -6px) scale(0.98);\n    transform-origin: top center;\n    transition: opacity 180ms var(--ease-out), transform 180ms var(--ease-out);\n  }\n\n  #catalogo-soporte .nav-group.open .nav-dropdown { opacity: 1; pointer-events: auto; transform: translate(-50%, 0) scale(1); }\n\n  #catalogo-soporte .nav-dropdown a {\n    display: block;\n    padding: 11px 12px;\n    border-radius: 10px;\n    color: #0F172A;\n    text-decoration: none;\n    font: 600 14px/1.25 'Inter', sans-serif;\n    transition: background-color 150ms ease;\n  }\n\n  #catalogo-soporte .nav-dropdown a small { display: block; margin-top: 3px; color: var(--mute); font-size: 12px; font-weight: 400; }\n\n  @media (hover: hover) and (pointer: fine) {\n    #catalogo-soporte .nav-dropdown a:hover { background: rgba(61,139,255,0.08); }\n  }\n\n  #catalogo-soporte .nav-toggle {\n    display: none;\n    width: 42px;\n    height: 42px;\n    border-radius: 12px;\n    border: 1px solid var(--line);\n    background: #FFFFFF;\n    cursor: pointer;\n    position: relative;\n  }\n\n  #catalogo-soporte .nav-toggle span {\n    position: absolute;\n    left: 12px; right: 12px;\n    height: 2px;\n    border-radius: 2px;\n    background: #0F172A;\n    transition: transform 200ms var(--ease-out), top 200ms var(--ease-out);\n  }\n\n  #catalogo-soporte .nav-toggle span:first-child { top: 16px; }\n  #catalogo-soporte .nav-toggle span:last-child { top: 24px; }\n  #catalogo-soporte .site-nav.menu-open .nav-toggle span:first-child { top: 20px; transform: rotate(45deg); }\n  #catalogo-soporte .site-nav.menu-open .nav-toggle span:last-child { top: 20px; transform: rotate(-45deg); }\n\n  @media (max-width: 860px) {\n    #catalogo-soporte .nav-toggle { display: block; }\n    #catalogo-soporte[data-theme=\"dark\"] .site-nav { background: rgba(9,15,28,0.72); -webkit-backdrop-filter: blur(16px); backdrop-filter: blur(16px); border-color: var(--line); }\n    #catalogo-soporte .nav-menu {\n      position: absolute;\n      top: calc(100% + 8px);\n      left: 0; right: 0;\n      flex-direction: column;\n      align-items: stretch;\n      gap: 2px;\n      padding: 10px;\n      border-radius: 16px;\n      background: #FFFFFF;\n      border: 1px solid var(--line);\n      box-shadow: 0 24px 60px rgba(15,23,42,0.14);\n      opacity: 0;\n      pointer-events: none;\n      transform: translateY(-6px);\n      transition: opacity 180ms var(--ease-out), transform 180ms var(--ease-out);\n      max-height: calc(100vh - 100px);\n      overflow-y: auto;\n    }\n    #catalogo-soporte .site-nav.menu-open .nav-menu { opacity: 1; pointer-events: auto; transform: none; }\n    #catalogo-soporte .nav-link { justify-content: space-between; padding: 14px; font-size: 15px; }\n    #catalogo-soporte .nav-dropdown {\n      position: static;\n      width: auto;\n      grid-template-columns: 1fr;\n      transform: none;\n      box-shadow: none;\n      border: 0;\n      background: rgba(15,23,42,0.03);\n      display: none;\n      opacity: 1;\n      pointer-events: auto;\n    }\n    #catalogo-soporte .nav-group.open .nav-dropdown { display: grid; transform: none; }\n    #catalogo-soporte .nav-cta { margin: 6px 0 0; padding: 14px; }\n  }\n\n\n  \n  #catalogo-soporte .eyebrow { color: var(--accent-2); letter-spacing: 0.14em; font-size: 12px; }\n  #catalogo-soporte h1 { font-family: var(--font-display); font-weight: 400; font-size: clamp(42px, 7vw, 66px); letter-spacing: -0.01em; }\n  #catalogo-soporte header p { color: #475569; }\n  #catalogo-soporte header .eyebrow { color: #475569; }\n\n  \n  #catalogo-soporte header.in-category { width: 100%; max-width: none; margin: 0 auto 22px; }\n  #catalogo-soporte header.in-category .brand-header { margin: 0; }\n  #catalogo-soporte header.in-category .brand-header img { display: none; }\n  #catalogo-soporte header.in-category h1 {\n    font-family: 'Inter', sans-serif;\n    font-weight: 800;\n    font-size: clamp(44px, 7vw, 84px);\n    line-height: 1;\n    letter-spacing: -0.04em;\n    color: #0F172A;\n  }\n  #catalogo-soporte[data-theme=\"dark\"] header.in-category h1 { color: #F5F7FA; }\n  #catalogo-soporte[data-theme=\"dark\"] .back-btn { color: #C7CFD8; background: rgba(255,255,255,0.04); border-color: var(--line); }\n  @media (hover: hover) and (pointer: fine) { #catalogo-soporte[data-theme=\"dark\"] .back-btn:hover { color: #F5F7FA; } }\n\n  \n  #catalogo-soporte .category-card {\n    width: 200px;\n    border-radius: 18px;\n    background: #FFFFFF;\n    border: 1px solid rgba(15,23,42,0.08);\n    box-shadow: 0 10px 26px rgba(15,23,42,0.06);\n    -webkit-backdrop-filter: none;\n    backdrop-filter: none;\n  }\n\n  #catalogo-soporte .category-label { font-family: 'Inter', sans-serif; font-weight: 600; font-size: 16px; letter-spacing: -0.01em; color: #0F172A; }\n\n  @media (hover: hover) and (pointer: fine) {\n    #catalogo-soporte .category-card:hover {\n      border-color: rgba(61,139,255,0.5);\n      background: #FFFFFF;\n      box-shadow: 0 0 0 1px rgba(61,139,255,0.18), 0 18px 40px rgba(15,23,42,0.12);\n    }\n  }\n\n  #catalogo-soporte .category-card:focus-visible { outline: 2px solid var(--accent-2); }\n\n  \n  #catalogo-soporte .storage-card { border: 1.5px solid rgba(61,139,255,0.75); border-radius: 18px; }\n  #catalogo-soporte .storage-info h3 { font-family: 'Inter', sans-serif; font-weight: 700; letter-spacing: -0.015em; }\n\n  \n  #catalogo-soporte .filter-label { color: #475569; letter-spacing: 0.08em; font-size: 11.5px; text-shadow: none; }\n  #catalogo-soporte .filter-select { background-color: #FFFFFF; border-color: var(--field-line); border-radius: 12px; -webkit-backdrop-filter: blur(10px); backdrop-filter: blur(10px); }\n  #catalogo-soporte .back-btn {\n    padding: 8px 14px;\n    border: 1px solid rgba(15,23,42,0.12);\n    border-radius: 999px;\n    background: #FFFFFF;\n    -webkit-backdrop-filter: blur(8px);\n    backdrop-filter: blur(8px);\n  }\n\n  \n  #catalogo-soporte .site-footer {\n    width: min(1440px, 100%);\n    margin-top: 80px;\n    padding: 48px clamp(20px, 4vw, 48px) 28px;\n    border-top: 1px solid var(--line);\n    color: #475569;\n    text-align: left;\n    font-size: 14px;\n  }\n\n  #catalogo-soporte .footer-grid { display: grid; grid-template-columns: 2fr 1fr 1fr; gap: 40px; }\n  #catalogo-soporte .footer-logo { display: flex; align-items: center; gap: 10px; margin-bottom: 14px; color: #0F172A; font-size: 17px; }\n  #catalogo-soporte .footer-brand p { max-width: 42ch; line-height: 1.6; margin: 0 0 18px; }\n  #catalogo-soporte .footer-col { display: flex; flex-direction: column; gap: 10px; }\n  #catalogo-soporte .footer-col h4 { margin: 0 0 6px; color: #0F172A; font: 600 13px 'Inter', sans-serif; letter-spacing: 0.08em; text-transform: uppercase; }\n  #catalogo-soporte .footer-col a { color: #475569; text-decoration: none; transition: color 150ms ease; }\n  @media (hover: hover) and (pointer: fine) { #catalogo-soporte .footer-col a:hover { color: #0F172A; } }\n  #catalogo-soporte .footer-bottom { display: flex; flex-wrap: wrap; justify-content: space-between; gap: 10px; margin-top: 40px; padding-top: 20px; border-top: 1px solid var(--line); color: var(--mute); font-size: 12.5px; }\n\n  @media (max-width: 720px) {\n    #catalogo-soporte .footer-grid { grid-template-columns: 1fr 1fr; }\n    #catalogo-soporte .footer-brand { grid-column: 1 / -1; }\n  }\n\n  \n  #catalogo-soporte .catalog-layout {\n    display: grid;\n    grid-template-columns: 230px minmax(0, 1fr);\n    gap: 24px;\n    width: 100%;\n    align-items: start;\n  }\n\n  #catalogo-soporte .filter-panel {\n    position: sticky;\n    top: 96px;\n    z-index: 5;\n    display: flex;\n    flex-direction: column;\n    gap: 16px;\n    padding: 20px;\n    border-radius: 18px;\n    background: rgba(255,255,255,0.94);\n    border: 1px solid var(--line);\n    -webkit-backdrop-filter: blur(14px);\n    backdrop-filter: blur(14px);\n    box-shadow: 0 18px 44px rgba(15,23,42,0.08);\n  }\n\n  #catalogo-soporte .filter-panel-title { margin: 0; color: #0F172A; font: 700 12px 'Inter', sans-serif; letter-spacing: 0.14em; text-transform: uppercase; }\n\n  #catalogo-soporte .filter-panel .filter-row, #catalogo-soporte .filter-panel .filter-row:last-of-type {\n    flex-direction: column;\n    align-items: stretch;\n    gap: 8px;\n    margin: 0;\n    width: auto;\n  }\n\n  #catalogo-soporte .filter-panel .filter-select { width: 100%; min-width: 0; }\n\n  #catalogo-soporte .filter-reset {\n    align-self: flex-start;\n    background: none;\n    border: 0;\n    padding: 4px 0;\n    color: #2B6FD6;\n    font: 600 13px 'Inter', sans-serif;\n    cursor: pointer;\n    transition: color 150ms ease;\n  }\n\n  @media (hover: hover) and (pointer: fine) { #catalogo-soporte .filter-reset:hover { color: #0F172A; } }\n\n  \n  #catalogo-soporte .catalog-layout .storage-grid {\n    grid-template-columns: repeat(4, minmax(0, 1fr));\n    gap: 18px;\n    container-type: inline-size;\n    container-name: cards;\n  }\n\n  \n  #catalogo-soporte .catalog-layout .storage-card { grid-template-columns: minmax(0, 1fr); min-height: 0; }\n  #catalogo-soporte .catalog-layout .storage-photo { aspect-ratio: 16 / 10; padding: 10px 8px; }\n  #catalogo-soporte .catalog-layout .storage-photo img { max-height: 210px; }\n  #catalogo-soporte .catalog-layout .storage-info { padding: 16px 16px 18px; gap: 8px; }\n  #catalogo-soporte .catalog-layout .storage-info h3 { font-size: 17px; }\n\n  \n  @container cards (min-width: 1734px) {\n    .catalog-layout .storage-card { grid-template-columns: 1fr 1fr; min-height: 260px; }\n    .catalog-layout .storage-photo { aspect-ratio: auto; }\n    .catalog-layout .storage-photo img { max-height: 224px; }\n  }\n\n  @media (max-width: 1199px) {\n    #catalogo-soporte .catalog-layout .storage-grid { grid-template-columns: repeat(3, minmax(0, 1fr)); }\n  }\n\n  @media (max-width: 899px) {\n    #catalogo-soporte .catalog-layout .storage-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }\n  }\n\n  @media (max-width: 640px) {\n    #catalogo-soporte .catalog-layout .storage-grid { grid-template-columns: minmax(0, 1fr); }\n  }\n\n  @media (max-width: 900px) {\n    #catalogo-soporte .catalog-layout { grid-template-columns: minmax(0, 1fr); gap: 18px; }\n    #catalogo-soporte .filter-panel {\n      top: 76px;\n      flex-direction: row;\n      align-items: flex-end;\n      gap: 12px;\n      padding: 12px;\n      overflow-x: auto;\n      border-radius: 14px;\n    }\n    #catalogo-soporte .filter-panel-title { display: none; }\n    #catalogo-soporte .filter-panel .filter-row { min-width: 170px; }\n    #catalogo-soporte .filter-reset { align-self: center; white-space: nowrap; }\n\n  }\n\n  \n  @media (max-width: 640px) {\n    #catalogo-soporte .filter-panel { flex-wrap: wrap; overflow-x: visible; position: static; }\n    #catalogo-soporte .filter-panel .filter-row { min-width: 0; flex: 1 1 calc(50% - 6px); }\n    #catalogo-soporte .filter-reset { flex-basis: 100%; }\n  }\n\n  \n  #catalogo-soporte .featured { width: min(1440px, 100%); margin: 72px 0 72px; }\n  #catalogo-soporte .featured-head { text-align: center; margin-bottom: 26px; }\n  #catalogo-soporte .featured-head h2 { font-family: var(--font-display); font-weight: 400; font-size: clamp(36px, 5vw, 54px); line-height: 1.05; color: #0F172A; margin: 0 0 10px; }\n  #catalogo-soporte .featured-head p:last-child { color: #475569; margin: 0; font-size: 15.5px; }\n\n  #catalogo-soporte .slider {\n    position: relative;\n    height: clamp(400px, 44vw, 580px);\n    border-radius: 24px;\n    overflow: hidden;\n    border: 1px solid var(--line);\n    box-shadow: 0 30px 70px rgba(15,23,42,0.18);\n    background: #0B1427;\n    outline: none;\n    touch-action: pan-y;\n  }\n\n  #catalogo-soporte .slider:focus-visible { outline: 2px solid var(--accent-2); outline-offset: 4px; }\n\n  #catalogo-soporte .slide {\n    position: absolute;\n    inset: 0;\n    opacity: 0;\n    visibility: hidden;\n    transition: opacity 800ms ease, visibility 0s linear 800ms;\n  }\n\n  #catalogo-soporte .slide.is-active { opacity: 1; visibility: visible; transition: opacity 800ms ease; }\n\n  #catalogo-soporte .slide img {\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n    transform: scale(1.08);\n    transition: transform 7.5s cubic-bezier(.2,.6,.2,1);\n  }\n\n  #catalogo-soporte .slide.is-active img { transform: scale(1); }\n\n  #catalogo-soporte .slide::after {\n    content: \"\";\n    position: absolute;\n    inset: 0;\n    background:\n      linear-gradient(90deg, rgba(7,12,24,0.9) 0%, rgba(7,12,24,0.6) 36%, rgba(7,12,24,0.05) 72%),\n      linear-gradient(0deg, rgba(7,12,24,0.65) 0%, transparent 42%);\n    pointer-events: none;\n  }\n\n  #catalogo-soporte .slide-content {\n    position: absolute;\n    left: clamp(24px, 5vw, 72px);\n    bottom: clamp(64px, 7vw, 100px);\n    z-index: 1;\n    max-width: 540px;\n    color: #FFFFFF;\n    opacity: 0;\n    translate: 0 16px;\n    transition: opacity 600ms var(--ease-out) 150ms, translate 600ms var(--ease-out) 150ms;\n  }\n\n  #catalogo-soporte .slide.is-active .slide-content { opacity: 1; translate: none; }\n\n  #catalogo-soporte .slide-chip {\n    display: inline-block;\n    padding: 6px 12px;\n    border-radius: 999px;\n    background: rgba(61,139,255,0.22);\n    border: 1px solid rgba(140,194,255,0.35);\n    color: #DCEBFF;\n    font: 600 12.5px/1 'Inter', sans-serif;\n    letter-spacing: 0.04em;\n  }\n\n  #catalogo-soporte .slide-content h3 {\n    font-family: var(--font-display);\n    font-weight: 400;\n    font-size: clamp(36px, 5vw, 66px);\n    line-height: 1.02;\n    margin: 16px 0 10px;\n    text-shadow: 0 4px 30px rgba(0,0,0,0.4);\n  }\n\n  #catalogo-soporte .slide-content p { margin: 0 0 22px; color: #DCE6F3; font: 500 17px/1.5 'Inter', sans-serif; }\n\n  #catalogo-soporte .slider-dots {\n    position: absolute;\n    left: clamp(24px, 5vw, 72px);\n    bottom: clamp(24px, 3vw, 36px);\n    z-index: 2;\n    display: flex;\n    gap: 8px;\n  }\n\n  #catalogo-soporte .slider-dot {\n    width: 28px;\n    height: 4px;\n    padding: 0;\n    border: 0;\n    border-radius: 4px;\n    background: rgba(255,255,255,0.28);\n    overflow: hidden;\n    cursor: pointer;\n    transition: width 300ms var(--ease-out), background-color 150ms ease;\n  }\n\n  #catalogo-soporte .slider-dot.is-active { width: 64px; }\n  #catalogo-soporte .slider-dot span { display: block; width: 100%; height: 100%; background: #FFFFFF; transform-origin: 0 50%; transform: scaleX(0); }\n  #catalogo-soporte .slider-dot.is-active span { animation: slider-progress 6.5s linear forwards; }\n  #catalogo-soporte .slider.is-paused .slider-dot.is-active span { animation-play-state: paused; }\n  @keyframes slider-progress { to { transform: scaleX(1); } }\n\n  #catalogo-soporte .slider-nav {\n    position: absolute;\n    right: clamp(16px, 3vw, 32px);\n    bottom: clamp(16px, 2.6vw, 28px);\n    z-index: 2;\n    display: flex;\n    gap: 8px;\n  }\n\n  #catalogo-soporte .slider-arrow {\n    width: 46px;\n    height: 46px;\n    border-radius: 50%;\n    border: 1px solid rgba(255,255,255,0.2);\n    background: rgba(9,15,28,0.55);\n    -webkit-backdrop-filter: blur(10px);\n    backdrop-filter: blur(10px);\n    color: #FFFFFF;\n    display: grid;\n    place-items: center;\n    cursor: pointer;\n    transition: background-color 150ms ease, border-color 150ms ease, transform 160ms var(--ease-out);\n  }\n\n  @media (hover: hover) and (pointer: fine) {\n    #catalogo-soporte .slider-arrow:hover { background: rgba(61,139,255,0.35); border-color: rgba(140,194,255,0.5); }\n  }\n\n  #catalogo-soporte .slider-arrow:active { transform: scale(0.94); }\n\n  @media (max-width: 720px) {\n    #catalogo-soporte .slider { height: 540px; }\n    #catalogo-soporte .slide::after { background: linear-gradient(0deg, rgba(7,12,24,0.94) 0%, rgba(7,12,24,0.55) 50%, rgba(7,12,24,0) 78%); }\n    #catalogo-soporte .slide-content { left: 20px; right: 20px; bottom: 64px; }\n    #catalogo-soporte .slider-nav { display: none; }\n    #catalogo-soporte .slider-dots { left: 20px; }\n  }\n\n  \n  #catalogo-soporte .storage-card.is-highlight { animation: card-highlight 2s var(--ease-out); }\n  @keyframes card-highlight {\n    0% { box-shadow: 0 0 0 0 rgba(61,139,255,0); }\n    18% { box-shadow: 0 0 0 6px rgba(61,139,255,0.65), 0 20px 40px rgba(0,0,0,0.35); }\n    100% { box-shadow: 0 0 0 0 rgba(61,139,255,0); }\n  }\n\n  \n  #catalogo-soporte .credits-link {\n    background: none;\n    border: 0;\n    padding: 0;\n    font: inherit;\n    color: inherit;\n    text-decoration: underline;\n    text-decoration-color: rgba(147,166,191,0.4);\n    text-underline-offset: 3px;\n    cursor: pointer;\n    transition: color 150ms ease;\n  }\n\n  @media (hover: hover) and (pointer: fine) { #catalogo-soporte .credits-link:hover { color: #0F172A; } }\n\n  #catalogo-soporte .credits-scrim { z-index: 30; }\n\n  #catalogo-soporte .credits-modal {\n    position: fixed;\n    top: 50%;\n    left: 50%;\n    width: min(620px, calc(100% - 32px));\n    max-height: calc(100vh - 60px);\n    overflow-y: auto;\n    padding: 22px 24px 20px;\n    border-radius: 18px;\n    background: #FFFFFF;\n    border: 1px solid var(--line);\n    box-shadow: 0 30px 80px rgba(15,23,42,0.18);\n    color: #475569;\n    font-size: 12.5px;\n    line-height: 1.6;\n    z-index: 31;\n    opacity: 0;\n    pointer-events: none;\n    transform: translate(-50%, -50%) scale(0.96);\n    transition: opacity 200ms var(--ease-out), transform 200ms var(--ease-out);\n  }\n\n  #catalogo-soporte .credits-modal.open { opacity: 1; pointer-events: auto; transform: translate(-50%, -50%) scale(1); }\n  #catalogo-soporte .credits-top { display: flex; align-items: center; justify-content: space-between; margin-bottom: 8px; }\n  #catalogo-soporte .credits-modal h2 { margin: 0; color: #0F172A; font: 700 16px 'Inter', sans-serif; letter-spacing: -0.01em; }\n  #catalogo-soporte .credits-modal p { margin: 14px 0 6px; color: #0F172A; font-weight: 600; font-size: 12px; letter-spacing: 0.06em; text-transform: uppercase; }\n  #catalogo-soporte .credits-modal p.credits-note { text-transform: none; letter-spacing: 0; font-weight: 400; color: var(--mute); margin-top: 16px; }\n  #catalogo-soporte .credits-modal ul { margin: 0; padding-left: 18px; }\n  #catalogo-soporte .credits-modal a { color: #2B6FD6; }\n\n  \n  #catalogo-soporte #pageContent.js-ready .reveal {\n    opacity: 0;\n    translate: 0 18px;\n    transition: opacity 700ms var(--ease-out), translate 700ms var(--ease-out),\n                transform 200ms var(--ease-out), box-shadow 200ms var(--ease-out),\n                border-color 200ms ease, background-color 200ms ease;\n    transition-delay: calc(var(--i, 0) * 55ms), calc(var(--i, 0) * 55ms), 0s, 0s, 0s, 0s;\n  }\n\n  #catalogo-soporte #pageContent.js-ready .reveal.is-visible { opacity: 1; translate: none; }\n\n  \n  #catalogo-soporte .nav-menu { order: 1; margin-left: auto; }\n  #catalogo-soporte .theme-toggle { order: 2; }\n  #catalogo-soporte .nav-toggle { order: 3; color: #0F172A; }\n\n  #catalogo-soporte .theme-toggle {\n    width: 42px;\n    height: 42px;\n    margin-left: 8px;\n    border-radius: 12px;\n    border: 1px solid var(--line);\n    background: #FFFFFF;\n    color: #0F172A;\n    display: grid;\n    place-items: center;\n    cursor: pointer;\n    flex-shrink: 0;\n    transition: background-color 150ms ease, color 150ms ease, transform 160ms var(--ease-out);\n  }\n\n  #catalogo-soporte .theme-toggle:active { transform: scale(0.94); }\n  #catalogo-soporte .theme-toggle:focus-visible { outline: 2px solid var(--accent-2); outline-offset: 2px; }\n  #catalogo-soporte .theme-toggle .icon-moon { display: block; }\n  #catalogo-soporte[data-theme=\"dark\"] .theme-toggle .icon-moon { display: none; }\n  #catalogo-soporte .theme-toggle .icon-sun { display: none; }\n  #catalogo-soporte[data-theme=\"dark\"] .theme-toggle .icon-sun { display: block; }\n\n  @media (max-width: 860px) {\n    #catalogo-soporte .theme-toggle { margin-left: auto; margin-right: 8px; }\n  }\n\n  \n  #catalogo-soporte[data-theme=\"dark\"] {\n    --bg: #0A1222;\n    --bg-deep: #111C33;\n    --line: rgba(255,255,255,0.09);\n    --mute: #93A6BF;\n    --accent-2: #8CC2FF;\n    --paper-shadow: rgba(0,0,0,0.35);\n    --field-line: rgba(255,255,255,0.16);\n    --close-bg: var(--bg-deep);\n  }\n\n  #catalogo-soporte[data-theme=\"dark\"] { background: radial-gradient(1200px 640px at 8% -12%, rgba(61,139,255,0.20), transparent 60%),\n                radial-gradient(900px 560px at 100% 112%, rgba(99,102,241,0.16), transparent 60%),\n                var(--bg); color: var(--panel); }\n\n  #catalogo-soporte[data-theme=\"dark\"] .bg-power { opacity: 0.10; }\n\n  \n  #catalogo-soporte[data-theme=\"dark\"] .nav-brand { color: #F5F7FA; }\n  #catalogo-soporte[data-theme=\"dark\"] .nav-link { color: #C9D4E3; }\n  #catalogo-soporte[data-theme=\"dark\"] .nav-dropdown { background: rgba(12,20,38,0.97); box-shadow: 0 24px 60px rgba(0,0,0,0.5); }\n  #catalogo-soporte[data-theme=\"dark\"] .nav-dropdown a { color: #E3EAF4; }\n  #catalogo-soporte[data-theme=\"dark\"] .theme-toggle { background: rgba(255,255,255,0.04); color: #F5F7FA; }\n  #catalogo-soporte[data-theme=\"dark\"] .nav-toggle { background: rgba(255,255,255,0.04); color: revert; }\n  #catalogo-soporte[data-theme=\"dark\"] .nav-toggle span { background: #F5F7FA; }\n\n  @media (hover: hover) and (pointer: fine) {\n    #catalogo-soporte[data-theme=\"dark\"] .nav-link:hover { color: #FFFFFF; background: rgba(255,255,255,0.06); }\n    #catalogo-soporte[data-theme=\"dark\"] .nav-dropdown a:hover { background: rgba(61,139,255,0.12); }\n    #catalogo-soporte .theme-toggle:hover { background: #F1F5FB; }\n    #catalogo-soporte[data-theme=\"dark\"] .theme-toggle:hover { background: rgba(255,255,255,0.04); }\n  }\n\n  @media (max-width: 860px) {\n    #catalogo-soporte[data-theme=\"dark\"] .nav-menu { background: #0C1426; box-shadow: 0 24px 60px rgba(0,0,0,0.5); }\n    #catalogo-soporte[data-theme=\"dark\"] .nav-dropdown { background: rgba(255,255,255,0.03); box-shadow: none; }\n  }\n\n  \n  #catalogo-soporte[data-theme=\"dark\"] h1 { color: #F5F7FA; }\n  #catalogo-soporte[data-theme=\"dark\"] header p { color: #A9B8CC; }\n  #catalogo-soporte[data-theme=\"dark\"] header .eyebrow { color: var(--accent-2); }\n\n  \n  #catalogo-soporte[data-theme=\"dark\"] .category-card {\n    background: rgba(255,255,255,0.035);\n    border-color: var(--line);\n    box-shadow: none;\n    -webkit-backdrop-filter: blur(6px);\n    backdrop-filter: blur(6px);\n  }\n  #catalogo-soporte[data-theme=\"dark\"] .category-label { color: #F1F5FB; }\n  @media (hover: hover) and (pointer: fine) {\n    #catalogo-soporte[data-theme=\"dark\"] .category-card:hover {\n      background: rgba(61,139,255,0.08);\n      border-color: rgba(61,139,255,0.55);\n      box-shadow: 0 0 0 1px rgba(61,139,255,0.2), 0 20px 44px rgba(0,0,0,0.35);\n    }\n  }\n\n  \n  #catalogo-soporte[data-theme=\"dark\"] .featured-head h2 { color: #FFFFFF; }\n  #catalogo-soporte[data-theme=\"dark\"] .featured-head p:last-child { color: #A9B8CC; }\n  #catalogo-soporte[data-theme=\"dark\"] .slider { box-shadow: 0 30px 80px rgba(0,0,0,0.45); }\n\n  \n  #catalogo-soporte[data-theme=\"dark\"] .filter-panel { background: rgba(12,20,38,0.82); box-shadow: 0 18px 44px rgba(0,0,0,0.3); }\n  #catalogo-soporte[data-theme=\"dark\"] .filter-panel-title { color: #FFFFFF; }\n  #catalogo-soporte[data-theme=\"dark\"] .filter-label { color: #E6EEF8; text-shadow: 0 1px 10px rgba(0,0,0,0.7); }\n  #catalogo-soporte[data-theme=\"dark\"] .filter-select {\n    color: #F5F7FA;\n    background-color: rgba(10,18,34,0.62);\n    background-image: url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"%23C7CFD8\" stroke-width=\"2\"><path d=\"M6 9l6 6 6-6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>');\n  }\n  #catalogo-soporte[data-theme=\"dark\"] .filter-select option { background: var(--bg-deep); color: #F5F7FA; }\n  #catalogo-soporte[data-theme=\"dark\"] .filter-reset { color: #A9C9F5; }\n  #catalogo-soporte[data-theme=\"dark\"] .storage-empty { color: #BFD3E8; }\n\n  \n  #catalogo-soporte[data-theme=\"dark\"] .credits-modal { background: #0E1830; color: #A9B8CC; box-shadow: 0 30px 80px rgba(0,0,0,0.55); }\n  #catalogo-soporte[data-theme=\"dark\"] .credits-modal h2 { color: #FFFFFF; }\n  #catalogo-soporte[data-theme=\"dark\"] .credits-modal p { color: #E3EAF4; }\n  #catalogo-soporte[data-theme=\"dark\"] .credits-modal p.credits-note { color: var(--mute); }\n  #catalogo-soporte[data-theme=\"dark\"] .credits-modal a { color: #A9C9F5; }\n\n  \n  #catalogo-soporte[data-theme=\"dark\"] .site-footer { color: #A9B8CC; }\n  #catalogo-soporte[data-theme=\"dark\"] .footer-logo { color: #F5F7FA; }\n  #catalogo-soporte[data-theme=\"dark\"] .footer-col h4 { color: #F5F7FA; }\n  #catalogo-soporte[data-theme=\"dark\"] .footer-col a { color: #A9B8CC; }\n  @media (hover: hover) and (pointer: fine) {\n    #catalogo-soporte[data-theme=\"dark\"] .footer-col a:hover { color: #FFFFFF; }\n    #catalogo-soporte[data-theme=\"dark\"] .credits-link:hover { color: #FFFFFF; }\n    #catalogo-soporte[data-theme=\"dark\"] .filter-reset:hover { color: #FFFFFF; }\n  }\n\n  \n  #catalogo-soporte .catalog-layout .storage-card { background: transparent; }\n  #catalogo-soporte .catalog-layout .storage-photo { background: #FFFFFF; }\n  \n  #catalogo-soporte .catalog-layout .storage-info { color: var(--ink); }\n  #catalogo-soporte .catalog-layout .storage-info h3 { color: var(--ink); }\n  #catalogo-soporte .catalog-layout .storage-info .brand-name { color: var(--ink-soft); }\n  #catalogo-soporte .catalog-layout .model-card .card-hint { color: var(--ink-soft); }\n  #catalogo-soporte .catalog-layout .storage-icon { background: var(--accent-soft); color: #1B4A78; }\n  \n  #catalogo-soporte[data-theme=\"dark\"] .catalog-layout .storage-info { color: #F1F5FB; }\n  #catalogo-soporte[data-theme=\"dark\"] .catalog-layout .storage-info h3 { color: #F1F5FB; }\n  #catalogo-soporte[data-theme=\"dark\"] .catalog-layout .storage-info .brand-name { color: #A9B7C8; }\n  #catalogo-soporte[data-theme=\"dark\"] .catalog-layout .model-card .card-hint { color: #8FA0B5; }\n  #catalogo-soporte[data-theme=\"dark\"] .catalog-layout .storage-icon { background: rgba(61,139,255,0.16); color: #D6E6FF; }\n\n  \n  @media (max-width: 640px) {\n    \n    #catalogo-soporte .landing { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 10px; width: 100%; }\n    #catalogo-soporte .category-card { width: auto; height: 100%; padding: 16px 3px 14px; gap: 8px; border-radius: 14px; }\n    #catalogo-soporte .category-icon { width: 46px; height: 46px; }\n    #catalogo-soporte .category-label { font-size: 11.5px; line-height: 1.25; text-align: center; letter-spacing: -0.02em; hyphens: auto; -webkit-hyphens: auto; }\n\n    \n    #catalogo-soporte .catalog-layout .storage-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 10px; }\n    #catalogo-soporte .catalog-layout .storage-card { border-radius: 14px; }\n    #catalogo-soporte .catalog-layout .storage-photo { aspect-ratio: 4 / 3; padding: 6px; }\n    #catalogo-soporte .catalog-layout .storage-photo img { max-height: 130px; }\n    #catalogo-soporte .catalog-layout .storage-info { padding: 10px 10px 12px; gap: 6px; }\n    #catalogo-soporte .catalog-layout .storage-info h3 { font-size: 14px; line-height: 1.25; }\n    #catalogo-soporte .storage-info .brand-line { gap: 6px; }\n    #catalogo-soporte .brand-name { font-size: 10px; }\n    #catalogo-soporte .storage-icons { gap: 5px; }\n    #catalogo-soporte .storage-icon, #catalogo-soporte .model-card .storage-icon-small, #catalogo-soporte .storage-icon-wide { padding: 6px 4px; gap: 4px; border-radius: 8px; }\n    #catalogo-soporte .storage-icon svg, #catalogo-soporte .model-card .storage-icon-small svg { width: 14px; height: 14px; }\n    #catalogo-soporte .storage-icon span { font-size: 10px; overflow-wrap: anywhere; }\n    #catalogo-soporte .model-card .storage-icon-small { flex-direction: column; }\n    #catalogo-soporte .model-card .card-hint { display: none; }\n  }\n\n  \n  @media (max-width: 359px) {\n    #catalogo-soporte .landing { grid-template-columns: repeat(2, minmax(0, 1fr)); }\n  }\n\n  /* --- Integraci\u00f3n WordPress --- */\n  #catalogo-soporte {\n    position: relative;\n    width: 100vw;\n    max-width: 100vw;\n    margin-left: calc(50% - 50vw);\n    margin-right: calc(50% - 50vw);\n    height: auto;\n    min-height: 0;\n    overflow: hidden;\n    line-height: normal;\n    text-align: left;\n  }\n  #catalogo-soporte .bg-power, #catalogo-soporte #dynamicHero { position: absolute; }\n  #catalogo-soporte .bg-power { top: 50vh; }\n  #catalogo-soporte .scrim, #catalogo-soporte .rent-scrim { z-index: 99990; }\n  #catalogo-soporte .panel { z-index: 99991; }\n  #catalogo-soporte .rent-modal { z-index: 99992; }\n  #catalogo-soporte :where(h1, h2, h3, p, span, label, div) {\n    font-family: inherit; text-transform: none; letter-spacing: normal;\n  }\n  #catalogo-soporte :where(h1, h2, h3)::before, #catalogo-soporte :where(h1, h2, h3)::after { content: none; }\n  #catalogo-soporte :where(button, input, select, textarea) {\n    font-family: inherit; text-transform: none; letter-spacing: normal;\n    line-height: normal; min-height: 0; box-shadow: none; text-shadow: none;\n    margin: 0; width: auto; height: auto;\n  }\n  #catalogo-soporte :where(img) { max-width: none; height: auto; border: 0; box-shadow: none; border-radius: 0; }\n  #catalogo-soporte .scroll-progress { display: none; }\n  #catalogo-soporte .site-nav { top: 8px; }\n  #catalogo-soporte :where(header, footer, section, nav) {\n    background: none; border: 0; box-shadow: none; padding: 0; position: static;\n  }\n\n  :host { all: initial; display: block; }\n  #catalogo-soporte { width: 100%; max-width: none; margin: 0; }\n" + "</style>" + "<div id=\"catalogo-soporte\">\n<div class=\"bg-power\" aria-hidden=\"true\">\n  <svg viewBox=\"0 0 100 100\" xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" stroke=\"#8CC8FF\" stroke-width=\"9\" stroke-linecap=\"round\">\n    <path d=\"M32 26a32 32 0 1 0 36 0\"/>\n    <path d=\"M50 12v36\"/>\n  </svg>\n</div>\n\n<div id=\"pageContent\">\n\n<div class=\"scroll-progress\" id=\"scrollProgress\" aria-hidden=\"true\"></div>\n\n<nav class=\"site-nav\" id=\"siteNav\" aria-label=\"Principal\">\n  <a class=\"nav-brand\" href=\"/\" data-nav=\"portada\" aria-label=\"Soporte TV, inicio\">\n    <img class=\"brand-logo brand-logo--light\" src=\"https://m3hervas.github.io/CatalogoSoporte/alquiler/img/logo-soporte-tv_SpTV.webp?v=20261004e\" alt=\"\" width=\"113\" height=\"30\">\n    <img class=\"brand-logo brand-logo--dark\" src=\"https://m3hervas.github.io/CatalogoSoporte/alquiler/img/logo-soporte-tv-blanco_SpTV.webp?v=20261004e\" alt=\"\" width=\"113\" height=\"30\">\n  </a>\n  <button class=\"theme-toggle\" id=\"themeToggle\" type=\"button\" aria-label=\"Cambiar a modo noche\" aria-pressed=\"false\">\n    <svg class=\"icon-moon\" viewBox=\"0 0 24 24\" width=\"18\" height=\"18\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z\"/></svg>\n    <svg class=\"icon-sun\" viewBox=\"0 0 24 24\" width=\"18\" height=\"18\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><circle cx=\"12\" cy=\"12\" r=\"4\"/><path d=\"M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4\"/></svg>\n  </button>\n  <button class=\"nav-toggle\" id=\"navToggle\" aria-expanded=\"false\" aria-controls=\"navMenu\" aria-label=\"Abrir men\u00fa\">\n    <span></span><span></span>\n  </button>\n  <div class=\"nav-menu\" id=\"navMenu\">\n    <a class=\"nav-link\" href=\"/\" data-nav=\"portada\">Inicio</a>\n    <div class=\"nav-group\" id=\"navCatalog\">\n      <button class=\"nav-link\" id=\"navCatalogBtn\" aria-expanded=\"false\" aria-controls=\"navDropdown\">\n        Cat\u00e1logo\n        <svg class=\"nav-chevron\" viewBox=\"0 0 24 24\" width=\"14\" height=\"14\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M6 9l6 6 6-6\"/></svg>\n      </button>\n      <div class=\"nav-dropdown\" id=\"navDropdown\">\n        <a href=\"#tablets\" data-route=\"tablets\">Tablets<small>Android y iPad</small></a>\n        <a href=\"#moviles\" data-route=\"moviles\">M\u00f3viles<small>Android y iPhone</small></a>\n        <a href=\"#mac\" data-route=\"mac\">Mac<small>MacBook, iMac, Mac mini y Studio</small></a>\n        <a href=\"#ordenadores\" data-route=\"ordenadores\">Ordenadores<small>Port\u00e1tiles, Surface, AIO y CPU</small></a>\n        <a href=\"#monitores\" data-route=\"monitores\">Monitores / TV<small>LED, 4K, estudio y TV</small></a>\n        <a href=\"#almacenamiento\" data-route=\"almacenamiento\">Almacenamiento<small>SSD port\u00e1tiles y de escritorio</small></a>\n        <a href=\"#cabinas\" data-route=\"cabinas\">Cabinas<small>Cabinas de discos y NAS</small></a>\n        <a href=\"#conectividad\" data-route=\"conectividad\">Conectividad<small>MiFi, routers y Wi-Fi</small></a>\n        <a href=\"#accesorios\" data-route=\"accesorios\">Accesorios<small>Estabilizadores, luz, audio</small></a>\n        <a href=\"#videoconferencia\" data-route=\"videoconferencia\">Videoconferencia PRO<small>Videoconferencia, intercom y walkies</small></a>\n        <a href=\"#impresoras\" data-route=\"impresoras\">Impresoras<small>Multifunci\u00f3n A4 / A3 con coste por p\u00e1gina</small></a>\n      </div>\n    </div>\n    <a class=\"nav-link\" href=\"#contacto\" data-nav=\"contact\">Contacto</a>\n    <button class=\"primary-btn nav-cta\" data-nav=\"rent\">Solicita presupuesto</button>\n  </div>\n</nav>\n\n<header class=\"reveal\" id=\"catalogo\">\n  <p class=\"eyebrow\" id=\"catEyebrow\">Cat\u00e1logo de alquiler</p>\n  <div class=\"brand-header\">\n    <img class=\"brand-logo brand-logo--light\" src=\"https://m3hervas.github.io/CatalogoSoporte/alquiler/img/logo-soporte-tv_SpTV.webp?v=20261004e\" alt=\"Soporte TV\" width=\"242\" height=\"64\">\n    <img class=\"brand-logo brand-logo--dark\" src=\"https://m3hervas.github.io/CatalogoSoporte/alquiler/img/logo-soporte-tv-blanco_SpTV.webp?v=20261004e\" alt=\"\" width=\"242\" height=\"64\">\n    <h1 id=\"catTitle\">Soporte TV</h1>\n  </div>\n  <p id=\"catDesc\">Elige una categor\u00eda para ver los productos disponibles para alquiler.</p>\n</header>\n\n<div class=\"landing\" id=\"viewLanding\">\n  <button class=\"category-card\" id=\"goTablets\">\n    <div class=\"category-icon\" id=\"tabletIconLarge\"></div>\n    <span class=\"category-label\">Tablets</span>\n  </button>\n  <button class=\"category-card\" id=\"goPhones\">\n    <div class=\"category-icon\" id=\"phoneIconLarge\"></div>\n    <span class=\"category-label\">M\u00f3viles</span>\n  </button>\n  <button class=\"category-card\" id=\"goAccessories\">\n    <div class=\"category-icon\" id=\"accessoryIconLarge\"></div>\n    <span class=\"category-label\">Accesorios</span>\n  </button>\n  <button class=\"category-card\" id=\"goMac\">\n    <div class=\"category-icon\" id=\"macIconLarge\"></div>\n    <span class=\"category-label\">Mac</span>\n  </button>\n  <button class=\"category-card\" id=\"goComputers\">\n    <div class=\"category-icon\" id=\"computerIconLarge\"></div>\n    <span class=\"category-label\">Ordenadores</span>\n  </button>\n  <button class=\"category-card\" id=\"goMonitors\">\n    <div class=\"category-icon\" id=\"monitorIconLarge\"></div>\n    <span class=\"category-label\">Monitores / TV</span>\n  </button>\n  <button class=\"category-card\" id=\"goConnectivity\">\n    <div class=\"category-icon\" id=\"connectivityIconLarge\"></div>\n    <span class=\"category-label\">Conectividad</span>\n  </button>\n  <button class=\"category-card\" id=\"goStorage\">\n    <div class=\"category-icon\" id=\"storageIconLarge\"></div>\n    <span class=\"category-label\">Almacenamiento</span>\n  </button>\n  <button class=\"category-card\" id=\"goCabins\">\n    <div class=\"category-icon\" id=\"cabinIconLarge\"></div>\n    <span class=\"category-label\">Cabinas</span>\n  </button>\n  <button class=\"category-card\" id=\"goVideoconf\">\n    <div class=\"category-icon\" id=\"videoconfIconLarge\"></div>\n    <span class=\"category-label\">Videoconferencia PRO</span>\n  </button>\n  <button class=\"category-card\" id=\"goPrinters\">\n    <div class=\"category-icon\" id=\"printerIconLarge\"></div>\n    <span class=\"category-label\">Impresoras</span>\n  </button>\n</div>\n\n<div class=\"catalog-view\" id=\"viewTablets\" hidden>\n  <button class=\"back-btn\" data-back>\u2190 Volver</button>\n\n  <div class=\"catalog-layout\">\n    <aside class=\"filter-panel\" aria-label=\"Filtros\">\n      <p class=\"filter-panel-title\">Filtrar</p>\n      <div class=\"filter-row\">\n        <span class=\"filter-label\">Marca</span>\n        <select class=\"filter-select\" id=\"brandSelect\">\n          <option value=\"all\">Todas las marcas</option>\n          <option value=\"Lenovo\">Lenovo</option>\n          <option value=\"Samsung\">Samsung</option>\n          <option value=\"Apple\">Apple</option>\n        </select>\n      </div>\n      <div class=\"filter-row\">\n        <span class=\"filter-label\">Almacenamiento</span>\n        <select class=\"filter-select\" id=\"storageSelect\">\n            <option value=\"all\">Todos</option>\n            <option value=\"32 GB\">32 GB</option>\n            <option value=\"64 GB\">64 GB</option>\n            <option value=\"128 GB\">128 GB</option>\n            <option value=\"256 GB\">256 GB</option>\n            <option value=\"512 GB\">512 GB</option>\n            <option value=\"1 TB\">1 TB</option>\n          </select>\n      </div>\n      <button class=\"filter-reset\" type=\"button\">Quitar filtros</button>\n    </aside>\n    <div class=\"storage-grid\" id=\"grid\"></div>\n  </div>\n</div>\n\n<div class=\"catalog-view\" id=\"viewPhones\" hidden>\n  <button class=\"back-btn\" data-back>\u2190 Volver</button>\n\n  <div class=\"catalog-layout\">\n    <aside class=\"filter-panel\" aria-label=\"Filtros\">\n      <p class=\"filter-panel-title\">Filtrar</p>\n      <div class=\"filter-row\">\n        <span class=\"filter-label\">Marca</span>\n        <select class=\"filter-select\" id=\"phoneBrandSelect\">\n          <option value=\"all\">Todas las marcas</option>\n          <option value=\"Xiaomi\">Xiaomi</option>\n          <option value=\"Samsung\">Samsung</option>\n          <option value=\"Apple\">Apple</option>\n        </select>\n      </div>\n      <div class=\"filter-row\">\n        <span class=\"filter-label\">Almacenamiento</span>\n        <select class=\"filter-select\" id=\"phoneStorageSelect\">\n            <option value=\"all\">Todos</option>\n            <option value=\"64 GB\">64 GB</option>\n            <option value=\"128 GB\">128 GB</option>\n            <option value=\"256 GB\">256 GB</option>\n            <option value=\"512 GB\">512 GB</option>\n            <option value=\"1 TB\">1 TB</option>\n            <option value=\"2 TB\">2 TB</option>\n          </select>\n      </div>\n      <button class=\"filter-reset\" type=\"button\">Quitar filtros</button>\n    </aside>\n    <div class=\"storage-grid\" id=\"gridPhones\"></div>\n  </div>\n</div>\n\n<div class=\"catalog-view\" id=\"viewAccessories\" hidden>\n  <button class=\"back-btn\" data-back>\u2190 Volver</button>\n\n  <div class=\"catalog-layout\">\n    <aside class=\"filter-panel\" aria-label=\"Filtros\">\n      <p class=\"filter-panel-title\">Filtrar</p>\n      <div class=\"filter-row\">\n        <span class=\"filter-label\">Tipo</span>\n        <select class=\"filter-select\" id=\"accessoryTypeSelect\">\n          <option value=\"all\">Todos</option>\n          <option value=\"M\u00f3vil/C\u00e1mara\">M\u00f3vil / C\u00e1mara</option>\n          <option value=\"iPad\">iPad</option>\n        </select>\n      </div>\n      <div class=\"filter-row\">\n        <span class=\"filter-label\">Marca</span>\n        <select class=\"filter-select\" id=\"accessoryBrandSelect\">\n          <option value=\"all\">Todas las marcas</option>\n          <option value=\"Apple\">Apple</option>\n          <option value=\"Zhiyun\">Zhiyun</option>\n          <option value=\"Celly\">Celly</option>\n          <option value=\"Wacom\">Wacom</option>\n          <option value=\"Sin marca\">Sin marca</option>\n        </select>\n      </div>\n      <button class=\"filter-reset\" type=\"button\">Quitar filtros</button>\n    </aside>\n    <div class=\"storage-grid\" id=\"gridAccessories\"></div>\n  </div>\n</div>\n\n<div class=\"catalog-view\" id=\"viewMac\" hidden>\n  <button class=\"back-btn\" data-back>\u2190 Volver</button>\n\n  <div class=\"catalog-layout\">\n    <aside class=\"filter-panel\" aria-label=\"Filtros\">\n      <p class=\"filter-panel-title\">Filtrar</p>\n      <div class=\"filter-row\">\n        <span class=\"filter-label\">Tipo</span>\n        <select class=\"filter-select\" id=\"macTypeSelect\">\n          <option value=\"all\">Todos</option>\n          <option value=\"MacBook Air\">MacBook Air</option>\n          <option value=\"MacBook Pro\">MacBook Pro</option>\n          <option value=\"iMac\">iMac</option>\n          <option value=\"Mac mini\">Mac mini</option>\n          <option value=\"Mac Studio\">Mac Studio</option>\n        </select>\n      </div>\n      <div class=\"filter-row\">\n        <span class=\"filter-label\">Almacenamiento</span>\n        <select class=\"filter-select\" id=\"macStorageSelect\">\n          <option value=\"all\">Todos</option>\n          <option value=\"128 GB\">128 GB</option>\n          <option value=\"256 GB\">256 GB</option>\n          <option value=\"512 GB\">512 GB</option>\n          <option value=\"1 TB\">1 TB</option>\n          <option value=\"2 TB\">2 TB</option>\n          <option value=\"4 TB\">4 TB</option>\n          <option value=\"8 TB\">8 TB</option>\n          <option value=\"16 TB\">16 TB</option>\n        </select>\n      </div>\n      <button class=\"filter-reset\" type=\"button\">Quitar filtros</button>\n    </aside>\n    <div class=\"storage-grid\" id=\"gridMac\"></div>\n  </div>\n</div>\n\n<div class=\"catalog-view\" id=\"viewComputers\" hidden>\n  <button class=\"back-btn\" data-back>\u2190 Volver</button>\n\n  <div class=\"catalog-layout\">\n    <aside class=\"filter-panel\" aria-label=\"Filtros\">\n      <p class=\"filter-panel-title\">Filtrar</p>\n      <div class=\"filter-row\">\n        <span class=\"filter-label\">Tipo</span>\n        <select class=\"filter-select\" id=\"computerTypeSelect\">\n          <option value=\"all\">Todos</option>\n          <option value=\"Port\u00e1til\">Port\u00e1til</option>\n          <option value=\"Surface\">Surface</option>\n          <option value=\"AIO\">AIO (Todo en uno)</option>\n          <option value=\"CPU\">CPU</option>\n          <option value=\"CPU + Monitor\">CPU + Monitor</option>\n        </select>\n      </div>\n      <div class=\"filter-row\">\n        <span class=\"filter-label\">Marca</span>\n        <select class=\"filter-select\" id=\"computerBrandSelect\">\n          <option value=\"all\">Todas las marcas</option>\n          <option value=\"HP\">HP</option>\n          <option value=\"Microsoft\">Microsoft</option>\n          <option value=\"Dell / HP / Lenovo\">Dell / HP / Lenovo</option>\n        </select>\n      </div>\n      <button class=\"filter-reset\" type=\"button\">Quitar filtros</button>\n    </aside>\n    <div class=\"storage-grid\" id=\"gridComputers\"></div>\n  </div>\n</div>\n\n<div class=\"catalog-view\" id=\"viewMonitors\" hidden>\n  <button class=\"back-btn\" data-back>\u2190 Volver</button>\n\n  <div class=\"catalog-layout\">\n    <aside class=\"filter-panel\" aria-label=\"Filtros\">\n      <p class=\"filter-panel-title\">Filtrar</p>\n      <div class=\"filter-row\">\n        <span class=\"filter-label\">Tipo</span>\n        <select class=\"filter-select\" id=\"monitorTypeSelect\">\n          <option value=\"all\">Todos</option>\n          <option value=\"LED\">LED</option>\n          <option value=\"4K\">4K</option>\n          <option value=\"Estudio 4K\">Estudio 4K</option>\n        </select>\n      </div>\n      <div class=\"filter-row\">\n        <span class=\"filter-label\">Tama\u00f1o</span>\n        <select class=\"filter-select\" id=\"monitorSizeSelect\">\n          <option value=\"all\">Todos</option>\n          <option value=\"24''\">24''</option>\n          <option value=\"27''\">27''</option>\n          <option value=\"65''\">65''</option>\n        </select>\n      </div>\n      <button class=\"filter-reset\" type=\"button\">Quitar filtros</button>\n    </aside>\n    <div class=\"storage-grid\" id=\"gridMonitors\"></div>\n  </div>\n</div>\n\n<div class=\"catalog-view\" id=\"viewConnectivity\" hidden>\n  <button class=\"back-btn\" data-back>\u2190 Volver</button>\n\n  <div class=\"catalog-layout\">\n    <aside class=\"filter-panel\" aria-label=\"Filtros\">\n      <p class=\"filter-panel-title\">Filtrar</p>\n      <div class=\"filter-row\">\n        <span class=\"filter-label\">Tipo</span>\n        <select class=\"filter-select\" id=\"connTypeSelect\">\n          <option value=\"all\">Todos</option>\n          <option value=\"MiFi\">MiFi</option>\n          <option value=\"Router\">Router</option>\n          <option value=\"Punto de acceso\">Punto de acceso</option>\n        </select>\n      </div>\n      <div class=\"filter-row\">\n        <span class=\"filter-label\">Red</span>\n        <select class=\"filter-select\" id=\"connNetSelect\">\n          <option value=\"all\">Todas</option>\n          <option value=\"4G\">4G</option>\n          <option value=\"5G\">5G</option>\n        </select>\n      </div>\n      <div class=\"filter-row\">\n        <span class=\"filter-label\">Datos</span>\n        <select class=\"filter-select\" id=\"connDataSelect\">\n          <option value=\"all\">Todos</option>\n          <option value=\"240 GB\">Tarjeta de datos 240 GB</option>\n          <option value=\"Ilimitados\">Datos ilimitados</option>\n        </select>\n      </div>\n      <button class=\"filter-reset\" type=\"button\">Quitar filtros</button>\n    </aside>\n    <div class=\"storage-grid\" id=\"gridConnectivity\"></div>\n  </div>\n</div>\n\n<div class=\"catalog-view\" id=\"viewStorage\" hidden>\n  <button class=\"back-btn\" data-back>\u2190 Volver</button>\n\n  <div class=\"catalog-layout\">\n    <aside class=\"filter-panel\" aria-label=\"Filtros\">\n      <p class=\"filter-panel-title\">Filtrar</p>\n      <div class=\"filter-row\">\n        <span class=\"filter-label\">Almacenamiento</span>\n        <select class=\"filter-select\" id=\"storageCapSelect\">\n          <option value=\"all\">Todas las capacidades</option>\n        </select>\n      </div>\n      <div class=\"filter-row\">\n        <span class=\"filter-label\">Velocidad</span>\n        <select class=\"filter-select\" id=\"storageSpeedSelect\">\n          <option value=\"all\">Todas</option>\n          <option value=\"0-1000\">Hasta 1000 MB/s</option>\n          <option value=\"1000-2000\">De 1000 a 2000 MB/s</option>\n          <option value=\"2000-99999\">M\u00e1s de 2000 MB/s</option>\n        </select>\n      </div>\n      <button class=\"filter-reset\" type=\"button\">Quitar filtros</button>\n    </aside>\n    <div class=\"storage-grid\" id=\"gridStorage\"></div>\n  </div>\n</div>\n\n<div class=\"catalog-view\" id=\"viewCabins\" hidden>\n  <button class=\"back-btn\" data-back>\u2190 Volver</button>\n\n  <div class=\"catalog-layout\">\n    <aside class=\"filter-panel\" aria-label=\"Filtros\">\n      <p class=\"filter-panel-title\">Filtrar</p>\n      <div class=\"filter-row\">\n        <span class=\"filter-label\">Tipo</span>\n        <select class=\"filter-select\" id=\"cabinTypeSelect\">\n          <option value=\"all\">Todos</option>\n          <option value=\"Cabina de discos\">Cabina de discos</option>\n          <option value=\"NAS\">NAS</option>\n        </select>\n      </div>\n      <div class=\"filter-row\">\n        <span class=\"filter-label\">Marca</span>\n        <select class=\"filter-select\" id=\"cabinBrandSelect\">\n          <option value=\"all\">Todas las marcas</option>\n          <option value=\"Areca\">Areca</option>\n          <option value=\"QNAP\">QNAP</option>\n          <option value=\"Stardom\">Stardom</option>\n          <option value=\"Synology\">Synology</option>\n          <option value=\"TerraMaster\">TerraMaster</option>\n        </select>\n      </div>\n      <button class=\"filter-reset\" type=\"button\">Quitar filtros</button>\n    </aside>\n    <div class=\"storage-grid\" id=\"gridCabins\"></div>\n  </div>\n</div>\n\n<div class=\"catalog-view\" id=\"viewVideoconf\" hidden>\n  <button class=\"back-btn\" data-back>\u2190 Volver</button>\n\n  <div class=\"catalog-layout\">\n    <aside class=\"filter-panel\" aria-label=\"Filtros\">\n      <p class=\"filter-panel-title\">Filtrar</p>\n      <div class=\"filter-row\">\n        <span class=\"filter-label\">Tipo</span>\n        <select class=\"filter-select\" id=\"videoconfTypeSelect\">\n          <option value=\"all\">Todos</option>\n          <option value=\"Videoconferencia\">Videoconferencia</option>\n          <option value=\"Intercom\">Intercom</option>\n          <option value=\"Walkies\">Walkies</option>\n        </select>\n      </div>\n      <div class=\"filter-row\">\n        <span class=\"filter-label\">Marca</span>\n        <select class=\"filter-select\" id=\"videoconfBrandSelect\">\n          <option value=\"all\">Todos</option>\n          <option value=\"Hollyland\">Hollyland</option>\n          <option value=\"Jabra\">Jabra</option>\n          <option value=\"Motorola\">Motorola</option>\n        </select>\n      </div>\n      <button class=\"filter-reset\" type=\"button\">Quitar filtros</button>\n    </aside>\n    <div class=\"storage-grid\" id=\"gridVideoconf\"></div>\n  </div>\n</div>\n\n<div class=\"catalog-view\" id=\"viewPrinters\" hidden>\n  <button class=\"back-btn\" data-back>\u2190 Volver</button>\n\n  <div class=\"catalog-layout\">\n    <aside class=\"filter-panel\" aria-label=\"Filtros\">\n      <p class=\"filter-panel-title\">Filtrar</p>\n      <div class=\"filter-row\">\n        <span class=\"filter-label\">Formato</span>\n        <select class=\"filter-select\" id=\"printerSizeSelect\">\n          <option value=\"all\">Todos</option>\n          <option value=\"A3\">A3</option>\n          <option value=\"A4\">A4</option>\n        </select>\n      </div>\n      <div class=\"filter-row\">\n        <span class=\"filter-label\">Impresi\u00f3n</span>\n        <select class=\"filter-select\" id=\"printerColorSelect\">\n          <option value=\"all\">Todos</option>\n          <option value=\"B/N\">B/N</option>\n          <option value=\"Color\">Color</option>\n        </select>\n      </div>\n      <button class=\"filter-reset\" type=\"button\">Quitar filtros</button>\n    </aside>\n    <div class=\"storage-grid\" id=\"gridPrinters\"></div>\n  </div>\n</div>\n\n<section class=\"featured reveal\" id=\"destacados\" aria-label=\"Modelos destacados\">\n  <div class=\"featured-head\">\n    <p class=\"eyebrow\">Destacados</p>\n    <h2>Modelos destacados</h2>\n    <p>Una selecci\u00f3n de material de nuestro cat\u00e1logo de alquiler.</p>\n  </div>\n  <div class=\"slider\" id=\"featuredSlider\" tabindex=\"0\" aria-roledescription=\"carrusel\">\n    <div class=\"slides\">\n      <article class=\"slide is-active\" aria-roledescription=\"diapositiva\" aria-label=\"1 de 4\">\n        <img src=\"https://m3hervas.github.io/CatalogoSoporte/alquiler/img/apple-macbook-air-m1-destacado_SpTV.webp\" alt=\"MacBook Air de 13,3 pulgadas con chip M1 sobre un escritorio\" style=\"object-position: 55% 50%\" loading=\"eager\" decoding=\"async\">\n        <div class=\"slide-content\">\n          <span class=\"slide-chip\">Ordenadores</span>\n          <h3>MacBook Air 13,3'' M1</h3>\n          <p>Apple M1 \u00b7 16 GB \u00b7 256 GB SSD</p>\n          <button class=\"primary-btn\" data-feature-route=\"mac\" data-feature-model=\"MacBook Air 13,3'' M1\">Ver en el cat\u00e1logo</button>\n        </div>\n      </article>\n      <article class=\"slide\" aria-roledescription=\"diapositiva\" aria-label=\"2 de 4\">\n        <img src=\"https://m3hervas.github.io/CatalogoSoporte/alquiler/img/apple-ipad-pro-destacado_SpTV.webp\" alt=\"Parte trasera de un iPad Pro\" style=\"object-position: 50% 45%\" loading=\"lazy\" decoding=\"async\">\n        <div class=\"slide-content\">\n          <span class=\"slide-chip\">Tablets</span>\n          <h3>iPad Pro</h3>\n          <p>128 GB \u00b7 256 GB \u00b7 Pantalla de 11''</p>\n          <button class=\"primary-btn\" data-feature-route=\"tablets\" data-feature-model=\"iPad Pro\">Ver en el cat\u00e1logo</button>\n        </div>\n      </article>\n      <article class=\"slide\" aria-roledescription=\"diapositiva\" aria-label=\"3 de 4\">\n        <img src=\"https://m3hervas.github.io/CatalogoSoporte/alquiler/img/apple-iphone-16-pro-destacado_SpTV.webp\" alt=\"C\u00e1maras traseras del iPhone 16 Pro\" style=\"object-position: 50% 22%\" loading=\"lazy\" decoding=\"async\">\n        <div class=\"slide-content\">\n          <span class=\"slide-chip\">M\u00f3viles</span>\n          <h3>iPhone 16 Pro</h3>\n          <p>128 GB \u00b7 256 GB \u00b7 512 GB \u00b7 1 TB \u00b7 Pantalla de 6,3''</p>\n          <button class=\"primary-btn\" data-feature-route=\"moviles\" data-feature-model=\"iPhone 16 Pro\">Ver en el cat\u00e1logo</button>\n        </div>\n      </article>\n      <article class=\"slide\" aria-roledescription=\"diapositiva\" aria-label=\"4 de 4\">\n        <img src=\"https://m3hervas.github.io/CatalogoSoporte/alquiler/img/sandisk-extreme-portable-ssd-destacado_SpTV.webp\" alt=\"Disco SanDisk Extreme Portable SSD\" style=\"object-position: 50% 45%\" loading=\"lazy\" decoding=\"async\">\n        <div class=\"slide-content\">\n          <span class=\"slide-chip\">Almacenamiento</span>\n          <h3>SanDisk Extreme Portable SSD</h3>\n          <p>De 500 GB a 8 TB \u00b7 Hasta 1050 MB/s</p>\n          <button class=\"primary-btn\" data-feature-route=\"almacenamiento\" data-feature-model=\"SanDisk Extreme Portable SSD\">Ver en el cat\u00e1logo</button>\n        </div>\n      </article>\n    </div>\n    <div class=\"slider-dots\" role=\"group\" aria-label=\"Seleccionar destacado\">\n        <button class=\"slider-dot is-active\" aria-label=\"Ir al destacado 1\"><span></span></button>\n        <button class=\"slider-dot\" aria-label=\"Ir al destacado 2\"><span></span></button>\n        <button class=\"slider-dot\" aria-label=\"Ir al destacado 3\"><span></span></button>\n        <button class=\"slider-dot\" aria-label=\"Ir al destacado 4\"><span></span></button>\n    </div>\n    <div class=\"slider-nav\">\n      <button class=\"slider-arrow\" data-dir=\"-1\" aria-label=\"Destacado anterior\">\n        <svg viewBox=\"0 0 24 24\" width=\"18\" height=\"18\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M15 18l-6-6 6-6\"/></svg>\n      </button>\n      <button class=\"slider-arrow\" data-dir=\"1\" aria-label=\"Destacado siguiente\">\n        <svg viewBox=\"0 0 24 24\" width=\"18\" height=\"18\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M9 18l6-6-6-6\"/></svg>\n      </button>\n    </div>\n  </div>\n</section>\n\n<footer class=\"site-footer reveal\" id=\"contacto\">\n  <div class=\"footer-grid\">\n    <div class=\"footer-brand\">\n      <div class=\"footer-logo\">\n        <img class=\"brand-logo brand-logo--light\" src=\"https://m3hervas.github.io/CatalogoSoporte/alquiler/img/logo-soporte-tv_SpTV.webp?v=20261004e\" alt=\"Soporte TV\" width=\"128\" height=\"34\">\n        <img class=\"brand-logo brand-logo--dark\" src=\"https://m3hervas.github.io/CatalogoSoporte/alquiler/img/logo-soporte-tv-blanco_SpTV.webp?v=20261004e\" alt=\"\" width=\"128\" height=\"34\">\n      </div>\n      <p>Alquiler de dispositivos para eventos, rodajes y producciones. Material configurado y revisado antes de cada entrega.</p>\n      <button class=\"primary-btn\" data-nav=\"rent\">Solicitar alquiler</button>\n    </div>\n    <div class=\"footer-col\">\n      <h4>Cat\u00e1logo</h4>\n      <a href=\"#tablets\" data-route=\"tablets\">Tablets</a>\n      <a href=\"#moviles\" data-route=\"moviles\">M\u00f3viles</a>\n      <a href=\"#mac\" data-route=\"mac\">Mac</a>\n      <a href=\"#ordenadores\" data-route=\"ordenadores\">Ordenadores</a>\n    </div>\n    <div class=\"footer-col\">\n      <h4>M\u00e1s material</h4>\n      <a href=\"#monitores\" data-route=\"monitores\">Monitores / TV</a>\n      <a href=\"#almacenamiento\" data-route=\"almacenamiento\">Almacenamiento</a>\n      <a href=\"#cabinas\" data-route=\"cabinas\">Cabinas</a>\n      <a href=\"#conectividad\" data-route=\"conectividad\">Conectividad</a>\n      <a href=\"#accesorios\" data-route=\"accesorios\">Accesorios</a>\n      <a href=\"#videoconferencia\" data-route=\"videoconferencia\">Videoconferencia PRO</a>\n      <a href=\"#impresoras\" data-route=\"impresoras\">Impresoras</a>\n    </div>\n  </div>\n  <div class=\"footer-bottom\">\n    <span>\u00a9 <span id=\"footerYear\">2026</span> Soporte TV</span>\n    <span>Cat\u00e1logo de alquiler de dispositivos \u00b7 <button class=\"credits-link\" id=\"openCredits\" type=\"button\">Cr\u00e9ditos de fotos</button></span>\n  </div>\n</footer>\n\n<div class=\"scrim\" id=\"scrim\"></div>\n<div class=\"panel\" id=\"panel\" role=\"dialog\" aria-modal=\"true\" aria-labelledby=\"panel-name\"></div>\n\n<div class=\"scrim credits-scrim\" id=\"creditsScrim\"></div>\n<div class=\"credits-modal\" id=\"creditsModal\" role=\"dialog\" aria-modal=\"true\" aria-labelledby=\"creditsTitle\">\n  <div class=\"credits-top\">\n    <h2 id=\"creditsTitle\">Cr\u00e9ditos de fotos</h2>\n    <button class=\"close-btn\" id=\"closeCredits\" aria-label=\"Cerrar\">\u2715</button>\n  </div>\n  <p>Modelos destacados</p>\n  <ul>\n      <li><strong>MacBook Air 13,3'' M1</strong> \u2014 \u00abMacbook Air 2020 (M1) - 1\u00bb, por KKPCW. Licencia <a href=\"https://creativecommons.org/licenses/by-sa/4.0\" target=\"_blank\" rel=\"noopener\">CC BY-SA 4.0</a>, v\u00eda <a href=\"https://commons.wikimedia.org/wiki/File:Macbook_Air_2020_(M1)_-_1.jpg\" target=\"_blank\" rel=\"noopener\">Wikimedia Commons</a>. Adaptada (recorte y formato WebP).</li>\n      <li><strong>iPad Pro</strong> \u2014 \u00abIPad Pro 2018 backside\u00bb, por MIKI Yoshihito. Licencia <a href=\"https://creativecommons.org/licenses/by/2.0\" target=\"_blank\" rel=\"noopener\">CC BY 2.0</a>, v\u00eda <a href=\"https://commons.wikimedia.org/wiki/File:IPad_Pro_2018_backside.jpg\" target=\"_blank\" rel=\"noopener\">Wikimedia Commons</a>. Adaptada (recorte y formato WebP).</li>\n      <li><strong>iPhone 16 Pro</strong> \u2014 \u00abIPhone 16 Pro (54251031612)\u00bb, por \u30e1\u30a4\u30c9\u7406\u4e16. Licencia <a href=\"https://creativecommons.org/licenses/by-sa/2.0\" target=\"_blank\" rel=\"noopener\">CC BY-SA 2.0</a>, v\u00eda <a href=\"https://commons.wikimedia.org/wiki/File:IPhone_16_Pro_(54251031612).jpg\" target=\"_blank\" rel=\"noopener\">Wikimedia Commons</a>. Adaptada (recorte y formato WebP).</li>\n      <li><strong>SanDisk Extreme Portable SSD</strong> \u2014 \u00abSanDisk Extreme Portable SSD - 1TB, USB-C\u00bb, por Tony Webster. Licencia <a href=\"https://creativecommons.org/licenses/by/2.0\" target=\"_blank\" rel=\"noopener\">CC BY 2.0</a>, v\u00eda <a href=\"https://commons.wikimedia.org/wiki/File:SanDisk_Extreme_Portable_SSD_-_1TB,_USB-C_(41036158305).jpg\" target=\"_blank\" rel=\"noopener\">Wikimedia Commons</a>. Adaptada (recorte y formato WebP).</li>\n  </ul>\n  <p>Accesorios y Conectividad</p>\n  <ul>\n      <li><strong>Aro de luz</strong> \u2014 \u00abRing Light\u00bb, por Serhan Meewisse. Licencia <a href=\"https://creativecommons.org/publicdomain/zero/1.0/\" target=\"_blank\" rel=\"noopener\">CC0</a>, v\u00eda <a href=\"https://commons.wikimedia.org/wiki/File:Ring_Light_25280737679.jpg\" target=\"_blank\" rel=\"noopener\">Wikimedia Commons</a>. Adaptada (recorte y formato WebP).</li>\n      <li><strong>Micr\u00f3fono inal\u00e1mbrico</strong> \u2014 \u00abRode Wireless Go II Set 2\u00bb, por -stk. Licencia <a href=\"https://creativecommons.org/licenses/by-sa/4.0\" target=\"_blank\" rel=\"noopener\">CC BY-SA 4.0</a>, v\u00eda <a href=\"https://commons.wikimedia.org/wiki/File:Rode_Wireless_Go_II_Set_2.jpg\" target=\"_blank\" rel=\"noopener\">Wikimedia Commons</a>. Adaptada (recorte y formato WebP).</li>\n      <li><strong>Power bank</strong> \u2014 \u00ab2023 Powerbank Green Cell PowerPlay 20 (2)\u00bb, por Jacek Halicki. Licencia <a href=\"https://creativecommons.org/licenses/by-sa/4.0\" target=\"_blank\" rel=\"noopener\">CC BY-SA 4.0</a>, v\u00eda <a href=\"https://commons.wikimedia.org/wiki/File:2023_Powerbank_Green_Cell_PowerPlay_20_(2).jpg\" target=\"_blank\" rel=\"noopener\">Wikimedia Commons</a>. Adaptada (recorte y formato WebP).</li>\n      <li><strong>Funda con teclado</strong> \u2014 \u00abLogitech Ultrathin Keyboard Cover for iPad\u00bb, por K\u0101rlis Dambr\u0101ns. Licencia <a href=\"https://creativecommons.org/licenses/by/2.0\" target=\"_blank\" rel=\"noopener\">CC BY 2.0</a>, v\u00eda <a href=\"https://commons.wikimedia.org/wiki/File:Logitech_Ultrathin_Keyboard_Cover_for_iPad_(9679257750).jpg\" target=\"_blank\" rel=\"noopener\">Wikimedia Commons</a>. Adaptada (recorte y formato WebP).</li>\n      <li><strong>MiFi port\u00e1til</strong> \u2014 \u00abHuawei E5576-320 4G Reise-Hotspot LTE-Router\u00bb, por www.digitalpush.net. Licencia <a href=\"https://creativecommons.org/licenses/by/4.0\" target=\"_blank\" rel=\"noopener\">CC BY 4.0</a>, v\u00eda <a href=\"https://commons.wikimedia.org/wiki/File:Huawei-E5576-320-4G-Reise-Hotspot-LTE-Router.1.jpg\" target=\"_blank\" rel=\"noopener\">Wikimedia Commons</a>. Adaptada (recorte y formato WebP).</li>\n      <li><strong>Router con SIM</strong> \u2014 \u00abMikrotik Chateau LTE-5G modem+router\u00bb, por Yerachmiel C. Licencia <a href=\"https://creativecommons.org/licenses/by-sa/4.0\" target=\"_blank\" rel=\"noopener\">CC BY-SA 4.0</a>, v\u00eda <a href=\"https://commons.wikimedia.org/wiki/File:Mikrotik_Chateau_LTE-5G_modem%2Brouter.jpg\" target=\"_blank\" rel=\"noopener\">Wikimedia Commons</a>. Adaptada (recorte y formato WebP).</li>\n  </ul>\n  <p class=\"credits-note\">Las fotos de accesorios y conectividad gen\u00e9ricos son orientativas: el material entregado puede ser de otra marca o modelo equivalente. Resto de fotos de producto: im\u00e1genes oficiales de los fabricantes (Apple, Samsung, LG, JVC, Microsoft, HP, Dell, Lenovo, SanDisk / Western Digital, Areca, Stardom, TerraMaster, QNAP, Synology, Jabra, Hollyland, Motorola, Ricoh, Zhiyun, Wacom, Celly, Targus y Ubiquiti) o aportadas por Soporte TV.</p>\n</div>\n<div class=\"scrim rent-scrim\" id=\"rentScrim\"></div>\n<div class=\"rent-modal\" id=\"rentModal\" role=\"dialog\" aria-modal=\"true\" aria-labelledby=\"rentTitle\">\n  <div class=\"panel-top\">\n    <h2 id=\"rentTitle\">Solicitar alquiler</h2>\n    <button class=\"close-btn\" id=\"rentClose\" aria-label=\"Cerrar\">\u2715</button>\n  </div>\n  <p class=\"lead\">Cu\u00e9ntanos qu\u00e9 necesitas y te responderemos por correo lo antes posible.</p>\n  <form id=\"rentForm\" novalidate>\n    <div class=\"field\">\n      <label for=\"rentName\">Nombre</label>\n      <input id=\"rentName\" type=\"text\" autocomplete=\"name\" required>\n    </div>\n    <div class=\"field\">\n      <label for=\"rentEmail\">Tu correo</label>\n      <input id=\"rentEmail\" type=\"email\" autocomplete=\"email\" required>\n    </div>\n    <div class=\"field-row\">\n      <div class=\"field\">\n        <label for=\"rentFrom\">Desde</label>\n        <input id=\"rentFrom\" type=\"date\">\n      </div>\n      <div class=\"field\">\n        <label for=\"rentTo\">Hasta</label>\n        <input id=\"rentTo\" type=\"date\">\n      </div>\n    </div>\n    <div class=\"field\">\n      <label for=\"rentMsg\">\u00bfQu\u00e9 necesitas?</label>\n      <textarea id=\"rentMsg\" placeholder=\"Ej.: 4 iPad y 2 port\u00e1tiles para un evento\" required></textarea>\n    </div>\n    <p class=\"field-error\" id=\"rentError\" role=\"alert\"></p>\n    <button type=\"submit\" class=\"primary-btn\" id=\"rentSubmit\">Enviar solicitud</button>\n  </form>\n  <div class=\"rent-done\" id=\"rentDone\" hidden>\n    <div class=\"rent-done-icon\" aria-hidden=\"true\">\u2713</div>\n    <p class=\"rent-done-title\">\u00a1Solicitud enviada!</p>\n    <p class=\"rent-done-sub\">Gracias. Te contestaremos lo antes posible al correo que nos has indicado.</p>\n    <button type=\"button\" class=\"primary-btn\" id=\"rentDoneClose\">Cerrar</button>\n  </div>\n</div>\n\n</div>\n</div>";
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

// Video conferencing: screen with a camera bar on top
function videoconfIcon(accent) {
  return `<svg viewBox="0 0 120 100" xmlns="http://www.w3.org/2000/svg">
    <rect x="10" y="20" width="100" height="58" rx="4" fill="#EDEFF2" stroke="${accent}" stroke-width="3.5"/>
    <rect x="17" y="27" width="86" height="44" rx="1.5" fill="#D9DEE4"/>
    <rect x="38" y="6" width="44" height="11" rx="5.5" fill="#EDEFF2" stroke="${accent}" stroke-width="3"/>
    <circle cx="60" cy="11.5" r="3" fill="${accent}"/>
    <circle cx="48" cy="45" r="7" fill="#EDEFF2"/><path d="M38 64c1.5-7 18.5-7 20 0" fill="#EDEFF2"/>
    <circle cx="72" cy="45" r="7" fill="#EDEFF2"/><path d="M62 64c1.5-7 18.5-7 20 0" fill="#EDEFF2"/>
    <path d="M52 78h16l3 10H49z" fill="${accent}"/>
    <rect x="40" y="88" width="40" height="5" rx="2.5" fill="${accent}"/>
  </svg>`;
}

// Multifunction printer: scanner lid, body, paper tray and output sheet
function printerIcon(accent) {
  return `<svg viewBox="0 0 120 100" xmlns="http://www.w3.org/2000/svg">
    <rect x="30" y="8" width="60" height="22" rx="2" fill="#FFFFFF" stroke="${accent}" stroke-width="3"/>
    <rect x="12" y="28" width="96" height="40" rx="7" fill="#EDEFF2" stroke="${accent}" stroke-width="3.5"/>
    <rect x="22" y="38" width="22" height="7" rx="2" fill="#D9DEE4"/>
    <circle cx="94" cy="41" r="3" fill="${accent}"/>
    <rect x="18" y="68" width="84" height="22" rx="3" fill="#D9DEE4" stroke="${accent}" stroke-width="3"/>
    <rect x="34" y="56" width="52" height="30" rx="1.5" fill="#FFFFFF" stroke="${accent}" stroke-width="2.5"/>
    <path d="M42 66h36M42 73h36M42 80h24" stroke="#D9DEE4" stroke-width="3" stroke-linecap="round"/>
  </svg>`;
}

// Disk enclosure: a box with four drive bays
function cabinIcon(accent) {
  return `<svg viewBox="0 0 120 100" xmlns="http://www.w3.org/2000/svg">
    <rect x="22" y="8" width="76" height="84" rx="8" fill="#EDEFF2" stroke="${accent}" stroke-width="3.5"/>
    <rect x="32" y="20" width="56" height="12" rx="2.5" fill="#D9DEE4"/>
    <rect x="32" y="37" width="56" height="12" rx="2.5" fill="#D9DEE4"/>
    <rect x="32" y="54" width="56" height="12" rx="2.5" fill="#D9DEE4"/>
    <rect x="32" y="71" width="56" height="12" rx="2.5" fill="#D9DEE4"/>
    <circle cx="81" cy="26" r="2.5" fill="${accent}"/>
    <circle cx="81" cy="43" r="2.5" fill="${accent}"/>
    <circle cx="81" cy="60" r="2.5" fill="${accent}"/>
    <circle cx="81" cy="77" r="2.5" fill="${accent}"/>
  </svg>`;
}

function driveIcon(accent) {
  return `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <rect x="22" y="12" width="56" height="76" rx="12" fill="#EDEFF2" stroke="${accent}" stroke-width="3.5"/>
    <rect x="32" y="24" width="36" height="40" rx="5" fill="#D9DEE4"/>
    <circle cx="50" cy="76" r="3.5" fill="${accent}"/>
  </svg>`;
}

const STORAGE_ICONS = {
  cpu: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="6" y="6" width="12" height="12" rx="2"/><path d="M9 2v4M15 2v4M9 18v4M15 18v4M2 9h4M2 15h4M18 9h4M18 15h4"/></svg>`,
  screen: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="12" rx="2"/><path d="M9 20h6M12 16v4"/></svg>`,
  signal: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.5a10 10 0 0 1 14 0M8.5 16a5 5 0 0 1 7 0"/><circle cx="12" cy="19.5" r="1"/></svg>`,
  tag: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.6 13.4 13.4 20.6a2 2 0 0 1-2.8 0L3 13V3h10l7.6 7.6a2 2 0 0 1 0 2.8z"/><circle cx="7.5" cy="7.5" r="1.5"/></svg>`,
  capacity: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5.5" rx="7.5" ry="2.5"/><path d="M4.5 5.5v13c0 1.4 3.4 2.5 7.5 2.5s7.5-1.1 7.5-2.5v-13"/><path d="M4.5 12c0 1.4 3.4 2.5 7.5 2.5s7.5-1.1 7.5-2.5"/></svg>`,
  speed: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M13 3 5 14h6l-1 7 8-11h-6z"/></svg>`,
  port: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="8.5" width="18" height="7" rx="3.5"/><path d="M8 12h8"/></svg>`,
  bays: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="3" width="16" height="18" rx="2"/><path d="M8 8h8M8 12h8M8 16h8"/></svg>`,
  raid: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l8 3v6c0 4.5-3.4 8-8 9-4.6-1-8-4.5-8-9V6z"/><path d="M9 12l2 2 4-4"/></svg>`
};

// iMac-style computer with the Apple logo on the screen
function macIcon(accent) {
  return `<svg viewBox="0 0 120 100" xmlns="http://www.w3.org/2000/svg">
    <rect x="14" y="8" width="92" height="64" rx="5" fill="#EDEFF2" stroke="${accent}" stroke-width="3.5"/>
    <rect x="20" y="14" width="80" height="44" rx="1.5" fill="#D9DEE4"/>
    <path transform="translate(42.9 17.4) scale(1.5)" d="M16.4 12.9c0-2.1 1.7-3.1 1.8-3.2-1-1.4-2.5-1.6-3-1.6-1.3-.1-2.5.8-3.1.8-.6 0-1.6-.7-2.7-.7-1.4 0-2.6.8-3.3 2-1.4 2.5-.4 6.1 1 8.1.7 1 1.5 2.1 2.6 2 1-.1 1.4-.7 2.7-.7 1.2 0 1.6.7 2.7.6 1.1 0 1.8-1 2.5-2 .8-1.2 1.1-2.3 1.1-2.4-.1 0-2.2-.8-2.2-3.3zM14.2 6.4c.6-.7 1-1.7.9-2.7-.9.1-1.9.6-2.5 1.3-.5.6-1 1.6-.9 2.6 1 .1 1.9-.5 2.5-1.2z" fill="${accent}"/>
    <path d="M51 72h18l3 13H48z" fill="${accent}"/>
    <rect x="40" y="85" width="40" height="5" rx="2.5" fill="${accent}"/>
  </svg>`;
}

function surfaceIcon(accent) {
  return `<svg viewBox="0 0 110 100" xmlns="http://www.w3.org/2000/svg">
    <rect x="12" y="6" width="86" height="62" rx="5" fill="#EDEFF2" stroke="${accent}" stroke-width="3.5"/>
    <rect x="19" y="13" width="72" height="48" rx="1.5" fill="#D9DEE4"/>
    <path d="M30 74h50l12 18H18z" fill="none" stroke="${accent}" stroke-width="3.5" stroke-linejoin="round"/>
  </svg>`;
}

// Storage options: every capacity of each model (official Apple / Samsung / Lenovo specs)
const PRODUCTS = [
  {
    cat: "android", catLabel: "Tablet Android", brand: "Lenovo", brandCode: "L", brandColor: "var(--lenovo)",
    model: "Lenovo Tab", storages: ["64 GB", "128 GB"],
    photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/lenovo-tab_SpTV.webp",
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
    model: "Galaxy Tab A8", storages: ["32 GB", "64 GB", "128 GB"],
    photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/samsung-galaxy-tab-a8_SpTV.webp",
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
    model: "Galaxy Tab S9 Ultra", storages: ["256 GB", "512 GB", "1 TB"],
    storage: "256 GB",
    photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/samsung-galaxy-tab-s9-ultra_SpTV.webp",
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
    model: "iPad (5.ª generación)", storages: ["32 GB", "128 GB"],
    photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/apple-ipad-5-generacion_SpTV.webp",
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
    model: "iPad (6.ª generación)", storages: ["32 GB", "128 GB"],
    storage: "32 GB",
    photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/apple-ipad-6-generacion_SpTV.webp",
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
    model: "iPad (7.ª generación)", storages: ["32 GB", "128 GB"],
    photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/apple-ipad-7-generacion_SpTV.webp",
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
    model: "iPad (9.ª generación)", storages: ["64 GB", "256 GB"],
    storage: "64 GB",
    photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/apple-ipad-9-generacion_SpTV.webp",
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
    model: "iPad A16 (11.ª generación)", storages: ["128 GB", "256 GB", "512 GB"],
    photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/apple-ipad-a16-11-generacion_SpTV.webp",
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
    model: "iPad Air", storages: ["64 GB", "256 GB"],
    photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/apple-ipad-air_SpTV.webp",
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
    model: "iPad Air (M2)", storages: ["128 GB", "256 GB", "512 GB", "1 TB"],
    photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/apple-ipad-air-m2_SpTV.webp",
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
    model: "iPad Pro", storages: ["128 GB", "256 GB", "512 GB", "1 TB"],
    storage: "128 GB",
    photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/apple-ipad-pro_SpTV.webp",
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
    model: "iPad Pro (4.ª generación)", storages: ["128 GB", "256 GB", "512 GB", "1 TB"],
    photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/apple-ipad-pro-4-generacion_SpTV.webp",
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
    model: "iPad Pro", storages: ["128 GB", "256 GB", "512 GB", "1 TB"],
    storage: "256 GB",
    photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/apple-ipad-pro_SpTV.webp",
    icon: ipadIcon("#5B6470"),
    specs: [
      ["Categoría", "iPad"],
      ["Almacenamiento", "256 GB"],
      ["Pantalla", "11 ''"]
    ]
  }
];

// Order: iPhone (newest first), Galaxy, then other brands. Storage options from each brand's official store.
const PHONES = [
  {
    cat: "phone-apple", catLabel: "iPhone", brand: "Apple", brandCode: "A", brandColor: "var(--apple)",
    model: "iPhone 18 Pro", storages: ["256 GB", "512 GB", "1 TB", "2 TB"],
    photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/apple-iphone-18-pro_SpTV.webp",
    icon: phoneIcon("#5B6470"),
    specs: [
      ["Categoría", "iPhone"],
      ["Almacenamiento", "256 GB / 512 GB / 1 TB / 2 TB"],
      ["Pantalla", "6,3 ''"]
    ]
  },
  {
    cat: "phone-apple", catLabel: "iPhone", brand: "Apple", brandCode: "A", brandColor: "var(--apple)",
    model: "iPhone 17 Pro", storages: ["256 GB", "512 GB", "1 TB"],
    photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/apple-iphone-17-pro_SpTV.webp",
    icon: phoneIcon("#5B6470"),
    specs: [
      ["Categoría", "iPhone"],
      ["Almacenamiento", "256 GB / 512 GB / 1 TB"],
      ["Pantalla", "6,3 ''"]
    ]
  },
  {
    cat: "phone-apple", catLabel: "iPhone", brand: "Apple", brandCode: "A", brandColor: "var(--apple)",
    model: "iPhone 17", storages: ["256 GB", "512 GB"],
    photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/apple-iphone-17_SpTV.webp",
    icon: phoneIcon("#5B6470"),
    specs: [
      ["Categoría", "iPhone"],
      ["Almacenamiento", "256 GB / 512 GB"],
      ["Pantalla", "6,3 ''"]
    ]
  },
  {
    cat: "phone-apple", catLabel: "iPhone", brand: "Apple", brandCode: "A", brandColor: "var(--apple)",
    model: "iPhone 16 Pro", storages: ["128 GB", "256 GB", "512 GB", "1 TB"],
    photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/apple-iphone-16-pro_SpTV.webp",
    icon: phoneIcon("#5B6470"),
    specs: [
      ["Categoría", "iPhone"],
      ["Almacenamiento", "128 GB / 256 GB / 512 GB / 1 TB"],
      ["Pantalla", "6,3 ''"]
    ]
  },
  {
    cat: "phone-android", catLabel: "Móvil Android", brand: "Samsung", brandCode: "S", brandColor: "var(--samsung)",
    model: "Galaxy S26", storages: ["256 GB", "512 GB"],
    photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/samsung-galaxy-s26_SpTV.webp",
    icon: phoneIcon("#1428A0"),
    specs: [
      ["Categoría", "Móvil Android"],
      ["Almacenamiento", "256 GB / 512 GB"],
      ["Pantalla", "6,3 ''"]
    ]
  },
  {
    cat: "phone-android", catLabel: "Móvil Android", brand: "Samsung", brandCode: "S", brandColor: "var(--samsung)",
    model: "Galaxy S25 FE", storages: ["128 GB", "256 GB", "512 GB"],
    photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/samsung-galaxy-s25-fe_SpTV.webp",
    icon: phoneIcon("#1428A0"),
    specs: [
      ["Categoría", "Móvil Android"],
      ["Almacenamiento", "128 GB / 256 GB / 512 GB"],
      ["Pantalla", "6,7 ''"]
    ]
  },
  {
    cat: "phone-android", catLabel: "Móvil Android", brand: "Samsung", brandCode: "S", brandColor: "var(--samsung)",
    model: "Galaxy S24", storages: ["128 GB", "256 GB"],
    photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/samsung-galaxy-s24_SpTV.webp",
    icon: phoneIcon("#1428A0"),
    specs: [
      ["Categoría", "Móvil Android"],
      ["Almacenamiento", "128 GB / 256 GB"],
      ["Pantalla", "6,2 ''"]
    ]
  },
  {
    cat: "phone-android", catLabel: "Móvil Android", brand: "Xiaomi", brandCode: "X", brandColor: "#FF6900",
    model: "Redmi 15C", storages: ["128 GB", "256 GB"],
    photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/xiaomi-redmi-15c_SpTV.webp",
    icon: phoneIcon("#FF6900"),
    specs: [
      ["Categoría", "Móvil Android"],
      ["Almacenamiento", "128 GB / 256 GB"],
      ["Pantalla", "6,9 ''"]
    ]
  },
  {
    cat: "phone-android", catLabel: "Móvil Android", brand: "Xiaomi", brandCode: "X", brandColor: "#FF6900",
    model: "Redmi Note 14", storages: ["128 GB", "256 GB"],
    photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/xiaomi-redmi-note-14_SpTV.webp",
    icon: phoneIcon("#FF6900"),
    specs: [
      ["Categoría", "Móvil Android"],
      ["Almacenamiento", "128 GB / 256 GB"],
      ["Pantalla", "6,67 ''"]
    ]
  },
  {
    cat: "phone-android", catLabel: "Móvil Android", brand: "Xiaomi", brandCode: "X", brandColor: "#FF6900",
    model: "Redmi 10 5G", storages: ["64 GB", "128 GB"],
    photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/xiaomi-redmi-10-5g_SpTV.webp",
    icon: phoneIcon("#FF6900"),
    specs: [
      ["Categoría", "Móvil Android"],
      ["Almacenamiento", "64 GB / 128 GB"],
      ["Pantalla", "6,58 ''"]
    ]
  }
];

// Ordered from most to least expensive (approximate retail price)
const ACCESSORIES = [
{
    cat: "accessory", catLabel: "Accesorio", group: "iPad", brand: "Apple", brandCode: "A", brandColor: "var(--apple)",
    model: "Apple Pencil", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/apple-pencil_SpTV.webp",
    icon: accessoryIcon("#5B6470"),
    specs: [
      ["Categoría", "Accesorio · iPad"],
      ["Marca", "Apple"]
    ]
  },
{
    cat: "accessory", catLabel: "Accesorio", group: "Móvil/Cámara", brand: "Zhiyun", brandCode: "Z", brandColor: "#6B4FA0",
    model: "Smooth X Combo", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/zhiyun-smooth-x-combo_SpTV.webp",
    icon: accessoryIcon("#6B4FA0"),
    specs: [
      ["Categoría", "Accesorio · Móvil/Cámara"],
      ["Tipo", "Estabilizador combo para móvil"]
    ]
  },
{
    cat: "accessory", catLabel: "Accesorio", group: "iPad", brand: "Wacom", brandCode: "W", brandColor: "#0090C8",
    model: "Bamboo Fineline", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/wacom-bamboo-fineline_SpTV.webp",
    icon: accessoryIcon("#0090C8"),
    specs: [
      ["Categoría", "Accesorio · iPad"],
      ["Marca", "Wacom"]
    ]
  },
{
    cat: "accessory", catLabel: "Accesorio", group: "Móvil/Cámara", brand: "", brandCode: "", brandColor: "#5C6672",
    model: "Micrófono inalámbrico", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/microfono-inalambrico_SpTV.webp",
    icon: accessoryIcon("#5C6672"),
    specs: [
      ["Categoría", "Accesorio · Móvil/Cámara"]
    ]
  },
{
    cat: "accessory", catLabel: "Accesorio", group: "iPad", brand: "", brandCode: "", brandColor: "#5C6672",
    model: "Funda con teclado", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/funda-con-teclado_SpTV.webp",
    icon: accessoryIcon("#5C6672"),
    specs: [
      ["Categoría", "Accesorio · iPad"],
      ["Compatibilidad", "iPad 7.ª / 8.ª / 9.ª generación"]
    ]
  },
{
    cat: "accessory", catLabel: "Accesorio", group: "Móvil/Cámara", brand: "Apple", brandCode: "A", brandColor: "var(--apple)",
    model: "Adaptador USB-C a USB", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/apple-adaptador-usb-c-a-usb_SpTV.webp",
    icon: accessoryIcon("#5B6470"),
    specs: [
      ["Categoría", "Accesorio · Móvil/Cámara"],
      ["Marca", "Apple"]
    ]
  },
{
    cat: "accessory", catLabel: "Accesorio", group: "Móvil/Cámara", brand: "", brandCode: "", brandColor: "#5C6672",
    model: "Aro de luz", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/aro-de-luz_SpTV.webp",
    icon: accessoryIcon("#5C6672"),
    specs: [
      ["Categoría", "Accesorio · Móvil/Cámara"]
    ]
  },
{
    cat: "accessory", catLabel: "Accesorio", group: "iPad", brand: "", brandCode: "", brandColor: "#5C6672",
    model: "Funda Rugged / Correa", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/funda-rugged-con-correa_SpTV.webp",
    icon: accessoryIcon("#5C6672"),
    specs: [
      ["Categoría", "Accesorio · iPad"]
    ]
  },
{
    cat: "accessory", catLabel: "Accesorio", group: "Móvil/Cámara", brand: "", brandCode: "", brandColor: "#5C6672",
    model: "Power bank", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/power-bank_SpTV.webp",
    icon: accessoryIcon("#5C6672"),
    specs: [
      ["Categoría", "Accesorio · Móvil/Cámara"],
      ["Capacidad", "10000 mAh"],
      ["Conector", "USB-C"]
    ]
  },
{
    cat: "accessory", catLabel: "Accesorio", group: "Móvil/Cámara", brand: "Celly", brandCode: "C", brandColor: "#E4572E",
    model: "Trípode", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/celly-tripode_SpTV.webp",
    icon: accessoryIcon("#E4572E"),
    specs: [
      ["Categoría", "Accesorio · Móvil/Cámara"],
      ["Detalle", "360º / 19 cm"]
    ]
  }
];

const COMPUTERS = [
{
    cat: "computer", catLabel: "Portátil", type: "Portátil", brand: "HP", brandCode: "H", brandColor: "#0096D6",
    model: "HP Victus", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/hp-victus_SpTV.webp",
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
    cat: "computer", catLabel: "Portátil", type: "Portátil", brand: "HP", brandCode: "H", brandColor: "#0096D6",
    model: "HP ZBook", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/hp-zbook_SpTV.webp",
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
    cat: "computer", catLabel: "Portátil", type: "Portátil", brand: "Dell / HP / Lenovo", brandCode: "D", brandColor: "#5C6672",
    model: "Portátil 8 GB RAM", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/portatil-8-gb-ram_SpTV.webp",
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
    cat: "computer", catLabel: "Portátil", type: "Portátil", brand: "Dell / HP / Lenovo", brandCode: "D", brandColor: "#5C6672",
    model: "Portátil 16 GB RAM", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/portatil-16-gb-ram-intel-core-i5_SpTV.webp", key: "portatil-i5-16",
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
    cat: "computer", catLabel: "Portátil", type: "Portátil", brand: "Dell / HP / Lenovo", brandCode: "D", brandColor: "#5C6672",
    model: "Portátil 16 GB RAM", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/portatil-16-gb-ram-intel-core-i7_SpTV.webp", key: "portatil-i7-16",
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
    cat: "computer", catLabel: "Surface", type: "Surface", brand: "Microsoft", brandCode: "M", brandColor: "#00A4EF",
    model: "Surface Pro 7",
    photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/microsoft-surface-pro-7_SpTV.webp", cpu: "i5", storage: "128 GB", storages: ["128 GB", "256 GB", "512 GB", "1 TB"],
    icon: surfaceIcon("#00A4EF"),
    specs: [
      ["Categoría", "Surface (portátil 2 en 1)"],
      ["Marca", "Microsoft"],
      ["Procesador", "Intel Core i5"],
      ["RAM", "8 GB"],
      ["Almacenamiento", "128 GB"],
      ["Pantalla", "12,3 ''"]
    ]
  },
{
    cat: "computer", catLabel: "Surface", type: "Surface", brand: "Microsoft", brandCode: "M", brandColor: "#00A4EF",
    model: "Surface Pro 7",
    photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/microsoft-surface-pro-7_SpTV.webp", cpu: "i5", storage: "256 GB",
    icon: surfaceIcon("#00A4EF"),
    specs: [
      ["Categoría", "Surface (portátil 2 en 1)"],
      ["Marca", "Microsoft"],
      ["Procesador", "Intel Core i5"],
      ["RAM", "8 GB"],
      ["Almacenamiento", "256 GB"],
      ["Pantalla", "12,3 ''"]
    ]
  },
{
    cat: "computer", catLabel: "Surface", type: "Surface", brand: "Microsoft", brandCode: "M", brandColor: "#00A4EF",
    model: "Surface Pro 7",
    photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/microsoft-surface-pro-7_SpTV.webp", cpu: "i5", storage: "256 GB",
    icon: surfaceIcon("#00A4EF"),
    specs: [
      ["Categoría", "Surface (portátil 2 en 1)"],
      ["Marca", "Microsoft"],
      ["Procesador", "Intel Core i5"],
      ["RAM", "16 GB"],
      ["Almacenamiento", "256 GB"],
      ["Pantalla", "12,3 ''"]
    ]
  },
{
    cat: "computer", catLabel: "Surface", type: "Surface", brand: "Microsoft", brandCode: "M", brandColor: "#00A4EF",
    model: "Surface Pro 7",
    photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/microsoft-surface-pro-7_SpTV.webp", cpu: "i7", storage: "256 GB",
    icon: surfaceIcon("#00A4EF"),
    specs: [
      ["Categoría", "Surface (portátil 2 en 1)"],
      ["Marca", "Microsoft"],
      ["Procesador", "Intel Core i7"],
      ["RAM", "16 GB"],
      ["Almacenamiento", "256 GB"],
      ["Pantalla", "12,3 ''"]
    ]
  },
{
    cat: "computer", catLabel: "Surface", type: "Surface", brand: "Microsoft", brandCode: "M", brandColor: "#00A4EF",
    model: "Surface Pro 7",
    photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/microsoft-surface-pro-7_SpTV.webp", cpu: "i7", storage: "512 GB",
    icon: surfaceIcon("#00A4EF"),
    specs: [
      ["Categoría", "Surface (portátil 2 en 1)"],
      ["Marca", "Microsoft"],
      ["Procesador", "Intel Core i7"],
      ["RAM", "16 GB"],
      ["Almacenamiento", "512 GB"],
      ["Pantalla", "12,3 ''"]
    ]
  },
{
    cat: "computer", catLabel: "AIO", type: "AIO", brand: "Dell / HP / Lenovo", brandCode: "D", brandColor: "#5C6672",
    model: "AIO (Todo en uno) 16 GB RAM", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/aio-todo-en-uno-16-gb-ram_SpTV.webp",
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
    cat: "computer", catLabel: "CPU", type: "CPU", brand: "Dell / HP / Lenovo", brandCode: "D", brandColor: "#5C6672",
    model: "CPU 16 GB RAM", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/cpu-16-gb-ram_SpTV.webp",
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
    cat: "computer", catLabel: "CPU + Monitor", type: "CPU + Monitor", brand: "Dell / HP / Lenovo", brandCode: "D", brandColor: "#5C6672",
    model: "CPU + Monitor 16 GB RAM", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/cpu-monitor-16-gb-ram_SpTV.webp",
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
    model: "HP Workstation", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/hp-workstation_SpTV.webp",
    icon: desktopIcon("#0096D6"),
    specs: [
      ["Categoría", "Workstation"],
      ["Marca", "HP"],
      ["Modelos", "Z4 / Z6 / Z8"],
      ["Procesador", "Intel Xeon (según modelo)"],
      ["Nota", "Configuración a medida"]
    ]
  }
];

// Apple computers (data and photos: apple.com / support.apple.com)
const MACS = [
  {
    cat: "mac", catLabel: "MacBook Air", type: "MacBook Air", brand: "Apple", brandCode: "A", brandColor: "var(--apple)",
    model: "MacBook Air 13,3'' M1", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/apple-macbook-air-13-3-m1_SpTV.webp", storages: ["128 GB", "256 GB", "512 GB", "1 TB", "2 TB"],
    icon: laptopIcon("#5B6470"),
    specs: [
      ["Categoría", "MacBook Air"],
      ["Chip", "Apple M1 (8 CPU / 7 GPU)"],
      ["RAM", "16 GB"],
      ["Almacenamiento", "128 GB / 256 GB / 512 GB / 1 TB / 2 TB"],
      ["Pantalla", "13,3 ''"],
      ["Año", "2020"]
    ]
  },
  {
    cat: "mac", catLabel: "MacBook Air", type: "MacBook Air", brand: "Apple", brandCode: "A", brandColor: "var(--apple)",
    model: "MacBook Air 13,6'' M2", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/apple-macbook-air-13-6-m2_SpTV.webp", storages: ["256 GB", "512 GB", "1 TB", "2 TB"],
    icon: laptopIcon("#5B6470"),
    specs: [
      ["Categoría", "MacBook Air"],
      ["Chip", "Apple M2 (8 CPU / 8 GPU)"],
      ["RAM", "8 GB"],
      ["Almacenamiento", "256 GB / 512 GB / 1 TB / 2 TB"],
      ["Pantalla", "13,6 ''"],
      ["Año", "2022"]
    ]
  },
  {
    cat: "mac", catLabel: "MacBook Air", type: "MacBook Air", brand: "Apple", brandCode: "A", brandColor: "var(--apple)",
    model: "MacBook Air 13,6'' M4", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/apple-macbook-air-13-6-m4_SpTV.webp", storages: ["256 GB", "512 GB", "1 TB", "2 TB"],
    icon: laptopIcon("#5B6470"),
    specs: [
      ["Categoría", "MacBook Air"],
      ["Chip", "Apple M4 (10 CPU / 8 GPU)"],
      ["RAM", "16 GB"],
      ["Almacenamiento", "256 GB / 512 GB / 1 TB / 2 TB"],
      ["Pantalla", "13,6 ''"],
      ["Año", "2025"]
    ]
  },
  {
    cat: "mac", catLabel: "MacBook Pro", type: "MacBook Pro", brand: "Apple", brandCode: "A", brandColor: "var(--apple)",
    model: "MacBook Pro 13''", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/apple-macbook-pro-13_SpTV.webp", storages: ["256 GB", "512 GB", "1 TB", "2 TB"],
    icon: laptopIcon("#5B6470"),
    specs: [
      ["Categoría", "MacBook Pro"],
      ["Chip", "Apple M2 (8 CPU / 10 GPU)"],
      ["Almacenamiento", "256 GB / 512 GB / 1 TB / 2 TB"],
      ["Pantalla", "13,3 ''"],
      ["Año", "2022"]
    ]
  },
  {
    cat: "mac", catLabel: "MacBook Pro", type: "MacBook Pro", brand: "Apple", brandCode: "A", brandColor: "var(--apple)",
    model: "MacBook Pro 14'' M1 Pro", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/apple-macbook-pro-14-m1-pro_SpTV.webp", storages: ["512 GB", "1 TB", "2 TB", "4 TB", "8 TB"],
    icon: laptopIcon("#5B6470"),
    specs: [
      ["Categoría", "MacBook Pro"],
      ["Chip", "Apple M1 Pro"],
      ["RAM", "16 GB"],
      ["Almacenamiento", "512 GB / 1 TB / 2 TB / 4 TB / 8 TB"],
      ["Pantalla", "14,2 ''"],
      ["Año", "2021"]
    ]
  },
  {
    cat: "mac", catLabel: "MacBook Pro", type: "MacBook Pro", brand: "Apple", brandCode: "A", brandColor: "var(--apple)",
    model: "MacBook Pro 16''", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/apple-macbook-pro-16_SpTV.webp", storages: ["1 TB", "2 TB", "4 TB", "8 TB"],
    icon: laptopIcon("#5B6470"),
    specs: [
      ["Categoría", "MacBook Pro"],
      ["Procesador", "Intel Core i9"],
      ["RAM", "64 GB"],
      ["Almacenamiento", "1 TB / 2 TB / 4 TB / 8 TB"],
      ["Pantalla", "16 ''"],
      ["Año", "2019"]
    ]
  },
  {
    cat: "mac", catLabel: "iMac", type: "iMac", brand: "Apple", brandCode: "A", brandColor: "var(--apple)",
    model: "iMac 24''", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/apple-imac-24_SpTV.webp", storages: ["256 GB", "512 GB", "1 TB", "2 TB"],
    icon: desktopIcon("#5B6470"),
    specs: [
      ["Categoría", "iMac"],
      ["Chip", "Apple M4"],
      ["Almacenamiento", "256 GB / 512 GB / 1 TB / 2 TB"],
      ["Pantalla", "24 ''"]
    ]
  },
  {
    cat: "mac", catLabel: "Mac mini", type: "Mac mini", brand: "Apple", brandCode: "A", brandColor: "var(--apple)",
    model: "Mac mini", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/apple-mac-mini_SpTV.webp", storages: ["256 GB", "512 GB", "1 TB", "2 TB", "4 TB", "8 TB"],
    icon: desktopIcon("#5B6470"),
    specs: [
      ["Categoría", "Mac mini"],
      ["Chip", "Apple M6 / M5 Pro"],
      ["Almacenamiento", "256 GB / 512 GB / 1 TB / 2 TB / 4 TB / 8 TB"]
    ]
  },
  {
    cat: "mac", catLabel: "Mac Studio", type: "Mac Studio", brand: "Apple", brandCode: "A", brandColor: "var(--apple)",
    model: "Mac Studio", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/apple-mac-studio_SpTV.webp", storages: ["512 GB", "1 TB", "2 TB", "4 TB", "8 TB", "16 TB"],
    icon: desktopIcon("#5B6470"),
    specs: [
      ["Categoría", "Mac Studio"],
      ["Chip", "Apple M5 Max / M5 Ultra"],
      ["Almacenamiento", "512 GB / 1 TB / 2 TB / 4 TB / 8 TB / 16 TB"]
    ]
  }
];

const MONITORS = [
  {
    cat: "monitor", catLabel: "Monitor LED", type: "LED", group: "24''", brand: "Samsung / HP", brandCode: "S", brandColor: "var(--samsung)",
    model: "Monitor LED 24''", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/monitor-led-24_SpTV.webp",
    icon: monitorIcon("#1428A0"),
    specs: [
      ["Categoría", "Monitor LED"],
      ["Marcas disponibles", "Samsung / HP"],
      ["Pantalla", "24'' LED"]
    ]
  },
  {
    cat: "monitor", catLabel: "Monitor LED", type: "LED", group: "27''", brand: "LG / Nilox", brandCode: "L", brandColor: "#A50034",
    model: "Monitor LED 27''", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/monitor-led-27_SpTV.webp",
    icon: monitorIcon("#A50034"),
    specs: [
      ["Categoría", "Monitor LED"],
      ["Marcas disponibles", "LG / Nilox"],
      ["Pantalla", "27'' LED"]
    ]
  },
  {
    cat: "monitor", catLabel: "Monitor 4K", type: "4K", group: "27''", brand: "Samsung", brandCode: "S", brandColor: "var(--samsung)",
    model: "Samsung Odyssey 27''", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/samsung-odyssey-27_SpTV.webp",
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
    model: "Monitor de estudio JVC 24''", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/jvc-monitor-de-estudio-24_SpTV.webp",
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
    model: "Monitor LG 65'' 4K", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/lg-monitor-65-4k_SpTV.webp",
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
      // One card per device: networks and data plans are shown in the blue boxes
      CONNECTIVITY.push({
        cat: "connectivity", catLabel: device, type: device, group: net, storage: plan.key, storageLabel: "Datos",
        model: device === "MiFi" ? "MiFi portátil" : "Router con SIM",
        photo: device === "MiFi" ? "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/mifi-portatil_SpTV.webp" : "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/router-con-sim_SpTV.webp",
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
  model: "Punto de acceso inalámbrico Ubiquiti", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/ubiquiti-punto-de-acceso_SpTV.webp",
  icon: accessPointIcon("#0559C9"),
  specs: [
    ["Categoría", "Punto de acceso inalámbrico"],
    ["Marca", "Ubiquiti"],
    ["Incluye", "Instalación"]
  ]
});

const VIDEOCONF = [
  {
    cat: "videoconf", catLabel: "Videoconferencia", type: "Videoconferencia", brand: "Jabra", brandCode: "J", brandColor: "#1A1A1A",
    model: "Jabra PanaCast 50", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/jabra-panacast-50_SpTV.webp",
    icon: videoconfIcon("#1A1A1A"),
    info: [["screen", "Vídeo", "4K panorámico 180°", 1], ["signal", "Audio", "8 micros · 4 altavoces", 1], ["port", "Conexión", "USB-C · USB-A · Ethernet"]],
    specs: [["Categoría", "Barra de videoconferencia para salas"], ["Marca", "Jabra"], ["Cámara", "3 cámaras de 13 MP · 4K panorámico (3840 × 1080) · campo de visión 180°"], ["Audio", "8 micrófonos con beamforming · 4 altavoces estéreo"], ["Funciones", "Seguimiento de quien habla, zoom inteligente, vista de galería y cámara de pizarra"], ["Compatibilidad", "Microsoft Teams Rooms y Zoom Rooms certificados · salas medianas (hasta 4,5 × 6 m)"], ["Conexión", "USB-C · USB-A · Ethernet RJ45"]]
  },
  {
    cat: "videoconf", catLabel: "Intercom", type: "Intercom", brand: "Hollyland", brandCode: "H", brandColor: "#E60012",
    model: "Hollyland Solidcom C1 Pro", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/hollyland-solidcom-c1-pro_SpTV.webp",
    icon: videoconfIcon("#E60012"),
    info: [["tag", "Sets", "De 2 a 8 cascos", 1], ["signal", "Alcance", "350 m", 1], ["speed", "Batería", "Más de 10 h por casco"]],
    specs: [["Categoría", "Intercom inalámbrico (cascos)"], ["Marca", "Hollyland"], ["Sets disponibles", "2, 3, 4, 6 u 8 cascos (1 principal + remotos)"], ["Conversación", "Full dúplex: todos hablan a la vez, sin estación base · botón TALK / MUTE"], ["Audio", "Doble micrófono con cancelación de ruido (ENC) y de eco"], ["Alcance", "Hasta 350 m con visión directa · DECT 1,9 GHz"], ["Batería", "Más de 10 h (casco remoto) · más de 5 h (casco principal) · carga en unas 2,5 h"], ["Peso", "Unos 170 g por casco"]]
  },
  {
    cat: "videoconf", catLabel: "Walkies", type: "Walkies", brand: "Motorola", brandCode: "M", brandColor: "#005EB8",
    model: "Motorola DP4400", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/motorola-dp4400_SpTV.webp",
    icon: videoconfIcon("#005EB8"),
    info: [["signal", "Tecnología", "Digital DMR + analógico", 1], ["tag", "Canales", "64", 1], ["speed", "Batería", "Hasta 28 h · IP68"]],
    specs: [["Categoría", "Walkie-talkie profesional (MOTOTRBO)"], ["Marca", "Motorola Solutions"], ["Tecnología", "Digital DMR y analógico"], ["Canales", "64 (sin teclado ni pantalla)"], ["Potencia", "VHF 1 / 5 W · UHF 1 / 4 W"], ["Batería", "Hasta 28 h"], ["Resistencia", "IP68 (sumergible) y estándar militar"], ["Otros", "Botón de emergencia y cancelación de ruido"]]
  }
];

const PRINTERS = [
  {
    cat: "printer", catLabel: "B/N|Color", type: "B/N|Color", group: "A4|A3", brand: "", brandCode: "", brandColor: "#5C6672",
    model: "Impresora multifunción", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/impresora-multifuncion_SpTV.webp",
    icon: printerIcon("#5C6672"),
    info: [["tag", "Formato", "A4 · A3", 1], ["screen", "Impresión", "B/N · Color", 1], ["capacity", "Tarifa", "Coste por página"]],
    specs: [["Categoría", "Impresora multifunción láser"], ["Formato", "A4 y A3"], ["Impresión", "Blanco y negro o color"], ["Funciones", "Imprimir, copiar, escanear (a correo, carpeta o USB) y fax opcional"], ["Otros", "Doble cara automática, alimentador de documentos, pantalla táctil y acceso con PIN"], ["Conexión", "Red (Ethernet) · Wi-Fi opcional · impresión desde móvil"], ["Tarifa", "Coste por página impresa (consúltanos)"]]
  }
];

const CABINS = [
  {
    cat: "cabin", catLabel: "Cabina de discos", type: "Cabina de discos", brand: "Areca", brandCode: "A", brandColor: "#C8102E",
    model: "Areca ARC-8050T3U", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/areca-arc-8050t3u_SpTV.webp",
    icon: cabinIcon("#C8102E"),
    info: [["bays", "Bahías", "4 · 6 · 8", 1], ["raid", "RAID", "0, 1, 5, 6, 10", 1], ["port", "Conexión", "Thunderbolt 3 · USB-C"]],
    specs: [["Categoría", "Cabina de discos (DAS) con RAID por hardware"], ["Marca", "Areca"], ["Modelos", "ARC-8050T3U-4 / -6 / -8"], ["Bahías", "4 / 6 / 8 · discos 3,5'' / 2,5'' SAS o SATA"], ["Conexión", "2 × Thunderbolt 3 (40 Gb/s, USB-C) · en USB-C normal funciona como USB 3.2 Gen 2 (10 Gb/s) · DisplayPort"], ["RAID", "0, 1, 3, 5, 6, 10, JBOD (30 / 50 / 60 desde 6 bahías)"]]
  },
  {
    cat: "cabin", catLabel: "Cabina de discos", type: "Cabina de discos", brand: "Stardom", brandCode: "S", brandColor: "#1F6FB2",
    model: "Stardom SOHORAID", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/stardom-sohoraid_SpTV.webp",
    icon: cabinIcon("#1F6FB2"),
    info: [["bays", "Bahías", "Desde 2", 1], ["raid", "RAID", "0, 1, JBOD", 1], ["port", "Conexión", "USB-C (USB 3.2 Gen 2)"]],
    specs: [["Categoría", "Cabina de discos (DAS)"], ["Marca", "Stardom (RAIDON)"], ["Modelos", "ST2-B31A (2 bahías) · ST4R-B32 / ST4-B32 (4 bahías)"], ["Bahías", "Desde 2 · discos 3,5'' / 2,5'' SATA, extraíbles en caliente"], ["Conexión", "USB-C · USB 3.2 Gen 2 (10 Gb/s) en 2 bahías, Gen 2x2 (20 Gb/s) en 4 bahías · compatible Thunderbolt 3/4"], ["RAID", "0, 1, JBOD, BIG"]]
  },
  {
    cat: "cabin", catLabel: "Cabina de discos", type: "Cabina de discos", brand: "TerraMaster", brandCode: "T", brandColor: "#E95513",
    model: "TerraMaster D5 / D8", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/terramaster-d5-d8_SpTV.webp",
    icon: cabinIcon("#E95513"),
    info: [["bays", "Bahías", "5 · 8", 1], ["raid", "RAID", "0, 1, 5, 10", 1], ["port", "Conexión", "Thunderbolt 3 (40 Gb/s)"]],
    specs: [["Categoría", "Cabina de discos (DAS) con RAID por hardware"], ["Marca", "TerraMaster"], ["Modelos", "D5 Thunderbolt 3 · D8-332"], ["Bahías", "5 / 8 · discos 3,5'' SATA o SSD 2,5''"], ["Conexión", "2 × Thunderbolt 3 (40 Gb/s), encadenable · solo dispositivos Thunderbolt 3/4"], ["Velocidad", "Hasta 1035 MB/s (D5) · hasta 1600 MB/s (D8-332)"], ["RAID", "0, 1, 5, 10, JBOD, Single"], ["Capacidad máxima", "120 TB (D5) · 160 TB (D8-332)"]]
  },
  {
    cat: "cabin", catLabel: "NAS", type: "NAS", brand: "QNAP", brandCode: "Q", brandColor: "#2F6BB3",
    model: "QNAP TS-464", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/qnap-ts-464_SpTV.webp",
    icon: cabinIcon("#2F6BB3"),
    info: [["bays", "Bahías", "4 + 2 M.2", 1], ["raid", "RAID", "0, 1, 5, 6, 10", 1], ["port", "Conexión", "2 × 2,5 GbE (10 GbE opcional)"]],
    specs: [["Categoría", "NAS de sobremesa"], ["Marca", "QNAP"], ["Bahías", "4 × 3,5'' / 2,5'' SATA · 2 × M.2 NVMe (caché SSD)"], ["Procesador", "Intel Celeron N5095 (4 núcleos, hasta 2,9 GHz)"], ["RAM", "8 GB DDR4 (máx. 16 GB)"], ["Conexión", "2 × 2,5 GbE · 10 GbE opcional (PCIe) · 2 × USB 3.2 Gen 2 · HDMI"], ["RAID", "0, 1, 5, 6, 10, JBOD, Single"]]
  },
  {
    cat: "cabin", catLabel: "NAS", type: "NAS", brand: "QNAP", brandCode: "Q", brandColor: "#2F6BB3",
    model: "QNAP TS-1264U-RP", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/qnap-ts-1264u-rp_SpTV.webp",
    icon: cabinIcon("#2F6BB3"),
    info: [["bays", "Bahías", "12 · rack 2U", 1], ["raid", "RAID", "0–60", 1], ["port", "Conexión", "2 × 2,5 GbE (10 GbE opcional)"]],
    specs: [["Categoría", "NAS de rack 2U"], ["Marca", "QNAP"], ["Bahías", "12 × 3,5'' / 2,5'' SATA, extraíbles en caliente"], ["Procesador", "Intel Celeron N5095 (4 núcleos, hasta 2,9 GHz)"], ["RAM", "8 GB DDR4 (máx. 16 GB)"], ["Conexión", "2 × 2,5 GbE · 10 GbE opcional (PCIe) · 2 × USB 3.2 Gen 2"], ["Alimentación", "Doble fuente redundante de 300 W"], ["RAID", "0, 1, 5, 6, 10, 50, 60, JBOD, Single"]]
  },
  {
    cat: "cabin", catLabel: "NAS", type: "NAS", brand: "Synology", brandCode: "S", brandColor: "#4B4B4B",
    model: "Synology DiskStation DS1825+", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/synology-diskstation-ds1825-plus_SpTV.webp",
    icon: cabinIcon("#4B4B4B"),
    info: [["bays", "Bahías", "8 (hasta 18)", 1], ["raid", "RAID", "SHR, 0, 1, 5, 6, 10", 1], ["port", "Conexión", "2 × 2,5 GbE (10/25 GbE opcional)"]],
    specs: [["Categoría", "NAS de sobremesa"], ["Marca", "Synology"], ["Bahías", "8 × 3,5'' / 2,5'' SATA (hasta 18 con 2 × DX525) · 2 × M.2 NVMe"], ["Procesador", "AMD Ryzen V1500B (4 núcleos, 2,2 GHz)"], ["RAM", "8 GB DDR4 ECC (máx. 32 GB)"], ["Conexión", "2 × 2,5 GbE · 10 / 25 GbE opcional (PCIe)"], ["Velocidad", "Hasta 2239 MB/s lectura · 1573 MB/s escritura"], ["RAID", "SHR, Basic, JBOD, 0, 1, 5, 6, 10"]]
  }
];

// Each disk model (one card per model). Variants of the same model are listed together.
// Data taken from each model's page on sandisk.com.
const SANDISK = { brand: "SanDisk", brandCode: "S", brandColor: "#ED1C24" };
const SANDISK_PRO = { brand: "SanDisk Professional", brandCode: "P", brandColor: "#1D1D1F" };
const WD_BLACK = { brand: "WD_BLACK", brandCode: "W", brandColor: "#111111" };
const WD = { brand: "WD", brandCode: "W", brandColor: "#0067B4" };

const STORAGE = [
  // --- SanDisk ---
  { ...SANDISK, model: "SanDisk Extreme PRO Portable SSD (V3)", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/sandisk-extreme-pro-portable-ssd-v3_SpTV.webp", catLabel: "SSD externo portátil",
    capacities: ["2 TB", "4 TB", "8 TB"], speed: "Hasta 4000 MB/s", port: "USB-C" },
  { ...SANDISK, model: "SanDisk Extreme PRO con USB4", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/sandisk-extreme-pro-usb4_SpTV.webp", catLabel: "SSD externo portátil",
    capacities: ["2 TB", "4 TB"], speed: "Hasta 3800 MB/s", port: "USB4 (compatible Thunderbolt 4)" },
  { ...SANDISK, model: "SanDisk Extreme PRO Portable SSD", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/sandisk-extreme-pro-portable-ssd_SpTV.webp", catLabel: "SSD externo portátil",
    capacities: ["1 TB", "2 TB", "4 TB"], speed: "Hasta 2000 MB/s", port: "USB-C (USB 3.2 Gen 2x2)" },
  { ...SANDISK, model: "SanDisk Extreme Portable SSD", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/sandisk-extreme-portable-ssd_SpTV.webp", catLabel: "SSD externo portátil",
    capacities: ["500 GB", "1 TB", "2 TB", "4 TB", "8 TB"], speed: "Hasta 1050 MB/s", port: "USB-C (USB 3.2 Gen 2)" },
  { ...SANDISK, model: "SanDisk Creator Pro Portable SSD", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/sandisk-creator-pro-portable-ssd_SpTV.webp", catLabel: "SSD externo portátil · Creator",
    capacities: ["1 TB", "2 TB", "4 TB"], speed: "Hasta 2000 MB/s", port: "USB-C (USB 3.2 Gen 2x2)" },
  { ...SANDISK, model: "SanDisk Portable SSD (V3)", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/sandisk-portable-ssd-v3_SpTV.webp", catLabel: "SSD externo portátil",
    capacities: ["500 GB", "1 TB", "2 TB"], speed: "Hasta 1000 MB/s", port: "USB-C (USB 3.2 Gen 2)" },
  { ...SANDISK, model: "SanDisk Portable SSD (firmware actualizado)", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/sandisk-portable-ssd-firmware-actualizado_SpTV.webp", catLabel: "SSD externo portátil",
    capacities: ["1 TB", "2 TB"], speed: "Hasta 800 MB/s", port: "USB-C (USB 3.2 Gen 2)" },
  { ...SANDISK, model: "SanDisk Portable Drive", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/sandisk-portable-drive_SpTV.webp", catLabel: "SSD externo portátil",
    capacities: ["500 GB", "1 TB"], speed: "Hasta 600 MB/s", port: "USB-C (USB 3.2 Gen 2)" },
  { ...SANDISK, model: "SanDisk Phone SSD", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/sandisk-phone-ssd_SpTV.webp", catLabel: "SSD para móvil · MagSafe",
    capacities: ["1 TB", "2 TB"], speed: "Hasta 1000 MB/s", port: "USB-C · MagSafe" },
  { ...SANDISK, model: "SanDisk Creator Phone SSD", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/sandisk-creator-phone-ssd_SpTV.webp", catLabel: "SSD para móvil · MagSafe · Creator",
    capacities: ["1 TB", "2 TB"], speed: "Hasta 1000 MB/s", port: "USB-C (USB 3.2 Gen 2) · MagSafe" },
  { ...SANDISK, model: "SanDisk Desk Drive", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/sandisk-desk-drive_SpTV.webp", catLabel: "SSD de escritorio",
    capacities: ["4 TB", "8 TB"], speed: "Hasta 1000 MB/s", port: "USB-C (USB 3.2 Gen 2)" },
  { ...SANDISK, model: "SanDisk Creator Desk Drive", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/sandisk-creator-desk-drive_SpTV.webp", catLabel: "SSD de escritorio · Creator",
    capacities: ["4 TB", "8 TB"], speed: "Hasta 1000 MB/s", port: "USB 3.2 Gen 2" },

  // --- SanDisk Professional ---
  { ...SANDISK_PRO, model: "SanDisk Professional PRO-G40 SSD", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/sandisk-professional-pro-g40-ssd_SpTV.webp", catLabel: "SSD portátil · exFAT / APFS",
    capacities: ["1 TB", "2 TB", "4 TB"], speed: "Hasta 2700–3000 MB/s", port: "Thunderbolt 3 · USB-C (USB 3.2 Gen 2)" },
  { ...SANDISK_PRO, model: "PRO-BLADE SSD Mag", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/sandisk-professional-pro-blade-ssd-mag_SpTV.webp", catLabel: "Módulo SSD · ecosistema PRO-BLADE",
    capacities: ["1 TB", "2 TB", "4 TB"], speed: "Hasta 2000 MB/s (TRANSPORT) · 3000 MB/s (STATION)", port: "PRO-BLADE TRANSPORT / STATION" },
  { ...SANDISK_PRO, model: "PRO-BLADE TRANSPORT", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/sandisk-professional-pro-blade-transport_SpTV.webp", catLabel: "Carcasa portátil para PRO-BLADE SSD Mag",
    capacities: ["Vacía", "1 TB", "2 TB", "4 TB"], speed: "Hasta 2000 MB/s", port: "USB-C" },
  { ...SANDISK_PRO, model: "G-RAID SHUTTLE SSD", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/sandisk-professional-g-raid-shuttle-ssd_SpTV.webp", catLabel: "RAID SSD transportable",
    capacities: ["16 TB", "32 TB"], speed: "Hasta 2800 MB/s", port: "Thunderbolt 3" },

  // --- WD_BLACK ---
  { ...WD_BLACK, model: "WD_BLACK P50 Game Drive SSD", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/wd-black-p50-game-drive-ssd_SpTV.webp", catLabel: "SSD portátil para gaming",
    capacities: ["500 GB", "1 TB", "2 TB", "4 TB"], speed: "Hasta 2000 MB/s", port: "USB-C (USB 3.2 Gen 2x2)" },
  { ...WD_BLACK, model: "WD_BLACK P40 Game Drive SSD", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/wd-black-p40-game-drive-ssd_SpTV.webp", catLabel: "SSD portátil para gaming",
    capacities: ["1 TB", "2 TB"], speed: "Hasta 2000 MB/s", port: "USB-C (USB 3.2 Gen 2x2)" },
  { ...WD_BLACK, model: "WD_BLACK D30 Game Drive SSD", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/wd-black-d30-game-drive-ssd_SpTV.webp", catLabel: "SSD para consola",
    capacities: ["2 TB"], speed: "Hasta 900 MB/s", port: "USB-C (USB 3.2 Gen 2)" },
  { ...WD_BLACK, model: "WD_BLACK D50 Game Dock NVMe SSD", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/wd-black-d50-game-dock-nvme-ssd_SpTV.webp", catLabel: "Dock con SSD NVMe",
    capacities: ["1 TB", "2 TB"], speed: "Hasta 3000 MB/s", port: "Thunderbolt 3" },

  // --- WD ---
  { ...WD, model: "WD Elements SE SSD", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/wd-elements-se-ssd_SpTV.webp", catLabel: "SSD externo portátil",
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
    const media = d.photo ? `<img src="${d.photo}" alt="${d.model}" loading="lazy" decoding="async">` : driveIcon("#2B79C2");
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
const sizeInGB = v => /ilimitad/i.test(v) ? Infinity : parseFloat(String(v).replace(",", ".")) * (/TB/i.test(v) ? 1000 : 1) || 0;

function groupByModel(items) {
  const groups = new Map();
  items.forEach(p => {
    const key = (p.brand || "") + "|" + p.model + "|" + (p.key || "");
    if (!groups.has(key)) groups.set(key, []);
    groups.get(key).push(p);
  });
  return [...groups.values()].map(variants => {
    const first = variants[0];
    const storages = [...new Set(variants.flatMap(v => v.storages || [v.storage || (v.specs.find(([l]) => l === "Almacenamiento") || [])[1]]).filter(Boolean))]
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
    if (storages.length) {
      const row = specs.find(([l]) => l === "Almacenamiento");
      if (row) row[1] = storages.join(" / ");
      else specs.splice(1, 0, [first.storageLabel || "Almacenamiento", storages.join(" / ")]);
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
  // Phones and tablets: storage options + screen size
  device: p => {
    const boxes = [CARD_INFO.storage(p)];
    const screen = specOf(p, "Pantalla").replace(/\s*''$/, "''");
    if (screen) boxes.push({ icon: STORAGE_ICONS.screen, title: "Pantalla", text: screen });
    return boxes;
  },
  // Computers and Macs: screen inches and processor (small boxes), then storage options
  computer: p => {
    const boxes = [];
    const screen = specOf(p, "Pantalla").replace(/\s*''$/, "''");
    if (screen) boxes.push({ small: true, icon: STORAGE_ICONS.screen, title: "Pantalla", text: screen });
    const cpu = (specOf(p, "Procesador") || specOf(p, "Chip"))
      .replace(/\s*\(.*?\)/g, "").replace(/Intel Core (i\d) \/ Intel Core (i\d)/, "Intel Core $1 / $2");
    boxes.push({ small: !!screen, icon: STORAGE_ICONS.cpu, title: "Procesador", text: cpu || "A medida" });
    boxes.push({ icon: STORAGE_ICONS.capacity, title: "Almacenamiento", text: p.storages.length ? p.storages.join(" · ") : "A medida" });
    return boxes;
  },
  monitor: p => ({ icon: STORAGE_ICONS.screen, title: "Pantalla", text: [specOf(p, "Pantalla"), specOf(p, "Resolución")].filter(Boolean).join(" · ") }),
  // MiFi and routers: networks (speed) and data plans; access point: what it includes
  connectivity: p => p.group ? [
    { small: true, icon: STORAGE_ICONS.signal, title: "Velocidad", text: p.group.split("|").join(" · ") },
    { small: true, icon: STORAGE_ICONS.capacity, title: "Datos", text: p.storages.join(" · ") }
  ] : { icon: STORAGE_ICONS.signal, title: "Conexión", text: `Wi-Fi · Incluye ${specOf(p, "Incluye").toLowerCase()}` },
  // Products that list their own boxes: [icon, title, text, small?]
  custom: p => p.info.map(([icon, title, text, small]) => ({ icon: STORAGE_ICONS[icon], title, text, small: !!small })),
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
    const boxes = Array.isArray(box) ? box : [box];
    card.innerHTML = `
      <div class="storage-photo">${media}</div>
      <div class="storage-info">
        ${p.brand ? `<div class="brand-line">${badgeMarkup(p)}</div>` : ""}
        <h3>${p.model}</h3>
        <div class="storage-icons">
          ${boxes.map(b => `<div class="storage-icon ${b.small ? "storage-icon-small" : "storage-icon-wide"}" title="${b.title}">${b.icon}<span>${b.text}</span></div>`).join("")}
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
    <button class="primary-btn panel-request" id="panelRequest">Solicitar este material</button>
  `;

  scrim.classList.add("open");
  panel.classList.add("open");
  shadow.getElementById("closeBtn").addEventListener("click", closePanel);
  const cpu = p.cat === "computer" && p.variants.length === 1 ? specOf(p, "Procesador") : "";
  const variants = [cpu, p.storages && p.storages.length > 1 ? p.storages.join(" / ") : ""].filter(Boolean).join(", ");
  shadow.getElementById("panelRequest").addEventListener("click", () => {
    closePanel();
    openRentFor(p.model + (variants ? ` (${variants})` : ""));
  });
}

function closePanel() {
  scrim.classList.remove("open");
  panel.classList.remove("open");
}

scrim.addEventListener("click", closePanel);
document.addEventListener("keydown", e => {
  if (e.key === "Escape") closePanel();
});

// Tablets: iPad Pro, iPad Air, iPad, then Samsung and Lenovo (newest first inside each group)
const TABLET_ORDER = [
  "iPad Pro", "iPad Pro (4.ª generación)",
  "iPad Air (M2)", "iPad Air",
  "iPad A16 (11.ª generación)", "iPad (9.ª generación)", "iPad (7.ª generación)", "iPad (6.ª generación)", "iPad (5.ª generación)",
  "Galaxy Tab S9 Ultra", "Galaxy Tab A8",
  "Lenovo Tab"
];
const rankIn = list => p => { const i = list.indexOf(p.model); return i === -1 ? list.length : i; };
renderModelCards([...PRODUCTS].sort((a, b) => rankIn(TABLET_ORDER)(a) - rankIn(TABLET_ORDER)(b)), shadow.getElementById("grid"), CARD_INFO.device);
renderModelCards(PHONES, shadow.getElementById("gridPhones"), CARD_INFO.device);
renderModelCards(ACCESSORIES, shadow.getElementById("gridAccessories"), CARD_INFO.accessory);
renderModelCards(COMPUTERS, shadow.getElementById("gridComputers"), CARD_INFO.computer);
renderModelCards(MACS, shadow.getElementById("gridMac"), CARD_INFO.computer);
renderModelCards(MONITORS, shadow.getElementById("gridMonitors"), CARD_INFO.monitor);
renderModelCards(CONNECTIVITY, shadow.getElementById("gridConnectivity"), CARD_INFO.connectivity);
renderStorage(STORAGE, shadow.getElementById("gridStorage"));
setupStorageFilters();
renderModelCards(CABINS, shadow.getElementById("gridCabins"), CARD_INFO.custom);
renderModelCards(VIDEOCONF, shadow.getElementById("gridVideoconf"), CARD_INFO.custom);
renderModelCards(PRINTERS, shadow.getElementById("gridPrinters"), CARD_INFO.custom);

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
shadow.getElementById("macIconLarge").innerHTML = macIcon("#2B79C2");
shadow.getElementById("monitorIconLarge").innerHTML = monitorIcon("#2B79C2");
shadow.getElementById("connectivityIconLarge").innerHTML = routerIcon("#2B79C2");
shadow.getElementById("storageIconLarge").innerHTML = driveIcon("#2B79C2");
shadow.getElementById("cabinIconLarge").innerHTML = cabinIcon("#2B79C2");
shadow.getElementById("videoconfIconLarge").innerHTML = videoconfIcon("#2B79C2");
shadow.getElementById("printerIconLarge").innerHTML = printerIcon("#2B79C2");

const viewLanding = shadow.getElementById("viewLanding");
const views = {
  tablets: shadow.getElementById("viewTablets"),
  phones: shadow.getElementById("viewPhones"),
  accessories: shadow.getElementById("viewAccessories"),
  computers: shadow.getElementById("viewComputers"),
  mac: shadow.getElementById("viewMac"),
  monitors: shadow.getElementById("viewMonitors"),
  connectivity: shadow.getElementById("viewConnectivity"),
  storage: shadow.getElementById("viewStorage"),
  cabins: shadow.getElementById("viewCabins"),
  videoconf: shadow.getElementById("viewVideoconf"),
  printers: shadow.getElementById("viewPrinters")
};

// Name shown at the top of each category
const CATEGORY_INFO = {
  tablets: "Tablets",
  phones: "Móviles",
  accessories: "Accesorios",
  computers: "Ordenadores",
  mac: "Mac",
  monitors: "Monitores / TV",
  connectivity: "Conectividad",
  storage: "Almacenamiento",
  cabins: "Cabinas",
  videoconf: "Videoconferencia PRO",
  printers: "Impresoras"
};
const HEADER_DEFAULT = ["Catálogo de alquiler", "Soporte TV", "Elige una categoría para ver los productos disponibles para alquiler."];

function setCatalogHeader(key) {
  const info = key && CATEGORY_INFO[key];
  const featured = shadow.getElementById("destacados");
  if (featured) featured.hidden = !!info;
  shadow.getElementById("catalogo").classList.toggle("in-category", !!info);
  shadow.getElementById("catEyebrow").hidden = !!info;
  shadow.getElementById("catDesc").hidden = !!info;
  shadow.getElementById("catTitle").textContent = info || HEADER_DEFAULT[1];
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
}

function getScrollY() {
  return Math.max(0, -catRoot.getBoundingClientRect().top);
}

function showLanding() {
  setCatalogHeader(null);
  Object.values(views).forEach(v => v.hidden = true);
  viewLanding.hidden = false;
}

// --- Routing: each category has its own address (#ordenadores, #tablets...) ---
const ROUTES = {
  tablets: "tablets",
  moviles: "phones",
  accesorios: "accessories",
  ordenadores: "computers",
  mac: "mac",
  monitores: "monitors",
  conectividad: "connectivity",
  almacenamiento: "storage",
  cabinas: "cabins",
  videoconferencia: "videoconf",
  impresoras: "printers"
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
shadow.getElementById("goMac").addEventListener("click", () => goTo("mac"));
shadow.getElementById("goMonitors").addEventListener("click", () => goTo("monitors"));
shadow.getElementById("goConnectivity").addEventListener("click", () => goTo("connectivity"));
shadow.getElementById("goStorage").addEventListener("click", () => goTo("storage"));
shadow.getElementById("goCabins").addEventListener("click", () => goTo("cabins"));
shadow.getElementById("goVideoconf").addEventListener("click", () => goTo("videoconf"));
shadow.getElementById("goPrinters").addEventListener("click", () => goTo("printers"));

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

setupFilters(shadow.getElementById("gridMac"), [
  { select: shadow.getElementById("macTypeSelect"), attr: "type" },
  { select: shadow.getElementById("macStorageSelect"), attr: "storage" }
]);

setupFilters(shadow.getElementById("gridMonitors"), [
  { select: shadow.getElementById("monitorTypeSelect"), attr: "type" },
  { select: shadow.getElementById("monitorSizeSelect"), attr: "group" }
]);

setupFilters(shadow.getElementById("gridVideoconf"), [
  { select: shadow.getElementById("videoconfTypeSelect"), attr: "type" },
  { select: shadow.getElementById("videoconfBrandSelect"), attr: "brand" }
]);

setupFilters(shadow.getElementById("gridPrinters"), [
  { select: shadow.getElementById("printerSizeSelect"), attr: "group" },
  { select: shadow.getElementById("printerColorSelect"), attr: "type" }
]);

setupFilters(shadow.getElementById("gridCabins"), [
  { select: shadow.getElementById("cabinTypeSelect"), attr: "type" },
  { select: shadow.getElementById("cabinBrandSelect"), attr: "brand" }
]);

setupFilters(shadow.getElementById("gridConnectivity"), [
  { select: shadow.getElementById("connTypeSelect"), attr: "type" },
  { select: shadow.getElementById("connNetSelect"), attr: "group" },
  { select: shadow.getElementById("connDataSelect"), attr: "storage" }
]);

// --- Rental request ---
// FormSubmit reenvía las solicitudes al correo (o alias) indicado al final de la URL
const FORM_ENDPOINT = "https://formsubmit.co/ajax/1384af3c840734e20ad3edf0fdf2c1e4";


const rentModal = shadow.getElementById("rentModal");
const rentScrim = shadow.getElementById("rentScrim");
const rentForm = shadow.getElementById("rentForm");
const rentError = shadow.getElementById("rentError");

const rentDone = shadow.getElementById("rentDone");
const rentSubmit = shadow.getElementById("rentSubmit");

// Open the rental form with the chosen model already written in the message
function openRentFor(model) {
  openRent();
  const msg = shadow.getElementById("rentMsg");
  const line = `Me interesa: ${model}`;
  if (!msg.value.includes(line)) msg.value = msg.value.trim() ? `${line}\n${msg.value}` : `${line}\n`;
}

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

// Show the view that matches the address
function route() {
  const key = ROUTES[decodeURIComponent(location.hash.slice(1))];
  if (key) {
    showView(key);
  } else {
    const wasInCategory = viewLanding.hidden;
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
      if (action === "portada") { location.href = el.getAttribute("href"); return; }
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
    const bar = shadow.getElementById("scrollProgress");
    const update = () => {
      const max = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight) - window.innerHeight;
      bar.style.setProperty("--p", max > 0 ? Math.min(1, getScrollY() / max) : 0);
    };
    onScroll(update);
    update();
  }, "progress");

  safe(() => { shadow.getElementById("footerYear").textContent = new Date().getFullYear(); }, "year");

  // Filter options: sizes and capacities from small to large, everything else in alphabetical order
  safe(() => {
    const size = text => {
      const m = String(text).replace(",", ".").match(/\d+(\.\d+)?/);
      if (!m) return NaN;
      return parseFloat(m[0]) * (/TB/i.test(text) ? 1000 : 1);
    };
    shadow.querySelectorAll(".filter-select").forEach(sel => {
      const opts = [...sel.options].filter(o => o.value !== "all");
      const numeric = opts.every(o => !isNaN(size(o.value)));
      opts.sort((a, b) => numeric ? size(a.value) - size(b.value) : a.text.localeCompare(b.text, "es", { sensitivity: "base" }));
      opts.forEach(o => sel.appendChild(o));
    });
  }, "filterOrder");

  // Light / night theme: light by default, the choice is remembered on this browser
  safe(() => {
    const host = shadow.getElementById("catalogo-soporte") || document.documentElement;
    const btn = shadow.getElementById("themeToggle");
    const saved = (() => { try { return localStorage.getItem("sptv-theme"); } catch (err) { return null; } })();
    const apply = theme => {
      host.setAttribute("data-theme", theme);
      const dark = theme === "dark";
      btn.setAttribute("aria-pressed", String(dark));
      btn.setAttribute("aria-label", dark ? "Cambiar a modo claro" : "Cambiar a modo noche");
      btn.title = dark ? "Modo claro" : "Modo noche";
    };
    apply(saved === "dark" ? "dark" : "light");
    btn.addEventListener("click", () => {
      const next = host.getAttribute("data-theme") === "dark" ? "light" : "dark";
      apply(next);
      try { localStorage.setItem("sptv-theme", next); } catch (err) { /* private mode: not remembered */ }
    });
  }, "theme");

  safe(() => {
    const modal = shadow.getElementById("creditsModal");
    const scrim = shadow.getElementById("creditsScrim");
    const open = () => { modal.classList.add("open"); scrim.classList.add("open"); };
    const close = () => { modal.classList.remove("open"); scrim.classList.remove("open"); };
    shadow.getElementById("openCredits").addEventListener("click", open);
    shadow.getElementById("closeCredits").addEventListener("click", close);
    scrim.addEventListener("click", close);
    document.addEventListener("keydown", e => { if (e.key === "Escape") close(); });
  }, "credits");

  safe(() => {
    shadow.querySelectorAll(".filter-reset").forEach(btn => btn.addEventListener("click", () => {
      btn.closest(".filter-panel").querySelectorAll("select").forEach(sel => {
        if (sel.value !== "all") { sel.value = "all"; sel.dispatchEvent(new Event("change")); }
      });
    }));
  }, "filterReset");

  // Featured slider: crossfade, autoplay driven by the progress bar, pause on hover/focus, swipe
  safe(() => {
    const slider = shadow.getElementById("featuredSlider");
    const slides = [...slider.querySelectorAll(".slide")];
    const dots = [...slider.querySelectorAll(".slider-dot")];
    let index = 0;

    const show = i => {
      index = (i + slides.length) % slides.length;
      slides.forEach((s, n) => s.classList.toggle("is-active", n === index));
      dots.forEach((d, n) => {
        d.classList.toggle("is-active", n === index);
        d.setAttribute("aria-current", n === index ? "true" : "false");
      });
      const img = slides[index].querySelector("img");
      if (img.loading === "lazy") img.loading = "eager";
    };

    dots.forEach((d, n) => {
      d.addEventListener("click", () => show(n));
      d.querySelector("span").addEventListener("animationend", () => show(index + 1));
    });
    slider.querySelectorAll(".slider-arrow").forEach(b => b.addEventListener("click", () => show(index + Number(b.dataset.dir))));

    const pause = on => slider.classList.toggle("is-paused", on);
    slider.addEventListener("mouseenter", () => pause(true));
    slider.addEventListener("mouseleave", () => pause(false));
    slider.addEventListener("focusin", () => pause(true));
    slider.addEventListener("focusout", () => pause(false));
    document.addEventListener("visibilitychange", () => pause(document.hidden));
    slider.addEventListener("keydown", e => {
      if (e.key === "ArrowRight") show(index + 1);
      if (e.key === "ArrowLeft") show(index - 1);
    });

    let startX = null;
    slider.addEventListener("pointerdown", e => { startX = e.clientX; });
    slider.addEventListener("pointerup", e => {
      if (startX === null) return;
      const dx = e.clientX - startX;
      startX = null;
      if (Math.abs(dx) > 50) show(index + (dx < 0 ? 1 : -1));
    });

    // "Ver en el catálogo": open the category and point at the model's card
    slider.querySelectorAll("[data-feature-route]").forEach(btn => btn.addEventListener("click", () => {
      const key = ROUTES[btn.dataset.featureRoute];
      goTo(key);
      const view = views[key];
      const card = [...view.querySelectorAll(".storage-card")].find(c => c.querySelector("h3").textContent === btn.dataset.featureModel);
      if (!card) return;
      setTimeout(() => {
        view.classList.remove("is-entering");
        card.scrollIntoView({ behavior: "smooth", block: "center" });
        card.classList.remove("is-highlight");
        void card.offsetWidth;
        card.classList.add("is-highlight");
      }, 450);
    }));
  }, "featuredSlider");
})();

})();

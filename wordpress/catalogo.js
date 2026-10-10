/* Catálogo Soporte TV para WordPress — generado desde index.html con build_wordpress.py */
(function () {
const host = document.getElementById("catalogo-soporte-app");
if (!host || host.shadowRoot) return;

["https://m3hervas.github.io/CatalogoSoporte/assets/fonts/fonts.css?v=20261004"].forEach(href => {
  if (!document.querySelector(`link[href="${href}"]`)) {
    const l = document.createElement("link");
    l.rel = "stylesheet"; l.href = href;
    document.head.appendChild(l);
  }
});

const shadow = host.attachShadow({ mode: "open" });
shadow.innerHTML = "<style>" + "\n  #catalogo-soporte {\n    --bg: #F4F6FA;\n    --bg-deep: #FFFFFF;\n    --field-line: rgba(15,23,42,0.16);\n    --close-bg: #0F172A;\n    --panel: #FFFFFF;\n    --panel-line: #E4E8ED;\n    --ink: #1B222B;\n    --ink-soft: #5C6672;\n    --paper-shadow: rgba(15,23,42,0.10);\n    --accent: #2B79C2;\n    --accent-soft: #D9E7F5;\n\n    --lenovo: #E2231A;\n    --lenovo-soft: #FBDAD8;\n    --samsung: #1428A0;\n    --samsung-soft: #DCE1F5;\n    --apple: #5B6470;\n    --apple-soft: #E7E9EC;\n\n    --android-tag: #1E8E5A;\n    --android-tag-soft: #D8F0E2;\n    --ipad-tag: #40474F;\n    --ipad-tag-soft: #E7E9EC;\n\n    --ease-out: cubic-bezier(0.23, 1, 0.32, 1);\n    --ease-drawer: cubic-bezier(0.32, 0.72, 0, 1);\n\n    padding-top: env(safe-area-inset-top, 0px);\n    padding-bottom: env(safe-area-inset-bottom, 0px);\n    box-sizing: border-box;\n  }\n\n  #catalogo-soporte * { box-sizing: border-box; }\n\n  #catalogo-soporte button, #catalogo-soporte .filter-select { -webkit-tap-highlight-color: transparent; }\n\n  #catalogo-soporte {\n    margin: 0;\n    height: 100%;\n    background: var(--bg);\n    color: var(--panel);\n    font-family: 'Inter', sans-serif;\n    overflow-x: hidden;\n  }\n  #catalogo-soporte { color: #0F172A; }\n\n  #catalogo-soporte {\n    min-height: 100%;\n    background: radial-gradient(1200px 640px at 8% -12%, rgba(61,139,255,0.10), transparent 60%),\n                radial-gradient(900px 560px at 100% 112%, rgba(99,102,241,0.07), transparent 60%),\n                var(--bg);\n    background-attachment: fixed;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    padding: 12px 20px 0;\n  }\n\n  #catalogo-soporte .bg-power {\n    position: fixed;\n    top: 50%;\n    left: 50%;\n    width: min(70vw, 520px);\n    height: min(70vw, 520px);\n    transform: translate(-50%, -50%);\n    z-index: 0;\n    pointer-events: none;\n    opacity: 0.22;\n    filter: blur(14px);\n  }\n\n  #catalogo-soporte .bg-power svg { width: 100%; height: 100%; }\n\n  #catalogo-soporte #pageContent {\n    position: relative;\n    z-index: 1;\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n  }\n\n  #catalogo-soporte header {\n    text-align: center;\n    max-width: 640px;\n    margin-bottom: 30px;\n  }\n\n  #catalogo-soporte .eyebrow {\n    font-family: 'Inter', sans-serif;\n    font-weight: 600;\n    font-size: 13px;\n    letter-spacing: 0.08em;\n    text-transform: uppercase;\n    color: #BFE0FF;\n    margin: 0 0 12px;\n  }\n\n  #catalogo-soporte .brand-header {\n    display: flex;\n    align-items: center;\n    gap: 12px;\n    justify-content: center;\n    margin-bottom: 14px;\n  }\n\n  #catalogo-soporte .brand-header svg {\n    width: 38px;\n    height: 38px;\n    flex-shrink: 0;\n  }\n\n  #catalogo-soporte h1 {\n    font-family: 'Inter', sans-serif;\n    font-weight: 700;\n    font-size: clamp(30px, 6vw, 44px);\n    line-height: 1.05;\n    margin: 0;\n    color: #0F172A;\n  }\n\n  #catalogo-soporte header p {\n    font-size: 15.5px;\n    line-height: 1.6;\n    color: #B7C1CC;\n    margin: 0;\n    max-width: 48ch;\n    margin-left: auto;\n    margin-right: auto;\n  }\n\n  \n  #catalogo-soporte .category-card[hidden], #catalogo-soporte .field-row[hidden], #catalogo-soporte .filter-row[hidden], #catalogo-soporte .footer-col[hidden], #catalogo-soporte .nav-dropdown a[hidden], #catalogo-soporte .footer-col a[hidden] { display: none !important; }\n\n  #catalogo-soporte .landing[hidden], #catalogo-soporte .catalog-view[hidden] {\n    display: none !important;\n  }\n\n  \n  #catalogo-soporte .landing {\n    display: flex;\n    gap: 22px;\n    flex-wrap: wrap;\n    justify-content: center;\n    max-width: 900px;\n  }\n\n  #catalogo-soporte .category-card {\n    width: 190px;\n    background: var(--panel);\n    border: none;\n    border-radius: 12px;\n    padding: 30px 20px 24px;\n    cursor: pointer;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 10px;\n    box-shadow: 0 10px 24px var(--paper-shadow);\n    transition: transform 200ms var(--ease-out), box-shadow 200ms var(--ease-out);\n    font-family: inherit;\n  }\n\n  #catalogo-soporte .category-card:focus-visible {\n    transform: translateY(-4px);\n    box-shadow: 0 16px 30px var(--paper-shadow);\n  }\n\n  @media (hover: hover) and (pointer: fine) {\n    #catalogo-soporte .category-card:hover {\n      transform: translateY(-4px);\n      box-shadow: 0 16px 30px var(--paper-shadow);\n    }\n  }\n\n  #catalogo-soporte .category-card:active { transform: scale(0.97); transition-duration: 120ms; }\n\n  #catalogo-soporte .category-card:focus-visible {\n    outline: 3px solid var(--accent);\n    outline-offset: 3px;\n  }\n\n  #catalogo-soporte .category-icon {\n    width: 72px;\n    height: 72px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  }\n\n  #catalogo-soporte .category-icon svg { width: 100%; height: 100%; }\n\n  #catalogo-soporte .category-label {\n    font-family: 'Inter', sans-serif;\n    font-weight: 700;\n    font-size: 18px;\n    color: var(--ink);\n  }\n\n  \n  #catalogo-soporte .catalog-view {\n    width: 100%;\n    max-width: 940px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n  }\n\n  #catalogo-soporte .back-btn {\n    align-self: flex-start;\n    background: transparent;\n    border: none;\n    color: #334155;\n    font-family: 'Inter', sans-serif;\n    font-size: 13.5px;\n    font-weight: 600;\n    cursor: pointer;\n    padding: 6px 0;\n    margin-bottom: 20px;\n  }\n\n  #catalogo-soporte .back-btn { transition: color 150ms ease, transform 150ms var(--ease-out); }\n  @media (hover: hover) and (pointer: fine) { #catalogo-soporte .back-btn:hover { color: #0F172A; transform: translateX(-2px); } }\n  #catalogo-soporte .back-btn:active { transform: scale(0.97); }\n\n  #catalogo-soporte .filter-row {\n    display: flex;\n    align-items: center;\n    gap: 14px;\n    flex-wrap: wrap;\n    justify-content: center;\n    margin-bottom: 16px;\n    width: 100%;\n  }\n\n  #catalogo-soporte .filter-label {\n    font-size: 12.5px;\n    font-weight: 700;\n    text-transform: uppercase;\n    letter-spacing: 0.04em;\n    color: #BFD3E8;\n    white-space: nowrap;\n    flex-shrink: 0;\n  }\n\n  @media (max-width: 480px) {\n    #catalogo-soporte .filter-row { justify-content: flex-start; }\n  }\n\n  #catalogo-soporte .filter-row:last-of-type { margin-bottom: 30px; }\n\n  #catalogo-soporte .filter-select {\n    appearance: none;\n    -webkit-appearance: none;\n    font-family: 'Inter', sans-serif;\n    font-size: 13.5px;\n    font-weight: 600;\n    color: #0F172A;\n    background: var(--bg-deep) url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"%23475569\" stroke-width=\"2\"><path d=\"M6 9l6 6 6-6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>') no-repeat right 14px center;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"%23C7CFD8\" stroke-width=\"2\"><path d=\"M6 9l6 6 6-6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>') no-repeat right 14px center;\n    background-size: 16px;\n    border: 1.5px solid rgba(255,255,255,0.18);\n    border-radius: 10px;\n    padding: 9px 40px 9px 16px;\n    cursor: pointer;\n    min-width: 160px;\n    max-width: 100%;\n    transition: border-color 0.15s ease;\n  }\n\n  #catalogo-soporte .filter-select:hover {\n    border-color: var(--accent);\n  }\n\n  #catalogo-soporte .filter-select:focus-visible {\n    outline: 2px solid var(--accent);\n    outline-offset: 2px;\n  }\n\n  #catalogo-soporte .filter-select option {\n    background: #FFFFFF;\n    color: #0F172A;\n  }\n\n\n\n\n  #catalogo-soporte .brand-line {\n    display: flex;\n    align-items: center;\n    gap: 6px;\n  }\n\n  #catalogo-soporte .brand-badge {\n    width: 18px;\n    height: 18px;\n    border-radius: 5px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    font-family: 'Inter', sans-serif;\n    font-weight: 700;\n    font-size: 10px;\n    color: #fff;\n    flex-shrink: 0;\n  }\n\n  #catalogo-soporte .brand-name {\n    font-size: 12px;\n    font-weight: 600;\n    color: var(--ink-soft);\n    text-transform: uppercase;\n    letter-spacing: 0.03em;\n  }\n\n  #catalogo-soporte .cat-chip {\n    display: inline-block;\n    font-size: 10.5px;\n    font-weight: 700;\n    padding: 3px 10px;\n    border-radius: 999px;\n    width: fit-content;\n  }\n\n  #catalogo-soporte .card-hint {\n    font-size: 11px;\n    color: var(--ink-soft);\n    opacity: 0.75;\n    margin-top: -2px;\n  }\n\n  \n  #catalogo-soporte .scrim {\n    position: fixed;\n    inset: 0;\n    background: rgba(6, 9, 12, 0.6);\n    opacity: 0;\n    pointer-events: none;\n    transition: opacity 220ms ease;\n    z-index: 10;\n  }\n\n  #catalogo-soporte .scrim.open { opacity: 1; pointer-events: auto; }\n\n  \n  #catalogo-soporte .panel {\n    position: fixed; z-index: 11; left: 50%; top: 50%;\n    width: min(1180px, calc(100vw - 48px));\n    height: min(820px, calc(100vh - 48px));\n    height: min(820px, calc(100dvh - 48px));\n    display: grid; grid-template-columns: minmax(0, 1.05fr) minmax(0, 1fr);\n    background: #FFFFFF; color: var(--ink); border-radius: 24px; overflow: hidden;\n    box-shadow: 0 40px 90px rgba(2,6,23,0.45);\n    opacity: 0; visibility: hidden; pointer-events: none;\n    transform: translate(-50%, -48%) scale(0.97);\n    transition: opacity 220ms var(--ease-out), transform 260ms var(--ease-out), visibility 0s linear 260ms;\n  }\n  #catalogo-soporte .panel.open {\n    opacity: 1; visibility: visible; pointer-events: auto; transform: translate(-50%, -50%) scale(1);\n    transition: opacity 220ms var(--ease-out), transform 260ms var(--ease-out);\n  }\n  #catalogo-soporte html.sheet-open, #catalogo-soporte html.sheet-open body { overflow: hidden; }\n\n  #catalogo-soporte .pv-close {\n    position: absolute; top: 16px; right: 16px; z-index: 2; width: 42px; height: 42px; border-radius: 50%;\n    border: 1px solid #E4E8ED; background: rgba(255,255,255,0.94); color: var(--ink); cursor: pointer;\n    display: inline-flex; align-items: center; justify-content: center; box-shadow: 0 4px 14px rgba(15,23,42,0.10);\n    transition: transform 150ms var(--ease-out), background-color 150ms ease;\n  }\n  #catalogo-soporte .pv-close svg { width: 18px; height: 18px; fill: none; stroke: currentColor; stroke-width: 2.2; stroke-linecap: round; }\n  #catalogo-soporte .pv-close:active { transform: scale(0.92); }\n  #catalogo-soporte .pv-close:focus-visible { outline: 3px solid #BFE0FF; outline-offset: 2px; }\n\n  #catalogo-soporte .pv-media { display: flex; flex-direction: column; gap: 16px; min-height: 0; padding: 36px 32px 28px; background: #FFFFFF; border-right: 1px solid #EEF1F5; }\n  #catalogo-soporte .pv-stage { flex: 1; min-height: 0; display: flex; align-items: center; justify-content: center; background: #FFFFFF; }\n  #catalogo-soporte .pv-stage img { max-width: 100%; max-height: 100%; object-fit: contain; }\n  #catalogo-soporte .pv-icon { width: min(320px, 70%); }\n  #catalogo-soporte .pv-icon svg { width: 100%; height: auto; }\n  #catalogo-soporte .pv-thumbs { display: flex; gap: 10px; justify-content: center; flex-wrap: wrap; }\n  #catalogo-soporte .pv-thumb {\n    width: 64px; height: 64px; padding: 5px; border-radius: 12px; border: 1.5px solid #E4E8ED; background: #FFFFFF; cursor: pointer;\n    transition: border-color 150ms ease, transform 150ms var(--ease-out);\n  }\n  #catalogo-soporte .pv-thumb img { width: 100%; height: 100%; object-fit: contain; }\n  #catalogo-soporte .pv-thumb[aria-pressed=\"true\"] { border-color: var(--accent); box-shadow: inset 0 0 0 1px var(--accent); }\n  #catalogo-soporte .pv-thumb:active { transform: scale(0.96); }\n  #catalogo-soporte .pv-thumb:focus-visible { outline: 3px solid #BFE0FF; outline-offset: 2px; }\n\n  #catalogo-soporte .pv-info { min-height: 0; overflow-y: auto; overscroll-behavior: contain; padding: 40px 40px 32px; }\n  #catalogo-soporte .pv-brand { display: flex; align-items: center; gap: 8px; padding-right: 48px; }\n  #catalogo-soporte .pv-title { margin: 10px 0 6px; padding-right: 48px; font: 700 30px/1.15 'Inter', sans-serif; letter-spacing: -0.02em; color: #0F172A; overflow-wrap: anywhere; }\n  #catalogo-soporte .pv-kind { margin: 0 0 16px; font-size: 14px; color: var(--ink-soft); }\n  #catalogo-soporte .pv-avail { display: flex; flex-wrap: wrap; align-items: center; gap: 10px 14px; padding-bottom: 22px; margin-bottom: 22px; border-bottom: 1px solid #EEF1F5; }\n  #catalogo-soporte .pv-price { font-size: 13.5px; color: var(--ink-soft); }\n\n  #catalogo-soporte .pv-group { margin-bottom: 20px; }\n  #catalogo-soporte .pv-group-label { margin: 0 0 10px; font-size: 14px; color: var(--ink-soft); }\n  #catalogo-soporte .pv-group-label strong { color: #0F172A; font-weight: 700; }\n  #catalogo-soporte .pv-group-label .pv-pick { color: var(--ink-soft); font-weight: 500; }\n  #catalogo-soporte .pv-choices { display: flex; flex-wrap: wrap; gap: 8px; }\n  #catalogo-soporte .pv-chip, #catalogo-soporte .pv-color {\n    display: inline-flex; align-items: center; gap: 8px; min-height: 42px; padding: 0 16px; border-radius: 11px;\n    border: 1.5px solid #D5DBE3; background: #FFFFFF; color: #0F172A; cursor: pointer;\n    font: 600 14px/1.2 'Inter', sans-serif; text-align: left;\n    transition: border-color 150ms ease, background-color 150ms ease, transform 150ms var(--ease-out);\n  }\n  #catalogo-soporte .pv-chip[aria-pressed=\"true\"], #catalogo-soporte .pv-color[aria-pressed=\"true\"] { border-color: var(--accent); background: #EEF5FC; box-shadow: inset 0 0 0 1px var(--accent); color: #14467A; }\n  #catalogo-soporte .pv-chip:active, #catalogo-soporte .pv-color:active { transform: scale(0.97); }\n  #catalogo-soporte .pv-chip:focus-visible, #catalogo-soporte .pv-color:focus-visible { outline: 3px solid #BFE0FF; outline-offset: 2px; }\n  #catalogo-soporte .pv-dot { width: 18px; height: 18px; flex: none; border-radius: 50%; background: var(--sw); border: 1px solid rgba(15,23,42,0.22); box-shadow: inset 0 0 0 2px #FFFFFF; }\n  #catalogo-soporte .pv-group.is-missing .pv-chip { border-color: #E6A5A0; }\n  #catalogo-soporte .pv-need { margin: 8px 0 0; font-size: 13px; color: #B42318; }\n  #catalogo-soporte .pv-need[hidden] { display: none; }\n\n  #catalogo-soporte .pv-buy {\n    display: grid; grid-template-columns: auto minmax(0, 1fr); gap: 12px; align-items: center;\n    margin: 8px 0 30px; padding: 18px; border: 1px solid #E4E8ED; border-radius: 16px; background: #FAFBFC;\n  }\n  #catalogo-soporte .pv-buy .qty { height: 48px; background: #FFFFFF; }\n  #catalogo-soporte .pv-buy .qty button { width: 40px; height: 46px; }\n  #catalogo-soporte .pv-buy .pv-add { width: 100%; height: 48px; padding: 0 14px; white-space: nowrap; }\n  #catalogo-soporte .pv-buy .panel-added, #catalogo-soporte .pv-note { grid-column: 1 / -1; margin: 0; }\n  #catalogo-soporte .pv-note { font-size: 12.5px; color: var(--ink-soft); text-align: center; }\n\n  #catalogo-soporte .pv-section { margin-bottom: 28px; }\n  #catalogo-soporte .pv-section h3 { margin: 0 0 10px; font: 700 16px/1.3 'Inter', sans-serif; color: #0F172A; }\n  #catalogo-soporte .pv-section p { margin: 0; font-size: 14.5px; line-height: 1.6; color: #334155; }\n  #catalogo-soporte .pv-specs-wrap { border: 1px solid #E4E8ED; border-radius: 14px; overflow: hidden; }\n  #catalogo-soporte .pv-specs { width: 100%; border-collapse: collapse; font-size: 13.5px; line-height: 1.45; }\n  #catalogo-soporte .pv-specs th, #catalogo-soporte .pv-specs td { padding: 11px 14px; text-align: left; vertical-align: top; border-bottom: 1px solid #EEF1F5; }\n  #catalogo-soporte .pv-specs tr:last-child th, #catalogo-soporte .pv-specs tr:last-child td { border-bottom: 0; }\n  #catalogo-soporte .pv-specs th { width: 38%; font-weight: 600; color: #475569; background: #F6F8FA; }\n  #catalogo-soporte .pv-specs td { color: #0F172A; overflow-wrap: anywhere; }\n\n  @media (hover: hover) and (pointer: fine) {\n    #catalogo-soporte .pv-close:hover { background: #FFFFFF; }\n    #catalogo-soporte .pv-thumb:hover { border-color: #94A3B8; }\n    #catalogo-soporte .pv-chip:hover, #catalogo-soporte .pv-color:hover { border-color: #94A3B8; }\n    #catalogo-soporte .pv-chip[aria-pressed=\"true\"]:hover, #catalogo-soporte .pv-color[aria-pressed=\"true\"]:hover { border-color: var(--accent); }\n  }\n\n  \n  @media (max-width: 899px) {\n    #catalogo-soporte .panel {\n      top: auto; bottom: 0; left: 0; width: 100%; display: block; overflow-y: auto; overscroll-behavior: contain;\n      height: calc(100vh - 20px); height: calc(100dvh - 20px); border-radius: 22px 22px 0 0;\n      opacity: 1; transform: translateY(100%);\n      transition: transform 340ms var(--ease-drawer), visibility 0s linear 340ms;\n    }\n    #catalogo-soporte .panel.open { transform: none; transition: transform 340ms var(--ease-drawer); }\n    #catalogo-soporte .pv-close { position: sticky; top: 12px; display: flex; margin: 12px 12px -54px auto; }\n    #catalogo-soporte .pv-media { padding: 20px 16px 16px; border-right: 0; border-bottom: 1px solid #EEF1F5; }\n    #catalogo-soporte .pv-stage { flex: none; height: min(42vh, 340px); }\n    #catalogo-soporte .pv-thumbs { flex-wrap: nowrap; justify-content: flex-start; overflow-x: auto; padding-bottom: 2px; }\n    #catalogo-soporte .pv-thumb { flex: none; width: 54px; height: 54px; }\n    #catalogo-soporte .pv-info { overflow: visible; padding: 20px 18px calc(24px + env(safe-area-inset-bottom)); }\n    #catalogo-soporte .pv-brand, #catalogo-soporte .pv-title { padding-right: 0; }\n    #catalogo-soporte .pv-title { font-size: 23px; }\n    #catalogo-soporte .pv-buy { position: sticky; bottom: 8px; z-index: 1; background: #FFFFFF; box-shadow: 0 10px 30px rgba(15,23,42,0.14); }\n    #catalogo-soporte .pv-specs th { width: 42%; }\n  }\n\n  #catalogo-soporte .close-btn {\n    background: var(--close-bg);\n    color: #F5F7FA;\n    border: none;\n    width: 34px;\n    height: 34px;\n    border-radius: 50%;\n    font-size: 18px;\n    line-height: 1;\n    cursor: pointer;\n    flex-shrink: 0;\n  }\n\n  #catalogo-soporte .close-btn { transition: background-color 150ms ease, transform 150ms var(--ease-out); }\n  @media (hover: hover) and (pointer: fine) { #catalogo-soporte .close-btn:hover { background: #000; } }\n  #catalogo-soporte .close-btn:active { transform: scale(0.92); }\n\n  #catalogo-soporte .primary-btn {\n    font-family: 'Inter', sans-serif;\n    font-size: 15px;\n    font-weight: 700;\n    padding: 12px 26px;\n    border-radius: 999px;\n    border: none;\n    background: var(--accent);\n    color: #FFFFFF;\n    cursor: pointer;\n    transition: background-color 150ms ease, transform 160ms var(--ease-out);\n  }\n\n  @media (hover: hover) and (pointer: fine) { #catalogo-soporte .primary-btn:hover { background: #1F64A5; transform: translateY(-1px); } }\n  \n  #catalogo-soporte[data-theme=\"dark\"] .primary-btn { background: #2B79C2; }\n  @media (hover: hover) and (pointer: fine) { #catalogo-soporte[data-theme=\"dark\"] .primary-btn:hover { background: #1F64A5; } }\n  #catalogo-soporte .primary-btn:active { transform: scale(0.97); }\n  #catalogo-soporte .primary-btn:focus-visible { outline: 3px solid #BFE0FF; outline-offset: 3px; }\n\n  \n  #catalogo-soporte .rent-modal {\n    position: fixed;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -46%);\n    width: min(460px, calc(100% - 32px));\n    max-height: calc(100vh - 40px);\n    overflow-y: auto;\n    background: var(--panel);\n    color: var(--ink);\n    border-radius: 18px;\n    padding: 26px 24px 24px;\n    box-shadow: 0 20px 50px rgba(0,0,0,0.45);\n    z-index: 71;\n    opacity: 0;\n    pointer-events: none;\n    transform: translate(-50%, -50%) scale(0.96);\n    transition: opacity 220ms var(--ease-out), transform 220ms var(--ease-out);\n  }\n\n  #catalogo-soporte .rent-modal.open { opacity: 1; pointer-events: auto; transform: translate(-50%, -50%) scale(1); }\n\n  #catalogo-soporte .rent-scrim { z-index: 70; }\n\n  \n  #catalogo-soporte .rent-modal .panel-top { display: flex; align-items: flex-start; justify-content: space-between; gap: 14px; margin-bottom: 8px; }\n\n  #catalogo-soporte .rent-modal h2 {\n    font-family: 'Inter', sans-serif;\n    font-weight: 700;\n    font-size: 22px;\n    margin: 0;\n  }\n\n  #catalogo-soporte .rent-modal .lead {\n    font-size: 13.5px;\n    color: var(--ink-soft);\n    line-height: 1.5;\n    margin: 6px 0 18px;\n  }\n\n  #catalogo-soporte .field { display: flex; flex-direction: column; gap: 6px; margin-bottom: 14px; }\n  #catalogo-soporte .field-row { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }\n\n  #catalogo-soporte .field label {\n    font-size: 12.5px;\n    font-weight: 700;\n    color: var(--ink);\n  }\n\n  #catalogo-soporte .field input, #catalogo-soporte .field textarea {\n    font-family: 'Inter', sans-serif;\n    font-size: 14px;\n    color: var(--ink);\n    background: #F5F7FA;\n    border: 1.5px solid var(--panel-line);\n    border-radius: 10px;\n    padding: 10px 12px;\n    width: 100%;\n  }\n\n  #catalogo-soporte .field textarea { min-height: 90px; resize: vertical; }\n\n  #catalogo-soporte .field input:focus, #catalogo-soporte .field textarea:focus {\n    outline: none;\n    border-color: var(--accent);\n    background: #FFFFFF;\n  }\n\n  #catalogo-soporte .field-error { font-size: 12.5px; color: #B42318; margin: -4px 0 12px; min-height: 0; }\n  #catalogo-soporte .consent { display: flex; align-items: flex-start; gap: 10px; margin: 2px 0 8px; font-size: 13.5px; line-height: 1.45; color: var(--ink-soft); cursor: pointer; }\n  #catalogo-soporte .consent input { flex: 0 0 auto; width: 18px; height: 18px; margin: 1px 0 0; accent-color: var(--accent); cursor: pointer; }\n  #catalogo-soporte .consent a, #catalogo-soporte .consent-note a, #catalogo-soporte .footer-legal a { color: inherit; text-decoration: underline; text-underline-offset: 2px; }\n  #catalogo-soporte .consent-note { margin: 0 0 12px; font-size: 11.5px; line-height: 1.5; color: var(--mute); }\n  \n  #catalogo-soporte .rent-modal .consent-note { color: #64748B; }\n\n  \n  #catalogo-soporte .field label small { font-weight: 500; color: var(--ink-soft); }\n  #catalogo-soporte .interest-field { border: 0; padding: 0; min-width: 0; }\n  #catalogo-soporte .interest-field legend { padding: 0; margin-bottom: 6px; font-size: 12.5px; font-weight: 700; color: var(--ink); }\n  #catalogo-soporte .interest-choices { display: flex; flex-wrap: wrap; gap: 8px; }\n  #catalogo-soporte .interest-choices label { position: relative; cursor: pointer; }\n  #catalogo-soporte .interest-choices input { position: absolute; opacity: 0; width: 1px; height: 1px; }\n  #catalogo-soporte .interest-choices span {\n    display: inline-flex; align-items: center; min-height: 38px; padding: 0 16px; border-radius: 999px;\n    border: 1.5px solid var(--panel-line); background: #F5F7FA; color: var(--ink); font-size: 13.5px; font-weight: 600;\n    transition: border-color 150ms ease, background-color 150ms ease;\n  }\n  #catalogo-soporte .interest-choices input:checked + span { border-color: #2B79C2; background: #EEF5FC; color: #14467A; }\n  #catalogo-soporte .interest-choices input:focus-visible + span { outline: 3px solid #BFE0FF; outline-offset: 2px; }\n  #catalogo-soporte .hp-field { position: absolute; left: -10000px; width: 1px; height: 1px; overflow: hidden; }\n  #catalogo-soporte .rent-modal .primary-btn { width: 100%; margin-top: 4px; }\n  #catalogo-soporte .rent-modal .primary-btn:disabled { opacity: 0.6; cursor: wait; transform: none; }\n\n\n  \n  #catalogo-soporte .qty { display: inline-flex; align-items: center; flex: 0 0 auto; border: 1.5px solid var(--panel-line); border-radius: 999px; }\n  #catalogo-soporte .qty button {\n    width: 34px; height: 34px; border: 0; border-radius: 50%; background: transparent; color: var(--ink);\n    font: 700 18px/1 'Inter', sans-serif; cursor: pointer; display: inline-flex; align-items: center; justify-content: center;\n  }\n  #catalogo-soporte .qty button:disabled { opacity: 0.3; cursor: default; }\n  #catalogo-soporte .qty button:focus-visible { outline: 2px solid var(--accent); outline-offset: -2px; }\n  #catalogo-soporte .qty-n {\n    width: 46px; height: 30px; padding: 0; border: 0; border-radius: 7px; background: transparent; color: var(--ink);\n    text-align: center; font: 700 15px/1 'Inter', sans-serif; font-variant-numeric: tabular-nums;\n    -moz-appearance: textfield; appearance: textfield;\n  }\n  \n  #catalogo-soporte .qty input.qty-n { width: 46px; height: 30px; padding: 0; border: 0; border-radius: 7px; background: transparent; font-size: 15px; }\n  #catalogo-soporte .qty input.qty-n:focus { background: #FFFFFF; border: 0; box-shadow: 0 0 0 2px var(--accent); }\n  #catalogo-soporte .qty-n::-webkit-inner-spin-button, #catalogo-soporte .qty-n::-webkit-outer-spin-button { -webkit-appearance: none; margin: 0; }\n  #catalogo-soporte .qty-n:hover { background: rgba(15,23,42,0.05); }\n  #catalogo-soporte .qty-n:focus { outline: none; background: #FFFFFF; box-shadow: 0 0 0 2px var(--accent); }\n  \n  @media (max-width: 720px), (pointer: coarse) { #catalogo-soporte .qty-n, #catalogo-soporte .qty input.qty-n { font-size: 16px; } }\n  #catalogo-soporte .panel-added { margin: 10px 0 0; font-size: 13px; line-height: 1.45; color: var(--android-tag); text-align: center; }\n  #catalogo-soporte .panel-added[hidden] { display: none; }\n  #catalogo-soporte .link-btn { border: 0; background: none; padding: 0; font: inherit; font-weight: 700; color: var(--accent); text-decoration: underline; text-underline-offset: 2px; cursor: pointer; }\n\n  #catalogo-soporte .req-box[hidden] { display: none; }\n  #catalogo-soporte .req-head { display: flex; justify-content: space-between; align-items: baseline; font-size: 12.5px; font-weight: 700; color: var(--ink); }\n  #catalogo-soporte .req-head .link-btn { font-size: 12px; font-weight: 600; color: var(--ink-soft); }\n  #catalogo-soporte .req-list { list-style: none; margin: 0; padding: 0; border: 1.5px solid var(--panel-line); border-radius: 12px; max-height: 240px; overflow-y: auto; }\n  #catalogo-soporte .req-list li { display: flex; align-items: center; gap: 8px; padding: 6px 6px 6px 12px; border-top: 1px solid var(--panel-line); }\n  #catalogo-soporte .req-list li:first-child { border-top: 0; }\n  #catalogo-soporte .req-name { flex: 1; min-width: 0; font-size: 13px; line-height: 1.35; overflow-wrap: anywhere; }\n  #catalogo-soporte .req-list .qty { border-width: 1px; }\n  #catalogo-soporte .req-list .qty button { width: 28px; height: 28px; font-size: 16px; }\n  #catalogo-soporte .req-remove {\n    flex: 0 0 auto; width: 28px; height: 28px; border: 0; border-radius: 50%; background: transparent;\n    color: var(--ink-soft); font-size: 15px; cursor: pointer;\n  }\n  #catalogo-soporte .req-remove:focus-visible { outline: 2px solid var(--accent); }\n\n  #catalogo-soporte .list-fab {\n    position: fixed; right: 18px; bottom: calc(18px + env(safe-area-inset-bottom)); z-index: 9;\n    display: inline-flex; align-items: center; gap: 9px; padding: 12px 16px 12px 18px; border: 0; border-radius: 999px;\n    background: #2B79C2; color: #FFFFFF; font: 700 14.5px/1 'Inter', sans-serif; cursor: pointer;\n    box-shadow: 0 10px 28px rgba(15,23,42,0.28); transition: transform 160ms var(--ease-out);\n  }\n  #catalogo-soporte .list-fab[hidden] { display: none; }\n  \n  #catalogo-soporte body:has(#sptvWa:not(.wa-top)) .list-fab { right: 86px; bottom: calc(23px + env(safe-area-inset-bottom)); }\n  #catalogo-soporte .list-fab:active { transform: scale(0.96); }\n  #catalogo-soporte .list-fab:focus-visible { outline: 3px solid #BFE0FF; outline-offset: 3px; }\n  #catalogo-soporte .list-fab-n {\n    min-width: 22px; height: 22px; padding: 0 6px; border-radius: 999px; background: #FFFFFF; color: #2B79C2;\n    display: inline-flex; align-items: center; justify-content: center; font-size: 12.5px; font-variant-numeric: tabular-nums;\n  }\n  #catalogo-soporte .list-fab.bump { animation: fab-bump 320ms var(--ease-out); }\n  @keyframes fab-bump { 40% { transform: scale(1.1); } }\n  @media (hover: hover) and (pointer: fine) { #catalogo-soporte .req-remove:hover { background: var(--panel-line); color: var(--ink); } }\n\n  #catalogo-soporte .rent-done { text-align: center; padding: 10px 0 4px; }\n  #catalogo-soporte .rent-done[hidden], #catalogo-soporte #rentForm[hidden] { display: none; }\n  #catalogo-soporte .rent-done-icon {\n    width: 56px; height: 56px; margin: 0 auto 14px;\n    border-radius: 50%; background: var(--android-tag-soft); color: var(--android-tag);\n    display: flex; align-items: center; justify-content: center;\n    font-size: 28px; font-weight: 700;\n  }\n  #catalogo-soporte .rent-done-title { font-family: 'Inter', sans-serif; font-weight: 700; font-size: 20px; margin: 0 0 6px; }\n  #catalogo-soporte .rent-done-sub { font-size: 14px; line-height: 1.5; color: var(--ink-soft); margin: 0 0 20px; }\n\n  @media (max-width: 420px) { #catalogo-soporte .field-row { grid-template-columns: 1fr; } }\n\n  \n  \n  #catalogo-soporte #viewStorage, #catalogo-soporte #viewTablets, #catalogo-soporte #viewPhones, #catalogo-soporte #viewAccessories, #catalogo-soporte #viewComputers, #catalogo-soporte #viewMac, #catalogo-soporte #viewCabins, #catalogo-soporte #viewVideoconf, #catalogo-soporte #viewPrinters, #catalogo-soporte #viewMonitors, #catalogo-soporte #viewConnectivity, #catalogo-soporte #viewBatteries, #catalogo-soporte #viewSound, #catalogo-soporte #viewStationery, #catalogo-soporte #viewProtection, #catalogo-soporte #viewElectric, #catalogo-soporte #viewFilmset, #catalogo-soporte #viewDulling, #catalogo-soporte #viewLighting, #catalogo-soporte #viewEffects, #catalogo-soporte #viewCleaning, #catalogo-soporte #viewMarks, #catalogo-soporte #viewFastening, #catalogo-soporte #viewTapes, #catalogo-soporte #viewBackdrops, #catalogo-soporte #viewOthersound, #catalogo-soporte #viewLavacc, #catalogo-soporte #viewMics { max-width: none; }\n\n  #catalogo-soporte .storage-grid {\n    display: grid;\n    grid-template-columns: repeat(auto-fill, minmax(min(100%, 459px), 459px));\n    justify-content: center;\n    gap: 22px;\n    width: 100%;\n  }\n\n  #catalogo-soporte .storage-empty {\n    grid-column: 1 / -1;\n    text-align: center;\n    color: #475569;\n    font-size: 14px;\n    padding: 30px 0;\n  }\n\n  #catalogo-soporte .storage-card {\n    background: var(--panel);\n    color: var(--ink);\n    border: 2.5px solid var(--accent);\n    border-radius: 16px;\n    overflow: hidden;\n    box-shadow: 0 10px 22px var(--paper-shadow);\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    min-height: 260px;\n  }\n\n  #catalogo-soporte .storage-card.hidden { display: none; }\n  #catalogo-soporte .storage-card.search-miss { display: none; }\n\n  \n  #catalogo-soporte .view-top { display: flex; align-items: center; gap: 12px; margin-bottom: 20px; width: 100%; }\n  #catalogo-soporte .view-top .back-btn { margin-bottom: 0; flex: none; }\n  #catalogo-soporte .view-search { position: relative; flex: 1 1 auto; max-width: 380px; margin-left: auto; }\n  #catalogo-soporte .vs-input {\n    width: 100%; height: 44px; padding: 0 44px 0 42px; border-radius: 999px;\n    border: 1px solid var(--field-line); background: #FFFFFF; color: var(--ink);\n    font: 500 14.5px/1 'Inter', sans-serif; letter-spacing: -0.005em;\n    box-shadow: 0 6px 18px rgba(15,23,42,0.06);\n    -webkit-appearance: none; appearance: none;\n    transition: border-color 150ms ease, box-shadow 150ms ease;\n  }\n  #catalogo-soporte .vs-input::placeholder { color: #7A8593; opacity: 1; }\n  #catalogo-soporte .vs-input::-webkit-search-cancel-button, #catalogo-soporte .vs-input::-webkit-search-decoration { -webkit-appearance: none; appearance: none; }\n  #catalogo-soporte .vs-input:focus { outline: none; border-color: var(--accent); box-shadow: 0 0 0 4px rgba(43,121,194,0.16), 0 6px 18px rgba(15,23,42,0.06); }\n  #catalogo-soporte .vs-icon {\n    position: absolute; left: 15px; top: 50%; width: 18px; height: 18px; transform: translateY(-50%); pointer-events: none;\n    fill: none; stroke: #7A8593; stroke-width: 2; stroke-linecap: round; transition: stroke 150ms ease;\n  }\n  #catalogo-soporte .view-search:focus-within .vs-icon { stroke: var(--accent); }\n  #catalogo-soporte .vs-kbd {\n    position: absolute; right: 14px; top: 50%; transform: translateY(-50%); pointer-events: none;\n    min-width: 22px; height: 22px; padding: 0 6px; border-radius: 6px; border: 1px solid var(--field-line);\n    display: inline-flex; align-items: center; justify-content: center;\n    font: 600 12px/1 'Inter', sans-serif; color: #64748B; background: rgba(15,23,42,0.03);\n  }\n  #catalogo-soporte .view-search:focus-within .vs-kbd, #catalogo-soporte .view-search.has-value .vs-kbd { display: none; }\n  #catalogo-soporte .vs-clear {\n    position: absolute; right: 7px; top: 50%; transform: translateY(-50%); width: 30px; height: 30px; border: 0; border-radius: 50%;\n    background: transparent; color: #64748B; cursor: pointer; display: inline-flex; align-items: center; justify-content: center;\n  }\n  #catalogo-soporte .vs-clear[hidden] { display: none; }\n  #catalogo-soporte .vs-clear svg { width: 16px; height: 16px; fill: none; stroke: currentColor; stroke-width: 2.2; stroke-linecap: round; }\n  #catalogo-soporte .vs-clear:focus-visible { outline: 2px solid var(--accent); }\n\n  #catalogo-soporte .vs-pop {\n    position: absolute; top: calc(100% + 8px); right: 0; z-index: 30; width: max(100%, min(420px, calc(100vw - 32px)));\n    max-height: min(62vh, 440px); overflow-y: auto; overscroll-behavior: contain; padding: 6px;\n    background: #FFFFFF; color: var(--ink); border: 1px solid var(--panel-line); border-radius: 16px;\n    box-shadow: 0 24px 48px rgba(15,23,42,0.16), 0 2px 6px rgba(15,23,42,0.06);\n    transform-origin: top right; animation: vs-pop-in 160ms var(--ease-out);\n  }\n  #catalogo-soporte .vs-pop[hidden] { display: none; }\n  @keyframes vs-pop-in { from { opacity: 0; transform: translateY(-4px) scale(0.98); } }\n  #catalogo-soporte .vs-pop-head { padding: 8px 10px 6px; font: 700 11px/1 'Inter', sans-serif; letter-spacing: 0.1em; text-transform: uppercase; color: #64748B; }\n  #catalogo-soporte .vs-opt { display: grid; grid-template-columns: 44px minmax(0, 1fr); align-items: center; gap: 12px; padding: 7px 10px 7px 7px; border-radius: 11px; cursor: pointer; }\n  #catalogo-soporte .vs-opt[aria-selected=\"true\"] { background: var(--accent-soft); }\n  #catalogo-soporte .vs-thumb { width: 44px; height: 44px; border-radius: 9px; background: #F4F6FA; display: flex; align-items: center; justify-content: center; overflow: hidden; }\n  #catalogo-soporte .vs-thumb img { width: 100%; height: 100%; object-fit: contain; }\n  #catalogo-soporte .vs-thumb svg { width: 30px; height: 30px; }\n  #catalogo-soporte .vs-opt-name { display: block; font: 600 13.5px/1.3 'Inter', sans-serif; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }\n  #catalogo-soporte .vs-opt-name mark { background: none; color: #1F64A5; font-weight: 800; }\n  #catalogo-soporte .vs-opt-cat { display: block; margin-top: 3px; font-size: 12px; color: #64748B; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }\n  #catalogo-soporte .vs-pop-more { padding: 8px 10px 6px; font-size: 12px; color: #64748B; }\n  @media (hover: hover) and (pointer: fine) {\n    #catalogo-soporte .vs-opt:hover { background: var(--accent-soft); }\n    #catalogo-soporte .vs-clear:hover { background: rgba(15,23,42,0.06); color: var(--ink); }\n  }\n\n  #catalogo-soporte .vs-status { width: 100%; margin: -8px 0 14px; font-size: 13px; color: #64748B; text-align: right; }\n  #catalogo-soporte .vs-status[hidden] { display: none; }\n  #catalogo-soporte .vs-empty { grid-column: 1 / -1; text-align: center; padding: 44px 20px; border: 1px dashed var(--field-line); border-radius: 18px; background: rgba(255,255,255,0.6); }\n  #catalogo-soporte .vs-empty[hidden] { display: none; }\n  #catalogo-soporte .vs-empty-title { margin: 0 0 6px; font: 700 16px/1.35 'Inter', sans-serif; color: var(--ink); overflow-wrap: anywhere; }\n  #catalogo-soporte .vs-empty-sub { margin: 0; font-size: 14px; line-height: 1.5; color: #64748B; }\n  #catalogo-soporte .vs-chips { display: flex; flex-wrap: wrap; justify-content: center; gap: 8px; margin: 14px 0 4px; }\n  #catalogo-soporte .vs-chip {\n    display: inline-flex; align-items: center; gap: 8px; padding: 9px 14px; border-radius: 999px; cursor: pointer;\n    border: 1px solid var(--field-line); background: #FFFFFF; color: var(--ink); font: 600 13.5px/1 'Inter', sans-serif;\n    transition: border-color 150ms ease, transform 150ms var(--ease-out);\n  }\n  #catalogo-soporte .vs-chip span { min-width: 20px; height: 20px; padding: 0 6px; border-radius: 999px; background: var(--accent-soft); color: #1B4A78; display: inline-flex; align-items: center; justify-content: center; font-size: 12px; }\n  #catalogo-soporte .vs-chip:active { transform: scale(0.97); }\n  #catalogo-soporte .vs-chip:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px; }\n  @media (hover: hover) and (pointer: fine) { #catalogo-soporte .vs-chip:hover { border-color: var(--accent); } }\n\n  \n  @media (max-width: 720px), (pointer: coarse) { #catalogo-soporte .vs-input { font-size: 16px; height: 42px; } }\n\n  #catalogo-soporte[data-theme=\"dark\"] .vs-input { background: rgba(10,18,34,0.62); color: #F5F7FA; border-color: var(--field-line); box-shadow: none; }\n  #catalogo-soporte[data-theme=\"dark\"] .vs-input::placeholder { color: #8FA0B6; }\n  #catalogo-soporte[data-theme=\"dark\"] .vs-input:focus { border-color: #3D8BFF; box-shadow: 0 0 0 4px rgba(61,139,255,0.22); }\n  #catalogo-soporte[data-theme=\"dark\"] .vs-icon { stroke: #8FA0B6; }\n  #catalogo-soporte[data-theme=\"dark\"] .vs-kbd { color: #8FA0B6; background: rgba(255,255,255,0.05); }\n  #catalogo-soporte[data-theme=\"dark\"] .vs-clear { color: #A9B7C8; }\n  #catalogo-soporte[data-theme=\"dark\"] .vs-pop { background: var(--bg-deep); color: #F5F7FA; border-color: var(--line); box-shadow: 0 24px 48px rgba(0,0,0,0.5); }\n  #catalogo-soporte[data-theme=\"dark\"] .vs-opt[aria-selected=\"true\"] { background: rgba(61,139,255,0.16); }\n  #catalogo-soporte[data-theme=\"dark\"] .vs-thumb { background: #FFFFFF; }\n  #catalogo-soporte[data-theme=\"dark\"] .vs-opt-name mark { color: #7FB2FF; }\n  #catalogo-soporte[data-theme=\"dark\"] .vs-pop-head, #catalogo-soporte[data-theme=\"dark\"] .vs-opt-cat, #catalogo-soporte[data-theme=\"dark\"] .vs-pop-more, #catalogo-soporte[data-theme=\"dark\"] .vs-status, #catalogo-soporte[data-theme=\"dark\"] .vs-empty-sub { color: #A9B7C8; }\n  #catalogo-soporte[data-theme=\"dark\"] .vs-empty { background: rgba(12,20,38,0.6); border-color: var(--line); }\n  #catalogo-soporte[data-theme=\"dark\"] .vs-empty-title { color: #F5F7FA; }\n  #catalogo-soporte[data-theme=\"dark\"] .vs-chip { background: rgba(255,255,255,0.04); color: #F5F7FA; border-color: var(--line); }\n  #catalogo-soporte[data-theme=\"dark\"] .vs-chip span { background: rgba(61,139,255,0.18); color: #BFD9FF; }\n  @media (hover: hover) and (pointer: fine) {\n    #catalogo-soporte[data-theme=\"dark\"] .vs-opt:hover { background: rgba(61,139,255,0.16); }\n    #catalogo-soporte[data-theme=\"dark\"] .vs-clear:hover { background: rgba(255,255,255,0.08); color: #F5F7FA; }\n  }\n\n  \n  #catalogo-soporte button.model-card {\n    font: inherit;\n    text-align: left;\n    padding: 0;\n    cursor: pointer;\n    transition: transform 200ms var(--ease-out), box-shadow 200ms var(--ease-out);\n    -webkit-tap-highlight-color: transparent;\n  }\n\n  #catalogo-soporte button.model-card:focus-visible {\n    transform: translateY(-4px);\n    box-shadow: 0 16px 30px var(--paper-shadow);\n  }\n\n  #catalogo-soporte .model-card .storage-photo img { transition: transform 300ms var(--ease-out); }\n\n  @media (hover: hover) and (pointer: fine) {\n    #catalogo-soporte button.model-card:hover {\n      transform: translateY(-4px);\n      box-shadow: 0 16px 30px var(--paper-shadow);\n    }\n    #catalogo-soporte button.model-card:hover .storage-photo img { transform: scale(1.04); }\n  }\n\n  #catalogo-soporte button.model-card:active { transform: scale(0.98); transition-duration: 120ms; }\n\n  \n  @keyframes card-in {\n    from { opacity: 0; transform: translateY(10px); }\n  }\n\n  #catalogo-soporte .catalog-view.is-entering .storage-card {\n    animation: card-in 360ms var(--ease-out) backwards;\n    animation-delay: calc(min(var(--i, 0), 8) * 40ms);\n  }\n\n  #catalogo-soporte button.model-card:focus-visible { outline: 3px solid #BFE0FF; outline-offset: 3px; }\n\n  #catalogo-soporte .model-card .storage-icons { grid-template-columns: repeat(2, minmax(0, 1fr)); }\n  #catalogo-soporte .model-card .storage-icon-small { flex-direction: row; justify-content: center; gap: 6px; padding: 8px 6px; }\n  #catalogo-soporte .model-card .storage-icon-small svg { width: 18px; height: 18px; flex-shrink: 0; }\n\n  #catalogo-soporte .model-card .card-hint { font-size: 11px; color: var(--ink-soft); }\n\n  #catalogo-soporte .storage-photo {\n    background: #F3F5F7;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    padding: 18px;\n  }\n\n  #catalogo-soporte .storage-photo svg, #catalogo-soporte .storage-photo img { width: 100%; height: 100%; object-fit: contain; }\n  #catalogo-soporte .storage-photo img { max-height: 224px; }\n\n  #catalogo-soporte .storage-info {\n    padding: 22px 20px;\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n    min-width: 0;\n  }\n\n  #catalogo-soporte .storage-info .brand-line { display: flex; align-items: center; gap: 8px; }\n  #catalogo-soporte .storage-info h3 {\n    font-family: 'Inter', sans-serif;\n    font-weight: 700;\n    font-size: 20px;\n    line-height: 1.2;\n    margin: 0;\n  }\n  #catalogo-soporte .storage-info .cat-chip { align-self: flex-start; background: var(--accent-soft); color: #1B4A78; }\n\n  #catalogo-soporte .storage-icons {\n    display: grid;\n    grid-template-columns: repeat(3, minmax(0, 1fr));\n    gap: 8px;\n    margin-top: auto;\n  }\n\n  #catalogo-soporte .storage-icon {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 4px;\n    background: var(--accent-soft);\n    color: #1B4A78;\n    border-radius: 10px;\n    padding: 8px 4px;\n    text-align: center;\n  }\n\n  #catalogo-soporte .storage-icon svg { width: 22px; height: 22px; }\n  #catalogo-soporte .storage-icon-wide { grid-column: 1 / -1; flex-direction: row; justify-content: center; gap: 8px; padding: 8px 10px; }\n  #catalogo-soporte .storage-icons { grid-template-columns: repeat(2, minmax(0, 1fr)); }\n  #catalogo-soporte .storage-icon span { font-size: 11px; font-weight: 700; line-height: 1.2; }\n\n  @media (max-width: 420px) {\n    #catalogo-soporte .storage-card { grid-template-columns: 1fr; }\n    #catalogo-soporte .storage-photo { aspect-ratio: 4 / 3; }\n  }\n\n  #catalogo-soporte footer {\n    margin-top: 44px;\n    font-size: 12.5px;\n    color: #BFD3E8;\n    text-align: center;\n  }\n\n  \n  #catalogo-soporte {\n    --accent: #3D8BFF;\n    --accent-2: #2B6FD6;\n    --line: rgba(15,23,42,0.10);\n    --mute: #5B6779;\n    --font-display: 'Instrument Serif', Georgia, 'Times New Roman', serif;\n  }\n\n  #catalogo-soporte .bg-power { opacity: 0.05; }\n\n  #catalogo-soporte .scroll-progress {\n    position: fixed;\n    top: 0; left: 0; right: 0;\n    height: 2px;\n    z-index: 60;\n    transform-origin: 0 50%;\n    transform: scaleX(var(--p, 0));\n    background: linear-gradient(90deg, var(--accent), var(--accent-2));\n    pointer-events: none;\n  }\n\n  \n  #catalogo-soporte .site-nav {\n    position: sticky;\n    top: 12px;\n    z-index: 40;\n    width: min(1440px, 100%);\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    gap: 16px;\n    padding: 10px 10px 10px 16px;\n    margin-bottom: 28px;\n    border-radius: 18px;\n    border: 1px solid transparent;\n    transition: background-color 250ms ease, border-color 250ms ease, box-shadow 250ms ease,\n      transform 320ms var(--ease-out), opacity 220ms ease;\n    background: rgba(255,255,255,0.86);\n    -webkit-backdrop-filter: blur(16px) saturate(160%);\n    backdrop-filter: blur(16px) saturate(160%);\n    border-color: var(--line);\n    box-shadow: 0 10px 30px rgba(15,23,42,0.08);\n  }\n  \n  #catalogo-soporte .site-nav.nav-hidden { transform: translateY(calc(-100% - 24px)); opacity: 0; pointer-events: none; }\n  #catalogo-soporte[data-theme=\"dark\"] .site-nav { background: none; -webkit-backdrop-filter: none; backdrop-filter: none; border-color: transparent; box-shadow: none; }\n\n  #catalogo-soporte[data-theme=\"dark\"] .site-nav.is-solid {\n    background: rgba(9,15,28,0.72);\n    -webkit-backdrop-filter: blur(16px) saturate(160%);\n    backdrop-filter: blur(16px) saturate(160%);\n    border-color: var(--line);\n    box-shadow: 0 12px 32px rgba(0,0,0,0.35);\n  }\n\n  #catalogo-soporte .nav-brand {\n    display: flex;\n    align-items: center;\n    gap: 10px;\n    color: #0F172A;\n    text-decoration: none;\n    font-weight: 700;\n    font-size: 15px;\n    letter-spacing: -0.01em;\n  }\n\n  #catalogo-soporte .nav-brand img { width: auto; height: 30px; object-fit: contain; }\n  \n  #catalogo-soporte .brand-logo--dark { display: none; }\n  #catalogo-soporte[data-theme=\"dark\"] .brand-logo--light { display: none; }\n  #catalogo-soporte[data-theme=\"dark\"] .brand-logo--dark { display: block; }\n  #catalogo-soporte .brand-header .brand-logo { width: auto; height: clamp(46px, 7vw, 64px); }\n  #catalogo-soporte .footer-logo .brand-logo { width: auto; height: 34px; }\n  \n  #catalogo-soporte header:not(.in-category) #catTitle { position: absolute; width: 1px; height: 1px; overflow: hidden; clip: rect(0 0 0 0); white-space: nowrap; }\n\n  #catalogo-soporte .nav-menu { display: flex; align-items: center; gap: 4px; }\n\n  #catalogo-soporte .nav-link {\n    display: inline-flex;\n    align-items: center;\n    gap: 6px;\n    color: #334155;\n    text-decoration: none;\n    font: 500 14px/1 'Inter', sans-serif;\n    padding: 11px 13px;\n    border-radius: 10px;\n    background: none;\n    border: 0;\n    cursor: pointer;\n    transition: color 150ms ease, background-color 150ms ease;\n  }\n\n  @media (hover: hover) and (pointer: fine) {\n    #catalogo-soporte .nav-link:hover { color: #0F172A; background: rgba(15,23,42,0.05); }\n  }\n\n  #catalogo-soporte .nav-link:focus-visible, #catalogo-soporte .nav-dropdown a:focus-visible, #catalogo-soporte .nav-brand:focus-visible { outline: 2px solid var(--accent-2); outline-offset: 2px; }\n\n  #catalogo-soporte .nav-chevron { transition: transform 200ms var(--ease-out); }\n  #catalogo-soporte .nav-group.open .nav-chevron { transform: rotate(180deg); }\n\n  #catalogo-soporte .nav-cta { margin-left: 8px; padding: 11px 18px; font-size: 14px; }\n\n  #catalogo-soporte .nav-group { position: relative; }\n\n  #catalogo-soporte .nav-dropdown {\n    position: absolute;\n    top: calc(100% + 10px);\n    left: 50%;\n    width: 480px;\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    gap: 2px;\n    padding: 8px;\n    border-radius: 16px;\n    background: #FFFFFF;\n    -webkit-backdrop-filter: blur(16px);\n    backdrop-filter: blur(16px);\n    border: 1px solid var(--line);\n    box-shadow: 0 24px 60px rgba(15,23,42,0.14);\n    opacity: 0;\n    pointer-events: none;\n    transform: translate(-50%, -6px) scale(0.98);\n    transform-origin: top center;\n    transition: opacity 180ms var(--ease-out), transform 180ms var(--ease-out);\n  }\n\n  #catalogo-soporte .nav-group.open .nav-dropdown { opacity: 1; pointer-events: auto; transform: translate(-50%, 0) scale(1); }\n\n  #catalogo-soporte .nav-dropdown a {\n    display: block;\n    padding: 11px 12px;\n    border-radius: 10px;\n    color: #0F172A;\n    text-decoration: none;\n    font: 600 14px/1.25 'Inter', sans-serif;\n    transition: background-color 150ms ease;\n  }\n\n  #catalogo-soporte .nav-dropdown a small { display: block; margin-top: 3px; color: var(--mute); font-size: 12px; font-weight: 400; }\n\n  \n  #catalogo-soporte .nav-group.has-mega { position: static; }\n  #catalogo-soporte .nav-dropdown.is-mega {\n    width: max-content; max-width: calc(100vw - 32px); max-height: calc(100vh - 120px);\n    display: flex; align-items: flex-start; gap: 0 10px; padding: 16px; overflow: auto; overscroll-behavior: contain;\n  }\n  #catalogo-soporte .mega-col { display: flex; flex-direction: column; gap: 8px; flex: 0 1 max-content; min-width: 110px; max-width: 160px; }\n  #catalogo-soporte .mega-cat { display: flex; flex-direction: column; }\n  \n  #catalogo-soporte .nav-dropdown.is-mega a { display: block; padding: 2px 8px; border-radius: 6px; overflow-wrap: anywhere; }\n  #catalogo-soporte .nav-dropdown.is-mega .mega-head { padding-block: 4px 3px; font: 700 12.5px/17px 'Inter', sans-serif; color: #0F172A; }\n  #catalogo-soporte .nav-dropdown.is-mega .mega-sub { padding-left: 14px; font: 500 11.5px/16px 'Inter', sans-serif; color: #475569; }\n  @media (hover: hover) and (pointer: fine) {\n    #catalogo-soporte .nav-dropdown.is-mega .mega-sub:hover { color: #0F172A; }\n  }\n\n  @media (hover: hover) and (pointer: fine) {\n    #catalogo-soporte .nav-dropdown a:hover { background: rgba(61,139,255,0.08); }\n  }\n\n  #catalogo-soporte .nav-toggle {\n    display: none;\n    width: 42px;\n    height: 42px;\n    border-radius: 12px;\n    border: 1px solid var(--line);\n    background: #FFFFFF;\n    cursor: pointer;\n    position: relative;\n  }\n\n  #catalogo-soporte .nav-toggle span {\n    position: absolute;\n    left: 12px; right: 12px;\n    height: 2px;\n    border-radius: 2px;\n    background: #0F172A;\n    transition: transform 200ms var(--ease-out), top 200ms var(--ease-out);\n  }\n\n  #catalogo-soporte .nav-toggle span:first-child { top: 16px; }\n  #catalogo-soporte .nav-toggle span:last-child { top: 24px; }\n  #catalogo-soporte .site-nav.menu-open .nav-toggle span:first-child { top: 20px; transform: rotate(45deg); }\n  #catalogo-soporte .site-nav.menu-open .nav-toggle span:last-child { top: 20px; transform: rotate(-45deg); }\n\n  @media (max-width: 860px) {\n    #catalogo-soporte .nav-toggle { display: block; }\n    #catalogo-soporte[data-theme=\"dark\"] .site-nav { background: rgba(9,15,28,0.72); -webkit-backdrop-filter: blur(16px); backdrop-filter: blur(16px); border-color: var(--line); }\n    #catalogo-soporte .nav-menu {\n      position: absolute;\n      top: calc(100% + 8px);\n      left: 0; right: 0;\n      flex-direction: column;\n      align-items: stretch;\n      gap: 2px;\n      padding: 10px;\n      border-radius: 16px;\n      background: #FFFFFF;\n      border: 1px solid var(--line);\n      box-shadow: 0 24px 60px rgba(15,23,42,0.14);\n      opacity: 0;\n      pointer-events: none;\n      transform: translateY(-6px);\n      transition: opacity 180ms var(--ease-out), transform 180ms var(--ease-out);\n      max-height: calc(100vh - 100px);\n      overflow-y: auto;\n    }\n    #catalogo-soporte .site-nav.menu-open .nav-menu { opacity: 1; pointer-events: auto; transform: none; }\n    #catalogo-soporte .nav-link { justify-content: space-between; padding: 14px; font-size: 15px; }\n    #catalogo-soporte .nav-dropdown {\n      position: static;\n      width: auto;\n      grid-template-columns: 1fr;\n      transform: none;\n      box-shadow: none;\n      border: 0;\n      background: rgba(15,23,42,0.03);\n      display: none;\n      opacity: 1;\n      pointer-events: auto;\n    }\n    #catalogo-soporte .nav-group.open .nav-dropdown { display: grid; transform: none; }\n    \n    #catalogo-soporte .nav-dropdown.is-mega { width: auto; max-width: none; max-height: none; padding: 8px; overflow: visible; display: none; }\n    #catalogo-soporte .nav-group.open .nav-dropdown.is-mega { display: flex; flex-direction: column; gap: 10px; }\n    #catalogo-soporte .mega-col { width: auto; }\n    #catalogo-soporte .mega-col { max-width: none; }\n    #catalogo-soporte .nav-dropdown.is-mega a { padding-block: 11px; }\n    #catalogo-soporte .nav-dropdown.is-mega .mega-head { font-size: 15px; }\n    #catalogo-soporte .nav-dropdown.is-mega .mega-sub { font-size: 14px; }\n    #catalogo-soporte .nav-cta { margin: 6px 0 0; padding: 14px; }\n  }\n\n\n  \n  #catalogo-soporte .eyebrow { color: var(--accent-2); letter-spacing: 0.14em; font-size: 12px; }\n  #catalogo-soporte h1 { font-family: var(--font-display); font-weight: 400; font-size: clamp(42px, 7vw, 66px); letter-spacing: -0.01em; }\n  #catalogo-soporte header p { color: #475569; }\n  #catalogo-soporte header .eyebrow { color: #475569; }\n\n  \n  #catalogo-soporte header.in-category { width: 100%; max-width: none; margin: 0 auto 22px; }\n  #catalogo-soporte header.in-category .brand-header { margin: 0; }\n  #catalogo-soporte header.in-category .brand-header img { display: none; }\n  #catalogo-soporte header.in-category h1 {\n    font-family: 'Inter', sans-serif;\n    font-weight: 800;\n    font-size: clamp(44px, 7vw, 84px);\n    line-height: 1;\n    letter-spacing: -0.04em;\n    color: #0F172A;\n  }\n  #catalogo-soporte[data-theme=\"dark\"] header.in-category h1 { color: #F5F7FA; }\n  #catalogo-soporte[data-theme=\"dark\"] .back-btn { color: #C7CFD8; background: rgba(255,255,255,0.04); border-color: var(--line); }\n  @media (hover: hover) and (pointer: fine) { #catalogo-soporte[data-theme=\"dark\"] .back-btn:hover { color: #F5F7FA; } }\n\n  \n  #catalogo-soporte .category-card {\n    width: 200px;\n    border-radius: 18px;\n    background: #FFFFFF;\n    border: 1px solid rgba(15,23,42,0.08);\n    box-shadow: 0 10px 26px rgba(15,23,42,0.06);\n    -webkit-backdrop-filter: none;\n    backdrop-filter: none;\n  }\n\n  #catalogo-soporte .category-label { font-family: 'Inter', sans-serif; font-weight: 600; font-size: 16px; letter-spacing: -0.01em; color: #0F172A; }\n\n  @media (hover: hover) and (pointer: fine) {\n    #catalogo-soporte .category-card:hover {\n      border-color: rgba(61,139,255,0.5);\n      background: #FFFFFF;\n      box-shadow: 0 0 0 1px rgba(61,139,255,0.18), 0 18px 40px rgba(15,23,42,0.12);\n    }\n  }\n\n  #catalogo-soporte .category-card:focus-visible { outline: 2px solid var(--accent-2); }\n\n  \n  #catalogo-soporte .storage-card { border: 1.5px solid rgba(61,139,255,0.75); border-radius: 18px; }\n  #catalogo-soporte .storage-info h3 { font-family: 'Inter', sans-serif; font-weight: 700; letter-spacing: -0.015em; }\n\n  \n  #catalogo-soporte .filter-label { color: #475569; letter-spacing: 0.08em; font-size: 11.5px; text-shadow: none; }\n  #catalogo-soporte .filter-select { background-color: #FFFFFF; border-color: var(--field-line); border-radius: 12px; -webkit-backdrop-filter: blur(10px); backdrop-filter: blur(10px); }\n  #catalogo-soporte .back-btn {\n    padding: 8px 14px;\n    border: 1px solid rgba(15,23,42,0.12);\n    border-radius: 999px;\n    background: #FFFFFF;\n    -webkit-backdrop-filter: blur(8px);\n    backdrop-filter: blur(8px);\n  }\n\n  \n  #catalogo-soporte .site-footer {\n    width: min(1440px, 100%);\n    margin-top: 80px;\n    padding: 48px clamp(20px, 4vw, 48px) 28px;\n    border-top: 1px solid var(--line);\n    color: #475569;\n    text-align: left;\n    font-size: 14px;\n  }\n\n  #catalogo-soporte .footer-grid { display: grid; grid-template-columns: 2fr 1fr 1fr; gap: 40px; }\n  #catalogo-soporte .footer-logo { display: flex; align-items: center; gap: 10px; margin-bottom: 14px; color: #0F172A; font-size: 17px; }\n  #catalogo-soporte .footer-brand p { max-width: 42ch; line-height: 1.6; margin: 0 0 18px; }\n  #catalogo-soporte .footer-col { display: flex; flex-direction: column; gap: 10px; }\n  #catalogo-soporte .footer-col h4 { margin: 0 0 6px; color: #0F172A; font: 600 13px 'Inter', sans-serif; letter-spacing: 0.08em; text-transform: uppercase; }\n  #catalogo-soporte .footer-col a { color: #475569; text-decoration: none; transition: color 150ms ease; }\n  @media (hover: hover) and (pointer: fine) { #catalogo-soporte .footer-col a:hover { color: #0F172A; } }\n  #catalogo-soporte .footer-bottom { display: flex; flex-wrap: wrap; justify-content: space-between; gap: 10px; margin-top: 40px; padding-top: 20px; border-top: 1px solid var(--line); color: var(--mute); font-size: 12.5px; }\n\n  @media (max-width: 720px) {\n    #catalogo-soporte .footer-grid { grid-template-columns: 1fr 1fr; }\n    #catalogo-soporte .footer-brand { grid-column: 1 / -1; }\n  }\n\n  \n  #catalogo-soporte .catalog-layout {\n    display: grid;\n    grid-template-columns: 230px minmax(0, 1fr);\n    gap: 24px;\n    width: 100%;\n    align-items: start;\n  }\n\n  #catalogo-soporte .filter-panel {\n    position: sticky;\n    top: 96px;\n    z-index: 5;\n    display: flex;\n    flex-direction: column;\n    gap: 16px;\n    padding: 20px;\n    border-radius: 18px;\n    background: rgba(255,255,255,0.94);\n    border: 1px solid var(--line);\n    -webkit-backdrop-filter: blur(14px);\n    backdrop-filter: blur(14px);\n    box-shadow: 0 18px 44px rgba(15,23,42,0.08);\n  }\n\n  #catalogo-soporte .filter-panel-title { margin: 0; color: #0F172A; font: 700 12px 'Inter', sans-serif; letter-spacing: 0.14em; text-transform: uppercase; }\n\n  #catalogo-soporte .filter-panel .filter-row, #catalogo-soporte .filter-panel .filter-row:last-of-type {\n    flex-direction: column;\n    align-items: stretch;\n    gap: 8px;\n    margin: 0;\n    width: auto;\n  }\n\n  #catalogo-soporte .filter-panel .filter-select { width: 100%; min-width: 0; }\n\n  #catalogo-soporte .filter-reset {\n    align-self: flex-start;\n    background: none;\n    border: 0;\n    padding: 4px 0;\n    color: #2B6FD6;\n    font: 600 13px 'Inter', sans-serif;\n    cursor: pointer;\n    transition: color 150ms ease;\n  }\n\n  @media (hover: hover) and (pointer: fine) { #catalogo-soporte .filter-reset:hover { color: #0F172A; } }\n\n  \n  #catalogo-soporte .catalog-layout .storage-grid {\n    grid-template-columns: repeat(4, minmax(0, 1fr));\n    gap: 18px;\n    container-type: inline-size;\n    container-name: cards;\n  }\n\n  \n  #catalogo-soporte .catalog-layout .storage-card { grid-template-columns: minmax(0, 1fr); min-height: 0; }\n  #catalogo-soporte .catalog-layout .storage-photo { aspect-ratio: 16 / 10; padding: 10px 8px; }\n  #catalogo-soporte .catalog-layout .storage-photo img { max-height: 210px; }\n  #catalogo-soporte .catalog-layout .storage-info { padding: 16px 16px 18px; gap: 8px; }\n  #catalogo-soporte .catalog-layout .storage-info h3 { font-size: 17px; }\n\n  \n  @container cards (min-width: 1734px) {\n    .catalog-layout .storage-card { grid-template-columns: 1fr 1fr; min-height: 260px; }\n    .catalog-layout .storage-photo { aspect-ratio: auto; }\n    .catalog-layout .storage-photo img { max-height: 224px; }\n  }\n\n  @media (max-width: 1199px) {\n    #catalogo-soporte .catalog-layout .storage-grid { grid-template-columns: repeat(3, minmax(0, 1fr)); }\n  }\n\n  @media (max-width: 899px) {\n    #catalogo-soporte .catalog-layout .storage-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }\n  }\n\n  @media (max-width: 640px) {\n    #catalogo-soporte .catalog-layout .storage-grid { grid-template-columns: minmax(0, 1fr); }\n  }\n\n  @media (max-width: 900px) {\n    #catalogo-soporte .catalog-layout { grid-template-columns: minmax(0, 1fr); gap: 18px; }\n    #catalogo-soporte .filter-panel {\n      top: 76px;\n      flex-direction: row;\n      align-items: flex-end;\n      gap: 12px;\n      padding: 12px;\n      overflow-x: auto;\n      border-radius: 14px;\n    }\n    #catalogo-soporte .filter-panel-title { display: none; }\n    #catalogo-soporte .filter-panel .filter-row { min-width: 170px; }\n    #catalogo-soporte .filter-reset { align-self: center; white-space: nowrap; }\n\n  }\n\n  \n  @media (max-width: 640px) {\n    #catalogo-soporte .filter-panel { flex-wrap: wrap; overflow-x: visible; position: static; }\n    #catalogo-soporte .filter-panel .filter-row { min-width: 0; flex: 1 1 calc(50% - 6px); }\n    #catalogo-soporte .filter-reset { flex-basis: 100%; }\n  }\n\n  \n  #catalogo-soporte .featured { width: min(1440px, 100%); margin: 72px 0 72px; }\n  #catalogo-soporte .featured-head { text-align: center; margin-bottom: 26px; }\n  #catalogo-soporte .featured-head h2 { font-family: var(--font-display); font-weight: 400; font-size: clamp(36px, 5vw, 54px); line-height: 1.05; color: #0F172A; margin: 0 0 10px; }\n  #catalogo-soporte .featured-head p:last-child { color: #475569; margin: 0; font-size: 15.5px; }\n\n  #catalogo-soporte .slider {\n    position: relative;\n    height: clamp(400px, 44vw, 580px);\n    border-radius: 24px;\n    overflow: hidden;\n    border: 1px solid var(--line);\n    box-shadow: 0 30px 70px rgba(15,23,42,0.18);\n    background: #0B1427;\n    outline: none;\n    touch-action: pan-y;\n  }\n\n  #catalogo-soporte .slider:focus-visible { outline: 2px solid var(--accent-2); outline-offset: 4px; }\n\n  #catalogo-soporte .slide {\n    position: absolute;\n    inset: 0;\n    opacity: 0;\n    visibility: hidden;\n    transition: opacity 800ms ease, visibility 0s linear 800ms;\n  }\n\n  #catalogo-soporte .slide.is-active { opacity: 1; visibility: visible; transition: opacity 800ms ease; }\n\n  #catalogo-soporte .slide img {\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n    transform: scale(1.08);\n    transition: transform 7.5s cubic-bezier(.2,.6,.2,1);\n  }\n\n  #catalogo-soporte .slide.is-active img { transform: scale(1); }\n\n  #catalogo-soporte .slide::after {\n    content: \"\";\n    position: absolute;\n    inset: 0;\n    background:\n      linear-gradient(90deg, rgba(7,12,24,0.9) 0%, rgba(7,12,24,0.6) 36%, rgba(7,12,24,0.05) 72%),\n      linear-gradient(0deg, rgba(7,12,24,0.65) 0%, transparent 42%);\n    pointer-events: none;\n  }\n\n  #catalogo-soporte .slide-content {\n    position: absolute;\n    left: clamp(24px, 5vw, 72px);\n    bottom: clamp(64px, 7vw, 100px);\n    z-index: 1;\n    max-width: 540px;\n    color: #FFFFFF;\n    opacity: 0;\n    translate: 0 16px;\n    transition: opacity 600ms var(--ease-out) 150ms, translate 600ms var(--ease-out) 150ms;\n  }\n\n  #catalogo-soporte .slide.is-active .slide-content { opacity: 1; translate: none; }\n\n  #catalogo-soporte .slide-chip {\n    display: inline-block;\n    padding: 6px 12px;\n    border-radius: 999px;\n    background: rgba(61,139,255,0.22);\n    border: 1px solid rgba(140,194,255,0.35);\n    color: #DCEBFF;\n    font: 600 12.5px/1 'Inter', sans-serif;\n    letter-spacing: 0.04em;\n  }\n\n  #catalogo-soporte .slide-content h3 {\n    font-family: var(--font-display);\n    font-weight: 400;\n    font-size: clamp(36px, 5vw, 66px);\n    line-height: 1.02;\n    margin: 16px 0 10px;\n    text-shadow: 0 4px 30px rgba(0,0,0,0.4);\n  }\n\n  #catalogo-soporte .slide-content p { margin: 0 0 22px; color: #DCE6F3; font: 500 17px/1.5 'Inter', sans-serif; }\n\n  #catalogo-soporte .slider-dots {\n    position: absolute;\n    left: clamp(24px, 5vw, 72px);\n    bottom: clamp(24px, 3vw, 36px);\n    z-index: 2;\n    display: flex;\n    gap: 8px;\n  }\n\n  #catalogo-soporte .slider-dot {\n    width: 28px;\n    height: 4px;\n    padding: 0;\n    border: 0;\n    border-radius: 4px;\n    background: rgba(255,255,255,0.28);\n    overflow: hidden;\n    cursor: pointer;\n    transition: width 300ms var(--ease-out), background-color 150ms ease;\n  }\n\n  #catalogo-soporte .slider-dot.is-active { width: 64px; }\n  #catalogo-soporte .slider-dot span { display: block; width: 100%; height: 100%; background: #FFFFFF; transform-origin: 0 50%; transform: scaleX(0); }\n  #catalogo-soporte .slider-dot.is-active span { animation: slider-progress 6.5s linear forwards; }\n  #catalogo-soporte .slider.is-paused .slider-dot.is-active span { animation-play-state: paused; }\n  @keyframes slider-progress { to { transform: scaleX(1); } }\n\n  #catalogo-soporte .slider-nav {\n    position: absolute;\n    right: clamp(16px, 3vw, 32px);\n    bottom: clamp(16px, 2.6vw, 28px);\n    z-index: 2;\n    display: flex;\n    gap: 8px;\n  }\n\n  #catalogo-soporte .slider-arrow {\n    width: 46px;\n    height: 46px;\n    border-radius: 50%;\n    border: 1px solid rgba(255,255,255,0.2);\n    background: rgba(9,15,28,0.55);\n    -webkit-backdrop-filter: blur(10px);\n    backdrop-filter: blur(10px);\n    color: #FFFFFF;\n    display: grid;\n    place-items: center;\n    cursor: pointer;\n    transition: background-color 150ms ease, border-color 150ms ease, transform 160ms var(--ease-out);\n  }\n\n  @media (hover: hover) and (pointer: fine) {\n    #catalogo-soporte .slider-arrow:hover { background: rgba(61,139,255,0.35); border-color: rgba(140,194,255,0.5); }\n  }\n\n  #catalogo-soporte .slider-arrow:active { transform: scale(0.94); }\n\n  @media (max-width: 720px) {\n    #catalogo-soporte .slider { height: 540px; }\n    #catalogo-soporte .slide::after { background: linear-gradient(0deg, rgba(7,12,24,0.94) 0%, rgba(7,12,24,0.55) 50%, rgba(7,12,24,0) 78%); }\n    #catalogo-soporte .slide-content { left: 20px; right: 20px; bottom: 64px; }\n    #catalogo-soporte .slider-nav { display: none; }\n    #catalogo-soporte .slider-dots { left: 20px; }\n  }\n\n  \n  #catalogo-soporte .storage-card.is-highlight { animation: card-highlight 2s var(--ease-out); }\n  @keyframes card-highlight {\n    0% { box-shadow: 0 0 0 0 rgba(61,139,255,0); }\n    18% { box-shadow: 0 0 0 6px rgba(61,139,255,0.65), 0 20px 40px rgba(0,0,0,0.35); }\n    100% { box-shadow: 0 0 0 0 rgba(61,139,255,0); }\n  }\n\n  \n  #catalogo-soporte .credits-link {\n    background: none;\n    border: 0;\n    padding: 0;\n    font: inherit;\n    color: inherit;\n    text-decoration: underline;\n    text-decoration-color: rgba(147,166,191,0.4);\n    text-underline-offset: 3px;\n    cursor: pointer;\n    transition: color 150ms ease;\n  }\n\n  @media (hover: hover) and (pointer: fine) { #catalogo-soporte .credits-link:hover { color: #0F172A; } }\n\n  #catalogo-soporte .credits-scrim { z-index: 30; }\n\n  #catalogo-soporte .credits-modal {\n    position: fixed;\n    top: 50%;\n    left: 50%;\n    width: min(620px, calc(100% - 32px));\n    max-height: calc(100vh - 60px);\n    overflow-y: auto;\n    padding: 22px 24px 20px;\n    border-radius: 18px;\n    background: #FFFFFF;\n    border: 1px solid var(--line);\n    box-shadow: 0 30px 80px rgba(15,23,42,0.18);\n    color: #475569;\n    font-size: 12.5px;\n    line-height: 1.6;\n    z-index: 31;\n    opacity: 0;\n    pointer-events: none;\n    transform: translate(-50%, -50%) scale(0.96);\n    transition: opacity 200ms var(--ease-out), transform 200ms var(--ease-out);\n  }\n\n  #catalogo-soporte .credits-modal.open { opacity: 1; pointer-events: auto; transform: translate(-50%, -50%) scale(1); }\n  #catalogo-soporte .credits-top { display: flex; align-items: center; justify-content: space-between; margin-bottom: 8px; }\n  #catalogo-soporte .credits-modal h2 { margin: 0; color: #0F172A; font: 700 16px 'Inter', sans-serif; letter-spacing: -0.01em; }\n  #catalogo-soporte .credits-modal p { margin: 14px 0 6px; color: #0F172A; font-weight: 600; font-size: 12px; letter-spacing: 0.06em; text-transform: uppercase; }\n  #catalogo-soporte .credits-modal p.credits-note { text-transform: none; letter-spacing: 0; font-weight: 400; color: var(--mute); margin-top: 16px; }\n  #catalogo-soporte .credits-modal ul { margin: 0; padding-left: 18px; }\n  #catalogo-soporte .credits-modal a { color: #2B6FD6; }\n\n  \n  #catalogo-soporte #pageContent.js-ready .reveal {\n    opacity: 0;\n    translate: 0 18px;\n    transition: opacity 700ms var(--ease-out), translate 700ms var(--ease-out),\n                transform 200ms var(--ease-out), box-shadow 200ms var(--ease-out),\n                border-color 200ms ease, background-color 200ms ease;\n    transition-delay: calc(min(var(--i, 0), 6) * 40ms), calc(min(var(--i, 0), 6) * 40ms), 0s, 0s, 0s, 0s; /* short cascade: everything visible in under 1 s */\n  }\n\n  #catalogo-soporte #pageContent.js-ready .reveal.is-visible { opacity: 1; translate: none; }\n\n  \n  #catalogo-soporte .nav-menu { order: 1; margin-left: auto; }\n  #catalogo-soporte .theme-toggle { order: 2; }\n  #catalogo-soporte .nav-toggle { order: 3; color: #0F172A; }\n\n  #catalogo-soporte .theme-toggle {\n    width: 42px;\n    height: 42px;\n    margin-left: 8px;\n    border-radius: 12px;\n    border: 1px solid var(--line);\n    background: #FFFFFF;\n    color: #0F172A;\n    display: grid;\n    place-items: center;\n    cursor: pointer;\n    flex-shrink: 0;\n    transition: background-color 150ms ease, color 150ms ease, transform 160ms var(--ease-out);\n  }\n\n  #catalogo-soporte .theme-toggle:active { transform: scale(0.94); }\n  #catalogo-soporte .theme-toggle:focus-visible { outline: 2px solid var(--accent-2); outline-offset: 2px; }\n  #catalogo-soporte .theme-toggle .icon-moon { display: block; }\n  #catalogo-soporte[data-theme=\"dark\"] .theme-toggle .icon-moon { display: none; }\n  #catalogo-soporte .theme-toggle .icon-sun { display: none; }\n  #catalogo-soporte[data-theme=\"dark\"] .theme-toggle .icon-sun { display: block; }\n\n  @media (max-width: 860px) {\n    #catalogo-soporte .theme-toggle { margin-left: auto; margin-right: 8px; }\n  }\n\n  \n  #catalogo-soporte[data-theme=\"dark\"] {\n    --bg: #0A1222;\n    --bg-deep: #111C33;\n    --line: rgba(255,255,255,0.09);\n    --mute: #93A6BF;\n    --accent-2: #8CC2FF;\n    --paper-shadow: rgba(0,0,0,0.35);\n    --field-line: rgba(255,255,255,0.16);\n    --close-bg: var(--bg-deep);\n  }\n\n  #catalogo-soporte[data-theme=\"dark\"] { background: radial-gradient(1200px 640px at 8% -12%, rgba(61,139,255,0.20), transparent 60%),\n                radial-gradient(900px 560px at 100% 112%, rgba(99,102,241,0.16), transparent 60%),\n                var(--bg); color: var(--panel); }\n\n  #catalogo-soporte[data-theme=\"dark\"] .bg-power { opacity: 0.10; }\n\n  \n  #catalogo-soporte[data-theme=\"dark\"] .nav-brand { color: #F5F7FA; }\n  #catalogo-soporte[data-theme=\"dark\"] .nav-link { color: #C9D4E3; }\n  #catalogo-soporte[data-theme=\"dark\"] .nav-dropdown { background: rgba(12,20,38,0.97); box-shadow: 0 24px 60px rgba(0,0,0,0.5); }\n  #catalogo-soporte[data-theme=\"dark\"] .nav-dropdown a { color: #E3EAF4; }\n  #catalogo-soporte[data-theme=\"dark\"] .nav-dropdown.is-mega .mega-head { color: #F5F7FA; }\n  #catalogo-soporte[data-theme=\"dark\"] .nav-dropdown.is-mega .mega-sub { color: #A9B8CC; }\n  #catalogo-soporte[data-theme=\"dark\"] .theme-toggle { background: rgba(255,255,255,0.04); color: #F5F7FA; }\n  #catalogo-soporte[data-theme=\"dark\"] .nav-toggle { background: rgba(255,255,255,0.04); color: revert; }\n  #catalogo-soporte[data-theme=\"dark\"] .nav-toggle span { background: #F5F7FA; }\n\n  @media (hover: hover) and (pointer: fine) {\n    #catalogo-soporte[data-theme=\"dark\"] .nav-link:hover { color: #FFFFFF; background: rgba(255,255,255,0.06); }\n    #catalogo-soporte[data-theme=\"dark\"] .nav-dropdown a:hover { background: rgba(61,139,255,0.12); }\n    #catalogo-soporte[data-theme=\"dark\"] .nav-dropdown.is-mega .mega-sub:hover { color: #FFFFFF; }\n    #catalogo-soporte .theme-toggle:hover { background: #F1F5FB; }\n    #catalogo-soporte[data-theme=\"dark\"] .theme-toggle:hover { background: rgba(255,255,255,0.04); }\n  }\n\n  @media (max-width: 860px) {\n    #catalogo-soporte[data-theme=\"dark\"] .nav-menu { background: #0C1426; box-shadow: 0 24px 60px rgba(0,0,0,0.5); }\n    #catalogo-soporte[data-theme=\"dark\"] .nav-dropdown { background: rgba(255,255,255,0.03); box-shadow: none; }\n  }\n\n  \n  #catalogo-soporte[data-theme=\"dark\"] h1 { color: #F5F7FA; }\n  #catalogo-soporte[data-theme=\"dark\"] header p { color: #A9B8CC; }\n  #catalogo-soporte[data-theme=\"dark\"] header .eyebrow { color: var(--accent-2); }\n\n  \n  #catalogo-soporte[data-theme=\"dark\"] .category-card {\n    background: rgba(255,255,255,0.035);\n    border-color: var(--line);\n    box-shadow: none;\n    -webkit-backdrop-filter: blur(6px);\n    backdrop-filter: blur(6px);\n  }\n  #catalogo-soporte[data-theme=\"dark\"] .category-label { color: #F1F5FB; }\n  @media (hover: hover) and (pointer: fine) {\n    #catalogo-soporte[data-theme=\"dark\"] .category-card:hover {\n      background: rgba(61,139,255,0.08);\n      border-color: rgba(61,139,255,0.55);\n      box-shadow: 0 0 0 1px rgba(61,139,255,0.2), 0 20px 44px rgba(0,0,0,0.35);\n    }\n  }\n\n  \n  #catalogo-soporte[data-theme=\"dark\"] .featured-head h2 { color: #FFFFFF; }\n  #catalogo-soporte[data-theme=\"dark\"] .featured-head p:last-child { color: #A9B8CC; }\n  #catalogo-soporte[data-theme=\"dark\"] .slider { box-shadow: 0 30px 80px rgba(0,0,0,0.45); }\n\n  \n  #catalogo-soporte[data-theme=\"dark\"] .filter-panel { background: rgba(12,20,38,0.82); box-shadow: 0 18px 44px rgba(0,0,0,0.3); }\n  #catalogo-soporte[data-theme=\"dark\"] .filter-panel-title { color: #FFFFFF; }\n  #catalogo-soporte[data-theme=\"dark\"] .filter-label { color: #E6EEF8; text-shadow: 0 1px 10px rgba(0,0,0,0.7); }\n  #catalogo-soporte[data-theme=\"dark\"] .filter-select {\n    color: #F5F7FA;\n    background-color: rgba(10,18,34,0.62);\n    background-image: url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"%23C7CFD8\" stroke-width=\"2\"><path d=\"M6 9l6 6 6-6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>');\n  }\n  #catalogo-soporte[data-theme=\"dark\"] .filter-select option { background: var(--bg-deep); color: #F5F7FA; }\n  #catalogo-soporte[data-theme=\"dark\"] .filter-reset { color: #A9C9F5; }\n  #catalogo-soporte[data-theme=\"dark\"] .storage-empty { color: #BFD3E8; }\n\n  \n  #catalogo-soporte[data-theme=\"dark\"] .credits-modal { background: #0E1830; color: #A9B8CC; box-shadow: 0 30px 80px rgba(0,0,0,0.55); }\n  #catalogo-soporte[data-theme=\"dark\"] .credits-modal h2 { color: #FFFFFF; }\n  #catalogo-soporte[data-theme=\"dark\"] .credits-modal p { color: #E3EAF4; }\n  #catalogo-soporte[data-theme=\"dark\"] .credits-modal p.credits-note { color: var(--mute); }\n  #catalogo-soporte[data-theme=\"dark\"] .credits-modal a { color: #A9C9F5; }\n\n  \n  #catalogo-soporte[data-theme=\"dark\"] .site-footer { color: #A9B8CC; }\n  #catalogo-soporte[data-theme=\"dark\"] .footer-logo { color: #F5F7FA; }\n  #catalogo-soporte[data-theme=\"dark\"] .footer-col h4 { color: #F5F7FA; }\n  #catalogo-soporte[data-theme=\"dark\"] .footer-col a { color: #A9B8CC; }\n  @media (hover: hover) and (pointer: fine) {\n    #catalogo-soporte[data-theme=\"dark\"] .footer-col a:hover { color: #FFFFFF; }\n    #catalogo-soporte[data-theme=\"dark\"] .credits-link:hover { color: #FFFFFF; }\n    #catalogo-soporte[data-theme=\"dark\"] .filter-reset:hover { color: #FFFFFF; }\n  }\n\n  \n  #catalogo-soporte .catalog-layout .storage-card { background: transparent; }\n  #catalogo-soporte .catalog-layout .storage-photo { background: #FFFFFF; }\n  \n  #catalogo-soporte .catalog-layout .storage-info { color: var(--ink); }\n  #catalogo-soporte .catalog-layout .storage-info h3 { color: var(--ink); }\n  #catalogo-soporte .catalog-layout .storage-info .brand-name { color: var(--ink-soft); }\n  #catalogo-soporte .catalog-layout .model-card .card-hint { color: var(--ink-soft); }\n  #catalogo-soporte .catalog-layout .storage-icon { background: var(--accent-soft); color: #1B4A78; }\n  \n  #catalogo-soporte[data-theme=\"dark\"] .catalog-layout .storage-info { color: #F1F5FB; }\n  #catalogo-soporte[data-theme=\"dark\"] .catalog-layout .storage-info h3 { color: #F1F5FB; }\n  #catalogo-soporte[data-theme=\"dark\"] .catalog-layout .storage-info .brand-name { color: #A9B7C8; }\n  #catalogo-soporte[data-theme=\"dark\"] .catalog-layout .model-card .card-hint { color: #8FA0B5; }\n  #catalogo-soporte[data-theme=\"dark\"] .catalog-layout .storage-icon { background: rgba(61,139,255,0.16); color: #D6E6FF; }\n\n  \n  @media (max-width: 640px) {\n    \n    #catalogo-soporte .landing { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 10px; width: 100%; }\n    #catalogo-soporte .category-card { width: auto; height: 100%; padding: 16px 3px 14px; gap: 8px; border-radius: 14px; }\n    #catalogo-soporte .category-icon { width: 46px; height: 46px; }\n    #catalogo-soporte .category-label { font-size: 11.5px; line-height: 1.25; text-align: center; letter-spacing: -0.02em; hyphens: auto; -webkit-hyphens: auto; }\n\n    \n    #catalogo-soporte .catalog-layout .storage-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 10px; }\n    #catalogo-soporte .catalog-layout .storage-card { border-radius: 14px; }\n    #catalogo-soporte .catalog-layout .storage-photo { aspect-ratio: 4 / 3; padding: 6px; }\n    #catalogo-soporte .catalog-layout .storage-photo img { max-height: 130px; }\n    #catalogo-soporte .catalog-layout .storage-info { padding: 10px 10px 12px; gap: 6px; }\n    #catalogo-soporte .catalog-layout .storage-info h3 { font-size: 14px; line-height: 1.25; }\n    #catalogo-soporte .storage-info .brand-line { gap: 6px; }\n    #catalogo-soporte .brand-name { font-size: 10px; }\n    #catalogo-soporte .storage-icons { gap: 5px; }\n    #catalogo-soporte .storage-icon, #catalogo-soporte .model-card .storage-icon-small, #catalogo-soporte .storage-icon-wide { padding: 6px 4px; gap: 4px; border-radius: 8px; }\n    #catalogo-soporte .storage-icon svg, #catalogo-soporte .model-card .storage-icon-small svg { width: 14px; height: 14px; }\n    #catalogo-soporte .storage-icon span { font-size: 10px; overflow-wrap: anywhere; }\n    #catalogo-soporte .model-card .storage-icon-small { flex-direction: column; }\n    #catalogo-soporte .model-card .card-hint { display: none; }\n  }\n\n  \n  @media (max-width: 359px) {\n    #catalogo-soporte .landing { grid-template-columns: repeat(2, minmax(0, 1fr)); }\n  }\n\n  \n  #catalogo-soporte .site-nav { padding: 14px 14px 14px 24px; gap: 20px; border-radius: 22px; background: rgba(255,255,255,0.94); box-shadow: 0 14px 34px rgba(15,23,42,0.10); }\n  #catalogo-soporte[data-theme=\"dark\"] .site-nav, #catalogo-soporte[data-theme=\"dark\"] .site-nav.is-solid {\n    background: rgba(9,15,28,0.9); -webkit-backdrop-filter: blur(16px) saturate(160%); backdrop-filter: blur(16px) saturate(160%);\n    border-color: var(--line); box-shadow: 0 14px 34px rgba(0,0,0,0.38);\n  }\n  #catalogo-soporte .nav-brand img { height: 42px; }\n  #catalogo-soporte .nav-link { font-size: 15.5px; color: #1E293B; padding: 12px 15px; }\n  #catalogo-soporte[data-theme=\"dark\"] .nav-link { color: #E2E8F0; }\n  #catalogo-soporte .nav-cta { padding: 14px 22px; font-size: 15px; }\n  #catalogo-soporte .theme-toggle, #catalogo-soporte .nav-toggle { width: 48px; height: 48px; }\n  #catalogo-soporte .nav-toggle span { left: 14px; right: 14px; }\n  #catalogo-soporte .nav-toggle span:first-child { top: 19px; }\n  #catalogo-soporte .nav-toggle span:last-child { top: 27px; }\n  #catalogo-soporte .site-nav.menu-open .nav-toggle span:first-child, #catalogo-soporte .site-nav.menu-open .nav-toggle span:last-child { top: 23px; }\n  @media (max-width: 860px) { #catalogo-soporte .nav-link { font-size: 16px; } }\n  @media (max-width: 720px) {\n    #catalogo-soporte .site-nav { padding: 10px 10px 10px 16px; }\n    #catalogo-soporte .nav-brand img { height: 36px; }\n    #catalogo-soporte .theme-toggle, #catalogo-soporte .nav-toggle { width: 44px; height: 44px; }\n    #catalogo-soporte .nav-toggle span:first-child { top: 17px; }\n    #catalogo-soporte .nav-toggle span:last-child { top: 25px; }\n    #catalogo-soporte .site-nav.menu-open .nav-toggle span:first-child, #catalogo-soporte .site-nav.menu-open .nav-toggle span:last-child { top: 21px; }\n  }\n\n  \n  #catalogo-soporte .site-nav { justify-content: flex-start; }\n  #catalogo-soporte .nav-menu { order: 1; margin-left: 14px; margin-right: auto; }\n  #catalogo-soporte .theme-toggle { order: 2; margin-left: 0; }\n  #catalogo-soporte .nav-actions { order: 3; display: flex; align-items: center; gap: 10px; }\n  #catalogo-soporte .nav-toggle { order: 4; }\n  #catalogo-soporte .nav-actions .nav-cta { margin: 0; }\n  #catalogo-soporte .nav-ghost {\n    display: inline-flex; align-items: center; justify-content: center; text-decoration: none;\n    font: 700 15px/1 'Inter', sans-serif; color: #0F172A; padding: 13px 22px; border-radius: 999px;\n    border: 1px solid rgba(15,23,42,0.18); background: transparent; transition: border-color 150ms ease, background-color 150ms ease;\n  }\n  #catalogo-soporte[data-theme=\"dark\"] .nav-ghost { color: #F5F7FA; border-color: rgba(255,255,255,0.22); }\n  @media (hover: hover) and (pointer: fine) {\n    #catalogo-soporte .nav-ghost:hover { border-color: #0F172A; }\n    #catalogo-soporte[data-theme=\"dark\"] .nav-ghost:hover { border-color: #F5F7FA; }\n  }\n  #catalogo-soporte .nav-wa { width: 48px; height: 48px; flex: 0 0 auto; border-radius: 50%; border: 0; padding: 0; cursor: pointer; display: inline-grid; place-items: center; color: #fff; background: #25D366; box-shadow: 0 10px 24px -10px rgba(18,140,126,0.8); transition: transform 200ms var(--ease-out), background-color 200ms ease; }\n  #catalogo-soporte .nav-wa svg { width: 24px; height: 24px; }\n  #catalogo-soporte .nav-wa[aria-expanded=\"true\"] { background: #128C7E; }\n  #catalogo-soporte .nav-wa:active { transform: scale(0.92); }\n  #catalogo-soporte .nav-wa:focus-visible { outline: 2px solid #25D366; outline-offset: 3px; }\n  @media (hover: hover) and (pointer: fine) { #catalogo-soporte .nav-wa:hover { background: #1EBE5A; transform: translateY(-1px); } }\n  #catalogo-soporte .nav-menu-ctas { display: none; }\n  @media (max-width: 1100px) { #catalogo-soporte .nav-link { padding: 12px 11px; } #catalogo-soporte .nav-actions .nav-cta { padding: 13px 18px; } }\n  @media (max-width: 860px) {\n    \n    #catalogo-soporte .nav-actions { display: none; }\n    #catalogo-soporte .theme-toggle { margin-left: auto; }\n    #catalogo-soporte .nav-menu { margin: 0; }\n    #catalogo-soporte .nav-menu-ctas { display: grid; grid-template-columns: 1fr 1fr; gap: 8px; margin-top: 8px; }\n    #catalogo-soporte .nav-menu-ctas .primary-btn, #catalogo-soporte .nav-menu-ctas .nav-ghost { padding: 14px; font-size: 15px; }\n  }\n\n  \n  #catalogo-soporte .storage-card[hidden] { display: none !important; }\n\n  \n  #catalogo-soporte .eco-badge {\n    display: inline-flex; align-items: center; gap: 7px;\n    padding: 6px 13px 6px 10px; border-radius: 999px;\n    background: #E6F6EA; color: #11602F; border: 1.5px solid #39A85A;\n    font: 800 13px 'Inter', sans-serif; letter-spacing: 0.02em; text-transform: uppercase; white-space: nowrap;\n  }\n  #catalogo-soporte .eco-badge svg { width: 18px; height: 18px; flex: none; }\n  #catalogo-soporte .eco-badge[hidden] { display: none !important; }\n  \n  #catalogo-soporte .pending-badge { background: #FFF3D6; color: #8A5300; border-color: #F0A500; }\n  #catalogo-soporte[data-theme=\"dark\"] .pending-badge { background: rgba(240,165,0,0.16); color: #FFD27A; border-color: #F0A500; }\n  #catalogo-soporte .filter-panel[hidden] { display: none !important; }\n  #catalogo-soporte .catalog-layout:has(> .filter-panel[hidden]) { display: block; }\n  #catalogo-soporte .pending-notice { grid-column: 1 / -1; margin: 10px auto; max-width: 520px; text-align: center; color: var(--ink-soft); font-size: 16px; line-height: 1.6; }\n  #catalogo-soporte .pending-notice strong { display: block; color: var(--ink); font-size: 20px; margin-bottom: 6px; }\n  #catalogo-soporte .eco-badge--title { margin-top: 12px; padding: 9px 20px 9px 15px; font-size: 17px; gap: 9px; }\n  #catalogo-soporte .eco-badge--title svg { width: 24px; height: 24px; }\n  #catalogo-soporte header.in-category .brand-header { display: flex; flex-direction: column; align-items: center; }\n  #catalogo-soporte .category-card .eco-badge { margin-top: -2px; }\n  #catalogo-soporte[data-theme=\"dark\"] .eco-badge { background: rgba(57,168,90,0.16); color: #9BE3B1; border-color: #39A85A; }\n  @media (max-width: 720px) {\n    #catalogo-soporte .category-card .eco-badge { font-size: 10.5px; padding: 4px 9px 4px 7px; gap: 5px; }\n    #catalogo-soporte .category-card .eco-badge svg { width: 14px; height: 14px; }\n    #catalogo-soporte .eco-badge--title { font-size: 15px; padding: 7px 16px 7px 12px; }\n  }\n\n  \n  #catalogo-soporte .swatches { display: flex; flex-wrap: wrap; align-items: center; gap: 6px; }\n  \n  #catalogo-soporte .title-row { display: flex; flex-direction: column; gap: 6px; }\n  #catalogo-soporte .card-swatches { flex-wrap: nowrap; overflow: hidden; gap: 5px; padding: 5px; margin: -5px; }\n  #catalogo-soporte .card-swatches .swatch-name { white-space: nowrap; overflow: hidden; text-overflow: ellipsis; min-width: 0; }\n  #catalogo-soporte .swatch {\n    width: 18px; height: 18px; border-radius: 50%; background: var(--sw); cursor: pointer; flex: none;\n    border: 1px solid rgba(15,23,42,0.22); box-shadow: inset 0 0 0 2px #FFFFFF;\n    transition: transform 150ms ease;\n  }\n  #catalogo-soporte .swatch[aria-pressed=\"true\"] { outline: 2px solid #3D8BFF; outline-offset: 1px; }\n  @media (hover: hover) and (pointer: fine) { #catalogo-soporte .swatch:hover { transform: scale(1.12); } }\n  #catalogo-soporte .swatch:focus-visible { outline: 2px solid #3D8BFF; outline-offset: 2px; }\n  #catalogo-soporte .swatch-name { font-size: 11px; color: var(--ink-soft); margin-left: 2px; }\n  #catalogo-soporte[data-theme=\"dark\"] .swatch { border-color: rgba(255,255,255,0.35); box-shadow: inset 0 0 0 2px #0E1830; }\n  #catalogo-soporte[data-theme=\"dark\"] .swatch-name { color: #A9B7C8; }\n  @media (max-width: 720px) { #catalogo-soporte .swatch { width: 15px; height: 15px; } #catalogo-soporte .swatches { gap: 5px; } }\n  #catalogo-soporte .storage-grid { scroll-margin-top: 110px; }\n  #catalogo-soporte .pager { display: flex; flex-wrap: wrap; align-items: center; justify-content: center; gap: 8px; margin: 26px 0 6px; grid-column: -2 / -1; }\n  #catalogo-soporte .pager[hidden] { display: none; }\n  #catalogo-soporte .pager-btn {\n    min-width: 42px; height: 42px; padding: 0 12px; border-radius: 12px; cursor: pointer;\n    font: 600 15px/1 'Inter', sans-serif; color: #0F172A; background: #FFFFFF; border: 1px solid var(--line);\n    transition: background-color 150ms ease, border-color 150ms ease, color 150ms ease, transform 160ms var(--ease-out);\n  }\n  #catalogo-soporte .pager-btn[aria-current=\"page\"] { background: #2B79C2; border-color: #2B79C2; color: #FFFFFF; }\n  #catalogo-soporte .pager-btn:disabled { opacity: 0.35; cursor: default; }\n  #catalogo-soporte .pager-btn:active:not(:disabled) { transform: scale(0.95); }\n  #catalogo-soporte .pager-btn:focus-visible { outline: 2px solid var(--accent-2); outline-offset: 2px; }\n  #catalogo-soporte .pager-arrow { font-size: 20px; }\n  #catalogo-soporte .pager-info { width: 100%; text-align: center; font-size: 13px; color: var(--mute); margin-top: 2px; }\n  #catalogo-soporte[data-theme=\"dark\"] .pager-btn { background: rgba(255,255,255,0.04); color: #F5F7FA; border-color: rgba(255,255,255,0.14); }\n  #catalogo-soporte[data-theme=\"dark\"] .pager-btn[aria-current=\"page\"] { background: #2B79C2; border-color: #2B79C2; color: #FFFFFF; }\n  @media (hover: hover) and (pointer: fine) {\n    #catalogo-soporte .pager-btn:not(:disabled):not([aria-current]):hover { border-color: var(--accent); color: var(--accent-2); }\n  }\n\n  /* --- Integraci\u00f3n WordPress --- */\n  #catalogo-soporte {\n    position: relative;\n    width: 100vw;\n    max-width: 100vw;\n    margin-left: calc(50% - 50vw);\n    margin-right: calc(50% - 50vw);\n    height: auto;\n    min-height: 0;\n    overflow: hidden;\n    line-height: normal;\n    text-align: left;\n  }\n  #catalogo-soporte .bg-power, #catalogo-soporte #dynamicHero { position: absolute; }\n  #catalogo-soporte .bg-power { top: 50vh; }\n  #catalogo-soporte .scrim, #catalogo-soporte .rent-scrim { z-index: 99990; }\n  #catalogo-soporte .panel { z-index: 99991; }\n  #catalogo-soporte .rent-modal { z-index: 99992; }\n  #catalogo-soporte .list-fab { z-index: 99989; }\n  #catalogo-soporte :where(h1, h2, h3, p, span, label, div) {\n    font-family: inherit; text-transform: none; letter-spacing: normal;\n  }\n  #catalogo-soporte :where(h1, h2, h3)::before, #catalogo-soporte :where(h1, h2, h3)::after { content: none; }\n  #catalogo-soporte :where(button, input, select, textarea) {\n    font-family: inherit; text-transform: none; letter-spacing: normal;\n    line-height: normal; min-height: 0; box-shadow: none; text-shadow: none;\n    margin: 0; width: auto; height: auto;\n  }\n  #catalogo-soporte :where(img) { max-width: none; height: auto; border: 0; box-shadow: none; border-radius: 0; }\n  #catalogo-soporte .scroll-progress { display: none; }\n  #catalogo-soporte .site-nav { top: 8px; }\n  #catalogo-soporte :where(header, footer, section, nav) {\n    background: none; border: 0; box-shadow: none; padding: 0; position: static;\n  }\n\n  :host { all: initial; display: block; }\n  #catalogo-soporte { width: 100%; max-width: none; margin: 0; }\n" + "</style>" + "<div id=\"catalogo-soporte\">\n<div class=\"bg-power\" aria-hidden=\"true\">\n  <svg viewBox=\"0 0 100 100\" xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" stroke=\"#8CC8FF\" stroke-width=\"9\" stroke-linecap=\"round\">\n    <path d=\"M32 26a32 32 0 1 0 36 0\"/>\n    <path d=\"M50 12v36\"/>\n  </svg>\n</div>\n\n<div id=\"pageContent\">\n\n<div class=\"scroll-progress\" id=\"scrollProgress\" aria-hidden=\"true\"></div>\n\n<nav class=\"site-nav\" id=\"siteNav\" aria-label=\"Principal\">\n  <a class=\"nav-brand\" href=\"/\" data-nav=\"portada\" aria-label=\"Soporte TV, inicio\">\n    <img class=\"brand-logo brand-logo--light\" src=\"https://m3hervas.github.io/CatalogoSoporte/alquiler/img/logo-soporte-tv_SpTV.webp?v=20261004e\" alt=\"\" width=\"113\" height=\"30\">\n    <img class=\"brand-logo brand-logo--dark\" src=\"https://m3hervas.github.io/CatalogoSoporte/alquiler/img/logo-soporte-tv-blanco_SpTV.webp?v=20261004e\" alt=\"\" width=\"113\" height=\"30\">\n  </a>\n  <button class=\"theme-toggle\" id=\"themeToggle\" type=\"button\" aria-label=\"Cambiar a modo noche\" aria-pressed=\"false\">\n    <svg class=\"icon-moon\" viewBox=\"0 0 24 24\" width=\"18\" height=\"18\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z\"/></svg>\n    <svg class=\"icon-sun\" viewBox=\"0 0 24 24\" width=\"18\" height=\"18\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><circle cx=\"12\" cy=\"12\" r=\"4\"/><path d=\"M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4\"/></svg>\n  </button>\n  <div class=\"nav-actions\">\n    <button class=\"primary-btn nav-cta\" data-nav=\"rent\">Alquila</button>\n    <a class=\"nav-ghost nav-cta\" href=\"https://m3hervas.github.io/CatalogoSoporte/compra/\">Compra</a>\n  </div>\n  <button class=\"nav-toggle\" id=\"navToggle\" aria-expanded=\"false\" aria-controls=\"navMenu\" aria-label=\"Abrir men\u00fa\">\n    <span></span><span></span>\n  </button>\n  <div class=\"nav-menu\" id=\"navMenu\">\n    <a class=\"nav-link\" href=\"/\" data-nav=\"portada\">Inicio</a>\n    <div class=\"nav-group\" id=\"navCatalog\">\n      <button class=\"nav-link\" id=\"navCatalogBtn\" aria-expanded=\"false\" aria-controls=\"navDropdown\">\n        Cat\u00e1logo\n        <svg class=\"nav-chevron\" viewBox=\"0 0 24 24\" width=\"14\" height=\"14\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M6 9l6 6 6-6\"/></svg>\n      </button>\n      <div class=\"nav-dropdown\" id=\"navDropdown\">\n        <a href=\"#tablets\" data-route=\"tablets\">Tablets<small>Android y iPad</small></a>\n        <a href=\"#moviles\" data-route=\"moviles\">M\u00f3viles<small>Android y iPhone</small></a>\n        <a href=\"#mac\" data-route=\"mac\">Mac<small>MacBook, iMac, Mac mini y Studio</small></a>\n        <a href=\"#ordenadores\" data-route=\"ordenadores\">Ordenadores<small>Port\u00e1tiles, Surface, AIO y CPU</small></a>\n        <a href=\"#monitores\" data-route=\"monitores\">Monitores / TV<small>LED, 4K, estudio y TV</small></a>\n        <a href=\"#almacenamiento\" data-route=\"almacenamiento\">Almacenamiento<small>SSD port\u00e1tiles y de escritorio</small></a>\n        <a href=\"#pilas\" data-route=\"pilas\">Pilas y cargadores<small>Alcalinas, litio, bot\u00f3n, aud\u00edfono y recargables</small></a>\n        <a href=\"#sonido\" data-route=\"sonido\">Accesorios de sonido<small>Ursa, Rycote y Bubblebee</small></a>\n        <a href=\"#papeleria\" data-route=\"papeleria\">Papeler\u00eda<small>Rotuladores, bol\u00edgrafos, cinta y pegamento</small></a>\n        <a href=\"#proteccion\" data-route=\"proteccion\">Protecci\u00f3n<small>Bolsas, fundas, mochilas, guantes y lonas</small></a>\n        <a href=\"#conectividad-tornilleria\" data-route=\"conectividad-tornilleria\">Conectividad y torniller\u00eda<small>Clavijas Schuko y regletas</small></a>\n        <a href=\"#rodaje\" data-route=\"rodaje\">Rodaje<small>Claquetas, oculares, letras y talco</small></a>\n        <a href=\"#matabrillos\" data-route=\"matabrillos\">Matabrillos<small>Sprays Kenro y K-Line</small></a>\n        <a href=\"#iluminacion\" data-route=\"iluminacion\">Iluminaci\u00f3n<small>Gelatinas Rosco, Cinefoil y papel negro</small></a>\n        <a href=\"#efectos\" data-route=\"efectos\">Efectos<small>Sprays Dirty Down y tabaco de atrezzo</small></a>\n        <a href=\"#limpieza\" data-route=\"limpieza\">Limpieza<small>Aire comprimido, l\u00edquidos, gamuzas y kits</small></a>\n        <a href=\"#marcas-de-foco\" data-route=\"marcas-de-foco\">Marcas de foco<small>Marcas en T, salchichas, pegatinas y tees</small></a>\n        <a href=\"#sujecion\" data-route=\"sujecion\">Sujeci\u00f3n<small>Bridas, velcro, pinzas, cinchas e imanes</small></a>\n        <a href=\"#cintas-adhesivas\" data-route=\"cintas-adhesivas\">Cintas adhesivas<small>Gaffer, americana, doble cara, papel y m\u00e1s</small></a>\n        <a href=\"#fondos-telas\" data-route=\"fondos-telas\">Fondos / Telas<small>Tela molton negra con ojales</small></a>\n        <a href=\"#otros-sonidos\" data-route=\"otros-sonidos\">Otros sonidos<small>Auriculares, aislantes, cart\u00f3n pluma y tacones</small></a>\n        <a href=\"#accesorios-petaca-micro\" data-route=\"accesorios-petaca-micro\">Accesorios Petaca/Micro<small>Bolsillos, correas y organizadores</small></a>\n        <a href=\"#cabinas\" data-route=\"cabinas\">Cabinas<small>Cabinas de discos y NAS</small></a>\n        <a href=\"#conectividad\" data-route=\"conectividad\">Conectividad<small>MiFi, routers y Wi-Fi</small></a>\n        <a href=\"#accesorios\" data-route=\"accesorios\">Accesorios<small>Estabilizadores, luz, fundas y m\u00e1s</small></a>\n        <a href=\"#videoconferencia\" data-route=\"videoconferencia\">Videoconferencia PRO<small>Videoconferencia, intercom y walkies</small></a>\n        <a href=\"#impresoras\" data-route=\"impresoras\">Impresoras<small>Multifunci\u00f3n A4 / A3 con coste por p\u00e1gina</small></a>\n        <a href=\"#microfonos\" data-route=\"microfonos\">Micr\u00f3fonos<small>Inal\u00e1mbricos, podcast y kits para m\u00f3vil</small></a>\n      </div>\n    </div>\n    <a class=\"nav-link\" href=\"#contacto\" data-nav=\"contact\">Contacto</a>\n    <div class=\"nav-menu-ctas\">\n      <button class=\"primary-btn\" data-nav=\"rent\">Alquila</button>\n      <a class=\"nav-ghost\" href=\"https://m3hervas.github.io/CatalogoSoporte/compra/\">Compra</a>\n    </div>\n  </div>\n</nav>\n\n<header class=\"reveal\" id=\"catalogo\">\n  <p class=\"eyebrow\" id=\"catEyebrow\">Cat\u00e1logo de alquiler</p>\n  <div class=\"brand-header\">\n    <img class=\"brand-logo brand-logo--light\" src=\"https://m3hervas.github.io/CatalogoSoporte/alquiler/img/logo-soporte-tv_SpTV.webp?v=20261004e\" alt=\"Soporte TV\" width=\"242\" height=\"64\">\n    <img class=\"brand-logo brand-logo--dark\" src=\"https://m3hervas.github.io/CatalogoSoporte/alquiler/img/logo-soporte-tv-blanco_SpTV.webp?v=20261004e\" alt=\"\" width=\"242\" height=\"64\">\n    <h1 id=\"catTitle\">Soporte TV</h1>\n    <span class=\"eco-badge eco-badge--title pending-badge\" id=\"catPending\" hidden><svg viewBox=\"0 0 24 24\" aria-hidden=\"true\"><circle cx=\"12\" cy=\"12\" r=\"9\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.4\"/><path d=\"M12 7v5l3 2\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>Pendiente</span>\n    <span class=\"eco-badge eco-badge--title\" id=\"catBadge\" hidden><svg viewBox=\"0 0 24 24\" aria-hidden=\"true\"><path fill=\"currentColor\" d=\"M20.5 3.5C11 3.6 5 8 5 15c0 1.3.3 2.5.8 3.5L3.6 20.7l1.4 1.4 2.3-2.3c1 .5 2.1.7 3.2.7 7 0 10.6-6.6 10-17zM9.8 18.1c-.7 0-1.4-.1-2-.4 2.5-3.6 5.3-6.3 8.6-8.4-3.6 1.4-6.6 3.8-9.9 7.3-.3-.6-.4-1.3-.4-2 0-5 4.1-8.7 11.2-9.4-.2 7.6-3 12.9-7.5 12.9z\"/></svg>Sostenible</span>\n  </div>\n  <p id=\"catDesc\">Elige una categor\u00eda para ver los productos disponibles para alquiler.</p>\n</header>\n\n<div class=\"landing\" id=\"viewLanding\">\n  <button class=\"category-card\" id=\"goTablets\">\n    <div class=\"category-icon\" id=\"tabletIconLarge\"></div>\n    <span class=\"category-label\">Tablets</span>\n  </button>\n  <button class=\"category-card\" id=\"goPhones\">\n    <div class=\"category-icon\" id=\"phoneIconLarge\"></div>\n    <span class=\"category-label\">M\u00f3viles</span>\n  </button>\n  <button class=\"category-card\" id=\"goAccessories\">\n    <div class=\"category-icon\" id=\"accessoryIconLarge\"></div>\n    <span class=\"category-label\">Accesorios</span>\n  </button>\n  <button class=\"category-card\" id=\"goMics\">\n    <div class=\"category-icon\" id=\"micsIconLarge\"></div>\n    <span class=\"category-label\">Micr\u00f3fonos</span>\n  </button>\n  <button class=\"category-card\" id=\"goMac\">\n    <div class=\"category-icon\" id=\"macIconLarge\"></div>\n    <span class=\"category-label\">Mac</span>\n  </button>\n  <button class=\"category-card\" id=\"goComputers\">\n    <div class=\"category-icon\" id=\"computerIconLarge\"></div>\n    <span class=\"category-label\">Ordenadores</span>\n  </button>\n  <button class=\"category-card\" id=\"goMonitors\">\n    <div class=\"category-icon\" id=\"monitorIconLarge\"></div>\n    <span class=\"category-label\">Monitores / TV</span>\n  </button>\n  <button class=\"category-card\" id=\"goConnectivity\">\n    <div class=\"category-icon\" id=\"connectivityIconLarge\"></div>\n    <span class=\"category-label\">Conectividad</span>\n  </button>\n  <button class=\"category-card\" id=\"goStorage\">\n    <div class=\"category-icon\" id=\"storageIconLarge\"></div>\n    <span class=\"category-label\">Almacenamiento</span>\n  </button>\n  <button class=\"category-card\" id=\"goBatteries\">\n    <div class=\"category-icon\" id=\"batteryIconLarge\"></div>\n    <span class=\"category-label\">Pilas y cargadores</span>\n  </button>\n  <button class=\"category-card\" id=\"goSound\">\n    <div class=\"category-icon\" id=\"soundIconLarge\"></div>\n    <span class=\"category-label\">Accesorios de sonido</span>\n  </button>\n  <button class=\"category-card\" id=\"goStationery\">\n    <div class=\"category-icon\" id=\"stationeryIconLarge\"></div>\n    <span class=\"category-label\">Papeler\u00eda</span>\n  </button>\n  <button class=\"category-card\" id=\"goProtection\">\n    <div class=\"category-icon\" id=\"protectionIconLarge\"></div>\n    <span class=\"category-label\">Protecci\u00f3n</span>\n  </button>\n  <button class=\"category-card\" id=\"goElectric\">\n    <div class=\"category-icon\" id=\"electricIconLarge\"></div>\n    <span class=\"category-label\">Conectividad y torniller\u00eda</span>\n  </button>\n  <button class=\"category-card\" id=\"goFilmset\">\n    <div class=\"category-icon\" id=\"filmsetIconLarge\"></div>\n    <span class=\"category-label\">Rodaje</span>\n  </button>\n  <button class=\"category-card\" id=\"goDulling\">\n    <div class=\"category-icon\" id=\"dullingIconLarge\"></div>\n    <span class=\"category-label\">Matabrillos</span>\n  </button>\n  <button class=\"category-card\" id=\"goLighting\">\n    <div class=\"category-icon\" id=\"lightingIconLarge\"></div>\n    <span class=\"category-label\">Iluminaci\u00f3n</span>\n  </button>\n  <button class=\"category-card\" id=\"goEffects\">\n    <div class=\"category-icon\" id=\"effectsIconLarge\"></div>\n    <span class=\"category-label\">Efectos</span>\n  </button>\n  <button class=\"category-card\" id=\"goCleaning\">\n    <div class=\"category-icon\" id=\"cleaningIconLarge\"></div>\n    <span class=\"category-label\">Limpieza</span>\n  </button>\n  <button class=\"category-card\" id=\"goMarks\">\n    <div class=\"category-icon\" id=\"marksIconLarge\"></div>\n    <span class=\"category-label\">Marcas de foco</span>\n  </button>\n  <button class=\"category-card\" id=\"goFastening\">\n    <div class=\"category-icon\" id=\"fasteningIconLarge\"></div>\n    <span class=\"category-label\">Sujeci\u00f3n</span>\n  </button>\n  <button class=\"category-card\" id=\"goTapes\">\n    <div class=\"category-icon\" id=\"tapesIconLarge\"></div>\n    <span class=\"category-label\">Cintas adhesivas</span>\n    <span class=\"eco-badge\"><svg viewBox=\"0 0 24 24\" aria-hidden=\"true\"><path fill=\"currentColor\" d=\"M20.5 3.5C11 3.6 5 8 5 15c0 1.3.3 2.5.8 3.5L3.6 20.7l1.4 1.4 2.3-2.3c1 .5 2.1.7 3.2.7 7 0 10.6-6.6 10-17zM9.8 18.1c-.7 0-1.4-.1-2-.4 2.5-3.6 5.3-6.3 8.6-8.4-3.6 1.4-6.6 3.8-9.9 7.3-.3-.6-.4-1.3-.4-2 0-5 4.1-8.7 11.2-9.4-.2 7.6-3 12.9-7.5 12.9z\"/></svg>Sostenible</span>\n  </button>\n  <button class=\"category-card\" id=\"goBackdrops\">\n    <div class=\"category-icon\" id=\"backdropsIconLarge\"></div>\n    <span class=\"category-label\">Fondos / Telas</span>\n  </button>\n  <button class=\"category-card\" id=\"goOthersound\">\n    <div class=\"category-icon\" id=\"othersoundIconLarge\"></div>\n    <span class=\"category-label\">Otros sonidos</span>\n  </button>\n  <button class=\"category-card\" id=\"goLavacc\">\n    <div class=\"category-icon\" id=\"lavaccIconLarge\"></div>\n    <span class=\"category-label\">Accesorios Petaca/Micro</span>\n  </button>\n  <button class=\"category-card\" id=\"goCabins\">\n    <div class=\"category-icon\" id=\"cabinIconLarge\"></div>\n    <span class=\"category-label\">Cabinas</span>\n  </button>\n  <button class=\"category-card\" id=\"goVideoconf\">\n    <div class=\"category-icon\" id=\"videoconfIconLarge\"></div>\n    <span class=\"category-label\">Videoconferencia PRO</span>\n  </button>\n  <button class=\"category-card\" id=\"goPrinters\">\n    <div class=\"category-icon\" id=\"printerIconLarge\"></div>\n    <span class=\"category-label\">Impresoras</span>\n  </button>\n</div>\n\n<div class=\"catalog-view\" id=\"viewTablets\" hidden>\n  <button class=\"back-btn\" data-back>\u2190 Volver</button>\n\n  <div class=\"catalog-layout\">\n    <aside class=\"filter-panel\" aria-label=\"Filtros\">\n      <p class=\"filter-panel-title\">Filtrar</p>\n      <div class=\"filter-row\">\n        <span class=\"filter-label\">Marca</span>\n        <select class=\"filter-select\" id=\"brandSelect\">\n          <option value=\"all\">Todas las marcas</option>\n          <option value=\"Lenovo\">Lenovo</option>\n          <option value=\"Samsung\">Samsung</option>\n          <option value=\"Apple\">Apple</option>\n        </select>\n      </div>\n      <!-- Hidden for now (10/10): remove \"hidden\" to show it again -->\n      <div class=\"filter-row\" hidden>\n        <span class=\"filter-label\">Almacenamiento</span>\n        <select class=\"filter-select\" id=\"storageSelect\">\n            <option value=\"all\">Todos</option>\n            <option value=\"32 GB\">32 GB</option>\n            <option value=\"64 GB\">64 GB</option>\n            <option value=\"128 GB\">128 GB</option>\n            <option value=\"256 GB\">256 GB</option>\n            <option value=\"512 GB\">512 GB</option>\n            <option value=\"1 TB\">1 TB</option>\n          </select>\n      </div>\n      <button class=\"filter-reset\" type=\"button\">Quitar filtros</button>\n    </aside>\n    <div class=\"storage-grid\" id=\"grid\"></div>\n  </div>\n</div>\n\n<div class=\"catalog-view\" id=\"viewPhones\" hidden>\n  <button class=\"back-btn\" data-back>\u2190 Volver</button>\n\n  <div class=\"catalog-layout\">\n    <aside class=\"filter-panel\" aria-label=\"Filtros\">\n      <p class=\"filter-panel-title\">Filtrar</p>\n      <div class=\"filter-row\">\n        <span class=\"filter-label\">Marca</span>\n        <select class=\"filter-select\" id=\"phoneBrandSelect\">\n          <option value=\"all\">Todas las marcas</option>\n          <option value=\"Xiaomi\">Xiaomi</option>\n          <option value=\"Samsung\">Samsung</option>\n          <option value=\"Apple\">Apple</option>\n        </select>\n      </div>\n      <div class=\"filter-row\">\n        <span class=\"filter-label\">Almacenamiento</span>\n        <select class=\"filter-select\" id=\"phoneStorageSelect\">\n            <option value=\"all\">Todos</option>\n            <option value=\"64 GB\">64 GB</option>\n            <option value=\"128 GB\">128 GB</option>\n            <option value=\"256 GB\">256 GB</option>\n            <option value=\"512 GB\">512 GB</option>\n            <option value=\"1 TB\">1 TB</option>\n            <option value=\"2 TB\">2 TB</option>\n          </select>\n      </div>\n      <button class=\"filter-reset\" type=\"button\">Quitar filtros</button>\n    </aside>\n    <div class=\"storage-grid\" id=\"gridPhones\"></div>\n  </div>\n</div>\n\n<div class=\"catalog-view\" id=\"viewAccessories\" hidden>\n  <button class=\"back-btn\" data-back>\u2190 Volver</button>\n\n  <div class=\"catalog-layout\">\n    <aside class=\"filter-panel\" aria-label=\"Filtros\">\n      <p class=\"filter-panel-title\">Filtrar</p>\n      <div class=\"filter-row\">\n        <span class=\"filter-label\">Tipo</span>\n        <select class=\"filter-select\" id=\"accessoryTypeSelect\">\n          <option value=\"all\">Todos</option>\n          <option value=\"L\u00e1piz digital\">L\u00e1piz digital</option>\n          <option value=\"Tr\u00edpode\">Tr\u00edpode</option>\n          <option value=\"Estabilizador\">Estabilizador</option>\n          <option value=\"Funda\">Funda</option>\n          <option value=\"Adaptador\">Adaptador</option>\n          <option value=\"Iluminaci\u00f3n\">Iluminaci\u00f3n</option>\n          <option value=\"Bater\u00eda externa\">Bater\u00eda externa</option>\n        </select>\n      </div>\n      <div class=\"filter-row\">\n        <span class=\"filter-label\">Marca</span>\n        <select class=\"filter-select\" id=\"accessoryBrandSelect\">\n          <option value=\"all\">Todas las marcas</option>\n          <option value=\"Apple\">Apple</option>\n          <option value=\"Zhiyun\">Zhiyun</option>\n          <option value=\"Celly\">Celly</option>\n          <option value=\"Wacom\">Wacom</option>\n          <option value=\"R\u00d8DE\">R\u00d8DE</option>\n          <option value=\"Manfrotto\">Manfrotto</option>\n          <option value=\"Sin marca\">Sin marca</option>\n        </select>\n      </div>\n      <button class=\"filter-reset\" type=\"button\">Quitar filtros</button>\n    </aside>\n    <div class=\"storage-grid\" id=\"gridAccessories\"></div>\n  </div>\n</div>\n\n<div class=\"catalog-view\" id=\"viewMac\" hidden>\n  <button class=\"back-btn\" data-back>\u2190 Volver</button>\n\n  <div class=\"catalog-layout\">\n    <aside class=\"filter-panel\" aria-label=\"Filtros\">\n      <p class=\"filter-panel-title\">Filtrar</p>\n      <div class=\"filter-row\">\n        <span class=\"filter-label\">Tipo</span>\n        <select class=\"filter-select\" id=\"macTypeSelect\">\n          <option value=\"all\">Todos</option>\n          <option value=\"MacBook Air\">MacBook Air</option>\n          <option value=\"MacBook Pro\">MacBook Pro</option>\n          <option value=\"iMac\">iMac</option>\n          <option value=\"Mac mini\">Mac mini</option>\n          <option value=\"Mac Studio\">Mac Studio</option>\n        </select>\n      </div>\n      <div class=\"filter-row\">\n        <span class=\"filter-label\">Almacenamiento</span>\n        <select class=\"filter-select\" id=\"macStorageSelect\">\n          <option value=\"all\">Todos</option>\n          <option value=\"128 GB\">128 GB</option>\n          <option value=\"256 GB\">256 GB</option>\n          <option value=\"512 GB\">512 GB</option>\n          <option value=\"1 TB\">1 TB</option>\n          <option value=\"2 TB\">2 TB</option>\n          <option value=\"4 TB\">4 TB</option>\n          <option value=\"8 TB\">8 TB</option>\n          <option value=\"16 TB\">16 TB</option>\n        </select>\n      </div>\n      <button class=\"filter-reset\" type=\"button\">Quitar filtros</button>\n    </aside>\n    <div class=\"storage-grid\" id=\"gridMac\"></div>\n  </div>\n</div>\n\n<div class=\"catalog-view\" id=\"viewComputers\" hidden>\n  <button class=\"back-btn\" data-back>\u2190 Volver</button>\n\n  <div class=\"catalog-layout\">\n    <aside class=\"filter-panel\" aria-label=\"Filtros\">\n      <p class=\"filter-panel-title\">Filtrar</p>\n      <div class=\"filter-row\">\n        <span class=\"filter-label\">Tipo</span>\n        <select class=\"filter-select\" id=\"computerTypeSelect\">\n          <option value=\"all\">Todos</option>\n          <option value=\"Port\u00e1til\">Port\u00e1til</option>\n          <option value=\"Surface\">Surface</option>\n          <option value=\"AIO\">AIO (Todo en uno)</option>\n          <option value=\"CPU\">CPU</option>\n          <option value=\"CPU + Monitor\">CPU + Monitor</option>\n        </select>\n      </div>\n      <div class=\"filter-row\">\n        <span class=\"filter-label\">Marca</span>\n        <select class=\"filter-select\" id=\"computerBrandSelect\">\n          <option value=\"all\">Todas las marcas</option>\n          <option value=\"HP\">HP</option>\n          <option value=\"Microsoft\">Microsoft</option>\n          <option value=\"Dell / HP / Lenovo\">Dell / HP / Lenovo</option>\n        </select>\n      </div>\n      <button class=\"filter-reset\" type=\"button\">Quitar filtros</button>\n    </aside>\n    <div class=\"storage-grid\" id=\"gridComputers\"></div>\n  </div>\n</div>\n\n<div class=\"catalog-view\" id=\"viewMonitors\" hidden>\n  <button class=\"back-btn\" data-back>\u2190 Volver</button>\n\n  <div class=\"catalog-layout\">\n    <aside class=\"filter-panel\" aria-label=\"Filtros\">\n      <p class=\"filter-panel-title\">Filtrar</p>\n      <div class=\"filter-row\">\n        <span class=\"filter-label\">Tipo</span>\n        <select class=\"filter-select\" id=\"monitorTypeSelect\">\n          <option value=\"all\">Todos</option>\n          <option value=\"LED\">LED</option>\n          <option value=\"4K\">4K</option>\n          <option value=\"Estudio 4K\">Estudio 4K</option>\n        </select>\n      </div>\n      <div class=\"filter-row\">\n        <span class=\"filter-label\">Tama\u00f1o</span>\n        <select class=\"filter-select\" id=\"monitorSizeSelect\">\n          <option value=\"all\">Todos</option>\n          <option value=\"24''\">24''</option>\n          <option value=\"27''\">27''</option>\n          <option value=\"65''\">65''</option>\n        </select>\n      </div>\n      <button class=\"filter-reset\" type=\"button\">Quitar filtros</button>\n    </aside>\n    <div class=\"storage-grid\" id=\"gridMonitors\"></div>\n  </div>\n</div>\n\n<div class=\"catalog-view\" id=\"viewConnectivity\" hidden>\n  <button class=\"back-btn\" data-back>\u2190 Volver</button>\n\n  <div class=\"catalog-layout\">\n    <aside class=\"filter-panel\" aria-label=\"Filtros\">\n      <p class=\"filter-panel-title\">Filtrar</p>\n      <div class=\"filter-row\">\n        <span class=\"filter-label\">Tipo</span>\n        <select class=\"filter-select\" id=\"connTypeSelect\">\n          <option value=\"all\">Todos</option>\n          <option value=\"MiFi\">MiFi</option>\n          <option value=\"Router\">Router</option>\n          <option value=\"Punto de acceso\">Punto de acceso</option>\n        </select>\n      </div>\n      <div class=\"filter-row\">\n        <span class=\"filter-label\">Red</span>\n        <select class=\"filter-select\" id=\"connNetSelect\">\n          <option value=\"all\">Todas</option>\n          <option value=\"4G\">4G</option>\n          <option value=\"5G\">5G</option>\n        </select>\n      </div>\n      <div class=\"filter-row\">\n        <span class=\"filter-label\">Datos</span>\n        <select class=\"filter-select\" id=\"connDataSelect\">\n          <option value=\"all\">Todos</option>\n          <option value=\"240 GB\">Tarjeta de datos 240 GB</option>\n          <option value=\"Ilimitados\">Datos ilimitados</option>\n        </select>\n      </div>\n      <button class=\"filter-reset\" type=\"button\">Quitar filtros</button>\n    </aside>\n    <div class=\"storage-grid\" id=\"gridConnectivity\"></div>\n  </div>\n</div>\n\n<div class=\"catalog-view\" id=\"viewStorage\" hidden>\n  <button class=\"back-btn\" data-back>\u2190 Volver</button>\n\n  <div class=\"catalog-layout\">\n    <aside class=\"filter-panel\" aria-label=\"Filtros\">\n      <p class=\"filter-panel-title\">Filtrar</p>\n      <div class=\"filter-row\">\n        <span class=\"filter-label\">Almacenamiento</span>\n        <select class=\"filter-select\" id=\"storageCapSelect\">\n          <option value=\"all\">Todas las capacidades</option>\n        </select>\n      </div>\n      <div class=\"filter-row\">\n        <span class=\"filter-label\">Velocidad</span>\n        <select class=\"filter-select\" id=\"storageSpeedSelect\">\n          <option value=\"all\">Todas</option>\n          <option value=\"0-1000\">Hasta 1000 MB/s</option>\n          <option value=\"1000-2000\">De 1000 a 2000 MB/s</option>\n          <option value=\"2000-99999\">M\u00e1s de 2000 MB/s</option>\n        </select>\n      </div>\n      <button class=\"filter-reset\" type=\"button\">Quitar filtros</button>\n    </aside>\n    <div class=\"storage-grid\" id=\"gridStorage\"></div>\n  </div>\n</div>\n\n<div class=\"catalog-view\" id=\"viewBatteries\" hidden>\n  <button class=\"back-btn\" data-back>\u2190 Volver</button>\n\n  <div class=\"catalog-layout\">\n    <aside class=\"filter-panel\" aria-label=\"Filtros\">\n      <p class=\"filter-panel-title\">Filtrar</p>\n      <div class=\"filter-row\">\n        <span class=\"filter-label\">Tipo</span>\n        <select class=\"filter-select\" id=\"batteryTypeSelect\">\n          <option value=\"all\">Todos</option>\n          <option value=\"Alcalina\">Alcalinas</option>\n          <option value=\"Litio\">Litio</option>\n          <option value=\"Bot\u00f3n\">Pilas de bot\u00f3n</option>\n          <option value=\"Aud\u00edfono\">Aud\u00edfono</option>\n          <option value=\"Recargable\">Recargables</option>\n          <option value=\"Cargador\">Cargadores</option>\n          <option value=\"Comprobador\">Comprobadores</option>\n          <option value=\"Cuidado del aud\u00edfono\">Cuidado del aud\u00edfono</option>\n        </select>\n      </div>\n      <div class=\"filter-row\">\n        <span class=\"filter-label\">Marca</span>\n        <select class=\"filter-select\" id=\"batteryBrandSelect\">\n          <option value=\"all\">Todas las marcas</option>\n          <option value=\"Duracell\">Duracell</option>\n          <option value=\"Energizer\">Energizer</option>\n          <option value=\"Maxell\">Maxell</option>\n          <option value=\"Philips\">Philips</option>\n          <option value=\"Phonak\">Phonak</option>\n          <option value=\"Rayovac\">Rayovac</option>\n          <option value=\"Renata\">Renata</option>\n          <option value=\"Varta\">Varta</option>\n        </select>\n      </div>\n      <div class=\"filter-row\">\n        <span class=\"filter-label\">Tama\u00f1o</span>\n        <select class=\"filter-select\" id=\"batterySizeSelect\">\n          <option value=\"all\">Todos</option>\n          <option value=\"AA\">AA (LR6)</option>\n          <option value=\"AAA\">AAA (LR03)</option>\n          <option value=\"C\">C (LR14)</option>\n          <option value=\"D\">D (LR20)</option>\n          <option value=\"9 V\">9 V (6LR61)</option>\n          <option value=\"CR123A\">CR123A</option>\n          <option value=\"CR2032\">CR2032</option>\n          <option value=\"LR44\">LR44</option>\n          <option value=\"10\">Aud\u00edfono 10</option>\n          <option value=\"312\">Aud\u00edfono 312</option>\n        </select>\n      </div>\n      <div class=\"filter-row\">\n        <span class=\"filter-label\">Voltaje</span>\n        <select class=\"filter-select\" id=\"batteryVoltSelect\">\n          <option value=\"all\">Todos</option>\n          <option value=\"1,2 V\">1,2 V</option>\n          <option value=\"1,45 V\">1,45 V</option>\n          <option value=\"1,5 V\">1,5 V</option>\n          <option value=\"3 V\">3 V</option>\n          <option value=\"9 V\">9 V</option>\n        </select>\n      </div>\n      <button class=\"filter-reset\" type=\"button\">Quitar filtros</button>\n    </aside>\n    <div class=\"storage-grid\" id=\"gridBatteries\"></div>\n  </div>\n</div>\n\n<div class=\"catalog-view\" id=\"viewSound\" hidden>\n  <button class=\"back-btn\" data-back>\u2190 Volver</button>\n\n  <div class=\"catalog-layout\">\n    <aside class=\"filter-panel\" aria-label=\"Filtros\">\n      <p class=\"filter-panel-title\">Filtrar</p>\n      <div class=\"filter-row\">\n        <span class=\"filter-label\">Tipo</span>\n        <select class=\"filter-select\" id=\"soundTypeSelect\">\n          <option value=\"all\">Todos</option>\n        </select>\n      </div>\n      <div class=\"filter-row\">\n        <span class=\"filter-label\">Marca</span>\n        <select class=\"filter-select\" id=\"soundBrandSelect\">\n          <option value=\"all\">Todas las marcas</option>\n        </select>\n      </div>\n      <div class=\"filter-row\">\n        <span class=\"filter-label\">Color</span>\n        <select class=\"filter-select\" id=\"soundColorSelect\">\n          <option value=\"all\">Todos</option>\n        </select>\n      </div>\n      <button class=\"filter-reset\" type=\"button\">Quitar filtros</button>\n    </aside>\n    <div class=\"storage-grid\" id=\"gridSound\"></div>\n  </div>\n</div>\n\n<div class=\"catalog-view\" id=\"viewStationery\" hidden>\n  <button class=\"back-btn\" data-back>\u2190 Volver</button>\n\n  <div class=\"catalog-layout\">\n    <aside class=\"filter-panel\" aria-label=\"Filtros\">\n      <p class=\"filter-panel-title\">Filtrar</p>\n      <div class=\"filter-row\">\n        <span class=\"filter-label\">Tipo</span>\n        <select class=\"filter-select\" id=\"stationeryTypeSelect\">\n          <option value=\"all\">Todos</option>\n        </select>\n      </div>\n      <div class=\"filter-row\">\n        <span class=\"filter-label\">Marca</span>\n        <select class=\"filter-select\" id=\"stationeryBrandSelect\">\n          <option value=\"all\">Todas las marcas</option>\n        </select>\n      </div>\n      <div class=\"filter-row\">\n        <span class=\"filter-label\">Color</span>\n        <select class=\"filter-select\" id=\"stationeryColorSelect\">\n          <option value=\"all\">Todos</option>\n        </select>\n      </div>\n      <button class=\"filter-reset\" type=\"button\">Quitar filtros</button>\n    </aside>\n    <div class=\"storage-grid\" id=\"gridStationery\"></div>\n  </div>\n</div>\n\n<div class=\"catalog-view\" id=\"viewProtection\" hidden>\n  <button class=\"back-btn\" data-back>\u2190 Volver</button>\n\n  <div class=\"catalog-layout\">\n    <aside class=\"filter-panel\" aria-label=\"Filtros\">\n      <p class=\"filter-panel-title\">Filtrar</p>\n      <div class=\"filter-row\">\n        <span class=\"filter-label\">Tipo</span>\n        <select class=\"filter-select\" id=\"protectionTypeSelect\">\n          <option value=\"all\">Todos</option>\n        </select>\n      </div>\n      <div class=\"filter-row\">\n        <span class=\"filter-label\">Marca</span>\n        <select class=\"filter-select\" id=\"protectionBrandSelect\">\n          <option value=\"all\">Todas las marcas</option>\n        </select>\n      </div>\n      <div class=\"filter-row\">\n        <span class=\"filter-label\">Color</span>\n        <select class=\"filter-select\" id=\"protectionColorSelect\">\n          <option value=\"all\">Todos</option>\n        </select>\n      </div>\n      <button class=\"filter-reset\" type=\"button\">Quitar filtros</button>\n    </aside>\n    <div class=\"storage-grid\" id=\"gridProtection\"></div>\n  </div>\n</div>\n\n<div class=\"catalog-view\" id=\"viewElectric\" hidden>\n  <button class=\"back-btn\" data-back>\u2190 Volver</button>\n\n  <div class=\"catalog-layout\">\n    <aside class=\"filter-panel\" aria-label=\"Filtros\">\n      <p class=\"filter-panel-title\">Filtrar</p>\n      <div class=\"filter-row\">\n        <span class=\"filter-label\">Tipo</span>\n        <select class=\"filter-select\" id=\"electricTypeSelect\">\n          <option value=\"all\">Todos</option>\n        </select>\n      </div>\n      <div class=\"filter-row\">\n        <span class=\"filter-label\">Color</span>\n        <select class=\"filter-select\" id=\"electricColorSelect\">\n          <option value=\"all\">Todos</option>\n        </select>\n      </div>\n      <button class=\"filter-reset\" type=\"button\">Quitar filtros</button>\n    </aside>\n    <div class=\"storage-grid\" id=\"gridElectric\"></div>\n  </div>\n</div>\n\n<div class=\"catalog-view\" id=\"viewFilmset\" hidden>\n  <button class=\"back-btn\" data-back>\u2190 Volver</button>\n\n  <div class=\"catalog-layout\">\n    <aside class=\"filter-panel\" aria-label=\"Filtros\">\n      <p class=\"filter-panel-title\">Filtrar</p>\n      <div class=\"filter-row\">\n        <span class=\"filter-label\">Tipo</span>\n        <select class=\"filter-select\" id=\"filmsetTypeSelect\">\n          <option value=\"all\">Todos</option>\n        </select>\n      </div>\n      <div class=\"filter-row\">\n        <span class=\"filter-label\">Marca</span>\n        <select class=\"filter-select\" id=\"filmsetBrandSelect\">\n          <option value=\"all\">Todas las marcas</option>\n        </select>\n      </div>\n      <div class=\"filter-row\">\n        <span class=\"filter-label\">Color</span>\n        <select class=\"filter-select\" id=\"filmsetColorSelect\">\n          <option value=\"all\">Todos</option>\n        </select>\n      </div>\n      <button class=\"filter-reset\" type=\"button\">Quitar filtros</button>\n    </aside>\n    <div class=\"storage-grid\" id=\"gridFilmset\"></div>\n  </div>\n</div>\n\n<div class=\"catalog-view\" id=\"viewDulling\" hidden>\n  <button class=\"back-btn\" data-back>\u2190 Volver</button>\n\n  <div class=\"catalog-layout\">\n    <aside class=\"filter-panel\" aria-label=\"Filtros\">\n      <p class=\"filter-panel-title\">Filtrar</p>\n      <div class=\"filter-row\">\n        <span class=\"filter-label\">Tipo</span>\n        <select class=\"filter-select\" id=\"dullingTypeSelect\">\n          <option value=\"all\">Todos</option>\n        </select>\n      </div>\n      <div class=\"filter-row\">\n        <span class=\"filter-label\">Marca</span>\n        <select class=\"filter-select\" id=\"dullingBrandSelect\">\n          <option value=\"all\">Todas las marcas</option>\n        </select>\n      </div>\n      <div class=\"filter-row\">\n        <span class=\"filter-label\">Color</span>\n        <select class=\"filter-select\" id=\"dullingColorSelect\">\n          <option value=\"all\">Todos</option>\n        </select>\n      </div>\n      <button class=\"filter-reset\" type=\"button\">Quitar filtros</button>\n    </aside>\n    <div class=\"storage-grid\" id=\"gridDulling\"></div>\n  </div>\n</div>\n\n<div class=\"catalog-view\" id=\"viewLighting\" hidden>\n  <button class=\"back-btn\" data-back>\u2190 Volver</button>\n\n  <div class=\"catalog-layout\">\n    <aside class=\"filter-panel\" aria-label=\"Filtros\">\n      <p class=\"filter-panel-title\">Filtrar</p>\n      <div class=\"filter-row\">\n        <span class=\"filter-label\">Tipo</span>\n        <select class=\"filter-select\" id=\"lightingTypeSelect\">\n          <option value=\"all\">Todos</option>\n        </select>\n      </div>\n      <div class=\"filter-row\">\n        <span class=\"filter-label\">Marca</span>\n        <select class=\"filter-select\" id=\"lightingBrandSelect\">\n          <option value=\"all\">Todas las marcas</option>\n        </select>\n      </div>\n      <div class=\"filter-row\">\n        <span class=\"filter-label\">Color</span>\n        <select class=\"filter-select\" id=\"lightingColorSelect\">\n          <option value=\"all\">Todos</option>\n        </select>\n      </div>\n      <button class=\"filter-reset\" type=\"button\">Quitar filtros</button>\n    </aside>\n    <div class=\"storage-grid\" id=\"gridLighting\"></div>\n  </div>\n</div>\n\n<div class=\"catalog-view\" id=\"viewEffects\" hidden>\n  <button class=\"back-btn\" data-back>\u2190 Volver</button>\n\n  <div class=\"catalog-layout\">\n    <aside class=\"filter-panel\" aria-label=\"Filtros\">\n      <p class=\"filter-panel-title\">Filtrar</p>\n      <div class=\"filter-row\">\n        <span class=\"filter-label\">Tipo</span>\n        <select class=\"filter-select\" id=\"effectsTypeSelect\">\n          <option value=\"all\">Todos</option>\n        </select>\n      </div>\n      <div class=\"filter-row\">\n        <span class=\"filter-label\">Marca</span>\n        <select class=\"filter-select\" id=\"effectsBrandSelect\">\n          <option value=\"all\">Todas las marcas</option>\n        </select>\n      </div>\n      <div class=\"filter-row\">\n        <span class=\"filter-label\">Color</span>\n        <select class=\"filter-select\" id=\"effectsColorSelect\">\n          <option value=\"all\">Todos</option>\n        </select>\n      </div>\n      <button class=\"filter-reset\" type=\"button\">Quitar filtros</button>\n    </aside>\n    <div class=\"storage-grid\" id=\"gridEffects\"></div>\n  </div>\n</div>\n\n<div class=\"catalog-view\" id=\"viewCleaning\" hidden>\n  <button class=\"back-btn\" data-back>\u2190 Volver</button>\n\n  <div class=\"catalog-layout\">\n    <aside class=\"filter-panel\" aria-label=\"Filtros\">\n      <p class=\"filter-panel-title\">Filtrar</p>\n      <div class=\"filter-row\">\n        <span class=\"filter-label\">Tipo</span>\n        <select class=\"filter-select\" id=\"cleaningTypeSelect\">\n          <option value=\"all\">Todos</option>\n        </select>\n      </div>\n      <div class=\"filter-row\">\n        <span class=\"filter-label\">Marca</span>\n        <select class=\"filter-select\" id=\"cleaningBrandSelect\">\n          <option value=\"all\">Todas las marcas</option>\n        </select>\n      </div>\n      <div class=\"filter-row\">\n        <span class=\"filter-label\">Color</span>\n        <select class=\"filter-select\" id=\"cleaningColorSelect\">\n          <option value=\"all\">Todos</option>\n        </select>\n      </div>\n      <button class=\"filter-reset\" type=\"button\">Quitar filtros</button>\n    </aside>\n    <div class=\"storage-grid\" id=\"gridCleaning\"></div>\n  </div>\n</div>\n\n<div class=\"catalog-view\" id=\"viewMarks\" hidden>\n  <button class=\"back-btn\" data-back>\u2190 Volver</button>\n\n  <div class=\"catalog-layout\">\n    <aside class=\"filter-panel\" aria-label=\"Filtros\">\n      <p class=\"filter-panel-title\">Filtrar</p>\n      <div class=\"filter-row\">\n        <span class=\"filter-label\">Tipo</span>\n        <select class=\"filter-select\" id=\"marksTypeSelect\">\n          <option value=\"all\">Todos</option>\n        </select>\n      </div>\n      <div class=\"filter-row\">\n        <span class=\"filter-label\">Marca</span>\n        <select class=\"filter-select\" id=\"marksBrandSelect\">\n          <option value=\"all\">Todas las marcas</option>\n        </select>\n      </div>\n      <div class=\"filter-row\">\n        <span class=\"filter-label\">Color</span>\n        <select class=\"filter-select\" id=\"marksColorSelect\">\n          <option value=\"all\">Todos</option>\n        </select>\n      </div>\n      <button class=\"filter-reset\" type=\"button\">Quitar filtros</button>\n    </aside>\n    <div class=\"storage-grid\" id=\"gridMarks\"></div>\n  </div>\n</div>\n\n<div class=\"catalog-view\" id=\"viewFastening\" hidden>\n  <button class=\"back-btn\" data-back>\u2190 Volver</button>\n\n  <div class=\"catalog-layout\">\n    <aside class=\"filter-panel\" aria-label=\"Filtros\">\n      <p class=\"filter-panel-title\">Filtrar</p>\n      <div class=\"filter-row\">\n        <span class=\"filter-label\">Tipo</span>\n        <select class=\"filter-select\" id=\"fasteningTypeSelect\">\n          <option value=\"all\">Todos</option>\n        </select>\n      </div>\n      <div class=\"filter-row\">\n        <span class=\"filter-label\">Marca</span>\n        <select class=\"filter-select\" id=\"fasteningBrandSelect\">\n          <option value=\"all\">Todas las marcas</option>\n        </select>\n      </div>\n      <div class=\"filter-row\">\n        <span class=\"filter-label\">Color</span>\n        <select class=\"filter-select\" id=\"fasteningColorSelect\">\n          <option value=\"all\">Todos</option>\n        </select>\n      </div>\n      <button class=\"filter-reset\" type=\"button\">Quitar filtros</button>\n    </aside>\n    <div class=\"storage-grid\" id=\"gridFastening\"></div>\n  </div>\n</div>\n\n<div class=\"catalog-view\" id=\"viewTapes\" hidden>\n  <button class=\"back-btn\" data-back>\u2190 Volver</button>\n\n  <div class=\"catalog-layout\">\n    <aside class=\"filter-panel\" aria-label=\"Filtros\">\n      <p class=\"filter-panel-title\">Filtrar</p>\n      <div class=\"filter-row\">\n        <span class=\"filter-label\">Tipo</span>\n        <select class=\"filter-select\" id=\"tapesTypeSelect\">\n          <option value=\"all\">Todos</option>\n        </select>\n      </div>\n      <div class=\"filter-row\">\n        <span class=\"filter-label\">Marca</span>\n        <select class=\"filter-select\" id=\"tapesBrandSelect\">\n          <option value=\"all\">Todas las marcas</option>\n        </select>\n      </div>\n      <div class=\"filter-row\">\n        <span class=\"filter-label\">Color</span>\n        <select class=\"filter-select\" id=\"tapesColorSelect\">\n          <option value=\"all\">Todos</option>\n        </select>\n      </div>\n      <button class=\"filter-reset\" type=\"button\">Quitar filtros</button>\n    </aside>\n    <div class=\"storage-grid\" id=\"gridTapes\"></div>\n  </div>\n</div>\n\n<div class=\"catalog-view\" id=\"viewBackdrops\" hidden>\n  <button class=\"back-btn\" data-back>\u2190 Volver</button>\n\n  <div class=\"catalog-layout\">\n    <aside class=\"filter-panel\" aria-label=\"Filtros\">\n      <p class=\"filter-panel-title\">Filtrar</p>\n      <div class=\"filter-row\">\n        <span class=\"filter-label\">Tipo</span>\n        <select class=\"filter-select\" id=\"backdropsTypeSelect\">\n          <option value=\"all\">Todos</option>\n        </select>\n      </div>\n      <div class=\"filter-row\">\n        <span class=\"filter-label\">Marca</span>\n        <select class=\"filter-select\" id=\"backdropsBrandSelect\">\n          <option value=\"all\">Todas las marcas</option>\n        </select>\n      </div>\n      <div class=\"filter-row\">\n        <span class=\"filter-label\">Color</span>\n        <select class=\"filter-select\" id=\"backdropsColorSelect\">\n          <option value=\"all\">Todos</option>\n        </select>\n      </div>\n      <button class=\"filter-reset\" type=\"button\">Quitar filtros</button>\n    </aside>\n    <div class=\"storage-grid\" id=\"gridBackdrops\"></div>\n  </div>\n</div>\n\n<div class=\"catalog-view\" id=\"viewOthersound\" hidden>\n  <button class=\"back-btn\" data-back>\u2190 Volver</button>\n\n  <div class=\"catalog-layout\">\n    <aside class=\"filter-panel\" aria-label=\"Filtros\">\n      <p class=\"filter-panel-title\">Filtrar</p>\n      <div class=\"filter-row\">\n        <span class=\"filter-label\">Tipo</span>\n        <select class=\"filter-select\" id=\"othersoundTypeSelect\">\n          <option value=\"all\">Todos</option>\n        </select>\n      </div>\n      <div class=\"filter-row\">\n        <span class=\"filter-label\">Marca</span>\n        <select class=\"filter-select\" id=\"othersoundBrandSelect\">\n          <option value=\"all\">Todas las marcas</option>\n        </select>\n      </div>\n      <div class=\"filter-row\">\n        <span class=\"filter-label\">Color</span>\n        <select class=\"filter-select\" id=\"othersoundColorSelect\">\n          <option value=\"all\">Todos</option>\n        </select>\n      </div>\n      <button class=\"filter-reset\" type=\"button\">Quitar filtros</button>\n    </aside>\n    <div class=\"storage-grid\" id=\"gridOthersound\"></div>\n  </div>\n</div>\n\n<div class=\"catalog-view\" id=\"viewLavacc\" hidden>\n  <button class=\"back-btn\" data-back>\u2190 Volver</button>\n\n  <div class=\"catalog-layout\">\n    <aside class=\"filter-panel\" aria-label=\"Filtros\">\n      <p class=\"filter-panel-title\">Filtrar</p>\n      <div class=\"filter-row\">\n        <span class=\"filter-label\">Tipo</span>\n        <select class=\"filter-select\" id=\"lavaccTypeSelect\">\n          <option value=\"all\">Todos</option>\n        </select>\n      </div>\n      <div class=\"filter-row\">\n        <span class=\"filter-label\">Marca</span>\n        <select class=\"filter-select\" id=\"lavaccBrandSelect\">\n          <option value=\"all\">Todas las marcas</option>\n        </select>\n      </div>\n      <div class=\"filter-row\">\n        <span class=\"filter-label\">Color</span>\n        <select class=\"filter-select\" id=\"lavaccColorSelect\">\n          <option value=\"all\">Todos</option>\n        </select>\n      </div>\n      <button class=\"filter-reset\" type=\"button\">Quitar filtros</button>\n    </aside>\n    <div class=\"storage-grid\" id=\"gridLavacc\"></div>\n  </div>\n</div>\n\n<div class=\"catalog-view\" id=\"viewMics\" hidden>\n  <button class=\"back-btn\" data-back>\u2190 Volver</button>\n\n  <div class=\"catalog-layout\">\n    <aside class=\"filter-panel\" aria-label=\"Filtros\">\n      <p class=\"filter-panel-title\">Filtrar</p>\n      <div class=\"filter-row\">\n        <span class=\"filter-label\">Tipo</span>\n        <select class=\"filter-select\" id=\"micsTypeSelect\">\n          <option value=\"all\">Todos</option>\n        </select>\n      </div>\n      <div class=\"filter-row\">\n        <span class=\"filter-label\">Marca</span>\n        <select class=\"filter-select\" id=\"micsBrandSelect\">\n          <option value=\"all\">Todas las marcas</option>\n        </select>\n      </div>\n      <button class=\"filter-reset\" type=\"button\">Quitar filtros</button>\n    </aside>\n    <div class=\"storage-grid\" id=\"gridMics\"></div>\n  </div>\n</div>\n\n<div class=\"catalog-view\" id=\"viewCabins\" hidden>\n  <button class=\"back-btn\" data-back>\u2190 Volver</button>\n\n  <div class=\"catalog-layout\">\n    <aside class=\"filter-panel\" aria-label=\"Filtros\">\n      <p class=\"filter-panel-title\">Filtrar</p>\n      <div class=\"filter-row\">\n        <span class=\"filter-label\">Tipo</span>\n        <select class=\"filter-select\" id=\"cabinTypeSelect\">\n          <option value=\"all\">Todos</option>\n          <option value=\"Cabina de discos\">Cabina de discos</option>\n          <option value=\"NAS\">NAS</option>\n        </select>\n      </div>\n      <div class=\"filter-row\">\n        <span class=\"filter-label\">Marca</span>\n        <select class=\"filter-select\" id=\"cabinBrandSelect\">\n          <option value=\"all\">Todas las marcas</option>\n          <option value=\"Areca\">Areca</option>\n          <option value=\"QNAP\">QNAP</option>\n          <option value=\"Stardom\">Stardom</option>\n          <option value=\"Synology\">Synology</option>\n          <option value=\"TerraMaster\">TerraMaster</option>\n        </select>\n      </div>\n      <button class=\"filter-reset\" type=\"button\">Quitar filtros</button>\n    </aside>\n    <div class=\"storage-grid\" id=\"gridCabins\"></div>\n  </div>\n</div>\n\n<div class=\"catalog-view\" id=\"viewVideoconf\" hidden>\n  <button class=\"back-btn\" data-back>\u2190 Volver</button>\n\n  <div class=\"catalog-layout\">\n    <aside class=\"filter-panel\" aria-label=\"Filtros\">\n      <p class=\"filter-panel-title\">Filtrar</p>\n      <div class=\"filter-row\">\n        <span class=\"filter-label\">Tipo</span>\n        <select class=\"filter-select\" id=\"videoconfTypeSelect\">\n          <option value=\"all\">Todos</option>\n          <option value=\"Videoconferencia\">Videoconferencia</option>\n          <option value=\"Intercom\">Intercom</option>\n          <option value=\"Walkies\">Walkies</option>\n        </select>\n      </div>\n      <div class=\"filter-row\">\n        <span class=\"filter-label\">Marca</span>\n        <select class=\"filter-select\" id=\"videoconfBrandSelect\">\n          <option value=\"all\">Todos</option>\n          <option value=\"Hollyland\">Hollyland</option>\n          <option value=\"Jabra\">Jabra</option>\n          <option value=\"Motorola\">Motorola</option>\n        </select>\n      </div>\n      <button class=\"filter-reset\" type=\"button\">Quitar filtros</button>\n    </aside>\n    <div class=\"storage-grid\" id=\"gridVideoconf\"></div>\n  </div>\n</div>\n\n<div class=\"catalog-view\" id=\"viewPrinters\" hidden>\n  <button class=\"back-btn\" data-back>\u2190 Volver</button>\n\n  <div class=\"catalog-layout\">\n    <aside class=\"filter-panel\" aria-label=\"Filtros\">\n      <p class=\"filter-panel-title\">Filtrar</p>\n      <div class=\"filter-row\">\n        <span class=\"filter-label\">Formato</span>\n        <select class=\"filter-select\" id=\"printerSizeSelect\">\n          <option value=\"all\">Todos</option>\n          <option value=\"A3\">A3</option>\n          <option value=\"A4\">A4</option>\n        </select>\n      </div>\n      <div class=\"filter-row\">\n        <span class=\"filter-label\">Impresi\u00f3n</span>\n        <select class=\"filter-select\" id=\"printerColorSelect\">\n          <option value=\"all\">Todos</option>\n          <option value=\"B/N\">B/N</option>\n          <option value=\"Color\">Color</option>\n        </select>\n      </div>\n      <button class=\"filter-reset\" type=\"button\">Quitar filtros</button>\n    </aside>\n    <div class=\"storage-grid\" id=\"gridPrinters\"></div>\n  </div>\n</div>\n\n<section class=\"featured reveal\" id=\"destacados\" aria-label=\"Modelos destacados\">\n  <div class=\"featured-head\">\n    <p class=\"eyebrow\">Destacados</p>\n    <h2>Modelos destacados</h2>\n    <p>Una selecci\u00f3n de material de nuestro cat\u00e1logo de alquiler.</p>\n  </div>\n  <div class=\"slider\" id=\"featuredSlider\" tabindex=\"0\" aria-roledescription=\"carrusel\">\n    <div class=\"slides\">\n      <article class=\"slide is-active\" aria-roledescription=\"diapositiva\" aria-label=\"1 de 3\">\n        <img src=\"https://m3hervas.github.io/CatalogoSoporte/alquiler/img/apple-macbook-air-m1-destacado_SpTV.webp\" alt=\"MacBook Air de 13,3 pulgadas con chip M1 sobre un escritorio\" style=\"object-position: 55% 50%\" loading=\"eager\" decoding=\"async\">\n        <div class=\"slide-content\">\n          <span class=\"slide-chip\">Ordenadores</span>\n          <h3>MacBook Air 13,3'' M1</h3>\n          <p>Apple M1 \u00b7 16 GB \u00b7 256 GB SSD</p>\n          <button class=\"primary-btn\" data-feature-route=\"mac\" data-feature-model=\"MacBook Air 13,3'' M1\">Ver en el cat\u00e1logo</button>\n        </div>\n      </article>\n      <article class=\"slide\" aria-roledescription=\"diapositiva\" aria-label=\"2 de 3\">\n        <img src=\"https://m3hervas.github.io/CatalogoSoporte/alquiler/img/apple-ipad-pro-destacado_SpTV.webp\" alt=\"Parte trasera de un iPad Pro\" style=\"object-position: 50% 45%\" loading=\"lazy\" decoding=\"async\">\n        <div class=\"slide-content\">\n          <span class=\"slide-chip\">Tablets</span>\n          <h3>iPad Pro (M5)</h3>\n          <p>De 256 GB a 2 TB \u00b7 Pantalla de 11''</p>\n          <button class=\"primary-btn\" data-feature-route=\"tablets\" data-feature-model=\"iPad Pro (M5)\">Ver en el cat\u00e1logo</button>\n        </div>\n      </article>\n      <article class=\"slide\" aria-roledescription=\"diapositiva\" aria-label=\"3 de 3\">\n        <img src=\"https://m3hervas.github.io/CatalogoSoporte/alquiler/img/apple-iphone-16-pro-destacado_SpTV.webp\" alt=\"C\u00e1maras traseras del iPhone 16 Pro\" style=\"object-position: 50% 22%\" loading=\"lazy\" decoding=\"async\">\n        <div class=\"slide-content\">\n          <span class=\"slide-chip\">M\u00f3viles</span>\n          <h3>iPhone 16 Pro</h3>\n          <p>128 GB \u00b7 256 GB \u00b7 512 GB \u00b7 1 TB \u00b7 Pantalla de 6,3''</p>\n          <button class=\"primary-btn\" data-feature-route=\"moviles\" data-feature-model=\"iPhone 16 Pro\">Ver en el cat\u00e1logo</button>\n        </div>\n      </article>\n    </div>\n    <div class=\"slider-dots\" role=\"group\" aria-label=\"Seleccionar destacado\">\n        <button class=\"slider-dot is-active\" aria-label=\"Ir al destacado 1\"><span></span></button>\n        <button class=\"slider-dot\" aria-label=\"Ir al destacado 2\"><span></span></button>\n        <button class=\"slider-dot\" aria-label=\"Ir al destacado 3\"><span></span></button>\n    </div>\n    <div class=\"slider-nav\">\n      <button class=\"slider-arrow\" data-dir=\"-1\" aria-label=\"Destacado anterior\">\n        <svg viewBox=\"0 0 24 24\" width=\"18\" height=\"18\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M15 18l-6-6 6-6\"/></svg>\n      </button>\n      <button class=\"slider-arrow\" data-dir=\"1\" aria-label=\"Destacado siguiente\">\n        <svg viewBox=\"0 0 24 24\" width=\"18\" height=\"18\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M9 18l6-6-6-6\"/></svg>\n      </button>\n    </div>\n  </div>\n</section>\n\n<footer class=\"site-footer reveal\" id=\"contacto\">\n  <div class=\"footer-grid\">\n    <div class=\"footer-brand\">\n      <div class=\"footer-logo\">\n        <img class=\"brand-logo brand-logo--light\" src=\"https://m3hervas.github.io/CatalogoSoporte/alquiler/img/logo-soporte-tv_SpTV.webp?v=20261004e\" alt=\"Soporte TV\" width=\"128\" height=\"34\">\n        <img class=\"brand-logo brand-logo--dark\" src=\"https://m3hervas.github.io/CatalogoSoporte/alquiler/img/logo-soporte-tv-blanco_SpTV.webp?v=20261004e\" alt=\"\" width=\"128\" height=\"34\">\n      </div>\n      <p>Alquiler de dispositivos para eventos, rodajes y producciones. Material configurado y revisado antes de cada entrega.</p>\n      <button class=\"primary-btn\" data-nav=\"rent\">Solicitar alquiler</button>\n    </div>\n    <div class=\"footer-col\">\n      <h4>Cat\u00e1logo</h4>\n      <a href=\"#tablets\" data-route=\"tablets\">Tablets</a>\n      <a href=\"#moviles\" data-route=\"moviles\">M\u00f3viles</a>\n      <a href=\"#mac\" data-route=\"mac\">Mac</a>\n      <a href=\"#ordenadores\" data-route=\"ordenadores\">Ordenadores</a>\n    </div>\n    <div class=\"footer-col\">\n      <h4>M\u00e1s material</h4>\n      <a href=\"#monitores\" data-route=\"monitores\">Monitores / TV</a>\n      <a href=\"#almacenamiento\" data-route=\"almacenamiento\">Almacenamiento</a>\n      <a href=\"#pilas\" data-route=\"pilas\">Pilas y cargadores</a>\n      <a href=\"#sonido\" data-route=\"sonido\">Accesorios de sonido</a>\n      <a href=\"#papeleria\" data-route=\"papeleria\">Papeler\u00eda</a>\n      <a href=\"#proteccion\" data-route=\"proteccion\">Protecci\u00f3n</a>\n      <a href=\"#conectividad-tornilleria\" data-route=\"conectividad-tornilleria\">Conectividad y torniller\u00eda</a>\n      <a href=\"#rodaje\" data-route=\"rodaje\">Rodaje</a>\n      <a href=\"#matabrillos\" data-route=\"matabrillos\">Matabrillos</a>\n      <a href=\"#iluminacion\" data-route=\"iluminacion\">Iluminaci\u00f3n</a>\n      <a href=\"#efectos\" data-route=\"efectos\">Efectos</a>\n      <a href=\"#limpieza\" data-route=\"limpieza\">Limpieza</a>\n      <a href=\"#marcas-de-foco\" data-route=\"marcas-de-foco\">Marcas de foco</a>\n      <a href=\"#sujecion\" data-route=\"sujecion\">Sujeci\u00f3n</a>\n      <a href=\"#cintas-adhesivas\" data-route=\"cintas-adhesivas\">Cintas adhesivas</a>\n      <a href=\"#fondos-telas\" data-route=\"fondos-telas\">Fondos / Telas</a>\n      <a href=\"#otros-sonidos\" data-route=\"otros-sonidos\">Otros sonidos</a>\n      <a href=\"#accesorios-petaca-micro\" data-route=\"accesorios-petaca-micro\">Accesorios Petaca/Micro</a>\n      <a href=\"#cabinas\" data-route=\"cabinas\">Cabinas</a>\n      <a href=\"#conectividad\" data-route=\"conectividad\">Conectividad</a>\n      <a href=\"#accesorios\" data-route=\"accesorios\">Accesorios</a>\n      <a href=\"#videoconferencia\" data-route=\"videoconferencia\">Videoconferencia PRO</a>\n      <a href=\"#impresoras\" data-route=\"impresoras\">Impresoras</a>\n      <a href=\"#microfonos\" data-route=\"microfonos\">Micr\u00f3fonos</a>\n    </div>\n  </div>\n  <div class=\"footer-bottom\">\n    <span>\u00a9 <span id=\"footerYear\">2026</span> Soporte TV</span>\n    <span class=\"footer-legal\"><a href=\"https://m3hervas.github.io/CatalogoSoporte/legal/aviso-legal.html\">Aviso legal</a> \u00b7 <a href=\"https://m3hervas.github.io/CatalogoSoporte/legal/privacidad.html\">Pol\u00edtica de privacidad</a> \u00b7 <a href=\"https://m3hervas.github.io/CatalogoSoporte/legal/cookies.html\">Pol\u00edtica de cookies</a> \u00b7 <button class=\"credits-link\" id=\"openCredits\" type=\"button\">Cr\u00e9ditos de fotos</button></span>\n  </div>\n</footer>\n\n<div class=\"scrim\" id=\"scrim\"></div>\n<div class=\"panel\" id=\"panel\" role=\"dialog\" aria-modal=\"true\" aria-labelledby=\"panel-name\"></div>\n\n<div class=\"scrim credits-scrim\" id=\"creditsScrim\"></div>\n<div class=\"credits-modal\" id=\"creditsModal\" role=\"dialog\" aria-modal=\"true\" aria-labelledby=\"creditsTitle\">\n  <div class=\"credits-top\">\n    <h2 id=\"creditsTitle\">Cr\u00e9ditos de fotos</h2>\n    <button class=\"close-btn\" id=\"closeCredits\" aria-label=\"Cerrar\">\u2715</button>\n  </div>\n  <p>Modelos destacados</p>\n  <ul>\n      <li><strong>MacBook Air 13,3'' M1</strong> \u2014 \u00abMacbook Air 2020 (M1) - 1\u00bb, por KKPCW. Licencia <a href=\"https://creativecommons.org/licenses/by-sa/4.0\" target=\"_blank\" rel=\"noopener\">CC BY-SA 4.0</a>, v\u00eda <a href=\"https://commons.wikimedia.org/wiki/File:Macbook_Air_2020_(M1)_-_1.jpg\" target=\"_blank\" rel=\"noopener\">Wikimedia Commons</a>. Adaptada (recorte y formato WebP).</li>\n      <li><strong>iPad Pro</strong> \u2014 \u00abIPad Pro 2018 backside\u00bb, por MIKI Yoshihito. Licencia <a href=\"https://creativecommons.org/licenses/by/2.0\" target=\"_blank\" rel=\"noopener\">CC BY 2.0</a>, v\u00eda <a href=\"https://commons.wikimedia.org/wiki/File:IPad_Pro_2018_backside.jpg\" target=\"_blank\" rel=\"noopener\">Wikimedia Commons</a>. Adaptada (recorte y formato WebP).</li>\n      <li><strong>iPhone 16 Pro</strong> \u2014 \u00abIPhone 16 Pro (54251031612)\u00bb, por \u30e1\u30a4\u30c9\u7406\u4e16. Licencia <a href=\"https://creativecommons.org/licenses/by-sa/2.0\" target=\"_blank\" rel=\"noopener\">CC BY-SA 2.0</a>, v\u00eda <a href=\"https://commons.wikimedia.org/wiki/File:IPhone_16_Pro_(54251031612).jpg\" target=\"_blank\" rel=\"noopener\">Wikimedia Commons</a>. Adaptada (recorte y formato WebP).</li>\n      <li><strong>SanDisk Extreme Portable SSD</strong> \u2014 \u00abSanDisk Extreme Portable SSD - 1TB, USB-C\u00bb, por Tony Webster. Licencia <a href=\"https://creativecommons.org/licenses/by/2.0\" target=\"_blank\" rel=\"noopener\">CC BY 2.0</a>, v\u00eda <a href=\"https://commons.wikimedia.org/wiki/File:SanDisk_Extreme_Portable_SSD_-_1TB,_USB-C_(41036158305).jpg\" target=\"_blank\" rel=\"noopener\">Wikimedia Commons</a>. Adaptada (recorte y formato WebP).</li>\n  </ul>\n  <p>Accesorios y Conectividad</p>\n  <ul>\n      <li><strong>Apple Pencil</strong> \u2014 \u00abApplePencilPro2\u00bb, por Jtosman. Licencia <a href=\"https://creativecommons.org/publicdomain/zero/1.0/\" target=\"_blank\" rel=\"noopener\">CC0</a>, v\u00eda <a href=\"https://commons.wikimedia.org/wiki/File:ApplePencilPro2.png\" target=\"_blank\" rel=\"noopener\">Wikimedia Commons</a>. Adaptada (fondo blanco y formato WebP).</li>\n      <li><strong>Aro de luz</strong> \u2014 \u00abRing Light\u00bb, por Serhan Meewisse. Licencia <a href=\"https://creativecommons.org/publicdomain/zero/1.0/\" target=\"_blank\" rel=\"noopener\">CC0</a>, v\u00eda <a href=\"https://commons.wikimedia.org/wiki/File:Ring_Light_25280737679.jpg\" target=\"_blank\" rel=\"noopener\">Wikimedia Commons</a>. Adaptada (fondo blanco, recorte y formato WebP).</li>\n      <li><strong>Power bank</strong> \u2014 \u00ab2023 Powerbank Green Cell PowerPlay 20 (2)\u00bb, por Jacek Halicki. Licencia <a href=\"https://creativecommons.org/licenses/by-sa/4.0\" target=\"_blank\" rel=\"noopener\">CC BY-SA 4.0</a>, v\u00eda <a href=\"https://commons.wikimedia.org/wiki/File:2023_Powerbank_Green_Cell_PowerPlay_20_(2).jpg\" target=\"_blank\" rel=\"noopener\">Wikimedia Commons</a>. Adaptada (fondo blanco, recorte y formato WebP).</li>\n      <li><strong>Funda con teclado</strong> \u2014 \u00abMagic Keyboard for iPad Pro - 1\u00bb, por KKPCW. Licencia <a href=\"https://creativecommons.org/licenses/by-sa/4.0\" target=\"_blank\" rel=\"noopener\">CC BY-SA 4.0</a>, v\u00eda <a href=\"https://commons.wikimedia.org/wiki/File:Magic_Keyboard_for_iPad_Pro_-_1.jpg\" target=\"_blank\" rel=\"noopener\">Wikimedia Commons</a>. Adaptada (recorte, fondo blanco y formato WebP).</li>\n      <li><strong>MiFi port\u00e1til</strong> \u2014 \u00abHuawei E5576-320 4G Reise-Hotspot LTE-Router\u00bb, por www.digitalpush.net. Licencia <a href=\"https://creativecommons.org/licenses/by/4.0\" target=\"_blank\" rel=\"noopener\">CC BY 4.0</a>, v\u00eda <a href=\"https://commons.wikimedia.org/wiki/File:Huawei-E5576-320-4G-Reise-Hotspot-LTE-Router.1.jpg\" target=\"_blank\" rel=\"noopener\">Wikimedia Commons</a>. Adaptada (fondo blanco, recorte y formato WebP).</li>\n      <li><strong>Router con SIM</strong> \u2014 \u00abMikrotik Chateau LTE-5G modem+router\u00bb, por Yerachmiel C. Licencia <a href=\"https://creativecommons.org/licenses/by-sa/4.0\" target=\"_blank\" rel=\"noopener\">CC BY-SA 4.0</a>, v\u00eda <a href=\"https://commons.wikimedia.org/wiki/File:Mikrotik_Chateau_LTE-5G_modem%2Brouter.jpg\" target=\"_blank\" rel=\"noopener\">Wikimedia Commons</a>. Adaptada (fondo blanco, recorte y formato WebP).</li>\n  </ul>\n  <p>Pilas y cargadores</p>\n  <ul>\n      <li><strong>Maxell Alcalina</strong> \u2014 \u00abBatt-LR6-Maxell-19YCULOH\u00bb, por Grzegorz W. T\u0119\u017cycki. Licencia <a href=\"https://creativecommons.org/licenses/by-sa/4.0\" target=\"_blank\" rel=\"noopener\">CC BY-SA 4.0</a>, v\u00eda <a href=\"https://commons.wikimedia.org/wiki/File:Batt-LR6-Maxell-19YCULOH.jpg\" target=\"_blank\" rel=\"noopener\">Wikimedia Commons</a>. Adaptada (fondo blanco, recorte y formato WebP).</li>\n      <li><strong>Philips Power Alkaline</strong> \u2014 \u00abBatterier\u00bb, por IngimarE. Licencia <a href=\"https://creativecommons.org/licenses/by-sa/4.0\" target=\"_blank\" rel=\"noopener\">CC BY-SA 4.0</a>, v\u00eda <a href=\"https://commons.wikimedia.org/wiki/File:Batterier.jpg\" target=\"_blank\" rel=\"noopener\">Wikimedia Commons</a>. Adaptada (fondo blanco, recorte y formato WebP).</li>\n      <li><strong>Varta Professional</strong> \u2014 \u00abVarta AA battery\u00bb, por Maksym Kozlenko. Licencia <a href=\"https://creativecommons.org/licenses/by-sa/4.0\" target=\"_blank\" rel=\"noopener\">CC BY-SA 4.0</a>, v\u00eda <a href=\"https://commons.wikimedia.org/wiki/File:Varta_AA_battery.jpg\" target=\"_blank\" rel=\"noopener\">Wikimedia Commons</a>. Adaptada (fondo blanco, recorte y formato WebP).</li>\n      <li><strong>Duracell Procell Constant</strong> \u2014 \u00abProcell Batteries\u00bb, por Nigel Hewson. Licencia <a href=\"http://creativecommons.org/publicdomain/zero/1.0/deed.en\" target=\"_blank\" rel=\"noopener\">CC0</a>, v\u00eda <a href=\"https://commons.wikimedia.org/wiki/File:Procell_Batteries.jpg\" target=\"_blank\" rel=\"noopener\">Wikimedia Commons</a>. Adaptada (fondo blanco, recorte y formato WebP).</li>\n      <li><strong>Duracell Procell Intense</strong> \u2014 \u00abProcell Batteries\u00bb, por Nigel Hewson. Licencia <a href=\"http://creativecommons.org/publicdomain/zero/1.0/deed.en\" target=\"_blank\" rel=\"noopener\">CC0</a>, v\u00eda <a href=\"https://commons.wikimedia.org/wiki/File:Procell_Batteries.jpg\" target=\"_blank\" rel=\"noopener\">Wikimedia Commons</a>. Adaptada (fondo blanco, recorte y formato WebP).</li>\n      <li><strong>Varta Industrial</strong> \u2014 \u00abVarta High Energy C battery-9654\u00bb, por Raimond Spekking. Licencia <a href=\"https://creativecommons.org/licenses/by-sa/4.0\" target=\"_blank\" rel=\"noopener\">CC BY-SA 4.0</a>, v\u00eda <a href=\"https://commons.wikimedia.org/wiki/File:Varta_High_Energy_C_battery-9654.jpg\" target=\"_blank\" rel=\"noopener\">Wikimedia Commons</a>. Adaptada (fondo blanco, recorte y formato WebP).</li>\n      <li><strong>Energizer Ultimate Lithium</strong> \u2014 \u00abEnergizer lithium\u00bb, por Lukas A, CZE. Dominio p\u00fablico, v\u00eda <a href=\"https://commons.wikimedia.org/wiki/File:Energizer_lithium.jpg\" target=\"_blank\" rel=\"noopener\">Wikimedia Commons</a>. Adaptada (fondo blanco, recorte y formato WebP).</li>\n      <li><strong>Duracell CR123A</strong> \u2014 \u00abDuracell Ultra CR17345 Lithium battery 3V-0248\u00bb, por Raimond Spekking. Licencia <a href=\"https://creativecommons.org/licenses/by-sa/4.0\" target=\"_blank\" rel=\"noopener\">CC BY-SA 4.0</a>, v\u00eda <a href=\"https://commons.wikimedia.org/wiki/File:Duracell_Ultra_CR17345_Lithium_battery_3V-0248.jpg\" target=\"_blank\" rel=\"noopener\">Wikimedia Commons</a>. Adaptada (fondo blanco, recorte y formato WebP).</li>\n      <li><strong>Varta Lithium</strong> \u2014 \u00abVarta CR123A Lithium battery-0471\u00bb, por Raimond Spekking. Licencia <a href=\"https://creativecommons.org/licenses/by-sa/4.0\" target=\"_blank\" rel=\"noopener\">CC BY-SA 4.0</a>, v\u00eda <a href=\"https://commons.wikimedia.org/wiki/File:Varta_CR123A_Lithium_battery-0471.jpg\" target=\"_blank\" rel=\"noopener\">Wikimedia Commons</a>. Adaptada (fondo blanco, recorte y formato WebP).</li>\n      <li><strong>Renata CR2032</strong> \u2014 \u00abCR2430 Renata ~26p31oao\u00bb, por Grzegorz W. T\u0119\u017cycki. Licencia <a href=\"https://creativecommons.org/licenses/by-sa/4.0\" target=\"_blank\" rel=\"noopener\">CC BY-SA 4.0</a>, v\u00eda <a href=\"https://commons.wikimedia.org/wiki/File:CR2430_Renata_~26p31oao.jpg\" target=\"_blank\" rel=\"noopener\">Wikimedia Commons</a>. Adaptada (fondo blanco, recorte y formato WebP).</li>\n      <li><strong>Pila de bot\u00f3n LR44</strong> \u2014 \u00abLR44 button cell battery-0147\u00bb, por Raimond Spekking. Licencia <a href=\"https://creativecommons.org/licenses/by-sa/4.0\" target=\"_blank\" rel=\"noopener\">CC BY-SA 4.0</a>, v\u00eda <a href=\"https://commons.wikimedia.org/wiki/File:LR44_button_cell_battery-0147.jpg\" target=\"_blank\" rel=\"noopener\">Wikimedia Commons</a>. Adaptada (fondo blanco, recorte y formato WebP).</li>\n      <li><strong>Duracell LR44</strong> \u2014 \u00abDURACELL LR44\u00bb, por Dmitry G. Licencia <a href=\"https://creativecommons.org/licenses/by-sa/3.0\" target=\"_blank\" rel=\"noopener\">CC BY-SA 3.0</a>, v\u00eda <a href=\"https://commons.wikimedia.org/wiki/File:DURACELL_LR44.JPG\" target=\"_blank\" rel=\"noopener\">Wikimedia Commons</a>. Adaptada (fondo blanco, recorte y formato WebP).</li>\n      <li><strong>Duracell ActivAir</strong> \u2014 \u00abCreativeTools.se - PackshotCreator - Hearing Aid Battery\u00bb, por Creative Tools. Licencia <a href=\"https://creativecommons.org/licenses/by/2.0/\" target=\"_blank\" rel=\"noopener\">CC BY 2.0</a>, v\u00eda <a href=\"https://www.flickr.com/photos/33907867@N02/5077903491\" target=\"_blank\" rel=\"noopener\">Flickr</a>. Adaptada (fondo blanco, recorte y formato WebP).</li>\n      <li><strong>Phonak pilas de aud\u00edfono</strong> \u2014 \u00abZink-Luft-Batterie PR41 - 312\u00bb, por Laserlicht. Licencia <a href=\"https://creativecommons.org/licenses/by-sa/4.0\" target=\"_blank\" rel=\"noopener\">CC BY-SA 4.0</a>, v\u00eda <a href=\"https://commons.wikimedia.org/wiki/File:Zink-Luft-Batterie_PR41_-_312.png\" target=\"_blank\" rel=\"noopener\">Wikimedia Commons</a>. Adaptada (fondo blanco, recorte y formato WebP).</li>\n      <li><strong>Rayovac pilas de aud\u00edfono</strong> \u2014 \u00abRayovac Extra PR41 312 1.45V batteries, Hillegersberg, Rotterdam (2021) 01\u00bb, por Donald Trung Quoc Don (Ch\u1eef H\u00e1n: \u5fb5\u570b\u55ae) - Wikimedia Commons - \u00a9 CC BY-SA 4.0 International.(Want to use this image?)Original publication \ud83d\udce4: --Donald Trung \u300e\u5fb5\u570b\u55ae\u300f (No Fake News \ud83d\udcac) (WikiProject Numismatics \ud83d\udcb4) (Articles \ud83d\udcda) 21:26, 16 December 2021 (UTC). Licencia <a href=\"https://creativecommons.org/licenses/by-sa/4.0\" target=\"_blank\" rel=\"noopener\">CC BY-SA 4.0</a>, v\u00eda <a href=\"https://commons.wikimedia.org/wiki/File:Rayovac_Extra_PR41_312_1.45V_batteries,_Hillegersberg,_Rotterdam_(2021)_01.jpg\" target=\"_blank\" rel=\"noopener\">Wikimedia Commons</a>. Adaptada (fondo blanco, recorte y formato WebP).</li>\n      <li><strong>Duracell Recargable</strong> \u2014 \u00abDuracell rechargeable batteries\u00bb, por Dmitry G. Licencia <a href=\"https://creativecommons.org/licenses/by-sa/3.0\" target=\"_blank\" rel=\"noopener\">CC BY-SA 3.0</a>, v\u00eda <a href=\"https://commons.wikimedia.org/wiki/File:Duracell_rechargeable_batteries.JPG\" target=\"_blank\" rel=\"noopener\">Wikimedia Commons</a>. Adaptada (fondo blanco, recorte y formato WebP).</li>\n      <li><strong>Cargador Duracell</strong> \u2014 \u00abRechargable Batteries (50826854891)\u00bb, por ajay_suresh. Licencia <a href=\"https://creativecommons.org/licenses/by/2.0\" target=\"_blank\" rel=\"noopener\">CC BY 2.0</a>, v\u00eda <a href=\"https://commons.wikimedia.org/wiki/File:Rechargable_Batteries_(50826854891).jpg\" target=\"_blank\" rel=\"noopener\">Wikimedia Commons</a>. Adaptada (fondo blanco, recorte y formato WebP).</li>\n      <li><strong>Cargador Varta 8 pilas</strong> \u2014 \u00abPills and charger (Pexels photo 19810744)\u00bb, por wutthichai charoenburi. Licencia <a href=\"https://www.pexels.com/license/\" target=\"_blank\" rel=\"noopener\">Pexels License</a>, v\u00eda <a href=\"https://www.pexels.com/photo/pills-and-charger-19810744/\" target=\"_blank\" rel=\"noopener\">Pexels</a>. Adaptada (fondo blanco, recorte y formato WebP).</li>\n      <li><strong>Comprobador de pilas</strong> \u2014 \u00abBattery tester BT-168\u00bb, por Ladislav Luppa. Licencia <a href=\"http://creativecommons.org/publicdomain/zero/1.0/deed.en\" target=\"_blank\" rel=\"noopener\">CC0</a>, v\u00eda <a href=\"https://commons.wikimedia.org/wiki/File:Battery_tester_BT-168.jpg\" target=\"_blank\" rel=\"noopener\">Wikimedia Commons</a>. Adaptada (fondo blanco, recorte y formato WebP).</li>\n      <li><strong>Comprobador de pilas digital</strong> \u2014 \u00abBattery checker\u00bb, por Jason7825. Dominio p\u00fablico, v\u00eda <a href=\"https://commons.wikimedia.org/wiki/File:Battery_checker.jpg\" target=\"_blank\" rel=\"noopener\">Wikimedia Commons</a>. Adaptada (fondo blanco, recorte y formato WebP).</li>\n  </ul>\n  <p>Papeler\u00eda, Protecci\u00f3n, Conectividad y Rodaje</p>\n  <ul>\n      <li><strong>Cutter profesional</strong> \u2014 foto de alisia_chris_alpinger, <a href=\"https://pixabay.com/photos/cutter-knife-box-cutter-tool-1668382/\" target=\"_blank\" rel=\"noopener\">Pixabay</a> (licencia de contenido de Pixabay). Adaptada (formato WebP).</li>\n      <li><strong>Gorro de ducha</strong> \u2014 \u00abEinmalhotelduschhaube\u00bb, por Gohnarch. Licencia <a href=\"https://creativecommons.org/licenses/by-sa/3.0\" target=\"_blank\" rel=\"noopener\">CC BY-SA 3.0</a>, v\u00eda <a href=\"https://commons.wikimedia.org/wiki/File:Einmalhotelduschhaube.jpg\" target=\"_blank\" rel=\"noopener\">Wikimedia Commons</a>. Adaptada (fondo blanco, recorte y formato WebP).</li>\n      <li><strong>Clavija Schuko macho</strong> \u2014 \u00abSchuko standard\u00bb, por Thomas Wydra. Dominio p\u00fablico, v\u00eda <a href=\"https://commons.wikimedia.org/wiki/File:Schuko_standard.jpg\" target=\"_blank\" rel=\"noopener\">Wikimedia Commons</a>. Adaptada (fondo blanco, recorte y formato WebP).</li>\n      <li><strong>Clavija Schuko hembra</strong> \u2014 \u00abDIY outdoor IP44 extension cord\u00bb, por Dmitry G. Licencia <a href=\"https://creativecommons.org/licenses/by-sa/3.0\" target=\"_blank\" rel=\"noopener\">CC BY-SA 3.0</a>, v\u00eda <a href=\"https://commons.wikimedia.org/wiki/File:DIY_outdoor_IP44_extension_cord.JPG\" target=\"_blank\" rel=\"noopener\">Wikimedia Commons</a>. Adaptada (recorte de una parte, fondo blanco y formato WebP).</li>\n      <li><strong>Claqueta de color</strong> \u2014 foto de rawpixel. Licencia <a href=\"https://creativecommons.org/publicdomain/zero/1.0/\" target=\"_blank\" rel=\"noopener\">CC0</a>, v\u00eda <a href=\"https://www.rawpixel.com/image/11189191/movie-clapper-filmmaking-production-advertising\" target=\"_blank\" rel=\"noopener\">rawpixel</a>. Adaptada (fondo blanco, recorte y formato WebP).</li>\n      <li><strong>Claqueta de insertos</strong> \u2014 \u00ab13-01-02-inventur-wmde-blitz-36\u00bb, por Ralf Roletschek. Licencia <a href=\"https://creativecommons.org/licenses/by-sa/3.0\" target=\"_blank\" rel=\"noopener\">CC BY-SA 3.0</a>, v\u00eda <a href=\"https://commons.wikimedia.org/wiki/File:13-01-02-inventur-wmde-blitz-36.jpg\" target=\"_blank\" rel=\"noopener\">Wikimedia Commons</a>. Adaptada (fondo blanco, recorte y formato WebP).</li>\n  </ul>\n  <p>Limpieza y Marcas de foco</p>\n  <ul>\n      <li><strong>Gel hidroalcoh\u00f3lico</strong> \u2014 \u00abUniversity Medical Pharmaceuticals Hand Sanitizer (transparent version)\u00bb, por NeoBatfreak. Licencia <a href=\"https://creativecommons.org/licenses/by-sa/4.0/\" target=\"_blank\" rel=\"noopener\">CC BY-SA 4.0</a>, v\u00eda <a href=\"https://commons.wikimedia.org/wiki/File:University_Medical_Pharmaceuticals_Hand_Sanitizer_(transparent_version).png\" target=\"_blank\" rel=\"noopener\">Wikimedia Commons</a>. Adaptada (fondo blanco, recorte y formato WebP).</li>\n      <li><strong>Alcohol isoprop\u00edlico</strong> \u2014 \u00ab\u00c1lcool Isoprop\u00edlico\u00bb, por Jo\u00e3o Carlos \u00c1vila. Licencia <a href=\"https://creativecommons.org/licenses/by-sa/4.0/\" target=\"_blank\" rel=\"noopener\">CC BY-SA 4.0</a>, v\u00eda <a href=\"https://commons.wikimedia.org/wiki/File:%C3%81lcool_Isoprop%C3%ADlico.png\" target=\"_blank\" rel=\"noopener\">Wikimedia Commons</a>. Adaptada (fondo blanco, recorte y formato WebP).</li>\n      <li><strong>Trapo de microfibra</strong> \u2014 \u00abGeneric Ultramicrofiber\u00bb, por EvSOP HGUM. Licencia <a href=\"https://creativecommons.org/licenses/by-sa/4.0\" target=\"_blank\" rel=\"noopener\">CC BY-SA 4.0</a>, v\u00eda <a href=\"https://commons.wikimedia.org/wiki/File:Generic_Ultramicrofiber.jpg\" target=\"_blank\" rel=\"noopener\">Wikimedia Commons</a>. Adaptada (fondo blanco, recorte y formato WebP).</li>\n      <li><strong>Rollo de papel de cocina</strong> \u2014 \u00abPaper towel (Wikimedia Commons)\u00bb, por Santeri Viinam\u00e4ki. Licencia <a href=\"https://creativecommons.org/licenses/by-sa/4.0\" target=\"_blank\" rel=\"noopener\">CC BY-SA 4.0</a>, v\u00eda <a href=\"https://commons.wikimedia.org/wiki/File:Paper_towel.jpg\" target=\"_blank\" rel=\"noopener\">Wikimedia Commons</a>. Adaptada (fondo blanco, recorte y formato WebP).</li>\n      <li><strong>Tees de madera</strong> \u2014 \u00abGolf Tees\u00bb, por J. Gracey Stinson. Licencia <a href=\"https://creativecommons.org/licenses/by/2.0\" target=\"_blank\" rel=\"noopener\">CC BY 2.0</a>, v\u00eda <a href=\"https://commons.wikimedia.org/wiki/File:Golf_Tees.jpg\" target=\"_blank\" rel=\"noopener\">Wikimedia Commons</a>. Adaptada (recorte y formato WebP).</li>\n  </ul>\n  <p>Sujeci\u00f3n</p>\n  <ul>\n      <li><strong>Bridas negras</strong> \u2014 \u00abCollier Rilsan (black nylon cable tie)\u00bb, por Patatruc. Licencia <a href=\"https://creativecommons.org/licenses/by-sa/4.0\" target=\"_blank\" rel=\"noopener\">CC BY-SA 4.0</a>, v\u00eda <a href=\"https://commons.wikimedia.org/wiki/File:Collier_Rilsan.jpg\" target=\"_blank\" rel=\"noopener\">Wikimedia Commons</a>. Adaptada (fondo blanco, recorte y formato WebP).</li>\n      <li><strong>Cable clamp</strong> \u2014 \u00ab\u0427\u0435\u0440\u0432\u044f\u0447\u043d\u044b\u0439 \u0445\u043e\u043c\u0443\u0442 (worm-drive hose clamp)\u00bb, por Alinkins. Licencia <a href=\"https://creativecommons.org/licenses/by-sa/4.0\" target=\"_blank\" rel=\"noopener\">CC BY-SA 4.0</a>, v\u00eda <a href=\"https://commons.wikimedia.org/wiki/File:%D0%A7%D0%B5%D1%80%D0%B2%D1%8F%D1%87%D0%BD%D1%8B%D0%B9_%D1%85%D0%BE%D0%BC%D1%83%D1%82.jpg\" target=\"_blank\" rel=\"noopener\">Wikimedia Commons</a>. Adaptada (fondo blanco, recorte y formato WebP).</li>\n      <li><strong>Pulpo con gancho</strong> \u2014 \u00abGep\u00e4ckspanner (bungee cords with hooks)\u00bb, por Lfuhr. Licencia <a href=\"https://creativecommons.org/licenses/by-sa/4.0\" target=\"_blank\" rel=\"noopener\">CC BY-SA 4.0</a>, v\u00eda <a href=\"https://commons.wikimedia.org/wiki/File:Gep%C3%A4ckspanner.jpg\" target=\"_blank\" rel=\"noopener\">Wikimedia Commons</a>. Adaptada (fondo blanco, recorte y formato WebP).</li>\n      <li><strong>Cincha con carraca</strong> \u2014 \u00abCustom made tie down strap (ratchet strap with hook)\u00bb, por DustinMoving. Licencia <a href=\"https://creativecommons.org/licenses/by-sa/4.0\" target=\"_blank\" rel=\"noopener\">CC BY-SA 4.0</a>, v\u00eda <a href=\"https://commons.wikimedia.org/wiki/File:Custom_made_tie_down_strap.jpg\" target=\"_blank\" rel=\"noopener\">Wikimedia Commons</a>. Adaptada (fondo blanco, recorte y formato WebP).</li>\n      <li><strong>Pinza cocodrilo</strong> \u2014 \u00abCrocodile clip 55mm\u00bb, por Suyash Dwivedi. Licencia <a href=\"https://creativecommons.org/licenses/by-sa/4.0\" target=\"_blank\" rel=\"noopener\">CC BY-SA 4.0</a>, v\u00eda <a href=\"https://commons.wikimedia.org/wiki/File:Crocodile_clip_55mm.jpg\" target=\"_blank\" rel=\"noopener\">Wikimedia Commons</a>. Adaptada (fondo blanco, recorte y formato WebP).</li>\n      <li><strong>Pinzas de madera de 7 vueltas</strong> \u2014 \u00abClothespin-2459e\u00bb, por David R. Tribble (Loadmaster). Licencia <a href=\"https://creativecommons.org/licenses/by-sa/3.0\" target=\"_blank\" rel=\"noopener\">CC BY-SA 3.0</a>, v\u00eda <a href=\"https://commons.wikimedia.org/wiki/File:Clothespin-2459e.jpg\" target=\"_blank\" rel=\"noopener\">Wikimedia Commons</a>. Adaptada (fondo blanco, recorte y formato WebP).</li>\n      <li><strong>Pinza de pl\u00e1stico</strong> \u2014 \u00abRed clamp 01 ies\u00bb, por Frank Vincentz. Licencia <a href=\"https://creativecommons.org/licenses/by-sa/3.0\" target=\"_blank\" rel=\"noopener\">CC BY-SA 3.0</a>, v\u00eda <a href=\"https://commons.wikimedia.org/wiki/File:Red_clamp_01_ies.jpg\" target=\"_blank\" rel=\"noopener\">Wikimedia Commons</a>. Adaptada (fondo blanco, recorte y formato WebP).</li>\n  </ul>\n  <p class=\"credits-note\">Las fotos de accesorios, conectividad, pilas, papeler\u00eda, protecci\u00f3n, conectividad, rodaje, limpieza, marcas de foco y sujeci\u00f3n gen\u00e9ricos son orientativas: el material entregado puede ser de otra marca o modelo equivalente. Resto de fotos de producto: im\u00e1genes oficiales de los fabricantes (Apple, Samsung, LG, JVC, Microsoft, HP, Dell, Lenovo, SanDisk / Western Digital, Areca, Stardom, TerraMaster, QNAP, Synology, Jabra, Phonak, Hollyland, Motorola, Ursa Straps, Rycote, Bubblebee Industries, Pilot, BIC, 3M / Scotch, Staedtler, Gorilla, Goobay, Loctite, edding, Sharpie, Pentel, Apli, Cap It, Tenba, Hama, Xiaomi, HP, Dirty Rigger, Bluestar, KleenSlate, Kenro, SW Kenyon (K-Line), Rosco, Dirty Down, Honeyrose, Ewent, tesa, Photographic Solutions, Pancro, Rain-X, Soudal, 3-En-Uno, WD-40, Sanytol, Zeiss, Foogy, Kimberly-Clark, Dodot, Green Clean, JJC, EDM, JAZ, Focus Rat, CGE Tools, Dylan Stoel, Modern Studio, Starlite, Bongo Ties, Procab, Precygrap, StarTech, VELCRO, Kupo, 3M, Sprig, Piher, Wolfcraft, tesa, Progaff / Le Mark, Gorilla, Ceys, 3M / Solventum, Walker Tape, Joe's Sticky Stuff, Hide-a-mic, EDM, Shurtape, C-Tape, Nichiban, Pro Tapes, 3B Scientific, Adam Hall, Sennheiser, Sony, Logitech, Viviana, ORCA, R\u00d8DE, Manfrotto, Ricoh, Zhiyun, Wacom, Celly, Targus y Ubiquiti) o aportadas por Soporte TV.</p>\n</div>\n<div class=\"scrim rent-scrim\" id=\"rentScrim\"></div>\n<div class=\"rent-modal\" id=\"rentModal\" role=\"dialog\" aria-modal=\"true\" aria-labelledby=\"rentTitle\">\n  <div class=\"panel-top\">\n    <h2 id=\"rentTitle\">Solicitar alquiler</h2>\n    <button class=\"close-btn\" id=\"rentClose\" aria-label=\"Cerrar\">\u2715</button>\n  </div>\n  <p class=\"lead\">Cu\u00e9ntanos qu\u00e9 necesitas y te responderemos por correo lo antes posible.</p>\n  <form id=\"rentForm\" novalidate>\n    <div class=\"field req-box\" id=\"reqBox\" hidden>\n      <span class=\"req-head\">Tu lista <button type=\"button\" class=\"link-btn\" id=\"reqClear\">Vaciar lista</button></span>\n      <ul class=\"req-list\" id=\"reqList\"></ul>\n    </div>\n    <div class=\"field-row\">\n      <div class=\"field\">\n        <label for=\"rentName\">Nombre</label>\n        <input id=\"rentName\" type=\"text\" autocomplete=\"name\" required>\n      </div>\n      <div class=\"field\">\n        <label for=\"rentCompany\">Empresa</label>\n        <input id=\"rentCompany\" type=\"text\" autocomplete=\"organization\" required>\n      </div>\n    </div>\n    <div class=\"field-row\">\n      <div class=\"field\">\n        <label for=\"rentEmail\">Correo</label>\n        <input id=\"rentEmail\" type=\"email\" autocomplete=\"email\" required>\n      </div>\n      <div class=\"field\">\n        <label for=\"rentPhone\">Tel\u00e9fono <small>(opcional)</small></label>\n        <input id=\"rentPhone\" type=\"tel\" autocomplete=\"tel\">\n      </div>\n    </div>\n    <fieldset class=\"field interest-field\">\n      <legend>Me interesa</legend>\n      <div class=\"interest-choices\">\n        <label><input type=\"radio\" name=\"rentInterest\" value=\"Alquiler\" checked><span>Alquiler</span></label>\n        <label><input type=\"radio\" name=\"rentInterest\" value=\"Compra\"><span>Compra</span></label>\n        <label><input type=\"radio\" name=\"rentInterest\" value=\"Alquiler y compra\"><span>Ambos</span></label>\n      </div>\n    </fieldset>\n    <div class=\"field\">\n      <label for=\"rentMsg\" id=\"rentMsgLabel\">\u00bfQu\u00e9 necesitas?</label>\n      <textarea id=\"rentMsg\" placeholder=\"Material, cantidades, fechas\u2026\" required></textarea>\n    </div>\n    <!-- anti-spam: invisible to people, robots fill it in and the request is discarded -->\n    <div class=\"hp-field\" aria-hidden=\"true\"><label>No rellenar este campo<input type=\"text\" id=\"rentHoney\" tabindex=\"-1\" autocomplete=\"off\"></label></div>\n    <label class=\"consent\"><input type=\"checkbox\" id=\"rentPrivacy\" required><span>He le\u00eddo y acepto la <a href=\"https://m3hervas.github.io/CatalogoSoporte/legal/privacidad.html\" target=\"_blank\" rel=\"noopener\">pol\u00edtica de privacidad</a>.</span></label>\n    <p class=\"consent-note\"><strong>Responsable:</strong> Soporte Pyme, S.L. (Soporte TV). <strong>Finalidad:</strong> responder a tu solicitud y enviarte presupuesto. <strong>Derechos:</strong> acceso, rectificaci\u00f3n, supresi\u00f3n y otros, escribiendo a <span class=\"js-mail\" data-u=\"info\" data-d=\"soportetv.es\">info [arroba] soportetv.es</span>. M\u00e1s informaci\u00f3n en la <a href=\"https://m3hervas.github.io/CatalogoSoporte/legal/privacidad.html\" target=\"_blank\" rel=\"noopener\">pol\u00edtica de privacidad</a>.</p>\n    <p class=\"field-error\" id=\"rentError\" role=\"alert\"></p>\n    <button type=\"submit\" class=\"primary-btn\" id=\"rentSubmit\">Enviar solicitud</button>\n  </form>\n  <div class=\"rent-done\" id=\"rentDone\" hidden>\n    <div class=\"rent-done-icon\" aria-hidden=\"true\">\u2713</div>\n    <p class=\"rent-done-title\">\u00a1Solicitud enviada!</p>\n    <p class=\"rent-done-sub\">Gracias. Te contestaremos lo antes posible al correo que nos has indicado.</p>\n    <button type=\"button\" class=\"primary-btn\" id=\"rentDoneClose\">Cerrar</button>\n  </div>\n</div>\n<button type=\"button\" class=\"list-fab\" id=\"listFab\" hidden>Mi lista <span class=\"list-fab-n\" id=\"listFabN\">0</span></button>\n\n</div>\n</div>";
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

// Products marked "No" in the column "¿Se muestra en la web?" of Productos_web_SoporteTV.xlsx (filled in by tools/build_catalogo.py)
const HIDDEN_PRODUCTS = new Set(["grid|Apple|iPad (5.ª generación)|", "gridAccessories|Apple|Adaptador USB-C a USB|"]);
const productId = (gridEl, p) => [gridEl.id, p.brand || "", p.model, p.key || ""].join("|");
// Cards and thumbnails use the 480 px copy of each photo (https://m3hervas.github.io/CatalogoSoporte/alquiler/img/s/, made by tools/build_catalogo.py); the sheet the full one
const smallPhoto = src => src ? src.replace(/(^|\/)img\/(?!s\/)/, "$1img/s/") : src;

// Cards are drawn only when their category is opened: drawing 360+ cards at load froze phones for a moment
const PENDING_GRIDS = new Map();
const deferRender = (gridEl, draw) => {
  if (!gridEl) return;
  const queue = PENDING_GRIDS.get(gridEl) || [];
  queue.push(draw);
  PENDING_GRIDS.set(gridEl, queue);
};
function flushRender(container) {
  container.querySelectorAll(".storage-grid").forEach(grid => {
    const queue = PENDING_GRIDS.get(grid);
    if (!queue) return;
    PENDING_GRIDS.delete(grid);
    queue.forEach(draw => draw());
  });
}
// Draws every grid at once (used by tools/collect_products.js for the Excel export)
const flushAllRenders = () => flushRender(document);
// What each grid shows, for the search (it needs every category's products without drawing their cards)
const SEARCH_SOURCES = [];
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

// Battery (AA cell) for the category card
function batteryIcon(accent) {
  return `<svg viewBox="0 0 120 100" xmlns="http://www.w3.org/2000/svg">
    <rect x="48" y="6" width="24" height="8" rx="2.5" fill="${accent}"/>
    <rect x="34" y="13" width="52" height="81" rx="9" fill="#EDEFF2" stroke="${accent}" stroke-width="3.5"/>
    <rect x="41" y="20" width="38" height="24" rx="4" fill="#D9DEE4"/>
    <path d="M62 52l-10 15h9l-3 13 11-17h-9z" fill="${accent}"/>
  </svg>`;
}

// Lavalier microphone for the sound accessories card
function soundIcon(accent) {
  return `<svg viewBox="0 0 120 100" xmlns="http://www.w3.org/2000/svg">
    <rect x="44" y="8" width="32" height="46" rx="16" fill="#EDEFF2" stroke="${accent}" stroke-width="3.5"/>
    <path d="M52 22h16M52 30h16M52 38h16" stroke="#D9DEE4" stroke-width="3" stroke-linecap="round"/>
    <path d="M34 40c0 14.4 11.6 26 26 26s26-11.6 26-26" fill="none" stroke="${accent}" stroke-width="3.5" stroke-linecap="round"/>
    <path d="M60 66v14M46 92h28" stroke="${accent}" stroke-width="3.5" stroke-linecap="round"/>
  </svg>`;
}

// Marker pen for the stationery card
function stationeryIcon(accent) {
  return `<svg viewBox="0 0 120 100" xmlns="http://www.w3.org/2000/svg">
    <g transform="rotate(-35 60 50)">
      <rect x="22" y="38" width="62" height="24" rx="5" fill="#EDEFF2" stroke="${accent}" stroke-width="3.5"/>
      <rect x="30" y="44" width="30" height="12" rx="2.5" fill="#D9DEE4"/>
      <path d="M84 42h10l10 8-10 8H84z" fill="${accent}"/>
      <rect x="10" y="40" width="12" height="20" rx="4" fill="${accent}"/>
    </g>
  </svg>`;
}

// Shield for the protection card
function protectionIcon(accent) {
  return `<svg viewBox="0 0 120 100" xmlns="http://www.w3.org/2000/svg">
    <path d="M60 8l34 12v26c0 22-14.5 38-34 46-19.5-8-34-24-34-46V20z" fill="#EDEFF2" stroke="${accent}" stroke-width="3.5" stroke-linejoin="round"/>
    <path d="M60 22l22 8v17c0 14-9 25-22 31z" fill="#D9DEE4"/>
    <path d="M46 50l10 10 18-20" fill="none" stroke="${accent}" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`;
}

// Schuko plug for the connectivity and hardware card
function electricIcon(accent) {
  return `<svg viewBox="0 0 120 100" xmlns="http://www.w3.org/2000/svg">
    <circle cx="60" cy="44" r="32" fill="#EDEFF2" stroke="${accent}" stroke-width="3.5"/>
    <circle cx="60" cy="44" r="21" fill="#D9DEE4"/>
    <circle cx="51" cy="44" r="3.5" fill="${accent}"/>
    <circle cx="69" cy="44" r="3.5" fill="${accent}"/>
    <rect x="57" y="20" width="6" height="7" rx="1.5" fill="${accent}"/>
    <rect x="57" y="61" width="6" height="7" rx="1.5" fill="${accent}"/>
    <path d="M60 76v16" stroke="${accent}" stroke-width="5" stroke-linecap="round"/>
  </svg>`;
}

// Clapperboard for the film-set card
function filmsetIcon(accent) {
  return `<svg viewBox="0 0 120 100" xmlns="http://www.w3.org/2000/svg">
    <rect x="18" y="38" width="84" height="52" rx="5" fill="#EDEFF2" stroke="${accent}" stroke-width="3.5"/>
    <path d="M26 54h68M26 66h40M26 78h52" stroke="#D9DEE4" stroke-width="4" stroke-linecap="round"/>
    <g transform="rotate(-14 18 34)">
      <rect x="18" y="22" width="84" height="14" rx="3" fill="${accent}"/>
      <path d="M32 22l-8 14M50 22l-8 14M68 22l-8 14M86 22l-8 14" stroke="#FFFFFF" stroke-width="5"/>
    </g>
  </svg>`;
}

// Icon for the "Matabrillos" card
function dullingIcon(accent) {
  return `<svg viewBox="0 0 120 100" xmlns="http://www.w3.org/2000/svg">
    <rect x="40" y="30" width="40" height="62" rx="8" fill="#EDEFF2" stroke="${accent}" stroke-width="3.5"/>
    <rect x="46" y="44" width="28" height="30" rx="3" fill="#D9DEE4"/>
    <rect x="50" y="16" width="20" height="14" rx="3" fill="${accent}"/>
    <path d="M72 20h10M86 14l6-4M86 20h8M86 26l6 4" stroke="${accent}" stroke-width="3" stroke-linecap="round"/>
  </svg>`;
}

// Icon for the "Iluminación" card
function lightingIcon(accent) {
  return `<svg viewBox="0 0 120 100" xmlns="http://www.w3.org/2000/svg">
    <rect x="22" y="26" width="52" height="40" rx="8" fill="#EDEFF2" stroke="${accent}" stroke-width="3.5"/>
    <path d="M74 32l24-12v52L74 60z" fill="#D9DEE4" stroke="${accent}" stroke-width="3.5" stroke-linejoin="round"/>
    <path d="M48 66v14M34 92l14-12 14 12" fill="none" stroke="${accent}" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>
    <circle cx="48" cy="46" r="9" fill="${accent}"/>
  </svg>`;
}

// Icon for the "Efectos" card
function effectsIcon(accent) {
  return `<svg viewBox="0 0 120 100" xmlns="http://www.w3.org/2000/svg">
    <path d="M52 14l7 21 21 7-21 7-7 21-7-21-21-7 21-7z" fill="#EDEFF2" stroke="${accent}" stroke-width="3.5" stroke-linejoin="round"/>
    <path d="M86 54l4 11 11 4-11 4-4 11-4-11-11-4 11-4z" fill="${accent}"/>
    <path d="M28 70l3 8 8 3-8 3-3 8-3-8-8-3 8-3z" fill="${accent}"/>
  </svg>`;
}

// Icon for the "Limpieza" card
function cleaningIcon(accent) {
  return `<svg viewBox="0 0 120 100" xmlns="http://www.w3.org/2000/svg">
    <rect x="38" y="36" width="44" height="56" rx="9" fill="#EDEFF2" stroke="${accent}" stroke-width="3.5"/>
    <rect x="46" y="52" width="28" height="24" rx="3" fill="#D9DEE4"/>
    <path d="M50 36V24h22v12M72 26h14l6 6" fill="none" stroke="${accent}" stroke-width="3.5" stroke-linejoin="round" stroke-linecap="round"/>
    <circle cx="98" cy="22" r="2.5" fill="${accent}"/><circle cx="102" cy="32" r="2.5" fill="${accent}"/><circle cx="96" cy="40" r="2.5" fill="${accent}"/>
  </svg>`;
}

// Icon for the "Marcas de foco" card
function marksIcon(accent) {
  return `<svg viewBox="0 0 120 100" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 30h80v18H70v44H50V48H20z" fill="#EDEFF2" stroke="${accent}" stroke-width="3.5" stroke-linejoin="round"/>
    <path d="M28 39h64" stroke="${accent}" stroke-width="4" stroke-linecap="round" stroke-dasharray="2 9"/>
  </svg>`;
}

// Icon for the "Sujeción" card
function fasteningIcon(accent) {
  return `<svg viewBox="0 0 120 100" xmlns="http://www.w3.org/2000/svg">
    <path d="M30 70c0-22 16-40 34-40s30 14 30 30" fill="none" stroke="${accent}" stroke-width="5" stroke-linecap="round"/>
    <rect x="22" y="62" width="40" height="24" rx="5" fill="#EDEFF2" stroke="${accent}" stroke-width="3.5"/>
    <path d="M30 70h24M30 78h16" stroke="#D9DEE4" stroke-width="3.5" stroke-linecap="round"/>
    <path d="M94 60l-6 14" stroke="${accent}" stroke-width="5" stroke-linecap="round"/>
  </svg>`;
}

// Icon for the "Cintas adhesivas" card
function tapesIcon(accent) {
  return `<svg viewBox="0 0 120 100" xmlns="http://www.w3.org/2000/svg">
    <circle cx="54" cy="50" r="34" fill="#EDEFF2" stroke="${accent}" stroke-width="3.5"/>
    <circle cx="54" cy="50" r="14" fill="#FFFFFF" stroke="${accent}" stroke-width="3.5"/>
    <path d="M88 50h22v14H84" fill="#D9DEE4" stroke="${accent}" stroke-width="3.5" stroke-linejoin="round"/>
  </svg>`;
}

// Icon for the "Fondos / Telas" card
function backdropsIcon(accent) {
  return `<svg viewBox="0 0 120 100" xmlns="http://www.w3.org/2000/svg">
    <path d="M18 16h84" stroke="${accent}" stroke-width="5" stroke-linecap="round"/>
    <path d="M24 16v70c8-6 14 6 22 0s14 6 22 0 14 6 22 0 8 4 8 4V16" fill="#EDEFF2" stroke="${accent}" stroke-width="3.5" stroke-linejoin="round"/>
    <path d="M42 22v58M60 22v58M78 22v58" stroke="#D9DEE4" stroke-width="3"/>
  </svg>`;
}

// Icon for the "Otros sonidos" card
function othersoundIcon(accent) {
  return `<svg viewBox="0 0 120 100" xmlns="http://www.w3.org/2000/svg">
    <path d="M28 62V52a32 32 0 0 1 64 0v10" fill="none" stroke="${accent}" stroke-width="4" stroke-linecap="round"/>
    <rect x="20" y="58" width="18" height="30" rx="7" fill="#EDEFF2" stroke="${accent}" stroke-width="3.5"/>
    <rect x="82" y="58" width="18" height="30" rx="7" fill="#EDEFF2" stroke="${accent}" stroke-width="3.5"/>
  </svg>`;
}

// Icon for the "Accesorios Petaca/Micro" card
function lavaccIcon(accent) {
  return `<svg viewBox="0 0 120 100" xmlns="http://www.w3.org/2000/svg">
    <rect x="40" y="30" width="40" height="56" rx="7" fill="#EDEFF2" stroke="${accent}" stroke-width="3.5"/>
    <path d="M52 30V16M68 30V20" stroke="${accent}" stroke-width="4" stroke-linecap="round"/>
    <rect x="48" y="44" width="24" height="12" rx="2.5" fill="#D9DEE4"/>
    <circle cx="60" cy="72" r="5" fill="${accent}"/>
  </svg>`;
}

// Icon for the "Micrófonos" card
function micsIcon(accent) {
  return `<svg viewBox="0 0 120 100" xmlns="http://www.w3.org/2000/svg">
    <rect x="46" y="10" width="28" height="48" rx="14" fill="#EDEFF2" stroke="${accent}" stroke-width="3.5"/>
    <path d="M52 24h16M52 32h16M52 40h16" stroke="#D9DEE4" stroke-width="3" stroke-linecap="round"/>
    <path d="M36 44a24 24 0 0 0 48 0" fill="none" stroke="${accent}" stroke-width="3.5" stroke-linecap="round"/>
    <path d="M60 68v14M46 86h28" stroke="${accent}" stroke-width="3.5" stroke-linecap="round"/>
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
  battery: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="7" y="4" width="10" height="17" rx="2"/><path d="M10 2h4"/><path d="M12.5 9 10.5 13h3l-2 4"/></svg>`,
  palette: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3a9 9 0 1 0 0 18c1.1 0 1.7-.9 1.4-1.8l-.4-1a1.6 1.6 0 0 1 1.5-2.2H17a4 4 0 0 0 4-4c0-5-4-9-9-9z"/><circle cx="7.5" cy="11" r="1"/><circle cx="10" cy="7" r="1"/><circle cx="15" cy="7.5" r="1"/></svg>`,
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
      ["Conectividad", "Wi-Fi / Wi-Fi + Cellular"],
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
      ["Conectividad", "Wi-Fi / Wi-Fi + Cellular"],
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
      ["Conectividad", "Wi-Fi / Wi-Fi + Cellular"],
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
      ["Conectividad", "Wi-Fi / Wi-Fi + Cellular"],
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
      ["Conectividad", "Wi-Fi / Wi-Fi + Cellular"],
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
      ["Conectividad", "Wi-Fi / Wi-Fi + Cellular"],
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
      ["Conectividad", "Wi-Fi / Wi-Fi + Cellular"],
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
      ["Conectividad", "Wi-Fi / Wi-Fi + Cellular"],
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
      ["Conectividad", "Wi-Fi / Wi-Fi + Cellular"],
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
      ["Conectividad", "Wi-Fi / Wi-Fi + Cellular"],
      ["Pantalla", "13 ''"]
    ]
  },
  {
    cat: "ipad", catLabel: "iPad", brand: "Apple", brandCode: "A", brandColor: "var(--apple)",
    model: "iPad Pro (M5)", storages: ["256 GB", "512 GB", "1 TB", "2 TB"],
    storage: "256 GB",
    photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/apple-ipad-pro_SpTV.webp",
    icon: ipadIcon("#5B6470"),
    specs: [
      ["Categoría", "iPad"],
      ["Almacenamiento", "256 GB / 512 GB / 1 TB / 2 TB"],
      ["Conectividad", "Wi-Fi / Wi-Fi + Cellular"],
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
      ["Conectividad", "Wi-Fi / Wi-Fi + Cellular"],
      ["Pantalla", "12,9 ''"]
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
    model: "Galaxy S25", storages: ["128 GB", "256 GB", "512 GB"],
    photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/samsung-galaxy-s25_SpTV.webp",
    icon: phoneIcon("#1428A0"),
    specs: [
      ["Categoría", "Móvil Android"],
      ["Almacenamiento", "128 GB / 256 GB / 512 GB"],
      ["Pantalla", "6,2 ''"]
    ]
  },
  {
    cat: "phone-android", catLabel: "Móvil Android", brand: "Samsung", brandCode: "S", brandColor: "var(--samsung)",
    model: "Galaxy S25 FE", storages: ["128 GB", "256 GB", "512 GB"],
    photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/samsung-galaxy-s25-fe-oficial_SpTV.webp",
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
    photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/samsung-galaxy-s24-oficial_SpTV.webp",
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

// Grouped by type: digital pencils, tripods, then the rest
const ACCESSORIES = [
{
    cat: "accessory", catLabel: "Accesorio", type: "Lápiz digital", group: "iPad", brand: "Apple", brandCode: "A", brandColor: "var(--apple)",
    model: "Apple Pencil", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/apple-pencil_SpTV.webp?v=2",
    icon: accessoryIcon("#5B6470"),
    specs: [
      ["Categoría", "Accesorio · iPad"],
      ["Marca", "Apple"]
    ]
  },
{
    cat: "accessory", catLabel: "Accesorio", type: "Lápiz digital", group: "iPad", brand: "Wacom", brandCode: "W", brandColor: "#0090C8",
    model: "Bamboo Fineline", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/wacom-bamboo-fineline_SpTV.webp",
    icon: accessoryIcon("#0090C8"),
    specs: [
      ["Categoría", "Accesorio · iPad"],
      ["Marca", "Wacom"]
    ]
  },
{
    cat: "accessory", catLabel: "Accesorio", type: "Trípode", group: "Móvil/Cámara", brand: "Celly", brandCode: "C", brandColor: "#E4572E",
    model: "Trípode", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/celly-tripode_SpTV.webp",
    icon: accessoryIcon("#E4572E"),
    specs: [
      ["Categoría", "Accesorio · Móvil/Cámara"],
      ["Detalle", "360º / 19 cm"]
    ]
  },
{
    cat: "accessory", catLabel: "Accesorio", type: "Trípode", group: "Móvil/Cámara", brand: "RØDE", brandCode: "R", brandColor: "#111111",
    model: "Tripod 2", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/rode-tripod-2_SpTV.webp",
    icon: accessoryIcon("#111111"),
    specs: [
      ["Categoría", "Accesorio · Móvil/Cámara"],
      ["Marca", "RØDE"],
      ["Descripción", "Minitrípode de sobremesa que también sirve de empuñadura para grabar a mano. Rótula de bola y tres posiciones de patas; vale para cámaras, móviles con soporte, micrófonos y luces."],
      ["Rosca", "1/4\" (incluye adaptador a 3/8\" para micrófonos)"],
      ["Carga máxima", "2 kg"],
      ["Altura", "20,5 cm plegado · 10,9 cm abierto"],
      ["Peso", "200 g"]
    ]
  },
{
    cat: "accessory", catLabel: "Accesorio", type: "Trípode", group: "Móvil/Cámara", brand: "Manfrotto", brandCode: "M", brandColor: "#111111",
    model: "PIXI con pinza para smartphone", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/manfrotto-pixi-pinza-smartphone_SpTV.webp",
    icon: accessoryIcon("#111111"),
    specs: [
      ["Categoría", "Accesorio · Móvil/Cámara"],
      ["Marca", "Manfrotto"],
      ["Descripción", "Minitrípode PIXI con pinza universal para smartphone. Rótula de bola con botón de bloqueo; las patas plegadas sirven de empuñadura. Vale también para cámaras compactas y sin espejo."],
      ["Referencia", "MKPIXICLMII-BK"],
      ["Incluye", "Minitrípode PIXI + pinza universal para smartphone"],
      ["Carga máxima", "1 kg"],
      ["Altura", "13,5 cm (18,5 cm plegado)"],
      ["Peso", "170 g"]
    ]
  },
{
    cat: "accessory", catLabel: "Accesorio", type: "Estabilizador", group: "Móvil/Cámara", brand: "Zhiyun", brandCode: "Z", brandColor: "#6B4FA0",
    model: "Smooth X Combo", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/zhiyun-smooth-x-combo_SpTV.webp",
    icon: accessoryIcon("#6B4FA0"),
    specs: [
      ["Categoría", "Accesorio · Móvil/Cámara"],
      ["Tipo", "Estabilizador combo para móvil"]
    ]
  },
{
    cat: "accessory", catLabel: "Accesorio", type: "Funda", group: "iPad", brand: "", brandCode: "", brandColor: "#5C6672",
    model: "Funda con teclado", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/funda-teclado-ipad-oficial_SpTV.webp",
    icon: accessoryIcon("#5C6672"),
    specs: [
      ["Categoría", "Accesorio · iPad"],
      ["Compatibilidad", "iPad 7.ª / 8.ª / 9.ª generación"]
    ]
  },
{
    cat: "accessory", catLabel: "Accesorio", type: "Funda", group: "iPad", brand: "", brandCode: "", brandColor: "#5C6672",
    model: "Funda Rugged / Correa", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/funda-rugged-sin-marca_SpTV.webp",
    icon: accessoryIcon("#5C6672"),
    specs: [
      ["Categoría", "Accesorio · iPad"]
    ]
  },
{
    cat: "accessory", catLabel: "Accesorio", type: "Adaptador", group: "Móvil/Cámara", brand: "Apple", brandCode: "A", brandColor: "var(--apple)",
    model: "Adaptador USB-C a USB", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/apple-adaptador-usb-c-a-usb_SpTV.webp",
    icon: accessoryIcon("#5B6470"),
    specs: [
      ["Categoría", "Accesorio · Móvil/Cámara"],
      ["Marca", "Apple"]
    ]
  },
{
    cat: "accessory", catLabel: "Accesorio", type: "Iluminación", group: "Móvil/Cámara", brand: "", brandCode: "", brandColor: "#5C6672",
    model: "Aro de luz", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/aro-de-luz_SpTV.webp?v=2",
    icon: accessoryIcon("#5C6672"),
    specs: [
      ["Categoría", "Accesorio · Móvil/Cámara"]
    ]
  },
{
    cat: "accessory", catLabel: "Accesorio", type: "Batería externa", group: "Móvil/Cámara", brand: "", brandCode: "", brandColor: "#5C6672",
    model: "Power bank", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/power-bank_SpTV.webp?v=2",
    icon: accessoryIcon("#5C6672"),
    specs: [
      ["Categoría", "Accesorio · Móvil/Cámara"],
      ["Capacidad", "10000 mAh"],
      ["Conector", "USB-C"]
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
    model: "Portátil i5 · 8 GB RAM", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/portatil-8-gb-ram_SpTV.webp",
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
    model: "Portátil i5 · 16 GB RAM", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/portatil-16-gb-ram-intel-core-i5_SpTV.webp", key: "portatil-i5-16",
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
    model: "Portátil i7 · 16 GB RAM", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/portatil-16-gb-ram-intel-core-i7_SpTV.webp", key: "portatil-i7-16",
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
        photo: device === "MiFi" ? "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/mifi-portatil_SpTV.webp?v=2" : "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/router-con-sim_SpTV.webp?v=2",
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
    model: "Jabra PanaCast", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/jabra-panacast_SpTV.webp",
    icon: videoconfIcon("#1A1A1A"),
    info: [["screen", "Vídeo", "4K panorámico 180°", 1], ["signal", "Audio", "2 micrófonos", 1], ["port", "Conexión", "USB-C"]],
    specs: [["Categoría", "Cámara panorámica de videoconferencia para salas pequeñas"], ["Marca", "Jabra"], ["Cámara", "3 cámaras de 13 MP con unión de imagen en tiempo real · 4K panorámico (3840 × 1080) · campo de visión 180°"], ["Audio", "2 micrófonos integrados"], ["Funciones", "Zoom inteligente que encuadra a todos los asistentes · HDR automático según la luz de la sala"], ["Compatibilidad", "Microsoft Teams, Zoom y las principales plataformas de videollamada · conectar y usar"], ["Conexión", "USB-C"]]
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
  if (gridEl) SEARCH_SOURCES.push({ grid: gridEl, items, grouped: false });
  deferRender(gridEl, () => drawStorage(items, gridEl));
}

function drawStorage(items, gridEl) {
  items.forEach(d => {
    const pid = productId(gridEl, d);
    if (HIDDEN_PRODUCTS.has(pid)) return;
    const card = document.createElement("article");
    card.className = "storage-card";
    card.dataset.pid = pid;
    card.style.setProperty("--i", gridEl.children.length);
    card.dataset.type = d.type;
    card.dataset.caps = "|" + d.capacities.join("|") + "|";
    card.dataset.speed = Math.max(...(d.speed.match(/\d+/g) || [0]).map(Number));
    const media = d.photo ? `<img src="${smallPhoto(d.photo)}" alt="${d.model}" loading="lazy" decoding="async">` : driveIcon("#2B79C2");
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

// Batteries and chargers (purchase catalogue). One card per brand line; its sizes are listed together.
// size / voltage / type accept several values separated by "|" (used by the filters)
const BATTERIES = [
  {
    cat: "battery", type: "Alcalina", size: "AA|AAA|9 V|C|D", voltage: "1,5 V|9 V", brand: "Duracell", brandCode: "D", brandColor: "#2B2B2B",
    model: "Duracell Procell Intense", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/duracell-procell-intense_SpTV.webp",
    icon: batteryIcon("#2B2B2B"),
    info: [["battery", "Tamaños", "AA · AAA · C · D · 9 V", 1], ["speed", "Voltaje", "1,5 V · 9 V", 1], ["tag", "Formato", "Caja de 10 ud"]],
    specs: [["Categoría", "Pila alcalina profesional"], ["Marca", "Duracell (gama Procell)"], ["Tamaños", "AA (LR6) · AAA (LR03) · C (LR14) · D (LR20) · 9 V (6LR61)"], ["Voltaje", "1,5 V (AA, AAA, C y D) · 9 V"], ["Uso", "Aparatos de consumo alto: micrófonos inalámbricos, petacas, flashes, linternas y equipos de medida"], ["Formato", "Caja de 10 unidades (todos los tamaños)"]]
  },
  {
    cat: "battery", type: "Alcalina", size: "AA|AAA|9 V", voltage: "1,5 V|9 V", brand: "Duracell", brandCode: "D", brandColor: "#2B2B2B",
    model: "Duracell Procell Constant", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/duracell-procell-constant_SpTV.webp",
    icon: batteryIcon("#2B2B2B"),
    info: [["battery", "Tamaños", "AA · AAA · 9 V", 1], ["speed", "Voltaje", "1,5 V · 9 V", 1], ["tag", "Formato", "Caja de 10 ud"]],
    specs: [["Categoría", "Pila alcalina profesional"], ["Marca", "Duracell (gama Procell)"], ["Tamaños", "AA (LR6) · AAA (LR03) · 9 V (6LR61)"], ["Voltaje", "1,5 V (AA y AAA) · 9 V"], ["Uso", "Aparatos de consumo bajo y constante: mandos, ratones y teclados, relojes, detectores y cerraduras"], ["Formato", "Caja de 10 unidades (todos los tamaños)"]]
  },
  {
    cat: "battery", type: "Alcalina", size: "AA|AAA|9 V", voltage: "1,5 V|9 V", brand: "Varta", brandCode: "V", brandColor: "#0B3D91",
    model: "Varta Professional", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/varta-professional_SpTV.webp",
    icon: batteryIcon("#0B3D91"),
    info: [["battery", "Tamaños", "AA · AAA · 9 V", 1], ["speed", "Voltaje", "1,5 V · 9 V", 1], ["tag", "Formato", "Cajas de 10 y 20 ud · pack de 40"]],
    specs: [["Categoría", "Pila alcalina profesional"], ["Marca", "Varta"], ["Tamaños", "AA (LR6) · AAA (LR03) · 9 V (6LR61)"], ["Voltaje", "1,5 V (AA y AAA) · 9 V"], ["Uso", "Uso profesional y alto consumo"], ["Formato", "AA: caja de 10 ud o pack de 40 (10 × 4 ud) · AAA: caja de 10 ud · 9 V: caja de 20 ud"]]
  },
  {
    cat: "battery", type: "Alcalina", size: "C", voltage: "1,5 V", brand: "Varta", brandCode: "V", brandColor: "#0B3D91",
    model: "Varta Industrial", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/varta-industrial_SpTV.webp",
    icon: batteryIcon("#0B3D91"),
    info: [["battery", "Tamaño", "C (LR14)", 1], ["speed", "Voltaje", "1,5 V", 1], ["tag", "Uso", "Industrial y profesional"]],
    specs: [["Categoría", "Pila alcalina industrial"], ["Marca", "Varta"], ["Tamaño", "C (LR14)"], ["Voltaje", "1,5 V"], ["Uso", "Linternas, equipos de medida, megafonía portátil y aparatos de consumo alto"], ["Formato", "Consúltanos"]]
  },
  {
    cat: "battery", type: "Alcalina", size: "AA", voltage: "1,5 V", brand: "Maxell", brandCode: "M", brandColor: "#D7000F",
    model: "Maxell Alcalina", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/maxell-aa_SpTV.webp",
    icon: batteryIcon("#D7000F"),
    info: [["battery", "Tamaño", "AA (LR6)", 1], ["speed", "Voltaje", "1,5 V", 1], ["tag", "Formato", "Blíster de 8 ud"]],
    specs: [["Categoría", "Pila alcalina"], ["Marca", "Maxell"], ["Tamaño", "AA (LR6)"], ["Voltaje", "1,5 V"], ["Uso", "Mandos, ratones, teclados, juguetes y aparatos de uso diario"], ["Formato", "Blíster de 8 unidades"]]
  },
  {
    cat: "battery", type: "Alcalina", size: "AA", voltage: "1,5 V", brand: "Philips", brandCode: "P", brandColor: "#0B5ED7",
    model: "Philips Power Alkaline", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/philips-power-aa_SpTV.webp",
    icon: batteryIcon("#0B5ED7"),
    info: [["battery", "Tamaño", "AA (LR6)", 1], ["speed", "Voltaje", "1,5 V", 1], ["tag", "Formato", "Blíster de 8 ud"]],
    specs: [["Categoría", "Pila alcalina"], ["Marca", "Philips"], ["Tamaño", "AA (LR6)"], ["Voltaje", "1,5 V"], ["Uso", "Mandos, ratones, teclados, juguetes y aparatos de uso diario"], ["Formato", "Blíster de 8 unidades"]]
  },
  {
    cat: "battery", type: "Litio", size: "AA|AAA", voltage: "1,5 V", brand: "Energizer", brandCode: "E", brandColor: "#1A1A1A",
    model: "Energizer Ultimate Lithium", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/energizer-lithium_SpTV.webp",
    icon: batteryIcon("#1A1A1A"),
    info: [["battery", "Tamaños", "AA · AAA", 1], ["speed", "Voltaje", "1,5 V", 1], ["tag", "Formato", "Caja de 10 ud"]],
    specs: [["Categoría", "Pila de litio"], ["Marca", "Energizer"], ["Tamaños", "AA (FR6) · AAA (FR03), sustituyen a las alcalinas LR6 / LR03"], ["Voltaje", "1,5 V"], ["Ventajas", "Más duración que una alcalina en aparatos de alto consumo, más ligera, aguanta frío y calor extremos y muy baja autodescarga"], ["Uso", "Micrófonos inalámbricos, flashes, GPS y equipos al aire libre"], ["Formato", "Caja de 10 unidades"]]
  },
  {
    cat: "battery", type: "Litio", size: "CR123A", voltage: "3 V", brand: "Duracell", brandCode: "D", brandColor: "#2B2B2B",
    model: "Duracell CR123A", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/duracell-cr123a_SpTV.webp",
    icon: batteryIcon("#2B2B2B"),
    info: [["battery", "Tamaño", "CR123A", 1], ["speed", "Voltaje", "3 V", 1], ["tag", "Uso", "Cámaras, linternas y alarmas"]],
    specs: [["Categoría", "Pila de litio"], ["Marca", "Duracell"], ["Tamaño", "CR123A (CR17345)"], ["Voltaje", "3 V"], ["Uso", "Cámaras, linternas tácticas, detectores, alarmas y cerraduras electrónicas"]]
  },
  {
    cat: "battery", type: "Litio|Botón", size: "CR123A|CR2032", voltage: "3 V", brand: "Varta", brandCode: "V", brandColor: "#0B3D91",
    model: "Varta Lithium", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/varta-lithium_SpTV.webp",
    icon: batteryIcon("#0B3D91"),
    info: [["battery", "Tamaños", "CR123A · CR2032", 1], ["speed", "Voltaje", "3 V", 1], ["tag", "Uso", "Cámaras, alarmas, llaves y placas base"]],
    specs: [["Categoría", "Pila de litio"], ["Marca", "Varta"], ["Tamaños", "CR123A (cilíndrica) · CR2032 (botón)"], ["Voltaje", "3 V"], ["Uso", "CR123A: cámaras, linternas y alarmas · CR2032: llaves de coche, básculas, mandos, AirTag y placas base"]]
  },
  {
    cat: "battery", type: "Litio|Botón", size: "CR2032", voltage: "3 V", brand: "Renata", brandCode: "R", brandColor: "#C8102E",
    model: "Renata CR2032", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/renata-cr2032_SpTV.webp",
    icon: batteryIcon("#C8102E"),
    info: [["battery", "Tamaño", "CR2032", 1], ["speed", "Voltaje", "3 V", 1], ["tag", "Origen", "Fabricada en Suiza"]],
    specs: [["Categoría", "Pila de litio de botón"], ["Marca", "Renata (Swatch Group)"], ["Tamaño", "CR2032 · 20 × 3,2 mm"], ["Voltaje", "3 V"], ["Uso", "Llaves de coche, básculas, mandos, AirTag, relojes y placas base"]]
  },
  {
    cat: "battery", type: "Botón", size: "LR44", voltage: "1,5 V", brand: "Duracell", brandCode: "D", brandColor: "#2B2B2B",
    model: "Duracell LR44", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/duracell-lr44_SpTV.webp",
    icon: batteryIcon("#2B2B2B"),
    info: [["battery", "Tamaño", "LR44 (A76)", 1], ["speed", "Voltaje", "1,5 V", 1], ["tag", "Uso", "Calculadoras, juguetes y termómetros"]],
    specs: [["Categoría", "Pila de botón alcalina"], ["Marca", "Duracell"], ["Tamaño", "LR44 · equivale a A76, AG13 y 357"], ["Voltaje", "1,5 V"], ["Uso", "Calculadoras, juguetes, termómetros, punteros láser y pequeños aparatos"]]
  },
  {
    cat: "battery", type: "Botón", size: "LR44", voltage: "1,5 V", brand: "", brandCode: "", brandColor: "#5C6672",
    model: "Pila de botón LR44", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/lr44_SpTV.webp",
    icon: batteryIcon("#5C6672"),
    info: [["battery", "Tamaño", "LR44 (AG13)", 1], ["speed", "Voltaje", "1,5 V", 1], ["tag", "Uso", "Calculadoras, juguetes y termómetros"]],
    specs: [["Categoría", "Pila de botón alcalina"], ["Tamaño", "LR44 · equivale a A76, AG13 y 357"], ["Voltaje", "1,5 V"], ["Uso", "Calculadoras, juguetes, termómetros, punteros láser y pequeños aparatos"]]
  },
  {
    cat: "battery", type: "Audífono", size: "10|312", voltage: "1,45 V", brand: "Duracell", brandCode: "D", brandColor: "#2B2B2B",
    model: "Duracell ActivAir", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/duracell-activair_SpTV.webp",
    icon: batteryIcon("#2B2B2B"),
    info: [["battery", "Tamaños", "10 · 312", 1], ["speed", "Voltaje", "1,45 V", 1], ["tag", "Formato", "Blíster de 6 ud"]],
    specs: [["Categoría", "Pila de audífono (zinc-aire)"], ["Marca", "Duracell"], ["Tamaños", "10 (pestaña amarilla) · 312 (pestaña marrón)"], ["Voltaje", "1,45 V"], ["Uso", "Se activa al quitar la pestaña: espera un minuto antes de ponerla en el audífono"], ["Formato", "Blíster de 6 unidades"]]
  },
  {
    cat: "battery", type: "Audífono", size: "10|312", voltage: "1,45 V", brand: "Phonak", brandCode: "P", brandColor: "#4A4A4A",
    model: "Phonak pilas de audífono", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/phonak-audifono_SpTV.webp",
    icon: batteryIcon("#4A4A4A"),
    info: [["battery", "Tamaños", "10 · 312", 1], ["speed", "Voltaje", "1,45 V", 1], ["tag", "Formato", "Blíster de 6 ud"]],
    specs: [["Categoría", "Pila de audífono (zinc-aire)"], ["Marca", "Phonak"], ["Tamaños", "10 (pestaña amarilla) · 312 (pestaña marrón)"], ["Voltaje", "1,45 V"], ["Uso", "Se activa al quitar la pestaña: espera un minuto antes de ponerla en el audífono"], ["Formato", "Blíster de 6 unidades"]]
  },
  {
    cat: "battery", type: "Audífono", size: "10|312", voltage: "1,45 V", brand: "Rayovac", brandCode: "R", brandColor: "#D2232A",
    model: "Rayovac pilas de audífono", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/rayovac-audifono_SpTV.webp",
    icon: batteryIcon("#D2232A"),
    info: [["battery", "Tamaños", "10 · 312", 1], ["speed", "Voltaje", "1,45 V", 1], ["tag", "Formato", "Blíster de 6 ud"]],
    specs: [["Categoría", "Pila de audífono (zinc-aire)"], ["Marca", "Rayovac"], ["Tamaños", "10 (pestaña amarilla) · 312 (pestaña marrón)"], ["Voltaje", "1,45 V"], ["Uso", "Se activa al quitar la pestaña: espera un minuto antes de ponerla en el audífono"], ["Formato", "Blíster de 6 unidades"]]
  },
  {
    cat: "battery", type: "Cuidado del audífono", brand: "Phonak", brandCode: "P", brandColor: "#4A4A4A",
    model: "Phonak Cerumex", photo: "",
    icon: batteryIcon("#4A4A4A"),
    info: [["tag", "Uso", "Filtros anticerumen", 1], ["capacity", "Formato", "Rueda de 11 ud", 1]],
    specs: [["Categoría", "Filtros anticerumen para audífono"], ["Marca", "Phonak"], ["Uso", "Protegen el auricular del audífono de la cera y la humedad; se cambian cuando el sonido se apaga o se oye peor"], ["Formato", "Rueda de 11 unidades"]]
  },
  {
    cat: "battery", type: "Cuidado del audífono", brand: "Phonak", brandCode: "P", brandColor: "#4A4A4A",
    model: "Phonak D-Dry", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/phonak-d-dry_SpTV.webp",
    icon: batteryIcon("#4A4A4A"),
    info: [["tag", "Uso", "Secado e higiene del audífono"]],
    specs: [["Categoría", "Deshumidificador para audífonos"], ["Marca", "Phonak"], ["Incluye", "Bote de secado hermético y pastilla deshumidificadora"], ["Uso", "Elimina la humedad del audífono mientras no se usa (por ejemplo, durante la noche) y alarga su vida útil"]]
  },
  {
    cat: "battery", type: "Recargable", size: "AA|AAA", voltage: "1,2 V", brand: "Duracell", brandCode: "D", brandColor: "#2B2B2B",
    model: "Duracell Recargable", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/duracell-recargable_SpTV.webp",
    icon: batteryIcon("#2B2B2B"),
    info: [["battery", "Tamaños", "AA · AAA", 1], ["capacity", "Capacidad", "2500 / 900 mAh", 1], ["tag", "Formato", "Blíster de 4 ud"]],
    specs: [["Categoría", "Pila recargable NiMH"], ["Marca", "Duracell"], ["Tamaños", "AA (HR6) · AAA (HR03)"], ["Capacidad", "AA: 2500 mAh · AAA: 900 mAh"], ["Voltaje", "1,2 V"], ["Uso", "Micrófonos, mandos de juego, flashes y aparatos de uso intensivo"], ["Formato", "Blíster de 4 unidades"]]
  },
  {
    cat: "battery", type: "Cargador", size: "AA|AAA", brand: "Duracell", brandCode: "D", brandColor: "#2B2B2B",
    model: "Cargador Duracell", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/cargador-duracell_SpTV.webp",
    icon: batteryIcon("#2B2B2B"),
    info: [["battery", "Carga", "AA · AAA", 1], ["tag", "Capacidad", "4 pilas", 1], ["capacity", "Incluye", "2 AA + 2 AAA recargables"]],
    specs: [["Categoría", "Cargador de pilas"], ["Marca", "Duracell"], ["Carga", "Pilas recargables NiMH AA y AAA"], ["Capacidad", "Hasta 4 pilas"], ["Incluye", "2 pilas AA y 2 pilas AAA recargables"]]
  },
  {
    cat: "battery", type: "Cargador", size: "AA|AAA", brand: "Varta", brandCode: "V", brandColor: "#0B3D91",
    model: "Cargador Varta 8 pilas", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/cargador-varta_SpTV.webp",
    icon: batteryIcon("#0B3D91"),
    info: [["battery", "Carga", "AA · AAA", 1], ["tag", "Capacidad", "8 pilas", 1], ["port", "Conexión", "Cable USB-C"]],
    specs: [["Categoría", "Cargador de pilas"], ["Marca", "Varta"], ["Carga", "Pilas recargables NiMH AA y AAA"], ["Capacidad", "Hasta 8 pilas"], ["Alimentación", "Cable USB-C"]]
  },
  {
    cat: "battery", type: "Comprobador", brand: "", brandCode: "", brandColor: "#5C6672",
    model: "Comprobador de pilas digital", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/comprobador-pilas-digital_SpTV.webp",
    icon: batteryIcon("#5C6672"),
    info: [["screen", "Lectura", "Pantalla digital", 1], ["battery", "Comprueba", "AA · AAA · C · D · 9 V · N · 3 V", 1]],
    specs: [["Categoría", "Comprobador de pilas"], ["Lectura", "Pantalla digital"], ["Comprueba", "AA, AAA, C, D, 9 V, N y pilas de botón de 3 V"], ["Uso", "Separa las pilas cargadas de las gastadas antes de cada evento o rodaje"]]
  },
  {
    cat: "battery", type: "Comprobador", brand: "", brandCode: "", brandColor: "#5C6672",
    model: "Comprobador de pilas", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/comprobador-pilas_SpTV.webp",
    icon: batteryIcon("#5C6672"),
    info: [["screen", "Lectura", "Indicador de aguja", 1], ["battery", "Comprueba", "AA · AAA · C · D · 9 V · N", 1]],
    specs: [["Categoría", "Comprobador de pilas"], ["Lectura", "Indicador analógico (aguja)"], ["Comprueba", "AA, AAA, C, D, 9 V y N"], ["Uso", "Separa las pilas cargadas de las gastadas antes de cada evento o rodaje"]]
  }
];

// SOUND: purchase catalogue, official photos from Ursa Straps, Rycote and Bubblebee Industries.
// colors: one photo per colour; the dots on the card swap the photo (generated by tools/build_sonido_data.py)
const SOUND = [
  { cat: "sound", type: "Ocultación de micro de solapa", brand: "Ursa Straps", brandCode: "U", brandColor: "#1F2937", model: "MiniMount", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/ursa-ursa-minimount-beige_SpTV.webp", color: "Beige|Negro|Blanco|Marrón", colors: [{"name": "Beige", "hex": "#D9B99B", "photo": "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/ursa-ursa-minimount-beige_SpTV.webp"}, {"name": "Negro", "hex": "#1A1A1A", "photo": "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/ursa-ursa-minimount-black_SpTV.webp"}, {"name": "Blanco", "hex": "#F5F5F2", "photo": "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/ursa-ursa-minimount-white_SpTV.webp"}, {"name": "Marrón", "hex": "#5C3A2A", "photo": "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/ursa-ursa-minimount-brown_SpTV.webp"}], info: [["tag", "Tipo", "Ocultación de micro de solapa", 1], ["palette", "Colores", "4 colores", 1], ["capacity", "Tallas", "DPA 4060 Core+ / 2061 · DPA 4060 · DPA 6060 · DPA 6060 (Circular MiniMount) · DPA 4071 · DPA 4660HD · SANKEN COS11 · Sennheiser MKE1 · Sennheiser MKE2 · Sennheiser ME2 · Sony D11 · RØDE Lav / Lav GO · RØDE Lavalier II · Shure TwinPlex"]], specs: [["Categoría", "Ocultación de micro de solapa"], ["Marca", "Ursa Straps"], ["Descripción", "Soporte plano y de bajo perfil para ocultar el micro de solapa bajo la ropa donde no caben soportes mayores. Hay un modelo específico para cada micrófono."], ["Material", "Plástico endurecido acabado a mano"], ["Incluye", "5 adhesivos MiniMount Stickies"], ["Compatible con", "DPA, Sanken COS11, RØDE, Sennheiser, Shure TwinPlex, Sony"], ["Nota", "Marrón solo en algunos modelos (DPA 4060/4071/6060, Sanken COS11, Sony D11)"], ["Colores", "Beige · Negro · Blanco · Marrón"]], icon: soundIcon("#1F2937") },
  { cat: "sound", type: "Ocultación de micro de solapa", brand: "Ursa Straps", brandCode: "U", brandColor: "#1F2937", model: "Soft Circles", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/ursa-ursa-soft-circles-beige_SpTV.webp", color: "Beige|Negro|Blanco|Marrón", colors: [{"name": "Beige", "hex": "#D9B99B", "photo": "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/ursa-ursa-soft-circles-beige_SpTV.webp"}, {"name": "Negro", "hex": "#1A1A1A", "photo": "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/ursa-ursa-soft-circles-black_SpTV.webp"}, {"name": "Blanco", "hex": "#F5F5F2", "photo": "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/ursa-ursa-soft-circles-white_SpTV.webp"}, {"name": "Marrón", "hex": "#5C3A2A", "photo": "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/ursa-ursa-soft-circles-brown_SpTV.webp"}], info: [["tag", "Tipo", "Ocultación de micro de solapa", 1], ["palette", "Colores", "4 colores", 1], ["capacity", "Tallas", "15 Pack + 30 Stickies · 100 Pack"]], specs: [["Categoría", "Ocultación de micro de solapa"], ["Marca", "Ursa Straps"], ["Descripción", "Discos de tejido suave y elástico reutilizables que protegen del viento y camuflan el micro de solapa. Se fijan con los adhesivos Sticky Circles."], ["Diámetro", "25 mm"], ["Contenido", "15 Soft Circles + 30 Sticky Circles (o pack de 100)"], ["Compatible con", "URSA Sticky Circles, Premium Sticky Circles y Sticky Zeros"], ["Fabricación", "Reino Unido"], ["Colores", "Beige · Negro · Blanco · Marrón"]], icon: soundIcon("#1F2937") },
  { cat: "sound", type: "Antiviento", brand: "Ursa Straps", brandCode: "U", brandColor: "#1F2937", model: "Fur Circles", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/ursa-ursa-fur-circles-beige_SpTV.webp", color: "Beige|Negro|Blanco", colors: [{"name": "Beige", "hex": "#D9B99B", "photo": "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/ursa-ursa-fur-circles-beige_SpTV.webp"}, {"name": "Negro", "hex": "#1A1A1A", "photo": "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/ursa-ursa-fur-circles-black_SpTV.webp"}, {"name": "Blanco", "hex": "#F5F5F2", "photo": "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/ursa-ursa-fur-circles-white_SpTV.webp"}], info: [["tag", "Tipo", "Antiviento", 1], ["palette", "Colores", "3 colores", 1], ["capacity", "Tallas", "9 Pack + 30 Stickies · 100 Pack"]], specs: [["Categoría", "Antiviento"], ["Marca", "Ursa Straps"], ["Descripción", "Círculos de pelo que protegen el micro de solapa del viento y reducen el roce de la ropa. Se fijan con adhesivos Sticky Circles."], ["Pelo", "14 mm de longitud"], ["Contenido", "9 Fur Circles + 30 adhesivos Premium (o pack de 100)"], ["Multipack", "3 negros, 3 blancos y 3 beige + 30 adhesivos"], ["Fabricación", "Reino Unido"], ["Colores", "Beige · Negro · Blanco"]], icon: soundIcon("#1F2937") },
  { cat: "sound", type: "Antiviento", brand: "Ursa Straps", brandCode: "U", brandColor: "#1F2937", model: "Soft Sleeves", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/ursa-ursa-soft-sleeves-beige_SpTV.webp", color: "Beige|Negro|Blanco|Marrón", colors: [{"name": "Beige", "hex": "#D9B99B", "photo": "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/ursa-ursa-soft-sleeves-beige_SpTV.webp"}, {"name": "Negro", "hex": "#1A1A1A", "photo": "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/ursa-ursa-soft-sleeves-black_SpTV.webp"}, {"name": "Blanco", "hex": "#F5F5F2", "photo": "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/ursa-ursa-soft-sleeves-white_SpTV.webp"}, {"name": "Marrón", "hex": "#5C3A2A", "photo": "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/ursa-ursa-soft-sleeves-brown_SpTV.webp"}], info: [["tag", "Tipo", "Antiviento", 1], ["palette", "Colores", "4 colores", 1]], specs: [["Categoría", "Antiviento"], ["Marca", "Ursa Straps"], ["Descripción", "Fundas de bajo perfil que cubren todo el micro de solapa y dan una protección ligera contra el viento. Útiles para micros ocultos en corbatas, bajo botones o entre capas de ropa."], ["Medidas", "12 × 6 mm"], ["Contenido", "3 fundas por pack"], ["Compatible con", "Micros de 4-5 mm: DPA 406X, RØDE Lav GO, Sennheiser MKE2"], ["No compatible", "Sanken COS11 y DPA 6060 (demasiado finos)"], ["Fabricación", "Reino Unido"], ["Colores", "Beige · Negro · Blanco · Marrón"]], icon: soundIcon("#1F2937") },
  { cat: "sound", type: "Antiviento", brand: "Ursa Straps", brandCode: "U", brandColor: "#1F2937", model: "Fur Tangles", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/ursa-ursa-fur-tangles-beige_SpTV.webp", color: "Beige|Negro|Blanco", colors: [{"name": "Beige", "hex": "#D9B99B", "photo": "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/ursa-ursa-fur-tangles-beige_SpTV.webp"}, {"name": "Negro", "hex": "#1A1A1A", "photo": "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/ursa-ursa-fur-tangles-black_SpTV.webp"}, {"name": "Blanco", "hex": "#F5F5F2", "photo": "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/ursa-ursa-fur-tangles-white_SpTV.webp"}], info: [["tag", "Tipo", "Antiviento", 1], ["palette", "Colores", "3 colores", 1]], specs: [["Categoría", "Antiviento"], ["Marca", "Ursa Straps"], ["Descripción", "Rectángulo de pelo para recortar a medida: reduce el ruido de roce de tejidos cerca del micro o sirve de antiviento en montajes especiales, como en coches."], ["Medidas", "60 × 15 cm"], ["Pelo", "Muy suave, 14 mm de longitud"], ["Contenido", "1 rectángulo"], ["Uso", "Se recorta con tijeras; combinable con tiras adhesivas"], ["Colores", "Beige · Negro · Blanco"]], icon: soundIcon("#1F2937") },
  { cat: "sound", type: "Espuma / protección", brand: "Ursa Straps", brandCode: "U", brandColor: "#1F2937", model: "Foamie Pro", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/ursa-ursa-foamie-pro-caramel_SpTV.webp", color: "Caramelo|Negro|Blanco", colors: [{"name": "Caramelo", "hex": "#A9744F", "photo": "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/ursa-ursa-foamie-pro-caramel_SpTV.webp"}, {"name": "Negro", "hex": "#1A1A1A", "photo": "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/ursa-ursa-foamie-pro-black_SpTV.webp"}, {"name": "Blanco", "hex": "#F5F5F2", "photo": "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/ursa-ursa-foamie-pro-white_SpTV.webp"}], info: [["tag", "Tipo", "Espuma / protección", 1], ["palette", "Colores", "3 colores", 1]], specs: [["Categoría", "Espuma / protección"], ["Marca", "Ursa Straps"], ["Descripción", "Soportes de espuma premium, suave y reutilizable para montar el micro de solapa en silencio bajo la ropa. Se pueden recortar con tijeras."], ["Contenido", "12 unidades + 4 imperdibles"], ["Compatible con", "DPA 406X Core+/4660HD, Sanken COS11, RØDE Lav GO/Lav II, Sennheiser MKE2, Shure TwinPlex"], ["Tamaño", "Regular (la versión Mini se vende aparte)"], ["Material", "Espuma premium reutilizable"], ["Colores", "Caramelo · Negro · Blanco"]], icon: soundIcon("#1F2937") },
  { cat: "sound", type: "Adhesivos", brand: "Ursa Straps", brandCode: "U", brandColor: "#1F2937", model: "URSA Tape - Soft Strips", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/ursa-ursa-tape-soft-strips-beige_SpTV.webp", color: "Beige|Negro|Blanco|Caramelo|Marrón", colors: [{"name": "Beige", "hex": "#D9B99B", "photo": "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/ursa-ursa-tape-soft-strips-beige_SpTV.webp"}, {"name": "Negro", "hex": "#1A1A1A", "photo": "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/ursa-ursa-tape-soft-strips-black_SpTV.webp"}, {"name": "Blanco", "hex": "#F5F5F2", "photo": "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/ursa-ursa-tape-soft-strips-white_SpTV.webp"}, {"name": "Caramelo", "hex": "#A9744F", "photo": "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/ursa-ursa-tape-soft-strips-caramel_SpTV.webp"}, {"name": "Marrón", "hex": "#5C3A2A", "photo": "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/ursa-ursa-tape-soft-strips-brown_SpTV.webp"}], info: [["tag", "Tipo", "Adhesivos", 1], ["palette", "Colores", "5 colores", 1], ["capacity", "Tallas", "30 Small Strips (8 x 2.5cm) · 12 Small Strips Multi-Pack"]], specs: [["Categoría", "Adhesivos"], ["Marca", "Ursa Straps"], ["Descripción", "Tiras adhesivas de moleskin suave y elástico para fijar y camuflar micros de solapa reduciendo el roce de la ropa. Aptas para piel sensible y vestuario delicado."], ["Material", "Moleskin elástico con adhesivo hipoalergénico"], ["Medidas", "8 × 2,5 cm por tira"], ["Contenido", "30 tiras (o multipack de 12)"], ["Colores", "Beige · Negro · Blanco · Caramelo · Marrón"]], icon: soundIcon("#1F2937") },
  { cat: "sound", type: "Adhesivos", brand: "Ursa Straps", brandCode: "U", brandColor: "#1F2937", model: "Sticky Circles", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/ursa-ursa-sticky-circles-clear_SpTV.webp", color: "Transparente", colors: [], info: [["tag", "Tipo", "Adhesivos", 1], ["palette", "Color", "Transparente", 1]], specs: [["Categoría", "Adhesivos"], ["Marca", "Ursa Straps"], ["Descripción", "Círculos adhesivos transparentes e hipoalergénicos para fijar el micro de solapa bajo la ropa o directamente en la piel, sin dejar residuos."], ["Diámetro", "24 mm"], ["Grosor", "0,4 mm"], ["Contenido", "90 círculos"], ["Compatible con", "URSA Soft, Plush y Fur Circles"], ["Colores", "Transparente"]], icon: soundIcon("#1F2937") },
  { cat: "sound", type: "Otros", brand: "Ursa Straps", brandCode: "U", brandColor: "#1F2937", model: "Soft Soles & Heavy Duties - Multipack", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/ursa-ursa-soft-soles-black_SpTV.webp", color: "Negro", colors: [], info: [["tag", "Tipo", "Otros", 1], ["palette", "Color", "Negro", 1]], specs: [["Categoría", "Otros"], ["Marca", "Ursa Straps"], ["Descripción", "Almohadillas adhesivas para suelas de calzado que silencian las pisadas en rodaje. Incluye piezas para la parte delantera y para el tacón."], ["Contenido", "20 formas precortadas + 2 láminas Soft Soles + 2 láminas Heavy Duties"], ["Soft Soles", "Espuma acolchada de 3 mm"], ["Heavy Duties", "Sándwich de silicona y espuma para el tacón"], ["Adhesivo", "Se retira limpio, sin residuos"], ["Colores", "Negro"]], icon: soundIcon("#1F2937") },
  { cat: "sound", type: "Ocultación de micro de solapa", brand: "Rycote", brandCode: "R", brandColor: "#C8102E", model: "Undercovers (Original)", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/rycote-undercovers-negro_SpTV.webp", color: "Negro|Blanco|Gris|Mix de colores", colors: [{"name": "Negro", "hex": "#1a1a1a", "photo": "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/rycote-undercovers-negro_SpTV.webp"}, {"name": "Blanco", "hex": "#f2f2f2", "photo": "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/rycote-undercovers-blanco_SpTV.webp"}, {"name": "Mix de colores", "hex": "#8c8c8c", "photo": "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/rycote-undercovers-mix_SpTV.webp"}], info: [["tag", "Tipo", "Ocultación de micro de solapa", 1], ["palette", "Colores", "4 colores", 1], ["capacity", "Tallas", "30 Undercovers + 30 Stickies · 100 Undercovers + 100 Stickies · 25 packs × 30 (mix)"]], specs: [["Categoría", "Ocultación de micro de solapa"], ["Marca", "Rycote"], ["Descripción", "Discos de tejido suave para ocultar micrófonos de solapa bajo la ropa. Se fijan con Stickies y reducen el roce de la ropa y el viento ligero."], ["Contenido", "Discos de tejido + Stickies"], ["Packs", "30, 100 o 25 × 30 unidades"], ["Uso", "Micro de solapa bajo la ropa"], ["Colores", "Negro, gris, blanco o mix"], ["Colores", "Negro · Blanco · Gris · Mix de colores"]], icon: soundIcon("#C8102E") },
  { cat: "sound", type: "Antiviento", brand: "Rycote", brandCode: "R", brandColor: "#C8102E", model: "Overcovers (Original)", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/rycote-overcovers-negro_SpTV.webp", color: "Negro|Gris|Blanco|Mix de colores", colors: [{"name": "Negro", "hex": "#1a1a1a", "photo": "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/rycote-overcovers-negro_SpTV.webp"}, {"name": "Mix de colores", "hex": "#8c8c8c", "photo": "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/rycote-overcovers-mix_SpTV.webp"}], info: [["tag", "Tipo", "Antiviento", 1], ["palette", "Colores", "4 colores", 1], ["capacity", "Tallas", "6 discos de pelo + 30 Stickies · 25 packs × (6 discos + 30 Stickies)"]], specs: [["Categoría", "Antiviento"], ["Marca", "Rycote"], ["Descripción", "Discos de pelo sintético con la tecnología exclusiva de Rycote que se colocan sobre el micro de solapa para protegerlo del viento. Se fijan a la ropa o la piel con Stickies."], ["Contenido", "6 discos de pelo reutilizables + 30 Stickies"], ["Uso", "Protección antiviento para micro de solapa"], ["Colores", "Negro, gris, blanco o mix"], ["Colores", "Negro · Gris · Blanco · Mix de colores"]], icon: soundIcon("#C8102E") },
  { cat: "sound", type: "Antiviento", brand: "Rycote", brandCode: "R", brandColor: "#C8102E", model: "Overcovers Advanced", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/rycote-overcovers-advanced-negro_SpTV.webp", color: "Negro|Gris|Beige|Blanco", colors: [{"name": "Negro", "hex": "#1a1a1a", "photo": "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/rycote-overcovers-advanced-negro_SpTV.webp"}, {"name": "Gris", "hex": "#8a8a8a", "photo": "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/rycote-overcovers-advanced-gris_SpTV.webp"}, {"name": "Beige", "hex": "#d9c3a0", "photo": "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/rycote-overcovers-advanced-beige_SpTV.webp"}, {"name": "Blanco", "hex": "#f0f0f0", "photo": "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/rycote-overcovers-advanced-blanco_SpTV.webp"}], info: [["tag", "Tipo", "Antiviento", 1], ["palette", "Colores", "4 colores", 1], ["capacity", "Tallas", "5 discos + 25 Stickies Adv Round · Bolsa de 100 discos (solo negro)"]], specs: [["Categoría", "Antiviento"], ["Marca", "Rycote"], ["Descripción", "Versión de mayor tamaño (26 mm) de los Overcovers, ideal para DPA Concealers. Se suministran con Stickies Advanced redondos de 23 mm."], ["Diámetro", "26 mm"], ["Contenido", "5 discos de pelo (un color) + 25 Stickies Adv Round 23 mm"], ["Compatible", "DPA Concealers y otros micros de solapa"], ["Colores", "Negro, gris, beige o blanco"], ["Colores", "Negro · Gris · Beige · Blanco"]], icon: soundIcon("#C8102E") },
  { cat: "sound", type: "Adhesivos", brand: "Rycote", brandCode: "R", brandColor: "#C8102E", model: "Stickies (Original)", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/rycote-stickies_SpTV.webp", color: "", colors: [], info: [["tag", "Tipo", "Adhesivos", 1], ["palette", "Colores", "Único", 1], ["capacity", "Tallas", "30 uds. · 100 uds. · Rollo de 500 (23 mm) · 25 packs × 30"]], specs: [["Categoría", "Adhesivos"], ["Marca", "Rycote"], ["Descripción", "Almohadillas adhesivas de doble cara e hipoalergénicas para fijar micrófonos de solapa a la piel o la ropa. El tejido entre ambas caras evita los crujidos del micro por el movimiento."], ["Tipo", "Adhesivo de doble cara hipoalergénico"], ["Cantidades", "30, 100, rollo de 500 y 25 × 30"], ["Uso", "Un solo uso, sobre superficie seca"]], icon: soundIcon("#C8102E") },
  { cat: "sound", type: "Adhesivos", brand: "Rycote", brandCode: "R", brandColor: "#C8102E", model: "Stickies Advanced", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/rycote-stickies-advanced_SpTV.webp", color: "", colors: [], info: [["tag", "Tipo", "Adhesivos", 1], ["palette", "Colores", "Único", 1], ["capacity", "Tallas", "Round 23 mm · Squared 20 mm · O's 23 mm"]], specs: [["Categoría", "Adhesivos"], ["Marca", "Rycote"], ["Descripción", "Adhesivos de doble cara más adherentes, con pestañas de fácil despegue, en forma redonda, cuadrada o de anillo. La redonda es ideal para DPA Concealers y la cuadrada para el soporte Sanken RM-11."], ["Formas", "Redonda 23 mm, cuadrada 20 mm, anillo (O's) 23 mm"], ["Presentación", "Pack, bolsa de 100 o caja de 10 × 25"], ["Compatible", "DPA Concealers, Sanken RM-11 (COS-11)"], ["Tipo", "Adhesivo hipoalergénico de doble cara"]], icon: soundIcon("#C8102E") },
  { cat: "sound", type: "Antiviento", brand: "Rycote", brandCode: "R", brandColor: "#C8102E", model: "Lavalier Windjammer", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/rycote-lavalier-windjammer-negro_SpTV.webp", color: "Negro|Gris|Blanco", colors: [{"name": "Negro", "hex": "#1a1a1a", "photo": "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/rycote-lavalier-windjammer-negro_SpTV.webp"}, {"name": "Gris", "hex": "#8f8f8f", "photo": "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/rycote-lavalier-windjammer-gris_SpTV.webp"}, {"name": "Blanco", "hex": "#f0f0f0", "photo": "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/rycote-lavalier-windjammer-blanco_SpTV.webp"}], info: [["tag", "Tipo", "Antiviento", 1], ["palette", "Colores", "3 colores", 1], ["capacity", "Tallas", "1 ud. · Par"]], specs: [["Categoría", "Antiviento"], ["Marca", "Rycote"], ["Descripción", "Antiviento de pelo sintético para micrófonos de solapa, la opción de Rycote con mayor aislamiento del viento para exteriores. Se sujeta al micro mediante un conector de espuma con anillo de goma."], ["Atenuación de viento", "Hasta 12 dB"], ["Diámetro de micro", "4,5 mm"], ["Sujeción", "Conector de espuma con anillo de goma"], ["Colores", "Negro, gris, blanco (otros bajo pedido)"], ["Colores", "Negro · Gris · Blanco"]], icon: soundIcon("#C8102E") },
  { cat: "sound", type: "Antiviento", brand: "Rycote", brandCode: "R", brandColor: "#C8102E", model: "Micro Windjammer", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/rycote-micro-windjammer_SpTV.webp", color: "", colors: [], info: [["tag", "Tipo", "Antiviento", 1], ["palette", "Colores", "Único", 1], ["capacity", "Talla", "30 usos"]], specs: [["Categoría", "Antiviento"], ["Marca", "Rycote"], ["Descripción", "Pequeños antiviento de pelo para los micrófonos integrados de cámaras compactas y dispositivos móviles. Reducen el ruido del viento al grabar vídeo en exteriores."], ["Contenido", "30 unidades"], ["Uso", "Micrófonos integrados de cámaras compactas y dispositivos móviles"]], icon: soundIcon("#C8102E") },
  { cat: "sound", type: "Espuma / protección", brand: "Rycote", brandCode: "R", brandColor: "#C8102E", model: "Lavalier Foam", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/rycote-lavalier-foam_SpTV.webp", color: "Negro|Beige|Marrón", colors: [], info: [["tag", "Tipo", "Espuma / protección", 1], ["palette", "Colores", "3 colores", 1], ["capacity", "Tallas", "Lavalier Foam (4,5–6,0 mm) · Miniature Lavalier Foam (2,8–4,5 mm)"]], specs: [["Categoría", "Espuma / protección"], ["Marca", "Rycote"], ["Descripción", "Antiviento de espuma acústica de celda abierta para micrófonos de solapa, discreto y de colocación a presión. Ofrece hasta 20 dB de atenuación de viento y popeo sin pérdida de agudos."], ["Atenuación", "Hasta 20 dB"], ["Lavalier Foam", "Micros de 4,5 a 6,0 mm, hasta 15 mm de largo"], ["Miniature", "Micros de 2,8 a 4,5 mm (solo negro)"], ["Material", "Espuma resistente a humedad y rayos UV"], ["Colores", "Negro · Beige · Marrón"]], icon: soundIcon("#C8102E") },
  { cat: "sound", type: "Espuma / protección", brand: "Rycote", brandCode: "R", brandColor: "#C8102E", model: "Neoprene-coated Mini Lavalier Foam", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/rycote-neoprene-mini-lavalier-foam-negro_SpTV.webp", color: "Negro", colors: [], info: [["tag", "Tipo", "Espuma / protección", 1], ["palette", "Color", "Negro", 1]], specs: [["Categoría", "Espuma / protección"], ["Marca", "Rycote"], ["Descripción", "Espuma para micrófonos de solapa pequeños con recubrimiento de neopreno que repele el agua en lluvia ligera."], ["Diámetro de micro", "2,8 a 4,5 mm"], ["Longitud de micro", "Hasta 15 mm"], ["Recubrimiento", "Neopreno, repele el agua"], ["Colores", "Negro"]], icon: soundIcon("#C8102E") },
  { cat: "sound", type: "Antiviento", brand: "Rycote", brandCode: "R", brandColor: "#C8102E", model: "Classic-Softie", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/rycote-classic-softie-gris_SpTV.webp", color: "Gris", colors: [], info: [["tag", "Tipo", "Antiviento", 1], ["palette", "Color", "Gris", 1], ["capacity", "Tallas", "5 cm · 7 cm · 10 cm · 12 cm · 15 cm · 18 cm · 24 cm · 29 cm · 32 cm"]], specs: [["Categoría", "Antiviento"], ["Marca", "Rycote"], ["Descripción", "Antiviento de espuma de celda abierta con funda de pelo integrada para micrófonos de cañón, estándar en televisión y ENG. Reduce hasta 25 dB el ruido de viento sin afectar a los agudos."], ["Atenuación de viento", "Hasta 25 dB"], ["Diámetro de micro", "19–22 mm o 24–25 mm"], ["Pelo", "Gris, 25 mm"], ["Kit", "Con suspensión Lyre y empuñadura (15 y 18 cm)"], ["Colores", "Gris"]], icon: soundIcon("#C8102E") },
  { cat: "sound", type: "Antiviento", brand: "Rycote", brandCode: "R", brandColor: "#C8102E", model: "Super-Softie", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/rycote-super-softie-gris_SpTV.webp", color: "Gris", colors: [], info: [["tag", "Tipo", "Antiviento", 1], ["palette", "Color", "Gris", 1], ["capacity", "Tallas", "5 cm · 12 cm · 15 cm · 18 cm"]], specs: [["Categoría", "Antiviento"], ["Marca", "Rycote"], ["Descripción", "Antiviento de forma aerodinámica fabricado en material 3D-Tex, sin estructura rígida interna y con gran transparencia acústica. Si se moja se escurre y se seca rápidamente."], ["Material", "3D-Tex"], ["Atenuación de viento", "Hasta 25 dB"], ["Diámetro de micro", "19–22 mm o 24–25 mm"], ["Colores", "Gris"]], icon: soundIcon("#C8102E") },
  { cat: "sound", type: "Soporte / suspensión", brand: "Rycote", brandCode: "R", brandColor: "#C8102E", model: "InVision Video Hot Shoe Mount", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/rycote-invision-video-hot-shoe-mount-negro_SpTV.webp", color: "Negro", colors: [], info: [["tag", "Tipo", "Soporte / suspensión", 1], ["palette", "Color", "Negro", 1]], specs: [["Categoría", "Soporte / suspensión"], ["Marca", "Rycote"], ["Descripción", "Suspensión Duo-Lyre para montar el micrófono en la zapata de la cámara, aislándolo de vibraciones y ruido de motores. Gira 360° y eleva el micro para mantenerlo fuera de plano."], ["Suspensión", "Duo-Lyre"], ["Montaje", "Zapata de cámara"], ["Rotación", "360°"], ["Colores", "Negro"]], icon: soundIcon("#C8102E") },
  { cat: "sound", type: "Soporte / suspensión", brand: "Rycote", brandCode: "R", brandColor: "#C8102E", model: "InVision Softie Lyre Mount", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/rycote-invision-softie-lyre-mount-negro_SpTV.webp", color: "Negro", colors: [], info: [["tag", "Tipo", "Soporte / suspensión", 1], ["palette", "Color", "Negro", 1], ["capacity", "Tallas", "CCA · MHR"]], specs: [["Categoría", "Soporte / suspensión"], ["Marca", "Rycote"], ["Descripción", "Suspensión Lyre para micrófono con Softie que se monta en el portamicro de cámaras profesionales. Eleva y retrasa el micro para mantenerlo fuera de plano."], ["Diámetro de micro", "19–25 mm (clip Duo-Lyre)"], ["Versión CCA", "Portamicros de cámara de 25–27 mm (Sony, Canon)"], ["Rosca", "Latón 3/8\" para pértiga"], ["Colores", "Negro"]], icon: soundIcon("#C8102E") },
  { cat: "sound", type: "Otros", brand: "Rycote", brandCode: "R", brandColor: "#C8102E", model: "Mic Flag", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/rycote-mic-flag-negro_SpTV.webp", color: "Negro|Blanco", colors: [{"name": "Negro", "hex": "#1a1a1a", "photo": "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/rycote-mic-flag-negro_SpTV.webp"}, {"name": "Blanco", "hex": "#f2f2f2", "photo": "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/rycote-mic-flag-blanco_SpTV.webp"}], info: [["tag", "Tipo", "Otros", 1], ["palette", "Colores", "2 colores", 1], ["capacity", "Tallas", "Cuadrada · Triangular · Pack de 20"]], specs: [["Categoría", "Otros"], ["Marca", "Rycote"], ["Descripción", "Cubo identificativo de plástico moldeado irrompible para micrófonos de mano, con amplia zona imprimible para logotipos. Sus aletas de goma internas lo sujetan sin espumas perecederas."], ["Diámetro de micro", "19–32 mm (hasta 38 mm quitando aletas)"], ["Área imprimible cuadrada", "57 × 48 mm por cara"], ["Área imprimible triangular", "89,5 × 48 mm por cara"], ["Material", "Plástico moldeado irrompible"], ["Colores", "Negro · Blanco"]], icon: soundIcon("#C8102E") },
  { cat: "sound", type: "Antiviento", brand: "Rycote", brandCode: "R", brandColor: "#C8102E", model: "Cyclone Windshield Kit", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/rycote-cyclone-gris_SpTV.webp", color: "Gris", colors: [], info: [["tag", "Tipo", "Antiviento", 1], ["palette", "Color", "Gris", 1], ["capacity", "Tallas", "Small · Medium · Large"]], specs: [["Categoría", "Antiviento"], ["Marca", "Rycote"], ["Descripción", "Sistema antiviento premium de cesta para micrófonos de cañón, ligero y resistente, en material 3D-Tex gris sin necesidad de pelo. Incluye suspensión Floating-Basket y cierre Z-Locking para acceder al micro al instante."], ["Material", "3D-Tex gris"], ["Medium", "Micros de 174 a 255 mm (p. ej. MKH 416, CMIT 5U)"], ["Rosca", "Latón 3/8\" UNC hembra"], ["Temperatura", "-20 °C a 38 °C"], ["Colores", "Gris"]], icon: soundIcon("#C8102E") },
  { cat: "sound", type: "Ocultación de micro de solapa", brand: "Bubblebee Industries", brandCode: "B", brandColor: "#C99700", model: "The Lav Concealer", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/bubblebee-lav-concealer-black_SpTV.webp", color: "Negro|Blanco", colors: [{"name": "Negro", "hex": "#1a1a1a", "photo": "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/bubblebee-lav-concealer-black_SpTV.webp"}, {"name": "Blanco", "hex": "#f2f2f2", "photo": "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/bubblebee-lav-concealer-white_SpTV.webp"}], info: [["tag", "Tipo", "Ocultación de micro de solapa", 1], ["palette", "Colores", "2 colores", 1], ["capacity", "Tallas", "Unidad · Pack de 6"]], specs: [["Categoría", "Ocultación de micro de solapa"], ["Marca", "Bubblebee Industries"], ["Descripción", "Soporte de goma blanda que permite fijar el micro de solapa bajo la ropa (con clip, cinta o cosido) y actúa como suspensión frente a roces y vibraciones. Incluye protectores de tela de alambre que mantienen la prenda alejada de la cápsula."], ["Material", "Goma blanda biodegradable"], ["Versiones", "Sennheiser, DPA, RØDE, Sanken COS-11, Countryman, Sony, Deity y Shure TL45/47"], ["Incluye", "Clip de ropa, bloqueo de cable, 2 protectores de tela y 6 piezas de Tiny Tape"], ["Formato", "Unidad o pack de 6"], ["Colores", "Negro · Blanco"]], icon: soundIcon("#C99700") },
  { cat: "sound", type: "Ocultación de micro de solapa", brand: "Bubblebee Industries", brandCode: "B", brandColor: "#C99700", model: "The Invisible Lav Covers", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/bubblebee-invisible-lav-covers-black_SpTV.webp", color: "Negro|Beige|Blanco", colors: [{"name": "Negro", "hex": "#1a1a1a", "photo": "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/bubblebee-invisible-lav-covers-black_SpTV.webp"}, {"name": "Beige", "hex": "#d9c2a7", "photo": "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/bubblebee-invisible-lav-covers-beige_SpTV.webp"}, {"name": "Blanco", "hex": "#f2f2f2", "photo": "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/bubblebee-invisible-lav-covers-white_SpTV.webp"}], info: [["tag", "Tipo", "Ocultación de micro de solapa", 1], ["palette", "Colores", "3 colores", 1], ["capacity", "Tallas", "Pack de 30 · Big Bag de 120"]], specs: [["Categoría", "Ocultación de micro de solapa"], ["Marca", "Bubblebee Industries"], ["Descripción", "Fundas para ocultar el micro de solapa bajo la ropa sin marcas visibles, en tonos variados para igualar piel o prenda. Disponibles en versiones Original, Moleskin y Fur Outdoor."], ["Tipos", "Original, Moleskin, Fur Outdoor"], ["Contenido", "30 fundas (pack) o 120 (Big Bag)"], ["Compatibilidad", "Cualquier micro de solapa"], ["Colores", "Negro · Beige · Blanco"]], icon: soundIcon("#C99700") },
  { cat: "sound", type: "Antiviento", brand: "Bubblebee Industries", brandCode: "B", brandColor: "#C99700", model: "The Windbubble", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/bubblebee-windbubble-black_SpTV.webp", color: "Negro|Gris|Marrón|Beige|Blanco roto|Blanco", colors: [{"name": "Negro", "hex": "#1a1a1a", "photo": "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/bubblebee-windbubble-black_SpTV.webp"}, {"name": "Gris", "hex": "#7a7a7a", "photo": "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/bubblebee-windbubble-grey_SpTV.webp"}, {"name": "Marrón", "hex": "#6b4a2b", "photo": "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/bubblebee-windbubble-brown_SpTV.webp"}, {"name": "Beige", "hex": "#d9c2a7", "photo": "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/bubblebee-windbubble-beige_SpTV.webp"}, {"name": "Blanco roto", "hex": "#ece4d6", "photo": "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/bubblebee-windbubble-off-white_SpTV.webp"}, {"name": "Blanco", "hex": "#f2f2f2", "photo": "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/bubblebee-windbubble-white_SpTV.webp"}], info: [["tag", "Tipo", "Antiviento", 1], ["palette", "Colores", "6 colores", 1], ["capacity", "Tallas", "Talla 1 · Talla 2 · Talla 3 · Talla 4"]], specs: [["Categoría", "Antiviento"], ["Marca", "Bubblebee Industries"], ["Descripción", "Antiviento de pelo sintético para micros de solapa, con interior hueco que crea una cámara de aire en calma alrededor de la cápsula. Seis colores naturales para combinar con cualquier vestuario."], ["Tallas", "1 (⌀ 3–4 mm), 2 (⌀ 5–8 mm), 3 (⌀ 5–9 mm), 4 (⌀ 8–13 mm)"], ["Compatibilidad", "Más de 50 modelos de solapa, direccionales y omnidireccionales"], ["Incluye", "Lata de almacenaje"], ["Formato", "Unidad, pack de 2, 4 o 10"], ["Colores", "Negro · Gris · Marrón · Beige · Blanco roto · Blanco"]], icon: soundIcon("#C99700") },
  { cat: "sound", type: "Antiviento", brand: "Bubblebee Industries", brandCode: "B", brandColor: "#C99700", model: "The Windbubble Pro", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/bubblebee-windbubble-pro-black_SpTV.webp", color: "Negro|Gris|Beige|Blanco", colors: [{"name": "Negro", "hex": "#1a1a1a", "photo": "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/bubblebee-windbubble-pro-black_SpTV.webp"}, {"name": "Gris", "hex": "#7a7a7a", "photo": "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/bubblebee-windbubble-pro-grey_SpTV.webp"}, {"name": "Beige", "hex": "#d9c2a7", "photo": "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/bubblebee-windbubble-pro-beige_SpTV.webp"}, {"name": "Blanco", "hex": "#f2f2f2", "photo": "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/bubblebee-windbubble-pro-white_SpTV.webp"}], info: [["tag", "Tipo", "Antiviento", 1], ["palette", "Colores", "4 colores", 1], ["capacity", "Tallas", "XS · S · M · L"]], specs: [["Categoría", "Antiviento"], ["Marca", "Bubblebee Industries"], ["Descripción", "Versión avanzada del Windbubble con montura de goma integrada que sujeta la cápsula y mejora el rechazo al viento fuerte. Diseñado exclusivamente para micros de solapa omnidireccionales."], ["Tallas", "XS (⌀ 3–5 mm), S (⌀ 5–6,5 mm), M (⌀ 6–8 mm), L (⌀ 11,5–14 mm)"], ["Pelo", "Standard o Extreme"], ["Compatibilidad", "Solo micros omnidireccionales"], ["Formato", "Unidad o pack de 2 (talla L solo en pack de 2)"], ["Colores", "Negro · Gris · Beige · Blanco"]], icon: soundIcon("#C99700") },
  { cat: "sound", type: "Antiviento", brand: "Bubblebee Industries", brandCode: "B", brandColor: "#C99700", model: "The Big Windbubble", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/bubblebee-big-windbubble-black_SpTV.webp", color: "Negro", colors: [], info: [["tag", "Tipo", "Antiviento", 1], ["palette", "Color", "Negro", 1]], specs: [["Categoría", "Antiviento"], ["Marca", "Bubblebee Industries"], ["Descripción", "Antiviento de pelo sintético negro para micrófonos de mano, con forro de malla y montura elástica en la base. Disponible en pelo largo o corto."], ["Compatibilidad", "Micros de mano de ⌀ aprox. 35–55 mm"], ["Pelo", "Largo o corto"], ["Montura", "Elástica"], ["Colores", "Negro"]], icon: soundIcon("#C99700") },
  { cat: "sound", type: "Antiviento", brand: "Bubblebee Industries", brandCode: "B", brandColor: "#C99700", model: "The Windkiller", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/bubblebee-windkiller-black_SpTV.webp", color: "Negro", colors: [], info: [["tag", "Tipo", "Antiviento", 1], ["palette", "Color", "Negro", 1], ["capacity", "Tallas", "XS · XS (Big Mount) · XS+ · S · M · L · XL · XL (Big Mount)"]], specs: [["Categoría", "Antiviento"], ["Marca", "Bubblebee Industries"], ["Descripción", "Antiviento de pelo sintético multicapa para micrófonos de cañón, para pértiga y grabación de campo. Disponible en pelo largo, para viento fuerte, o pelo corto, para viento moderado."], ["Pelo", "Largo o corto"], ["Tallas", "XS a XL, con versiones Big Mount"], ["Compatibilidad", "Cañones de Sennheiser, RØDE, Schoeps, Audio-Technica, DPA, Sanken, Sony…"], ["Colores", "Negro"]], icon: soundIcon("#C99700") },
  { cat: "sound", type: "Antiviento", brand: "Bubblebee Industries", brandCode: "B", brandColor: "#C99700", model: "The Cub", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/bubblebee-cub-black_SpTV.webp", color: "Negro|Gris", colors: [{"name": "Negro", "hex": "#1a1a1a", "photo": "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/bubblebee-cub-black_SpTV.webp"}, {"name": "Gris", "hex": "#7a7a7a", "photo": "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/bubblebee-cub-grey_SpTV.webp"}], info: [["tag", "Tipo", "Antiviento", 1], ["palette", "Colores", "2 colores", 1]], specs: [["Categoría", "Antiviento"], ["Marca", "Bubblebee Industries"], ["Descripción", "Antiviento de pelo sintético multicapa diseñado específicamente para el micrófono Sanken CUB-01."], ["Compatibilidad", "Sanken CUB-01"], ["Colores", "Negro o gris"], ["Colores", "Negro · Gris"]], icon: soundIcon("#C99700") },
  { cat: "sound", type: "Antiviento", brand: "Bubblebee Industries", brandCode: "B", brandColor: "#C99700", model: "The Spacer Bubble", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/bubblebee-spacer-bubble-black_SpTV.webp", color: "Negro|Azul|Verde|Rojo", colors: [{"name": "Negro", "hex": "#1a1a1a", "photo": "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/bubblebee-spacer-bubble-black_SpTV.webp"}, {"name": "Azul", "hex": "#1f4fd1", "photo": "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/bubblebee-spacer-bubble-blue_SpTV.webp"}, {"name": "Verde", "hex": "#22a838", "photo": "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/bubblebee-spacer-bubble-green_SpTV.webp"}, {"name": "Rojo", "hex": "#d42a1e", "photo": "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/bubblebee-spacer-bubble-red_SpTV.webp"}], info: [["tag", "Tipo", "Antiviento", 1], ["palette", "Colores", "4 colores", 1], ["capacity", "Tallas", "XS · XS (Big Mount) · XS+ · S · M · L · XL · XL (Big Mount)"]], specs: [["Categoría", "Antiviento"], ["Marca", "Bubblebee Industries"], ["Descripción", "Sistema antiviento modular para micrófonos de cañón; los colores facilitan identificar cada micro en rodajes multicámara. Se entrega con funda de pelo largo Spacer Cover y bolsa de malla."], ["Incluye", "Spacer Bubble, Spacer Cover de pelo largo y bolsa de malla"], ["Tallas", "8 tallas para los cañones más habituales"], ["Compatibilidad", "Sennheiser MKH 416/ME 66 (L), RØDE NTG (L), Schoeps, DPA, Sanken…"], ["Colores", "Negro · Azul · Verde · Rojo"]], icon: soundIcon("#C99700") },
  { cat: "sound", type: "Antiviento", brand: "Bubblebee Industries", brandCode: "B", brandColor: "#C99700", model: "The Spacer Cover", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/bubblebee-spacer-cover-black_SpTV.webp", color: "Negro|Azul|Verde|Rojo", colors: [{"name": "Negro", "hex": "#1a1a1a", "photo": "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/bubblebee-spacer-cover-black_SpTV.webp"}, {"name": "Azul", "hex": "#1f4fd1", "photo": "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/bubblebee-spacer-cover-blue_SpTV.webp"}, {"name": "Verde", "hex": "#22a838", "photo": "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/bubblebee-spacer-cover-green_SpTV.webp"}, {"name": "Rojo", "hex": "#d42a1e", "photo": "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/bubblebee-spacer-cover-red_SpTV.webp"}], info: [["tag", "Tipo", "Antiviento", 1], ["palette", "Colores", "4 colores", 1], ["capacity", "Tallas", "XS · XS+ · S · M · L · XL"]], specs: [["Categoría", "Antiviento"], ["Marca", "Bubblebee Industries"], ["Descripción", "Funda de pelo sintético que se coloca sobre el Spacer Bubble para añadir protección cuando aumenta el viento. Colores a juego con los Spacer Bubble."], ["Compatibilidad", "Todas las tallas de Spacer Bubble"], ["Colores", "Negro, azul, verde, rojo"], ["Colores", "Negro · Azul · Verde · Rojo"]], icon: soundIcon("#C99700") },
  { cat: "sound", type: "Antiviento", brand: "Bubblebee Industries", brandCode: "B", brandColor: "#C99700", model: "The Spacer Ball", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/bubblebee-spacer-ball-black_SpTV.webp", color: "Negro", colors: [], info: [["tag", "Tipo", "Antiviento", 1], ["palette", "Color", "Negro", 1], ["capacity", "Tallas", "65 mm · 100 mm"]], specs: [["Categoría", "Antiviento"], ["Marca", "Bubblebee Industries"], ["Descripción", "Antiviento esférico para micros de condensador compactos y micros de pértiga, con exterior de malla, núcleo de espuma abierta y base de goma. Incluye funda de pelo largo para viento intenso."], ["Diámetro", "65 mm o 100 mm"], ["Montura", "S (⌀ 19–20 mm), M (⌀ 21–22 mm), L (⌀ 25–26 mm)"], ["Incluye", "Funda de pelo largo y bolsa de malla"], ["Compatibilidad", "Schoeps CCM/MK, DPA 4011/4018, Sennheiser MKH 8000/MKH 50…"], ["Colores", "Negro"]], icon: soundIcon("#C99700") },
  { cat: "sound", type: "Antiviento", brand: "Bubblebee Industries", brandCode: "B", brandColor: "#C99700", model: "The Fur Wind Jacket", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/bubblebee-fur-wind-jacket-black_SpTV.webp", color: "Negro|Verde|Azul", colors: [{"name": "Negro", "hex": "#1a1a1a", "photo": "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/bubblebee-fur-wind-jacket-black_SpTV.webp"}, {"name": "Verde", "hex": "#22a838", "photo": "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/bubblebee-fur-wind-jacket-green_SpTV.webp"}, {"name": "Azul", "hex": "#1f4fd1", "photo": "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/bubblebee-fur-wind-jacket-blue_SpTV.webp"}], info: [["tag", "Tipo", "Antiviento", 1], ["palette", "Colores", "3 colores", 1], ["capacity", "Tallas", "Rycote Modular WS Kit 1 · Rycote Modular WS Kit 2 · Rycote Modular WS Kit 3 · Rycote Modular WS Kit 4 · Rycote BBG · Cinela Pianissimo · Cinela Piano"]], specs: [["Categoría", "Antiviento"], ["Marca", "Bubblebee Industries"], ["Descripción", "Funda de pelo sintético multicapa hecha a medida para cestas antiviento Rycote y Cinela. Verde y azul solo disponibles para Cinela Pianissimo y Piano."], ["Compatibilidad", "Rycote Modular Windshield, Rycote BBG, Cinela Pianissimo y Piano"], ["Pelo", "Tres longitudes de pelo sintético"], ["Colores", "Negro (todos); verde y azul (Cinela)"], ["Plazo", "Fabricado bajo pedido"], ["Colores", "Negro · Verde · Azul"]], icon: soundIcon("#C99700") },
  { cat: "sound", type: "Espuma / protección", brand: "Bubblebee Industries", brandCode: "B", brandColor: "#C99700", model: "The Microphone Foam for Lavalier Mics", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/bubblebee-microphone-foam-lavalier-black_SpTV.webp", color: "Negro|Beige|Blanco", colors: [{"name": "Negro", "hex": "#1a1a1a", "photo": "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/bubblebee-microphone-foam-lavalier-black_SpTV.webp"}, {"name": "Beige", "hex": "#d9c2a7", "photo": "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/bubblebee-microphone-foam-lavalier-beige_SpTV.webp"}, {"name": "Blanco", "hex": "#f2f2f2", "photo": "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/bubblebee-microphone-foam-lavalier-white_SpTV.webp"}], info: [["tag", "Tipo", "Espuma / protección", 1], ["palette", "Colores", "3 colores", 1], ["capacity", "Tallas", "XS (10 uds.) · S (10 uds.) · M (10 uds.) · L (5 uds.) · XL (4 uds.)"]], specs: [["Categoría", "Espuma / protección"], ["Marca", "Bubblebee Industries"], ["Descripción", "Espumas de celda abierta para micros de solapa que reducen popeos y viento ligero. Se usan solas en interiores o bajo un Windbubble en exteriores."], ["Material", "Espuma de celda abierta"], ["Tallas", "XS a XL"], ["Contenido", "4–10 uds. según talla"], ["Compatibilidad", "Micros de solapa"], ["Colores", "Negro · Beige · Blanco"]], icon: soundIcon("#C99700") },
  { cat: "sound", type: "Espuma / protección", brand: "Bubblebee Industries", brandCode: "B", brandColor: "#C99700", model: "The Microphone Foam for Shotgun Mics", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/bubblebee-microphone-foam-shotgun-black_SpTV.webp", color: "Negro", colors: [], info: [["tag", "Tipo", "Espuma / protección", 1], ["palette", "Color", "Negro", 1], ["capacity", "Tallas", "XS · XS (Big Diameter) · XS+ · S · M · L · XL · XL (Big Diameter)"]], specs: [["Categoría", "Espuma / protección"], ["Marca", "Bubblebee Industries"], ["Descripción", "Espuma de celda abierta para micrófonos de cañón, para viento ligero o como capa interior bajo un antiviento de pelo como el Windkiller."], ["Material", "Espuma de celda abierta"], ["Tallas", "XS a XL, con versiones Big Diameter"], ["Contenido", "1 unidad"], ["Colores", "Negro"]], icon: soundIcon("#C99700") },
  { cat: "sound", type: "Otros", brand: "Bubblebee Industries", brandCode: "B", brandColor: "#C99700", model: "The Cable Saver", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/bubblebee-cable-saver-black_SpTV.webp", color: "Negro|Beige|Blanco", colors: [{"name": "Negro", "hex": "#1a1a1a", "photo": "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/bubblebee-cable-saver-black_SpTV.webp"}, {"name": "Beige", "hex": "#d9c2a7", "photo": "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/bubblebee-cable-saver-beige_SpTV.webp"}, {"name": "Blanco", "hex": "#f2f2f2", "photo": "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/bubblebee-cable-saver-white_SpTV.webp"}], info: [["tag", "Tipo", "Otros", 1], ["palette", "Colores", "3 colores", 1], ["capacity", "Talla", "Pack de 4"]], specs: [["Categoría", "Otros"], ["Marca", "Bubblebee Industries"], ["Descripción", "Protectores de goma que refuerzan la unión entre cable y conector del micro de solapa, el punto de fallo más habitual."], ["Contenido", "4 unidades"], ["Material", "Goma blanda"], ["Compatibilidad", "Micros de solapa de Sanken, Sennheiser, DPA, Countryman…"], ["Colores", "Negro · Beige · Blanco"]], icon: soundIcon("#C99700") },
  { cat: "sound", type: "Adhesivos", brand: "Bubblebee Industries", brandCode: "B", brandColor: "#C99700", model: "The Lav Concealer Tape", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/bubblebee-lav-concealer-tape_SpTV.webp", color: "", colors: [], info: [["tag", "Tipo", "Adhesivos", 1], ["palette", "Colores", "Único", 1], ["capacity", "Tallas", "Tiras · Rollo"]], specs: [["Categoría", "Adhesivos"], ["Marca", "Bubblebee Industries"], ["Descripción", "Piezas precortadas de cinta adhesiva de doble cara para fijar el Lav Concealer o el micro de solapa a la piel o la ropa. Adhesivo hipoalergénico de grado médico que se retira sin dejar residuos."], ["Contenido", "120 piezas precortadas"], ["Adhesivo", "Doble cara, hipoalergénico, grado médico"], ["Formato", "Tiras o rollo"], ["Compatibilidad", "Lav Concealer tamaño Regular"]], icon: soundIcon("#C99700") }
];

// STATIONERY: purchase catalogue, official photos from each brand's website.
// colors: one photo per colour; the dots on the card swap the photo (generated by tools/build_sonido_data.py)
const STATIONERY = [
  { cat: "stationery", type: "Bolígrafo", brand: "Pilot", brandCode: "P", brandColor: "#00468C", model: "Pilot Super Grip", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/pilot-super-grip-azul_SpTV.webp", color: "Azul", colors: [], info: [["tag", "Tipo", "Bolígrafo", 1], ["palette", "Color", "Azul", 1]], specs: [["Categoría", "Bolígrafo"], ["Marca", "Pilot"], ["Descripción", "Bolígrafo de bola retráctil con empuñadura de goma."], ["Punta", "M (media)"], ["Tinta", "Azul"], ["Colores", "Azul"]], icon: stationeryIcon("#00468C") },
  { cat: "stationery", type: "Bolígrafo", brand: "Pilot", brandCode: "P", brandColor: "#00468C", model: "Pilot G2", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/pilot-g2-azul_SpTV.webp", color: "Azul|Negro", colors: [{"name": "Azul", "hex": "#1F4FB8", "photo": "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/pilot-g2-azul_SpTV.webp"}, {"name": "Negro", "hex": "#1A1A1A", "photo": "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/pilot-g2-negro_SpTV.webp"}], info: [["tag", "Tipo", "Bolígrafo", 1], ["palette", "Colores", "2 colores", 1]], specs: [["Categoría", "Bolígrafo"], ["Marca", "Pilot"], ["Descripción", "Bolígrafo de tinta gel retráctil, de escritura suave."], ["Tinta", "Gel · azul o negra"], ["Colores", "Azul · Negro"]], icon: stationeryIcon("#00468C") },
  { cat: "stationery", type: "Bolígrafo", brand: "BIC", brandCode: "B", brandColor: "#F28C00", model: "BIC Cristal", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/bic-cristal-azul_SpTV.webp", color: "Negro|Azul", colors: [], info: [["tag", "Tipo", "Bolígrafo", 1], ["palette", "Colores", "2 colores", 1]], specs: [["Categoría", "Bolígrafo"], ["Marca", "BIC"], ["Descripción", "El bolígrafo clásico de cuerpo transparente."], ["Tinta", "Negra o azul"], ["Colores", "Negro · Azul"]], icon: stationeryIcon("#F28C00") },
  { cat: "stationery", type: "Cinta adhesiva", brand: "3M", brandCode: "3M", brandColor: "#E2231A", model: "Scotch cinta transparente", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/scotch-transparente-transparente_SpTV.webp", color: "Transparente", colors: [], info: [["tag", "Tipo", "Cinta adhesiva", 1], ["palette", "Color", "Transparente", 1]], specs: [["Categoría", "Cinta adhesiva"], ["Marca", "3M"], ["Descripción", "Cinta adhesiva transparente de uso general."], ["Medida", "19 mm × 33 m"], ["Colores", "Transparente"]], icon: stationeryIcon("#E2231A") },
  { cat: "stationery", type: "Cinta adhesiva", brand: "3M", brandCode: "3M", brandColor: "#E2231A", model: "Scotch Magic", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/scotch-magic-transparente_SpTV.webp", color: "Transparente", colors: [], info: [["tag", "Tipo", "Cinta adhesiva", 1], ["palette", "Color", "Transparente", 1]], specs: [["Categoría", "Cinta adhesiva"], ["Marca", "3M"], ["Descripción", "Cinta adhesiva invisible y mate: no se ve sobre el papel y se puede escribir encima."], ["Medida", "19 mm × 33 m"], ["Colores", "Transparente"]], icon: stationeryIcon("#E2231A") },
  { cat: "stationery", type: "Lápiz", brand: "Staedtler", brandCode: "S", brandColor: "#003A70", model: "Staedtler Noris 120", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/staedtler-noris-120-amarillo_SpTV.webp", color: "Amarillo", colors: [], info: [["tag", "Tipo", "Lápiz", 1], ["palette", "Color", "Amarillo", 1]], specs: [["Categoría", "Lápiz"], ["Marca", "Staedtler"], ["Descripción", "Lápiz de grafito clásico, con el cuerpo amarillo y negro."], ["Dureza", "HB"], ["Colores", "Amarillo"]], icon: stationeryIcon("#003A70") },
  { cat: "stationery", type: "Lápiz", brand: "Staedtler", brandCode: "S", brandColor: "#003A70", model: "Staedtler lápiz graso blanco", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/staedtler-lapiz-graso-blanco_SpTV.webp", color: "Blanco", colors: [], info: [["tag", "Tipo", "Lápiz", 1], ["palette", "Color", "Blanco", 1]], specs: [["Categoría", "Lápiz"], ["Marca", "Staedtler"], ["Descripción", "Lápiz graso que escribe sobre vidrio, plástico, metal y superficies lisas, y se borra con un paño."], ["Uso", "No permanente"], ["Colores", "Blanco"]], icon: stationeryIcon("#003A70") },
  { cat: "stationery", type: "Pegamento", brand: "Gorilla", brandCode: "G", brandColor: "#1A1A1A", model: "Gorilla Super Glue", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/gorilla-super-glue-transparente_SpTV.webp", color: "Transparente", colors: [], info: [["tag", "Tipo", "Pegamento", 1], ["palette", "Color", "Transparente", 1], ["capacity", "Formatos", "3 g · 15 g"]], specs: [["Categoría", "Pegamento"], ["Marca", "Gorilla"], ["Descripción", "Pegamento instantáneo (cianoacrilato) reforzado con caucho, más resistente a golpes."], ["Formato", "3 g · 15 g"], ["Colores", "Transparente"]], icon: stationeryIcon("#1A1A1A") },
  { cat: "stationery", type: "Pegamento", brand: "Goobay", brandCode: "G", brandColor: "#E30613", model: "Goobay pegamento instantáneo", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/goobay-super-glue-transparente_SpTV.webp", color: "Transparente", colors: [], info: [["tag", "Tipo", "Pegamento", 1], ["palette", "Color", "Transparente", 1], ["capacity", "Formatos", "3 g · 10 g con pincel"]], specs: [["Categoría", "Pegamento"], ["Marca", "Goobay"], ["Descripción", "Pegamento instantáneo (cianoacrilato) para reparaciones rápidas."], ["Formato", "3 g · 10 g con pincel"], ["Colores", "Transparente"]], icon: stationeryIcon("#E30613") },
  { cat: "stationery", type: "Pegamento", brand: "Loctite", brandCode: "L", brandColor: "#D0021B", model: "Loctite Super Glue-3", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/loctite-super-glue-3-transparente_SpTV.webp", color: "Transparente", colors: [], info: [["tag", "Tipo", "Pegamento", 1], ["palette", "Color", "Transparente", 1], ["capacity", "Formatos", "5 g · 5 g con pincel"]], specs: [["Categoría", "Pegamento"], ["Marca", "Loctite"], ["Descripción", "Pegamento instantáneo (cianoacrilato) de secado en segundos."], ["Formato", "5 g sin pincel · 5 g con pincel"], ["Colores", "Transparente"]], icon: stationeryIcon("#D0021B") },
  { cat: "stationery", type: "Rotulador permanente", brand: "Staedtler", brandCode: "S", brandColor: "#003A70", model: "Staedtler Lumocolor permanent", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/staedtler-lumocolor-permanent-negro_SpTV.webp", color: "Negro|Azul|Rojo|Verde", colors: [{"name": "Negro", "hex": "#1A1A1A", "photo": "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/staedtler-lumocolor-permanent-negro_SpTV.webp"}, {"name": "Azul", "hex": "#1F4FB8", "photo": "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/staedtler-lumocolor-permanent-azul_SpTV.webp"}, {"name": "Rojo", "hex": "#D0202E", "photo": "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/staedtler-lumocolor-permanent-rojo_SpTV.webp"}, {"name": "Verde", "hex": "#1E8C3A", "photo": "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/staedtler-lumocolor-permanent-verde_SpTV.webp"}], info: [["tag", "Tipo", "Rotulador permanente", 1], ["palette", "Colores", "4 colores", 1], ["capacity", "Formatos", "S 0,4 mm · F 0,6 mm · M 1 mm"]], specs: [["Categoría", "Rotulador permanente"], ["Marca", "Staedtler"], ["Descripción", "Rotulador permanente para casi cualquier superficie (plástico, vidrio, metal, film), de secado rápido."], ["Puntas", "S (0,4 mm) · F (0,6 mm) · M (1 mm)"], ["Colores", "Negro · Azul · Rojo · Verde"]], icon: stationeryIcon("#003A70") },
  { cat: "stationery", type: "Rotulador permanente", brand: "Staedtler", brandCode: "S", brandColor: "#003A70", model: "Staedtler Lumocolor permanent duo", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/staedtler-lumocolor-duo-negro_SpTV.webp", color: "Negro", colors: [], info: [["tag", "Tipo", "Rotulador permanente", 1], ["palette", "Color", "Negro", 1]], specs: [["Categoría", "Rotulador permanente"], ["Marca", "Staedtler"], ["Descripción", "Rotulador permanente con dos puntas, fina y media, en el mismo rotulador."], ["Puntas", "F (0,6 mm) y M (1,5 mm)"], ["Colores", "Negro"]], icon: stationeryIcon("#003A70") },
  { cat: "stationery", type: "Rotulador permanente", brand: "edding", brandCode: "e", brandColor: "#1A1A1A", model: "edding 330", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/edding-330-negro_SpTV.webp", color: "Negro|Rojo", colors: [{"name": "Negro", "hex": "#1A1A1A", "photo": "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/edding-330-negro_SpTV.webp"}, {"name": "Rojo", "hex": "#D0202E", "photo": "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/edding-330-rojo_SpTV.webp"}], info: [["tag", "Tipo", "Rotulador permanente", 1], ["palette", "Colores", "2 colores", 1]], specs: [["Categoría", "Rotulador permanente"], ["Marca", "edding"], ["Descripción", "Rotulador permanente de punta biselada para marcar y rotular."], ["Punta", "Biselada 1–5 mm"], ["Colores", "Negro · Rojo"]], icon: stationeryIcon("#1A1A1A") },
  { cat: "stationery", type: "Rotulador permanente", brand: "edding", brandCode: "e", brandColor: "#1A1A1A", model: "edding 500", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/edding-500-negro_SpTV.webp", color: "Negro|Rojo|Verde", colors: [{"name": "Negro", "hex": "#1A1A1A", "photo": "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/edding-500-negro_SpTV.webp"}, {"name": "Rojo", "hex": "#D0202E", "photo": "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/edding-500-rojo_SpTV.webp"}, {"name": "Verde", "hex": "#1E8C3A", "photo": "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/edding-500-verde_SpTV.webp"}], info: [["tag", "Tipo", "Rotulador permanente", 1], ["palette", "Colores", "3 colores", 1]], specs: [["Categoría", "Rotulador permanente"], ["Marca", "edding"], ["Descripción", "Rotulador permanente de punta biselada ancha para rotular en grande."], ["Punta", "Biselada 2–7 mm"], ["Colores", "Negro · Rojo · Verde"]], icon: stationeryIcon("#1A1A1A") },
  { cat: "stationery", type: "Rotulador permanente", brand: "edding", brandCode: "e", brandColor: "#1A1A1A", model: "edding 400", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/edding-400-negro_SpTV.webp", color: "Negro", colors: [], info: [["tag", "Tipo", "Rotulador permanente", 1], ["palette", "Color", "Negro", 1]], specs: [["Categoría", "Rotulador permanente"], ["Marca", "edding"], ["Descripción", "Rotulador permanente de punta fina para escribir y marcar con precisión."], ["Punta", "Redonda 1 mm"], ["Colores", "Negro"]], icon: stationeryIcon("#1A1A1A") },
  { cat: "stationery", type: "Rotulador permanente", brand: "Sharpie", brandCode: "S", brandColor: "#1A1A1A", model: "Sharpie Fine", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/sharpie-fine-negro_SpTV.webp", color: "Negro", colors: [], info: [["tag", "Tipo", "Rotulador permanente", 1], ["palette", "Color", "Negro", 1]], specs: [["Categoría", "Rotulador permanente"], ["Marca", "Sharpie"], ["Descripción", "Rotulador permanente de punta fina, el clásico de Sharpie."], ["Punta", "Fina"], ["Colores", "Negro"]], icon: stationeryIcon("#1A1A1A") },
  { cat: "stationery", type: "Rotulador permanente", brand: "Sharpie", brandCode: "S", brandColor: "#1A1A1A", model: "Sharpie Twin Tip", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/sharpie-twin-tip-negro_SpTV.webp", color: "Negro", colors: [], info: [["tag", "Tipo", "Rotulador permanente", 1], ["palette", "Color", "Negro", 1]], specs: [["Categoría", "Rotulador permanente"], ["Marca", "Sharpie"], ["Descripción", "Rotulador permanente con dos puntas: fina y ultrafina."], ["Punta", "Doble (fina y ultrafina)"], ["Colores", "Negro"]], icon: stationeryIcon("#1A1A1A") },
  { cat: "stationery", type: "Rotulador permanente", brand: "Pentel", brandCode: "P", brandColor: "#00539F", model: "Pentel N50", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/pentel-n50-negro_SpTV.webp", color: "Negro", colors: [], info: [["tag", "Tipo", "Rotulador permanente", 1], ["palette", "Color", "Negro", 1]], specs: [["Categoría", "Rotulador permanente"], ["Marca", "Pentel"], ["Descripción", "Rotulador permanente de punta redonda y cuerpo metálico."], ["Punta", "Redonda"], ["Colores", "Negro"]], icon: stationeryIcon("#00539F") },
  { cat: "stationery", type: "Rotulador permanente", brand: "BIC", brandCode: "B", brandColor: "#F28C00", model: "BIC Marking 2000", photo: "", color: "Negro", colors: [], info: [["tag", "Tipo", "Rotulador permanente", 1], ["palette", "Color", "Negro", 1]], specs: [["Categoría", "Rotulador permanente"], ["Marca", "BIC"], ["Descripción", "Rotulador permanente de punta redonda para uso general."], ["Punta", "Redonda 1,7 mm"], ["Colores", "Negro"]], icon: stationeryIcon("#F28C00") },
  { cat: "stationery", type: "Rotulador permanente", brand: "edding", brandCode: "e", brandColor: "#1A1A1A", model: "edding 3000", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/edding-3000-azul_SpTV.webp", color: "Azul|Negro|Rojo", colors: [{"name": "Azul", "hex": "#1F4FB8", "photo": "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/edding-3000-azul_SpTV.webp"}, {"name": "Negro", "hex": "#1A1A1A", "photo": "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/edding-3000-negro_SpTV.webp"}, {"name": "Rojo", "hex": "#D0202E", "photo": "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/edding-3000-rojo_SpTV.webp"}], info: [["tag", "Tipo", "Rotulador permanente", 1], ["palette", "Colores", "3 colores", 1]], specs: [["Categoría", "Rotulador permanente"], ["Marca", "edding"], ["Descripción", "Rotulador permanente de punta redonda, recargable."], ["Punta", "Redonda 1,5–3 mm"], ["Colores", "Azul · Negro · Rojo"]], icon: stationeryIcon("#1A1A1A") },
  { cat: "stationery", type: "Rotulador permanente", brand: "edding", brandCode: "e", brandColor: "#1A1A1A", model: "edding 751", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/edding-751-blanco_SpTV.webp", color: "Blanco|Negro", colors: [{"name": "Blanco", "hex": "#FFFFFF", "photo": "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/edding-751-blanco_SpTV.webp"}, {"name": "Negro", "hex": "#1A1A1A", "photo": "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/edding-751-negro_SpTV.webp"}], info: [["tag", "Tipo", "Rotulador permanente", 1], ["palette", "Colores", "2 colores", 1]], specs: [["Categoría", "Rotulador permanente"], ["Marca", "edding"], ["Descripción", "Rotulador de pintura opaca: marca sobre superficies oscuras, metal, vidrio o plástico."], ["Punta", "Redonda 1–2 mm"], ["Tinta", "Pintura opaca"], ["Colores", "Blanco · Negro"]], icon: stationeryIcon("#1A1A1A") },
  { cat: "stationery", type: "Rotulador permanente", brand: "edding", brandCode: "e", brandColor: "#1A1A1A", model: "edding 750", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/edding-750-blanco_SpTV.webp", color: "Blanco|Negro|Plata", colors: [{"name": "Blanco", "hex": "#FFFFFF", "photo": "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/edding-750-blanco_SpTV.webp"}, {"name": "Negro", "hex": "#1A1A1A", "photo": "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/edding-750-negro_SpTV.webp"}, {"name": "Plata", "hex": "#C0C4C8", "photo": "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/edding-750-plata_SpTV.webp"}], info: [["tag", "Tipo", "Rotulador permanente", 1], ["palette", "Colores", "3 colores", 1]], specs: [["Categoría", "Rotulador permanente"], ["Marca", "edding"], ["Descripción", "Rotulador de pintura opaca y resistente: marca sobre superficies oscuras, metal, vidrio o plástico."], ["Punta", "Redonda 2–4 mm"], ["Tinta", "Pintura opaca"], ["Colores", "Blanco · Negro · Plata"]], icon: stationeryIcon("#1A1A1A") },
  { cat: "stationery", type: "Rotulador permanente", brand: "edding", brandCode: "e", brandColor: "#1A1A1A", model: "edding 300", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/edding-300-negro_SpTV.webp", color: "Negro", colors: [], info: [["tag", "Tipo", "Rotulador permanente", 1], ["palette", "Color", "Negro", 1]], specs: [["Categoría", "Rotulador permanente"], ["Marca", "edding"], ["Descripción", "Rotulador permanente de punta cónica para marcar en cualquier superficie."], ["Punta", "Cónica 1,5–3 mm"], ["Colores", "Negro"]], icon: stationeryIcon("#1A1A1A") },
  { cat: "stationery", type: "Rotulador no permanente", brand: "Staedtler", brandCode: "S", brandColor: "#003A70", model: "Staedtler Lumocolor non-permanent", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/staedtler-lumocolor-non-permanent-negro_SpTV.webp", color: "Negro|Rojo|Azul|Verde", colors: [{"name": "Negro", "hex": "#1A1A1A", "photo": "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/staedtler-lumocolor-non-permanent-negro_SpTV.webp"}, {"name": "Rojo", "hex": "#D0202E", "photo": "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/staedtler-lumocolor-non-permanent-rojo_SpTV.webp"}, {"name": "Azul", "hex": "#1F4FB8", "photo": "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/staedtler-lumocolor-non-permanent-azul_SpTV.webp"}, {"name": "Verde", "hex": "#1E8C3A", "photo": "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/staedtler-lumocolor-non-permanent-verde_SpTV.webp"}], info: [["tag", "Tipo", "Rotulador no permanente", 1], ["palette", "Colores", "4 colores", 1], ["capacity", "Formatos", "S 0,4 mm · F 0,6 mm · M 1 mm"]], specs: [["Categoría", "Rotulador no permanente"], ["Marca", "Staedtler"], ["Descripción", "Rotulador al agua para transparencias y superficies lisas: se borra con un paño húmedo."], ["Puntas", "S (0,4 mm) · F (0,6 mm) · M (1 mm)"], ["Colores", "Negro · Rojo · Azul · Verde"]], icon: stationeryIcon("#003A70") },
  { cat: "stationery", type: "Rotulador no permanente", brand: "Pentel", brandCode: "P", brandColor: "#00539F", model: "Pentel Maxiflo", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/pentel-maxiflo-negro_SpTV.webp", color: "Negro", colors: [], info: [["tag", "Tipo", "Rotulador no permanente", 1], ["palette", "Color", "Negro", 1], ["capacity", "Formatos", "Redonda 4 mm · Biselado fino · Biselado grueso"]], specs: [["Categoría", "Rotulador no permanente"], ["Marca", "Pentel"], ["Descripción", "Rotulador de pizarra blanca con pulsador para avivar la tinta."], ["Modelos", "MWL5SA punta redonda media 4 mm · MWL6 biselado fino · biselado grueso"], ["Colores", "Negro"]], icon: stationeryIcon("#00539F") },
  { cat: "stationery", type: "Rotulador no permanente", brand: "edding", brandCode: "e", brandColor: "#1A1A1A", model: "edding 660", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/edding-660-negro_SpTV.webp", color: "Negro", colors: [], info: [["tag", "Tipo", "Rotulador no permanente", 1], ["palette", "Color", "Negro", 1]], specs: [["Categoría", "Rotulador no permanente"], ["Marca", "edding"], ["Descripción", "Rotulador de pizarra blanca, borrable en seco."], ["Punta", "Redonda 1,5–3 mm"], ["Colores", "Negro"]], icon: stationeryIcon("#1A1A1A") },
  { cat: "stationery", type: "Rotulador no permanente", brand: "edding", brandCode: "e", brandColor: "#1A1A1A", model: "edding 661", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/edding-661-negro_SpTV.webp", color: "Negro", colors: [], info: [["tag", "Tipo", "Rotulador no permanente", 1], ["palette", "Color", "Negro", 1]], specs: [["Categoría", "Rotulador no permanente"], ["Marca", "edding"], ["Descripción", "Rotulador de pizarra blanca de punta fina, borrable en seco."], ["Punta", "Redonda 1–2 mm"], ["Colores", "Negro"]], icon: stationeryIcon("#1A1A1A") },
  { cat: "stationery", type: "Rotulador no permanente", brand: "BIC", brandCode: "B", brandColor: "#F28C00", model: "BIC Velleda", photo: "", color: "Negro", colors: [], info: [["tag", "Tipo", "Rotulador no permanente", 1], ["palette", "Color", "Negro", 1]], specs: [["Categoría", "Rotulador no permanente"], ["Marca", "BIC"], ["Descripción", "Rotulador de pizarra blanca, borrable en seco."], ["Punta", "Redonda M"], ["Colores", "Negro"]], icon: stationeryIcon("#F28C00") },
  { cat: "stationery", type: "Rotulador no permanente", brand: "Pilot", brandCode: "P", brandColor: "#00468C", model: "Pilot V Board Master", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/pilot-v-board-master-negro_SpTV.webp", color: "Negro|Azul", colors: [{"name": "Negro", "hex": "#1A1A1A", "photo": "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/pilot-v-board-master-negro_SpTV.webp"}, {"name": "Azul", "hex": "#1F4FB8", "photo": "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/pilot-v-board-master-azul_SpTV.webp"}], info: [["tag", "Tipo", "Rotulador no permanente", 1], ["palette", "Colores", "2 colores", 1], ["capacity", "Formatos", "M · S"]], specs: [["Categoría", "Rotulador no permanente"], ["Marca", "Pilot"], ["Descripción", "Rotulador de pizarra blanca recargable, con tinta líquida de color uniforme hasta el final."], ["Puntas", "Negro: M y S · Azul: S"], ["Recarga", "Sí (cartucho)"], ["Colores", "Negro · Azul"]], icon: stationeryIcon("#00468C") },
  { cat: "stationery", type: "Rotulador no permanente", brand: "Pilot", brandCode: "P", brandColor: "#00468C", model: "Recambio Pilot V Board Master", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/pilot-v-board-master-recambio-negro_SpTV.webp", color: "Negro", colors: [], info: [["tag", "Tipo", "Rotulador no permanente", 1], ["palette", "Color", "Negro", 1]], specs: [["Categoría", "Rotulador no permanente"], ["Marca", "Pilot"], ["Descripción", "Cartucho de tinta de recambio para el rotulador Pilot V Board Master."], ["Compatible con", "Pilot V Board Master"], ["Colores", "Negro"]], icon: stationeryIcon("#00468C") },
  { cat: "stationery", type: "Tiza", brand: "Apli", brandCode: "A", brandColor: "#E2001A", model: "Tizas Apli", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/apli-tizas-blanco_SpTV.webp", color: "Blanco|Colores", colors: [{"name": "Blanco", "hex": "#FFFFFF", "photo": "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/apli-tizas-blanco_SpTV.webp"}, {"name": "Colores", "hex": "#E9A23B", "photo": "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/apli-tizas-colores_SpTV.webp"}], info: [["tag", "Tipo", "Tiza", 1], ["palette", "Colores", "2 colores", 1], ["capacity", "Formatos", "Pequeña · Jumbo"]], specs: [["Categoría", "Tiza"], ["Marca", "Apli"], ["Descripción", "Tizas para pizarra en caja de 10 unidades."], ["Formatos", "Blanca 10 ud (pequeña) · Colores 10 ud (pequeña) · Colores 10 ud (Jumbo)"], ["Colores", "Blanco · Colores"]], icon: stationeryIcon("#E2001A") },
  { cat: "stationery", type: "Tiza", brand: "", brandCode: "", brandColor: "#5C6672", model: "Portatizas metálico", photo: "", color: "Plata", colors: [], info: [["tag", "Tipo", "Tiza", 1], ["palette", "Color", "Plata", 1]], specs: [["Categoría", "Tiza"], ["Descripción", "Portatizas de metal: escribes sin mancharte las manos y aprovechas la tiza hasta el final."], ["Material", "Metal"], ["Colores", "Plata"]], icon: stationeryIcon("#5C6672") },
  { cat: "stationery", type: "Otros", brand: "", brandCode: "", brandColor: "#5C6672", model: "Terciopelo adhesivo", photo: "", color: "Negro", colors: [], info: [["tag", "Tipo", "Otros", 1], ["palette", "Color", "Negro", 1]], specs: [["Categoría", "Otros"], ["Descripción", "Lámina de terciopelo autoadhesiva para forrar, proteger superficies y evitar reflejos y arañazos."], ["Medida", "45 cm × 1 m"], ["Colores", "Negro"]], icon: stationeryIcon("#5C6672") },
  { cat: "stationery", type: "Otros", brand: "", brandCode: "", brandColor: "#5C6672", model: "Cutter profesional", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/cutter-profesional-azul_SpTV.webp", color: "Azul", colors: [], info: [["tag", "Tipo", "Otros", 1], ["palette", "Color", "Azul", 1]], specs: [["Categoría", "Otros"], ["Descripción", "Cúter profesional de hoja retráctil para cortar cartón, cinta y materiales gruesos."], ["Hoja", "Retráctil"], ["Colores", "Azul"]], icon: stationeryIcon("#5C6672") }
];

// PROTECTION: purchase catalogue, official photos from each brand's website.
// colors: one photo per colour; the dots on the card swap the photo (generated by tools/build_sonido_data.py)
const PROTECTION = [
  { cat: "protection", type: "Bolsa", brand: "Apli", brandCode: "A", brandColor: "#E2001A", model: "Bolsa zipper Apli", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/apli-bolsa-zipper-transparente_SpTV.webp", color: "Transparente|Kraft", colors: [{"name": "Transparente", "hex": "#E8EEF2", "photo": "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/apli-bolsa-zipper-transparente_SpTV.webp"}, {"name": "Kraft", "hex": "#C49A6C", "photo": "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/apli-bolsa-zipper-kraft_SpTV.webp"}], info: [["tag", "Tipo", "Bolsa", 1], ["palette", "Colores", "2 colores", 1], ["capacity", "Formatos", "A3 · A4 · A5 · A6 · Cheque"]], specs: [["Categoría", "Bolsa"], ["Marca", "Apli"], ["Descripción", "Sobre de plástico con cierre de cremallera para guardar documentos, cables y accesorios a salvo del polvo y la humedad."], ["Tamaños", "A3 · A4 (355 × 255 mm) · A5 (235 × 175 mm) · A6 (168 × 125 mm) · cheque (230 × 130 mm)"], ["Kraft", "En A6 y tamaño cheque"], ["Colores", "Transparente · Kraft"]], icon: protectionIcon("#E2001A") },
  { cat: "protection", type: "Bolsa", brand: "Apli", brandCode: "A", brandColor: "#E2001A", model: "Bolsas de autocierre Apli", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/apli-bolsa-autocierre-transparente_SpTV.webp", color: "Transparente", colors: [], info: [["tag", "Tipo", "Bolsa", 1], ["palette", "Color", "Transparente", 1], ["capacity", "Formatos", "60 × 80 mm · 100 × 150 mm · 120 × 180 mm · 160 × 220 mm · 180 × 250 mm · 220 × 310 mm · 250 × 350 mm"]], specs: [["Categoría", "Bolsa"], ["Marca", "Apli"], ["Descripción", "Bolsas de plástico con cierre zip a presión, para guardar y separar piezas pequeñas, tornillería o tarjetas."], ["Medidas", "60 × 80 · 100 × 150 · 120 × 180 · 160 × 220 · 180 × 250 · 220 × 310 · 250 × 350 mm"], ["Formato", "Paquete de 100 unidades"], ["Colores", "Transparente"]], icon: protectionIcon("#E2001A") },
  { cat: "protection", type: "Funda / cubierta", brand: "Cap It", brandCode: "C", brandColor: "#5C6672", model: "Cap It", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/cap-it-transparente_SpTV.webp", color: "Transparente", colors: [], info: [["tag", "Tipo", "Funda / cubierta", 1], ["palette", "Color", "Transparente", 1], ["capacity", "Formatos", "Medium · AKS (pequeño)"]], specs: [["Categoría", "Funda / cubierta"], ["Marca", "Cap It"], ["Descripción", "Tapa protectora elástica que cubre el objetivo o el micrófono y se ajusta sola."], ["Tamaños", "Medium · AKS (pequeño)"], ["Formato", "Pack de 3 unidades"], ["Colores", "Transparente"]], icon: protectionIcon("#5C6672") },
  { cat: "protection", type: "Funda / cubierta", brand: "", brandCode: "", brandColor: "#5C6672", model: "Bolsa de cámara termosellada", photo: "", color: "Transparente", colors: [], info: [["tag", "Tipo", "Funda / cubierta", 1], ["palette", "Color", "Transparente", 1], ["capacity", "Formatos", "0,61 × 0,61 m · 0,80 × 0,80 m · 1,22 × 1,22 m"]], specs: [["Categoría", "Funda / cubierta"], ["Descripción", "Bolsa de polietileno termosellada para cubrir la cámara o el material frente a lluvia, polvo o arena."], ["Medidas", "0,61 × 0,61 m · 0,80 × 0,80 m · 1,22 × 1,22 m"], ["Colores", "Transparente"]], icon: protectionIcon("#5C6672") },
  { cat: "protection", type: "Funda / cubierta", brand: "", brandCode: "", brandColor: "#5C6672", model: "Gorro de ducha", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/gorro-ducha-transparente_SpTV.webp", color: "Transparente", colors: [], info: [["tag", "Tipo", "Funda / cubierta", 1], ["palette", "Color", "Transparente", 1]], specs: [["Categoría", "Funda / cubierta"], ["Descripción", "El truco clásico de rodaje: cubre la cámara o el micrófono para protegerlos de la lluvia en un momento."], ["Uso", "Protección rápida contra lluvia y polvo"], ["Colores", "Transparente"]], icon: protectionIcon("#5C6672") },
  { cat: "protection", type: "Funda / cubierta", brand: "Tenba", brandCode: "T", brandColor: "#1A1A1A", model: "Tenba Protective Wrap", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/tenba-protective-wrap-negro_SpTV.webp", color: "Negro", colors: [], info: [["tag", "Tipo", "Funda / cubierta", 1], ["palette", "Color", "Negro", 1], ["capacity", "Formatos", "40 × 40 cm · 50 × 50 cm"]], specs: [["Categoría", "Funda / cubierta"], ["Marca", "Tenba"], ["Descripción", "Envoltorio de tela acolchada con cierre de velcro adaptable: envuelve cámaras, objetivos o portátiles dentro de la mochila."], ["Medidas", "40 × 40 cm · 50 × 50 cm"], ["Cierre", "Velcro adaptable"], ["Colores", "Negro"]], icon: protectionIcon("#1A1A1A") },
  { cat: "protection", type: "Mochila / maletín", brand: "Hama", brandCode: "H", brandColor: "#E2001A", model: "Hama Miami 150", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/hama-miami-150-negro_SpTV.webp", color: "Negro", colors: [], info: [["tag", "Tipo", "Mochila / maletín", 1], ["palette", "Color", "Negro", 1]], specs: [["Categoría", "Mochila / maletín"], ["Marca", "Hama"], ["Descripción", "Mochila para cámara de foto y vídeo con compartimentos acolchados."], ["Medidas", "22 × 24 cm"], ["Uso", "Cámara de foto / vídeo"], ["Colores", "Negro"]], icon: protectionIcon("#E2001A") },
  { cat: "protection", type: "Mochila / maletín", brand: "Xiaomi", brandCode: "X", brandColor: "#FF6900", model: "Xiaomi Mi Casual Daypack", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/xiaomi-mochila-tablet-negro_SpTV.webp", color: "Negro", colors: [], info: [["tag", "Tipo", "Mochila / maletín", 1], ["palette", "Color", "Negro", 1]], specs: [["Categoría", "Mochila / maletín"], ["Marca", "Xiaomi"], ["Descripción", "Mochila urbana ligera con compartimento para tablet."], ["Uso", "Tablet y accesorios"], ["Modelo de referencia", "Xiaomi Mi Casual Daypack (10 L, tablet hasta 10\")"], ["Colores", "Negro"]], icon: protectionIcon("#FF6900") },
  { cat: "protection", type: "Mochila / maletín", brand: "HP", brandCode: "HP", brandColor: "#0096D6", model: "Maletín HP Renew Executive 16\"", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/hp-maletin-portatil-negro_SpTV.webp", color: "Negro", colors: [], info: [["tag", "Tipo", "Mochila / maletín", 1], ["palette", "Color", "Negro", 1]], specs: [["Categoría", "Mochila / maletín"], ["Marca", "HP"], ["Descripción", "Maletín con compartimento acolchado para llevar el portátil y sus accesorios."], ["Uso", "Portátil"], ["Modelo de referencia", "HP Renew Executive 16-inch Laptop Bag (6B8Y2AA)"], ["Colores", "Negro"]], icon: protectionIcon("#0096D6") },
  { cat: "protection", type: "Guantes", brand: "Dirty Rigger", brandCode: "DR", brandColor: "#1A1A1A", model: "Dirty Rigger Comfort Fit", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/dirty-rigger-comfort-fit-negro_SpTV.webp", color: "Negro", colors: [], info: [["tag", "Tipo", "Guantes", 1], ["palette", "Color", "Negro", 1], ["capacity", "Formatos", "S · M · L · XL · XXL"]], specs: [["Categoría", "Guantes"], ["Marca", "Dirty Rigger"], ["Descripción", "Guantes de técnico (rigger) de dedos completos, cómodos y resistentes para montaje y manejo de material."], ["Tallas", "S · M · L · XL · XXL"], ["Dedos", "Completos"], ["Colores", "Negro"]], icon: protectionIcon("#1A1A1A") },
  { cat: "protection", type: "Guantes", brand: "Dirty Rigger", brandCode: "DR", brandColor: "#1A1A1A", model: "Dirty Rigger Leather Grip", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/dirty-rigger-leather-grip-negro_SpTV.webp", color: "Negro", colors: [], info: [["tag", "Tipo", "Guantes", 1], ["palette", "Color", "Negro", 1], ["capacity", "Formatos", "S · M · L · XL · XXL"]], specs: [["Categoría", "Guantes"], ["Marca", "Dirty Rigger"], ["Descripción", "Guantes de técnico de dedos completos con palma de piel para un agarre firme de cables, trípodes y estructuras."], ["Tallas", "S · M · L · XL · XXL"], ["Palma", "Piel"], ["Modelo de referencia", "Dirty Rigger Leather Grip 3.0 (dedos completos)"], ["Colores", "Negro"]], icon: protectionIcon("#1A1A1A") },
  { cat: "protection", type: "Antihumedad", brand: "", brandCode: "", brandColor: "#5C6672", model: "Bolsitas de gel de sílice", photo: "", color: "Blanco", colors: [], info: [["tag", "Tipo", "Antihumedad", 1], ["palette", "Color", "Blanco", 1], ["capacity", "Formatos", "1 g · 20 g"]], specs: [["Categoría", "Antihumedad"], ["Descripción", "Bolsitas desecantes que absorben la humedad dentro de maletas, estuches y cajas de material."], ["Formatos", "1 g · 20 g"], ["Colores", "Blanco"]], icon: protectionIcon("#5C6672") },
  { cat: "protection", type: "Lona", brand: "", brandCode: "", brandColor: "#5C6672", model: "Lona de rafia", photo: "", color: "Azul", colors: [], info: [["tag", "Tipo", "Lona", 1], ["palette", "Color", "Azul", 1], ["capacity", "Formatos", "2 × 3 m · 3 × 4 m"]], specs: [["Categoría", "Lona"], ["Descripción", "Lona impermeable de rafia con ojales para cubrir material o hacer de toldo."], ["Medidas", "2 × 3 m · 3 × 4 m"], ["Colores", "Azul"]], icon: protectionIcon("#5C6672") }
];

// ELECTRIC: purchase catalogue, free-licence photos (credits in the page).
// colors: one photo per colour; the dots on the card swap the photo (generated by tools/build_sonido_data.py)
const ELECTRIC = [
  { cat: "electric", type: "Clavija", brand: "", brandCode: "", brandColor: "#5C6672", model: "Clavija Schuko macho de caucho", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/clavija-schuko-macho-negro_SpTV.webp", color: "Negro", colors: [], info: [["tag", "Tipo", "Clavija", 1], ["palette", "Color", "Negro", 1]], specs: [["Categoría", "Clavija"], ["Descripción", "Clavija Schuko macho de caucho, resistente a golpes y agua, para montar o reparar alargadores y mangueras eléctricas."], ["Tipo", "Macho (enchufe)"], ["Material", "Caucho, impermeable"], ["Intensidad", "16 A"], ["Colores", "Negro"]], icon: electricIcon("#5C6672") },
  { cat: "electric", type: "Clavija", brand: "", brandCode: "", brandColor: "#5C6672", model: "Clavija Schuko hembra de caucho con tapa", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/clavija-schuko-hembra-negro_SpTV.webp", color: "Negro", colors: [], info: [["tag", "Tipo", "Clavija", 1], ["palette", "Color", "Negro", 1]], specs: [["Categoría", "Clavija"], ["Descripción", "Base Schuko hembra de caucho con tapa protectora, para alargadores de exterior y montajes en rodaje."], ["Tipo", "Hembra (base) con tapa"], ["Material", "Caucho, impermeable"], ["Intensidad", "16 A"], ["Colores", "Negro"]], icon: electricIcon("#5C6672") },
  { cat: "electric", type: "Regleta", brand: "", brandCode: "", brandColor: "#5C6672", model: "Regleta de 6 tomas con interruptor", photo: "", color: "Blanco", colors: [], info: [["tag", "Tipo", "Regleta", 1], ["palette", "Color", "Blanco", 1]], specs: [["Categoría", "Regleta"], ["Descripción", "Regleta de 6 tomas Schuko con interruptor de encendido y apagado."], ["Tomas", "6"], ["Interruptor", "Sí"], ["Colores", "Blanco"]], icon: electricIcon("#5C6672") },
  { cat: "electric", type: "Regleta", brand: "", brandCode: "", brandColor: "#5C6672", model: "Regleta de 5 tomas con interruptor y protector", photo: "", color: "Blanco", colors: [], info: [["tag", "Tipo", "Regleta", 1], ["palette", "Color", "Blanco", 1]], specs: [["Categoría", "Regleta"], ["Descripción", "Regleta de 5 tomas Schuko con interruptor y tomas con protector."], ["Tomas", "5"], ["Interruptor", "Sí"], ["Protección", "Tomas con protector"], ["Colores", "Blanco"]], icon: electricIcon("#5C6672") }
];

// FILMSET: purchase catalogue, official photos (Bluestar, Kleenslate, Apli) and free-licence photos.
// colors: one photo per colour; the dots on the card swap the photo (generated by tools/build_sonido_data.py)
const FILMSET = [
  { cat: "filmset", type: "Claqueta", brand: "", brandCode: "", brandColor: "#5C6672", model: "Claqueta de color", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/claqueta-color-multicolor_SpTV.webp", color: "Multicolor", colors: [], info: [["tag", "Tipo", "Claqueta", 1], ["palette", "Color", "Multicolor", 1], ["capacity", "Formatos", "Español · Inglés"]], specs: [["Categoría", "Claqueta"], ["Descripción", "Claqueta profesional con palos de colores para sincronizar audio y vídeo y ajustar el color en postproducción."], ["Material", "Madera con imanes y plexiglás"], ["Medidas", "28 × 23 cm"], ["Idioma", "Español o inglés"], ["Colores", "Multicolor"]], icon: filmsetIcon("#5C6672") },
  { cat: "filmset", type: "Claqueta", brand: "", brandCode: "", brandColor: "#5C6672", model: "Claqueta de insertos B/N", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/claqueta-insertos-negro_SpTV.webp", color: "Negro", colors: [], info: [["tag", "Tipo", "Claqueta", 1], ["palette", "Color", "Negro", 1]], specs: [["Categoría", "Claqueta"], ["Descripción", "Claqueta pequeña en blanco y negro para planos de detalle (insertos) y espacios reducidos."], ["Palos", "Blanco y negro"], ["Colores", "Negro"]], icon: filmsetIcon("#5C6672") },
  { cat: "filmset", type: "Claqueta", brand: "Kleenslate", brandCode: "K", brandColor: "#1A1A1A", model: "Borrador de claqueta Kleenslate", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/kleenslate-borrador-negro_SpTV.webp", color: "Negro", colors: [], info: [["tag", "Tipo", "Claqueta", 1], ["palette", "Color", "Negro", 1]], specs: [["Categoría", "Claqueta"], ["Marca", "Kleenslate"], ["Descripción", "Borrador para claquetas de rotulador, pensado para limpiar la pizarra de forma rápida durante el rodaje."], ["Uso", "Claquetas y pizarras blancas"], ["Colores", "Negro"]], icon: filmsetIcon("#1A1A1A") },
  { cat: "filmset", type: "Rotulación", brand: "Apli", brandCode: "A", brandColor: "#E2001A", model: "Letras adhesivas Apli", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/apli-letras-adhesivas-negro_SpTV.webp", color: "Negro", colors: [], info: [["tag", "Tipo", "Rotulación", 1], ["palette", "Color", "Negro", 1], ["capacity", "Formatos", "10 mm · 15 mm · 20 mm · 25 mm · 30 mm"]], specs: [["Categoría", "Rotulación"], ["Marca", "Apli"], ["Descripción", "Letras y números adhesivos negros para rotular claquetas, cajas, flight cases y material."], ["Alturas", "10 · 15 · 20 · 25 · 30 mm"], ["Color", "Negro"], ["Colores", "Negro"]], icon: filmsetIcon("#E2001A") },
  { cat: "filmset", type: "Ocular", brand: "Bluestar", brandCode: "B", brandColor: "#1F5FD0", model: "Bluestar ocular oval", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/bluestar-ocular-amarillo_SpTV.webp", color: "Amarillo|Azul|Gris|Naranja|Rojo|Verde", colors: [{"name": "Amarillo", "hex": "#F2C200", "photo": "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/bluestar-ocular-amarillo_SpTV.webp"}, {"name": "Azul", "hex": "#1F5FD0", "photo": "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/bluestar-ocular-azul_SpTV.webp"}, {"name": "Gris", "hex": "#8A8F96", "photo": "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/bluestar-ocular-gris_SpTV.webp"}, {"name": "Naranja", "hex": "#F07A1A", "photo": "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/bluestar-ocular-naranja_SpTV.webp"}, {"name": "Rojo", "hex": "#D0202E", "photo": "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/bluestar-ocular-rojo_SpTV.webp"}, {"name": "Verde", "hex": "#1E9C46", "photo": "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/bluestar-ocular-verde_SpTV.webp"}], info: [["tag", "Tipo", "Ocular", 1], ["palette", "Colores", "6 colores", 1], ["capacity", "Formatos", "Small · Large · Extra Large"]], specs: [["Categoría", "Ocular"], ["Marca", "Bluestar"], ["Descripción", "Almohadilla ocular de piel sintética (gamuza) para el visor de la cámara: más cómoda e higiénica, y los colores identifican a cada operador."], ["Forma", "Oval"], ["Tamaños", "Small (6 colores) · Large y Extra Large (azul, rojo y verde)"], ["Colores", "Amarillo · Azul · Gris · Naranja · Rojo · Verde"]], icon: filmsetIcon("#1F5FD0") },
  { cat: "filmset", type: "Talco", brand: "", brandCode: "", brandColor: "#5C6672", model: "Dispensador de talco (biberón)", photo: "", color: "Blanco", colors: [], info: [["tag", "Tipo", "Talco", 1], ["palette", "Color", "Blanco", 1]], specs: [["Categoría", "Talco"], ["Descripción", "Bote dosificador tipo biberón para aplicar talco en las vías del travelling y en las ruedas de la dolly."], ["Capacidad", "250 ml"], ["Colores", "Blanco"]], icon: filmsetIcon("#5C6672") },
  { cat: "filmset", type: "Talco", brand: "", brandCode: "", brandColor: "#5C6672", model: "Talco industrial", photo: "", color: "Blanco", colors: [], info: [["tag", "Tipo", "Talco", 1], ["palette", "Color", "Blanco", 1]], specs: [["Categoría", "Talco"], ["Descripción", "Talco industrial para que la dolly ruede suave y sin ruido sobre las vías."], ["Formato", "1 kg"], ["Colores", "Blanco"]], icon: filmsetIcon("#5C6672") }
];

// DULLING: purchase catalogue, official photos from each brand's website.
// colors: one photo per colour; the dots on the card swap the photo (generated by tools/build_sonido_data.py)
const DULLING = [
  { cat: "dulling", type: "Spray matabrillos", brand: "Kenro", brandCode: "K", brandColor: "#1A1A1A", model: "Kenro spray matabrillos", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/kenro-matabrillos-mate_SpTV.webp", color: "Mate|Negro|Blanco", colors: [{"name": "Mate", "hex": "#D9DDE2", "photo": "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/kenro-matabrillos-mate_SpTV.webp"}, {"name": "Negro", "hex": "#1A1A1A", "photo": "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/kenro-matabrillos-negro_SpTV.webp"}, {"name": "Blanco", "hex": "#FFFFFF", "photo": "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/kenro-matabrillos-blanco_SpTV.webp"}], info: [["tag", "Tipo", "Spray matabrillos", 1], ["palette", "Colores", "3 colores", 1]], specs: [["Categoría", "Spray matabrillos"], ["Marca", "Kenro"], ["Descripción", "Spray que elimina brillos y reflejos de objetos en plató; se retira fácilmente después."], ["Versiones", "Full Matte (transparente mate) · Black (negro) · White (blanco)"], ["Formato", "Spray de 400 ml"], ["Colores", "Mate · Negro · Blanco"]], icon: dullingIcon("#1A1A1A") },
  { cat: "dulling", type: "Spray matabrillos", brand: "K-Line", brandCode: "K", brandColor: "#5C6672", model: "K-Line Matt", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/k-line-matt-mate_SpTV.webp", color: "Mate", colors: [], info: [["tag", "Tipo", "Spray matabrillos", 1], ["palette", "Color", "Mate", 1]], specs: [["Categoría", "Spray matabrillos"], ["Marca", "K-Line"], ["Descripción", "Spray matabrillos de acabado mate para quitar reflejos en objetos y superficies durante el rodaje."], ["Formato", "Spray de 400 ml"], ["Colores", "Mate"]], icon: dullingIcon("#5C6672") }
];

// LIGHTING: purchase catalogue, official photos from each brand's website.
// colors: one photo per colour; the dots on the card swap the photo (generated by tools/build_sonido_data.py)
const LIGHTING = [
  { cat: "lighting", type: "Gelatina", brand: "Rosco", brandCode: "R", brandColor: "#E2001A", model: "Rosco E-Colour+", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/rosco-e-colour-multicolor_SpTV.webp", color: "Multicolor", colors: [], info: [["tag", "Tipo", "Gelatina", 1], ["palette", "Color", "Multicolor", 1], ["capacity", "Formatos", "Hoja · Rollo"]], specs: [["Categoría", "Gelatina"], ["Marca", "Rosco"], ["Descripción", "Filtros de color (gelatinas) para corregir y dar color a la luz de los focos."], ["Formatos", "Hoja o rollo"], ["Colores", "Consultar modelos"], ["Colores", "Multicolor"]], icon: lightingIcon("#E2001A") },
  { cat: "lighting", type: "Gelatina", brand: "Rosco", brandCode: "R", brandColor: "#E2001A", model: "Rosco Supergel", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/rosco-supergel-multicolor_SpTV.webp", color: "Multicolor", colors: [], info: [["tag", "Tipo", "Gelatina", 1], ["palette", "Color", "Multicolor", 1], ["capacity", "Formatos", "Hoja · Rollo"]], specs: [["Categoría", "Gelatina"], ["Marca", "Rosco"], ["Descripción", "Gelatinas de color resistentes al calor, para iluminación de espectáculo y rodaje."], ["Formatos", "Hoja o rollo"], ["Colores", "Consultar modelos"], ["Colores", "Multicolor"]], icon: lightingIcon("#E2001A") },
  { cat: "lighting", type: "Gelatina", brand: "Rosco", brandCode: "R", brandColor: "#E2001A", model: "Rosco Cinelux", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/rosco-cinelux-multicolor_SpTV.webp", color: "Multicolor", colors: [], info: [["tag", "Tipo", "Gelatina", 1], ["palette", "Color", "Multicolor", 1], ["capacity", "Formatos", "Hoja · Rollo"]], specs: [["Categoría", "Gelatina"], ["Marca", "Rosco"], ["Descripción", "Gelatinas de color y corrección pensadas para cine y televisión."], ["Formatos", "Hoja o rollo"], ["Colores", "Consultar modelos"], ["Colores", "Multicolor"]], icon: lightingIcon("#E2001A") },
  { cat: "lighting", type: "Control de luz", brand: "Rosco", brandCode: "R", brandColor: "#E2001A", model: "Rosco Cinefoil", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/rosco-cinefoil-negro_SpTV.webp", color: "Negro", colors: [], info: [["tag", "Tipo", "Control de luz", 1], ["palette", "Color", "Negro", 1]], specs: [["Categoría", "Control de luz"], ["Marca", "Rosco"], ["Descripción", "Papel de aluminio negro mate para tapar fugas de luz, hacer viseras y controlar la luz de los focos."], ["Medida", "61 cm × 7,62 m"], ["Acabado", "Negro mate"], ["Colores", "Negro"]], icon: lightingIcon("#E2001A") },
  { cat: "lighting", type: "Control de luz", brand: "Apli", brandCode: "A", brandColor: "#E2001A", model: "Papel kraft negro Apli", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/apli-papel-kraft-negro-negro_SpTV.webp", color: "Negro", colors: [], info: [["tag", "Tipo", "Control de luz", 1], ["palette", "Color", "Negro", 1]], specs: [["Categoría", "Control de luz"], ["Marca", "Apli"], ["Descripción", "Rollo de papel kraft negro opaco para tapar ventanas, cubrir superficies y bloquear la luz."], ["Medida", "1 × 25 m"], ["Gramaje", "70 g"], ["Colores", "Negro"]], icon: lightingIcon("#E2001A") }
];

// EFFECTS: purchase catalogue, official photos from each brand's website.
// colors: one photo per colour; the dots on the card swap the photo (generated by tools/build_sonido_data.py)
const EFFECTS = [
  { cat: "effects", type: "Spray de efectos", brand: "Dirty Down", brandCode: "D", brandColor: "#3B3B3B", model: "Dirty Down spray de efectos", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/dirty-down-envejecimiento_SpTV.webp", color: "Envejecimiento|Nicotina|Rubio ceniza|Marrón|Óxido", colors: [{"name": "Envejecimiento", "hex": "#8A7A5C", "photo": "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/dirty-down-envejecimiento_SpTV.webp"}, {"name": "Nicotina", "hex": "#C9A23A", "photo": "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/dirty-down-nicotina_SpTV.webp"}, {"name": "Rubio ceniza", "hex": "#B9A98A", "photo": "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/dirty-down-rubio-ceniza_SpTV.webp"}, {"name": "Marrón", "hex": "#6B4A2B", "photo": "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/dirty-down-marron_SpTV.webp"}, {"name": "Óxido", "hex": "#A4502A", "photo": "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/dirty-down-oxido_SpTV.webp"}], info: [["tag", "Tipo", "Spray de efectos", 1], ["palette", "Colores", "5 colores", 1]], specs: [["Categoría", "Spray de efectos"], ["Marca", "Dirty Down"], ["Descripción", "Sprays de atrezzo para ensuciar, envejecer y dar desgaste a decorados, vestuario y objetos; se pueden quitar con agua."], ["Efectos", "Envejecimiento · Nicotina · Rubio ceniza · Marrón · Óxido"], ["Colores", "Envejecimiento · Nicotina · Rubio ceniza · Marrón · Óxido"]], icon: effectsIcon("#3B3B3B") },
  { cat: "effects", type: "Tabaco de atrezzo", brand: "Honeyrose", brandCode: "H", brandColor: "#7A4E2D", model: "Tabaco de atrezzo Honeyrose", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/honeyrose-tabaco-marron_SpTV.webp", color: "Marrón", colors: [], info: [["tag", "Tipo", "Tabaco de atrezzo", 1], ["palette", "Color", "Marrón", 1]], specs: [["Categoría", "Tabaco de atrezzo"], ["Marca", "Honeyrose"], ["Descripción", "Cigarrillos y tabaco de hierbas sin nicotina ni tabaco, para escenas en las que los actores fuman."], ["Composición", "Hierbas, sin tabaco ni nicotina"], ["Colores", "Marrón"]], icon: effectsIcon("#7A4E2D") }
];

// CLEANING: purchase catalogue, official photos from each brand's website and free-licence photos.
// colors: one photo per colour; the dots on the card swap the photo (generated by tools/build_sonido_data.py)
const CLEANING = [
  { cat: "cleaning", type: "Aire comprimido", brand: "Ewent", brandCode: "E", brandColor: "#1F5FD0", model: "Aire comprimido Ewent", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/ewen-aire-comprimido-unico_SpTV.webp", color: "Único", colors: [], info: [["tag", "Tipo", "Aire comprimido", 1], ["palette", "Color", "Único", 1]], specs: [["Categoría", "Aire comprimido"], ["Marca", "Ewent"], ["Descripción", "Bote de aire comprimido con válvula para quitar el polvo de teclados, cámaras y electrónica."], ["Capacidad", "400 ml"], ["Válvula", "Sí"], ["Colores", "Único"]], icon: cleaningIcon("#1F5FD0") },
  { cat: "cleaning", type: "Aire comprimido", brand: "Kenro", brandCode: "K", brandColor: "#1A1A1A", model: "Aire comprimido Kenro", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/kenro-aire-comprimido-unico_SpTV.webp", color: "Único", colors: [], info: [["tag", "Tipo", "Aire comprimido", 1], ["palette", "Color", "Único", 1], ["capacity", "Formatos", "Sin válvula · Con válvula · Recarga + válvula"]], specs: [["Categoría", "Aire comprimido"], ["Marca", "Kenro"], ["Descripción", "Aire comprimido para limpiar ópticas, cámaras y electrónica sin tocarlas."], ["Formatos", "Sin válvula 360 ml · con válvula · recarga + válvula (blíster) 360 ml"], ["Colores", "Único"]], icon: cleaningIcon("#1A1A1A") },
  { cat: "cleaning", type: "Aire comprimido", brand: "Kenro", brandCode: "K", brandColor: "#1A1A1A", model: "Válvula Kenro", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/kenro-valvula-unico_SpTV.webp", color: "Único", colors: [], info: [["tag", "Tipo", "Aire comprimido", 1], ["palette", "Color", "Único", 1]], specs: [["Categoría", "Aire comprimido"], ["Marca", "Kenro"], ["Descripción", "Válvula de gatillo para los botes de aire comprimido Kenro: dosifica el aire con precisión."], ["Compatible con", "Aire comprimido Kenro"], ["Colores", "Único"]], icon: cleaningIcon("#1A1A1A") },
  { cat: "cleaning", type: "Aire comprimido", brand: "Kenro", brandCode: "K", brandColor: "#1A1A1A", model: "Kenro Dust Vac Kit", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/kenro-dust-vac-kit-unico_SpTV.webp", color: "Único", colors: [], info: [["tag", "Tipo", "Aire comprimido", 1], ["palette", "Color", "Único", 1]], specs: [["Categoría", "Aire comprimido"], ["Marca", "Kenro"], ["Descripción", "Kit de aire comprimido de Kenro con válvula, para limpieza de material fotográfico y electrónico."], ["Contenido", "Kit Dust Vac"], ["Colores", "Único"]], icon: cleaningIcon("#1A1A1A") },
  { cat: "cleaning", type: "Aire comprimido", brand: "", brandCode: "", brandColor: "#5C6672", model: "Soplador de aire con batería", photo: "", color: "Único", colors: [], info: [["tag", "Tipo", "Aire comprimido", 1], ["palette", "Color", "Único", 1]], specs: [["Categoría", "Aire comprimido"], ["Descripción", "Soplador eléctrico recargable: sustituye a los botes de aire comprimido para quitar el polvo de equipos y teclados."], ["Potencia", "100 W · 110.000 rpm"], ["Incluye", "Accesorios de limpieza"], ["Colores", "Único"]], icon: cleaningIcon("#5C6672") },
  { cat: "cleaning", type: "Gel hidroalcohólico", brand: "", brandCode: "", brandColor: "#5C6672", model: "Gel hidroalcohólico", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/gel-hidroalcoholico-unico_SpTV.webp", color: "Único", colors: [], info: [["tag", "Tipo", "Gel hidroalcohólico", 1], ["palette", "Color", "Único", 1], ["capacity", "Formatos", "100 ml · 500 ml"]], specs: [["Categoría", "Gel hidroalcohólico"], ["Descripción", "Gel desinfectante de manos sin aclarado."], ["Formatos", "De bolsillo 100 ml · con dispensador 500 ml"], ["Colores", "Único"]], icon: cleaningIcon("#5C6672") },
  { cat: "cleaning", type: "Líquido limpiador", brand: "tesa", brandCode: "t", brandColor: "#E2001A", model: "tesa limpiador de adhesivos", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/tesa-limpiador-adhesivo-unico_SpTV.webp", color: "Único", colors: [], info: [["tag", "Tipo", "Líquido limpiador", 1], ["palette", "Color", "Único", 1]], specs: [["Categoría", "Líquido limpiador"], ["Marca", "tesa"], ["Descripción", "Elimina restos de cinta adhesiva, etiquetas y pegamento de superficies."], ["Capacidad", "200 ml"], ["Colores", "Único"]], icon: cleaningIcon("#E2001A") },
  { cat: "cleaning", type: "Líquido limpiador", brand: "Rosco", brandCode: "R", brandColor: "#E2001A", model: "Rosco limpiador de lentes", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/rosco-lens-cleaner-unico_SpTV.webp", color: "Único", colors: [], info: [["tag", "Tipo", "Líquido limpiador", 1], ["palette", "Color", "Único", 1]], specs: [["Categoría", "Líquido limpiador"], ["Marca", "Rosco"], ["Descripción", "Líquido limpiador para ópticas y filtros de iluminación y cámara."], ["Capacidad", "60 ml"], ["Colores", "Único"]], icon: cleaningIcon("#E2001A") },
  { cat: "cleaning", type: "Líquido limpiador", brand: "Photographic Solutions", brandCode: "PS", brandColor: "#1A1A1A", model: "Eclipse (Photographic Solutions)", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/eclipse-photosol-unico_SpTV.webp", color: "Único", colors: [], info: [["tag", "Tipo", "Líquido limpiador", 1], ["palette", "Color", "Único", 1]], specs: [["Categoría", "Líquido limpiador"], ["Marca", "Photographic Solutions"], ["Descripción", "Líquido de limpieza de sensores y ópticas de secado ultrarrápido, sin residuos."], ["Capacidad", "59 ml"], ["Colores", "Único"]], icon: cleaningIcon("#1A1A1A") },
  { cat: "cleaning", type: "Líquido limpiador", brand: "Pancro", brandCode: "P", brandColor: "#1A1A1A", model: "Pancro limpiador de lentes", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/pancro-lens-cleaner-unico_SpTV.webp", color: "Único", colors: [], info: [["tag", "Tipo", "Líquido limpiador", 1], ["palette", "Color", "Único", 1]], specs: [["Categoría", "Líquido limpiador"], ["Marca", "Pancro"], ["Descripción", "Limpiador profesional de ópticas de cine, sin residuos ni rayas."], ["Capacidad", "118 ml"], ["Colores", "Único"]], icon: cleaningIcon("#1A1A1A") },
  { cat: "cleaning", type: "Líquido limpiador", brand: "Hansaplast", brandCode: "H", brandColor: "#003B7E", model: "Alcohol 96º Hansaplast", photo: "", color: "Único", colors: [], info: [["tag", "Tipo", "Líquido limpiador", 1], ["palette", "Color", "Único", 1]], specs: [["Categoría", "Líquido limpiador"], ["Marca", "Hansaplast"], ["Descripción", "Alcohol etílico de 96º."], ["Capacidad", "250 ml"], ["Colores", "Único"]], icon: cleaningIcon("#003B7E") },
  { cat: "cleaning", type: "Líquido limpiador", brand: "", brandCode: "", brandColor: "#5C6672", model: "Alcohol isopropílico", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/alcohol-isopropilico-unico_SpTV.webp", color: "Único", colors: [], info: [["tag", "Tipo", "Líquido limpiador", 1], ["palette", "Color", "Único", 1]], specs: [["Categoría", "Líquido limpiador"], ["Descripción", "Alcohol isopropílico para limpiar electrónica, contactos y placas: se evapora rápido y no deja residuos."], ["Capacidad", "1 L"], ["Colores", "Único"]], icon: cleaningIcon("#5C6672") },
  { cat: "cleaning", type: "Líquido limpiador", brand: "Rain-X", brandCode: "R", brandColor: "#0057B8", model: "Rain-X antivaho", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/rain-x-antivaho-unico_SpTV.webp", color: "Único", colors: [], info: [["tag", "Tipo", "Líquido limpiador", 1], ["palette", "Color", "Único", 1]], specs: [["Categoría", "Líquido limpiador"], ["Marca", "Rain-X"], ["Descripción", "Tratamiento que evita que se empañen cristales y visores."], ["Capacidad", "200 ml"], ["Colores", "Único"]], icon: cleaningIcon("#0057B8") },
  { cat: "cleaning", type: "Líquido limpiador", brand: "Rain-X", brandCode: "R", brandColor: "#0057B8", model: "Rain-X antilluvia", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/rain-x-antilluvia-unico_SpTV.webp", color: "Único", colors: [], info: [["tag", "Tipo", "Líquido limpiador", 1], ["palette", "Color", "Único", 1]], specs: [["Categoría", "Líquido limpiador"], ["Marca", "Rain-X"], ["Descripción", "Repelente de agua para cristales: la lluvia resbala y no se queda pegada."], ["Capacidad", "200 ml"], ["Colores", "Único"]], icon: cleaningIcon("#0057B8") },
  { cat: "cleaning", type: "Spray", brand: "Apli", brandCode: "A", brandColor: "#E2001A", model: "Spray limpiador de pantallas Apli", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/apli-spray-pantallas-unico_SpTV.webp", color: "Único", colors: [], info: [["tag", "Tipo", "Spray", 1], ["palette", "Color", "Único", 1]], specs: [["Categoría", "Spray"], ["Marca", "Apli"], ["Descripción", "Spray para limpiar pantallas, monitores y superficies de plástico."], ["Capacidad", "250 ml"], ["Colores", "Único"]], icon: cleaningIcon("#E2001A") },
  { cat: "cleaning", type: "Spray", brand: "Soudal", brandCode: "S", brandColor: "#E30613", model: "Soudal spray de silicona", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/soudal-spray-silicona-unico_SpTV.webp", color: "Único", colors: [], info: [["tag", "Tipo", "Spray", 1], ["palette", "Color", "Único", 1]], specs: [["Categoría", "Spray"], ["Marca", "Soudal"], ["Descripción", "Lubricante de silicona que protege y hace deslizar piezas de plástico, goma y metal."], ["Capacidad", "400 ml"], ["Colores", "Único"]], icon: cleaningIcon("#E30613") },
  { cat: "cleaning", type: "Spray", brand: "CRC", brandCode: "C", brandColor: "#E2001A", model: "CRC limpiacontactos", photo: "", color: "Único", colors: [], info: [["tag", "Tipo", "Spray", 1], ["palette", "Color", "Único", 1]], specs: [["Categoría", "Spray"], ["Marca", "CRC"], ["Descripción", "Limpiador de contactos eléctricos y electrónicos, de secado rápido."], ["Capacidad", "250 ml"], ["Colores", "Único"]], icon: cleaningIcon("#E2001A") },
  { cat: "cleaning", type: "Spray", brand: "3 en 1", brandCode: "3", brandColor: "#00539F", model: "3 en 1 limpiacontactos", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/3en1-contactos-unico_SpTV.webp", color: "Único", colors: [], info: [["tag", "Tipo", "Spray", 1], ["palette", "Color", "Único", 1]], specs: [["Categoría", "Spray"], ["Marca", "3 en 1"], ["Descripción", "Spray limpiador de contactos eléctricos."], ["Capacidad", "250 ml"], ["Colores", "Único"]], icon: cleaningIcon("#00539F") },
  { cat: "cleaning", type: "Spray", brand: "WD-40", brandCode: "W", brandColor: "#1D428A", model: "WD-40 multiusos", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/wd40-unico_SpTV.webp", color: "Único", colors: [], info: [["tag", "Tipo", "Spray", 1], ["palette", "Color", "Único", 1], ["capacity", "Formatos", "200 ml · 400 ml"]], specs: [["Categoría", "Spray"], ["Marca", "WD-40"], ["Descripción", "Lubricante multiusos: afloja, protege contra el óxido y desplaza la humedad."], ["Formatos", "200 ml · 400 ml"], ["Colores", "Único"]], icon: cleaningIcon("#1D428A") },
  { cat: "cleaning", type: "Spray", brand: "3 en 1", brandCode: "3", brandColor: "#00539F", model: "3 en 1 lubricante", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/3en1-lubricante-unico_SpTV.webp", color: "Único", colors: [], info: [["tag", "Tipo", "Spray", 1], ["palette", "Color", "Único", 1]], specs: [["Categoría", "Spray"], ["Marca", "3 en 1"], ["Descripción", "Aceite lubricante en spray para mecanismos, bisagras y herramientas."], ["Capacidad", "200 ml"], ["Colores", "Único"]], icon: cleaningIcon("#00539F") },
  { cat: "cleaning", type: "Spray", brand: "Ewent", brandCode: "E", brandColor: "#1F5FD0", model: "Ewent alcohol isopropílico en spray", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/ewen-alcohol-isopropilico-spray-unico_SpTV.webp", color: "Único", colors: [], info: [["tag", "Tipo", "Spray", 1], ["palette", "Color", "Único", 1]], specs: [["Categoría", "Spray"], ["Marca", "Ewent"], ["Descripción", "Alcohol isopropílico en spray para limpiar electrónica y contactos."], ["Capacidad", "400 ml"], ["Colores", "Único"]], icon: cleaningIcon("#1F5FD0") },
  { cat: "cleaning", type: "Spray", brand: "Sanytol", brandCode: "S", brandColor: "#00A3E0", model: "Sanytol spray desinfectante", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/sanytol-spray-unico_SpTV.webp", color: "Único", colors: [], info: [["tag", "Tipo", "Spray", 1], ["palette", "Color", "Único", 1]], specs: [["Categoría", "Spray"], ["Marca", "Sanytol"], ["Descripción", "Desinfectante en spray para superficies y tejidos."], ["Capacidad", "750 ml"], ["Colores", "Único"]], icon: cleaningIcon("#00A3E0") },
  { cat: "cleaning", type: "Gamuza / paño", brand: "Zeiss", brandCode: "Z", brandColor: "#0072EF", model: "Gamuza de microfibra Zeiss", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/zeiss-gamuza-unico_SpTV.webp", color: "Único", colors: [], info: [["tag", "Tipo", "Gamuza / paño", 1], ["palette", "Color", "Único", 1]], specs: [["Categoría", "Gamuza / paño"], ["Marca", "Zeiss"], ["Descripción", "Gamuza de microfibra para limpiar ópticas, gafas y pantallas."], ["Medida", "30 × 40 cm"], ["Colores", "Único"]], icon: cleaningIcon("#0072EF") },
  { cat: "cleaning", type: "Gamuza / paño", brand: "Hama", brandCode: "H", brandColor: "#E2001A", model: "Hama gamuza pocket de neopreno", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/hama-gamuza-pocket-unico_SpTV.webp", color: "Único", colors: [], info: [["tag", "Tipo", "Gamuza / paño", 1], ["palette", "Color", "Único", 1]], specs: [["Categoría", "Gamuza / paño"], ["Marca", "Hama"], ["Descripción", "Gamuza de limpieza en funda de neopreno con mosquetón, para llevarla colgada."], ["Medida", "15 × 15 cm"], ["Colores", "Único"]], icon: cleaningIcon("#E2001A") },
  { cat: "cleaning", type: "Gamuza / paño", brand: "Hama", brandCode: "H", brandColor: "#E2001A", model: "Hama gamuza especial lentes", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/hama-gamuza-lentes-unico_SpTV.webp", color: "Único", colors: [], info: [["tag", "Tipo", "Gamuza / paño", 1], ["palette", "Color", "Único", 1]], specs: [["Categoría", "Gamuza / paño"], ["Marca", "Hama"], ["Descripción", "Gamuza de microfibra especial para objetivos y filtros."], ["Medida", "15 × 15 cm"], ["Colores", "Único"]], icon: cleaningIcon("#E2001A") },
  { cat: "cleaning", type: "Gamuza / paño", brand: "", brandCode: "", brandColor: "#5C6672", model: "Gamuza de microfibra premium", photo: "", color: "Gris|Negro", colors: [], info: [["tag", "Tipo", "Gamuza / paño", 1], ["palette", "Colores", "2 colores", 1]], specs: [["Categoría", "Gamuza / paño"], ["Descripción", "Gamuza de microfibra de alta calidad para ópticas, pantallas y equipos."], ["Medida", "30 × 30 cm"], ["Colores", "Gris · Negro"]], icon: cleaningIcon("#5C6672") },
  { cat: "cleaning", type: "Gamuza / paño", brand: "Foogy", brandCode: "F", brandColor: "#1A1A1A", model: "Foogy paño antivaho", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/foogy-pano-antivaho-unico_SpTV.webp", color: "Único", colors: [], info: [["tag", "Tipo", "Gamuza / paño", 1], ["palette", "Color", "Único", 1]], specs: [["Categoría", "Gamuza / paño"], ["Marca", "Foogy"], ["Descripción", "Paño que evita que las gafas se empañen (mascarilla, frío, lluvia)."], ["Uso", "Gafas y visores"], ["Colores", "Único"]], icon: cleaningIcon("#1A1A1A") },
  { cat: "cleaning", type: "Gamuza / paño", brand: "Kimberly-Clark", brandCode: "K", brandColor: "#1D4F91", model: "Kimtech Science 05511", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/kimtech-science-05511-unico_SpTV.webp", color: "Único", colors: [], info: [["tag", "Tipo", "Gamuza / paño", 1], ["palette", "Color", "Único", 1]], specs: [["Categoría", "Gamuza / paño"], ["Marca", "Kimberly-Clark"], ["Descripción", "Toallitas de precisión que no sueltan pelusa, para limpiar ópticas, sensores y piezas delicadas."], ["Formato", "Caja de 286 unidades"], ["Colores", "Único"]], icon: cleaningIcon("#1D4F91") },
  { cat: "cleaning", type: "Gamuza / paño", brand: "", brandCode: "", brandColor: "#5C6672", model: "Trapo de microfibra", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/trapo-microfibra-unico_SpTV.webp", color: "Único", colors: [], info: [["tag", "Tipo", "Gamuza / paño", 1], ["palette", "Color", "Único", 1]], specs: [["Categoría", "Gamuza / paño"], ["Descripción", "Trapo de microfibra para limpieza general de equipos y superficies."], ["Material", "Microfibra"], ["Colores", "Único"]], icon: cleaningIcon("#5C6672") },
  { cat: "cleaning", type: "Toallitas", brand: "Rosco", brandCode: "R", brandColor: "#E2001A", model: "Rosco tissues para lentes", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/rosco-lens-tissue-unico_SpTV.webp", color: "Único", colors: [], info: [["tag", "Tipo", "Toallitas", 1], ["palette", "Color", "Único", 1]], specs: [["Categoría", "Toallitas"], ["Marca", "Rosco"], ["Descripción", "Papel especial para limpiar lentes sin rayarlas."], ["Formato", "100 hojas"], ["Colores", "Único"]], icon: cleaningIcon("#E2001A") },
  { cat: "cleaning", type: "Toallitas", brand: "Hama", brandCode: "H", brandColor: "#E2001A", model: "Hama toallitas para pantallas", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/hama-toallitas-pantallas-unico_SpTV.webp", color: "Único", colors: [], info: [["tag", "Tipo", "Toallitas", 1], ["palette", "Color", "Único", 1]], specs: [["Categoría", "Toallitas"], ["Marca", "Hama"], ["Descripción", "Toallitas húmedas para limpiar pantallas y monitores."], ["Formato", "Caja de 100 unidades"], ["Colores", "Único"]], icon: cleaningIcon("#E2001A") },
  { cat: "cleaning", type: "Toallitas", brand: "Apli", brandCode: "A", brandColor: "#E2001A", model: "Apli toallitas para pantallas", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/apli-toallitas-pantallas-unico_SpTV.webp", color: "Único", colors: [], info: [["tag", "Tipo", "Toallitas", 1], ["palette", "Color", "Único", 1], ["capacity", "Formatos", "Sin alcohol (100 ud) · Con alcohol (20 ud)"]], specs: [["Categoría", "Toallitas"], ["Marca", "Apli"], ["Descripción", "Toallitas para limpiar pantallas, con o sin alcohol."], ["Formatos", "Sin alcohol: caja de 100 · con alcohol: caja de 20"], ["Colores", "Único"]], icon: cleaningIcon("#E2001A") },
  { cat: "cleaning", type: "Toallitas", brand: "Dodot", brandCode: "D", brandColor: "#00A0DF", model: "Dodot Aqua Pure", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/dodot-aqua-pure-unico_SpTV.webp", color: "Único", colors: [], info: [["tag", "Tipo", "Toallitas", 1], ["palette", "Color", "Único", 1]], specs: [["Categoría", "Toallitas"], ["Marca", "Dodot"], ["Descripción", "Toallitas húmedas con un 99 % de agua, suaves para piel y maquillaje."], ["Formato", "48 unidades"], ["Colores", "Único"]], icon: cleaningIcon("#00A0DF") },
  { cat: "cleaning", type: "Toallitas", brand: "Sanytol", brandCode: "S", brandColor: "#00A3E0", model: "Sanytol toallitas desinfectantes", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/sanytol-toallitas-unico_SpTV.webp", color: "Único", colors: [], info: [["tag", "Tipo", "Toallitas", 1], ["palette", "Color", "Único", 1]], specs: [["Categoría", "Toallitas"], ["Marca", "Sanytol"], ["Descripción", "Toallitas desinfectantes para superficies y objetos."], ["Uso", "Superficies"], ["Colores", "Único"]], icon: cleaningIcon("#00A3E0") },
  { cat: "cleaning", type: "Kit de limpieza", brand: "Green Clean", brandCode: "G", brandColor: "#2E9E44", model: "Green Clean Full Frame SC-6000", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/green-clean-sc-6000-unico_SpTV.webp", color: "Único", colors: [], info: [["tag", "Tipo", "Kit de limpieza", 1], ["palette", "Color", "Único", 1]], specs: [["Categoría", "Kit de limpieza"], ["Marca", "Green Clean"], ["Descripción", "Kit profesional de limpieza de sensores full frame."], ["Uso", "Sensores full frame"], ["Colores", "Único"]], icon: cleaningIcon("#2E9E44") },
  { cat: "cleaning", type: "Kit de limpieza", brand: "Green Clean", brandCode: "G", brandColor: "#2E9E44", model: "Green Clean CS-1500", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/green-clean-cs-1500-unico_SpTV.webp", color: "Único", colors: [], info: [["tag", "Tipo", "Kit de limpieza", 1], ["palette", "Color", "Único", 1]], specs: [["Categoría", "Kit de limpieza"], ["Marca", "Green Clean"], ["Descripción", "Kit de limpieza completo para cámara y ópticas. Novedad."], ["Incluye", "Pera, pincel, gamuza, líquido y bastoncillos"], ["Colores", "Único"]], icon: cleaningIcon("#2E9E44") },
  { cat: "cleaning", type: "Kit de limpieza", brand: "Hama", brandCode: "H", brandColor: "#E2001A", model: "Kit de limpieza Hama", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/hama-kit-limpieza-unico_SpTV.webp", color: "Único", colors: [], info: [["tag", "Tipo", "Kit de limpieza", 1], ["palette", "Color", "Único", 1]], specs: [["Categoría", "Kit de limpieza"], ["Marca", "Hama"], ["Descripción", "Kit básico de limpieza para cámaras y objetivos."], ["Incluye", "Pera, pincel, papel y líquido"], ["Colores", "Único"]], icon: cleaningIcon("#E2001A") },
  { cat: "cleaning", type: "Kit de limpieza", brand: "JJC", brandCode: "J", brandColor: "#1A1A1A", model: "JJC CL-3", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/jjc-cl-3-unico_SpTV.webp", color: "Único", colors: [], info: [["tag", "Tipo", "Kit de limpieza", 1], ["palette", "Color", "Único", 1]], specs: [["Categoría", "Kit de limpieza"], ["Marca", "JJC"], ["Descripción", "Kit de limpieza compacto para cámara y ópticas."], ["Incluye", "Pera, gamuza y pincel"], ["Colores", "Único"]], icon: cleaningIcon("#1A1A1A") },
  { cat: "cleaning", type: "Kit de limpieza", brand: "Photographic Solutions", brandCode: "PS", brandColor: "#1A1A1A", model: "Kit de limpieza de sensor Eclipse tipo 3", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/eclipse-kit-sensor-unico_SpTV.webp", color: "Único", colors: [], info: [["tag", "Tipo", "Kit de limpieza", 1], ["palette", "Color", "Único", 1]], specs: [["Categoría", "Kit de limpieza"], ["Marca", "Photographic Solutions"], ["Descripción", "Kit para limpiar sensores de 24 mm (full frame)."], ["Incluye", "4 Sensor Swab Ultra tipo 3 · Eclipse 15 ml · 10 PEC*PAD · 1 paquete de e-wipe"], ["Colores", "Único"]], icon: cleaningIcon("#1A1A1A") },
  { cat: "cleaning", type: "Kit de limpieza", brand: "Zeiss", brandCode: "Z", brandColor: "#0072EF", model: "Kit de limpieza Zeiss", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/zeiss-kit-limpieza-unico_SpTV.webp", color: "Único", colors: [], info: [["tag", "Tipo", "Kit de limpieza", 1], ["palette", "Color", "Único", 1]], specs: [["Categoría", "Kit de limpieza"], ["Marca", "Zeiss"], ["Descripción", "Kit de limpieza de ópticas de Zeiss."], ["Uso", "Objetivos, gafas y pantallas"], ["Colores", "Único"]], icon: cleaningIcon("#0072EF") },
  { cat: "cleaning", type: "Bastoncillos", brand: "Green Clean", brandCode: "G", brandColor: "#2E9E44", model: "Green Clean bastoncillos Wet & Dry", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/green-clean-bastoncillos-unico_SpTV.webp", color: "Único", colors: [], info: [["tag", "Tipo", "Bastoncillos", 1], ["palette", "Color", "Único", 1], ["capacity", "Formatos", "Full Frame · Non Full Frame"]], specs: [["Categoría", "Bastoncillos"], ["Marca", "Green Clean"], ["Descripción", "Bastoncillos húmedo y seco para limpiar el sensor en dos pasos."], ["Modelos", "Full Frame 6060 · Non Full Frame 6070"], ["Formato", "4 unidades"], ["Colores", "Único"]], icon: cleaningIcon("#2E9E44") },
  { cat: "cleaning", type: "Bastoncillos", brand: "Photographic Solutions", brandCode: "PS", brandColor: "#1A1A1A", model: "Photographic Solutions Sensor Swab", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/photosol-sensor-swab-unico_SpTV.webp", color: "Único", colors: [], info: [["tag", "Tipo", "Bastoncillos", 1], ["palette", "Color", "Único", 1]], specs: [["Categoría", "Bastoncillos"], ["Marca", "Photographic Solutions"], ["Descripción", "Bastoncillos para limpieza de sensores de 24 mm (tipo 3)."], ["Formato", "12 unidades"], ["Tamaño", "Tipo 3 · 24 mm"], ["Colores", "Único"]], icon: cleaningIcon("#1A1A1A") },
  { cat: "cleaning", type: "Brocha / cepillo", brand: "EDM", brandCode: "E", brandColor: "#E30613", model: "Brocha", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/brocha-edm-unico_SpTV.webp", color: "Único", colors: [], info: [["tag", "Tipo", "Brocha / cepillo", 1], ["palette", "Color", "Único", 1], ["capacity", "Formatos", "Estándar · EDM 40 mm"]], specs: [["Categoría", "Brocha / cepillo"], ["Marca", "EDM"], ["Descripción", "Brocha para quitar el polvo de equipos, rejillas y superficies."], ["Modelos", "Brocha estándar · EDM triple sintética 40 mm"], ["Colores", "Único"]], icon: cleaningIcon("#E30613") },
  { cat: "cleaning", type: "Brocha / cepillo", brand: "MLB", brandCode: "M", brandColor: "#5C6672", model: "Cepillo para bujías MLB", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/mlb-cepillo-bujias-unico_SpTV.webp", color: "Único", colors: [], info: [["tag", "Tipo", "Brocha / cepillo", 1], ["palette", "Color", "Único", 1]], specs: [["Categoría", "Brocha / cepillo"], ["Marca", "MLB"], ["Descripción", "Cepillo de púas de acero para limpiar contactos, bornes y piezas metálicas."], ["Púas", "Acero"], ["Colores", "Único"]], icon: cleaningIcon("#5C6672") },
  { cat: "cleaning", type: "Papel", brand: "", brandCode: "", brandColor: "#5C6672", model: "Rollo de papel de cocina", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/rollo-papel-cocina-blanco_SpTV.webp", color: "Blanco", colors: [], info: [["tag", "Tipo", "Papel", 1], ["palette", "Color", "Blanco", 1]], specs: [["Categoría", "Papel"], ["Descripción", "Papel absorbente de uso general."], ["Color", "Blanco"], ["Colores", "Blanco"]], icon: cleaningIcon("#5C6672") },
  { cat: "cleaning", type: "Papel", brand: "", brandCode: "", brandColor: "#5C6672", model: "Rollo de papel industrial", photo: "", color: "Blanco|Azul", colors: [], info: [["tag", "Tipo", "Papel", 1], ["palette", "Colores", "2 colores", 1]], specs: [["Categoría", "Papel"], ["Descripción", "Bobina de papel de celulosa para limpieza en taller, plató y almacén."], ["Material", "Celulosa"], ["Colores", "Blanco · Azul"]], icon: cleaningIcon("#5C6672") }
];

// MARKS: purchase catalogue, official photos and free-licence photos.
// colors: one photo per colour; the dots on the card swap the photo (generated by tools/build_sonido_data.py)
const MARKS = [
  { cat: "marks", type: "Marca de tela", brand: "Modern Studio", brandCode: "", brandColor: "#5C6672", model: "Modern Studio marca salchicha", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/marca-salchicha-amarillo_SpTV.webp", color: "Amarillo|Azul|Blanco|Naranja|Morado|Negro|Rojo|Rosa|Verde", colors: [{"name": "Amarillo", "hex": "#F2C200", "photo": "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/marca-salchicha-amarillo_SpTV.webp"}, {"name": "Azul", "hex": "#1F5FD0", "photo": "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/marca-salchicha-azul_SpTV.webp"}, {"name": "Blanco", "hex": "#FFFFFF", "photo": "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/marca-salchicha-blanco_SpTV.webp"}, {"name": "Naranja", "hex": "#F07A1A", "photo": "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/marca-salchicha-naranja_SpTV.webp"}, {"name": "Morado", "hex": "#7B3FA0", "photo": "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/marca-salchicha-morado_SpTV.webp"}, {"name": "Negro", "hex": "#1A1A1A", "photo": "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/marca-salchicha-negro_SpTV.webp"}, {"name": "Rojo", "hex": "#D0202E", "photo": "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/marca-salchicha-rojo_SpTV.webp"}, {"name": "Rosa", "hex": "#F6B3CF", "photo": "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/marca-salchicha-rosa_SpTV.webp"}, {"name": "Verde", "hex": "#1E9C46", "photo": "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/marca-salchicha-verde_SpTV.webp"}], info: [["tag", "Tipo", "Marca de tela", 1], ["palette", "Colores", "9 colores", 1]], specs: [["Categoría", "Marca de tela"], ["Marca", "Modern Studio"], ["Descripción", "Marca de suelo de tela con forma alargada (salchicha) para señalar la posición de los actores y el foco; se ve bien y no resbala."], ["Material", "Tela"], ["Colores", "9 colores"], ["Colores", "Amarillo · Azul · Blanco · Naranja · Morado · Negro · Rojo · Rosa · Verde"]], icon: marksIcon("#5C6672") },
  { cat: "marks", type: "Marca de tela", brand: "Modern Studio", brandCode: "", brandColor: "#5C6672", model: "Modern Studio marca en T de tela", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/marca-t-tela-amarillo_SpTV.webp", color: "Amarillo|Azul|Blanco|Naranja|Morado|Negro|Rojo|Rosa|Verde", colors: [{"name": "Amarillo", "hex": "#F2C200", "photo": "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/marca-t-tela-amarillo_SpTV.webp"}, {"name": "Azul", "hex": "#1F5FD0", "photo": "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/marca-t-tela-azul_SpTV.webp"}, {"name": "Blanco", "hex": "#FFFFFF", "photo": "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/marca-t-tela-blanco_SpTV.webp"}, {"name": "Naranja", "hex": "#F07A1A", "photo": "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/marca-t-tela-naranja_SpTV.webp"}, {"name": "Morado", "hex": "#7B3FA0", "photo": "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/marca-t-tela-morado_SpTV.webp"}, {"name": "Negro", "hex": "#1A1A1A", "photo": "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/marca-t-tela-negro_SpTV.webp"}, {"name": "Rojo", "hex": "#D0202E", "photo": "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/marca-t-tela-rojo_SpTV.webp"}, {"name": "Rosa", "hex": "#F6B3CF", "photo": "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/marca-t-tela-rosa_SpTV.webp"}, {"name": "Verde", "hex": "#1E9C46", "photo": "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/marca-t-tela-verde_SpTV.webp"}], info: [["tag", "Tipo", "Marca de tela", 1], ["palette", "Colores", "9 colores", 1]], specs: [["Categoría", "Marca de tela"], ["Marca", "Modern Studio"], ["Descripción", "Marca en forma de T de tela para señalar en el suelo la posición de los actores y las distancias de foco."], ["Forma", "T"], ["Material", "Tela"], ["Colores", "9 colores"], ["Colores", "Amarillo · Azul · Blanco · Naranja · Morado · Negro · Rojo · Rosa · Verde"]], icon: marksIcon("#5C6672") },
  { cat: "marks", type: "Marca en T", brand: "CGE Tools", brandCode: "", brandColor: "#5C6672", model: "CGE Tools Industry Mark T flúor", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/cge-marca-t-fluor-naranja_SpTV.webp", color: "Flúor naranja|Flúor rosa|Flúor verde", colors: [{"name": "Flúor naranja", "hex": "#FF6A00", "photo": "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/cge-marca-t-fluor-naranja_SpTV.webp"}, {"name": "Flúor rosa", "hex": "#FF2D95", "photo": "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/cge-marca-t-fluor-rosa_SpTV.webp"}, {"name": "Flúor verde", "hex": "#5CFF2E", "photo": "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/cge-marca-t-fluor-verde_SpTV.webp"}], info: [["tag", "Tipo", "Marca en T", 1], ["palette", "Colores", "3 colores", 1]], specs: [["Categoría", "Marca en T"], ["Marca", "CGE Tools"], ["Descripción", "Marca en T rígida de acero recubierto de PVC en colores flúor, muy visible y duradera."], ["Forma", "T"], ["Material", "Acero / PVC"], ["Colores", "Flúor naranja · Flúor rosa · Flúor verde"]], icon: marksIcon("#5C6672") },
  { cat: "marks", type: "Marca en T", brand: "Focus Rat", brandCode: "FR", brandColor: "#1A1A1A", model: "Focus Rat marca en T", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/focus-rat-t_SpTV.webp", color: "Amarillo|Azul oscuro|Naranja|Morado|Rojo|Rosa|Verde claro brillante|Verde oscuro", colors: [], info: [["tag", "Tipo", "Marca en T", 1], ["palette", "Colores", "8 colores", 1]], specs: [["Categoría", "Marca en T"], ["Marca", "Focus Rat"], ["Descripción", "Marca en T de silicona lavable, flexible y con peso para que no se mueva del suelo."], ["Forma", "T"], ["Material", "Silicona lavable"], ["Colores", "Amarillo · Azul oscuro · Naranja · Morado · Rojo · Rosa · Verde claro brillante · Verde oscuro"]], icon: marksIcon("#1A1A1A") },
  { cat: "marks", type: "Marca luminosa", brand: "", brandCode: "", brandColor: "#5C6672", model: "Bastón de pesca luminoso", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/baston-pesca-luminoso-luminoso_SpTV.webp", color: "Luminoso", colors: [], info: [["tag", "Tipo", "Marca luminosa", 1], ["palette", "Color", "Luminoso", 1]], specs: [["Categoría", "Marca luminosa"], ["Descripción", "Barritas luminosas de pesca (luz química) para marcar posiciones en rodajes nocturnos o con poca luz."], ["Formato", "Pack de 5 unidades"], ["Tamaño", "37 mm"], ["Colores", "Luminoso"]], icon: marksIcon("#5C6672") },
  { cat: "marks", type: "Marca de suelo", brand: "", brandCode: "", brandColor: "#5C6672", model: "Tees de madera", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/tees-madera-varios-colores_SpTV.webp", color: "Varios colores", colors: [], info: [["tag", "Tipo", "Marca de suelo", 1], ["palette", "Color", "Varios colores", 1]], specs: [["Categoría", "Marca de suelo"], ["Descripción", "Tees de madera de colores que se clavan en el césped o la tierra para marcar posiciones en exteriores."], ["Material", "Madera"], ["Colores", "Varios colores"], ["Colores", "Varios colores"]], icon: marksIcon("#5C6672") },
  { cat: "marks", type: "Pegatinas", brand: "Dylan Stoel", brandCode: "D", brandColor: "#5C6672", model: "Pegatinas de marca Dylan Stoel", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/dylan-stoel-pegatinas-multicolor_SpTV.webp", color: "Multicolor|Multicolor transparente", colors: [{"name": "Multicolor", "hex": "#E9A23B", "photo": "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/dylan-stoel-pegatinas-multicolor_SpTV.webp"}, {"name": "Multicolor transparente", "hex": "#BFE3F2", "photo": "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/dylan-stoel-pegatinas-multicolor-transparente_SpTV.webp"}], info: [["tag", "Tipo", "Pegatinas", 1], ["palette", "Colores", "2 colores", 1]], specs: [["Categoría", "Pegatinas"], ["Marca", "Dylan Stoel"], ["Descripción", "Pegatinas de colores para marcar posiciones y referencias de foco, opacas o transparentes."], ["Versiones", "Multicolor no transparente · multicolor transparente"], ["Formato", "100 unidades"], ["Colores", "Multicolor · Multicolor transparente"]], icon: marksIcon("#5C6672") }
];

// FASTENING: purchase catalogue, official photos and free-licence photos.
// colors: one photo per colour; the dots on the card swap the photo (generated by tools/build_sonido_data.py)
const FASTENING = [
  { cat: "fastening", type: "Brida", brand: "Bongo Ties", brandCode: "B", brandColor: "#1A1A1A", model: "Bongo Ties", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/bongo-ties-negro_SpTV.webp", color: "Negro|Negro (madera negra)|Rojo|Azul|Verde", colors: [{"name": "Negro", "hex": "#1A1A1A", "photo": "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/bongo-ties-negro_SpTV.webp"}, {"name": "Negro (madera negra)", "hex": "#2B2118", "photo": "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/bongo-ties-negro-madera_SpTV.webp"}, {"name": "Rojo", "hex": "#D0202E", "photo": "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/bongo-ties-rojo_SpTV.webp"}, {"name": "Azul", "hex": "#1F5FD0", "photo": "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/bongo-ties-azul_SpTV.webp"}, {"name": "Verde", "hex": "#1E9C46", "photo": "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/bongo-ties-verde_SpTV.webp"}], info: [["tag", "Tipo", "Brida", 1], ["palette", "Colores", "5 colores", 1]], specs: [["Categoría", "Brida"], ["Marca", "Bongo Ties"], ["Descripción", "Brida elástica reutilizable con pieza de madera: recoge cables y sujeta material en segundos."], ["Formato", "Paquete de 10 unidades"], ["Colores", "Negro · Negro (madera negra) · Rojo · Azul · Verde"]], icon: fasteningIcon("#1A1A1A") },
  { cat: "fastening", type: "Brida", brand: "Procab", brandCode: "P", brandColor: "#E30613", model: "Bridas Procab", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/procab-bridas-negro_SpTV.webp", color: "Negro|Blanco", colors: [{"name": "Negro", "hex": "#1A1A1A", "photo": "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/procab-bridas-negro_SpTV.webp"}, {"name": "Blanco", "hex": "#FFFFFF", "photo": "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/procab-bridas-blanco_SpTV.webp"}], info: [["tag", "Tipo", "Brida", 1], ["palette", "Colores", "2 colores", 1], ["capacity", "Formatos", "200 × 3,6 mm · 360 × 4,8 mm"]], specs: [["Categoría", "Brida"], ["Marca", "Procab"], ["Descripción", "Bridas de nailon de un solo uso para sujetar cables."], ["Medidas", "Blanco: 200 × 3,6 mm · Negro: 200 × 3,6 mm y 360 × 4,8 mm"], ["Reutilizable", "No"], ["Colores", "Negro · Blanco"]], icon: fasteningIcon("#E30613") },
  { cat: "fastening", type: "Brida", brand: "Precygrap", brandCode: "P", brandColor: "#00539F", model: "Bridas Precygrap", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/precygrap-bridas-negro_SpTV.webp", color: "Negro|Blanco", colors: [{"name": "Negro", "hex": "#1A1A1A", "photo": "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/precygrap-bridas-negro_SpTV.webp"}, {"name": "Blanco", "hex": "#FFFFFF", "photo": "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/precygrap-bridas-blanco_SpTV.webp"}], info: [["tag", "Tipo", "Brida", 1], ["palette", "Colores", "2 colores", 1], ["capacity", "Formatos", "200 × 4,8 mm · 300 × 4,8 mm · 370 × 4,8 mm"]], specs: [["Categoría", "Brida"], ["Marca", "Precygrap"], ["Descripción", "Bridas de nailon de un solo uso, resistentes, para cableado."], ["Medidas", "Blanco: 200 × 4,8 y 300 × 4,8 mm · Negro: 200 × 4,8, 300 × 4,8 y 370 × 4,8 mm"], ["Reutilizable", "No"], ["Colores", "Negro · Blanco"]], icon: fasteningIcon("#00539F") },
  { cat: "fastening", type: "Brida", brand: "", brandCode: "", brandColor: "#5C6672", model: "Bridas negras", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/bridas-negras-negro_SpTV.webp", color: "Negro", colors: [], info: [["tag", "Tipo", "Brida", 1], ["palette", "Color", "Negro", 1], ["capacity", "Formatos", "100 × 2,5 mm · 250 × 3,6 mm · 370 × 7,6 mm"]], specs: [["Categoría", "Brida"], ["Descripción", "Bridas negras de nailon de un solo uso."], ["Medidas", "100 × 2,5 · 250 × 3,6 · 370 × 7,6 mm"], ["Reutilizable", "No"], ["Colores", "Negro"]], icon: fasteningIcon("#5C6672") },
  { cat: "fastening", type: "Brida", brand: "StarTech", brandCode: "S", brandColor: "#0B6EB5", model: "Bridas reutilizables StarTech", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/startech-bridas-reutilizables-negro_SpTV.webp", color: "Negro", colors: [], info: [["tag", "Tipo", "Brida", 1], ["palette", "Color", "Negro", 1]], specs: [["Categoría", "Brida"], ["Marca", "StarTech"], ["Descripción", "Bridas de nailon que se pueden abrir y volver a usar."], ["Medida", "150 × 7,6 mm"], ["Reutilizable", "Sí"], ["Colores", "Negro"]], icon: fasteningIcon("#0B6EB5") },
  { cat: "fastening", type: "Brida", brand: "Precygrap", brandCode: "P", brandColor: "#00539F", model: "Bridas reutilizables Precygrap", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/precygrap-bridas-reutilizables-negro_SpTV.webp", color: "Negro", colors: [], info: [["tag", "Tipo", "Brida", 1], ["palette", "Color", "Negro", 1], ["capacity", "Formatos", "200 × 7,6 mm · 300 × 7,6 mm · 370 × 7,6 mm"]], specs: [["Categoría", "Brida"], ["Marca", "Precygrap"], ["Descripción", "Bridas de nailon reutilizables, con lengüeta para soltarlas."], ["Medidas", "200 × 7,6 · 300 × 7,6 · 370 × 7,6 mm"], ["Reutilizable", "Sí"], ["Colores", "Negro"]], icon: fasteningIcon("#00539F") },
  { cat: "fastening", type: "Brida", brand: "VELCRO", brandCode: "V", brandColor: "#1A1A1A", model: "VELCRO ONE-WRAP bridas", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/velcro-one-wrap-negro_SpTV.webp", color: "Negro", colors: [], info: [["tag", "Tipo", "Brida", 1], ["palette", "Color", "Negro", 1]], specs: [["Categoría", "Brida"], ["Marca", "VELCRO"], ["Descripción", "Bridas de velcro reutilizables para recoger y ordenar cables."], ["Medida", "20 × 200 mm"], ["Formato", "25 unidades"], ["Colores", "Negro"]], icon: fasteningIcon("#1A1A1A") },
  { cat: "fastening", type: "Brida", brand: "Kupo", brandCode: "K", brandColor: "#E30613", model: "Kupo MEZ220 brida de velcro", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/kupo-mez220-negro_SpTV.webp", color: "Negro", colors: [], info: [["tag", "Tipo", "Brida", 1], ["palette", "Color", "Negro", 1]], specs: [["Categoría", "Brida"], ["Marca", "Kupo"], ["Descripción", "Brida de velcro reutilizable para cables y mangueras."], ["Medida", "2 × 20 cm"], ["Colores", "Negro"]], icon: fasteningIcon("#E30613") },
  { cat: "fastening", type: "Brida", brand: "3M", brandCode: "3M", brandColor: "#E2231A", model: "Base adhesiva para bridas 3M", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/3m-base-bridas-negro_SpTV.webp", color: "Negro", colors: [], info: [["tag", "Tipo", "Brida", 1], ["palette", "Color", "Negro", 1], ["capacity", "Formatos", "19 × 19 mm · 28 × 28 mm"]], specs: [["Categoría", "Brida"], ["Marca", "3M"], ["Descripción", "Base autoadhesiva para fijar bridas a cualquier superficie lisa."], ["Medidas", "19 × 19 mm · 28 × 28 mm (para bridas de hasta 4,9 mm)"], ["Colores", "Negro"]], icon: fasteningIcon("#E2231A") },
  { cat: "fastening", type: "Clip / soporte de cable", brand: "", brandCode: "", brandColor: "#5C6672", model: "Cable clamp", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/cable-clamp-unico_SpTV.webp", color: "Único", colors: [], info: [["tag", "Tipo", "Clip / soporte de cable", 1], ["palette", "Color", "Único", 1]], specs: [["Categoría", "Clip / soporte de cable"], ["Descripción", "Abrazadera para sujetar mangueras y cables a estructuras."], ["Medidas", "7,7 × 7,5 × 1,3 cm"], ["Interior", "4,5 cm"], ["Colores", "Único"]], icon: fasteningIcon("#5C6672") },
  { cat: "fastening", type: "Cincha", brand: "", brandCode: "", brandColor: "#5C6672", model: "Cincha con carraca", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/cincha-carraca-unico_SpTV.webp", color: "Único", colors: [], info: [["tag", "Tipo", "Cincha", 1], ["palette", "Color", "Único", 1], ["capacity", "Formatos", "4 m · 6 m"]], specs: [["Categoría", "Cincha"], ["Descripción", "Cincha de amarre con carraca para asegurar material en el transporte."], ["Ancho", "2,5 cm"], ["Versiones", "Con gancho y carraca: 4 m y 6 m · con carraca: 4 m y 6 m"], ["Colores", "Único"]], icon: fasteningIcon("#5C6672") },
  { cat: "fastening", type: "Pulpo", brand: "", brandCode: "", brandColor: "#5C6672", model: "Pulpo con gancho", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/pulpo-gancho-unico_SpTV.webp", color: "Único", colors: [], info: [["tag", "Tipo", "Pulpo", 1], ["palette", "Color", "Único", 1], ["capacity", "Formatos", "35 cm · 50 cm · 60 cm · 65 cm · 80 cm · 1 m"]], specs: [["Categoría", "Pulpo"], ["Descripción", "Cuerda elástica con ganchos, resistente al agua, para sujetar lonas, fundas y material."], ["Largos", "35 · 50 · 60 · 65 · 80 cm · 1 m"], ["Colores", "Único"]], icon: fasteningIcon("#5C6672") },
  { cat: "fastening", type: "Eslinga / mosquetón", brand: "Kupo", brandCode: "K", brandColor: "#E30613", model: "Kupo SW04 eslinga", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/kupo-sw04-negro_SpTV.webp", color: "Negro", colors: [], info: [["tag", "Tipo", "Eslinga / mosquetón", 1], ["palette", "Color", "Negro", 1]], specs: [["Categoría", "Eslinga / mosquetón"], ["Marca", "Kupo"], ["Descripción", "Eslinga de seguridad reforzada con PVC para asegurar focos y accesorios."], ["Largo", "75 cm"], ["Colores", "Negro"]], icon: fasteningIcon("#E30613") },
  { cat: "fastening", type: "Eslinga / mosquetón", brand: "", brandCode: "", brandColor: "#5C6672", model: "Eslinga con mosquetones", photo: "", color: "Único", colors: [], info: [["tag", "Tipo", "Eslinga / mosquetón", 1], ["palette", "Color", "Único", 1]], specs: [["Categoría", "Eslinga / mosquetón"], ["Descripción", "Eslinga corta con mosquetones para asegurar material en altura."], ["Largo", "30 cm"], ["Colores", "Único"]], icon: fasteningIcon("#5C6672") },
  { cat: "fastening", type: "Eslinga / mosquetón", brand: "Dirty Rigger", brandCode: "DR", brandColor: "#1A1A1A", model: "Dirty Rigger mosquetón para cintas", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/dirty-rigger-mosqueton-negro_SpTV.webp", color: "Negro", colors: [], info: [["tag", "Tipo", "Eslinga / mosquetón", 1], ["palette", "Color", "Negro", 1]], specs: [["Categoría", "Eslinga / mosquetón"], ["Marca", "Dirty Rigger"], ["Descripción", "Cinta con hebilla y mosquetón para colgar y llevar cintas adhesivas y herramientas."], ["Incluye", "Hebilla y mosquetón"], ["Colores", "Negro"]], icon: fasteningIcon("#1A1A1A") },
  { cat: "fastening", type: "Alambre / cuerda", brand: "", brandCode: "", brandColor: "#5C6672", model: "Rollo de alambre", photo: "", color: "Único", colors: [], info: [["tag", "Tipo", "Alambre / cuerda", 1], ["palette", "Color", "Único", 1], ["capacity", "Formatos", "0,65 mm × 96 m · 1 mm × 50 m · Aluminio 1,5 mm × 5 m"]], specs: [["Categoría", "Alambre / cuerda"], ["Descripción", "Alambre para atar y asegurar en montajes."], ["Versiones", "Acero galvanizado 0,65 mm × 96 m · acero galvanizado 1 mm × 50 m · aluminio 1,5 mm × 5 m"], ["Colores", "Único"]], icon: fasteningIcon("#5C6672") },
  { cat: "fastening", type: "Alambre / cuerda", brand: "", brandCode: "", brandColor: "#5C6672", model: "Cordino negro", photo: "", color: "Negro", colors: [], info: [["tag", "Tipo", "Alambre / cuerda", 1], ["palette", "Color", "Negro", 1], ["capacity", "Formatos", "3 mm · 4 mm"]], specs: [["Categoría", "Alambre / cuerda"], ["Descripción", "Cordino negro para atar y colgar sin que se vea en plano."], ["Grosores", "3 mm · 4 mm"], ["Colores", "Negro"]], icon: fasteningIcon("#5C6672") },
  { cat: "fastening", type: "Alambre / cuerda", brand: "Kupo", brandCode: "K", brandColor: "#E30613", model: "Kupo 4506 cordón elástico con bola", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/kupo-4506-negro_SpTV.webp", color: "Negro", colors: [], info: [["tag", "Tipo", "Alambre / cuerda", 1], ["palette", "Color", "Negro", 1]], specs: [["Categoría", "Alambre / cuerda"], ["Marca", "Kupo"], ["Descripción", "Cordón elástico con bola para recoger cables y sujetar accesorios."], ["Referencia", "4506"], ["Colores", "Negro"]], icon: fasteningIcon("#E30613") },
  { cat: "fastening", type: "Clip / soporte de cable", brand: "Sprig", brandCode: "S", brandColor: "#2E9E44", model: "Sprig clips para cables", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/sprig-clips-negro_SpTV.webp", color: "Negro", colors: [], info: [["tag", "Tipo", "Clip / soporte de cable", 1], ["palette", "Color", "Negro", 1]], specs: [["Categoría", "Clip / soporte de cable"], ["Marca", "Sprig"], ["Descripción", "Clips para guiar y sujetar cables en mesa o pared."], ["Formato", "Pack de 6 unidades"], ["Colores", "Negro"]], icon: fasteningIcon("#2E9E44") },
  { cat: "fastening", type: "Imán", brand: "", brandCode: "", brandColor: "#5C6672", model: "Imán de neodimio", photo: "", color: "Único", colors: [], info: [["tag", "Tipo", "Imán", 1], ["palette", "Color", "Único", 1], ["capacity", "Formatos", "Gancho 22 kg · Gancho 38 kg · Ojal 36 kg · Ojal 65 kg"]], specs: [["Categoría", "Imán"], ["Descripción", "Imán de neodimio de gran fuerza para colgar o fijar material en superficies metálicas."], ["Versiones", "Gancho: 22 kg / 25 mm y 38 kg / 32 mm · Ojal: 36 kg / 32 mm y 65 kg / 42 mm"], ["Colores", "Único"]], icon: fasteningIcon("#5C6672") },
  { cat: "fastening", type: "Otros", brand: "", brandCode: "", brandColor: "#5C6672", model: "Núcleo de película", photo: "", color: "Único", colors: [], info: [["tag", "Tipo", "Otros", 1], ["palette", "Color", "Único", 1]], specs: [["Categoría", "Otros"], ["Descripción", "Núcleo de plástico para película de 35 mm; en rodaje se usa para enrollar cinta y cables."], ["Formato", "35 mm"], ["Colores", "Único"]], icon: fasteningIcon("#5C6672") },
  { cat: "fastening", type: "Pinza", brand: "", brandCode: "", brandColor: "#5C6672", model: "Pinza cocodrilo", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/pinza-cocodrilo-unico_SpTV.webp", color: "Único", colors: [], info: [["tag", "Tipo", "Pinza", 1], ["palette", "Color", "Único", 1]], specs: [["Categoría", "Pinza"], ["Descripción", "Pinza tipo cocodrilo para sujetar telas, gelatinas y cables."], ["Tipo", "Cocodrilo"], ["Colores", "Único"]], icon: fasteningIcon("#5C6672") },
  { cat: "fastening", type: "Pinza", brand: "Kupo", brandCode: "K", brandColor: "#E30613", model: "Kupo KCP347 pinzas de madera", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/kupo-kcp347-unico_SpTV.webp", color: "Único", colors: [], info: [["tag", "Tipo", "Pinza", 1], ["palette", "Color", "Único", 1]], specs: [["Categoría", "Pinza"], ["Marca", "Kupo"], ["Descripción", "Pinzas de madera (C-47) para fijar gelatinas y difusores a los focos."], ["Formato", "50 unidades"], ["Colores", "Único"]], icon: fasteningIcon("#E30613") },
  { cat: "fastening", type: "Pinza", brand: "", brandCode: "", brandColor: "#5C6672", model: "Pinzas de madera de 7 vueltas", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/pinza-madera-7-vueltas-unico_SpTV.webp", color: "Único", colors: [], info: [["tag", "Tipo", "Pinza", 1], ["palette", "Color", "Único", 1]], specs: [["Categoría", "Pinza"], ["Descripción", "Pinzas de madera con muelle reforzado de 7 vueltas."], ["Formato", "24 unidades"], ["Colores", "Único"]], icon: fasteningIcon("#5C6672") },
  { cat: "fastening", type: "Pinza", brand: "Piher", brandCode: "P", brandColor: "#E30613", model: "Piher 57025 pinza metálica", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/piher-57025-unico_SpTV.webp", color: "Único", colors: [], info: [["tag", "Tipo", "Pinza", 1], ["palette", "Color", "Único", 1]], specs: [["Categoría", "Pinza"], ["Marca", "Piher"], ["Descripción", "Pinza metálica de acero multiusos con puntas protectoras de polipropileno."], ["Largo", "11 cm"], ["Apertura", "2,5 cm / 3 cm"], ["Colores", "Único"]], icon: fasteningIcon("#E30613") },
  { cat: "fastening", type: "Pinza", brand: "Piher", brandCode: "P", brandColor: "#E30613", model: "Piher 30007 pinza metálica aislada", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/piher-30007-unico_SpTV.webp", color: "Único", colors: [], info: [["tag", "Tipo", "Pinza", 1], ["palette", "Color", "Único", 1]], specs: [["Categoría", "Pinza"], ["Marca", "Piher"], ["Descripción", "Pinza metálica con protectores de PVC."], ["Largo", "11 cm"], ["Apertura", "3,5 cm / 3 cm"], ["Colores", "Único"]], icon: fasteningIcon("#E30613") },
  { cat: "fastening", type: "Pinza", brand: "Piher", brandCode: "P", brandColor: "#E30613", model: "Piher pinza de plástico regulable", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/piher-pinza-plastico-unico_SpTV.webp", color: "Único", colors: [], info: [["tag", "Tipo", "Pinza", 1], ["palette", "Color", "Único", 1], ["capacity", "Formatos", "3 cm · 5 cm"]], specs: [["Categoría", "Pinza"], ["Marca", "Piher"], ["Descripción", "Pinza de nailon y fibra de vidrio con apertura regulable."], ["Modelos", "30910 (3 cm) · 30911 (5 cm)"], ["Colores", "Único"]], icon: fasteningIcon("#E30613") },
  { cat: "fastening", type: "Pinza", brand: "Wolfcraft", brandCode: "W", brandColor: "#E2001A", model: "Wolfcraft pinza de resorte PRO", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/wolfcraft-pro-unico_SpTV.webp", color: "Único", colors: [], info: [["tag", "Tipo", "Pinza", 1], ["palette", "Color", "Único", 1], ["capacity", "Formatos", "40 mm · 60 mm"]], specs: [["Categoría", "Pinza"], ["Marca", "Wolfcraft"], ["Descripción", "Pinza de plástico con resorte, fuerte y ligera."], ["Modelos", "FZ40 (40 mm) · FZ60 (60 mm)"], ["Colores", "Único"]], icon: fasteningIcon("#E2001A") },
  { cat: "fastening", type: "Pinza", brand: "", brandCode: "", brandColor: "#5C6672", model: "Pinza de plástico", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/pinza-plastico-unico_SpTV.webp", color: "Único", colors: [], info: [["tag", "Tipo", "Pinza", 1], ["palette", "Color", "Único", 1]], specs: [["Categoría", "Pinza"], ["Descripción", "Pinza de plástico no regulable."], ["Apertura", "2,4 cm"], ["Colores", "Único"]], icon: fasteningIcon("#5C6672") },
  { cat: "fastening", type: "Velcro", brand: "3M", brandCode: "3M", brandColor: "#E2231A", model: "3M Dual Lock", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/3m-dual-lock-negro_SpTV.webp", color: "Negro", colors: [], info: [["tag", "Tipo", "Velcro", 1], ["palette", "Color", "Negro", 1]], specs: [["Categoría", "Velcro"], ["Marca", "3M"], ["Descripción", "Cierre reutilizable de 3M, mucho más fuerte que el velcro, para fijar accesorios."], ["Ancho", "25,4 mm"], ["Colores", "Negro"]], icon: fasteningIcon("#E2231A") },
  { cat: "fastening", type: "Velcro", brand: "VELCRO", brandCode: "V", brandColor: "#1A1A1A", model: "Velcro macho-hembra", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/velcro-macho-hembra-unico_SpTV.webp", color: "Único", colors: [], info: [["tag", "Tipo", "Velcro", 1], ["palette", "Color", "Único", 1], ["capacity", "Formatos", "20 mm · 25 mm · 50 mm"]], specs: [["Categoría", "Velcro"], ["Marca", "VELCRO"], ["Descripción", "Cinta de velcro macho y hembra para fijar y recoger."], ["Anchos", "20 · 25 · 50 mm"], ["Colores", "Único"]], icon: fasteningIcon("#1A1A1A") },
  { cat: "fastening", type: "Velcro", brand: "StarTech", brandCode: "S", brandColor: "#0B6EB5", model: "StarTech velcro mágico", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/startech-velcro-magico-negro_SpTV.webp", color: "Negro|Azul|Verde|Rojo|Amarillo", colors: [{"name": "Negro", "hex": "#1A1A1A", "photo": "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/startech-velcro-magico-negro_SpTV.webp"}, {"name": "Azul", "hex": "#1F5FD0", "photo": "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/startech-velcro-magico-azul_SpTV.webp"}, {"name": "Verde", "hex": "#1E9C46", "photo": "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/startech-velcro-magico-verde_SpTV.webp"}, {"name": "Rojo", "hex": "#D0202E", "photo": "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/startech-velcro-magico-rojo_SpTV.webp"}, {"name": "Amarillo", "hex": "#F2C200", "photo": "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/startech-velcro-magico-amarillo_SpTV.webp"}], info: [["tag", "Tipo", "Velcro", 1], ["palette", "Colores", "5 colores", 1]], specs: [["Categoría", "Velcro"], ["Marca", "StarTech"], ["Descripción", "Rollo de velcro de doble cara para hacer bridas a medida."], ["Medida", "19 mm × 7,6 m"], ["Colores", "Negro · Azul · Verde · Rojo · Amarillo"]], icon: fasteningIcon("#0B6EB5") },
  { cat: "fastening", type: "Velcro", brand: "Kupo", brandCode: "K", brandColor: "#E30613", model: "Kupo velcro mágico", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/kupo-velcro-magico-negro_SpTV.webp", color: "Negro", colors: [], info: [["tag", "Tipo", "Velcro", 1], ["palette", "Color", "Negro", 1]], specs: [["Categoría", "Velcro"], ["Marca", "Kupo"], ["Descripción", "Rollo de velcro de doble cara para recoger cables."], ["Medida", "16 mm × 5 m"], ["Colores", "Negro"]], icon: fasteningIcon("#E30613") }
];

// TAPES: purchase catalogue, official photos from each brand's website.
// colors: one photo per colour; the dots on the card swap the photo (generated by tools/build_sonido_data.py)
const TAPES = [
  { cat: "tapes", type: "Cinta de cámara (gaffer)", brand: "tesa", brandCode: "t", brandColor: "#E2001A", model: "tesa 4661", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/tesa-4661-negro_SpTV.webp", color: "Negro|Blanco|Amarillo|Gris|Azul|Rojo", colors: [{"name": "Negro", "hex": "#1A1A1A", "photo": "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/tesa-4661-negro_SpTV.webp"}, {"name": "Blanco", "hex": "#FFFFFF", "photo": "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/tesa-4661-blanco_SpTV.webp"}, {"name": "Amarillo", "hex": "#F2C200", "photo": "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/tesa-4661-amarillo_SpTV.webp"}, {"name": "Gris", "hex": "#8A8F96", "photo": "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/tesa-4661-gris_SpTV.webp"}, {"name": "Azul", "hex": "#1F5FD0", "photo": "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/tesa-4661-azul_SpTV.webp"}, {"name": "Rojo", "hex": "#D0202E", "photo": "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/tesa-4661-rojo_SpTV.webp"}], info: [["tag", "Tipo", "Cinta de cámara (gaffer)", 1], ["palette", "Colores", "6 colores", 1], ["capacity", "Formatos", "25 mm × 50 m · 50 mm × 50 m"]], specs: [["Categoría", "Cinta de cámara (gaffer)"], ["Marca", "tesa"], ["Descripción", "Cinta de tela mate (gaffer) que se arranca a mano, no deja residuos y no refleja la luz. Calidad estándar de tesa para rodaje y escenario."], ["Medidas", "25 mm × 50 m · 50 mm × 50 m"], ["Colores 25 mm", "Blanco, negro, amarillo y gris"], ["Colores 50 mm", "Blanco, negro, amarillo, azul y rojo"], ["Colores", "Negro · Blanco · Amarillo · Gris · Azul · Rojo"]], icon: tapesIcon("#E2001A") },
  { cat: "tapes", type: "Cinta de cámara (gaffer)", brand: "tesa", brandCode: "t", brandColor: "#E2001A", model: "tesa 4651", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/tesa-4651-azul_SpTV.webp", color: "Azul|Rojo|Verde|Azul croma|Verde croma", colors: [{"name": "Azul", "hex": "#1F5FD0", "photo": "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/tesa-4651-azul_SpTV.webp"}, {"name": "Rojo", "hex": "#D0202E", "photo": "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/tesa-4651-rojo_SpTV.webp"}, {"name": "Verde", "hex": "#1E9C46", "photo": "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/tesa-4651-verde_SpTV.webp"}], info: [["tag", "Tipo", "Cinta de cámara (gaffer)", 1], ["palette", "Colores", "5 colores", 1], ["capacity", "Formatos", "25 mm × 50 m · 50 mm × 50 m"]], specs: [["Categoría", "Cinta de cámara (gaffer)"], ["Marca", "tesa"], ["Descripción", "Cinta de tela de alta resistencia; en 50 mm, colores croma para fondos azules y verdes."], ["Medidas", "25 mm × 50 m · 50 mm × 50 m"], ["Colores 25 mm", "Azul, rojo y verde"], ["Colores 50 mm", "Azul croma y verde croma"], ["Colores", "Azul · Rojo · Verde · Azul croma · Verde croma"]], icon: tapesIcon("#E2001A") },
  { cat: "tapes", type: "Cinta de cámara (gaffer)", brand: "tesa", brandCode: "t", brandColor: "#E2001A", model: "tesa 4671", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/tesa-4671-negro_SpTV.webp", color: "Negro|Blanco|Flúor rosa|Flúor naranja|Flúor verde|Flúor amarillo", colors: [{"name": "Negro", "hex": "#1A1A1A", "photo": "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/tesa-4671-negro_SpTV.webp"}, {"name": "Blanco", "hex": "#FFFFFF", "photo": "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/tesa-4671-blanco_SpTV.webp"}, {"name": "Flúor rosa", "hex": "#FF2D95", "photo": "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/tesa-4671-fluor-rosa_SpTV.webp"}, {"name": "Flúor naranja", "hex": "#FF6A00", "photo": "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/tesa-4671-fluor-naranja_SpTV.webp"}, {"name": "Flúor verde", "hex": "#5CFF2E", "photo": "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/tesa-4671-fluor-verde_SpTV.webp"}, {"name": "Flúor amarillo", "hex": "#E6FF00", "photo": "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/tesa-4671-fluor-amarillo_SpTV.webp"}], info: [["tag", "Tipo", "Cinta de cámara (gaffer)", 1], ["palette", "Colores", "6 colores", 1], ["capacity", "Formatos", "25 mm · 50 mm"]], specs: [["Categoría", "Cinta de cámara (gaffer)"], ["Marca", "tesa"], ["Descripción", "Cinta de tela mate (gaffer) que se arranca a mano, no deja residuos y no refleja la luz. Colores flúor muy visibles bajo luz negra y en oscuridad."], ["Medidas", "25 mm × 25 m (flúor) · 50 mm × 50 m (blanco y negro) · 50 mm × 25 m (flúor)"], ["Colores", "Negro · Blanco · Flúor rosa · Flúor naranja · Flúor verde · Flúor amarillo"]], icon: tapesIcon("#E2001A") },
  { cat: "tapes", type: "Cinta de cámara (gaffer)", brand: "tesa", brandCode: "t", brandColor: "#E2001A", model: "tesa 53949 gaffer mate", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/tesa-53949-negro_SpTV.webp", color: "Negro|Blanco|Gris", colors: [{"name": "Negro", "hex": "#1A1A1A", "photo": "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/tesa-53949-negro_SpTV.webp"}, {"name": "Blanco", "hex": "#FFFFFF", "photo": "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/tesa-53949-blanco_SpTV.webp"}, {"name": "Gris", "hex": "#8A8F96", "photo": "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/tesa-53949-gris_SpTV.webp"}], info: [["tag", "Tipo", "Cinta de cámara (gaffer)", 1], ["palette", "Colores", "3 colores", 1]], specs: [["Categoría", "Cinta de cámara (gaffer)"], ["Marca", "tesa"], ["Descripción", "Gaffer de acabado mate profesional, sin reflejos."], ["Medida", "50 mm × 50 m"], ["Colores", "Negro · Blanco · Gris"]], icon: tapesIcon("#E2001A") },
  { cat: "tapes", type: "Cinta de cámara (gaffer)", brand: "Progaff", brandCode: "P", brandColor: "#1A1A1A", model: "Progaff cinta de cámara 24 mm", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/progaff-estrecha-negro_SpTV.webp", color: "Negro|Blanco|Amarillo|Azul oscuro|Gris|Marrón|Morado|Rojo|Flúor rosa|Flúor verde|Flúor azul", colors: [{"name": "Negro", "hex": "#1A1A1A", "photo": "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/progaff-estrecha-negro_SpTV.webp"}, {"name": "Blanco", "hex": "#FFFFFF", "photo": "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/progaff-estrecha-blanco_SpTV.webp"}, {"name": "Amarillo", "hex": "#F2C200", "photo": "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/progaff-estrecha-amarillo_SpTV.webp"}, {"name": "Azul oscuro", "hex": "#1A2F7A", "photo": "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/progaff-estrecha-azul-oscuro_SpTV.webp"}, {"name": "Gris", "hex": "#8A8F96", "photo": "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/progaff-estrecha-gris_SpTV.webp"}, {"name": "Marrón", "hex": "#6B4A2B", "photo": "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/progaff-estrecha-marron_SpTV.webp"}, {"name": "Morado", "hex": "#7B3FA0", "photo": "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/progaff-estrecha-morado_SpTV.webp"}, {"name": "Rojo", "hex": "#D0202E", "photo": "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/progaff-estrecha-rojo_SpTV.webp"}, {"name": "Flúor rosa", "hex": "#FF2D95", "photo": "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/progaff-estrecha-fluor-rosa_SpTV.webp"}, {"name": "Flúor verde", "hex": "#5CFF2E", "photo": "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/progaff-estrecha-fluor-verde_SpTV.webp"}, {"name": "Flúor azul", "hex": "#00B7FF", "photo": "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/progaff-estrecha-fluor-azul_SpTV.webp"}], info: [["tag", "Tipo", "Cinta de cámara (gaffer)", 1], ["palette", "Colores", "11 colores", 1]], specs: [["Categoría", "Cinta de cámara (gaffer)"], ["Marca", "Progaff"], ["Descripción", "Cinta de tela mate (gaffer) que se arranca a mano, no deja residuos y no refleja la luz."], ["Medidas", "24 mm × 22,8 m · blanco 24 mm × 50 m · azul oscuro 24 mm × 55 m"], ["Colores", "Negro · Blanco · Amarillo · Azul oscuro · Gris · Marrón · Morado · Rojo · Flúor rosa · Flúor verde · Flúor azul"]], icon: tapesIcon("#1A1A1A") },
  { cat: "tapes", type: "Cinta de cámara (gaffer)", brand: "Nichiban", brandCode: "N", brandColor: "#E60012", model: "Nichiban cinta de cámara", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/nichiban-morado-morado_SpTV.webp", color: "Morado", colors: [], info: [["tag", "Tipo", "Cinta de cámara (gaffer)", 1], ["palette", "Color", "Morado", 1]], specs: [["Categoría", "Cinta de cámara (gaffer)"], ["Marca", "Nichiban"], ["Descripción", "Cinta de tela mate (gaffer) que se arranca a mano, no deja residuos y no refleja la luz."], ["Medida", "50 mm × 50 m"], ["Colores", "Morado"]], icon: tapesIcon("#E60012") },
  { cat: "tapes", type: "Cinta de cámara pocket", brand: "Progaff", brandCode: "P", brandColor: "#1A1A1A", model: "Progaff pocket", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/progaff-pocket-negro_SpTV.webp", color: "Negro|Blanco|Amarillo|Rojo|Flúor amarillo|Flúor azul|Flúor naranja|Flúor rosa|Flúor verde", colors: [{"name": "Negro", "hex": "#1A1A1A", "photo": "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/progaff-pocket-negro_SpTV.webp"}, {"name": "Blanco", "hex": "#FFFFFF", "photo": "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/progaff-pocket-blanco_SpTV.webp"}, {"name": "Amarillo", "hex": "#F2C200", "photo": "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/progaff-pocket-amarillo_SpTV.webp"}, {"name": "Rojo", "hex": "#D0202E", "photo": "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/progaff-pocket-rojo_SpTV.webp"}, {"name": "Flúor amarillo", "hex": "#E6FF00", "photo": "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/progaff-pocket-fluor-amarillo_SpTV.webp"}, {"name": "Flúor azul", "hex": "#00B7FF", "photo": "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/progaff-pocket-fluor-azul_SpTV.webp"}, {"name": "Flúor naranja", "hex": "#FF6A00", "photo": "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/progaff-pocket-fluor-naranja_SpTV.webp"}, {"name": "Flúor rosa", "hex": "#FF2D95", "photo": "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/progaff-pocket-fluor-rosa_SpTV.webp"}, {"name": "Flúor verde", "hex": "#5CFF2E", "photo": "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/progaff-pocket-fluor-verde_SpTV.webp"}], info: [["tag", "Tipo", "Cinta de cámara pocket", 1], ["palette", "Colores", "9 colores", 1], ["capacity", "Formatos", "5,5 m · Plus 11 m"]], specs: [["Categoría", "Cinta de cámara pocket"], ["Marca", "Progaff"], ["Descripción", "Rollo pequeño de gaffer para llevar encima."], ["Medidas", "24 mm × 5,5 m · Plus (negro) 24 mm × 11 m"], ["Colores", "Negro · Blanco · Amarillo · Rojo · Flúor amarillo · Flúor azul · Flúor naranja · Flúor rosa · Flúor verde"]], icon: tapesIcon("#1A1A1A") },
  { cat: "tapes", type: "Cinta de cámara pocket", brand: "Progaff", brandCode: "P", brandColor: "#1A1A1A", model: "Progaff MiniMix pack 5 colores", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/pocket-pack-5-multicolor_SpTV.webp", color: "Multicolor", colors: [], info: [["tag", "Tipo", "Cinta de cámara pocket", 1], ["palette", "Color", "Multicolor", 1]], specs: [["Categoría", "Cinta de cámara pocket"], ["Marca", "Progaff"], ["Descripción", "Pack de 5 rollos pequeños de colores para marcar y etiquetar."], ["Medida", "12 mm × 5,4 m"], ["Formato", "Pack de 5 colores"], ["Colores", "Multicolor"]], icon: tapesIcon("#1A1A1A") },
  { cat: "tapes", type: "Cinta americana", brand: "tesa", brandCode: "t", brandColor: "#E2001A", model: "tesa 74613 Profesional", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/tesa-74613-negro_SpTV.webp", color: "Negro|Gris plata", colors: [{"name": "Negro", "hex": "#1A1A1A", "photo": "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/tesa-74613-negro_SpTV.webp"}, {"name": "Gris plata", "hex": "#B8BDC2", "photo": "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/tesa-74613-gris-plata_SpTV.webp"}], info: [["tag", "Tipo", "Cinta americana", 1], ["palette", "Colores", "2 colores", 1]], specs: [["Categoría", "Cinta americana"], ["Marca", "tesa"], ["Descripción", "Cinta americana profesional de tela para reparaciones y sujeción."], ["Medida", "48 mm × 50 m"], ["Colores", "Negro · Gris plata"]], icon: tapesIcon("#E2001A") },
  { cat: "tapes", type: "Cinta americana", brand: "tesa", brandCode: "t", brandColor: "#E2001A", model: "tesa 56389 Extra Power", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/tesa-56389-gris-plata_SpTV.webp", color: "Gris plata|Blanco|Negro", colors: [{"name": "Gris plata", "hex": "#B8BDC2", "photo": "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/tesa-56389-gris-plata_SpTV.webp"}, {"name": "Blanco", "hex": "#FFFFFF", "photo": "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/tesa-56389-blanco_SpTV.webp"}, {"name": "Negro", "hex": "#1A1A1A", "photo": "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/tesa-56389-negro_SpTV.webp"}], info: [["tag", "Tipo", "Cinta americana", 1], ["palette", "Colores", "3 colores", 1]], specs: [["Categoría", "Cinta americana"], ["Marca", "tesa"], ["Descripción", "Cinta americana muy resistente de tesa (Extra Power)."], ["Medida", "50 mm × 50 m"], ["Colores", "Gris plata · Blanco · Negro"]], icon: tapesIcon("#E2001A") },
  { cat: "tapes", type: "Cinta americana", brand: "Gorilla", brandCode: "G", brandColor: "#1A1A1A", model: "Gorilla Tape", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/gorilla-tape-negro_SpTV.webp", color: "Negro|Plata", colors: [{"name": "Negro", "hex": "#1A1A1A", "photo": "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/gorilla-tape-negro_SpTV.webp"}, {"name": "Plata", "hex": "#C0C4C8", "photo": "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/gorilla-tape-plata_SpTV.webp"}], info: [["tag", "Tipo", "Cinta americana", 1], ["palette", "Colores", "2 colores", 1], ["capacity", "Formatos", "25 mm · 48 mm"]], specs: [["Categoría", "Cinta americana"], ["Marca", "Gorilla"], ["Descripción", "Cinta americana extrafuerte de doble capa de adhesivo, para superficies rugosas."], ["Medidas", "Negro: 25 mm × 9,4 m y 48 mm × 32 m · Plata: 48 mm × 32 m"], ["Colores", "Negro · Plata"]], icon: tapesIcon("#1A1A1A") },
  { cat: "tapes", type: "Doble cara", brand: "Ceys", brandCode: "C", brandColor: "#E30613", model: "Ceys Montack", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/ceys-montack-unico_SpTV.webp", color: "Único", colors: [], info: [["tag", "Tipo", "Doble cara", 1], ["palette", "Color", "Único", 1], ["capacity", "Formatos", "2,5 m · 7,5 m"]], specs: [["Categoría", "Doble cara"], ["Marca", "Ceys"], ["Descripción", "Cinta de montaje de doble cara: sustituye a tornillos y clavos."], ["Medidas", "19 mm × 2,5 m · 19 mm × 7,5 m"], ["Colores", "Único"]], icon: tapesIcon("#E30613") },
  { cat: "tapes", type: "Doble cara", brand: "tesa", brandCode: "t", brandColor: "#E2001A", model: "tesa 4934", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/tesa-4934-unico_SpTV.webp", color: "Único", colors: [], info: [["tag", "Tipo", "Doble cara", 1], ["palette", "Color", "Único", 1], ["capacity", "Formatos", "25 mm · 50 mm"]], specs: [["Categoría", "Doble cara"], ["Marca", "tesa"], ["Descripción", "Cinta de doble cara de tela para fijar moquetas y alfombras."], ["Medidas", "25 mm × 25 m · 50 mm × 25 m"], ["Colores", "Único"]], icon: tapesIcon("#E2001A") },
  { cat: "tapes", type: "Doble cara", brand: "tesa", brandCode: "t", brandColor: "#E2001A", model: "tesa 4964 Premium", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/tesa-4964-unico_SpTV.webp", color: "Único", colors: [], info: [["tag", "Tipo", "Doble cara", 1], ["palette", "Color", "Único", 1], ["capacity", "Formatos", "25 × 50 m · 50 × 25 m · 50 × 50 m"]], specs: [["Categoría", "Doble cara"], ["Marca", "tesa"], ["Descripción", "Cinta de doble cara de tela de alta adhesión, para suelos y escenarios."], ["Medidas", "25 mm × 50 m · 50 mm × 25 m · 50 mm × 50 m"], ["Colores", "Único"]], icon: tapesIcon("#E2001A") },
  { cat: "tapes", type: "Doble cara", brand: "tesa", brandCode: "t", brandColor: "#E2001A", model: "tesa 4970", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/tesa-4970-unico_SpTV.webp", color: "Único", colors: [], info: [["tag", "Tipo", "Doble cara", 1], ["palette", "Color", "Único", 1]], specs: [["Categoría", "Doble cara"], ["Marca", "tesa"], ["Descripción", "Cinta de doble cara de alta adhesión para fijaciones permanentes."], ["Medida", "19 mm × 50 m"], ["Colores", "Único"]], icon: tapesIcon("#E2001A") },
  { cat: "tapes", type: "Doble cara", brand: "tesa", brandCode: "t", brandColor: "#E2001A", model: "tesa 4965", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/tesa-4965-unico_SpTV.webp", color: "Único", colors: [], info: [["tag", "Tipo", "Doble cara", 1], ["palette", "Color", "Único", 1]], specs: [["Categoría", "Doble cara"], ["Marca", "tesa"], ["Descripción", "Cinta de doble cara transparente de alto rendimiento (protector rojo)."], ["Medida", "25 mm × 50 m"], ["Colores", "Único"]], icon: tapesIcon("#E2001A") },
  { cat: "tapes", type: "Doble cara", brand: "tesa", brandCode: "t", brandColor: "#E2001A", model: "tesa 4944", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/tesa-4944-unico_SpTV.webp", color: "Único", colors: [], info: [["tag", "Tipo", "Doble cara", 1], ["palette", "Color", "Único", 1]], specs: [["Categoría", "Doble cara"], ["Marca", "tesa"], ["Descripción", "Cinta de doble cara extrafuerte para fijar suelos y moquetas."], ["Medida", "50 mm × 25 m"], ["Colores", "Único"]], icon: tapesIcon("#E2001A") },
  { cat: "tapes", type: "Doble cara", brand: "3M", brandCode: "3M", brandColor: "#E2231A", model: "3M tiras transparentes para peluca", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/3m-clear-peluca-unico_SpTV.webp", color: "Único", colors: [], info: [["tag", "Tipo", "Doble cara", 1], ["palette", "Color", "Único", 1]], specs: [["Categoría", "Doble cara"], ["Marca", "3M"], ["Descripción", "Tiras de doble cara transparentes para fijar pelucas y postizos."], ["Formato", "36 tiras de 3/4''"], ["Colores", "Único"]], icon: tapesIcon("#E2231A") },
  { cat: "tapes", type: "Doble cara", brand: "3M", brandCode: "3M", brandColor: "#E2231A", model: "3M Health Care cinta para peluca", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/3m-health-care-peluca-unico_SpTV.webp", color: "Único", colors: [], info: [["tag", "Tipo", "Doble cara", 1], ["palette", "Color", "Único", 1]], specs: [["Categoría", "Doble cara"], ["Marca", "3M"], ["Descripción", "Cinta de doble cara de uso médico para fijar pelucas."], ["Medida", "19 mm × 4,5 m"], ["Colores", "Único"]], icon: tapesIcon("#E2231A") },
  { cat: "tapes", type: "Doble cara", brand: "Joe's Sticky Stuff", brandCode: "J", brandColor: "#1A1A1A", model: "Joe's Sticky Stuff", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/joes-sticky-stuff-unico_SpTV.webp", color: "Único", colors: [], info: [["tag", "Tipo", "Doble cara", 1], ["palette", "Color", "Único", 1]], specs: [["Categoría", "Doble cara"], ["Marca", "Joe's Sticky Stuff"], ["Descripción", "Cinta de doble cara muy fuerte que se retira limpia, muy usada en atrezzo y rodaje."], ["Medida", "25 mm × 6,1 m"], ["Colores", "Único"]], icon: tapesIcon("#1A1A1A") },
  { cat: "tapes", type: "Doble cara", brand: "Hippo", brandCode: "H", brandColor: "#5C6672", model: "Hippo-SKIN", photo: "", color: "Único", colors: [], info: [["tag", "Tipo", "Doble cara", 1], ["palette", "Color", "Único", 1], ["capacity", "Formatos", "Mini Roll · Regular"]], specs: [["Categoría", "Doble cara"], ["Marca", "Hippo"], ["Descripción", "Cinta de doble cara de uso sobre piel para fijar micrófonos de solapa y transmisores."], ["Formatos", "Mini Roll · Regular"], ["Colores", "Único"]], icon: tapesIcon("#5C6672") },
  { cat: "tapes", type: "Cinta de butilo", brand: "Hide-a-mic", brandCode: "H", brandColor: "#1A1A1A", model: "Hide-a-mic cinta de butilo", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/hide-a-mic-butilo-unico_SpTV.webp", color: "Único", colors: [], info: [["tag", "Tipo", "Cinta de butilo", 1], ["palette", "Color", "Único", 1]], specs: [["Categoría", "Cinta de butilo"], ["Marca", "Hide-a-mic"], ["Descripción", "Cinta de butilo moldeable para fijar y amortiguar micrófonos de solapa."], ["Medida", "12 mm × 3 m"], ["Uso", "Sonido"], ["Colores", "Único"]], icon: tapesIcon("#1A1A1A") },
  { cat: "tapes", type: "Carrocero", brand: "tesa", brandCode: "t", brandColor: "#E2001A", model: "tesa NOPI 4349", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/tesa-4349-beige_SpTV.webp", color: "Beige", colors: [], info: [["tag", "Tipo", "Carrocero", 1], ["palette", "Color", "Beige", 1], ["capacity", "Formatos", "25 mm · 30 mm · 50 mm"]], specs: [["Categoría", "Carrocero"], ["Marca", "tesa"], ["Descripción", "Cinta de carrocero de papel para enmascarar y rotular."], ["Medidas", "25 mm × 45 m · 30 mm × 45 m · 50 mm × 50 m"], ["Colores", "Beige"]], icon: tapesIcon("#E2001A") },
  { cat: "tapes", type: "Carrocero", brand: "tesa", brandCode: "t", brandColor: "#E2001A", model: "tesa 4323", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/tesa-4323-beige_SpTV.webp", color: "Beige", colors: [], info: [["tag", "Tipo", "Carrocero", 1], ["palette", "Color", "Beige", 1]], specs: [["Categoría", "Carrocero"], ["Marca", "tesa"], ["Descripción", "Cinta de carrocero de papel de uso general."], ["Medida", "50 mm × 50 m"], ["Colores", "Beige"]], icon: tapesIcon("#E2001A") },
  { cat: "tapes", type: "Carrocero", brand: "tesa", brandCode: "t", brandColor: "#E2001A", model: "tesa Mask superficies delicadas", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/tesa-mask-rosa-rosa_SpTV.webp", color: "Rosa", colors: [], info: [["tag", "Tipo", "Carrocero", 1], ["palette", "Color", "Rosa", 1]], specs: [["Categoría", "Carrocero"], ["Marca", "tesa"], ["Descripción", "Cinta de enmascarar de baja adhesión para superficies delicadas."], ["Medida", "19 mm × 50 m"], ["Colores", "Rosa"]], icon: tapesIcon("#E2001A") },
  { cat: "tapes", type: "Cinta de papel", brand: "Progaff", brandCode: "P", brandColor: "#1A1A1A", model: "Progaff cinta de papel", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/progaff-papel-negro_SpTV.webp", color: "Negro|Blanco|Amarillo|Azul claro|Azul oscuro|Marrón|Morado|Naranja|Rojo|Rosa claro|Verde claro|Verde oscuro", colors: [{"name": "Negro", "hex": "#1A1A1A", "photo": "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/progaff-papel-negro_SpTV.webp"}, {"name": "Blanco", "hex": "#FFFFFF", "photo": "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/progaff-papel-blanco_SpTV.webp"}, {"name": "Amarillo", "hex": "#F2C200", "photo": "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/progaff-papel-amarillo_SpTV.webp"}, {"name": "Azul claro", "hex": "#7FB6F0", "photo": "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/progaff-papel-azul-claro_SpTV.webp"}, {"name": "Azul oscuro", "hex": "#1A2F7A", "photo": "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/progaff-papel-azul-oscuro_SpTV.webp"}, {"name": "Morado", "hex": "#7B3FA0", "photo": "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/progaff-papel-morado_SpTV.webp"}, {"name": "Naranja", "hex": "#F07A1A", "photo": "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/progaff-papel-naranja_SpTV.webp"}, {"name": "Rojo", "hex": "#D0202E", "photo": "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/progaff-papel-rojo_SpTV.webp"}, {"name": "Rosa claro", "hex": "#F6B3CF", "photo": "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/progaff-papel-rosa-claro_SpTV.webp"}, {"name": "Verde claro", "hex": "#8BD17C", "photo": "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/progaff-papel-verde-claro_SpTV.webp"}, {"name": "Verde oscuro", "hex": "#1F5E33", "photo": "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/progaff-papel-verde-oscuro_SpTV.webp"}], info: [["tag", "Tipo", "Cinta de papel", 1], ["palette", "Colores", "12 colores", 1], ["capacity", "Formatos", "24 mm · 48 mm"]], specs: [["Categoría", "Cinta de papel"], ["Marca", "Progaff"], ["Descripción", "Cinta de papel (spike tape) para marcar y etiquetar: se escribe encima y se quita limpia."], ["Medidas", "24 mm × 55 m (PRO46) · marrón 24 mm × 22,86 m · negro 48 mm × 55 m"], ["Colores", "Negro · Blanco · Amarillo · Azul claro · Azul oscuro · Marrón · Morado · Naranja · Rojo · Rosa claro · Verde claro · Verde oscuro"]], icon: tapesIcon("#1A1A1A") },
  { cat: "tapes", type: "Cinta de papel", brand: "Progaff", brandCode: "P", brandColor: "#1A1A1A", model: "Progaff Console flúor", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/progaff-console-fluor-amarillo_SpTV.webp", color: "Flúor amarillo|Flúor naranja|Flúor rosa|Flúor verde", colors: [{"name": "Flúor amarillo", "hex": "#E6FF00", "photo": "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/progaff-console-fluor-amarillo_SpTV.webp"}, {"name": "Flúor naranja", "hex": "#FF6A00", "photo": "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/progaff-console-fluor-naranja_SpTV.webp"}, {"name": "Flúor rosa", "hex": "#FF2D95", "photo": "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/progaff-console-fluor-rosa_SpTV.webp"}, {"name": "Flúor verde", "hex": "#5CFF2E", "photo": "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/progaff-console-fluor-verde_SpTV.webp"}], info: [["tag", "Tipo", "Cinta de papel", 1], ["palette", "Colores", "4 colores", 1]], specs: [["Categoría", "Cinta de papel"], ["Marca", "Progaff"], ["Descripción", "Cinta de papel flúor para consolas y marcas, muy visible."], ["Medida", "24 mm × 22,9 m"], ["Colores", "Flúor amarillo · Flúor naranja · Flúor rosa · Flúor verde"]], icon: tapesIcon("#1A1A1A") },
  { cat: "tapes", type: "Cinta de papel", brand: "tesa", brandCode: "t", brandColor: "#E2001A", model: "tesa 4328", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/tesa-4328-negro_SpTV.webp", color: "Negro|Azul|Rojo", colors: [{"name": "Negro", "hex": "#1A1A1A", "photo": "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/tesa-4328-negro_SpTV.webp"}, {"name": "Rojo", "hex": "#D0202E", "photo": "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/tesa-4328-rojo_SpTV.webp"}], info: [["tag", "Tipo", "Cinta de papel", 1], ["palette", "Colores", "3 colores", 1]], specs: [["Categoría", "Cinta de papel"], ["Marca", "tesa"], ["Descripción", "Cinta de papel de colores para marcar y señalizar."], ["Medidas", "Azul y rojo 19 mm × 50 m · negro 25 mm × 50 m y 50 mm × 50 m"], ["Colores", "Negro · Azul · Rojo"]], icon: tapesIcon("#E2001A") },
  { cat: "tapes", type: "Cinta de papel", brand: "Apli", brandCode: "A", brandColor: "#E2001A", model: "Apli pack cinta flúor", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/apli-pack-fluor-multicolor_SpTV.webp", color: "Multicolor", colors: [], info: [["tag", "Tipo", "Cinta de papel", 1], ["palette", "Color", "Multicolor", 1]], specs: [["Categoría", "Cinta de papel"], ["Marca", "Apli"], ["Descripción", "Pack de 4 cintas de papel flúor para marcar."], ["Medida", "15 mm × 10 m"], ["Formato", "Pack de 4"], ["Colores", "Multicolor"]], icon: tapesIcon("#E2001A") },
  { cat: "tapes", type: "Cinta de papel", brand: "Shurtape", brandCode: "S", brandColor: "#0047AB", model: "Shurtape CP-743", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/shurtape-p743-negro_SpTV.webp", color: "Negro", colors: [], info: [["tag", "Tipo", "Cinta de papel", 1], ["palette", "Color", "Negro", 1]], specs: [["Categoría", "Cinta de papel"], ["Marca", "Shurtape"], ["Descripción", "Cinta de papel negra mate de uso profesional en iluminación (blackwrap)."], ["Medida", "48 mm × 50 m"], ["Colores", "Negro"]], icon: tapesIcon("#0047AB") },
  { cat: "tapes", type: "Cinta aislante", brand: "tesa", brandCode: "t", brandColor: "#E2001A", model: "tesa 53988 aislante", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/tesa-53988-negro_SpTV.webp", color: "Negro|Blanco|Amarillo|Azul|Gris|Marrón|Rojo|Verde|Verde-amarillo", colors: [{"name": "Negro", "hex": "#1A1A1A", "photo": "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/tesa-53988-negro_SpTV.webp"}, {"name": "Blanco", "hex": "#FFFFFF", "photo": "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/tesa-53988-blanco_SpTV.webp"}, {"name": "Amarillo", "hex": "#F2C200", "photo": "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/tesa-53988-amarillo_SpTV.webp"}, {"name": "Azul", "hex": "#1F5FD0", "photo": "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/tesa-53988-azul_SpTV.webp"}, {"name": "Gris", "hex": "#8A8F96", "photo": "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/tesa-53988-gris_SpTV.webp"}, {"name": "Marrón", "hex": "#6B4A2B", "photo": "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/tesa-53988-marron_SpTV.webp"}, {"name": "Rojo", "hex": "#D0202E", "photo": "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/tesa-53988-rojo_SpTV.webp"}, {"name": "Verde", "hex": "#1E9C46", "photo": "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/tesa-53988-verde_SpTV.webp"}, {"name": "Verde-amarillo", "hex": "#9ACD32", "photo": "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/tesa-53988-verde-amarillo_SpTV.webp"}], info: [["tag", "Tipo", "Cinta aislante", 1], ["palette", "Colores", "9 colores", 1]], specs: [["Categoría", "Cinta aislante"], ["Marca", "tesa"], ["Descripción", "Cinta aislante de PVC para electricidad, en todos los colores de cableado."], ["Medida", "19 mm × 20 m"], ["Colores", "Negro · Blanco · Amarillo · Azul · Gris · Marrón · Rojo · Verde · Verde-amarillo"]], icon: tapesIcon("#E2001A") },
  { cat: "tapes", type: "Cinta aislante", brand: "EDM", brandCode: "E", brandColor: "#E30613", model: "EDM Supra aislante", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/edm-supra-negro_SpTV.webp", color: "Negro|Blanco", colors: [{"name": "Negro", "hex": "#1A1A1A", "photo": "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/edm-supra-negro_SpTV.webp"}, {"name": "Blanco", "hex": "#FFFFFF", "photo": "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/edm-supra-blanco_SpTV.webp"}], info: [["tag", "Tipo", "Cinta aislante", 1], ["palette", "Colores", "2 colores", 1]], specs: [["Categoría", "Cinta aislante"], ["Marca", "EDM"], ["Descripción", "Cinta aislante de PVC."], ["Medida", "19 mm × 20 m"], ["Colores", "Negro · Blanco"]], icon: tapesIcon("#E30613") },
  { cat: "tapes", type: "Señalización", brand: "tesa", brandCode: "t", brandColor: "#E2001A", model: "tesa 60760 señalización PVC", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/tesa-60760-negro-amarillo_SpTV.webp", color: "Negro-amarillo|Rojo-blanco", colors: [{"name": "Negro-amarillo", "hex": "#2B2B00", "photo": "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/tesa-60760-negro-amarillo_SpTV.webp"}, {"name": "Rojo-blanco", "hex": "#E8505B", "photo": "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/tesa-60760-rojo-blanco_SpTV.webp"}], info: [["tag", "Tipo", "Señalización", 1], ["palette", "Colores", "2 colores", 1]], specs: [["Categoría", "Señalización"], ["Marca", "tesa"], ["Descripción", "Cinta adhesiva de señalización de PVC para marcar zonas de peligro y pasos."], ["Medida", "50 mm × 33 m"], ["Colores", "Negro-amarillo · Rojo-blanco"]], icon: tapesIcon("#E2001A") },
  { cat: "tapes", type: "Señalización", brand: "tesa", brandCode: "t", brandColor: "#E2001A", model: "tesa 58133 / 58134 señalización", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/tesa-5813x-negro-amarillo_SpTV.webp", color: "Negro-amarillo|Rojo-blanco", colors: [{"name": "Negro-amarillo", "hex": "#2B2B00", "photo": "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/tesa-5813x-negro-amarillo_SpTV.webp"}, {"name": "Rojo-blanco", "hex": "#E8505B", "photo": "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/tesa-5813x-rojo-blanco_SpTV.webp"}], info: [["tag", "Tipo", "Señalización", 1], ["palette", "Colores", "2 colores", 1]], specs: [["Categoría", "Señalización"], ["Marca", "tesa"], ["Descripción", "Cinta adhesiva de señalización de polipropileno."], ["Medida", "50 mm × 66 m"], ["Referencias", "58133 negro-amarillo · 58134 rojo-blanco"], ["Colores", "Negro-amarillo · Rojo-blanco"]], icon: tapesIcon("#E2001A") },
  { cat: "tapes", type: "Señalización", brand: "tesa", brandCode: "t", brandColor: "#E2001A", model: "tesa 58137 cinta de balizamiento", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/tesa-58137-rojo-blanco_SpTV.webp", color: "Rojo-blanco", colors: [], info: [["tag", "Tipo", "Señalización", 1], ["palette", "Color", "Rojo-blanco", 1]], specs: [["Categoría", "Señalización"], ["Marca", "tesa"], ["Descripción", "Cinta de balizamiento no adhesiva para acordonar zonas."], ["Medida", "80 mm × 100 m"], ["Colores", "Rojo-blanco"]], icon: tapesIcon("#E2001A") },
  { cat: "tapes", type: "Señalización", brand: "tesa", brandCode: "t", brandColor: "#E2001A", model: "tesa fotoluminiscente antideslizante", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/tesa-fotoluminiscente-fotoluminiscente_SpTV.webp", color: "Fotoluminiscente", colors: [], info: [["tag", "Tipo", "Señalización", 1], ["palette", "Color", "Fotoluminiscente", 1], ["capacity", "Formatos", "5 m · 15 m"]], specs: [["Categoría", "Señalización"], ["Marca", "tesa"], ["Descripción", "Cinta que brilla en la oscuridad y antideslizante, para marcar escalones y salidas."], ["Medidas", "25 mm × 5 m · 25 mm × 15 m"], ["Colores", "Fotoluminiscente"]], icon: tapesIcon("#E2001A") },
  { cat: "tapes", type: "Pasacables", brand: "tesa", brandCode: "t", brandColor: "#E2001A", model: "tesa Tunnel Tape 4611", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/tesa-4611-negro_SpTV.webp", color: "Negro", colors: [], info: [["tag", "Tipo", "Pasacables", 1], ["palette", "Color", "Negro", 1]], specs: [["Categoría", "Pasacables"], ["Marca", "tesa"], ["Descripción", "Cinta pasacables que cubre y protege los cables en el suelo con tira central sin adhesivo."], ["Medida", "150 mm × 25 m"], ["Colores", "Negro"]], icon: tapesIcon("#E2001A") },
  { cat: "tapes", type: "Cinta médica", brand: "3M", brandCode: "3M", brandColor: "#E2231A", model: "3M Transpore", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/3m-transpore-transparente_SpTV.webp", color: "Transparente", colors: [], info: [["tag", "Tipo", "Cinta médica", 1], ["palette", "Color", "Transparente", 1]], specs: [["Categoría", "Cinta médica"], ["Marca", "3M"], ["Descripción", "Esparadrapo transparente y perforado, se corta con la mano."], ["Medida", "2,5 cm × 9 m"], ["Colores", "Transparente"]], icon: tapesIcon("#E2231A") },
  { cat: "tapes", type: "Cinta médica", brand: "3M", brandCode: "3M", brandColor: "#E2231A", model: "3M Nexcare Active Tape", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/3m-nexcare-active-carne_SpTV.webp", color: "Carne", colors: [], info: [["tag", "Tipo", "Cinta médica", 1], ["palette", "Color", "Carne", 1]], specs: [["Categoría", "Cinta médica"], ["Marca", "3M"], ["Descripción", "Esparadrapo de tela resistente al agua y flexible."], ["Medida", "2,54 cm × 4,5 m"], ["Colores", "Carne"]], icon: tapesIcon("#E2231A") },
  { cat: "tapes", type: "Cinta médica", brand: "3M", brandCode: "3M", brandColor: "#E2231A", model: "3M Micropore", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/3m-micropore-carne_SpTV.webp", color: "Carne|Blanco", colors: [{"name": "Carne", "hex": "#E8C4A8", "photo": "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/3m-micropore-carne_SpTV.webp"}, {"name": "Blanco", "hex": "#FFFFFF", "photo": "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/3m-micropore-blanco_SpTV.webp"}], info: [["tag", "Tipo", "Cinta médica", 1], ["palette", "Colores", "2 colores", 1]], specs: [["Categoría", "Cinta médica"], ["Marca", "3M"], ["Descripción", "Esparadrapo de papel suave para piel sensible."], ["Medida", "2,5 cm × 9 m"], ["Colores", "Carne · Blanco"]], icon: tapesIcon("#E2231A") },
  { cat: "tapes", type: "Cinta médica", brand: "", brandCode: "", brandColor: "#5C6672", model: "Cinta de kinesiología", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/kinesiologia-carne_SpTV.webp", color: "Carne|Negro", colors: [{"name": "Carne", "hex": "#E8C4A8", "photo": "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/kinesiologia-carne_SpTV.webp"}, {"name": "Negro", "hex": "#1A1A1A", "photo": "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/kinesiologia-negro_SpTV.webp"}], info: [["tag", "Tipo", "Cinta médica", 1], ["palette", "Colores", "2 colores", 1]], specs: [["Categoría", "Cinta médica"], ["Descripción", "Cinta elástica de kinesiología; en rodaje se usa para fijar micrófonos y cables a la piel."], ["Medida", "50 mm × 5 m"], ["Colores", "Carne · Negro"]], icon: tapesIcon("#5C6672") },
  { cat: "tapes", type: "Cinta térmica", brand: "tesa", brandCode: "t", brandColor: "#E2001A", model: "tesa 50577 anticalórica", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/tesa-50577-negro_SpTV.webp", color: "Negro", colors: [], info: [["tag", "Tipo", "Cinta térmica", 1], ["palette", "Color", "Negro", 1]], specs: [["Categoría", "Cinta térmica"], ["Marca", "tesa"], ["Descripción", "Cinta resistente al calor para focos y equipos que se calientan."], ["Medida", "50 mm × 25 m"], ["Colores", "Negro"]], icon: tapesIcon("#E2001A") },
  { cat: "tapes", type: "Cinta térmica", brand: "tesa", brandCode: "t", brandColor: "#E2001A", model: "tesa cinta de aluminio", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/tesa-aluminio-aluminio_SpTV.webp", color: "Aluminio", colors: [], info: [["tag", "Tipo", "Cinta térmica", 1], ["palette", "Color", "Aluminio", 1]], specs: [["Categoría", "Cinta térmica"], ["Marca", "tesa"], ["Descripción", "Cinta de aluminio de 50 micras, refleja el calor y sella."], ["Medida", "50 mm × 10 m"], ["Colores", "Aluminio"]], icon: tapesIcon("#E2001A") },
  { cat: "tapes", type: "Embalaje", brand: "tesa", brandCode: "t", brandColor: "#E2001A", model: "tesa precinto", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/tesa-precinto-transparente_SpTV.webp", color: "Transparente", colors: [], info: [["tag", "Tipo", "Embalaje", 1], ["palette", "Color", "Transparente", 1]], specs: [["Categoría", "Embalaje"], ["Marca", "tesa"], ["Descripción", "Cinta de embalaje para cerrar cajas."], ["Medida", "48 mm × 126 m"], ["Colores", "Transparente"]], icon: tapesIcon("#E2001A") },
  { cat: "tapes", type: "Embalaje", brand: "", brandCode: "", brandColor: "#5C6672", model: "Film industrial", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/film-industrial-transparente_SpTV.webp", color: "Transparente", colors: [], info: [["tag", "Tipo", "Embalaje", 1], ["palette", "Color", "Transparente", 1]], specs: [["Categoría", "Embalaje"], ["Descripción", "Film estirable para embalar y proteger material en palés y transporte."], ["Medida", "50 cm × 125 m"], ["Colores", "Transparente"]], icon: tapesIcon("#5C6672") },
  { cat: "tapes", type: "Reparación", brand: "Gorilla", brandCode: "G", brandColor: "#1A1A1A", model: "Gorilla cinta de reparación transparente", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/gorilla-transparente-transparente_SpTV.webp", color: "Transparente", colors: [], info: [["tag", "Tipo", "Reparación", 1], ["palette", "Color", "Transparente", 1]], specs: [["Categoría", "Reparación"], ["Marca", "Gorilla"], ["Descripción", "Cinta de reparación transparente y extrafuerte, para interior y exterior."], ["Medida", "48 mm × 8,2 m"], ["Colores", "Transparente"]], icon: tapesIcon("#1A1A1A") },
  { cat: "tapes", type: "Cinta de datos", brand: "C-Tape", brandCode: "C", brandColor: "#1A1A1A", model: "C-Tape cinta de datos", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/c-tape-blanco_SpTV.webp", color: "Blanco|Amarillo|Azul|Rojo|Verde", colors: [{"name": "Blanco", "hex": "#FFFFFF", "photo": "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/c-tape-blanco_SpTV.webp"}, {"name": "Amarillo", "hex": "#F2C200", "photo": "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/c-tape-amarillo_SpTV.webp"}, {"name": "Azul", "hex": "#1F5FD0", "photo": "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/c-tape-azul_SpTV.webp"}, {"name": "Rojo", "hex": "#D0202E", "photo": "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/c-tape-rojo_SpTV.webp"}, {"name": "Verde", "hex": "#1E9C46", "photo": "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/c-tape-verde_SpTV.webp"}], info: [["tag", "Tipo", "Cinta de datos", 1], ["palette", "Colores", "5 colores", 1]], specs: [["Categoría", "Cinta de datos"], ["Marca", "C-Tape"], ["Descripción", "Etiquetas de datos para cámaras, cargadores y tarjetas: se escriben y se quitan sin dejar restos."], ["Medida", "25 mm × 15 m"], ["Formato", "250 unidades"], ["Colores", "Blanco · Amarillo · Azul · Rojo · Verde"]], icon: tapesIcon("#1A1A1A") }
];

// BACKDROPS: purchase catalogue, official photos from each brand's website.
// colors: one photo per colour; the dots on the card swap the photo (generated by tools/build_sonido_data.py)
const BACKDROPS = [
  { cat: "backdrops", type: "Tela molton", brand: "Adam Hall", brandCode: "AH", brandColor: "#1A1A1A", model: "Adam Hall tela molton negra", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/adam-hall-molton-negro_SpTV.webp", color: "Negro", colors: [], info: [["tag", "Tipo", "Tela molton", 1], ["palette", "Color", "Negro", 1], ["capacity", "Formatos", "160 g · 6 × 6 m · 300 g · 3 × 3 m · 300 g · 4 × 3 m · 300 g · 6 × 6 m"]], specs: [["Categoría", "Tela molton"], ["Marca", "Adam Hall"], ["Descripción", "Tela molton negra con ojales para fondos, aforos y tapar luz; absorbe la luz y amortigua el sonido."], ["Medidas", "160 g/m²: 6 × 6 m · 300 g/m²: 3 × 3 m, 4 × 3 m y 6 × 6 m"], ["Acabado", "Con ojales"], ["Colores", "Negro"]], icon: backdropsIcon("#1A1A1A") }
];

// OTHERSOUND: purchase catalogue, official photos and free-licence photos.
// colors: one photo per colour; the dots on the card swap the photo (generated by tools/build_sonido_data.py)
const OTHERSOUND = [
  { cat: "othersound", type: "Aislamiento", brand: "", brandCode: "", brandColor: "#5C6672", model: "Neopreno adhesivo esponjoso", photo: "", color: "Negro", colors: [], info: [["tag", "Tipo", "Aislamiento", 1], ["palette", "Color", "Negro", 1]], specs: [["Categoría", "Aislamiento"], ["Descripción", "Lámina de neopreno esponjoso con adhesivo para amortiguar golpes y ruidos y aislar superficies."], ["Medida", "1 m × 1 m × 3 mm"], ["Adhesivo", "Sí"], ["Colores", "Negro"]], icon: othersoundIcon("#5C6672") },
  { cat: "othersound", type: "Aislamiento", brand: "", brandCode: "", brandColor: "#5C6672", model: "Depron aislante", photo: "", color: "Blanco", colors: [], info: [["tag", "Tipo", "Aislamiento", 1], ["palette", "Color", "Blanco", 1]], specs: [["Categoría", "Aislamiento"], ["Descripción", "Plancha de espuma Depron ligera y aislante, fácil de cortar."], ["Medida", "120 × 80 mm × 3 mm"], ["Color", "Blanco"], ["Colores", "Blanco"]], icon: othersoundIcon("#5C6672") },
  { cat: "othersound", type: "Panel", brand: "", brandCode: "", brandColor: "#5C6672", model: "Cartón pluma", photo: "", color: "Blanco|Negro", colors: [], info: [["tag", "Tipo", "Panel", 1], ["palette", "Colores", "2 colores", 1]], specs: [["Categoría", "Panel"], ["Descripción", "Panel ligero de cartón pluma para rebotar o quitar luz, hacer pantallas y montajes."], ["Medidas", "Blanco: 70 × 100 cm × 3 mm · Negro (dos caras): 70 × 100 cm × 5 mm"], ["Adhesivo", "No"], ["Colores", "Blanco · Negro"]], icon: othersoundIcon("#5C6672") },
  { cat: "othersound", type: "Ruido de pasos", brand: "", brandCode: "", brandColor: "#5C6672", model: "Tacones silenciadores", photo: "", color: "Negro|Transparente", colors: [], info: [["tag", "Tipo", "Ruido de pasos", 1], ["palette", "Colores", "2 colores", 1], ["capacity", "Formatos", "XS · S · M · L"]], specs: [["Categoría", "Ruido de pasos"], ["Descripción", "Protectores para tacones que amortiguan el ruido de los pasos durante la toma de sonido."], ["Tallas", "XS · S · M · L"], ["Colores", "Negro · Transparente"]], icon: othersoundIcon("#5C6672") },
  { cat: "othersound", type: "Auriculares", brand: "Sennheiser", brandCode: "S", brandColor: "#0A2C5E", model: "Sennheiser HD 206", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/sennheiser-hd206-negro_SpTV.webp", color: "Negro", colors: [], info: [["tag", "Tipo", "Auriculares", 1], ["palette", "Color", "Negro", 1]], specs: [["Categoría", "Auriculares"], ["Marca", "Sennheiser"], ["Descripción", "Auriculares cerrados de diadema para monitorizar sonido."], ["Tipo", "Cerrados, de diadema"], ["Conexión", "Jack 3,5 mm (con adaptador a 6,3 mm)"], ["Colores", "Negro"]], icon: othersoundIcon("#0A2C5E") },
  { cat: "othersound", type: "Auriculares", brand: "Sony", brandCode: "S", brandColor: "#1A1A1A", model: "Sony MDR-ZX110", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/sony-mdr-zx-negro_SpTV.webp", color: "Negro", colors: [], info: [["tag", "Tipo", "Auriculares", 1], ["palette", "Color", "Negro", 1]], specs: [["Categoría", "Auriculares"], ["Marca", "Sony"], ["Descripción", "Auriculares de diadema ligeros y plegables."], ["Tipo", "Diadema"], ["Conexión", "Jack 3,5 mm"], ["Colores", "Negro"]], icon: othersoundIcon("#1A1A1A") },
  { cat: "othersound", type: "Auriculares", brand: "Logitech", brandCode: "L", brandColor: "#00B8FC", model: "Logitech H390", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/logitech-h390-negro_SpTV.webp", color: "Negro", colors: [], info: [["tag", "Tipo", "Auriculares", 1], ["palette", "Color", "Negro", 1]], specs: [["Categoría", "Auriculares"], ["Marca", "Logitech"], ["Descripción", "Auriculares USB con micrófono con cancelación de ruido, para videollamadas."], ["Conexión", "USB"], ["Micrófono", "Sí, con cancelación de ruido"], ["Colores", "Negro"]], icon: othersoundIcon("#00B8FC") }
];

// LAVACC: purchase catalogue, official photos from Ursa Straps, Viviana, Bubblebee Industries and ORCA.
// colors: one photo per colour; the dots on the card swap the photo (generated by tools/build_sonido_data.py)
const LAVACC = [
  { cat: "lavacc", type: "Bolsillo / pouch", brand: "Viviana", brandCode: "V", brandColor: "#5C6672", model: "Viviana Belt Puffy", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/viviana-belt-puffy-beige_SpTV.webp", color: "Beige|Negro", colors: [{"name": "Beige", "hex": "#D8B48C", "photo": "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/viviana-belt-puffy-beige_SpTV.webp"}, {"name": "Negro", "hex": "#1A1A1A", "photo": "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/viviana-belt-puffy-negro_SpTV.webp"}], info: [["tag", "Tipo", "Bolsillo / pouch", 1], ["palette", "Colores", "2 colores", 1], ["capacity", "Tallas", "S · M · L"]], specs: [["Categoría", "Bolsillo / pouch"], ["Marca", "Viviana"], ["Descripción", "Bolsillo acolchado para llevar la petaca del micrófono en el cinturón, cómodo y discreto."], ["Tallas", "S · M · L"], ["Colores", "Beige · Negro"]], icon: lavaccIcon("#5C6672") },
  { cat: "lavacc", type: "Bolsillo / pouch", brand: "Ursa Straps", brandCode: "U", brandColor: "#1F2937", model: "Ursa Belt Pouch", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/ursa-belt-pouch-beige_SpTV.webp", color: "Beige|Negro|Blanco", colors: [{"name": "Beige", "hex": "#D8B48C", "photo": "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/ursa-belt-pouch-beige_SpTV.webp"}, {"name": "Negro", "hex": "#1A1A1A", "photo": "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/ursa-belt-pouch-negro_SpTV.webp"}, {"name": "Blanco", "hex": "#FFFFFF", "photo": "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/ursa-belt-pouch-blanco_SpTV.webp"}], info: [["tag", "Tipo", "Bolsillo / pouch", 1], ["palette", "Colores", "3 colores", 1], ["capacity", "Tallas", "M · L · XL"]], specs: [["Categoría", "Bolsillo / pouch"], ["Marca", "Ursa Straps"], ["Descripción", "Bolsillo elástico para llevar la petaca en el cinturón o la cintura."], ["Tallas", "M · L · XL"], ["Colores", "Beige · Negro · Blanco"]], icon: lavaccIcon("#1F2937") },
  { cat: "lavacc", type: "Bolsillo / pouch", brand: "Ursa Straps", brandCode: "U", brandColor: "#1F2937", model: "Ursa Mini Pouch", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/ursa-mini-pouch-beige_SpTV.webp", color: "Beige", colors: [], info: [["tag", "Tipo", "Bolsillo / pouch", 1], ["palette", "Color", "Beige", 1]], specs: [["Categoría", "Bolsillo / pouch"], ["Marca", "Ursa Straps"], ["Descripción", "Bolsillo pequeño para petacas compactas."], ["Tamaño", "Mini"], ["Colores", "Beige"]], icon: lavaccIcon("#1F2937") },
  { cat: "lavacc", type: "Correa", brand: "Ursa Straps", brandCode: "U", brandColor: "#1F2937", model: "Ursa Head Strap", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/ursa-head-strap-beige_SpTV.webp", color: "Beige|Blanco|Negro", colors: [{"name": "Beige", "hex": "#D8B48C", "photo": "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/ursa-head-strap-beige_SpTV.webp"}, {"name": "Negro", "hex": "#1A1A1A", "photo": "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/ursa-head-strap-negro_SpTV.webp"}], info: [["tag", "Tipo", "Correa", 1], ["palette", "Colores", "3 colores", 1]], specs: [["Categoría", "Correa"], ["Marca", "Ursa Straps"], ["Descripción", "Correa de cabeza para fijar el micrófono o la petaca en la cabeza, oculta bajo el pelo o un sombrero."], ["Zona", "Cabeza"], ["Colores", "Beige · Blanco · Negro"]], icon: lavaccIcon("#1F2937") },
  { cat: "lavacc", type: "Correa", brand: "Ursa Straps", brandCode: "U", brandColor: "#1F2937", model: "Ursa Waist Strap", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/ursa-waist-strap-beige_SpTV.webp", color: "Beige|Blanco|Negro|Marrón|Caramelo", colors: [{"name": "Beige", "hex": "#D8B48C", "photo": "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/ursa-waist-strap-beige_SpTV.webp"}, {"name": "Blanco", "hex": "#FFFFFF", "photo": "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/ursa-waist-strap-blanco_SpTV.webp"}, {"name": "Negro", "hex": "#1A1A1A", "photo": "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/ursa-waist-strap-negro_SpTV.webp"}, {"name": "Marrón", "hex": "#6B4A2B", "photo": "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/ursa-waist-strap-marron_SpTV.webp"}, {"name": "Caramelo", "hex": "#A9744F", "photo": "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/ursa-waist-strap-caramelo_SpTV.webp"}], info: [["tag", "Tipo", "Correa", 1], ["palette", "Colores", "5 colores", 1], ["capacity", "Tallas", "S · M · L"]], specs: [["Categoría", "Correa"], ["Marca", "Ursa Straps"], ["Descripción", "Correa de cintura con compartimento grande para la petaca, oculta bajo la ropa."], ["Zona", "Cintura"], ["Compartimento", "Grande"], ["Tallas", "S · M · L"], ["Colores", "Beige · Blanco · Negro · Marrón · Caramelo"]], icon: lavaccIcon("#1F2937") },
  { cat: "lavacc", type: "Correa", brand: "Ursa Straps", brandCode: "U", brandColor: "#1F2937", model: "Ursa Waist Strap doble compartimento", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/ursa-waist-strap-double-beige_SpTV.webp", color: "Beige", colors: [], info: [["tag", "Tipo", "Correa", 1], ["palette", "Color", "Beige", 1], ["capacity", "Talla", "M"]], specs: [["Categoría", "Correa"], ["Marca", "Ursa Straps"], ["Descripción", "Correa de cintura con dos compartimentos (petaca y grabador o dos petacas)."], ["Zona", "Cintura"], ["Compartimento", "Doble"], ["Talla", "M"], ["Colores", "Beige"]], icon: lavaccIcon("#1F2937") },
  { cat: "lavacc", type: "Correa", brand: "Viviana", brandCode: "V", brandColor: "#5C6672", model: "Viviana Waist Strap Extreme", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/viviana-waist-extreme-beige_SpTV.webp", color: "Beige|Negro", colors: [{"name": "Beige", "hex": "#D8B48C", "photo": "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/viviana-waist-extreme-beige_SpTV.webp"}, {"name": "Negro", "hex": "#1A1A1A", "photo": "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/viviana-waist-extreme-negro_SpTV.webp"}], info: [["tag", "Tipo", "Correa", 1], ["palette", "Colores", "2 colores", 1], ["capacity", "Tallas", "S · M · L · XL"]], specs: [["Categoría", "Correa"], ["Marca", "Viviana"], ["Descripción", "Correa de cintura Extreme de Viviana: sujeción firme de la petaca para escenas de movimiento."], ["Zona", "Cintura"], ["Tallas", "S · M · L · XL"], ["Colores", "Beige · Negro"]], icon: lavaccIcon("#5C6672") },
  { cat: "lavacc", type: "Correa", brand: "Ursa Straps", brandCode: "U", brandColor: "#1F2937", model: "Ursa Back Strap", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/ursa-back-strap-beige_SpTV.webp", color: "Beige|Negro", colors: [{"name": "Beige", "hex": "#D8B48C", "photo": "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/ursa-back-strap-beige_SpTV.webp"}, {"name": "Negro", "hex": "#1A1A1A", "photo": "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/ursa-back-strap-negro_SpTV.webp"}], info: [["tag", "Tipo", "Correa", 1], ["palette", "Colores", "2 colores", 1], ["capacity", "Tallas", "S · M · L"]], specs: [["Categoría", "Correa"], ["Marca", "Ursa Straps"], ["Descripción", "Correa para llevar la petaca en la espalda, bajo la ropa."], ["Zona", "Espalda"], ["Tallas", "S · M · L"], ["Colores", "Beige · Negro"]], icon: lavaccIcon("#1F2937") },
  { cat: "lavacc", type: "Correa", brand: "Ursa Straps", brandCode: "U", brandColor: "#1F2937", model: "Ursa X-Strap", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/ursa-x-strap-beige_SpTV.webp", color: "Beige|Negro", colors: [{"name": "Beige", "hex": "#D8B48C", "photo": "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/ursa-x-strap-beige_SpTV.webp"}, {"name": "Negro", "hex": "#1A1A1A", "photo": "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/ursa-x-strap-negro_SpTV.webp"}], info: [["tag", "Tipo", "Correa", 1], ["palette", "Colores", "2 colores", 1], ["capacity", "Tallas", "S · M · L · XL"]], specs: [["Categoría", "Correa"], ["Marca", "Ursa Straps"], ["Descripción", "Arnés en X para la espalda: reparte el peso y sujeta la petaca sin moverse."], ["Zona", "Espalda (en X)"], ["Tallas", "S · M · L · XL"], ["Colores", "Beige · Negro"]], icon: lavaccIcon("#1F2937") },
  { cat: "lavacc", type: "Correa", brand: "Viviana", brandCode: "V", brandColor: "#5C6672", model: "Viviana Thigh Strap Extreme", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/viviana-thigh-extreme-beige_SpTV.webp", color: "Beige|Negro", colors: [{"name": "Beige", "hex": "#D8B48C", "photo": "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/viviana-thigh-extreme-beige_SpTV.webp"}, {"name": "Negro", "hex": "#1A1A1A", "photo": "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/viviana-thigh-extreme-negro_SpTV.webp"}], info: [["tag", "Tipo", "Correa", 1], ["palette", "Colores", "2 colores", 1]], specs: [["Categoría", "Correa"], ["Marca", "Viviana"], ["Descripción", "Correa de muslo Extreme de Viviana para llevar la petaca en la pierna."], ["Zona", "Muslo"], ["Colores", "Beige · Negro"]], icon: lavaccIcon("#5C6672") },
  { cat: "lavacc", type: "Correa", brand: "Ursa Straps", brandCode: "U", brandColor: "#1F2937", model: "Ursa Thigh Strap Side", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/ursa-thigh-side-beige_SpTV.webp", color: "Beige|Negro|Blanco|Marrón", colors: [{"name": "Beige", "hex": "#D8B48C", "photo": "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/ursa-thigh-side-beige_SpTV.webp"}, {"name": "Negro", "hex": "#1A1A1A", "photo": "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/ursa-thigh-side-negro_SpTV.webp"}], info: [["tag", "Tipo", "Correa", 1], ["palette", "Colores", "4 colores", 1]], specs: [["Categoría", "Correa"], ["Marca", "Ursa Straps"], ["Descripción", "Correa de muslo con la petaca en horizontal, en el lateral de la pierna."], ["Zona", "Muslo"], ["Posición", "Lateral / horizontal"], ["Colores", "Beige · Negro · Blanco · Marrón"]], icon: lavaccIcon("#1F2937") },
  { cat: "lavacc", type: "Correa", brand: "Ursa Straps", brandCode: "U", brandColor: "#1F2937", model: "Ursa Thigh Strap", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/ursa-thigh-strap-beige_SpTV.webp", color: "Beige|Negro|Blanco|Marrón|Caramelo", colors: [{"name": "Beige", "hex": "#D8B48C", "photo": "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/ursa-thigh-strap-beige_SpTV.webp"}, {"name": "Negro", "hex": "#1A1A1A", "photo": "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/ursa-thigh-strap-negro_SpTV.webp"}, {"name": "Blanco", "hex": "#FFFFFF", "photo": "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/ursa-thigh-strap-blanco_SpTV.webp"}, {"name": "Marrón", "hex": "#6B4A2B", "photo": "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/ursa-thigh-strap-marron_SpTV.webp"}, {"name": "Caramelo", "hex": "#A9744F", "photo": "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/ursa-thigh-strap-caramelo_SpTV.webp"}], info: [["tag", "Tipo", "Correa", 1], ["palette", "Colores", "5 colores", 1]], specs: [["Categoría", "Correa"], ["Marca", "Ursa Straps"], ["Descripción", "Correa de muslo con la petaca en vertical."], ["Zona", "Muslo"], ["Posición", "Vertical"], ["Colores", "Beige · Negro · Blanco · Marrón · Caramelo"]], icon: lavaccIcon("#1F2937") },
  { cat: "lavacc", type: "Correa", brand: "Ursa Straps", brandCode: "U", brandColor: "#1F2937", model: "Ursa Calf Strap", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/ursa-calf-strap-beige_SpTV.webp", color: "Beige|Negro", colors: [{"name": "Beige", "hex": "#D8B48C", "photo": "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/ursa-calf-strap-beige_SpTV.webp"}, {"name": "Negro", "hex": "#1A1A1A", "photo": "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/ursa-calf-strap-negro_SpTV.webp"}], info: [["tag", "Tipo", "Correa", 1], ["palette", "Colores", "2 colores", 1]], specs: [["Categoría", "Correa"], ["Marca", "Ursa Straps"], ["Descripción", "Correa de pantorrilla para llevar la petaca en la pierna, bajo el pantalón."], ["Zona", "Pantorrilla"], ["Colores", "Beige · Negro"]], icon: lavaccIcon("#1F2937") },
  { cat: "lavacc", type: "Correa", brand: "Ursa Straps", brandCode: "U", brandColor: "#1F2937", model: "Ursa Chest Strap", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/ursa-chest-strap-beige_SpTV.webp", color: "Beige|Negro|Blanco|Marrón|Caramelo", colors: [{"name": "Beige", "hex": "#D8B48C", "photo": "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/ursa-chest-strap-beige_SpTV.webp"}, {"name": "Negro", "hex": "#1A1A1A", "photo": "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/ursa-chest-strap-negro_SpTV.webp"}, {"name": "Blanco", "hex": "#FFFFFF", "photo": "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/ursa-chest-strap-blanco_SpTV.webp"}, {"name": "Marrón", "hex": "#6B4A2B", "photo": "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/ursa-chest-strap-marron_SpTV.webp"}, {"name": "Caramelo", "hex": "#A9744F", "photo": "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/ursa-chest-strap-caramelo_SpTV.webp"}], info: [["tag", "Tipo", "Correa", 1], ["palette", "Colores", "5 colores", 1]], specs: [["Categoría", "Correa"], ["Marca", "Ursa Straps"], ["Descripción", "Correa de pecho para fijar el micrófono o la petaca en el torso."], ["Zona", "Pecho"], ["Colores", "Beige · Negro · Blanco · Marrón · Caramelo"]], icon: lavaccIcon("#1F2937") },
  { cat: "lavacc", type: "Correa", brand: "Viviana", brandCode: "V", brandColor: "#5C6672", model: "Viviana Chest Strap Extreme", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/viviana-chest-extreme-beige_SpTV.webp", color: "Beige", colors: [], info: [["tag", "Tipo", "Correa", 1], ["palette", "Color", "Beige", 1]], specs: [["Categoría", "Correa"], ["Marca", "Viviana"], ["Descripción", "Correa de pecho Extreme de Viviana."], ["Zona", "Pecho"], ["Colores", "Beige"]], icon: lavaccIcon("#5C6672") },
  { cat: "lavacc", type: "Correa", brand: "Viviana", brandCode: "V", brandColor: "#5C6672", model: "Viviana Ankle Strap Extreme", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/viviana-ankle-extreme-beige_SpTV.webp", color: "Beige|Negro", colors: [{"name": "Beige", "hex": "#D8B48C", "photo": "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/viviana-ankle-extreme-beige_SpTV.webp"}, {"name": "Negro", "hex": "#1A1A1A", "photo": "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/viviana-ankle-extreme-negro_SpTV.webp"}], info: [["tag", "Tipo", "Correa", 1], ["palette", "Colores", "2 colores", 1]], specs: [["Categoría", "Correa"], ["Marca", "Viviana"], ["Descripción", "Correa de tobillo Extreme de Viviana para llevar la petaca bajo el pantalón."], ["Zona", "Tobillo"], ["Colores", "Beige · Negro"]], icon: lavaccIcon("#5C6672") },
  { cat: "lavacc", type: "Correa", brand: "Ursa Straps", brandCode: "U", brandColor: "#1F2937", model: "Ursa Ankle Strap", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/ursa-ankle-strap-beige_SpTV.webp", color: "Beige|Blanco|Negro|Marrón|Caramelo", colors: [{"name": "Beige", "hex": "#D8B48C", "photo": "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/ursa-ankle-strap-beige_SpTV.webp"}, {"name": "Blanco", "hex": "#FFFFFF", "photo": "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/ursa-ankle-strap-blanco_SpTV.webp"}, {"name": "Negro", "hex": "#1A1A1A", "photo": "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/ursa-ankle-strap-negro_SpTV.webp"}, {"name": "Caramelo", "hex": "#A9744F", "photo": "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/ursa-ankle-strap-caramelo_SpTV.webp"}], info: [["tag", "Tipo", "Correa", 1], ["palette", "Colores", "5 colores", 1]], specs: [["Categoría", "Correa"], ["Marca", "Ursa Straps"], ["Descripción", "Correa de tobillo con la petaca en vertical."], ["Zona", "Tobillo"], ["Posición", "Vertical"], ["Colores", "Beige · Blanco · Negro · Marrón · Caramelo"]], icon: lavaccIcon("#1F2937") },
  { cat: "lavacc", type: "Pantalón", brand: "Ursa Straps", brandCode: "U", brandColor: "#1F2937", model: "Ursa Shorties", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/ursa-shorties-beige_SpTV.webp", color: "Beige", colors: [], info: [["tag", "Tipo", "Pantalón", 1], ["palette", "Color", "Beige", 1], ["capacity", "Tallas", "S · M · L"]], specs: [["Categoría", "Pantalón"], ["Marca", "Ursa Straps"], ["Descripción", "Pantalón corto ajustado con bolsillos para petacas, para llevar bajo vestidos y faldas."], ["Tallas", "S · M · L"], ["Colores", "Beige"]], icon: lavaccIcon("#1F2937") },
  { cat: "lavacc", type: "Organizador", brand: "Bubblebee Industries", brandCode: "B", brandColor: "#C99700", model: "Bubblebee The Mic Accessory Case", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/bubblebee-mic-accessory-case-unico_SpTV.webp", color: "Único", colors: [], info: [["tag", "Tipo", "Organizador", 1], ["palette", "Color", "Único", 1]], specs: [["Categoría", "Organizador"], ["Marca", "Bubblebee Industries"], ["Descripción", "Estuche organizador para micrófonos de solapa y sus accesorios."], ["Formato", "Pack de 2 unidades"], ["Colores", "Único"]], icon: lavaccIcon("#C99700") },
  { cat: "lavacc", type: "Organizador", brand: "ORCA", brandCode: "O", brandColor: "#1A1A1A", model: "ORCA OR-29", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/orca-or-29-unico_SpTV.webp", color: "Único", colors: [], info: [["tag", "Tipo", "Organizador", 1], ["palette", "Color", "Único", 1]], specs: [["Categoría", "Organizador"], ["Marca", "ORCA"], ["Descripción", "Organizador ORCA para guardar y transportar accesorios de sonido."], ["Modelo", "OR-29"], ["Colores", "Único"]], icon: lavaccIcon("#1A1A1A") },
  { cat: "lavacc", type: "Organizador", brand: "Viviana", brandCode: "V", brandColor: "#5C6672", model: "Viviana Big Bag", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/viviana-big-bag-unico_SpTV.webp", color: "Único", colors: [], info: [["tag", "Tipo", "Organizador", 1], ["palette", "Color", "Único", 1]], specs: [["Categoría", "Organizador"], ["Marca", "Viviana"], ["Descripción", "Bolsa organizadora grande de Viviana para correas, petacas y accesorios."], ["Tamaño", "Grande"], ["Colores", "Único"]], icon: lavaccIcon("#5C6672") }
];

// MICS: rental catalogue, RØDE and Hollyland microphones (official photos and data from rode.com/es-es and hollyland.com)
const MICS = [
  { cat: "mic", type: "Inalámbrico", brand: "RØDE", brandCode: "R", brandColor: "#111111", model: "Wireless GO (Gen 3)", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/rode-wireless-go-gen-3_SpTV.webp", color: "Negro", colors: [],
    info: [["tag", "Tipo", "Inalámbrico", 1], ["signal", "Alcance", "260 m", 1], ["capacity", "Incluye", "2 transmisores + 1 receptor"]],
    specs: [["Categoría", "Micrófono inalámbrico"], ["Marca", "RØDE"], ["Descripción", "Sistema inalámbrico compacto: dos transmisores con micrófono integrado y un receptor para cámara, móvil u ordenador. Cada transmisor graba además una copia en coma flotante de 32 bits, así que el audio saturado o demasiado bajo se recupera en edición."], ["Incluye", "2 transmisores + 1 receptor"], ["Patrón polar", "Omnidireccional"], ["Alcance", "Hasta 260 m (con visión directa)"], ["Grabación interna", "Coma flotante de 32 bits"], ["Autonomía", "Hasta 7 h"], ["Conexiones", "Salida 3,5 mm TRRS y USB-C · entrada de micro de solapa 3,5 mm con bloqueo"], ["Compatible con", "Cámaras, iPhone, Android y ordenador"]],
    icon: micsIcon("#111111") },
  { cat: "mic", type: "Inalámbrico", brand: "RØDE", brandCode: "R", brandColor: "#111111", model: "Wireless PRO", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/rode-wireless-pro_SpTV.webp", color: "Negro", colors: [],
    info: [["tag", "Tipo", "Inalámbrico", 1], ["signal", "Alcance", "260 m", 1], ["capacity", "Incluye", "2 transmisores + 1 receptor + estuche de carga"]],
    specs: [["Categoría", "Micrófono inalámbrico"], ["Marca", "RØDE"], ["Descripción", "El sistema inalámbrico más completo de RØDE: grabación interna en coma flotante de 32 bits, código de tiempo para sincronizar audio y vídeo, y GainAssist para ajustar los niveles solo. Pensado para rodajes profesionales."], ["Incluye", "2 transmisores + 1 receptor + estuche de carga"], ["Patrón polar", "Omnidireccional"], ["Alcance", "Hasta 260 m (con visión directa)"], ["Grabación interna", "Coma flotante de 32 bits"], ["Código de tiempo", "Sí"], ["Autonomía", "Hasta 7 h"], ["Conexiones", "Salida 3,5 mm TRRS y USB-C · entrada de micro de solapa 3,5 mm con bloqueo"]],
    icon: micsIcon("#111111") },
  { cat: "mic", type: "Inalámbrico", brand: "RØDE", brandCode: "R", brandColor: "#111111", model: "Wireless ME", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/rode-wireless-me_SpTV.webp", color: "Negro", colors: [],
    info: [["tag", "Tipo", "Inalámbrico", 1], ["signal", "Alcance", "100 m", 1], ["capacity", "Incluye", "1 transmisor + 1 receptor"]],
    specs: [["Categoría", "Micrófono inalámbrico"], ["Marca", "RØDE"], ["Descripción", "Sistema inalámbrico ultracompacto con micrófono tanto en el transmisor como en el receptor: graba a la persona que habla y también a quien está detrás de la cámara, ideal para entrevistas y vídeos sencillos."], ["Incluye", "1 transmisor + 1 receptor"], ["Patrón polar", "Omnidireccional"], ["Alcance", "Hasta 100 m"], ["Calidad", "24 bits · 48 kHz"], ["Autonomía", "Hasta 7 h"], ["Conexiones", "Salida 3,5 mm TRS y USB-C · entrada de micro de solapa"], ["Compatible con", "Cámaras, móviles y ordenador"]],
    icon: micsIcon("#111111") },
  { cat: "mic", type: "Inalámbrico", brand: "Hollyland", brandCode: "H", brandColor: "#111111", model: "Lark Max 2", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/hollyland-lark-max-2_SpTV.webp", color: "Negro", colors: [],
    info: [["tag", "Tipo", "Inalámbrico", 1], ["signal", "Alcance", "340 m", 1], ["capacity", "Incluye", "2 transmisores + 2 receptores + estuche"]],
    specs: [["Categoría", "Micrófono inalámbrico"], ["Marca", "Hollyland"], ["Descripción", "Sistema inalámbrico de gama alta para rodajes profesionales: cada transmisor graba además una copia interna en coma flotante de 32 bits, lleva código de tiempo para sincronizar con la cámara y reducción de ruido con IA ajustable. El receptor de cámara tiene pantalla táctil."], ["Incluye", "2 transmisores + receptor de cámara + receptor USB-C + estuche de carga"], ["Patrón polar", "Omnidireccional"], ["Alcance", "Hasta 340 m (con visión directa)"], ["Grabación interna", "Coma flotante de 32 bits · 8 GB por transmisor"], ["Código de tiempo", "Sí"], ["Reducción de ruido", "Con IA, ajustable de 5 a 25 dB"], ["Autonomía", "Transmisor hasta 11 h (36 h con el estuche) · receptor de cámara 12 h"], ["Conexiones", "Receptor de cámara: salida 3,5 mm y USB-C · receptor USB-C para móvil y ordenador"], ["Compatible con", "Cámaras, iPhone, Android y ordenador"]],
    icon: micsIcon("#111111") },
  { cat: "mic", type: "Inalámbrico", brand: "Hollyland", brandCode: "H", brandColor: "#111111", model: "Lark M3", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/hollyland-lark-m3_SpTV.webp", color: "Negro", colors: [],
    info: [["tag", "Tipo", "Inalámbrico", 1], ["signal", "Alcance", "300 m", 1], ["capacity", "Incluye", "2 transmisores + 2 receptores + estuche"]],
    specs: [["Categoría", "Micrófono inalámbrico"], ["Marca", "Hollyland"], ["Descripción", "Sistema inalámbrico versátil y muy ligero, para cámara y para móvil: transmisores de 9 g con imán, audio en coma flotante de 32 bits y reducción de ruido con IA de tres niveles."], ["Incluye", "2 transmisores + receptor de cámara + receptor USB-C + estuche de carga"], ["Patrón polar", "Omnidireccional"], ["Alcance", "Hasta 300 m (con visión directa)"], ["Calidad", "48 kHz · 24 bits y coma flotante de 32 bits"], ["Reducción de ruido", "Con IA, 3 niveles (10, 15 y 20 dB)"], ["Autonomía", "Transmisor hasta 8 h (24 h con el estuche) · receptor de cámara 9 h"], ["Conexiones", "Receptor de cámara: salida 3,5 mm · receptor USB-C para móvil y ordenador (certificado MFi)"], ["Compatible con", "Cámaras, iPhone, Android y ordenador"]],
    icon: micsIcon("#111111") },
  { cat: "mic", type: "Podcast / estudio", brand: "RØDE", brandCode: "R", brandColor: "#111111", model: "PodMic", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/rode-podmic_SpTV.webp", color: "Negro", colors: [],
    info: [["tag", "Tipo", "Podcast / estudio", 1], ["port", "Conexión", "XLR", 1], ["capacity", "Patrón", "Cardioide"]],
    specs: [["Categoría", "Micrófono dinámico para podcast"], ["Marca", "RØDE"], ["Descripción", "Micrófono dinámico con calidad de radio para podcast, directos y locuciones. Lleva filtro antipop y suspensión antivibraciones internos, y un soporte giratorio para colocarlo fácilmente en un brazo o pie."], ["Tipo", "Dinámico"], ["Patrón polar", "Cardioide"], ["Respuesta de frecuencia", "50 Hz – 15 kHz"], ["Conexión", "XLR"], ["Alimentación", "No necesita"], ["Uso", "Con interfaz de audio o mesa de mezclas con entrada XLR"]],
    icon: micsIcon("#111111") },
  { cat: "mic", type: "Kit para móvil", brand: "RØDE", brandCode: "R", brandColor: "#111111", model: "Vlogger Kit Universal", photo: "https://m3hervas.github.io/CatalogoSoporte/alquiler/img/rode-vlogger-kit-universal_SpTV.webp", color: "Negro", colors: [],
    info: [["tag", "Tipo", "Kit para móvil", 1], ["port", "Conexión", "3,5 mm", 1], ["capacity", "Incluye", "Micrófono, luz, soporte y trípode"]],
    specs: [["Categoría", "Kit de grabación para móvil"], ["Marca", "RØDE"], ["Descripción", "Todo lo necesario para grabar con el móvil: micrófono VideoMicro direccional, luz MicroLED, soporte SmartGrip y trípode Tripod 2 que también sirve de empuñadura."], ["Incluye", "VideoMicro · MicroLED · SmartGrip · Tripod 2 · soporte de doble zapata DCS-1 · suspensión Rycote Lyre · antiviento de pelo WS9"], ["Micrófono", "VideoMicro, cardioide"], ["Conexión", "3,5 mm TRRS (para móviles con toma de auriculares)"]],
    icon: micsIcon("#111111") }
];

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
      storage: storages.join("|"), type: allValues("type"), group: allValues("group"), cpu: allValues("cpu"),
      size: allValues("size"), voltage: allValues("voltage"), color: allValues("color")
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
  if (gridEl) SEARCH_SOURCES.push({ grid: gridEl, items, grouped: true });
  deferRender(gridEl, () => drawModelCards(items, gridEl, info));
}

function drawModelCards(items, gridEl, info) {
  groupByModel(items).forEach(p => {
    const pid = productId(gridEl, p);
    if (HIDDEN_PRODUCTS.has(pid)) return;
    const card = document.createElement("button");
    card.className = "storage-card model-card";
    card.dataset.pid = pid;
    card.dataset.cat = p.cat;
    card.dataset.brand = p.brand || "Sin marca";
    card.dataset.storage = p.storage;
    card.dataset.type = p.type || "";
    card.dataset.group = p.group || "";
    card.dataset.cpu = p.cpu || "";
    card.dataset.size = p.size || "";
    card.dataset.voltage = p.voltage || "";
    card.dataset.color = p.color || "";
    card.setAttribute("aria-haspopup", "dialog");
    const media = p.photo ? `<img src="${smallPhoto(p.photo)}" alt="${p.model}" loading="lazy" decoding="async">` : p.icon;
    const box = info(p);
    const boxes = Array.isArray(box) ? box : [box];
    card.innerHTML = `
      <div class="storage-photo">${media}</div>
      <div class="storage-info">
        ${p.brand ? `<div class="brand-line">${badgeMarkup(p)}</div>` : ""}
        <div class="title-row"><h3>${p.model}</h3>${swatchesMarkup(p, "card-swatches")}</div>
        <div class="storage-icons">
          ${boxes.map(b => `<div class="storage-icon ${b.small ? "storage-icon-small" : "storage-icon-wide"}" title="${b.title}">${b.icon}<span>${b.text}</span></div>`).join("")}
        </div>
        <span class="card-hint">Toca para ver la ficha técnica</span>
      </div>
    `;
    bindSwatches(card, p, card.querySelector(".storage-photo img"));
    card.addEventListener("click", () => openPanel(p));
    card._product = p;
    card.style.setProperty("--i", gridEl.children.length);
    gridEl.appendChild(card);
  });
}

// --- Colours: one dot per colour; the chosen one changes the photo and goes into the request ---
function swatchesMarkup(p, extraClass = "") {
  if (!p.colors || p.colors.length < 2) return "";
  const sel = p.colorIndex || 0;
  return `<div class="swatches ${extraClass}" role="group" aria-label="Colores">
    ${p.colors.map((c, i) => `<span class="swatch" role="button" tabindex="0" data-i="${i}" style="--sw:${c.hex}" title="${c.name}" aria-label="${c.name}" aria-pressed="${i === sel}"></span>`).join("")}
    <span class="swatch-name">${p.colors[sel].name}</span>
  </div>`;
}

function bindSwatches(root, p, img) {
  root.querySelectorAll(".swatch").forEach(sw => {
    const pick = e => {
      e.stopPropagation();
      e.preventDefault();
      const i = Number(sw.dataset.i);
      p.colorIndex = i;
      if (img && p.colors[i].photo) { img.src = smallPhoto(p.colors[i].photo); img.alt = `${p.model} (${p.colors[i].name})`; }
      root.querySelectorAll(".swatch").forEach(o => o.setAttribute("aria-pressed", String(o === sw)));
      const label = sw.parentElement.querySelector(".swatch-name");
      if (label) label.textContent = p.colors[i].name;
    };
    sw.addEventListener("click", pick);
    sw.addEventListener("keydown", e => { if (e.key === "Enter" || e.key === " ") pick(e); });
  });
}

// --- Product sheet ---
// Technical-sheet rows that list several versions of the product ("S · M · L", "128 GB / 256 GB"...) become
// buttons to choose from; the label is the name of the choice
const OPTION_SPECS = {
  Almacenamiento: "Capacidad", Procesador: "Procesador", RAM: "RAM", Modelos: "Modelo", Red: "Red", Datos: "Datos",
  Tamaños: "Tamaño", Tallas: "Talla", Medidas: "Medida", Formatos: "Formato", Versiones: "Versión", Puntas: "Punta",
  Alturas: "Altura", Anchos: "Ancho", Largos: "Largo", Grosores: "Grosor", Apertura: "Apertura", Referencias: "Referencia", Efectos: "Efecto"
};
// Technical sheet rows per product type, in this order (the other data stays, but is not shown).
// Types not listed here show every row.
const SHEET_ROWS = {
  ipad: ["Categoría", "Pantalla", "Conectividad"],
  android: ["Categoría", "Pantalla", "Conectividad"]
};

function optionGroups(p) {
  const groups = [];
  p.specs.forEach(([label, value]) => {
    if (!OPTION_SPECS[label] || /<br>/.test(value)) return;
    const parts = String(value).split(/ · | \/ /).map(x => x.trim()).filter(Boolean);
    if (parts.length < 2 || parts.some(x => x.length > 48)) return;
    // "10 · 15 · 30 mm": the unit written once at the end goes on every number before it
    let unit = "";
    for (let i = parts.length - 1; i >= 0; i--) {
      const m = parts[i].match(/^[\d.,]+(?:\s*×\s*[\d.,]+)?\s*([a-zA-Z]+)$/);
      if (m) unit = m[1];
      else if (unit && /^[\d.,]+(?:\s*×\s*[\d.,]+)?$/.test(parts[i])) parts[i] += " " + unit;
    }
    groups.push({ label: OPTION_SPECS[label], spec: label, options: parts });
  });
  return groups;
}

// Quantities: whole numbers from 1 to 999 (anything else typed becomes the nearest valid amount)
const MAX_QTY = 999;
function clampQty(v) { return Math.max(1, Math.min(MAX_QTY, Math.round(Number(v)) || 1)); }

let panelReturnFocus = null;
function openPanel(p) {
  panelReturnFocus = document.activeElement;
  const colors = p.colors && p.colors.length > 1 ? p.colors : [];
  const ci = () => p.colorIndex || 0;
  const photo = (colors.length && colors[ci()].photo) || p.photo || "";
  const groups = optionGroups(p);
  const chosen = groups.map(() => null);
  const used = new Set(["Descripción", "Colores", ...groups.map(g => g.spec)]);
  const desc = specOf(p, "Descripción");
  const shown = SHEET_ROWS[p.cat]
    ? SHEET_ROWS[p.cat].map(l => p.specs.find(([x]) => x === l)).filter(Boolean)
    : p.specs.filter(([l]) => !used.has(l));
  // 11 '' -> 11''
  const rows = shown.map(([l, v]) => `<tr><th scope="row">${l}</th><td>${String(v).replace(/\s+''/g, "''")}</td></tr>`).join("");
  const kind = String(p.type || p.catLabel || "").split("|")[0];
  const singleColor = !colors.length && p.color && !String(p.color).includes("|") ? p.color : "";
  const thumbs = colors.filter(c => c.photo).length > 1
    ? colors.map((c, i) => c.photo ? `<button type="button" class="pv-thumb" data-i="${i}" aria-label="Ver en ${c.name}" aria-pressed="${i === ci()}"><img src="${smallPhoto(c.photo)}" alt="" decoding="async"></button>` : "").join("")
    : "";

  panel.innerHTML = `
    <button class="pv-close" id="closeBtn" type="button" aria-label="Cerrar ficha"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6l12 12M18 6 6 18"/></svg></button>
    <div class="pv-media">
      <div class="pv-stage">${photo
        ? `<img id="pvImg" src="${photo}" alt="${p.model}${colors.length ? ` (${colors[ci()].name})` : ""}" decoding="async">`
        : `<div class="pv-icon">${p.icon || ""}</div>`}</div>
      ${thumbs ? `<div class="pv-thumbs" role="group" aria-label="Fotos por color">${thumbs}</div>` : ""}
    </div>
    <div class="pv-info">
      ${p.brand ? `<div class="pv-brand">${badgeMarkup(p)}</div>` : ""}
      <h2 class="pv-title" id="panel-name">${p.model}</h2>
      ${kind ? `<p class="pv-kind">${kind}</p>` : ""}
      <div class="pv-avail">
        <span class="pv-price">Precio bajo presupuesto, sin compromiso</span>
      </div>
      ${colors.length ? `<div class="pv-group">
        <p class="pv-group-label">Color: <strong id="pvColorName">${colors[ci()].name}</strong></p>
        <div class="pv-choices" role="group" aria-label="Color">${colors.map((c, i) =>
          `<button type="button" class="pv-color" data-i="${i}" aria-pressed="${i === ci()}"><span class="pv-dot" style="--sw:${c.hex}"></span>${c.name}</button>`).join("")}</div>
      </div>` : singleColor ? `<div class="pv-group"><p class="pv-group-label">Color: <strong>${singleColor}</strong></p></div>` : ""}
      ${groups.map((g, gi) => `<div class="pv-group" data-g="${gi}">
        <p class="pv-group-label">${g.label}: <strong class="pv-pick">elige una opción</strong></p>
        <div class="pv-choices" role="group" aria-label="${g.label}">${g.options.map((o, oi) =>
          `<button type="button" class="pv-chip" data-oi="${oi}" aria-pressed="false">${o}</button>`).join("")}</div>
        <p class="pv-need" hidden>Elige ${g.label.toLowerCase()} para añadirlo a tu lista.</p>
      </div>`).join("")}
      <div class="pv-buy">
        <div class="qty" role="group" aria-label="Cantidad">
          <button type="button" data-step="-1" aria-label="Uno menos" disabled>−</button><input class="qty-n" id="panelQty" type="number" inputmode="numeric" min="1" max="999" step="1" value="1" aria-label="Cantidad"><button type="button" data-step="1" aria-label="Uno más">+</button>
        </div>
        <button class="primary-btn pv-add" id="panelRequest" type="button">Añadir a mi lista</button>
        <p class="panel-added" id="panelAdded" role="status" hidden></p>
        <p class="pv-note">Te enviamos el presupuesto por correo, sin compromiso.</p>
      </div>
      ${desc ? `<section class="pv-section"><h3>Sobre este producto</h3><p>${desc}</p></section>` : ""}
      ${rows ? `<section class="pv-section"><h3>Ficha técnica</h3><div class="pv-specs-wrap"><table class="pv-specs"><tbody>${rows}</tbody></table></div></section>` : ""}
    </div>
  `;

  scrim.classList.add("open");
  panel.classList.add("open");
  document.documentElement.classList.add("sheet-open");
  panel.scrollTop = 0;
  shadow.getElementById("closeBtn").addEventListener("click", closePanel);
  shadow.getElementById("closeBtn").focus({ preventScroll: true });

  // Colour: buttons and thumbnails change the photo; the card behind shows the same colour
  const img = shadow.getElementById("pvImg");
  const pickColor = i => {
    p.colorIndex = i;
    const c = colors[i];
    if (img && c.photo) { img.src = c.photo; img.alt = `${p.model} (${c.name})`; }
    shadow.getElementById("pvColorName").textContent = c.name;
    panel.querySelectorAll(".pv-color, .pv-thumb").forEach(b => b.setAttribute("aria-pressed", String(Number(b.dataset.i) === i)));
    const card = [...shadow.querySelectorAll(".model-card")].find(cd => cd._product === p);
    const sw = card && card.querySelector(`.swatch[data-i="${i}"]`);
    if (sw && sw.getAttribute("aria-pressed") !== "true") sw.click();
  };
  panel.querySelectorAll(".pv-color, .pv-thumb").forEach(b => b.addEventListener("click", () => pickColor(Number(b.dataset.i))));

  // Other choices (size, capacity, format...)
  panel.querySelectorAll(".pv-group[data-g]").forEach(groupEl => {
    const gi = Number(groupEl.dataset.g);
    groupEl.querySelectorAll(".pv-chip").forEach(chip => chip.addEventListener("click", () => {
      chosen[gi] = Number(chip.dataset.oi);
      groupEl.querySelectorAll(".pv-chip").forEach(o => o.setAttribute("aria-pressed", String(o === chip)));
      const pick = groupEl.querySelector(".pv-group-label strong");
      pick.textContent = groups[gi].options[chosen[gi]];
      pick.classList.remove("pv-pick");
      groupEl.classList.remove("is-missing");
      groupEl.querySelector(".pv-need").hidden = true;
    }));
  });

  // Quantity: − / + or type the number
  let qty = 1;
  const qtyN = shadow.getElementById("panelQty");
  const minus = panel.querySelector('.pv-buy [data-step="-1"]');
  const setQty = v => { qty = clampQty(v); qtyN.value = qty; minus.disabled = qty === 1; };
  panel.querySelectorAll(".pv-buy [data-step]").forEach(b => b.addEventListener("click", () => setQty(qty + Number(b.dataset.step))));
  qtyN.addEventListener("input", () => { if (qtyN.value !== "") { qty = clampQty(qtyN.value); minus.disabled = qty === 1; } });
  qtyN.addEventListener("change", () => setQty(qtyN.value));
  qtyN.addEventListener("focus", () => qtyN.select());
  qtyN.addEventListener("keydown", e => { if (e.key === "Enter") { e.preventDefault(); setQty(qtyN.value); qtyN.blur(); } });

  const cpu = p.cat === "computer" && !groups.some(g => g.spec === "Procesador") && p.variants && p.variants.length === 1 ? specOf(p, "Procesador") : "";
  shadow.getElementById("panelRequest").addEventListener("click", () => {
    setQty(qtyN.value);
    const missing = groups.map((g, gi) => chosen[gi] === null ? gi : -1).filter(gi => gi > -1);
    if (missing.length) {
      missing.forEach(gi => {
        const groupEl = panel.querySelector(`.pv-group[data-g="${gi}"]`);
        groupEl.classList.add("is-missing");
        groupEl.querySelector(".pv-need").hidden = false;
      });
      const first = panel.querySelector(`.pv-group[data-g="${missing[0]}"]`);
      first.scrollIntoView({ behavior: "smooth", block: "center" });
      first.querySelector(".pv-chip").focus({ preventScroll: true });
      return;
    }
    const extra = [
      cpu,
      ...groups.map((g, gi) => `${g.label.toLowerCase()} ${g.options[chosen[gi]]}`),
      colors.length ? `color ${colors[ci()].name.toLowerCase()}` : ""
    ].filter(Boolean).join(", ");
    const name = p.model + (extra ? ` (${extra})` : "");
    addToList(name, qty);
    const added = shadow.getElementById("panelAdded");
    added.innerHTML = `Añadido: ${qty} × ${name}. <button type="button" class="link-btn" id="panelSeeList">Ver lista y enviar</button>`;
    added.hidden = false;
    shadow.getElementById("panelSeeList").addEventListener("click", () => openRent());
  });
}

function closePanel() {
  const wasOpen = panel.classList.contains("open");
  scrim.classList.remove("open");
  panel.classList.remove("open");
  document.documentElement.classList.remove("sheet-open");
  if (wasOpen && panelReturnFocus && document.contains(panelReturnFocus)) panelReturnFocus.focus({ preventScroll: true });
}

scrim.addEventListener("click", closePanel);
document.addEventListener("keydown", e => {
  if (e.key === "Escape") closePanel();
});

// Tablets: iPad Pro, iPad Air, iPad, then Samsung and Lenovo (newest first inside each group)
const TABLET_ORDER = [
  "iPad Pro (M5)", "iPad Pro (4.ª generación)",
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
renderModelCards(BATTERIES, shadow.getElementById("gridBatteries"), CARD_INFO.custom);
renderModelCards(SOUND, shadow.getElementById("gridSound"), CARD_INFO.custom);
setupDataFilters(SOUND, "sound");
renderModelCards(STATIONERY, shadow.getElementById("gridStationery"), CARD_INFO.custom);
setupDataFilters(STATIONERY, "stationery");
renderModelCards(PROTECTION, shadow.getElementById("gridProtection"), CARD_INFO.custom);
setupDataFilters(PROTECTION, "protection");
renderModelCards(ELECTRIC, shadow.getElementById("gridElectric"), CARD_INFO.custom);
setupDataFilters(ELECTRIC, "electric");
renderModelCards(FILMSET, shadow.getElementById("gridFilmset"), CARD_INFO.custom);
setupDataFilters(FILMSET, "filmset");
renderModelCards(DULLING, shadow.getElementById("gridDulling"), CARD_INFO.custom);
setupDataFilters(DULLING, "dulling");
renderModelCards(LIGHTING, shadow.getElementById("gridLighting"), CARD_INFO.custom);
setupDataFilters(LIGHTING, "lighting");
renderModelCards(EFFECTS, shadow.getElementById("gridEffects"), CARD_INFO.custom);
setupDataFilters(EFFECTS, "effects");
renderModelCards(CLEANING, shadow.getElementById("gridCleaning"), CARD_INFO.custom);
setupDataFilters(CLEANING, "cleaning");
renderModelCards(MARKS, shadow.getElementById("gridMarks"), CARD_INFO.custom);
setupDataFilters(MARKS, "marks");
renderModelCards(FASTENING, shadow.getElementById("gridFastening"), CARD_INFO.custom);
setupDataFilters(FASTENING, "fastening");
renderModelCards(TAPES, shadow.getElementById("gridTapes"), CARD_INFO.custom);
setupDataFilters(TAPES, "tapes");
renderModelCards(BACKDROPS, shadow.getElementById("gridBackdrops"), CARD_INFO.custom);
setupDataFilters(BACKDROPS, "backdrops");
renderModelCards(OTHERSOUND, shadow.getElementById("gridOthersound"), CARD_INFO.custom);
setupDataFilters(OTHERSOUND, "othersound");
renderModelCards(LAVACC, shadow.getElementById("gridLavacc"), CARD_INFO.custom);
setupDataFilters(LAVACC, "lavacc");
renderModelCards(CABINS, shadow.getElementById("gridCabins"), CARD_INFO.custom);
renderModelCards(VIDEOCONF, shadow.getElementById("gridVideoconf"), CARD_INFO.custom);
renderModelCards(PRINTERS, shadow.getElementById("gridPrinters"), CARD_INFO.custom);
renderModelCards(MICS, shadow.getElementById("gridMics"), CARD_INFO.custom);
setupDataFilters(MICS, "mics");

// Categories whose filter options come from their data: <prefix>TypeSelect, BrandSelect, ColorSelect
function setupDataFilters(items, prefix) {
  const opts = (id, values) => {
    const sel = shadow.getElementById(prefix + id);
    if (!sel) return;
    [...new Set(values)].filter(Boolean).sort((a, b) => a.localeCompare(b, "es")).forEach(v => sel.add(new Option(v, v)));
  };
  opts("TypeSelect", items.flatMap(p => p.type.split("|")));
  opts("BrandSelect", items.map(p => p.brand));
  opts("ColorSelect", items.flatMap(p => (p.color || "").split("|")));
}

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
shadow.getElementById("batteryIconLarge").innerHTML = batteryIcon("#2B79C2");
shadow.getElementById("soundIconLarge").innerHTML = soundIcon("#2B79C2");
shadow.getElementById("stationeryIconLarge").innerHTML = stationeryIcon("#2B79C2");
shadow.getElementById("protectionIconLarge").innerHTML = protectionIcon("#2B79C2");
shadow.getElementById("electricIconLarge").innerHTML = electricIcon("#2B79C2");
shadow.getElementById("filmsetIconLarge").innerHTML = filmsetIcon("#2B79C2");
shadow.getElementById("dullingIconLarge").innerHTML = dullingIcon("#2B79C2");
shadow.getElementById("lightingIconLarge").innerHTML = lightingIcon("#2B79C2");
shadow.getElementById("effectsIconLarge").innerHTML = effectsIcon("#2B79C2");
shadow.getElementById("cleaningIconLarge").innerHTML = cleaningIcon("#2B79C2");
shadow.getElementById("marksIconLarge").innerHTML = marksIcon("#2B79C2");
shadow.getElementById("fasteningIconLarge").innerHTML = fasteningIcon("#2B79C2");
shadow.getElementById("tapesIconLarge").innerHTML = tapesIcon("#2B79C2");
shadow.getElementById("backdropsIconLarge").innerHTML = backdropsIcon("#2B79C2");
shadow.getElementById("othersoundIconLarge").innerHTML = othersoundIcon("#2B79C2");
shadow.getElementById("lavaccIconLarge").innerHTML = lavaccIcon("#2B79C2");
shadow.getElementById("videoconfIconLarge").innerHTML = videoconfIcon("#2B79C2");
shadow.getElementById("printerIconLarge").innerHTML = printerIcon("#2B79C2");
shadow.getElementById("micsIconLarge").innerHTML = micsIcon("#2B79C2");

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
  batteries: shadow.getElementById("viewBatteries"),
  sound: shadow.getElementById("viewSound"),
  stationery: shadow.getElementById("viewStationery"),
  protection: shadow.getElementById("viewProtection"),
  electric: shadow.getElementById("viewElectric"),
  filmset: shadow.getElementById("viewFilmset"),
  dulling: shadow.getElementById("viewDulling"),
  lighting: shadow.getElementById("viewLighting"),
  effects: shadow.getElementById("viewEffects"),
  cleaning: shadow.getElementById("viewCleaning"),
  marks: shadow.getElementById("viewMarks"),
  fastening: shadow.getElementById("viewFastening"),
  tapes: shadow.getElementById("viewTapes"),
  backdrops: shadow.getElementById("viewBackdrops"),
  othersound: shadow.getElementById("viewOthersound"),
  lavacc: shadow.getElementById("viewLavacc"),
  videoconf: shadow.getElementById("viewVideoconf"),
  printers: shadow.getElementById("viewPrinters"),
  mics: shadow.getElementById("viewMics")
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
  batteries: "Pilas y cargadores",
  sound: "Accesorios de sonido",
  stationery: "Papelería",
  protection: "Protección",
  electric: "Conectividad y tornillería",
  filmset: "Rodaje",
  dulling: "Matabrillos",
  lighting: "Iluminación",
  effects: "Efectos",
  cleaning: "Limpieza",
  marks: "Marcas de foco",
  fastening: "Sujeción",
  tapes: "Cintas adhesivas",
  backdrops: "Fondos / Telas",
  othersound: "Otros sonidos",
  lavacc: "Accesorios Petaca/Micro",
  videoconf: "Videoconferencia PRO",
  printers: "Impresoras",
  mics: "Micrófonos"
};
const HEADER_DEFAULT = ["Catálogo de alquiler", "Soporte TV", "Elige una categoría para ver los productos disponibles para alquiler."];

// One catalogue file, two shops: rental (alquiler/) and purchase (compra/, generated by tools/build_compra.py).
// Each category belongs to one of them or to both ("mics": rental and sale); the other one's links are hidden and its
// addresses redirect.
const MODE = document.documentElement.dataset.mode === "compra" ? "compra" : "alquiler";
const MODE_KEYS = {
  alquiler: ["tablets", "phones", "accessories", "computers", "mac", "monitors", "connectivity", "cabins", "videoconf", "printers", "mics"],
  compra: ["storage", "batteries", "sound", "stationery", "protection", "electric", "filmset", "dulling", "lighting", "effects", "cleaning", "marks", "fastening", "tapes", "backdrops", "othersound", "lavacc", "mics"]
};
const OTHER_CATALOG = MODE === "compra" ? "../alquiler/" : "https://m3hervas.github.io/CatalogoSoporte/compra/";
const inMode = key => MODE_KEYS[MODE].includes(key);

// Categories with the "Sostenible" badge (card on the landing + next to the title)
// Categories still being prepared ("Pendiente" badge on the card and next to the title)
const CATEGORY_PENDING = {
};
const CATEGORY_BADGES = {
  tapes: true,
};

function setCatalogHeader(key) {
  const info = key && CATEGORY_INFO[key];
  shadow.getElementById("catBadge").hidden = !(info && CATEGORY_BADGES[key]);
  shadow.getElementById("catPending").hidden = !(info && CATEGORY_PENDING[key]);
  const featured = shadow.getElementById("destacados");
  if (featured) featured.hidden = !!info || MODE === "compra";
  shadow.getElementById("catalogo").classList.toggle("in-category", !!info);
  shadow.getElementById("catEyebrow").hidden = !!info;
  shadow.getElementById("catDesc").hidden = !!info;
  shadow.getElementById("catTitle").textContent = info || HEADER_DEFAULT[1];
}

function showView(key) {
  flushRender(views[key]);
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
  pilas: "batteries",
  sonido: "sound",
  papeleria: "stationery",
  proteccion: "protection",
  "conectividad-tornilleria": "electric",
  rodaje: "filmset",
  matabrillos: "dulling",
  iluminacion: "lighting",
  efectos: "effects",
  limpieza: "cleaning",
  "marcas-de-foco": "marks",
  sujecion: "fastening",
  "cintas-adhesivas": "tapes",
  "fondos-telas": "backdrops",
  "otros-sonidos": "othersound",
  "accesorios-petaca-micro": "lavacc",
  videoconferencia: "videoconf",
  impresoras: "printers",
  microfonos: "mics"
};
const SLUGS = Object.fromEntries(Object.entries(ROUTES).map(([slug, key]) => [key, slug]));

// Hide what belongs to the other catalogue: landing cards, menu and footer links
const CARD_KEYS = { goTablets: "tablets", goPhones: "phones", goAccessories: "accessories", goComputers: "computers", goMac: "mac",
  goMonitors: "monitors", goConnectivity: "connectivity", goStorage: "storage", goBatteries: "batteries", goSound: "sound", goStationery: "stationery", goProtection: "protection", goElectric: "electric", goFilmset: "filmset", goDulling: "dulling", goLighting: "lighting", goEffects: "effects", goCleaning: "cleaning", goMarks: "marks", goFastening: "fastening", goTapes: "tapes", goBackdrops: "backdrops", goOthersound: "othersound", goLavacc: "lavacc", goCabins: "cabins", goVideoconf: "videoconf", goPrinters: "printers", goMics: "mics" };
Object.entries(CARD_KEYS).forEach(([id, key]) => { if (!inMode(key)) shadow.getElementById(id).hidden = true; });
shadow.querySelectorAll("[data-route]").forEach(a => { if (!inMode(ROUTES[a.dataset.route])) a.hidden = true; });
shadow.querySelectorAll(".footer-col").forEach(col => {
  if (![...col.querySelectorAll("[data-route]")].some(a => !a.hidden)) col.hidden = true;
});
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
shadow.getElementById("goBatteries").addEventListener("click", () => goTo("batteries"));
shadow.getElementById("goSound").addEventListener("click", () => goTo("sound"));
shadow.getElementById("goStationery").addEventListener("click", () => goTo("stationery"));
shadow.getElementById("goProtection").addEventListener("click", () => goTo("protection"));
shadow.getElementById("goElectric").addEventListener("click", () => goTo("electric"));
shadow.getElementById("goFilmset").addEventListener("click", () => goTo("filmset"));
shadow.getElementById("goDulling").addEventListener("click", () => goTo("dulling"));
shadow.getElementById("goLighting").addEventListener("click", () => goTo("lighting"));
shadow.getElementById("goEffects").addEventListener("click", () => goTo("effects"));
shadow.getElementById("goCleaning").addEventListener("click", () => goTo("cleaning"));
shadow.getElementById("goMarks").addEventListener("click", () => goTo("marks"));
shadow.getElementById("goFastening").addEventListener("click", () => goTo("fastening"));
shadow.getElementById("goTapes").addEventListener("click", () => goTo("tapes"));
shadow.getElementById("goBackdrops").addEventListener("click", () => goTo("backdrops"));
shadow.getElementById("goOthersound").addEventListener("click", () => goTo("othersound"));
shadow.getElementById("goLavacc").addEventListener("click", () => goTo("lavacc"));
shadow.getElementById("goCabins").addEventListener("click", () => goTo("cabins"));
shadow.getElementById("goVideoconf").addEventListener("click", () => goTo("videoconf"));
shadow.getElementById("goPrinters").addEventListener("click", () => goTo("printers"));
shadow.getElementById("goMics").addEventListener("click", () => goTo("mics"));

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
  { select: shadow.getElementById("accessoryTypeSelect"), attr: "type" },
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

setupFilters(shadow.getElementById("gridMics"), [
  { select: shadow.getElementById("micsTypeSelect"), attr: "type" },
  { select: shadow.getElementById("micsBrandSelect"), attr: "brand" }
]);

setupFilters(shadow.getElementById("gridPrinters"), [
  { select: shadow.getElementById("printerSizeSelect"), attr: "group" },
  { select: shadow.getElementById("printerColorSelect"), attr: "type" }
]);

setupFilters(shadow.getElementById("gridBatteries"), [
  { select: shadow.getElementById("batteryTypeSelect"), attr: "type" },
  { select: shadow.getElementById("batteryBrandSelect"), attr: "brand" },
  { select: shadow.getElementById("batterySizeSelect"), attr: "size" },
  { select: shadow.getElementById("batteryVoltSelect"), attr: "voltage" }
]);

setupFilters(shadow.getElementById("gridSound"), [
  { select: shadow.getElementById("soundTypeSelect"), attr: "type" },
  { select: shadow.getElementById("soundBrandSelect"), attr: "brand" },
  { select: shadow.getElementById("soundColorSelect"), attr: "color" }
]);

setupFilters(shadow.getElementById("gridStationery"), [
  { select: shadow.getElementById("stationeryTypeSelect"), attr: "type" },
  { select: shadow.getElementById("stationeryBrandSelect"), attr: "brand" },
  { select: shadow.getElementById("stationeryColorSelect"), attr: "color" }
]);

setupFilters(shadow.getElementById("gridProtection"), [
  { select: shadow.getElementById("protectionTypeSelect"), attr: "type" },
  { select: shadow.getElementById("protectionBrandSelect"), attr: "brand" },
  { select: shadow.getElementById("protectionColorSelect"), attr: "color" }
]);

setupFilters(shadow.getElementById("gridElectric"), [
  { select: shadow.getElementById("electricTypeSelect"), attr: "type" },
  { select: shadow.getElementById("electricColorSelect"), attr: "color" }
]);

setupFilters(shadow.getElementById("gridFilmset"), [
  { select: shadow.getElementById("filmsetTypeSelect"), attr: "type" },
  { select: shadow.getElementById("filmsetBrandSelect"), attr: "brand" },
  { select: shadow.getElementById("filmsetColorSelect"), attr: "color" }
]);

setupFilters(shadow.getElementById("gridDulling"), [
  { select: shadow.getElementById("dullingTypeSelect"), attr: "type" },
  { select: shadow.getElementById("dullingBrandSelect"), attr: "brand" },
  { select: shadow.getElementById("dullingColorSelect"), attr: "color" }
]);

setupFilters(shadow.getElementById("gridLighting"), [
  { select: shadow.getElementById("lightingTypeSelect"), attr: "type" },
  { select: shadow.getElementById("lightingBrandSelect"), attr: "brand" },
  { select: shadow.getElementById("lightingColorSelect"), attr: "color" }
]);

setupFilters(shadow.getElementById("gridEffects"), [
  { select: shadow.getElementById("effectsTypeSelect"), attr: "type" },
  { select: shadow.getElementById("effectsBrandSelect"), attr: "brand" },
  { select: shadow.getElementById("effectsColorSelect"), attr: "color" }
]);

setupFilters(shadow.getElementById("gridCleaning"), [
  { select: shadow.getElementById("cleaningTypeSelect"), attr: "type" },
  { select: shadow.getElementById("cleaningBrandSelect"), attr: "brand" },
  { select: shadow.getElementById("cleaningColorSelect"), attr: "color" }
]);

setupFilters(shadow.getElementById("gridMarks"), [
  { select: shadow.getElementById("marksTypeSelect"), attr: "type" },
  { select: shadow.getElementById("marksBrandSelect"), attr: "brand" },
  { select: shadow.getElementById("marksColorSelect"), attr: "color" }
]);

setupFilters(shadow.getElementById("gridFastening"), [
  { select: shadow.getElementById("fasteningTypeSelect"), attr: "type" },
  { select: shadow.getElementById("fasteningBrandSelect"), attr: "brand" },
  { select: shadow.getElementById("fasteningColorSelect"), attr: "color" }
]);

setupFilters(shadow.getElementById("gridTapes"), [
  { select: shadow.getElementById("tapesTypeSelect"), attr: "type" },
  { select: shadow.getElementById("tapesBrandSelect"), attr: "brand" },
  { select: shadow.getElementById("tapesColorSelect"), attr: "color" }
]);

setupFilters(shadow.getElementById("gridBackdrops"), [
  { select: shadow.getElementById("backdropsTypeSelect"), attr: "type" },
  { select: shadow.getElementById("backdropsBrandSelect"), attr: "brand" },
  { select: shadow.getElementById("backdropsColorSelect"), attr: "color" }
]);

setupFilters(shadow.getElementById("gridOthersound"), [
  { select: shadow.getElementById("othersoundTypeSelect"), attr: "type" },
  { select: shadow.getElementById("othersoundBrandSelect"), attr: "brand" },
  { select: shadow.getElementById("othersoundColorSelect"), attr: "color" }
]);

setupFilters(shadow.getElementById("gridLavacc"), [
  { select: shadow.getElementById("lavaccTypeSelect"), attr: "type" },
  { select: shadow.getElementById("lavaccBrandSelect"), attr: "brand" },
  { select: shadow.getElementById("lavaccColorSelect"), attr: "color" }
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

// --- Pages: categories with more than 16 products show them 16 at a time ---
// Works together with the filters: it only counts the cards the filters leave visible,
// and goes back to page 1 whenever a filter changes.
const PAGE_SIZE = 16;
function setupPagination(grid) {
  if (!grid) return;
  let page = 0;
  const pager = document.createElement("nav");
  pager.className = "pager";
  pager.setAttribute("aria-label", "Páginas");
  grid.after(pager);

  const cards = () => [...grid.querySelectorAll(".storage-card")].filter(c => !c.classList.contains("hidden") && !c.classList.contains("search-miss"));
  function render(scroll) {
    const all = [...grid.querySelectorAll(".storage-card")];
    const shown = cards();
    const pages = Math.max(1, Math.ceil(shown.length / PAGE_SIZE));
    page = Math.min(page, pages - 1);
    all.forEach(c => { c.hidden = false; });
    shown.forEach((c, i) => { c.hidden = Math.floor(i / PAGE_SIZE) !== page; });
    pager.hidden = pages < 2;
    pager.innerHTML = "";
    if (pages < 2) return;
    const btn = (label, target, extra) => {
      const b = document.createElement("button");
      b.type = "button";
      b.className = "pager-btn" + (extra ? " " + extra : "");
      b.textContent = label;
      if (target === page && !extra) { b.setAttribute("aria-current", "page"); }
      if (target < 0 || target >= pages) b.disabled = true;
      b.addEventListener("click", () => { page = target; render(true); });
      return b;
    };
    pager.appendChild(btn("‹", page - 1, "pager-arrow")).setAttribute("aria-label", "Página anterior");
    for (let i = 0; i < pages; i++) pager.appendChild(btn(String(i + 1), i)).setAttribute("aria-label", "Página " + (i + 1));
    pager.appendChild(btn("›", page + 1, "pager-arrow")).setAttribute("aria-label", "Página siguiente");
    const info = document.createElement("span");
    info.className = "pager-info";
    info.textContent = `${page * PAGE_SIZE + 1}–${Math.min((page + 1) * PAGE_SIZE, shown.length)} de ${shown.length}`;
    pager.appendChild(info);
    if (scroll) grid.scrollIntoView({ behavior: "smooth", block: "start" });
  }
  // A filter changed some card's "hidden" class: start again from page 1
  new MutationObserver(() => { page = 0; render(false); })
    .observe(grid, { subtree: true, childList: true, attributes: true, attributeFilter: ["class"] });
  render(false);
}
shadow.querySelectorAll(".storage-grid").forEach(setupPagination);

// --- Rental request ---
// FormSubmit reenvía las solicitudes al correo (o alias) indicado al final de la URL
// FormSubmit alias of the sales mailbox (the address itself is never written in the code)
const FORM_ENDPOINT = "https://formsubmit.co/ajax/8a125671c5106e66b21b86b9707e2716";


const rentModal = shadow.getElementById("rentModal");
const rentScrim = shadow.getElementById("rentScrim");
const rentForm = shadow.getElementById("rentForm");
const rentError = shadow.getElementById("rentError");

const rentDone = shadow.getElementById("rentDone");
const rentSubmit = shadow.getElementById("rentSubmit");
if (MODE === "compra") shadow.getElementById("rentTitle").textContent = "Solicitar presupuesto de compra";
// "Me interesa" starts on this catalogue (also after the form is reset)
shadow.querySelectorAll('input[name="rentInterest"]').forEach(r => {
  r.defaultChecked = r.value === (MODE === "compra" ? "Compra" : "Alquiler");
  r.checked = r.defaultChecked;
});
// E-mail addresses are written as "user [arroba] domain" and put together here, out of reach of simple robots
shadow.querySelectorAll(".js-mail[data-u][data-d]").forEach(el => { el.textContent = el.dataset.u + "@" + el.dataset.d; });

// Request list: products added from the sheets (name with colour/variant + quantity), sent together in one request.
// Kept in this browser so it survives a reload; one list per catalogue.
const LIST_KEY = `sptv-lista-${MODE}`;
let requestList = [];
try { requestList = JSON.parse(localStorage.getItem(LIST_KEY)) || []; } catch (e) { requestList = []; }
if (!Array.isArray(requestList)) requestList = [];
const listFab = shadow.getElementById("listFab");
const reqList = shadow.getElementById("reqList");
const rentMsg = shadow.getElementById("rentMsg");
const MSG_PLACEHOLDER = rentMsg.placeholder;

function saveList() {
  try { localStorage.setItem(LIST_KEY, JSON.stringify(requestList)); } catch (e) {}
  renderList();
}

function addToList(name, qty) {
  const item = requestList.find(i => i.name === name);
  if (item) item.qty = clampQty(item.qty + qty);
  else requestList.push({ name, qty });
  saveList();
  listFab.classList.remove("bump");
  void listFab.offsetWidth;
  listFab.classList.add("bump");
}

function listText() {
  return requestList.map(i => `${i.qty} × ${i.name}`).join(";\n");
}

// Count on the floating button (also updated while a quantity is being typed, without redrawing the list)
function renderListCount() {
  const units = requestList.reduce((n, i) => n + i.qty, 0);
  listFab.hidden = !requestList.length;
  shadow.getElementById("listFabN").textContent = units;
  listFab.setAttribute("aria-label", `Mi lista: ${units} ${units === 1 ? "unidad" : "unidades"}`);
}

function renderList() {
  renderListCount();
  shadow.getElementById("reqBox").hidden = !requestList.length;
  shadow.getElementById("rentMsgLabel").textContent = requestList.length ? "Comentarios (opcional)" : "¿Qué necesitas?";
  rentMsg.placeholder = requestList.length ? (MODE === "compra" ? "Ej.: plazo de entrega, dirección, dudas…" : "Ej.: fechas, lugar de entrega, dudas…") : MSG_PLACEHOLDER;
  reqList.replaceChildren(...requestList.map((item, idx) => {
    const li = document.createElement("li");
    li.innerHTML = `<span class="req-name"></span>
      <div class="qty" role="group" aria-label="Cantidad"><button type="button" data-step="-1" aria-label="Uno menos">−</button><input class="qty-n" type="number" inputmode="numeric" min="1" max="999" step="1"><button type="button" data-step="1" aria-label="Uno más">+</button></div>
      <button type="button" class="req-remove" aria-label="Quitar de la lista">✕</button>`;
    li.querySelector(".req-name").textContent = item.name;
    const box = li.querySelector(".qty-n");
    box.value = item.qty;
    box.setAttribute("aria-label", `Cantidad de ${item.name}`);
    li.querySelector('[data-step="-1"]').disabled = item.qty === 1;
    // Typing: the count follows at once; leaving the box (or Enter) tidies the number and saves
    box.addEventListener("focus", () => box.select());
    box.addEventListener("input", () => {
      if (box.value === "") return;
      item.qty = clampQty(box.value);
      li.querySelector('[data-step="-1"]').disabled = item.qty === 1;
      try { localStorage.setItem(LIST_KEY, JSON.stringify(requestList)); } catch (e) {}
      renderListCount();
    });
    box.addEventListener("change", () => { item.qty = clampQty(box.value); saveList(); });
    box.addEventListener("keydown", e => {
      if (e.key !== "Enter") return;
      e.preventDefault();
      item.qty = clampQty(box.value);
      saveList();
      reqList.children[idx]?.querySelector(".qty-n")?.focus();
    });
    li.querySelectorAll("[data-step]").forEach(b => b.addEventListener("click", () => {
      item.qty = clampQty(item.qty + Number(b.dataset.step));
      saveList();
      const again = reqList.children[idx]?.querySelector(`[data-step="${b.dataset.step}"]`);
      (again && !again.disabled ? again : reqList.children[idx]?.querySelector('[data-step="1"]'))?.focus();
    }));
    li.querySelector(".req-remove").addEventListener("click", () => {
      requestList.splice(idx, 1);
      saveList();
      (reqList.querySelector(".req-remove") || rentMsg).focus();
    });
    return li;
  }));
}

listFab.addEventListener("click", () => openRent());
shadow.getElementById("reqClear").addEventListener("click", () => { requestList = []; saveList(); rentMsg.focus(); });
renderList();

function openRent() {
  closePanel();
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
  const company = shadow.getElementById("rentCompany").value.trim();
  const email = shadow.getElementById("rentEmail").value.trim();
  const phone = shadow.getElementById("rentPhone").value.trim();
  const interest = (rentForm.querySelector('input[name="rentInterest"]:checked') || {}).value || "Alquiler";
  const msg = shadow.getElementById("rentMsg").value.trim();

  if (!name || !company || !email || (!msg && !requestList.length)) {
    rentError.textContent = requestList.length ? "Rellena tu nombre, tu empresa y tu correo." : "Rellena tu nombre, tu empresa, tu correo y qué necesitas.";
    return;
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    rentError.textContent = "Revisa tu correo, no parece válido.";
    return;
  }
  if (!shadow.getElementById("rentPrivacy").checked) {
    rentError.textContent = "Para enviarla, acepta la política de privacidad.";
    return;
  }
  // Robots fill in the hidden field: show it as sent and drop it
  if (shadow.getElementById("rentHoney").value) {
    rentForm.reset();
    rentForm.hidden = true;
    rentDone.hidden = false;
    return;
  }

  rentSubmit.disabled = true;
  rentSubmit.textContent = "Enviando…";
  try {
    const res = await fetch(FORM_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json", "Accept": "application/json" },
      body: JSON.stringify({
        _subject: `Solicitud desde el catálogo de ${MODE === "compra" ? "compra" : "alquiler"} (${interest}) — ${name}`,
        _template: "table",
        _captcha: "false",
        Nombre: name,
        Empresa: company,
        email: email,
        "Teléfono": phone || "—",
        "Le interesa": interest,
        ...(requestList.length ? { "Material solicitado": listText(), Comentarios: msg || "—" } : { "Qué necesita": msg }),
        "Política de privacidad": "Aceptada",
        _honey: ""
      })
    });
    const data = await res.json().catch(() => ({}));
    if (!res.ok || String(data.success) !== "true") throw new Error(data.message || res.status);
    rentForm.reset();
    requestList = [];
    saveList();
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
  if (key && !inMode(key)) { location.replace(OTHER_CATALOG + location.hash); return; }
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
    // The bar hides while scrolling down or while a product sheet is open; it comes back on scrolling up,
    // when the sheet closes, with the pointer at the top of the window, or while its menus or focus are in use
    let lastY = getScrollY(), away = false, pointerTop = false;
    const renderNav = () => {
      const inUse = nav.classList.contains("menu-open") || group.classList.contains("open") || nav.contains(document.activeElement);
      const sheet = panel.classList.contains("open");
      nav.classList.toggle("nav-hidden", !inUse && (sheet || (away && !pointerTop)));
    };
    const setGroup = open => { group.classList.toggle("open", open); groupBtn.setAttribute("aria-expanded", String(open)); renderNav(); };
    const setMenu = open => { nav.classList.toggle("menu-open", open); toggle.setAttribute("aria-expanded", String(open)); renderNav(); };
    const closeAll = () => { setGroup(false); setMenu(false); };

    const updateSolid = () => nav.classList.toggle("is-solid", getScrollY() > 24);
    onScroll(updateSolid);
    updateSolid();
    onScroll(() => {
      const y = getScrollY();
      if (y < 80) { away = false; lastY = y; }
      else if (y > lastY + 6) { away = true; lastY = y; }
      else if (y < lastY - 6) { away = false; lastY = y; }
      renderNav();
    });
    if (matchMedia("(hover: hover) and (pointer: fine)").matches) {
      document.addEventListener("mousemove", e => {
        const top = e.clientY < 90;
        if (top !== pointerTop) { pointerTop = top; renderNav(); }
      }, { passive: true });
    }
    // Closing the sheet brings the bar back
    new MutationObserver(() => { if (!panel.classList.contains("open")) away = false; renderNav(); })
      .observe(panel, { attributes: true, attributeFilter: ["class"] });
    nav.addEventListener("focusin", renderNav);
    nav.addEventListener("focusout", () => setTimeout(renderNav, 0));

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

    // Catálogo as a list: each category of this catalogue and, under it, its subcategories (the options of its
    // "Tipo" filter; "Marca" or "Formato" where there is no type). A new column every 15 lines; a category
    // never splits between columns. A subcategory opens its category with only that subcategory showing.
    const MEGA_LINES = 15;
    const dropdown = shadow.getElementById("navDropdown");
    const escAttr = v => String(v).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]);
    const entries = [...dropdown.querySelectorAll("a[data-route]")]
      .filter(a => !a.hidden && inMode(ROUTES[a.dataset.route]))
      .map(a => {
        const key = ROUTES[a.dataset.route];
        const rows = [...views[key].querySelectorAll(".filter-panel .filter-row")];
        const labelOf = r => (r.querySelector(".filter-label")?.textContent || "").trim().toLowerCase();
        const row = ["tipo", "marca", "formato"].map(l => rows.find(r => labelOf(r) === l)).find(Boolean);
        const select = row ? row.querySelector("select") : null;
        const subs = select ? [...select.options].filter(o => o.value !== "all").map(o => ({ value: o.value, label: o.text })) : [];
        return { key, route: a.dataset.route, label: a.firstChild.textContent.trim(), select, subs: subs.length > 1 ? subs : [] };
      });
    // Each category goes in the first column where it still fits (fewer, fuller columns); a category longer
    // than 15 lines gets a column of its own
    const columns = [];
    entries.forEach(e => {
      const n = 1 + e.subs.length;
      let col = columns.find(c => c.lines + n <= MEGA_LINES);
      if (!col) { col = { lines: 0, items: [] }; columns.push(col); }
      col.items.push(e);
      col.lines += n;
    });
    dropdown.innerHTML = columns.map(col => `<div class="mega-col">${col.items.map(e => `
      <div class="mega-cat" role="group" aria-label="${escAttr(e.label)}">
        <a class="mega-head" href="#${e.route}" data-cat="${e.key}">${escAttr(e.label)}</a>
        ${e.subs.map(sub => `<a class="mega-sub" href="#${e.route}" data-cat="${e.key}" data-sub="${escAttr(sub.value)}" title="${escAttr(sub.label)}">${escAttr(sub.label)}</a>`).join("")}
      </div>`).join("")}</div>`).join("");
    dropdown.classList.add("is-mega");
    group.classList.add("has-mega");
    dropdown.addEventListener("click", e => {
      const link = e.target.closest("a[data-cat]");
      if (!link) return;
      e.preventDefault();
      closeAll();
      const key = link.dataset.cat;
      goTo(key);
      // Start from the whole category (no filters, no search), then apply the subcategory
      views[key].querySelector(".filter-reset")?.click();
      const entry = entries.find(x => x.key === key);
      if (link.dataset.sub !== undefined && entry.select) {
        entry.select.value = link.dataset.sub;
        entry.select.dispatchEvent(new Event("change"));
      }
    });
  }, "nav");

  safe(() => {
    // Only the visible cards count for the cascade (the other catalogue's cards are hidden)
    [...shadow.querySelectorAll(".category-card")].filter(c => !c.hidden).forEach((card, i) => { card.classList.add("reveal"); card.style.setProperty("--i", i); });
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

  // --- Search: a box at the top right of every category. It filters that category as you type
  // (accents and capitals don't matter) and suggests matching products from the other categories ---
  safe(() => {
    const norm = s => String(s || "").normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
    const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]);
    const terms = q => norm(q).trim().split(/\s+/).filter(Boolean);
    // "pilas" also finds "pila", "colores" also finds "color"
    const hit = (text, t) => text.includes(t) || (t.length > 3 && /s$/.test(t) && text.includes(t.replace(/e?s$/, "")));
    const matches = (e, ts) => ts.every(t => hit(e.text, t));
    const score = (e, ts) => ts.reduce((n, t) => n + (e.name.startsWith(t) ? 6 : e.name.includes(t) ? 4 : e.brand.includes(t) ? 3 : 1), 0);
    const photoOf = p => p.photo || (p.colors && p.colors[0] && p.colors[0].photo) || "";

    // One entry per product card of this catalogue
    const INDEX = [];
    SEARCH_SOURCES.forEach(({ grid, items, grouped }) => {
      const key = Object.keys(views).find(k => views[k].contains(grid));
      if (!key || !inMode(key)) return;
      (grouped ? groupByModel(items) : items).forEach(p => {
        const pid = productId(grid, p);
        if (HIDDEN_PRODUCTS.has(pid)) return;
        const specs = (p.specs || []).map(([, v]) => String(v).replace(/<[^>]+>/g, " ")).join(" ");
        INDEX.push({
          pid, key, p, name: norm(p.model), brand: norm(p.brand),
          text: norm([p.model, p.brand, p.type, p.catLabel, p.group, p.color, (p.capacities || []).join(" "), p.speed, p.port, specs, CATEGORY_INFO[key]].join(" "))
        });
      });
    });
    const BY_PID = new Map(INDEX.map(e => [e.pid, e]));

    // Product name with the searched words in bold (positions match: accents are single characters)
    const highlight = (text, ts) => {
      const n = norm(text);
      const on = new Array(text.length).fill(false);
      ts.forEach(t => { let i = n.indexOf(t); while (t && i > -1) { for (let j = i; j < i + t.length; j++) on[j] = true; i = n.indexOf(t, i + t.length); } });
      let out = "", open = false;
      [...text].forEach((ch, i) => {
        if (on[i] && !open) { out += "<mark>"; open = true; }
        if (!on[i] && open) { out += "</mark>"; open = false; }
        out += esc(ch);
      });
      return out + (open ? "</mark>" : "");
    };

    const boxes = {};
    const fine = matchMedia("(hover: hover) and (pointer: fine)").matches;
    let uid = 0;

    // Open a product found in another category: its sheet if it has one, otherwise point at its card
    function openResult(e) {
      boxes[e.key]?.set("");
      goTo(e.key);
      const card = views[e.key].querySelector(`.storage-card[data-pid="${CSS.escape(e.pid)}"]`);
      if (!card) return;
      if (card._product) { openPanel(card._product); return; }
      boxes[e.key]?.set(e.p.model);
      setTimeout(() => {
        views[e.key].classList.remove("is-entering");
        card.scrollIntoView({ behavior: "smooth", block: "center" });
        card.classList.remove("is-highlight");
        void card.offsetWidth;
        card.classList.add("is-highlight");
      }, 350);
    }

    Object.entries(views).forEach(([key, view]) => {
      if (!inMode(key)) return;
      const back = view.querySelector(":scope > .back-btn");
      const grid = view.querySelector(".storage-grid");
      if (!back || !grid) return;
      const id = "vs" + (++uid);
      const label = CATEGORY_INFO[key];

      const top = document.createElement("div");
      top.className = "view-top";
      back.before(top);
      top.appendChild(back);
      const box = document.createElement("div");
      box.className = "view-search";
      box.setAttribute("role", "search");
      box.innerHTML = `
        <svg class="vs-icon" viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.6-3.6"/></svg>
        <input class="vs-input" type="search" id="${id}" placeholder="Buscar en ${esc(label)}" aria-label="Buscar en ${esc(label)}"
          autocomplete="off" autocapitalize="off" spellcheck="false" enterkeyhint="search"
          role="combobox" aria-autocomplete="list" aria-expanded="false" aria-controls="${id}-list">
        ${fine ? '<kbd class="vs-kbd" aria-hidden="true">/</kbd>' : ""}
        <button class="vs-clear" type="button" aria-label="Borrar búsqueda" hidden><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6l12 12M18 6 6 18"/></svg></button>
        <div class="vs-pop" id="${id}-list" role="listbox" aria-label="Resultados en otras categorías" hidden></div>`;
      top.appendChild(box);
      const status = document.createElement("p");
      status.className = "vs-status";
      status.setAttribute("role", "status");
      status.hidden = true;
      top.after(status);
      const empty = document.createElement("div");
      empty.className = "vs-empty";
      empty.hidden = true;
      grid.prepend(empty);

      const input = box.querySelector(".vs-input");
      const clear = box.querySelector(".vs-clear");
      const pop = box.querySelector(".vs-pop");
      let found = [], active = -1;

      const closePop = () => { pop.hidden = true; input.setAttribute("aria-expanded", "false"); input.removeAttribute("aria-activedescendant"); active = -1; };
      const setActive = i => {
        const opts = [...pop.querySelectorAll(".vs-opt")];
        if (!opts.length) return;
        active = (i + opts.length) % opts.length;
        opts.forEach((o, n) => o.setAttribute("aria-selected", String(n === active)));
        input.setAttribute("aria-activedescendant", opts[active].id);
        opts[active].scrollIntoView({ block: "nearest" });
      };

      function run(showPop) {
        const q = input.value.trim();
        const ts = terms(q);
        clear.hidden = !q;
        box.classList.toggle("has-value", !!q);
        // This category: hide what does not match (works together with the filters)
        let shown = 0;
        grid.querySelectorAll(".storage-card").forEach(card => {
          const e = BY_PID.get(card.dataset.pid);
          const ok = !ts.length || (e ? matches(e, ts) : ts.every(t => hit(norm(card.textContent), t)));
          card.classList.toggle("search-miss", !ok);
          if (ok && !card.classList.contains("hidden")) shown++;
        });
        // Other categories
        found = ts.length ? INDEX.filter(e => e.key !== key && matches(e, ts)).map(e => [score(e, ts), e]).sort((a, b) => b[0] - a[0]).map(x => x[1]) : [];

        status.hidden = !ts.length || !shown;
        status.textContent = ts.length && shown ? `${shown} ${shown === 1 ? "resultado" : "resultados"} para «${q}»` : "";

        empty.hidden = !(ts.length && !shown);
        if (!empty.hidden) {
          const counts = {};
          found.forEach(e => { counts[e.key] = (counts[e.key] || 0) + 1; });
          const cats = Object.entries(counts).sort((a, b) => b[1] - a[1]);
          empty.innerHTML = `<p class="vs-empty-title">No hay resultados para «${esc(q)}» en ${esc(label)}</p>` + (cats.length
            ? `<p class="vs-empty-sub">Lo tenemos en:</p><div class="vs-chips">${cats.map(([k, n]) => `<button type="button" class="vs-chip" data-key="${k}">${esc(CATEGORY_INFO[k])}<span>${n}</span></button>`).join("")}</div>`
            : `<p class="vs-empty-sub">Prueba con otra palabra o <button type="button" class="link-btn" data-ask>pídenoslo</button> y te lo buscamos.</p>`);
          empty.querySelectorAll(".vs-chip").forEach(b => b.addEventListener("click", () => {
            const k = b.dataset.key;
            goTo(k);
            boxes[k]?.set(q);
          }));
          empty.querySelector("[data-ask]")?.addEventListener("click", () => openRent());
        }

        // Suggestions from the other categories
        if (!showPop || !found.length) { closePop(); return; }
        const list = found.slice(0, 6);
        pop.innerHTML = `<div class="vs-pop-head">En otras categorías</div>` + list.map((e, i) => {
          const photo = photoOf(e.p);
          const thumb = photo ? `<img src="${esc(smallPhoto(photo))}" alt="" decoding="async">` : (e.p.icon || "");
          return `<div class="vs-opt" role="option" id="${id}-o${i}" aria-selected="false" data-i="${i}">
            <span class="vs-thumb">${thumb}</span>
            <span><span class="vs-opt-name">${highlight(e.p.model, ts)}</span><span class="vs-opt-cat">${esc([e.p.brand, CATEGORY_INFO[e.key]].filter(Boolean).join(" · "))}</span></span>
          </div>`;
        }).join("") + (found.length > list.length ? `<div class="vs-pop-more">y ${found.length - list.length} más en otras categorías</div>` : "");
        pop.querySelectorAll(".vs-opt").forEach(o => {
          o.addEventListener("mousedown", ev => ev.preventDefault());
          o.addEventListener("click", () => { closePop(); input.blur(); openResult(list[Number(o.dataset.i)]); });
        });
        pop.hidden = false;
        input.setAttribute("aria-expanded", "true");
        active = -1;
      }

      boxes[key] = { set: v => { input.value = v; run(false); }, input };
      input.addEventListener("input", () => run(true));
      input.addEventListener("focus", () => { if (input.value.trim()) run(true); });
      input.addEventListener("blur", () => setTimeout(closePop, 120));
      input.addEventListener("keydown", e => {
        if (e.key === "ArrowDown" && !pop.hidden) { e.preventDefault(); setActive(active + 1); }
        else if (e.key === "ArrowUp" && !pop.hidden) { e.preventDefault(); setActive(active - 1); }
        else if (e.key === "Enter") {
          e.preventDefault();
          if (active > -1 && !pop.hidden) { const pick = found[active]; closePop(); input.blur(); openResult(pick); }
          else { closePop(); if (!fine) input.blur(); }
        } else if (e.key === "Escape") {
          e.stopPropagation();
          if (!pop.hidden) closePop();
          else if (input.value) { input.value = ""; run(false); }
          else input.blur();
        }
      });
      clear.addEventListener("click", () => { input.value = ""; run(false); input.focus(); });
      // "Quitar filtros" also clears the search
      view.querySelector(".filter-reset")?.addEventListener("click", () => { if (input.value) { input.value = ""; run(false); } });
    });

    // "/" jumps to the search of the category on screen
    document.addEventListener("keydown", e => {
      if (e.key !== "/" || e.ctrlKey || e.metaKey || e.altKey) return;
      if (e.target.closest && e.target.closest("input, textarea, select, [contenteditable]")) return;
      if (panel.classList.contains("open") || shadow.getElementById("rentModal").classList.contains("open")) return;
      const key = Object.keys(boxes).find(k => !views[k].hidden);
      if (!key) return;
      e.preventDefault();
      boxes[key].input.focus();
    });
  }, "search");

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

/* Soporte TV — WhatsApp contact button (bottom right).
   Click the button → a small card opens → "Abrir chat" opens WhatsApp with a ready message.
   Self-contained: injects its own markup and styles; follows the page's light/dark theme.
   Usage: <script src="assets/whatsapp.js" data-logo="assets/img/logo.webp" data-source="portada" defer></script> */
(function () {
  "use strict";
  if (document.getElementById("sptvWa")) return;

  var script = document.currentScript || {};
  var data = script.dataset || {};
  var logo = data.logo || "";
  var source = data.source || "web";

  // The number is assembled here (not written in the HTML) so simple scrapers do not pick it up
  var NUMBER = ["34", "639", "183", "001"].join("");
  var GREETING = source === "alquiler" ? "Hola, os escribo desde el catálogo de alquiler de Soporte TV. "
    : source === "compra" ? "Hola, os escribo desde el catálogo de compra de Soporte TV. "
    : "Hola, os escribo desde la web de Soporte TV. ";

  var GLYPH = '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>';
  var CLOSE = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18"/></svg>';

  var css = [
    "#sptvWa{--wa:#25D366;--wa-dark:#128C7E;--wa-deep:#075E54;--card:#FFFFFF;--ink:#0E1525;--ink-2:#3B4658;--mute:#6B778A;--chat:#EFF2F6;--bubble:#FFFFFF;--edge:rgba(14,21,37,.10);",
    "position:fixed;right:max(18px,env(safe-area-inset-right));bottom:max(18px,env(safe-area-inset-bottom));z-index:9;font-family:Inter,system-ui,-apple-system,'Segoe UI',sans-serif;-webkit-font-smoothing:antialiased}",
    "[data-theme=dark] #sptvWa{--card:#0E1524;--ink:#EEF2F8;--ink-2:#C9D2E0;--mute:#8A97AD;--chat:#0A101C;--bubble:#17213A;--edge:rgba(238,242,248,.12)}",
    "#sptvWa *{box-sizing:border-box}",
    "#sptvWa{transition:opacity 200ms ease,transform 240ms cubic-bezier(.2,.8,.2,1),visibility 0s}",
    "#sptvWa.is-covered{opacity:0;transform:translateY(12px);pointer-events:none;visibility:hidden;transition:opacity 200ms ease,transform 240ms cubic-bezier(.2,.8,.2,1),visibility 0s linear 240ms}",
    /* Floating button */
    "#sptvWa .wa-fab{position:relative;width:60px;height:60px;border-radius:50%;border:0;padding:0;cursor:pointer;display:grid;place-items:center;color:#fff;background:var(--wa);",
    "box-shadow:0 14px 32px -10px rgba(18,140,126,.65),0 2px 6px rgba(0,0,0,.12);transition:transform 260ms cubic-bezier(.2,.8,.2,1),box-shadow 260ms ease,background-color 200ms ease}",
    "#sptvWa .wa-fab svg{position:absolute;width:30px;height:30px;transition:transform 320ms cubic-bezier(.2,.8,.2,1),opacity 200ms ease}",
    "#sptvWa .wa-fab .wa-x{width:24px;height:24px;fill:none;stroke:currentColor;stroke-width:2.4;stroke-linecap:round;opacity:0;transform:rotate(-90deg) scale(.6)}",
    "#sptvWa.is-open .wa-fab{background:var(--wa-dark)}",
    "#sptvWa.is-open .wa-fab .wa-glyph{opacity:0;transform:rotate(90deg) scale(.6)}",
    "#sptvWa.is-open .wa-fab .wa-x{opacity:1;transform:none}",
    "#sptvWa .wa-fab::after{content:'';position:absolute;inset:0;border-radius:50%;box-shadow:0 0 0 0 rgba(37,211,102,.45);animation:sptvWaPulse 2.8s ease-out 2s 3}",
    "#sptvWa.is-open .wa-fab::after{animation:none}",
    "@keyframes sptvWaPulse{0%{box-shadow:0 0 0 0 rgba(37,211,102,.45)}80%,100%{box-shadow:0 0 0 16px rgba(37,211,102,0)}}",
    "@media (hover:hover) and (pointer:fine){#sptvWa .wa-fab:hover{transform:translateY(-2px);box-shadow:0 18px 38px -10px rgba(18,140,126,.75),0 2px 6px rgba(0,0,0,.12)}}",
    "#sptvWa .wa-fab:active{transform:scale(.94)}",
    "#sptvWa .wa-fab:focus-visible,#sptvWa .wa-open:focus-visible,#sptvWa .wa-close:focus-visible{outline:2px solid var(--wa);outline-offset:3px}",
    /* Card */
    "#sptvWa .wa-card{position:absolute;right:0;bottom:76px;width:min(350px,calc(100vw - 32px));border-radius:20px;overflow:hidden;background:var(--card);color:var(--ink);",
    "border:1px solid var(--edge);box-shadow:0 30px 70px -24px rgba(14,21,37,.45),0 4px 14px rgba(14,21,37,.08);",
    "transform-origin:calc(100% - 30px) calc(100% + 30px);opacity:0;transform:translateY(10px) scale(.94);visibility:hidden;",
    "transition:opacity 220ms ease,transform 260ms cubic-bezier(.2,.8,.2,1),visibility 0s linear 260ms}",
    "#sptvWa.is-open .wa-card{opacity:1;transform:none;visibility:visible;transition:opacity 220ms ease,transform 260ms cubic-bezier(.2,.8,.2,1),visibility 0s}",
    "#sptvWa .wa-head{position:relative;display:flex;align-items:center;gap:12px;padding:18px 48px 18px 18px;color:#fff;background:linear-gradient(135deg,var(--wa-deep),var(--wa-dark))}",
    "#sptvWa .wa-avatar{position:relative;flex:0 0 auto;width:46px;height:46px;border-radius:50%;background:#fff;display:grid;place-items:center;box-shadow:0 0 0 2px rgba(255,255,255,.25)}",
    "#sptvWa .wa-avatar img{width:32px;height:32px;object-fit:contain}",
    "#sptvWa .wa-avatar::after{content:'';position:absolute;right:0;bottom:1px;width:12px;height:12px;border-radius:50%;background:var(--wa);border:2px solid var(--wa-deep)}",
    "#sptvWa .wa-name{margin:0;font-size:16px;font-weight:700;letter-spacing:-.01em;line-height:1.2}",
    "#sptvWa .wa-status{margin:3px 0 0;font-size:12.5px;opacity:.85;line-height:1.3}",
    "#sptvWa .wa-close{position:absolute;top:12px;right:12px;width:32px;height:32px;border-radius:50%;border:0;padding:0;cursor:pointer;display:grid;place-items:center;color:#fff;background:rgba(255,255,255,.12);transition:background-color 200ms ease}",
    "#sptvWa .wa-close svg{width:16px;height:16px;fill:none;stroke:currentColor;stroke-width:2.4;stroke-linecap:round}",
    "@media (hover:hover) and (pointer:fine){#sptvWa .wa-close:hover{background:rgba(255,255,255,.22)}}",
    "#sptvWa .wa-body{padding:20px 18px 6px;background:var(--chat)}",
    "#sptvWa .wa-bubble{position:relative;max-width:88%;padding:11px 14px 8px;border-radius:4px 16px 16px 16px;background:var(--bubble);color:var(--ink);font-size:14.5px;line-height:1.5;box-shadow:0 1px 2px rgba(14,21,37,.08);",
    "opacity:0;transform:translateY(6px);transition:opacity 300ms ease 120ms,transform 300ms cubic-bezier(.2,.8,.2,1) 120ms}",
    "#sptvWa.is-open .wa-bubble{opacity:1;transform:none}",
    "#sptvWa .wa-bubble p{margin:0}",
    "#sptvWa .wa-bubble strong{font-weight:700}",
    "#sptvWa .wa-time{display:block;margin-top:4px;text-align:right;font-size:11px;color:var(--mute)}",
    "#sptvWa .wa-foot{padding:16px 18px 18px;background:var(--chat)}",
    "#sptvWa .wa-open{width:100%;display:flex;align-items:center;justify-content:center;gap:10px;padding:14px 18px;border-radius:999px;border:0;cursor:pointer;text-decoration:none;",
    "font:700 15px/1 Inter,system-ui,sans-serif;color:#fff;background:var(--wa);box-shadow:0 10px 24px -10px rgba(18,140,126,.8);transition:background-color 200ms ease,transform 160ms ease}",
    "#sptvWa .wa-open svg{width:20px;height:20px}",
    "@media (hover:hover) and (pointer:fine){#sptvWa .wa-open:hover{background:#1EBE5A}}",
    "#sptvWa .wa-open:active{transform:scale(.97)}",
    "#sptvWa .wa-note{margin:10px 0 0;text-align:center;font-size:12px;color:var(--mute)}",
    "@media (max-width:720px){#sptvWa .wa-fab{width:56px;height:56px}#sptvWa .wa-card{bottom:70px}}",
    /* Top-bar mode (wide screens with a [data-wa-open] button): no floating button, card under the bar */
    "#sptvWa.wa-top .wa-fab{display:none}",
    "#sptvWa.wa-top .wa-card{position:fixed;bottom:auto;transform-origin:calc(100% - 24px) -10px;transform:translateY(-8px) scale(.96)}",
    "#sptvWa.wa-top.is-open .wa-card{transform:none}"
  ].join("");

  var style = document.createElement("style");
  style.id = "sptvWaStyle";
  style.textContent = css;
  document.head.appendChild(style);

  var now = new Date();
  var time = ("0" + now.getHours()).slice(-2) + ":" + ("0" + now.getMinutes()).slice(-2);
  var href = "https://wa.me/" + NUMBER + "?text=" + encodeURIComponent(GREETING);

  var root = document.createElement("div");
  root.id = "sptvWa";
  root.innerHTML =
    '<div class="wa-card" id="sptvWaCard" role="dialog" aria-modal="false" aria-labelledby="sptvWaName" aria-hidden="true">' +
      '<div class="wa-head">' +
        '<span class="wa-avatar">' + (logo ? '<img src="' + logo + '" alt="">' : "") + '</span>' +
        '<div><p class="wa-name" id="sptvWaName">Soporte TV</p><p class="wa-status">Atención directa por WhatsApp</p></div>' +
        '<button class="wa-close" type="button" aria-label="Cerrar">' + CLOSE + '</button>' +
      '</div>' +
      '<div class="wa-body"><div class="wa-bubble">' +
        '<p><strong>¡Hola!</strong> 👋</p>' +
        '<p>Cuéntanos qué material necesitas, para cuándo y para qué tipo de evento o producción. Te respondemos directamente nosotros.</p>' +
        '<span class="wa-time">' + time + '</span>' +
      '</div></div>' +
      '<div class="wa-foot">' +
        '<a class="wa-open" href="' + href + '" target="_blank" rel="noopener">' + GLYPH + '<span>Abrir chat</span></a>' +
        '<p class="wa-note">Se abrirá WhatsApp con tu mensaje listo para enviar</p>' +
      '</div>' +
    '</div>' +
    '<button class="wa-fab" type="button" aria-label="Contactar por WhatsApp" aria-expanded="false" aria-controls="sptvWaCard">' +
      GLYPH.replace("<svg", '<svg class="wa-glyph"') + CLOSE.replace("<svg", '<svg class="wa-x"') +
    '</button>';
  document.body.appendChild(root);

  var fab = root.querySelector(".wa-fab");
  var card = root.querySelector(".wa-card");
  var openLink = root.querySelector(".wa-open");

  // Pages can offer their own WhatsApp button (e.g. in the top bar) with [data-wa-open].
  // On wide screens that button replaces the floating one and the card opens just below it;
  // on phones (or if the page has no such button) the floating button bottom right is used.
  var triggers = [].slice.call(document.querySelectorAll("[data-wa-open]"));
  var wide = window.matchMedia("(min-width: 721px)");
  var activeTrigger = null;
  function visibleTrigger() {
    for (var i = 0; i < triggers.length; i++) if (triggers[i].offsetParent !== null) return triggers[i];
    return null;
  }
  function layout() {
    var t = wide.matches ? visibleTrigger() : null;
    root.classList.toggle("wa-top", !!t);
    if (!t) { card.style.top = ""; card.style.right = ""; }
    if (!t && activeTrigger && root.classList.contains("is-open")) setOpen(false, false);
    if (t && root.classList.contains("is-open")) place(t);
  }
  function place(t) {
    var r = t.getBoundingClientRect();
    card.style.top = Math.round(r.bottom + 12) + "px";
    card.style.right = Math.max(12, Math.round(window.innerWidth - r.right)) + "px";
  }

  function setOpen(open, focusBack, trigger) {
    if (open) {
      activeTrigger = trigger || null;
      if (activeTrigger) place(activeTrigger);
      else { card.style.top = ""; card.style.right = ""; }
    }
    root.classList.toggle("is-open", open);
    fab.setAttribute("aria-expanded", String(open));
    fab.setAttribute("aria-label", open ? "Cerrar WhatsApp" : "Contactar por WhatsApp");
    triggers.forEach(function (t) { t.setAttribute("aria-expanded", String(open && t === activeTrigger)); });
    card.setAttribute("aria-hidden", String(!open));
    if (open) setTimeout(function () { openLink.focus({ preventScroll: true }); }, 60);
    else if (focusBack) (activeTrigger && root.classList.contains("wa-top") ? activeTrigger : fab).focus({ preventScroll: true });
  }

  fab.addEventListener("click", function () { setOpen(!root.classList.contains("is-open"), false, null); });
  triggers.forEach(function (t) {
    t.setAttribute("aria-controls", "sptvWaCard");
    t.setAttribute("aria-expanded", "false");
    t.addEventListener("click", function () {
      if (!root.classList.contains("wa-top")) { setOpen(true, false, null); return; }
      setOpen(!(root.classList.contains("is-open") && activeTrigger === t), false, t);
    });
  });
  root.querySelector(".wa-close").addEventListener("click", function () { setOpen(false, true); });
  openLink.addEventListener("click", function () { setTimeout(function () { setOpen(false, false); }, 300); });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && root.classList.contains("is-open")) setOpen(false, true);
  });
  document.addEventListener("pointerdown", function (e) {
    if (!root.classList.contains("is-open") || root.contains(e.target)) return;
    if (triggers.some(function (t) { return t.contains(e.target); })) return;
    setOpen(false, false);
  });
  window.addEventListener("resize", layout);
  window.addEventListener("scroll", function () { if (activeTrigger && root.classList.contains("is-open")) place(activeTrigger); }, { passive: true });
  if (wide.addEventListener) wide.addEventListener("change", layout); else if (wide.addListener) wide.addListener(layout);
  layout();

  // Step aside while the page shows one of its own overlays (catalogue spec sheet, rental form, credits)
  var scrims = [].slice.call(document.querySelectorAll(".scrim"));
  if (scrims.length && window.MutationObserver) {
    var sync = function () {
      var covered = scrims.some(function (s) { return s.classList.contains("open"); });
      if (covered && root.classList.contains("is-open")) setOpen(false, false);
      root.classList.toggle("is-covered", covered);
    };
    var mo = new MutationObserver(sync);
    scrims.forEach(function (s) { mo.observe(s, { attributes: true, attributeFilter: ["class"] }); });
    sync();
  }
})();

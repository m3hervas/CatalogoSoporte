/* Soporte TV — visit statistics with Umami (no cookies, nothing stored on the visitor's device, no personal data).
   Loads Umami only on the real domain (soportetv.es) and only once WEBSITE_ID is filled in, so GitHub Pages and local
   previews are never counted. Other code reports actions with window.sptvTrack("Name", {details}).
   Usage: <script src="assets/stats.js?v=..." defer></script> on every page. */
(function () {
  "use strict";
  var WEBSITE_ID = "bc038ef5-c80d-4273-a65c-84ad3d314747"; // Umami Cloud → Settings → Websites → soportetv.es → Website ID
  var DOMAIN = "soportetv.es";
  var SRC = "https://cloud.umami.is/script.js";

  var on = !!WEBSITE_ID && location.hostname === DOMAIN;
  var queue = [];
  window.sptvTrack = function (name, data) {
    if (!on) return;
    if (window.umami && typeof window.umami.track === "function") {
      try { window.umami.track(name, data); } catch (e) { /* statistics never break the page */ }
    } else if (queue.length < 30) {
      queue.push([name, data]);
    }
  };
  if (!on) return;

  var s = document.createElement("script");
  s.defer = true;
  s.src = SRC;
  s.setAttribute("data-website-id", WEBSITE_ID);
  s.setAttribute("data-domains", DOMAIN);
  s.setAttribute("data-do-not-track", "true"); // browsers with "Do Not Track" switched on are not counted
  s.onload = function () {
    queue.splice(0).forEach(function (q) { window.sptvTrack(q[0], q[1]); });
  };
  document.head.appendChild(s);

  // WhatsApp: any link that opens the chat
  document.addEventListener("click", function (e) {
    var a = e.target.closest && e.target.closest('a[href^="https://wa.me/"]');
    if (a) window.sptvTrack("WhatsApp", { pagina: location.pathname });
  }, true);

  // Catalogues: which category is opened (the address changes to #tablets, #conectividad...)
  var last = "";
  function category() {
    var h = decodeURIComponent(location.hash.replace(/^#/, ""));
    if (!h || h === last || !/\/(alquiler|compra)\//.test(location.pathname)) return;
    last = h;
    window.sptvTrack("Categoría", { catalogo: /\/compra\//.test(location.pathname) ? "compra" : "alquiler", categoria: h });
  }
  window.addEventListener("hashchange", category);
  window.addEventListener("load", category);
})();

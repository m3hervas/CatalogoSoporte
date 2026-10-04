/* Soporte TV — portada. Classic script (no modules); every init is isolated. */
(function () {
  "use strict";

  var FORM_ENDPOINT = "https://formsubmit.co/ajax/1384af3c840734e20ad3edf0fdf2c1e4";
  var finePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

  function safe(fn, name) {
    try { fn(); } catch (err) { if (window.console) console.warn("[portada] " + name + " failed:", err); }
  }

  // Light / dark theme; the choice is stored under the same key as the catalogue
  function initTheme() {
    var btn = document.getElementById("themeToggle");
    if (!btn) return;
    var root = document.documentElement;
    var sync = function () {
      var dark = root.getAttribute("data-theme") === "dark";
      btn.setAttribute("aria-pressed", dark ? "true" : "false");
      btn.setAttribute("aria-label", dark ? "Cambiar a modo claro" : "Cambiar a modo oscuro");
      var meta = document.querySelector('meta[name="theme-color"]');
      if (meta) meta.setAttribute("content", dark ? "#070A12" : "#F5F7FB");
    };
    btn.addEventListener("click", function () {
      var next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
      root.setAttribute("data-theme", next);
      try { localStorage.setItem("sptv-theme", next); } catch (e) {}
      sync();
    });
    sync();
  }

  // Splash: hide as soon as the page is ready (CSS also hides it at 4.5 s)
  function initSplash() {
    var splash = document.getElementById("splash");
    if (!splash) return;
    var hide = function () { setTimeout(function () { splash.classList.add("is-done"); }, 900); };
    if (document.readyState === "complete") hide(); else window.addEventListener("load", hide);
    setTimeout(function () { splash.classList.add("is-done"); }, 3000);
  }

  // Nav gets a denser background after scrolling
  function initNav() {
    var nav = document.getElementById("nav");
    var onScroll = function () { nav.classList.toggle("is-scrolled", window.scrollY > 40); };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  // Reveal on scroll, with a safety timeout that shows anything still hidden
  function initReveal() {
    var items = [].slice.call(document.querySelectorAll(".reveal"));
    if (!("IntersectionObserver" in window)) { items.forEach(function (el) { el.classList.add("is-in"); }); return; }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add("is-in"); io.unobserve(e.target); }
      });
    }, { threshold: 0.05, rootMargin: "0px 0px -6% 0px" });
    items.forEach(function (el) { io.observe(el); });
    setTimeout(function () { items.forEach(function (el) { el.classList.add("is-in"); }); }, 6000);
  }

  // Choice panels: halo follows the cursor and a gentle 3D tilt (max 5°)
  function initPanels() {
    if (!finePointer) return;
    [].slice.call(document.querySelectorAll(".panel")).forEach(function (panel) {
      panel.addEventListener("pointermove", function (e) {
        var r = panel.getBoundingClientRect();
        var x = (e.clientX - r.left) / r.width, y = (e.clientY - r.top) / r.height;
        panel.style.setProperty("--mx", (x * 100) + "%");
        panel.style.setProperty("--my", (y * 100) + "%");
        panel.style.transform = "perspective(1200px) rotateY(" + ((x - 0.5) * 5) + "deg) rotateX(" + ((0.5 - y) * 4) + "deg)";
      });
      panel.addEventListener("pointerleave", function () { panel.style.transform = ""; });
    });
  }

  // Buttons drift slightly towards the cursor
  function initMagnetic() {
    if (!finePointer) return;
    [].slice.call(document.querySelectorAll(".magnetic")).forEach(function (btn) {
      btn.addEventListener("pointermove", function (e) {
        var r = btn.getBoundingClientRect();
        var dx = e.clientX - (r.left + r.width / 2), dy = e.clientY - (r.top + r.height / 2);
        btn.style.transform = "translate(" + (dx * 0.18) + "px," + (dy * 0.25) + "px)";
      });
      btn.addEventListener("pointerleave", function () { btn.style.transform = ""; });
    });
  }

  // Brands strip: moves on its own; the arrows push it a step back or forward
  function initMarquee() {
    var wrap = document.querySelector(".marquee-wrap");
    var track = wrap && wrap.querySelector(".marquee-track");
    if (!track) return;
    var DURATION = 54; // seconds for one full set, same pace as the CSS fallback
    var x = 0, half = 0, last = 0, hover = false, nudge = null;
    var measure = function () { half = track.scrollWidth / 2; };
    var ease = function (t) { return 1 - Math.pow(1 - t, 3); };
    measure();
    window.addEventListener("resize", measure);
    [].slice.call(track.querySelectorAll("img")).forEach(function (img) { img.addEventListener("load", measure); });
    track.classList.add("is-js");
    if (matchMedia("(hover: hover) and (pointer: fine)").matches) {
      wrap.addEventListener("pointerenter", function () { hover = true; });
      wrap.addEventListener("pointerleave", function () { hover = false; });
    }
    var push = function (dir) {
      var step = Math.max(160, wrap.clientWidth * 0.35) * dir;
      // a click during a push carries on from where that push was going
      var rest = nudge ? nudge.delta * (1 - ease(nudge.p)) : 0;
      nudge = { delta: step + rest, p: 0, start: performance.now() };
    };
    [].slice.call(wrap.querySelectorAll(".marquee-arrow")).forEach(function (btn) {
      btn.hidden = false;
      btn.addEventListener("click", function () { push(btn.classList.contains("next") ? 1 : -1); });
    });
    var frame = function (now) {
      var dt = Math.min(0.1, (now - (last || now)) / 1000);
      last = now;
      if (nudge) {
        var p = Math.min(1, (now - nudge.start) / 650);
        x += nudge.delta * (ease(p) - ease(nudge.p));
        nudge.p = p;
        if (p >= 1) nudge = null;
      } else if (!hover && half) {
        x += (half / DURATION) * dt;
      }
      if (half) x = ((x % half) + half) % half;
      track.style.transform = "translate3d(" + (-x).toFixed(2) + "px, 0, 0)";
      requestAnimationFrame(frame);
    };
    requestAnimationFrame(frame);
  }

  // "Compra" links preselect the purchase option in the contact form
  function initInterestLinks() {
    [].slice.call(document.querySelectorAll('a[href="#compra"], a[data-interest]')).forEach(function (a) {
      a.addEventListener("click", function (e) {
        var value = a.getAttribute("data-interest") || "Compra";
        var radio = document.querySelector('.interest input[value="' + value + '"]');
        if (radio) radio.checked = true;
        if (a.getAttribute("href") === "#compra" && !a.hasAttribute("data-interest")) return;
        e.preventDefault();
        document.getElementById("contacto").scrollIntoView({ behavior: "smooth" });
      });
    });
  }

  // Contact form → FormSubmit (same alias as the catalogue; the address is never in the page)
  function initForm() {
    var form = document.getElementById("contactForm");
    if (!form) return;
    var error = document.getElementById("formError");
    var submit = document.getElementById("formSubmit");
    var success = document.getElementById("formSuccess");
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      error.textContent = "";
      var f = form.elements;
      var name = f.name.value.trim(), company = f.company.value.trim(), email = f.email.value.trim(), msg = f.message.value.trim();
      var interest = (form.querySelector('.interest input:checked') || {}).value || "Alquiler";
      if (!name || !company || !email || !msg) { error.textContent = "Rellena tu nombre, tu empresa, tu correo y qué necesitas."; return; }
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { error.textContent = "Revisa tu correo, no parece válido."; return; }
      submit.disabled = true;
      submit.textContent = "Enviando…";
      fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify({
          _subject: "Solicitud desde la portada (" + interest + ") — " + name,
          _template: "table",
          _captcha: "false",
          Nombre: name,
          Empresa: company,
          email: email,
          "Teléfono": f.phone.value.trim() || "—",
          "Le interesa": interest,
          "Qué necesita": msg
        })
      }).then(function (res) {
        return res.json().catch(function () { return {}; }).then(function (data) {
          if (!res.ok || String(data.success) !== "true") throw new Error(data.message || res.status);
          form.reset();
          success.hidden = false;
        });
      }).catch(function () {
        error.textContent = "No se ha podido enviar. Inténtalo de nuevo en unos minutos.";
      }).then(function () {
        submit.disabled = false;
        submit.textContent = "Enviar solicitud";
      });
    });
  }

  function initYear() {
    var y = document.getElementById("year");
    if (y) y.textContent = new Date().getFullYear();
  }

  safe(initTheme, "theme");
  safe(initSplash, "splash");
  safe(initNav, "nav");
  safe(initReveal, "reveal");
  safe(initPanels, "panels");
  safe(initMagnetic, "magnetic");
  safe(initMarquee, "marquee");
  safe(initInterestLinks, "interest");
  safe(initForm, "form");
  safe(initYear, "year");
})();

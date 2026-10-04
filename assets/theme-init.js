/* Light theme by default; the choice is shared by every page (same key). Loaded in <head> before the CSS paints. */
(function () { var t = "light"; try { t = localStorage.getItem("sptv-theme") || "light"; } catch (e) {}
  document.documentElement.setAttribute("data-theme", t === "dark" ? "dark" : "light"); })();

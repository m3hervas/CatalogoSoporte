"""Genera la versión para WordPress del catálogo a partir de index.html.

- Extrae las imágenes base64 a ../img/ (se publican en GitHub Pages).
- Encapsula todos los estilos dentro de #catalogo-soporte para no chocar con el tema.
- Envuelve el JavaScript para que no interfiera con otros scripts de WordPress.

Uso:  python build_wordpress.py            -> catalogo-wordpress.html (imágenes desde GitHub Pages)
      python build_wordpress.py --local    -> prueba-local.html (imágenes desde ../img, para probar)
"""
import base64, hashlib, io, os, re, sys

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.dirname(HERE)
SRC = os.path.join(ROOT, "index.html")
IMG_DIR = os.path.join(ROOT, "img")
PUBLIC_IMG = "https://m3hervas.github.io/CatalogoSoporte/img/"
SCOPE = "#catalogo-soporte"

local = "--local" in sys.argv
img_base = "../img/" if local else PUBLIC_IMG

html = io.open(SRC, encoding="utf-8").read()

# --- 1. Imágenes base64 -> archivos ---
os.makedirs(IMG_DIR, exist_ok=True)

def extract(m):
    ext, data = m.group(1), m.group(2)
    raw = base64.b64decode(data)
    name = hashlib.sha1(raw).hexdigest()[:12] + "." + ("jpg" if ext == "jpeg" else ext)
    path = os.path.join(IMG_DIR, name)
    if not os.path.exists(path):
        with open(path, "wb") as f:
            f.write(raw)
    return img_base + name

html = re.sub(r"data:image/(png|jpeg|jpg|webp|gif);base64,([A-Za-z0-9+/=]+)", extract, html)

# --- 2. Partes del documento ---
css = re.search(r"<style>(.*?)</style>", html, re.S).group(1)
body = re.search(r"<body>(.*?)<script>", html, re.S).group(1)
js = re.search(r"<script>(.*?)</script>\s*</body>", html, re.S).group(1)
fonts = "\n".join(re.findall(r"<link[^>]+>", html))

# --- 3. Encapsular CSS ---
def scope_selector(sel):
    sel = sel.strip()
    if not sel:
        return sel
    for root in (':root:not([data-theme="dark"])', ':root[data-theme="dark"]', ":root", "html", "body"):
        if sel == root:
            return SCOPE
    return f"{SCOPE} {sel}"

def scope_css(text):
    out, i = [], 0
    while i < len(text):
        brace = text.find("{", i)
        if brace == -1:
            out.append(text[i:])
            break
        head = text[i:brace]
        # skip comments in the head
        comments = re.findall(r"/\*.*?\*/", head, re.S)
        clean = re.sub(r"/\*.*?\*/", "", head, flags=re.S)
        depth, j = 1, brace + 1
        while depth:
            if text[j] == "{": depth += 1
            elif text[j] == "}": depth -= 1
            j += 1
        inner = text[brace + 1:j - 1]
        lead = clean[:len(clean) - len(clean.lstrip())]
        h = clean.strip()
        if h.startswith("@media") or h.startswith("@supports"):
            out.append(f"{lead}{h} {{{scope_css(inner)}}}")
        elif h.startswith("@"):
            out.append(f"{lead}{h} {{{inner}}}")
        else:
            sels = []
            for s in h.split(","):
                s = scope_selector(s)
                if s not in sels:
                    sels.append(s)
            out.append(f"{lead}{', '.join(sels)} {{{inner}}}")
        i = j
    return "".join(out)

scoped = scope_css(css)

# Ajustes para vivir dentro de una página de WordPress
scoped += f"""
  /* --- Integración WordPress --- */
  {SCOPE} {{
    position: relative;
    width: 100vw;
    max-width: 100vw;
    margin-left: calc(50% - 50vw);
    margin-right: calc(50% - 50vw);
    height: auto;
    min-height: 0;
    overflow: hidden;
    line-height: normal;
    text-align: left;
  }}
  {SCOPE} .bg-power, {SCOPE} #dynamicHero {{ position: absolute; }}
  {SCOPE} .bg-power {{ top: 50vh; }}
  {SCOPE} .scrim, {SCOPE} .rent-scrim {{ z-index: 99990; }}
  {SCOPE} .panel {{ z-index: 99991; }}
  {SCOPE} .rent-modal {{ z-index: 99992; }}
  {SCOPE} .intro {{ min-height: calc(100vh - 88px); }}
  {SCOPE} :where(h1, h2, h3, p, span, label, div) {{
    font-family: inherit; text-transform: none; letter-spacing: normal;
  }}
  {SCOPE} :where(h1, h2, h3)::before, {SCOPE} :where(h1, h2, h3)::after {{ content: none; }}
  {SCOPE} :where(button, input, select, textarea) {{
    font-family: inherit; text-transform: none; letter-spacing: normal;
    line-height: normal; min-height: 0; box-shadow: none; text-shadow: none;
    margin: 0; width: auto; height: auto;
  }}
  {SCOPE} :where(img) {{ max-width: none; height: auto; border: 0; box-shadow: none; border-radius: 0; }}
  {SCOPE} :where(header, footer, section, nav) {{
    background: none; border: 0; box-shadow: none; padding: 0; position: static;
  }}
"""

# --- 4. Adaptar JavaScript ---
def js_rep(old, new, count=None):
    global js
    n = js.count(old)
    assert n >= 1 and (count is None or n == count), (n, old)
    js = js.replace(old, new)

js_rep("""  window.scrollTo(0, 0);
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;""", """  catRoot.scrollIntoView();""", 1)
js_rep("""    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;""", """    catRoot.scrollIntoView();""", 1)
js_rep("""  return window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0;""",
       """  return Math.max(0, -catRoot.getBoundingClientRect().top);""", 1)
js_rep("""document.body.addEventListener("scroll", updateHeroOpacity, { passive: true });
""", "", 1)
js_rep('document.querySelector("header")', 'catRoot.querySelector("header")', 1)
js_rep('document.querySelector(".brand-header img")', 'catRoot.querySelector(".brand-header img")', 1)
js_rep('document.querySelectorAll(".category-card")', 'catRoot.querySelectorAll(".category-card")', 1)
js_rep('document.querySelectorAll("[data-back]")', 'catRoot.querySelectorAll("[data-back]")')

js = f"""(function () {{
const catRoot = document.getElementById("catalogo-soporte");

// Ocupar todo el ancho de la ventana aunque el tema meta el contenido en una columna
function fitFullWidth() {{
  catRoot.style.marginLeft = "0px";
  catRoot.style.marginRight = "0px";
  const w = document.documentElement.clientWidth;
  const left = catRoot.getBoundingClientRect().left;
  catRoot.style.width = w + "px";
  catRoot.style.maxWidth = w + "px";
  catRoot.style.marginLeft = -left + "px";
}}
fitFullWidth();
window.addEventListener("resize", fitFullWidth);
{js}
}})();"""

snippet = f"""<!-- Catálogo Soporte TV — versión WordPress (generado desde index.html) -->
{fonts}
<style>{scoped}</style>
<div id="catalogo-soporte">
{body.strip()}
</div>
<script>{js}</script>
"""

name = "prueba-local.html" if local else "catalogo-wordpress.html"
out = os.path.join(HERE, name)
if local:
    snippet = io.open(os.path.join(HERE, "simulador-wordpress.html"), encoding="utf-8").read().replace("<!--CATALOGO-->", snippet)
io.open(out, "w", encoding="utf-8").write(snippet)
print(f"{name}: {len(snippet.encode('utf-8'))/1024:.0f} KB, imágenes en {IMG_DIR}: {len(os.listdir(IMG_DIR))}")

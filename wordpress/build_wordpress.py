"""Genera la versión para WordPress del catálogo a partir de index.html.

- Extrae las imágenes base64 a ../img/ (se publican en GitHub Pages).
- Encapsula todos los estilos dentro de #catalogo-soporte para no chocar con el tema.
- Envuelve el JavaScript para que no interfiera con otros scripts de WordPress.

Uso:  python build_wordpress.py            -> catalogo-wordpress.html (imágenes desde GitHub Pages)
      python build_wordpress.py --local    -> prueba-local.html (imágenes desde ../img, para probar)
"""
import base64, hashlib, io, json, os, re, sys

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

# Dentro del Shadow DOM, las búsquedas de elementos se hacen en la "burbuja"
js = re.sub(r"document\.(getElementById|querySelector|querySelectorAll)\(", r"shadow.\1(", js)

# El contenedor ya ocupa todo el ancho del host
scoped += f"""
  :host {{ all: initial; display: block; }}
  {SCOPE} {{ width: 100%; max-width: none; margin: 0; }}
"""

font_urls = re.findall(r'<link href="([^"]+)" rel="stylesheet">', fonts)
html_body = f'<div id="catalogo-soporte">\n{body.strip()}\n</div>'

loader = f"""/* Catálogo Soporte TV para WordPress — generado desde index.html con build_wordpress.py */
(function () {{
const host = document.getElementById("catalogo-soporte-app");
if (!host || host.shadowRoot) return;

{json.dumps(font_urls)}.forEach(href => {{
  if (!document.querySelector(`link[href="${{href}}"]`)) {{
    const l = document.createElement("link");
    l.rel = "stylesheet"; l.href = href;
    document.head.appendChild(l);
  }}
}});

const shadow = host.attachShadow({{ mode: "open" }});
shadow.innerHTML = "<style>" + {json.dumps(scoped)} + "</style>" + {json.dumps(html_body)};
const catRoot = shadow.getElementById("catalogo-soporte");

// Ocupar todo el ancho de la ventana aunque el tema meta el contenido en una columna
function fitFullWidth() {{
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
}}
fitFullWidth();
window.addEventListener("resize", fitFullWidth);
{js}
}})();
"""

SNIPPET = '<div id="catalogo-soporte-app"></div>\n<script src="{src}"></script>\n'

if local:
    io.open(os.path.join(HERE, "catalogo-local.js"), "w", encoding="utf-8").write(loader)
    page = io.open(os.path.join(HERE, "simulador-wordpress.html"), encoding="utf-8").read()
    page = page.replace("<!--CATALOGO-->", SNIPPET.format(src="catalogo-local.js"))
    io.open(os.path.join(HERE, "prueba-local.html"), "w", encoding="utf-8").write(page)
    print("prueba-local.html + catalogo-local.js")
else:
    io.open(os.path.join(HERE, "catalogo.js"), "w", encoding="utf-8").write(loader)
    io.open(os.path.join(HERE, "catalogo-wordpress.html"), "w", encoding="utf-8").write(
        SNIPPET.format(src="https://m3hervas.github.io/CatalogoSoporte/wordpress/catalogo.js"))
    print(f"catalogo.js: {len(loader.encode('utf-8'))/1024:.0f} KB; catalogo-wordpress.html actualizado")

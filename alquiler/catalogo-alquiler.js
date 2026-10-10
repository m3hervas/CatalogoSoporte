/* GENERATED from tools/catalogo_fuente.html by tools/build_catalogo.py — do not edit by hand */
// Products marked "No" in the column "¿Se muestra en la web?" of Productos_web_SoporteTV.xlsx (filled in by tools/build_catalogo.py)
const HIDDEN_PRODUCTS = new Set(["grid|Apple|iPad (5.ª generación)|", "gridAccessories|Apple|Adaptador USB-C a USB|"]);
const productId = (gridEl, p) => [gridEl.id, p.brand || "", p.model, p.key || ""].join("|");
// Cards and thumbnails use the 480 px copy of each photo (../alquiler/img/s/, made by tools/build_catalogo.py); the sheet the full one
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
    photo: "../alquiler/img/lenovo-tab_SpTV.webp",
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
    photo: "../alquiler/img/samsung-galaxy-tab-a8_SpTV.webp",
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
    photo: "../alquiler/img/samsung-galaxy-tab-s9-ultra_SpTV.webp",
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
    photo: "../alquiler/img/apple-ipad-5-generacion_SpTV.webp",
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
    photo: "../alquiler/img/apple-ipad-6-generacion_SpTV.webp",
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
    photo: "../alquiler/img/apple-ipad-7-generacion_SpTV.webp",
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
    photo: "../alquiler/img/apple-ipad-9-generacion_SpTV.webp",
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
    photo: "../alquiler/img/apple-ipad-a16-11-generacion_SpTV.webp",
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
    photo: "../alquiler/img/apple-ipad-air_SpTV.webp",
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
    photo: "../alquiler/img/apple-ipad-air-m2_SpTV.webp",
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
    photo: "../alquiler/img/apple-ipad-pro_SpTV.webp",
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
    photo: "../alquiler/img/apple-ipad-pro-4-generacion_SpTV.webp",
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
    photo: "../alquiler/img/apple-iphone-18-pro_SpTV.webp",
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
    photo: "../alquiler/img/apple-iphone-17-pro_SpTV.webp",
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
    photo: "../alquiler/img/apple-iphone-17_SpTV.webp",
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
    photo: "../alquiler/img/apple-iphone-16-pro_SpTV.webp",
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
    photo: "../alquiler/img/samsung-galaxy-s26_SpTV.webp",
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
    photo: "../alquiler/img/samsung-galaxy-s25_SpTV.webp",
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
    photo: "../alquiler/img/samsung-galaxy-s25-fe-oficial_SpTV.webp",
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
    photo: "../alquiler/img/samsung-galaxy-s24-oficial_SpTV.webp",
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
    photo: "../alquiler/img/xiaomi-redmi-15c_SpTV.webp",
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
    photo: "../alquiler/img/xiaomi-redmi-note-14_SpTV.webp",
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
    photo: "../alquiler/img/xiaomi-redmi-10-5g_SpTV.webp",
    icon: phoneIcon("#FF6900"),
    specs: [
      ["Categoría", "Móvil Android"],
      ["Almacenamiento", "64 GB / 128 GB"],
      ["Pantalla", "6,58 ''"]
    ]
  }
];

// Grouped by type: digital pencils, tripods, gimbals, then the rest
const ACCESSORIES = [
{
    cat: "accessory", catLabel: "Accesorio", type: "Lápiz digital", group: "iPad", brand: "Apple", brandCode: "A", brandColor: "var(--apple)",
    model: "Apple Pencil", photo: "../alquiler/img/apple-pencil_SpTV.webp?v=2",
    icon: accessoryIcon("#5B6470"),
    specs: [
      ["Categoría", "Accesorio · iPad"],
      ["Marca", "Apple"]
    ]
  },
{
    cat: "accessory", catLabel: "Accesorio", type: "Lápiz digital", group: "iPad", brand: "Wacom", brandCode: "W", brandColor: "#0090C8",
    model: "Bamboo Fineline", photo: "../alquiler/img/wacom-bamboo-fineline_SpTV.webp",
    icon: accessoryIcon("#0090C8"),
    specs: [
      ["Categoría", "Accesorio · iPad"],
      ["Marca", "Wacom"]
    ]
  },
{
    cat: "accessory", catLabel: "Accesorio", type: "Trípode", group: "Móvil/Cámara", brand: "Celly", brandCode: "C", brandColor: "#E4572E",
    model: "Trípode", photo: "../alquiler/img/celly-tripode_SpTV.webp",
    icon: accessoryIcon("#E4572E"),
    specs: [
      ["Categoría", "Accesorio · Móvil/Cámara"],
      ["Marca", "Celly"],
      ["Descripción", "Minitrípode de sobremesa con pinza para móvil y rótula de bola que gira 360°: para grabar o hacer videollamadas con el móvil apoyado en una mesa. También vale para cámaras compactas con rosca de 1/4\"."],
      ["Rótula", "De bola, giro de 360°"],
      ["Rosca", "1/4\""],
      ["Incluye", "Trípode + pinza para móvil"],
      ["Móviles compatibles", "Hasta 6,2''"],
      ["Altura", "19 cm"],
      ["Material", "Plástico"]
    ]
  },
{
    cat: "accessory", catLabel: "Accesorio", type: "Trípode", group: "Móvil/Cámara", brand: "RØDE", brandCode: "R", brandColor: "#111111",
    model: "Tripod 2", photo: "../alquiler/img/rode-tripod-2_SpTV.webp",
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
    model: "PIXI con pinza para smartphone", photo: "../alquiler/img/manfrotto-pixi-pinza-smartphone_SpTV.webp",
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
    cat: "accessory", catLabel: "Accesorio", type: "Gimbal", group: "Móvil/Cámara", brand: "Zhiyun", brandCode: "Z", brandColor: "#6B4FA0",
    model: "Smooth X Combo", photo: "../alquiler/img/zhiyun-smooth-x-combo_SpTV.webp",
    icon: accessoryIcon("#6B4FA0"),
    specs: [
      ["Categoría", "Accesorio · Móvil/Cámara"],
      ["Marca", "Zhiyun"],
      ["Descripción", "Estabilizador (gimbal) de 2 ejes para móvil, plegable y del tamaño de la mano, con palo extensible integrado para grabar en mano o como selfie. El kit Combo trae además un minitrípode para dejarlo apoyado."],
      ["Estabilización", "2 ejes"],
      ["Palo extensible", "Integrado, 26 cm"],
      ["Incluye", "Gimbal + minitrípode + funda de transporte"],
      ["Móviles compatibles", "50–90 mm de ancho · 7,5–9,5 mm de grosor · hasta 235 g"],
      ["Peso", "246 g"]
    ]
  },
{
    cat: "accessory", catLabel: "Accesorio", type: "Gimbal", group: "Móvil/Cámara", brand: "Insta360", brandCode: "I", brandColor: "#111111",
    model: "Flow 2 Pro", photo: "../alquiler/img/insta360-flow-2-pro_SpTV.webp",
    icon: accessoryIcon("#111111"),
    specs: [
      ["Categoría", "Accesorio · Móvil/Cámara"],
      ["Marca", "Insta360"],
      ["Descripción", "Gimbal de 3 ejes para móvil con seguimiento por IA y giro horizontal infinito de 360°. Compatible con Apple DockKit: sigue a la persona también desde la cámara del iPhone y más de 200 apps. Palo selfie y trípode integrados."],
      ["Estabilización", "3 ejes"],
      ["Giro horizontal", "360° infinito"],
      ["Seguimiento", "Deep Track 4.0 con IA (sigue a la persona)"],
      ["Apple DockKit", "Sí"],
      ["Palo selfie y trípode", "Integrados (palo de 21 cm)"],
      ["Incluye", "Pinza magnética para móvil, cable de carga y funda"],
      ["Móviles compatibles", "64–84 mm de ancho · 6,9–10 mm de grosor · hasta 300 g"],
      ["Batería", "1100 mAh · hasta 10 h · carga en 2 h"],
      ["Peso", "357 g"]
    ]
  },
{
    cat: "accessory", catLabel: "Accesorio", type: "Gimbal", group: "Móvil/Cámara", brand: "Insta360", brandCode: "I", brandColor: "#111111",
    model: "Flow 2", photo: "../alquiler/img/insta360-flow-2_SpTV.webp",
    icon: accessoryIcon("#111111"),
    specs: [
      ["Categoría", "Accesorio · Móvil/Cámara"],
      ["Marca", "Insta360"],
      ["Descripción", "Gimbal de 3 ejes para móvil con seguimiento por IA desde la app de Insta360. Palo selfie y trípode integrados, para grabar en mano o dejarlo apoyado."],
      ["Estabilización", "3 ejes"],
      ["Giro horizontal", "-210° a 120°"],
      ["Seguimiento", "Deep Track 4.0 con IA (sigue a la persona)"],
      ["Palo selfie y trípode", "Integrados (palo de 20,7 cm)"],
      ["Incluye", "Pinza magnética para móvil, cable de carga y funda"],
      ["Móviles compatibles", "64–84 mm de ancho · 6,9–10 mm de grosor · hasta 300 g"],
      ["Batería", "1100 mAh · hasta 10 h · carga en 2 h"],
      ["Peso", "348 g"]
    ]
  },
{
    cat: "accessory", catLabel: "Accesorio", type: "Funda", group: "iPad", brand: "", brandCode: "", brandColor: "#5C6672",
    model: "Funda con teclado", photo: "../alquiler/img/funda-teclado-ipad-oficial_SpTV.webp",
    icon: accessoryIcon("#5C6672"),
    specs: [
      ["Categoría", "Accesorio · iPad"],
      ["Compatibilidad", "iPad 7.ª / 8.ª / 9.ª generación"]
    ]
  },
{
    cat: "accessory", catLabel: "Accesorio", type: "Funda", group: "iPad", brand: "", brandCode: "", brandColor: "#5C6672",
    model: "Funda Rugged / Correa", photo: "../alquiler/img/funda-rugged-sin-marca_SpTV.webp",
    icon: accessoryIcon("#5C6672"),
    specs: [
      ["Categoría", "Accesorio · iPad"]
    ]
  },
{
    cat: "accessory", catLabel: "Accesorio", type: "Adaptador", group: "Móvil/Cámara", brand: "Apple", brandCode: "A", brandColor: "var(--apple)",
    model: "Adaptador USB-C a USB", photo: "../alquiler/img/apple-adaptador-usb-c-a-usb_SpTV.webp",
    icon: accessoryIcon("#5B6470"),
    specs: [
      ["Categoría", "Accesorio · Móvil/Cámara"],
      ["Marca", "Apple"]
    ]
  },
{
    cat: "accessory", catLabel: "Accesorio", type: "Iluminación", group: "Móvil/Cámara", brand: "", brandCode: "", brandColor: "#5C6672",
    model: "Aro de luz", photo: "../alquiler/img/aro-de-luz_SpTV.webp?v=2",
    icon: accessoryIcon("#5C6672"),
    specs: [
      ["Categoría", "Accesorio · Móvil/Cámara"]
    ]
  },
{
    cat: "accessory", catLabel: "Accesorio", type: "Batería externa", group: "Móvil/Cámara", brand: "Xiaomi", brandCode: "X", brandColor: "#FF6900",
    model: "Magnetic Power Bank 10000 con soporte", photo: "../alquiler/img/xiaomi-magnetic-power-bank-10000-azul_SpTV.webp", color: "Azul|Beige|Gris|Púrpura", colors: [{"name": "Azul", "hex": "#AFC0F0", "photo": "../alquiler/img/xiaomi-magnetic-power-bank-10000-azul_SpTV.webp"}, {"name": "Beige", "hex": "#E6DED0", "photo": "../alquiler/img/xiaomi-magnetic-power-bank-10000-beige_SpTV.webp"}, {"name": "Gris", "hex": "#2E2F33", "photo": "../alquiler/img/xiaomi-magnetic-power-bank-10000-gris_SpTV.webp"}, {"name": "Púrpura", "hex": "#D9CBF2", "photo": "../alquiler/img/xiaomi-magnetic-power-bank-10000-purpura_SpTV.webp"}],
    icon: accessoryIcon("#FF6900"),
    specs: [
      ["Categoría", "Accesorio · Móvil/Cámara"],
      ["Marca", "Xiaomi"],
      ["Descripción", "Batería externa magnética con soporte plegable: se pega a la parte trasera del iPhone y lo carga sin cables, y el soporte lo deja de pie para ver vídeos o hacer videollamadas. Lleva además un cable USB-C integrado."],
      ["Capacidad", "10000 mAh"],
      ["Carga con cable", "Hasta 33 W (cable USB-C integrado y puerto USB-C)"],
      ["Carga inalámbrica", "Magnética · iPhone 12 o posterior (excepto iPhone 16e)"],
      ["Fuerza magnética", "13 N"],
      ["Soporte", "Integrado, hasta unos 80°"],
      ["Medidas", "108,8 × 68,9 × 20,3 mm"],
      ["Peso", "229 g"],
      ["Colores", "Azul · Beige · Gris · Púrpura"]
    ]
  },
{
    cat: "accessory", catLabel: "Accesorio", type: "Batería externa", group: "Móvil/Cámara", brand: "Xiaomi", brandCode: "X", brandColor: "#FF6900",
    model: "33W Power Bank 10000 con cable integrado", photo: "../alquiler/img/xiaomi-33w-power-bank-10000-azul_SpTV.webp", color: "Azul|Tan", colors: [{"name": "Azul", "hex": "#2F3768", "photo": "../alquiler/img/xiaomi-33w-power-bank-10000-azul_SpTV.webp"}, {"name": "Tan", "hex": "#EDE4D5", "photo": "../alquiler/img/xiaomi-33w-power-bank-10000-tan_SpTV.webp"}],
    icon: accessoryIcon("#FF6900"),
    specs: [
      ["Categoría", "Accesorio · Móvil/Cámara"],
      ["Marca", "Xiaomi"],
      ["Descripción", "Batería externa compacta con cable USB-C integrado que también sirve de cordón para colgarla. Carga rápida de 33 W y tres salidas para cargar varios dispositivos a la vez."],
      ["Capacidad", "10000 mAh"],
      ["Carga rápida", "Hasta 33 W"],
      ["Salidas", "Cable USB-C integrado · USB-C · USB-A"],
      ["Medidas", "80,9 × 65,9 × 26 mm"],
      ["Colores", "Azul · Tan"]
    ]
  }
];

const COMPUTERS = [
{
    cat: "computer", catLabel: "Portátil", type: "Portátil", brand: "HP / Dell / Lenovo", brandCode: "H", brandColor: "#0096D6",
    model: "Portátil gaming", photo: "../alquiler/img/hp-victus_SpTV.webp", storages: ["512 GB", "1 TB"],
    icon: laptopIcon("#0096D6"),
    specs: [
      ["Categoría", "Portátil"],
      ["Marca", "HP / Dell / Lenovo"],
      ["Descripción", "Portátil potente para edición, gráficos o juegos, con tarjeta gráfica NVIDIA RTX dedicada. El modelo concreto puede variar según disponibilidad."],
      ["Procesador", "Intel Core i7 a i9"],
      ["RAM", "16 GB · 32 GB · 64 GB"],
      ["Almacenamiento", "512 GB o 1 TB SSD"],
      ["Gráfica", "NVIDIA RTX dedicada"],
      ["Pantalla", "16 ''"],
      ["Incluye", "Maletín y ratón"]
    ]
  },
{
    cat: "computer", catLabel: "Portátil", type: "Portátil", brand: "HP", brandCode: "H", brandColor: "#0096D6",
    model: "HP ZBook", photo: "../alquiler/img/hp-zbook-8-arquitectura_SpTV.webp", storages: ["512 GB", "1 TB"],
    icon: laptopIcon("#0096D6"),
    specs: [
      ["Categoría", "Portátil"],
      ["Marca", "HP"],
      ["Descripción", "Estación de trabajo portátil de HP para diseño, arquitectura, 3D y edición: programas como AutoCAD, Revit o Adobe funcionan con soltura gracias a la gráfica NVIDIA RTX dedicada. El modelo concreto puede variar según disponibilidad."],
      ["Procesador", "Intel Core i7 a i9"],
      ["RAM", "16 GB · 32 GB · 64 GB"],
      ["Almacenamiento", "512 GB o 1 TB SSD"],
      ["Gráfica", "NVIDIA RTX dedicada"],
      ["Pantalla", "14'' o 16''"],
      ["Incluye", "Maletín y ratón"]
    ]
  },
{
    cat: "computer", catLabel: "Portátil", type: "Portátil", brand: "HP / Dell / Lenovo", brandCode: "D", brandColor: "#5C6672",
    model: "Portátil ofimática 14''", photo: "../alquiler/img/portatil-8-gb-ram_SpTV.webp", storages: ["256 GB", "512 GB"],
    icon: laptopIcon("#5C6672"),
    specs: [
      ["Categoría", "Portátil"],
      ["Marcas disponibles", "HP / Dell / Lenovo"],
      ["Descripción", "Portátil para trabajo de oficina, correo, navegación, videollamadas y presentaciones. El modelo concreto puede variar según disponibilidad."],
      ["Procesador", "Intel Core i5 · Intel Core i7"],
      ["RAM", "8 GB · 16 GB"],
      ["Almacenamiento", "256 GB / 512 GB SSD"],
      ["Pantalla", "14 ''"],
      ["Incluye", "Maletín y ratón"]
    ]
  },
{
    cat: "computer", catLabel: "Portátil", type: "Portátil", brand: "HP / Dell / Lenovo", brandCode: "D", brandColor: "#5C6672",
    model: "Portátil ofimática 16''", photo: "../alquiler/img/portatil-16-gb-ram-intel-core-i5_SpTV.webp", storages: ["256 GB", "512 GB"],
    icon: laptopIcon("#5C6672"),
    specs: [
      ["Categoría", "Portátil"],
      ["Marcas disponibles", "HP / Dell / Lenovo"],
      ["Descripción", "Portátil para trabajo de oficina, correo, navegación, videollamadas y presentaciones. El modelo concreto puede variar según disponibilidad."],
      ["Procesador", "Intel Core i5 · Intel Core i7"],
      ["RAM", "8 GB · 16 GB"],
      ["Almacenamiento", "256 GB / 512 GB SSD"],
      ["Pantalla", "16 ''"],
      ["Incluye", "Maletín y ratón"]
    ]
  },
{
    cat: "computer", catLabel: "Portátil", type: "Portátil", brand: "HP / Dell / Lenovo", brandCode: "D", brandColor: "#5C6672",
    model: "Portátil convertible", photo: "../alquiler/img/hp-elitebook-x360-convertible_SpTV.webp", storages: ["256 GB", "512 GB"],
    icon: laptopIcon("#5C6672"),
    specs: [
      ["Categoría", "Portátil"],
      ["Marcas disponibles", "HP / Dell / Lenovo"],
      ["Descripción", "Portátil convertible 2 en 1 con pantalla táctil: la pantalla gira 360° para usarlo como portátil, en modo tienda para presentaciones o como tableta. El modelo concreto puede variar según disponibilidad."],
      ["Procesador", "Intel Core i5 · Intel Core i7"],
      ["RAM", "8 GB · 16 GB"],
      ["Almacenamiento", "256 GB / 512 GB SSD"],
      ["Pantalla", "13,3'' o 14'' táctil"],
      ["Incluye", "Maletín y ratón"]
    ]
  },
{
    cat: "computer", catLabel: "Surface", type: "Surface", brand: "Microsoft", brandCode: "M", brandColor: "#00A4EF",
    model: "Surface Pro 7",
    photo: "../alquiler/img/microsoft-surface-pro-7_SpTV.webp", cpu: "i5", storage: "128 GB", storages: ["128 GB", "256 GB", "512 GB", "1 TB"],
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
    photo: "../alquiler/img/microsoft-surface-pro-7_SpTV.webp", cpu: "i5", storage: "256 GB",
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
    photo: "../alquiler/img/microsoft-surface-pro-7_SpTV.webp", cpu: "i5", storage: "256 GB",
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
    photo: "../alquiler/img/microsoft-surface-pro-7_SpTV.webp", cpu: "i7", storage: "256 GB",
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
    photo: "../alquiler/img/microsoft-surface-pro-7_SpTV.webp", cpu: "i7", storage: "512 GB",
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
    cat: "computer", catLabel: "AIO", type: "AIO", brand: "HP / Dell / Lenovo", brandCode: "D", brandColor: "#5C6672",
    model: "AIO (Todo en uno) 16 GB RAM", photo: "../alquiler/img/aio-todo-en-uno-16-gb-ram_SpTV.webp",
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
    cat: "computer", catLabel: "CPU", type: "CPU", brand: "HP / Dell / Lenovo", brandCode: "D", brandColor: "#5C6672",
    model: "CPU 16 GB RAM", photo: "../alquiler/img/cpu-16-gb-ram_SpTV.webp",
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
    cat: "computer", catLabel: "CPU + Monitor", type: "CPU + Monitor", brand: "HP / Dell / Lenovo", brandCode: "D", brandColor: "#5C6672",
    model: "CPU + Monitor 16 GB RAM", photo: "../alquiler/img/cpu-monitor-16-gb-ram_SpTV.webp",
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
    model: "HP Workstation", photo: "../alquiler/img/hp-workstation_SpTV.webp",
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
    cat: "mac", catLabel: "MacBook Pro", type: "MacBook Pro", brand: "Apple", brandCode: "A", brandColor: "var(--apple)",
    model: "MacBook Pro 14'' M5", photo: "../alquiler/img/apple-macbook-pro-14-m5-negro-espacial_SpTV.webp", storages: ["1 TB", "2 TB", "4 TB"],
    color: "Negro espacial|Plata", colors: [{"name": "Negro espacial", "hex": "#2E2E30", "photo": "../alquiler/img/apple-macbook-pro-14-m5-negro-espacial_SpTV.webp"}, {"name": "Plata", "hex": "#E3E4E5", "photo": "../alquiler/img/apple-macbook-pro-14-m5-plata_SpTV.webp"}],
    icon: laptopIcon("#5B6470"),
    specs: [
      ["Categoría", "MacBook Pro"],
      ["Procesador", "Apple M5 · Apple M5 Pro"],
      ["Memoria", "16 GB (M5) · 24 GB (M5 Pro)"],
      ["Almacenamiento", "1 TB / 2 TB / 4 TB"],
      ["Pantalla", "14,2 ''"],
      ["Pantalla (detalle)", "Liquid Retina XDR · ProMotion hasta 120 Hz"],
      ["Autonomía", "Hasta 24 h de vídeo (M5) · 22 h (M5 Pro)"],
      ["Conexiones", "3 Thunderbolt · HDMI · ranura SDXC · MagSafe 3 · auriculares"],
      ["Peso", "1,55 kg (M5) · 1,6 kg (M5 Pro)"],
      ["Colores", "Negro espacial · Plata"],
      ["Año", "2025 / 2026"]
    ]
  },
  {
    cat: "mac", catLabel: "MacBook Pro", type: "MacBook Pro", brand: "Apple", brandCode: "A", brandColor: "var(--apple)",
    model: "MacBook Pro 16'' M5 Pro", photo: "../alquiler/img/apple-macbook-pro-16-m5-pro-negro-espacial_SpTV.webp", storages: ["1 TB", "2 TB", "4 TB"],
    color: "Negro espacial|Plata", colors: [{"name": "Negro espacial", "hex": "#2E2E30", "photo": "../alquiler/img/apple-macbook-pro-16-m5-pro-negro-espacial_SpTV.webp"}, {"name": "Plata", "hex": "#E3E4E5", "photo": "../alquiler/img/apple-macbook-pro-16-m5-pro-plata_SpTV.webp"}],
    icon: laptopIcon("#5B6470"),
    specs: [
      ["Categoría", "MacBook Pro"],
      ["Procesador", "Apple M5 Pro"],
      ["Memoria", "24 GB · 48 GB"],
      ["Almacenamiento", "1 TB / 2 TB / 4 TB"],
      ["Pantalla", "16,2 ''"],
      ["Pantalla (detalle)", "Liquid Retina XDR · ProMotion hasta 120 Hz"],
      ["Autonomía", "Hasta 24 h de vídeo"],
      ["Conexiones", "3 Thunderbolt · HDMI · ranura SDXC · MagSafe 3 · auriculares"],
      ["Peso", "2,14 kg"],
      ["Colores", "Negro espacial · Plata"],
      ["Año", "2026"]
    ]
  },
  {
    cat: "mac", catLabel: "MacBook Air", type: "MacBook Air", brand: "Apple", brandCode: "A", brandColor: "var(--apple)",
    model: "MacBook Air 13,3'' M1", photo: "../alquiler/img/apple-macbook-air-13-3-m1_SpTV.webp", storages: ["128 GB", "256 GB", "512 GB", "1 TB", "2 TB"],
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
    model: "MacBook Air 13,6'' M2", photo: "../alquiler/img/apple-macbook-air-13-6-m2_SpTV.webp", storages: ["256 GB", "512 GB", "1 TB", "2 TB"],
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
    model: "MacBook Air 13,6'' M4", photo: "../alquiler/img/apple-macbook-air-13-6-m4_SpTV.webp", storages: ["256 GB", "512 GB", "1 TB", "2 TB"],
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
    model: "MacBook Pro 13''", photo: "../alquiler/img/apple-macbook-pro-13_SpTV.webp", storages: ["256 GB", "512 GB", "1 TB", "2 TB"],
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
    model: "MacBook Pro 14'' M1 Pro", photo: "../alquiler/img/apple-macbook-pro-14-m1-pro_SpTV.webp", storages: ["512 GB", "1 TB", "2 TB", "4 TB", "8 TB"],
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
    model: "MacBook Pro 16''", photo: "../alquiler/img/apple-macbook-pro-16_SpTV.webp", storages: ["1 TB", "2 TB", "4 TB", "8 TB"],
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
    model: "iMac 24''", photo: "../alquiler/img/apple-imac-24_SpTV.webp", storages: ["256 GB", "512 GB", "1 TB", "2 TB"],
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
    model: "Mac mini", photo: "../alquiler/img/apple-mac-mini_SpTV.webp", storages: ["256 GB", "512 GB", "1 TB", "2 TB", "4 TB", "8 TB"],
    icon: desktopIcon("#5B6470"),
    specs: [
      ["Categoría", "Mac mini"],
      ["Chip", "Apple M6 / M5 Pro"],
      ["Almacenamiento", "256 GB / 512 GB / 1 TB / 2 TB / 4 TB / 8 TB"]
    ]
  },
  {
    cat: "mac", catLabel: "Mac Studio", type: "Mac Studio", brand: "Apple", brandCode: "A", brandColor: "var(--apple)",
    model: "Mac Studio", photo: "../alquiler/img/apple-mac-studio_SpTV.webp", storages: ["512 GB", "1 TB", "2 TB", "4 TB", "8 TB", "16 TB"],
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
    model: "Monitor LED 24''", photo: "../alquiler/img/monitor-led-24_SpTV.webp",
    icon: monitorIcon("#1428A0"),
    specs: [
      ["Categoría", "Monitor LED"],
      ["Marcas disponibles", "Samsung / HP"],
      ["Pantalla", "24'' LED"]
    ]
  },
  {
    cat: "monitor", catLabel: "Monitor LED", type: "LED", group: "27''", brand: "LG / Nilox", brandCode: "L", brandColor: "#A50034",
    model: "Monitor LED 27''", photo: "../alquiler/img/monitor-led-27_SpTV.webp",
    icon: monitorIcon("#A50034"),
    specs: [
      ["Categoría", "Monitor LED"],
      ["Marcas disponibles", "LG / Nilox"],
      ["Pantalla", "27'' LED"]
    ]
  },
  {
    cat: "monitor", catLabel: "Monitor 4K", type: "4K", group: "27''", brand: "Samsung", brandCode: "S", brandColor: "var(--samsung)",
    model: "Samsung Odyssey 27''", photo: "../alquiler/img/samsung-odyssey-27_SpTV.webp",
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
    model: "Monitor de estudio JVC 24''", photo: "../alquiler/img/jvc-monitor-de-estudio-24_SpTV.webp",
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
    model: "Monitor LG 65'' 4K", photo: "../alquiler/img/lg-monitor-65-4k_SpTV.webp",
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
        photo: device === "MiFi" ? "../alquiler/img/mifi-portatil_SpTV.webp?v=2" : "../alquiler/img/router-con-sim_SpTV.webp?v=2",
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
  model: "Punto de acceso inalámbrico Ubiquiti", photo: "../alquiler/img/ubiquiti-punto-de-acceso_SpTV.webp",
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
    model: "Jabra PanaCast", photo: "../alquiler/img/jabra-panacast_SpTV.webp",
    icon: videoconfIcon("#1A1A1A"),
    info: [["screen", "Vídeo", "4K panorámico 180°", 1], ["signal", "Audio", "2 micrófonos", 1], ["port", "Conexión", "USB-C"]],
    specs: [["Categoría", "Cámara panorámica de videoconferencia para salas pequeñas"], ["Marca", "Jabra"], ["Cámara", "3 cámaras de 13 MP con unión de imagen en tiempo real · 4K panorámico (3840 × 1080) · campo de visión 180°"], ["Audio", "2 micrófonos integrados"], ["Funciones", "Zoom inteligente que encuadra a todos los asistentes · HDR automático según la luz de la sala"], ["Compatibilidad", "Microsoft Teams, Zoom y las principales plataformas de videollamada · conectar y usar"], ["Conexión", "USB-C"]]
  },
  {
    cat: "videoconf", catLabel: "Intercom", type: "Intercom", brand: "Hollyland", brandCode: "H", brandColor: "#E60012",
    model: "Hollyland Solidcom C1 Pro", photo: "../alquiler/img/hollyland-solidcom-c1-pro_SpTV.webp",
    icon: videoconfIcon("#E60012"),
    info: [["tag", "Sets", "De 2 a 8 cascos", 1], ["signal", "Alcance", "350 m", 1], ["speed", "Batería", "Más de 10 h por casco"]],
    specs: [["Categoría", "Intercom inalámbrico (cascos)"], ["Marca", "Hollyland"], ["Sets disponibles", "2, 3, 4, 6 u 8 cascos (1 principal + remotos)"], ["Conversación", "Full dúplex: todos hablan a la vez, sin estación base · botón TALK / MUTE"], ["Audio", "Doble micrófono con cancelación de ruido (ENC) y de eco"], ["Alcance", "Hasta 350 m con visión directa · DECT 1,9 GHz"], ["Batería", "Más de 10 h (casco remoto) · más de 5 h (casco principal) · carga en unas 2,5 h"], ["Peso", "Unos 170 g por casco"]]
  },
  {
    cat: "videoconf", catLabel: "Walkies", type: "Walkies", brand: "Motorola", brandCode: "M", brandColor: "#005EB8",
    model: "Motorola DP4400", photo: "../alquiler/img/motorola-dp4400_SpTV.webp",
    icon: videoconfIcon("#005EB8"),
    info: [["signal", "Tecnología", "Digital DMR + analógico", 1], ["tag", "Canales", "64", 1], ["speed", "Batería", "Hasta 28 h · IP68"]],
    specs: [["Categoría", "Walkie-talkie profesional (MOTOTRBO)"], ["Marca", "Motorola Solutions"], ["Tecnología", "Digital DMR y analógico"], ["Canales", "64 (sin teclado ni pantalla)"], ["Potencia", "VHF 1 / 5 W · UHF 1 / 4 W"], ["Batería", "Hasta 28 h"], ["Resistencia", "IP68 (sumergible) y estándar militar"], ["Otros", "Botón de emergencia y cancelación de ruido"]]
  }
];

const PRINTERS = [
  {
    cat: "printer", catLabel: "B/N|Color", type: "B/N|Color", group: "A4|A3", brand: "", brandCode: "", brandColor: "#5C6672",
    model: "Impresora multifunción", photo: "../alquiler/img/impresora-multifuncion_SpTV.webp",
    icon: printerIcon("#5C6672"),
    info: [["tag", "Formato", "A4 · A3", 1], ["screen", "Impresión", "B/N · Color", 1], ["capacity", "Tarifa", "Coste por página"]],
    specs: [["Categoría", "Impresora multifunción láser"], ["Formato", "A4 y A3"], ["Impresión", "Blanco y negro o color"], ["Funciones", "Imprimir, copiar, escanear (a correo, carpeta o USB) y fax opcional"], ["Otros", "Doble cara automática, alimentador de documentos, pantalla táctil y acceso con PIN"], ["Conexión", "Red (Ethernet) · Wi-Fi opcional · impresión desde móvil"], ["Tarifa", "Coste por página impresa (consúltanos)"]]
  }
];

const CABINS = [
  {
    cat: "cabin", catLabel: "Cabina de discos", type: "Cabina de discos", brand: "Areca", brandCode: "A", brandColor: "#C8102E",
    model: "Areca ARC-8050T3U", photo: "../alquiler/img/areca-arc-8050t3u_SpTV.webp",
    icon: cabinIcon("#C8102E"),
    info: [["bays", "Bahías", "4 · 6 · 8", 1], ["raid", "RAID", "0, 1, 5, 6, 10", 1], ["port", "Conexión", "Thunderbolt 3 · USB-C"]],
    specs: [["Categoría", "Cabina de discos (DAS) con RAID por hardware"], ["Marca", "Areca"], ["Modelos", "ARC-8050T3U-4 / -6 / -8"], ["Bahías", "4 / 6 / 8 · discos 3,5'' / 2,5'' SAS o SATA"], ["Conexión", "2 × Thunderbolt 3 (40 Gb/s, USB-C) · en USB-C normal funciona como USB 3.2 Gen 2 (10 Gb/s) · DisplayPort"], ["RAID", "0, 1, 3, 5, 6, 10, JBOD (30 / 50 / 60 desde 6 bahías)"]]
  },
  {
    cat: "cabin", catLabel: "Cabina de discos", type: "Cabina de discos", brand: "Stardom", brandCode: "S", brandColor: "#1F6FB2",
    model: "Stardom SOHORAID", photo: "../alquiler/img/stardom-sohoraid_SpTV.webp",
    icon: cabinIcon("#1F6FB2"),
    info: [["bays", "Bahías", "Desde 2", 1], ["raid", "RAID", "0, 1, JBOD", 1], ["port", "Conexión", "USB-C (USB 3.2 Gen 2)"]],
    specs: [["Categoría", "Cabina de discos (DAS)"], ["Marca", "Stardom (RAIDON)"], ["Modelos", "ST2-B31A (2 bahías) · ST4R-B32 / ST4-B32 (4 bahías)"], ["Bahías", "Desde 2 · discos 3,5'' / 2,5'' SATA, extraíbles en caliente"], ["Conexión", "USB-C · USB 3.2 Gen 2 (10 Gb/s) en 2 bahías, Gen 2x2 (20 Gb/s) en 4 bahías · compatible Thunderbolt 3/4"], ["RAID", "0, 1, JBOD, BIG"]]
  },
  {
    cat: "cabin", catLabel: "Cabina de discos", type: "Cabina de discos", brand: "TerraMaster", brandCode: "T", brandColor: "#E95513",
    model: "TerraMaster D5 / D8", photo: "../alquiler/img/terramaster-d5-d8_SpTV.webp",
    icon: cabinIcon("#E95513"),
    info: [["bays", "Bahías", "5 · 8", 1], ["raid", "RAID", "0, 1, 5, 10", 1], ["port", "Conexión", "Thunderbolt 3 (40 Gb/s)"]],
    specs: [["Categoría", "Cabina de discos (DAS) con RAID por hardware"], ["Marca", "TerraMaster"], ["Modelos", "D5 Thunderbolt 3 · D8-332"], ["Bahías", "5 / 8 · discos 3,5'' SATA o SSD 2,5''"], ["Conexión", "2 × Thunderbolt 3 (40 Gb/s), encadenable · solo dispositivos Thunderbolt 3/4"], ["Velocidad", "Hasta 1035 MB/s (D5) · hasta 1600 MB/s (D8-332)"], ["RAID", "0, 1, 5, 10, JBOD, Single"], ["Capacidad máxima", "120 TB (D5) · 160 TB (D8-332)"]]
  },
  {
    cat: "cabin", catLabel: "NAS", type: "NAS", brand: "QNAP", brandCode: "Q", brandColor: "#2F6BB3",
    model: "QNAP TS-464", photo: "../alquiler/img/qnap-ts-464_SpTV.webp",
    icon: cabinIcon("#2F6BB3"),
    info: [["bays", "Bahías", "4 + 2 M.2", 1], ["raid", "RAID", "0, 1, 5, 6, 10", 1], ["port", "Conexión", "2 × 2,5 GbE (10 GbE opcional)"]],
    specs: [["Categoría", "NAS de sobremesa"], ["Marca", "QNAP"], ["Bahías", "4 × 3,5'' / 2,5'' SATA · 2 × M.2 NVMe (caché SSD)"], ["Procesador", "Intel Celeron N5095 (4 núcleos, hasta 2,9 GHz)"], ["RAM", "8 GB DDR4 (máx. 16 GB)"], ["Conexión", "2 × 2,5 GbE · 10 GbE opcional (PCIe) · 2 × USB 3.2 Gen 2 · HDMI"], ["RAID", "0, 1, 5, 6, 10, JBOD, Single"]]
  },
  {
    cat: "cabin", catLabel: "NAS", type: "NAS", brand: "QNAP", brandCode: "Q", brandColor: "#2F6BB3",
    model: "QNAP TS-1264U-RP", photo: "../alquiler/img/qnap-ts-1264u-rp_SpTV.webp",
    icon: cabinIcon("#2F6BB3"),
    info: [["bays", "Bahías", "12 · rack 2U", 1], ["raid", "RAID", "0–60", 1], ["port", "Conexión", "2 × 2,5 GbE (10 GbE opcional)"]],
    specs: [["Categoría", "NAS de rack 2U"], ["Marca", "QNAP"], ["Bahías", "12 × 3,5'' / 2,5'' SATA, extraíbles en caliente"], ["Procesador", "Intel Celeron N5095 (4 núcleos, hasta 2,9 GHz)"], ["RAM", "8 GB DDR4 (máx. 16 GB)"], ["Conexión", "2 × 2,5 GbE · 10 GbE opcional (PCIe) · 2 × USB 3.2 Gen 2"], ["Alimentación", "Doble fuente redundante de 300 W"], ["RAID", "0, 1, 5, 6, 10, 50, 60, JBOD, Single"]]
  },
  {
    cat: "cabin", catLabel: "NAS", type: "NAS", brand: "Synology", brandCode: "S", brandColor: "#4B4B4B",
    model: "Synology DiskStation DS1825+", photo: "../alquiler/img/synology-diskstation-ds1825-plus_SpTV.webp",
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

const STORAGE = [];

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

const scrim = document.getElementById("scrim");
const panel = document.getElementById("panel");

// Small brand icon next to the brand name (../alquiler/img/marcas/, from each brand's own website); brands without one keep the letter
const BRAND_LOGOS = {"3 en 1": "3_en_1.webp", "3M": "3m.webp", "Adam Hall": "adam_hall.webp", "Apli": "apli.webp", "BIC": "bic.webp", "Bubblebee Industries": "bubblebee_industries.webp", "Cap It": "cap_it.webp", "Ceys": "ceys.webp", "CGE Tools": "cge_tools.webp", "CRC": "crc.webp", "Dell": "dell.webp", "Dirty Rigger": "dirty_rigger.webp", "Dodot": "dodot.webp", "Duracell": "duracell.webp", "Dylan Stoel": "dylan_stoel.webp", "edding": "edding.webp", "EDM": "edm.webp", "Energizer": "energizer.webp", "Ewent": "ewent.webp", "Focus Rat": "focus_rat.webp", "Foogy": "foogy.webp", "Goobay": "goobay.webp", "Gorilla": "gorilla.webp", "Green Clean": "green_clean.webp", "Hama": "hama.webp", "Hansaplast": "hansaplast.webp", "Hide-a-mic": "hide_a_mic.webp", "Hollyland": "hollyland.webp", "HP": "hp.webp", "Insta360": "insta360.webp", "Jabra": "jabra.webp", "JJC": "jjc.webp", "Joe's Sticky Stuff": "joe_s_sticky_stuff.webp", "JVC": "jvc.webp", "K-Line": "k_line.webp", "Kenro": "kenro.webp", "Kimberly-Clark": "kimberly_clark.webp", "Kleenslate": "kleenslate.webp", "Kupo": "kupo.webp", "Lenovo": "lenovo.webp", "LG": "lg.webp", "Loctite": "loctite.webp", "Logitech": "logitech.webp", "Manfrotto": "manfrotto.webp", "Maxell": "maxell.webp", "Microsoft": "microsoft.webp", "Modern Studio": "modern_studio.webp", "Motorola": "motorola.webp", "Nichiban": "nichiban.webp", "Pentel": "pentel.webp", "Philips": "philips.webp", "Phonak": "phonak.webp", "Photographic Solutions": "photographic_solutions.webp", "Piher": "piher.webp", "Pilot": "pilot.webp", "Precygrap": "precygrap.webp", "Procab": "procab.webp", "Progaff": "progaff.webp", "QNAP": "qnap.webp", "Rain-X": "rain_x.webp", "Rayovac": "rayovac.webp", "Renata": "renata.webp", "Rosco": "rosco.webp", "Rycote": "rycote.webp", "RØDE": "røde.webp", "Samsung": "samsung.webp", "SanDisk": "sandisk.webp", "SanDisk Professional": "sandisk_professional.webp", "Sanytol": "sanytol.webp", "Sennheiser": "sennheiser.svg", "Sharpie": "sharpie.webp", "Shurtape": "shurtape.webp", "Sony": "sony.webp", "Soudal": "soudal.webp", "Staedtler": "staedtler.webp", "Stardom": "stardom.webp", "StarTech": "startech.webp", "Synology": "synology.webp", "Tenba": "tenba.webp", "tesa": "tesa.webp", "Ubiquiti": "ubiquiti.webp", "Ursa Straps": "ursa_straps.webp", "Varta": "varta.webp", "VELCRO": "velcro.webp", "Viviana": "viviana.webp", "Wacom": "wacom.webp", "WD": "wd.webp", "WD-40": "wd_40.webp", "WD_BLACK": "wd_black.webp", "Wolfcraft": "wolfcraft.webp", "Xiaomi": "xiaomi.webp", "Zeiss": "zeiss.webp", "Zhiyun": "zhiyun.webp"};

function badgeMarkup(p) {
  if (!p.brand) return "";
  const isApple = p.brand === "Apple";
  // "HP / Dell / Lenovo": one icon per brand, when every one of them has its icon
  const logos = p.brand.split(" / ").map(b => b === "Apple" ? "apple" : BRAND_LOGOS[b]);
  if (logos.every(Boolean)) return `
    <span class="brand-logos">${logos.map(l => l === "apple"
      ? `<span class="brand-badge" style="background:#ECEDEF; padding:3px;">${appleBadge()}</span>`
      : `<span class="brand-badge brand-logo"><img src="${"../alquiler/img/marcas/" + l}" alt="" width="18" height="18" loading="lazy" decoding="async"></span>`).join("")}</span>
    <span class="brand-name">${p.brand}</span>
  `;
  const badgeStyle = isApple ? "background:#ECEDEF; padding:3px;" : `background:${p.brandColor}`;
  const badgeContent = isApple ? appleBadge() : p.brandCode;
  return `
    <span class="brand-badge" style="${badgeStyle}">${badgeContent}</span>
    <span class="brand-name">${p.brand}</span>
  `;
}

// Batteries and chargers (purchase catalogue). One card per brand line; its sizes are listed together.
// size / voltage / type accept several values separated by "|" (used by the filters)
const BATTERIES = [];

// SOUND: purchase catalogue, official photos from Ursa Straps, Rycote and Bubblebee Industries.
// colors: one photo per colour; the dots on the card swap the photo (generated by tools/build_sonido_data.py)
const SOUND = [];

// STATIONERY: purchase catalogue, official photos from each brand's website.
// colors: one photo per colour; the dots on the card swap the photo (generated by tools/build_sonido_data.py)
const STATIONERY = [];

// PROTECTION: purchase catalogue, official photos from each brand's website.
// colors: one photo per colour; the dots on the card swap the photo (generated by tools/build_sonido_data.py)
const PROTECTION = [];

// ELECTRIC: purchase catalogue, free-licence photos (credits in the page).
// colors: one photo per colour; the dots on the card swap the photo (generated by tools/build_sonido_data.py)
const ELECTRIC = [];

// FILMSET: purchase catalogue, official photos (Bluestar, Kleenslate, Apli) and free-licence photos.
// colors: one photo per colour; the dots on the card swap the photo (generated by tools/build_sonido_data.py)
const FILMSET = [];

// DULLING: purchase catalogue, official photos from each brand's website.
// colors: one photo per colour; the dots on the card swap the photo (generated by tools/build_sonido_data.py)
const DULLING = [];

// LIGHTING: purchase catalogue, official photos from each brand's website.
// colors: one photo per colour; the dots on the card swap the photo (generated by tools/build_sonido_data.py)
const LIGHTING = [];

// EFFECTS: purchase catalogue, official photos from each brand's website.
// colors: one photo per colour; the dots on the card swap the photo (generated by tools/build_sonido_data.py)
const EFFECTS = [];

// CLEANING: purchase catalogue, official photos from each brand's website and free-licence photos.
// colors: one photo per colour; the dots on the card swap the photo (generated by tools/build_sonido_data.py)
const CLEANING = [];

// MARKS: purchase catalogue, official photos and free-licence photos.
// colors: one photo per colour; the dots on the card swap the photo (generated by tools/build_sonido_data.py)
const MARKS = [];

// FASTENING: purchase catalogue, official photos and free-licence photos.
// colors: one photo per colour; the dots on the card swap the photo (generated by tools/build_sonido_data.py)
const FASTENING = [];

// TAPES: purchase catalogue, official photos from each brand's website.
// colors: one photo per colour; the dots on the card swap the photo (generated by tools/build_sonido_data.py)
const TAPES = [];

// BACKDROPS: purchase catalogue, official photos from each brand's website.
// colors: one photo per colour; the dots on the card swap the photo (generated by tools/build_sonido_data.py)
const BACKDROPS = [];

// OTHERSOUND: purchase catalogue, official photos and free-licence photos.
// colors: one photo per colour; the dots on the card swap the photo (generated by tools/build_sonido_data.py)
const OTHERSOUND = [];

// LAVACC: purchase catalogue, official photos from Ursa Straps, Viviana, Bubblebee Industries and ORCA.
// colors: one photo per colour; the dots on the card swap the photo (generated by tools/build_sonido_data.py)
const LAVACC = [];

// MICS: rental catalogue, RØDE and Hollyland microphones (official photos and data from rode.com/es-es and hollyland.com)
const MICS = [
  { cat: "mic", type: "Inalámbrico", brand: "RØDE", brandCode: "R", brandColor: "#111111", model: "Wireless GO (Gen 3)", photo: "../alquiler/img/rode-wireless-go-gen-3_SpTV.webp", color: "Negro", colors: [],
    info: [["tag", "Tipo", "Inalámbrico", 1], ["signal", "Alcance", "260 m", 1], ["capacity", "Incluye", "2 transmisores + 1 receptor"]],
    specs: [["Categoría", "Micrófono inalámbrico"], ["Marca", "RØDE"], ["Descripción", "Sistema inalámbrico compacto: dos transmisores con micrófono integrado y un receptor para cámara, móvil u ordenador. Cada transmisor graba además una copia en coma flotante de 32 bits, así que el audio saturado o demasiado bajo se recupera en edición."], ["Incluye", "2 transmisores + 1 receptor"], ["Patrón polar", "Omnidireccional"], ["Alcance", "Hasta 260 m (con visión directa)"], ["Grabación interna", "Coma flotante de 32 bits"], ["Autonomía", "Hasta 7 h"], ["Conexiones", "Salida 3,5 mm TRRS y USB-C · entrada de micro de solapa 3,5 mm con bloqueo"], ["Compatible con", "Cámaras, iPhone, Android y ordenador"]],
    icon: micsIcon("#111111") },
  { cat: "mic", type: "Inalámbrico", brand: "RØDE", brandCode: "R", brandColor: "#111111", model: "Wireless PRO", photo: "../alquiler/img/rode-wireless-pro_SpTV.webp", color: "Negro", colors: [],
    info: [["tag", "Tipo", "Inalámbrico", 1], ["signal", "Alcance", "260 m", 1], ["capacity", "Incluye", "2 transmisores + 1 receptor + estuche de carga"]],
    specs: [["Categoría", "Micrófono inalámbrico"], ["Marca", "RØDE"], ["Descripción", "El sistema inalámbrico más completo de RØDE: grabación interna en coma flotante de 32 bits, código de tiempo para sincronizar audio y vídeo, y GainAssist para ajustar los niveles solo. Pensado para rodajes profesionales."], ["Incluye", "2 transmisores + 1 receptor + estuche de carga"], ["Patrón polar", "Omnidireccional"], ["Alcance", "Hasta 260 m (con visión directa)"], ["Grabación interna", "Coma flotante de 32 bits"], ["Código de tiempo", "Sí"], ["Autonomía", "Hasta 7 h"], ["Conexiones", "Salida 3,5 mm TRRS y USB-C · entrada de micro de solapa 3,5 mm con bloqueo"]],
    icon: micsIcon("#111111") },
  { cat: "mic", type: "Inalámbrico", brand: "RØDE", brandCode: "R", brandColor: "#111111", model: "Wireless ME", photo: "../alquiler/img/rode-wireless-me_SpTV.webp", color: "Negro", colors: [],
    info: [["tag", "Tipo", "Inalámbrico", 1], ["signal", "Alcance", "100 m", 1], ["capacity", "Incluye", "1 transmisor + 1 receptor"]],
    specs: [["Categoría", "Micrófono inalámbrico"], ["Marca", "RØDE"], ["Descripción", "Sistema inalámbrico ultracompacto con micrófono tanto en el transmisor como en el receptor: graba a la persona que habla y también a quien está detrás de la cámara, ideal para entrevistas y vídeos sencillos."], ["Incluye", "1 transmisor + 1 receptor"], ["Patrón polar", "Omnidireccional"], ["Alcance", "Hasta 100 m"], ["Calidad", "24 bits · 48 kHz"], ["Autonomía", "Hasta 7 h"], ["Conexiones", "Salida 3,5 mm TRS y USB-C · entrada de micro de solapa"], ["Compatible con", "Cámaras, móviles y ordenador"]],
    icon: micsIcon("#111111") },
  { cat: "mic", type: "Inalámbrico", brand: "Hollyland", brandCode: "H", brandColor: "#111111", model: "Lark Max 2", photo: "../alquiler/img/hollyland-lark-max-2_SpTV.webp", color: "Negro", colors: [],
    info: [["tag", "Tipo", "Inalámbrico", 1], ["signal", "Alcance", "340 m", 1], ["capacity", "Incluye", "2 transmisores + 2 receptores + estuche"]],
    specs: [["Categoría", "Micrófono inalámbrico"], ["Marca", "Hollyland"], ["Descripción", "Sistema inalámbrico de gama alta para rodajes profesionales: cada transmisor graba además una copia interna en coma flotante de 32 bits, lleva código de tiempo para sincronizar con la cámara y reducción de ruido con IA ajustable. El receptor de cámara tiene pantalla táctil."], ["Incluye", "2 transmisores + receptor de cámara + receptor USB-C + estuche de carga"], ["Patrón polar", "Omnidireccional"], ["Alcance", "Hasta 340 m (con visión directa)"], ["Grabación interna", "Coma flotante de 32 bits · 8 GB por transmisor"], ["Código de tiempo", "Sí"], ["Reducción de ruido", "Con IA, ajustable de 5 a 25 dB"], ["Autonomía", "Transmisor hasta 11 h (36 h con el estuche) · receptor de cámara 12 h"], ["Conexiones", "Receptor de cámara: salida 3,5 mm y USB-C · receptor USB-C para móvil y ordenador"], ["Compatible con", "Cámaras, iPhone, Android y ordenador"]],
    icon: micsIcon("#111111") },
  { cat: "mic", type: "Inalámbrico", brand: "Hollyland", brandCode: "H", brandColor: "#111111", model: "Lark M3", photo: "../alquiler/img/hollyland-lark-m3_SpTV.webp", color: "Negro", colors: [],
    info: [["tag", "Tipo", "Inalámbrico", 1], ["signal", "Alcance", "300 m", 1], ["capacity", "Incluye", "2 transmisores + 2 receptores + estuche"]],
    specs: [["Categoría", "Micrófono inalámbrico"], ["Marca", "Hollyland"], ["Descripción", "Sistema inalámbrico versátil y muy ligero, para cámara y para móvil: transmisores de 9 g con imán, audio en coma flotante de 32 bits y reducción de ruido con IA de tres niveles."], ["Incluye", "2 transmisores + receptor de cámara + receptor USB-C + estuche de carga"], ["Patrón polar", "Omnidireccional"], ["Alcance", "Hasta 300 m (con visión directa)"], ["Calidad", "48 kHz · 24 bits y coma flotante de 32 bits"], ["Reducción de ruido", "Con IA, 3 niveles (10, 15 y 20 dB)"], ["Autonomía", "Transmisor hasta 8 h (24 h con el estuche) · receptor de cámara 9 h"], ["Conexiones", "Receptor de cámara: salida 3,5 mm · receptor USB-C para móvil y ordenador (certificado MFi)"], ["Compatible con", "Cámaras, iPhone, Android y ordenador"]],
    icon: micsIcon("#111111") },
  { cat: "mic", type: "Podcast / estudio", brand: "RØDE", brandCode: "R", brandColor: "#111111", model: "PodMic", photo: "../alquiler/img/rode-podmic_SpTV.webp", color: "Negro", colors: [],
    info: [["tag", "Tipo", "Podcast / estudio", 1], ["port", "Conexión", "XLR", 1], ["capacity", "Patrón", "Cardioide"]],
    specs: [["Categoría", "Micrófono dinámico para podcast"], ["Marca", "RØDE"], ["Descripción", "Micrófono dinámico con calidad de radio para podcast, directos y locuciones. Lleva filtro antipop y suspensión antivibraciones internos, y un soporte giratorio para colocarlo fácilmente en un brazo o pie."], ["Tipo", "Dinámico"], ["Patrón polar", "Cardioide"], ["Respuesta de frecuencia", "50 Hz – 15 kHz"], ["Conexión", "XLR"], ["Alimentación", "No necesita"], ["Uso", "Con interfaz de audio o mesa de mezclas con entrada XLR"]],
    icon: micsIcon("#111111") },
  { cat: "mic", type: "Kit para móvil", brand: "RØDE", brandCode: "R", brandColor: "#111111", model: "Vlogger Kit Universal", photo: "../alquiler/img/rode-vlogger-kit-universal_SpTV.webp", color: "Negro", colors: [],
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
      .replace(/\s*\(.*?\)/g, "").replace(/Intel Core (i\d) \/ Intel Core (i\d)/, "Intel Core $1 / $2").replace(/Intel Core (i\d) · Intel Core (i\d)/, "Intel Core $1 o $2");
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
    p._grid = gridEl;
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
// Rows kept in the data (and the Excel) but not shown in the sheet
const SHEET_HIDE = { mac: ["Año"] };

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
// Catalogues that offer the product: those whose categories include the one it is drawn in (microphones: both)
function availableIn(p) {
  const key = p._grid && Object.keys(views).find(k => views[k].contains(p._grid));
  const modes = key ? ["alquiler", "compra"].filter(m => MODE_KEYS[m].includes(key)) : [];
  return modes.length ? modes : [MODE];
}

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
    : p.specs.filter(([l]) => !used.has(l) && !(SHEET_HIDE[p.cat] || []).includes(l));
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
      <div class="pv-avail" aria-label="Disponible para">${availableIn(p).map(m => `<span class="pv-mode">${m === "compra" ? "Compra" : "Alquiler"}</span>`).join("")}</div>
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
  document.getElementById("closeBtn").addEventListener("click", closePanel);
  document.getElementById("closeBtn").focus({ preventScroll: true });

  // Colour: buttons and thumbnails change the photo; the card behind shows the same colour
  const img = document.getElementById("pvImg");
  const pickColor = i => {
    p.colorIndex = i;
    const c = colors[i];
    if (img && c.photo) { img.src = c.photo; img.alt = `${p.model} (${c.name})`; }
    document.getElementById("pvColorName").textContent = c.name;
    panel.querySelectorAll(".pv-color, .pv-thumb").forEach(b => b.setAttribute("aria-pressed", String(Number(b.dataset.i) === i)));
    const card = [...document.querySelectorAll(".model-card")].find(cd => cd._product === p);
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
  const qtyN = document.getElementById("panelQty");
  const minus = panel.querySelector('.pv-buy [data-step="-1"]');
  const setQty = v => { qty = clampQty(v); qtyN.value = qty; minus.disabled = qty === 1; };
  panel.querySelectorAll(".pv-buy [data-step]").forEach(b => b.addEventListener("click", () => setQty(qty + Number(b.dataset.step))));
  qtyN.addEventListener("input", () => { if (qtyN.value !== "") { qty = clampQty(qtyN.value); minus.disabled = qty === 1; } });
  qtyN.addEventListener("change", () => setQty(qtyN.value));
  qtyN.addEventListener("focus", () => qtyN.select());
  qtyN.addEventListener("keydown", e => { if (e.key === "Enter") { e.preventDefault(); setQty(qtyN.value); qtyN.blur(); } });

  const cpu = p.cat === "computer" && !groups.some(g => g.spec === "Procesador") && p.variants && p.variants.length === 1 ? specOf(p, "Procesador") : "";
  document.getElementById("panelRequest").addEventListener("click", () => {
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
    const added = document.getElementById("panelAdded");
    added.innerHTML = `Añadido: ${qty} × ${name}. <button type="button" class="link-btn" id="panelSeeList">Ver lista y enviar</button>`;
    added.hidden = false;
    document.getElementById("panelSeeList").addEventListener("click", () => openRent());
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
renderModelCards([...PRODUCTS].sort((a, b) => rankIn(TABLET_ORDER)(a) - rankIn(TABLET_ORDER)(b)), document.getElementById("grid"), CARD_INFO.device);
renderModelCards(PHONES, document.getElementById("gridPhones"), CARD_INFO.device);
renderModelCards(ACCESSORIES, document.getElementById("gridAccessories"), CARD_INFO.accessory);
renderModelCards(COMPUTERS, document.getElementById("gridComputers"), CARD_INFO.computer);
renderModelCards(MACS, document.getElementById("gridMac"), CARD_INFO.computer);
renderModelCards(MONITORS, document.getElementById("gridMonitors"), CARD_INFO.monitor);
renderModelCards(CONNECTIVITY, document.getElementById("gridConnectivity"), CARD_INFO.connectivity);
renderStorage(STORAGE, document.getElementById("gridStorage"));
setupStorageFilters();
renderModelCards(BATTERIES, document.getElementById("gridBatteries"), CARD_INFO.custom);
renderModelCards(SOUND, document.getElementById("gridSound"), CARD_INFO.custom);
setupDataFilters(SOUND, "sound");
renderModelCards(STATIONERY, document.getElementById("gridStationery"), CARD_INFO.custom);
setupDataFilters(STATIONERY, "stationery");
renderModelCards(PROTECTION, document.getElementById("gridProtection"), CARD_INFO.custom);
setupDataFilters(PROTECTION, "protection");
renderModelCards(ELECTRIC, document.getElementById("gridElectric"), CARD_INFO.custom);
setupDataFilters(ELECTRIC, "electric");
renderModelCards(FILMSET, document.getElementById("gridFilmset"), CARD_INFO.custom);
setupDataFilters(FILMSET, "filmset");
renderModelCards(DULLING, document.getElementById("gridDulling"), CARD_INFO.custom);
setupDataFilters(DULLING, "dulling");
renderModelCards(LIGHTING, document.getElementById("gridLighting"), CARD_INFO.custom);
setupDataFilters(LIGHTING, "lighting");
renderModelCards(EFFECTS, document.getElementById("gridEffects"), CARD_INFO.custom);
setupDataFilters(EFFECTS, "effects");
renderModelCards(CLEANING, document.getElementById("gridCleaning"), CARD_INFO.custom);
setupDataFilters(CLEANING, "cleaning");
renderModelCards(MARKS, document.getElementById("gridMarks"), CARD_INFO.custom);
setupDataFilters(MARKS, "marks");
renderModelCards(FASTENING, document.getElementById("gridFastening"), CARD_INFO.custom);
setupDataFilters(FASTENING, "fastening");
renderModelCards(TAPES, document.getElementById("gridTapes"), CARD_INFO.custom);
setupDataFilters(TAPES, "tapes");
renderModelCards(BACKDROPS, document.getElementById("gridBackdrops"), CARD_INFO.custom);
setupDataFilters(BACKDROPS, "backdrops");
renderModelCards(OTHERSOUND, document.getElementById("gridOthersound"), CARD_INFO.custom);
setupDataFilters(OTHERSOUND, "othersound");
renderModelCards(LAVACC, document.getElementById("gridLavacc"), CARD_INFO.custom);
setupDataFilters(LAVACC, "lavacc");
renderModelCards(CABINS, document.getElementById("gridCabins"), CARD_INFO.custom);
renderModelCards(VIDEOCONF, document.getElementById("gridVideoconf"), CARD_INFO.custom);
renderModelCards(PRINTERS, document.getElementById("gridPrinters"), CARD_INFO.custom);
renderModelCards(MICS, document.getElementById("gridMics"), CARD_INFO.custom);
setupDataFilters(MICS, "mics");

// Categories whose filter options come from their data: <prefix>TypeSelect, BrandSelect, ColorSelect
function setupDataFilters(items, prefix) {
  const opts = (id, values) => {
    const sel = document.getElementById(prefix + id);
    if (!sel) return;
    [...new Set(values)].filter(Boolean).sort((a, b) => a.localeCompare(b, "es")).forEach(v => sel.add(new Option(v, v)));
  };
  opts("TypeSelect", items.flatMap(p => p.type.split("|")));
  opts("BrandSelect", items.map(p => p.brand));
  opts("ColorSelect", items.flatMap(p => (p.color || "").split("|")));
}

// Capacity options come from the data; speed is grouped in ranges (max read speed of each model)
function setupStorageFilters() {
  const grid = document.getElementById("gridStorage");
  const capSelect = document.getElementById("storageCapSelect");
  const speedSelect = document.getElementById("storageSpeedSelect");
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
document.getElementById("tabletIconLarge").innerHTML = tabletIconLarge("#2B79C2");
document.getElementById("phoneIconLarge").innerHTML = phoneIcon("#2B79C2");
document.getElementById("accessoryIconLarge").innerHTML = accessoryIcon("#2B79C2");
document.getElementById("computerIconLarge").innerHTML = desktopIcon("#2B79C2");
document.getElementById("macIconLarge").innerHTML = macIcon("#2B79C2");
document.getElementById("monitorIconLarge").innerHTML = monitorIcon("#2B79C2");
document.getElementById("connectivityIconLarge").innerHTML = routerIcon("#2B79C2");
document.getElementById("storageIconLarge").innerHTML = driveIcon("#2B79C2");
document.getElementById("cabinIconLarge").innerHTML = cabinIcon("#2B79C2");
document.getElementById("batteryIconLarge").innerHTML = batteryIcon("#2B79C2");
document.getElementById("soundIconLarge").innerHTML = soundIcon("#2B79C2");
document.getElementById("stationeryIconLarge").innerHTML = stationeryIcon("#2B79C2");
document.getElementById("protectionIconLarge").innerHTML = protectionIcon("#2B79C2");
document.getElementById("electricIconLarge").innerHTML = electricIcon("#2B79C2");
document.getElementById("filmsetIconLarge").innerHTML = filmsetIcon("#2B79C2");
document.getElementById("dullingIconLarge").innerHTML = dullingIcon("#2B79C2");
document.getElementById("lightingIconLarge").innerHTML = lightingIcon("#2B79C2");
document.getElementById("effectsIconLarge").innerHTML = effectsIcon("#2B79C2");
document.getElementById("cleaningIconLarge").innerHTML = cleaningIcon("#2B79C2");
document.getElementById("marksIconLarge").innerHTML = marksIcon("#2B79C2");
document.getElementById("fasteningIconLarge").innerHTML = fasteningIcon("#2B79C2");
document.getElementById("tapesIconLarge").innerHTML = tapesIcon("#2B79C2");
document.getElementById("backdropsIconLarge").innerHTML = backdropsIcon("#2B79C2");
document.getElementById("othersoundIconLarge").innerHTML = othersoundIcon("#2B79C2");
document.getElementById("lavaccIconLarge").innerHTML = lavaccIcon("#2B79C2");
document.getElementById("videoconfIconLarge").innerHTML = videoconfIcon("#2B79C2");
document.getElementById("printerIconLarge").innerHTML = printerIcon("#2B79C2");
document.getElementById("micsIconLarge").innerHTML = micsIcon("#2B79C2");

const viewLanding = document.getElementById("viewLanding");
const views = {
  tablets: document.getElementById("viewTablets"),
  phones: document.getElementById("viewPhones"),
  accessories: document.getElementById("viewAccessories"),
  computers: document.getElementById("viewComputers"),
  mac: document.getElementById("viewMac"),
  monitors: document.getElementById("viewMonitors"),
  connectivity: document.getElementById("viewConnectivity"),
  storage: document.getElementById("viewStorage"),
  cabins: document.getElementById("viewCabins"),
  batteries: document.getElementById("viewBatteries"),
  sound: document.getElementById("viewSound"),
  stationery: document.getElementById("viewStationery"),
  protection: document.getElementById("viewProtection"),
  electric: document.getElementById("viewElectric"),
  filmset: document.getElementById("viewFilmset"),
  dulling: document.getElementById("viewDulling"),
  lighting: document.getElementById("viewLighting"),
  effects: document.getElementById("viewEffects"),
  cleaning: document.getElementById("viewCleaning"),
  marks: document.getElementById("viewMarks"),
  fastening: document.getElementById("viewFastening"),
  tapes: document.getElementById("viewTapes"),
  backdrops: document.getElementById("viewBackdrops"),
  othersound: document.getElementById("viewOthersound"),
  lavacc: document.getElementById("viewLavacc"),
  videoconf: document.getElementById("viewVideoconf"),
  printers: document.getElementById("viewPrinters"),
  mics: document.getElementById("viewMics")
};

// Name shown at the top of each category
const CATEGORY_INFO = {
  tablets: "Tablets",
  phones: "Móviles",
  accessories: "Accesorios",
  computers: "PC/Portátiles",
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
// «Modelos destacados» slider on the rental landing: switched off (10/10). Its markup and code are kept; true shows it again
const SHOW_FEATURED = false;
const OTHER_CATALOG = MODE === "compra" ? "../alquiler/" : "../compra/";
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
  document.getElementById("catBadge").hidden = !(info && CATEGORY_BADGES[key]);
  document.getElementById("catPending").hidden = !(info && CATEGORY_PENDING[key]);
  const featured = document.getElementById("destacados");
  if (featured) featured.hidden = !SHOW_FEATURED || !!info || MODE === "compra";
  document.getElementById("catalogo").classList.toggle("in-category", !!info);
  document.getElementById("catEyebrow").hidden = !!info;
  document.getElementById("catDesc").hidden = !!info;
  document.getElementById("catTitle").textContent = info || HEADER_DEFAULT[1];
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

  window.scrollTo(0, 0);
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;
}

function getScrollY() {
  return window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0;
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
Object.entries(CARD_KEYS).forEach(([id, key]) => { if (!inMode(key)) document.getElementById(id).hidden = true; });
document.querySelectorAll("[data-route]").forEach(a => { if (!inMode(ROUTES[a.dataset.route])) a.hidden = true; });
document.querySelectorAll(".footer-col").forEach(col => {
  if (![...col.querySelectorAll("[data-route]")].some(a => !a.hidden)) col.hidden = true;
});
let navigatedFromLanding = false;

function goTo(key) {
  history.pushState(null, "", "#" + SLUGS[key]);
  navigatedFromLanding = true;
  route();
}

document.getElementById("goTablets").addEventListener("click", () => goTo("tablets"));
document.getElementById("goPhones").addEventListener("click", () => goTo("phones"));
document.getElementById("goAccessories").addEventListener("click", () => goTo("accessories"));
document.getElementById("goComputers").addEventListener("click", () => goTo("computers"));
document.getElementById("goMac").addEventListener("click", () => goTo("mac"));
document.getElementById("goMonitors").addEventListener("click", () => goTo("monitors"));
document.getElementById("goConnectivity").addEventListener("click", () => goTo("connectivity"));
document.getElementById("goStorage").addEventListener("click", () => goTo("storage"));
document.getElementById("goBatteries").addEventListener("click", () => goTo("batteries"));
document.getElementById("goSound").addEventListener("click", () => goTo("sound"));
document.getElementById("goStationery").addEventListener("click", () => goTo("stationery"));
document.getElementById("goProtection").addEventListener("click", () => goTo("protection"));
document.getElementById("goElectric").addEventListener("click", () => goTo("electric"));
document.getElementById("goFilmset").addEventListener("click", () => goTo("filmset"));
document.getElementById("goDulling").addEventListener("click", () => goTo("dulling"));
document.getElementById("goLighting").addEventListener("click", () => goTo("lighting"));
document.getElementById("goEffects").addEventListener("click", () => goTo("effects"));
document.getElementById("goCleaning").addEventListener("click", () => goTo("cleaning"));
document.getElementById("goMarks").addEventListener("click", () => goTo("marks"));
document.getElementById("goFastening").addEventListener("click", () => goTo("fastening"));
document.getElementById("goTapes").addEventListener("click", () => goTo("tapes"));
document.getElementById("goBackdrops").addEventListener("click", () => goTo("backdrops"));
document.getElementById("goOthersound").addEventListener("click", () => goTo("othersound"));
document.getElementById("goLavacc").addEventListener("click", () => goTo("lavacc"));
document.getElementById("goCabins").addEventListener("click", () => goTo("cabins"));
document.getElementById("goVideoconf").addEventListener("click", () => goTo("videoconf"));
document.getElementById("goPrinters").addEventListener("click", () => goTo("printers"));
document.getElementById("goMics").addEventListener("click", () => goTo("mics"));

document.querySelectorAll("[data-back]").forEach(btn => {
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

setupFilters(document.getElementById("grid"), [
  { select: document.getElementById("brandSelect"), attr: "brand" },
  { select: document.getElementById("storageSelect"), attr: "storage" }
]);

setupFilters(document.getElementById("gridPhones"), [
  { select: document.getElementById("phoneBrandSelect"), attr: "brand" },
  { select: document.getElementById("phoneStorageSelect"), attr: "storage" }
]);

setupFilters(document.getElementById("gridAccessories"), [
  { select: document.getElementById("accessoryTypeSelect"), attr: "type" },
  { select: document.getElementById("accessoryBrandSelect"), attr: "brand" }
]);

setupFilters(document.getElementById("gridComputers"), [
  { select: document.getElementById("computerTypeSelect"), attr: "type" },
  { select: document.getElementById("computerBrandSelect"), attr: "brand" }
]);

setupFilters(document.getElementById("gridMac"), [
  { select: document.getElementById("macTypeSelect"), attr: "type" },
  { select: document.getElementById("macStorageSelect"), attr: "storage" }
]);

setupFilters(document.getElementById("gridMonitors"), [
  { select: document.getElementById("monitorTypeSelect"), attr: "type" },
  { select: document.getElementById("monitorSizeSelect"), attr: "group" }
]);

setupFilters(document.getElementById("gridVideoconf"), [
  { select: document.getElementById("videoconfTypeSelect"), attr: "type" },
  { select: document.getElementById("videoconfBrandSelect"), attr: "brand" }
]);

setupFilters(document.getElementById("gridMics"), [
  { select: document.getElementById("micsTypeSelect"), attr: "type" },
  { select: document.getElementById("micsBrandSelect"), attr: "brand" }
]);

setupFilters(document.getElementById("gridPrinters"), [
  { select: document.getElementById("printerSizeSelect"), attr: "group" },
  { select: document.getElementById("printerColorSelect"), attr: "type" }
]);

setupFilters(document.getElementById("gridBatteries"), [
  { select: document.getElementById("batteryTypeSelect"), attr: "type" },
  { select: document.getElementById("batteryBrandSelect"), attr: "brand" },
  { select: document.getElementById("batterySizeSelect"), attr: "size" },
  { select: document.getElementById("batteryVoltSelect"), attr: "voltage" }
]);

setupFilters(document.getElementById("gridSound"), [
  { select: document.getElementById("soundTypeSelect"), attr: "type" },
  { select: document.getElementById("soundBrandSelect"), attr: "brand" },
  { select: document.getElementById("soundColorSelect"), attr: "color" }
]);

setupFilters(document.getElementById("gridStationery"), [
  { select: document.getElementById("stationeryTypeSelect"), attr: "type" },
  { select: document.getElementById("stationeryBrandSelect"), attr: "brand" },
  { select: document.getElementById("stationeryColorSelect"), attr: "color" }
]);

setupFilters(document.getElementById("gridProtection"), [
  { select: document.getElementById("protectionTypeSelect"), attr: "type" },
  { select: document.getElementById("protectionBrandSelect"), attr: "brand" },
  { select: document.getElementById("protectionColorSelect"), attr: "color" }
]);

setupFilters(document.getElementById("gridElectric"), [
  { select: document.getElementById("electricTypeSelect"), attr: "type" },
  { select: document.getElementById("electricColorSelect"), attr: "color" }
]);

setupFilters(document.getElementById("gridFilmset"), [
  { select: document.getElementById("filmsetTypeSelect"), attr: "type" },
  { select: document.getElementById("filmsetBrandSelect"), attr: "brand" },
  { select: document.getElementById("filmsetColorSelect"), attr: "color" }
]);

setupFilters(document.getElementById("gridDulling"), [
  { select: document.getElementById("dullingTypeSelect"), attr: "type" },
  { select: document.getElementById("dullingBrandSelect"), attr: "brand" },
  { select: document.getElementById("dullingColorSelect"), attr: "color" }
]);

setupFilters(document.getElementById("gridLighting"), [
  { select: document.getElementById("lightingTypeSelect"), attr: "type" },
  { select: document.getElementById("lightingBrandSelect"), attr: "brand" },
  { select: document.getElementById("lightingColorSelect"), attr: "color" }
]);

setupFilters(document.getElementById("gridEffects"), [
  { select: document.getElementById("effectsTypeSelect"), attr: "type" },
  { select: document.getElementById("effectsBrandSelect"), attr: "brand" },
  { select: document.getElementById("effectsColorSelect"), attr: "color" }
]);

setupFilters(document.getElementById("gridCleaning"), [
  { select: document.getElementById("cleaningTypeSelect"), attr: "type" },
  { select: document.getElementById("cleaningBrandSelect"), attr: "brand" },
  { select: document.getElementById("cleaningColorSelect"), attr: "color" }
]);

setupFilters(document.getElementById("gridMarks"), [
  { select: document.getElementById("marksTypeSelect"), attr: "type" },
  { select: document.getElementById("marksBrandSelect"), attr: "brand" },
  { select: document.getElementById("marksColorSelect"), attr: "color" }
]);

setupFilters(document.getElementById("gridFastening"), [
  { select: document.getElementById("fasteningTypeSelect"), attr: "type" },
  { select: document.getElementById("fasteningBrandSelect"), attr: "brand" },
  { select: document.getElementById("fasteningColorSelect"), attr: "color" }
]);

setupFilters(document.getElementById("gridTapes"), [
  { select: document.getElementById("tapesTypeSelect"), attr: "type" },
  { select: document.getElementById("tapesBrandSelect"), attr: "brand" },
  { select: document.getElementById("tapesColorSelect"), attr: "color" }
]);

setupFilters(document.getElementById("gridBackdrops"), [
  { select: document.getElementById("backdropsTypeSelect"), attr: "type" },
  { select: document.getElementById("backdropsBrandSelect"), attr: "brand" },
  { select: document.getElementById("backdropsColorSelect"), attr: "color" }
]);

setupFilters(document.getElementById("gridOthersound"), [
  { select: document.getElementById("othersoundTypeSelect"), attr: "type" },
  { select: document.getElementById("othersoundBrandSelect"), attr: "brand" },
  { select: document.getElementById("othersoundColorSelect"), attr: "color" }
]);

setupFilters(document.getElementById("gridLavacc"), [
  { select: document.getElementById("lavaccTypeSelect"), attr: "type" },
  { select: document.getElementById("lavaccBrandSelect"), attr: "brand" },
  { select: document.getElementById("lavaccColorSelect"), attr: "color" }
]);

setupFilters(document.getElementById("gridCabins"), [
  { select: document.getElementById("cabinTypeSelect"), attr: "type" },
  { select: document.getElementById("cabinBrandSelect"), attr: "brand" }
]);

setupFilters(document.getElementById("gridConnectivity"), [
  { select: document.getElementById("connTypeSelect"), attr: "type" },
  { select: document.getElementById("connNetSelect"), attr: "group" },
  { select: document.getElementById("connDataSelect"), attr: "storage" }
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
document.querySelectorAll(".storage-grid").forEach(setupPagination);

// --- Rental request ---
// FormSubmit reenvía las solicitudes al correo (o alias) indicado al final de la URL
// FormSubmit alias of the sales mailbox (the address itself is never written in the code)
const FORM_ENDPOINT = "https://formsubmit.co/ajax/8a125671c5106e66b21b86b9707e2716";


const rentModal = document.getElementById("rentModal");
const rentScrim = document.getElementById("rentScrim");
const rentForm = document.getElementById("rentForm");
const rentError = document.getElementById("rentError");

const rentDone = document.getElementById("rentDone");
const rentSubmit = document.getElementById("rentSubmit");
if (MODE === "compra") document.getElementById("rentTitle").textContent = "Solicitar presupuesto de compra";
// "Me interesa" starts on this catalogue (also after the form is reset)
document.querySelectorAll('input[name="rentInterest"]').forEach(r => {
  r.defaultChecked = r.value === (MODE === "compra" ? "Compra" : "Alquiler");
  r.checked = r.defaultChecked;
});
// E-mail addresses are written as "user [arroba] domain" and put together here, out of reach of simple robots
document.querySelectorAll(".js-mail[data-u][data-d]").forEach(el => { el.textContent = el.dataset.u + "@" + el.dataset.d; });

// Request list: products added from the sheets (name with colour/variant + quantity), sent together in one request.
// Kept in this browser so it survives a reload; one list per catalogue.
const LIST_KEY = `sptv-lista-${MODE}`;
let requestList = [];
try { requestList = JSON.parse(localStorage.getItem(LIST_KEY)) || []; } catch (e) { requestList = []; }
if (!Array.isArray(requestList)) requestList = [];
const listFab = document.getElementById("listFab");
const reqList = document.getElementById("reqList");
const rentMsg = document.getElementById("rentMsg");
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
  document.getElementById("listFabN").textContent = units;
  listFab.setAttribute("aria-label", `Mi lista: ${units} ${units === 1 ? "unidad" : "unidades"}`);
}

function renderList() {
  renderListCount();
  document.getElementById("reqBox").hidden = !requestList.length;
  document.getElementById("rentMsgLabel").textContent = requestList.length ? "Comentarios (opcional)" : "¿Qué necesitas?";
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
document.getElementById("reqClear").addEventListener("click", () => { requestList = []; saveList(); rentMsg.focus(); });
renderList();

function openRent() {
  closePanel();
  rentForm.hidden = false;
  rentDone.hidden = true;
  rentScrim.classList.add("open");
  rentModal.classList.add("open");
  document.getElementById("rentName").focus();
}

function closeRent() {
  rentScrim.classList.remove("open");
  rentModal.classList.remove("open");
}

document.getElementById("rentClose").addEventListener("click", closeRent);
document.getElementById("rentDoneClose").addEventListener("click", closeRent);
rentScrim.addEventListener("click", closeRent);
document.addEventListener("keydown", e => { if (e.key === "Escape") closeRent(); });
rentForm.addEventListener("input", () => { rentError.textContent = ""; });

rentForm.addEventListener("submit", async e => {
  e.preventDefault();
  const name = document.getElementById("rentName").value.trim();
  const company = document.getElementById("rentCompany").value.trim();
  const email = document.getElementById("rentEmail").value.trim();
  const phone = document.getElementById("rentPhone").value.trim();
  const interest = (rentForm.querySelector('input[name="rentInterest"]:checked') || {}).value || "Alquiler";
  const msg = document.getElementById("rentMsg").value.trim();

  if (!name || !company || !email || (!msg && !requestList.length)) {
    rentError.textContent = requestList.length ? "Rellena tu nombre, tu empresa y tu correo." : "Rellena tu nombre, tu empresa, tu correo y qué necesitas.";
    return;
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    rentError.textContent = "Revisa tu correo, no parece válido.";
    return;
  }
  if (!document.getElementById("rentPrivacy").checked) {
    rentError.textContent = "Para enviarla, acepta la política de privacidad.";
    return;
  }
  // Robots fill in the hidden field: show it as sent and drop it
  if (document.getElementById("rentHoney").value) {
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
    if (wasInCategory) document.querySelector("header").scrollIntoView();
  }
}

window.addEventListener("popstate", route);
window.addEventListener("hashchange", route);
route();

// --- Professional theme: navigation, reveal on scroll, counters, progress bar, pointer glow ---
(function initTheme() {
  const safe = (fn, name) => { try { fn(); } catch (err) { console.warn("[" + name + "]", err); } };
  const pageContent = document.getElementById("pageContent");
  pageContent.classList.add("js-ready");
  const onScroll = fn => {
    window.addEventListener("scroll", fn, { passive: true });
    document.body.addEventListener("scroll", fn, { passive: true });
    document.addEventListener("scroll", fn, { passive: true });
  };

  safe(() => {
    const nav = document.getElementById("siteNav");
    const toggle = document.getElementById("navToggle");
    const group = document.getElementById("navCatalog");
    const groupBtn = document.getElementById("navCatalogBtn");
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
    document.querySelectorAll("[data-nav]").forEach(el => el.addEventListener("click", e => {
      e.preventDefault();
      closeAll();
      const action = el.dataset.nav;
      if (action === "portada") { location.href = el.getAttribute("href"); return; }
      if (action === "rent") openRent();
      else if (action === "home") { goHome(); pageContent.scrollIntoView({ behavior: "smooth", block: "start" }); }
      else if (action === "catalog") { goHome(); document.getElementById("catalogo").scrollIntoView({ behavior: "smooth", block: "start" }); }
      else if (action === "contact") document.getElementById("contacto").scrollIntoView({ behavior: "smooth", block: "start" });
    }));
    document.querySelectorAll("[data-route]").forEach(el => el.addEventListener("click", e => {
      e.preventDefault();
      closeAll();
      goTo(ROUTES[el.dataset.route]);
    }));

    // Catálogo as a list: each category of this catalogue and, under it, its subcategories (the options of its
    // "Tipo" filter; "Marca" or "Formato" where there is no type). A new column every 15 lines; a category
    // never splits between columns. A subcategory opens its category with only that subcategory showing.
    const MEGA_LINES = 15;
    const dropdown = document.getElementById("navDropdown");
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
    [...document.querySelectorAll(".category-card")].filter(c => !c.hidden).forEach((card, i) => { card.classList.add("reveal"); card.style.setProperty("--i", i); });
    const items = [...document.querySelectorAll(".reveal")];
    const showAll = () => items.forEach(el => el.classList.add("is-visible"));
    if (!("IntersectionObserver" in window)) return showAll();
    const io = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add("is-visible"); io.unobserve(entry.target); }
    }), { threshold: 0.05 });
    items.forEach(el => io.observe(el));
    setTimeout(showAll, 6000);   // safety net: never leave content hidden
  }, "reveal");

  safe(() => {
    const bar = document.getElementById("scrollProgress");
    const update = () => {
      const max = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight) - window.innerHeight;
      bar.style.setProperty("--p", max > 0 ? Math.min(1, getScrollY() / max) : 0);
    };
    onScroll(update);
    update();
  }, "progress");

  safe(() => { document.getElementById("footerYear").textContent = new Date().getFullYear(); }, "year");

  // Filter options: sizes and capacities from small to large, everything else in alphabetical order
  safe(() => {
    const size = text => {
      const m = String(text).replace(",", ".").match(/\d+(\.\d+)?/);
      if (!m) return NaN;
      return parseFloat(m[0]) * (/TB/i.test(text) ? 1000 : 1);
    };
    document.querySelectorAll(".filter-select").forEach(sel => {
      const opts = [...sel.options].filter(o => o.value !== "all");
      const numeric = opts.every(o => !isNaN(size(o.value)));
      opts.sort((a, b) => numeric ? size(a.value) - size(b.value) : a.text.localeCompare(b.text, "es", { sensitivity: "base" }));
      opts.forEach(o => sel.appendChild(o));
    });
  }, "filterOrder");

  // Light / night theme: light by default, the choice is remembered on this browser
  safe(() => {
    const host = document.getElementById("catalogo-soporte") || document.documentElement;
    const btn = document.getElementById("themeToggle");
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
    const modal = document.getElementById("creditsModal");
    const scrim = document.getElementById("creditsScrim");
    const open = () => { modal.classList.add("open"); scrim.classList.add("open"); };
    const close = () => { modal.classList.remove("open"); scrim.classList.remove("open"); };
    document.getElementById("openCredits").addEventListener("click", open);
    document.getElementById("closeCredits").addEventListener("click", close);
    scrim.addEventListener("click", close);
    document.addEventListener("keydown", e => { if (e.key === "Escape") close(); });
  }, "credits");

  safe(() => {
    document.querySelectorAll(".filter-reset").forEach(btn => btn.addEventListener("click", () => {
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
      if (panel.classList.contains("open") || document.getElementById("rentModal").classList.contains("open")) return;
      const key = Object.keys(boxes).find(k => !views[k].hidden);
      if (!key) return;
      e.preventDefault();
      boxes[key].input.focus();
    });
  }, "search");

  // Featured slider: crossfade, autoplay driven by the progress bar, pause on hover/focus, swipe
  safe(() => {
    const slider = document.getElementById("featuredSlider");
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

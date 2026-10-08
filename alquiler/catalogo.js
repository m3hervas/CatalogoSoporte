/* GENERATED from tools/catalogo_fuente.html by tools/build_catalogo.py — do not edit by hand */
// Products marked "No" in the column "¿Se muestra en la web?" of Productos_web_SoporteTV.xlsx (filled in by tools/build_catalogo.py)
const HIDDEN_PRODUCTS = new Set([]);
const productId = (gridEl, p) => [gridEl.id, p.brand || "", p.model, p.key || ""].join("|");

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
      ["Conectividad", "Wi-Fi"],
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
      ["Conectividad", "Wi-Fi"],
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
      ["Conectividad", "Wi-Fi"],
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
      ["Conectividad", "Wi-Fi"],
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
      ["Conectividad", "Wi-Fi"],
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
      ["Conectividad", "Wi-Fi + Cellular"],
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
      ["Conectividad", "Wi-Fi"],
      ["Pantalla", "13 ''"]
    ]
  },
  {
    cat: "ipad", catLabel: "iPad", brand: "Apple", brandCode: "A", brandColor: "var(--apple)",
    model: "iPad Pro", storages: ["128 GB", "256 GB", "512 GB", "1 TB"],
    storage: "128 GB",
    photo: "../alquiler/img/apple-ipad-pro_SpTV.webp",
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
    photo: "../alquiler/img/apple-ipad-pro-4-generacion_SpTV.webp",
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
    photo: "../alquiler/img/apple-ipad-pro_SpTV.webp",
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
    model: "Galaxy S25 FE", storages: ["128 GB", "256 GB", "512 GB"],
    photo: "../alquiler/img/samsung-galaxy-s25-fe_SpTV.webp",
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
    photo: "../alquiler/img/samsung-galaxy-s24_SpTV.webp",
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

// Ordered from most to least expensive (approximate retail price)
const ACCESSORIES = [
{
    cat: "accessory", catLabel: "Accesorio", group: "iPad", brand: "Apple", brandCode: "A", brandColor: "var(--apple)",
    model: "Apple Pencil", photo: "../alquiler/img/apple-pencil_SpTV.webp?v=2",
    icon: accessoryIcon("#5B6470"),
    specs: [
      ["Categoría", "Accesorio · iPad"],
      ["Marca", "Apple"]
    ]
  },
{
    cat: "accessory", catLabel: "Accesorio", group: "Móvil/Cámara", brand: "Zhiyun", brandCode: "Z", brandColor: "#6B4FA0",
    model: "Smooth X Combo", photo: "../alquiler/img/zhiyun-smooth-x-combo_SpTV.webp",
    icon: accessoryIcon("#6B4FA0"),
    specs: [
      ["Categoría", "Accesorio · Móvil/Cámara"],
      ["Tipo", "Estabilizador combo para móvil"]
    ]
  },
{
    cat: "accessory", catLabel: "Accesorio", group: "iPad", brand: "Wacom", brandCode: "W", brandColor: "#0090C8",
    model: "Bamboo Fineline", photo: "../alquiler/img/wacom-bamboo-fineline_SpTV.webp",
    icon: accessoryIcon("#0090C8"),
    specs: [
      ["Categoría", "Accesorio · iPad"],
      ["Marca", "Wacom"]
    ]
  },
{
    cat: "accessory", catLabel: "Accesorio", group: "Móvil/Cámara", brand: "", brandCode: "", brandColor: "#5C6672",
    model: "Micrófono inalámbrico", photo: "../alquiler/img/microfono-inalambrico_SpTV.webp",
    icon: accessoryIcon("#5C6672"),
    specs: [
      ["Categoría", "Accesorio · Móvil/Cámara"]
    ]
  },
{
    cat: "accessory", catLabel: "Accesorio", group: "iPad", brand: "", brandCode: "", brandColor: "#5C6672",
    model: "Funda con teclado", photo: "../alquiler/img/funda-con-teclado_SpTV.webp?v=2",
    icon: accessoryIcon("#5C6672"),
    specs: [
      ["Categoría", "Accesorio · iPad"],
      ["Compatibilidad", "iPad 7.ª / 8.ª / 9.ª generación"]
    ]
  },
{
    cat: "accessory", catLabel: "Accesorio", group: "Móvil/Cámara", brand: "Apple", brandCode: "A", brandColor: "var(--apple)",
    model: "Adaptador USB-C a USB", photo: "../alquiler/img/apple-adaptador-usb-c-a-usb_SpTV.webp",
    icon: accessoryIcon("#5B6470"),
    specs: [
      ["Categoría", "Accesorio · Móvil/Cámara"],
      ["Marca", "Apple"]
    ]
  },
{
    cat: "accessory", catLabel: "Accesorio", group: "Móvil/Cámara", brand: "", brandCode: "", brandColor: "#5C6672",
    model: "Aro de luz", photo: "../alquiler/img/aro-de-luz_SpTV.webp?v=2",
    icon: accessoryIcon("#5C6672"),
    specs: [
      ["Categoría", "Accesorio · Móvil/Cámara"]
    ]
  },
{
    cat: "accessory", catLabel: "Accesorio", group: "iPad", brand: "", brandCode: "", brandColor: "#5C6672",
    model: "Funda Rugged / Correa", photo: "../alquiler/img/funda-rugged-con-correa_SpTV.webp",
    icon: accessoryIcon("#5C6672"),
    specs: [
      ["Categoría", "Accesorio · iPad"]
    ]
  },
{
    cat: "accessory", catLabel: "Accesorio", group: "Móvil/Cámara", brand: "", brandCode: "", brandColor: "#5C6672",
    model: "Power bank", photo: "../alquiler/img/power-bank_SpTV.webp?v=2",
    icon: accessoryIcon("#5C6672"),
    specs: [
      ["Categoría", "Accesorio · Móvil/Cámara"],
      ["Capacidad", "10000 mAh"],
      ["Conector", "USB-C"]
    ]
  },
{
    cat: "accessory", catLabel: "Accesorio", group: "Móvil/Cámara", brand: "Celly", brandCode: "C", brandColor: "#E4572E",
    model: "Trípode", photo: "../alquiler/img/celly-tripode_SpTV.webp",
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
    model: "HP Victus", photo: "../alquiler/img/hp-victus_SpTV.webp",
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
    model: "HP ZBook", photo: "../alquiler/img/hp-zbook_SpTV.webp",
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
    model: "Portátil i5 · 8 GB RAM", photo: "../alquiler/img/portatil-8-gb-ram_SpTV.webp",
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
    model: "Portátil i5 · 16 GB RAM", photo: "../alquiler/img/portatil-16-gb-ram-intel-core-i5_SpTV.webp", key: "portatil-i5-16",
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
    model: "Portátil i7 · 16 GB RAM", photo: "../alquiler/img/portatil-16-gb-ram-intel-core-i7_SpTV.webp", key: "portatil-i7-16",
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
    cat: "computer", catLabel: "AIO", type: "AIO", brand: "Dell / HP / Lenovo", brandCode: "D", brandColor: "#5C6672",
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
    cat: "computer", catLabel: "CPU", type: "CPU", brand: "Dell / HP / Lenovo", brandCode: "D", brandColor: "#5C6672",
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
    cat: "computer", catLabel: "CPU + Monitor", type: "CPU + Monitor", brand: "Dell / HP / Lenovo", brandCode: "D", brandColor: "#5C6672",
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

const STORAGE = [
  // --- SanDisk ---
  { ...SANDISK, model: "SanDisk Extreme PRO Portable SSD (V3)", photo: "../alquiler/img/sandisk-extreme-pro-portable-ssd-v3_SpTV.webp", catLabel: "SSD externo portátil",
    capacities: ["2 TB", "4 TB", "8 TB"], speed: "Hasta 4000 MB/s", port: "USB-C" },
  { ...SANDISK, model: "SanDisk Extreme PRO con USB4", photo: "../alquiler/img/sandisk-extreme-pro-usb4_SpTV.webp", catLabel: "SSD externo portátil",
    capacities: ["2 TB", "4 TB"], speed: "Hasta 3800 MB/s", port: "USB4 (compatible Thunderbolt 4)" },
  { ...SANDISK, model: "SanDisk Extreme PRO Portable SSD", photo: "../alquiler/img/sandisk-extreme-pro-portable-ssd_SpTV.webp", catLabel: "SSD externo portátil",
    capacities: ["1 TB", "2 TB", "4 TB"], speed: "Hasta 2000 MB/s", port: "USB-C (USB 3.2 Gen 2x2)" },
  { ...SANDISK, model: "SanDisk Extreme Portable SSD", photo: "../alquiler/img/sandisk-extreme-portable-ssd_SpTV.webp", catLabel: "SSD externo portátil",
    capacities: ["500 GB", "1 TB", "2 TB", "4 TB", "8 TB"], speed: "Hasta 1050 MB/s", port: "USB-C (USB 3.2 Gen 2)" },
  { ...SANDISK, model: "SanDisk Creator Pro Portable SSD", photo: "../alquiler/img/sandisk-creator-pro-portable-ssd_SpTV.webp", catLabel: "SSD externo portátil · Creator",
    capacities: ["1 TB", "2 TB", "4 TB"], speed: "Hasta 2000 MB/s", port: "USB-C (USB 3.2 Gen 2x2)" },
  { ...SANDISK, model: "SanDisk Portable SSD (V3)", photo: "../alquiler/img/sandisk-portable-ssd-v3_SpTV.webp", catLabel: "SSD externo portátil",
    capacities: ["500 GB", "1 TB", "2 TB"], speed: "Hasta 1000 MB/s", port: "USB-C (USB 3.2 Gen 2)" },
  { ...SANDISK, model: "SanDisk Portable SSD (firmware actualizado)", photo: "../alquiler/img/sandisk-portable-ssd-firmware-actualizado_SpTV.webp", catLabel: "SSD externo portátil",
    capacities: ["1 TB", "2 TB"], speed: "Hasta 800 MB/s", port: "USB-C (USB 3.2 Gen 2)" },
  { ...SANDISK, model: "SanDisk Portable Drive", photo: "../alquiler/img/sandisk-portable-drive_SpTV.webp", catLabel: "SSD externo portátil",
    capacities: ["500 GB", "1 TB"], speed: "Hasta 600 MB/s", port: "USB-C (USB 3.2 Gen 2)" },
  { ...SANDISK, model: "SanDisk Phone SSD", photo: "../alquiler/img/sandisk-phone-ssd_SpTV.webp", catLabel: "SSD para móvil · MagSafe",
    capacities: ["1 TB", "2 TB"], speed: "Hasta 1000 MB/s", port: "USB-C · MagSafe" },
  { ...SANDISK, model: "SanDisk Creator Phone SSD", photo: "../alquiler/img/sandisk-creator-phone-ssd_SpTV.webp", catLabel: "SSD para móvil · MagSafe · Creator",
    capacities: ["1 TB", "2 TB"], speed: "Hasta 1000 MB/s", port: "USB-C (USB 3.2 Gen 2) · MagSafe" },
  { ...SANDISK, model: "SanDisk Desk Drive", photo: "../alquiler/img/sandisk-desk-drive_SpTV.webp", catLabel: "SSD de escritorio",
    capacities: ["4 TB", "8 TB"], speed: "Hasta 1000 MB/s", port: "USB-C (USB 3.2 Gen 2)" },
  { ...SANDISK, model: "SanDisk Creator Desk Drive", photo: "../alquiler/img/sandisk-creator-desk-drive_SpTV.webp", catLabel: "SSD de escritorio · Creator",
    capacities: ["4 TB", "8 TB"], speed: "Hasta 1000 MB/s", port: "USB 3.2 Gen 2" },

  // --- SanDisk Professional ---
  { ...SANDISK_PRO, model: "SanDisk Professional PRO-G40 SSD", photo: "../alquiler/img/sandisk-professional-pro-g40-ssd_SpTV.webp", catLabel: "SSD portátil · exFAT / APFS",
    capacities: ["1 TB", "2 TB", "4 TB"], speed: "Hasta 2700–3000 MB/s", port: "Thunderbolt 3 · USB-C (USB 3.2 Gen 2)" },
  { ...SANDISK_PRO, model: "PRO-BLADE SSD Mag", photo: "../alquiler/img/sandisk-professional-pro-blade-ssd-mag_SpTV.webp", catLabel: "Módulo SSD · ecosistema PRO-BLADE",
    capacities: ["1 TB", "2 TB", "4 TB"], speed: "Hasta 2000 MB/s (TRANSPORT) · 3000 MB/s (STATION)", port: "PRO-BLADE TRANSPORT / STATION" },
  { ...SANDISK_PRO, model: "PRO-BLADE TRANSPORT", photo: "../alquiler/img/sandisk-professional-pro-blade-transport_SpTV.webp", catLabel: "Carcasa portátil para PRO-BLADE SSD Mag",
    capacities: ["Vacía", "1 TB", "2 TB", "4 TB"], speed: "Hasta 2000 MB/s", port: "USB-C" },
  { ...SANDISK_PRO, model: "G-RAID SHUTTLE SSD", photo: "../alquiler/img/sandisk-professional-g-raid-shuttle-ssd_SpTV.webp", catLabel: "RAID SSD transportable",
    capacities: ["16 TB", "32 TB"], speed: "Hasta 2800 MB/s", port: "Thunderbolt 3" },

  // --- WD_BLACK ---
  { ...WD_BLACK, model: "WD_BLACK P50 Game Drive SSD", photo: "../alquiler/img/wd-black-p50-game-drive-ssd_SpTV.webp", catLabel: "SSD portátil para gaming",
    capacities: ["500 GB", "1 TB", "2 TB", "4 TB"], speed: "Hasta 2000 MB/s", port: "USB-C (USB 3.2 Gen 2x2)" },
  { ...WD_BLACK, model: "WD_BLACK P40 Game Drive SSD", photo: "../alquiler/img/wd-black-p40-game-drive-ssd_SpTV.webp", catLabel: "SSD portátil para gaming",
    capacities: ["1 TB", "2 TB"], speed: "Hasta 2000 MB/s", port: "USB-C (USB 3.2 Gen 2x2)" },
  { ...WD_BLACK, model: "WD_BLACK D30 Game Drive SSD", photo: "../alquiler/img/wd-black-d30-game-drive-ssd_SpTV.webp", catLabel: "SSD para consola",
    capacities: ["2 TB"], speed: "Hasta 900 MB/s", port: "USB-C (USB 3.2 Gen 2)" },
  { ...WD_BLACK, model: "WD_BLACK D50 Game Dock NVMe SSD", photo: "../alquiler/img/wd-black-d50-game-dock-nvme-ssd_SpTV.webp", catLabel: "Dock con SSD NVMe",
    capacities: ["1 TB", "2 TB"], speed: "Hasta 3000 MB/s", port: "Thunderbolt 3" },

  // --- WD ---
  { ...WD, model: "WD Elements SE SSD", photo: "../alquiler/img/wd-elements-se-ssd_SpTV.webp", catLabel: "SSD externo portátil",
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

const scrim = document.getElementById("scrim");
const panel = document.getElementById("panel");

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
    model: "Duracell Procell Intense", photo: "../alquiler/img/duracell-procell-intense_SpTV.webp",
    icon: batteryIcon("#2B2B2B"),
    info: [["battery", "Tamaños", "AA · AAA · C · D · 9 V", 1], ["speed", "Voltaje", "1,5 V · 9 V", 1], ["tag", "Formato", "Caja de 10 ud"]],
    specs: [["Categoría", "Pila alcalina profesional"], ["Marca", "Duracell (gama Procell)"], ["Tamaños", "AA (LR6) · AAA (LR03) · C (LR14) · D (LR20) · 9 V (6LR61)"], ["Voltaje", "1,5 V (AA, AAA, C y D) · 9 V"], ["Uso", "Aparatos de consumo alto: micrófonos inalámbricos, petacas, flashes, linternas y equipos de medida"], ["Formato", "Caja de 10 unidades (todos los tamaños)"]]
  },
  {
    cat: "battery", type: "Alcalina", size: "AA|AAA|9 V", voltage: "1,5 V|9 V", brand: "Duracell", brandCode: "D", brandColor: "#2B2B2B",
    model: "Duracell Procell Constant", photo: "../alquiler/img/duracell-procell-constant_SpTV.webp",
    icon: batteryIcon("#2B2B2B"),
    info: [["battery", "Tamaños", "AA · AAA · 9 V", 1], ["speed", "Voltaje", "1,5 V · 9 V", 1], ["tag", "Formato", "Caja de 10 ud"]],
    specs: [["Categoría", "Pila alcalina profesional"], ["Marca", "Duracell (gama Procell)"], ["Tamaños", "AA (LR6) · AAA (LR03) · 9 V (6LR61)"], ["Voltaje", "1,5 V (AA y AAA) · 9 V"], ["Uso", "Aparatos de consumo bajo y constante: mandos, ratones y teclados, relojes, detectores y cerraduras"], ["Formato", "Caja de 10 unidades (todos los tamaños)"]]
  },
  {
    cat: "battery", type: "Alcalina", size: "AA|AAA|9 V", voltage: "1,5 V|9 V", brand: "Varta", brandCode: "V", brandColor: "#0B3D91",
    model: "Varta Professional", photo: "../alquiler/img/varta-professional_SpTV.webp",
    icon: batteryIcon("#0B3D91"),
    info: [["battery", "Tamaños", "AA · AAA · 9 V", 1], ["speed", "Voltaje", "1,5 V · 9 V", 1], ["tag", "Formato", "Cajas de 10 y 20 ud · pack de 40"]],
    specs: [["Categoría", "Pila alcalina profesional"], ["Marca", "Varta"], ["Tamaños", "AA (LR6) · AAA (LR03) · 9 V (6LR61)"], ["Voltaje", "1,5 V (AA y AAA) · 9 V"], ["Uso", "Uso profesional y alto consumo"], ["Formato", "AA: caja de 10 ud o pack de 40 (10 × 4 ud) · AAA: caja de 10 ud · 9 V: caja de 20 ud"]]
  },
  {
    cat: "battery", type: "Alcalina", size: "C", voltage: "1,5 V", brand: "Varta", brandCode: "V", brandColor: "#0B3D91",
    model: "Varta Industrial", photo: "../alquiler/img/varta-industrial_SpTV.webp",
    icon: batteryIcon("#0B3D91"),
    info: [["battery", "Tamaño", "C (LR14)", 1], ["speed", "Voltaje", "1,5 V", 1], ["tag", "Uso", "Industrial y profesional"]],
    specs: [["Categoría", "Pila alcalina industrial"], ["Marca", "Varta"], ["Tamaño", "C (LR14)"], ["Voltaje", "1,5 V"], ["Uso", "Linternas, equipos de medida, megafonía portátil y aparatos de consumo alto"], ["Formato", "Consúltanos"]]
  },
  {
    cat: "battery", type: "Alcalina", size: "AA", voltage: "1,5 V", brand: "Maxell", brandCode: "M", brandColor: "#D7000F",
    model: "Maxell Alcalina", photo: "../alquiler/img/maxell-aa_SpTV.webp",
    icon: batteryIcon("#D7000F"),
    info: [["battery", "Tamaño", "AA (LR6)", 1], ["speed", "Voltaje", "1,5 V", 1], ["tag", "Formato", "Blíster de 8 ud"]],
    specs: [["Categoría", "Pila alcalina"], ["Marca", "Maxell"], ["Tamaño", "AA (LR6)"], ["Voltaje", "1,5 V"], ["Uso", "Mandos, ratones, teclados, juguetes y aparatos de uso diario"], ["Formato", "Blíster de 8 unidades"]]
  },
  {
    cat: "battery", type: "Alcalina", size: "AA", voltage: "1,5 V", brand: "Philips", brandCode: "P", brandColor: "#0B5ED7",
    model: "Philips Power Alkaline", photo: "../alquiler/img/philips-power-aa_SpTV.webp",
    icon: batteryIcon("#0B5ED7"),
    info: [["battery", "Tamaño", "AA (LR6)", 1], ["speed", "Voltaje", "1,5 V", 1], ["tag", "Formato", "Blíster de 8 ud"]],
    specs: [["Categoría", "Pila alcalina"], ["Marca", "Philips"], ["Tamaño", "AA (LR6)"], ["Voltaje", "1,5 V"], ["Uso", "Mandos, ratones, teclados, juguetes y aparatos de uso diario"], ["Formato", "Blíster de 8 unidades"]]
  },
  {
    cat: "battery", type: "Litio", size: "AA|AAA", voltage: "1,5 V", brand: "Energizer", brandCode: "E", brandColor: "#1A1A1A",
    model: "Energizer Ultimate Lithium", photo: "../alquiler/img/energizer-lithium_SpTV.webp",
    icon: batteryIcon("#1A1A1A"),
    info: [["battery", "Tamaños", "AA · AAA", 1], ["speed", "Voltaje", "1,5 V", 1], ["tag", "Formato", "Caja de 10 ud"]],
    specs: [["Categoría", "Pila de litio"], ["Marca", "Energizer"], ["Tamaños", "AA (FR6) · AAA (FR03), sustituyen a las alcalinas LR6 / LR03"], ["Voltaje", "1,5 V"], ["Ventajas", "Más duración que una alcalina en aparatos de alto consumo, más ligera, aguanta frío y calor extremos y muy baja autodescarga"], ["Uso", "Micrófonos inalámbricos, flashes, GPS y equipos al aire libre"], ["Formato", "Caja de 10 unidades"]]
  },
  {
    cat: "battery", type: "Litio", size: "CR123A", voltage: "3 V", brand: "Duracell", brandCode: "D", brandColor: "#2B2B2B",
    model: "Duracell CR123A", photo: "../alquiler/img/duracell-cr123a_SpTV.webp",
    icon: batteryIcon("#2B2B2B"),
    info: [["battery", "Tamaño", "CR123A", 1], ["speed", "Voltaje", "3 V", 1], ["tag", "Uso", "Cámaras, linternas y alarmas"]],
    specs: [["Categoría", "Pila de litio"], ["Marca", "Duracell"], ["Tamaño", "CR123A (CR17345)"], ["Voltaje", "3 V"], ["Uso", "Cámaras, linternas tácticas, detectores, alarmas y cerraduras electrónicas"]]
  },
  {
    cat: "battery", type: "Litio|Botón", size: "CR123A|CR2032", voltage: "3 V", brand: "Varta", brandCode: "V", brandColor: "#0B3D91",
    model: "Varta Lithium", photo: "../alquiler/img/varta-lithium_SpTV.webp",
    icon: batteryIcon("#0B3D91"),
    info: [["battery", "Tamaños", "CR123A · CR2032", 1], ["speed", "Voltaje", "3 V", 1], ["tag", "Uso", "Cámaras, alarmas, llaves y placas base"]],
    specs: [["Categoría", "Pila de litio"], ["Marca", "Varta"], ["Tamaños", "CR123A (cilíndrica) · CR2032 (botón)"], ["Voltaje", "3 V"], ["Uso", "CR123A: cámaras, linternas y alarmas · CR2032: llaves de coche, básculas, mandos, AirTag y placas base"]]
  },
  {
    cat: "battery", type: "Litio|Botón", size: "CR2032", voltage: "3 V", brand: "Renata", brandCode: "R", brandColor: "#C8102E",
    model: "Renata CR2032", photo: "../alquiler/img/renata-cr2032_SpTV.webp",
    icon: batteryIcon("#C8102E"),
    info: [["battery", "Tamaño", "CR2032", 1], ["speed", "Voltaje", "3 V", 1], ["tag", "Origen", "Fabricada en Suiza"]],
    specs: [["Categoría", "Pila de litio de botón"], ["Marca", "Renata (Swatch Group)"], ["Tamaño", "CR2032 · 20 × 3,2 mm"], ["Voltaje", "3 V"], ["Uso", "Llaves de coche, básculas, mandos, AirTag, relojes y placas base"]]
  },
  {
    cat: "battery", type: "Botón", size: "LR44", voltage: "1,5 V", brand: "Duracell", brandCode: "D", brandColor: "#2B2B2B",
    model: "Duracell LR44", photo: "../alquiler/img/duracell-lr44_SpTV.webp",
    icon: batteryIcon("#2B2B2B"),
    info: [["battery", "Tamaño", "LR44 (A76)", 1], ["speed", "Voltaje", "1,5 V", 1], ["tag", "Uso", "Calculadoras, juguetes y termómetros"]],
    specs: [["Categoría", "Pila de botón alcalina"], ["Marca", "Duracell"], ["Tamaño", "LR44 · equivale a A76, AG13 y 357"], ["Voltaje", "1,5 V"], ["Uso", "Calculadoras, juguetes, termómetros, punteros láser y pequeños aparatos"]]
  },
  {
    cat: "battery", type: "Botón", size: "LR44", voltage: "1,5 V", brand: "", brandCode: "", brandColor: "#5C6672",
    model: "Pila de botón LR44", photo: "../alquiler/img/lr44_SpTV.webp",
    icon: batteryIcon("#5C6672"),
    info: [["battery", "Tamaño", "LR44 (AG13)", 1], ["speed", "Voltaje", "1,5 V", 1], ["tag", "Uso", "Calculadoras, juguetes y termómetros"]],
    specs: [["Categoría", "Pila de botón alcalina"], ["Tamaño", "LR44 · equivale a A76, AG13 y 357"], ["Voltaje", "1,5 V"], ["Uso", "Calculadoras, juguetes, termómetros, punteros láser y pequeños aparatos"]]
  },
  {
    cat: "battery", type: "Audífono", size: "10|312", voltage: "1,45 V", brand: "Duracell", brandCode: "D", brandColor: "#2B2B2B",
    model: "Duracell ActivAir", photo: "../alquiler/img/duracell-activair_SpTV.webp",
    icon: batteryIcon("#2B2B2B"),
    info: [["battery", "Tamaños", "10 · 312", 1], ["speed", "Voltaje", "1,45 V", 1], ["tag", "Formato", "Blíster de 6 ud"]],
    specs: [["Categoría", "Pila de audífono (zinc-aire)"], ["Marca", "Duracell"], ["Tamaños", "10 (pestaña amarilla) · 312 (pestaña marrón)"], ["Voltaje", "1,45 V"], ["Uso", "Se activa al quitar la pestaña: espera un minuto antes de ponerla en el audífono"], ["Formato", "Blíster de 6 unidades"]]
  },
  {
    cat: "battery", type: "Audífono", size: "10|312", voltage: "1,45 V", brand: "Phonak", brandCode: "P", brandColor: "#4A4A4A",
    model: "Phonak pilas de audífono", photo: "../alquiler/img/phonak-audifono_SpTV.webp",
    icon: batteryIcon("#4A4A4A"),
    info: [["battery", "Tamaños", "10 · 312", 1], ["speed", "Voltaje", "1,45 V", 1], ["tag", "Formato", "Blíster de 6 ud"]],
    specs: [["Categoría", "Pila de audífono (zinc-aire)"], ["Marca", "Phonak"], ["Tamaños", "10 (pestaña amarilla) · 312 (pestaña marrón)"], ["Voltaje", "1,45 V"], ["Uso", "Se activa al quitar la pestaña: espera un minuto antes de ponerla en el audífono"], ["Formato", "Blíster de 6 unidades"]]
  },
  {
    cat: "battery", type: "Audífono", size: "10|312", voltage: "1,45 V", brand: "Rayovac", brandCode: "R", brandColor: "#D2232A",
    model: "Rayovac pilas de audífono", photo: "../alquiler/img/rayovac-audifono_SpTV.webp",
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
    model: "Phonak D-Dry", photo: "../alquiler/img/phonak-d-dry_SpTV.webp",
    icon: batteryIcon("#4A4A4A"),
    info: [["tag", "Uso", "Secado e higiene del audífono"]],
    specs: [["Categoría", "Deshumidificador para audífonos"], ["Marca", "Phonak"], ["Incluye", "Bote de secado hermético y pastilla deshumidificadora"], ["Uso", "Elimina la humedad del audífono mientras no se usa (por ejemplo, durante la noche) y alarga su vida útil"]]
  },
  {
    cat: "battery", type: "Recargable", size: "AA|AAA", voltage: "1,2 V", brand: "Duracell", brandCode: "D", brandColor: "#2B2B2B",
    model: "Duracell Recargable", photo: "../alquiler/img/duracell-recargable_SpTV.webp",
    icon: batteryIcon("#2B2B2B"),
    info: [["battery", "Tamaños", "AA · AAA", 1], ["capacity", "Capacidad", "2500 / 900 mAh", 1], ["tag", "Formato", "Blíster de 4 ud"]],
    specs: [["Categoría", "Pila recargable NiMH"], ["Marca", "Duracell"], ["Tamaños", "AA (HR6) · AAA (HR03)"], ["Capacidad", "AA: 2500 mAh · AAA: 900 mAh"], ["Voltaje", "1,2 V"], ["Uso", "Micrófonos, mandos de juego, flashes y aparatos de uso intensivo"], ["Formato", "Blíster de 4 unidades"]]
  },
  {
    cat: "battery", type: "Cargador", size: "AA|AAA", brand: "Duracell", brandCode: "D", brandColor: "#2B2B2B",
    model: "Cargador Duracell", photo: "../alquiler/img/cargador-duracell_SpTV.webp",
    icon: batteryIcon("#2B2B2B"),
    info: [["battery", "Carga", "AA · AAA", 1], ["tag", "Capacidad", "4 pilas", 1], ["capacity", "Incluye", "2 AA + 2 AAA recargables"]],
    specs: [["Categoría", "Cargador de pilas"], ["Marca", "Duracell"], ["Carga", "Pilas recargables NiMH AA y AAA"], ["Capacidad", "Hasta 4 pilas"], ["Incluye", "2 pilas AA y 2 pilas AAA recargables"]]
  },
  {
    cat: "battery", type: "Cargador", size: "AA|AAA", brand: "Varta", brandCode: "V", brandColor: "#0B3D91",
    model: "Cargador Varta 8 pilas", photo: "../alquiler/img/cargador-varta_SpTV.webp",
    icon: batteryIcon("#0B3D91"),
    info: [["battery", "Carga", "AA · AAA", 1], ["tag", "Capacidad", "8 pilas", 1], ["port", "Conexión", "Cable USB-C"]],
    specs: [["Categoría", "Cargador de pilas"], ["Marca", "Varta"], ["Carga", "Pilas recargables NiMH AA y AAA"], ["Capacidad", "Hasta 8 pilas"], ["Alimentación", "Cable USB-C"]]
  },
  {
    cat: "battery", type: "Comprobador", brand: "", brandCode: "", brandColor: "#5C6672",
    model: "Comprobador de pilas digital", photo: "../alquiler/img/comprobador-pilas-digital_SpTV.webp",
    icon: batteryIcon("#5C6672"),
    info: [["screen", "Lectura", "Pantalla digital", 1], ["battery", "Comprueba", "AA · AAA · C · D · 9 V · N · 3 V", 1]],
    specs: [["Categoría", "Comprobador de pilas"], ["Lectura", "Pantalla digital"], ["Comprueba", "AA, AAA, C, D, 9 V, N y pilas de botón de 3 V"], ["Uso", "Separa las pilas cargadas de las gastadas antes de cada evento o rodaje"]]
  },
  {
    cat: "battery", type: "Comprobador", brand: "", brandCode: "", brandColor: "#5C6672",
    model: "Comprobador de pilas", photo: "../alquiler/img/comprobador-pilas_SpTV.webp",
    icon: batteryIcon("#5C6672"),
    info: [["screen", "Lectura", "Indicador de aguja", 1], ["battery", "Comprueba", "AA · AAA · C · D · 9 V · N", 1]],
    specs: [["Categoría", "Comprobador de pilas"], ["Lectura", "Indicador analógico (aguja)"], ["Comprueba", "AA, AAA, C, D, 9 V y N"], ["Uso", "Separa las pilas cargadas de las gastadas antes de cada evento o rodaje"]]
  }
];

// SOUND: purchase catalogue, official photos from Ursa Straps, Rycote and Bubblebee Industries.
// colors: one photo per colour; the dots on the card swap the photo (generated by tools/build_sonido_data.py)
const SOUND = [
  { cat: "sound", type: "Ocultación de micro de solapa", brand: "Ursa Straps", brandCode: "U", brandColor: "#1F2937", model: "MiniMount", photo: "../alquiler/img/ursa-ursa-minimount-beige_SpTV.webp", color: "Beige|Negro|Blanco|Marrón", colors: [{"name": "Beige", "hex": "#D9B99B", "photo": "../alquiler/img/ursa-ursa-minimount-beige_SpTV.webp"}, {"name": "Negro", "hex": "#1A1A1A", "photo": "../alquiler/img/ursa-ursa-minimount-black_SpTV.webp"}, {"name": "Blanco", "hex": "#F5F5F2", "photo": "../alquiler/img/ursa-ursa-minimount-white_SpTV.webp"}, {"name": "Marrón", "hex": "#5C3A2A", "photo": "../alquiler/img/ursa-ursa-minimount-brown_SpTV.webp"}], info: [["tag", "Tipo", "Ocultación de micro de solapa", 1], ["palette", "Colores", "4 colores", 1], ["capacity", "Tallas", "DPA 4060 Core+ / 2061 · DPA 4060 · DPA 6060 · DPA 6060 (Circular MiniMount) · DPA 4071 · DPA 4660HD · SANKEN COS11 · Sennheiser MKE1 · Sennheiser MKE2 · Sennheiser ME2 · Sony D11 · RØDE Lav / Lav GO · RØDE Lavalier II · Shure TwinPlex"]], specs: [["Categoría", "Ocultación de micro de solapa"], ["Marca", "Ursa Straps"], ["Descripción", "Soporte plano y de bajo perfil para ocultar el micro de solapa bajo la ropa donde no caben soportes mayores. Hay un modelo específico para cada micrófono."], ["Material", "Plástico endurecido acabado a mano"], ["Incluye", "5 adhesivos MiniMount Stickies"], ["Compatible con", "DPA, Sanken COS11, RØDE, Sennheiser, Shure TwinPlex, Sony"], ["Nota", "Marrón solo en algunos modelos (DPA 4060/4071/6060, Sanken COS11, Sony D11)"], ["Colores", "Beige · Negro · Blanco · Marrón"]], icon: soundIcon("#1F2937") },
  { cat: "sound", type: "Ocultación de micro de solapa", brand: "Ursa Straps", brandCode: "U", brandColor: "#1F2937", model: "Soft Circles", photo: "../alquiler/img/ursa-ursa-soft-circles-beige_SpTV.webp", color: "Beige|Negro|Blanco|Marrón", colors: [{"name": "Beige", "hex": "#D9B99B", "photo": "../alquiler/img/ursa-ursa-soft-circles-beige_SpTV.webp"}, {"name": "Negro", "hex": "#1A1A1A", "photo": "../alquiler/img/ursa-ursa-soft-circles-black_SpTV.webp"}, {"name": "Blanco", "hex": "#F5F5F2", "photo": "../alquiler/img/ursa-ursa-soft-circles-white_SpTV.webp"}, {"name": "Marrón", "hex": "#5C3A2A", "photo": "../alquiler/img/ursa-ursa-soft-circles-brown_SpTV.webp"}], info: [["tag", "Tipo", "Ocultación de micro de solapa", 1], ["palette", "Colores", "4 colores", 1], ["capacity", "Tallas", "15 Pack + 30 Stickies · 100 Pack"]], specs: [["Categoría", "Ocultación de micro de solapa"], ["Marca", "Ursa Straps"], ["Descripción", "Discos de tejido suave y elástico reutilizables que protegen del viento y camuflan el micro de solapa. Se fijan con los adhesivos Sticky Circles."], ["Diámetro", "25 mm"], ["Contenido", "15 Soft Circles + 30 Sticky Circles (o pack de 100)"], ["Compatible con", "URSA Sticky Circles, Premium Sticky Circles y Sticky Zeros"], ["Fabricación", "Reino Unido"], ["Colores", "Beige · Negro · Blanco · Marrón"]], icon: soundIcon("#1F2937") },
  { cat: "sound", type: "Antiviento", brand: "Ursa Straps", brandCode: "U", brandColor: "#1F2937", model: "Fur Circles", photo: "../alquiler/img/ursa-ursa-fur-circles-beige_SpTV.webp", color: "Beige|Negro|Blanco", colors: [{"name": "Beige", "hex": "#D9B99B", "photo": "../alquiler/img/ursa-ursa-fur-circles-beige_SpTV.webp"}, {"name": "Negro", "hex": "#1A1A1A", "photo": "../alquiler/img/ursa-ursa-fur-circles-black_SpTV.webp"}, {"name": "Blanco", "hex": "#F5F5F2", "photo": "../alquiler/img/ursa-ursa-fur-circles-white_SpTV.webp"}], info: [["tag", "Tipo", "Antiviento", 1], ["palette", "Colores", "3 colores", 1], ["capacity", "Tallas", "9 Pack + 30 Stickies · 100 Pack"]], specs: [["Categoría", "Antiviento"], ["Marca", "Ursa Straps"], ["Descripción", "Círculos de pelo que protegen el micro de solapa del viento y reducen el roce de la ropa. Se fijan con adhesivos Sticky Circles."], ["Pelo", "14 mm de longitud"], ["Contenido", "9 Fur Circles + 30 adhesivos Premium (o pack de 100)"], ["Multipack", "3 negros, 3 blancos y 3 beige + 30 adhesivos"], ["Fabricación", "Reino Unido"], ["Colores", "Beige · Negro · Blanco"]], icon: soundIcon("#1F2937") },
  { cat: "sound", type: "Antiviento", brand: "Ursa Straps", brandCode: "U", brandColor: "#1F2937", model: "Soft Sleeves", photo: "../alquiler/img/ursa-ursa-soft-sleeves-beige_SpTV.webp", color: "Beige|Negro|Blanco|Marrón", colors: [{"name": "Beige", "hex": "#D9B99B", "photo": "../alquiler/img/ursa-ursa-soft-sleeves-beige_SpTV.webp"}, {"name": "Negro", "hex": "#1A1A1A", "photo": "../alquiler/img/ursa-ursa-soft-sleeves-black_SpTV.webp"}, {"name": "Blanco", "hex": "#F5F5F2", "photo": "../alquiler/img/ursa-ursa-soft-sleeves-white_SpTV.webp"}, {"name": "Marrón", "hex": "#5C3A2A", "photo": "../alquiler/img/ursa-ursa-soft-sleeves-brown_SpTV.webp"}], info: [["tag", "Tipo", "Antiviento", 1], ["palette", "Colores", "4 colores", 1]], specs: [["Categoría", "Antiviento"], ["Marca", "Ursa Straps"], ["Descripción", "Fundas de bajo perfil que cubren todo el micro de solapa y dan una protección ligera contra el viento. Útiles para micros ocultos en corbatas, bajo botones o entre capas de ropa."], ["Medidas", "12 × 6 mm"], ["Contenido", "3 fundas por pack"], ["Compatible con", "Micros de 4-5 mm: DPA 406X, RØDE Lav GO, Sennheiser MKE2"], ["No compatible", "Sanken COS11 y DPA 6060 (demasiado finos)"], ["Fabricación", "Reino Unido"], ["Colores", "Beige · Negro · Blanco · Marrón"]], icon: soundIcon("#1F2937") },
  { cat: "sound", type: "Antiviento", brand: "Ursa Straps", brandCode: "U", brandColor: "#1F2937", model: "Fur Tangles", photo: "../alquiler/img/ursa-ursa-fur-tangles-beige_SpTV.webp", color: "Beige|Negro|Blanco", colors: [{"name": "Beige", "hex": "#D9B99B", "photo": "../alquiler/img/ursa-ursa-fur-tangles-beige_SpTV.webp"}, {"name": "Negro", "hex": "#1A1A1A", "photo": "../alquiler/img/ursa-ursa-fur-tangles-black_SpTV.webp"}, {"name": "Blanco", "hex": "#F5F5F2", "photo": "../alquiler/img/ursa-ursa-fur-tangles-white_SpTV.webp"}], info: [["tag", "Tipo", "Antiviento", 1], ["palette", "Colores", "3 colores", 1]], specs: [["Categoría", "Antiviento"], ["Marca", "Ursa Straps"], ["Descripción", "Rectángulo de pelo para recortar a medida: reduce el ruido de roce de tejidos cerca del micro o sirve de antiviento en montajes especiales, como en coches."], ["Medidas", "60 × 15 cm"], ["Pelo", "Muy suave, 14 mm de longitud"], ["Contenido", "1 rectángulo"], ["Uso", "Se recorta con tijeras; combinable con tiras adhesivas"], ["Colores", "Beige · Negro · Blanco"]], icon: soundIcon("#1F2937") },
  { cat: "sound", type: "Espuma / protección", brand: "Ursa Straps", brandCode: "U", brandColor: "#1F2937", model: "Foamie Pro", photo: "../alquiler/img/ursa-ursa-foamie-pro-caramel_SpTV.webp", color: "Caramelo|Negro|Blanco", colors: [{"name": "Caramelo", "hex": "#A9744F", "photo": "../alquiler/img/ursa-ursa-foamie-pro-caramel_SpTV.webp"}, {"name": "Negro", "hex": "#1A1A1A", "photo": "../alquiler/img/ursa-ursa-foamie-pro-black_SpTV.webp"}, {"name": "Blanco", "hex": "#F5F5F2", "photo": "../alquiler/img/ursa-ursa-foamie-pro-white_SpTV.webp"}], info: [["tag", "Tipo", "Espuma / protección", 1], ["palette", "Colores", "3 colores", 1]], specs: [["Categoría", "Espuma / protección"], ["Marca", "Ursa Straps"], ["Descripción", "Soportes de espuma premium, suave y reutilizable para montar el micro de solapa en silencio bajo la ropa. Se pueden recortar con tijeras."], ["Contenido", "12 unidades + 4 imperdibles"], ["Compatible con", "DPA 406X Core+/4660HD, Sanken COS11, RØDE Lav GO/Lav II, Sennheiser MKE2, Shure TwinPlex"], ["Tamaño", "Regular (la versión Mini se vende aparte)"], ["Material", "Espuma premium reutilizable"], ["Colores", "Caramelo · Negro · Blanco"]], icon: soundIcon("#1F2937") },
  { cat: "sound", type: "Adhesivos", brand: "Ursa Straps", brandCode: "U", brandColor: "#1F2937", model: "URSA Tape - Soft Strips", photo: "../alquiler/img/ursa-ursa-tape-soft-strips-beige_SpTV.webp", color: "Beige|Negro|Blanco|Caramelo|Marrón", colors: [{"name": "Beige", "hex": "#D9B99B", "photo": "../alquiler/img/ursa-ursa-tape-soft-strips-beige_SpTV.webp"}, {"name": "Negro", "hex": "#1A1A1A", "photo": "../alquiler/img/ursa-ursa-tape-soft-strips-black_SpTV.webp"}, {"name": "Blanco", "hex": "#F5F5F2", "photo": "../alquiler/img/ursa-ursa-tape-soft-strips-white_SpTV.webp"}, {"name": "Caramelo", "hex": "#A9744F", "photo": "../alquiler/img/ursa-ursa-tape-soft-strips-caramel_SpTV.webp"}, {"name": "Marrón", "hex": "#5C3A2A", "photo": "../alquiler/img/ursa-ursa-tape-soft-strips-brown_SpTV.webp"}], info: [["tag", "Tipo", "Adhesivos", 1], ["palette", "Colores", "5 colores", 1], ["capacity", "Tallas", "30 Small Strips (8 x 2.5cm) · 12 Small Strips Multi-Pack"]], specs: [["Categoría", "Adhesivos"], ["Marca", "Ursa Straps"], ["Descripción", "Tiras adhesivas de moleskin suave y elástico para fijar y camuflar micros de solapa reduciendo el roce de la ropa. Aptas para piel sensible y vestuario delicado."], ["Material", "Moleskin elástico con adhesivo hipoalergénico"], ["Medidas", "8 × 2,5 cm por tira"], ["Contenido", "30 tiras (o multipack de 12)"], ["Colores", "Beige · Negro · Blanco · Caramelo · Marrón"]], icon: soundIcon("#1F2937") },
  { cat: "sound", type: "Adhesivos", brand: "Ursa Straps", brandCode: "U", brandColor: "#1F2937", model: "Sticky Circles", photo: "../alquiler/img/ursa-ursa-sticky-circles-clear_SpTV.webp", color: "Transparente", colors: [], info: [["tag", "Tipo", "Adhesivos", 1], ["palette", "Color", "Transparente", 1]], specs: [["Categoría", "Adhesivos"], ["Marca", "Ursa Straps"], ["Descripción", "Círculos adhesivos transparentes e hipoalergénicos para fijar el micro de solapa bajo la ropa o directamente en la piel, sin dejar residuos."], ["Diámetro", "24 mm"], ["Grosor", "0,4 mm"], ["Contenido", "90 círculos"], ["Compatible con", "URSA Soft, Plush y Fur Circles"], ["Colores", "Transparente"]], icon: soundIcon("#1F2937") },
  { cat: "sound", type: "Otros", brand: "Ursa Straps", brandCode: "U", brandColor: "#1F2937", model: "Soft Soles & Heavy Duties - Multipack", photo: "../alquiler/img/ursa-ursa-soft-soles-black_SpTV.webp", color: "Negro", colors: [], info: [["tag", "Tipo", "Otros", 1], ["palette", "Color", "Negro", 1]], specs: [["Categoría", "Otros"], ["Marca", "Ursa Straps"], ["Descripción", "Almohadillas adhesivas para suelas de calzado que silencian las pisadas en rodaje. Incluye piezas para la parte delantera y para el tacón."], ["Contenido", "20 formas precortadas + 2 láminas Soft Soles + 2 láminas Heavy Duties"], ["Soft Soles", "Espuma acolchada de 3 mm"], ["Heavy Duties", "Sándwich de silicona y espuma para el tacón"], ["Adhesivo", "Se retira limpio, sin residuos"], ["Colores", "Negro"]], icon: soundIcon("#1F2937") },
  { cat: "sound", type: "Ocultación de micro de solapa", brand: "Rycote", brandCode: "R", brandColor: "#C8102E", model: "Undercovers (Original)", photo: "../alquiler/img/rycote-undercovers-negro_SpTV.webp", color: "Negro|Blanco|Gris|Mix de colores", colors: [{"name": "Negro", "hex": "#1a1a1a", "photo": "../alquiler/img/rycote-undercovers-negro_SpTV.webp"}, {"name": "Blanco", "hex": "#f2f2f2", "photo": "../alquiler/img/rycote-undercovers-blanco_SpTV.webp"}, {"name": "Mix de colores", "hex": "#8c8c8c", "photo": "../alquiler/img/rycote-undercovers-mix_SpTV.webp"}], info: [["tag", "Tipo", "Ocultación de micro de solapa", 1], ["palette", "Colores", "4 colores", 1], ["capacity", "Tallas", "30 Undercovers + 30 Stickies · 100 Undercovers + 100 Stickies · 25 packs × 30 (mix)"]], specs: [["Categoría", "Ocultación de micro de solapa"], ["Marca", "Rycote"], ["Descripción", "Discos de tejido suave para ocultar micrófonos de solapa bajo la ropa. Se fijan con Stickies y reducen el roce de la ropa y el viento ligero."], ["Contenido", "Discos de tejido + Stickies"], ["Packs", "30, 100 o 25 × 30 unidades"], ["Uso", "Micro de solapa bajo la ropa"], ["Colores", "Negro, gris, blanco o mix"], ["Colores", "Negro · Blanco · Gris · Mix de colores"]], icon: soundIcon("#C8102E") },
  { cat: "sound", type: "Antiviento", brand: "Rycote", brandCode: "R", brandColor: "#C8102E", model: "Overcovers (Original)", photo: "../alquiler/img/rycote-overcovers-negro_SpTV.webp", color: "Negro|Gris|Blanco|Mix de colores", colors: [{"name": "Negro", "hex": "#1a1a1a", "photo": "../alquiler/img/rycote-overcovers-negro_SpTV.webp"}, {"name": "Mix de colores", "hex": "#8c8c8c", "photo": "../alquiler/img/rycote-overcovers-mix_SpTV.webp"}], info: [["tag", "Tipo", "Antiviento", 1], ["palette", "Colores", "4 colores", 1], ["capacity", "Tallas", "6 discos de pelo + 30 Stickies · 25 packs × (6 discos + 30 Stickies)"]], specs: [["Categoría", "Antiviento"], ["Marca", "Rycote"], ["Descripción", "Discos de pelo sintético con la tecnología exclusiva de Rycote que se colocan sobre el micro de solapa para protegerlo del viento. Se fijan a la ropa o la piel con Stickies."], ["Contenido", "6 discos de pelo reutilizables + 30 Stickies"], ["Uso", "Protección antiviento para micro de solapa"], ["Colores", "Negro, gris, blanco o mix"], ["Colores", "Negro · Gris · Blanco · Mix de colores"]], icon: soundIcon("#C8102E") },
  { cat: "sound", type: "Antiviento", brand: "Rycote", brandCode: "R", brandColor: "#C8102E", model: "Overcovers Advanced", photo: "../alquiler/img/rycote-overcovers-advanced-negro_SpTV.webp", color: "Negro|Gris|Beige|Blanco", colors: [{"name": "Negro", "hex": "#1a1a1a", "photo": "../alquiler/img/rycote-overcovers-advanced-negro_SpTV.webp"}, {"name": "Gris", "hex": "#8a8a8a", "photo": "../alquiler/img/rycote-overcovers-advanced-gris_SpTV.webp"}, {"name": "Beige", "hex": "#d9c3a0", "photo": "../alquiler/img/rycote-overcovers-advanced-beige_SpTV.webp"}, {"name": "Blanco", "hex": "#f0f0f0", "photo": "../alquiler/img/rycote-overcovers-advanced-blanco_SpTV.webp"}], info: [["tag", "Tipo", "Antiviento", 1], ["palette", "Colores", "4 colores", 1], ["capacity", "Tallas", "5 discos + 25 Stickies Adv Round · Bolsa de 100 discos (solo negro)"]], specs: [["Categoría", "Antiviento"], ["Marca", "Rycote"], ["Descripción", "Versión de mayor tamaño (26 mm) de los Overcovers, ideal para DPA Concealers. Se suministran con Stickies Advanced redondos de 23 mm."], ["Diámetro", "26 mm"], ["Contenido", "5 discos de pelo (un color) + 25 Stickies Adv Round 23 mm"], ["Compatible", "DPA Concealers y otros micros de solapa"], ["Colores", "Negro, gris, beige o blanco"], ["Colores", "Negro · Gris · Beige · Blanco"]], icon: soundIcon("#C8102E") },
  { cat: "sound", type: "Adhesivos", brand: "Rycote", brandCode: "R", brandColor: "#C8102E", model: "Stickies (Original)", photo: "../alquiler/img/rycote-stickies_SpTV.webp", color: "", colors: [], info: [["tag", "Tipo", "Adhesivos", 1], ["palette", "Colores", "Único", 1], ["capacity", "Tallas", "30 uds. · 100 uds. · Rollo de 500 (23 mm) · 25 packs × 30"]], specs: [["Categoría", "Adhesivos"], ["Marca", "Rycote"], ["Descripción", "Almohadillas adhesivas de doble cara e hipoalergénicas para fijar micrófonos de solapa a la piel o la ropa. El tejido entre ambas caras evita los crujidos del micro por el movimiento."], ["Tipo", "Adhesivo de doble cara hipoalergénico"], ["Cantidades", "30, 100, rollo de 500 y 25 × 30"], ["Uso", "Un solo uso, sobre superficie seca"]], icon: soundIcon("#C8102E") },
  { cat: "sound", type: "Adhesivos", brand: "Rycote", brandCode: "R", brandColor: "#C8102E", model: "Stickies Advanced", photo: "../alquiler/img/rycote-stickies-advanced_SpTV.webp", color: "", colors: [], info: [["tag", "Tipo", "Adhesivos", 1], ["palette", "Colores", "Único", 1], ["capacity", "Tallas", "Round 23 mm · Squared 20 mm · O's 23 mm"]], specs: [["Categoría", "Adhesivos"], ["Marca", "Rycote"], ["Descripción", "Adhesivos de doble cara más adherentes, con pestañas de fácil despegue, en forma redonda, cuadrada o de anillo. La redonda es ideal para DPA Concealers y la cuadrada para el soporte Sanken RM-11."], ["Formas", "Redonda 23 mm, cuadrada 20 mm, anillo (O's) 23 mm"], ["Presentación", "Pack, bolsa de 100 o caja de 10 × 25"], ["Compatible", "DPA Concealers, Sanken RM-11 (COS-11)"], ["Tipo", "Adhesivo hipoalergénico de doble cara"]], icon: soundIcon("#C8102E") },
  { cat: "sound", type: "Antiviento", brand: "Rycote", brandCode: "R", brandColor: "#C8102E", model: "Lavalier Windjammer", photo: "../alquiler/img/rycote-lavalier-windjammer-negro_SpTV.webp", color: "Negro|Gris|Blanco", colors: [{"name": "Negro", "hex": "#1a1a1a", "photo": "../alquiler/img/rycote-lavalier-windjammer-negro_SpTV.webp"}, {"name": "Gris", "hex": "#8f8f8f", "photo": "../alquiler/img/rycote-lavalier-windjammer-gris_SpTV.webp"}, {"name": "Blanco", "hex": "#f0f0f0", "photo": "../alquiler/img/rycote-lavalier-windjammer-blanco_SpTV.webp"}], info: [["tag", "Tipo", "Antiviento", 1], ["palette", "Colores", "3 colores", 1], ["capacity", "Tallas", "1 ud. · Par"]], specs: [["Categoría", "Antiviento"], ["Marca", "Rycote"], ["Descripción", "Antiviento de pelo sintético para micrófonos de solapa, la opción de Rycote con mayor aislamiento del viento para exteriores. Se sujeta al micro mediante un conector de espuma con anillo de goma."], ["Atenuación de viento", "Hasta 12 dB"], ["Diámetro de micro", "4,5 mm"], ["Sujeción", "Conector de espuma con anillo de goma"], ["Colores", "Negro, gris, blanco (otros bajo pedido)"], ["Colores", "Negro · Gris · Blanco"]], icon: soundIcon("#C8102E") },
  { cat: "sound", type: "Antiviento", brand: "Rycote", brandCode: "R", brandColor: "#C8102E", model: "Micro Windjammer", photo: "../alquiler/img/rycote-micro-windjammer_SpTV.webp", color: "", colors: [], info: [["tag", "Tipo", "Antiviento", 1], ["palette", "Colores", "Único", 1], ["capacity", "Talla", "30 usos"]], specs: [["Categoría", "Antiviento"], ["Marca", "Rycote"], ["Descripción", "Pequeños antiviento de pelo para los micrófonos integrados de cámaras compactas y dispositivos móviles. Reducen el ruido del viento al grabar vídeo en exteriores."], ["Contenido", "30 unidades"], ["Uso", "Micrófonos integrados de cámaras compactas y dispositivos móviles"]], icon: soundIcon("#C8102E") },
  { cat: "sound", type: "Espuma / protección", brand: "Rycote", brandCode: "R", brandColor: "#C8102E", model: "Lavalier Foam", photo: "../alquiler/img/rycote-lavalier-foam_SpTV.webp", color: "Negro|Beige|Marrón", colors: [], info: [["tag", "Tipo", "Espuma / protección", 1], ["palette", "Colores", "3 colores", 1], ["capacity", "Tallas", "Lavalier Foam (4,5–6,0 mm) · Miniature Lavalier Foam (2,8–4,5 mm)"]], specs: [["Categoría", "Espuma / protección"], ["Marca", "Rycote"], ["Descripción", "Antiviento de espuma acústica de celda abierta para micrófonos de solapa, discreto y de colocación a presión. Ofrece hasta 20 dB de atenuación de viento y popeo sin pérdida de agudos."], ["Atenuación", "Hasta 20 dB"], ["Lavalier Foam", "Micros de 4,5 a 6,0 mm, hasta 15 mm de largo"], ["Miniature", "Micros de 2,8 a 4,5 mm (solo negro)"], ["Material", "Espuma resistente a humedad y rayos UV"], ["Colores", "Negro · Beige · Marrón"]], icon: soundIcon("#C8102E") },
  { cat: "sound", type: "Espuma / protección", brand: "Rycote", brandCode: "R", brandColor: "#C8102E", model: "Neoprene-coated Mini Lavalier Foam", photo: "../alquiler/img/rycote-neoprene-mini-lavalier-foam-negro_SpTV.webp", color: "Negro", colors: [], info: [["tag", "Tipo", "Espuma / protección", 1], ["palette", "Color", "Negro", 1]], specs: [["Categoría", "Espuma / protección"], ["Marca", "Rycote"], ["Descripción", "Espuma para micrófonos de solapa pequeños con recubrimiento de neopreno que repele el agua en lluvia ligera."], ["Diámetro de micro", "2,8 a 4,5 mm"], ["Longitud de micro", "Hasta 15 mm"], ["Recubrimiento", "Neopreno, repele el agua"], ["Colores", "Negro"]], icon: soundIcon("#C8102E") },
  { cat: "sound", type: "Antiviento", brand: "Rycote", brandCode: "R", brandColor: "#C8102E", model: "Classic-Softie", photo: "../alquiler/img/rycote-classic-softie-gris_SpTV.webp", color: "Gris", colors: [], info: [["tag", "Tipo", "Antiviento", 1], ["palette", "Color", "Gris", 1], ["capacity", "Tallas", "5 cm · 7 cm · 10 cm · 12 cm · 15 cm · 18 cm · 24 cm · 29 cm · 32 cm"]], specs: [["Categoría", "Antiviento"], ["Marca", "Rycote"], ["Descripción", "Antiviento de espuma de celda abierta con funda de pelo integrada para micrófonos de cañón, estándar en televisión y ENG. Reduce hasta 25 dB el ruido de viento sin afectar a los agudos."], ["Atenuación de viento", "Hasta 25 dB"], ["Diámetro de micro", "19–22 mm o 24–25 mm"], ["Pelo", "Gris, 25 mm"], ["Kit", "Con suspensión Lyre y empuñadura (15 y 18 cm)"], ["Colores", "Gris"]], icon: soundIcon("#C8102E") },
  { cat: "sound", type: "Antiviento", brand: "Rycote", brandCode: "R", brandColor: "#C8102E", model: "Super-Softie", photo: "../alquiler/img/rycote-super-softie-gris_SpTV.webp", color: "Gris", colors: [], info: [["tag", "Tipo", "Antiviento", 1], ["palette", "Color", "Gris", 1], ["capacity", "Tallas", "5 cm · 12 cm · 15 cm · 18 cm"]], specs: [["Categoría", "Antiviento"], ["Marca", "Rycote"], ["Descripción", "Antiviento de forma aerodinámica fabricado en material 3D-Tex, sin estructura rígida interna y con gran transparencia acústica. Si se moja se escurre y se seca rápidamente."], ["Material", "3D-Tex"], ["Atenuación de viento", "Hasta 25 dB"], ["Diámetro de micro", "19–22 mm o 24–25 mm"], ["Colores", "Gris"]], icon: soundIcon("#C8102E") },
  { cat: "sound", type: "Soporte / suspensión", brand: "Rycote", brandCode: "R", brandColor: "#C8102E", model: "InVision Video Hot Shoe Mount", photo: "../alquiler/img/rycote-invision-video-hot-shoe-mount-negro_SpTV.webp", color: "Negro", colors: [], info: [["tag", "Tipo", "Soporte / suspensión", 1], ["palette", "Color", "Negro", 1]], specs: [["Categoría", "Soporte / suspensión"], ["Marca", "Rycote"], ["Descripción", "Suspensión Duo-Lyre para montar el micrófono en la zapata de la cámara, aislándolo de vibraciones y ruido de motores. Gira 360° y eleva el micro para mantenerlo fuera de plano."], ["Suspensión", "Duo-Lyre"], ["Montaje", "Zapata de cámara"], ["Rotación", "360°"], ["Colores", "Negro"]], icon: soundIcon("#C8102E") },
  { cat: "sound", type: "Soporte / suspensión", brand: "Rycote", brandCode: "R", brandColor: "#C8102E", model: "InVision Softie Lyre Mount", photo: "../alquiler/img/rycote-invision-softie-lyre-mount-negro_SpTV.webp", color: "Negro", colors: [], info: [["tag", "Tipo", "Soporte / suspensión", 1], ["palette", "Color", "Negro", 1], ["capacity", "Tallas", "CCA · MHR"]], specs: [["Categoría", "Soporte / suspensión"], ["Marca", "Rycote"], ["Descripción", "Suspensión Lyre para micrófono con Softie que se monta en el portamicro de cámaras profesionales. Eleva y retrasa el micro para mantenerlo fuera de plano."], ["Diámetro de micro", "19–25 mm (clip Duo-Lyre)"], ["Versión CCA", "Portamicros de cámara de 25–27 mm (Sony, Canon)"], ["Rosca", "Latón 3/8\" para pértiga"], ["Colores", "Negro"]], icon: soundIcon("#C8102E") },
  { cat: "sound", type: "Otros", brand: "Rycote", brandCode: "R", brandColor: "#C8102E", model: "Mic Flag", photo: "../alquiler/img/rycote-mic-flag-negro_SpTV.webp", color: "Negro|Blanco", colors: [{"name": "Negro", "hex": "#1a1a1a", "photo": "../alquiler/img/rycote-mic-flag-negro_SpTV.webp"}, {"name": "Blanco", "hex": "#f2f2f2", "photo": "../alquiler/img/rycote-mic-flag-blanco_SpTV.webp"}], info: [["tag", "Tipo", "Otros", 1], ["palette", "Colores", "2 colores", 1], ["capacity", "Tallas", "Cuadrada · Triangular · Pack de 20"]], specs: [["Categoría", "Otros"], ["Marca", "Rycote"], ["Descripción", "Cubo identificativo de plástico moldeado irrompible para micrófonos de mano, con amplia zona imprimible para logotipos. Sus aletas de goma internas lo sujetan sin espumas perecederas."], ["Diámetro de micro", "19–32 mm (hasta 38 mm quitando aletas)"], ["Área imprimible cuadrada", "57 × 48 mm por cara"], ["Área imprimible triangular", "89,5 × 48 mm por cara"], ["Material", "Plástico moldeado irrompible"], ["Colores", "Negro · Blanco"]], icon: soundIcon("#C8102E") },
  { cat: "sound", type: "Antiviento", brand: "Rycote", brandCode: "R", brandColor: "#C8102E", model: "Cyclone Windshield Kit", photo: "../alquiler/img/rycote-cyclone-gris_SpTV.webp", color: "Gris", colors: [], info: [["tag", "Tipo", "Antiviento", 1], ["palette", "Color", "Gris", 1], ["capacity", "Tallas", "Small · Medium · Large"]], specs: [["Categoría", "Antiviento"], ["Marca", "Rycote"], ["Descripción", "Sistema antiviento premium de cesta para micrófonos de cañón, ligero y resistente, en material 3D-Tex gris sin necesidad de pelo. Incluye suspensión Floating-Basket y cierre Z-Locking para acceder al micro al instante."], ["Material", "3D-Tex gris"], ["Medium", "Micros de 174 a 255 mm (p. ej. MKH 416, CMIT 5U)"], ["Rosca", "Latón 3/8\" UNC hembra"], ["Temperatura", "-20 °C a 38 °C"], ["Colores", "Gris"]], icon: soundIcon("#C8102E") },
  { cat: "sound", type: "Ocultación de micro de solapa", brand: "Bubblebee Industries", brandCode: "B", brandColor: "#C99700", model: "The Lav Concealer", photo: "../alquiler/img/bubblebee-lav-concealer-black_SpTV.webp", color: "Negro|Blanco", colors: [{"name": "Negro", "hex": "#1a1a1a", "photo": "../alquiler/img/bubblebee-lav-concealer-black_SpTV.webp"}, {"name": "Blanco", "hex": "#f2f2f2", "photo": "../alquiler/img/bubblebee-lav-concealer-white_SpTV.webp"}], info: [["tag", "Tipo", "Ocultación de micro de solapa", 1], ["palette", "Colores", "2 colores", 1], ["capacity", "Tallas", "Unidad · Pack de 6"]], specs: [["Categoría", "Ocultación de micro de solapa"], ["Marca", "Bubblebee Industries"], ["Descripción", "Soporte de goma blanda que permite fijar el micro de solapa bajo la ropa (con clip, cinta o cosido) y actúa como suspensión frente a roces y vibraciones. Incluye protectores de tela de alambre que mantienen la prenda alejada de la cápsula."], ["Material", "Goma blanda biodegradable"], ["Versiones", "Sennheiser, DPA, RØDE, Sanken COS-11, Countryman, Sony, Deity y Shure TL45/47"], ["Incluye", "Clip de ropa, bloqueo de cable, 2 protectores de tela y 6 piezas de Tiny Tape"], ["Formato", "Unidad o pack de 6"], ["Colores", "Negro · Blanco"]], icon: soundIcon("#C99700") },
  { cat: "sound", type: "Ocultación de micro de solapa", brand: "Bubblebee Industries", brandCode: "B", brandColor: "#C99700", model: "The Invisible Lav Covers", photo: "../alquiler/img/bubblebee-invisible-lav-covers-black_SpTV.webp", color: "Negro|Beige|Blanco", colors: [{"name": "Negro", "hex": "#1a1a1a", "photo": "../alquiler/img/bubblebee-invisible-lav-covers-black_SpTV.webp"}, {"name": "Beige", "hex": "#d9c2a7", "photo": "../alquiler/img/bubblebee-invisible-lav-covers-beige_SpTV.webp"}, {"name": "Blanco", "hex": "#f2f2f2", "photo": "../alquiler/img/bubblebee-invisible-lav-covers-white_SpTV.webp"}], info: [["tag", "Tipo", "Ocultación de micro de solapa", 1], ["palette", "Colores", "3 colores", 1], ["capacity", "Tallas", "Pack de 30 · Big Bag de 120"]], specs: [["Categoría", "Ocultación de micro de solapa"], ["Marca", "Bubblebee Industries"], ["Descripción", "Fundas para ocultar el micro de solapa bajo la ropa sin marcas visibles, en tonos variados para igualar piel o prenda. Disponibles en versiones Original, Moleskin y Fur Outdoor."], ["Tipos", "Original, Moleskin, Fur Outdoor"], ["Contenido", "30 fundas (pack) o 120 (Big Bag)"], ["Compatibilidad", "Cualquier micro de solapa"], ["Colores", "Negro · Beige · Blanco"]], icon: soundIcon("#C99700") },
  { cat: "sound", type: "Antiviento", brand: "Bubblebee Industries", brandCode: "B", brandColor: "#C99700", model: "The Windbubble", photo: "../alquiler/img/bubblebee-windbubble-black_SpTV.webp", color: "Negro|Gris|Marrón|Beige|Blanco roto|Blanco", colors: [{"name": "Negro", "hex": "#1a1a1a", "photo": "../alquiler/img/bubblebee-windbubble-black_SpTV.webp"}, {"name": "Gris", "hex": "#7a7a7a", "photo": "../alquiler/img/bubblebee-windbubble-grey_SpTV.webp"}, {"name": "Marrón", "hex": "#6b4a2b", "photo": "../alquiler/img/bubblebee-windbubble-brown_SpTV.webp"}, {"name": "Beige", "hex": "#d9c2a7", "photo": "../alquiler/img/bubblebee-windbubble-beige_SpTV.webp"}, {"name": "Blanco roto", "hex": "#ece4d6", "photo": "../alquiler/img/bubblebee-windbubble-off-white_SpTV.webp"}, {"name": "Blanco", "hex": "#f2f2f2", "photo": "../alquiler/img/bubblebee-windbubble-white_SpTV.webp"}], info: [["tag", "Tipo", "Antiviento", 1], ["palette", "Colores", "6 colores", 1], ["capacity", "Tallas", "Talla 1 · Talla 2 · Talla 3 · Talla 4"]], specs: [["Categoría", "Antiviento"], ["Marca", "Bubblebee Industries"], ["Descripción", "Antiviento de pelo sintético para micros de solapa, con interior hueco que crea una cámara de aire en calma alrededor de la cápsula. Seis colores naturales para combinar con cualquier vestuario."], ["Tallas", "1 (⌀ 3–4 mm), 2 (⌀ 5–8 mm), 3 (⌀ 5–9 mm), 4 (⌀ 8–13 mm)"], ["Compatibilidad", "Más de 50 modelos de solapa, direccionales y omnidireccionales"], ["Incluye", "Lata de almacenaje"], ["Formato", "Unidad, pack de 2, 4 o 10"], ["Colores", "Negro · Gris · Marrón · Beige · Blanco roto · Blanco"]], icon: soundIcon("#C99700") },
  { cat: "sound", type: "Antiviento", brand: "Bubblebee Industries", brandCode: "B", brandColor: "#C99700", model: "The Windbubble Pro", photo: "../alquiler/img/bubblebee-windbubble-pro-black_SpTV.webp", color: "Negro|Gris|Beige|Blanco", colors: [{"name": "Negro", "hex": "#1a1a1a", "photo": "../alquiler/img/bubblebee-windbubble-pro-black_SpTV.webp"}, {"name": "Gris", "hex": "#7a7a7a", "photo": "../alquiler/img/bubblebee-windbubble-pro-grey_SpTV.webp"}, {"name": "Beige", "hex": "#d9c2a7", "photo": "../alquiler/img/bubblebee-windbubble-pro-beige_SpTV.webp"}, {"name": "Blanco", "hex": "#f2f2f2", "photo": "../alquiler/img/bubblebee-windbubble-pro-white_SpTV.webp"}], info: [["tag", "Tipo", "Antiviento", 1], ["palette", "Colores", "4 colores", 1], ["capacity", "Tallas", "XS · S · M · L"]], specs: [["Categoría", "Antiviento"], ["Marca", "Bubblebee Industries"], ["Descripción", "Versión avanzada del Windbubble con montura de goma integrada que sujeta la cápsula y mejora el rechazo al viento fuerte. Diseñado exclusivamente para micros de solapa omnidireccionales."], ["Tallas", "XS (⌀ 3–5 mm), S (⌀ 5–6,5 mm), M (⌀ 6–8 mm), L (⌀ 11,5–14 mm)"], ["Pelo", "Standard o Extreme"], ["Compatibilidad", "Solo micros omnidireccionales"], ["Formato", "Unidad o pack de 2 (talla L solo en pack de 2)"], ["Colores", "Negro · Gris · Beige · Blanco"]], icon: soundIcon("#C99700") },
  { cat: "sound", type: "Antiviento", brand: "Bubblebee Industries", brandCode: "B", brandColor: "#C99700", model: "The Big Windbubble", photo: "../alquiler/img/bubblebee-big-windbubble-black_SpTV.webp", color: "Negro", colors: [], info: [["tag", "Tipo", "Antiviento", 1], ["palette", "Color", "Negro", 1]], specs: [["Categoría", "Antiviento"], ["Marca", "Bubblebee Industries"], ["Descripción", "Antiviento de pelo sintético negro para micrófonos de mano, con forro de malla y montura elástica en la base. Disponible en pelo largo o corto."], ["Compatibilidad", "Micros de mano de ⌀ aprox. 35–55 mm"], ["Pelo", "Largo o corto"], ["Montura", "Elástica"], ["Colores", "Negro"]], icon: soundIcon("#C99700") },
  { cat: "sound", type: "Antiviento", brand: "Bubblebee Industries", brandCode: "B", brandColor: "#C99700", model: "The Windkiller", photo: "../alquiler/img/bubblebee-windkiller-black_SpTV.webp", color: "Negro", colors: [], info: [["tag", "Tipo", "Antiviento", 1], ["palette", "Color", "Negro", 1], ["capacity", "Tallas", "XS · XS (Big Mount) · XS+ · S · M · L · XL · XL (Big Mount)"]], specs: [["Categoría", "Antiviento"], ["Marca", "Bubblebee Industries"], ["Descripción", "Antiviento de pelo sintético multicapa para micrófonos de cañón, para pértiga y grabación de campo. Disponible en pelo largo, para viento fuerte, o pelo corto, para viento moderado."], ["Pelo", "Largo o corto"], ["Tallas", "XS a XL, con versiones Big Mount"], ["Compatibilidad", "Cañones de Sennheiser, RØDE, Schoeps, Audio-Technica, DPA, Sanken, Sony…"], ["Colores", "Negro"]], icon: soundIcon("#C99700") },
  { cat: "sound", type: "Antiviento", brand: "Bubblebee Industries", brandCode: "B", brandColor: "#C99700", model: "The Cub", photo: "../alquiler/img/bubblebee-cub-black_SpTV.webp", color: "Negro|Gris", colors: [{"name": "Negro", "hex": "#1a1a1a", "photo": "../alquiler/img/bubblebee-cub-black_SpTV.webp"}, {"name": "Gris", "hex": "#7a7a7a", "photo": "../alquiler/img/bubblebee-cub-grey_SpTV.webp"}], info: [["tag", "Tipo", "Antiviento", 1], ["palette", "Colores", "2 colores", 1]], specs: [["Categoría", "Antiviento"], ["Marca", "Bubblebee Industries"], ["Descripción", "Antiviento de pelo sintético multicapa diseñado específicamente para el micrófono Sanken CUB-01."], ["Compatibilidad", "Sanken CUB-01"], ["Colores", "Negro o gris"], ["Colores", "Negro · Gris"]], icon: soundIcon("#C99700") },
  { cat: "sound", type: "Antiviento", brand: "Bubblebee Industries", brandCode: "B", brandColor: "#C99700", model: "The Spacer Bubble", photo: "../alquiler/img/bubblebee-spacer-bubble-black_SpTV.webp", color: "Negro|Azul|Verde|Rojo", colors: [{"name": "Negro", "hex": "#1a1a1a", "photo": "../alquiler/img/bubblebee-spacer-bubble-black_SpTV.webp"}, {"name": "Azul", "hex": "#1f4fd1", "photo": "../alquiler/img/bubblebee-spacer-bubble-blue_SpTV.webp"}, {"name": "Verde", "hex": "#22a838", "photo": "../alquiler/img/bubblebee-spacer-bubble-green_SpTV.webp"}, {"name": "Rojo", "hex": "#d42a1e", "photo": "../alquiler/img/bubblebee-spacer-bubble-red_SpTV.webp"}], info: [["tag", "Tipo", "Antiviento", 1], ["palette", "Colores", "4 colores", 1], ["capacity", "Tallas", "XS · XS (Big Mount) · XS+ · S · M · L · XL · XL (Big Mount)"]], specs: [["Categoría", "Antiviento"], ["Marca", "Bubblebee Industries"], ["Descripción", "Sistema antiviento modular para micrófonos de cañón; los colores facilitan identificar cada micro en rodajes multicámara. Se entrega con funda de pelo largo Spacer Cover y bolsa de malla."], ["Incluye", "Spacer Bubble, Spacer Cover de pelo largo y bolsa de malla"], ["Tallas", "8 tallas para los cañones más habituales"], ["Compatibilidad", "Sennheiser MKH 416/ME 66 (L), RØDE NTG (L), Schoeps, DPA, Sanken…"], ["Colores", "Negro · Azul · Verde · Rojo"]], icon: soundIcon("#C99700") },
  { cat: "sound", type: "Antiviento", brand: "Bubblebee Industries", brandCode: "B", brandColor: "#C99700", model: "The Spacer Cover", photo: "../alquiler/img/bubblebee-spacer-cover-black_SpTV.webp", color: "Negro|Azul|Verde|Rojo", colors: [{"name": "Negro", "hex": "#1a1a1a", "photo": "../alquiler/img/bubblebee-spacer-cover-black_SpTV.webp"}, {"name": "Azul", "hex": "#1f4fd1", "photo": "../alquiler/img/bubblebee-spacer-cover-blue_SpTV.webp"}, {"name": "Verde", "hex": "#22a838", "photo": "../alquiler/img/bubblebee-spacer-cover-green_SpTV.webp"}, {"name": "Rojo", "hex": "#d42a1e", "photo": "../alquiler/img/bubblebee-spacer-cover-red_SpTV.webp"}], info: [["tag", "Tipo", "Antiviento", 1], ["palette", "Colores", "4 colores", 1], ["capacity", "Tallas", "XS · XS+ · S · M · L · XL"]], specs: [["Categoría", "Antiviento"], ["Marca", "Bubblebee Industries"], ["Descripción", "Funda de pelo sintético que se coloca sobre el Spacer Bubble para añadir protección cuando aumenta el viento. Colores a juego con los Spacer Bubble."], ["Compatibilidad", "Todas las tallas de Spacer Bubble"], ["Colores", "Negro, azul, verde, rojo"], ["Colores", "Negro · Azul · Verde · Rojo"]], icon: soundIcon("#C99700") },
  { cat: "sound", type: "Antiviento", brand: "Bubblebee Industries", brandCode: "B", brandColor: "#C99700", model: "The Spacer Ball", photo: "../alquiler/img/bubblebee-spacer-ball-black_SpTV.webp", color: "Negro", colors: [], info: [["tag", "Tipo", "Antiviento", 1], ["palette", "Color", "Negro", 1], ["capacity", "Tallas", "65 mm · 100 mm"]], specs: [["Categoría", "Antiviento"], ["Marca", "Bubblebee Industries"], ["Descripción", "Antiviento esférico para micros de condensador compactos y micros de pértiga, con exterior de malla, núcleo de espuma abierta y base de goma. Incluye funda de pelo largo para viento intenso."], ["Diámetro", "65 mm o 100 mm"], ["Montura", "S (⌀ 19–20 mm), M (⌀ 21–22 mm), L (⌀ 25–26 mm)"], ["Incluye", "Funda de pelo largo y bolsa de malla"], ["Compatibilidad", "Schoeps CCM/MK, DPA 4011/4018, Sennheiser MKH 8000/MKH 50…"], ["Colores", "Negro"]], icon: soundIcon("#C99700") },
  { cat: "sound", type: "Antiviento", brand: "Bubblebee Industries", brandCode: "B", brandColor: "#C99700", model: "The Fur Wind Jacket", photo: "../alquiler/img/bubblebee-fur-wind-jacket-black_SpTV.webp", color: "Negro|Verde|Azul", colors: [{"name": "Negro", "hex": "#1a1a1a", "photo": "../alquiler/img/bubblebee-fur-wind-jacket-black_SpTV.webp"}, {"name": "Verde", "hex": "#22a838", "photo": "../alquiler/img/bubblebee-fur-wind-jacket-green_SpTV.webp"}, {"name": "Azul", "hex": "#1f4fd1", "photo": "../alquiler/img/bubblebee-fur-wind-jacket-blue_SpTV.webp"}], info: [["tag", "Tipo", "Antiviento", 1], ["palette", "Colores", "3 colores", 1], ["capacity", "Tallas", "Rycote Modular WS Kit 1 · Rycote Modular WS Kit 2 · Rycote Modular WS Kit 3 · Rycote Modular WS Kit 4 · Rycote BBG · Cinela Pianissimo · Cinela Piano"]], specs: [["Categoría", "Antiviento"], ["Marca", "Bubblebee Industries"], ["Descripción", "Funda de pelo sintético multicapa hecha a medida para cestas antiviento Rycote y Cinela. Verde y azul solo disponibles para Cinela Pianissimo y Piano."], ["Compatibilidad", "Rycote Modular Windshield, Rycote BBG, Cinela Pianissimo y Piano"], ["Pelo", "Tres longitudes de pelo sintético"], ["Colores", "Negro (todos); verde y azul (Cinela)"], ["Plazo", "Fabricado bajo pedido"], ["Colores", "Negro · Verde · Azul"]], icon: soundIcon("#C99700") },
  { cat: "sound", type: "Espuma / protección", brand: "Bubblebee Industries", brandCode: "B", brandColor: "#C99700", model: "The Microphone Foam for Lavalier Mics", photo: "../alquiler/img/bubblebee-microphone-foam-lavalier-black_SpTV.webp", color: "Negro|Beige|Blanco", colors: [{"name": "Negro", "hex": "#1a1a1a", "photo": "../alquiler/img/bubblebee-microphone-foam-lavalier-black_SpTV.webp"}, {"name": "Beige", "hex": "#d9c2a7", "photo": "../alquiler/img/bubblebee-microphone-foam-lavalier-beige_SpTV.webp"}, {"name": "Blanco", "hex": "#f2f2f2", "photo": "../alquiler/img/bubblebee-microphone-foam-lavalier-white_SpTV.webp"}], info: [["tag", "Tipo", "Espuma / protección", 1], ["palette", "Colores", "3 colores", 1], ["capacity", "Tallas", "XS (10 uds.) · S (10 uds.) · M (10 uds.) · L (5 uds.) · XL (4 uds.)"]], specs: [["Categoría", "Espuma / protección"], ["Marca", "Bubblebee Industries"], ["Descripción", "Espumas de celda abierta para micros de solapa que reducen popeos y viento ligero. Se usan solas en interiores o bajo un Windbubble en exteriores."], ["Material", "Espuma de celda abierta"], ["Tallas", "XS a XL"], ["Contenido", "4–10 uds. según talla"], ["Compatibilidad", "Micros de solapa"], ["Colores", "Negro · Beige · Blanco"]], icon: soundIcon("#C99700") },
  { cat: "sound", type: "Espuma / protección", brand: "Bubblebee Industries", brandCode: "B", brandColor: "#C99700", model: "The Microphone Foam for Shotgun Mics", photo: "../alquiler/img/bubblebee-microphone-foam-shotgun-black_SpTV.webp", color: "Negro", colors: [], info: [["tag", "Tipo", "Espuma / protección", 1], ["palette", "Color", "Negro", 1], ["capacity", "Tallas", "XS · XS (Big Diameter) · XS+ · S · M · L · XL · XL (Big Diameter)"]], specs: [["Categoría", "Espuma / protección"], ["Marca", "Bubblebee Industries"], ["Descripción", "Espuma de celda abierta para micrófonos de cañón, para viento ligero o como capa interior bajo un antiviento de pelo como el Windkiller."], ["Material", "Espuma de celda abierta"], ["Tallas", "XS a XL, con versiones Big Diameter"], ["Contenido", "1 unidad"], ["Colores", "Negro"]], icon: soundIcon("#C99700") },
  { cat: "sound", type: "Otros", brand: "Bubblebee Industries", brandCode: "B", brandColor: "#C99700", model: "The Cable Saver", photo: "../alquiler/img/bubblebee-cable-saver-black_SpTV.webp", color: "Negro|Beige|Blanco", colors: [{"name": "Negro", "hex": "#1a1a1a", "photo": "../alquiler/img/bubblebee-cable-saver-black_SpTV.webp"}, {"name": "Beige", "hex": "#d9c2a7", "photo": "../alquiler/img/bubblebee-cable-saver-beige_SpTV.webp"}, {"name": "Blanco", "hex": "#f2f2f2", "photo": "../alquiler/img/bubblebee-cable-saver-white_SpTV.webp"}], info: [["tag", "Tipo", "Otros", 1], ["palette", "Colores", "3 colores", 1], ["capacity", "Talla", "Pack de 4"]], specs: [["Categoría", "Otros"], ["Marca", "Bubblebee Industries"], ["Descripción", "Protectores de goma que refuerzan la unión entre cable y conector del micro de solapa, el punto de fallo más habitual."], ["Contenido", "4 unidades"], ["Material", "Goma blanda"], ["Compatibilidad", "Micros de solapa de Sanken, Sennheiser, DPA, Countryman…"], ["Colores", "Negro · Beige · Blanco"]], icon: soundIcon("#C99700") },
  { cat: "sound", type: "Adhesivos", brand: "Bubblebee Industries", brandCode: "B", brandColor: "#C99700", model: "The Lav Concealer Tape", photo: "../alquiler/img/bubblebee-lav-concealer-tape_SpTV.webp", color: "", colors: [], info: [["tag", "Tipo", "Adhesivos", 1], ["palette", "Colores", "Único", 1], ["capacity", "Tallas", "Tiras · Rollo"]], specs: [["Categoría", "Adhesivos"], ["Marca", "Bubblebee Industries"], ["Descripción", "Piezas precortadas de cinta adhesiva de doble cara para fijar el Lav Concealer o el micro de solapa a la piel o la ropa. Adhesivo hipoalergénico de grado médico que se retira sin dejar residuos."], ["Contenido", "120 piezas precortadas"], ["Adhesivo", "Doble cara, hipoalergénico, grado médico"], ["Formato", "Tiras o rollo"], ["Compatibilidad", "Lav Concealer tamaño Regular"]], icon: soundIcon("#C99700") }
];

// STATIONERY: purchase catalogue, official photos from each brand's website.
// colors: one photo per colour; the dots on the card swap the photo (generated by tools/build_sonido_data.py)
const STATIONERY = [
  { cat: "stationery", type: "Bolígrafo", brand: "Pilot", brandCode: "P", brandColor: "#00468C", model: "Pilot Super Grip", photo: "../alquiler/img/pilot-super-grip-azul_SpTV.webp", color: "Azul", colors: [], info: [["tag", "Tipo", "Bolígrafo", 1], ["palette", "Color", "Azul", 1]], specs: [["Categoría", "Bolígrafo"], ["Marca", "Pilot"], ["Descripción", "Bolígrafo de bola retráctil con empuñadura de goma."], ["Punta", "M (media)"], ["Tinta", "Azul"], ["Colores", "Azul"]], icon: stationeryIcon("#00468C") },
  { cat: "stationery", type: "Bolígrafo", brand: "Pilot", brandCode: "P", brandColor: "#00468C", model: "Pilot G2", photo: "../alquiler/img/pilot-g2-azul_SpTV.webp", color: "Azul|Negro", colors: [{"name": "Azul", "hex": "#1F4FB8", "photo": "../alquiler/img/pilot-g2-azul_SpTV.webp"}, {"name": "Negro", "hex": "#1A1A1A", "photo": "../alquiler/img/pilot-g2-negro_SpTV.webp"}], info: [["tag", "Tipo", "Bolígrafo", 1], ["palette", "Colores", "2 colores", 1]], specs: [["Categoría", "Bolígrafo"], ["Marca", "Pilot"], ["Descripción", "Bolígrafo de tinta gel retráctil, de escritura suave."], ["Tinta", "Gel · azul o negra"], ["Colores", "Azul · Negro"]], icon: stationeryIcon("#00468C") },
  { cat: "stationery", type: "Bolígrafo", brand: "BIC", brandCode: "B", brandColor: "#F28C00", model: "BIC Cristal", photo: "../alquiler/img/bic-cristal-azul_SpTV.webp", color: "Negro|Azul", colors: [], info: [["tag", "Tipo", "Bolígrafo", 1], ["palette", "Colores", "2 colores", 1]], specs: [["Categoría", "Bolígrafo"], ["Marca", "BIC"], ["Descripción", "El bolígrafo clásico de cuerpo transparente."], ["Tinta", "Negra o azul"], ["Colores", "Negro · Azul"]], icon: stationeryIcon("#F28C00") },
  { cat: "stationery", type: "Cinta adhesiva", brand: "3M", brandCode: "3M", brandColor: "#E2231A", model: "Scotch cinta transparente", photo: "../alquiler/img/scotch-transparente-transparente_SpTV.webp", color: "Transparente", colors: [], info: [["tag", "Tipo", "Cinta adhesiva", 1], ["palette", "Color", "Transparente", 1]], specs: [["Categoría", "Cinta adhesiva"], ["Marca", "3M"], ["Descripción", "Cinta adhesiva transparente de uso general."], ["Medida", "19 mm × 33 m"], ["Colores", "Transparente"]], icon: stationeryIcon("#E2231A") },
  { cat: "stationery", type: "Cinta adhesiva", brand: "3M", brandCode: "3M", brandColor: "#E2231A", model: "Scotch Magic", photo: "../alquiler/img/scotch-magic-transparente_SpTV.webp", color: "Transparente", colors: [], info: [["tag", "Tipo", "Cinta adhesiva", 1], ["palette", "Color", "Transparente", 1]], specs: [["Categoría", "Cinta adhesiva"], ["Marca", "3M"], ["Descripción", "Cinta adhesiva invisible y mate: no se ve sobre el papel y se puede escribir encima."], ["Medida", "19 mm × 33 m"], ["Colores", "Transparente"]], icon: stationeryIcon("#E2231A") },
  { cat: "stationery", type: "Lápiz", brand: "Staedtler", brandCode: "S", brandColor: "#003A70", model: "Staedtler Noris 120", photo: "../alquiler/img/staedtler-noris-120-amarillo_SpTV.webp", color: "Amarillo", colors: [], info: [["tag", "Tipo", "Lápiz", 1], ["palette", "Color", "Amarillo", 1]], specs: [["Categoría", "Lápiz"], ["Marca", "Staedtler"], ["Descripción", "Lápiz de grafito clásico, con el cuerpo amarillo y negro."], ["Dureza", "HB"], ["Colores", "Amarillo"]], icon: stationeryIcon("#003A70") },
  { cat: "stationery", type: "Lápiz", brand: "Staedtler", brandCode: "S", brandColor: "#003A70", model: "Staedtler lápiz graso blanco", photo: "../alquiler/img/staedtler-lapiz-graso-blanco_SpTV.webp", color: "Blanco", colors: [], info: [["tag", "Tipo", "Lápiz", 1], ["palette", "Color", "Blanco", 1]], specs: [["Categoría", "Lápiz"], ["Marca", "Staedtler"], ["Descripción", "Lápiz graso que escribe sobre vidrio, plástico, metal y superficies lisas, y se borra con un paño."], ["Uso", "No permanente"], ["Colores", "Blanco"]], icon: stationeryIcon("#003A70") },
  { cat: "stationery", type: "Pegamento", brand: "Gorilla", brandCode: "G", brandColor: "#1A1A1A", model: "Gorilla Super Glue", photo: "../alquiler/img/gorilla-super-glue-transparente_SpTV.webp", color: "Transparente", colors: [], info: [["tag", "Tipo", "Pegamento", 1], ["palette", "Color", "Transparente", 1], ["capacity", "Formatos", "3 g · 15 g"]], specs: [["Categoría", "Pegamento"], ["Marca", "Gorilla"], ["Descripción", "Pegamento instantáneo (cianoacrilato) reforzado con caucho, más resistente a golpes."], ["Formato", "3 g · 15 g"], ["Colores", "Transparente"]], icon: stationeryIcon("#1A1A1A") },
  { cat: "stationery", type: "Pegamento", brand: "Goobay", brandCode: "G", brandColor: "#E30613", model: "Goobay pegamento instantáneo", photo: "../alquiler/img/goobay-super-glue-transparente_SpTV.webp", color: "Transparente", colors: [], info: [["tag", "Tipo", "Pegamento", 1], ["palette", "Color", "Transparente", 1], ["capacity", "Formatos", "3 g · 10 g con pincel"]], specs: [["Categoría", "Pegamento"], ["Marca", "Goobay"], ["Descripción", "Pegamento instantáneo (cianoacrilato) para reparaciones rápidas."], ["Formato", "3 g · 10 g con pincel"], ["Colores", "Transparente"]], icon: stationeryIcon("#E30613") },
  { cat: "stationery", type: "Pegamento", brand: "Loctite", brandCode: "L", brandColor: "#D0021B", model: "Loctite Super Glue-3", photo: "../alquiler/img/loctite-super-glue-3-transparente_SpTV.webp", color: "Transparente", colors: [], info: [["tag", "Tipo", "Pegamento", 1], ["palette", "Color", "Transparente", 1], ["capacity", "Formatos", "5 g · 5 g con pincel"]], specs: [["Categoría", "Pegamento"], ["Marca", "Loctite"], ["Descripción", "Pegamento instantáneo (cianoacrilato) de secado en segundos."], ["Formato", "5 g sin pincel · 5 g con pincel"], ["Colores", "Transparente"]], icon: stationeryIcon("#D0021B") },
  { cat: "stationery", type: "Rotulador permanente", brand: "Staedtler", brandCode: "S", brandColor: "#003A70", model: "Staedtler Lumocolor permanent", photo: "../alquiler/img/staedtler-lumocolor-permanent-negro_SpTV.webp", color: "Negro|Azul|Rojo|Verde", colors: [{"name": "Negro", "hex": "#1A1A1A", "photo": "../alquiler/img/staedtler-lumocolor-permanent-negro_SpTV.webp"}, {"name": "Azul", "hex": "#1F4FB8", "photo": "../alquiler/img/staedtler-lumocolor-permanent-azul_SpTV.webp"}, {"name": "Rojo", "hex": "#D0202E", "photo": "../alquiler/img/staedtler-lumocolor-permanent-rojo_SpTV.webp"}, {"name": "Verde", "hex": "#1E8C3A", "photo": "../alquiler/img/staedtler-lumocolor-permanent-verde_SpTV.webp"}], info: [["tag", "Tipo", "Rotulador permanente", 1], ["palette", "Colores", "4 colores", 1], ["capacity", "Formatos", "S 0,4 mm · F 0,6 mm · M 1 mm"]], specs: [["Categoría", "Rotulador permanente"], ["Marca", "Staedtler"], ["Descripción", "Rotulador permanente para casi cualquier superficie (plástico, vidrio, metal, film), de secado rápido."], ["Puntas", "S (0,4 mm) · F (0,6 mm) · M (1 mm)"], ["Colores", "Negro · Azul · Rojo · Verde"]], icon: stationeryIcon("#003A70") },
  { cat: "stationery", type: "Rotulador permanente", brand: "Staedtler", brandCode: "S", brandColor: "#003A70", model: "Staedtler Lumocolor permanent duo", photo: "../alquiler/img/staedtler-lumocolor-duo-negro_SpTV.webp", color: "Negro", colors: [], info: [["tag", "Tipo", "Rotulador permanente", 1], ["palette", "Color", "Negro", 1]], specs: [["Categoría", "Rotulador permanente"], ["Marca", "Staedtler"], ["Descripción", "Rotulador permanente con dos puntas, fina y media, en el mismo rotulador."], ["Puntas", "F (0,6 mm) y M (1,5 mm)"], ["Colores", "Negro"]], icon: stationeryIcon("#003A70") },
  { cat: "stationery", type: "Rotulador permanente", brand: "edding", brandCode: "e", brandColor: "#1A1A1A", model: "edding 330", photo: "../alquiler/img/edding-330-negro_SpTV.webp", color: "Negro|Rojo", colors: [{"name": "Negro", "hex": "#1A1A1A", "photo": "../alquiler/img/edding-330-negro_SpTV.webp"}, {"name": "Rojo", "hex": "#D0202E", "photo": "../alquiler/img/edding-330-rojo_SpTV.webp"}], info: [["tag", "Tipo", "Rotulador permanente", 1], ["palette", "Colores", "2 colores", 1]], specs: [["Categoría", "Rotulador permanente"], ["Marca", "edding"], ["Descripción", "Rotulador permanente de punta biselada para marcar y rotular."], ["Punta", "Biselada 1–5 mm"], ["Colores", "Negro · Rojo"]], icon: stationeryIcon("#1A1A1A") },
  { cat: "stationery", type: "Rotulador permanente", brand: "edding", brandCode: "e", brandColor: "#1A1A1A", model: "edding 500", photo: "../alquiler/img/edding-500-negro_SpTV.webp", color: "Negro|Rojo|Verde", colors: [{"name": "Negro", "hex": "#1A1A1A", "photo": "../alquiler/img/edding-500-negro_SpTV.webp"}, {"name": "Rojo", "hex": "#D0202E", "photo": "../alquiler/img/edding-500-rojo_SpTV.webp"}, {"name": "Verde", "hex": "#1E8C3A", "photo": "../alquiler/img/edding-500-verde_SpTV.webp"}], info: [["tag", "Tipo", "Rotulador permanente", 1], ["palette", "Colores", "3 colores", 1]], specs: [["Categoría", "Rotulador permanente"], ["Marca", "edding"], ["Descripción", "Rotulador permanente de punta biselada ancha para rotular en grande."], ["Punta", "Biselada 2–7 mm"], ["Colores", "Negro · Rojo · Verde"]], icon: stationeryIcon("#1A1A1A") },
  { cat: "stationery", type: "Rotulador permanente", brand: "edding", brandCode: "e", brandColor: "#1A1A1A", model: "edding 400", photo: "../alquiler/img/edding-400-negro_SpTV.webp", color: "Negro", colors: [], info: [["tag", "Tipo", "Rotulador permanente", 1], ["palette", "Color", "Negro", 1]], specs: [["Categoría", "Rotulador permanente"], ["Marca", "edding"], ["Descripción", "Rotulador permanente de punta fina para escribir y marcar con precisión."], ["Punta", "Redonda 1 mm"], ["Colores", "Negro"]], icon: stationeryIcon("#1A1A1A") },
  { cat: "stationery", type: "Rotulador permanente", brand: "Sharpie", brandCode: "S", brandColor: "#1A1A1A", model: "Sharpie Fine", photo: "../alquiler/img/sharpie-fine-negro_SpTV.webp", color: "Negro", colors: [], info: [["tag", "Tipo", "Rotulador permanente", 1], ["palette", "Color", "Negro", 1]], specs: [["Categoría", "Rotulador permanente"], ["Marca", "Sharpie"], ["Descripción", "Rotulador permanente de punta fina, el clásico de Sharpie."], ["Punta", "Fina"], ["Colores", "Negro"]], icon: stationeryIcon("#1A1A1A") },
  { cat: "stationery", type: "Rotulador permanente", brand: "Sharpie", brandCode: "S", brandColor: "#1A1A1A", model: "Sharpie Twin Tip", photo: "../alquiler/img/sharpie-twin-tip-negro_SpTV.webp", color: "Negro", colors: [], info: [["tag", "Tipo", "Rotulador permanente", 1], ["palette", "Color", "Negro", 1]], specs: [["Categoría", "Rotulador permanente"], ["Marca", "Sharpie"], ["Descripción", "Rotulador permanente con dos puntas: fina y ultrafina."], ["Punta", "Doble (fina y ultrafina)"], ["Colores", "Negro"]], icon: stationeryIcon("#1A1A1A") },
  { cat: "stationery", type: "Rotulador permanente", brand: "Pentel", brandCode: "P", brandColor: "#00539F", model: "Pentel N50", photo: "../alquiler/img/pentel-n50-negro_SpTV.webp", color: "Negro", colors: [], info: [["tag", "Tipo", "Rotulador permanente", 1], ["palette", "Color", "Negro", 1]], specs: [["Categoría", "Rotulador permanente"], ["Marca", "Pentel"], ["Descripción", "Rotulador permanente de punta redonda y cuerpo metálico."], ["Punta", "Redonda"], ["Colores", "Negro"]], icon: stationeryIcon("#00539F") },
  { cat: "stationery", type: "Rotulador permanente", brand: "BIC", brandCode: "B", brandColor: "#F28C00", model: "BIC Marking 2000", photo: "", color: "Negro", colors: [], info: [["tag", "Tipo", "Rotulador permanente", 1], ["palette", "Color", "Negro", 1]], specs: [["Categoría", "Rotulador permanente"], ["Marca", "BIC"], ["Descripción", "Rotulador permanente de punta redonda para uso general."], ["Punta", "Redonda 1,7 mm"], ["Colores", "Negro"]], icon: stationeryIcon("#F28C00") },
  { cat: "stationery", type: "Rotulador permanente", brand: "edding", brandCode: "e", brandColor: "#1A1A1A", model: "edding 3000", photo: "../alquiler/img/edding-3000-azul_SpTV.webp", color: "Azul|Negro|Rojo", colors: [{"name": "Azul", "hex": "#1F4FB8", "photo": "../alquiler/img/edding-3000-azul_SpTV.webp"}, {"name": "Negro", "hex": "#1A1A1A", "photo": "../alquiler/img/edding-3000-negro_SpTV.webp"}, {"name": "Rojo", "hex": "#D0202E", "photo": "../alquiler/img/edding-3000-rojo_SpTV.webp"}], info: [["tag", "Tipo", "Rotulador permanente", 1], ["palette", "Colores", "3 colores", 1]], specs: [["Categoría", "Rotulador permanente"], ["Marca", "edding"], ["Descripción", "Rotulador permanente de punta redonda, recargable."], ["Punta", "Redonda 1,5–3 mm"], ["Colores", "Azul · Negro · Rojo"]], icon: stationeryIcon("#1A1A1A") },
  { cat: "stationery", type: "Rotulador permanente", brand: "edding", brandCode: "e", brandColor: "#1A1A1A", model: "edding 751", photo: "../alquiler/img/edding-751-blanco_SpTV.webp", color: "Blanco|Negro", colors: [{"name": "Blanco", "hex": "#FFFFFF", "photo": "../alquiler/img/edding-751-blanco_SpTV.webp"}, {"name": "Negro", "hex": "#1A1A1A", "photo": "../alquiler/img/edding-751-negro_SpTV.webp"}], info: [["tag", "Tipo", "Rotulador permanente", 1], ["palette", "Colores", "2 colores", 1]], specs: [["Categoría", "Rotulador permanente"], ["Marca", "edding"], ["Descripción", "Rotulador de pintura opaca: marca sobre superficies oscuras, metal, vidrio o plástico."], ["Punta", "Redonda 1–2 mm"], ["Tinta", "Pintura opaca"], ["Colores", "Blanco · Negro"]], icon: stationeryIcon("#1A1A1A") },
  { cat: "stationery", type: "Rotulador permanente", brand: "edding", brandCode: "e", brandColor: "#1A1A1A", model: "edding 750", photo: "../alquiler/img/edding-750-blanco_SpTV.webp", color: "Blanco|Negro|Plata", colors: [{"name": "Blanco", "hex": "#FFFFFF", "photo": "../alquiler/img/edding-750-blanco_SpTV.webp"}, {"name": "Negro", "hex": "#1A1A1A", "photo": "../alquiler/img/edding-750-negro_SpTV.webp"}, {"name": "Plata", "hex": "#C0C4C8", "photo": "../alquiler/img/edding-750-plata_SpTV.webp"}], info: [["tag", "Tipo", "Rotulador permanente", 1], ["palette", "Colores", "3 colores", 1]], specs: [["Categoría", "Rotulador permanente"], ["Marca", "edding"], ["Descripción", "Rotulador de pintura opaca y resistente: marca sobre superficies oscuras, metal, vidrio o plástico."], ["Punta", "Redonda 2–4 mm"], ["Tinta", "Pintura opaca"], ["Colores", "Blanco · Negro · Plata"]], icon: stationeryIcon("#1A1A1A") },
  { cat: "stationery", type: "Rotulador permanente", brand: "edding", brandCode: "e", brandColor: "#1A1A1A", model: "edding 300", photo: "../alquiler/img/edding-300-negro_SpTV.webp", color: "Negro", colors: [], info: [["tag", "Tipo", "Rotulador permanente", 1], ["palette", "Color", "Negro", 1]], specs: [["Categoría", "Rotulador permanente"], ["Marca", "edding"], ["Descripción", "Rotulador permanente de punta cónica para marcar en cualquier superficie."], ["Punta", "Cónica 1,5–3 mm"], ["Colores", "Negro"]], icon: stationeryIcon("#1A1A1A") },
  { cat: "stationery", type: "Rotulador no permanente", brand: "Staedtler", brandCode: "S", brandColor: "#003A70", model: "Staedtler Lumocolor non-permanent", photo: "../alquiler/img/staedtler-lumocolor-non-permanent-negro_SpTV.webp", color: "Negro|Rojo|Azul|Verde", colors: [{"name": "Negro", "hex": "#1A1A1A", "photo": "../alquiler/img/staedtler-lumocolor-non-permanent-negro_SpTV.webp"}, {"name": "Rojo", "hex": "#D0202E", "photo": "../alquiler/img/staedtler-lumocolor-non-permanent-rojo_SpTV.webp"}, {"name": "Azul", "hex": "#1F4FB8", "photo": "../alquiler/img/staedtler-lumocolor-non-permanent-azul_SpTV.webp"}, {"name": "Verde", "hex": "#1E8C3A", "photo": "../alquiler/img/staedtler-lumocolor-non-permanent-verde_SpTV.webp"}], info: [["tag", "Tipo", "Rotulador no permanente", 1], ["palette", "Colores", "4 colores", 1], ["capacity", "Formatos", "S 0,4 mm · F 0,6 mm · M 1 mm"]], specs: [["Categoría", "Rotulador no permanente"], ["Marca", "Staedtler"], ["Descripción", "Rotulador al agua para transparencias y superficies lisas: se borra con un paño húmedo."], ["Puntas", "S (0,4 mm) · F (0,6 mm) · M (1 mm)"], ["Colores", "Negro · Rojo · Azul · Verde"]], icon: stationeryIcon("#003A70") },
  { cat: "stationery", type: "Rotulador no permanente", brand: "Pentel", brandCode: "P", brandColor: "#00539F", model: "Pentel Maxiflo", photo: "../alquiler/img/pentel-maxiflo-negro_SpTV.webp", color: "Negro", colors: [], info: [["tag", "Tipo", "Rotulador no permanente", 1], ["palette", "Color", "Negro", 1], ["capacity", "Formatos", "Redonda 4 mm · Biselado fino · Biselado grueso"]], specs: [["Categoría", "Rotulador no permanente"], ["Marca", "Pentel"], ["Descripción", "Rotulador de pizarra blanca con pulsador para avivar la tinta."], ["Modelos", "MWL5SA punta redonda media 4 mm · MWL6 biselado fino · biselado grueso"], ["Colores", "Negro"]], icon: stationeryIcon("#00539F") },
  { cat: "stationery", type: "Rotulador no permanente", brand: "edding", brandCode: "e", brandColor: "#1A1A1A", model: "edding 660", photo: "../alquiler/img/edding-660-negro_SpTV.webp", color: "Negro", colors: [], info: [["tag", "Tipo", "Rotulador no permanente", 1], ["palette", "Color", "Negro", 1]], specs: [["Categoría", "Rotulador no permanente"], ["Marca", "edding"], ["Descripción", "Rotulador de pizarra blanca, borrable en seco."], ["Punta", "Redonda 1,5–3 mm"], ["Colores", "Negro"]], icon: stationeryIcon("#1A1A1A") },
  { cat: "stationery", type: "Rotulador no permanente", brand: "edding", brandCode: "e", brandColor: "#1A1A1A", model: "edding 661", photo: "../alquiler/img/edding-661-negro_SpTV.webp", color: "Negro", colors: [], info: [["tag", "Tipo", "Rotulador no permanente", 1], ["palette", "Color", "Negro", 1]], specs: [["Categoría", "Rotulador no permanente"], ["Marca", "edding"], ["Descripción", "Rotulador de pizarra blanca de punta fina, borrable en seco."], ["Punta", "Redonda 1–2 mm"], ["Colores", "Negro"]], icon: stationeryIcon("#1A1A1A") },
  { cat: "stationery", type: "Rotulador no permanente", brand: "BIC", brandCode: "B", brandColor: "#F28C00", model: "BIC Velleda", photo: "", color: "Negro", colors: [], info: [["tag", "Tipo", "Rotulador no permanente", 1], ["palette", "Color", "Negro", 1]], specs: [["Categoría", "Rotulador no permanente"], ["Marca", "BIC"], ["Descripción", "Rotulador de pizarra blanca, borrable en seco."], ["Punta", "Redonda M"], ["Colores", "Negro"]], icon: stationeryIcon("#F28C00") },
  { cat: "stationery", type: "Rotulador no permanente", brand: "Pilot", brandCode: "P", brandColor: "#00468C", model: "Pilot V Board Master", photo: "../alquiler/img/pilot-v-board-master-negro_SpTV.webp", color: "Negro|Azul", colors: [{"name": "Negro", "hex": "#1A1A1A", "photo": "../alquiler/img/pilot-v-board-master-negro_SpTV.webp"}, {"name": "Azul", "hex": "#1F4FB8", "photo": "../alquiler/img/pilot-v-board-master-azul_SpTV.webp"}], info: [["tag", "Tipo", "Rotulador no permanente", 1], ["palette", "Colores", "2 colores", 1], ["capacity", "Formatos", "M · S"]], specs: [["Categoría", "Rotulador no permanente"], ["Marca", "Pilot"], ["Descripción", "Rotulador de pizarra blanca recargable, con tinta líquida de color uniforme hasta el final."], ["Puntas", "Negro: M y S · Azul: S"], ["Recarga", "Sí (cartucho)"], ["Colores", "Negro · Azul"]], icon: stationeryIcon("#00468C") },
  { cat: "stationery", type: "Rotulador no permanente", brand: "Pilot", brandCode: "P", brandColor: "#00468C", model: "Recambio Pilot V Board Master", photo: "../alquiler/img/pilot-v-board-master-recambio-negro_SpTV.webp", color: "Negro", colors: [], info: [["tag", "Tipo", "Rotulador no permanente", 1], ["palette", "Color", "Negro", 1]], specs: [["Categoría", "Rotulador no permanente"], ["Marca", "Pilot"], ["Descripción", "Cartucho de tinta de recambio para el rotulador Pilot V Board Master."], ["Compatible con", "Pilot V Board Master"], ["Colores", "Negro"]], icon: stationeryIcon("#00468C") },
  { cat: "stationery", type: "Tiza", brand: "Apli", brandCode: "A", brandColor: "#E2001A", model: "Tizas Apli", photo: "../alquiler/img/apli-tizas-blanco_SpTV.webp", color: "Blanco|Colores", colors: [{"name": "Blanco", "hex": "#FFFFFF", "photo": "../alquiler/img/apli-tizas-blanco_SpTV.webp"}, {"name": "Colores", "hex": "#E9A23B", "photo": "../alquiler/img/apli-tizas-colores_SpTV.webp"}], info: [["tag", "Tipo", "Tiza", 1], ["palette", "Colores", "2 colores", 1], ["capacity", "Formatos", "Pequeña · Jumbo"]], specs: [["Categoría", "Tiza"], ["Marca", "Apli"], ["Descripción", "Tizas para pizarra en caja de 10 unidades."], ["Formatos", "Blanca 10 ud (pequeña) · Colores 10 ud (pequeña) · Colores 10 ud (Jumbo)"], ["Colores", "Blanco · Colores"]], icon: stationeryIcon("#E2001A") },
  { cat: "stationery", type: "Tiza", brand: "", brandCode: "", brandColor: "#5C6672", model: "Portatizas metálico", photo: "", color: "Plata", colors: [], info: [["tag", "Tipo", "Tiza", 1], ["palette", "Color", "Plata", 1]], specs: [["Categoría", "Tiza"], ["Descripción", "Portatizas de metal: escribes sin mancharte las manos y aprovechas la tiza hasta el final."], ["Material", "Metal"], ["Colores", "Plata"]], icon: stationeryIcon("#5C6672") },
  { cat: "stationery", type: "Otros", brand: "", brandCode: "", brandColor: "#5C6672", model: "Terciopelo adhesivo", photo: "", color: "Negro", colors: [], info: [["tag", "Tipo", "Otros", 1], ["palette", "Color", "Negro", 1]], specs: [["Categoría", "Otros"], ["Descripción", "Lámina de terciopelo autoadhesiva para forrar, proteger superficies y evitar reflejos y arañazos."], ["Medida", "45 cm × 1 m"], ["Colores", "Negro"]], icon: stationeryIcon("#5C6672") },
  { cat: "stationery", type: "Otros", brand: "", brandCode: "", brandColor: "#5C6672", model: "Cutter profesional", photo: "../alquiler/img/cutter-profesional-azul_SpTV.webp", color: "Azul", colors: [], info: [["tag", "Tipo", "Otros", 1], ["palette", "Color", "Azul", 1]], specs: [["Categoría", "Otros"], ["Descripción", "Cúter profesional de hoja retráctil para cortar cartón, cinta y materiales gruesos."], ["Hoja", "Retráctil"], ["Colores", "Azul"]], icon: stationeryIcon("#5C6672") }
];

// PROTECTION: purchase catalogue, official photos from each brand's website.
// colors: one photo per colour; the dots on the card swap the photo (generated by tools/build_sonido_data.py)
const PROTECTION = [
  { cat: "protection", type: "Bolsa", brand: "Apli", brandCode: "A", brandColor: "#E2001A", model: "Bolsa zipper Apli", photo: "../alquiler/img/apli-bolsa-zipper-transparente_SpTV.webp", color: "Transparente|Kraft", colors: [{"name": "Transparente", "hex": "#E8EEF2", "photo": "../alquiler/img/apli-bolsa-zipper-transparente_SpTV.webp"}, {"name": "Kraft", "hex": "#C49A6C", "photo": "../alquiler/img/apli-bolsa-zipper-kraft_SpTV.webp"}], info: [["tag", "Tipo", "Bolsa", 1], ["palette", "Colores", "2 colores", 1], ["capacity", "Formatos", "A3 · A4 · A5 · A6 · Cheque"]], specs: [["Categoría", "Bolsa"], ["Marca", "Apli"], ["Descripción", "Sobre de plástico con cierre de cremallera para guardar documentos, cables y accesorios a salvo del polvo y la humedad."], ["Tamaños", "A3 · A4 (355 × 255 mm) · A5 (235 × 175 mm) · A6 (168 × 125 mm) · cheque (230 × 130 mm)"], ["Kraft", "En A6 y tamaño cheque"], ["Colores", "Transparente · Kraft"]], icon: protectionIcon("#E2001A") },
  { cat: "protection", type: "Bolsa", brand: "Apli", brandCode: "A", brandColor: "#E2001A", model: "Bolsas de autocierre Apli", photo: "../alquiler/img/apli-bolsa-autocierre-transparente_SpTV.webp", color: "Transparente", colors: [], info: [["tag", "Tipo", "Bolsa", 1], ["palette", "Color", "Transparente", 1], ["capacity", "Formatos", "60 × 80 mm · 100 × 150 mm · 120 × 180 mm · 160 × 220 mm · 180 × 250 mm · 220 × 310 mm · 250 × 350 mm"]], specs: [["Categoría", "Bolsa"], ["Marca", "Apli"], ["Descripción", "Bolsas de plástico con cierre zip a presión, para guardar y separar piezas pequeñas, tornillería o tarjetas."], ["Medidas", "60 × 80 · 100 × 150 · 120 × 180 · 160 × 220 · 180 × 250 · 220 × 310 · 250 × 350 mm"], ["Formato", "Paquete de 100 unidades"], ["Colores", "Transparente"]], icon: protectionIcon("#E2001A") },
  { cat: "protection", type: "Funda / cubierta", brand: "Cap It", brandCode: "C", brandColor: "#5C6672", model: "Cap It", photo: "../alquiler/img/cap-it-transparente_SpTV.webp", color: "Transparente", colors: [], info: [["tag", "Tipo", "Funda / cubierta", 1], ["palette", "Color", "Transparente", 1], ["capacity", "Formatos", "Medium · AKS (pequeño)"]], specs: [["Categoría", "Funda / cubierta"], ["Marca", "Cap It"], ["Descripción", "Tapa protectora elástica que cubre el objetivo o el micrófono y se ajusta sola."], ["Tamaños", "Medium · AKS (pequeño)"], ["Formato", "Pack de 3 unidades"], ["Colores", "Transparente"]], icon: protectionIcon("#5C6672") },
  { cat: "protection", type: "Funda / cubierta", brand: "", brandCode: "", brandColor: "#5C6672", model: "Bolsa de cámara termosellada", photo: "", color: "Transparente", colors: [], info: [["tag", "Tipo", "Funda / cubierta", 1], ["palette", "Color", "Transparente", 1], ["capacity", "Formatos", "0,61 × 0,61 m · 0,80 × 0,80 m · 1,22 × 1,22 m"]], specs: [["Categoría", "Funda / cubierta"], ["Descripción", "Bolsa de polietileno termosellada para cubrir la cámara o el material frente a lluvia, polvo o arena."], ["Medidas", "0,61 × 0,61 m · 0,80 × 0,80 m · 1,22 × 1,22 m"], ["Colores", "Transparente"]], icon: protectionIcon("#5C6672") },
  { cat: "protection", type: "Funda / cubierta", brand: "", brandCode: "", brandColor: "#5C6672", model: "Gorro de ducha", photo: "../alquiler/img/gorro-ducha-transparente_SpTV.webp", color: "Transparente", colors: [], info: [["tag", "Tipo", "Funda / cubierta", 1], ["palette", "Color", "Transparente", 1]], specs: [["Categoría", "Funda / cubierta"], ["Descripción", "El truco clásico de rodaje: cubre la cámara o el micrófono para protegerlos de la lluvia en un momento."], ["Uso", "Protección rápida contra lluvia y polvo"], ["Colores", "Transparente"]], icon: protectionIcon("#5C6672") },
  { cat: "protection", type: "Funda / cubierta", brand: "Tenba", brandCode: "T", brandColor: "#1A1A1A", model: "Tenba Protective Wrap", photo: "../alquiler/img/tenba-protective-wrap-negro_SpTV.webp", color: "Negro", colors: [], info: [["tag", "Tipo", "Funda / cubierta", 1], ["palette", "Color", "Negro", 1], ["capacity", "Formatos", "40 × 40 cm · 50 × 50 cm"]], specs: [["Categoría", "Funda / cubierta"], ["Marca", "Tenba"], ["Descripción", "Envoltorio de tela acolchada con cierre de velcro adaptable: envuelve cámaras, objetivos o portátiles dentro de la mochila."], ["Medidas", "40 × 40 cm · 50 × 50 cm"], ["Cierre", "Velcro adaptable"], ["Colores", "Negro"]], icon: protectionIcon("#1A1A1A") },
  { cat: "protection", type: "Mochila / maletín", brand: "Hama", brandCode: "H", brandColor: "#E2001A", model: "Hama Miami 150", photo: "../alquiler/img/hama-miami-150-negro_SpTV.webp", color: "Negro", colors: [], info: [["tag", "Tipo", "Mochila / maletín", 1], ["palette", "Color", "Negro", 1]], specs: [["Categoría", "Mochila / maletín"], ["Marca", "Hama"], ["Descripción", "Mochila para cámara de foto y vídeo con compartimentos acolchados."], ["Medidas", "22 × 24 cm"], ["Uso", "Cámara de foto / vídeo"], ["Colores", "Negro"]], icon: protectionIcon("#E2001A") },
  { cat: "protection", type: "Mochila / maletín", brand: "Xiaomi", brandCode: "X", brandColor: "#FF6900", model: "Xiaomi Mi Casual Daypack", photo: "../alquiler/img/xiaomi-mochila-tablet-negro_SpTV.webp", color: "Negro", colors: [], info: [["tag", "Tipo", "Mochila / maletín", 1], ["palette", "Color", "Negro", 1]], specs: [["Categoría", "Mochila / maletín"], ["Marca", "Xiaomi"], ["Descripción", "Mochila urbana ligera con compartimento para tablet."], ["Uso", "Tablet y accesorios"], ["Modelo de referencia", "Xiaomi Mi Casual Daypack (10 L, tablet hasta 10\")"], ["Colores", "Negro"]], icon: protectionIcon("#FF6900") },
  { cat: "protection", type: "Mochila / maletín", brand: "HP", brandCode: "HP", brandColor: "#0096D6", model: "Maletín HP Renew Executive 16\"", photo: "../alquiler/img/hp-maletin-portatil-negro_SpTV.webp", color: "Negro", colors: [], info: [["tag", "Tipo", "Mochila / maletín", 1], ["palette", "Color", "Negro", 1]], specs: [["Categoría", "Mochila / maletín"], ["Marca", "HP"], ["Descripción", "Maletín con compartimento acolchado para llevar el portátil y sus accesorios."], ["Uso", "Portátil"], ["Modelo de referencia", "HP Renew Executive 16-inch Laptop Bag (6B8Y2AA)"], ["Colores", "Negro"]], icon: protectionIcon("#0096D6") },
  { cat: "protection", type: "Guantes", brand: "Dirty Rigger", brandCode: "DR", brandColor: "#1A1A1A", model: "Dirty Rigger Comfort Fit", photo: "../alquiler/img/dirty-rigger-comfort-fit-negro_SpTV.webp", color: "Negro", colors: [], info: [["tag", "Tipo", "Guantes", 1], ["palette", "Color", "Negro", 1], ["capacity", "Formatos", "S · M · L · XL · XXL"]], specs: [["Categoría", "Guantes"], ["Marca", "Dirty Rigger"], ["Descripción", "Guantes de técnico (rigger) de dedos completos, cómodos y resistentes para montaje y manejo de material."], ["Tallas", "S · M · L · XL · XXL"], ["Dedos", "Completos"], ["Colores", "Negro"]], icon: protectionIcon("#1A1A1A") },
  { cat: "protection", type: "Guantes", brand: "Dirty Rigger", brandCode: "DR", brandColor: "#1A1A1A", model: "Dirty Rigger Leather Grip", photo: "../alquiler/img/dirty-rigger-leather-grip-negro_SpTV.webp", color: "Negro", colors: [], info: [["tag", "Tipo", "Guantes", 1], ["palette", "Color", "Negro", 1], ["capacity", "Formatos", "S · M · L · XL · XXL"]], specs: [["Categoría", "Guantes"], ["Marca", "Dirty Rigger"], ["Descripción", "Guantes de técnico de dedos completos con palma de piel para un agarre firme de cables, trípodes y estructuras."], ["Tallas", "S · M · L · XL · XXL"], ["Palma", "Piel"], ["Modelo de referencia", "Dirty Rigger Leather Grip 3.0 (dedos completos)"], ["Colores", "Negro"]], icon: protectionIcon("#1A1A1A") },
  { cat: "protection", type: "Antihumedad", brand: "", brandCode: "", brandColor: "#5C6672", model: "Bolsitas de gel de sílice", photo: "", color: "Blanco", colors: [], info: [["tag", "Tipo", "Antihumedad", 1], ["palette", "Color", "Blanco", 1], ["capacity", "Formatos", "1 g · 20 g"]], specs: [["Categoría", "Antihumedad"], ["Descripción", "Bolsitas desecantes que absorben la humedad dentro de maletas, estuches y cajas de material."], ["Formatos", "1 g · 20 g"], ["Colores", "Blanco"]], icon: protectionIcon("#5C6672") },
  { cat: "protection", type: "Lona", brand: "", brandCode: "", brandColor: "#5C6672", model: "Lona de rafia", photo: "", color: "Azul", colors: [], info: [["tag", "Tipo", "Lona", 1], ["palette", "Color", "Azul", 1], ["capacity", "Formatos", "2 × 3 m · 3 × 4 m"]], specs: [["Categoría", "Lona"], ["Descripción", "Lona impermeable de rafia con ojales para cubrir material o hacer de toldo."], ["Medidas", "2 × 3 m · 3 × 4 m"], ["Colores", "Azul"]], icon: protectionIcon("#5C6672") }
];

// ELECTRIC: purchase catalogue, free-licence photos (credits in the page).
// colors: one photo per colour; the dots on the card swap the photo (generated by tools/build_sonido_data.py)
const ELECTRIC = [
  { cat: "electric", type: "Clavija", brand: "", brandCode: "", brandColor: "#5C6672", model: "Clavija Schuko macho de caucho", photo: "../alquiler/img/clavija-schuko-macho-negro_SpTV.webp", color: "Negro", colors: [], info: [["tag", "Tipo", "Clavija", 1], ["palette", "Color", "Negro", 1]], specs: [["Categoría", "Clavija"], ["Descripción", "Clavija Schuko macho de caucho, resistente a golpes y agua, para montar o reparar alargadores y mangueras eléctricas."], ["Tipo", "Macho (enchufe)"], ["Material", "Caucho, impermeable"], ["Intensidad", "16 A"], ["Colores", "Negro"]], icon: electricIcon("#5C6672") },
  { cat: "electric", type: "Clavija", brand: "", brandCode: "", brandColor: "#5C6672", model: "Clavija Schuko hembra de caucho con tapa", photo: "../alquiler/img/clavija-schuko-hembra-negro_SpTV.webp", color: "Negro", colors: [], info: [["tag", "Tipo", "Clavija", 1], ["palette", "Color", "Negro", 1]], specs: [["Categoría", "Clavija"], ["Descripción", "Base Schuko hembra de caucho con tapa protectora, para alargadores de exterior y montajes en rodaje."], ["Tipo", "Hembra (base) con tapa"], ["Material", "Caucho, impermeable"], ["Intensidad", "16 A"], ["Colores", "Negro"]], icon: electricIcon("#5C6672") },
  { cat: "electric", type: "Regleta", brand: "", brandCode: "", brandColor: "#5C6672", model: "Regleta de 6 tomas con interruptor", photo: "", color: "Blanco", colors: [], info: [["tag", "Tipo", "Regleta", 1], ["palette", "Color", "Blanco", 1]], specs: [["Categoría", "Regleta"], ["Descripción", "Regleta de 6 tomas Schuko con interruptor de encendido y apagado."], ["Tomas", "6"], ["Interruptor", "Sí"], ["Colores", "Blanco"]], icon: electricIcon("#5C6672") },
  { cat: "electric", type: "Regleta", brand: "", brandCode: "", brandColor: "#5C6672", model: "Regleta de 5 tomas con interruptor y protector", photo: "", color: "Blanco", colors: [], info: [["tag", "Tipo", "Regleta", 1], ["palette", "Color", "Blanco", 1]], specs: [["Categoría", "Regleta"], ["Descripción", "Regleta de 5 tomas Schuko con interruptor y tomas con protector."], ["Tomas", "5"], ["Interruptor", "Sí"], ["Protección", "Tomas con protector"], ["Colores", "Blanco"]], icon: electricIcon("#5C6672") }
];

// FILMSET: purchase catalogue, official photos (Bluestar, Kleenslate, Apli) and free-licence photos.
// colors: one photo per colour; the dots on the card swap the photo (generated by tools/build_sonido_data.py)
const FILMSET = [
  { cat: "filmset", type: "Claqueta", brand: "", brandCode: "", brandColor: "#5C6672", model: "Claqueta de color", photo: "../alquiler/img/claqueta-color-multicolor_SpTV.webp", color: "Multicolor", colors: [], info: [["tag", "Tipo", "Claqueta", 1], ["palette", "Color", "Multicolor", 1], ["capacity", "Formatos", "Español · Inglés"]], specs: [["Categoría", "Claqueta"], ["Descripción", "Claqueta profesional con palos de colores para sincronizar audio y vídeo y ajustar el color en postproducción."], ["Material", "Madera con imanes y plexiglás"], ["Medidas", "28 × 23 cm"], ["Idioma", "Español o inglés"], ["Colores", "Multicolor"]], icon: filmsetIcon("#5C6672") },
  { cat: "filmset", type: "Claqueta", brand: "", brandCode: "", brandColor: "#5C6672", model: "Claqueta de insertos B/N", photo: "../alquiler/img/claqueta-insertos-negro_SpTV.webp", color: "Negro", colors: [], info: [["tag", "Tipo", "Claqueta", 1], ["palette", "Color", "Negro", 1]], specs: [["Categoría", "Claqueta"], ["Descripción", "Claqueta pequeña en blanco y negro para planos de detalle (insertos) y espacios reducidos."], ["Palos", "Blanco y negro"], ["Colores", "Negro"]], icon: filmsetIcon("#5C6672") },
  { cat: "filmset", type: "Claqueta", brand: "Kleenslate", brandCode: "K", brandColor: "#1A1A1A", model: "Borrador de claqueta Kleenslate", photo: "../alquiler/img/kleenslate-borrador-negro_SpTV.webp", color: "Negro", colors: [], info: [["tag", "Tipo", "Claqueta", 1], ["palette", "Color", "Negro", 1]], specs: [["Categoría", "Claqueta"], ["Marca", "Kleenslate"], ["Descripción", "Borrador para claquetas de rotulador, pensado para limpiar la pizarra de forma rápida durante el rodaje."], ["Uso", "Claquetas y pizarras blancas"], ["Colores", "Negro"]], icon: filmsetIcon("#1A1A1A") },
  { cat: "filmset", type: "Rotulación", brand: "Apli", brandCode: "A", brandColor: "#E2001A", model: "Letras adhesivas Apli", photo: "../alquiler/img/apli-letras-adhesivas-negro_SpTV.webp", color: "Negro", colors: [], info: [["tag", "Tipo", "Rotulación", 1], ["palette", "Color", "Negro", 1], ["capacity", "Formatos", "10 mm · 15 mm · 20 mm · 25 mm · 30 mm"]], specs: [["Categoría", "Rotulación"], ["Marca", "Apli"], ["Descripción", "Letras y números adhesivos negros para rotular claquetas, cajas, flight cases y material."], ["Alturas", "10 · 15 · 20 · 25 · 30 mm"], ["Color", "Negro"], ["Colores", "Negro"]], icon: filmsetIcon("#E2001A") },
  { cat: "filmset", type: "Ocular", brand: "Bluestar", brandCode: "B", brandColor: "#1F5FD0", model: "Bluestar ocular oval", photo: "../alquiler/img/bluestar-ocular-amarillo_SpTV.webp", color: "Amarillo|Azul|Gris|Naranja|Rojo|Verde", colors: [{"name": "Amarillo", "hex": "#F2C200", "photo": "../alquiler/img/bluestar-ocular-amarillo_SpTV.webp"}, {"name": "Azul", "hex": "#1F5FD0", "photo": "../alquiler/img/bluestar-ocular-azul_SpTV.webp"}, {"name": "Gris", "hex": "#8A8F96", "photo": "../alquiler/img/bluestar-ocular-gris_SpTV.webp"}, {"name": "Naranja", "hex": "#F07A1A", "photo": "../alquiler/img/bluestar-ocular-naranja_SpTV.webp"}, {"name": "Rojo", "hex": "#D0202E", "photo": "../alquiler/img/bluestar-ocular-rojo_SpTV.webp"}, {"name": "Verde", "hex": "#1E9C46", "photo": "../alquiler/img/bluestar-ocular-verde_SpTV.webp"}], info: [["tag", "Tipo", "Ocular", 1], ["palette", "Colores", "6 colores", 1], ["capacity", "Formatos", "Small · Large · Extra Large"]], specs: [["Categoría", "Ocular"], ["Marca", "Bluestar"], ["Descripción", "Almohadilla ocular de piel sintética (gamuza) para el visor de la cámara: más cómoda e higiénica, y los colores identifican a cada operador."], ["Forma", "Oval"], ["Tamaños", "Small (6 colores) · Large y Extra Large (azul, rojo y verde)"], ["Colores", "Amarillo · Azul · Gris · Naranja · Rojo · Verde"]], icon: filmsetIcon("#1F5FD0") },
  { cat: "filmset", type: "Talco", brand: "", brandCode: "", brandColor: "#5C6672", model: "Dispensador de talco (biberón)", photo: "", color: "Blanco", colors: [], info: [["tag", "Tipo", "Talco", 1], ["palette", "Color", "Blanco", 1]], specs: [["Categoría", "Talco"], ["Descripción", "Bote dosificador tipo biberón para aplicar talco en las vías del travelling y en las ruedas de la dolly."], ["Capacidad", "250 ml"], ["Colores", "Blanco"]], icon: filmsetIcon("#5C6672") },
  { cat: "filmset", type: "Talco", brand: "", brandCode: "", brandColor: "#5C6672", model: "Talco industrial", photo: "", color: "Blanco", colors: [], info: [["tag", "Tipo", "Talco", 1], ["palette", "Color", "Blanco", 1]], specs: [["Categoría", "Talco"], ["Descripción", "Talco industrial para que la dolly ruede suave y sin ruido sobre las vías."], ["Formato", "1 kg"], ["Colores", "Blanco"]], icon: filmsetIcon("#5C6672") }
];

// DULLING: purchase catalogue, official photos from each brand's website.
// colors: one photo per colour; the dots on the card swap the photo (generated by tools/build_sonido_data.py)
const DULLING = [
  { cat: "dulling", type: "Spray matabrillos", brand: "Kenro", brandCode: "K", brandColor: "#1A1A1A", model: "Kenro spray matabrillos", photo: "../alquiler/img/kenro-matabrillos-mate_SpTV.webp", color: "Mate|Negro|Blanco", colors: [{"name": "Mate", "hex": "#D9DDE2", "photo": "../alquiler/img/kenro-matabrillos-mate_SpTV.webp"}, {"name": "Negro", "hex": "#1A1A1A", "photo": "../alquiler/img/kenro-matabrillos-negro_SpTV.webp"}, {"name": "Blanco", "hex": "#FFFFFF", "photo": "../alquiler/img/kenro-matabrillos-blanco_SpTV.webp"}], info: [["tag", "Tipo", "Spray matabrillos", 1], ["palette", "Colores", "3 colores", 1]], specs: [["Categoría", "Spray matabrillos"], ["Marca", "Kenro"], ["Descripción", "Spray que elimina brillos y reflejos de objetos en plató; se retira fácilmente después."], ["Versiones", "Full Matte (transparente mate) · Black (negro) · White (blanco)"], ["Formato", "Spray de 400 ml"], ["Colores", "Mate · Negro · Blanco"]], icon: dullingIcon("#1A1A1A") },
  { cat: "dulling", type: "Spray matabrillos", brand: "K-Line", brandCode: "K", brandColor: "#5C6672", model: "K-Line Matt", photo: "../alquiler/img/k-line-matt-mate_SpTV.webp", color: "Mate", colors: [], info: [["tag", "Tipo", "Spray matabrillos", 1], ["palette", "Color", "Mate", 1]], specs: [["Categoría", "Spray matabrillos"], ["Marca", "K-Line"], ["Descripción", "Spray matabrillos de acabado mate para quitar reflejos en objetos y superficies durante el rodaje."], ["Formato", "Spray de 400 ml"], ["Colores", "Mate"]], icon: dullingIcon("#5C6672") }
];

// LIGHTING: purchase catalogue, official photos from each brand's website.
// colors: one photo per colour; the dots on the card swap the photo (generated by tools/build_sonido_data.py)
const LIGHTING = [
  { cat: "lighting", type: "Gelatina", brand: "Rosco", brandCode: "R", brandColor: "#E2001A", model: "Rosco E-Colour+", photo: "../alquiler/img/rosco-e-colour-multicolor_SpTV.webp", color: "Multicolor", colors: [], info: [["tag", "Tipo", "Gelatina", 1], ["palette", "Color", "Multicolor", 1], ["capacity", "Formatos", "Hoja · Rollo"]], specs: [["Categoría", "Gelatina"], ["Marca", "Rosco"], ["Descripción", "Filtros de color (gelatinas) para corregir y dar color a la luz de los focos."], ["Formatos", "Hoja o rollo"], ["Colores", "Consultar modelos"], ["Colores", "Multicolor"]], icon: lightingIcon("#E2001A") },
  { cat: "lighting", type: "Gelatina", brand: "Rosco", brandCode: "R", brandColor: "#E2001A", model: "Rosco Supergel", photo: "../alquiler/img/rosco-supergel-multicolor_SpTV.webp", color: "Multicolor", colors: [], info: [["tag", "Tipo", "Gelatina", 1], ["palette", "Color", "Multicolor", 1], ["capacity", "Formatos", "Hoja · Rollo"]], specs: [["Categoría", "Gelatina"], ["Marca", "Rosco"], ["Descripción", "Gelatinas de color resistentes al calor, para iluminación de espectáculo y rodaje."], ["Formatos", "Hoja o rollo"], ["Colores", "Consultar modelos"], ["Colores", "Multicolor"]], icon: lightingIcon("#E2001A") },
  { cat: "lighting", type: "Gelatina", brand: "Rosco", brandCode: "R", brandColor: "#E2001A", model: "Rosco Cinelux", photo: "../alquiler/img/rosco-cinelux-multicolor_SpTV.webp", color: "Multicolor", colors: [], info: [["tag", "Tipo", "Gelatina", 1], ["palette", "Color", "Multicolor", 1], ["capacity", "Formatos", "Hoja · Rollo"]], specs: [["Categoría", "Gelatina"], ["Marca", "Rosco"], ["Descripción", "Gelatinas de color y corrección pensadas para cine y televisión."], ["Formatos", "Hoja o rollo"], ["Colores", "Consultar modelos"], ["Colores", "Multicolor"]], icon: lightingIcon("#E2001A") },
  { cat: "lighting", type: "Control de luz", brand: "Rosco", brandCode: "R", brandColor: "#E2001A", model: "Rosco Cinefoil", photo: "../alquiler/img/rosco-cinefoil-negro_SpTV.webp", color: "Negro", colors: [], info: [["tag", "Tipo", "Control de luz", 1], ["palette", "Color", "Negro", 1]], specs: [["Categoría", "Control de luz"], ["Marca", "Rosco"], ["Descripción", "Papel de aluminio negro mate para tapar fugas de luz, hacer viseras y controlar la luz de los focos."], ["Medida", "61 cm × 7,62 m"], ["Acabado", "Negro mate"], ["Colores", "Negro"]], icon: lightingIcon("#E2001A") },
  { cat: "lighting", type: "Control de luz", brand: "Apli", brandCode: "A", brandColor: "#E2001A", model: "Papel kraft negro Apli", photo: "../alquiler/img/apli-papel-kraft-negro-negro_SpTV.webp", color: "Negro", colors: [], info: [["tag", "Tipo", "Control de luz", 1], ["palette", "Color", "Negro", 1]], specs: [["Categoría", "Control de luz"], ["Marca", "Apli"], ["Descripción", "Rollo de papel kraft negro opaco para tapar ventanas, cubrir superficies y bloquear la luz."], ["Medida", "1 × 25 m"], ["Gramaje", "70 g"], ["Colores", "Negro"]], icon: lightingIcon("#E2001A") }
];

// EFFECTS: purchase catalogue, official photos from each brand's website.
// colors: one photo per colour; the dots on the card swap the photo (generated by tools/build_sonido_data.py)
const EFFECTS = [
  { cat: "effects", type: "Spray de efectos", brand: "Dirty Down", brandCode: "D", brandColor: "#3B3B3B", model: "Dirty Down spray de efectos", photo: "../alquiler/img/dirty-down-envejecimiento_SpTV.webp", color: "Envejecimiento|Nicotina|Rubio ceniza|Marrón|Óxido", colors: [{"name": "Envejecimiento", "hex": "#8A7A5C", "photo": "../alquiler/img/dirty-down-envejecimiento_SpTV.webp"}, {"name": "Nicotina", "hex": "#C9A23A", "photo": "../alquiler/img/dirty-down-nicotina_SpTV.webp"}, {"name": "Rubio ceniza", "hex": "#B9A98A", "photo": "../alquiler/img/dirty-down-rubio-ceniza_SpTV.webp"}, {"name": "Marrón", "hex": "#6B4A2B", "photo": "../alquiler/img/dirty-down-marron_SpTV.webp"}, {"name": "Óxido", "hex": "#A4502A", "photo": "../alquiler/img/dirty-down-oxido_SpTV.webp"}], info: [["tag", "Tipo", "Spray de efectos", 1], ["palette", "Colores", "5 colores", 1]], specs: [["Categoría", "Spray de efectos"], ["Marca", "Dirty Down"], ["Descripción", "Sprays de atrezzo para ensuciar, envejecer y dar desgaste a decorados, vestuario y objetos; se pueden quitar con agua."], ["Efectos", "Envejecimiento · Nicotina · Rubio ceniza · Marrón · Óxido"], ["Colores", "Envejecimiento · Nicotina · Rubio ceniza · Marrón · Óxido"]], icon: effectsIcon("#3B3B3B") },
  { cat: "effects", type: "Tabaco de atrezzo", brand: "Honeyrose", brandCode: "H", brandColor: "#7A4E2D", model: "Tabaco de atrezzo Honeyrose", photo: "../alquiler/img/honeyrose-tabaco-marron_SpTV.webp", color: "Marrón", colors: [], info: [["tag", "Tipo", "Tabaco de atrezzo", 1], ["palette", "Color", "Marrón", 1]], specs: [["Categoría", "Tabaco de atrezzo"], ["Marca", "Honeyrose"], ["Descripción", "Cigarrillos y tabaco de hierbas sin nicotina ni tabaco, para escenas en las que los actores fuman."], ["Composición", "Hierbas, sin tabaco ni nicotina"], ["Colores", "Marrón"]], icon: effectsIcon("#7A4E2D") }
];

// CLEANING: purchase catalogue, official photos from each brand's website and free-licence photos.
// colors: one photo per colour; the dots on the card swap the photo (generated by tools/build_sonido_data.py)
const CLEANING = [
  { cat: "cleaning", type: "Aire comprimido", brand: "Ewent", brandCode: "E", brandColor: "#1F5FD0", model: "Aire comprimido Ewent", photo: "../alquiler/img/ewen-aire-comprimido-unico_SpTV.webp", color: "Único", colors: [], info: [["tag", "Tipo", "Aire comprimido", 1], ["palette", "Color", "Único", 1]], specs: [["Categoría", "Aire comprimido"], ["Marca", "Ewent"], ["Descripción", "Bote de aire comprimido con válvula para quitar el polvo de teclados, cámaras y electrónica."], ["Capacidad", "400 ml"], ["Válvula", "Sí"], ["Colores", "Único"]], icon: cleaningIcon("#1F5FD0") },
  { cat: "cleaning", type: "Aire comprimido", brand: "Kenro", brandCode: "K", brandColor: "#1A1A1A", model: "Aire comprimido Kenro", photo: "../alquiler/img/kenro-aire-comprimido-unico_SpTV.webp", color: "Único", colors: [], info: [["tag", "Tipo", "Aire comprimido", 1], ["palette", "Color", "Único", 1], ["capacity", "Formatos", "Sin válvula · Con válvula · Recarga + válvula"]], specs: [["Categoría", "Aire comprimido"], ["Marca", "Kenro"], ["Descripción", "Aire comprimido para limpiar ópticas, cámaras y electrónica sin tocarlas."], ["Formatos", "Sin válvula 360 ml · con válvula · recarga + válvula (blíster) 360 ml"], ["Colores", "Único"]], icon: cleaningIcon("#1A1A1A") },
  { cat: "cleaning", type: "Aire comprimido", brand: "Kenro", brandCode: "K", brandColor: "#1A1A1A", model: "Válvula Kenro", photo: "../alquiler/img/kenro-valvula-unico_SpTV.webp", color: "Único", colors: [], info: [["tag", "Tipo", "Aire comprimido", 1], ["palette", "Color", "Único", 1]], specs: [["Categoría", "Aire comprimido"], ["Marca", "Kenro"], ["Descripción", "Válvula de gatillo para los botes de aire comprimido Kenro: dosifica el aire con precisión."], ["Compatible con", "Aire comprimido Kenro"], ["Colores", "Único"]], icon: cleaningIcon("#1A1A1A") },
  { cat: "cleaning", type: "Aire comprimido", brand: "Kenro", brandCode: "K", brandColor: "#1A1A1A", model: "Kenro Dust Vac Kit", photo: "../alquiler/img/kenro-dust-vac-kit-unico_SpTV.webp", color: "Único", colors: [], info: [["tag", "Tipo", "Aire comprimido", 1], ["palette", "Color", "Único", 1]], specs: [["Categoría", "Aire comprimido"], ["Marca", "Kenro"], ["Descripción", "Kit de aire comprimido de Kenro con válvula, para limpieza de material fotográfico y electrónico."], ["Contenido", "Kit Dust Vac"], ["Colores", "Único"]], icon: cleaningIcon("#1A1A1A") },
  { cat: "cleaning", type: "Aire comprimido", brand: "", brandCode: "", brandColor: "#5C6672", model: "Soplador de aire con batería", photo: "", color: "Único", colors: [], info: [["tag", "Tipo", "Aire comprimido", 1], ["palette", "Color", "Único", 1]], specs: [["Categoría", "Aire comprimido"], ["Descripción", "Soplador eléctrico recargable: sustituye a los botes de aire comprimido para quitar el polvo de equipos y teclados."], ["Potencia", "100 W · 110.000 rpm"], ["Incluye", "Accesorios de limpieza"], ["Colores", "Único"]], icon: cleaningIcon("#5C6672") },
  { cat: "cleaning", type: "Gel hidroalcohólico", brand: "", brandCode: "", brandColor: "#5C6672", model: "Gel hidroalcohólico", photo: "../alquiler/img/gel-hidroalcoholico-unico_SpTV.webp", color: "Único", colors: [], info: [["tag", "Tipo", "Gel hidroalcohólico", 1], ["palette", "Color", "Único", 1], ["capacity", "Formatos", "100 ml · 500 ml"]], specs: [["Categoría", "Gel hidroalcohólico"], ["Descripción", "Gel desinfectante de manos sin aclarado."], ["Formatos", "De bolsillo 100 ml · con dispensador 500 ml"], ["Colores", "Único"]], icon: cleaningIcon("#5C6672") },
  { cat: "cleaning", type: "Líquido limpiador", brand: "tesa", brandCode: "t", brandColor: "#E2001A", model: "tesa limpiador de adhesivos", photo: "../alquiler/img/tesa-limpiador-adhesivo-unico_SpTV.webp", color: "Único", colors: [], info: [["tag", "Tipo", "Líquido limpiador", 1], ["palette", "Color", "Único", 1]], specs: [["Categoría", "Líquido limpiador"], ["Marca", "tesa"], ["Descripción", "Elimina restos de cinta adhesiva, etiquetas y pegamento de superficies."], ["Capacidad", "200 ml"], ["Colores", "Único"]], icon: cleaningIcon("#E2001A") },
  { cat: "cleaning", type: "Líquido limpiador", brand: "Rosco", brandCode: "R", brandColor: "#E2001A", model: "Rosco limpiador de lentes", photo: "../alquiler/img/rosco-lens-cleaner-unico_SpTV.webp", color: "Único", colors: [], info: [["tag", "Tipo", "Líquido limpiador", 1], ["palette", "Color", "Único", 1]], specs: [["Categoría", "Líquido limpiador"], ["Marca", "Rosco"], ["Descripción", "Líquido limpiador para ópticas y filtros de iluminación y cámara."], ["Capacidad", "60 ml"], ["Colores", "Único"]], icon: cleaningIcon("#E2001A") },
  { cat: "cleaning", type: "Líquido limpiador", brand: "Photographic Solutions", brandCode: "PS", brandColor: "#1A1A1A", model: "Eclipse (Photographic Solutions)", photo: "../alquiler/img/eclipse-photosol-unico_SpTV.webp", color: "Único", colors: [], info: [["tag", "Tipo", "Líquido limpiador", 1], ["palette", "Color", "Único", 1]], specs: [["Categoría", "Líquido limpiador"], ["Marca", "Photographic Solutions"], ["Descripción", "Líquido de limpieza de sensores y ópticas de secado ultrarrápido, sin residuos."], ["Capacidad", "59 ml"], ["Colores", "Único"]], icon: cleaningIcon("#1A1A1A") },
  { cat: "cleaning", type: "Líquido limpiador", brand: "Pancro", brandCode: "P", brandColor: "#1A1A1A", model: "Pancro limpiador de lentes", photo: "../alquiler/img/pancro-lens-cleaner-unico_SpTV.webp", color: "Único", colors: [], info: [["tag", "Tipo", "Líquido limpiador", 1], ["palette", "Color", "Único", 1]], specs: [["Categoría", "Líquido limpiador"], ["Marca", "Pancro"], ["Descripción", "Limpiador profesional de ópticas de cine, sin residuos ni rayas."], ["Capacidad", "118 ml"], ["Colores", "Único"]], icon: cleaningIcon("#1A1A1A") },
  { cat: "cleaning", type: "Líquido limpiador", brand: "Hansaplast", brandCode: "H", brandColor: "#003B7E", model: "Alcohol 96º Hansaplast", photo: "", color: "Único", colors: [], info: [["tag", "Tipo", "Líquido limpiador", 1], ["palette", "Color", "Único", 1]], specs: [["Categoría", "Líquido limpiador"], ["Marca", "Hansaplast"], ["Descripción", "Alcohol etílico de 96º."], ["Capacidad", "250 ml"], ["Colores", "Único"]], icon: cleaningIcon("#003B7E") },
  { cat: "cleaning", type: "Líquido limpiador", brand: "", brandCode: "", brandColor: "#5C6672", model: "Alcohol isopropílico", photo: "../alquiler/img/alcohol-isopropilico-unico_SpTV.webp", color: "Único", colors: [], info: [["tag", "Tipo", "Líquido limpiador", 1], ["palette", "Color", "Único", 1]], specs: [["Categoría", "Líquido limpiador"], ["Descripción", "Alcohol isopropílico para limpiar electrónica, contactos y placas: se evapora rápido y no deja residuos."], ["Capacidad", "1 L"], ["Colores", "Único"]], icon: cleaningIcon("#5C6672") },
  { cat: "cleaning", type: "Líquido limpiador", brand: "Rain-X", brandCode: "R", brandColor: "#0057B8", model: "Rain-X antivaho", photo: "../alquiler/img/rain-x-antivaho-unico_SpTV.webp", color: "Único", colors: [], info: [["tag", "Tipo", "Líquido limpiador", 1], ["palette", "Color", "Único", 1]], specs: [["Categoría", "Líquido limpiador"], ["Marca", "Rain-X"], ["Descripción", "Tratamiento que evita que se empañen cristales y visores."], ["Capacidad", "200 ml"], ["Colores", "Único"]], icon: cleaningIcon("#0057B8") },
  { cat: "cleaning", type: "Líquido limpiador", brand: "Rain-X", brandCode: "R", brandColor: "#0057B8", model: "Rain-X antilluvia", photo: "../alquiler/img/rain-x-antilluvia-unico_SpTV.webp", color: "Único", colors: [], info: [["tag", "Tipo", "Líquido limpiador", 1], ["palette", "Color", "Único", 1]], specs: [["Categoría", "Líquido limpiador"], ["Marca", "Rain-X"], ["Descripción", "Repelente de agua para cristales: la lluvia resbala y no se queda pegada."], ["Capacidad", "200 ml"], ["Colores", "Único"]], icon: cleaningIcon("#0057B8") },
  { cat: "cleaning", type: "Spray", brand: "Apli", brandCode: "A", brandColor: "#E2001A", model: "Spray limpiador de pantallas Apli", photo: "../alquiler/img/apli-spray-pantallas-unico_SpTV.webp", color: "Único", colors: [], info: [["tag", "Tipo", "Spray", 1], ["palette", "Color", "Único", 1]], specs: [["Categoría", "Spray"], ["Marca", "Apli"], ["Descripción", "Spray para limpiar pantallas, monitores y superficies de plástico."], ["Capacidad", "250 ml"], ["Colores", "Único"]], icon: cleaningIcon("#E2001A") },
  { cat: "cleaning", type: "Spray", brand: "Soudal", brandCode: "S", brandColor: "#E30613", model: "Soudal spray de silicona", photo: "../alquiler/img/soudal-spray-silicona-unico_SpTV.webp", color: "Único", colors: [], info: [["tag", "Tipo", "Spray", 1], ["palette", "Color", "Único", 1]], specs: [["Categoría", "Spray"], ["Marca", "Soudal"], ["Descripción", "Lubricante de silicona que protege y hace deslizar piezas de plástico, goma y metal."], ["Capacidad", "400 ml"], ["Colores", "Único"]], icon: cleaningIcon("#E30613") },
  { cat: "cleaning", type: "Spray", brand: "CRC", brandCode: "C", brandColor: "#E2001A", model: "CRC limpiacontactos", photo: "", color: "Único", colors: [], info: [["tag", "Tipo", "Spray", 1], ["palette", "Color", "Único", 1]], specs: [["Categoría", "Spray"], ["Marca", "CRC"], ["Descripción", "Limpiador de contactos eléctricos y electrónicos, de secado rápido."], ["Capacidad", "250 ml"], ["Colores", "Único"]], icon: cleaningIcon("#E2001A") },
  { cat: "cleaning", type: "Spray", brand: "3 en 1", brandCode: "3", brandColor: "#00539F", model: "3 en 1 limpiacontactos", photo: "../alquiler/img/3en1-contactos-unico_SpTV.webp", color: "Único", colors: [], info: [["tag", "Tipo", "Spray", 1], ["palette", "Color", "Único", 1]], specs: [["Categoría", "Spray"], ["Marca", "3 en 1"], ["Descripción", "Spray limpiador de contactos eléctricos."], ["Capacidad", "250 ml"], ["Colores", "Único"]], icon: cleaningIcon("#00539F") },
  { cat: "cleaning", type: "Spray", brand: "WD-40", brandCode: "W", brandColor: "#1D428A", model: "WD-40 multiusos", photo: "../alquiler/img/wd40-unico_SpTV.webp", color: "Único", colors: [], info: [["tag", "Tipo", "Spray", 1], ["palette", "Color", "Único", 1], ["capacity", "Formatos", "200 ml · 400 ml"]], specs: [["Categoría", "Spray"], ["Marca", "WD-40"], ["Descripción", "Lubricante multiusos: afloja, protege contra el óxido y desplaza la humedad."], ["Formatos", "200 ml · 400 ml"], ["Colores", "Único"]], icon: cleaningIcon("#1D428A") },
  { cat: "cleaning", type: "Spray", brand: "3 en 1", brandCode: "3", brandColor: "#00539F", model: "3 en 1 lubricante", photo: "../alquiler/img/3en1-lubricante-unico_SpTV.webp", color: "Único", colors: [], info: [["tag", "Tipo", "Spray", 1], ["palette", "Color", "Único", 1]], specs: [["Categoría", "Spray"], ["Marca", "3 en 1"], ["Descripción", "Aceite lubricante en spray para mecanismos, bisagras y herramientas."], ["Capacidad", "200 ml"], ["Colores", "Único"]], icon: cleaningIcon("#00539F") },
  { cat: "cleaning", type: "Spray", brand: "Ewent", brandCode: "E", brandColor: "#1F5FD0", model: "Ewent alcohol isopropílico en spray", photo: "../alquiler/img/ewen-alcohol-isopropilico-spray-unico_SpTV.webp", color: "Único", colors: [], info: [["tag", "Tipo", "Spray", 1], ["palette", "Color", "Único", 1]], specs: [["Categoría", "Spray"], ["Marca", "Ewent"], ["Descripción", "Alcohol isopropílico en spray para limpiar electrónica y contactos."], ["Capacidad", "400 ml"], ["Colores", "Único"]], icon: cleaningIcon("#1F5FD0") },
  { cat: "cleaning", type: "Spray", brand: "Sanytol", brandCode: "S", brandColor: "#00A3E0", model: "Sanytol spray desinfectante", photo: "../alquiler/img/sanytol-spray-unico_SpTV.webp", color: "Único", colors: [], info: [["tag", "Tipo", "Spray", 1], ["palette", "Color", "Único", 1]], specs: [["Categoría", "Spray"], ["Marca", "Sanytol"], ["Descripción", "Desinfectante en spray para superficies y tejidos."], ["Capacidad", "750 ml"], ["Colores", "Único"]], icon: cleaningIcon("#00A3E0") },
  { cat: "cleaning", type: "Gamuza / paño", brand: "Zeiss", brandCode: "Z", brandColor: "#0072EF", model: "Gamuza de microfibra Zeiss", photo: "../alquiler/img/zeiss-gamuza-unico_SpTV.webp", color: "Único", colors: [], info: [["tag", "Tipo", "Gamuza / paño", 1], ["palette", "Color", "Único", 1]], specs: [["Categoría", "Gamuza / paño"], ["Marca", "Zeiss"], ["Descripción", "Gamuza de microfibra para limpiar ópticas, gafas y pantallas."], ["Medida", "30 × 40 cm"], ["Colores", "Único"]], icon: cleaningIcon("#0072EF") },
  { cat: "cleaning", type: "Gamuza / paño", brand: "Hama", brandCode: "H", brandColor: "#E2001A", model: "Hama gamuza pocket de neopreno", photo: "../alquiler/img/hama-gamuza-pocket-unico_SpTV.webp", color: "Único", colors: [], info: [["tag", "Tipo", "Gamuza / paño", 1], ["palette", "Color", "Único", 1]], specs: [["Categoría", "Gamuza / paño"], ["Marca", "Hama"], ["Descripción", "Gamuza de limpieza en funda de neopreno con mosquetón, para llevarla colgada."], ["Medida", "15 × 15 cm"], ["Colores", "Único"]], icon: cleaningIcon("#E2001A") },
  { cat: "cleaning", type: "Gamuza / paño", brand: "Hama", brandCode: "H", brandColor: "#E2001A", model: "Hama gamuza especial lentes", photo: "../alquiler/img/hama-gamuza-lentes-unico_SpTV.webp", color: "Único", colors: [], info: [["tag", "Tipo", "Gamuza / paño", 1], ["palette", "Color", "Único", 1]], specs: [["Categoría", "Gamuza / paño"], ["Marca", "Hama"], ["Descripción", "Gamuza de microfibra especial para objetivos y filtros."], ["Medida", "15 × 15 cm"], ["Colores", "Único"]], icon: cleaningIcon("#E2001A") },
  { cat: "cleaning", type: "Gamuza / paño", brand: "", brandCode: "", brandColor: "#5C6672", model: "Gamuza de microfibra premium", photo: "", color: "Gris|Negro", colors: [], info: [["tag", "Tipo", "Gamuza / paño", 1], ["palette", "Colores", "2 colores", 1]], specs: [["Categoría", "Gamuza / paño"], ["Descripción", "Gamuza de microfibra de alta calidad para ópticas, pantallas y equipos."], ["Medida", "30 × 30 cm"], ["Colores", "Gris · Negro"]], icon: cleaningIcon("#5C6672") },
  { cat: "cleaning", type: "Gamuza / paño", brand: "Foogy", brandCode: "F", brandColor: "#1A1A1A", model: "Foogy paño antivaho", photo: "../alquiler/img/foogy-pano-antivaho-unico_SpTV.webp", color: "Único", colors: [], info: [["tag", "Tipo", "Gamuza / paño", 1], ["palette", "Color", "Único", 1]], specs: [["Categoría", "Gamuza / paño"], ["Marca", "Foogy"], ["Descripción", "Paño que evita que las gafas se empañen (mascarilla, frío, lluvia)."], ["Uso", "Gafas y visores"], ["Colores", "Único"]], icon: cleaningIcon("#1A1A1A") },
  { cat: "cleaning", type: "Gamuza / paño", brand: "Kimberly-Clark", brandCode: "K", brandColor: "#1D4F91", model: "Kimtech Science 05511", photo: "../alquiler/img/kimtech-science-05511-unico_SpTV.webp", color: "Único", colors: [], info: [["tag", "Tipo", "Gamuza / paño", 1], ["palette", "Color", "Único", 1]], specs: [["Categoría", "Gamuza / paño"], ["Marca", "Kimberly-Clark"], ["Descripción", "Toallitas de precisión que no sueltan pelusa, para limpiar ópticas, sensores y piezas delicadas."], ["Formato", "Caja de 286 unidades"], ["Colores", "Único"]], icon: cleaningIcon("#1D4F91") },
  { cat: "cleaning", type: "Gamuza / paño", brand: "", brandCode: "", brandColor: "#5C6672", model: "Trapo de microfibra", photo: "../alquiler/img/trapo-microfibra-unico_SpTV.webp", color: "Único", colors: [], info: [["tag", "Tipo", "Gamuza / paño", 1], ["palette", "Color", "Único", 1]], specs: [["Categoría", "Gamuza / paño"], ["Descripción", "Trapo de microfibra para limpieza general de equipos y superficies."], ["Material", "Microfibra"], ["Colores", "Único"]], icon: cleaningIcon("#5C6672") },
  { cat: "cleaning", type: "Toallitas", brand: "Rosco", brandCode: "R", brandColor: "#E2001A", model: "Rosco tissues para lentes", photo: "../alquiler/img/rosco-lens-tissue-unico_SpTV.webp", color: "Único", colors: [], info: [["tag", "Tipo", "Toallitas", 1], ["palette", "Color", "Único", 1]], specs: [["Categoría", "Toallitas"], ["Marca", "Rosco"], ["Descripción", "Papel especial para limpiar lentes sin rayarlas."], ["Formato", "100 hojas"], ["Colores", "Único"]], icon: cleaningIcon("#E2001A") },
  { cat: "cleaning", type: "Toallitas", brand: "Hama", brandCode: "H", brandColor: "#E2001A", model: "Hama toallitas para pantallas", photo: "../alquiler/img/hama-toallitas-pantallas-unico_SpTV.webp", color: "Único", colors: [], info: [["tag", "Tipo", "Toallitas", 1], ["palette", "Color", "Único", 1]], specs: [["Categoría", "Toallitas"], ["Marca", "Hama"], ["Descripción", "Toallitas húmedas para limpiar pantallas y monitores."], ["Formato", "Caja de 100 unidades"], ["Colores", "Único"]], icon: cleaningIcon("#E2001A") },
  { cat: "cleaning", type: "Toallitas", brand: "Apli", brandCode: "A", brandColor: "#E2001A", model: "Apli toallitas para pantallas", photo: "../alquiler/img/apli-toallitas-pantallas-unico_SpTV.webp", color: "Único", colors: [], info: [["tag", "Tipo", "Toallitas", 1], ["palette", "Color", "Único", 1], ["capacity", "Formatos", "Sin alcohol (100 ud) · Con alcohol (20 ud)"]], specs: [["Categoría", "Toallitas"], ["Marca", "Apli"], ["Descripción", "Toallitas para limpiar pantallas, con o sin alcohol."], ["Formatos", "Sin alcohol: caja de 100 · con alcohol: caja de 20"], ["Colores", "Único"]], icon: cleaningIcon("#E2001A") },
  { cat: "cleaning", type: "Toallitas", brand: "Dodot", brandCode: "D", brandColor: "#00A0DF", model: "Dodot Aqua Pure", photo: "../alquiler/img/dodot-aqua-pure-unico_SpTV.webp", color: "Único", colors: [], info: [["tag", "Tipo", "Toallitas", 1], ["palette", "Color", "Único", 1]], specs: [["Categoría", "Toallitas"], ["Marca", "Dodot"], ["Descripción", "Toallitas húmedas con un 99 % de agua, suaves para piel y maquillaje."], ["Formato", "48 unidades"], ["Colores", "Único"]], icon: cleaningIcon("#00A0DF") },
  { cat: "cleaning", type: "Toallitas", brand: "Sanytol", brandCode: "S", brandColor: "#00A3E0", model: "Sanytol toallitas desinfectantes", photo: "../alquiler/img/sanytol-toallitas-unico_SpTV.webp", color: "Único", colors: [], info: [["tag", "Tipo", "Toallitas", 1], ["palette", "Color", "Único", 1]], specs: [["Categoría", "Toallitas"], ["Marca", "Sanytol"], ["Descripción", "Toallitas desinfectantes para superficies y objetos."], ["Uso", "Superficies"], ["Colores", "Único"]], icon: cleaningIcon("#00A3E0") },
  { cat: "cleaning", type: "Kit de limpieza", brand: "Green Clean", brandCode: "G", brandColor: "#2E9E44", model: "Green Clean Full Frame SC-6000", photo: "../alquiler/img/green-clean-sc-6000-unico_SpTV.webp", color: "Único", colors: [], info: [["tag", "Tipo", "Kit de limpieza", 1], ["palette", "Color", "Único", 1]], specs: [["Categoría", "Kit de limpieza"], ["Marca", "Green Clean"], ["Descripción", "Kit profesional de limpieza de sensores full frame."], ["Uso", "Sensores full frame"], ["Colores", "Único"]], icon: cleaningIcon("#2E9E44") },
  { cat: "cleaning", type: "Kit de limpieza", brand: "Green Clean", brandCode: "G", brandColor: "#2E9E44", model: "Green Clean CS-1500", photo: "../alquiler/img/green-clean-cs-1500-unico_SpTV.webp", color: "Único", colors: [], info: [["tag", "Tipo", "Kit de limpieza", 1], ["palette", "Color", "Único", 1]], specs: [["Categoría", "Kit de limpieza"], ["Marca", "Green Clean"], ["Descripción", "Kit de limpieza completo para cámara y ópticas. Novedad."], ["Incluye", "Pera, pincel, gamuza, líquido y bastoncillos"], ["Colores", "Único"]], icon: cleaningIcon("#2E9E44") },
  { cat: "cleaning", type: "Kit de limpieza", brand: "Hama", brandCode: "H", brandColor: "#E2001A", model: "Kit de limpieza Hama", photo: "../alquiler/img/hama-kit-limpieza-unico_SpTV.webp", color: "Único", colors: [], info: [["tag", "Tipo", "Kit de limpieza", 1], ["palette", "Color", "Único", 1]], specs: [["Categoría", "Kit de limpieza"], ["Marca", "Hama"], ["Descripción", "Kit básico de limpieza para cámaras y objetivos."], ["Incluye", "Pera, pincel, papel y líquido"], ["Colores", "Único"]], icon: cleaningIcon("#E2001A") },
  { cat: "cleaning", type: "Kit de limpieza", brand: "JJC", brandCode: "J", brandColor: "#1A1A1A", model: "JJC CL-3", photo: "../alquiler/img/jjc-cl-3-unico_SpTV.webp", color: "Único", colors: [], info: [["tag", "Tipo", "Kit de limpieza", 1], ["palette", "Color", "Único", 1]], specs: [["Categoría", "Kit de limpieza"], ["Marca", "JJC"], ["Descripción", "Kit de limpieza compacto para cámara y ópticas."], ["Incluye", "Pera, gamuza y pincel"], ["Colores", "Único"]], icon: cleaningIcon("#1A1A1A") },
  { cat: "cleaning", type: "Kit de limpieza", brand: "Photographic Solutions", brandCode: "PS", brandColor: "#1A1A1A", model: "Kit de limpieza de sensor Eclipse tipo 3", photo: "../alquiler/img/eclipse-kit-sensor-unico_SpTV.webp", color: "Único", colors: [], info: [["tag", "Tipo", "Kit de limpieza", 1], ["palette", "Color", "Único", 1]], specs: [["Categoría", "Kit de limpieza"], ["Marca", "Photographic Solutions"], ["Descripción", "Kit para limpiar sensores de 24 mm (full frame)."], ["Incluye", "4 Sensor Swab Ultra tipo 3 · Eclipse 15 ml · 10 PEC*PAD · 1 paquete de e-wipe"], ["Colores", "Único"]], icon: cleaningIcon("#1A1A1A") },
  { cat: "cleaning", type: "Kit de limpieza", brand: "Zeiss", brandCode: "Z", brandColor: "#0072EF", model: "Kit de limpieza Zeiss", photo: "../alquiler/img/zeiss-kit-limpieza-unico_SpTV.webp", color: "Único", colors: [], info: [["tag", "Tipo", "Kit de limpieza", 1], ["palette", "Color", "Único", 1]], specs: [["Categoría", "Kit de limpieza"], ["Marca", "Zeiss"], ["Descripción", "Kit de limpieza de ópticas de Zeiss."], ["Uso", "Objetivos, gafas y pantallas"], ["Colores", "Único"]], icon: cleaningIcon("#0072EF") },
  { cat: "cleaning", type: "Bastoncillos", brand: "Green Clean", brandCode: "G", brandColor: "#2E9E44", model: "Green Clean bastoncillos Wet & Dry", photo: "../alquiler/img/green-clean-bastoncillos-unico_SpTV.webp", color: "Único", colors: [], info: [["tag", "Tipo", "Bastoncillos", 1], ["palette", "Color", "Único", 1], ["capacity", "Formatos", "Full Frame · Non Full Frame"]], specs: [["Categoría", "Bastoncillos"], ["Marca", "Green Clean"], ["Descripción", "Bastoncillos húmedo y seco para limpiar el sensor en dos pasos."], ["Modelos", "Full Frame 6060 · Non Full Frame 6070"], ["Formato", "4 unidades"], ["Colores", "Único"]], icon: cleaningIcon("#2E9E44") },
  { cat: "cleaning", type: "Bastoncillos", brand: "Photographic Solutions", brandCode: "PS", brandColor: "#1A1A1A", model: "Photographic Solutions Sensor Swab", photo: "../alquiler/img/photosol-sensor-swab-unico_SpTV.webp", color: "Único", colors: [], info: [["tag", "Tipo", "Bastoncillos", 1], ["palette", "Color", "Único", 1]], specs: [["Categoría", "Bastoncillos"], ["Marca", "Photographic Solutions"], ["Descripción", "Bastoncillos para limpieza de sensores de 24 mm (tipo 3)."], ["Formato", "12 unidades"], ["Tamaño", "Tipo 3 · 24 mm"], ["Colores", "Único"]], icon: cleaningIcon("#1A1A1A") },
  { cat: "cleaning", type: "Brocha / cepillo", brand: "EDM", brandCode: "E", brandColor: "#E30613", model: "Brocha", photo: "../alquiler/img/brocha-edm-unico_SpTV.webp", color: "Único", colors: [], info: [["tag", "Tipo", "Brocha / cepillo", 1], ["palette", "Color", "Único", 1], ["capacity", "Formatos", "Estándar · EDM 40 mm"]], specs: [["Categoría", "Brocha / cepillo"], ["Marca", "EDM"], ["Descripción", "Brocha para quitar el polvo de equipos, rejillas y superficies."], ["Modelos", "Brocha estándar · EDM triple sintética 40 mm"], ["Colores", "Único"]], icon: cleaningIcon("#E30613") },
  { cat: "cleaning", type: "Brocha / cepillo", brand: "MLB", brandCode: "M", brandColor: "#5C6672", model: "Cepillo para bujías MLB", photo: "../alquiler/img/mlb-cepillo-bujias-unico_SpTV.webp", color: "Único", colors: [], info: [["tag", "Tipo", "Brocha / cepillo", 1], ["palette", "Color", "Único", 1]], specs: [["Categoría", "Brocha / cepillo"], ["Marca", "MLB"], ["Descripción", "Cepillo de púas de acero para limpiar contactos, bornes y piezas metálicas."], ["Púas", "Acero"], ["Colores", "Único"]], icon: cleaningIcon("#5C6672") },
  { cat: "cleaning", type: "Papel", brand: "", brandCode: "", brandColor: "#5C6672", model: "Rollo de papel de cocina", photo: "../alquiler/img/rollo-papel-cocina-blanco_SpTV.webp", color: "Blanco", colors: [], info: [["tag", "Tipo", "Papel", 1], ["palette", "Color", "Blanco", 1]], specs: [["Categoría", "Papel"], ["Descripción", "Papel absorbente de uso general."], ["Color", "Blanco"], ["Colores", "Blanco"]], icon: cleaningIcon("#5C6672") },
  { cat: "cleaning", type: "Papel", brand: "", brandCode: "", brandColor: "#5C6672", model: "Rollo de papel industrial", photo: "", color: "Blanco|Azul", colors: [], info: [["tag", "Tipo", "Papel", 1], ["palette", "Colores", "2 colores", 1]], specs: [["Categoría", "Papel"], ["Descripción", "Bobina de papel de celulosa para limpieza en taller, plató y almacén."], ["Material", "Celulosa"], ["Colores", "Blanco · Azul"]], icon: cleaningIcon("#5C6672") }
];

// MARKS: purchase catalogue, official photos and free-licence photos.
// colors: one photo per colour; the dots on the card swap the photo (generated by tools/build_sonido_data.py)
const MARKS = [
  { cat: "marks", type: "Marca de tela", brand: "Modern Studio", brandCode: "", brandColor: "#5C6672", model: "Modern Studio marca salchicha", photo: "../alquiler/img/marca-salchicha-amarillo_SpTV.webp", color: "Amarillo|Azul|Blanco|Naranja|Morado|Negro|Rojo|Rosa|Verde", colors: [{"name": "Amarillo", "hex": "#F2C200", "photo": "../alquiler/img/marca-salchicha-amarillo_SpTV.webp"}, {"name": "Azul", "hex": "#1F5FD0", "photo": "../alquiler/img/marca-salchicha-azul_SpTV.webp"}, {"name": "Blanco", "hex": "#FFFFFF", "photo": "../alquiler/img/marca-salchicha-blanco_SpTV.webp"}, {"name": "Naranja", "hex": "#F07A1A", "photo": "../alquiler/img/marca-salchicha-naranja_SpTV.webp"}, {"name": "Morado", "hex": "#7B3FA0", "photo": "../alquiler/img/marca-salchicha-morado_SpTV.webp"}, {"name": "Negro", "hex": "#1A1A1A", "photo": "../alquiler/img/marca-salchicha-negro_SpTV.webp"}, {"name": "Rojo", "hex": "#D0202E", "photo": "../alquiler/img/marca-salchicha-rojo_SpTV.webp"}, {"name": "Rosa", "hex": "#F6B3CF", "photo": "../alquiler/img/marca-salchicha-rosa_SpTV.webp"}, {"name": "Verde", "hex": "#1E9C46", "photo": "../alquiler/img/marca-salchicha-verde_SpTV.webp"}], info: [["tag", "Tipo", "Marca de tela", 1], ["palette", "Colores", "9 colores", 1]], specs: [["Categoría", "Marca de tela"], ["Marca", "Modern Studio"], ["Descripción", "Marca de suelo de tela con forma alargada (salchicha) para señalar la posición de los actores y el foco; se ve bien y no resbala."], ["Material", "Tela"], ["Colores", "9 colores"], ["Colores", "Amarillo · Azul · Blanco · Naranja · Morado · Negro · Rojo · Rosa · Verde"]], icon: marksIcon("#5C6672") },
  { cat: "marks", type: "Marca de tela", brand: "Modern Studio", brandCode: "", brandColor: "#5C6672", model: "Modern Studio marca en T de tela", photo: "../alquiler/img/marca-t-tela-amarillo_SpTV.webp", color: "Amarillo|Azul|Blanco|Naranja|Morado|Negro|Rojo|Rosa|Verde", colors: [{"name": "Amarillo", "hex": "#F2C200", "photo": "../alquiler/img/marca-t-tela-amarillo_SpTV.webp"}, {"name": "Azul", "hex": "#1F5FD0", "photo": "../alquiler/img/marca-t-tela-azul_SpTV.webp"}, {"name": "Blanco", "hex": "#FFFFFF", "photo": "../alquiler/img/marca-t-tela-blanco_SpTV.webp"}, {"name": "Naranja", "hex": "#F07A1A", "photo": "../alquiler/img/marca-t-tela-naranja_SpTV.webp"}, {"name": "Morado", "hex": "#7B3FA0", "photo": "../alquiler/img/marca-t-tela-morado_SpTV.webp"}, {"name": "Negro", "hex": "#1A1A1A", "photo": "../alquiler/img/marca-t-tela-negro_SpTV.webp"}, {"name": "Rojo", "hex": "#D0202E", "photo": "../alquiler/img/marca-t-tela-rojo_SpTV.webp"}, {"name": "Rosa", "hex": "#F6B3CF", "photo": "../alquiler/img/marca-t-tela-rosa_SpTV.webp"}, {"name": "Verde", "hex": "#1E9C46", "photo": "../alquiler/img/marca-t-tela-verde_SpTV.webp"}], info: [["tag", "Tipo", "Marca de tela", 1], ["palette", "Colores", "9 colores", 1]], specs: [["Categoría", "Marca de tela"], ["Marca", "Modern Studio"], ["Descripción", "Marca en forma de T de tela para señalar en el suelo la posición de los actores y las distancias de foco."], ["Forma", "T"], ["Material", "Tela"], ["Colores", "9 colores"], ["Colores", "Amarillo · Azul · Blanco · Naranja · Morado · Negro · Rojo · Rosa · Verde"]], icon: marksIcon("#5C6672") },
  { cat: "marks", type: "Marca en T", brand: "CGE Tools", brandCode: "", brandColor: "#5C6672", model: "CGE Tools Industry Mark T flúor", photo: "../alquiler/img/cge-marca-t-fluor-naranja_SpTV.webp", color: "Flúor naranja|Flúor rosa|Flúor verde", colors: [{"name": "Flúor naranja", "hex": "#FF6A00", "photo": "../alquiler/img/cge-marca-t-fluor-naranja_SpTV.webp"}, {"name": "Flúor rosa", "hex": "#FF2D95", "photo": "../alquiler/img/cge-marca-t-fluor-rosa_SpTV.webp"}, {"name": "Flúor verde", "hex": "#5CFF2E", "photo": "../alquiler/img/cge-marca-t-fluor-verde_SpTV.webp"}], info: [["tag", "Tipo", "Marca en T", 1], ["palette", "Colores", "3 colores", 1]], specs: [["Categoría", "Marca en T"], ["Marca", "CGE Tools"], ["Descripción", "Marca en T rígida de acero recubierto de PVC en colores flúor, muy visible y duradera."], ["Forma", "T"], ["Material", "Acero / PVC"], ["Colores", "Flúor naranja · Flúor rosa · Flúor verde"]], icon: marksIcon("#5C6672") },
  { cat: "marks", type: "Marca en T", brand: "Focus Rat", brandCode: "FR", brandColor: "#1A1A1A", model: "Focus Rat marca en T", photo: "../alquiler/img/focus-rat-t_SpTV.webp", color: "Amarillo|Azul oscuro|Naranja|Morado|Rojo|Rosa|Verde claro brillante|Verde oscuro", colors: [], info: [["tag", "Tipo", "Marca en T", 1], ["palette", "Colores", "8 colores", 1]], specs: [["Categoría", "Marca en T"], ["Marca", "Focus Rat"], ["Descripción", "Marca en T de silicona lavable, flexible y con peso para que no se mueva del suelo."], ["Forma", "T"], ["Material", "Silicona lavable"], ["Colores", "Amarillo · Azul oscuro · Naranja · Morado · Rojo · Rosa · Verde claro brillante · Verde oscuro"]], icon: marksIcon("#1A1A1A") },
  { cat: "marks", type: "Marca luminosa", brand: "", brandCode: "", brandColor: "#5C6672", model: "Bastón de pesca luminoso", photo: "../alquiler/img/baston-pesca-luminoso-luminoso_SpTV.webp", color: "Luminoso", colors: [], info: [["tag", "Tipo", "Marca luminosa", 1], ["palette", "Color", "Luminoso", 1]], specs: [["Categoría", "Marca luminosa"], ["Descripción", "Barritas luminosas de pesca (luz química) para marcar posiciones en rodajes nocturnos o con poca luz."], ["Formato", "Pack de 5 unidades"], ["Tamaño", "37 mm"], ["Colores", "Luminoso"]], icon: marksIcon("#5C6672") },
  { cat: "marks", type: "Marca de suelo", brand: "", brandCode: "", brandColor: "#5C6672", model: "Tees de madera", photo: "../alquiler/img/tees-madera-varios-colores_SpTV.webp", color: "Varios colores", colors: [], info: [["tag", "Tipo", "Marca de suelo", 1], ["palette", "Color", "Varios colores", 1]], specs: [["Categoría", "Marca de suelo"], ["Descripción", "Tees de madera de colores que se clavan en el césped o la tierra para marcar posiciones en exteriores."], ["Material", "Madera"], ["Colores", "Varios colores"], ["Colores", "Varios colores"]], icon: marksIcon("#5C6672") },
  { cat: "marks", type: "Pegatinas", brand: "Dylan Stoel", brandCode: "D", brandColor: "#5C6672", model: "Pegatinas de marca Dylan Stoel", photo: "../alquiler/img/dylan-stoel-pegatinas-multicolor_SpTV.webp", color: "Multicolor|Multicolor transparente", colors: [{"name": "Multicolor", "hex": "#E9A23B", "photo": "../alquiler/img/dylan-stoel-pegatinas-multicolor_SpTV.webp"}, {"name": "Multicolor transparente", "hex": "#BFE3F2", "photo": "../alquiler/img/dylan-stoel-pegatinas-multicolor-transparente_SpTV.webp"}], info: [["tag", "Tipo", "Pegatinas", 1], ["palette", "Colores", "2 colores", 1]], specs: [["Categoría", "Pegatinas"], ["Marca", "Dylan Stoel"], ["Descripción", "Pegatinas de colores para marcar posiciones y referencias de foco, opacas o transparentes."], ["Versiones", "Multicolor no transparente · multicolor transparente"], ["Formato", "100 unidades"], ["Colores", "Multicolor · Multicolor transparente"]], icon: marksIcon("#5C6672") }
];

// FASTENING: purchase catalogue, official photos and free-licence photos.
// colors: one photo per colour; the dots on the card swap the photo (generated by tools/build_sonido_data.py)
const FASTENING = [
  { cat: "fastening", type: "Brida", brand: "Bongo Ties", brandCode: "B", brandColor: "#1A1A1A", model: "Bongo Ties", photo: "../alquiler/img/bongo-ties-negro_SpTV.webp", color: "Negro|Negro (madera negra)|Rojo|Azul|Verde", colors: [{"name": "Negro", "hex": "#1A1A1A", "photo": "../alquiler/img/bongo-ties-negro_SpTV.webp"}, {"name": "Negro (madera negra)", "hex": "#2B2118", "photo": "../alquiler/img/bongo-ties-negro-madera_SpTV.webp"}, {"name": "Rojo", "hex": "#D0202E", "photo": "../alquiler/img/bongo-ties-rojo_SpTV.webp"}, {"name": "Azul", "hex": "#1F5FD0", "photo": "../alquiler/img/bongo-ties-azul_SpTV.webp"}, {"name": "Verde", "hex": "#1E9C46", "photo": "../alquiler/img/bongo-ties-verde_SpTV.webp"}], info: [["tag", "Tipo", "Brida", 1], ["palette", "Colores", "5 colores", 1]], specs: [["Categoría", "Brida"], ["Marca", "Bongo Ties"], ["Descripción", "Brida elástica reutilizable con pieza de madera: recoge cables y sujeta material en segundos."], ["Formato", "Paquete de 10 unidades"], ["Colores", "Negro · Negro (madera negra) · Rojo · Azul · Verde"]], icon: fasteningIcon("#1A1A1A") },
  { cat: "fastening", type: "Brida", brand: "Procab", brandCode: "P", brandColor: "#E30613", model: "Bridas Procab", photo: "../alquiler/img/procab-bridas-negro_SpTV.webp", color: "Negro|Blanco", colors: [{"name": "Negro", "hex": "#1A1A1A", "photo": "../alquiler/img/procab-bridas-negro_SpTV.webp"}, {"name": "Blanco", "hex": "#FFFFFF", "photo": "../alquiler/img/procab-bridas-blanco_SpTV.webp"}], info: [["tag", "Tipo", "Brida", 1], ["palette", "Colores", "2 colores", 1], ["capacity", "Formatos", "200 × 3,6 mm · 360 × 4,8 mm"]], specs: [["Categoría", "Brida"], ["Marca", "Procab"], ["Descripción", "Bridas de nailon de un solo uso para sujetar cables."], ["Medidas", "Blanco: 200 × 3,6 mm · Negro: 200 × 3,6 mm y 360 × 4,8 mm"], ["Reutilizable", "No"], ["Colores", "Negro · Blanco"]], icon: fasteningIcon("#E30613") },
  { cat: "fastening", type: "Brida", brand: "Precygrap", brandCode: "P", brandColor: "#00539F", model: "Bridas Precygrap", photo: "../alquiler/img/precygrap-bridas-negro_SpTV.webp", color: "Negro|Blanco", colors: [{"name": "Negro", "hex": "#1A1A1A", "photo": "../alquiler/img/precygrap-bridas-negro_SpTV.webp"}, {"name": "Blanco", "hex": "#FFFFFF", "photo": "../alquiler/img/precygrap-bridas-blanco_SpTV.webp"}], info: [["tag", "Tipo", "Brida", 1], ["palette", "Colores", "2 colores", 1], ["capacity", "Formatos", "200 × 4,8 mm · 300 × 4,8 mm · 370 × 4,8 mm"]], specs: [["Categoría", "Brida"], ["Marca", "Precygrap"], ["Descripción", "Bridas de nailon de un solo uso, resistentes, para cableado."], ["Medidas", "Blanco: 200 × 4,8 y 300 × 4,8 mm · Negro: 200 × 4,8, 300 × 4,8 y 370 × 4,8 mm"], ["Reutilizable", "No"], ["Colores", "Negro · Blanco"]], icon: fasteningIcon("#00539F") },
  { cat: "fastening", type: "Brida", brand: "", brandCode: "", brandColor: "#5C6672", model: "Bridas negras", photo: "../alquiler/img/bridas-negras-negro_SpTV.webp", color: "Negro", colors: [], info: [["tag", "Tipo", "Brida", 1], ["palette", "Color", "Negro", 1], ["capacity", "Formatos", "100 × 2,5 mm · 250 × 3,6 mm · 370 × 7,6 mm"]], specs: [["Categoría", "Brida"], ["Descripción", "Bridas negras de nailon de un solo uso."], ["Medidas", "100 × 2,5 · 250 × 3,6 · 370 × 7,6 mm"], ["Reutilizable", "No"], ["Colores", "Negro"]], icon: fasteningIcon("#5C6672") },
  { cat: "fastening", type: "Brida", brand: "StarTech", brandCode: "S", brandColor: "#0B6EB5", model: "Bridas reutilizables StarTech", photo: "../alquiler/img/startech-bridas-reutilizables-negro_SpTV.webp", color: "Negro", colors: [], info: [["tag", "Tipo", "Brida", 1], ["palette", "Color", "Negro", 1]], specs: [["Categoría", "Brida"], ["Marca", "StarTech"], ["Descripción", "Bridas de nailon que se pueden abrir y volver a usar."], ["Medida", "150 × 7,6 mm"], ["Reutilizable", "Sí"], ["Colores", "Negro"]], icon: fasteningIcon("#0B6EB5") },
  { cat: "fastening", type: "Brida", brand: "Precygrap", brandCode: "P", brandColor: "#00539F", model: "Bridas reutilizables Precygrap", photo: "../alquiler/img/precygrap-bridas-reutilizables-negro_SpTV.webp", color: "Negro", colors: [], info: [["tag", "Tipo", "Brida", 1], ["palette", "Color", "Negro", 1], ["capacity", "Formatos", "200 × 7,6 mm · 300 × 7,6 mm · 370 × 7,6 mm"]], specs: [["Categoría", "Brida"], ["Marca", "Precygrap"], ["Descripción", "Bridas de nailon reutilizables, con lengüeta para soltarlas."], ["Medidas", "200 × 7,6 · 300 × 7,6 · 370 × 7,6 mm"], ["Reutilizable", "Sí"], ["Colores", "Negro"]], icon: fasteningIcon("#00539F") },
  { cat: "fastening", type: "Brida", brand: "VELCRO", brandCode: "V", brandColor: "#1A1A1A", model: "VELCRO ONE-WRAP bridas", photo: "../alquiler/img/velcro-one-wrap-negro_SpTV.webp", color: "Negro", colors: [], info: [["tag", "Tipo", "Brida", 1], ["palette", "Color", "Negro", 1]], specs: [["Categoría", "Brida"], ["Marca", "VELCRO"], ["Descripción", "Bridas de velcro reutilizables para recoger y ordenar cables."], ["Medida", "20 × 200 mm"], ["Formato", "25 unidades"], ["Colores", "Negro"]], icon: fasteningIcon("#1A1A1A") },
  { cat: "fastening", type: "Brida", brand: "Kupo", brandCode: "K", brandColor: "#E30613", model: "Kupo MEZ220 brida de velcro", photo: "../alquiler/img/kupo-mez220-negro_SpTV.webp", color: "Negro", colors: [], info: [["tag", "Tipo", "Brida", 1], ["palette", "Color", "Negro", 1]], specs: [["Categoría", "Brida"], ["Marca", "Kupo"], ["Descripción", "Brida de velcro reutilizable para cables y mangueras."], ["Medida", "2 × 20 cm"], ["Colores", "Negro"]], icon: fasteningIcon("#E30613") },
  { cat: "fastening", type: "Brida", brand: "3M", brandCode: "3M", brandColor: "#E2231A", model: "Base adhesiva para bridas 3M", photo: "../alquiler/img/3m-base-bridas-negro_SpTV.webp", color: "Negro", colors: [], info: [["tag", "Tipo", "Brida", 1], ["palette", "Color", "Negro", 1], ["capacity", "Formatos", "19 × 19 mm · 28 × 28 mm"]], specs: [["Categoría", "Brida"], ["Marca", "3M"], ["Descripción", "Base autoadhesiva para fijar bridas a cualquier superficie lisa."], ["Medidas", "19 × 19 mm · 28 × 28 mm (para bridas de hasta 4,9 mm)"], ["Colores", "Negro"]], icon: fasteningIcon("#E2231A") },
  { cat: "fastening", type: "Clip / soporte de cable", brand: "", brandCode: "", brandColor: "#5C6672", model: "Cable clamp", photo: "../alquiler/img/cable-clamp-unico_SpTV.webp", color: "Único", colors: [], info: [["tag", "Tipo", "Clip / soporte de cable", 1], ["palette", "Color", "Único", 1]], specs: [["Categoría", "Clip / soporte de cable"], ["Descripción", "Abrazadera para sujetar mangueras y cables a estructuras."], ["Medidas", "7,7 × 7,5 × 1,3 cm"], ["Interior", "4,5 cm"], ["Colores", "Único"]], icon: fasteningIcon("#5C6672") },
  { cat: "fastening", type: "Cincha", brand: "", brandCode: "", brandColor: "#5C6672", model: "Cincha con carraca", photo: "../alquiler/img/cincha-carraca-unico_SpTV.webp", color: "Único", colors: [], info: [["tag", "Tipo", "Cincha", 1], ["palette", "Color", "Único", 1], ["capacity", "Formatos", "4 m · 6 m"]], specs: [["Categoría", "Cincha"], ["Descripción", "Cincha de amarre con carraca para asegurar material en el transporte."], ["Ancho", "2,5 cm"], ["Versiones", "Con gancho y carraca: 4 m y 6 m · con carraca: 4 m y 6 m"], ["Colores", "Único"]], icon: fasteningIcon("#5C6672") },
  { cat: "fastening", type: "Pulpo", brand: "", brandCode: "", brandColor: "#5C6672", model: "Pulpo con gancho", photo: "../alquiler/img/pulpo-gancho-unico_SpTV.webp", color: "Único", colors: [], info: [["tag", "Tipo", "Pulpo", 1], ["palette", "Color", "Único", 1], ["capacity", "Formatos", "35 cm · 50 cm · 60 cm · 65 cm · 80 cm · 1 m"]], specs: [["Categoría", "Pulpo"], ["Descripción", "Cuerda elástica con ganchos, resistente al agua, para sujetar lonas, fundas y material."], ["Largos", "35 · 50 · 60 · 65 · 80 cm · 1 m"], ["Colores", "Único"]], icon: fasteningIcon("#5C6672") },
  { cat: "fastening", type: "Eslinga / mosquetón", brand: "Kupo", brandCode: "K", brandColor: "#E30613", model: "Kupo SW04 eslinga", photo: "../alquiler/img/kupo-sw04-negro_SpTV.webp", color: "Negro", colors: [], info: [["tag", "Tipo", "Eslinga / mosquetón", 1], ["palette", "Color", "Negro", 1]], specs: [["Categoría", "Eslinga / mosquetón"], ["Marca", "Kupo"], ["Descripción", "Eslinga de seguridad reforzada con PVC para asegurar focos y accesorios."], ["Largo", "75 cm"], ["Colores", "Negro"]], icon: fasteningIcon("#E30613") },
  { cat: "fastening", type: "Eslinga / mosquetón", brand: "", brandCode: "", brandColor: "#5C6672", model: "Eslinga con mosquetones", photo: "", color: "Único", colors: [], info: [["tag", "Tipo", "Eslinga / mosquetón", 1], ["palette", "Color", "Único", 1]], specs: [["Categoría", "Eslinga / mosquetón"], ["Descripción", "Eslinga corta con mosquetones para asegurar material en altura."], ["Largo", "30 cm"], ["Colores", "Único"]], icon: fasteningIcon("#5C6672") },
  { cat: "fastening", type: "Eslinga / mosquetón", brand: "Dirty Rigger", brandCode: "DR", brandColor: "#1A1A1A", model: "Dirty Rigger mosquetón para cintas", photo: "../alquiler/img/dirty-rigger-mosqueton-negro_SpTV.webp", color: "Negro", colors: [], info: [["tag", "Tipo", "Eslinga / mosquetón", 1], ["palette", "Color", "Negro", 1]], specs: [["Categoría", "Eslinga / mosquetón"], ["Marca", "Dirty Rigger"], ["Descripción", "Cinta con hebilla y mosquetón para colgar y llevar cintas adhesivas y herramientas."], ["Incluye", "Hebilla y mosquetón"], ["Colores", "Negro"]], icon: fasteningIcon("#1A1A1A") },
  { cat: "fastening", type: "Alambre / cuerda", brand: "", brandCode: "", brandColor: "#5C6672", model: "Rollo de alambre", photo: "", color: "Único", colors: [], info: [["tag", "Tipo", "Alambre / cuerda", 1], ["palette", "Color", "Único", 1], ["capacity", "Formatos", "0,65 mm × 96 m · 1 mm × 50 m · Aluminio 1,5 mm × 5 m"]], specs: [["Categoría", "Alambre / cuerda"], ["Descripción", "Alambre para atar y asegurar en montajes."], ["Versiones", "Acero galvanizado 0,65 mm × 96 m · acero galvanizado 1 mm × 50 m · aluminio 1,5 mm × 5 m"], ["Colores", "Único"]], icon: fasteningIcon("#5C6672") },
  { cat: "fastening", type: "Alambre / cuerda", brand: "", brandCode: "", brandColor: "#5C6672", model: "Cordino negro", photo: "", color: "Negro", colors: [], info: [["tag", "Tipo", "Alambre / cuerda", 1], ["palette", "Color", "Negro", 1], ["capacity", "Formatos", "3 mm · 4 mm"]], specs: [["Categoría", "Alambre / cuerda"], ["Descripción", "Cordino negro para atar y colgar sin que se vea en plano."], ["Grosores", "3 mm · 4 mm"], ["Colores", "Negro"]], icon: fasteningIcon("#5C6672") },
  { cat: "fastening", type: "Alambre / cuerda", brand: "Kupo", brandCode: "K", brandColor: "#E30613", model: "Kupo 4506 cordón elástico con bola", photo: "../alquiler/img/kupo-4506-negro_SpTV.webp", color: "Negro", colors: [], info: [["tag", "Tipo", "Alambre / cuerda", 1], ["palette", "Color", "Negro", 1]], specs: [["Categoría", "Alambre / cuerda"], ["Marca", "Kupo"], ["Descripción", "Cordón elástico con bola para recoger cables y sujetar accesorios."], ["Referencia", "4506"], ["Colores", "Negro"]], icon: fasteningIcon("#E30613") },
  { cat: "fastening", type: "Clip / soporte de cable", brand: "Sprig", brandCode: "S", brandColor: "#2E9E44", model: "Sprig clips para cables", photo: "../alquiler/img/sprig-clips-negro_SpTV.webp", color: "Negro", colors: [], info: [["tag", "Tipo", "Clip / soporte de cable", 1], ["palette", "Color", "Negro", 1]], specs: [["Categoría", "Clip / soporte de cable"], ["Marca", "Sprig"], ["Descripción", "Clips para guiar y sujetar cables en mesa o pared."], ["Formato", "Pack de 6 unidades"], ["Colores", "Negro"]], icon: fasteningIcon("#2E9E44") },
  { cat: "fastening", type: "Imán", brand: "", brandCode: "", brandColor: "#5C6672", model: "Imán de neodimio", photo: "", color: "Único", colors: [], info: [["tag", "Tipo", "Imán", 1], ["palette", "Color", "Único", 1], ["capacity", "Formatos", "Gancho 22 kg · Gancho 38 kg · Ojal 36 kg · Ojal 65 kg"]], specs: [["Categoría", "Imán"], ["Descripción", "Imán de neodimio de gran fuerza para colgar o fijar material en superficies metálicas."], ["Versiones", "Gancho: 22 kg / 25 mm y 38 kg / 32 mm · Ojal: 36 kg / 32 mm y 65 kg / 42 mm"], ["Colores", "Único"]], icon: fasteningIcon("#5C6672") },
  { cat: "fastening", type: "Otros", brand: "", brandCode: "", brandColor: "#5C6672", model: "Núcleo de película", photo: "", color: "Único", colors: [], info: [["tag", "Tipo", "Otros", 1], ["palette", "Color", "Único", 1]], specs: [["Categoría", "Otros"], ["Descripción", "Núcleo de plástico para película de 35 mm; en rodaje se usa para enrollar cinta y cables."], ["Formato", "35 mm"], ["Colores", "Único"]], icon: fasteningIcon("#5C6672") },
  { cat: "fastening", type: "Pinza", brand: "", brandCode: "", brandColor: "#5C6672", model: "Pinza cocodrilo", photo: "../alquiler/img/pinza-cocodrilo-unico_SpTV.webp", color: "Único", colors: [], info: [["tag", "Tipo", "Pinza", 1], ["palette", "Color", "Único", 1]], specs: [["Categoría", "Pinza"], ["Descripción", "Pinza tipo cocodrilo para sujetar telas, gelatinas y cables."], ["Tipo", "Cocodrilo"], ["Colores", "Único"]], icon: fasteningIcon("#5C6672") },
  { cat: "fastening", type: "Pinza", brand: "Kupo", brandCode: "K", brandColor: "#E30613", model: "Kupo KCP347 pinzas de madera", photo: "../alquiler/img/kupo-kcp347-unico_SpTV.webp", color: "Único", colors: [], info: [["tag", "Tipo", "Pinza", 1], ["palette", "Color", "Único", 1]], specs: [["Categoría", "Pinza"], ["Marca", "Kupo"], ["Descripción", "Pinzas de madera (C-47) para fijar gelatinas y difusores a los focos."], ["Formato", "50 unidades"], ["Colores", "Único"]], icon: fasteningIcon("#E30613") },
  { cat: "fastening", type: "Pinza", brand: "", brandCode: "", brandColor: "#5C6672", model: "Pinzas de madera de 7 vueltas", photo: "../alquiler/img/pinza-madera-7-vueltas-unico_SpTV.webp", color: "Único", colors: [], info: [["tag", "Tipo", "Pinza", 1], ["palette", "Color", "Único", 1]], specs: [["Categoría", "Pinza"], ["Descripción", "Pinzas de madera con muelle reforzado de 7 vueltas."], ["Formato", "24 unidades"], ["Colores", "Único"]], icon: fasteningIcon("#5C6672") },
  { cat: "fastening", type: "Pinza", brand: "Piher", brandCode: "P", brandColor: "#E30613", model: "Piher 57025 pinza metálica", photo: "../alquiler/img/piher-57025-unico_SpTV.webp", color: "Único", colors: [], info: [["tag", "Tipo", "Pinza", 1], ["palette", "Color", "Único", 1]], specs: [["Categoría", "Pinza"], ["Marca", "Piher"], ["Descripción", "Pinza metálica de acero multiusos con puntas protectoras de polipropileno."], ["Largo", "11 cm"], ["Apertura", "2,5 cm / 3 cm"], ["Colores", "Único"]], icon: fasteningIcon("#E30613") },
  { cat: "fastening", type: "Pinza", brand: "Piher", brandCode: "P", brandColor: "#E30613", model: "Piher 30007 pinza metálica aislada", photo: "../alquiler/img/piher-30007-unico_SpTV.webp", color: "Único", colors: [], info: [["tag", "Tipo", "Pinza", 1], ["palette", "Color", "Único", 1]], specs: [["Categoría", "Pinza"], ["Marca", "Piher"], ["Descripción", "Pinza metálica con protectores de PVC."], ["Largo", "11 cm"], ["Apertura", "3,5 cm / 3 cm"], ["Colores", "Único"]], icon: fasteningIcon("#E30613") },
  { cat: "fastening", type: "Pinza", brand: "Piher", brandCode: "P", brandColor: "#E30613", model: "Piher pinza de plástico regulable", photo: "../alquiler/img/piher-pinza-plastico-unico_SpTV.webp", color: "Único", colors: [], info: [["tag", "Tipo", "Pinza", 1], ["palette", "Color", "Único", 1], ["capacity", "Formatos", "3 cm · 5 cm"]], specs: [["Categoría", "Pinza"], ["Marca", "Piher"], ["Descripción", "Pinza de nailon y fibra de vidrio con apertura regulable."], ["Modelos", "30910 (3 cm) · 30911 (5 cm)"], ["Colores", "Único"]], icon: fasteningIcon("#E30613") },
  { cat: "fastening", type: "Pinza", brand: "Wolfcraft", brandCode: "W", brandColor: "#E2001A", model: "Wolfcraft pinza de resorte PRO", photo: "../alquiler/img/wolfcraft-pro-unico_SpTV.webp", color: "Único", colors: [], info: [["tag", "Tipo", "Pinza", 1], ["palette", "Color", "Único", 1], ["capacity", "Formatos", "40 mm · 60 mm"]], specs: [["Categoría", "Pinza"], ["Marca", "Wolfcraft"], ["Descripción", "Pinza de plástico con resorte, fuerte y ligera."], ["Modelos", "FZ40 (40 mm) · FZ60 (60 mm)"], ["Colores", "Único"]], icon: fasteningIcon("#E2001A") },
  { cat: "fastening", type: "Pinza", brand: "", brandCode: "", brandColor: "#5C6672", model: "Pinza de plástico", photo: "../alquiler/img/pinza-plastico-unico_SpTV.webp", color: "Único", colors: [], info: [["tag", "Tipo", "Pinza", 1], ["palette", "Color", "Único", 1]], specs: [["Categoría", "Pinza"], ["Descripción", "Pinza de plástico no regulable."], ["Apertura", "2,4 cm"], ["Colores", "Único"]], icon: fasteningIcon("#5C6672") },
  { cat: "fastening", type: "Velcro", brand: "3M", brandCode: "3M", brandColor: "#E2231A", model: "3M Dual Lock", photo: "../alquiler/img/3m-dual-lock-negro_SpTV.webp", color: "Negro", colors: [], info: [["tag", "Tipo", "Velcro", 1], ["palette", "Color", "Negro", 1]], specs: [["Categoría", "Velcro"], ["Marca", "3M"], ["Descripción", "Cierre reutilizable de 3M, mucho más fuerte que el velcro, para fijar accesorios."], ["Ancho", "25,4 mm"], ["Colores", "Negro"]], icon: fasteningIcon("#E2231A") },
  { cat: "fastening", type: "Velcro", brand: "VELCRO", brandCode: "V", brandColor: "#1A1A1A", model: "Velcro macho-hembra", photo: "../alquiler/img/velcro-macho-hembra-unico_SpTV.webp", color: "Único", colors: [], info: [["tag", "Tipo", "Velcro", 1], ["palette", "Color", "Único", 1], ["capacity", "Formatos", "20 mm · 25 mm · 50 mm"]], specs: [["Categoría", "Velcro"], ["Marca", "VELCRO"], ["Descripción", "Cinta de velcro macho y hembra para fijar y recoger."], ["Anchos", "20 · 25 · 50 mm"], ["Colores", "Único"]], icon: fasteningIcon("#1A1A1A") },
  { cat: "fastening", type: "Velcro", brand: "StarTech", brandCode: "S", brandColor: "#0B6EB5", model: "StarTech velcro mágico", photo: "../alquiler/img/startech-velcro-magico-negro_SpTV.webp", color: "Negro|Azul|Verde|Rojo|Amarillo", colors: [{"name": "Negro", "hex": "#1A1A1A", "photo": "../alquiler/img/startech-velcro-magico-negro_SpTV.webp"}, {"name": "Azul", "hex": "#1F5FD0", "photo": "../alquiler/img/startech-velcro-magico-azul_SpTV.webp"}, {"name": "Verde", "hex": "#1E9C46", "photo": "../alquiler/img/startech-velcro-magico-verde_SpTV.webp"}, {"name": "Rojo", "hex": "#D0202E", "photo": "../alquiler/img/startech-velcro-magico-rojo_SpTV.webp"}, {"name": "Amarillo", "hex": "#F2C200", "photo": "../alquiler/img/startech-velcro-magico-amarillo_SpTV.webp"}], info: [["tag", "Tipo", "Velcro", 1], ["palette", "Colores", "5 colores", 1]], specs: [["Categoría", "Velcro"], ["Marca", "StarTech"], ["Descripción", "Rollo de velcro de doble cara para hacer bridas a medida."], ["Medida", "19 mm × 7,6 m"], ["Colores", "Negro · Azul · Verde · Rojo · Amarillo"]], icon: fasteningIcon("#0B6EB5") },
  { cat: "fastening", type: "Velcro", brand: "Kupo", brandCode: "K", brandColor: "#E30613", model: "Kupo velcro mágico", photo: "../alquiler/img/kupo-velcro-magico-negro_SpTV.webp", color: "Negro", colors: [], info: [["tag", "Tipo", "Velcro", 1], ["palette", "Color", "Negro", 1]], specs: [["Categoría", "Velcro"], ["Marca", "Kupo"], ["Descripción", "Rollo de velcro de doble cara para recoger cables."], ["Medida", "16 mm × 5 m"], ["Colores", "Negro"]], icon: fasteningIcon("#E30613") }
];

// TAPES: purchase catalogue, official photos from each brand's website.
// colors: one photo per colour; the dots on the card swap the photo (generated by tools/build_sonido_data.py)
const TAPES = [
  { cat: "tapes", type: "Cinta de cámara (gaffer)", brand: "tesa", brandCode: "t", brandColor: "#E2001A", model: "tesa 4661", photo: "../alquiler/img/tesa-4661-rojo_SpTV.webp", color: "Negro|Blanco|Amarillo|Gris|Azul|Rojo", colors: [], info: [["tag", "Tipo", "Cinta de cámara (gaffer)", 1], ["palette", "Colores", "6 colores", 1], ["capacity", "Formatos", "25 mm × 50 m · 50 mm × 50 m"]], specs: [["Categoría", "Cinta de cámara (gaffer)"], ["Marca", "tesa"], ["Descripción", "Cinta de tela mate (gaffer) que se arranca a mano, no deja residuos y no refleja la luz. Calidad estándar de tesa para rodaje y escenario."], ["Medidas", "25 mm × 50 m · 50 mm × 50 m"], ["Colores 25 mm", "Blanco, negro, amarillo y gris"], ["Colores 50 mm", "Blanco, negro, amarillo, azul y rojo"], ["Colores", "Negro · Blanco · Amarillo · Gris · Azul · Rojo"]], icon: tapesIcon("#E2001A") },
  { cat: "tapes", type: "Cinta de cámara (gaffer)", brand: "tesa", brandCode: "t", brandColor: "#E2001A", model: "tesa 4651", photo: "../alquiler/img/tesa-4651-rojo_SpTV.webp", color: "Azul|Rojo|Verde|Azul croma|Verde croma", colors: [], info: [["tag", "Tipo", "Cinta de cámara (gaffer)", 1], ["palette", "Colores", "5 colores", 1], ["capacity", "Formatos", "25 mm × 50 m · 50 mm × 50 m"]], specs: [["Categoría", "Cinta de cámara (gaffer)"], ["Marca", "tesa"], ["Descripción", "Cinta de tela de alta resistencia; en 50 mm, colores croma para fondos azules y verdes."], ["Medidas", "25 mm × 50 m · 50 mm × 50 m"], ["Colores 25 mm", "Azul, rojo y verde"], ["Colores 50 mm", "Azul croma y verde croma"], ["Colores", "Azul · Rojo · Verde · Azul croma · Verde croma"]], icon: tapesIcon("#E2001A") },
  { cat: "tapes", type: "Cinta de cámara (gaffer)", brand: "tesa", brandCode: "t", brandColor: "#E2001A", model: "tesa 4671", photo: "", color: "Negro|Blanco|Flúor rosa|Flúor naranja|Flúor verde|Flúor amarillo", colors: [], info: [["tag", "Tipo", "Cinta de cámara (gaffer)", 1], ["palette", "Colores", "6 colores", 1], ["capacity", "Formatos", "25 mm · 50 mm"]], specs: [["Categoría", "Cinta de cámara (gaffer)"], ["Marca", "tesa"], ["Descripción", "Cinta de tela mate (gaffer) que se arranca a mano, no deja residuos y no refleja la luz. Colores flúor muy visibles bajo luz negra y en oscuridad."], ["Medidas", "25 mm × 25 m (flúor) · 50 mm × 50 m (blanco y negro) · 50 mm × 25 m (flúor)"], ["Colores", "Negro · Blanco · Flúor rosa · Flúor naranja · Flúor verde · Flúor amarillo"]], icon: tapesIcon("#E2001A") },
  { cat: "tapes", type: "Cinta de cámara (gaffer)", brand: "tesa", brandCode: "t", brandColor: "#E2001A", model: "tesa 53949 gaffer mate", photo: "../alquiler/img/tesa-53949-negro_SpTV.webp", color: "Negro|Blanco|Gris", colors: [{"name": "Negro", "hex": "#1A1A1A", "photo": "../alquiler/img/tesa-53949-negro_SpTV.webp"}, {"name": "Blanco", "hex": "#FFFFFF", "photo": "../alquiler/img/tesa-53949-blanco_SpTV.webp"}, {"name": "Gris", "hex": "#8A8F96", "photo": "../alquiler/img/tesa-53949-gris_SpTV.webp"}], info: [["tag", "Tipo", "Cinta de cámara (gaffer)", 1], ["palette", "Colores", "3 colores", 1]], specs: [["Categoría", "Cinta de cámara (gaffer)"], ["Marca", "tesa"], ["Descripción", "Gaffer de acabado mate profesional, sin reflejos."], ["Medida", "50 mm × 50 m"], ["Colores", "Negro · Blanco · Gris"]], icon: tapesIcon("#E2001A") },
  { cat: "tapes", type: "Cinta de cámara (gaffer)", brand: "Progaff", brandCode: "P", brandColor: "#1A1A1A", model: "Progaff cinta de cámara 24 mm", photo: "../alquiler/img/progaff-estrecha-negro_SpTV.webp", color: "Negro|Blanco|Amarillo|Azul oscuro|Gris|Marrón|Morado|Rojo|Flúor rosa|Flúor verde|Flúor azul", colors: [{"name": "Negro", "hex": "#1A1A1A", "photo": "../alquiler/img/progaff-estrecha-negro_SpTV.webp"}, {"name": "Blanco", "hex": "#FFFFFF", "photo": "../alquiler/img/progaff-estrecha-blanco_SpTV.webp"}, {"name": "Amarillo", "hex": "#F2C200", "photo": "../alquiler/img/progaff-estrecha-amarillo_SpTV.webp"}, {"name": "Azul oscuro", "hex": "#1A2F7A", "photo": "../alquiler/img/progaff-estrecha-azul-oscuro_SpTV.webp"}, {"name": "Gris", "hex": "#8A8F96", "photo": "../alquiler/img/progaff-estrecha-gris_SpTV.webp"}, {"name": "Marrón", "hex": "#6B4A2B", "photo": "../alquiler/img/progaff-estrecha-marron_SpTV.webp"}, {"name": "Morado", "hex": "#7B3FA0", "photo": "../alquiler/img/progaff-estrecha-morado_SpTV.webp"}, {"name": "Rojo", "hex": "#D0202E", "photo": "../alquiler/img/progaff-estrecha-rojo_SpTV.webp"}, {"name": "Flúor rosa", "hex": "#FF2D95", "photo": "../alquiler/img/progaff-estrecha-fluor-rosa_SpTV.webp"}, {"name": "Flúor verde", "hex": "#5CFF2E", "photo": "../alquiler/img/progaff-estrecha-fluor-verde_SpTV.webp"}, {"name": "Flúor azul", "hex": "#00B7FF", "photo": "../alquiler/img/progaff-estrecha-fluor-azul_SpTV.webp"}], info: [["tag", "Tipo", "Cinta de cámara (gaffer)", 1], ["palette", "Colores", "11 colores", 1]], specs: [["Categoría", "Cinta de cámara (gaffer)"], ["Marca", "Progaff"], ["Descripción", "Cinta de tela mate (gaffer) que se arranca a mano, no deja residuos y no refleja la luz."], ["Medidas", "24 mm × 22,8 m · blanco 24 mm × 50 m · azul oscuro 24 mm × 55 m"], ["Colores", "Negro · Blanco · Amarillo · Azul oscuro · Gris · Marrón · Morado · Rojo · Flúor rosa · Flúor verde · Flúor azul"]], icon: tapesIcon("#1A1A1A") },
  { cat: "tapes", type: "Cinta de cámara (gaffer)", brand: "Nichiban", brandCode: "N", brandColor: "#E60012", model: "Nichiban cinta de cámara", photo: "", color: "Morado", colors: [], info: [["tag", "Tipo", "Cinta de cámara (gaffer)", 1], ["palette", "Color", "Morado", 1]], specs: [["Categoría", "Cinta de cámara (gaffer)"], ["Marca", "Nichiban"], ["Descripción", "Cinta de tela mate (gaffer) que se arranca a mano, no deja residuos y no refleja la luz."], ["Medida", "50 mm × 50 m"], ["Colores", "Morado"]], icon: tapesIcon("#E60012") },
  { cat: "tapes", type: "Cinta de cámara pocket", brand: "Progaff", brandCode: "P", brandColor: "#1A1A1A", model: "Progaff pocket", photo: "../alquiler/img/progaff-pocket-negro_SpTV.webp", color: "Negro|Blanco|Amarillo|Rojo|Flúor amarillo|Flúor azul|Flúor naranja|Flúor rosa|Flúor verde", colors: [{"name": "Negro", "hex": "#1A1A1A", "photo": "../alquiler/img/progaff-pocket-negro_SpTV.webp"}, {"name": "Blanco", "hex": "#FFFFFF", "photo": "../alquiler/img/progaff-pocket-blanco_SpTV.webp"}, {"name": "Amarillo", "hex": "#F2C200", "photo": "../alquiler/img/progaff-pocket-amarillo_SpTV.webp"}, {"name": "Rojo", "hex": "#D0202E", "photo": "../alquiler/img/progaff-pocket-rojo_SpTV.webp"}, {"name": "Flúor amarillo", "hex": "#E6FF00", "photo": "../alquiler/img/progaff-pocket-fluor-amarillo_SpTV.webp"}, {"name": "Flúor azul", "hex": "#00B7FF", "photo": "../alquiler/img/progaff-pocket-fluor-azul_SpTV.webp"}, {"name": "Flúor naranja", "hex": "#FF6A00", "photo": "../alquiler/img/progaff-pocket-fluor-naranja_SpTV.webp"}, {"name": "Flúor rosa", "hex": "#FF2D95", "photo": "../alquiler/img/progaff-pocket-fluor-rosa_SpTV.webp"}, {"name": "Flúor verde", "hex": "#5CFF2E", "photo": "../alquiler/img/progaff-pocket-fluor-verde_SpTV.webp"}], info: [["tag", "Tipo", "Cinta de cámara pocket", 1], ["palette", "Colores", "9 colores", 1], ["capacity", "Formatos", "5,5 m · Plus 11 m"]], specs: [["Categoría", "Cinta de cámara pocket"], ["Marca", "Progaff"], ["Descripción", "Rollo pequeño de gaffer para llevar encima."], ["Medidas", "24 mm × 5,5 m · Plus (negro) 24 mm × 11 m"], ["Colores", "Negro · Blanco · Amarillo · Rojo · Flúor amarillo · Flúor azul · Flúor naranja · Flúor rosa · Flúor verde"]], icon: tapesIcon("#1A1A1A") },
  { cat: "tapes", type: "Cinta de cámara pocket", brand: "Progaff", brandCode: "P", brandColor: "#1A1A1A", model: "Progaff MiniMix pack 5 colores", photo: "../alquiler/img/pocket-pack-5-multicolor_SpTV.webp", color: "Multicolor", colors: [], info: [["tag", "Tipo", "Cinta de cámara pocket", 1], ["palette", "Color", "Multicolor", 1]], specs: [["Categoría", "Cinta de cámara pocket"], ["Marca", "Progaff"], ["Descripción", "Pack de 5 rollos pequeños de colores para marcar y etiquetar."], ["Medida", "12 mm × 5,4 m"], ["Formato", "Pack de 5 colores"], ["Colores", "Multicolor"]], icon: tapesIcon("#1A1A1A") },
  { cat: "tapes", type: "Cinta americana", brand: "tesa", brandCode: "t", brandColor: "#E2001A", model: "tesa 74613 Profesional", photo: "../alquiler/img/tesa-74613-negro_SpTV.webp", color: "Negro|Gris plata", colors: [{"name": "Negro", "hex": "#1A1A1A", "photo": "../alquiler/img/tesa-74613-negro_SpTV.webp"}, {"name": "Gris plata", "hex": "#B8BDC2", "photo": "../alquiler/img/tesa-74613-gris-plata_SpTV.webp"}], info: [["tag", "Tipo", "Cinta americana", 1], ["palette", "Colores", "2 colores", 1]], specs: [["Categoría", "Cinta americana"], ["Marca", "tesa"], ["Descripción", "Cinta americana profesional de tela para reparaciones y sujeción."], ["Medida", "48 mm × 50 m"], ["Colores", "Negro · Gris plata"]], icon: tapesIcon("#E2001A") },
  { cat: "tapes", type: "Cinta americana", brand: "tesa", brandCode: "t", brandColor: "#E2001A", model: "tesa 56389 Extra Power", photo: "", color: "Gris plata|Blanco|Negro", colors: [], info: [["tag", "Tipo", "Cinta americana", 1], ["palette", "Colores", "3 colores", 1]], specs: [["Categoría", "Cinta americana"], ["Marca", "tesa"], ["Descripción", "Cinta americana muy resistente de tesa (Extra Power)."], ["Medida", "50 mm × 50 m"], ["Colores", "Gris plata · Blanco · Negro"]], icon: tapesIcon("#E2001A") },
  { cat: "tapes", type: "Cinta americana", brand: "Gorilla", brandCode: "G", brandColor: "#1A1A1A", model: "Gorilla Tape", photo: "../alquiler/img/gorilla-tape-negro_SpTV.webp", color: "Negro|Plata", colors: [{"name": "Negro", "hex": "#1A1A1A", "photo": "../alquiler/img/gorilla-tape-negro_SpTV.webp"}, {"name": "Plata", "hex": "#C0C4C8", "photo": "../alquiler/img/gorilla-tape-plata_SpTV.webp"}], info: [["tag", "Tipo", "Cinta americana", 1], ["palette", "Colores", "2 colores", 1], ["capacity", "Formatos", "25 mm · 48 mm"]], specs: [["Categoría", "Cinta americana"], ["Marca", "Gorilla"], ["Descripción", "Cinta americana extrafuerte de doble capa de adhesivo, para superficies rugosas."], ["Medidas", "Negro: 25 mm × 9,4 m y 48 mm × 32 m · Plata: 48 mm × 32 m"], ["Colores", "Negro · Plata"]], icon: tapesIcon("#1A1A1A") },
  { cat: "tapes", type: "Doble cara", brand: "Ceys", brandCode: "C", brandColor: "#E30613", model: "Ceys Montack", photo: "../alquiler/img/ceys-montack-unico_SpTV.webp", color: "Único", colors: [], info: [["tag", "Tipo", "Doble cara", 1], ["palette", "Color", "Único", 1], ["capacity", "Formatos", "2,5 m · 7,5 m"]], specs: [["Categoría", "Doble cara"], ["Marca", "Ceys"], ["Descripción", "Cinta de montaje de doble cara: sustituye a tornillos y clavos."], ["Medidas", "19 mm × 2,5 m · 19 mm × 7,5 m"], ["Colores", "Único"]], icon: tapesIcon("#E30613") },
  { cat: "tapes", type: "Doble cara", brand: "tesa", brandCode: "t", brandColor: "#E2001A", model: "tesa 4934", photo: "../alquiler/img/tesa-4934-unico_SpTV.webp", color: "Único", colors: [], info: [["tag", "Tipo", "Doble cara", 1], ["palette", "Color", "Único", 1], ["capacity", "Formatos", "25 mm · 50 mm"]], specs: [["Categoría", "Doble cara"], ["Marca", "tesa"], ["Descripción", "Cinta de doble cara de tela para fijar moquetas y alfombras."], ["Medidas", "25 mm × 25 m · 50 mm × 25 m"], ["Colores", "Único"]], icon: tapesIcon("#E2001A") },
  { cat: "tapes", type: "Doble cara", brand: "tesa", brandCode: "t", brandColor: "#E2001A", model: "tesa 4964 Premium", photo: "../alquiler/img/tesa-4964-unico_SpTV.webp", color: "Único", colors: [], info: [["tag", "Tipo", "Doble cara", 1], ["palette", "Color", "Único", 1], ["capacity", "Formatos", "25 × 50 m · 50 × 25 m · 50 × 50 m"]], specs: [["Categoría", "Doble cara"], ["Marca", "tesa"], ["Descripción", "Cinta de doble cara de tela de alta adhesión, para suelos y escenarios."], ["Medidas", "25 mm × 50 m · 50 mm × 25 m · 50 mm × 50 m"], ["Colores", "Único"]], icon: tapesIcon("#E2001A") },
  { cat: "tapes", type: "Doble cara", brand: "tesa", brandCode: "t", brandColor: "#E2001A", model: "tesa 4970", photo: "../alquiler/img/tesa-4970-unico_SpTV.webp", color: "Único", colors: [], info: [["tag", "Tipo", "Doble cara", 1], ["palette", "Color", "Único", 1]], specs: [["Categoría", "Doble cara"], ["Marca", "tesa"], ["Descripción", "Cinta de doble cara de alta adhesión para fijaciones permanentes."], ["Medida", "19 mm × 50 m"], ["Colores", "Único"]], icon: tapesIcon("#E2001A") },
  { cat: "tapes", type: "Doble cara", brand: "tesa", brandCode: "t", brandColor: "#E2001A", model: "tesa 4965", photo: "../alquiler/img/tesa-4965-unico_SpTV.webp", color: "Único", colors: [], info: [["tag", "Tipo", "Doble cara", 1], ["palette", "Color", "Único", 1]], specs: [["Categoría", "Doble cara"], ["Marca", "tesa"], ["Descripción", "Cinta de doble cara transparente de alto rendimiento (protector rojo)."], ["Medida", "25 mm × 50 m"], ["Colores", "Único"]], icon: tapesIcon("#E2001A") },
  { cat: "tapes", type: "Doble cara", brand: "tesa", brandCode: "t", brandColor: "#E2001A", model: "tesa 4944", photo: "../alquiler/img/tesa-4944-unico_SpTV.webp", color: "Único", colors: [], info: [["tag", "Tipo", "Doble cara", 1], ["palette", "Color", "Único", 1]], specs: [["Categoría", "Doble cara"], ["Marca", "tesa"], ["Descripción", "Cinta de doble cara extrafuerte para fijar suelos y moquetas."], ["Medida", "50 mm × 25 m"], ["Colores", "Único"]], icon: tapesIcon("#E2001A") },
  { cat: "tapes", type: "Doble cara", brand: "3M", brandCode: "3M", brandColor: "#E2231A", model: "3M tiras transparentes para peluca", photo: "../alquiler/img/3m-clear-peluca-unico_SpTV.webp", color: "Único", colors: [], info: [["tag", "Tipo", "Doble cara", 1], ["palette", "Color", "Único", 1]], specs: [["Categoría", "Doble cara"], ["Marca", "3M"], ["Descripción", "Tiras de doble cara transparentes para fijar pelucas y postizos."], ["Formato", "36 tiras de 3/4''"], ["Colores", "Único"]], icon: tapesIcon("#E2231A") },
  { cat: "tapes", type: "Doble cara", brand: "3M", brandCode: "3M", brandColor: "#E2231A", model: "3M Health Care cinta para peluca", photo: "../alquiler/img/3m-health-care-peluca-unico_SpTV.webp", color: "Único", colors: [], info: [["tag", "Tipo", "Doble cara", 1], ["palette", "Color", "Único", 1]], specs: [["Categoría", "Doble cara"], ["Marca", "3M"], ["Descripción", "Cinta de doble cara de uso médico para fijar pelucas."], ["Medida", "19 mm × 4,5 m"], ["Colores", "Único"]], icon: tapesIcon("#E2231A") },
  { cat: "tapes", type: "Doble cara", brand: "Joe's Sticky Stuff", brandCode: "J", brandColor: "#1A1A1A", model: "Joe's Sticky Stuff", photo: "../alquiler/img/joes-sticky-stuff-unico_SpTV.webp", color: "Único", colors: [], info: [["tag", "Tipo", "Doble cara", 1], ["palette", "Color", "Único", 1]], specs: [["Categoría", "Doble cara"], ["Marca", "Joe's Sticky Stuff"], ["Descripción", "Cinta de doble cara muy fuerte que se retira limpia, muy usada en atrezzo y rodaje."], ["Medida", "25 mm × 6,1 m"], ["Colores", "Único"]], icon: tapesIcon("#1A1A1A") },
  { cat: "tapes", type: "Doble cara", brand: "Hippo", brandCode: "H", brandColor: "#5C6672", model: "Hippo-SKIN", photo: "", color: "Único", colors: [], info: [["tag", "Tipo", "Doble cara", 1], ["palette", "Color", "Único", 1], ["capacity", "Formatos", "Mini Roll · Regular"]], specs: [["Categoría", "Doble cara"], ["Marca", "Hippo"], ["Descripción", "Cinta de doble cara de uso sobre piel para fijar micrófonos de solapa y transmisores."], ["Formatos", "Mini Roll · Regular"], ["Colores", "Único"]], icon: tapesIcon("#5C6672") },
  { cat: "tapes", type: "Cinta de butilo", brand: "Hide-a-mic", brandCode: "H", brandColor: "#1A1A1A", model: "Hide-a-mic cinta de butilo", photo: "../alquiler/img/hide-a-mic-butilo-unico_SpTV.webp", color: "Único", colors: [], info: [["tag", "Tipo", "Cinta de butilo", 1], ["palette", "Color", "Único", 1]], specs: [["Categoría", "Cinta de butilo"], ["Marca", "Hide-a-mic"], ["Descripción", "Cinta de butilo moldeable para fijar y amortiguar micrófonos de solapa."], ["Medida", "12 mm × 3 m"], ["Uso", "Sonido"], ["Colores", "Único"]], icon: tapesIcon("#1A1A1A") },
  { cat: "tapes", type: "Carrocero", brand: "tesa", brandCode: "t", brandColor: "#E2001A", model: "tesa NOPI 4349", photo: "../alquiler/img/tesa-4349-beige_SpTV.webp", color: "Beige", colors: [], info: [["tag", "Tipo", "Carrocero", 1], ["palette", "Color", "Beige", 1], ["capacity", "Formatos", "25 mm · 30 mm · 50 mm"]], specs: [["Categoría", "Carrocero"], ["Marca", "tesa"], ["Descripción", "Cinta de carrocero de papel para enmascarar y rotular."], ["Medidas", "25 mm × 45 m · 30 mm × 45 m · 50 mm × 50 m"], ["Colores", "Beige"]], icon: tapesIcon("#E2001A") },
  { cat: "tapes", type: "Carrocero", brand: "tesa", brandCode: "t", brandColor: "#E2001A", model: "tesa 4323", photo: "../alquiler/img/tesa-4323-beige_SpTV.webp", color: "Beige", colors: [], info: [["tag", "Tipo", "Carrocero", 1], ["palette", "Color", "Beige", 1]], specs: [["Categoría", "Carrocero"], ["Marca", "tesa"], ["Descripción", "Cinta de carrocero de papel de uso general."], ["Medida", "50 mm × 50 m"], ["Colores", "Beige"]], icon: tapesIcon("#E2001A") },
  { cat: "tapes", type: "Carrocero", brand: "tesa", brandCode: "t", brandColor: "#E2001A", model: "tesa Mask superficies delicadas", photo: "../alquiler/img/tesa-mask-rosa-rosa_SpTV.webp", color: "Rosa", colors: [], info: [["tag", "Tipo", "Carrocero", 1], ["palette", "Color", "Rosa", 1]], specs: [["Categoría", "Carrocero"], ["Marca", "tesa"], ["Descripción", "Cinta de enmascarar de baja adhesión para superficies delicadas."], ["Medida", "19 mm × 50 m"], ["Colores", "Rosa"]], icon: tapesIcon("#E2001A") },
  { cat: "tapes", type: "Cinta de papel", brand: "Progaff", brandCode: "P", brandColor: "#1A1A1A", model: "Progaff cinta de papel", photo: "../alquiler/img/progaff-papel-negro_SpTV.webp", color: "Negro|Blanco|Amarillo|Azul claro|Azul oscuro|Marrón|Morado|Naranja|Rojo|Rosa claro|Verde claro|Verde oscuro", colors: [{"name": "Negro", "hex": "#1A1A1A", "photo": "../alquiler/img/progaff-papel-negro_SpTV.webp"}, {"name": "Blanco", "hex": "#FFFFFF", "photo": "../alquiler/img/progaff-papel-blanco_SpTV.webp"}, {"name": "Amarillo", "hex": "#F2C200", "photo": "../alquiler/img/progaff-papel-amarillo_SpTV.webp"}, {"name": "Azul claro", "hex": "#7FB6F0", "photo": "../alquiler/img/progaff-papel-azul-claro_SpTV.webp"}, {"name": "Azul oscuro", "hex": "#1A2F7A", "photo": "../alquiler/img/progaff-papel-azul-oscuro_SpTV.webp"}, {"name": "Morado", "hex": "#7B3FA0", "photo": "../alquiler/img/progaff-papel-morado_SpTV.webp"}, {"name": "Naranja", "hex": "#F07A1A", "photo": "../alquiler/img/progaff-papel-naranja_SpTV.webp"}, {"name": "Rojo", "hex": "#D0202E", "photo": "../alquiler/img/progaff-papel-rojo_SpTV.webp"}, {"name": "Rosa claro", "hex": "#F6B3CF", "photo": "../alquiler/img/progaff-papel-rosa-claro_SpTV.webp"}, {"name": "Verde claro", "hex": "#8BD17C", "photo": "../alquiler/img/progaff-papel-verde-claro_SpTV.webp"}, {"name": "Verde oscuro", "hex": "#1F5E33", "photo": "../alquiler/img/progaff-papel-verde-oscuro_SpTV.webp"}], info: [["tag", "Tipo", "Cinta de papel", 1], ["palette", "Colores", "12 colores", 1], ["capacity", "Formatos", "24 mm · 48 mm"]], specs: [["Categoría", "Cinta de papel"], ["Marca", "Progaff"], ["Descripción", "Cinta de papel (spike tape) para marcar y etiquetar: se escribe encima y se quita limpia."], ["Medidas", "24 mm × 55 m (PRO46) · marrón 24 mm × 22,86 m · negro 48 mm × 55 m"], ["Colores", "Negro · Blanco · Amarillo · Azul claro · Azul oscuro · Marrón · Morado · Naranja · Rojo · Rosa claro · Verde claro · Verde oscuro"]], icon: tapesIcon("#1A1A1A") },
  { cat: "tapes", type: "Cinta de papel", brand: "Progaff", brandCode: "P", brandColor: "#1A1A1A", model: "Progaff Console flúor", photo: "", color: "Flúor amarillo|Flúor naranja|Flúor rosa|Flúor verde", colors: [], info: [["tag", "Tipo", "Cinta de papel", 1], ["palette", "Colores", "4 colores", 1]], specs: [["Categoría", "Cinta de papel"], ["Marca", "Progaff"], ["Descripción", "Cinta de papel flúor para consolas y marcas, muy visible."], ["Medida", "24 mm × 22,9 m"], ["Colores", "Flúor amarillo · Flúor naranja · Flúor rosa · Flúor verde"]], icon: tapesIcon("#1A1A1A") },
  { cat: "tapes", type: "Cinta de papel", brand: "tesa", brandCode: "t", brandColor: "#E2001A", model: "tesa 4328", photo: "../alquiler/img/tesa-4328-negro_SpTV.webp", color: "Negro|Azul|Rojo", colors: [{"name": "Negro", "hex": "#1A1A1A", "photo": "../alquiler/img/tesa-4328-negro_SpTV.webp"}, {"name": "Rojo", "hex": "#D0202E", "photo": "../alquiler/img/tesa-4328-rojo_SpTV.webp"}], info: [["tag", "Tipo", "Cinta de papel", 1], ["palette", "Colores", "3 colores", 1]], specs: [["Categoría", "Cinta de papel"], ["Marca", "tesa"], ["Descripción", "Cinta de papel de colores para marcar y señalizar."], ["Medidas", "Azul y rojo 19 mm × 50 m · negro 25 mm × 50 m y 50 mm × 50 m"], ["Colores", "Negro · Azul · Rojo"]], icon: tapesIcon("#E2001A") },
  { cat: "tapes", type: "Cinta de papel", brand: "Apli", brandCode: "A", brandColor: "#E2001A", model: "Apli pack cinta flúor", photo: "", color: "Multicolor", colors: [], info: [["tag", "Tipo", "Cinta de papel", 1], ["palette", "Color", "Multicolor", 1]], specs: [["Categoría", "Cinta de papel"], ["Marca", "Apli"], ["Descripción", "Pack de 4 cintas de papel flúor para marcar."], ["Medida", "15 mm × 10 m"], ["Formato", "Pack de 4"], ["Colores", "Multicolor"]], icon: tapesIcon("#E2001A") },
  { cat: "tapes", type: "Cinta de papel", brand: "Shurtape", brandCode: "S", brandColor: "#0047AB", model: "Shurtape CP-743", photo: "../alquiler/img/shurtape-p743-negro_SpTV.webp", color: "Negro", colors: [], info: [["tag", "Tipo", "Cinta de papel", 1], ["palette", "Color", "Negro", 1]], specs: [["Categoría", "Cinta de papel"], ["Marca", "Shurtape"], ["Descripción", "Cinta de papel negra mate de uso profesional en iluminación (blackwrap)."], ["Medida", "48 mm × 50 m"], ["Colores", "Negro"]], icon: tapesIcon("#0047AB") },
  { cat: "tapes", type: "Cinta aislante", brand: "tesa", brandCode: "t", brandColor: "#E2001A", model: "tesa 53988 aislante", photo: "../alquiler/img/tesa-53988-azul_SpTV.webp", color: "Negro|Blanco|Amarillo|Azul|Gris|Marrón|Rojo|Verde|Verde-amarillo", colors: [{"name": "Azul", "hex": "#1F5FD0", "photo": "../alquiler/img/tesa-53988-azul_SpTV.webp"}, {"name": "Gris", "hex": "#8A8F96", "photo": "../alquiler/img/tesa-53988-gris_SpTV.webp"}, {"name": "Marrón", "hex": "#6B4A2B", "photo": "../alquiler/img/tesa-53988-marron_SpTV.webp"}, {"name": "Rojo", "hex": "#D0202E", "photo": "../alquiler/img/tesa-53988-rojo_SpTV.webp"}], info: [["tag", "Tipo", "Cinta aislante", 1], ["palette", "Colores", "9 colores", 1]], specs: [["Categoría", "Cinta aislante"], ["Marca", "tesa"], ["Descripción", "Cinta aislante de PVC para electricidad, en todos los colores de cableado."], ["Medida", "19 mm × 20 m"], ["Colores", "Negro · Blanco · Amarillo · Azul · Gris · Marrón · Rojo · Verde · Verde-amarillo"]], icon: tapesIcon("#E2001A") },
  { cat: "tapes", type: "Cinta aislante", brand: "EDM", brandCode: "E", brandColor: "#E30613", model: "EDM Supra aislante", photo: "../alquiler/img/edm-supra-negro_SpTV.webp", color: "Negro|Blanco", colors: [{"name": "Negro", "hex": "#1A1A1A", "photo": "../alquiler/img/edm-supra-negro_SpTV.webp"}, {"name": "Blanco", "hex": "#FFFFFF", "photo": "../alquiler/img/edm-supra-blanco_SpTV.webp"}], info: [["tag", "Tipo", "Cinta aislante", 1], ["palette", "Colores", "2 colores", 1]], specs: [["Categoría", "Cinta aislante"], ["Marca", "EDM"], ["Descripción", "Cinta aislante de PVC."], ["Medida", "19 mm × 20 m"], ["Colores", "Negro · Blanco"]], icon: tapesIcon("#E30613") },
  { cat: "tapes", type: "Señalización", brand: "tesa", brandCode: "t", brandColor: "#E2001A", model: "tesa 60760 señalización PVC", photo: "../alquiler/img/tesa-60760-negro-amarillo_SpTV.webp", color: "Negro-amarillo|Rojo-blanco", colors: [{"name": "Negro-amarillo", "hex": "#2B2B00", "photo": "../alquiler/img/tesa-60760-negro-amarillo_SpTV.webp"}, {"name": "Rojo-blanco", "hex": "#E8505B", "photo": "../alquiler/img/tesa-60760-rojo-blanco_SpTV.webp"}], info: [["tag", "Tipo", "Señalización", 1], ["palette", "Colores", "2 colores", 1]], specs: [["Categoría", "Señalización"], ["Marca", "tesa"], ["Descripción", "Cinta adhesiva de señalización de PVC para marcar zonas de peligro y pasos."], ["Medida", "50 mm × 33 m"], ["Colores", "Negro-amarillo · Rojo-blanco"]], icon: tapesIcon("#E2001A") },
  { cat: "tapes", type: "Señalización", brand: "tesa", brandCode: "t", brandColor: "#E2001A", model: "tesa 58133 / 58134 señalización", photo: "../alquiler/img/tesa-5813x-negro-amarillo_SpTV.webp", color: "Negro-amarillo|Rojo-blanco", colors: [{"name": "Negro-amarillo", "hex": "#2B2B00", "photo": "../alquiler/img/tesa-5813x-negro-amarillo_SpTV.webp"}, {"name": "Rojo-blanco", "hex": "#E8505B", "photo": "../alquiler/img/tesa-5813x-rojo-blanco_SpTV.webp"}], info: [["tag", "Tipo", "Señalización", 1], ["palette", "Colores", "2 colores", 1]], specs: [["Categoría", "Señalización"], ["Marca", "tesa"], ["Descripción", "Cinta adhesiva de señalización de polipropileno."], ["Medida", "50 mm × 66 m"], ["Referencias", "58133 negro-amarillo · 58134 rojo-blanco"], ["Colores", "Negro-amarillo · Rojo-blanco"]], icon: tapesIcon("#E2001A") },
  { cat: "tapes", type: "Señalización", brand: "tesa", brandCode: "t", brandColor: "#E2001A", model: "tesa 58137 cinta de balizamiento", photo: "../alquiler/img/tesa-58137-rojo-blanco_SpTV.webp", color: "Rojo-blanco", colors: [], info: [["tag", "Tipo", "Señalización", 1], ["palette", "Color", "Rojo-blanco", 1]], specs: [["Categoría", "Señalización"], ["Marca", "tesa"], ["Descripción", "Cinta de balizamiento no adhesiva para acordonar zonas."], ["Medida", "80 mm × 100 m"], ["Colores", "Rojo-blanco"]], icon: tapesIcon("#E2001A") },
  { cat: "tapes", type: "Señalización", brand: "tesa", brandCode: "t", brandColor: "#E2001A", model: "tesa fotoluminiscente antideslizante", photo: "../alquiler/img/tesa-fotoluminiscente-fotoluminiscente_SpTV.webp", color: "Fotoluminiscente", colors: [], info: [["tag", "Tipo", "Señalización", 1], ["palette", "Color", "Fotoluminiscente", 1], ["capacity", "Formatos", "5 m · 15 m"]], specs: [["Categoría", "Señalización"], ["Marca", "tesa"], ["Descripción", "Cinta que brilla en la oscuridad y antideslizante, para marcar escalones y salidas."], ["Medidas", "25 mm × 5 m · 25 mm × 15 m"], ["Colores", "Fotoluminiscente"]], icon: tapesIcon("#E2001A") },
  { cat: "tapes", type: "Pasacables", brand: "tesa", brandCode: "t", brandColor: "#E2001A", model: "tesa Tunnel Tape 4611", photo: "../alquiler/img/tesa-4611-negro_SpTV.webp", color: "Negro", colors: [], info: [["tag", "Tipo", "Pasacables", 1], ["palette", "Color", "Negro", 1]], specs: [["Categoría", "Pasacables"], ["Marca", "tesa"], ["Descripción", "Cinta pasacables que cubre y protege los cables en el suelo con tira central sin adhesivo."], ["Medida", "150 mm × 25 m"], ["Colores", "Negro"]], icon: tapesIcon("#E2001A") },
  { cat: "tapes", type: "Cinta médica", brand: "3M", brandCode: "3M", brandColor: "#E2231A", model: "3M Transpore", photo: "../alquiler/img/3m-transpore-transparente_SpTV.webp", color: "Transparente", colors: [], info: [["tag", "Tipo", "Cinta médica", 1], ["palette", "Color", "Transparente", 1]], specs: [["Categoría", "Cinta médica"], ["Marca", "3M"], ["Descripción", "Esparadrapo transparente y perforado, se corta con la mano."], ["Medida", "2,5 cm × 9 m"], ["Colores", "Transparente"]], icon: tapesIcon("#E2231A") },
  { cat: "tapes", type: "Cinta médica", brand: "3M", brandCode: "3M", brandColor: "#E2231A", model: "3M Nexcare Active Tape", photo: "../alquiler/img/3m-nexcare-active-carne_SpTV.webp", color: "Carne", colors: [], info: [["tag", "Tipo", "Cinta médica", 1], ["palette", "Color", "Carne", 1]], specs: [["Categoría", "Cinta médica"], ["Marca", "3M"], ["Descripción", "Esparadrapo de tela resistente al agua y flexible."], ["Medida", "2,54 cm × 4,5 m"], ["Colores", "Carne"]], icon: tapesIcon("#E2231A") },
  { cat: "tapes", type: "Cinta médica", brand: "3M", brandCode: "3M", brandColor: "#E2231A", model: "3M Micropore", photo: "../alquiler/img/3m-micropore-carne_SpTV.webp", color: "Carne|Blanco", colors: [{"name": "Carne", "hex": "#E8C4A8", "photo": "../alquiler/img/3m-micropore-carne_SpTV.webp"}, {"name": "Blanco", "hex": "#FFFFFF", "photo": "../alquiler/img/3m-micropore-blanco_SpTV.webp"}], info: [["tag", "Tipo", "Cinta médica", 1], ["palette", "Colores", "2 colores", 1]], specs: [["Categoría", "Cinta médica"], ["Marca", "3M"], ["Descripción", "Esparadrapo de papel suave para piel sensible."], ["Medida", "2,5 cm × 9 m"], ["Colores", "Carne · Blanco"]], icon: tapesIcon("#E2231A") },
  { cat: "tapes", type: "Cinta médica", brand: "", brandCode: "", brandColor: "#5C6672", model: "Cinta de kinesiología", photo: "", color: "Carne|Negro", colors: [], info: [["tag", "Tipo", "Cinta médica", 1], ["palette", "Colores", "2 colores", 1]], specs: [["Categoría", "Cinta médica"], ["Descripción", "Cinta elástica de kinesiología; en rodaje se usa para fijar micrófonos y cables a la piel."], ["Medida", "50 mm × 5 m"], ["Colores", "Carne · Negro"]], icon: tapesIcon("#5C6672") },
  { cat: "tapes", type: "Cinta térmica", brand: "tesa", brandCode: "t", brandColor: "#E2001A", model: "tesa 50577 anticalórica", photo: "../alquiler/img/tesa-50577-negro_SpTV.webp", color: "Negro", colors: [], info: [["tag", "Tipo", "Cinta térmica", 1], ["palette", "Color", "Negro", 1]], specs: [["Categoría", "Cinta térmica"], ["Marca", "tesa"], ["Descripción", "Cinta resistente al calor para focos y equipos que se calientan."], ["Medida", "50 mm × 25 m"], ["Colores", "Negro"]], icon: tapesIcon("#E2001A") },
  { cat: "tapes", type: "Cinta térmica", brand: "tesa", brandCode: "t", brandColor: "#E2001A", model: "tesa cinta de aluminio", photo: "../alquiler/img/tesa-aluminio-aluminio_SpTV.webp", color: "Aluminio", colors: [], info: [["tag", "Tipo", "Cinta térmica", 1], ["palette", "Color", "Aluminio", 1]], specs: [["Categoría", "Cinta térmica"], ["Marca", "tesa"], ["Descripción", "Cinta de aluminio de 50 micras, refleja el calor y sella."], ["Medida", "50 mm × 10 m"], ["Colores", "Aluminio"]], icon: tapesIcon("#E2001A") },
  { cat: "tapes", type: "Embalaje", brand: "tesa", brandCode: "t", brandColor: "#E2001A", model: "tesa precinto", photo: "", color: "Transparente", colors: [], info: [["tag", "Tipo", "Embalaje", 1], ["palette", "Color", "Transparente", 1]], specs: [["Categoría", "Embalaje"], ["Marca", "tesa"], ["Descripción", "Cinta de embalaje para cerrar cajas."], ["Medida", "48 mm × 126 m"], ["Colores", "Transparente"]], icon: tapesIcon("#E2001A") },
  { cat: "tapes", type: "Embalaje", brand: "", brandCode: "", brandColor: "#5C6672", model: "Film industrial", photo: "", color: "Transparente", colors: [], info: [["tag", "Tipo", "Embalaje", 1], ["palette", "Color", "Transparente", 1]], specs: [["Categoría", "Embalaje"], ["Descripción", "Film estirable para embalar y proteger material en palés y transporte."], ["Medida", "50 cm × 125 m"], ["Colores", "Transparente"]], icon: tapesIcon("#5C6672") },
  { cat: "tapes", type: "Reparación", brand: "Gorilla", brandCode: "G", brandColor: "#1A1A1A", model: "Gorilla cinta de reparación transparente", photo: "../alquiler/img/gorilla-transparente-transparente_SpTV.webp", color: "Transparente", colors: [], info: [["tag", "Tipo", "Reparación", 1], ["palette", "Color", "Transparente", 1]], specs: [["Categoría", "Reparación"], ["Marca", "Gorilla"], ["Descripción", "Cinta de reparación transparente y extrafuerte, para interior y exterior."], ["Medida", "48 mm × 8,2 m"], ["Colores", "Transparente"]], icon: tapesIcon("#1A1A1A") },
  { cat: "tapes", type: "Cinta de datos", brand: "C-Tape", brandCode: "C", brandColor: "#1A1A1A", model: "C-Tape cinta de datos", photo: "../alquiler/img/c-tape-blanco_SpTV.webp", color: "Blanco|Amarillo|Azul|Rojo|Verde", colors: [{"name": "Blanco", "hex": "#FFFFFF", "photo": "../alquiler/img/c-tape-blanco_SpTV.webp"}, {"name": "Amarillo", "hex": "#F2C200", "photo": "../alquiler/img/c-tape-amarillo_SpTV.webp"}, {"name": "Azul", "hex": "#1F5FD0", "photo": "../alquiler/img/c-tape-azul_SpTV.webp"}, {"name": "Rojo", "hex": "#D0202E", "photo": "../alquiler/img/c-tape-rojo_SpTV.webp"}, {"name": "Verde", "hex": "#1E9C46", "photo": "../alquiler/img/c-tape-verde_SpTV.webp"}], info: [["tag", "Tipo", "Cinta de datos", 1], ["palette", "Colores", "5 colores", 1]], specs: [["Categoría", "Cinta de datos"], ["Marca", "C-Tape"], ["Descripción", "Etiquetas de datos para cámaras, cargadores y tarjetas: se escriben y se quitan sin dejar restos."], ["Medida", "25 mm × 15 m"], ["Formato", "250 unidades"], ["Colores", "Blanco · Amarillo · Azul · Rojo · Verde"]], icon: tapesIcon("#1A1A1A") }
];

// BACKDROPS: purchase catalogue, official photos from each brand's website.
// colors: one photo per colour; the dots on the card swap the photo (generated by tools/build_sonido_data.py)
const BACKDROPS = [
  { cat: "backdrops", type: "Tela molton", brand: "Adam Hall", brandCode: "AH", brandColor: "#1A1A1A", model: "Adam Hall tela molton negra", photo: "../alquiler/img/adam-hall-molton-negro_SpTV.webp", color: "Negro", colors: [], info: [["tag", "Tipo", "Tela molton", 1], ["palette", "Color", "Negro", 1], ["capacity", "Formatos", "160 g · 6 × 6 m · 300 g · 3 × 3 m · 300 g · 4 × 3 m · 300 g · 6 × 6 m"]], specs: [["Categoría", "Tela molton"], ["Marca", "Adam Hall"], ["Descripción", "Tela molton negra con ojales para fondos, aforos y tapar luz; absorbe la luz y amortigua el sonido."], ["Medidas", "160 g/m²: 6 × 6 m · 300 g/m²: 3 × 3 m, 4 × 3 m y 6 × 6 m"], ["Acabado", "Con ojales"], ["Colores", "Negro"]], icon: backdropsIcon("#1A1A1A") }
];

// OTHERSOUND: purchase catalogue, official photos and free-licence photos.
// colors: one photo per colour; the dots on the card swap the photo (generated by tools/build_sonido_data.py)
const OTHERSOUND = [
  { cat: "othersound", type: "Aislamiento", brand: "", brandCode: "", brandColor: "#5C6672", model: "Neopreno adhesivo esponjoso", photo: "", color: "Negro", colors: [], info: [["tag", "Tipo", "Aislamiento", 1], ["palette", "Color", "Negro", 1]], specs: [["Categoría", "Aislamiento"], ["Descripción", "Lámina de neopreno esponjoso con adhesivo para amortiguar golpes y ruidos y aislar superficies."], ["Medida", "1 m × 1 m × 3 mm"], ["Adhesivo", "Sí"], ["Colores", "Negro"]], icon: othersoundIcon("#5C6672") },
  { cat: "othersound", type: "Aislamiento", brand: "", brandCode: "", brandColor: "#5C6672", model: "Depron aislante", photo: "", color: "Blanco", colors: [], info: [["tag", "Tipo", "Aislamiento", 1], ["palette", "Color", "Blanco", 1]], specs: [["Categoría", "Aislamiento"], ["Descripción", "Plancha de espuma Depron ligera y aislante, fácil de cortar."], ["Medida", "120 × 80 mm × 3 mm"], ["Color", "Blanco"], ["Colores", "Blanco"]], icon: othersoundIcon("#5C6672") },
  { cat: "othersound", type: "Panel", brand: "", brandCode: "", brandColor: "#5C6672", model: "Cartón pluma", photo: "", color: "Blanco|Negro", colors: [], info: [["tag", "Tipo", "Panel", 1], ["palette", "Colores", "2 colores", 1]], specs: [["Categoría", "Panel"], ["Descripción", "Panel ligero de cartón pluma para rebotar o quitar luz, hacer pantallas y montajes."], ["Medidas", "Blanco: 70 × 100 cm × 3 mm · Negro (dos caras): 70 × 100 cm × 5 mm"], ["Adhesivo", "No"], ["Colores", "Blanco · Negro"]], icon: othersoundIcon("#5C6672") },
  { cat: "othersound", type: "Ruido de pasos", brand: "", brandCode: "", brandColor: "#5C6672", model: "Tacones silenciadores", photo: "", color: "Negro|Transparente", colors: [], info: [["tag", "Tipo", "Ruido de pasos", 1], ["palette", "Colores", "2 colores", 1], ["capacity", "Formatos", "XS · S · M · L"]], specs: [["Categoría", "Ruido de pasos"], ["Descripción", "Protectores para tacones que amortiguan el ruido de los pasos durante la toma de sonido."], ["Tallas", "XS · S · M · L"], ["Colores", "Negro · Transparente"]], icon: othersoundIcon("#5C6672") },
  { cat: "othersound", type: "Auriculares", brand: "Sennheiser", brandCode: "S", brandColor: "#0A2C5E", model: "Sennheiser HD 206", photo: "../alquiler/img/sennheiser-hd206-negro_SpTV.webp", color: "Negro", colors: [], info: [["tag", "Tipo", "Auriculares", 1], ["palette", "Color", "Negro", 1]], specs: [["Categoría", "Auriculares"], ["Marca", "Sennheiser"], ["Descripción", "Auriculares cerrados de diadema para monitorizar sonido."], ["Tipo", "Cerrados, de diadema"], ["Conexión", "Jack 3,5 mm (con adaptador a 6,3 mm)"], ["Colores", "Negro"]], icon: othersoundIcon("#0A2C5E") },
  { cat: "othersound", type: "Auriculares", brand: "Sony", brandCode: "S", brandColor: "#1A1A1A", model: "Sony MDR-ZX110", photo: "../alquiler/img/sony-mdr-zx-negro_SpTV.webp", color: "Negro", colors: [], info: [["tag", "Tipo", "Auriculares", 1], ["palette", "Color", "Negro", 1]], specs: [["Categoría", "Auriculares"], ["Marca", "Sony"], ["Descripción", "Auriculares de diadema ligeros y plegables."], ["Tipo", "Diadema"], ["Conexión", "Jack 3,5 mm"], ["Colores", "Negro"]], icon: othersoundIcon("#1A1A1A") },
  { cat: "othersound", type: "Auriculares", brand: "Logitech", brandCode: "L", brandColor: "#00B8FC", model: "Logitech H390", photo: "../alquiler/img/logitech-h390-negro_SpTV.webp", color: "Negro", colors: [], info: [["tag", "Tipo", "Auriculares", 1], ["palette", "Color", "Negro", 1]], specs: [["Categoría", "Auriculares"], ["Marca", "Logitech"], ["Descripción", "Auriculares USB con micrófono con cancelación de ruido, para videollamadas."], ["Conexión", "USB"], ["Micrófono", "Sí, con cancelación de ruido"], ["Colores", "Negro"]], icon: othersoundIcon("#00B8FC") }
];

// LAVACC: purchase catalogue, official photos from Ursa Straps, Viviana, Bubblebee Industries and ORCA.
// colors: one photo per colour; the dots on the card swap the photo (generated by tools/build_sonido_data.py)
const LAVACC = [
  { cat: "lavacc", type: "Bolsillo / pouch", brand: "Viviana", brandCode: "V", brandColor: "#5C6672", model: "Viviana Belt Puffy", photo: "../alquiler/img/viviana-belt-puffy-beige_SpTV.webp", color: "Beige|Negro", colors: [{"name": "Beige", "hex": "#D8B48C", "photo": "../alquiler/img/viviana-belt-puffy-beige_SpTV.webp"}, {"name": "Negro", "hex": "#1A1A1A", "photo": "../alquiler/img/viviana-belt-puffy-negro_SpTV.webp"}], info: [["tag", "Tipo", "Bolsillo / pouch", 1], ["palette", "Colores", "2 colores", 1], ["capacity", "Tallas", "S · M · L"]], specs: [["Categoría", "Bolsillo / pouch"], ["Marca", "Viviana"], ["Descripción", "Bolsillo acolchado para llevar la petaca del micrófono en el cinturón, cómodo y discreto."], ["Tallas", "S · M · L"], ["Colores", "Beige · Negro"]], icon: lavaccIcon("#5C6672") },
  { cat: "lavacc", type: "Bolsillo / pouch", brand: "Ursa Straps", brandCode: "U", brandColor: "#1F2937", model: "Ursa Belt Pouch", photo: "../alquiler/img/ursa-belt-pouch-beige_SpTV.webp", color: "Beige|Negro|Blanco", colors: [{"name": "Beige", "hex": "#D8B48C", "photo": "../alquiler/img/ursa-belt-pouch-beige_SpTV.webp"}, {"name": "Negro", "hex": "#1A1A1A", "photo": "../alquiler/img/ursa-belt-pouch-negro_SpTV.webp"}, {"name": "Blanco", "hex": "#FFFFFF", "photo": "../alquiler/img/ursa-belt-pouch-blanco_SpTV.webp"}], info: [["tag", "Tipo", "Bolsillo / pouch", 1], ["palette", "Colores", "3 colores", 1], ["capacity", "Tallas", "M · L · XL"]], specs: [["Categoría", "Bolsillo / pouch"], ["Marca", "Ursa Straps"], ["Descripción", "Bolsillo elástico para llevar la petaca en el cinturón o la cintura."], ["Tallas", "M · L · XL"], ["Colores", "Beige · Negro · Blanco"]], icon: lavaccIcon("#1F2937") },
  { cat: "lavacc", type: "Bolsillo / pouch", brand: "Ursa Straps", brandCode: "U", brandColor: "#1F2937", model: "Ursa Mini Pouch", photo: "../alquiler/img/ursa-mini-pouch-beige_SpTV.webp", color: "Beige", colors: [], info: [["tag", "Tipo", "Bolsillo / pouch", 1], ["palette", "Color", "Beige", 1]], specs: [["Categoría", "Bolsillo / pouch"], ["Marca", "Ursa Straps"], ["Descripción", "Bolsillo pequeño para petacas compactas."], ["Tamaño", "Mini"], ["Colores", "Beige"]], icon: lavaccIcon("#1F2937") },
  { cat: "lavacc", type: "Correa", brand: "Ursa Straps", brandCode: "U", brandColor: "#1F2937", model: "Ursa Head Strap", photo: "../alquiler/img/ursa-head-strap-beige_SpTV.webp", color: "Beige|Blanco|Negro", colors: [{"name": "Beige", "hex": "#D8B48C", "photo": "../alquiler/img/ursa-head-strap-beige_SpTV.webp"}, {"name": "Negro", "hex": "#1A1A1A", "photo": "../alquiler/img/ursa-head-strap-negro_SpTV.webp"}], info: [["tag", "Tipo", "Correa", 1], ["palette", "Colores", "3 colores", 1]], specs: [["Categoría", "Correa"], ["Marca", "Ursa Straps"], ["Descripción", "Correa de cabeza para fijar el micrófono o la petaca en la cabeza, oculta bajo el pelo o un sombrero."], ["Zona", "Cabeza"], ["Colores", "Beige · Blanco · Negro"]], icon: lavaccIcon("#1F2937") },
  { cat: "lavacc", type: "Correa", brand: "Ursa Straps", brandCode: "U", brandColor: "#1F2937", model: "Ursa Waist Strap", photo: "../alquiler/img/ursa-waist-strap-beige_SpTV.webp", color: "Beige|Blanco|Negro|Marrón|Caramelo", colors: [{"name": "Beige", "hex": "#D8B48C", "photo": "../alquiler/img/ursa-waist-strap-beige_SpTV.webp"}, {"name": "Blanco", "hex": "#FFFFFF", "photo": "../alquiler/img/ursa-waist-strap-blanco_SpTV.webp"}, {"name": "Negro", "hex": "#1A1A1A", "photo": "../alquiler/img/ursa-waist-strap-negro_SpTV.webp"}, {"name": "Marrón", "hex": "#6B4A2B", "photo": "../alquiler/img/ursa-waist-strap-marron_SpTV.webp"}, {"name": "Caramelo", "hex": "#A9744F", "photo": "../alquiler/img/ursa-waist-strap-caramelo_SpTV.webp"}], info: [["tag", "Tipo", "Correa", 1], ["palette", "Colores", "5 colores", 1], ["capacity", "Tallas", "S · M · L"]], specs: [["Categoría", "Correa"], ["Marca", "Ursa Straps"], ["Descripción", "Correa de cintura con compartimento grande para la petaca, oculta bajo la ropa."], ["Zona", "Cintura"], ["Compartimento", "Grande"], ["Tallas", "S · M · L"], ["Colores", "Beige · Blanco · Negro · Marrón · Caramelo"]], icon: lavaccIcon("#1F2937") },
  { cat: "lavacc", type: "Correa", brand: "Ursa Straps", brandCode: "U", brandColor: "#1F2937", model: "Ursa Waist Strap doble compartimento", photo: "../alquiler/img/ursa-waist-strap-double-beige_SpTV.webp", color: "Beige", colors: [], info: [["tag", "Tipo", "Correa", 1], ["palette", "Color", "Beige", 1], ["capacity", "Talla", "M"]], specs: [["Categoría", "Correa"], ["Marca", "Ursa Straps"], ["Descripción", "Correa de cintura con dos compartimentos (petaca y grabador o dos petacas)."], ["Zona", "Cintura"], ["Compartimento", "Doble"], ["Talla", "M"], ["Colores", "Beige"]], icon: lavaccIcon("#1F2937") },
  { cat: "lavacc", type: "Correa", brand: "Viviana", brandCode: "V", brandColor: "#5C6672", model: "Viviana Waist Strap Extreme", photo: "../alquiler/img/viviana-waist-extreme-beige_SpTV.webp", color: "Beige|Negro", colors: [{"name": "Beige", "hex": "#D8B48C", "photo": "../alquiler/img/viviana-waist-extreme-beige_SpTV.webp"}, {"name": "Negro", "hex": "#1A1A1A", "photo": "../alquiler/img/viviana-waist-extreme-negro_SpTV.webp"}], info: [["tag", "Tipo", "Correa", 1], ["palette", "Colores", "2 colores", 1], ["capacity", "Tallas", "S · M · L · XL"]], specs: [["Categoría", "Correa"], ["Marca", "Viviana"], ["Descripción", "Correa de cintura Extreme de Viviana: sujeción firme de la petaca para escenas de movimiento."], ["Zona", "Cintura"], ["Tallas", "S · M · L · XL"], ["Colores", "Beige · Negro"]], icon: lavaccIcon("#5C6672") },
  { cat: "lavacc", type: "Correa", brand: "Ursa Straps", brandCode: "U", brandColor: "#1F2937", model: "Ursa Back Strap", photo: "../alquiler/img/ursa-back-strap-beige_SpTV.webp", color: "Beige|Negro", colors: [{"name": "Beige", "hex": "#D8B48C", "photo": "../alquiler/img/ursa-back-strap-beige_SpTV.webp"}, {"name": "Negro", "hex": "#1A1A1A", "photo": "../alquiler/img/ursa-back-strap-negro_SpTV.webp"}], info: [["tag", "Tipo", "Correa", 1], ["palette", "Colores", "2 colores", 1], ["capacity", "Tallas", "S · M · L"]], specs: [["Categoría", "Correa"], ["Marca", "Ursa Straps"], ["Descripción", "Correa para llevar la petaca en la espalda, bajo la ropa."], ["Zona", "Espalda"], ["Tallas", "S · M · L"], ["Colores", "Beige · Negro"]], icon: lavaccIcon("#1F2937") },
  { cat: "lavacc", type: "Correa", brand: "Ursa Straps", brandCode: "U", brandColor: "#1F2937", model: "Ursa X-Strap", photo: "../alquiler/img/ursa-x-strap-beige_SpTV.webp", color: "Beige|Negro", colors: [{"name": "Beige", "hex": "#D8B48C", "photo": "../alquiler/img/ursa-x-strap-beige_SpTV.webp"}, {"name": "Negro", "hex": "#1A1A1A", "photo": "../alquiler/img/ursa-x-strap-negro_SpTV.webp"}], info: [["tag", "Tipo", "Correa", 1], ["palette", "Colores", "2 colores", 1], ["capacity", "Tallas", "S · M · L · XL"]], specs: [["Categoría", "Correa"], ["Marca", "Ursa Straps"], ["Descripción", "Arnés en X para la espalda: reparte el peso y sujeta la petaca sin moverse."], ["Zona", "Espalda (en X)"], ["Tallas", "S · M · L · XL"], ["Colores", "Beige · Negro"]], icon: lavaccIcon("#1F2937") },
  { cat: "lavacc", type: "Correa", brand: "Viviana", brandCode: "V", brandColor: "#5C6672", model: "Viviana Thigh Strap Extreme", photo: "../alquiler/img/viviana-thigh-extreme-beige_SpTV.webp", color: "Beige|Negro", colors: [{"name": "Beige", "hex": "#D8B48C", "photo": "../alquiler/img/viviana-thigh-extreme-beige_SpTV.webp"}, {"name": "Negro", "hex": "#1A1A1A", "photo": "../alquiler/img/viviana-thigh-extreme-negro_SpTV.webp"}], info: [["tag", "Tipo", "Correa", 1], ["palette", "Colores", "2 colores", 1]], specs: [["Categoría", "Correa"], ["Marca", "Viviana"], ["Descripción", "Correa de muslo Extreme de Viviana para llevar la petaca en la pierna."], ["Zona", "Muslo"], ["Colores", "Beige · Negro"]], icon: lavaccIcon("#5C6672") },
  { cat: "lavacc", type: "Correa", brand: "Ursa Straps", brandCode: "U", brandColor: "#1F2937", model: "Ursa Thigh Strap Side", photo: "../alquiler/img/ursa-thigh-side-beige_SpTV.webp", color: "Beige|Negro|Blanco|Marrón", colors: [{"name": "Beige", "hex": "#D8B48C", "photo": "../alquiler/img/ursa-thigh-side-beige_SpTV.webp"}, {"name": "Negro", "hex": "#1A1A1A", "photo": "../alquiler/img/ursa-thigh-side-negro_SpTV.webp"}], info: [["tag", "Tipo", "Correa", 1], ["palette", "Colores", "4 colores", 1]], specs: [["Categoría", "Correa"], ["Marca", "Ursa Straps"], ["Descripción", "Correa de muslo con la petaca en horizontal, en el lateral de la pierna."], ["Zona", "Muslo"], ["Posición", "Lateral / horizontal"], ["Colores", "Beige · Negro · Blanco · Marrón"]], icon: lavaccIcon("#1F2937") },
  { cat: "lavacc", type: "Correa", brand: "Ursa Straps", brandCode: "U", brandColor: "#1F2937", model: "Ursa Thigh Strap", photo: "../alquiler/img/ursa-thigh-strap-beige_SpTV.webp", color: "Beige|Negro|Blanco|Marrón|Caramelo", colors: [{"name": "Beige", "hex": "#D8B48C", "photo": "../alquiler/img/ursa-thigh-strap-beige_SpTV.webp"}, {"name": "Negro", "hex": "#1A1A1A", "photo": "../alquiler/img/ursa-thigh-strap-negro_SpTV.webp"}, {"name": "Blanco", "hex": "#FFFFFF", "photo": "../alquiler/img/ursa-thigh-strap-blanco_SpTV.webp"}, {"name": "Marrón", "hex": "#6B4A2B", "photo": "../alquiler/img/ursa-thigh-strap-marron_SpTV.webp"}, {"name": "Caramelo", "hex": "#A9744F", "photo": "../alquiler/img/ursa-thigh-strap-caramelo_SpTV.webp"}], info: [["tag", "Tipo", "Correa", 1], ["palette", "Colores", "5 colores", 1]], specs: [["Categoría", "Correa"], ["Marca", "Ursa Straps"], ["Descripción", "Correa de muslo con la petaca en vertical."], ["Zona", "Muslo"], ["Posición", "Vertical"], ["Colores", "Beige · Negro · Blanco · Marrón · Caramelo"]], icon: lavaccIcon("#1F2937") },
  { cat: "lavacc", type: "Correa", brand: "Ursa Straps", brandCode: "U", brandColor: "#1F2937", model: "Ursa Calf Strap", photo: "../alquiler/img/ursa-calf-strap-beige_SpTV.webp", color: "Beige|Negro", colors: [{"name": "Beige", "hex": "#D8B48C", "photo": "../alquiler/img/ursa-calf-strap-beige_SpTV.webp"}, {"name": "Negro", "hex": "#1A1A1A", "photo": "../alquiler/img/ursa-calf-strap-negro_SpTV.webp"}], info: [["tag", "Tipo", "Correa", 1], ["palette", "Colores", "2 colores", 1]], specs: [["Categoría", "Correa"], ["Marca", "Ursa Straps"], ["Descripción", "Correa de pantorrilla para llevar la petaca en la pierna, bajo el pantalón."], ["Zona", "Pantorrilla"], ["Colores", "Beige · Negro"]], icon: lavaccIcon("#1F2937") },
  { cat: "lavacc", type: "Correa", brand: "Ursa Straps", brandCode: "U", brandColor: "#1F2937", model: "Ursa Chest Strap", photo: "../alquiler/img/ursa-chest-strap-beige_SpTV.webp", color: "Beige|Negro|Blanco|Marrón|Caramelo", colors: [{"name": "Beige", "hex": "#D8B48C", "photo": "../alquiler/img/ursa-chest-strap-beige_SpTV.webp"}, {"name": "Negro", "hex": "#1A1A1A", "photo": "../alquiler/img/ursa-chest-strap-negro_SpTV.webp"}, {"name": "Blanco", "hex": "#FFFFFF", "photo": "../alquiler/img/ursa-chest-strap-blanco_SpTV.webp"}, {"name": "Marrón", "hex": "#6B4A2B", "photo": "../alquiler/img/ursa-chest-strap-marron_SpTV.webp"}, {"name": "Caramelo", "hex": "#A9744F", "photo": "../alquiler/img/ursa-chest-strap-caramelo_SpTV.webp"}], info: [["tag", "Tipo", "Correa", 1], ["palette", "Colores", "5 colores", 1]], specs: [["Categoría", "Correa"], ["Marca", "Ursa Straps"], ["Descripción", "Correa de pecho para fijar el micrófono o la petaca en el torso."], ["Zona", "Pecho"], ["Colores", "Beige · Negro · Blanco · Marrón · Caramelo"]], icon: lavaccIcon("#1F2937") },
  { cat: "lavacc", type: "Correa", brand: "Viviana", brandCode: "V", brandColor: "#5C6672", model: "Viviana Chest Strap Extreme", photo: "../alquiler/img/viviana-chest-extreme-beige_SpTV.webp", color: "Beige", colors: [], info: [["tag", "Tipo", "Correa", 1], ["palette", "Color", "Beige", 1]], specs: [["Categoría", "Correa"], ["Marca", "Viviana"], ["Descripción", "Correa de pecho Extreme de Viviana."], ["Zona", "Pecho"], ["Colores", "Beige"]], icon: lavaccIcon("#5C6672") },
  { cat: "lavacc", type: "Correa", brand: "Viviana", brandCode: "V", brandColor: "#5C6672", model: "Viviana Ankle Strap Extreme", photo: "../alquiler/img/viviana-ankle-extreme-beige_SpTV.webp", color: "Beige|Negro", colors: [{"name": "Beige", "hex": "#D8B48C", "photo": "../alquiler/img/viviana-ankle-extreme-beige_SpTV.webp"}, {"name": "Negro", "hex": "#1A1A1A", "photo": "../alquiler/img/viviana-ankle-extreme-negro_SpTV.webp"}], info: [["tag", "Tipo", "Correa", 1], ["palette", "Colores", "2 colores", 1]], specs: [["Categoría", "Correa"], ["Marca", "Viviana"], ["Descripción", "Correa de tobillo Extreme de Viviana para llevar la petaca bajo el pantalón."], ["Zona", "Tobillo"], ["Colores", "Beige · Negro"]], icon: lavaccIcon("#5C6672") },
  { cat: "lavacc", type: "Correa", brand: "Ursa Straps", brandCode: "U", brandColor: "#1F2937", model: "Ursa Ankle Strap", photo: "../alquiler/img/ursa-ankle-strap-beige_SpTV.webp", color: "Beige|Blanco|Negro|Marrón|Caramelo", colors: [{"name": "Beige", "hex": "#D8B48C", "photo": "../alquiler/img/ursa-ankle-strap-beige_SpTV.webp"}, {"name": "Blanco", "hex": "#FFFFFF", "photo": "../alquiler/img/ursa-ankle-strap-blanco_SpTV.webp"}, {"name": "Negro", "hex": "#1A1A1A", "photo": "../alquiler/img/ursa-ankle-strap-negro_SpTV.webp"}, {"name": "Caramelo", "hex": "#A9744F", "photo": "../alquiler/img/ursa-ankle-strap-caramelo_SpTV.webp"}], info: [["tag", "Tipo", "Correa", 1], ["palette", "Colores", "5 colores", 1]], specs: [["Categoría", "Correa"], ["Marca", "Ursa Straps"], ["Descripción", "Correa de tobillo con la petaca en vertical."], ["Zona", "Tobillo"], ["Posición", "Vertical"], ["Colores", "Beige · Blanco · Negro · Marrón · Caramelo"]], icon: lavaccIcon("#1F2937") },
  { cat: "lavacc", type: "Pantalón", brand: "Ursa Straps", brandCode: "U", brandColor: "#1F2937", model: "Ursa Shorties", photo: "../alquiler/img/ursa-shorties-beige_SpTV.webp", color: "Beige", colors: [], info: [["tag", "Tipo", "Pantalón", 1], ["palette", "Color", "Beige", 1], ["capacity", "Tallas", "S · M · L"]], specs: [["Categoría", "Pantalón"], ["Marca", "Ursa Straps"], ["Descripción", "Pantalón corto ajustado con bolsillos para petacas, para llevar bajo vestidos y faldas."], ["Tallas", "S · M · L"], ["Colores", "Beige"]], icon: lavaccIcon("#1F2937") },
  { cat: "lavacc", type: "Organizador", brand: "Bubblebee Industries", brandCode: "B", brandColor: "#C99700", model: "Bubblebee The Mic Accessory Case", photo: "../alquiler/img/bubblebee-mic-accessory-case-unico_SpTV.webp", color: "Único", colors: [], info: [["tag", "Tipo", "Organizador", 1], ["palette", "Color", "Único", 1]], specs: [["Categoría", "Organizador"], ["Marca", "Bubblebee Industries"], ["Descripción", "Estuche organizador para micrófonos de solapa y sus accesorios."], ["Formato", "Pack de 2 unidades"], ["Colores", "Único"]], icon: lavaccIcon("#C99700") },
  { cat: "lavacc", type: "Organizador", brand: "ORCA", brandCode: "O", brandColor: "#1A1A1A", model: "ORCA OR-29", photo: "../alquiler/img/orca-or-29-unico_SpTV.webp", color: "Único", colors: [], info: [["tag", "Tipo", "Organizador", 1], ["palette", "Color", "Único", 1]], specs: [["Categoría", "Organizador"], ["Marca", "ORCA"], ["Descripción", "Organizador ORCA para guardar y transportar accesorios de sonido."], ["Modelo", "OR-29"], ["Colores", "Único"]], icon: lavaccIcon("#1A1A1A") },
  { cat: "lavacc", type: "Organizador", brand: "Viviana", brandCode: "V", brandColor: "#5C6672", model: "Viviana Big Bag", photo: "../alquiler/img/viviana-big-bag-unico_SpTV.webp", color: "Único", colors: [], info: [["tag", "Tipo", "Organizador", 1], ["palette", "Color", "Único", 1]], specs: [["Categoría", "Organizador"], ["Marca", "Viviana"], ["Descripción", "Bolsa organizadora grande de Viviana para correas, petacas y accesorios."], ["Tamaño", "Grande"], ["Colores", "Único"]], icon: lavaccIcon("#5C6672") }
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
    const media = p.photo ? `<img src="${p.photo}" alt="${p.model}" loading="lazy" decoding="async">` : p.icon;
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

function bindSwatches(root, p, img, onPick) {
  root.querySelectorAll(".swatch").forEach(sw => {
    const pick = e => {
      e.stopPropagation();
      e.preventDefault();
      const i = Number(sw.dataset.i);
      p.colorIndex = i;
      if (img && p.colors[i].photo) { img.src = p.colors[i].photo; img.alt = `${p.model} (${p.colors[i].name})`; }
      root.querySelectorAll(".swatch").forEach(o => o.setAttribute("aria-pressed", String(o === sw)));
      const label = sw.parentElement.querySelector(".swatch-name");
      if (label) label.textContent = p.colors[i].name;
      if (onPick) onPick(i);
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
  const rows = p.specs.filter(([l]) => !used.has(l)).map(([l, v]) => `<tr><th scope="row">${l}</th><td>${v}</td></tr>`).join("");
  const kind = String(p.type || p.catLabel || "").split("|")[0];
  const singleColor = !colors.length && p.color && !String(p.color).includes("|") ? p.color : "";
  const thumbs = colors.filter(c => c.photo).length > 1
    ? colors.map((c, i) => c.photo ? `<button type="button" class="pv-thumb" data-i="${i}" aria-label="Ver en ${c.name}" aria-pressed="${i === ci()}"><img src="${c.photo}" alt="" decoding="async"></button>` : "").join("")
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
        <span class="rental-tag">${MODE === "compra" ? "Disponible para compra" : "Disponible para alquiler"}</span>
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
          <button type="button" data-step="-1" aria-label="Uno menos" disabled>−</button><span class="qty-n" id="panelQty" aria-live="polite">1</span><button type="button" data-step="1" aria-label="Uno más">+</button>
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

  let qty = 1;
  const qtyN = document.getElementById("panelQty");
  panel.querySelectorAll(".pv-buy [data-step]").forEach(b => b.addEventListener("click", () => {
    qty = Math.max(1, Math.min(99, qty + Number(b.dataset.step)));
    qtyN.textContent = qty;
    panel.querySelector('.pv-buy [data-step="-1"]').disabled = qty === 1;
  }));

  const cpu = p.cat === "computer" && !groups.some(g => g.spec === "Procesador") && p.variants && p.variants.length === 1 ? specOf(p, "Procesador") : "";
  document.getElementById("panelRequest").addEventListener("click", () => {
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
  "iPad Pro", "iPad Pro (4.ª generación)",
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
  printers: document.getElementById("viewPrinters")
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
  printers: "Impresoras"
};
const HEADER_DEFAULT = ["Catálogo de alquiler", "Soporte TV", "Elige una categoría para ver los productos disponibles para alquiler."];

// One catalogue file, two shops: rental (alquiler/) and purchase (compra/, generated by tools/build_compra.py).
// Each category belongs to one of them; the other one's links are hidden and its addresses redirect.
const MODE = document.documentElement.dataset.mode === "compra" ? "compra" : "alquiler";
const MODE_KEYS = {
  alquiler: ["tablets", "phones", "accessories", "computers", "mac", "monitors", "connectivity", "cabins", "videoconf", "printers"],
  compra: ["storage", "batteries", "sound", "stationery", "protection", "electric", "filmset", "dulling", "lighting", "effects", "cleaning", "marks", "fastening", "tapes", "backdrops", "othersound", "lavacc"]
};
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
  if (featured) featured.hidden = !!info || MODE === "compra";
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
  impresoras: "printers"
};
const SLUGS = Object.fromEntries(Object.entries(ROUTES).map(([slug, key]) => [key, slug]));

// Hide what belongs to the other catalogue: landing cards, menu and footer links
const CARD_KEYS = { goTablets: "tablets", goPhones: "phones", goAccessories: "accessories", goComputers: "computers", goMac: "mac",
  goMonitors: "monitors", goConnectivity: "connectivity", goStorage: "storage", goBatteries: "batteries", goSound: "sound", goStationery: "stationery", goProtection: "protection", goElectric: "electric", goFilmset: "filmset", goDulling: "dulling", goLighting: "lighting", goEffects: "effects", goCleaning: "cleaning", goMarks: "marks", goFastening: "fastening", goTapes: "tapes", goBackdrops: "backdrops", goOthersound: "othersound", goLavacc: "lavacc", goCabins: "cabins", goVideoconf: "videoconf", goPrinters: "printers" };
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
  { select: document.getElementById("accessoryTypeSelect"), attr: "group" },
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
if (MODE === "compra") {
  document.getElementById("rentTitle").textContent = "Solicitar presupuesto de compra";
  document.getElementById("rentFrom").closest(".field-row").hidden = true;
}

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
  if (item) item.qty = Math.min(99, item.qty + qty);
  else requestList.push({ name, qty });
  saveList();
  listFab.classList.remove("bump");
  void listFab.offsetWidth;
  listFab.classList.add("bump");
}

function listText() {
  return requestList.map(i => `${i.qty} × ${i.name}`).join(";\n");
}

function renderList() {
  const units = requestList.reduce((n, i) => n + i.qty, 0);
  listFab.hidden = !requestList.length;
  document.getElementById("listFabN").textContent = units;
  listFab.setAttribute("aria-label", `Mi lista: ${units} ${units === 1 ? "unidad" : "unidades"}`);
  document.getElementById("reqBox").hidden = !requestList.length;
  document.getElementById("rentMsgLabel").textContent = requestList.length ? "Comentarios (opcional)" : "¿Qué necesitas?";
  rentMsg.placeholder = requestList.length ? (MODE === "compra" ? "Ej.: plazo de entrega, dirección, dudas…" : "Ej.: lugar de entrega, horario, dudas…") : MSG_PLACEHOLDER;
  reqList.replaceChildren(...requestList.map((item, idx) => {
    const li = document.createElement("li");
    li.innerHTML = `<span class="req-name"></span>
      <div class="qty" role="group" aria-label="Cantidad"><button type="button" data-step="-1" aria-label="Uno menos">−</button><span class="qty-n"></span><button type="button" data-step="1" aria-label="Uno más">+</button></div>
      <button type="button" class="req-remove" aria-label="Quitar de la lista">✕</button>`;
    li.querySelector(".req-name").textContent = item.name;
    li.querySelector(".qty-n").textContent = item.qty;
    li.querySelector('[data-step="-1"]').disabled = item.qty === 1;
    li.querySelectorAll("[data-step]").forEach(b => b.addEventListener("click", () => {
      item.qty = Math.max(1, Math.min(99, item.qty + Number(b.dataset.step)));
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
  const email = document.getElementById("rentEmail").value.trim();
  const from = document.getElementById("rentFrom").value;
  const to = document.getElementById("rentTo").value;
  const msg = document.getElementById("rentMsg").value.trim();

  if (!name || !email || (!msg && !requestList.length)) {
    rentError.textContent = requestList.length ? "Rellena tu nombre y tu correo." : "Rellena tu nombre, tu correo y qué necesitas.";
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
  if (!document.getElementById("rentPrivacy").checked) {
    rentError.textContent = "Para enviarla, acepta la política de privacidad.";
    return;
  }

  rentSubmit.disabled = true;
  rentSubmit.textContent = "Enviando…";
  try {
    const res = await fetch(FORM_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json", "Accept": "application/json" },
      body: JSON.stringify({
        _subject: `${MODE === "compra" ? "Solicitud de compra" : "Solicitud de alquiler"} — ${name}`,
        _template: "table",
        _captcha: "false",
        Nombre: name,
        email: email,
        ...(MODE === "compra" ? {} : { Fechas: `${from || "—"} a ${to || "—"}` }),
        ...(requestList.length ? { "Material solicitado": listText(), Comentarios: msg || "—" } : { "Qué necesita": msg }),
        "Política de privacidad": "Aceptada"
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
          const thumb = photo ? `<img src="${esc(photo)}" alt="" decoding="async">` : (e.p.icon || "");
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

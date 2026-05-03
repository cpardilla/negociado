const fs = require("fs");
const path = require("path");

// ── File scanner ──────────────────────────────────────────────────────────
function getHtmlFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      getHtmlFiles(filePath, fileList);
    } else if (file.endsWith(".html") && file !== "index.html") {
      fileList.push(filePath);
    }
  }
  return fileList;
}

const baseDir = __dirname;
const allFiles = getHtmlFiles(baseDir);

const tree = {};
allFiles.forEach((file) => {
  const relativePath = path.relative(baseDir, file).replace(/\\/g, "/");
  const parts = relativePath.split("/");
  let current = tree;
  for (let i = 0; i < parts.length; i++) {
    const part = parts[i];
    if (i === parts.length - 1) {
      current[part] = relativePath;
    } else {
      if (!current[part]) current[part] = {};
      current = current[part];
    }
  }
});

// ── Generate index.html ───────────────────────────────────────────────────
const htmlContent =
  `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Recursos Interactivos – Negociado</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&display=swap" rel="stylesheet">
  <style>
    /* ── Variables ── */
    :root {
      --navy:       #0b1d3a;
      --blue-dark:  #163566;
      --blue-mid:   #1e4d9a;
      --blue:       #2563b0;
      --blue-light: #4a87d8;
      --blue-pale:  #dbeafe;
      --blue-xpale: #eff6ff;
      --white:      #ffffff;
      --bg:         #f2f6fb;
      --border:     #d4e4f7;
      --line-color: #bdd5f0;
      --text-main:  #0b1d3a;
      --text-mid:   #2c4a73;
      --text-muted: #6789b0;
      --sidebar-w:  360px;
      --header-h:   52px;
      --transition: 0.15s ease;
    }
    *, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }

    body, html {
      height: 100%;
      font-family: 'IBM Plex Sans', 'Segoe UI', system-ui, sans-serif;
      font-size: 15px;
      color: var(--text-main);
      overflow: hidden;
      background: var(--bg);
    }

    /* ── App shell ── */
    #app   { display: flex; flex-direction: column; height: 100vh; }
    #main  { display: flex; flex: 1; overflow: hidden; }

    /* ── Header ── */
    #header {
      height: var(--header-h);
      background: var(--navy);
      color: var(--white);
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 20px;
      flex-shrink: 0;
    }
    .header-left  { display: flex; align-items: center; gap: 12px; }
    .header-logo  {
      width: 32px; height: 32px;
      background: rgba(255,255,255,0.08);
      border: 1.5px solid rgba(255,255,255,0.18);
      border-radius: 8px;
      display: flex; align-items: center; justify-content: center;
      flex-shrink: 0;
    }
    .header-logo svg { width: 18px; height: 18px; }
    .header-title {
      font-size: 14px; font-weight: 600;
      letter-spacing: 0.1px;
    }
    .header-right { display: flex; gap: 8px; }
    .hdr-btn {
      background: rgba(255,255,255,0.08);
      border: 1px solid rgba(255,255,255,0.16);
      color: white;
      padding: 6px 12px;
      border-radius: 6px;
      cursor: pointer;
      font-size: 12px;
      font-family: inherit;
      font-weight: 500;
      transition: background var(--transition);
      display: flex; align-items: center; gap: 6px;
      text-decoration: none;
    }
    .hdr-btn:hover { background: rgba(255,255,255,0.16); }
    .hdr-btn svg { width: 14px; height: 14px; fill: currentColor; flex-shrink: 0; }

    /* ── Sidebar ── */
    #sidebar {
      width: var(--sidebar-w);
      background: var(--white);
      border-right: 1px solid var(--border);
      display: flex;
      flex-direction: column;
      overflow: hidden;
      flex-shrink: 0;
    }

    .tree-node {
      display: flex;
      align-items: center;
      padding: 7px 14px;
      cursor: pointer;
      transition: all var(--transition);
      border-radius: 5px;
      margin: 0 8px;
      color: var(--text-mid);
      font-size: 13.5px;
      line-height: 1.4;
      gap: 8px;
      align-items: flex-start;
    }
    .tree-node:hover { background: var(--blue-xpale); color: var(--navy); }
    .tree-node.active {
      background: var(--blue-pale);
      color: var(--blue);
      font-weight: 600;
      border-left: 3px solid var(--blue);
      padding-left: 11px;
    }
    /* Toggle chevron for folders */
    .tree-chevron {
      width: 16px; height: 16px;
      display: inline-flex; align-items: center; justify-content: center;
      flex-shrink: 0;
      color: var(--text-muted);
      transition: transform var(--transition);
      margin-top: 2px;
    }
    li.expanded > .tree-node .tree-chevron { transform: rotate(90deg); }
    .tree-file-icon {
      width: 16px; height: 16px;
      display: inline-flex; align-items: center; justify-content: center;
      flex-shrink: 0;
      color: var(--blue-light);
      margin-top: 2px;
    }
    .tree-label { flex: 1; min-width: 0; white-space: normal; word-break: break-word; line-height: 1.4; }

    /* Hierarchical folder levels */
    .tree-node.folder.level-0 {
      font-size: 12px; font-weight: 700;
      text-transform: uppercase; letter-spacing: 0.6px;
      color: var(--navy);
      background: var(--bg);
      border: 1px solid var(--border);
      border-radius: 6px;
      margin: 10px 8px 3px;
      padding: 9px 14px;
    }
    .tree-node.folder.level-0:hover { background: var(--blue-xpale); }
    .tree-node.folder.level-1 {
      font-size: 13.5px; font-weight: 600;
      color: var(--blue-mid);
      border-left: 2px solid var(--blue-pale);
      border-radius: 0 5px 5px 0;
      margin-top: 5px;
    }
    .tree-node.folder.level-2 { font-weight: 500; }

    /* ── Sidebar content ── */
    #sidebar { overflow-y: auto; }
    #tree-root { padding: 10px 0 16px; }

    /* File tree */
    ul.tree { list-style: none; }
    ul.tree ul { padding-left: 14px; display: none; }
    ul.tree li { margin: 1px 0; }
    ul.tree li.expanded > ul { display: block; }

    .tree-node {
      display: flex;
      align-items: flex-start;
      padding: 7px 14px;
      cursor: pointer;
      transition: all var(--transition);
      border-radius: 5px;
      margin: 0 8px;
      color: var(--text-mid);
      font-size: 13.5px;
      line-height: 1.4;
      gap: 8px;
    }

    /* ── Content area ── */
    #content-area {
      flex: 1; display: flex; flex-direction: column;
      background: var(--bg); overflow: hidden;
    }
    #breadcrumb-bar {
      height: 38px; background: var(--white);
      border-bottom: 1px solid var(--border);
      display: flex; align-items: center; padding: 0 20px;
      font-size: 12px; color: var(--text-muted);
      overflow-x: auto; white-space: nowrap; flex-shrink: 0;
    }
    .breadcrumb-item { display: inline-flex; align-items: center; }
    .breadcrumb-item:not(:last-child)::after {
      content: '›'; margin: 0 7px; color: var(--line-color);
    }
    .breadcrumb-item.current { color: var(--navy); font-weight: 600; }

    #iframe-container { flex: 1; position: relative; }
    iframe { width: 100%; height: 100%; border: none; display: block; }

    /* ── Placeholder ── */
    .placeholder {
      display: flex; flex-direction: column; align-items: center;
      justify-content: center; height: 100%;
      color: var(--text-muted); text-align: center; padding: 20px;
    }
    .placeholder-icon {
      width: 64px; height: 64px;
      background: var(--blue-xpale);
      border: 1.5px solid var(--blue-pale);
      border-radius: 16px;
      display: flex; align-items: center; justify-content: center;
      margin-bottom: 20px;
      color: var(--blue-light);
    }
    .placeholder-icon svg { width: 32px; height: 32px; }
    .placeholder-title { font-size: 17px; font-weight: 600; color: var(--navy); margin-bottom: 8px; }
    .placeholder-text  { font-size: 13px; max-width: 380px; line-height: 1.6; }

    /* ── Toast ── */
    .toast {
      position: fixed; bottom: 28px; left: 50%;
      transform: translateX(-50%) translateY(100px);
      background: var(--navy); color: var(--white);
      padding: 11px 20px 11px 16px;
      border-radius: 40px; font-size: 13px; font-weight: 500;
      z-index: 9999;
      box-shadow: 0 8px 28px rgba(11,29,58,0.28);
      transition: transform 0.32s cubic-bezier(0.175, 0.885, 0.32, 1.275);
      pointer-events: none; white-space: nowrap;
      max-width: 90vw; overflow: hidden; text-overflow: ellipsis;
      display: flex; align-items: center; gap: 10px;
      border: 1px solid rgba(255,255,255,0.08);
    }
    .toast.visible { transform: translateX(-50%) translateY(0); }
    .toast-icon { flex-shrink: 0; display: inline-flex; }
    .toast-icon svg { width: 15px; height: 15px; }

    /* ── Responsive ── */
    @media (max-width: 768px) {
      #sidebar {
        position: absolute; left: calc(-1 * var(--sidebar-w));
        z-index: 100; height: calc(100% - var(--header-h));
        top: var(--header-h); transition: left 0.28s ease;
        box-shadow: none;
      }
      #sidebar.open { left: 0; box-shadow: 4px 0 16px rgba(11,29,58,0.15); }
      .menu-toggle { display: block !important; }
    }
    .menu-toggle {
      display: none; background: transparent; border: none;
      color: white; cursor: pointer; padding: 4px; margin-right: 4px;
    }
    .menu-toggle svg { width: 20px; height: 20px; fill: currentColor; }
  </style>
</head>
<body>
  <div id="app">

    <!-- Header -->
    <div id="header">
      <div class="header-left">
        <button class="menu-toggle" onclick="toggleSidebar()">
          <svg viewBox="0 0 24 24"><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/></svg>
        </button>
        <div class="header-logo">
          <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="15" y="3" width="2" height="26" rx="1" fill="white" fill-opacity="0.9"/>
            <rect x="7" y="3" width="18" height="2" rx="1" fill="white" fill-opacity="0.9"/>
            <rect x="11" y="27" width="10" height="2" rx="1" fill="white" fill-opacity="0.9"/>
            <line x1="8" y1="5" x2="3" y2="16" stroke="white" stroke-opacity="0.9" stroke-width="1.6" stroke-linecap="round"/>
            <line x1="8" y1="5" x2="13" y2="16" stroke="white" stroke-opacity="0.9" stroke-width="1.6" stroke-linecap="round"/>
            <path d="M3 16 Q8 20 13 16" stroke="white" stroke-opacity="0.9" stroke-width="1.6" fill="none" stroke-linecap="round"/>
            <line x1="24" y1="5" x2="19" y2="16" stroke="white" stroke-opacity="0.9" stroke-width="1.6" stroke-linecap="round"/>
            <line x1="24" y1="5" x2="29" y2="16" stroke="white" stroke-opacity="0.9" stroke-width="1.6" stroke-linecap="round"/>
            <path d="M19 16 Q24 20 29 16" stroke="white" stroke-opacity="0.9" stroke-width="1.6" fill="none" stroke-linecap="round"/>
          </svg>
        </div>
        <div class="header-title">Recursos Interactivos — Negociado</div>
      </div>
      <div class="header-right">
        <a href="#" id="btn-new-tab" class="hdr-btn" target="_blank" rel="noopener noreferrer" style="display:none;">
          <svg viewBox="0 0 24 24"><path d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z"/></svg>
          Nueva pestaña
        </a>
        <button id="btn-fullscreen" class="hdr-btn" onclick="toggleFullscreen()" style="display:none;">
          <svg viewBox="0 0 24 24"><path d="M5,5H10V7H7V10H5V5M14,5H19V10H17V7H14V5M17,14H19V19H14V17H17V14M10,17V19H5V14H7V17H10Z"/></svg>
          Pantalla completa
        </button>
      </div>
    </div>

    <div id="main">

      <!-- Sidebar -->
      <div id="sidebar">
        <div id="tree-root"></div>
      </div>

      <!-- Content area -->
      <div id="content-area">
        <div id="breadcrumb-bar">
          <span class="breadcrumb-item">Selecciona un recurso en el menú lateral</span>
        </div>
        <div id="iframe-container">
          <div class="placeholder" id="placeholder">
            <div class="placeholder-icon">
              <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="8" y="6" width="22" height="30" rx="2" stroke="currentColor" stroke-width="2.5"/>
                <path d="M30 6v8h8" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M30 6l8 8h-8" fill="currentColor" opacity="0.12"/>
                <path d="M14 16h12M14 21h12M14 26h8" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                <circle cx="36" cy="36" r="8" fill="currentColor" opacity="0.08" stroke="currentColor" stroke-width="2"/>
                <path d="M33 36l2 2 4-4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
            <div class="placeholder-title">Bienvenido</div>
            <div class="placeholder-text">Explora la legislación, esquemas y guías de tramitación usando el menú lateral.</div>
          </div>
          <iframe id="viewer" style="display:none;"></iframe>
        </div>
      </div>
    </div>
  </div>


  <script>
    // ── File tree ───────────────────────────────────────────────────────────
    const treeData = ` +
  JSON.stringify(tree) +
  `;

    const CHEVRON_SVG = '<svg viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 2.5L8 6L4 9.5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>';
    const FOLDER_SVG = '<svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" width="14" height="14"><path d="M3 6h5l2 2h7a1 1 0 011 1v7a1 1 0 01-1 1H3a1 1 0 01-1-1V7a1 1 0 011-1z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/></svg>';
    const FILE_SVG   = '<svg viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 1.5h7.5l3 3V14.5a.5.5 0 01-.5.5H2a.5.5 0 01-.5-.5v-13A.5.5 0 012 1.5z" stroke="currentColor" stroke-width="1.3"/><path d="M9.5 1.5v3h3" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"/><path d="M4 7.5h6M4 10h6M4 12.5h3.5" stroke="currentColor" stroke-width="1" stroke-linecap="round"/></svg>';

    function createTreeHtml(node, pathStr, level) {
      pathStr = pathStr || '';
      level   = level   || 0;
      var html = '<ul class="tree">';
      var keys = Object.keys(node).sort(function(a, b) {
        var fa = typeof node[a] === 'object';
        var fb = typeof node[b] === 'object';
        if (fa && !fb) return -1;
        if (!fa && fb) return 1;
        return a.localeCompare(b, 'es');
      });

      keys.forEach(function(key) {
        var isFolder = typeof node[key] === 'object';
        var currentPath = pathStr ? pathStr + ' > ' + key : key;
        var displayKey = key;
        if (key === '00 - Indices' || key === '00 - \xCDndices') displayKey = '\xCDndices';
        if (key === 'LEC') displayKey = 'Ley de Enjuiciamiento Civil (LEC)';
        if (key === 'LJV') displayKey = 'Ley de la Jurisdicci\xF3n Voluntaria (LJV)';

        if (isFolder) {
          html += '<li>';
          html += '<div class="tree-node folder level-' + level + '">';
          html += '<span class="tree-chevron">' + CHEVRON_SVG + '</span>';
          html += '<span class="tree-label">' + displayKey + '</span>';
          html += '</div>';
          html += createTreeHtml(node[key], currentPath, level + 1);
          html += '</li>';
        } else {
          var filePath    = node[key];
          var displayName = key.replace('.html', '');
          var safeUrl     = filePath.replace(/&/g, '&amp;').replace(/"/g, '&quot;');
          var safeCrumb   = currentPath.replace(/&/g, '&amp;').replace(/"/g, '&quot;');

          html += '<li>';
          html += '<div class="tree-node file level-' + level + '" data-url="' + safeUrl + '" data-crumb="' + safeCrumb + '">';
          html += '<span class="tree-file-icon">' + FILE_SVG + '</span>';
          html += '<span class="tree-label">' + displayName + '</span>';
          html += '</div>';
          html += '</li>';
        }
      });
      html += '</ul>';
      return html;
    }

    var treeRoot = document.getElementById('tree-root');
    treeRoot.innerHTML = createTreeHtml(treeData);

    // Event delegation — no inline onclick quoting needed
    treeRoot.addEventListener('click', function(e) {
      var node = e.target.closest('.tree-node');
      if (!node) return;
      if (node.classList.contains('folder')) {
        node.parentElement.classList.toggle('expanded');
      } else if (node.classList.contains('file')) {
        loadFile(node.dataset.url, node.dataset.crumb, node);
      }
    });

    function loadFile(url, pathStr, element) {
      document.querySelectorAll('.tree-node.active').forEach(function(el) { el.classList.remove('active'); });
      if (element) {
        element.classList.add('active');
        if (window.innerWidth <= 768) toggleSidebar();
      }
      const viewer      = document.getElementById('viewer');
      const placeholder = document.getElementById('placeholder');
      const encodedUrl  = url.split('/').map(encodeURIComponent).join('/');

      viewer.src = encodedUrl;
      viewer.style.display = 'block';
      placeholder.style.display = 'none';

      const btnNewTab    = document.getElementById('btn-new-tab');
      const btnFullscreen = document.getElementById('btn-fullscreen');
      btnNewTab.href = encodedUrl;
      btnNewTab.style.display = 'flex';
      btnFullscreen.style.display = 'flex';

      const parts = pathStr.split(' > ');
      let breadcrumbHtml = '';
      parts.forEach(function(part, index) {
        const cleanPart = part.replace('.html', '');
        if (index === parts.length - 1) {
          breadcrumbHtml += '<span class="breadcrumb-item current">' + cleanPart + '</span>';
        } else {
          breadcrumbHtml += '<span class="breadcrumb-item">' + cleanPart + '</span>';
        }
      });
      document.getElementById('breadcrumb-bar').innerHTML = breadcrumbHtml;
    }

    function toggleSidebar() {
      document.getElementById('sidebar').classList.toggle('open');
    }

    function toggleFullscreen() {
      const viewer = document.getElementById('viewer');
      if (!document.fullscreenElement) {
        (viewer.requestFullscreen || viewer.webkitRequestFullscreen || viewer.msRequestFullscreen).call(viewer);
      } else {
        (document.exitFullscreen || document.webkitExitFullscreen || document.msExitFullscreen).call(document);
      }
    }


  </script>
</body>
</html>`;

fs.writeFileSync(path.join(baseDir, "index.html"), htmlContent);
console.log("index.html generado con éxito.");

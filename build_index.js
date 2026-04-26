const fs = require('fs');
const path = require('path');

function getHtmlFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      getHtmlFiles(filePath, fileList);
    } else if (file.endsWith('.html') && file !== 'index.html') {
      fileList.push(filePath);
    }
  }
  return fileList;
}

const baseDir = __dirname;
const allFiles = getHtmlFiles(baseDir);

const tree = {};

allFiles.forEach(file => {
  const relativePath = path.relative(baseDir, file).replace(/\\/g, '/');
  const parts = relativePath.split('/');
  
  let current = tree;
  for (let i = 0; i < parts.length; i++) {
    const part = parts[i];
    if (i === parts.length - 1) {
      current[part] = relativePath;
    } else {
      if (!current[part]) {
        current[part] = {};
      }
      current = current[part];
    }
  }
});

const htmlContent = `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Recursos Interactivos - Negociado</title>
  <style>
    :root {
      --navy: #1A2F6E;
      --navy-mid: #2E4DAA;
      --navy-lt: #4169E1;
      --cyan: #0D9488;
      --cyan-bg: #F0FDFA;
      --slate: #475569;
      --slate-bg: #F4F6FB;
      --white: #FFFFFF;
      --bdr: #D1D9EE;
      --text: #1A1A2E;
      --muted: #6B7280;
      --hover-bg: #E2E8F0;
    }
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body, html { height: 100%; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; font-size: 14px; color: var(--text); overflow: hidden; background: var(--slate-bg); }
    
    #app { display: flex; flex-direction: column; height: 100vh; }
    
    #header { height: 56px; background: var(--navy); color: var(--white); display: flex; align-items: center; justify-content: space-between; padding: 0 20px; flex-shrink: 0; }
    .header-left { display: flex; align-items: center; gap: 12px; }
    .logo { width: 34px; height: 34px; border-radius: 50%; background: rgba(255,255,255,0.1); border: 1.5px solid rgba(255,255,255,0.25); display: flex; align-items: center; justify-content: center; font-size: 16px; font-weight: bold; }
    .title { font-size: 15px; font-weight: 700; }
    
    .header-right { display: flex; gap: 8px; }
    .btn { background: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.2); color: white; padding: 6px 12px; border-radius: 6px; cursor: pointer; font-size: 12px; transition: all 0.2s; display: flex; align-items: center; gap: 6px; text-decoration: none; }
    .btn:hover { background: rgba(255,255,255,0.2); }
    .btn svg { width: 14px; height: 14px; fill: currentColor; }

    #main { display: flex; flex: 1; overflow: hidden; }
    
    #sidebar { width: 320px; background: var(--white); border-right: 1px solid var(--bdr); display: flex; flex-direction: column; overflow-y: auto; flex-shrink: 0; }
    .sidebar-header { padding: 16px; border-bottom: 1px solid var(--bdr); font-weight: 600; color: var(--navy); font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px; background: var(--slate-bg); }
    
    ul.tree { list-style: none; padding: 0; }
    ul.tree ul { padding-left: 16px; display: none; }
    ul.tree li { margin: 2px 0; }
    ul.tree li.expanded > ul { display: block; }
    
    .tree-node { display: flex; align-items: center; padding: 8px 16px; cursor: pointer; transition: background 0.15s; border-radius: 4px; margin: 0 8px; color: var(--slate); font-size: 13px; }
    .tree-node:hover { background: var(--slate-bg); color: var(--navy); }
    .tree-node.active { background: var(--cyan-bg); color: var(--cyan); font-weight: 600; }
    .tree-node .icon { width: 16px; text-align: center; margin-right: 8px; font-size: 10px; transition: transform 0.2s; color: var(--muted); }
    .tree-node.folder > .icon::before { content: '▶'; }
    li.expanded > .tree-node.folder > .icon { transform: rotate(90deg); }
    .tree-node.file > .icon::before { content: '📄'; }
    
    #content-area { flex: 1; display: flex; flex-direction: column; background: var(--slate-bg); position: relative; }
    
    #breadcrumb-bar { height: 40px; background: var(--white); border-bottom: 1px solid var(--bdr); display: flex; align-items: center; padding: 0 20px; font-size: 12px; color: var(--muted); overflow-x: auto; white-space: nowrap; flex-shrink: 0; }
    .breadcrumb-item { display: inline-flex; align-items: center; }
    .breadcrumb-item:not(:last-child)::after { content: '›'; margin: 0 8px; color: var(--bdr); }
    .breadcrumb-item.current { color: var(--navy); font-weight: 600; }
    
    #iframe-container { flex: 1; background: var(--slate-bg); position: relative; }
    iframe { width: 100%; height: 100%; border: none; display: block; background: #fff; }
    
    .placeholder { display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100%; color: var(--muted); text-align: center; padding: 20px; }
    .placeholder-icon { font-size: 48px; margin-bottom: 16px; opacity: 0.5; }
    .placeholder-title { font-size: 18px; font-weight: 600; color: var(--navy); margin-bottom: 8px; }
    .placeholder-text { font-size: 14px; max-width: 400px; line-height: 1.5; }
    
    /* Responsive */
    @media (max-width: 768px) {
      #sidebar { position: absolute; left: -320px; z-index: 100; height: 100%; transition: left 0.3s; }
      #sidebar.open { left: 0; box-shadow: 2px 0 10px rgba(0,0,0,0.1); }
      .menu-toggle { display: block !important; }
    }
    .menu-toggle { display: none; background: transparent; border: none; color: white; cursor: pointer; font-size: 20px; margin-right: 12px; }
  </style>
</head>
<body>
  <div id="app">
    <div id="header">
      <div class="header-left">
        <button class="menu-toggle" onclick="toggleSidebar()">☰</button>
        <div class="logo">⚖</div>
        <div class="title">Recursos Interactivos - Negociado</div>
      </div>
      <div class="header-right">
        <a href="#" id="btn-new-tab" class="btn" target="_blank" rel="noopener noreferrer" style="display: none;">
          <svg viewBox="0 0 24 24"><path d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z"/></svg>
          Nueva pestaña
        </a>
        <button id="btn-fullscreen" class="btn" onclick="toggleFullscreen()" style="display: none;">
          <svg viewBox="0 0 24 24"><path d="M5,5H10V7H7V10H5V5M14,5H19V10H17V7H14V5M17,14H19V19H14V17H17V14M10,17V19H5V14H7V17H10Z"/></svg>
          Pantalla completa
        </button>
      </div>
    </div>
    
    <div id="main">
      <div id="sidebar">
        <div class="sidebar-header">Índice de Contenidos</div>
        <div id="tree-root" style="padding: 12px 0;"></div>
      </div>
      
      <div id="content-area">
        <div id="breadcrumb-bar">
          <span class="breadcrumb-item">Selecciona un recurso en el menú lateral</span>
        </div>
        <div id="iframe-container">
          <div class="placeholder" id="placeholder">
            <div class="placeholder-icon">📚</div>
            <div class="placeholder-title">Bienvenido</div>
            <div class="placeholder-text">Explora la legislación, esquemas y guías de tramitación utilizando el menú lateral izquierdo.</div>
          </div>
          <iframe id="viewer" style="display: none;"></iframe>
        </div>
      </div>
    </div>
  </div>

  <script>
    const treeData = ${JSON.stringify(tree)};
    
    function createTreeHtml(node, pathStr = '') {
      let html = '<ul class="tree">';
      const keys = Object.keys(node).sort((a, b) => {
        // Folders first, then files
        const isFolderA = typeof node[a] === 'object';
        const isFolderB = typeof node[b] === 'object';
        if (isFolderA && !isFolderB) return -1;
        if (!isFolderA && isFolderB) return 1;
        return a.localeCompare(b);
      });
      
      keys.forEach(key => {
        const isFolder = typeof node[key] === 'object';
        const currentPath = pathStr ? pathStr + ' > ' + key : key;
        
        if (isFolder) {
          // It's a folder
          // Clean up folder name (remove "01 - ", etc if desired, but let's keep them for ordering)
          html += \`<li class="expanded">\`;
          html += \`<div class="tree-node folder" onclick="this.parentElement.classList.toggle('expanded')"><span class="icon"></span>\${key}</div>\`;
          html += createTreeHtml(node[key], currentPath);
          html += '</li>';
        } else {
          // It's a file
          const filePath = node[key];
          // Remove .html for display
          const displayName = key.replace('.html', '');
          html += \`<li>\`;
          html += \`<div class="tree-node file" onclick="loadFile('\${filePath}', '\${currentPath.replace(/'/g, "\\\\'")}', this)"><span class="icon"></span>\${displayName}</div>\`;
          html += '</li>';
        }
      });
      html += '</ul>';
      return html;
    }
    
    document.getElementById('tree-root').innerHTML = createTreeHtml(treeData);
    
    function loadFile(url, pathStr, element) {
      // Update active state in tree
      document.querySelectorAll('.tree-node.active').forEach(el => el.classList.remove('active'));
      if (element) {
        element.classList.add('active');
        if (window.innerWidth <= 768) toggleSidebar(); // Close sidebar on mobile
      }
      
      // Update iframe
      const viewer = document.getElementById('viewer');
      const placeholder = document.getElementById('placeholder');
      
      // Fix URL encoding for local files with special characters
      const encodedUrl = url.split('/').map(encodeURIComponent).join('/');
      
      viewer.src = encodedUrl;
      viewer.style.display = 'block';
      placeholder.style.display = 'none';
      
      // Update action buttons
      const btnNewTab = document.getElementById('btn-new-tab');
      const btnFullscreen = document.getElementById('btn-fullscreen');
      btnNewTab.href = encodedUrl;
      btnNewTab.style.display = 'flex';
      btnFullscreen.style.display = 'flex';
      
      // Update breadcrumb
      const parts = pathStr.split(' > ');
      let breadcrumbHtml = '';
      parts.forEach((part, index) => {
        const cleanPart = part.replace('.html', '');
        if (index === parts.length - 1) {
          breadcrumbHtml += \`<span class="breadcrumb-item current">\${cleanPart}</span>\`;
        } else {
          breadcrumbHtml += \`<span class="breadcrumb-item">\${cleanPart}</span>\`;
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
        if (viewer.requestFullscreen) {
          viewer.requestFullscreen().catch(err => {
            alert(\`Error al intentar pantalla completa: \${err.message}\`);
          });
        } else if (viewer.webkitRequestFullscreen) { /* Safari */
          viewer.webkitRequestFullscreen();
        } else if (viewer.msRequestFullscreen) { /* IE11 */
          viewer.msRequestFullscreen();
        }
      } else {
        if (document.exitFullscreen) {
          document.exitFullscreen();
        } else if (document.webkitExitFullscreen) { /* Safari */
          document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) { /* IE11 */
          document.msExitFullscreen();
        }
      }
    }
  </script>
</body>
</html>`;

fs.writeFileSync(path.join(baseDir, 'index.html'), htmlContent);
console.log('index.html generado con éxito.');

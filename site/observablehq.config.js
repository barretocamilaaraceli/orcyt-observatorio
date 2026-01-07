// See https://observablehq.com/framework/config for documentation.
export default {
  title: "ORCYT",
  root: "src",

  // Nav superior (sin sidebar)
  sidebar: false,
  toc: false,
  search: true,
  theme: "light",

  // Queda como “orden lógico” del sitio (aunque sidebar esté apagado)
  pages: [
    { name: "Inicio", path: "/" },
    { name: "Indicadores", path: "/indicadores" },
    { name: "Metodología", path: "/metodologia" }
  ],

  head: `
<link rel="icon" href="favicon.ico">
<link rel="icon" type="image/png" href="favicon-32.png" sizes="32x32">
<link rel="icon" type="image/png" href="favicon-96.png" sizes="96x96">
<link rel="apple-touch-icon" href="apple-touch-icon.png" sizes="180x180">
<link rel="stylesheet" href="style.css">
`,

  header: `
<div class="navbar">
  <div class="wrap navrow navrow-brandonly">
    <a class="brand" href="./">
      <img class="logo" src="orcyt-logo.png" alt="ORCYT">
      <span class="brandtext">
        <span class="brandname">ORCYT</span>
        <span class="brandsub">Observatorio Regional de Conflictividad y Trabajo</span>
      </span>
    </a>
  </div>
</div>
`,

  footer: `
<div class="wrap footer">
  <div class="footer-grid">
    <div class="footer-block">
      <div class="footer-title">Contacto</div>
      <a href="mailto:orcyt.observatorio@gmail.com">orcyt.observatorio@gmail.com</a>
    </div>

    <div class="footer-block">
      <div class="footer-title">Licencias</div>
      <div class="footer-text"><b>Código:</b> MIT</div>
      <div class="footer-text"><b>Datos e indicadores:</b> CC BY 4.0 (atribución obligatoria)</div>
    </div>

    <div class="footer-block">
      <div class="footer-title">Actualización</div>
      <div id="orcyt-lastcut" class="footer-text">Último corte: cargando…</div>
      <div class="footer-text">Frecuencia: cada 12 horas</div>
    </div>
  </div>

  <div class="footer-bottom">
    <span><b>ORCYT</b> · Observatorio Regional de Conflictividad y Trabajo</span>
  </div>
</div>

<script type="module">
(async () => {
  const el = document.getElementById('orcyt-lastcut');
  if (!el) return;

  try {
    const res = await fetch('./data/serie_diaria.json', { cache: 'no-store' });
    const data = await res.json();

    const pickDate = (obj) =>
      (obj && (obj.fecha || obj.date || obj.datetime || obj.timestamp || obj.corte || obj.updated_at)) || null;

    let last = null;
    if (Array.isArray(data) && data.length) last = pickDate(data[data.length - 1]);
    if (!last && data && typeof data === 'object') last = pickDate(data);

    el.textContent = last ? ('Último corte: ' + String(last)) : 'Último corte: disponible';
  } catch (e) {
    el.textContent = 'Último corte: disponible';
  }
})();
</script>
`
};

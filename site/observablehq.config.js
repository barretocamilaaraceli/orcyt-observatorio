export default {
  title: "ORCYT",
  root: "src",

  sidebar: false,
  toc: false,
  search: true,
  theme: "light",

  head: `
<link rel="icon" href="favicon.ico">
<link rel="icon" type="image/png" href="favicon-32.png" sizes="32x32">
<link rel="icon" type="image/png" href="favicon-96.png" sizes="96x96">
<link rel="apple-touch-icon" href="apple-touch-icon.png" sizes="180x180">
<link rel="stylesheet" href="style.css">
`,

  header: `
<div class="topstrip">
  <div class="wrap">
    <span class="muted">ORCYT · Observatorio regional (ER–SF)</span>
    <span class="sep">·</span>
    <a href="mailto:orcyt.observatorio@gmail.com">orcyt.observatorio@gmail.com</a>
  </div>
</div>

<div class="navbar">
  <div class="wrap navrow">
    <a class="brand" href="./">
      <img class="logo" src="orcyt-logo.png" alt="ORCYT">
      <span class="brandtext">
        <span class="brandname">ORCYT</span>
        <span class="brandsub">Observatorio Regional de Conflictividad y Trabajo</span>
      </span>
    </a>

    <nav class="menu">
      <a href="./indicadores">Indicadores</a>
      <a href="./metodologia">Metodología</a>
      <a href="https://github.com/barretocamilaaraceli/orcyt-observatorio" target="_blank" rel="noreferrer">Repositorio</a>
    </nav>
  </div>
</div>
`,

  footer: `
<div class="wrap footer">
  <b>ORCYT</b> · Datos y contenidos: CC BY 4.0 · Código: MIT
</div>
`
};

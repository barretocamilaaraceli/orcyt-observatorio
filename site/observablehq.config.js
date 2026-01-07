// See https://observablehq.com/framework/config for documentation.
export default {
  title: "ORCyT",
  root: "src",

  pages: [
    { name: "Indicadores", path: "/indicadores" },
    { name: "Metodología", path: "/metodologia" }
  ],

  theme: "light",
  search: true,
  toc: true,

  // Cargamos CSS propio (desde dist/style.css, lo vamos a copiar en postbuild)
  head: `
<link rel="icon" href="favicon.ico">
<link rel="icon" type="image/png" href="favicon-32.png" sizes="32x32">
<link rel="icon" type="image/png" href="favicon-96.png" sizes="96x96">
<link rel="apple-touch-icon" href="apple-touch-icon.png" sizes="180x180">
<link rel="stylesheet" href="style.css">
`,

  header: `
<div class="orcyt-topbar">
  <a class="orcyt-brand" href="./">
    <img class="orcyt-logo" src="orcyt-logo.png" alt="ORCYT">
    <div class="orcyt-brandtext">
      <div class="orcyt-name">ORCYT</div>
      <div class="orcyt-subtitle">Observatorio Regional de Conflictividad y Trabajo</div>
    </div>
  </a>
</div>


<style>
  /* Header ORCYT: que no herede azul de links */
  .orcyt-topbar a,
  .orcyt-topbar a:visited,
  .orcyt-topbar a:hover,
  .orcyt-topbar a:active{
    color: #2b2b2b !important;
    text-decoration: none !important;
  }
  .orcyt-name{
    color: #2b2b2b !important;
  }
</style>
`,

  footer: `
<div class="orcyt-footer">
  <b>ORCYT</b> · Datos y contenidos: CC BY 4.0 · Código: MIT
</div>
`
};

// See https://observablehq.com/framework/config for documentation.
export default {
  title: "ORCYT — Observatorio Regional de Conflictividad y Trabajo",
  root: "src",

  // (Opcional) dejá el sidebar explícito, así no vuelven ejemplos
  pages: [
    { name: "Indicadores", path: "/indicadores" },
    { name: "Metodología", path: "/metodologia" }
  ],

  head: `
<link rel="icon" href="favicon.ico">
<link rel="icon" type="image/png" href="favicon-32.png" sizes="32x32">
<link rel="icon" type="image/png" href="favicon-96.png" sizes="96x96">
<link rel="apple-touch-icon" href="apple-touch-icon.png" sizes="180x180">
`,

  header: `
<div style="display:flex;align-items:center;gap:.6rem;padding:.6rem 0;">
  <a href="./" style="display:flex;align-items:center;gap:.6rem;text-decoration:none;font-weight:800;">
    <img src="orcyt-logo.png" alt="ORCYT" height="28" style="display:block;">
    <span>ORCYT</span>
  </a>
</div>
`,

  footer: `
<div style="padding:.75rem 0; font-size: 12px;">
  <b>ORCYT</b> · Datos y contenidos: CC BY 4.0 · Código: MIT
</div>
`
};



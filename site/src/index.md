---
toc: false
title: Observatorio Regional de Conflictividad y Trabajo
---

# Observatorio Regional de Conflictividad y Trabajo
<div class="badge" id="orcyt-lastcut-home">Último corte: cargando…</div>

<script type="module">
(async () => {
  const el = document.getElementById('orcyt-lastcut-home');
  if (!el) return;
  try {
    const res = await fetch('./data/serie_diaria.json', { cache: 'no-store' });
    const data = await res.json();
    const pickDate = (obj) => (obj && (obj.fecha || obj.date || obj.datetime || obj.timestamp || obj.corte || obj.updated_at)) || null;
    let last = null;
    if (Array.isArray(data) && data.length) last = pickDate(data[data.length - 1]);
    if (!last && data && typeof data === 'object') last = pickDate(data);
    el.textContent = last ? ('Último corte: ' + String(last)) : 'Último corte: disponible';
  } catch (e) {
    el.textContent = 'Último corte: disponible';
  }
})();
</script>

<div class="cards">
  <a class="card" href="./indicadores">
    <div class="card-title">Indicadores</div>
    <div class="card-text">Series, desagregaciones y visualizaciones.</div>
    <div class="card-cta">Abrir →</div>
  </a>

  <a class="card" href="./metodologia">
    <div class="card-title">Metodología</div>
    <div class="card-text">Criterios de relevamiento, codificación y controles.</div>
    <div class="card-cta">Leer →</div>
  </a>

  <a class="card" href="https://github.com/barretocamilaaraceli/orcyt-observatorio" target="_blank" rel="noreferrer">
    <div class="card-title">Repositorio</div>
    <div class="card-text">Código abierto, trazabilidad y reproducción.</div>
    <div class="card-cta">Ver en GitHub →</div>
  </a>
</div>

**Región Litoral Centro (Entre Ríos y Santa Fe).** Relevamiento y análisis de conflictividad laboral y mercado de trabajo.  
**Actualización cada 12 horas.**

### ¿Qué es ORCYT?
ORCYT es un observatorio académico dedicado al relevamiento sistemático, procesamiento y análisis de la conflictividad laboral y de dinámicas del mercado de trabajo en la Región Litoral Centro, con foco en Entre Ríos y Santa Fe.

Articula scraping automatizado de fuentes periodísticas digitales, depuración y codificación de eventos, y construcción de indicadores agregados, con el objetivo de producir información pública y reproducible sobre el conflicto capital–trabajo en escala regional.

### ¿Qué publica?
- Indicadores agregados de conflictividad laboral (series y distribuciones).
- Visualizaciones dinámicas basadas en datos actualizados automáticamente.
- Documentación metodológica y código abierto del pipeline.

### Metodología en dos líneas
Los conflictos se codifican como **unidades relacionales** (secuencias de acciones, sujetos y demandas) y se procesan mediante deduplicación y clasificación. Los indicadores corresponden a datos agregados y se actualizan automáticamente dos veces al día.

### Nota metodológica
El relevamiento automatizado depende de la disponibilidad de fuentes periodísticas y puede presentar rezagos o duplicaciones; se implementan rutinas de depuración y controles de calidad para mitigar sesgos.

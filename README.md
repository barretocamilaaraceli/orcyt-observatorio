# ORCYT — Observatorio Regional de Conflictividad y Trabajo

**Sitio público:** https://barretocamilaaraceli.github.io/orcyt-observatorio/

ORCYT es un observatorio académico dedicado al relevamiento sistemático, procesamiento y análisis de la conflictividad laboral y de dinámicas del mercado de trabajo en la Región Litoral Centro, con foco en **Entre Ríos y Santa Fe**. El observatorio articula scraping automatizado de fuentes periodísticas digitales, depuración y codificación de eventos, y construcción de indicadores agregados, con el objetivo de producir información pública y reproducible sobre el conflicto capital–trabajo en escala regional.

## ¿Qué publica?
- Indicadores agregados de conflictividad laboral (series y distribuciones).
- Visualizaciones dinámicas basadas en datos actualizados automáticamente.
- Documentación metodológica y código abierto del pipeline.

## Metodología (resumen)
- Los conflictos se codifican como **unidades relacionales** (secuencias de acciones, sujetos y demandas).
- El procesamiento incluye deduplicación y clasificación.
- Los indicadores publicados corresponden a **datos agregados** y se actualizan **automáticamente** (dos veces al día).

> Nota: el relevamiento automatizado depende de la disponibilidad de fuentes periodísticas y puede presentar rezagos o duplicaciones; se implementan rutinas de depuración y controles de calidad para mitigar sesgos.

## Estructura del repositorio
- `site/` — Sitio web (Observable Framework) y assets (CSS, logo, favicons).
- `pipeline/` — Scripts de procesamiento/actualización de datos (exportación de indicadores).
- `data/` o `site/src/data/` — Datos utilizados por el sitio (ej. `serie_diaria.json`).

## Cómo correr el sitio localmente
Requisitos: Node.js >= 18.

```bash
cd site
npm install
npm run dev


# ORCYT — Observatorio Regional de Conflictividad y Trabajo

ORCYT es un observatorio académico dedicado al relevamiento sistemático, procesamiento y análisis de la conflictividad laboral y de dinámicas del mercado de trabajo en la Región Litoral Centro, con foco en **Entre Ríos y Santa Fe**. El observatorio articula scraping automatizado de fuentes periodísticas digitales, depuración y codificación de eventos, y construcción de indicadores agregados, con el objetivo de producir información pública y reproducible sobre el conflicto capital–trabajo en escala regional.

## ¿Qué publica?
- Indicadores agregados de conflictividad laboral (series y distribuciones).
- Visualizaciones dinámicas basadas en datos actualizados automáticamente.
- Documentación metodológica y código abierto del pipeline.

## Metodología
El proyecto combina relevamiento automatizado de prensa regional, etiquetado por co-ocurrencia léxica y clasificación sectorial basada en la taxonomía CLANAE (Clasificación Nacional de Actividades Económicas, MTEySS/INDEC), compatible con la metodología ACEP (Área de Conflicto y Protesta Social, CEIL-CONICET). La unidad de análisis es el evento de conflicto laboral.
- Los conflictos se codifican como **unidades relacionales** (secuencias de acciones, sujetos y demandas).
- El procesamiento incluye deduplicación y clasificación.
- Los indicadores publicados corresponden a **datos agregados** y se actualizan **automáticamente** (dos veces al día).

## ¿Qué hace este sistema?
El pipeline ejecuta cinco fases secuenciales:
Scraping — raspa medios regionales de Entre Ríos y Santa Fe en busca de noticias con indicadores de conflictividad laboral.
Deduplicación — elimina noticias duplicadas por UID exacto y por similitud textual (fuzzy matching con control territorial y temporal).
Etiquetado — asigna a cada evento: fecha del hecho, departamento, ciudad, sector (público/privado/mixto) y rama de actividad según CLANAE.
Exportación SQL — vuelca el dataset a una base SQLite con vistas analíticas para consulta.
Dashboard — genera un HTML interactivo con filtros, gráficos y tabla de eventos.

## Medios monitoreados
-**Entre Ríos:** Análisis Digital · UNO Entre Ríos · El Miércoles Digital · El Heraldo de Concordia · El Día de Gualeguaychú · La Calle (Concepción del Uruguay) · AHORA · AIM Digital · APF Digital ·
- **Santa Fe:** El Litoral · Aire de Santa Fe · UNO Santa Fe · Santa Fe Noticias · Pausa.
- **Nacionales (con filtro territorial):** InfoGremiales · La Izquierda Diario.
> Nota: el relevamiento automatizado depende de la disponibilidad de fuentes periodísticas y puede presentar rezagos o duplicaciones; se implementan rutinas de depuración y controles de calidad para mitigar sesgos.

**Clasificación sectorial**
La novedad central de la versión actual es la clasificación por ramas de actividad económica según CLANAE 2010, articulada con la distinción público/privado del MTEySS/DEyERT.
El sistema detecta 28 ramas ordenadas de mayor a menor especificidad:
- Sector público: Educación pública (P85) · Salud pública (Q86) · Poder Judicial (O84) · Seguridad (O84) · Servicios públicos/APSE (D/E) · Administración municipal (O84) · Administración pública general (O84).
- Sector privado (especificidades del Litoral): Industria avícola (C10) · Industria láctea (C10) · Industria cárnica/frigoríficos (C10) · Industria citrícola (C10) · Industria arrocera (C10) · Molinería y oleaginosas (C10) · Alimenticia general (C10) · Forestal/celulosa (C16) · Textil/indumentaria (C13) · Metalúrgica/metalmecánica (C24–C25) · Automotriz/autopartista (C29) · Manufactura general (C) · Construcción (F41–F43) · Agro/rural (A01) · Comercio (G) · Gastronomía/hotelería (I) · Transporte y logística (H49) · Bancario/financiero (K64) · Salud privada (Q86) · Comunicaciones/prensa (J) · Servicios varios (N).
**La clasificación se realiza por co-ocurrencia de keywords en título + texto, con iteración en orden de especificidad (primero las ramas más específicas del Litoral, luego las genéricas) para minimizar falsos positivos.**

## Estructura del repositorio
- `site/` — Sitio web (Observable Framework) y assets (CSS, logo, favicons).
- `pipeline/` — Scripts de procesamiento/actualización de datos (exportación de indicadores).
- `data/` o `site/src/data/` — Datos utilizados por el sitio (ej. `serie_diaria.json`).

## Cómo correr el sitio localmente
Requisitos: Node.js >= 18.

```bash
cd site
npm install

cd site
npm run build
```

## Publicación
El sitio se publica con GitHub Pages a partir del contenido generado por el build del sitio en site/dist.

## Licencias
Código: MIT
Datos e indicadores: CC BY 4.0 (atribución obligatoria)
npm run dev


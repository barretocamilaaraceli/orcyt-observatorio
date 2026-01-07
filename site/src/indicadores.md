---
title: Indicadores
toc: false
---

```js
import * as Plot from "npm:@observablehq/plot";

const raw = await FileAttachment("data/serie_diaria.json").json();

const serie = raw.map(d => ({
  dia: new Date(d.dia),
  conflictos: Number(d.conflictos)
}));

display(
  Plot.plot({
    height: 340,
    x: {label: "Fecha", type: "utc"},
    y: {grid: true, label: "Cantidad de conflictos"},
    marks: [
      Plot.lineY(serie, {x: "dia", y: "conflictos"}),
      Plot.dot(serie, {x: "dia", y: "conflictos", r: 2})
    ]
  })
);
```
> **Nota metodológica:**  
> La serie representa la cantidad de conflictos laborales relevados por día a partir de fuentes periodísticas. La presencia de picos excepcionales responde a eventos de alta agregación noticiosa y no necesariamente a un aumento proporcional de conflictos independientes.
```
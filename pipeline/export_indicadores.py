import pandas as pd
from pathlib import Path

# Ruta al CSV final generado por el repo de scraping clonado por Actions
INPUT = Path("data/conflictos_clasificados.csv")


# Carpeta pública del sitio (se versiona)
OUTDIR = Path("site/src/data")
OUTDIR.mkdir(parents=True, exist_ok=True)

df = pd.read_csv(INPUT)

# 1) Fecha (tu columna real)
df["fecha_relevamiento"] = pd.to_datetime(df["fecha_relevamiento"], errors="coerce")
df = df.dropna(subset=["fecha_relevamiento"])
df["dia"] = df["fecha_relevamiento"].dt.date.astype(str)

# 2) Serie diaria (total)
serie_diaria = df.groupby("dia").size().reset_index(name="conflictos")
serie_diaria.to_json(OUTDIR / "serie_diaria.json", orient="records", force_ascii=False)

# 3) Serie diaria por territorio (ER/SF u otros)
if "territorio" in df.columns:
    serie_terr = (
        df.groupby(["dia", "territorio"])
          .size()
          .reset_index(name="conflictos")
          .sort_values(["dia", "territorio"])
    )
    serie_terr.to_json(OUTDIR / "serie_diaria_territorio.json", orient="records", force_ascii=False)

# 4) Totales por territorio
if "territorio" in df.columns:
    por_terr = df.groupby("territorio").size().reset_index(name="conflictos").sort_values("conflictos", ascending=False)
    por_terr.to_json(OUTDIR / "por_territorio.json", orient="records", force_ascii=False)

# 5) Por sector
if "sector" in df.columns:
    por_sector = df.groupby("sector").size().reset_index(name="conflictos").sort_values("conflictos", ascending=False)
    por_sector.to_json(OUTDIR / "por_sector.json", orient="records", force_ascii=False)

# 6) Por tipo_conflicto
if "tipo_conflicto" in df.columns:
    por_tipo = df.groupby("tipo_conflicto").size().reset_index(name="conflictos").sort_values("conflictos", ascending=False)
    por_tipo.to_json(OUTDIR / "por_tipo_conflicto.json", orient="records", force_ascii=False)

# 7) Por nivel_conflicto (si está bien codificado)
if "nivel_conflicto" in df.columns:
    por_nivel = df.groupby("nivel_conflicto").size().reset_index(name="conflictos").sort_values("conflictos", ascending=False)
    por_nivel.to_json(OUTDIR / "por_nivel_conflicto.json", orient="records", force_ascii=False)

# 8) Top localidades (para no llenar la web de ruido)
if "localidad" in df.columns:
    loc = (
        df["localidad"].fillna("Sin especificar")
          .astype(str)
          .str.strip()
    )
    top_loc = loc.value_counts().head(30).reset_index()
    top_loc.columns = ["localidad", "conflictos"]
    top_loc.to_json(OUTDIR / "top_localidades.json", orient="records", force_ascii=False)

# 9) Fuentes (medios)
if "medio" in df.columns:
    medios = (
        df["medio"].fillna("Sin especificar")
          .astype(str)
          .str.strip()
          .value_counts()
          .head(30)
          .reset_index()
    )
    medios.columns = ["medio", "conflictos"]
    medios.to_json(OUTDIR / "top_medios.json", orient="records", force_ascii=False)

print("OK: indicadores exportados a site/src/data/")

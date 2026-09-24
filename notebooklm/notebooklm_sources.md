# Fuentes de Información Técnica para Google NotebookLM

Este compendio reúne la documentación técnica de **Andina Vision 360** lista para ser importada como fuente en **Google NotebookLM** (`https://notebooklm.google.com/`).

---

## 1. Especificaciones de Fotogrametría Aérea con Drones DJI
- **Modelos Utilizados**: DJI Matrice 350 RTK y DJI Mavic 3 Enterprise.
- **Resolución de Captura**: Sensores de 4/3 CMOS y 20 MP con obturador mecánico.
- **GSD (Ground Sampling Distance)**: Inferior a 1.5 cm/píxel para levantamientos de alta precisión.
- **Normativa**: Certificación DGAC Chile DAN 91 / DAN 151 para operaciones en zonas urbanas (Serrano 447, ZOFRI y borde costero de Iquique).

---

## 2. Tecnologías de Visualización 360° y Gemelos Digitales
- **Motor WebGL**: Three.js con proyecciones esféricas equirectangulares y cúbicas.
- **Integración con Google Street View**: Exportación en formato compatible con Google Maps API v3.
- **Modelado Dollhouse**: Mallas poligonales optimizadas en formato GLTF/GLB para carga instantánea en móviles.

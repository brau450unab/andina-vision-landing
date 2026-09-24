# Directrices del Proyecto: Andina Vision 360 & ParkOps Cordano

Este archivo establece las directrices permanentes para el desarrollo de la plataforma web de Andina Vision y su integración con los ecosistemas Cloud de Google.

---

## 1. Entorno de Ejecución e Infraestructura Cloud Run

- **Proyecto GCP**: `gen-lang-client-0862587160` (N° `349577440002`) | Región: `us-west1`
- **Microservicio Cloud Run**: `andina-vision-landing` en puerto 8080 (URL: `https://andina-vision-landing-349577440002.us-west1.run.app`)
- **Google Stitch Project**: `projects/12916038623650348087` (*NUEVO PMS CORDANO - ParkOps Iquique & Andina Vision*)
- **Instalación y Activos Modelados**: Serrano 447, Iquique, Chile (Tours 360°, Levantamiento con Drones DJI e Inspección Fotogramétrica).
- **Google AI Studio**: Workspace integrado para asistencia en diseño, generación de descripciones espaciales con Gemini 1.5 Pro y 2.0 Flash.

---

## 2. Habilitación de Skills de Diseño y Arquitectura

En este proyecto se encuentran respaldadas y operativas las siguientes skills en `.agents/skills/`:
- **`anti-slop-design`**: Gobernanza visual contra clichés de IA. Bordes hairline de 1px, superficies monocromo titanio (`#09090b`), números tabulares obligatorios y jerarquía visual estricta de 1 a 3.
- **`ui-ux-pro-max`**: Inteligencia de diseño con 79 estilos (Liquid Glass #14, Glassmorphism #3, Dark Mode OLED #7) y maridajes tipográficos.
- **`pms-erp-dashboard-design`**: Patrones de dominio para estacionamientos, control de barreras, modo garita y conciliación de cajas.
- **`spec-to-design`**: Traducción de especificaciones técnicas y documentación de producto a flujos, contratos y arquitectura de UI.
- **`magnific-ai`**: Alucinación generativa, reiluminación (`Relight`) y super-resolución fotorrealista para renders arquitectónicos y maquetas 3D.
- **`clarity-upscaler`**: Escalado generativo open-source de alta fidelidad (Tiled MultiDiffusion + ControlNet Tile) para super-resolución 4K/8K.
- **`archify`**: Diagramas interactivos y verificables de arquitectura, flujo de datos y base de datos con validación geométrica formal.
- **`product-manager`** & **`saas-mvp-launcher`**: Disciplina de producto SaaS, métricas de retención, arquitectura B2B y modelos de suscripción.
- **`stitch-design-system`**: Integración con `StitchMCP` para generación de pantallas y tokens en `DESIGN.md`.

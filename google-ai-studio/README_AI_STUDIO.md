# Guía de Uso: Google AI Studio — Andina Vision

Esta guía explica cómo importar, editar y sincronizar este proyecto en **Google AI Studio** desde cualquier navegador.

---

## 1. Abrir Google AI Studio

1. Ingresa a [https://aistudio.google.com/](https://aistudio.google.com/) con tu cuenta de Google.
2. Asegúrate de tener seleccionado el proyecto de GCP: `gen-lang-client-0862587160`.

---

## 2. Cargar las Instrucciones del Sistema

1. En el panel izquierdo de Google AI Studio, haz clic en **New Prompt** > **System Instructions**.
2. Copia y pega el contenido del archivo `google-ai-studio/system_instructions.md`.
3. Selecciona el modelo **Gemini 1.5 Pro** o **Gemini 2.0 Flash**.
4. Ajusta la temperatura a `0.2`.

---

## 3. Utilizar los Prompts Preconfigurados

Los prompts estructurados se encuentran en `google-ai-studio/gemini_prompts.json`. Puedes copiar los prompts para:
- Generar nuevos visores 360°
- Analizar metadatos de vuelos de drones DJI
- Rediseñar componentes con la estética **Liquid Glass** de Andina Vision

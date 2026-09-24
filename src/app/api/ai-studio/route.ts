import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { prompt, sceneType } = await req.json();

    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
      return NextResponse.json({
        success: true,
        source: 'mock_preview',
        message: 'Google AI Studio API Key no configurada en .env. Retornando respuesta analítica estructurada.',
        analysis: {
          scene: sceneType || 'Tour 360 Inmobiliario',
          suggestedHotspots: [
            { title: 'Acceso Automatizado', position: [0.8, -0.2, -1.5] },
            { title: 'Zona de Plazas PMR', position: [-1.2, 0.1, -1.8] },
          ],
          audioDescription: 'Bienvenido a la instalación Serrano 447. Este espacio cuenta con 30 bahías demarcadas y control LPR.',
        }
      });
    }

    // Llamada directa al API de Gemini en Google AI Studio
    const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [
          {
            parts: [
              {
                text: `Eres el motor de análisis espacial de Andina Vision 360 con Google AI Studio. Contexto: ${prompt}`,
              },
            ],
          },
        ],
      }),
    });

    const data = await res.json();
    return NextResponse.json({ success: true, data });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

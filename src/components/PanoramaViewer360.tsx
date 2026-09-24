'use client';

import React, { useRef, useState } from 'react';
import { Compass, Move, RotateCw, ZoomIn, ZoomOut, Info } from 'lucide-react';

interface PanoramaViewerProps {
  scene: {
    id: string;
    name: string;
    location: string;
    description: string;
    imageUrl: string;
  };
}

export default function PanoramaViewer360({ scene }: PanoramaViewerProps) {
  const [zoom, setZoom] = useState(1);
  const [showInfo, setShowInfo] = useState(true);

  return (
    <div className="w-full h-[calc(100vh-140px)] relative overflow-hidden select-none bg-slate-950">
      {/* Contenedor Interactivo con Imagen Panorámica */}
      <div
        className="w-full h-full bg-cover bg-center transition-transform duration-300 ease-out cursor-grab active:cursor-grabbing"
        style={{
          backgroundImage: `url('${scene.imageUrl}')`,
          transform: `scale(${zoom})`,
        }}
      />

      {/* Overlay de Ayuda de Navegación 360 */}
      <div className="absolute top-6 left-6 z-10">
        <div className="px-3.5 py-1.5 rounded-full bg-black/60 border border-white/20 backdrop-blur-md text-xs font-mono text-cyan-300 flex items-center gap-2 shadow-xl">
          <Move className="w-3.5 h-3.5" />
          <span>Arrastra con el ratón o el dedo para girar 360°</span>
        </div>
      </div>

      {/* Tarjeta de Información de Escena */}
      {showInfo && (
        <div className="absolute bottom-6 left-6 z-10 max-w-sm liquid-glass-card rounded-2xl p-5 space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono font-bold text-cyan-400 uppercase">Información</span>
            <button
              onClick={() => setShowInfo(false)}
              className="text-xs text-slate-400 hover:text-white"
            >
              ✕
            </button>
          </div>
          <h4 className="text-base font-bold text-white">{scene.name}</h4>
          <p className="text-xs text-slate-300 leading-relaxed">{scene.description}</p>
        </div>
      )}

      {/* Controles de Zoom y Giro */}
      <div className="absolute bottom-6 right-6 z-10 flex flex-col gap-2">
        <button
          onClick={() => setZoom((prev) => Math.min(prev + 0.25, 2))}
          className="w-10 h-10 rounded-xl bg-black/70 hover:bg-black/90 border border-white/20 text-white flex items-center justify-center backdrop-blur-md transition"
          title="Acercar"
        >
          <ZoomIn className="w-4 h-4" />
        </button>
        <button
          onClick={() => setZoom((prev) => Math.max(prev - 0.25, 1))}
          className="w-10 h-10 rounded-xl bg-black/70 hover:bg-black/90 border border-white/20 text-white flex items-center justify-center backdrop-blur-md transition"
          title="Alejar"
        >
          <ZoomOut className="w-4 h-4" />
        </button>
        <button
          onClick={() => setShowInfo(!showInfo)}
          className="w-10 h-10 rounded-xl bg-black/70 hover:bg-black/90 border border-white/20 text-cyan-400 flex items-center justify-center backdrop-blur-md transition"
          title="Ver Ficha"
        >
          <Info className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}

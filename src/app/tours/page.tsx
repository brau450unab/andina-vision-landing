'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Compass, Eye, Maximize2, Share2, Layers, MapPin, Sparkles } from 'lucide-react';
import PanoramaViewer360 from '@/components/PanoramaViewer360';

interface Scene {
  id: string;
  name: string;
  location: string;
  description: string;
  imageUrl: string;
  hotspotsCount: number;
}

const SCENES: Scene[] = [
  {
    id: 'cordano-serrano',
    name: 'Estacionamiento Serrano 447',
    location: 'Serrano 447, Iquique',
    description: 'Acceso principal, caseta de control y matriz de 30 plazas con demarcación reflectante.',
    imageUrl: 'https://images.unsplash.com/photo-1506521781263-d8422e82f27a?auto=format&fit=crop&w=2000&q=90',
    hotspotsCount: 4,
  },
  {
    id: 'edificio-oficinas',
    name: 'Planta Corporativa y Notaría',
    location: 'Sector Bancario, Iquique',
    description: 'Recorrido 360° interior de oficinas premium y recepción con acabados en madera y cristal.',
    imageUrl: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=2000&q=90',
    hotspotsCount: 6,
  },
  {
    id: 'complejo-portuario',
    name: 'Vista Aérea Drone Puerto Iquique',
    location: 'Zona Portuaria ZOFRI',
    description: 'Panorama ortorrectificado de patio de maniobras y logística portuaria.',
    imageUrl: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=2000&q=90',
    hotspotsCount: 3,
  },
];

export default function ToursPage() {
  const [activeScene, setActiveScene] = useState<Scene>(SCENES[0]);

  return (
    <div className="min-h-screen bg-[#06080E] text-white flex flex-col font-sans">
      {/* Sub-header de Navegación del Visor */}
      <div className="border-b border-white/[0.08] bg-[#0A0F1D]/80 backdrop-blur-xl px-4 sm:px-6 py-3.5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Link
            href="/"
            className="w-9 h-9 rounded-xl bg-white/[0.05] border border-white/10 flex items-center justify-center hover:bg-white/10 transition"
          >
            <ArrowLeft className="w-4 h-4 text-slate-300" />
          </Link>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-bold text-sm text-white">{activeScene.name}</span>
              <span className="bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 text-[10px] px-2 py-0.5 rounded-full font-mono">
                WebGL 360
              </span>
            </div>
            <span className="text-[11px] text-slate-400 flex items-center gap-1 font-mono">
              <MapPin className="w-3 h-3 text-cyan-400" /> {activeScene.location}
            </span>
          </div>
        </div>

        {/* Selector de Escenas */}
        <div className="flex items-center gap-2">
          {SCENES.map((scene) => (
            <button
              key={scene.id}
              onClick={() => setActiveScene(scene)}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition ${
                activeScene.id === scene.id
                  ? 'bg-cyan-500 text-black shadow-lg shadow-cyan-500/30'
                  : 'bg-white/[0.05] text-slate-300 hover:bg-white/[0.1] border border-white/10'
              }`}
            >
              {scene.name.split(' ')[0]}
            </button>
          ))}
        </div>
      </div>

      {/* Visor 360 Principal */}
      <div className="flex-1 relative bg-black flex flex-col items-center justify-center overflow-hidden">
        <PanoramaViewer360 scene={activeScene} />
      </div>
    </div>
  );
}

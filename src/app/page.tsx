'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Compass,
  Camera,
  Layers,
  Sparkles,
  Plane,
  Building,
  CheckCircle2,
  ArrowRight,
  MapPin,
  Play,
  Share2,
  Smartphone,
  Cpu,
  ShieldCheck,
  ChevronRight,
  ExternalLink
} from 'lucide-react';
import PricingCalculator from '@/components/PricingCalculator';

export default function HomePage() {
  const [selectedDemo, setSelectedDemo] = useState<'cordano' | 'puerto' | 'inmobiliaria'>('cordano');

  return (
    <div className="relative overflow-hidden">
      {/* Resplandores ambientales estilo Magnific AI / Mac Titanium */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-b from-cyan-500/20 via-blue-600/10 to-transparent blur-[160px] pointer-events-none" />
      <div className="absolute top-[800px] right-0 w-[600px] h-[400px] bg-blue-500/10 blur-[150px] pointer-events-none" />

      {/* 1. HERO SECTION PRINCIPAL */}
      <section className="relative pt-20 pb-24 px-4 sm:px-6 max-w-7xl mx-auto text-center space-y-8">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.05] border border-white/10 text-xs font-medium text-cyan-300 backdrop-blur-xl">
          <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
          <span>Tecnología Cloud Native • Google AI Studio & Vertex AI Ready</span>
        </div>

        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white leading-[1.08] max-w-5xl mx-auto">
          Tours Virtuales 360° e Inspección Aérea con <br />
          <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500 bg-clip-text text-transparent">
            Gemelos Digitales de Alta Precisión
          </span>
        </h1>

        <p className="text-slate-300 text-base sm:text-lg max-w-3xl mx-auto font-normal leading-relaxed">
          Digitalizamos espacios inmobiliarios, instalaciones industriales y proyectos comerciales en el norte de Chile. Integración nativa con Google Street View, visualización WebGL sin plugins y análisis predictivo asistido por inteligencia artificial.
        </p>

        {/* CTA Primarios */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <Link
            href="/tours"
            className="px-8 py-3.5 rounded-2xl metallic-button text-black font-extrabold text-sm flex items-center gap-2.5 shadow-xl transition"
          >
            <Compass className="w-4 h-4 text-black stroke-[2.5]" />
            <span>Ver Demostración 360° Interactiva</span>
          </Link>
          <a
            href="#cotizador"
            className="px-7 py-3.5 rounded-2xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/15 text-white font-semibold text-sm backdrop-blur-xl transition flex items-center gap-2"
          >
            <span>Calcular Presupuesto Online</span>
            <ChevronRight className="w-4 h-4 text-slate-400" />
          </a>
        </div>

        {/* 2. MOCKUP INTERACTIVO / VISOR PREVIEW */}
        <div className="pt-10 max-w-5xl mx-auto">
          <div className="relative rounded-3xl p-2 liquid-glass-card">
            <div className="relative aspect-[16/9] rounded-2xl overflow-hidden bg-slate-950 border border-white/10 group">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1506521781263-d8422e82f27a?auto=format&fit=crop&w=1600&q=85"
                alt="360 Tour Preview - Serrano 447"
                className="w-full h-full object-cover transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />

              {/* Botón Central Play / Iniciar Tour */}
              <div className="absolute inset-0 flex items-center justify-center">
                <Link
                  href="/tours"
                  className="w-20 h-20 rounded-full bg-cyan-500/90 text-black flex items-center justify-center shadow-[0_0_50px_rgba(6,182,212,0.8)] hover:scale-110 active:scale-95 transition"
                >
                  <Play className="w-8 h-8 fill-black translate-x-0.5" />
                </Link>
              </div>

              {/* Información Superpuesta */}
              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-left">
                <div>
                  <span className="text-xs uppercase font-mono tracking-wider text-cyan-400 font-bold block">
                    Caso Destacado
                  </span>
                  <h3 className="text-lg font-bold text-white">
                    Instalación Serrano 447 — Cordano Inversiones
                  </h3>
                  <p className="text-xs text-slate-300">
                    Tour 360° + Ortofotografía Aérea para Monitoreo de 30 Plazas y Control de Accesos
                  </p>
                </div>
                <Link
                  href="/tours"
                  className="hidden sm:flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 backdrop-blur-md text-xs font-bold border border-white/20 transition"
                >
                  <span>Abrir Visor</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SERVICIOS ESPECIALIZADOS */}
      <section id="servicios" className="py-20 px-4 sm:px-6 max-w-7xl mx-auto space-y-12">
        <div className="text-center space-y-3">
          <span className="text-xs font-mono font-bold tracking-wider uppercase text-cyan-400">
            Nuestras Capacidades
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Soluciones de Captura 3D y Telemetría Aérea
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="liquid-glass-card rounded-3xl p-8 space-y-4 hover:border-cyan-500/40 transition">
            <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center">
              <Camera className="w-6 h-6 text-cyan-400" />
            </div>
            <h3 className="text-xl font-bold text-white">Tours 360° Matterport & WebGL</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Recorridos virtuales interactivos con resolución 8K HDR, puntos de interés informativos y navegación fluida tipo muñeca (Dollhouse) compatible con móviles y gafas VR.
            </p>
          </div>

          <div className="liquid-glass-card rounded-3xl p-8 space-y-4 hover:border-cyan-500/40 transition">
            <div className="w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center">
              <Plane className="w-6 h-6 text-blue-400" />
            </div>
            <h3 className="text-xl font-bold text-white">Drones DJI Matrice & Mavic 3E</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Fotogrametría aérea, ortomosaicos georreferenciados (RTK), inspección técnica de techumbres y avances de obra certificados bajo normativa DGAC Chile.
            </p>
          </div>

          <div className="liquid-glass-card rounded-3xl p-8 space-y-4 hover:border-cyan-500/40 transition">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center">
              <Cpu className="w-6 h-6 text-emerald-400" />
            </div>
            <h3 className="text-xl font-bold text-white">Google AI Studio & Vertex AI</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Procesamiento de imágenes mediante Gemini Vision, generación automática de fichas descriptivas, detección de grietas o anomalías y narraciones guiadas por voz sintética.
            </p>
          </div>
        </div>
      </section>

      {/* 4. COTIZADOR INTERACTIVO */}
      <section id="cotizador" className="py-20 px-4 sm:px-6 max-w-5xl mx-auto">
        <PricingCalculator />
      </section>
    </div>
  );
}

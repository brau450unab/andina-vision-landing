'use client';

import React, { useState } from 'react';
import { Calculator, CheckCircle2, MessageCircle, Sparkles, Building, Camera, Plane } from 'lucide-react';

export default function PricingCalculator() {
  const [areaM2, setAreaM2] = useState<number>(300);
  const [includeDrone, setIncludeDrone] = useState<boolean>(true);
  const [includeDollhouse, setIncludeDollhouse] = useState<boolean>(true);
  const [includeGoogleMaps, setIncludeGoogleMaps] = useState<boolean>(true);

  // Cálculo en Pesos Chilenos (CLP)
  const basePricePerM2 = 450;
  const dronePrice = includeDrone ? 120000 : 0;
  const dollhousePrice = includeDollhouse ? 45000 : 0;
  const googleMapsPrice = includeGoogleMaps ? 30000 : 0;
  const subtotal = areaM2 * basePricePerM2 + dronePrice + dollhousePrice + googleMapsPrice;

  const whatsappMessage = encodeURIComponent(
    `Hola Andina Vision, coticé en su plataforma web para un proyecto de ${areaM2} m² con ` +
    `${includeDrone ? 'Fotogrametría Drone, ' : ''}` +
    `${includeDollhouse ? 'Modelo 3D Dollhouse, ' : ''}` +
    `${includeGoogleMaps ? 'Google Street View, ' : ''}` +
    `por un estimado de $${subtotal.toLocaleString('es-CL')} CLP. Me gustaría coordinar una visita técnica.`
  );

  return (
    <div className="liquid-glass-card rounded-3xl p-8 sm:p-10 space-y-8 border border-cyan-500/30">
      <div className="text-center space-y-2">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-300 text-xs font-mono font-semibold">
          <Calculator className="w-3.5 h-3.5 text-cyan-400" />
          <span>Cotizador Automático en Tiempo Real</span>
        </div>
        <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
          Calcula tu Proyecto de Escaneo 3D y Drones
        </h3>
        <p className="text-xs sm:text-sm text-slate-400">
          Valores referenciales para la I Región de Tarapacá (Iquique, Alto Hospicio y ZOFRI)
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Deslizadores y Opciones */}
        <div className="space-y-6">
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-slate-300 font-medium">Superficie a Escanear</span>
              <span className="text-cyan-400 font-mono font-bold text-base">{areaM2} m²</span>
            </div>
            <input
              type="range"
              min={50}
              max={3000}
              step={50}
              value={areaM2}
              onChange={(e) => setAreaM2(Number(e.target.value))}
              className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
            />
          </div>

          <div className="space-y-3 pt-2">
            <label className="flex items-center gap-3 p-3.5 rounded-2xl bg-white/[0.04] border border-white/10 cursor-pointer hover:bg-white/[0.08] transition">
              <input
                type="checkbox"
                checked={includeDrone}
                onChange={(e) => setIncludeDrone(e.target.checked)}
                className="w-4 h-4 rounded text-cyan-500 accent-cyan-500"
              />
              <div className="text-xs">
                <span className="font-bold text-white block">Fotogrametría Aérea Drone DJI 4K</span>
                <span className="text-slate-400">Ortomosaico y vistas perimetrales (+$120.000)</span>
              </div>
            </label>

            <label className="flex items-center gap-3 p-3.5 rounded-2xl bg-white/[0.04] border border-white/10 cursor-pointer hover:bg-white/[0.08] transition">
              <input
                type="checkbox"
                checked={includeDollhouse}
                onChange={(e) => setIncludeDollhouse(e.target.checked)}
                className="w-4 h-4 rounded text-cyan-500 accent-cyan-500"
              />
              <div className="text-xs">
                <span className="font-bold text-white block">Maqueta Digital 3D (Dollhouse)</span>
                <span className="text-slate-400">Modelo tridimensional navegable (+$45.000)</span>
              </div>
            </label>

            <label className="flex items-center gap-3 p-3.5 rounded-2xl bg-white/[0.04] border border-white/10 cursor-pointer hover:bg-white/[0.08] transition">
              <input
                type="checkbox"
                checked={includeGoogleMaps}
                onChange={(e) => setIncludeGoogleMaps(e.target.checked)}
                className="w-4 h-4 rounded text-cyan-500 accent-cyan-500"
              />
              <div className="text-xs">
                <span className="font-bold text-white block">Publicación en Google Street View</span>
                <span className="text-slate-400">Integración con ficha Google Maps Business (+$30.000)</span>
              </div>
            </label>
          </div>
        </div>

        {/* Resumen de Presupuesto */}
        <div className="liquid-glass-card rounded-2xl p-6 sm:p-8 space-y-6 text-center border border-white/15">
          <span className="text-xs font-mono uppercase text-slate-400 font-semibold tracking-wider block">
            Presupuesto Estimado
          </span>
          <div className="text-4xl sm:text-5xl font-black text-white font-mono tracking-tight">
            ${subtotal.toLocaleString('es-CL')} <span className="text-base text-cyan-400 font-normal">CLP</span>
          </div>

          <p className="text-xs text-slate-400 leading-relaxed">
            Incluye entrega en 48 horas hábiles, hosting cloud por 12 meses y enlace iframe para insertar en tu sitio web.
          </p>

          <a
            href={`https://wa.me/56984920192?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3.5 rounded-2xl bg-[#25D366] hover:bg-[#20ba59] text-black font-extrabold text-sm flex items-center justify-center gap-2 shadow-xl shadow-green-900/30 transition"
          >
            <MessageCircle className="w-4 h-4 text-black fill-black" />
            <span>Contactar por WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
}

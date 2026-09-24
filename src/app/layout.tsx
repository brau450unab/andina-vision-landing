import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";
import { Camera, Compass, Layers, ShieldCheck, MapPin, Phone, Mail, Sparkles, Box } from "lucide-react";

export const metadata: Metadata = {
  title: "Andina Vision 360 — Tours Virtuales, Drones y Fotogrametría Cloud",
  description: "Plataforma líder en Tours Virtuales 360°, Fotogrametría Aérea con Drones DJI, Gemelos Digitales e integración con Google Cloud, Vertex AI y Google Stitch.",
  keywords: ["Tours Virtuales 360", "Drones DJI Iquique", "Fotogrametría Aérea", "Gemelos Digitales", "Google Cloud Run", "Andina Vision"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="dark">
      <body className="min-h-screen bg-[#06080E] text-slate-100 flex flex-col selection:bg-cyan-500 selection:text-black">
        {/* Cabecera Flotante macOS Liquid Glass */}
        <header className="sticky top-0 z-50 liquid-glass-nav">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center p-2.5 shadow-lg shadow-cyan-500/20 group-hover:scale-105 transition">
                <Compass className="w-full h-full text-black stroke-[2.5]" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-extrabold text-base tracking-tight text-white block">
                    ANDINA VISION
                  </span>
                  <span className="bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 text-[10px] px-2 py-0.5 rounded-full font-mono font-bold">
                    360° PRO
                  </span>
                </div>
                <span className="text-[11px] text-slate-400 font-mono flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-cyan-400" /> Iquique • Tarapacá • Chile
                </span>
              </div>
            </Link>

            <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
              <Link href="/#servicios" className="hover:text-white transition">Servicios</Link>
              <Link href="/tours" className="hover:text-cyan-400 flex items-center gap-1.5 transition">
                <Sparkles className="w-3.5 h-3.5 text-cyan-400" /> Visor 360°
              </Link>
              <Link href="/#drones" className="hover:text-white transition">Flota Drones</Link>
              <Link href="/#proyectos" className="hover:text-white transition">Casos de Éxito</Link>
              <Link href="/#cotizador" className="hover:text-white transition">Cotizador</Link>
            </nav>

            <div className="flex items-center gap-3">
              <Link
                href="/tours"
                className="px-5 py-2.5 rounded-xl metallic-button text-black text-xs font-bold transition flex items-center gap-2"
              >
                <Box className="w-3.5 h-3.5 text-black" />
                <span>Explorar Tours</span>
              </Link>
            </div>
          </div>
        </header>

        <main className="flex-1">{children}</main>

        {/* Footer Corporativo */}
        <footer className="border-t border-white/[0.08] bg-[#070A12] py-12 px-4 sm:px-6">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center">
                <Compass className="w-4 h-4 text-cyan-400" />
              </div>
              <span className="text-sm font-bold text-white tracking-tight">ANDINA VISION 360</span>
            </div>
            <p className="text-xs text-slate-500">
              © 2026 Andina Vision SpA • Integrado con Google Cloud us-west1 y Google AI Studio.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}

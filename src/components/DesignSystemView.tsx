import React from "react";
import { Sparkles, Type, Palette, MoveRight, Eye } from "lucide-react";

export default function DesignSystemView() {
  const colors = [
    { name: "Primary Red", hex: "#E11D48", bg: "bg-rose-600", border: "border-rose-500", text: "text-rose-500", desc: "Main brand activator. Drives high-intensity CTA buttons, pricing highlights, and interactive anchor points." },
    { name: "Accent Yellow", hex: "#FBBF24", bg: "bg-amber-400", border: "border-amber-300", text: "text-amber-400", desc: "Tactful highlights. Used for Jags' trademark catchy slogans ('Aapka Kaam Hum Dekh Lenge') and key subheadings." },
    { name: "Slate Charcoal", hex: "#18181B", bg: "bg-zinc-900", border: "border-zinc-800", text: "text-zinc-400", desc: "Core background token for all structural cards, case studies overlays, and secondary visual containers." },
    { name: "Obsidian Deep", hex: "#0A0A0B", bg: "bg-neutral-950", border: "border-neutral-900", text: "text-neutral-950", desc: "Main background canvas. Absorbs excess screen glare, setting a flawless premium tone with rich negative space." }
  ];

  return (
    <div className="space-y-8 animate-fadeIn">
      <div className="border-b border-neutral-800 pb-5">
        <h3 className="text-2xl font-bold font-sans text-white tracking-tight">Style Guide & Design System</h3>
        <p className="text-neutral-400 text-sm mt-1">
          Aesthetic blueprint merging Cupertino minimalism, Notion layout structures, and high-energy creator styling.
        </p>
      </div>

      {/* Typography & Colors Rows */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Typo Section */}
        <div className="bg-[#18181b] border border-neutral-800 rounded-2xl p-6 sm:p-8 space-y-6">
          <h4 className="text-sm font-semibold text-white flex items-center gap-2 border-b border-neutral-800 pb-3">
            <Type className="w-4 h-4 text-rose-500" />
            <span>Typography System & Font Scales</span>
          </h4>

          <div className="space-y-4">
            <div className="p-3 bg-neutral-950 rounded-xl border border-neutral-900">
              <span className="text-[10px] font-mono text-neutral-500 uppercase">Display Headers</span>
              <p className="text-xl font-bold text-white tracking-tight mt-1 font-sans">
                Inter Bold / Space Grotesk
              </p>
              <p className="text-[11px] text-neutral-400 font-sans mt-1">
                Optimized with close line-height (`leading-tight`) and tight tracking (`tracking-tight`) to command screen attention.
              </p>
            </div>

            <div className="p-3 bg-neutral-950 rounded-xl border border-neutral-900">
              <span className="text-[10px] font-mono text-neutral-500 uppercase">Standard Body Fonts</span>
              <p className="text-sm font-medium text-neutral-200 mt-1">
                Inter Regular / Medium
              </p>
              <p className="text-[11px] text-neutral-400 font-sans mt-1">
                Perfect paragraph tracking, high-contrast slate-silver details for long reading times without physical strain.
              </p>
            </div>

            <div className="p-3 bg-neutral-950 rounded-xl border border-neutral-900">
              <span className="text-[10px] font-mono text-neutral-500 uppercase">Monospaced Analytics & Tags</span>
              <p className="text-xs font-mono text-rose-400 bg-rose-950/20 px-2 py-1 rounded inline-block mt-2 border border-rose-900/30">
                JetBrains Mono Regular
              </p>
              <p className="text-[11px] text-neutral-400 font-sans mt-1">
                Selected for analytical value displays, stats rows, pricing elements, and tech specifications labels.
              </p>
            </div>
          </div>
        </div>

        {/* Color Section */}
        <div className="bg-[#18181b] border border-neutral-800 rounded-2xl p-6 sm:p-8 space-y-6">
          <h4 className="text-sm font-semibold text-white flex items-center gap-2 border-b border-neutral-800 pb-3">
            <Palette className="w-4 h-4 text-rose-500" />
            <span>Color Palette Tokens</span>
          </h4>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {colors.map((color, idx) => (
              <div key={idx} className="bg-neutral-950 p-4 rounded-xl border border-neutral-900 space-y-3">
                <div className="flex items-center gap-3">
                  <div className={`w-8 h-8 rounded-lg ${color.bg} border ${color.border} shrink-0 shadow-inner`} />
                  <div>
                    <h5 className="text-xs font-bold text-white">{color.name}</h5>
                    <span className="text-[10px] font-mono text-neutral-500">{color.hex}</span>
                  </div>
                </div>
                <p className="text-[11px] text-neutral-400 font-sans leading-normal">
                  {color.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Component Library Specs */}
      <div className="bg-neutral-950 border border-neutral-800 rounded-2xl p-6 xs:p-8 space-y-6">
        <h4 className="text-sm font-semibold text-white flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-yellow-500" />
          <span>Interactive Component Library Preview</span>
        </h4>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Button catalog */}
          <div className="bg-[#18181b] border border-neutral-800 rounded-xl p-5 space-y-3">
            <span className="text-[9px] font-mono text-neutral-500 uppercase tracking-widest block">Interactive Buttons</span>
            <div className="space-y-2.5 pt-1">
              <button className="w-full bg-rose-600 hover:bg-rose-500 text-white py-2 px-3 rounded-lg text-xs font-semibold shadow-md shadow-rose-950/40 transition-all flex items-center justify-center gap-1.5 cursor-pointer">
                <span>Primary Book CTA</span>
                <MoveRight className="w-3.5 h-3.5" />
              </button>
              <button className="w-full bg-neutral-900 hover:bg-neutral-800 text-neutral-300 py-2 px-3 rounded-lg text-xs font-medium border border-neutral-800 hover:border-neutral-700 transition-all text-center cursor-pointer">
                Secondary Action
              </button>
              <button className="w-full text-rose-500 hover:text-rose-400 py-1.5 px-3 rounded-lg text-xs font-medium transition-all text-center bg-rose-950/10 hover:bg-rose-950/20 cursor-pointer">
                Ghost Badge Button
              </button>
            </div>
          </div>

          {/* Cards & Overlays */}
          <div className="bg-[#18181b] border border-neutral-800 rounded-xl p-5 space-y-3">
            <span className="text-[9px] font-mono text-neutral-500 uppercase tracking-widest block">Notion-Style Media Cards</span>
            <div className="bg-neutral-950 p-4 rounded-xl border border-neutral-900 hover:border-neutral-800 transition-all group cursor-pointer space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-[9px] font-mono text-rose-400 bg-rose-950/30 px-2 py-0.5 rounded border border-rose-900/30">
                  CASE STUDY
                </span>
                <span className="text-xs text-neutral-500">200M+ Views</span>
              </div>
              <h5 className="text-xs font-bold text-white group-hover:text-rose-400 transition-colors">Canva Scale campaign</h5>
              <p className="text-[10px] text-neutral-400 leading-normal">
                Structured challenge-to-growth roadmap scaling engagement metrics organically.
              </p>
            </div>
          </div>

          {/* Tag catalog */}
          <div className="bg-[#18181b] border border-neutral-800 rounded-xl p-5 space-y-3">
            <span className="text-[9px] font-mono text-neutral-500 uppercase tracking-widest block">Interactive Details Cards</span>
            <div className="space-y-2 pt-1">
              <div className="flex gap-2 p-2 bg-neutral-950 rounded-lg border border-neutral-900 text-[11px] text-neutral-300">
                <span className="text-amber-400">⚡</span>
                <span>Optimized scripting templates for creator hooks.</span>
              </div>
              <div className="flex gap-2 p-2 bg-neutral-950 rounded-lg border border-neutral-900 text-[11px] text-neutral-300">
                <span className="text-rose-400">🔥</span>
                <span>Designed 3 custom intellectual properties.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

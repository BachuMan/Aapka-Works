import React, { useState } from "react";
import { Monitor, Smartphone, LayoutDashboard, Ruler, HelpCircle } from "lucide-react";

export default function WireframeView() {
  const [viewport, setViewport] = useState<"desktop" | "mobile">("desktop");
  const [showAnnotations, setShowAnnotations] = useState<boolean>(true);

  return (
    <div className="space-y-6">
      <div className="border-b border-neutral-800 pb-5 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h3 className="text-2xl font-bold font-sans text-white tracking-tight">Interactive Wireframe Specs</h3>
          <p className="text-neutral-400 text-sm mt-1">
            Structural wireframe mapping. Toggle viewports to see grids, margins, padding standards, and layout hierarchies.
          </p>
        </div>

        {/* Controls */}
        <div className="flex items-center gap-2 self-start md:self-center">
          <button
            onClick={() => setViewport("desktop")}
            className={`px-3 py-1.5 rounded-lg border text-xs font-semibold flex items-center gap-1.5 select-none transition-all cursor-pointer ${
              viewport === "desktop"
                ? "bg-rose-500/10 border-rose-500/40 text-rose-400"
                : "bg-neutral-900 border-neutral-800 text-neutral-400 hover:text-neutral-200"
            }`}
          >
            <Monitor className="w-3.5 h-3.5" />
            <span>Desktop (UX Block)</span>
          </button>
          <button
            onClick={() => setViewport("mobile")}
            className={`px-3 py-1.5 rounded-lg border text-xs font-semibold flex items-center gap-1.5 select-none transition-all cursor-pointer ${
              viewport === "mobile"
                ? "bg-rose-500/10 border-rose-500/40 text-rose-400"
                : "bg-neutral-900 border-neutral-800 text-neutral-400 hover:text-neutral-200"
            }`}
          >
            <Smartphone className="w-3.5 h-3.5" />
            <span>Mobile (Adaptive Stack)</span>
          </button>
          <button
            onClick={() => setShowAnnotations(!showAnnotations)}
            className={`px-3 py-1.5 rounded-lg border text-xs font-semibold flex items-center gap-1.5 select-none transition-all cursor-pointer ${
              showAnnotations
                ? "bg-emerald-500/10 border-emerald-500/40 text-emerald-400"
                : "bg-neutral-920 border-neutral-800 text-neutral-500"
            }`}
          >
            <Ruler className="w-3.5 h-3.5" />
            <span>Specs: {showAnnotations ? "ON" : "OFF"}</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-4 gap-6">
        {/* Live Diagram Box */}
        <div className="xl:col-span-3 bg-neutral-950 rounded-2xl border border-neutral-800 overflow-hidden flex flex-col items-center p-4 sm:p-8">
          <div
            className={`w-full transition-all duration-300 relative border border-dashed rounded-xl bg-neutral-900/40 ${
              viewport === "desktop" ? "max-w-4xl" : "max-w-sm"
            }`}
          >
            {/* Height Indicator Helper */}
            {showAnnotations && (
              <div className="absolute top-0 -left-6 bottom-0 w-4 border-r border-dashed border-rose-500/40 flex flex-col justify-between text-[9px] font-mono text-rose-400/80 items-center py-20 pointer-events-none">
                <span>PAD: py-24</span>
                <span className="h-10 border-l border-dashed border-rose-500/40"></span>
                <span>PAD: py-24</span>
              </div>
            )}

            {/* Header Block Wireframe */}
            <div className="p-4 border-b border-dashed border-neutral-800 flex items-center justify-between text-[11px] font-mono text-neutral-500">
              <span className="border border-neutral-800 px-2.5 py-1 rounded">Aapka Works [Logo-Placeholder]</span>
              <div className="hidden sm:flex gap-4">
                <span>About</span>
                <span>Case Studies</span>
                <span>Pricing</span>
              </div>
              <span className="border border-rose-500/30 text-rose-500 px-3 py-1 rounded bg-rose-950/10 font-bold max-w-xs shrink-0 text-center">
                Contact Form Anchor
              </span>
            </div>

            {/* Hero Wireframe Block */}
            <div className="p-8 text-center border-b border-dashed border-neutral-800 bg-neutral-950/20 space-y-4">
              <div className="inline-block bg-neutral-900 border border-neutral-850 text-[10px] font-mono px-3 py-1 rounded text-rose-400">
                HERO BLOCK INDEX MAP (12-COLUMNS GRID)
              </div>
              <h1 className="text-xl sm:text-2xl font-bold text-neutral-300 font-sans tracking-tight max-w-lg mx-auto border border-dashed border-neutral-800 p-4">
                [Helping Creators & Brands Build Content That Actually Works]
              </h1>
              <p className="text-xs text-neutral-500 font-sans max-w-md mx-auto">
                [Subheading: From content strategy to full social, we help creators build content that gets attention.]
              </p>
              <div className="flex gap-3 justify-center">
                <span className="border border-rose-500/50 bg-rose-950/10 text-rose-400 px-4 py-2 rounded text-xs select-none">
                  Book Consultation [Call]
                </span>
                <span className="border border-neutral-800 bg-neutral-900 text-neutral-400 px-4 py-2 rounded text-xs select-none">
                  View Cases [Social Proof]
                </span>
              </div>
              {showAnnotations && (
                <div className="text-[10px] bg-neutral-900 text-emerald-400 p-2.5 rounded border border-emerald-900/50 font-mono text-left max-w-md mx-auto">
                  // Hero annotation: Bold display, CTA placement aligned with visual gravity, immediate views stats row immediately below.
                </div>
              )}
            </div>

            {/* Stats Bar Wireframe */}
            <div className="p-4 bg-neutral-900/50 border-b border-dashed border-neutral-800 text-center">
              <span className="text-[11px] font-mono text-neutral-500">
                [Stats Row] 2.5B+ Views • 100+ Brands • Canva / Swiggy / Google / Meta
              </span>
            </div>

            {/* About Block Wireframe */}
            <div className="p-8 border-b border-dashed border-neutral-800">
              <div className={`grid gap-6 ${viewport === "desktop" ? "grid-cols-2" : "grid-cols-1"}`}>
                <div className="space-y-4">
                  <div className="text-[10px] font-mono text-rose-400 font-semibold">[About Jagjyot Singh]</div>
                  <h3 className="text-lg font-bold text-neutral-300">"Better known as Aapka Jags"</h3>
                  <div className="h-20 bg-neutral-950/50 border border-dashed border-neutral-800 rounded"></div>
                  {showAnnotations && (
                    <div className="text-[9px] font-mono text-neutral-500">
                      Margin: p-8 | LineHeight: relaxed
                    </div>
                  )}
                </div>
                <div className="border border-dashed border-neutral-800 rounded p-6 bg-neutral-900/40 text-center flex flex-col justify-center gap-2 min-h-36">
                  <span className="text-xs font-mono text-neutral-500">[Avatars/Video Box Placement]</span>
                  <p className="text-[10px] text-neutral-400 leading-normal">Interactive loop showing Jags' viral story snippets.</p>
                </div>
              </div>
            </div>

            {/* Cases Studs Wireframe */}
            <div className="p-8 border-b border-dashed border-neutral-800 bg-neutral-950/10 space-y-6">
              <div className="text-center text-xs font-mono text-neutral-400">[Social Proof Case Studies Cards Grid]</div>
              <div className={`grid gap-4 ${viewport === "desktop" ? "grid-cols-3" : "grid-cols-1"}`}>
                {["Swiggy Mimicry Campaign", "Canva Growth Engine", "Vanity Scaling"].map((caseTitle, cIdx) => (
                  <div key={cIdx} className="border border-dashed border-neutral-800 p-4 rounded bg-neutral-950 text-left space-y-3">
                    <span className="text-[10px] font-mono text-rose-400">Card {cIdx + 1}</span>
                    <h4 className="text-xs font-bold text-neutral-300">{caseTitle}</h4>
                    <div className="h-10 bg-neutral-900 rounded border border-neutral-850"></div>
                  </div>
                ))}
              </div>
            </div>

            {/* Pricing Section Wireframe */}
            <div className="p-8 space-y-4 bg-neutral-900/20 text-center">
              <span className="text-xs font-mono text-neutral-400">[Pricing Matrix Toggles]</span>
              <div className={`grid gap-4 ${viewport === "desktop" ? "grid-cols-2" : "grid-cols-1"}`}>
                <div className="border border-dashed border-neutral-850 bg-neutral-950 p-6 rounded text-left">
                  <h4 className="text-xs font-mono font-bold text-neutral-300">[1. Consultation Support Packages]</h4>
                  <p className="text-[10px] text-neutral-500 mt-2">Flexible plans targeting creator ideation & scripting support.</p>
                </div>
                <div className="border border-dashed border-neutral-850 bg-neutral-950 p-6 rounded text-left">
                  <h4 className="text-xs font-mono font-bold text-neutral-300">[2. Full Social Strategy retainers]</h4>
                  <p className="text-[10px] text-neutral-500 mt-2">All-inclusive shooting calendar control, scripting & optimization.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Informative explanation */}
        <div className="space-y-6">
          <div className="bg-neutral-900 p-5 rounded-xl border border-neutral-800 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-rose-400">Aesthetic Alignment Rules</h4>
            <p className="text-xs text-neutral-300 leading-relaxed font-sans">
              Designed as a hybrid combining <strong>Cupertino minimalism</strong> (immense negative space) with <strong>Notion grids</strong> (clean structural bounding lines, simple borders).
            </p>
          </div>

          <div className="bg-[#18181b] border border-neutral-800 rounded-xl p-5 space-y-4">
            <h5 className="text-xs font-mono uppercase tracking-wider text-neutral-400">Spacing Tokens & Units</h5>
            <div className="space-y-3 text-xs">
              <div className="flex justify-between border-b border-neutral-900 pb-1.5 font-mono text-[11px]">
                <span className="text-neutral-400">Desktop Max-Width:</span>
                <span className="text-white">1280px (7xl)</span>
              </div>
              <div className="flex justify-between border-b border-neutral-900 pb-1.5 font-mono text-[11px]">
                <span className="text-neutral-400">Section Margin:</span>
                <span className="text-white">py-24 (96px)</span>
              </div>
              <div className="flex justify-between border-b border-neutral-900 pb-1.5 font-mono text-[11px]">
                <span className="text-neutral-400">Gutter Margin:</span>
                <span className="text-white">gap-8 (32px)</span>
              </div>
              <div className="flex justify-between font-mono text-[11px]">
                <span className="text-neutral-400">Mobile Margins:</span>
                <span className="text-white">px-4 (16px)</span>
              </div>
            </div>
          </div>

          <div className="bg-neutral-900/40 p-5 rounded-xl border border-neutral-850 flex gap-2">
            <HelpCircle className="w-5 h-5 text-yellow-500 shrink-0 mt-0.5" />
            <p className="text-xs text-neutral-400 font-sans leading-relaxed">
              <strong>Developer Notice:</strong> Under CSS code edits, always use absolute grid properties matching full responsive flex directions to prevent layouts overlapping.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

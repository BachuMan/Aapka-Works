import React, { useState } from "react";
import { SITEMAP_DATA, SiteNode } from "../types";
import { ChevronRight, ArrowDownRight, Layers, LayoutGrid, CheckCircle } from "lucide-react";

export default function SitemapView() {
  const [activeNode, setActiveNode] = useState<string | null>("root");

  const renderNode = (node: SiteNode, isRoot: boolean = false, level: number = 0) => {
    const isSelected = activeNode === (isRoot ? "root" : node.name);
    return (
      <div key={node.name} className="mb-4">
        <div
          onClick={() => setActiveNode(isRoot ? "root" : node.name)}
          className={`p-4 rounded-xl border transition-all cursor-pointer select-none ${
            isSelected
              ? "bg-rose-500/10 border-rose-500/50 shadow-md shadow-rose-950/20"
              : "bg-[#18181B] border-neutral-800 hover:border-neutral-700 hover:bg-neutral-900/50"
          }`}
          style={{ marginLeft: `${level * 24}px` }}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              {level > 0 ? (
                <ArrowDownRight className="w-4 h-4 text-rose-500 shrink-0" />
              ) : (
                <Layers className="w-5 h-5 text-rose-500 shrink-0" />
              )}
              <div>
                <span className="text-xs font-mono text-neutral-500 bg-neutral-900 px-2 py-0.5 rounded mr-2 border border-neutral-800">
                  {node.path}
                </span>
                <h4 className="text-sm font-semibold text-white inline-block mt-1 sm:mt-0">{node.name}</h4>
              </div>
            </div>
            <div className="text-xs font-mono text-rose-400 bg-rose-950/30 px-2 py-1 rounded border border-rose-900/20">
              CTA: {node.cta}
            </div>
          </div>
          {isSelected && (
            <div className="mt-3 pl-7 border-l border-rose-500/20 text-xs text-neutral-400 space-y-2 animate-fadeIn">
              <p className="text-neutral-300 font-sans leading-relaxed">{node.description}</p>
              <div className="flex items-center gap-2 text-rose-400/90 bg-rose-500/5 p-2 rounded border border-rose-500/10 max-w-lg">
                <CheckCircle className="w-3.5 h-3.5" />
                <span>Goal: High-conversion routing to scheduler immediately upon read.</span>
              </div>
            </div>
          )}
        </div>
        {node.children && node.children.map(child => renderNode(child, false, level + 1))}
      </div>
    );
  };

  return (
    <div className="space-y-6">
      <div className="border-b border-neutral-800 pb-5">
        <h3 className="text-2xl font-bold font-sans text-white tracking-tight">Website Information Architecture</h3>
        <p className="text-neutral-400 text-sm mt-1">
          A minimalist single-page router with modal overlays for conversion gravity, mapping perfectly to Jags' content strategy.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-4">
          <div className="p-1 px-3 bg-neutral-900 rounded-lg inline-flex items-center gap-2 border border-neutral-800">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="text-xs text-neutral-400 font-mono">Interactive Tree Map (Click items to see focus strategy)</span>
          </div>
          <div className="bg-neutral-950 p-4 sm:p-6 rounded-2xl border border-neutral-800/80">
            {renderNode(SITEMAP_DATA, true, 0)}
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-neutral-900 p-6 rounded-2xl border border-neutral-800 space-y-4">
            <h4 className="text-sm font-mono tracking-wider uppercase text-neutral-400">Navigation Mechanics</h4>
            <ul className="text-xs text-neutral-300 space-y-3 font-sans leading-relaxed">
              <li className="flex gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-1.5 shrink-0" />
                <div>
                  <strong className="text-white block mb-0.5">Persistent Sticky Header</strong>
                  Includes real-time booking prompt to minimize visual dropoffs and keep contact front-of-mind.
                </div>
              </li>
              <li className="flex gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-1.5 shrink-0" />
                <div>
                  <strong className="text-white block mb-0.5">Interactive Case Studies Drawer</strong>
                  Case template mounts on key interactions rather than standard slow-loading nested routes.
                </div>
              </li>
              <li className="flex gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-1.5 shrink-0" />
                <div>
                  <strong className="text-white block mb-0.5">Smooth Section Hooks</strong>
                  Responsive sliding anchors for modern mobile gestures and clean scroll matching.
                </div>
              </li>
            </ul>
          </div>

          <div className="bg-neutral-900/50 p-6 rounded-2xl border border-neutral-800/80 space-y-4">
            <h4 className="text-sm font-mono tracking-wider uppercase text-neutral-400 text-rose-400">Why Single-Page IA?</h4>
            <p className="text-xs text-neutral-400 leading-relaxed font-sans">
              "70% Professional / 20% Gen Z / 10% Fun" demands instant access. Secondary routes are silent killers of attention in the creator economy. 
              By nesting all core elements in high-frictional vertical tiers with modal overlays, context stays unified.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

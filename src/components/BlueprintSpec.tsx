import React, { useState } from "react";
import SitemapView from "./SitemapView";
import UXStrategyView from "./UXStrategyView";
import SEOStructureView from "./SEOStructureView";
import DevelopmentSpecsView from "./DevelopmentSpecsView";
import DesignSystemView from "./DesignSystemView";
import CopyDeckView from "./CopyDeckView";
import WireframeView from "./WireframeView";
import { Layers, Lightbulb, Ruler, FileCode, Landmark, Search, Terminal } from "lucide-react";

interface SpecTab {
  name: string;
  icon: React.ReactNode;
  component: React.ReactNode;
}

export default function BlueprintSpec() {
  const [activeTab, setActiveTab] = useState<number>(0);

  const tabs: SpecTab[] = [
    {
      name: "Information Architecture",
      icon: <Layers className="w-4 h-4 text-rose-500" />,
      component: <SitemapView />
    },
    {
      name: "UX Strategy Pillars",
      icon: <Lightbulb className="w-4 h-4 text-emerald-500" />,
      component: <UXStrategyView />
    },
    {
      name: "Wireframe Specs",
      icon: <Ruler className="w-4 h-4 text-yellow-500" />,
      component: <WireframeView />
    },
    {
      name: "High-Converting Copy Deck",
      icon: <Landmark className="w-4 h-4 text-purple-500" />,
      component: <CopyDeckView />
    },
    {
      name: "Search Metadata (SEO)",
      icon: <Search className="w-4 h-4 text-blue-500" />,
      component: <SEOStructureView />
    },
    {
      name: "Technical Specs",
      icon: <Terminal className="w-4 h-4 text-yellow-500" />,
      component: <DevelopmentSpecsView />
    },
    {
      name: "Visual Design System",
      icon: <FileCode className="w-4 h-4 text-pink-500" />,
      component: <DesignSystemView />
    }
  ];

  return (
    <div className="bg-[#0A0A0B] text-neutral-300 min-h-screen">
      
      {/* Notion style header bar */}
      <div className="border-b border-neutral-800 bg-neutral-950/80 p-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="text-xl">📓</span>
              <span className="text-xs font-mono text-neutral-500 uppercase tracking-widest font-semibold">NOTION // STRATEGIST WORKSPACE</span>
            </div>
            <h2 className="text-2xl font-black text-white tracking-tight">
              Aapka Works Delivery Specifications
            </h2>
            <p className="text-xs text-neutral-400">
              Interactive strategic dashboard containing sitemaps, wireframes, copywriting cards, and technical blueprints.
            </p>
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-950/20 text-emerald-400 border border-emerald-900/40 rounded-lg text-xs font-mono">
            <span>● Status: Spec Complete // Verified</span>
          </div>
        </div>
      </div>

      {/* Grid Layout containing Sidebar and Content Canvas */}
      <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-4 gap-8">
        
        {/* Workspace index rail */}
        <aside className="lg:col-span-1 space-y-4">
          <div className="bg-[#18181B] border border-neutral-800 rounded-2xl p-4 space-y-2">
            <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest block px-2.5 mb-1">
              SPECIFICATIONS CATALOG
            </span>
            <nav className="flex flex-col gap-1">
              {tabs.map((tab, idx) => (
                <button
                  key={tab.name}
                  onClick={() => setActiveTab(idx)}
                  className={`w-full text-left py-2.5 px-3 rounded-xl text-xs font-semibold transition-all flex items-center gap-3 select-none cursor-pointer ${
                    activeTab === idx
                      ? "bg-rose-500/10 border border-rose-500/30 text-rose-400"
                      : "bg-transparent hover:bg-neutral-900 text-neutral-400 hover:text-white"
                  }`}
                >
                  <span className="shrink-0">{tab.icon}</span>
                  <span className="truncate">{tab.name}</span>
                </button>
              ))}
            </nav>
          </div>

          {/* Quick Stats sidebar snippet */}
          <div className="bg-neutral-950 rounded-2xl p-4 border border-neutral-850 text-xs text-neutral-400 space-y-2">
            <h4 className="font-semibold text-white">Client Summary</h4>
            <div className="grid grid-cols-2 gap-2 text-center text-[10px] font-mono">
              <div className="bg-neutral-900/60 p-2 rounded">
                <span className="text-neutral-500 block">VIEWS GOAL:</span>
                <span className="text-white font-bold">2.5B+ (Maintained)</span>
              </div>
              <div className="bg-neutral-900/60 p-2 rounded">
                <span className="text-neutral-500 block">CONVERSION:</span>
                <span className="text-emerald-400 font-bold">30s Intake</span>
              </div>
            </div>
          </div>
        </aside>

        {/* Content canvas viewport */}
        <main className="lg:col-span-3">
          <div className="bg-neutral-950/20 border border-neutral-800 rounded-3xl p-6 sm:p-8 min-h-[500px]">
            {tabs[activeTab].component}
          </div>
        </main>
      </div>

    </div>
  );
}

import React, { useState } from "react";
import LiveWebsite from "./components/LiveWebsite";
import BlueprintSpec from "./components/BlueprintSpec";
import { Sparkles, ArrowRight, Layout, Settings } from "lucide-react";

export default function App() {
  const [activeWorkspace, setActiveWorkspace] = useState<"live" | "spec">("live");

  return (
    <div className="bg-[#0A0A0B] min-h-screen">
      
      {/* Top Controller Bar */}
      <div className="bg-black border-b border-neutral-850 px-4 py-3 flex flex-col sm:flex-row items-center justify-between gap-4 sticky top-0 z-50">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-rose-600/15 border border-rose-500/20 text-rose-500 flex items-center justify-center text-sm font-semibold">
            AW
          </div>
          <div>
            <h1 className="text-xs font-bold text-white tracking-widest uppercase font-mono">AAPKA WORKS // WORKSPACE</h1>
            <p className="text-[10px] text-neutral-500 font-mono -mt-0.5 leading-none">Apple × Notion Creator Agency Hub</p>
          </div>
        </div>

        {/* Big Sliding Tab Selector */}
        <div className="flex p-0.5 bg-neutral-900 border border-neutral-800 rounded-xl max-w-sm shrink-0">
          <button
            onClick={() => setActiveWorkspace("live")}
            className={`px-4 py-2 text-[11px] font-bold rounded-lg transition-all select-none cursor-pointer flex items-center gap-1.5 ${
              activeWorkspace === "live"
                ? "bg-rose-600 text-white shadow-md shadow-rose-950/20"
                : "text-neutral-400 hover:text-white"
            }`}
          >
            <Layout className="w-3.5 h-3.5" />
            <span>💎 Live Agency Site</span>
          </button>
          
          <button
            onClick={() => setActiveWorkspace("spec")}
            className={`px-4 py-2 text-[11px] font-bold rounded-lg transition-all select-none cursor-pointer flex items-center gap-1.5 ${
              activeWorkspace === "spec"
                ? "bg-[#18181b] border border-neutral-800 text-rose-400 shadow-md"
                : "text-neutral-400 hover:text-white"
            }`}
          >
            <Settings className="w-3.5 h-3.5 text-rose-500" />
            <span>📊 Strategy & Specifications</span>
          </button>
        </div>

        <div className="hidden lg:flex items-center gap-1 text-[10px] font-mono text-neutral-500">
          <span>Delivery Version:</span>
          <span className="text-white font-semibold">1.0.0</span>
        </div>
      </div>

      {/* Embedded Viewport */}
      {activeWorkspace === "live" ? (
        <div className="animate-fadeIn">
          <LiveWebsite />
        </div>
      ) : (
        <div className="animate-fadeIn">
          <BlueprintSpec />
        </div>
      )}

    </div>
  );
}

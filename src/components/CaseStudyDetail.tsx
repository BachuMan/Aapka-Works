import React from "react";
import { CaseStudy } from "../types";
import { X, CheckCircle, TrendingUp, Info } from "lucide-react";

interface CaseStudyDetailProps {
  item: CaseStudy;
  onClose: () => void;
}

export default function CaseStudyDetail({ item, onClose }: CaseStudyDetailProps) {
  return (
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/85 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      />

      {/* Frame Container */}
      <div className="relative bg-[#18181B] border border-neutral-800 rounded-3xl w-full max-w-2xl overflow-hidden shadow-2xl shadow-rose-950/20 z-10 animate-scaleIn my-8">
        
        {/* Color Banner */}
        <div className={`p-8 bg-gradient-to-r ${item.color} text-white relative`}>
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 p-2 bg-black/30 hover:bg-black/50 text-white rounded-full transition-all border border-white/10 cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
          
          <div className="flex items-center gap-3 text-2xl mb-1">{item.image}</div>
          <span className="text-[10px] font-mono tracking-widest uppercase text-white/80">{item.category}</span>
          <h3 className="text-xl sm:text-2xl font-bold tracking-tight font-sans mt-0.5">{item.title}</h3>
          <p className="text-white/90 text-xs sm:text-sm mt-1 leading-relaxed font-sans">{item.subtitle}</p>
        </div>

        {/* Detailed Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[70vh] overflow-y-auto">
          
          {/* Headline Stat Box */}
          <div className="flex items-center gap-3.5 p-4 bg-neutral-900 rounded-2xl border border-rose-950/30">
            <div className="p-2.5 bg-rose-500/10 rounded-xl border border-rose-500/20 text-rose-500">
              <TrendingUp className="w-5 h-5 flex-shrink-0" />
            </div>
            <div>
              <span className="text-[10px] font-mono text-neutral-400 block uppercase">KEY CAMPAIGN OUTCOME</span>
              <p className="text-sm font-bold text-white mt-0.5">{item.tagline}</p>
            </div>
          </div>

          {/* Part 1: Challenge */}
          <div className="space-y-2">
            <h4 className="text-xs font-mono uppercase tracking-wider text-rose-400">The Challenge</h4>
            <p className="text-xs text-neutral-300 font-sans leading-relaxed">
              {item.challenge}
            </p>
          </div>

          {/* Part 2: Strategy */}
          <div className="space-y-2">
            <h4 className="text-xs font-mono uppercase tracking-wider text-rose-400">The Strategy</h4>
            <p className="text-xs text-neutral-300 font-sans leading-relaxed">
              {item.strategy}
            </p>
          </div>

          {/* Part 3: Execution Checklist */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-rose-400">Execution Phase</h4>
            <div className="space-y-2">
              {item.execution.map((exc, idx) => (
                <div key={idx} className="flex gap-2.5 p-3 bg-neutral-950 rounded-xl border border-neutral-900 text-xs text-neutral-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-1.5 shrink-0" />
                  <p className="leading-relaxed font-sans">{exc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Part 4: Verified Results */}
          <div className="space-y-3 pt-2">
            <h4 className="text-xs font-mono uppercase tracking-wider text-emerald-400">Campaign Results</h4>
            <div className="grid grid-cols-1 gap-2">
              {item.results.map((res, idx) => (
                <div key={idx} className="flex gap-2.5 p-3 bg-emerald-500/5 rounded-xl border border-emerald-500/10 text-xs text-neutral-300">
                  <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <p className="leading-relaxed font-sans font-medium text-neutral-200">{res}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-neutral-900 border-t border-neutral-800 flex justify-end gap-2 text-xs">
          <button 
            onClick={onClose}
            className="px-4 py-2 bg-neutral-850 hover:bg-neutral-800 text-neutral-400 hover:text-white rounded-lg transition-all border border-neutral-850 hover:border-neutral-750 cursor-pointer"
          >
            Close Case Study
          </button>
        </div>
      </div>
    </div>
  );
}

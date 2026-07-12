import React from "react";
import { CaseStudy } from "../types";
import { X, CheckCircle, TrendingUp } from "lucide-react";

interface CaseStudyDetailProps {
  item: CaseStudy;
  onClose: () => void;
  theme?: "light" | "dark";
}

export default function CaseStudyDetail({ item, onClose, theme = "light" }: CaseStudyDetailProps) {
  return (
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/85 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      />

      {/* Frame Container */}
      <div className={`relative border rounded-3xl w-full max-w-2xl overflow-hidden shadow-2xl z-10 animate-scaleIn my-8 ${theme === 'dark' ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-100'}`}>
        
        {/* Color Banner */}
        <div className={`p-8 bg-gradient-to-r ${item.color} text-white relative`}>
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 p-2 bg-black/10 hover:bg-black/20 text-white rounded-full transition-all border border-white/20 cursor-pointer"
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
          <div className={`flex items-center gap-3.5 p-4 rounded-2xl border ${theme === 'dark' ? 'bg-slate-900/50 border-slate-700' : 'bg-gray-50 border-gray-100'}`}>
            <div className={`p-2.5 rounded-xl border ${theme === 'dark' ? 'bg-rose-500/10 border-rose-500/20 text-rose-400' : 'bg-rose-50 border-rose-100 text-rose-600'}`}>
              <TrendingUp className="w-5 h-5 flex-shrink-0" />
            </div>
            <div>
              <span className={`text-[10px] font-mono block uppercase ${theme === 'dark' ? 'text-slate-400' : 'text-gray-500'}`}>KEY CAMPAIGN OUTCOME</span>
              <p className={`text-sm font-bold mt-0.5 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>{item.tagline}</p>
            </div>
          </div>

          {/* Part 1: Challenge */}
          <div className="space-y-2">
            <h4 className="text-xs font-mono uppercase tracking-wider text-rose-600">The Challenge</h4>
            <p className={`text-xs font-sans leading-relaxed ${theme === 'dark' ? 'text-slate-300' : 'text-gray-600'}`}>
              {item.challenge}
            </p>
          </div>

          {/* Part 2: Strategy */}
          <div className="space-y-2">
            <h4 className="text-xs font-mono uppercase tracking-wider text-rose-600">The Strategy</h4>
            <p className={`text-xs font-sans leading-relaxed ${theme === 'dark' ? 'text-slate-300' : 'text-gray-600'}`}>
              {item.strategy}
            </p>
          </div>

          {/* Part 3: Execution Checklist */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-rose-600">Execution Phase</h4>
            <div className="space-y-2">
              {item.execution.map((exc, idx) => (
                <div key={idx} className={`flex gap-2.5 p-3 rounded-xl border shadow-sm text-xs ${theme === 'dark' ? 'bg-slate-700 border-slate-600 text-slate-200' : 'bg-white border-gray-100 text-gray-600'}`}>
                  <div className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-1.5 shrink-0" />
                  <p className="leading-relaxed font-sans">{exc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Part 4: Verified Results */}
          <div className="space-y-3 pt-2">
            <h4 className="text-xs font-mono uppercase tracking-wider text-emerald-600">Campaign Results</h4>
            <div className="grid grid-cols-1 gap-2">
              {item.results.map((res, idx) => (
                <div key={idx} className={`flex gap-2.5 p-3 rounded-xl border text-xs ${theme === 'dark' ? 'bg-emerald-900/30 border-emerald-900/50 text-emerald-100' : 'bg-emerald-50/50 border-emerald-100 text-gray-700'}`}>
                  <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <p className={`leading-relaxed font-sans font-medium ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>{res}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className={`p-4 border-t flex justify-end gap-2 text-xs ${theme === 'dark' ? 'bg-slate-900/50 border-slate-700' : 'bg-gray-50 border-gray-100'}`}>
          <button 
            onClick={onClose}
            className={`px-4 py-2 rounded-lg transition-all border cursor-pointer shadow-sm ${theme === 'dark' ? 'bg-slate-700 hover:bg-slate-600 text-slate-300 hover:text-white border-slate-600' : 'bg-white hover:bg-gray-100 text-gray-600 hover:text-gray-900 border-gray-200'}`}
          >
            Close Case Study
          </button>
        </div>
      </div>
    </div>
  );
}

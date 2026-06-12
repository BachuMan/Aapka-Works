import React from "react";
import { SEO_DATA } from "../types";
import { Search, Globe, Code, Key } from "lucide-react";

export default function SEOStructureView() {
  return (
    <div className="space-y-6">
      <div className="border-b border-neutral-800 pb-5">
        <h3 className="text-2xl font-bold font-sans text-white tracking-tight">SEO Strategy & Metadata Structure</h3>
        <p className="text-neutral-400 text-sm mt-1">
          Technical indexing architecture to secure Google authority for high-intent creator economy and agency keywords.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          {/* Metadata Cards */}
          <div className="bg-[#18181b] border border-neutral-800 rounded-2xl p-6 space-y-4">
            <h4 className="text-sm font-semibold text-white flex items-center gap-2">
              <Globe className="w-4 h-4 text-rose-500" />
              <span>Header Meta Tags Setup</span>
            </h4>
            <div className="space-y-3 font-mono text-xs">
              <div className="bg-neutral-950 p-3 rounded-lg border border-neutral-800">
                <span className="text-neutral-500 block mb-1">// Page Title</span>
                <span className="text-rose-400 font-semibold">{SEO_DATA.metaTitle}</span>
              </div>
              <div className="bg-neutral-950 p-3 rounded-lg border border-neutral-800">
                <span className="text-neutral-500 block mb-1">// Description</span>
                <span className="text-neutral-300 leading-relaxed">{SEO_DATA.metaDescription}</span>
              </div>
            </div>
          </div>

          {/* JSON-LD Schema */}
          <div className="bg-[#18181b] border border-neutral-800 rounded-2xl p-6 space-y-4">
            <h4 className="text-sm font-semibold text-white flex items-center gap-2">
              <Code className="w-4 h-4 text-emerald-500" />
              <span>JSON-LD Schema Integration (ProfessionalService)</span>
            </h4>
            <div className="bg-neutral-950 p-4 rounded-xl border border-neutral-900 overflow-x-auto max-h-60">
              <pre className="text-[11px] font-mono text-emerald-400 leading-normal">
                {JSON.stringify(SEO_DATA.schemaData, null, 2)}
              </pre>
            </div>
          </div>
        </div>

        {/* Sidebar details */}
        <div className="space-y-6">
          {/* High Intent Keywords */}
          <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6 space-y-4">
            <h4 className="text-sm font-semibold text-white flex items-center gap-2">
              <Key className="w-4 h-4 text-yellow-500" />
              <span>Target Keyword Profiles</span>
            </h4>
            <p className="text-xs text-neutral-400 leading-relaxed font-sans">
              Optimized for high search-intent long-tail keywords associated with modern social coaching:
            </p>
            <div className="flex flex-wrap gap-2">
              {SEO_DATA.keywords.map((kw, i) => (
                <span key={i} className="text-[10px] font-mono text-neutral-300 bg-neutral-950 px-2 py-1 rounded-md border border-neutral-800">
                  {kw}
                </span>
              ))}
            </div>
          </div>

          {/* Semantic Heading Outline */}
          <div className="bg-neutral-900/50 border border-neutral-800/80 rounded-2xl p-6 space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-400">Semantic H1-H3 Outline</h4>
            <div className="space-y-3 text-xs">
              <div className="flex items-center gap-2">
                <span className="bg-rose-500/10 text-rose-400 px-1.5 py-0.5 rounded text-[10px] font-mono">H1</span>
                <span className="text-white font-medium text-[11px]">Helping Creators & Brands Build Content That Actually Works</span>
              </div>
              <div className="flex items-center gap-2 ml-3 border-l border-neutral-800 pl-3">
                <span className="bg-neutral-800 text-neutral-400 px-1.5 py-0.5 rounded text-[10px] font-mono">H2</span>
                <span className="text-neutral-300 font-medium text-[11px]">Case Studies / Institutional Validations</span>
              </div>
              <div className="flex items-center gap-2 ml-3 border-l border-neutral-800 pl-3">
                <span className="bg-neutral-800 text-neutral-400 px-1.5 py-0.5 rounded text-[10px] font-mono">H2</span>
                <span className="text-neutral-300 font-medium text-[11px]">About Jagjyot Singh (Aapka Jags)</span>
              </div>
              <div className="flex items-center gap-2 ml-3 border-l border-neutral-800 pl-3">
                <span className="bg-neutral-800 text-neutral-400 px-1.5 py-0.5 rounded text-[10px] font-mono">H2</span>
                <span className="text-neutral-300 font-medium text-[11px]">Flexible Growth Offerings & Pricing</span>
              </div>
              <div className="flex items-center gap-2 ml-6 border-l border-neutral-800 pl-3">
                <span className="bg-neutral-800/50 text-neutral-500 px-1.5 py-0.5 rounded text-[10px] font-mono">H3</span>
                <span className="text-neutral-400 font-medium text-[11px]">Consultation Call & Content Support Packs</span>
              </div>
              <div className="flex items-center gap-2 ml-6 border-l border-neutral-800 pl-3">
                <span className="bg-neutral-800/50 text-neutral-500 px-1.5 py-0.5 rounded text-[10px] font-mono">H3</span>
                <span className="text-neutral-400 font-medium text-[11px]">Omnipresent Social Media Management</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

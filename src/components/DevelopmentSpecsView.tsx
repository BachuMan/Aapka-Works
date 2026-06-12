import React from "react";
import { Server, Zap, Cpu, ArrowUpRight, CheckCircle2 } from "lucide-react";

export default function DevelopmentSpecsView() {
  const specs = [
    {
      category: "1. Core Technology Stack",
      icon: <Cpu className="w-5 h-5 text-rose-500" />,
      items: [
        { name: "Frontend Framework", value: "React 19 (Functional Hooks pattern for fast, reactive render cycles)" },
        { name: "Build Tooling", value: "Vite 6 + ESNext Bundler (Native ES Module compilation & ultra-fast hot starts)" },
        { name: "CSS Architecture", value: "Tailwind CSS v4 (Zero-JS-runtime post-processed design token utility engine)" },
        { name: "Animation Layer", value: "Motion React (Hardware-accelerated layout transitions & entering slide-ins)" }
      ]
    },
    {
      category: "2. Performance & Web Vitals Protocol",
      icon: <Zap className="w-5 h-5 text-yellow-500" />,
      items: [
        { name: "Image Optimization", value: "Strict WebP/AVIF file formats with native progressive lazy load arrays" },
        { name: "Code Splitting", value: "Dynamic dynamic imports for heavy nodes (modal/spec views) to cut load overhead" },
        { name: "Asset Delivery", value: "Edge-cached static cloud assets via regional CDN proxies" },
        { name: "SEO Target Ratings", value: "LCP <= 1.2s, CLS <= 0.05, FID <= 45ms (Perfect raw scores on Lighthouse)" }
      ]
    },
    {
      category: "3. Deployment & Cloud Ingress",
      icon: <Server className="w-5 h-5 text-emerald-500" />,
      items: [
        { name: "Production Host", value: "Server-side Express proxy in high-availability Cloud Run containers" },
        { name: "Ingress Router", value: "Nginx reverse proxy mapping external custom domains directly to port 3000" },
        { name: "Node Environment", value: "ESModule target transpiling strictly to dist/server.cjs via esbuild" },
        { name: "Secret Protocols", value: "Enforce process.env secrets injection via system key managers (no raw keys in clients)" }
      ]
    }
  ];

  return (
    <div className="space-y-6">
      <div className="border-b border-neutral-800 pb-5">
        <h3 className="text-2xl font-bold font-sans text-white tracking-tight">Technical Implementation Specs</h3>
        <p className="text-neutral-400 text-sm mt-1">
          Architectural blueprint to guarantee industrial performance, responsive modularity, and lightning-fast edge loads.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {specs.map((sec, idx) => (
          <div key={idx} className="bg-[#18181b] border border-neutral-800 rounded-2xl p-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-neutral-900 rounded-lg border border-neutral-800 text-rose-500">
                {sec.icon}
              </div>
              <h4 className="text-sm font-semibold text-white tracking-tight">{sec.category}</h4>
            </div>

            <div className="space-y-3 pt-2">
              {sec.items.map((item, iIdx) => (
                <div key={iIdx} className="bg-neutral-950 p-3 rounded-xl border border-neutral-900 space-y-1">
                  <span className="text-[10px] font-mono text-neutral-500 block uppercase tracking-wider">{item.name}</span>
                  <p className="text-xs text-neutral-300 font-sans leading-relaxed">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6 space-y-4">
        <h4 className="text-sm font-semibold text-white">Next-Phase Scalability Strategy</h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-sans text-neutral-400">
          <div className="flex gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
            <div>
              <strong className="text-white">CMS / Testimonial Integrations</strong>
              <p className="mt-0.5 leading-relaxed">Prepare dry, modular schemas inside types.ts to integrate dynamic Firestore synchronization once the user requests live reviews.</p>
            </div>
          </div>
          <div className="flex gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
            <div>
              <strong className="text-white">Frictionless Calendly Webhooks</strong>
              <p className="mt-0.5 leading-relaxed">Configure automatic redirect handlers within scheduling frames to route successful bookings into localized Google Sheets analytics counters.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

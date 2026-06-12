import React, { useState } from "react";
import { Sparkles, Eye, ShieldCheck, Zap, HelpCircle } from "lucide-react";

export default function UXStrategyView() {
  const [activeTab, setActiveTab] = useState<number>(0);

  const pillars = [
    {
      icon: <Eye className="w-5 h-5 text-rose-500" />,
      title: "1. The 30-Second Attention Hook",
      concept: "Cognitive Priming & Immediate Scannability",
      description: "A visitor decides within 5 seconds if a site is worth their attention. We structure critical values (Who, What, Strategy, Results) in strict order of descending priority, above the fold.",
      tactics: [
        "Bold, massive display titles representing exact viewer-centric offers.",
        "A constant 'ticker row' showing massive trust numbers (2.5B+ Views, 100+ Brands) to instantly build authority.",
        "Tasteful, dynamic brand logo row (Google, Meta, Swiggy, Netflix) to activate rapid pattern recognition trust."
      ],
      ratio: "70% Professional / 30% Dynamic"
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-emerald-500" />,
      title: "2. Case Studies as High-Velocity Proof",
      concept: "Social Proof Over Declarative Content",
      description: "People don't buy claims, they buy case histories. By presenting actual marketing successes (Swiggy, Canva, Vanity) ABOVE the detailed pricing, we trigger the 'Aha!' moment first.",
      tactics: [
        "Interactive cards showing clear metrics like '200M+ Views' or '3.6x Follower Growth' as headers.",
        "Interactive case study detailed templates containing structural proof: Challenge -> Strategy -> Results.",
        "Direct visual connection to familiar mainstream logos (Canva, Swiggy) to establish institutional trust."
      ],
      ratio: "80% Professional / 20% Founder-First"
    },
    {
      icon: <Zap className="w-5 h-5 text-yellow-500" />,
      title: "3. Interactive Frictionless Funnel",
      concept: "Lowering Interactive Barriers to Conversion",
      description: "Getting clients to book a call should be simple. Traditional agency intake forms are tedious and create bounce rates, whereas a unified scheduler offers zero-friction scheduling.",
      tactics: [
        "Stickyfloating action headers and footers matching active mobile viewports.",
        "A clear, double-toggle pricing deck that separates simple consultations from full management.",
        "An elegant client booking interface mimicking elite tools like Cal.com / Calendly directly in the UI."
      ],
      ratio: "50% Professional / 40% Friendly / 10% Gen Z"
    },
    {
      icon: <Sparkles className="w-5 h-5 text-indigo-500" />,
      title: "4. The Jags Style Ratio (70 / 20 / 10)",
      concept: "Aesthetic Formula: Apple x Notion x Modern Creator",
      description: "Merging institutional corporate authority with high-converting creator authenticity. We deliver direct, serious business outcomes powered by a modern, relatable 'Gen Z' voice.",
      tactics: [
        "70% Professionalism: Immaculate typography alignments, massive whitespace, fast loads, flawless functional layout.",
        "20% Gen Z Vibe: Bold punchy statements, dark slate mode, highlights of warm amber yellows and neon reds.",
        "10% Fun: Tongue-in-cheek quotes ('Aapka Kaam Hum Dekh Lenge'), micro-animations, playful emojis used as bullet points."
      ],
      ratio: "70% Serious / 20% Modern / 10% Quirky"
    }
  ];

  return (
    <div className="space-y-6">
      <div className="border-b border-neutral-800 pb-5">
        <h3 className="text-2xl font-bold font-sans text-white tracking-tight">UX & Conversion Strategy</h3>
        <p className="text-neutral-400 text-sm mt-1">
          Engineered to convert passive social viewers into serious corporate consultation inquiries.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-1 flex flex-col gap-2">
          {pillars.map((pillar, idx) => (
            <button
              key={idx}
              onClick={() => setActiveTab(idx)}
              className={`text-left p-4 rounded-xl border text-sm transition-all flex items-center gap-3 select-none ${
                activeTab === idx
                  ? "bg-neutral-900 border-rose-500 text-white font-semibold"
                  : "bg-neutral-950 border-neutral-800 text-neutral-400 hover:text-neutral-200 hover:bg-neutral-900/50"
              }`}
            >
              {pillar.icon}
              <span>{pillar.title.split(". ")[1]}</span>
            </button>
          ))}
        </div>

        <div className="md:col-span-2 bg-[#18181b] border border-neutral-800 rounded-2xl p-6 sm:p-8 space-y-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-3 bg-neutral-900 border-l border-b border-neutral-800 rounded-bl-xl text-xs font-mono text-neutral-400">
            Aesthetic Ratio: {pillars[activeTab].ratio}
          </div>

          <div className="flex items-center gap-3">
            <div className="p-3 bg-neutral-900/80 rounded-xl border border-neutral-800 text-rose-500 shrink-0">
              {pillars[activeTab].icon}
            </div>
            <div>
              <span className="text-xs font-mono text-rose-400 uppercase tracking-widest">{pillars[activeTab].concept}</span>
              <h4 className="text-lg font-bold text-white mt-1">{pillars[activeTab].title}</h4>
            </div>
          </div>

          <p className="text-neutral-300 text-sm leading-relaxed">{pillars[activeTab].description}</p>

          <div className="space-y-3">
            <h5 className="text-xs font-mono text-neutral-400 uppercase tracking-wider">Tactical Execution Checklist</h5>
            <div className="grid grid-cols-1 gap-2">
              {pillars[activeTab].tactics.map((tactic, tIdx) => (
                <div key={tIdx} className="flex gap-2.5 p-3 bg-neutral-950 rounded-xl border border-neutral-800/60 text-xs text-neutral-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-1.5 shrink-0" />
                  <p className="leading-relaxed">{tactic}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-neutral-950 p-6 rounded-2xl border border-neutral-800/80 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-start gap-3">
          <div className="p-2 bg-neutral-900 rounded-lg border border-neutral-800 text-yellow-400 shrink-0 mt-0.5">
            <HelpCircle className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-sm font-semibold text-white">The "30-Second Mirror" Test</h4>
            <p className="text-xs text-neutral-400 leading-normal mt-0.5">
              Can an incoming lead state who we are, why to trust us, Jags' views metrics, and schedule in under 30 seconds? This strategy guarantees they can.
            </p>
          </div>
        </div>
        <div className="text-right shrink-0">
          <div className="text-lg font-bold text-rose-500">2.5B+ Views</div>
          <div className="text-[10px] font-mono text-neutral-500 uppercase">Primary Authority Driver</div>
        </div>
      </div>
    </div>
  );
}

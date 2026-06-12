import React, { useState } from "react";
import { CASE_STUDIES, CONSULTATION_PLANS, MANAGEMENT_PLANS, CaseStudy, PricingPlan } from "../types";
import CaseStudyDetail from "./CaseStudyDetail";
import ContactForm from "./ContactForm";
import { ArrowRight, Sparkles, MessageSquare, ExternalLink, ShieldAlert, Check, CheckCircle } from "lucide-react";

export default function LiveWebsite() {
  const [selectedCase, setSelectedCase] = useState<CaseStudy | null>(null);
  const [pricingMode, setPricingMode] = useState<"consult" | "management">("consult");
  const [selectedPlanDetail, setSelectedPlanDetail] = useState<string>("consultation");

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleBookPlan = (planId: string) => {
    setSelectedPlanDetail(planId);
    scrollToSection("booking-form");
  };

  return (
    <div className="bg-[#0A0A0B] text-neutral-200 min-h-screen relative font-sans">
      
      {/* Absolute top ribbon */}
      <div className="bg-gradient-to-r from-rose-600 to-amber-500 py-1 text-center text-[10px] sm:text-xs text-white uppercase font-bold tracking-widest px-4">
        🚀 AAPKA KAAM HUM DEKH LENGE. // NOW BOOKING Q3 CREATOR ROADMAPS
      </div>

      {/* Hero Floating Action Header */}
      <header className="sticky top-0 z-40 bg-black/70 backdrop-blur-md border-b border-neutral-800/80 px-4 py-3">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xl">🌶️</span>
            <div>
              <h1 className="text-[13px] font-bold text-white tracking-widest font-sans uppercase">Aapka Works</h1>
              <span className="text-[9px] font-mono text-neutral-500 block -mt-1 font-semibold leading-none">by Aapka Jags</span>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center gap-6 text-xs text-neutral-400 font-medium">
            <button onClick={() => scrollToSection("about-jags")} className="hover:text-white transition-colors cursor-pointer">About Jags</button>
            <button onClick={() => scrollToSection("case-studies")} className="hover:text-white transition-colors cursor-pointer">Case Studies</button>
            <button onClick={() => scrollToSection("packages")} className="hover:text-white transition-colors cursor-pointer">Pricing Packages</button>
          </nav>

          <button 
            onClick={() => scrollToSection("booking-form")}
            className="bg-rose-600 hover:bg-rose-500 text-white font-bold text-xs px-3.5 py-1.5 rounded-lg transition-all cursor-pointer shadow-md shadow-rose-950/20"
          >
            Book Session
          </button>
        </div>
      </header>

      {/* Hero Banner Section */}
      <section className="relative overflow-hidden pt-12 pb-16 px-4">
        {/* Subtle decorative radial lights */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-rose-500/5 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="max-w-4xl mx-auto text-center space-y-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-rose-950/20 text-rose-400 border border-rose-900/40 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Modern Social Growth Agency</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight max-w-3xl mx-auto">
            Helping Creators & Brands Build Content That Actually Works.
          </h2>

          <p className="text-sm sm:text-base text-neutral-400 max-w-2xl mx-auto leading-relaxed">
            From content strategy to full social media management, we help creators, founders, and businesses grow through content that gets attention and drives results.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-3">
            <button 
              onClick={() => scrollToSection("booking-form")}
              className="w-full sm:w-auto bg-rose-600 hover:bg-rose-500 text-white font-bold text-xs py-3 px-6 rounded-xl shadow-lg shadow-rose-950/40 transition-all flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <span>Book a Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button 
              onClick={() => scrollToSection("case-studies")}
              className="w-full sm:w-auto bg-neutral-900 hover:bg-neutral-800 text-neutral-300 font-semibold text-xs py-3 px-6 rounded-xl border border-neutral-800 transition-all cursor-pointer"
            >
              View Case Studies
            </button>
          </div>
        </div>
      </section>

      {/* Massive Trust Numbers Ticker */}
      <section className="bg-neutral-950/80 border-y border-neutral-850 py-5 px-4 overflow-hidden">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <div className="text-2xl sm:text-3xl font-extrabold text-rose-500">2.5B+</div>
            <div className="text-[10px] font-mono uppercase tracking-wider text-neutral-400 mt-1">Views Generated</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-extrabold text-white">100+</div>
            <div className="text-[10px] font-mono uppercase tracking-wider text-neutral-400 mt-1">Brand Collabs</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-extrabold text-white">10+ Years</div>
            <div className="text-[10px] font-mono uppercase tracking-wider text-neutral-400 mt-1">Content Experience</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-extrabold text-rose-500">Global</div>
            <div className="text-[10px] font-mono uppercase tracking-wider text-neutral-400 mt-1">Client Footprint</div>
          </div>
        </div>
      </section>

      {/* Tasteful Grayscale Credibility Logos */}
      <section className="py-8 px-4 bg-neutral-950/40 text-center space-y-4">
        <span className="text-[9px] font-mono text-neutral-500 uppercase tracking-widest block font-bold">Trusted by Elite Partners & Creators</span>
        <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-xs font-mono font-semibold text-neutral-500">
          {["Amazon", "Google", "Meta", "YouTube", "Canva", "ChatGPT", "Netflix", "BGMI", "Pant Project", "Noor"].map((logo) => (
            <span key={logo} className="hover:text-neutral-300 transition-colors text-xs select-none">
              {logo}
            </span>
          ))}
        </div>
      </section>

      {/* About Jagjyot Singh Block */}
      <section id="about-jags" className="py-16 px-4 max-w-5xl mx-auto">
        <div className="text-center md:text-left mb-10">
          <span className="text-[10px] font-mono text-rose-500 font-bold tracking-widest uppercase">THE STRATEGIST // FOUNDER BEHIND THE GROWTH</span>
          <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mt-1">Jagjyot Singh</h3>
          <p className="text-neutral-400 text-xs sm:text-sm mt-1">Let's strip away dry agencies biography structures—here are the real metrics.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Detailed narrative bio card */}
          <div className="md:col-span-3 bg-[#18181B] border border-neutral-800 rounded-3xl p-6 sm:p-8 space-y-6 relative overflow-hidden">
            <span className="text-[10px] font-mono text-rose-400 bg-rose-950/20 px-2 py-0.5 rounded border border-rose-900/30">
              BIO: AAPKA JAGS
            </span>
            
            <p className="text-sm font-bold text-neutral-100 italic leading-relaxed">
              "Hi, I'm Jagjyot Singh, better known as Aapka Jags. I'm the founder of Aapka Jags, Aapka Works, and Hapka by Aapka Jags."
            </p>

            <p className="text-xs text-neutral-300 leading-relaxed font-sans">
              Over the last 10 years, I've worked across content creation, social media, branding, and digital storytelling. 
              I've collaborated with 100+ brands including Amazon, Google, Meta, YouTube, Canva, ChatGPT and many more. 
              Across social media platforms, my content has generated over 2.5 Billion views.
            </p>

            <p className="text-xs text-neutral-300 leading-relaxed font-sans">
              I've worked with creators, startups, personal brands, restaurants, media companies, and growing businesses to build content strategies that actually deliver results. 
              Whether it's creating viral content, building a community, launching a new brand, or scaling a creator business, my goal has always remained the same: Help people tell better stories and grow faster online.
            </p>

            {/* Accent Yellow Signature slogan */}
            <div className="bg-neutral-900 p-4 rounded-xl border border-neutral-850 flex items-center justify-between gap-4">
              <div className="text-xs font-mono text-amber-400 font-bold shrink-0">
                ⚡ TAGLINE SLOGAN
              </div>
              <div className="text-right text-[13px] font-bold text-amber-300 font-sans tracking-tight">
                "Aapka Kaam Hum Dekh Lenge."
              </div>
            </div>
          </div>

          {/* Sizing placeholders and stats details */}
          <div className="md:col-span-2 space-y-6 flex flex-col justify-between">
            <div className="bg-neutral-950 rounded-3xl p-6 border border-neutral-850 space-y-4">
              <span className="text-[9px] font-mono text-neutral-500 uppercase font-bold tracking-widest block">CREATIVE FOCUS</span>
              <ul className="text-xs text-neutral-300 space-y-3">
                <li className="flex gap-2">
                  <span className="text-rose-500">🔥</span>
                  <span><strong>70% Professional Retainer:</strong> Flawless delivery.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-rose-500">🍟</span>
                  <span><strong>20% Gen-Z Energy:</strong> Viral storytelling.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-rose-500">⚡</span>
                  <span><strong>10% Fun/Quirky Vibes:</strong> Unforgettable hooks.</span>
                </li>
              </ul>
            </div>

            {/* Video Placeholder frame */}
            <div className="bg-neutral-900 border border-neutral-800 rounded-3xl p-6 text-center space-y-3 flex flex-col justify-center items-center min-h-[160px] relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-tr from-rose-950/20 to-transparent pointer-events-none" />
              <div className="w-12 h-12 bg-rose-600/10 border border-rose-500/20 text-rose-500 rounded-full flex items-center justify-center text-lg">
                🎬
              </div>
              <div>
                <h5 className="text-xs font-bold text-white">Watch Jags' Reel</h5>
                <span className="text-[10px] font-mono text-neutral-500 mt-0.5 block border border-neutral-850 px-2 py-0.5 rounded bg-neutral-950 max-w-max mx-auto">
                  2.5B+ VIDEOS SAMPLE LOOP
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Template Feed Grid */}
      <section id="case-studies" className="py-16 bg-neutral-950/40 px-4">
        <div className="max-w-5xl mx-auto space-y-10">
          <div className="text-center">
            <span className="text-[10px] font-mono text-rose-500 font-bold tracking-widest uppercase">CASE STUDIES & INDUSTRIAL RESULTS</span>
            <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mt-1">Verified Social Proof</h3>
            <p className="text-neutral-400 text-xs sm:text-sm mt-1 max-w-md mx-auto">Social verification of campaigns that triggered commercial growth. Click open the detailed layouts.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CASE_STUDIES.map((item) => (
              <div 
                key={item.id}
                onClick={() => setSelectedCase(item)}
                className="bg-[#18181B] border border-neutral-800/80 hover:border-neutral-750 transition-all rounded-2xl p-5 cursor-pointer relative overflow-hidden group flex flex-col justify-between hover:-translate-y-1"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-2xl">{item.image}</span>
                    <span className="text-[10px] font-mono text-rose-400 bg-rose-950/30 px-2.5 py-0.5 rounded border border-rose-900/30">
                      View details
                    </span>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white group-hover:text-rose-400 transition-colors">{item.title}</h4>
                    <p className="text-[11px] text-neutral-400 font-sans mt-1.5 leading-relaxed">
                      {item.subtitle.slice(0, 100)}...
                    </p>
                  </div>
                </div>
                
                <div className="mt-4 pt-3.5 border-t border-neutral-900 text-xs font-mono text-neutral-400 flex items-center justify-between">
                  <span>OUTCOME:</span>
                  <span className="text-rose-400 font-semibold">{item.metrics}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services, Packages & Pricing Selection Matrix */}
      <section id="packages" className="py-16 px-4 max-w-5xl mx-auto space-y-10">
        <div className="text-center">
          <span className="text-[10px] font-mono text-rose-500 font-bold tracking-widest uppercase">PLAN TRANSPARENCY // RETENTION PACKS</span>
          <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mt-1">Flexible Retainers</h3>
          <p className="text-neutral-400 text-xs sm:text-sm mt-1">Select consultation packs or full multichannel media management.</p>
        </div>

        {/* Pricing Selector Buttons */}
        <div className="flex justify-center p-1 bg-neutral-950 border border-neutral-850 rounded-xl max-w-sm mx-auto">
          <button
            onClick={() => setPricingMode("consult")}
            className={`w-1/2 text-center py-2 text-xs font-bold rounded-lg transition-all select-none cursor-pointer ${
              pricingMode === "consult"
                ? "bg-rose-600 text-white shadow-md shadow-rose-950/20"
                : "text-neutral-400 hover:text-white"
            }`}
          >
            Ideation & Support
          </button>
          <button
            onClick={() => setPricingMode("management")}
            className={`w-1/2 text-center py-2 text-xs font-bold rounded-lg transition-all select-none cursor-pointer ${
              pricingMode === "management"
                ? "bg-rose-600 text-white shadow-md shadow-rose-950/20"
                : "text-neutral-400 hover:text-white"
            }`}
          >
            Social Management
          </button>
        </div>

        {/* Selected Catalog Grids */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-2">
          {(pricingMode === "consult" ? CONSULTATION_PLANS : MANAGEMENT_PLANS).map((plan) => (
            <div 
              key={plan.id}
              className={`bg-[#18181B] border rounded-2xl p-6 space-y-5 relative flex flex-col justify-between ${
                plan.bestVal 
                  ? "border-rose-500 bg-[#1D1215]/20 shadow-lg shadow-rose-950/10" 
                  : "border-neutral-800"
              }`}
            >
              {plan.bestVal && (
                <span className="absolute top-4 right-4 bg-rose-500 text-white text-[9px] font-mono px-2 py-0.5 rounded-full uppercase tracking-wider font-bold">
                  BEST VAL
                </span>
              )}

              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-bold text-white uppercase tracking-tight">{plan.name}</h4>
                  <div className="flex items-baseline gap-1 mt-2">
                    <span className="text-xl sm:text-2xl font-extrabold text-white">{plan.price}</span>
                    {plan.period && <span className="text-[10px] text-neutral-500 font-mono">/{plan.period}</span>}
                  </div>
                </div>

                <p className="text-xs text-neutral-400 font-sans leading-normal leading-relaxed">
                  {plan.details}
                </p>

                <div className="border-t border-neutral-900 pt-4 space-y-2.5">
                  <span className="text-[9px] font-mono text-neutral-500 uppercase tracking-widest block font-bold">Plan Inclusions:</span>
                  {plan.features.map((feat, i) => (
                    <div key={i} className="flex gap-2 text-xs text-neutral-300 font-sans leading-normal">
                      <Check className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={() => handleBookPlan(plan.id)}
                className={`w-full py-2.5 mt-6 rounded-xl text-xs font-bold select-none transition-all text-center flex items-center justify-center gap-1.5 cursor-pointer ${
                  plan.bestVal
                    ? "bg-rose-600 hover:bg-rose-500 text-white shadow-md border border-rose-500"
                    : "bg-neutral-900 hover:bg-neutral-800 text-neutral-300 border border-neutral-850"
                }`}
              >
                <span>Choose this Plan</span>
                <CheckCircle className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials - Coming Soon Panel */}
      <section className="py-16 bg-neutral-950/40 px-4">
        <div className="max-w-4xl mx-auto bg-[#18181B] border border-neutral-800 rounded-3xl p-8 sm:p-10 text-center space-y-4 relative overflow-hidden">
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-rose-500/5 blur-3xl rounded-full" />
          
          <span className="text-[10px] font-mono text-neutral-500 uppercase font-bold tracking-widest">
            TESTIMONIALS & REVIEWS // PHASE 1 SETUP
          </span>
          <h4 className="text-lg sm:text-xl font-bold text-white tracking-tight">Success Stories</h4>
          <p className="text-neutral-400 text-xs sm:text-sm max-w-md mx-auto leading-relaxed">
            We are currently aggregating localized video reviews and written feedback from our Q2 cohort. Content board modules will activate in our next system rollout!
          </p>
          <div className="inline-flex gap-2 text-xs font-mono text-rose-400 bg-rose-950/25 px-3 py-1 rounded-full border border-rose-900/35">
            <span>● Coming Soon // Local Verification</span>
          </div>
        </div>
      </section>

      {/* Interactive Booking Intake form */}
      <section id="booking-form" className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <ContactForm preselectedPackage={selectedPlanDetail} />
        </div>
      </section>

      {/* Simplified Contact footer details */}
      <footer className="bg-neutral-950 border-t border-neutral-900 py-12 px-4 text-center text-xs space-y-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-neutral-400">
          <div className="space-y-1 text-center md:text-left">
            <h5 className="font-bold text-white">Aapka Works</h5>
            <p className="text-[11px]">Aapka Kaam Hum Dekh Lenge.</p>
          </div>
          <div className="space-y-1">
            <h5 className="font-bold text-white">Direct Intakes</h5>
            <p className="text-[11px] hover:text-white transition-colors">hello@aapkaworks.com</p>
            <p className="text-[11px]">@aapkaworks // Intagram handle</p>
          </div>
          <div className="space-y-1 text-center md:text-right">
            <h5 className="font-bold text-white">HQ Locations</h5>
            <p className="text-[11px]">Mumbai, Maharashtra, India</p>
          </div>
        </div>

        <div className="border-t border-neutral-900 pt-6 text-[10px] text-neutral-500 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© 2026 Aapka Works. Built with Apple × Notion × Creator strategy guidelines. All Rights Reserved.</p>
          <div className="flex gap-4">
            <span className="hover:text-white transition-colors">UX Strategy Case</span>
            <span className="hover:text-white transition-colors">Site Roadmap</span>
          </div>
        </div>
      </footer>

      {/* CaseStudyDetail overlay */}
      {selectedCase && (
        <CaseStudyDetail 
          item={selectedCase} 
          onClose={() => setSelectedCase(null)} 
        />
      )}
    </div>
  );
}

import React, { useState, useRef, useEffect } from "react";
import { CASE_STUDIES, CONSULTATION_PLANS, CONTENT_SUPPORT_PLANS, MANAGEMENT_PLANS, CaseStudy } from "../types";
import CaseStudyDetail from "./CaseStudyDetail";
import ContactForm from "./ContactForm";
import { ArrowRight, MessageSquare, Check, CheckCircle, Moon, Sun, Mail, Instagram, Menu, X, Phone } from "lucide-react";
import { motion, useInView, useSpring, useTransform, AnimatePresence } from "motion/react";
import { BRAND_LOGOS } from "../brandLogos";

type Brand = { name: string; logo?: keyof typeof BRAND_LOGOS };

/**
 * A single marquee entry. Brands with a logo glyph render as an inline SVG that
 * inherits the row colour; the rest fall back to a wordmark at a matched optical
 * size. `leading-[1.35]` keeps serif descenders (g, p, y) clear of the row's
 * overflow-hidden clip.
 */
function renderBrandMark(brand: Brand, key: number) {
  const path = brand.logo ? BRAND_LOGOS[brand.logo] : undefined;

  if (path) {
    return (
      <svg
        key={key}
        viewBox="0 0 24 24"
        fill="currentColor"
        role="img"
        aria-label={brand.name}
        className="h-10 w-10 sm:h-16 sm:w-16 shrink-0 transition-colors"
      >
        <path d={path} />
      </svg>
    );
  }

  return (
    <span
      key={key}
      className="text-3xl sm:text-5xl font-serif font-bold leading-[1.35] shrink-0 select-none cursor-default transition-colors"
    >
      {brand.name}
    </span>
  );
}

function AnimatedCounter({ from, to, suffix = "", decimals = 0 }: { from: number, to: number, suffix?: string, decimals?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  
  const spring = useSpring(from, { bounce: 0, duration: 2500 });
  
  useEffect(() => {
    if (inView) {
      spring.set(to);
    }
  }, [inView, spring, to]);

  const display = useTransform(spring, (current) => {
    return current.toFixed(decimals) + suffix;
  });

  return <motion.span ref={ref}>{display}</motion.span>;
}

interface LiveWebsiteProps {
  theme: "dark" | "light";
  toggleTheme: () => void;
}

export default function LiveWebsite({ theme, toggleTheme }: LiveWebsiteProps) {
  const [selectedCase, setSelectedCase] = useState<CaseStudy | null>(null);
  const [pricingMode, setPricingMode] = useState<"consult" | "content" | "management">("consult");
  const [selectedPlanDetail, setSelectedPlanDetail] = useState<string>("clarity-call");
  const [isLoading, setIsLoading] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // Initial loading animation
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1800);
    
    // Scroll listener for header
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Card ids that differ from the booking form's option values get mapped here;
  // consultation-call ids already match the form options directly.
  const PLAN_FORM_VALUES: Record<string, string> = {
    "content-10": "content-support",
    "content-20": "content-support",
    "content-30": "content-support",
    "starter": "starter-mgmt",
    "growth": "growth-mgmt",
    "scale": "scale-mgmt"
  };

  const handleBookPlan = (planId: string) => {
    setSelectedPlanDetail(PLAN_FORM_VALUES[planId] ?? planId);
    scrollToSection("booking-form");
  };

  // Row 1: brands we have a real logo glyph for. Row 2: brands rendered as wordmarks.
  const BRANDS_ROW_1: Brand[] = [
    { name: "Amazon", logo: "amazon" }, { name: "Google", logo: "google" },
    { name: "Meta", logo: "meta" }, { name: "YouTube", logo: "youtube" },
    { name: "Canva", logo: "canva" }, { name: "Visa", logo: "visa" },
    { name: "Adobe", logo: "adobe" }, { name: "Airtel", logo: "airtel" },
    { name: "Flipkart", logo: "flipkart" }, { name: "Swiggy", logo: "swiggy" },
    { name: "Tata", logo: "tata" }, { name: "ChatGPT", logo: "openai" },
    { name: "Netflix", logo: "netflix" }, { name: "Prime Video", logo: "primevideo" }
  ];
  const BRANDS_ROW_2: Brand[] = [
    { name: "Head & Shoulders" }, { name: "Garnier" }, { name: "Cadbury" },
    { name: "Kwality Wall's" }, { name: "Philips" }, { name: "Nykaa" },
    { name: "Petronas" }, { name: "Free Fire" }, { name: "Jio Hotstar" },
    { name: "BGMI" }, { name: "Pant Project" }
  ];

  return (
    <>
      <AnimatePresence>
        {isLoading && (
          <motion.div 
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className={`fixed inset-0 z-[100] flex flex-col items-center justify-center overflow-hidden ${theme === 'dark' ? 'bg-slate-900' : 'bg-white'}`}
          >
            {/* Background animated pulses */}
            <motion.div 
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: [1, 2, 2.5], opacity: [0.5, 0.2, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeOut" }}
              className="absolute w-40 h-40 bg-[#E61D24]/20 rounded-full blur-2xl pointer-events-none"
            />
            
            <motion.div
              className="relative flex items-center justify-center mb-12"
            >
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
                className="absolute flex items-center justify-center"
              >
                <div className={`w-40 h-40 border-[1.5px] border-dashed rounded-full ${theme === 'dark' ? 'border-slate-700/60' : 'border-gray-300'}`}></div>
              </motion.div>
              
              <motion.div 
                animate={{ rotate: -360 }}
                transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
                className="absolute flex items-center justify-center"
              >
                <div className="w-52 h-52 border-[1px] border-dashed border-[#E61D24]/40 rounded-full"></div>
              </motion.div>

              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: [0.8, 1.05, 1], opacity: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="relative z-10"
              >
                <img 
                  src={theme === 'dark' ? "/logo-red.png" : "/logo.png"} 
                  alt="Aapka Works Logo" 
                  className={`h-24 sm:h-28 w-auto object-contain transition-all drop-shadow-xl`}
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className={`text-xs font-bold tracking-widest uppercase font-mono flex items-center gap-2 ${theme === 'dark' ? 'text-slate-400' : 'text-gray-500'}`}
            >
              <span>Loading Experience</span>
              <motion.span
                animate={{ opacity: [0, 1, 0] }}
                transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                className="w-1.5 h-1.5 bg-[#E61D24] rounded-full inline-block"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    <div className={`min-h-screen font-sans relative overflow-x-hidden transition-colors duration-300 ${theme === 'dark' ? 'bg-slate-900 text-white' : 'bg-slate-50 text-gray-900'}`}>
      
      {/* Background Gradients */}
      <div className="absolute top-0 left-0 w-full h-[600px] pointer-events-none opacity-30 transition-opacity duration-300">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[80%] bg-yellow-200/40 rounded-full blur-[100px]" />
        <div className="absolute top-[-5%] right-[-10%] w-[50%] h-[70%] bg-rose-200/50 rounded-full blur-[120px]" />
      </div>

      <header className={`fixed top-0 w-full z-40 transition-all duration-300 ${
        scrolled 
          ? `py-2 sm:py-3 shadow-sm backdrop-blur-md border-b ${
              theme === 'dark' ? 'bg-slate-900/95 border-slate-800' : 'bg-white/95 border-gray-200'
            }` 
          : 'bg-transparent py-4 border-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <motion.div whileHover={{ scale: 1.05 }} className="cursor-pointer" onClick={() => window.scrollTo(0, 0)}>
              <img 
                src={theme === 'dark' ? "/logo-red.png" : "/logo.png"} 
                alt="Aapka Works Logo" 
                className={`transition-all drop-shadow-md ${scrolled ? 'h-[48px] sm:h-[56px]' : 'h-[72px] sm:h-[88px]'}`}
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
            
          <nav className={`hidden md:flex items-center gap-6 text-sm font-medium ${theme === 'dark' ? 'text-slate-300' : 'text-gray-600'}`}>
            <button onClick={() => scrollToSection("about-jags")} className={`transition-colors cursor-pointer ${theme === 'dark' ? 'hover:text-white' : 'hover:text-gray-900'}`}>About</button>
            <button onClick={() => scrollToSection("case-studies")} className={`transition-colors cursor-pointer ${theme === 'dark' ? 'hover:text-white' : 'hover:text-gray-900'}`}>Case Studies</button>
            <button onClick={() => scrollToSection("packages")} className={`transition-colors cursor-pointer ${theme === 'dark' ? 'hover:text-white' : 'hover:text-gray-900'}`}>Pricing</button>
            
            <button 
              onClick={toggleTheme} 
              className={`ml-2 p-2 rounded-full border shadow-sm transition-all cursor-pointer backdrop-blur-md flex items-center justify-center hover:scale-110 active:scale-95 ${theme === 'dark' ? 'bg-slate-800/80 border-slate-700 text-yellow-400 hover:bg-slate-700' : 'bg-white/80 hover:bg-gray-50 border-gray-200 text-gray-500 hover:text-gray-900'}`}
              title="Toggle theme"
            >
              {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          </nav>
          
          <div className="flex items-center gap-3 md:hidden">
            <button 
              onClick={toggleTheme} 
              className={`p-2 rounded-full border shadow-sm transition-all cursor-pointer backdrop-blur-md flex items-center justify-center ${theme === 'dark' ? 'bg-slate-800/80 border-slate-700 text-yellow-400 hover:bg-slate-700' : 'bg-white/80 hover:bg-gray-50 border-gray-200 text-gray-500 hover:text-gray-900'}`}
              title="Toggle theme"
            >
              {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            <button 
              onClick={() => setMobileMenuOpen(true)} 
              className={`p-2 rounded-md transition-colors cursor-pointer ${theme === 'dark' ? 'hover:bg-slate-800 text-white' : 'hover:bg-gray-100 text-gray-900'}`}
              aria-label="Open menu"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/60 z-[100] md:hidden backdrop-blur-sm"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", bounce: 0, duration: 0.4 }}
              className={`fixed inset-y-0 right-0 w-[280px] z-[110] shadow-2xl md:hidden flex flex-col ${theme === 'dark' ? 'bg-slate-900 border-l border-slate-800 text-white' : 'bg-white border-l border-gray-200 text-gray-900'}`}
            >
              <div className="p-6 flex items-center justify-between border-b border-gray-200/20">
                <img 
                  src={theme === 'dark' ? "/logo-red.png" : "/logo.png"} 
                  alt="Aapka Works Logo" 
                  className="h-10 w-auto object-contain"
                />
                <button 
                  onClick={() => setMobileMenuOpen(false)}
                  className={`p-2 rounded-full transition-colors cursor-pointer ${theme === 'dark' ? 'hover:bg-slate-800' : 'hover:bg-gray-100'}`}
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="flex flex-col p-6 gap-6 text-lg font-semibold">
                <button 
                  onClick={() => { setMobileMenuOpen(false); scrollToSection("about-jags"); }} 
                  className="flex items-center text-left hover:text-[#E61D24] transition-colors"
                >
                  About Us
                </button>
                <button 
                  onClick={() => { setMobileMenuOpen(false); scrollToSection("case-studies"); }} 
                  className="flex items-center text-left hover:text-[#E61D24] transition-colors"
                >
                  Case Studies
                </button>
                <button 
                  onClick={() => { setMobileMenuOpen(false); scrollToSection("packages"); }} 
                  className="flex items-center text-left hover:text-[#E61D24] transition-colors"
                >
                  Pricing & Services
                </button>
                <div className={`mt-8 pt-8 border-t ${theme === 'dark' ? 'border-slate-800' : 'border-gray-200'}`}>
                  <button 
                    onClick={() => { setMobileMenuOpen(false); scrollToSection("booking-form"); }}
                    className="w-full bg-[#E61D24] hover:bg-rose-700 text-white font-bold py-3 px-6 rounded-full transition-all cursor-pointer text-sm uppercase tracking-wide flex justify-center items-center gap-2"
                  >
                    <span>Book A Call</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>




      {/* Hero Banner Section */}
      <motion.section 
        initial={{ opacity: 0, y: 30 }}
        animate={!isLoading ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
        className="relative pt-44 pb-20 px-4 z-10 overflow-hidden"
      >
        
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

        {/* Floating background graphics */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden h-full w-full">
          <motion.div
            animate={{ 
              y: [0, -30, 0],
              rotate: [0, 10, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            className="absolute top-20 left-[15%] w-32 h-32 bg-[#E61D24]/10 rounded-full blur-2xl z-0"
          />
          <motion.div
            animate={{ 
              y: [0, 40, 0],
              rotate: [0, -15, 0],
              scale: [1, 1.2, 1]
            }}
            transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
            className="absolute bottom-20 right-[15%] w-48 h-48 bg-yellow-400/10 rounded-full blur-2xl z-0"
          />
        </div>

        <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
          <div className="space-y-4">
            <h2 className="text-3xl sm:text-4xl font-serif text-gray-400 tracking-tight max-w-3xl mx-auto italic">
              "Aapka Kaam Hum Dekh Lenge"
            </h2>
            <h2 className={`text-5xl sm:text-7xl font-serif tracking-tight leading-[1.05] max-w-3xl mx-auto ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              Helping Creators &{" "}<br className="hidden sm:inline"/>
              Brands Build Content{" "}<br className="hidden sm:inline"/>
              That{" "}
              <span className="text-[#E61D24] relative inline-block">
                <motion.span 
                  initial={{ opacity: 0, x: -20 }}
                  animate={!isLoading ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  className="relative z-10"
                >
                  Actually Works.
                </motion.span>
                {/* Hand-drawn yellow underline */}
                <motion.svg 
                  initial={{ pathLength: 0 }}
                  animate={!isLoading ? { pathLength: 1 } : {}}
                  transition={{ delay: 1, duration: 0.8 }}
                  className="absolute w-[105%] h-5 -bottom-2 -left-2 text-yellow-400 z-0" 
                  viewBox="0 0 300 20" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M5 15Q150 -5 295 10" stroke="currentColor" strokeWidth="6" strokeLinecap="round"/>
                </motion.svg>
              </span>
            </h2>
          </div>

          <p className={`text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mt-6 ${theme === 'dark' ? 'text-slate-400' : 'text-gray-600'}`}>
            From content strategy to full social media management, we help creators, founders, and businesses grow through content that gets attention and drives results.
          </p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={!isLoading ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.7 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
          >
            <button 
              onClick={() => scrollToSection("booking-form")}
              className="w-full sm:w-auto bg-[#E61D24] hover:bg-rose-700 text-white font-bold text-sm py-4 px-8 rounded-full shadow-lg shadow-rose-600/20 transition-all flex items-center justify-center gap-2 cursor-pointer hover:scale-105 active:scale-95 uppercase tracking-wide"
            >
              <span>Book A Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button 
              onClick={() => scrollToSection("case-studies")}
              className={`w-full sm:w-auto font-bold text-sm py-4 px-8 rounded-full border shadow-sm transition-all cursor-pointer hover:shadow-md uppercase tracking-wide ${theme === 'dark' ? 'bg-slate-800 border-slate-700 text-white hover:bg-slate-700' : 'bg-white hover:bg-gray-50 text-gray-800 border-gray-200'}`}
            >
              View Case Studies
            </button>
          </motion.div>

          <div className="pt-10 flex flex-col items-center justify-center gap-3">
            <div className={`text-sm sm:text-base font-bold tracking-tight ${theme === 'dark' ? 'text-slate-200' : 'text-gray-700'}`}>
              Trusted by <strong className={`font-extrabold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>100+</strong> top creators &amp; brands
            </div>
          </div>
        </div>
      </motion.section>

      {/* Stats Section */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="relative z-10 pb-16 px-4"
      >
        <div className="max-w-4xl mx-auto bg-white rounded-[2rem] p-8 shadow-sm border border-gray-100 flex flex-col sm:flex-row items-center justify-around gap-8 text-center sm:text-left text-gray-900 mt-8">
          <div className="text-center">
            <div className="text-4xl sm:text-5xl font-serif">
              <AnimatedCounter from={0} to={2.5} suffix="B+" decimals={1} />
            </div>
            <div className="text-xs font-medium text-gray-400 mt-2 tracking-wide">Views Generated</div>
          </div>
          <div className="hidden sm:block w-px h-16 bg-gray-100"></div>
          <div className="text-center">
            <div className="text-4xl sm:text-5xl font-serif">
              <AnimatedCounter from={0} to={100} suffix="+" decimals={0} />
            </div>
            <div className="text-xs font-medium text-gray-400 mt-2 tracking-wide">Brand Collaborations</div>
          </div>
          <div className="hidden sm:block w-px h-16 bg-gray-100"></div>
          <div className="text-center">
            <div className="text-4xl sm:text-5xl font-serif">
              <AnimatedCounter from={0} to={10} suffix="+" decimals={0} />
            </div>
            <div className="text-xs font-medium text-gray-400 mt-2 tracking-wide">Years Experience</div>
          </div>
        </div>
      </motion.section>

      {/* Two Sliders for Brands */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="py-12 overflow-hidden relative space-y-6"
      >
        <div className={`absolute inset-y-0 left-0 w-16 sm:w-32 z-10 pointer-events-none bg-gradient-to-r ${theme === 'dark' ? 'from-slate-900' : 'from-slate-50'} to-transparent`}></div>
        <div className={`absolute inset-y-0 right-0 w-16 sm:w-32 z-10 pointer-events-none bg-gradient-to-l ${theme === 'dark' ? 'from-slate-900' : 'from-slate-50'} to-transparent`}></div>
        
        <span className={`text-[10px] font-mono uppercase tracking-widest block font-bold text-center ${theme === 'dark' ? 'text-slate-500' : 'text-gray-400'}`}>Trusted by Elite Partners & Creators</span>
        
        {/* Row 1 - Left to Right */}
        <div className="flex py-2 overflow-hidden">
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 130,
              ease: "linear",
              repeat: Infinity,
            }}
            className={`flex w-max ${theme === 'dark' ? 'text-slate-700 hover:text-slate-500' : 'text-gray-300 hover:text-gray-400'}`}
          >
            {[0, 1].map((group) => (
              <div key={group} aria-hidden={group === 1} className="flex items-center gap-x-16 pr-16 shrink-0">
                {BRANDS_ROW_1.map((brand, index) => renderBrandMark(brand, index))}
              </div>
            ))}
          </motion.div>
        </div>

        {/* Row 2 - Right to Left */}
        <div className="flex py-2 overflow-hidden">
          <motion.div
            animate={{ x: ["-50%", "0%"] }}
            transition={{
              duration: 160,
              ease: "linear",
              repeat: Infinity,
            }}
            className={`flex w-max ${theme === 'dark' ? 'text-slate-800 hover:text-slate-600' : 'text-gray-200 hover:text-gray-300'}`}
          >
            {[0, 1].map((group) => (
              <div key={group} aria-hidden={group === 1} className="flex items-center gap-x-16 pr-16 shrink-0">
                {BRANDS_ROW_2.map((brand, index) => renderBrandMark(brand, index))}
              </div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* About Jagjyot Singh Block */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6 }}
        id="about-jags" 
        className="py-16 px-4 max-w-5xl mx-auto"
      >
        <div className="text-center md:text-left mb-10">
          <span className="text-[10px] font-mono text-rose-500 font-bold tracking-widest uppercase">FOUNDER</span>
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight mt-1">Jagjyot Singh</h3>
          <p className="text-gray-500 text-xs sm:text-sm mt-1">Let's strip away dry agencies biography structures—here are the real metrics.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Detailed narrative bio card */}
          <div className="md:col-span-3 bg-white border border-gray-100 rounded-3xl p-6 sm:p-8 space-y-6 relative overflow-hidden shadow-sm">
            
            <p className="text-sm font-bold text-gray-900 italic leading-relaxed">
              "Hi, I'm Jagjyot Singh, better known as Aapka Jags. I'm the founder of Aapka Jags, Aapka Works, and Hapka by Aapka Jags."
            </p>

            <p className="text-xs text-gray-600 leading-relaxed font-sans">
              Over the last 10 years, I've worked across content creation, social media, branding, and digital storytelling. 
              I've collaborated with 100+ brands including Amazon, Google, Meta, YouTube, Canva, ChatGPT and many more. 
              Across social media platforms, my content has generated over 2.5 Billion views.
            </p>

            <p className="text-xs text-gray-600 leading-relaxed font-sans">
              I've worked with creators, startups, personal brands, restaurants, media companies, and growing businesses to build content strategies that actually deliver results. 
              Whether it's creating viral content, building a community, launching a new brand, or scaling a creator business, my goal has always remained the same: Help people tell better stories and grow faster online.
            </p>
          </div>

          {/* Image div instead of stats and video block */}
          <div className="md:col-span-2 flex flex-col justify-between h-full">
            <div className="bg-gray-100 border border-gray-200 shadow-sm rounded-3xl overflow-hidden h-full min-h-[300px] relative group">
              <img 
                src="/jagjyot-about.jpeg"
                alt="Jagjyot Singh" 
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </div>
      </motion.section>

      {/* Case Studies Template Feed Grid */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6 }}
        id="case-studies" 
        className="py-16 bg-white border-t border-gray-100 px-4"
      >
        <div className="max-w-5xl mx-auto space-y-10">
          <div className="text-center">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight mt-1">Verified Social Proof</h3>
            <p className="text-gray-500 text-xs sm:text-sm mt-1 max-w-md mx-auto">Social verification of campaigns that triggered commercial growth. Click open the detailed layouts.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CASE_STUDIES.map((item) => (
              <div 
                key={item.id}
                onClick={() => setSelectedCase(item)}
                className="bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:border-rose-200 transition-all duration-300 rounded-2xl p-5 cursor-pointer relative overflow-hidden group flex flex-col justify-between hover:-translate-y-2"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-2xl">{item.image}</span>
                    <span className="text-[10px] font-mono text-rose-600 bg-rose-50 px-2.5 py-0.5 rounded border border-rose-100">
                      View details
                    </span>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-gray-900 group-hover:text-rose-600 transition-colors">{item.title}</h4>
                    <p className="text-[11px] text-gray-500 font-sans mt-1.5 leading-relaxed">
                      {item.subtitle}
                    </p>
                  </div>
                </div>
                
                <div className="mt-4 pt-3.5 border-t border-gray-100 text-xs font-mono text-gray-500 flex items-center justify-between">
                  <span>OUTCOME:</span>
                  <span className="text-rose-600 font-semibold">{item.metrics}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Services, Packages & Pricing Selection Matrix */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6 }}
        id="packages" 
        className="py-16 px-4 max-w-6xl mx-auto space-y-10"
      >
        <div className="text-center">
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight mt-1">Flexible Retainers</h3>
          <p className="text-gray-500 text-xs sm:text-sm mt-1">Select consultation calls, content support packs, or full multichannel media management.</p>
        </div>

        {/* Pricing Selector Buttons */}
        <div className="flex justify-center p-1 bg-gray-100 border border-gray-200 rounded-xl max-w-2xl mx-auto">
          {([
            { mode: "consult", label: "Consultation Call" },
            { mode: "content", label: "Content Support" },
            { mode: "management", label: "Full Social Media Management" }
          ] as const).map(({ mode, label }) => (
            <button
              key={mode}
              onClick={() => setPricingMode(mode)}
              className={`w-1/3 text-center px-2 py-2 text-xs font-bold leading-tight rounded-lg transition-all select-none cursor-pointer ${
                pricingMode === mode
                  ? "bg-white text-gray-900 shadow-sm"
                  : "text-gray-500 hover:text-gray-900"
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Selected Catalog Grids */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2 lg:grid-cols-3 lg:max-w-4xl lg:mx-auto">
          {(pricingMode === "consult"
            ? CONSULTATION_PLANS
            : pricingMode === "content"
              ? CONTENT_SUPPORT_PLANS
              : MANAGEMENT_PLANS
          ).map((plan) => (
            <div 
              key={plan.id}
              className={`bg-white border rounded-2xl p-6 space-y-5 relative flex flex-col justify-between transition-transform duration-300 ${
                plan.bestVal 
                  ? "border-rose-500 bg-rose-50/20 shadow-xl shadow-rose-900/10 lg:-translate-y-4 lg:scale-105 z-10" 
                  : "border-gray-100 shadow-sm"
              }`}
            >
              {plan.bestVal && (
                <span className="absolute top-4 right-4 bg-rose-500 text-white text-[9px] font-mono px-2 py-0.5 rounded-full uppercase tracking-wider font-bold shadow-sm">
                  BEST VAL
                </span>
              )}

              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-bold text-gray-900 uppercase tracking-tight">{plan.name}</h4>
                  <div className="flex items-baseline gap-1 mt-2">
                    <span className="text-xl sm:text-2xl font-extrabold text-gray-900">{plan.price}</span>
                    {plan.period && <span className="text-[10px] text-gray-500 font-mono">/{plan.period}</span>}
                  </div>
                </div>

                <p className="text-xs text-gray-600 font-sans leading-normal">
                  {plan.details}
                </p>

                <div className="border-t border-gray-100 pt-4 space-y-2.5">
                  <span className="text-[9px] font-mono text-gray-400 uppercase tracking-widest block font-bold">Plan Inclusions:</span>
                  {plan.features.map((feat, i) => (
                    <div key={i} className="flex gap-2 text-xs text-gray-600 font-sans leading-normal">
                      <Check className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                  {plan.excludes && (
                    <div className="flex gap-2 text-xs text-gray-400 font-sans leading-normal pt-1">
                      <X className="w-4 h-4 shrink-0 mt-0.5" />
                      <span>{plan.excludes}</span>
                    </div>
                  )}
                </div>
              </div>

              <button
                onClick={() => handleBookPlan(plan.id)}
                className={`w-full py-2.5 mt-6 rounded-xl text-xs font-bold select-none transition-all text-center flex items-center justify-center gap-1.5 cursor-pointer ${
                  plan.bestVal
                    ? "bg-[#E61D24] hover:bg-rose-600 text-white shadow-sm border border-[#E61D24]"
                    : "bg-white hover:bg-gray-50 text-gray-900 border border-gray-200"
                }`}
              >
                <span>Choose this Plan</span>
                <CheckCircle className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Testimonials - Coming Soon Panel */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6 }}
        className="py-16 px-4"
      >
        <div className="max-w-4xl mx-auto bg-slate-900 text-white rounded-[2rem] p-10 sm:p-16 text-center space-y-6 relative overflow-hidden shadow-2xl border border-slate-800">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-rose-500/10 to-transparent pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-rose-500/30 blur-[100px] rounded-full pointer-events-none" />
          <div className="absolute -top-24 -right-24 w-72 h-72 bg-amber-500/20 blur-[100px] rounded-full pointer-events-none" />
          
          <div className="relative z-10 flex flex-col items-center">
            <h4 className="text-2xl sm:text-4xl font-bold text-white tracking-tight mb-4">Success Stories</h4>
            <p className="text-slate-300 text-sm sm:text-base max-w-lg mx-auto leading-relaxed">
              We are currently aggregating localized video reviews and written feedback from our Q2 cohort. Content board modules will activate in our next system rollout!
            </p>
          </div>
        </div>
      </motion.section>

      {/* Interactive Booking Intake form */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6 }}
        id="booking-form" 
        className="py-16 px-4"
      >
        <div className="max-w-5xl mx-auto">
          <ContactForm preselectedPackage={selectedPlanDetail} />
        </div>
      </motion.section>

      {/* Simplified Contact footer details */}
      <footer className={`border-t py-12 px-4 text-center text-xs space-y-8 ${theme === 'dark' ? 'bg-slate-900 border-slate-800' : 'bg-white border-gray-200'}`}>
        <div className={`max-w-5xl mx-auto flex flex-col items-center gap-6 ${theme === 'dark' ? 'text-slate-400' : 'text-gray-500'}`}>
          <div className="space-y-4 text-center flex flex-col items-center group cursor-pointer" onClick={() => window.scrollTo(0, 0)}>
            <img 
              src={theme === 'dark' ? "/logo-red.png" : "/logo.png"} 
              alt="Aapka Works Logo" 
              className={`h-[64px] w-auto object-contain transition-all duration-300 opacity-70 group-hover:opacity-100 drop-shadow-sm ${theme === 'dark' ? '' : 'grayscale-[0.8] group-hover:grayscale-0'}`}
              referrerPolicy="no-referrer"
            />
            <p className="text-sm sm:text-base font-medium">Aapka Kaam Hum Dekh Lenge.</p>
          </div>
          
          <div className={`flex flex-col sm:flex-row items-center gap-6 sm:gap-12 pt-6 border-t ${theme === 'dark' ? 'border-slate-800' : 'border-gray-100'}`}>
            <a href="mailto:Aapkaworks@gmail.com" className={`flex items-center gap-2 transition-colors ${theme === 'dark' ? 'hover:text-white' : 'hover:text-gray-900'}`}>
              <Mail className="w-4 h-4" />
              <span className="font-mono">Aapkaworks@gmail.com</span>
            </a>
            <a href="tel:+918779437961" className={`flex items-center gap-2 transition-colors ${theme === 'dark' ? 'hover:text-white' : 'hover:text-gray-900'}`}>
              <Phone className="w-4 h-4" />
              <span className="font-mono">+91 8779437961</span>
            </a>
            <a href="https://instagram.com/aapkaworks" target="_blank" rel="noreferrer" className={`flex items-center gap-2 transition-colors ${theme === 'dark' ? 'hover:text-white' : 'hover:text-gray-900'}`}>
              <Instagram className="w-4 h-4" />
              <span className="font-mono">@aapkaworks</span>
            </a>
          </div>
          
          <div className="text-[10px] uppercase tracking-widest font-mono opacity-50 mt-8">
            &copy; {new Date().getFullYear()} Aapka Works. All rights reserved.
          </div>
        </div>
      </footer>

      {/* CaseStudyDetail overlay */}
      <AnimatePresence>
        {selectedCase && (
          <CaseStudyDetail 
            item={selectedCase} 
            onClose={() => setSelectedCase(null)} 
          />
        )}
      </AnimatePresence>

      {/* Sticky Floating CTA Button */}
      <motion.button
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
        onClick={() => scrollToSection("booking-form")}
        className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-50 bg-[#E61D24] hover:bg-rose-700 text-white font-bold text-xs sm:text-sm py-3 sm:py-4 px-6 sm:px-8 rounded-full shadow-lg shadow-rose-600/30 transition-all flex items-center justify-center gap-2 cursor-pointer hover:scale-105 active:scale-95"
      >
        <span>Book A Call</span>
        <MessageSquare className="w-4 h-4 hidden sm:block" />
      </motion.button>
    </div>
    </>
  );
}

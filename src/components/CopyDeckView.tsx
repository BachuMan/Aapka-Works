import React, { useState } from "react";
import { Clipboard, Check, FileText } from "lucide-react";

interface CopySection {
  title: string;
  id: string;
  tagline: string;
  items: { label: string; text: string; note?: string }[];
}

export default function CopyDeckView() {
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [activeSection, setActiveSection] = useState<number>(0);

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const copyDeck: CopySection[] = [
    {
      title: "Hero & Homepage Landing",
      id: "hero",
      tagline: "First-contact headlines and fast credibility validation",
      items: [
        {
          label: "Primary Hero Headline",
          text: "Helping Creators & Brands Build Content That Actually Works.",
          note: "Commands focus using standard sans-serif layout. Explicit promise targeting the biggest user pain: 'Content that actually works'."
        },
        {
          label: "Hero Subheading Copy",
          text: "From content strategy to full social media management, we help creators, founders, and businesses grow through content that gets attention and drives results.",
          note: "Directly categorizes the service structure while reassuring startups, restaurants, agencies and creators."
        },
        {
          label: "Primary Call to Action (CTA)",
          text: "Book a Consultation",
          note: "Low-tension conversion gateway. Hooks client immediately to a direct conversation."
        },
        {
          label: "Secondary Call to Action (CTA)",
          text: "View Case Studies",
          note: "Drives traffic to social proof row, converting skepticism into validation."
        },
        {
          label: "Tagline Slogan (Fun Accent)",
          text: "Aapka Kaam Hum Dekh Lenge.",
          note: "10% Fun accent. Jags' proprietary localized promise ('We will handle your work')."
        }
      ]
    },
    {
      title: "About Jagjyot Singh",
      id: "about",
      tagline: "Conversational biography balancing authority with high relatability",
      items: [
        {
          label: "Section Tagline Header",
          text: "Jagjyot Singh | Founder • Creator • Strategist | Better known as Aapka Jags.",
          note: "Links the personal brand representing Jags' viral channels directly to corporate strategy services."
        },
        {
          label: "Bio Body Paragraph 1",
          text: "Hi, I'm Jagjyot Singh, better known as Aapka Jags. I'm the founder of Aapka Jags, Aapka Works, and Hapka by Aapka Jags. Over the last 10 years, I've worked across content creation, social media, branding, and digital storytelling.",
          note: "Addresses 10+ years of diverse industry storytelling experience."
        },
        {
          label: "Bio Body Paragraph 2",
          text: "I've collaborated with 100+ brands including Amazon, Google, Meta, YouTube, Canva, ChatGPT and many more. Across social media platforms, my content has generated over 2.5 Billion views.",
          note: "Injects jaw-dropping view metrics (2.5B+ views) early in the journey so leads validate credibility."
        },
        {
          label: "Bio Body Paragraph 3",
          text: "I've worked with creators, startups, personal brands, restaurants, media companies, and growing businesses to build content strategies that actually deliver results. Whether it's creating viral content, building a community, launching a new brand, or scaling a creator business, my goal has always remained the same: Help people tell better stories and grow faster online.",
          note: "Highlights target niches, positioning Jags as the modern growth generalist."
        }
      ]
    },
    {
      title: "Pricing & Offer Deliverables",
      id: "pricing",
      tagline: "Package transparency detailing high-yielding retainer services",
      items: [
        {
          label: "Consultation Call Pitch",
          text: "Our consultation includes Profile Audit, Content Direction, Growth Roadmap, Platform Analysis, and interactive live Q&A session.",
          note: "Establishes huge, clear value to justify the ₹3,999 – ₹9,999 investment structure."
        },
        {
          label: "Content Support Tier",
          text: "Includes concepts, script drafting, visual/audio directions, trends overlays, and unique IP Creation templates.",
          note: "Targets creators who want write-ups & strategy but maintain manual shooting controls."
        },
        {
          label: "Full Social Management Scale Retainer",
          text: "Starter includes 8 Reels, 2 Carousels, 10 Stories. Growth includes 15 Reels, 4 Carousels, 20 Stories plus shoot preparation. Scale includes 24 Reels, 8 Carousels, 30 Stories with complete hands-off omnipresent publishing, reviews & growth consulting.",
          note: "Provides explicit content allocations and scale structures to allow quick customer comparison."
        }
      ]
    },
    {
      title: "Social Proof & Contact Goals",
      id: "social",
      tagline: "Frictionless feedback hooks and high-trust validations",
      items: [
        {
          label: "Social Proof Grid Subtitle",
          text: "This should look like tasteful credibility, not a crowded logo wall.",
          note: "Direct design guidance aligning logos into clean grayscale representations."
        },
        {
          label: "Consultation Intake Tagline",
          text: "Let's work together to tell better stories and scale your digital influence. Schedule your call in 30 seconds.",
          note: "Removes final hurdles in booking path by validating quick time allocation."
        }
      ]
    }
  ];

  return (
    <div className="space-y-6">
      <div className="border-b border-neutral-800 pb-5">
        <h3 className="text-2xl font-bold font-sans text-white tracking-tight">Full Copywriting Deck</h3>
        <p className="text-neutral-400 text-sm mt-1">
          High-converting copy blueprints targeted to capture maximum consultation bookings.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Navigation Sidebar */}
        <div className="md:col-span-1 flex flex-col gap-2">
          {copyDeck.map((sec, idx) => (
            <button
              key={sec.id}
              onClick={() => setActiveSection(idx)}
              className={`text-left p-3.5 rounded-xl border text-xs font-medium transition-all flex items-center gap-2.5 select-none ${
                activeSection === idx
                  ? "bg-rose-500/10 border-rose-500/50 text-rose-400"
                  : "bg-neutral-950 border-neutral-800/80 text-neutral-400 hover:text-neutral-200 hover:bg-neutral-900/50"
              }`}
            >
              <FileText className="w-3.5 h-3.5" />
              <span>{sec.title}</span>
            </button>
          ))}
        </div>

        {/* Content Box */}
        <div className="md:col-span-3 space-y-6">
          <div className="bg-neutral-900 p-5 rounded-xl border border-neutral-800">
            <span className="text-[10px] font-mono text-rose-400">CATEGORY COPY DECK //</span>
            <h4 className="text-base font-bold text-white mt-1">{copyDeck[activeSection].title}</h4>
            <p className="text-xs text-neutral-400 mt-1">{copyDeck[activeSection].tagline}</p>
          </div>

          <div className="space-y-4">
            {copyDeck[activeSection].items.map((item, iIdx) => {
              const uniqueId = `${copyDeck[activeSection].id}-${iIdx}`;
              const isCopied = copiedId === uniqueId;

              return (
                <div key={iIdx} className="bg-[#18181b] border border-neutral-800 rounded-xl p-5 space-y-3 relative overflow-hidden">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono text-neutral-400 font-semibold bg-neutral-900 border border-neutral-800 px-2 py-0.5 rounded">
                      {item.label}
                    </span>
                    <button
                      onClick={() => copyToClipboard(item.text, uniqueId)}
                      className={`text-neutral-500 hover:text-white p-1 rounded transition-colors flex items-center gap-1 text-[11px] font-mono cursor-pointer absolute top-4 right-4 ${
                        isCopied ? "text-emerald-400 hover:text-emerald-400 bg-emerald-950/20 px-2 border border-emerald-800/20" : ""
                      }`}
                    >
                      {isCopied ? (
                        <>
                          <Check className="w-3.5 h-3.5" />
                          <span>Copied!</span>
                        </>
                      ) : (
                        <>
                          <Clipboard className="w-3.5 h-3.5" />
                          <span>Copy</span>
                        </>
                      )}
                    </button>
                  </div>

                  <p className="text-sm text-white font-sans pr-16 font-medium leading-relaxed">
                    "{item.text}"
                  </p>

                  {item.note && (
                    <div className="pt-2.5 border-t border-neutral-900 text-xs text-neutral-400 leading-relaxed font-sans flex items-start gap-1.5">
                      <span className="text-rose-500 font-mono text-[10px] font-bold">STRATEGY NOTE/</span>
                      <span>{item.note}</span>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

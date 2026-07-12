export interface CaseStudy {
  id: string;
  title: string;
  subtitle: string;
  tagline: string;
  category: string;
  metrics: string;
  image: string;
  color: string;
  challenge: string;
  strategy: string;
  execution: string[];
  results: string[];
  collaboration?: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  price: string;
  period?: string;
  features: string[];
  details?: string;
  bestVal?: boolean;
}

export interface SiteNode {
  name: string;
  path: string;
  description: string;
  cta: string;
  children?: SiteNode[];
}

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: "swiggy",
    title: "Swiggy",
    subtitle: "Mimicry campaign that gained attention and appeared across news platforms.",
    tagline: "Featured on leading national news platforms",
    category: "Viral Marketing & PR",
    metrics: "Mainstream News Features",
    image: "🍔",
    color: "from-amber-500 to-rose-600",
    challenge: "Traditional ad campaigns were faces with banner blindness. Swiggy needed an organic, highly entertaining storytelling hook that commanded attention in busy feeds and triggered word-of-mouth coverage.",
    strategy: "Leveraged organic mimicry and creator Jags' signature observational storytelling. Crafted highly contextual scenarios that humanized the Swiggy user experience, forcing audience engagement and shareability.",
    execution: [
      "Designed humor-centric script hooks tailored to common user habits.",
      "Engineered hyper-relatable delivery that mirrored real-world customer reactions.",
      "Strategized PR-ready angles that allowed news publications to easily pick up the story."
    ],
    results: [
      "Featured across multiple major national news platforms (news coverage validation).",
      "Massive organic amplification without incremental performance ad-spend.",
      "Significant gains in direct brand affinity among key Gen-Z and millennial cohorts."
    ]
  },
  {
    id: "canva",
    title: "Canva",
    subtitle: "Creator-led campaign with 200M+ views generated.",
    tagline: "200M+ Views Generated",
    category: "Creator-Led Growth",
    metrics: "200M+ Views",
    image: "🎨",
    color: "from-blue-500 to-indigo-600",
    challenge: "Canva needed to showcase its powerful features to creators and businesses in an intuitive, organic way—shifting the perception from a basic tool to a powerhouse creator studio.",
    strategy: "Moved away from prescriptive product demos. Instead, executed a high-volume, storytelling-first campaign that embedded Canva tools into viral video production workflows.",
    execution: [
      "Conceptualized 'Behind-The-Scenes' speed run design tricks as content pieces.",
      "Maintained Jags' energetic, slightly funky storytelling tone to bypass standard promotional filters.",
      "Optimized native-feel reels and short-form videos with immediate educational value hooks."
    ],
    results: [
      "Generated an astounding 200M+ combined views across campaigns.",
      "Demonstrated real-use product integration, creating direct software engagement loops.",
      "Substantially elevated Canva's brand authority within the modern creator economy network."
    ]
  },
  {
    id: "vanity",
    title: "Vanity",
    subtitle: "Scaled the platform from approx. 1.25L to 4.5L+ followers.",
    tagline: "Scaled 125K to 450K+ Followers",
    category: "Audience Scaling",
    metrics: "3.6x Follower Growth",
    image: "✨",
    color: "from-purple-500 to-pink-600",
    challenge: "Vanity was sits on a plateau of 125,000 followers, struggling to break through algorithmic ceilings and expand its cultural footprint.",
    strategy: "Overhauled the entire content calendar with a strict 70/20/10 structure. Built high-retention video templates, hooks that capitalize on trends, and structured community-driven challenges.",
    execution: [
      "Analyzed historical data to isolate top-performing hook types.",
      "Created highly aesthetic, fast-paced video edits optimized for retention matching.",
      "Introduced recurring organic intellectual properties (IPs) that drove repeat visits."
    ],
    results: [
      "Rapidly scaled the following from 125,000 to over 450,000 loyal followers.",
      "Maintained stellar engagement rates (likes, comments, bookmarks) through rapid scale.",
      "Successfully converted vanity followers into a highly collaborative, interactive hub."
    ]
  },
  {
    id: "banter-tv",
    title: "Banter TV",
    subtitle: "Built major growth within 1.5 years.",
    tagline: "Major exponential growth in 1.5 Years",
    category: "IP & Channel Launch",
    metrics: "18-Month Hyper-Growth",
    image: "📺",
    color: "from-red-500 to-orange-500",
    challenge: "Launching from absolute scratch in a highly saturated digital entertainment market, Banter TV needed to build instant audience loyalty.",
    strategy: "Concocted a unique cultural format combining quick-witted talk-show bits with TikTok-style edits. Treated the audience as insiders, using interactive community inputs.",
    execution: [
      "Created highly shareable meme-aggregators and original short-form debate blocks.",
      "Implemented structured, rapid-fire editing formats that minimized user drop-offs.",
      "Orchestrated cross-collaborations with popular creators to piggyback trust networks."
    ],
    results: [
      "Achieved monumental organic growth within a strict 18-month roadmap.",
      "Established multi-million view average baselines for original serial IPs.",
      "Successfully monetized high-trust viewership through strategic sponsor integrations."
    ]
  },
  {
    id: "hapka",
    title: "Hapka by Aapka Jags",
    subtitle: "Improved visibility, growth and business performance.",
    tagline: "Skyrocketed local visibility & sales",
    category: "Brand Build & Launch",
    metrics: "Direct Sales Velocity Boost",
    image: "🌶️",
    color: "from-emerald-500 to-teal-600",
    challenge: "Hapka by Aapka Jags had to prove that a creator-led brand could bridge the gap from digital content to hard physical success metrics.",
    strategy: "Engineered a content-to-commerce funnel. Leveraged Jags' personal brand trust to transparently tell Hapka's founding history, product selection, and operational stories.",
    execution: [
      "Authored a documentary-style launch sequence that invited fans behind the scenes.",
      "Linked digital QR codes directly to physical touchpoints for multi-media loops.",
      "Cultivated customer appreciation videos that doubled as highly authentic UGC ads."
    ],
    results: [
      "Drastically improved localized physical and digital brand visibility.",
      "Proved direct creator conversion capabilities, surpassing initial retail quotas.",
      "Created an evergreen social feedback loop that acts as constant free social proof."
    ]
  },
  {
    id: "personal-youtube",
    title: "Personal YouTube",
    subtitle: "50K+ subscribers added with approx. 80 videos.",
    tagline: "Added 50K+ Subscribers with 80 Videos",
    category: "Organic Search & SEO",
    metrics: "50,000+ Subs (80 High-Value Videos)",
    image: "📹",
    color: "from-rose-600 to-red-800",
    challenge: "Building a high-quality video library on YouTube requires deep retention optimization, professional scripts, and high-CTR thumbnail psychology.",
    strategy: "Focused strictly on ultra-high-quality, narrative video formats. Avoided low-effort content, optimizing for high watch-time duration on critical topics.",
    execution: [
      "Pioneered an active Hook-Story-Offer scripting schema that matches the user's attention span.",
      "Engineered clean minimalist titles that naturally spike click-through rates.",
      "Polished video sequencing to ensure high viewer-to-subscriber conversion ratios."
    ],
    results: [
      "Added over 50,000 long-form, highly active subscribers across only 80 uploads.",
      "Built a highly monetization-ready community of creators, founders, and startups.",
      "Positioned the channel as an authority piece for creator-economy strategy consulting."
    ]
  }
];

export const CONSULTATION_PLANS: PricingPlan[] = [
  {
    id: "consultation",
    name: "Consultation Call",
    price: "₹3,999 – ₹9,999",
    features: [
      "Profile audit",
      "Content direction",
      "Growth roadmap",
      "Platform analysis",
      "Q&A session"
    ],
    details: "Ideal for founders, creators & businesses needing instant direction and clarity without full monthly retainers.",
    bestVal: false
  },
  {
    id: "content-10",
    name: "10 Ideas",
    price: "₹25,000",
    features: [
      "Concepts",
      "Scripts",
      "IP creation"
    ],
    details: "Concepts, complete script drafts, and Intellectual Property creation templates ready for production.",
    bestVal: false
  },
  {
    id: "content-20",
    name: "20 Ideas",
    price: "₹50,000",
    features: [
      "Concepts",
      "Scripts",
      "IP creation"
    ],
    details: "Double the concepts, complete production blueprints, and two proprietary IP format conceptualizations.",
    bestVal: true
  },
  {
    id: "content-30",
    name: "30 Ideas",
    price: "₹75,000",
    features: [
      "Concepts",
      "Scripts",
      "IP creation"
    ],
    details: "An exhaustive content strategy engine mapped across your entire month. Complete creative protection.",
    bestVal: false
  }
];

export const MANAGEMENT_PLANS: PricingPlan[] = [
  {
    id: "starter",
    name: "Starter",
    price: "₹70,000",
    period: "month",
    features: [
      "6–8 Reels",
      "2–4 Carousels",
      "10–12 Stories",
      "Strategy",
      "Calendar",
      "Scripts",
      "Analysis",
      "Monthly review"
    ],
    details: "Ideal for growing personal brands, startups, and creators building their initial modern digital footprint.",
    bestVal: false
  },
  {
    id: "growth",
    name: "Growth",
    price: "₹1,20,000",
    period: "month",
    features: [
      "15 Reels",
      "5–6 Carousels",
      "20–24 Stories",
      "Strategy",
      "Calendar",
      "Shoot planning",
      "Scripts",
      "Analysis",
      "Monthly review"
    ],
    details: "Our most popular tier. Perfect for established brands looking to dominate video landscapes and convert attention.",
    bestVal: true
  },
  {
    id: "scale",
    name: "Scale",
    price: "₹1,75,000",
    period: "month",
    features: [
      "24 Reels",
      "8–10 Carousels",
      "30–40 Stories",
      "Complete management",
      "Shoots",
      "Analytics",
      "Performance analysis",
      "Growth consulting"
    ],
    details: "The ultimate hands-off social solution. Complete creation, distribution, strategy and omnipresent scaling.",
    bestVal: false
  }
];

export const SITEMAP_DATA: SiteNode = {
  name: "Aapka Works Ecosystem Root (/) ",
  path: "/",
  description: "The primary entry point ensuring instant value, authority, and direct scheduling conversion.",
  cta: "None (Dynamic Selection)",
  children: [
    {
      name: "Homepage Section (Hero + Proof)",
      path: "/#home",
      description: "Commands immediate attention with bold, creator-forward headlines and high-credibility logos.",
      cta: "Book a Consultation / View Case Studies"
    },
    {
      name: "About Section (Better known as Jags)",
      path: "/#about",
      description: "Humanizes the agency. Connects Jagjyot Singh's 10-year track record directly to your business goals.",
      cta: "Read His Journey"
    },
    {
      name: "Case Studies Feed (Trust Architecture)",
      path: "/#case-studies",
      description: "Highly engaging grid showing real results for Canva, Swiggy, and Vanity. Zero fluff proof.",
      cta: "Open Detailed Template"
    },
    {
      name: "Services & Pricing Grid",
      path: "/#pricing",
      description: "Unambiguous package choices with clear pricing structures and clear differences.",
      cta: "Select Your Plan & Book"
    },
    {
      name: "Contact Page & Book Consultation",
      path: "/#contact",
      description: "Frictionless form capturing brand goals, currently backed by friendly, low-friction scheduling.",
      cta: "Book Call Now"
    }
  ]
};

export const SEO_DATA = {
  metaTitle: "Aapka Works | Social Media Growth, Content Strategy & Management by Aapka Jags",
  metaDescription: "We help founders, creators, and modern startups scale through high-retention content strategy, high-converting scripts, and full social media management. Powered by Jagjyot Singh (Aapka Jags) with 2.5B+ views generated.",
  keywords: [
    "social media agency india",
    "content strategy creator economy",
    "social media management startup",
    "personal brand growth hacker",
    "aapka works",
    "aapka jags social strategist",
    "viral video scripting service",
    "reels growth strategy",
    "canva case study social",
    "swiggy mimicry marketing"
  ],
  ogImage: "https://aapkaworks.com/og-image.jpg",
  schemaType: "ProfessionalService",
  schemaData: {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Aapka Works",
    "image": "https://aapkaworks.com/og-image.jpg",
    "logo": "https://aapkaworks.com/logo.png",
    "url": "https://aapkaworks.com",
    "telephone": "+91-0000000000",
    "priceRange": "INR ₹3,999 - ₹1,75,000",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Mumbai",
      "addressRegion": "Maharashtra",
      "addressCountry": "India"
    },
    "founder": {
      "@type": "Person",
      "name": "Jagjyot Singh",
      "additionalName": "Aapka Jags"
    },
    "sameAs": [
      "https://instagram.com/aapkaworks",
      "https://youtube.com/@aapkajags"
    ]
  }
};

import {
  StatItem,
  SkillItem,
  ServiceItem,
  CaseStudyItem,
  ProcessStep,
  TestimonialItem,
  BlogPostItem
} from './types';

// Asset paths for reference in components
export const IMAGES = {
  portrait: '/src/assets/images/mukter_portrait_1779526913212.png',
  dashboard: '/src/assets/images/marketing_dashboard_1779524378795.png'
};

export const HERO_DATA = {
  name: 'Md Mukter Ahmed',
  title: 'Digital Marketer & Growth Strategist',
  tagline: 'Helping Brands Grow Through SEO, Paid Ads, Content Marketing & Data-Driven Strategies.',
  subtext: 'Growth isn\'t about guessing. I build high-converting acquisition funnels, laser-targeted paid ad campaigns, and bulletproof search strategies that transform traffic into scalable revenue.',
  socials: {
    linkedin: 'https://linkedin.com/in/#', // User can add their handle
    facebook: 'https://www.facebook.com/mokterahmed.official', // User can add their handle or customized
    whatsapp: 'https://wa.me/8801700000000', // Real-time placeholder that links to WhatsApp
    email: 'mailto:mukter2k.official@gmail.com'
  }
};

export const STATS_DATA: StatItem[] = [
  {
    id: 'projects',
    value: 50,
    suffix: '+',
    label: 'Projects Completed',
    subtext: 'High-impact campaigns'
  },
  {
    id: 'clients',
    value: 20,
    suffix: '+',
    label: 'Happy Clients',
    subtext: 'Global brands & startups'
  },
  {
    id: 'experience',
    value: 5,
    suffix: '+',
    label: 'Years Experience',
    subtext: 'In active growth marketing'
  },
  {
    id: 'adspend',
    value: 100,
    suffix: 'K+',
    label: 'Ad Spend Managed',
    subtext: 'Profitable paid channels'
  }
];

export const ABOUT_DATA = {
  storyHeading: 'Data-Driven Strategist Driving Measurable Marketing ROI',
  storyIntro: 'I am a highly driven Digital Marketer & Growth Strategist with over 5 years of hands-on experience in planning, deploying, and optimizing digital experiences that convert leads into lifetime customers.',
  storyParagraph1: 'My approach is rooted in direct-response marketing principles and strict mathematical optimization. I don\'t optimize of "likes" or "impressions"; I optimize for cash flow, customer acquisition cost (CAC), and customer lifetime value (LTV). Whether it represents scaling Meta (Facebook) Ads, implementing complex multi-touch Google Ads funnels, or establishing compound search authority, I treat every marketing dollar as an investment that must yield a positive return.',
  storyParagraph2: 'Over my career, I have worked across e-commerce, B2B SaaS, and local service niches, building cohesive growth systems. I deeply understand that modern marketing is a science that blends creative psychological hooks with technical tracking perfection—such as custom GA4 telemetry, Google Tag Manager event structures, and server-side conversion APIs.',
  philosophy: 'Growth isn\'t a single hack; it is a repeatable system built on meticulous micro-experiments, precise tracking, and continuous conversion rate optimization.',
  features: [
    { title: 'Search Engine Authority', desc: 'Sustained organic traffic acquisition using semantic topical SEO modeling and clean, high-intent editorial backlinks.' },
    { title: 'Predictable Paid Customer Acquisition', desc: 'Deploying multi-tier programmatic Facebook/Meta and Google Ads campaigns designed for optimal ROAS and low CPC.' },
    { title: 'Bulletproof Conversion Telemetry', desc: 'Full-funnel analytics and behavioral pixel tracking (GTM, GA4, Meta API) to prevent attribution leaks and find growth loops.' }
  ]
};

export const SKILLS_DATA: SkillItem[] = [
  { name: 'SEO Optimization', level: 95, category: 'traffic', description: 'Technical audits, site structure, semantic keyword maps, internal linking, and white-hat off-page authority building.' },
  { name: 'Meta (Facebook & Instagram) Ads', level: 92, category: 'ads', description: 'Custom pixel architectures, high-performing creative hooks selection, CBO/ABO campaign scaling, and lookalike modeling.' },
  { name: 'Google Search & Display PPC', level: 88, category: 'ads', description: 'Smart bidding logic, high-intent keyword targets, search term grouping, negative match scrubbing, and negative-CPC containment.' },
  { name: 'Content Marketing', level: 90, category: 'traffic', description: 'Data-backed content briefs, search intent alignment, authority copywriting, and multi-channel asset distribution.' },
  { name: 'Conversion Tracking & GA4', level: 94, category: 'conversion', description: 'GTM container programming, Custom event parameters, Conversion API (CAPI) servers, and cohort/funnel reports in Looker.' },
  { name: 'Funnel Strategy & CRO', level: 89, category: 'conversion', description: 'Landing page copy, checkout speed-ups, high-tension lead magnets, standard wireframing, and user interaction replay mapping.' },
  { name: 'Email Marketing Automations', level: 85, category: 'strategy', description: 'Klaviyo/ActiveCampaign triggers, purchase recovery systems, behavioral nurture flows, and hyper-segmented drip loops.' },
  { name: 'Social Media Management', level: 87, category: 'traffic', description: 'Platform native strategies, brand engagement benchmarks, engagement hooks, and target audience persona maps.' },
  { name: 'Marketing Strategy & Consultation', level: 93, category: 'strategy', description: 'Audit scorecards, competitive intelligence research, digital blueprint design, and client growth forecasting models.' }
];

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'seo',
    iconName: 'Search',
    title: 'SEO Strategy & Authority Scaling',
    shortDesc: 'Drive high-volume, intent-rich organic customers to your web pages using evergreen index positions.',
    longDesc: 'Stop renting transient traffic and start owning your market share. My full-suite search engine optimization covers everything from deep semantic keyword networks to technical mobile responsiveness, rendering an unstoppable engine of compounding organic leads directly to your storefront.',
    features: [
      'Comprehensive Core Web Vitals & Technical Audits',
      'Semantic Topical Mapping & Competitor Keyword Stealing',
      'High-Intent Landing Page Copywriting & Content Hubs',
      'Premium, Natural Editorial Backlink Acquisition',
      'Local SEO GMB optimization & Schema markup installation'
    ]
  },
  {
    id: 'meta-ads',
    iconName: 'Facebook',
    title: 'Facebook & Meta Ads Management',
    shortDesc: 'Laser-targeted paid social campaigns that generate explosive pipeline and consistent ROAS.',
    longDesc: 'Traditional generic campaigns do not work anymore. I design, program, and manage advanced creative testing frameworks on Facebook and Instagram to find winning combinations that confidently convert cold audiences into buyers. Using dynamic catalogs, segmented funnels, and advanced pixel modeling, I create scalable revenue.',
    features: [
      'Rigorous Dynamic Creative Testing (DCT) frameworks',
      'LTV-focused retention and cart abandonment flows',
      'Custom and Lookalike Audience configuration',
      'Pixel tracking, Conversion API, & Server-side configurations',
      'Weekly ROAS diagnostics and creative content briefings'
    ]
  },
  {
    id: 'google-ads',
    iconName: 'TrendingUp',
    title: 'Google PPC & Search Engine Ads',
    shortDesc: 'Capture high-buyer-intent users at the exact moment they search for your products or solutions.',
    longDesc: 'I create laser-focused Search, Shopping, and Performance Max Google Ads structures that put your brand directly in front of buyers actively typing in high-value queries. By executing surgical keyword bidding and custom landing-page mappings, we drive down CPC while scaling transaction value.',
    features: [
      'Buyer-intent precise Search and Smart Campaign setups',
      'Performance Max (PMax) inventory & feed optimization',
      'Surgical negative keyword lists and bid limit containment',
      'Direct competitors conquesting and brand security bidding',
      'Integrated Google Tag Manager conversion event attribution'
    ]
  },
  {
    id: 'lead-gen',
    iconName: 'Layers',
    title: 'High-Ticket B2B Lead Generation',
    shortDesc: 'Inject fresh, qualified corporate and consumer leads into your active sales pipelines daily.',
    longDesc: 'Tired of dead-end contacts? I construct seamless inbound conversion pipelines using strategic lead magnets, high-retention multi-step forms, and behavioral email triggers to qualify decision-makers and convert cold traffic into scheduled sales calls.',
    features: [
      'Interactive assessment and quiz funnel development',
      'Multi-step form performance testing (Typeform/Custom)',
      'Instant lead dispatch alerts with automated SMS triggers',
      'Lead routing directly to your favorite CRM platform (HubSpot/GoHighLevel)',
      'Calendar integrations (Calendly/Cal.com) with warm-up drips'
    ]
  },
  {
    id: 'smm',
    iconName: 'Share2',
    title: 'Social Media Marketing & Brand Scaling',
    shortDesc: 'Increase engagement, raise baseline trust metrics, and curate an authentic digital community.',
    longDesc: 'Establish active brand authority across top demographic channels. I build custom strategic schedules, hook structures, and visual guides to expand organic brand reach, boost follower interactions, and build localized brand ambassadors.',
    features: [
      'Multi-platform creative storytelling templates and briefs',
      'Community engagement strategies and hashtag networks',
      'Platform-native content scaling (Reels, TikTok, Shorts)',
      'Social media performance audits and competitive insight tracking',
      'Influencer partnership program models and brief setups'
    ]
  },
  {
    id: 'content',
    iconName: 'BookOpen',
    title: 'Content Strategy & SEO Copywriting',
    shortDesc: 'Surgical educational content hubs planned and authored to rank high and secure conversion interest.',
    longDesc: 'Traffic is empty without direction. I compile deep search intent maps to design editorial calendars, detailed educational briefs, and fully custom long-form authority articles that immediately connect with user searches and funnel them toward commercial calls to action.',
    features: [
      'Complete Search Intent Analysis & Editorial mapping',
      'Authority long-form search blogging (1500+ word guides)',
      'Conversion-optimized headlines and scroll-stoppers',
      'Semantic NLP optimization using clear term density maps',
      'Lead Magnet designs (e-books, resource sheets, calculators)'
    ]
  },
  {
    id: 'audit',
    iconName: 'FileSearch',
    title: 'Website Technical & Marketing Audits',
    shortDesc: 'Comprehensive reviews of page indexing, speed bottlenecks, user experience leaks, and SEO errors.',
    longDesc: 'I diagnose the exact structural and programmatic issues stalling your organic listings or breaking ad attribution. I deliver an actionable 30-point roadmap detailing index errors, page speed metrics, semantic issues, and user flow improvements.',
    features: [
      'Core Web Vitals diagnostic and image size audits',
      'Robots.txt, Sitemap, and Schema markup reviews',
      'Mobile UX readability and speed optimizations',
      'Competitor link authority and anchor profile checks',
      'GTM, Pixel, and GA4 tag tracking verification tests'
    ]
  },
  {
    id: 'cro',
    iconName: 'CheckCircle',
    title: 'Conversion Rate Optimization (CRO)',
    shortDesc: 'Improve landing page performance, simplify purchasing, and extract higher profits from your existing visits.',
    longDesc: 'Do not pay for additional traffic if your website is bleeding buyers. We audit checkout funnels, run user recording analyses, and execute A/B split-testing across headers, forms, and buy buttons to turn more passive visitors into active sales.',
    features: [
      'Heatmap and mouse-tracking session replay analysis',
      'A/B Split-testing headers, forms, color-schemes, and copy',
      'Slicing friction points from B2B sign-ups and ecommerce carts',
      'Trust badges placement strategies and reviews structures',
      'Dynamic speed optimization for mobile checkout experiences'
    ]
  },
  {
    id: 'consultation',
    iconName: 'MessageSquare',
    title: '1-on-1 Marketing Growth Consultation',
    shortDesc: 'Surgical strategizing, budget forecasting, and digital marketing diagnostics to hit scalable business targets.',
    longDesc: 'Get professional diagnostic audits of your digital campaigns. I provide detailed, actionable strategies and mathematical projections during interactive growth sessions, showing you exactly how and where to invest to multiply your customer acquisition.',
    features: [
      'Complete marketing plan diagnostics and audits',
      'Ad spend forecasting models and CAC / LTV evaluations',
      'Competitor traffic framework teardowns and visual reviews',
      'Executive dashboard structuring and campaign pacing reviews',
      'Monthly strategic alignment calls and live pipeline diagnostics'
    ]
  }
];

export const PORTFOLIO_DATA: CaseStudyItem[] = [
  {
    id: 'case-ecommerce',
    title: 'Scaling an E-Commerce Fashion Brand with Meta Ads',
    client: 'Velo Custom Apparel',
    category: 'Paid Advertising',
    problem: 'The client had high cost-per-acquisition (CPA) on Facebook and was struggling to break past a 1.8x ROAS while stuck at $5,000 monthly ad spend.',
    strategy: 'We implemented a Dynamic Creative Testing (DCT) framework alongside a server-side Conversions API integration to restore signal data. We transitioned the budget to high-intent broad targeting and established a customer-testimonial video collection pipeline.',
    results: [
      { metric: 'Return on Ad Spend', value: '4.5x', sub: 'Up from 1.8x' },
      { metric: 'Revenue Scaling', value: '$22.5K', sub: 'Monthly scaling' },
      { metric: 'Cost per Purchase', value: '-38%', sub: 'Slashed acquisition costs' }
    ],
    mainMetric: '4.5x ROAS',
    bgColor: 'from-blue-600 to-indigo-700'
  },
  {
    id: 'case-seo',
    title: 'SEO Authority Campaign for a B2B SaaS Platform',
    client: 'TaskFlow Tech',
    category: 'SEO Optimization',
    problem: 'TaskFlow depended exclusively on expensive PPC, with 0% organic inflow, causing their client acquisition costs to eat through VC funding.',
    strategy: 'We constructed a semantic topical coverage map that prioritized high-intent transactional search words. Overhauled site speed to secure top mobile scores and deployed a contextual backlinking campaign targeting niche publication resources.',
    results: [
      { metric: 'Organic Traffic', value: '+230%', sub: 'Within 6 months' },
      { metric: 'Monthly Leads', value: '1.2K+', sub: 'Organic signups' },
      { metric: 'CAC Reduction', value: '45%', sub: 'Massive cash conservation' }
    ],
    mainMetric: '+230% Organic Traffic',
    bgColor: 'from-cyan-500 to-blue-600'
  },
  {
    id: 'case-leadgen',
    title: 'Generating 12,000 High-Ticket Leads via Facebook Funnels',
    client: 'Apex Financial Advisors',
    category: 'Lead Generation',
    problem: 'Apex wanted family retirement planners but was buying list scrapes, resulting in cold calls, high bounce-rates, and zero deals.',
    strategy: 'We structured an interactive "Retirement Readiness Calculator" quiz funnel. Traffic was pre-qualified through custom video ads addressing target anxieties, which redirected to landing pages optimized for maximum security and ease.',
    results: [
      { metric: 'Qualified Leads', value: '12K+', sub: 'Verifiable phone/email' },
      { metric: 'Conversion Rate', value: '18%', sub: 'Completed the full questionnaire' },
      { metric: 'Cost per Lead', value: '-35%', sub: 'Cuts lead costs by third' }
    ],
    mainMetric: '12,000+ Leads',
    bgColor: 'from-emerald-600 to-cyan-600'
  },
  {
    id: 'case-pmax',
    title: 'Google PMax Optimization for Home Goods Store',
    client: 'NestDesign Co.',
    category: 'Paid Advertising',
    problem: 'The brand was bleeding cash on general Google Shopping feeds because of low click CTR, negative brand searches, and overlapping keyword targets.',
    strategy: 'Cleaned search feeds with high-quality descriptors, established targeted asset groups with user-customized lifestyle mockups, populated direct negative brand matches, and focused bidding on high margin inventory bundles.',
    results: [
      { metric: 'Online Revenue', value: '3.1x', sub: 'Increase in feed sales' },
      { metric: 'Click-Through Rate', value: '+74%', sub: 'Listing visibility improved' },
      { metric: 'Ad Cost savings', value: '$12K', sub: 'Wasted spend recovered' }
    ],
    mainMetric: '3.1x Shopping Lift',
    bgColor: 'from-purple-600 to-indigo-800'
  }
];

export const PROCESS_DATA: ProcessStep[] = [
  {
    step: 1,
    title: 'Deep Research & Digital Auditing',
    description: 'We begin by looking under the hood of your digital footprint. I perform a deep audit of your site speed, keyword positions, past ad creative logs, and pixel telemetry.',
    details: [
      'Install diagnostic hotjar/replay mapping tools',
      'Analyze historical Google Ads / Facebook dashboard losses',
      'Execute fully detailed keyword opportunities mapping'
    ],
    iconName: 'Compass'
  },
  {
    step: 2,
    title: 'Custom Funnel Blueprinting',
    description: 'We map out a strategic architecture designed specifically for your brand niche. No boilerplate templates; we specify targeted hooks, campaign logic, and budgets.',
    details: [
      'Draft ad copywriting hooks and select landing page structures',
      'Set exact milestone goals based on custom ROI modeling',
      'Define tracking events for 100% data alignment'
    ],
    iconName: 'LayoutGrid'
  },
  {
    step: 3,
    title: 'Seamless Technical Execution',
    description: 'I roll up my sleeves and build. From GTM containers and Meta Pixels to keyword-optimized longform content hubs and ad account structural campaigns.',
    details: [
      'Publish high-speed landing pages and trigger pipelines',
      'Implement full-funnel custom events tracking triggers',
      'Launch brand-new audience clusters and ad sets'
    ],
    iconName: 'Code'
  },
  {
    step: 4,
    title: 'Continuous Optimization Tests',
    description: 'We launch, gather data, and optimize. I track behavior, review search query reports, isolate high-performing ad designs, and tweak landing pages.',
    details: [
      'A/B test headers, action buttons, and visual creative options',
      'Isolate negative search keywords and bad-target ad spots',
      'Speed up checkouts and fix checkout cart dropoff rates'
    ],
    iconName: 'Activity'
  },
  {
    step: 5,
    title: 'Scaling for Explosive Growth',
    description: 'With a highly stable CPA and strong base conversion rates, we scale the winners. We expand budget lines and conquer broader demographic markets safely.',
    details: [
      'Advance profitable campaigns via high-scale CBO budgets',
      'Leverage similar Lookalike customer definitions worldwide',
      'Build recurring brand loyalty nurture automations'
    ],
    iconName: 'LineChart'
  }
];

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: 'test-1',
    name: 'Suhail Rahman',
    role: 'CEO & Founder',
    company: 'Velo Custom Apparel',
    rating: 5,
    review: 'Mukter transformed our online store. Before working with him, we were losing money on Facebook Ads. Within 3 months, he overhauled our pixel tracking, crafted stellar creative testing flows, and boosted our average ROAS to 4.5x. I highly recommend his growth consultation to anyone trying to scale!',
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&h=120&q=80'
  },
  {
    id: 'test-2',
    name: 'Sarah Jenkins',
    role: 'Head of Marketing',
    company: 'TaskFlow Tech',
    rating: 5,
    review: 'Our organic search leads went from literally zero to our biggest acquisition channel. Mukter mapped out content strategies that perfectly targeted the specific problems our software solves. He is incredibly organized, data-driven, and acts like a true partner in our business.',
    avatarUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&h=120&q=80'
  },
  {
    id: 'test-3',
    name: 'Robert Miller',
    role: 'Managing Partner',
    company: 'Apex Wealth Group',
    rating: 5,
    review: 'Our custom retirement quiz funnel is currently generating hundreds of verified, warm leads every single week. Mukter resolved our tracking discrepancies and gave our sales reps high-quality numbers that actually answer their phones. He saved us thousands of dollars in wasted media spend.',
    avatarUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=120&h=120&q=80'
  }
];

export const BLOG_DATA: BlogPostItem[] = [
  {
    id: 'blog-1',
    category: 'SEO Strategy',
    title: 'Topical Authority: The Hidden Key to Dominating Google Rankings in 2026',
    excerpt: 'Generic keyword stuffing is dead. Discover how mapping out full topic clusters helps Google understand your brand as a leading industry authority.',
    content: 'Google\'s Core updates increasingly reward sites that demonstrate complete topical expertise. In this detailed look, we examine of why publishing 10 interlinked articles covering distinct angles of a single concept is far superior to writing 50 isolated random pieces. We explore site schemas, deep anchor maps, and internal link routing formulas that drive sustained index positions.',
    readTime: '6 min read',
    date: 'May 18, 2026',
    imageUrl: 'https://images.unsplash.com/photo-1432821596592-e2c18b78144f?auto=format&fit=crop&w=600&h=400&q=80',
    tags: ['SEO', 'Google Algorithm', 'Content Strategy']
  },
  {
    id: 'blog-2',
    category: 'Paid Advertising',
    title: 'The DCT Framework: How to Build Facebook Campaigns That Scale Seamlessly',
    excerpt: 'Stop manually setting up hundreds of static ad sets. Discover how Dynamic Creative Testing lets Meta\'s machine learning find your best creatives.',
    content: 'Scaling Facebook ads in 2026 requires giving Meta\'s ad delivery models the exact assets they need to personalize delivery. In this guide, we detail how to set up 3:2:2 Dynamic testing cells (3 hooks, 2 body descriptions, and 2 visual elements). We outline the budget triggers, evaluation ratios, and scaling rules to take winning creatives directly to high-budget Advantage+ campaigns without decay.',
    readTime: '8 min read',
    date: 'May 12, 2026',
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&h=400&q=80',
    tags: ['Facebook Ads', 'Meta Ads', 'Media Buying']
  },
  {
    id: 'blog-3',
    category: 'Conversion Tracking',
    title: 'Why Server-Side Conversion API (CAPI) is Mandatory for Modern Media Buying',
    excerpt: 'Standard browser cookie pixels are losing up to 40% of conversion signals. Learn how server-to-server tracking restores attribution fidelity.',
    content: 'With ad-blockers, iOS tracking restrictions, and the gradual death of third-party cookies, relying solely on client-side pixels is like flying blind. We walk through setting up a Google Cloud or Stape server container to feed first-party conversion events directly from your database straight to Facebook and Google, immediately boosting tracking scores and lowering matching CPA.',
    readTime: '10 min read',
    date: 'Apr 28, 2026',
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&h=400&q=80',
    tags: ['GA4', 'Conversions API', 'GTM']
  },
  {
    id: 'blog-4',
    category: 'Google Ads',
    title: 'Scrubbing the Bloat: 5 Immediate Google Ads Bidding Fixes to Save 30% of Budget',
    excerpt: 'Are Google Smart bid algorithms spending your money on useless queries? See instructions to review your match searches immediately.',
    content: 'Unchecked defaults in Google Ads often lead to heavily bloated search spending. We break down how to identify hidden auto-applied recommendations, configure exact match keywords, establish broad negative word blocks, isolate Performance Max search placements, and force exact targeted geographies.',
    readTime: '5 min read',
    date: 'Apr 15, 2026',
    imageUrl: 'https://images.unsplash.com/photo-1542744094-3a31f103e35f?auto=format&fit=crop&w=600&h=400&q=80',
    tags: ['Google Ads', 'PPC', 'ROI Optimization']
  },
  {
    id: 'blog-5',
    category: 'Lead Generation',
    title: 'How Multi-Step Quizzes Beat Generic Landing Page Forms Every Single Day',
    excerpt: 'Fewer fields don\'t always equal higher conversion. See why segmented quizzes lower friction and increase absolute lead quality.',
    content: 'We analyze psychological behavioral friction. By breaking up a 10-field conversion form into structured, gamified questions, we build momentum in responders. We review structural designs, multi-branch logic, security seals representation, and post-submission direct CTA mappings that qualify prospects immediately.',
    readTime: '7 min read',
    date: 'Mar 22, 2026',
    imageUrl: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=600&h=400&q=80',
    tags: ['Lead Gen', 'Landing Pages', 'UX Design']
  }
];

import { motion } from 'motion/react';
import { Target, TrendingUp, Sparkles, CheckCircle, BarChart, ArrowUpRight } from 'lucide-react';
import { ABOUT_DATA, IMAGES } from '../data';

export default function About() {
  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      window.scrollTo({
        top: el.offsetTop - 80,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="about" className="relative py-24 bg-slate-950 overflow-hidden">
      {/* Glow highlight */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-blue-600/5 blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-1.5 bg-blue-500/10 border border-blue-500/20 px-3 py-1 rounded-full mb-4"
          >
            <Sparkles className="w-3.5 h-3.5 text-blue-400" />
            <span className="font-sans text-xs font-semibold text-blue-300 tracking-wider uppercase">আমার পরিচিতি</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-sans font-bold text-3xl sm:text-4xl text-white tracking-tight"
          >
            {ABOUT_DATA.storyHeading}
          </motion.h2>
          
          <div className="w-12 h-1 bg-blue-600 mx-auto mt-4 rounded-full" />
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Visual Graphic Side (Cols 5) */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative p-3 bg-slate-900/40 border border-slate-800/80 rounded-3xl shadow-2xl backdrop-blur-md overflow-hidden group"
            >
              {/* Image Frame */}
              <div className="w-full h-full rounded-2xl overflow-hidden aspect-4/3 relative bg-slate-950">
                <img
                  src={IMAGES.dashboard}
                  alt="Md Mukter Ahmed's Digital Growth Analytics Interface"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* Visual Glass Filter */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80" />

                {/* Overlaid stat snippet in image */}
                <div className="absolute bottom-5 left-5 right-5 p-4 rounded-xl bg-slate-900/90 border border-slate-800/80 backdrop-blur-sm shadow-xl">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-mono text-[10px] text-cyan-400 font-semibold tracking-wider uppercase">কনভার্সন গ্রোথ</p>
                      <h4 className="font-sans font-bold text-sm text-white mt-0.5">নিখুঁত অ্যানালিটিক্যাল ক্ষমতা</h4>
                    </div>
                    <span className="bg-emerald-500/15 border border-emerald-500/20 px-2 py-0.5 rounded text-[10px] font-semibold text-emerald-400">
                      CAPI সমৃদ্ধ
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Quote philosophical box */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mt-6 p-6 rounded-2xl bg-gradient-to-br from-slate-900/80 to-slate-950 border-l-4 border-cyan-400 border-y border-r border-slate-800/80 text-left"
            >
              <p className="font-sans text-sm italic text-slate-300">
                "{ABOUT_DATA.philosophy}"
              </p>
            </motion.div>
          </div>

          {/* Biography Text Side (Cols 7) */}
          <div className="lg:col-span-7 text-left space-y-6">
            
            <h3 className="font-sans text-xl sm:text-2xl font-bold text-white tracking-tight">
              {ABOUT_DATA.storyIntro}
            </h3>

            <div className="font-sans text-slate-300 space-y-4 text-sm sm:text-base leading-relaxed">
              <p>{ABOUT_DATA.storyParagraph1}</p>
              <p>{ABOUT_DATA.storyParagraph2}</p>
            </div>

            {/* Core Focus Columns */}
            <div className="pt-4 grid grid-cols-1 gap-4">
              {ABOUT_DATA.features.map((feature, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-slate-900/30 border border-slate-900 hover:border-slate-850 hover:bg-slate-900/60 transition-colors duration-300 flex items-start space-x-3.5"
                >
                  <div className="p-2 rounded-lg bg-blue-600/10 shrink-0 text-blue-400 mt-0.5">
                    <CheckCircle className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-sans text-sm font-bold text-white">{feature.title}</h4>
                    <p className="font-sans text-xs text-slate-400 mt-1 leading-normal">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Consultation Trigger */}
            <div className="pt-3">
              <button
                id="about-cta-btn"
                onClick={scrollToContact}
                className="inline-flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 text-sm font-sans font-bold group cursor-pointer"
              >
                <span>চলুন আপনার ফেসবুক ও গোল্ড অ্যানালিটিক্স অডিট শুরু করি</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

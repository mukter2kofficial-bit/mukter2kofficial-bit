import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight, Award, ChevronRight, CheckSquare, Target, Lightbulb, BadgePercent, X } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data';
import { CaseStudyItem } from '../types';

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<CaseStudyItem | null>(null);

  const categories = ['All', 'SEO Optimization', 'Paid Advertising', 'Lead Generation'];

  const filteredCaseStudies = PORTFOLIO_DATA.filter((item) => {
    if (activeCategory === 'All') return true;
    return item.category === activeCategory;
  });

  return (
    <section id="portfolio" className="relative py-24 bg-slate-950 overflow-hidden border-t border-slate-900 animate-fade-in">
      {/* Background orbs */}
      <div className="absolute top-[20%] right-0 w-80 h-80 rounded-full bg-blue-600/5 blur-3xl" />
      <div className="absolute bottom-[20%] left-0 w-80 h-80 rounded-full bg-emerald-500/5 blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-1.5 bg-blue-500/10 border border-blue-500/20 px-3 py-1 rounded-full mb-4">
            <Award className="w-3.5 h-3.5 text-blue-400" />
            <span className="font-sans text-xs font-semibold text-blue-300 tracking-wider uppercase">Case Studies</span>
          </div>
          
          <h2 className="font-sans font-bold text-3xl sm:text-4xl text-white tracking-tight">
            Our Battle-Tested Growth Results
          </h2>
          <p className="font-sans text-sm text-slate-400 mt-3 max-w-xl mx-auto leading-relaxed">
            Real campaigns. Verified figures. Take an look into how we help direct-to-consumer and business-to-business brands scale consistently.
          </p>
          <div className="w-12 h-1 bg-blue-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Category Filter Selector */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              id={`portfolio-filter-${category.toLowerCase().replace(/\s+/g, '-')}`}
              onClick={() => setActiveCategory(category)}
              className={`px-4.5 py-2 rounded-full font-sans text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer ${
                activeCategory === category
                  ? 'text-slate-950 bg-blue-400 shadow-lg shadow-blue-400/20'
                  : 'text-slate-400 bg-slate-900/60 border border-slate-800/60 hover:text-white hover:border-slate-700/60'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Portfolio Grids */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredCaseStudies.map((study, idx) => (
              <motion.div
                layout
                key={study.id}
                id={`case-card-${study.id}`}
                initial={{ opacity: 0, scale: 0.96, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -15 }}
                transition={{ duration: 0.45 }}
                className="group p-6 sm:p-8 rounded-3xl bg-slate-900/35 border border-slate-900 hover:border-slate-800/80 hover:bg-slate-900/70 transition-all duration-300 text-left relative flex flex-col justify-between"
              >
                {/* Visual Glow Gradient Accent */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-indigo-600 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Info block */}
                <div>
                  
                  {/* Client name and category tag */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-[10px] uppercase font-bold text-cyan-400 tracking-wider">
                      {study.category}
                    </span>
                    <span className="font-sans text-xs text-slate-400 font-semibold bg-slate-950 px-3 py-1 rounded-full border border-slate-900/40">
                      {study.client}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-sans text-lg sm:text-xl font-bold text-white group-hover:text-blue-300 transition-colors leading-snug">
                    {study.title}
                  </h3>

                  {/* Dynamic Metrics boxes */}
                  <div className="grid grid-cols-3 gap-2.5 my-6">
                    {study.results.map((res, rIdx) => (
                      <div
                        key={rIdx}
                        className="p-3 rounded-2xl bg-slate-950/80 border border-slate-850 flex flex-col items-center text-center justify-center relative group-hover:border-slate-800 transition-colors"
                      >
                        <span className="font-sans text-lg sm:text-xl font-extrabold text-cyan-400 tracking-tight leading-none">
                          {res.value}
                        </span>
                        <span className="font-sans text-[9px] font-bold text-white mt-1 leading-none">
                          {res.metric}
                        </span>
                        <span className="font-sans text-[8px] text-slate-400 mt-1 leading-none text-center">
                          {res.sub}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Problem & Strategy mini description */}
                  <div className="space-y-3.5 mb-6 pt-1.5 border-t border-slate-900/60">
                    <div>
                      <span className="flex items-center text-rose-400 font-sans text-xs font-bold uppercase tracking-wider mb-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-rose-400 mr-1.5" />
                        The Challenge:
                      </span>
                      <p className="font-sans text-slate-300 text-xs leading-relaxed pl-3 line-clamp-2">
                        {study.problem}
                      </p>
                    </div>

                    <div>
                      <span className="flex items-center text-emerald-400 font-sans text-xs font-bold uppercase tracking-wider mb-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mr-1.5" />
                        The Strategy:
                      </span>
                      <p className="font-sans text-slate-300 text-xs leading-relaxed pl-3 line-clamp-2">
                        {study.strategy}
                      </p>
                    </div>
                  </div>

                </div>

                {/* More Details CTA */}
                <div className="mt-2 pt-4 border-t border-slate-900/80 flex items-center justify-between">
                  <span className="font-mono text-[9px] uppercase tracking-wider text-slate-500 font-semibold">GROWTH IMPACT MATRIX</span>
                  <button
                    id={`case-study-details-btn-${study.id}`}
                    onClick={() => setSelectedCaseStudy(study)}
                    className="inline-flex items-center space-x-1 font-sans text-xs font-bold text-blue-400 hover:text-blue-300 transition-colors cursor-pointer group/btn"
                  >
                    <span>Read Strategic Teardown</span>
                    <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-0.5 transition-transform" />
                  </button>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>

      {/* Case Study Detailed Teardown Overlaid Modal */}
      <AnimatePresence>
        {selectedCaseStudy && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCaseStudy(null)}
              className="absolute inset-0 bg-slate-950/85 backdrop-blur-sm"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 15 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 15 }}
              transition={{ type: 'spring', duration: 0.5 }}
              className="relative w-full max-w-xl bg-slate-900 border border-slate-850 rounded-3xl p-6 sm:p-8 shadow-2xl z-60 overflow-hidden text-left"
            >
              {/* Top Accent Gradient line */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 via-teal-500 to-blue-500" />

              {/* Close Button */}
              <button
                id="case-modal-close-btn"
                onClick={() => setSelectedCaseStudy(null)}
                className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-850 transition duration-150 cursor-pointer"
                aria-label="Close teardown"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Header inside modal */}
              <div className="mb-6 mt-2">
                <div className="flex items-center space-x-2.5 mb-2">
                  <span className="font-sans text-[10px] font-bold uppercase tracking-wider text-cyan-400 bg-cyan-400/10 px-2.5 py-0.5 rounded-full border border-cyan-400/10">
                    {selectedCaseStudy.category}
                  </span>
                  <span className="font-sans text-xs font-semibold text-slate-400">
                    Client: {selectedCaseStudy.client}
                  </span>
                </div>
                <h3 className="font-sans text-xl font-black text-white leading-snug">
                  {selectedCaseStudy.title}
                </h3>
              </div>

              {/* Grid or Columns results breakdown */}
              <div className="space-y-5 flex-1 overflow-y-auto max-h-[60vh] pr-1 scrollbar-thin">
                
                {/* Full results segment */}
                <div className="p-4 rounded-2xl bg-slate-950 border border-slate-850">
                  <h4 className="font-sans text-xs font-bold uppercase tracking-wider text-indigo-400 mb-3.5 flex items-center">
                    <BadgePercent className="w-4 h-4 mr-1.5" /> Verified Results Achieved
                  </h4>
                  <div className="grid grid-cols-3 gap-3">
                    {selectedCaseStudy.results.map((res, idx) => (
                      <div key={idx} className="text-center p-2 rounded-xl bg-slate-900 border border-slate-800/40">
                        <span className="block font-sans text-xl font-extrabold text-white leading-none tracking-tight">{res.value}</span>
                        <span className="block font-sans text-[9px] text-slate-400 font-semibold mt-1.5 leading-none uppercase tracking-wide">{res.metric}</span>
                        <span className="block font-sans text-[8px] text-slate-500 mt-1 leading-none">{res.sub}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Problem detailed breakdown */}
                <div>
                  <h4 className="font-sans text-xs font-bold uppercase tracking-wider text-rose-400 mb-1.5 flex items-center">
                    <span className="w-2 h-2 rounded-full bg-rose-400 mr-2" />
                    The Diagnostic Challenge
                  </h4>
                  <p className="font-sans text-slate-300 text-sm leading-relaxed pl-4">
                    {selectedCaseStudy.problem}
                  </p>
                </div>

                {/* Strategy blueprint detailed breakdown */}
                <div>
                  <h4 className="font-sans text-xs font-bold uppercase tracking-wider text-emerald-400 mb-1.5 flex items-center">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 mr-2" />
                    The Implemented Strategy Blueprint
                  </h4>
                  <p className="font-sans text-slate-300 text-sm leading-relaxed pl-4">
                    {selectedCaseStudy.strategy}
                  </p>
                </div>

                {/* Action CTA within case modal */}
                <div className="p-4 rounded-xl bg-blue-900/10 border border-blue-900/20 flex items-start space-x-3 mt-4">
                  <Lightbulb className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                  <div className="text-left">
                    <h5 className="font-sans text-xs font-extrabold text-blue-400">Want similar outcomes for your brand?</h5>
                    <p className="font-sans text-xs text-slate-400 mt-1 leading-relaxed">
                      Every audit strategy is customized to the specific market sector. Let's outline the precise channel opportunities for your funnel.
                    </p>
                  </div>
                </div>

              </div>

              {/* Footer inside modal */}
              <div className="mt-8 pt-5 border-t border-slate-800/80 flex flex-col sm:flex-row items-center gap-3">
                <button
                  id="case-modal-cta-btn"
                  onClick={() => {
                    setSelectedCaseStudy(null);
                    const el = document.getElementById('contact');
                    if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' });
                  }}
                  className="w-full sm:flex-1 py-3.5 rounded-xl text-center bg-blue-500 hover:bg-blue-600 text-white font-sans text-xs font-bold transition duration-200 cursor-pointer shadow-lg shadow-blue-500/10 active:scale-95"
                >
                  Configure My Growth Strategy
                </button>
                <button
                  id="case-modal-cancel-btn"
                  onClick={() => setSelectedCaseStudy(null)}
                  className="w-full sm:w-auto px-5 py-3.5 rounded-xl text-center bg-slate-950 border border-slate-850 hover:bg-slate-900 text-slate-300 font-sans text-xs font-medium transition duration-200 cursor-pointer"
                >
                  Close
                </button>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, MessageSquareCode, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { TESTIMONIALS_DATA } from '../data';

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % TESTIMONIALS_DATA.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + TESTIMONIALS_DATA.length) % TESTIMONIALS_DATA.length);
  };

  const currentTestimonial = TESTIMONIALS_DATA[activeIndex];

  return (
    <section id="testimonials" className="relative py-24 bg-slate-950 overflow-hidden border-t border-slate-900 animate-fade-in">
      {/* Background radial soft light overlay */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-indigo-500/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-1.5 bg-indigo-500/10 border border-indigo-500/20 px-3 py-1 rounded-full mb-4">
            <MessageSquareCode className="w-3.5 h-3.5 text-indigo-400" />
            <span className="font-sans text-xs font-semibold text-indigo-300 tracking-wider uppercase">Social Proof</span>
          </div>
          
          <h2 className="font-sans font-bold text-3xl sm:text-4xl text-white tracking-tight">
            Loved by Active Partners & Clients
          </h2>
          <p className="font-sans text-sm text-slate-400 mt-3 max-w-xl mx-auto leading-relaxed">
            Read direct feedback from business founders and marketing coordinators who have scaled their pipelines using our campaigns.
          </p>
          <div className="w-12 h-1 bg-indigo-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Testimonials Frame */}
        <div className="max-w-4xl mx-auto relative px-4 sm:px-8">
          
          {/* Main Slide Card */}
          <div className="relative rounded-3xl bg-slate-900/45 border border-slate-900 p-8 sm:p-12 text-left shadow-2xl backdrop-blur-md overflow-hidden min-h-[380px] sm:min-h-[320px] flex flex-col justify-between">
            {/* Massive styled background quotation mark */}
            <Quote className="absolute top-6 right-8 w-24 h-24 text-slate-800/15 select-none pointer-events-none" />

            {/* Glowing borders */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-indigo-500" />

            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.35 }}
                className="space-y-6"
              >
                {/* Stars and verified indicator */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-1">
                    {[...Array(currentTestimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4.5 h-4.5 fill-cyan-400 text-cyan-400" />
                    ))}
                  </div>
                  <span className="font-mono text-[9px] uppercase tracking-wider font-extrabold text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/10">
                    Verified Client Contract
                  </span>
                </div>

                {/* Review Copy */}
                <p className="font-sans text-slate-100 text-sm sm:text-base leading-relaxed italic md:text-lg">
                  "{currentTestimonial.review}"
                </p>

                {/* Person Bio info block */}
                <div className="flex items-center space-x-4 pt-4 border-t border-slate-850">
                  <div className="w-12 h-12 rounded-full overflow-hidden border border-slate-800 shrink-0">
                    <img
                      src={currentTestimonial.avatarUrl}
                      alt={currentTestimonial.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-sans font-bold text-sm sm:text-base text-white leading-none">
                      {currentTestimonial.name}
                    </h4>
                    <span className="block font-sans text-xs text-slate-400 mt-1 leading-none">
                      {currentTestimonial.role}, <span className="text-cyan-400">{currentTestimonial.company}</span>
                    </span>
                  </div>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

          {/* Carousel Custom Indicator Navigation Sliders */}
          <div className="flex items-center justify-between mt-8 max-w-sm mx-auto">
            
            {/* Prev Icon Arrow */}
            <button
              id="testimonial-prev-btn"
              onClick={handlePrev}
              className="p-3 rounded-full bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition duration-150 cursor-pointer shadow-md active:scale-95"
              aria-label="Previous review"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Bubble Dots Indicators */}
            <div className="flex items-center space-x-2">
              {TESTIMONIALS_DATA.map((item, idx) => (
                <button
                  key={item.id}
                  id={`testimonial-dot-${idx}`}
                  onClick={() => setActiveIndex(idx)}
                  className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                    idx === activeIndex
                      ? 'w-6 bg-cyan-400 shadow-md shadow-cyan-400/20'
                      : 'w-2.5 bg-slate-800 hover:bg-slate-700'
                  }`}
                  aria-label={`Go to testimonial ${idx + 1}`}
                />
              ))}
            </div>

            {/* Next Icon Arrow */}
            <button
              id="testimonial-next-btn"
              onClick={handleNext}
              className="p-3 rounded-full bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition duration-150 cursor-pointer shadow-md active:scale-95"
              aria-label="Next review"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

          </div>

        </div>

      </div>
    </section>
  );
}

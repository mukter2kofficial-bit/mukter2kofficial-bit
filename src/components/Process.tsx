import { useState } from 'react';
import { motion } from 'motion/react';
import { Compass, LayoutGrid, Code, Activity, LineChart, HelpCircle, ArrowDown, ChevronDown, ChevronUp } from 'lucide-react';
import { PROCESS_DATA } from '../data';

function getProcessIcon(iconName: string, className: string = 'w-5 h-5') {
  switch (iconName) {
    case 'Compass':
      return <Compass className={`${className} text-cyan-400`} />;
    case 'LayoutGrid':
      return <LayoutGrid className={`${className} text-blue-400`} />;
    case 'Code':
      return <Code className={`${className} text-indigo-400`} />;
    case 'Activity':
      return <Activity className={`${className} text-purple-400`} />;
    case 'LineChart':
      return <LineChart className={`${className} text-emerald-400`} />;
    default:
      return <HelpCircle className={`${className} text-slate-400`} />;
  }
}

export default function Process() {
  const [activeStep, setActiveStep] = useState<number>(1);
  const [expandedStep, setExpandedStep] = useState<number | null>(1);

  const toggleExpand = (stepNum: number) => {
    if (expandedStep === stepNum) {
      setExpandedStep(null);
    } else {
      setExpandedStep(stepNum);
    }
  };

  return (
    <section id="process" className="relative py-24 bg-slate-950 overflow-hidden border-t border-slate-900 animate-fade-in">
      {/* Decorative flow lines background */}
      <div className="absolute top-[30%] left-1/2 -translate-x-1/2 w-full h-[50vh] bg-[radial-gradient(ellipse_at_center,#1e1b4b,transparent_75%)] opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-1.5 bg-cyan-500/10 border border-cyan-500/20 px-3 py-1 rounded-full mb-4">
            <Activity className="w-3.5 h-3.5 text-cyan-400" />
            <span className="font-sans text-xs font-semibold text-cyan-300 tracking-wider uppercase">Continuous Synergy</span>
          </div>
          
          <h2 className="font-sans font-bold text-3xl sm:text-4xl text-white tracking-tight">
            The Data-Driven Scaling Process
          </h2>
          <p className="font-sans text-sm text-slate-400 mt-3 max-w-xl mx-auto leading-relaxed">
            I replace guesswork with standard engineering frameworks. Here is how we develop, audit, and scale your brand predictably.
          </p>
          <div className="w-12 h-1 bg-cyan-400 mx-auto mt-4 rounded-full" />
        </div>

        {/* Timeline Layout */}
        <div className="max-w-4xl mx-auto relative pl-4 sm:pl-0">
          
          {/* Vertical Backbone Line (Visible on larger screens in center, on mobile aligned left) */}
          <div className="absolute left-6 sm:left-1/2 top-10 bottom-10 w-[2px] bg-gradient-to-b from-blue-600 via-indigo-600 to-cyan-400 opacity-30 transform sm:-translate-x-1/2" />

          {/* Process Step Blocks */}
          <div className="space-y-12 relative">
            {PROCESS_DATA.map((proc, idx) => {
              const isEven = idx % 2 === 0;
              const isSelected = activeStep === proc.step;
              const isExpanded = expandedStep === proc.step;

              return (
                <div
                  key={proc.step}
                  id={`process-step-${proc.step}`}
                  className={`flex flex-col sm:flex-row items-stretch sm:justify-start ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  } relative`}
                >
                  
                  {/* Backbone Badge Circle (Timeline node) */}
                  <div
                    onClick={() => {
                      setActiveStep(proc.step);
                      toggleExpand(proc.step);
                    }}
                    className={`absolute left-0 sm:left-1/2 top-0 w-12 h-12 rounded-full border-2 transform -translate-x-0 sm:-translate-x-1/2 flex items-center justify-center transition-all z-20 cursor-pointer ${
                      isSelected
                        ? 'bg-slate-900 border-cyan-400 text-white shadow-lg shadow-cyan-400/20 scale-110'
                        : 'bg-slate-950 border-slate-800 text-slate-500 hover:border-slate-700'
                    }`}
                  >
                    {getProcessIcon(proc.iconName)}
                  </div>

                  {/* Spacer for horizontal timeline alignment */}
                  <div className="hidden sm:block w-1/2" />

                  {/* Step Card Content */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? 30 : -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-40px' }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    onClick={() => {
                      setActiveStep(proc.step);
                    }}
                    className={`w-full sm:w-[45%] pl-10 sm:pl-0 text-left ${
                      isEven ? 'sm:pr-8' : 'sm:pl-8'
                    }`}
                  >
                    <div
                      className={`p-6 rounded-3xl bg-slate-900/40 border transition-all duration-300 backdrop-blur-md cursor-pointer relative ${
                        isSelected
                          ? 'border-slate-700 bg-slate-900/80 shadow-xl'
                          : 'border-slate-900 hover:border-slate-850'
                      }`}
                    >
                      {/* Step index overlay */}
                      <span className="absolute top-4 right-5 font-mono text-3xl font-black text-slate-800 tracking-tight leading-none group-hover:text-cyan-950">
                        0{proc.step}
                      </span>

                      {/* Title Segment */}
                      <div className="flex items-center space-x-2.5">
                        <span className="font-mono text-[9px] font-extrabold uppercase bg-cyan-400/10 text-cyan-400 px-2.5 py-0.5 rounded-full">
                          Stage 0{proc.step}
                        </span>
                      </div>

                      <h3 className="font-sans text-base sm:text-lg font-bold text-white mt-3 flex items-center justify-between">
                        <span>{proc.title}</span>
                      </h3>

                      <p className="font-sans text-slate-300 text-xs sm:text-sm mt-3 leading-relaxed">
                        {proc.description}
                      </p>

                      {/* Diagnostic details section with accordion trigger */}
                      <div className="mt-4 pt-4 border-t border-slate-850 text-left">
                        <button
                          id={`process-expand-btn-${proc.step}`}
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleExpand(proc.step);
                          }}
                          className="flex items-center space-x-1.5 text-xs font-sans font-bold text-slate-400 hover:text-cyan-400 transition-colors cursor-pointer"
                        >
                          <span>{isExpanded ? 'Hide Task Actions' : 'Explore Action Checklist'}</span>
                          {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                        </button>

                        {isExpanded && (
                          <motion.ul
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            transition={{ duration: 0.25 }}
                            className="space-y-2 mt-3 pl-1 text-[11px] sm:text-xs text-slate-300 font-sans"
                          >
                            {proc.details.map((detail, dIdx) => (
                              <li key={dIdx} className="flex items-start space-x-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0 mt-1.5" />
                                <span className="leading-snug">{detail}</span>
                              </li>
                            ))}
                          </motion.ul>
                        )}
                      </div>

                    </div>
                  </motion.div>

                </div>
              );
            })}
          </div>

        </div>

        {/* Process final notice badge */}
        <div className="mt-16 text-center max-w-xl mx-auto">
          <p className="font-sans text-xs text-slate-500 uppercase font-bold tracking-widest flex items-center justify-center">
            <ArrowDown className="w-4 h-4 mr-1.5 text-cyan-400 animate-bounce" />
            The entire cycle is fully customized for organic scale.
          </p>
        </div>

      </div>
    </section>
  );
}

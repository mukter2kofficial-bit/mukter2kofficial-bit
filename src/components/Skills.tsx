import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Code, Percent, Cpu, Activity, Lightbulb, MousePointerClick } from 'lucide-react';
import { SKILLS_DATA } from '../data';
import { SkillCategory } from '../types';

export default function Skills() {
  const [selectedFilter, setSelectedFilter] = useState<'all' | SkillCategory>('all');

  const filterKeys: { key: 'all' | SkillCategory; label: string }[] = [
    { key: 'all', label: 'সব দক্ষতা' },
    { key: 'traffic', label: 'অর্গানিক ট্রাফিক ও এসইও (Traffic & SEO)' },
    { key: 'ads', label: 'পেইড অ্যাডস ও পিপিসি (Paid Ads & PPC)' },
    { key: 'conversion', label: 'কনভার্সন ও ট্র্যাকিং (Analytics & Tracking)' },
    { key: 'strategy', label: 'ফানেল ও স্ট্র্যাটেজি (Funnel & Strategy)' },
  ];

  const filteredSkills = SKILLS_DATA.filter((skill) => {
    if (selectedFilter === 'all') return true;
    return skill.category === selectedFilter;
  });

  return (
    <section id="skills" className="relative py-24 bg-slate-950 overflow-hidden border-t border-slate-900">
      {/* Background blurs */}
      <div className="absolute top-1/2 right-[10%] -translate-y-1/2 w-80 h-80 rounded-full bg-cyan-500/5 blur-3xl" />
      <div className="absolute bottom-[10%] left-[10%] w-72 h-72 rounded-full bg-indigo-500/5 blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 animate-fade-in">
          <div className="inline-flex items-center space-x-1.5 bg-cyan-500/10 border border-cyan-500/20 px-3 py-1 rounded-full mb-4">
            <Cpu className="w-3.5 h-3.5 text-cyan-400 animate-spin-slow" />
            <span className="font-sans text-xs font-semibold text-cyan-300 tracking-wider uppercase">প্রধান দক্ষতাসমূহ</span>
          </div>
          
          <h2 className="font-sans font-bold text-3xl sm:text-4xl text-white tracking-tight">
            মূল দক্ষতা এবং টেকনিক্যাল ক্যাপাবিলিটি
          </h2>
          <p className="font-sans text-sm text-slate-400 mt-3 max-w-xl mx-auto leading-relaxed">
            আমি আধুনিক মনস্তাত্ত্বিক কাস্টমার সাইকোলজি ও উন্নত ট্র্যাকিং পিক্সেল ব্যবহার করে হাই-কনভার্টিং লাভজনক গ্রোথ লুপ তৈরি করি।
          </p>
          <div className="w-12 h-1 bg-cyan-400 mx-auto mt-4 rounded-full" />
        </div>

        {/* Filter Navigation - Category selectors */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {filterKeys.map((filter) => (
            <button
              key={filter.key}
              id={`skills-filter-${filter.key}`}
              onClick={() => setSelectedFilter(filter.key)}
              className={`px-4.5 py-2 rounded-full font-sans text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer ${
                selectedFilter === filter.key
                  ? 'text-slate-950 bg-cyan-400 shadow-lg shadow-cyan-400/20'
                  : 'text-slate-400 bg-slate-900/60 border border-slate-800/60 hover:text-white hover:border-slate-700/60'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill, idx) => (
              <motion.div
                layout
                key={skill.name}
                id={`skill-card-${skill.name.toLowerCase().replace(/\s+/g, '-')}`}
                initial={{ opacity: 0, scale: 0.95, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: -15 }}
                transition={{ duration: 0.4 }}
                className="group p-6 rounded-2xl bg-slate-900/40 border border-slate-900 hover:border-slate-800 hover:bg-slate-900/80 transition-all duration-300 text-left relative flex flex-col justify-between"
              >
                {/* Visual Accent Corner highlight */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-cyan-400/5 to-transparent rounded-tr-2xl group-hover:from-cyan-400/10 transition-colors" />

                {/* Info block */}
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-sans text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {skill.name}
                    </h3>
                    <div className="flex items-center space-x-1 font-sans text-xs font-bold text-cyan-400 bg-cyan-500/10 border border-cyan-500/15 px-2.5 py-0.5 rounded-full">
                      <span>{skill.level}</span>
                      <Percent className="w-3 h-3" />
                    </div>
                  </div>

                  <p className="font-sans text-slate-400 text-xs sm:text-sm leading-relaxed mb-6">
                    {skill.description}
                  </p>
                </div>

                {/* Cylindrical Progress Cylinder */}
                <div className="w-full">
                  <div className="flex justify-between items-center text-[10px] font-mono font-semibold text-slate-500 mb-1.5 uppercase tracking-wider">
                    <span>পারফরম্যান্স ম্যাট্রিক্স</span>
                    <span className="text-cyan-300 font-sans">দক্ষতার লেভেল: {skill.level >= 90 ? 'এলিট' : 'এক্সপার্ট'}</span>
                  </div>
                  
                  <div className="w-full h-1.5 rounded-full bg-slate-950 overflow-hidden p-[1px] border border-slate-900">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.1, ease: 'easeOut' }}
                      className="h-full rounded-full bg-gradient-to-r from-blue-600 to-cyan-400 shadow-inner"
                    />
                  </div>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Dynamic CTA micro footer */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center justify-center space-x-2 mt-12 text-center"
        >
          <Lightbulb className="w-4 h-4 text-cyan-400 animate-pulse" />
          <span className="font-sans text-xs font-medium text-slate-400">
            এই বিশেষ দক্ষতাসমূহ ব্যবহার করে আপনার ব্যবসার প্রবৃদ্ধি বৃদ্ধি করতে চান?
          </span>
          <button
            id="skills-consult-btn"
            onClick={() => {
              const el = document.getElementById('contact');
              if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' });
            }}
            className="font-sans text-xs underline font-bold text-cyan-400 hover:text-cyan-300 cursor-pointer"
          >
            আজই অডিট বুক করুন
          </button>
        </motion.div>

      </div>
    </section>
  );
}

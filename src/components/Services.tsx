import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Search,
  Facebook,
  TrendingUp,
  Layers,
  Share2,
  BookOpen,
  FileSearch,
  CheckCircle,
  MessageSquare,
  ArrowRight,
  Sparkles,
  X,
  Play
} from 'lucide-react';
import { SERVICES_DATA } from '../data';
import { ServiceItem } from '../types';

// Dynamic icon mapper matching data strings to actual Lucide react components
function getServiceIcon(iconName: string, className: string = 'w-6 h-6') {
  switch (iconName) {
    case 'Search':
      return <Search className={`${className} text-cyan-400`} />;
    case 'Facebook':
      return <Facebook className={`${className} text-blue-400`} />;
    case 'TrendingUp':
      return <TrendingUp className={`${className} text-indigo-400`} />;
    case 'Layers':
      return <Layers className={`${className} text-emerald-400`} />;
    case 'Share2':
      return <Share2 className={`${className} text-pink-400`} />;
    case 'BookOpen':
      return <BookOpen className={`${className} text-teal-400`} />;
    case 'FileSearch':
      return <FileSearch className={`${className} text-orange-400`} />;
    case 'CheckCircle':
      return <CheckCircle className={`${className} text-purple-400`} />;
    case 'MessageSquare':
      return <MessageSquare className={`${className} text-amber-400`} />;
    default:
      return <Sparkles className={`${className} text-slate-400`} />;
  }
}

export default function Services() {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const selectServiceAndScroll = (service: ServiceItem) => {
    setSelectedService(null);
    
    // Auto-select in contact select box
    const selectEl = document.getElementById('contact-service') as HTMLSelectElement;
    if (selectEl) {
      selectEl.value = service.id;
      // Dispatch change event to trigger React state updates if listening
      selectEl.dispatchEvent(new Event('change', { bubbles: true }));
    }

    // Scroll to contact form
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      window.scrollTo({
        top: contactSection.offsetTop - 80,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="services" className="relative py-24 bg-slate-950 overflow-hidden border-t border-slate-900">
      {/* Glow backgrounds */}
      <div className="absolute top-[10%] left-[5%] w-96 h-96 rounded-full bg-blue-600/5 blur-3xl" />
      <div className="absolute bottom-[10%] right-[5%] w-96 h-96 rounded-full bg-purple-600/5 blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-1.5 bg-indigo-500/10 border border-indigo-500/20 px-3 py-1 rounded-full mb-4">
            <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
            <span className="font-sans text-xs font-semibold text-indigo-300 tracking-wider uppercase">কৌশলগত সেবাসমূহ</span>
          </div>
          
          <h2 className="font-sans font-bold text-3xl sm:text-4xl text-white tracking-tight">
            হাই-কনভার্টিং গ্রোথ সেবাসমূহ
          </h2>
          <p className="font-sans text-sm text-slate-400 mt-3 max-w-xl mx-auto leading-relaxed">
            আমি কোনো ফাঁকা কথার মেট্রিক্স বিক্রি করি না। আমি তৈরি করি ডাটা-চালিত কাস্টম সেলস ফানেল যা আপনার ব্যবসার লাভ ও প্রবৃদ্ধি নিশ্চিত করে।
          </p>
          <div className="w-12 h-1 bg-indigo-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Services Grid (9 services) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {SERVICES_DATA.map((service, idx) => (
            <motion.div
              key={service.id}
              id={`service-card-${service.id}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-20px' }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="group p-6 sm:p-8 rounded-3xl bg-slate-900/30 border border-slate-900 hover:border-slate-800 hover:bg-slate-900/60 transition-all duration-300 text-left flex flex-col justify-between hover:-translate-y-1 relative"
            >
              {/* Card visual accent glow */}
              <div className="absolute inset-0 rounded-3xl bg-radial from-white/[0.01] to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              
              <div>
                {/* Icon Circle */}
                <div className="inline-flex p-3 rounded-2.5xl bg-slate-950/80 border border-slate-800/80 mb-5 group-hover:scale-105 transition-transform">
                  {getServiceIcon(service.iconName)}
                </div>

                {/* Service Title */}
                <h3 className="font-sans text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {service.title}
                </h3>

                {/* Short Desc */}
                <p className="font-sans text-slate-400 text-xs sm:text-sm mt-3 leading-relaxed">
                  {service.shortDesc}
                </p>
              </div>

              {/* Action trigger */}
              <div className="mt-6 pt-3.5 border-t border-slate-900 flex items-center justify-between">
                <button
                  id={`service-learn-more-btn-${service.id}`}
                  onClick={() => setSelectedService(service)}
                  className="inline-flex items-center space-x-1.5 text-xs font-sans font-bold text-slate-300 hover:text-cyan-400 transition-colors group/btn cursor-pointer"
                >
                  <span>বিস্তৃত কৌশল দেখুন</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
                </button>
                <div className="w-1.5 h-1.5 rounded-full bg-slate-800 group-hover:bg-cyan-400 transition-colors" />
              </div>

            </motion.div>
          ))}
        </div>

        {/* Global CTA Banner inside Services */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-16 p-8 rounded-3xl bg-gradient-to-r from-blue-950/40 via-purple-950/10 to-cyan-950/40 border border-slate-800/80 text-center relative overflow-hidden backdrop-blur-md"
        >
          {/* Neon line decorative */}
          <div className="absolute top-0 left-0 w-1 h-full bg-cyan-400" />
          
          <div className="max-w-2xl mx-auto flex flex-col items-center">
            <h3 className="font-sans font-bold text-xl text-white">বুঝতে পারছেন না কোন কৌশলটি আপনার ব্যবসার জন্য সঠিক?</h3>
            <p className="font-sans text-sm text-slate-400 mt-2">
              একটি ফ্রি ভিডিও কলের মাধ্যমে আপনার বর্তমান ব্যবসার উপর ভিত্তি করে একটি কাস্টম গ্রোথ ব্লুপ্রিন্ট বা অ্যাকশন প্ল্যান বুঝে নিন।
            </p>
            <button
              id="services-general-cta-btn"
              onClick={() => {
                const el = document.getElementById('contact');
                if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' });
              }}
              className="mt-5 inline-flex items-center space-x-2 px-6 py-3 rounded-xl bg-cyan-400 text-slate-950 font-sans text-xs font-bold hover:bg-cyan-300 shadow-md shadow-cyan-400/10 active:scale-95 transition-all cursor-pointer"
            >
              <span>১-অন-১ পরামর্শ শিডিউল করুন</span>
              <Play className="w-3 h-3 fill-slate-950" />
            </button>
          </div>
        </motion.div>

      </div>

      {/* Interactive Detail Modal Drawer */}
      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Modal Backdrop overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedService(null)}
              className="absolute inset-0 bg-slate-950/85 backdrop-blur-sm"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 15 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 15 }}
              transition={{ type: 'spring', duration: 0.5 }}
              className="relative w-full max-w-lg bg-slate-900 border border-slate-850 rounded-3xl p-6 sm:p-8 shadow-2xl relative z-60 overflow-hidden text-left"
            >
              {/* Corner decorative light */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-cyan-400" />
              
              {/* Close Button */}
              <button
                id="modal-close-btn"
                onClick={() => setSelectedService(null)}
                className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-850 transition duration-150 cursor-pointer"
                aria-label="Close details"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Modal Body */}
              <div className="flex items-center space-x-3 mb-5 mt-2">
                <div className="p-3 rounded-xl bg-slate-950 border border-slate-850 shadow-inner">
                  {getServiceIcon(selectedService.iconName, 'w-6 h-6')}
                </div>
                <div>
                  <span className="font-mono text-[9px] uppercase tracking-wider font-semibold text-cyan-400">ক্যাম্পেইন ব্লুপ্রিন্ট</span>
                  <h3 className="font-sans text-xl font-extrabold text-white leading-tight">
                    {selectedService.title}
                  </h3>
                </div>
              </div>

              {/* Long Description and strategy focus */}
              <div className="space-y-5">
                <div>
                  <h4 className="font-sans text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5">কৌশলগত পর্যালোচনা</h4>
                  <p className="font-sans text-slate-300 text-sm leading-relaxed">
                    {selectedService.longDesc}
                  </p>
                </div>

                {/* Sub-features Checklist */}
                <div>
                  <h4 className="font-sans text-xs font-bold uppercase tracking-wider text-slate-500 mb-2.5">সেবাটিতে যা যা অন্তর্ভুক্ত থাকছে</h4>
                  <ul className="space-y-2 font-sans text-sm text-slate-200">
                    {selectedService.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start space-x-2.5">
                        <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <span className="leading-snug">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action footer inside Modal */}
              <div className="mt-8 pt-5 border-t border-slate-800/80 flex flex-col sm:flex-row items-center gap-3">
                <button
                  id="modal-select-service-btn"
                  onClick={() => selectServiceAndScroll(selectedService)}
                  className="w-full sm:flex-1 py-3.5 rounded-xl text-center bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-sans text-xs font-bold transition duration-200 cursor-pointer shadow-lg shadow-cyan-400/5 active:scale-95"
                >
                  এই ক্যাম্পেইন নিয়ে আলোচনা করুন
                </button>
                <button
                  id="modal-cancel-btn"
                  onClick={() => setSelectedService(null)}
                  className="w-full sm:w-auto px-5 py-3.5 rounded-xl text-center bg-slate-950 border border-slate-850 hover:bg-slate-900 text-slate-300 font-sans text-xs font-medium transition duration-200 cursor-pointer"
                >
                  বন্ধ করুন
                </button>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}

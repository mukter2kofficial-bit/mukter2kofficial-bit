import { useState, ChangeEvent, FormEvent } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MessageCircle, Linkedin, Facebook, Send, Shield, Sparkles, AlertCircle, CheckCircle2 } from 'lucide-react';
import { HERO_DATA, SERVICES_DATA } from '../data';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'seo',
    website: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setErrorMessage('');
    
    if (!formData.name || !formData.email || !formData.message) {
      setErrorMessage('দয়া করে সব প্রয়োজনীয় তথ্য প্রদান করুন।');
      return;
    }

    setIsSubmitting(true);

    // Simulate standard high-fidelity integration API delays
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      // Clean form fields
      setFormData({
        name: '',
        email: '',
        service: 'seo',
        website: '',
        message: '',
      });
    }, 1500);
  };

  const selectedServiceLabel = SERVICES_DATA.find((s) => s.id === formData.service)?.title || 'Custom Project';

  return (
    <section id="contact" className="relative py-24 bg-slate-950 overflow-hidden border-t border-slate-900 animate-fade-in text-left">
      {/* Visual neon background lines */}
      <div className="absolute top-[30%] left-[5%] w-96 h-96 rounded-full bg-cyan-500/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-[20%] right-[10%] w-96 h-96 rounded-full bg-blue-600/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center space-x-1.5 bg-cyan-500/10 border border-cyan-500/20 px-3 py-1 rounded-full mb-4">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span className="font-sans text-xs font-semibold text-cyan-300 tracking-wider uppercase">আপনার রেভিনিউ স্কেল করুন</span>
          </div>
          
          <h2 className="font-sans font-bold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight">
            চলুন একসাথে আপনার ব্যবসা বৃদ্ধি করি
          </h2>
          <p className="font-sans text-sm sm:text-base text-slate-400 mt-4 max-w-2xl leading-relaxed">
            পরিকল্পতাহীন বিজ্ঞাপন ও সাধারণ রিচ দিয়ে অর্থ নষ্ট করা বন্ধ করতে চান? আজই একটি বার্তা পাঠান, এবং চলুন একসাথে আপনার ব্যবসাকে পরবর্তী ধাপে নিয়ে যাই।
          </p>
          <div className="w-16 h-1 bg-cyan-400 mt-5 rounded-full" />
        </div>

        {/* Info & Form Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column (Brand info & quick contacts + Socials) */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Direct Quick Channels container */}
            <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/40 border border-slate-900 backdrop-blur-md space-y-6">
              <h3 className="font-sans text-lg font-bold text-slate-100">যোগাযোগের সরাসরি মাধ্যম</h3>
              <p className="font-sans text-xs text-slate-400 leading-normal">
                সরাসরি আমার সাথে যোগাযোগ করতে চান? হোয়াটসঅ্যাপ বা সরাসরি ইমেলের মাধ্যমে যোগাযোগ করুন।
              </p>

              <div className="space-y-4">
                {/* Whatsapp Contact */}
                <a
                  id="contact-wa-link"
                  href={HERO_DATA.socials.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center space-x-4 p-4 rounded-2xl bg-slate-950/80 border border-slate-850 hover:border-emerald-500/40 hover:bg-slate-900/30 transition duration-200 group block"
                >
                  <div className="p-3 bg-emerald-500/10 text-emerald-400 rounded-xl group-hover:scale-105 transition-transform shrink-0">
                    <MessageCircle className="w-5 h-5 text-emerald-400" />
                  </div>
                  <div className="text-left">
                    <span className="block font-sans text-[10px] text-slate-500 uppercase font-extrabold tracking-wide">ইনস্ট্যান্ট মেসেজিং</span>
                    <span className="block font-sans text-sm font-semibold text-white group-hover:text-emerald-400 transition-colors">হোয়াটসঅ্যাপে চ্যাট করুন</span>
                    <span className="block font-sans text-[11px] text-slate-400 mt-0.5">গড় রেসপন্স সময়: ১৫ মিনিটের কম</span>
                  </div>
                </a>

                {/* Email Contact */}
                <a
                  id="contact-email-link"
                  href={HERO_DATA.socials.email}
                  className="flex items-center space-x-4 p-4 rounded-2xl bg-slate-950/80 border border-slate-850 hover:border-cyan-500/40 hover:bg-slate-900/30 transition duration-200 group block"
                >
                  <div className="p-3 bg-cyan-500/10 text-cyan-400 rounded-xl group-hover:scale-105 transition-transform shrink-0">
                    <Mail className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div className="text-left">
                    <span className="block font-sans text-[10px] text-slate-500 uppercase font-extrabold tracking-wide">ব্যবসায়িক ইনবক্স</span>
                    <span className="block font-sans text-sm font-semibold text-white group-hover:text-cyan-400 transition-colors">mukter2k.official@gmail.com</span>
                    <span className="block font-sans text-[11px] text-slate-400 mt-0.5">২৪ ঘণ্টার মধ্যে কাস্টম অডিট পাঠানো হয়</span>
                  </div>
                </a>
              </div>
            </div>

            {/* Social Channels panel */}
            <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/40 border border-slate-900 backdrop-blur-md">
              <h3 className="font-sans text-base font-bold text-slate-200 mb-4">ব্যক্তিগত সোশ্যাল নেটওয়ার্ক</h3>
              
              <div className="grid grid-cols-2 gap-3.5">
                <a
                  id="contact-social-linkedin"
                  href={HERO_DATA.socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="p-4 rounded-2xl bg-slate-950/80 border border-slate-850 hover:border-blue-500/40 hover:text-blue-400 flex items-center justify-center space-x-2 font-sans text-xs font-semibold text-slate-300 transition"
                >
                  <Linkedin className="w-4 h-4 text-blue-400" />
                  <span>লিঙ্কডইন ফিড</span>
                </a>
                <a
                  id="contact-social-facebook"
                  href={HERO_DATA.socials.facebook}
                  target="_blank"
                  rel="noreferrer"
                  className="p-4 rounded-2xl bg-slate-950/80 border border-slate-850 hover:border-blue-600/45 hover:text-blue-500 flex items-center justify-center space-x-2 font-sans text-xs font-semibold text-slate-300 transition"
                >
                  <Facebook className="w-4 h-4 text-blue-500" />
                  <span>ফেসবুক প্রোফাইল</span>
                </a>
              </div>
            </div>

            {/* Shield and Privacy disclaimer */}
            <div className="flex items-start space-x-3 opacity-60 pl-2">
              <Shield className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
              <p className="font-sans text-[11px] text-slate-400 leading-relaxed">
                আপনার ক্যাম্পেইন ও ব্যবসার তথ্য সম্পূর্ণ গোপনীয় থাকবে। আমি কোনো অডিট রিপোর্ট বা ক্লায়েন্ট তথ্য কারো সাথে শেয়ার করি না।
              </p>
            </div>

          </div>

          {/* Right Column (High Converting Form enclosure) */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-10 rounded-3xl bg-slate-900/35 border border-slate-900 shadow-2xl backdrop-blur-md relative relative-overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-cyan-500" />

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-10 px-4 space-y-6"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto shadow-lg shadow-emerald-500/10 animate-bounce">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="font-sans text-2xl font-black text-white">বার্তা সফলভাবে পাঠানো হয়েছে!</h3>
                    <p className="font-sans text-sm text-slate-300 mt-2.5 max-w-md mx-auto leading-relaxed">
                      তথ্য দেওয়ার জন্য আপনাকে ধন্যবাদ। মোঃ মুক্তের আহমেদ আপনার ওয়েবসাইট এবং বিবরণ পর্যালোচনা করে আগামী <span className="text-cyan-400 font-bold font-mono">২ ঘণ্টার</span> মধ্যে আপনার ইমেলে যোগাযোগ করবেন।
                    </p>
                  </div>
                  
                  {/* Detailed receipt mockup */}
                  <div className="p-4 rounded-2xl bg-slate-950 text-left border border-slate-900 text-xs sm:text-sm font-sans space-y-2.5 max-w-sm mx-auto">
                    <div className="flex justify-between border-b border-slate-900 pb-1.5 font-mono text-[9px] font-extrabold uppercase text-slate-500">
                      <span>মেসেজ ডিটেইলস</span>
                      <span>নিশ্চিত সংযোগ</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">অনুরোধকৃত স্ট্র্যাটেজি:</span>
                      <span className="text-white font-semibold">{selectedServiceLabel}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">ডায়াগনস্টিক স্ট্যাটাস:</span>
                      <span className="text-cyan-400 font-bold font-mono">সম্পন্ন হয়েছে</span>
                    </div>
                  </div>

                  <button
                    id="contact-receipt-close-btn"
                    onClick={() => setIsSubmitted(false)}
                    className="px-6 py-2.5 rounded-xl bg-slate-950 hover:bg-slate-900 border border-slate-855 text-slate-300 font-sans text-xs font-semibold cursor-pointer transition duration-150 active:scale-95"
                  >
                    আরেকটি বার্তা পাঠান
                  </button>
                </motion.div>
              ) : (
                <form id="contact-marketing-form" onSubmit={handleSubmit} className="space-y-5">
                  <div className="text-left mb-6">
                    <h3 className="font-sans text-xl font-bold text-white">১০০% ফ্রি ক্যাম্পেইন অডিটের জন্য অনুরোধ করুন</h3>
                    <p className="font-sans text-xs text-slate-400 mt-1">নিচের ফর্মটি পূরণ করুন এবং আপনার বর্তমান ডিজিটাল ক্যাম্পেইন পর্যালোচনা শুরু করুন।</p>
                  </div>

                  {errorMessage && (
                    <div className="p-3.5 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-400 font-sans text-xs font-semibold flex items-center space-x-2">
                      <AlertCircle className="w-4 h-4 text-rose-400 shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name field */}
                    <div className="text-left">
                      <label htmlFor="contact-name" className="block font-sans text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                        পূর্ণ নাম <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        id="contact-name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="যেমন: মোঃ সাকিব রহমান"
                        required
                        className="w-full px-4 py-3 text-sm rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition"
                      />
                    </div>

                    {/* Email field */}
                    <div className="text-left">
                      <label htmlFor="contact-email" className="block font-sans text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                        পেশাদার ইমেল <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="contact-email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="যেমন: sakib@company.com"
                        required
                        className="w-full px-4 py-3 text-sm rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Services selection */}
                    <div className="text-left">
                      <label htmlFor="contact-service" className="block font-sans text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                        টার্গেট ক্যাম্পেইন সার্ভিস
                      </label>
                      <div className="relative">
                        <select
                          name="service"
                          id="contact-service"
                          value={formData.service}
                          onChange={handleChange}
                          className="w-full px-4 py-3 text-sm rounded-xl bg-slate-950 border border-slate-800 text-white focus:outline-none focus:border-cyan-400 transition cursor-pointer appearance-none"
                        >
                          {SERVICES_DATA.map((srv) => (
                            <option key={srv.id} value={srv.id}>
                              {srv.title}
                            </option>
                          ))}
                          <option value="custom">অন্যান্য ক্যাম্পেইন / কাস্টম কাজ</option>
                        </select>
                        <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-slate-400">
                          ▼
                        </div>
                      </div>
                    </div>

                    {/* Website URL */}
                    <div className="text-left">
                      <label htmlFor="contact-website" className="block font-sans text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                        বর্তমান ওয়েবসাইট / স্টোরের লিংক
                      </label>
                      <input
                        type="url"
                        name="website"
                        id="contact-website"
                        value={formData.website}
                        onChange={handleChange}
                        placeholder="https://yourstore.com"
                        className="w-full px-4 py-3 text-sm rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition"
                      />
                    </div>
                  </div>

                  {/* Message field */}
                  <div className="text-left">
                    <label htmlFor="contact-message" className="block font-sans text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                      আপনার marketing সমস্যা বা scaling লক্ষ্যের সংক্ষিপ্ত বর্ণনা দিন <span className="text-rose-500">*</span>
                    </label>
                    <textarea
                      name="message"
                      id="contact-message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="যেমন: বর্তমানে বিজ্ঞাপনের খরচ বেশি হচ্ছে, ফানেল অপ্টিমাইজ বা চমৎকার কীওয়ার্ড ম্যাপিং সেটআপ দরকার..."
                      required
                      rows={4}
                      className="w-full px-4 py-3 text-sm rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      id="contact-submit-btn"
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 rounded-xl bg-gradient-to-r from-blue-600 via-blue-600 to-cyan-500 text-white font-sans text-xs sm:text-sm font-bold shadow-lg shadow-blue-500/10 hover:opacity-95 hover:shadow-cyan-400/20 active:scale-95 transition-all text-center flex items-center justify-center space-x-2 cursor-pointer"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4.5 h-4.5 rounded-full border-2 border-slate-300 border-t-white animate-spin" />
                          <span>বার্তা পাঠানো হচ্ছে...</span>
                        </>
                      ) : (
                        <>
                          <span>কন্টাক্ট মেসেজ পাঠান</span>
                          <Send className="w-4 h-4 ml-1" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

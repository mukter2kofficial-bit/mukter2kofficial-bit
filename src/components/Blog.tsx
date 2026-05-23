import { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BookOpen, Calendar, Clock, ArrowRight, X, Sparkles, Send } from 'lucide-react';
import { BLOG_DATA } from '../data';
import { BlogPostItem } from '../types';

export default function Blog() {
  const [selectedPost, setSelectedPost] = useState<BlogPostItem | null>(null);
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubmitted, setNewsletterSubmitted] = useState(false);

  const handleNewsletterSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    
    // Animate a success state trigger
    setNewsletterSubmitted(true);
    setNewsletterEmail('');
    
    // Reset notification soon
    setTimeout(() => {
      setNewsletterSubmitted(false);
    }, 4000);
  };

  return (
    <section id="blog" className="relative py-24 bg-slate-950 overflow-hidden border-t border-slate-900 animate-fade-in">
      {/* Background visual elements */}
      <div className="absolute top-[30%] right-[10%] w-72 h-72 rounded-full bg-blue-600/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-[20%] w-[500px] h-[300px] rounded-full bg-cyan-500/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-1.5 bg-blue-500/10 border border-blue-500/20 px-3 py-1 rounded-full mb-4">
            <BookOpen className="w-3.5 h-3.5 text-blue-400" />
            <span className="font-sans text-xs font-semibold text-blue-300 tracking-wider uppercase">মার্কেটিং জ্ঞানভাণ্ডার</span>
          </div>
          
          <h2 className="font-sans font-bold text-3xl sm:text-4xl text-white tracking-tight">
            সর্বশেষ মার্কেটিং ও প্রবৃদ্ধি বিশ্লেষণ
          </h2>
          <p className="font-sans text-sm text-slate-400 mt-3 max-w-xl mx-auto leading-relaxed">
            আমি ট্রাফিক জেনারেশন, কনভার্সন অপ্টিমাইজেশন এবং ডিরেক্ট-রেসপন্স পদ্ধতির গভীর কৌশল ও নিখুঁত পরামর্শ লিখে থাকি। প্লেবুকটি পড়ুন।
          </p>
          <div className="w-12 h-1 bg-blue-600 mx-auto mt-4 rounded-full" />
        </div>

        {/* Blog Post Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BLOG_DATA.map((post, idx) => (
            <motion.article
              key={post.id}
              id={`blog-card-${post.id}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-20px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group rounded-3xl bg-slate-900/40 border border-slate-900 overflow-hidden flex flex-col hover:border-slate-800 hover:bg-slate-900/85 transition-all duration-300 text-left relative hover:-translate-y-1"
            >
              {/* Featured Image Frame */}
              <div className="w-full aspect-video rounded-t-3xl overflow-hidden relative bg-slate-950 border-b border-slate-900">
                <img
                  src={post.imageUrl}
                  alt={post.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-104 transition duration-500"
                />
                
                {/* Category Floating Tag */}
                <span className="absolute top-4 left-4 font-mono text-[9px] font-bold text-white bg-blue-600 px-3 py-1 rounded-full uppercase tracking-wider shadow-md">
                  {post.category}
                </span>
              </div>

              {/* Body elements */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  
                  {/* Date and Reading Meter indicators */}
                  <div className="flex items-center space-x-4 font-sans text-xs text-slate-500 mb-3.5">
                    <span className="flex items-center space-x-1">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{post.date}</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{post.readTime}</span>
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-sans font-bold text-base sm:text-lg text-white group-hover:text-cyan-300 transition-colors leading-snug">
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="font-sans text-slate-400 text-xs sm:text-sm mt-3 leading-relaxed line-clamp-2">
                    {post.excerpt}
                  </p>

                </div>

                {/* Read more action triggers */}
                <div className="mt-6 pt-4 border-t border-slate-900 flex items-center justify-between">
                  <div className="flex flex-wrap gap-1.5">
                    {post.tags.slice(0, 2).map((tag) => (
                      <span key={tag} className="font-mono text-[8px] text-slate-500 font-semibold bg-slate-950 px-2 py-0.5 rounded border border-slate-900">
                        #{tag}
                      </span>
                    ))}
                  </div>
                  
                  <button
                    id={`blog-read-btn-${post.id}`}
                    onClick={() => setSelectedPost(post)}
                    className="inline-flex items-center space-x-1 text-xs font-sans font-extrabold text-cyan-400 group-hover:text-cyan-300 transition-colors cursor-pointer"
                  >
                    <span>সম্পূর্ণ গাইডটি পড়ুন</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </button>
                </div>

              </div>

            </motion.article>
          ))}
        </div>

        {/* Professional Newsletter capture embedded under blog */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-16 p-8 sm:p-10 rounded-3xl bg-slate-900/30 border border-slate-900 max-w-4xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 relative overflow-hidden backdrop-blur-md"
        >
          {/* Accent decoration */}
          <div className="absolute -top-12 -right-12 w-40 h-40 bg-blue-600/10 rounded-full blur-2xl pointer-events-none" />

          <div className="text-left max-w-md">
            <span className="inline-flex items-center space-x-1 text-xs font-semibold text-cyan-400 bg-cyan-400/10 px-2 rounded-md mb-2">
              <Sparkles className="w-3 h-3 text-cyan-400" />
              <span>ফ্রি মার্কেটিং প্লেবুক</span>
            </span>
            <h3 className="font-sans text-lg font-bold text-white">মুক্তেরের গ্রোথ নিউজলেটারে যোগ দিন</h3>
            <p className="font-sans text-sm text-slate-400 mt-1.5 leading-relaxed">
              প্রতি দুই সপ্তাহে আমি বাস্তবসম্মত মার্কেটিং ডায়াগনস্টিকস, কাস্টম পিক্সেল সেটআপ এবং কেস স্টাডি বিশ্লেষণ সরাসরি ইমেলে পাঠাই। কোনো স্প্যাম নেই, কেবল কার্যকর ডাটা।
            </p>
          </div>

          <div className="w-full lg:w-auto min-w-[300px]">
            {newsletterSubmitted ? (
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold text-center font-sans tracking-wide"
              >
                ✓ সফল হয়েছে! আমাদের গ্রোথ নিউজলেটারে আপনাকে স্বাগতম।
              </motion.div>
            ) : (
              <form onSubmit={handleNewsletterSubmit} className="flex gap-2 w-full">
                <input
                  type="email"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="আপনার পেশাদার ইমেল দিন"
                  required
                  className="flex-1 px-4 py-3 text-sm rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition"
                />
                <button
                  id="newsletter-submit-btn"
                  type="submit"
                  className="px-5 py-3 rounded-xl bg-cyan-400 text-slate-950 hover:bg-cyan-300 font-sans text-xs font-bold transition flex items-center space-x-1 shrink-0 cursor-pointer shadow-md active:scale-95"
                >
                  <span>সাবস্ক্রাইব করুন</span>
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
            )}
          </div>
        </motion.div>

      </div>

      {/* Blog Article Full Reader View Overlaid Modal */}
      <AnimatePresence>
        {selectedPost && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedPost(null)}
              className="absolute inset-0 bg-slate-950/85 backdrop-blur-sm"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 15 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 15 }}
              transition={{ type: 'spring', duration: 0.5 }}
              className="relative w-full max-w-2xl bg-slate-900 border border-slate-850 rounded-3xl p-6 sm:p-8 shadow-2xl z-60 overflow-hidden text-left flex flex-col max-h-[90vh]"
            >
              {/* Top Accent line */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-cyan-400" />

              {/* Close Button */}
              <button
                id="blog-modal-close-btn"
                onClick={() => setSelectedPost(null)}
                className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-850 transition duration-155 cursor-pointer"
                aria-label="Close article"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Modal Body (Scrollable article) */}
              <div className="overflow-y-auto flex-1 pr-1.5 mt-4 scrollbar-thin">
                
                {/* Visual Banner */}
                <div className="w-full aspect-video rounded-2xl overflow-hidden relative mb-5 bg-slate-950 border border-slate-800">
                  <img
                    src={selectedPost.imageUrl}
                    alt={selectedPost.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute bottom-4 left-4 font-mono text-[9px] font-bold text-white bg-blue-600 px-3 py-1 rounded-full uppercase tracking-wider">
                    {selectedPost.category}
                  </span>
                </div>

                {/* Article Info indicators */}
                <div className="flex items-center space-x-4 font-sans text-xs text-slate-500 mb-2">
                  <span className="flex items-center space-x-1">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{selectedPost.date}</span>
                  </span>
                  <span className="flex items-center space-x-1">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{selectedPost.readTime}</span>
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-sans text-xl sm:text-2xl font-black text-white leading-tight mb-4">
                  {selectedPost.title}
                </h3>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {selectedPost.tags.map((tag) => (
                    <span key={tag} className="font-mono text-[9px] text-cyan-400 font-bold bg-cyan-400/5 px-2.5 py-0.5 border border-cyan-400/10 rounded-full">
                      #{tag}
                    </span>
                  ))}
                </div>

                {/* Article Content - rendered with clean styling */}
                <div className="font-sans text-slate-300 text-sm sm:text-base leading-relaxed space-y-4 pt-4 border-t border-slate-850">
                  <p className="font-semibold text-white text-base">
                    {selectedPost.excerpt}
                  </p>
                  <p>
                    {selectedPost.content}
                  </p>
                  <p className="text-slate-400 text-xs italic mt-8 font-mono">
                    প্রবন্ধটি মোঃ মুক্তের আহমেদ (ডিজিটাল মার্কেটার এবং গ্রোথ স্পেশালিস্ট) কর্তৃক লিখিত ও অনুমোদিত। প্রকাশিত মে ২০২৬।
                  </p>
                </div>

              </div>

              {/* Footer */}
               <div className="mt-8 pt-5 border-t border-slate-850 flex flex-col sm:flex-row items-center justify-between gap-4">
                <span className="font-sans text-xs text-slate-400 hidden sm:inline">এই ফ্রেমওয়ার্ক আপনার ব্যবসায় বাস্তবায়ন করতে চান? চলুন কথা বলি।</span>
                <div className="flex items-center gap-2.5 w-full sm:w-auto">
                  <button
                    id="blog-modal-cta-btn"
                    onClick={() => {
                      setSelectedPost(null);
                      const el = document.getElementById('contact');
                      if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' });
                    }}
                    className="w-full sm:w-auto px-6 py-3.5 rounded-xl text-center bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-sans text-xs font-bold transition duration-200 cursor-pointer shadow-lg active:scale-95 shrink-0"
                  >
                    এই বিষয়ে পরামর্শ নিন
                  </button>
                  <button
                    id="blog-modal-cancel-btn"
                    onClick={() => setSelectedPost(null)}
                    className="w-full sm:w-auto px-5 py-3.5 rounded-xl text-center bg-slate-950 border border-slate-850 hover:bg-slate-900 text-slate-300 font-sans text-xs font-medium transition duration-200 cursor-pointer"
                  >
                    বন্ধ করুন
                  </button>
                </div>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}

import { motion } from 'motion/react';
import { Linkedin, Facebook, MessageCircle, Mail, Download, ArrowRight, ShieldCheck, HelpCircle, TrendingUp } from 'lucide-react';
import { HERO_DATA, IMAGES } from '../data';

export default function Hero() {
  const scrollToId = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({
        top: el.offsetTop - 80,
        behavior: 'smooth',
      });
    }
  };

  const handleDownloadCV = () => {
    // Generate an elegant custom feedback notification triggered in the UI
    const toast = document.createElement('div');
    toast.className = 'fixed bottom-5 right-5 z-50 bg-slate-900 border border-emerald-500 text-white px-5 py-3 rounded-xl shadow-2xl flex items-center space-x-3 text-sm font-sans font-medium transition-all duration-300 transform translate-y-2 opacity-0';
    toast.innerHTML = `
      <svg class="w-5 h-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
      <span>Md Mukter Ahmed's Growth CV Downloaded Successfully!</span>
    `;
    document.body.appendChild(toast);
    
    // Animate in
    setTimeout(() => {
      toast.classList.remove('opacity-0', 'translate-y-2');
    }, 100);

    // Simulated file trigger
    const link = document.createElement('a');
    link.href = '#';
    link.setAttribute('download', 'Md_Mukter_Ahmed_Growth_CV.pdf');
    document.body.appendChild(link);
    // Silent download mock
    
    // Animate out and cleanup
    setTimeout(() => {
      toast.classList.add('opacity-0', 'translate-y-2');
      setTimeout(() => {
        document.body.removeChild(toast);
      }, 300);
    }, 3500);
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen pt-28 pb-16 bg-slate-950 flex items-center justify-center overflow-hidden"
    >
      {/* Visual Ambient Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] opacity-[0.22]" />

      {/* Cyber Glowing Orbs */}
      <div className="absolute top-[20%] left-[10%] w-96 h-96 rounded-full bg-blue-600/15 blur-3xl" />
      <div className="absolute bottom-[20%] right-[10%] w-96 h-96 rounded-full bg-cyan-500/10 blur-3xl" />
      <div className="absolute top-[35%] right-[25%] w-80 h-80 rounded-full bg-purple-600/10 blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Hero Copy Info */}
          <div className="lg:col-span-7 flex flex-col justify-center items-start space-y-6 text-left">
            
            {/* Tag Badges */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-900/42 to-cyan-900/42 border border-blue-500/25 px-4 py-1.5 rounded-full backdrop-blur-sm self-start"
            >
              <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span className="font-sans text-xs font-semibold text-cyan-300 tracking-wide uppercase">
                Available for New Contracts
              </span>
            </motion.div>

            {/* Headline */}
            <h1 id="hero-title" className="font-sans font-bold text-4xl sm:text-5xl lg:text-6xl text-white leading-tight tracking-tight select-none">
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="block text-slate-400 text-lg sm:text-xl md:text-2xl font-semibold uppercase tracking-widest mb-2 font-mono text-cyan-400"
              >
                Personal Brand
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="block bg-gradient-to-r from-white via-slate-100 to-slate-400 bg-clip-text text-transparent"
              >
                {HERO_DATA.name}
              </motion.span>
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="block text-xl sm:text-2xl lg:text-3.5xl font-medium bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent mt-2"
              >
                {HERO_DATA.title}
              </motion.span>
            </h1>

            {/* Paragraph Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="font-sans text-slate-300 text-base sm:text-lg max-w-2xl leading-relaxed"
            >
              {HERO_DATA.subtext}
            </motion.p>

            {/* CTA Buttons */}
            <motion.nav
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              aria-label="Hero navigation"
              className="w-full flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-3"
            >
              <button
                id="hero-hire-btn"
                onClick={() => scrollToId('contact')}
                className="flex items-center justify-center px-8 py-4 rounded-xl font-sans text-sm font-semibold text-white bg-gradient-to-r from-blue-600 via-blue-600 to-cyan-500 hover:opacity-95 transition-all duration-300 shadow-lg shadow-blue-500/20 active:scale-95 cursor-pointer text-center group"
              >
                <span>Hire Me Now</span>
                <ArrowRight className="ml-2 w-4.5 h-4.5 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                id="hero-portfolio-btn"
                onClick={() => scrollToId('portfolio')}
                className="flex items-center justify-center px-8 py-4 rounded-xl font-sans text-sm font-semibold text-slate-200 bg-slate-900 border border-slate-800 hover:bg-slate-850 hover:text-white transition-all duration-300 active:scale-95 cursor-pointer text-center"
              >
                View Case Studies
              </button>

              <button
                id="hero-cv-btn"
                onClick={handleDownloadCV}
                className="flex items-center justify-center px-6 py-4 rounded-xl font-sans text-sm font-medium text-slate-400 hover:text-cyan-400 bg-transparent hover:bg-slate-900/40 border border-slate-800/10 hover:border-slate-800 transition-all duration-300 cursor-pointer text-center"
              >
                <Download className="mr-2 w-4 h-4" />
                <span>Get CV</span>
              </button>
            </motion.nav>

            {/* Social Icons Grid */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex items-center space-x-4 pt-4 text-slate-400"
            >
              <span className="font-sans text-xs uppercase tracking-wider font-semibold text-slate-500">Connect:</span>
              
              <a
                id="hero-social-linkedin"
                href={HERO_DATA.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-blue-500 hover:border-blue-500/40 transition-all duration-300 hover:-translate-y-1 block shadow-sm"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-5 h-5" />
              </a>

              <a
                id="hero-social-facebook"
                href={HERO_DATA.socials.facebook}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-blue-600 hover:border-blue-600/40 transition-all duration-300 hover:-translate-y-1 block shadow-sm"
                aria-label="Facebook Profile"
              >
                <Facebook className="w-5 h-5" />
              </a>

              <a
                id="hero-social-whatsapp"
                href={HERO_DATA.socials.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-emerald-500 hover:border-emerald-500/40 transition-all duration-300 hover:-translate-y-1 block shadow-sm"
                aria-label="WhatsApp Chat"
              >
                <MessageCircle className="w-5 h-5" />
              </a>

              <a
                id="hero-social-email"
                href={HERO_DATA.socials.email}
                className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-400/40 transition-all duration-300 hover:-translate-y-1 block shadow-sm"
                aria-label="Email Inbox"
              >
                <Mail className="w-5 h-5" />
              </a>
            </motion.div>
          </div>

          {/* Hero Image Side */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            
            {/* Visual Halo behind avatar */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, ease: 'easeOut' }}
              className="absolute w-[80%] aspect-square rounded-full bg-gradient-to-tr from-blue-600/20 via-cyan-500/20 to-purple-500/20 animate-spin-slow opacity-80 blur-xl"
            />

            {/* Complex Image Glass Frame */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative w-full max-w-[360px] md:max-w-[400px] aspect-square rounded-[2rem] border border-slate-800 bg-slate-950/40 p-3 shadow-2xl overflow-visible backdrop-blur-md group"
            >
              <div className="w-full h-full rounded-[1.6rem] overflow-hidden bg-slate-900 border border-slate-800/80">
                <img
                  src={IMAGES.portrait}
                  alt="Md Mukter Ahmed - Professional Portrait"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover grayscale-[15%] group-hover:scale-103 group-hover:grayscale-0 transition-all duration-700"
                />
              </div>

              {/* Floating UI Badges - Widget 1 */}
              <motion.div
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="absolute -top-4 -left-6 z-20 bg-slate-900/90 border border-slate-800 px-4 py-2.5 rounded-2xl shadow-xl flex items-center space-x-2 backdrop-blur-md"
              >
                <div className="p-1 rounded-lg bg-emerald-500/10">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                </div>
                <div className="text-left">
                  <span className="block font-sans text-xs text-slate-400 leading-none">Meta ROAS</span>
                  <span className="font-sans font-extrabold text-sm text-white">4.5x Certified</span>
                </div>
              </motion.div>

              {/* Floating UI Badges - Widget 2 */}
              <motion.div
                animate={{
                  y: [0, 8, 0],
                }}
                transition={{
                  duration: 4.5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="absolute -bottom-4 -right-6 z-20 bg-slate-900/90 border border-slate-800 px-4 py-2.5 rounded-2xl shadow-xl flex items-center space-x-2.5 backdrop-blur-md"
              >
                <div className="p-1 rounded-lg bg-blue-500/10">
                  <TrendingUp className="w-4 h-4 text-blue-400" />
                </div>
                <div className="text-left">
                  <span className="block font-sans text-xs text-slate-400 leading-none">Organic SEO</span>
                  <span className="font-sans font-extrabold text-sm text-white">+230% Lift</span>
                </div>
              </motion.div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}

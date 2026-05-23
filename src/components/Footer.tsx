import { TrendingUp, Linkedin, Facebook, MessageCircle, Mail, ArrowUp } from 'lucide-react';
import { HERO_DATA } from '../data';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const scrollToId = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({
        top: el.offsetTop - 80,
        behavior: 'smooth',
      });
    }
  };

  const quickLinks = [
    { name: 'About Biography', target: 'about' },
    { name: 'Core Capabilities', target: 'skills' },
    { name: 'Marketing Services', target: 'services' },
    { name: 'Battle Case Studies', target: 'portfolio' },
    { name: 'Optimization Process', target: 'process' },
    { name: 'Clients Testimonials', target: 'testimonials' },
    { name: 'Knowledge Hub', target: 'blog' },
  ];

  return (
    <footer
      id="main-footer"
      className="relative bg-slate-950 border-t border-slate-900 pt-16 pb-8 text-left overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Columns Grid SPLIT */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 border-b border-slate-900 pb-12 mb-12">
          
          {/* Column 1: Brand & Logo Statement (Cols 5) */}
          <div className="lg:col-span-5 space-y-5">
            <button
              id="footer-logo-btn"
              onClick={scrollToTop}
              className="flex items-center space-x-2 text-white font-sans font-extrabold text-xl tracking-tight hover:opacity-90 group text-left cursor-pointer"
            >
              <div className="p-1.5 rounded-lg bg-blue-600 group-hover:bg-cyan-500 transition-colors">
                <TrendingUp className="w-5 h-5 text-white" />
              </div>
              <span>Md Mukter Ahmed</span>
            </button>
            <p className="font-sans text-sm text-slate-400 max-w-sm leading-relaxed">
              Helping Businesses Grow Through Data-Driven Digital Marketing Strategies. No vanity metrics. Just repeatable, scalable results.
            </p>

            {/* Social linkages in footer */}
            <div className="flex items-center space-x-3.5 text-slate-400 pt-1">
              <a
                id="footer-social-linkedin"
                href={HERO_DATA.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-slate-900 border border-slate-850 text-slate-400 hover:text-blue-500 transition shadow"
                aria-label="LinkedIn Profile Reference"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                id="footer-social-facebook"
                href={HERO_DATA.socials.facebook}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-slate-900 border border-slate-850 text-slate-400 hover:text-blue-600 transition shadow"
                aria-label="Facebook Profile Reference"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                id="footer-social-whatsapp"
                href={HERO_DATA.socials.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-slate-900 border border-slate-850 text-slate-400 hover:text-emerald-500 transition shadow"
                aria-label="WhatsApp Channel Reference"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a
                id="footer-social-email"
                href={HERO_DATA.socials.email}
                className="p-2.5 rounded-xl bg-slate-900 border border-slate-850 text-slate-400 hover:text-cyan-400 transition shadow"
                aria-label="Email Inbox Reference"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links list (Cols 4) */}
          <div className="lg:col-span-4 lg:pl-10">
            <h3 className="font-mono text-xs font-bold text-white uppercase tracking-wider mb-4">Navigational Blueprint</h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-2.5 gap-x-4">
              {quickLinks.map((link) => (
                <li key={link.target}>
                  <button
                    id={`footer-link-${link.target}`}
                    onClick={() => scrollToId(link.target)}
                    className="font-sans text-xs sm:text-sm text-slate-400 hover:text-cyan-400 transition duration-150 text-left block cursor-pointer"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Conversion support trigger (Cols 3) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="font-mono text-xs font-bold text-white uppercase tracking-wider mb-2">Campaign Action Block</h3>
            <p className="font-sans text-xs text-slate-400 leading-relaxed">
              Have active ad budgets and want to evaluate custom ROAS structures immediately? Take the diagnostic audit.
            </p>
            <button
              id="footer-campaign-cta-btn"
              onClick={() => scrollToId('contact')}
              className="w-full py-3 rounded-xl bg-slate-900 hover:bg-slate-850 border border-slate-800 text-cyan-400 font-sans text-xs font-bold transition duration-150 cursor-pointer shadow-md shadow-cyan-400/5 text-center block active:scale-95"
            >
              Consult 1-on-1 Now
            </button>
          </div>

        </div>

        {/* Dynamic lower bar copyright section */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-sans text-slate-500 font-medium">
          <p>© 2026 Md Mukter Ahmed. All Campaign strategies reserved globally. Privacy Compliant.</p>
          
          <div className="flex items-center space-x-4">
            <span className="text-[10px] font-mono border border-slate-850 bg-slate-900 px-2 py-0.5 rounded text-cyan-400">GA4 API Sync Status: LIVE</span>
            <button
              id="footer-back-to-top"
              onClick={scrollToTop}
              className="p-1.5 rounded bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white transition duration-150 border border-slate-850 cursor-pointer"
              aria-label="Back to Top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}

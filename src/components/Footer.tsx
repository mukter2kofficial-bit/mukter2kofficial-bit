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
    { name: 'আত্মজীবনী', target: 'about' },
    { name: 'দক্ষতা ও প্রযুক্তি', target: 'skills' },
    { name: 'মার্কেটিং সার্ভিসসমূহ', target: 'services' },
    { name: 'কেস স্টাডিজ', target: 'portfolio' },
    { name: 'গ্রোথ কাজের পদ্ধতি', target: 'process' },
    { name: 'ক্লায়েন্টদের মতামত', target: 'testimonials' },
    { name: 'মার্কেটিং জ্ঞানভাণ্ডার', target: 'blog' },
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
              ডাটা-চালিত ডিজিটাল মার্কেটিং স্ট্র্যাটেজির মাধ্যমে ব্যবসা বৃদ্ধিতে সহায়তা করা। কোনো ফেক রিচ নয়, বরং লাভজনক ও নিশ্চিত প্রবৃদ্ধি অর্জন করাই আমাদের লক্ষ্য।
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
            <h3 className="font-mono text-xs font-bold text-white uppercase tracking-wider mb-4">ওয়েবসাইট ডিরেক্টরি</h3>
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
            <h3 className="font-mono text-xs font-bold text-white uppercase tracking-wider mb-2">ক্যাম্পেইন অ্যাকশন ব্লক</h3>
            <p className="font-sans text-xs text-slate-400 leading-relaxed">
              আপনার কি নির্দিষ্ট বাজেট আছে এবং লাভজনক ROAS ফ্রেমওয়ার্ক মূল্যায়ন করতে চান? আজই যোগাযোগ করুন।
            </p>
            <button
              id="footer-campaign-cta-btn"
              onClick={() => scrollToId('contact')}
              className="w-full py-3 rounded-xl bg-slate-900 hover:bg-slate-850 border border-slate-800 text-cyan-400 font-sans text-xs font-bold transition duration-150 cursor-pointer shadow-md shadow-cyan-400/5 text-center block active:scale-95"
            >
              ১-অন-১ ফ্রি পরামর্শ নিন
            </button>
          </div>

        </div>

        {/* Dynamic lower bar copyright section */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-sans text-slate-500 font-medium">
          <p>© ২০২৬ মোঃ মুক্তের আহমেদ। সর্বস্বত্ব সংরক্ষিত।</p>
          
          <div className="flex items-center space-x-4">
            <span className="text-[10px] font-mono border border-slate-850 bg-slate-900 px-2 py-0.5 rounded text-cyan-400">GA4 API সংযোগ: চালু</span>
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

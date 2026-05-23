import { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { Award, Briefcase, Smile, PiggyBank } from 'lucide-react';
import { STATS_DATA } from '../data';

// Standard icon selector helper
function getStatsIcon(id: string) {
  switch (id) {
    case 'projects':
      return <Briefcase className="w-6 h-6 text-blue-400" />;
    case 'clients':
      return <Smile className="w-6 h-6 text-cyan-400" />;
    case 'experience':
      return <Award className="w-6 h-6 text-indigo-400" />;
    case 'adspend':
      return <PiggyBank className="w-6 h-6 text-purple-400" />;
    default:
      return <Award className="w-6 h-6 text-slate-400" />;
  }
}

interface CounterProps {
  value: number;
}

function Counter({ value }: CounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 1500; // ms
      const increment = Math.ceil(value / (duration / 30));
      const timer = setInterval(() => {
        start += increment;
        if (start >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(start);
        }
      }, 30);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return <span ref={ref}>{count}</span>;
}

export default function Stats() {
  return (
    <section id="stats" className="relative py-12 bg-slate-950 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Container Glass Border Box */}
        <div id="stats-glass-container" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6 sm:p-8 rounded-3xl bg-slate-900/35 border border-slate-800/80 backdrop-blur-md shadow-2xl relative">
          
          {/* Subtle Ambient Decorative Spark */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
          
          {STATS_DATA.map((stat, idx) => (
            <motion.div
              key={stat.id}
              id={`stat-card-${stat.id}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: idx * 0.12 }}
              className="group flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-4 p-5 rounded-2xl bg-slate-950/40 border border-slate-900 hover:border-slate-800/80 hover:bg-slate-900/30 transition-all duration-300 hover:-translate-y-1 relative overflow-hidden"
            >
              {/* Highlight Backdrop */}
              <div className="absolute inset-0 bg-radial from-blue-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Icon Container */}
              <div className="p-3.5 rounded-2xl bg-slate-900/80 border border-slate-800/80 group-hover:border-slate-700/60 transition-colors shadow-inner flex items-center justify-center">
                {getStatsIcon(stat.id)}
              </div>

              {/* Text Segment */}
              <div className="flex-1 text-left">
                <div className="flex items-baseline font-sans">
                  <span className="text-3xl font-extrabold text-white tracking-tight">
                    {stat.id === 'adspend' ? '$' : ''}
                    <Counter value={stat.value} />
                    {stat.suffix}
                  </span>
                </div>
                <h3 className="font-sans text-sm font-semibold text-slate-100 mt-1">
                  {stat.label}
                </h3>
                <p className="font-sans text-xs text-slate-400 mt-0.5 leading-tight">
                  {stat.subtext}
                </p>
              </div>
            </motion.div>
          ))}

        </div>

        {/* Global Clients banner */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-wrap items-center justify-center gap-x-12 gap-y-4 mt-12 opacity-40 hover:opacity-75 transition-opacity"
        >
          <span className="font-mono text-xs tracking-wider text-slate-500 uppercase">Trusted by Growth Partners Across Areas:</span>
          <span className="font-sans text-sm font-bold text-slate-400">E-COMMERCE Brands</span>
          <span className="font-sans text-sm font-bold text-slate-400">B2B SaaS</span>
          <span className="font-sans text-sm font-bold text-slate-400">LOCAL LEAD GEN</span>
          <span className="font-sans text-sm font-bold text-slate-400">FINTECH SERVICES</span>
        </motion.div>

      </div>
    </section>
  );
}

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Sparkles, Send, Bot, Terminal, CheckCircle2, MessageSquare, ArrowRight, ArrowUpRight } from 'lucide-react';

export default function AIInterviewHub() {
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState('');
  const [status, setStatus] = useState<idle | loading | success | error>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  type idle = 'idle';
  type loading = 'loading';
  type success = 'success';
  type error = 'error';

  const predefinedPrompts = [
    { label: "Meta Ads ROAS blueprint", text: "How did you scale Velo apparel to 4.5x ROAS using Meta Creative strategy?" },
    { label: "Technical GTM configuration", text: "What custom event tracking do you set up with Google Tag Manager and GA4?" },
    { label: "High-ticket Quiz funnels", text: "How do you generate 12,000 lead submissions with conversion calculators?" },
    { label: "SaaS SEO backlinks tactic", text: "How do you build search authority and topical topical matching map frameworks?" }
  ];

  const handleAskAI = async (textToQuery: string) => {
    if (!textToQuery.trim() || status === 'loading') return;

    setStatus('loading');
    setQuery(textToQuery);

    try {
      const payload = {
        messages: [
          { role: 'user', content: textToQuery }
        ]
      };

      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      if (!res.ok) {
        throw new Error("Failed to secure response from CV database.");
      }

      const data = await res.json();
      setResponse(data.text);
      setStatus('success');
    } catch (err: any) {
      console.error(err);
      setErrorMessage("I have encountered a temporary indexing hurdle, please read my qualifications or call me at mukter2k.official@gmail.com!");
      setStatus('error');
    }
  };

  return (
    <section id="ai-interview-hub" className="py-24 bg-slate-950/80 border-t border-b border-slate-900 relative overflow-hidden">
      {/* Visual background gradient grid */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(37,99,235,0.06),transparent_40%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(6,182,212,0.04),transparent_50%)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 bg-blue-500/10 border border-blue-500/25 px-4 py-1.5 rounded-full mb-4">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span className="font-sans text-xs font-semibold text-cyan-300 uppercase tracking-widest">
              Live Interactive Experience
            </span>
          </div>
          <h2 className="font-sans font-bold text-3xl sm:text-4xl text-white tracking-tight leading-tight">
            Consult Md Mukter Ahmed's <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent">AI Recruiting Agent</span>
          </h2>
          <p className="mt-4 text-slate-400 text-base leading-relaxed font-sans">
            Need details regarding specific direct-response ad experiences or technical search architectures? Test our fully operational server-side Gemini CV assistant below in real-time.
          </p>
        </div>

        {/* 2-Column Responsive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Side: Guiding Copy & FAQ Chips */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              <h3 className="font-sans font-bold text-xl text-slate-100 flex items-center">
                <Bot className="w-5 h-5 mr-2 text-cyan-400" />
                Ask Any CV & Strategy Question
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed font-sans">
                This intelligent model is programmed with Mukter's entire 5-year technical portfolio, growth metrics, pricing, services, and operational blueprint models. It will provide straight, direct, metrics-based answers instantly.
              </p>
              
              {/* Features list */}
              <div className="space-y-3.5 pt-2">
                <div className="flex items-start space-x-3 text-sm">
                  <div className="p-1 rounded bg-blue-500/10 text-blue-400 mt-0.5">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <span className="text-slate-300 font-sans">Covers detailed ROI calculation equations</span>
                </div>
                <div className="flex items-start space-x-3 text-sm">
                  <div className="p-1 rounded bg-blue-500/10 text-blue-400 mt-0.5">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <span className="text-slate-300 font-sans">Explains how he targets and lowers customer CAC</span>
                </div>
                <div className="flex items-start space-x-3 text-sm">
                  <div className="p-1 rounded bg-blue-500/10 text-blue-400 mt-0.5">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <span className="text-slate-300 font-sans">Answers instantly in Bangla (Bengali) or English</span>
                </div>
              </div>
            </div>

            {/* Quick-Click Prompt chips list */}
            <div className="space-y-3.5">
              <span className="block text-xs font-semibold uppercase tracking-wider text-slate-500 font-mono">
                Click a predefined campaign to inspect:
              </span>
              <div className="flex flex-wrap gap-2.5">
                {predefinedPrompts.map((p, ix) => (
                  <button
                    key={ix}
                    onClick={() => handleAskAI(p.text)}
                    className="py-1.5 px-3 rounded-xl bg-slate-900/40 border border-slate-800 hover:border-cyan-500/60 hover:bg-slate-900 text-xs text-slate-300 hover:text-white transition duration-200 cursor-pointer flex items-center space-x-1"
                  >
                    <span>{p.label}</span>
                    <ArrowUpRight className="w-3 h-3 text-slate-500" />
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side: Virtual Interactive Console Terminal */}
          <div className="lg:col-span-7">
            <div className="h-full bg-slate-900/60 border border-slate-800/80 rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-2xl backdrop-blur-md relative overflow-hidden group">
              
              {/* Terminal-like utility bar */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-600" />
              
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-800/40">
                <div className="flex items-center space-x-2">
                  <Terminal className="w-4 h-4 text-cyan-400" />
                  <span className="text-xs text-slate-400 font-mono tracking-wider">AI_ENGINE_v4.5_ACTIVE</span>
                </div>
                <div className="flex space-x-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-800" />
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-800" />
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-800" />
                </div>
              </div>

              {/* Dynamic Answer Body Console */}
              <div className="flex-1 min-h-[180px] flex flex-col justify-center">
                {status === 'idle' && (
                  <div className="text-center py-6">
                    <div className="p-3 bg-slate-950 rounded-2xl inline-block mb-3.5 text-cyan-400/80 border border-slate-800">
                      <MessageSquare className="w-6 h-6" />
                    </div>
                    <p className="text-sm text-slate-400 font-sans max-w-sm mx-auto">
                      Select any campaign tag on the left, or input your customized client challenge below to get a live strategic appraisal.
                    </p>
                  </div>
                )}

                {status === 'loading' && (
                  <div className="space-y-4 py-4">
                    <div className="flex items-center space-x-3 text-xs font-mono text-cyan-400 animate-pulse">
                      <span className="w-2 h-2 rounded-full bg-cyan-400 inline-block" />
                      <span>QUERYING MUKTER'S PORTFOLIO MODEL DB...</span>
                    </div>
                    <div className="h-4 bg-slate-950 rounded w-11/12 animate-pulse" />
                    <div className="h-4 bg-slate-950 rounded w-10/12 animate-pulse" />
                    <div className="h-4 bg-slate-950 rounded w-8/12 animate-pulse" />
                  </div>
                )}

                {status === 'success' && (
                  <div className="space-y-4">
                    <div className="text-xs font-sans font-semibold text-slate-500 flex items-center">
                      <Bot className="w-4 h-4 text-cyan-400 mr-2" />
                      MUKTER'S AI AGENT RESPONSE:
                    </div>
                    <p className="text-slate-200 text-sm sm:text-[14px] leading-relaxed whitespace-pre-wrap font-sans bg-slate-950/60 p-4 border border-slate-850 rounded-2xl">
                      {response}
                    </p>
                  </div>
                )}

                {status === 'error' && (
                  <div className="bg-red-950/20 border border-red-500/20 p-4 rounded-2xl text-center">
                    <p className="text-xs text-red-400 font-semibold font-mono mb-1">DATA ATTRIBUTION LATENCY</p>
                    <p className="text-xs text-slate-400 font-sans">{errorMessage}</p>
                  </div>
                )}
              </div>

              {/* Form Input Container */}
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleAskAI(query);
                }}
                className="mt-8 pt-4 border-t border-slate-800/40 flex items-center space-x-3"
              >
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Ask a technical ad or organic search audit question..."
                  className="flex-1 px-4 py-3 bg-slate-950 border border-slate-850 hover:border-slate-800 focus:border-cyan-500 focus:outline-none rounded-2xl text-xs text-slate-200 placeholder-slate-500 transition duration-200"
                  disabled={status === 'loading'}
                />
                <button
                  type="submit"
                  disabled={!query.trim() || status === 'loading'}
                  className="px-5 py-3 rounded-2xl bg-blue-600 hover:bg-cyan-500 text-white font-sans text-xs font-semibold cursor-pointer transition-all duration-300 disabled:opacity-40 flex items-center space-x-1.5 shadow-lg shadow-blue-500/10 hover:shadow-cyan-500/20"
                >
                  <span>Inquire</span>
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

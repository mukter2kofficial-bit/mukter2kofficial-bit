import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, X, Send, Sparkles, Bot, ArrowRight, Loader2, HelpCircle } from 'lucide-react';

interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

export default function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      role: 'assistant',
      content: "Hello! I am Md Mukter Ahmed's Interactive AI Brand & Growth Assistant. Let me show you how my data-driven strategies can scale your traffic and transform clicks into revenue. Ask me anything about my SEO audits, Paid Ads systems, case studies, or growth process!",
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showNotification, setShowNotification] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatButtonRef = useRef<HTMLButtonElement>(null);

  // Trigger brief floating notification after 3 seconds to guide users
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowNotification(true);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
      setShowNotification(false);
    }
  }, [messages, isOpen]);

  const quickQuestions = [
    { text: "⚡ How can you improve my SEO?", query: "How do you handle Technical SEO & Semantic Topical mapping to scale organic traffic?" },
    { text: "📊 Tell me about the 4.5x ROAS ad campaign", query: "Can you detail the case study of Scaling Velo Custom Apparel to 4.5x ROAS using Meta Ads?" },
    { text: "🎯 What is your 5-step Growth Process?", query: "Explain your 5-step strategic growth process for businesses." },
    { text: "📬 How do I get in touch with you?", query: "How can I contact Md Mukter Ahmed directly to schedule a growth audit call?" }
  ];

  const handleSendMessage = async (textToSend: string) => {
    if (!textToSend.trim() || isLoading) return;

    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      role: 'user',
      content: textToSend,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMsg]);
    setInputValue('');
    setIsLoading(true);

    // Capture thread for GenAI server route
    const payloadMessages = [...messages, userMsg].map(m => ({
      role: m.role,
      content: m.content
    }));

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ messages: payloadMessages })
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      
      const assistantMsg: ChatMessage = {
        id: `assist-${Date.now()}`,
        role: 'assistant',
        content: data.text || "I was able to process your metadata, but didn't receive an answer. Please feel free to schedule a free 1-on-1 audit!",
        timestamp: new Date()
      };

      setMessages(prev => [...prev, assistantMsg]);
    } catch (err: any) {
      console.error("AI Assistant request error:", err);
      const errorMsg: ChatMessage = {
        id: `assist-err-${Date.now()}`,
        role: 'assistant',
        content: "I'm having a slight connection hiccup, but please feel free to ask me via the contact form or email direct at mukter2k.official@gmail.com! How else can I assist you with SEO or Ads scaling?",
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Floating launcher button in the bottom-right */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
        {/* Helper guide alert notification */}
        <AnimatePresence>
          {showNotification && !isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 15, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="mb-3 max-w-xs bg-slate-900/95 border border-cyan-500/30 text-white rounded-2xl p-4 shadow-2xl backdrop-blur-md relative"
            >
              <button
                onClick={() => setShowNotification(false)}
                className="absolute top-2 right-2 p-1 text-slate-400 hover:text-white transition-colors"
              >
                <X className="w-3.5 h-3.5" />
              </button>
              <div className="flex items-start space-x-2.5">
                <div className="p-1 px-1.5 rounded-lg bg-blue-600/30 text-cyan-400 mt-0.5 animate-pulse">
                  <Sparkles className="w-3.5 h-3.5" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-slate-100 font-sans">Chat with Mukter's AI!</h4>
                  <p className="text-[11px] text-slate-400 mt-1 leading-relaxed">
                    Have questions about SEO, ad budgets, or results? Ask our real-time interactive resume chatbot!
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.button
          ref={chatButtonRef}
          id="ai-chatbot-floating-trigger"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsOpen(!isOpen)}
          className={`relative p-4 rounded-full text-white shadow-2xl flex items-center justify-center cursor-pointer transition-all duration-300 ${
            isOpen 
              ? 'bg-slate-800 border border-slate-700' 
              : 'bg-gradient-to-tr from-blue-600 to-cyan-500 shadow-blue-500/20 hover:shadow-cyan-400/40'
          }`}
          aria-label="Toggle AI CV Assistant"
        >
          {isOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <div className="relative">
              <Bot className="w-6 h-6" />
              <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-500"></span>
              </span>
            </div>
          )}
        </motion.button>
      </div>

      {/* Main Glassmorphism Chatbot Panel Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="ai-chatbot-interactive-panel"
            initial={{ opacity: 0, y: 40, scale: 0.93 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.93 }}
            transition={{ type: 'spring', damping: 25, stiffness: 220 }}
            className="fixed bottom-24 right-6 w-[92vw] sm:w-[420px] h-[550px] bg-slate-950/90 border border-slate-800/80 rounded-3xl z-50 flex flex-col overflow-hidden shadow-2xl backdrop-blur-xl"
          >
            {/* Header section with blue & purple gradient backing */}
            <div className="p-4 bg-gradient-to-r from-slate-900 via-blue-900/40 to-slate-900 border-b border-slate-800/80 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="p-2 rounded-xl bg-blue-650/40 text-cyan-400 border border-cyan-500/20">
                  <Bot className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center space-x-1.5">
                    <h3 className="text-sm font-bold text-white font-sans">Mukter's AI Guide</h3>
                    <span className="text-[9px] bg-cyan-500/20 text-cyan-300 px-1.5 py-0.5 rounded-full font-sans font-medium">Online</span>
                  </div>
                  <p className="text-[10px] text-slate-400 line-clamp-1">Expert Brand & Optimization Assistant</p>
                </div>
              </div>
              <button
                id="ai-chatbot-close-panel-btn"
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-900 transition-colors"
              >
                <X className="w-4.5 h-4.5" />
              </button>
            </div>

            {/* Messages Stream list container */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 custom-scrollbar">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl p-3.5 text-sm font-sans leading-relaxed shadow-sm ${
                      msg.role === 'user'
                        ? 'bg-blue-600 text-white rounded-br-none'
                        : 'bg-slate-900/80 border border-slate-800/80 text-slate-200 rounded-bl-none'
                    }`}
                  >
                    <p className="whitespace-pre-line text-[13px]">{msg.content}</p>
                    <span className="block text-[8px] text-slate-500 text-right mt-1.5">
                      {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </span>
                  </div>
                </div>
              ))}

              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-slate-900/80 border border-slate-800/80 rounded-2xl rounded-bl-none p-4 text-slate-400 flex items-center space-x-2.5">
                    <Loader2 className="w-4 h-4 text-cyan-400 animate-spin" />
                    <span className="text-xs font-sans">Formulating growth strategy...</span>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Sticky Prompt Chips triggers inside panel body */}
            {messages.length === 1 && (
              <div className="p-3 bg-slate-900/30 border-t border-slate-900/60">
                <p className="text-[10px] text-slate-500 mb-2 font-medium uppercase tracking-wider flex items-center">
                  <HelpCircle className="w-3 h-3 mr-1 text-slate-500" /> Suggested questions
                </p>
                <div className="grid grid-cols-1 gap-1.5 max-h-[120px] overflow-y-auto custom-scrollbar">
                  {quickQuestions.map((chip, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleSendMessage(chip.query)}
                      className="text-left py-1.5 px-3 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-blue-500 text-xs text-slate-300 hover:text-white transition duration-200 flex items-center justify-between group cursor-pointer"
                    >
                      <span className="truncate">{chip.text}</span>
                      <ArrowRight className="w-3 h-3 text-slate-500 group-hover:text-cyan-400 group-hover:translate-x-0.5 transition" />
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Input message form row */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage(inputValue);
              }}
              className="p-3 border-t border-slate-800/80 bg-slate-950 flex items-center space-x-2"
            >
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Ask about SEO, Ads, experience, CPC..."
                disabled={isLoading}
                className="flex-1 px-4 py-2.5 bg-slate-900 border border-slate-800 focus:border-blue-500 focus:outline-none rounded-2xl text-xs text-slate-200 placeholder-slate-500 disabled:opacity-60 transition"
              />
              <button
                type="submit"
                disabled={!inputValue.trim() || isLoading}
                className="p-2.5 rounded-2xl bg-blue-600 hover:bg-cyan-500 text-white transition-colors duration-200 disabled:opacity-30 disabled:hover:bg-blue-600 cursor-pointer flex items-center justify-center shadow-lg shadow-blue-500/10"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

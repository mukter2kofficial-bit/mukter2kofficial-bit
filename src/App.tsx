import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import About from './components/About';
import Skills from './components/Skills';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import Blog from './components/Blog';
import AIInterviewHub from './components/AIInterviewHub';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AIChatbot from './components/AIChatbot';

export default function App() {
  return (
    <div className="bg-slate-950 min-h-screen text-slate-100 font-sans antialiased selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Sticky High-End Navigation Bar Menu */}
      <Navbar />

      {/* Main Container Wrapper */}
      <main id="main-content-flow" className="relative">
        
        {/* 1. HERO SECTION */}
        <Hero />

        {/* 2. TRUST / STATS SECTION */}
        <Stats />

        {/* 3. ABOUT ME SECTION */}
        <About />

        {/* 4. SKILLS SECTION */}
        <Skills />

        {/* 5. SERVICES SECTION */}
        <Services />

        {/* 6. PORTFOLIO / CASE STUDIES SECTION */}
        <Portfolio />

        {/* 7. PROCESS SECTION */}
        <Process />

        {/* 8. TESTIMONIALS SECTION */}
        <Testimonials />

        {/* 9. BLOG SECTION */}
        <Blog />

        {/* 9.5 AI INTERVIEW & CV HUB */}
        <AIInterviewHub />

        {/* 10. CONTACT SECTION */}
        <Contact />

      </main>

      {/* 11. FOOTER SECTION */}
      <Footer />

      {/* FLOATING CHATBOT COMPANION */}
      <AIChatbot />
    </div>
  );
}


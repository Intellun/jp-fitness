/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import Navbar from './components/Navbar.tsx';
import Hero from './components/Hero.tsx';
import About from './components/About.tsx';
import Transformations from './components/Transformations.tsx';
import Features from './components/Features.tsx';
import Programs from './components/Programs.tsx';
import FAQ from './components/FAQ.tsx';
import Footer from './components/Footer.tsx';
import WhatsAppButton from './components/WhatsAppButton.tsx';
import { ArrowRight } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-black font-sans selection:bg-white selection:text-black scroll-smooth">
      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Transformations />
        <Features />
        <Programs />
        <FAQ />

        {/* Final CTA Section */}
        <section className="section-padding relative overflow-hidden border-t border-white/10">
          <div className="absolute inset-0 z-0 opacity-20">
             <div className="absolute inset-0 bg-brand-primary/5"></div>
          </div>

          <div className="relative z-10 max-w-5xl mx-auto text-center">
             <motion.div
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
             >
               <h2 className="text-6xl md:text-[100px] font-black italic tracking-tighter mb-8 leading-[0.85] uppercase">
                 Build <br />
                 Your Legacy<span className="text-brand-primary">.</span>
               </h2>
               <p className="text-zinc-500 text-lg md:text-xl font-black uppercase tracking-widest mb-12 max-w-2xl mx-auto leading-relaxed">
                 ready to build your best physique?
               </p>
               <motion.a
                  href="https://api.whatsapp.com/send?phone=96176644998&text=Hey%20JP%2C%20I%E2%80%99m%20ready%20to%20start%20my%20transformation."
                  target="_blank"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-block px-16 py-6 bg-brand-primary text-white font-black uppercase tracking-[0.3em] text-xs hover:bg-white hover:text-black transition-all shadow-2xl shadow-brand-primary/40"
               >
                 Start Transformation
               </motion.a>
             </motion.div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}


import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=2070" 
          alt="Elite Gym" 
          className="w-full h-full object-cover scale-110"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black"></div>
      </div>

      <div className="relative z-10 text-center px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-6xl md:text-[110px] font-black italic uppercase tracking-tighter mb-8 leading-[0.85]">
            Build the <br />
            <span className="text-brand-primary">Body</span> you deserve<span className="text-brand-primary">.</span>
          </h1>
          <p className="text-white text-[10px] md:text-xs max-w-2xl mx-auto mb-12 font-black uppercase tracking-[0.4em] leading-relaxed opacity-80">
            ONLINE & IN-PERSON COACHING.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-0">
            <motion.a
            href="https://api.whatsapp.com/send?phone=96176644998&text=Hey%20JP%2C%20I%E2%80%99m%20ready%20to%20start%20my%20transformation."
            target="_blank" 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group w-full sm:w-auto px-12 py-6 bg-brand-primary text-white font-black uppercase tracking-[0.3em] text-[10px] flex items-center justify-center gap-4 hover:bg-white hover:text-black transition-all shadow-2xl shadow-brand-primary/30"
            >
              Start Transformation
              <ArrowRight size={16} strokeWidth={3} className="group-hover:translate-x-1 transition-transform" />
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Decorative vertical lines */}
      <div className="absolute left-1/2 top-0 h-full w-[1px] bg-white/5 -translate-x-1/2"></div>
      <div className="absolute left-1/4 top-0 h-full w-[1px] bg-white/5 hidden md:block"></div>
      <div className="absolute right-1/4 top-0 h-full w-[1px] bg-white/5 hidden md:block"></div>
    </section>
  );
}

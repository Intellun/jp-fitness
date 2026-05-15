import { motion } from 'motion/react';
import { CheckCircle2, ShieldCheck, Trophy, Award } from 'lucide-react';

export default function About() {
  const stats = [
    { value: 'PRECISION', label: 'CUSTOM TRAINING SYSTEMS' },
    { value: 'EXECUTION', label: 'STRUCTURED PROGRESSION' },
    { value: 'ACCOUNTABILITY', label: 'CONSISTENT WEEKLY SUPPORT' },
    { value: 'RESULTS', label: 'REAL PHYSIQUE TRANSFORMATION' },
  ];

  return (
    <div className="bg-zinc-950">
      {/* Section 1: The Standard (Photo & Achievement Grid) */}
      <section id="standard" className="section-padding relative overflow-hidden border-b border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 text-center lg:text-left">
            <span className="text-brand-primary uppercase tracking-[.4em] text-[10px] font-black mb-4 block">Our Culture</span>
            <h2 className="text-5xl md:text-6xl font-black italic uppercase tracking-tighter text-white">THE STANDARD<span className="text-brand-primary">.</span></h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left: Smaller Coach Photo */}
            <motion.div 
               initial={{ opacity: 0, x: -50 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="lg:col-span-4 relative group"
            >
              <div className="absolute -inset-4 bg-brand-primary/5 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative max-w-xs mx-auto lg:mx-0 shadow-[0_0_50px_rgba(0,0,0,0.5)]">
                <div className="absolute -inset-1 bg-gradient-to-tr from-brand-primary/10 to-white/5 blur-xl rounded-3xl opacity-50"></div>
                <img 
                  src="/src/assets/images/regenerated_image_1778601336093.jpg" 
                  alt="JP Mourani" 
                  className="relative rounded-2xl w-full aspect-[4/5] object-cover shadow-2xl border border-white/10 transition-all duration-700 contrast-[1.15] brightness-[1.05]"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute bottom-4 left-4 right-4 glass p-4 rounded-xl border border-white/10 backdrop-blur-2xl">
                  <h3 className="text-base font-black italic uppercase tracking-tighter text-white">Jean-Paul Mourani<span className="text-brand-primary">.</span></h3>
                  <p className="text-zinc-500 text-[8px] font-black tracking-[0.3em] uppercase italic">Personal Trainer</p>
                </div>
              </div>
            </motion.div>

            {/* Right: Achievement Boxes Grid */}
            <motion.div
               initial={{ opacity: 0, x: 50 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              {stats.map((stat, i) => (
                <motion.div 
                  key={i} 
                  whileHover={{ scale: 1.02, y: -2 }}
                  className="bg-zinc-900/40 border border-white/5 p-4 rounded-2xl hover:border-brand-primary/40 transition-all group flex flex-col justify-center min-h-[110px] hover:shadow-[0_0_30_rgba(234,179,8,0.1)] cursor-default"
                >
                  <div className="text-2xl font-black italic tracking-tighter text-white mb-1 uppercase group-hover:text-brand-primary transition-colors leading-none">{stat.value}</div>
                  <div className="text-[9px] uppercase font-black tracking-widest text-zinc-600">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 2: About the Coach (Journey Text) */}
      <section id="about" className="section-padding relative overflow-hidden bg-zinc-950">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="max-w-7xl mx-auto"
        >
          <div className="max-w-4xl">
            <span className="text-brand-primary uppercase tracking-[.4em] text-[10px] font-black mb-4 block">ABOUT THE COACH</span>
            <h2 className="text-5xl md:text-7xl font-black italic uppercase tracking-tighter mb-8 leading-[0.9] text-white">
              BUILT THROUGH <br />
              DISCIPLINE<span className="text-brand-primary">.</span>
            </h2>
            <div className="space-y-8 text-zinc-200 text-xl mb-12 font-medium leading-relaxed max-w-3xl">
              <p className="drop-shadow-sm">
                I’m JP, a personal trainer based in Zgharta, Lebanon, offering both online and in-person coaching.
              </p>
              <p className="drop-shadow-sm border-l-2 border-brand-primary pl-6 py-2 bg-white/5 rounded-r-lg">
                I started my fitness journey at 60kg — skinny, insecure, and lacking confidence. Through years of disciplined training, proper nutrition, and consistency, I transformed myself into the strongest version of who I am today at 84kg.
              </p>
              <p className="drop-shadow-sm">
                Now, I help men and women build muscle, lose fat, and improve their confidence through structured, science-based coaching focused on real, sustainable results.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                "Weekly Check-ins",
                "personalized training program",
                "science-based programs",
                "24/7 WhatsApp Access"
              ].map((point, i) => (
                <div key={i} className="flex items-center gap-4 group">
                  <div className="w-2 h-2 bg-brand-primary rotate-45 group-hover:scale-110 transition-transform"></div>
                  <span className="text-white text-[9px] uppercase font-black tracking-widest">{point}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}

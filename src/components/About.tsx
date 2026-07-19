import { motion } from 'motion/react';
import { CheckCircle2, ShieldCheck, Trophy, Award } from 'lucide-react';
import coachImg from '../assets/images/regenerated_image_1778601336093.jpg';

export default function About() {
  const stats = [
    { value: 'PRECISION', label: 'CUSTOM TRAINING SYSTEMS' },
    { value: 'EXECUTION', label: 'STRUCTURED PROGRESSION' },
    { value: 'ACCOUNTABILITY', label: 'CONSISTENT WEEKLY SUPPORT' },
    { value: 'RESULTS', label: 'REAL PHYSIQUE TRANSFORMATION' },
  ];

  return (
    <div className="bg-black">
      {/* Section 1: The Standard (Photo & Achievement Grid) */}
      <section id="standard" className="section-padding relative overflow-hidden border-b border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 text-center lg:text-left">
            <span className="text-brand-primary uppercase tracking-[.4em] text-[10px] font-black mb-3 block">Our Culture</span>
            <h2 className="text-5xl md:text-6xl font-black italic uppercase tracking-tighter text-white">THE STANDARD<span className="text-brand-primary">.</span></h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left: Smaller Coach Photo */}
            <motion.div 
               initial={{ opacity: 0, x: -50 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="lg:col-span-5 relative group"
            >
              <div className="absolute -inset-4 bg-brand-primary/10 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="relative max-w-sm mx-auto lg:mx-0 shadow-[0_0_50px_rgba(0,0,0,0.6)]">
                <div className="absolute -inset-1 bg-gradient-to-tr from-brand-primary/20 to-white/5 blur-xl rounded-3xl opacity-60"></div>
                <img 
                  src={coachImg} 
                  alt="JP Mourani" 
                  className="relative rounded-3xl w-full aspect-[4/5] object-cover border border-white/10 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute bottom-5 left-5 right-5 bg-black/60 backdrop-blur-xl p-5 rounded-2xl border border-white/10">
                  <h3 className="text-base font-black italic uppercase tracking-tighter text-white">Jean-Paul Mourani<span className="text-brand-primary">.</span></h3>
                  <p className="text-zinc-400 text-[9px] font-bold tracking-[0.3em] uppercase italic mt-1">Personal Trainer</p>
                </div>
              </div>
            </motion.div>

            {/* Right: Achievement Boxes Grid */}
            <motion.div
               initial={{ opacity: 0, x: 50 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5"
            >
              {stats.map((stat, i) => (
                <motion.div 
                  key={i} 
                  whileHover={{ scale: 1.02, y: -2 }}
                  className="bg-zinc-900/30 backdrop-blur-md border border-white/5 p-8 rounded-3xl hover:border-brand-primary/30 transition-all duration-300 group flex flex-col justify-center min-h-[120px] cursor-default shadow-lg hover:shadow-brand-primary/5"
                >
                  <div className="text-2xl font-black italic tracking-tighter text-white mb-2 uppercase group-hover:text-brand-primary transition-colors leading-none">{stat.value}</div>
                  <div className="text-[10px] uppercase font-bold tracking-widest text-zinc-500 leading-relaxed">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 2: About the Coach (Journey Text) */}
      <section id="about" className="section-padding relative overflow-hidden bg-black">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="max-w-7xl mx-auto"
        >
          <div className="max-w-4xl">
            <span className="text-brand-primary uppercase tracking-[.4em] text-[10px] font-black mb-3 block">ABOUT THE COACH</span>
            <h2 className="text-5xl md:text-7xl font-black italic uppercase tracking-tighter mb-8 leading-[0.9] text-white">
              BUILT THROUGH <br />
              DISCIPLINE<span className="text-brand-primary">.</span>
            </h2>
            <div className="space-y-8 text-zinc-400 text-lg mb-12 font-medium leading-relaxed max-w-3xl">
              <p className="drop-shadow-sm">
                I’m JP, a personal trainer based in Zgharta, Lebanon, offering both online and in-person coaching.
              </p>
              <p className="drop-shadow-sm border-l-2 border-brand-primary pl-6 py-3 bg-white/[0.02] rounded-r-2xl text-zinc-300">
                I started my fitness journey at 60kg — skinny, insecure, and lacking confidence. Through years of disciplined training, proper nutrition, and consistency, I transformed myself into the strongest version of who I am today at 88kg.
              </p>
              <p className="drop-shadow-sm">
                Now, I help men and women build muscle, lose fat, and improve their confidence through structured, science-based coaching focused on real, sustainable results.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 border-t border-white/5 pt-8">
              {[
                "Weekly Check-ins",
                "personalized training program",
                "science-based programs",
                "24/7 WhatsApp Access"
              ].map((point, i) => (
                <div key={i} className="flex items-center gap-3.5 group">
                  <div className="w-1.5 h-1.5 bg-brand-primary rounded-full group-hover:scale-125 transition-transform duration-300"></div>
                  <span className="text-zinc-300 text-[10px] font-bold uppercase tracking-widest group-hover:text-white transition-colors duration-300">{point}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}

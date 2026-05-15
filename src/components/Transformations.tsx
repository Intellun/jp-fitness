import { motion } from 'motion/react';
import { Instagram } from 'lucide-react';
import imgBefore from '../assets/images/regenerated_image_1778606840128.jpg';
import imgAfter from '../assets/images/regenerated_image_1778606840938.jpg';

export default function Transformations() {
  const cases = [
    {
      name: "JP",
      time: "Before",
      result: "60kgs",
      img: imgBefore
    },
    {
      name: "JP",
      time: "After",
      result: "84kgs",
      img: imgAfter
    }
  ];

  return (
    <section id="transformation" className="section-padding bg-zinc-950">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-20">
          <div className="text-left">
            <span className="text-brand-primary uppercase tracking-[.3em] text-[10px] font-black mb-4 block underline decoration-brand-primary/30 underline-offset-4">My Personal Story</span>
            <h2 className="text-4xl md:text-6xl font-black italic tracking-tighter uppercase leading-[0.85]">THE FIRST <br />TRANSFORMATION WAS MY OWN<span className="text-brand-primary">.</span></h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {cases.map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative h-[420px] border border-white/5 overflow-hidden ring-1 ring-brand-primary/30"
            >
              <img 
                src={item.img} 
                alt={item.name} 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale-0"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
              <div className="absolute bottom-10 left-10 right-10">
                <div className="flex items-end border-b border-white/20 pb-4 mb-4 justify-center">
                  <span className="text-brand-primary text-[10px] font-bold uppercase tracking-widest">{item.time}</span>
                </div>
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500 text-center">{item.result}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 text-center">
            <p className="text-zinc-500 max-w-xl mx-auto font-black uppercase text-[10px] tracking-[0.2em] leading-loose mb-12 italic opacity-60">
                “These results were earned through discipline, structure, and consistency without compromise.”
            </p>
            <motion.a
                href={import.meta.env.VITE_INSTAGRAM_URL || "https://instagram.com"}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-3 bg-zinc-900 border border-white/10 px-8 py-4 rounded-full text-white text-[10px] font-black uppercase tracking-[0.3em] hover:bg-zinc-800 transition-all hover:border-brand-primary/50 group"
            >
                <Instagram size={14} className="group-hover:text-brand-primary text-zinc-500 transition-colors" />
                See my daily training on Instagram
            </motion.a>
        </div>
      </div>
    </section>
  );
}

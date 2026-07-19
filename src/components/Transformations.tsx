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
      result: "88kgs",
      img: imgAfter
    }
  ];

  return (
    <section id="transformation" className="section-padding bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-20">
          <div className="text-left">
            <span className="text-brand-primary uppercase tracking-[.3em] text-[10px] font-black mb-3 block">My Personal Story</span>
            <h2 className="text-4xl md:text-6xl font-black italic tracking-tighter uppercase leading-[0.85] text-white">THE FIRST <br />TRANSFORMATION WAS MY OWN<span className="text-brand-primary">.</span></h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {cases.map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              className="group relative h-[440px] rounded-3xl border border-white/10 overflow-hidden shadow-2xl"
            >
              <img 
                src={item.img} 
                alt={item.name} 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4">
                <div className="bg-black/55 backdrop-blur-xl py-2.5 px-4 rounded-2xl border border-white/10 text-center">
                  <span className="text-brand-primary text-[10px] font-black uppercase tracking-[0.25em] block mb-0.5">{item.time}</span>
                  <p className="text-sm font-black italic uppercase tracking-tighter text-white">{item.result}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 text-center">
            <p className="text-zinc-500 max-w-xl mx-auto font-bold uppercase text-[9px] tracking-[0.2em] leading-loose mb-10 italic">
                “These results were earned through discipline, structure, and consistency without compromise.”
            </p>
            <motion.a
                href={import.meta.env.VITE_INSTAGRAM_URL || "https://www.instagram.com/jpmourani"}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-3 bg-zinc-900/45 backdrop-blur-md border border-white/10 px-8 py-4 rounded-full text-white text-[10px] font-black uppercase tracking-[0.25em] hover:bg-zinc-900 hover:border-brand-primary/50 transition-all duration-300 group shadow-xl"
            >
                <Instagram size={14} className="group-hover:text-brand-primary text-zinc-400 transition-colors duration-300" />
                See my daily training on Instagram
            </motion.a>
        </div>
      </div>
    </section>
  );
}

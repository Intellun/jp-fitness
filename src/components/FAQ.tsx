import { motion } from 'motion/react';
import { Plus, Minus } from 'lucide-react';
import { useState } from 'react';

export default function FAQ() {
  const faqs = [
    {
      q: "How soon can I expect to see results?",
      a: "Most clients begin noticing physical and strength improvements within the first few weeks. Long-term transformation depends on consistency, effort, recovery, and staying committed to the program."
    },
    {
      q: "Do I need gym experience to start?",
      a: "No. Whether you're a beginner or advanced lifter, the program is customized to your current level, goals, and training experience."
    },
    {
      q: "Will my program be personalized?",
      a: "Yes. Every training plan is individually structured based on your physique, goals, schedule, and training style."
    },
    {
      q: "How do check-ins work?",
      a: "Check-ins are done weekly through WhatsApp. You'll receive feedback, adjustments, and guidance to keep your progress moving forward."
    },
    {
      q: "What makes your coaching different?",
      a: "This coaching focuses on structure, execution, accountability, and realistic long-term progress — not generic plans or shortcuts."
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="section-padding bg-zinc-950">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-brand-primary uppercase tracking-[.3em] text-[10px] font-black mb-4 block">Information</span>
          <h2 className="text-5xl md:text-6xl font-black italic tracking-tighter uppercase leading-none">Common <br />Queries<span className="text-brand-primary">.</span></h2>
        </div>

        <div className="space-y-0 border-t border-white/10">
          {faqs.map((faq, i) => (
            <div key={i} className="border-b border-white/10">
              <button 
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex justify-between items-center py-8 text-left group"
              >
                <span className="text-[11px] md:text-xs font-black uppercase tracking-[0.2em] group-hover:text-brand-primary transition-colors">{faq.q}</span>
                <span className="text-brand-primary text-xl">{openIndex === i ? '−' : '+'}</span>
              </button>
              {openIndex === i && (
                <motion.div 
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  className="pb-8"
                >
                  <p className="text-xs text-zinc-500 uppercase font-bold tracking-widest leading-relaxed">
                    {faq.a}
                  </p>
                </motion.div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

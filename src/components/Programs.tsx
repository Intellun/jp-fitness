import { motion } from 'motion/react';
import { Check, Star } from 'lucide-react';

export default function Programs() {
  const tiers = [
    {
      name: "online coaching",
      price: "49.99",
      period: "per month",
      desc: "built for clients who want structure, accountability, and results from anywhere.",
      features: [
        "12 session",
        "custom training program",
        "exercise technique feedback",
        "weekly progress tracking"
      ],
      popular: false
    },
    {
      name: "monthly coaching",
      price: "99.99",
      period: "per month",
      desc: "complete physique transformation coaching with direct support and full customization.",
      highlight: {
        title: "Private coaching",
        price: "$10 / session",
        desc: "Monthly packages available"
      },
      features: [
        "12 session",
        "private coaching",
        "personalized plan"
      ],
      popular: true
    },
    {
      name: "custom training program",
      price: "24.99",
      period: "one time",
      desc: "a personalized system engineered around your body, goals, and lifestyle.",
      features: [
        "fully customized training plan",
        "goal-specific programming",
        "built around your schedule"
      ],
      popular: false
    }
  ];

  return (
    <section id="pricing" className="section-padding bg-black border-y border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <span className="text-brand-primary uppercase tracking-[.3em] text-[10px] font-black mb-3 block">The Investment</span>
          <h2 className="text-5xl md:text-6xl font-black italic tracking-tighter uppercase leading-none text-white">Select Your <br />Package<span className="text-brand-primary">.</span></h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
          {tiers.map((tier, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              className={`relative p-10 rounded-[2rem] flex flex-col justify-between transition-all duration-300 ${
                tier.popular 
                  ? 'bg-brand-primary text-white md:-translate-y-4 shadow-2xl shadow-brand-primary/20 border border-brand-primary' 
                  : 'bg-zinc-900/20 backdrop-blur-md text-white border border-white/5 hover:border-zinc-800 hover:bg-zinc-900/35'
              }`}
            >
              {tier.popular && (
                <div className="absolute top-6 right-6 flex items-center gap-1.5 bg-white/15 px-3 py-1 rounded-full border border-white/10 backdrop-blur-md">
                  <span className="text-[8px] font-black uppercase tracking-[0.2em] text-white">Best Value</span>
                  <Star size={10} fill="currentColor" className="text-white" />
                </div>
              )}
              
              <div>
                <div className="mb-8">
                  <h3 className={`text-[10px] font-black uppercase tracking-[0.3em] mb-3 ${tier.popular ? 'text-white/60' : 'text-zinc-500'}`}>Tier 0{i+1}</h3>
                  <h4 className="text-2xl font-black italic tracking-tighter mb-4 uppercase text-white">{tier.name}</h4>
                  <p className={`text-[11px] font-medium leading-relaxed uppercase tracking-wide ${tier.popular ? 'text-white/80' : 'text-zinc-400'}`}>{tier.desc}</p>
                </div>
                
                <div className="flex items-baseline gap-2 mb-8">
                  <span className="text-5xl font-black italic tracking-tighter uppercase text-white">${tier.price}</span>
                  <span className={`text-[10px] font-bold uppercase tracking-widest ${tier.popular ? 'text-white/60' : 'text-zinc-500'}`}>/ {tier.period}</span>
                </div>

                {tier.highlight && (
                  <div className={`mb-8 p-5 rounded-2xl border ${tier.popular ? 'border-white/20 bg-black/25' : 'border-white/5 bg-white/[0.02]'}`}>
                    <div className="flex justify-between items-start mb-2">
                      <span className="text-[9px] font-black uppercase tracking-[0.15em] text-white">{tier.highlight.title}</span>
                      <span className="text-[9px] font-black uppercase tracking-widest text-brand-primary">{tier.highlight.price}</span>
                    </div>
                    <p className={`text-[9px] font-medium uppercase tracking-wider ${tier.popular ? 'text-white/60' : 'text-zinc-500'}`}>
                      {tier.highlight.desc}
                    </p>
                  </div>
                )}

                <div className="space-y-4 mb-10 border-t border-white/5 pt-8">
                  {tier.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3 group">
                      <Check size={12} strokeWidth={3} className={tier.popular ? "text-white" : "text-brand-primary"} />
                      <span className={`text-[10px] font-bold uppercase tracking-widest ${tier.popular ? 'text-white/90' : 'text-zinc-400'}`}>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <motion.a 
                href="https://api.whatsapp.com/send?phone=96176644998&text=Hey%20JP%2C%20I%E2%80%99m%20ready%20to%20start%20my%20transformation."
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`flex items-center justify-center w-full py-4.5 rounded-full font-black uppercase tracking-[0.2em] text-[10px] transition-all duration-300 ${
                  tier.popular 
                    ? 'bg-white text-black hover:bg-neutral-100 shadow-xl shadow-black/20' 
                    : 'bg-brand-primary text-white hover:bg-white hover:text-black shadow-lg shadow-brand-primary/10'
                }`}
              >
                Apply to Join
              </motion.a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

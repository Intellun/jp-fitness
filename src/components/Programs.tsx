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
    <section id="pricing" className="section-padding bg-black border-y border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <span className="text-brand-primary uppercase tracking-[.3em] text-[10px] font-black mb-4 block">The Investment</span>
          <h2 className="text-5xl md:text-6xl font-black italic tracking-tighter uppercase leading-none">Select Your <br />Package<span className="text-brand-primary">.</span></h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-white/10 items-stretch">
          {tiers.map((tier, i) => (
            <motion.div 
              key={i}
              className={`relative p-12 border-white/10 flex flex-col ${i !== tiers.length - 1 ? 'md:border-r border-b md:border-b-0' : ''} ${
                tier.popular 
                  ? 'bg-brand-primary text-black z-10 md:-translate-y-4 md:scale-105 shadow-2xl' 
                  : 'bg-neutral-950 text-white'
              }`}
            >
              {tier.popular && (
                <div className="absolute top-0 right-0 p-4 flex items-center gap-2">
                  <span className="text-[9px] font-black uppercase tracking-[0.2em] opacity-80">Best Value</span>
                  <Star size={24} fill="currentColor" />
                </div>
              )}
              <div className="min-h-[180px]">
                <h3 className="text-xs font-black uppercase tracking-[0.3em] mb-10 opacity-50">Tier 0{i+1}</h3>
                <h4 className="text-3xl font-black italic tracking-tighter mb-4 uppercase">{tier.name}</h4>
                <p className={`text-xs mb-10 ${tier.popular ? 'text-black/60' : 'text-zinc-500'} font-black uppercase tracking-wide leading-relaxed`}>{tier.desc}</p>
              </div>
              
              <div className="flex items-baseline gap-2 mb-12">
                <span className="text-5xl font-black italic tracking-tighter uppercase">${tier.price}</span>
                <span className={`text-[10px] font-black uppercase tracking-widest ${tier.popular ? 'text-black/40' : 'text-zinc-600'}`}>/ {tier.period}</span>
              </div>

              {tier.highlight && (
                <div className={`mb-12 p-6 border ${tier.popular ? 'border-black/10 bg-black/5' : 'border-white/10 bg-white/5'} rounded-xl transition-all hover:scale-[1.02]`}>
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-[10px] font-black uppercase tracking-[0.2em]">{tier.highlight.title}</span>
                    <span className="text-[10px] font-black uppercase tracking-widest text-right">{tier.highlight.price}</span>
                  </div>
                  <p className={`text-[9px] font-black uppercase tracking-wider ${tier.popular ? 'text-black/40' : 'text-zinc-500'}`}>
                    {tier.highlight.desc}
                  </p>
                </div>
              )}

              <div className="space-y-6 mb-12">
                {tier.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className={`w-2 h-2 rotate-45 ${tier.popular ? 'bg-black' : 'bg-brand-primary'}`} />
                    <span className="text-[10px] font-black uppercase tracking-widest">{feature}</span>
                  </div>
                ))}
              </div>

              <motion.a 
                href="https://api.whatsapp.com/send?phone=96176644998&text=Hey%20JP%2C%20I%E2%80%99m%20ready%20to%20start%20my%20transformation."
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`flex items-center justify-center w-full py-5 mt-auto font-black uppercase tracking-[0.2em] text-[10px] transition-all border ${tier.popular ? 'bg-black text-white border-black hover:bg-neutral-900 shadow-xl' : 'bg-brand-primary text-black border-brand-primary hover:bg-white hover:border-white'}`}
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

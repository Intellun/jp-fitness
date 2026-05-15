import { motion } from 'motion/react';
import { Target, Zap, Waves, Calendar, Smartphone, MessageSquare } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: <Target className="w-6 h-6" />,
      title: "Precision Programming",
      desc: "Custom workout split calculated based on your specific biomechanics and goals.",
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "accountability",
      desc: "weekly check-ins and consistent support to keep you disciplined and improving.",
    },
    {
      icon: <Waves className="w-6 h-6" />,
      title: "Progress Tracking",
      desc: "track strength, physique, and performance to ensure consistent measurable progress.",
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "Form Analysis",
      desc: "Submit training clips for frame-by-frame biomechanical feedback on your lifts.",
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: "sustainable results",
      desc: "build muscle and lose fat through a realistic approach designed for long-term success.",
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "Direct WhatsApp Access",
      desc: "24/7 direct encrypted line to your coach for any immediate questions.",
    }
  ];

  return (
    <section className="section-padding bg-black border-y border-white/10 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-brand-primary/5 blur-[100px] -z-10" />
          <span className="text-brand-primary uppercase tracking-[.3em] text-[10px] font-black mb-4 block">The System</span>
          <h2 className="text-5xl md:text-6xl font-black italic tracking-tighter uppercase text-white">The Protocol<span className="text-brand-primary">.</span></h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border border-white/5">
          {features.map((feature, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative p-12 border border-white/5 hover:border-brand-primary/20 transition-all duration-500 bg-neutral-950/20 backdrop-blur-sm overflow-hidden"
            >
              {/* Animated Background Shine */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-12">
                  <div className="w-14 h-14 bg-zinc-900 border border-white/5 flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:bg-brand-primary group-hover:text-black text-brand-primary shadow-[0_0_20px_rgba(var(--brand-primary-rgb),0.1)] group-hover:shadow-[0_0_30px_rgba(var(--brand-primary-rgb),0.4)]">
                    {feature.icon}
                  </div>
                  <span className="text-[10px] font-black text-white/5 group-hover:text-brand-primary/30 transition-colors duration-500">
                    PROTOCOL_0{i+1}
                  </span>
                </div>
                
                <h3 className="text-[11px] font-black uppercase tracking-[0.4em] mb-6 text-brand-primary">
                  {feature.title}
                </h3>
                
                <p className="text-[10px] text-white/70 group-hover:text-white font-bold uppercase tracking-[0.15em] leading-loose transition-colors duration-500">
                  {feature.desc}
                </p>
              </div>

              {/* Bottom line accent */}
              <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-brand-primary group-hover:w-full transition-all duration-1000 ease-in-out opacity-50" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

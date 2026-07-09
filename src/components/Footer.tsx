import { Instagram, Youtube, Twitter, Mail, MessageCircle } from 'lucide-react';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 py-16 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
        <div className="text-center md:text-left flex flex-col items-center md:items-start">
          <div className="mb-4">
            <Logo className="h-12 w-auto" showText={true} />
          </div>
          <p className="text-zinc-600 text-[10px] font-black uppercase tracking-[0.2em]">
            © 2026 JP Mourani Performance. All rights reserved.
          </p>
        </div>

        <div className="flex gap-10">
          <a 
            href={import.meta.env.VITE_INSTAGRAM_URL || "https://www.instagram.com/jpmourani"} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-zinc-500 hover:text-brand-primary transition-colors uppercase text-[10px] font-black tracking-widest"
          >
            Instagram
          </a>
          <a 
            href={import.meta.env.VITE_TIKTOK_URL || "https://www.tiktok.com/@jp_fitness04"} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-zinc-500 hover:text-brand-primary transition-colors uppercase text-[10px] font-black tracking-widest"
          >
            TikTok
          </a>
          <a 
            href={import.meta.env.VITE_EMAIL ? `mailto:${import.meta.env.VITE_EMAIL}` : "#"} 
            className="text-zinc-500 hover:text-brand-primary transition-colors uppercase text-[10px] font-black tracking-widest"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}

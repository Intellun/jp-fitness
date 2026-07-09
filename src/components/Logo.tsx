import React from 'react';

interface LogoProps {
  className?: string;
  showText?: boolean;
}

export default function Logo({ className = "h-12", showText = true }: LogoProps) {
  const aspect = showText ? "aspect-[2/1]" : "aspect-[25/9]";
  const viewBox = showText ? "0 0 500 250" : "0 0 500 180";

  return (
    <div className={`flex items-center justify-center ${aspect} ${className}`}>
      <svg 
        viewBox={viewBox} 
        className="w-full h-full select-none" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Barbell Bar */}
        <line 
          x1="60" 
          y1="110" 
          x2="440" 
          y2="110" 
          stroke="currentColor" 
          strokeWidth="3.5" 
          strokeLinecap="round"
          className="text-white/25"
        />

        {/* Barbell Plates Left */}
        <rect x="110" y="90" width="6" height="40" rx="1.5" fill="currentColor" className="text-white/30" />
        <rect x="120" y="80" width="10" height="60" rx="2.5" fill="currentColor" className="text-white/50" />
        <rect x="134" y="102" width="4" height="16" rx="1" fill="currentColor" className="text-white/30" />

        {/* Barbell Plates Right */}
        <rect x="362" y="102" width="4" height="16" rx="1" fill="currentColor" className="text-white/30" />
        <rect x="370" y="80" width="10" height="60" rx="2.5" fill="currentColor" className="text-white/50" />
        <rect x="384" y="90" width="6" height="40" rx="1.5" fill="currentColor" className="text-white/30" />

        {/* Bottom swoosh */}
        <path 
          d="M 185,155 C 230,175 320,175 365,115" 
          stroke="var(--color-brand-primary)" 
          strokeWidth="4" 
          strokeLinecap="round" 
        />

        {/* Top-Right swoosh */}
        <path 
          d="M 335,45 C 385,45 410,80 395,115" 
          stroke="var(--color-brand-primary)" 
          strokeWidth="4" 
          strokeLinecap="round" 
        />

        {/* J Letter (Left) - Slanted & Stylized */}
        <path 
          d="M 238,38 L 268,38 L 195,142 L 140,142 C 122,142 112,130 115,112 L 122,95 L 148,95 L 143,110 C 142,116 144,118 149,118 L 174,118 L 222,48 L 205,48 L 238,38 Z" 
          fill="currentColor" 
          className="text-white transition-colors duration-300"
        />

        {/* P Letter (Right) - Slanted Brand Blue (Extended to match full height) */}
        <path 
          fillRule="evenodd"
          d="M 220,142 L 270,38 L 350,38 C 385,38 400,55 395,80 C 390,105 365,120 335,120 L 260,120 L 249,142 Z M 260,58 L 325,58 C 345,58 360,68 355,79 C 350,90 335,100 315,100 L 240,100 Z" 
          fill="var(--color-brand-primary)"
        />

        {/* Subtext: PERSONAL TRAINING */}
        {showText && (
          <text 
            x="250" 
            y="222" 
            textAnchor="middle" 
            fill="currentColor" 
            fontSize="18"
            className="text-white font-sans font-black tracking-[0.22em] uppercase italic"
          >
            PERSONAL TRAINING
          </text>
        )}
      </svg>
    </div>
  );
}

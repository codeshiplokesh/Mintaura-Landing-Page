import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Lock, Cpu, Users } from 'lucide-react';
import { Logo } from './Logo';
import { ThreeDBars } from './ThreeDBars';
import { MobileMockup } from './MobileMockup';

export const HeroSection: React.FC = () => {
  // SVG curves for the live trading chart animation
  const chartPath1 = "M 0,160 Q 60,110 120,150 T 240,110 T 360,130 T 480,70 T 600,40";
  const chartPath2 = "M 0,140 Q 60,170 120,110 T 240,150 T 360,90 T 480,120 T 600,50";

  return (
    <div className="relative w-full lg:h-[760px] bg-[#000000] overflow-hidden flex flex-col justify-between select-none">
      
      {/* Header/Navbar */}
      <header className="relative w-full max-w-[1400px] mx-auto px-6 md:px-12 py-6 flex items-center justify-between z-50">
        <Logo />
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="h-[48px] px-6 rounded-[10px] text-sm font-semibold text-[#111111] bg-[#E8B24C] hover:bg-[#D7A04A] transition-colors cursor-pointer"
        >
          Get Early Access
        </motion.button>
      </header>

      {/* Main Hero Content */}
      <main className="relative flex-1 w-full max-w-[1400px] mx-auto px-6 md:px-12 flex flex-col lg:flex-row items-center justify-between z-40 pb-12 lg:pb-0 h-full gap-8">
        
        {/* Left Side (42% on desktop) */}
        <div className="w-full lg:w-[42%] flex flex-col justify-center items-start text-left gap-6 md:gap-7">
          
          {/* Top Gold Badge */}
          <div className="inline-flex items-center gap-2 px-4 h-[40px] rounded-full bg-[rgba(232,178,76,0.12)] border border-[rgba(232,178,76,0.2)]">
            <span className="w-2.5 h-2.5 rounded-full bg-[#E8B24C] shrink-0" />
            <span className="text-xs md:text-sm font-semibold text-[#E8B24C] font-sans tracking-wide">
              India's Premier Bullion Networking Platform
            </span>
          </div>

          {/* Large Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-[84px] font-extrabold text-white font-sans leading-[0.95] text-left tracking-tight m-0 max-w-[560px]">
            India’s Smart Network<br />
            for <span className="text-[#E8B24C]">Gold & Silver</span><br />
            Bullion Trading
          </h1>

          {/* Description */}
          <p className="text-[#B3B3B3] text-base md:text-[18px] leading-[1.8] font-sans font-normal max-w-[520px] m-0">
            Connect with verified bullion dealers, traders, refineries, mints and raw material suppliers in precision, privacy, and profit. Real opportunities. Real-time prices. Smarter than any EPP you'll find on market.
          </p>

          {/* CTA Row */}
          <div className="flex flex-row gap-[20px] w-full justify-start items-center">
            {/* Button 1: Get Early Access Now */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="h-[58px] w-[220px] rounded-[10px] text-base font-semibold text-[#111111] bg-[#E8B24C] hover:bg-[#D7A04A] transition-colors cursor-pointer flex items-center justify-center"
            >
              Get Early Access Now
            </motion.button>

            {/* Button 2: Book a Demo */}
            <motion.button
              whileHover={{ scale: 1.02, backgroundColor: 'rgba(232,178,76,0.05)' }}
              whileTap={{ scale: 0.98 }}
              className="h-[58px] w-[190px] rounded-[10px] text-base font-semibold text-[#E8B24C] border border-[#E8B24C] bg-transparent transition-colors cursor-pointer flex items-center justify-center gap-2"
            >
              Book a Demo
              <span className="text-[#E8B24C]">➔</span>
            </motion.button>
          </div>

          {/* Feature Row */}
          <div className="flex flex-wrap gap-x-6 gap-y-3 pt-6 border-t border-neutral-900 w-full mt-4">
            {[
              { icon: ShieldCheck, text: 'Verified Network' },
              { icon: Lock, text: 'Secure & Confidential' },
              { icon: Cpu, text: 'Smart Connections' },
              { icon: Users, text: 'Growing Community' }
            ].map((feature, i) => (
              <div key={i} className="flex items-center gap-2">
                <feature.icon size={14} className="text-[#E8B24C]" />
                <span className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">
                  {feature.text}
                </span>
              </div>
            ))}
          </div>

        </div>

        {/* Right Side (58% on desktop) */}
        <div className="w-full lg:w-[58%] relative h-[520px] lg:h-[640px] flex items-center justify-center mt-8 lg:mt-0">
          
          {/* ========================================================
              LAYER 1 (BACKGROUND): Large dotted world map (20% Opacity)
             ======================================================== */}
          <div className="absolute inset-0 opacity-20 select-none pointer-events-none flex items-center justify-center z-0">
            <svg viewBox="0 0 1000 550" className="w-full h-auto filter drop-shadow-[0_0_15px_rgba(232,178,76,0.15)]" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="goldDots" x="0" y="0" width="14" height="14" patternUnits="userSpaceOnUse">
                  <circle cx="3" cy="3" r="1.8" fill="#E8B24C" opacity="0.32" />
                </pattern>
                {/* Stylized outline of the continents */}
                <clipPath id="worldClip">
                  <path d="M 50,100 C 100,60 210,70 240,110 C 260,130 250,180 200,220 C 180,240 120,220 90,260 C 60,300 40,260 50,100 Z" />
                  <path d="M 180,250 C 220,290 280,350 250,420 C 230,470 210,510 180,480 C 160,450 140,380 150,320 C 160,280 170,260 180,250 Z" />
                  <path d="M 230,20 C 270,10 320,30 300,60 C 280,80 240,70 230,20 Z" />
                  <path d="M 400,230 C 460,210 510,250 530,300 C 550,350 510,450 460,470 C 430,480 400,430 400,380 C 400,340 370,300 390,250 C 390,240 400,235 400,230 Z" />
                  <path d="M 360,110 C 420,60 520,30 650,40 C 750,50 880,80 920,130 C 950,180 900,250 840,260 C 780,270 700,200 640,250 C 580,300 520,220 480,240 C 420,260 380,200 360,110 Z" />
                  <path d="M 640,220 C 660,240 680,270 660,300 C 640,280 620,240 640,220 Z" />
                  <path d="M 750,280 C 780,290 820,320 790,350 C 760,340 740,300 750,280 Z" />
                  <path d="M 780,390 C 840,380 890,410 880,450 C 850,490 790,470 760,440 C 750,420 760,400 780,390 Z" />
                </clipPath>
              </defs>
              <rect x="0" y="0" width="1000" height="550" fill="url(#goldDots)" clipPath="url(#worldClip)" />
              {/* Pulsing India location dot */}
              <circle cx="650" cy="245" r="4" fill="#E8B24C" />
              <circle cx="650" cy="245" r="12" fill="none" stroke="#E8B24C" strokeWidth="1" opacity="0.6" className="animate-ping" />
            </svg>
          </div>

          {/* ========================================================
              LAYER 2: Gold financial market chart
             ======================================================== */}
          <div className="absolute inset-0 select-none pointer-events-none z-10 flex items-center justify-center">
            <svg viewBox="0 0 600 200" className="w-full h-auto opacity-35" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="chartGlow" x1="0" y1="0" x2="0" y2="200" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#E8B24C" stopOpacity="0.25" />
                  <stop offset="100%" stopColor="#E8B24C" stopOpacity="0" />
                </linearGradient>
              </defs>
              <motion.path
                animate={{
                  d: [chartPath1, chartPath2, chartPath1]
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                fill="url(#chartGlow)"
              />
              <motion.path
                animate={{
                  d: [chartPath1, chartPath2, chartPath1]
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                stroke="#E8B24C"
                strokeWidth="2"
                strokeLinecap="round"
                filter="drop-shadow(0 0 6px rgba(232,178,76,0.8))"
              />
            </svg>
          </div>

          {/* ========================================================
              TOP MARKET CARDS (Top center of right section)
             ======================================================== */}
          <div className="absolute top-[10px] left-1/2 -translate-x-1/2 flex flex-row gap-2.5 z-40 px-2 pointer-events-auto w-max">
            {/* Card 1: Gold 24K */}
            <div className="bg-[#0D0D0D]/95 border border-[#E8B24C]/30 px-3.5 py-2 rounded-[10px] flex items-center gap-2.5 shadow-md">
              <div className="flex flex-col text-left">
                <span className="text-[8.5px] font-bold text-neutral-400 tracking-wider uppercase">GOLD 24K</span>
                <span className="text-sm font-extrabold text-white tracking-wide font-display mt-0.5">₹72,540.00</span>
              </div>
              <span className="text-[9px] font-black text-green-400 bg-green-500/10 border border-green-500/20 px-1.5 py-0.5 rounded-md">
                +1.45%
              </span>
            </div>

            {/* Card 2: Silver */}
            <div className="bg-[#0D0D0D]/95 border border-[#E8B24C]/30 px-3.5 py-2 rounded-[10px] flex items-center gap-2.5 shadow-md">
              <div className="flex flex-col text-left">
                <span className="text-[8.5px] font-bold text-neutral-400 tracking-wider uppercase">SILVER</span>
                <span className="text-sm font-extrabold text-white tracking-wide font-display mt-0.5">₹85,620.00</span>
              </div>
              <span className="text-[9px] font-black text-green-400 bg-green-500/10 border border-green-500/20 px-1.5 py-0.5 rounded-md">
                +0.52%
              </span>
            </div>

            {/* Card 3: Live Updates */}
            <div className="bg-[#0D0D0D]/95 border border-[#E8B24C]/30 px-3.5 py-2 rounded-[10px] flex items-center gap-2 shadow-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-[9.5px] font-extrabold text-neutral-300 tracking-wider uppercase font-sans">
                Live Updates
              </span>
            </div>
          </div>

          {/* ========================================================
              LAYER 3: Bullion Product Showcase (Gold/Silver Bars)
             ======================================================== */}
          <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-auto transform -translate-x-[40px] md:-translate-x-[65px] translate-y-[40px] scale-[0.82] md:scale-[0.92]">
            <ThreeDBars />
          </div>

          {/* ========================================================
              LAYER 4: Smartphone Mockup (on the far right, height: 650px visually)
             ======================================================== */}
          <div className="absolute right-[5px] md:right-[15px] bottom-[15px] md:bottom-[25px] z-30 pointer-events-auto scale-[0.8] md:scale-[1.0] lg:scale-[1.18] origin-bottom-right">
            <MobileMockup />
          </div>

        </div>

      </main>

    </div>
  );
};

import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Lock, Cpu, Users, Calendar, ArrowRight } from 'lucide-react';
import { Logo } from './Logo';
import { ThreeDBars } from './ThreeDBars';
import { MobileMockup } from './MobileMockup';

export const HeroSection: React.FC = () => {
  // SVG curves for the live trading chart animation
  const chartPath1 = "M 0,160 Q 60,110 120,150 T 240,110 T 360,130 T 480,70 T 600,40";
  const chartPath2 = "M 0,140 Q 60,170 120,110 T 240,150 T 360,90 T 480,120 T 600,50";

  return (
    <div className="relative min-h-screen bg-[#050505] bg-grid-pattern overflow-hidden flex flex-col">
      {/* Decorative radial gradients for lighting */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-gold-glow/20 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-gold-glow/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-[400px] h-[400px] bg-slate-900/50 blur-[100px] rounded-full pointer-events-none" />

      {/* Header/Navbar */}
      <header className="relative w-full max-w-7xl mx-auto px-6 md:px-12 py-6 flex items-center justify-between z-50">
        <Logo />
        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          className="relative px-5 py-2.5 rounded-xl text-xs font-extrabold text-amber-950 bg-gradient-to-r from-gold-300 via-gold-500 to-gold-400 hover:from-gold-200 hover:to-gold-300 shadow-[0_4px_20px_rgba(212,160,23,0.35),inset_0_2px_4px_rgba(255,255,255,0.4)] transition-all cursor-pointer font-sans uppercase tracking-wider"
        >
          Get Early Access
        </motion.button>
      </header>

      {/* Hero Body Content */}
      <main className="relative flex-1 w-full max-w-7xl mx-auto px-6 md:px-12 py-10 md:py-16 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center z-40">
        
        {/* ========================================================
            LEFT COLUMN (45% on large screens)
           ======================================================== */}
        <div className="lg:col-span-5 flex flex-col justify-center items-start text-left gap-6 md:gap-8 max-w-xl lg:max-w-none">
          
          {/* rounded badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gold-500/5 border border-gold-500/20 shadow-[0_2px_10px_rgba(212,160,23,0.05)]"
          >
            <span className="w-2 h-2 rounded-full bg-gold-500 animate-pulse-slow shadow-[0_0_8px_#D4A017]" />
            <span className="text-[10px] md:text-xs font-bold text-gold-400 font-sans tracking-wide uppercase">
              India's Premier Bullion Networking Platform
            </span>
          </motion.div>

          {/* Large Hero Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-[56px] font-extrabold text-white font-display leading-[1.08] tracking-tight"
          >
            India's Smart Network<br />
            for <span className="text-gold-gradient">Gold & Silver</span><br />
            Bullion Trading
          </motion.h1>

          {/* Body Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-neutral-400 text-sm md:text-base lg:text-lg leading-relaxed font-sans font-medium"
          >
            Connect with verified bullion dealers, traders, refiners, mints and raw material suppliers in precision, privacy, and profit. Real opportunities. Real time prices. Smarter than any EPP, you'll find on market.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          >
            {/* Primary Gold CTA */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="relative group px-8 py-4 rounded-xl text-sm font-extrabold text-amber-950 bg-gradient-to-r from-gold-400 via-gold-500 to-gold-600 hover:from-gold-300 hover:to-gold-500 shadow-[0_6px_25px_rgba(212,160,23,0.3),inset_0_2px_4px_rgba(255,255,255,0.4)] transition-all cursor-pointer font-sans flex items-center justify-center gap-2"
            >
              Get Early Access Now
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </motion.button>

            {/* Secondary Outline CTA */}
            <motion.button
              whileHover={{ scale: 1.02, borderColor: 'rgba(212,160,23,0.5)' }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 rounded-xl text-sm font-bold text-gold-400 border border-gold-500/25 bg-gold-500/5 hover:bg-gold-500/10 hover:text-white transition-all cursor-pointer flex items-center justify-center gap-2.5"
            >
              Book a Demo
              <Calendar size={15} />
            </motion.button>
          </motion.div>

          {/* Bottom Feature Row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="grid grid-cols-2 gap-x-6 gap-y-4 pt-4 md:pt-8 w-full border-t border-neutral-900/60"
          >
            {[
              { icon: ShieldCheck, text: 'Verified Network' },
              { icon: Lock, text: 'Secure & Confidential' },
              { icon: Cpu, text: 'Smart Connections' },
              { icon: Users, text: 'Growing Community' }
            ].map((feature, i) => (
              <div key={i} className="flex items-center gap-2.5">
                <div className="w-6 h-6 rounded-md bg-gold-500/10 border border-gold-500/20 flex items-center justify-center">
                  <feature.icon size={13} className="text-gold-500" />
                </div>
                <span className="text-xs md:text-sm font-bold text-neutral-300 tracking-wide">
                  {feature.text}
                </span>
              </div>
            ))}
          </motion.div>

        </div>

        {/* ========================================================
            RIGHT COLUMN (55% on large screens)
           ======================================================== */}
        <div className="lg:col-span-7 relative w-full h-[580px] lg:h-[620px] flex items-center justify-center mt-8 lg:mt-0">
          
          {/* ========================================================
              A. BACKGROUND LAYER: World Map (glowing gold dots)
             ======================================================== */}
          <div className="absolute inset-0 opacity-40 select-none pointer-events-none flex items-center justify-center z-0">
            <svg viewBox="0 0 1000 550" className="w-full h-auto filter drop-shadow-[0_0_15px_rgba(212,160,23,0.15)]" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="goldDots" x="0" y="0" width="14" height="14" patternUnits="userSpaceOnUse">
                  <circle cx="3" cy="3" r="1.8" fill="#D4A017" opacity="0.32" />
                </pattern>
                {/* Simplified stylized outline of the continents for clipping */}
                <clipPath id="worldClip">
                  {/* North America */}
                  <path d="M 50,100 C 100,60 210,70 240,110 C 260,130 250,180 200,220 C 180,240 120,220 90,260 C 60,300 40,260 50,100 Z" />
                  {/* South America */}
                  <path d="M 180,250 C 220,290 280,350 250,420 C 230,470 210,510 180,480 C 160,450 140,380 150,320 C 160,280 170,260 180,250 Z" />
                  {/* Greenland */}
                  <path d="M 230,20 C 270,10 320,30 300,60 C 280,80 240,70 230,20 Z" />
                  {/* Africa */}
                  <path d="M 400,230 C 460,210 510,250 530,300 C 550,350 510,450 460,470 C 430,480 400,430 400,380 C 400,340 370,300 390,250 C 390,240 400,235 400,230 Z" />
                  {/* Eurasia */}
                  <path d="M 360,110 C 420,60 520,30 650,40 C 750,50 880,80 920,130 C 950,180 900,250 840,260 C 780,270 700,200 640,250 C 580,300 520,220 480,240 C 420,260 380,200 360,110 Z" />
                  {/* India */}
                  <path d="M 640,220 C 660,240 680,270 660,300 C 640,280 620,240 640,220 Z" />
                  {/* Southeast Asia & Islands */}
                  <path d="M 750,280 C 780,290 820,320 790,350 C 760,340 740,300 750,280 Z" />
                  {/* Australia */}
                  <path d="M 780,390 C 840,380 890,410 880,450 C 850,490 790,470 760,440 C 750,420 760,400 780,390 Z" />
                </clipPath>
              </defs>
              
              {/* Draw clipped dot grid */}
              <rect x="0" y="0" width="1000" height="550" fill="url(#goldDots)" clipPath="url(#worldClip)" />
              
              {/* Highlight India specifically with a pulsing golden pin */}
              <circle cx="650" cy="245" r="4" fill="#D4A017" />
              <circle cx="650" cy="245" r="12" fill="none" stroke="#D4A017" strokeWidth="1" opacity="0.6" className="animate-ping" />
            </svg>
          </div>

          {/* ========================================================
              B. BACKGROUND LAYER: Overlay live trading graph
             ======================================================== */}
          <div className="absolute inset-0 select-none pointer-events-none z-10 flex items-center justify-center">
            <svg viewBox="0 0 600 200" className="w-full h-auto opacity-35" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="chartGlow" x1="0" y1="0" x2="0" y2="200" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#D4A017" stopOpacity="0.25" />
                  <stop offset="100%" stopColor="#D4A017" stopOpacity="0" />
                </linearGradient>
              </defs>
              
              {/* Animating Chart Area fill */}
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
              
              {/* Animating Chart Line */}
              <motion.path
                animate={{
                  d: [chartPath1, chartPath2, chartPath1]
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                stroke="#D4A017"
                strokeWidth="2"
                strokeLinecap="round"
                filter="drop-shadow(0 0 6px rgba(212,160,23,0.8))"
              />
            </svg>
          </div>

          {/* ========================================================
              C. FLOATING GLASS CARDS (GOLD, SILVER, LIVE UPDATES)
             ======================================================== */}
          <div className="absolute top-[20px] inset-x-0 flex flex-wrap gap-3 justify-center z-40 px-4">
            
            {/* Gold Rate Card */}
            <motion.div
              whileHover={{ y: -4, borderColor: 'rgba(212,160,23,0.4)' }}
              className="glass-card px-4 py-2.5 rounded-xl flex items-center gap-3 transition-colors duration-300"
            >
              <div className="flex flex-col text-left">
                <span className="text-[8.5px] font-bold text-neutral-400 tracking-wider uppercase">GOLD 24K (10g)</span>
                <span className="text-sm font-extrabold text-white tracking-wide font-display mt-0.5">₹72,540.00</span>
              </div>
              <span className="text-[9.5px] font-black text-green-400 bg-green-500/10 border border-green-500/25 px-1.5 py-0.5 rounded-md flex items-center gap-0.5">
                +1.45%
              </span>
            </motion.div>

            {/* Silver Rate Card */}
            <motion.div
              whileHover={{ y: -4, borderColor: 'rgba(212,160,23,0.4)' }}
              className="glass-card px-4 py-2.5 rounded-xl flex items-center gap-3 transition-colors duration-300"
            >
              <div className="flex flex-col text-left">
                <span className="text-[8.5px] font-bold text-neutral-400 tracking-wider uppercase">SILVER (1Kg)</span>
                <span className="text-sm font-extrabold text-white tracking-wide font-display mt-0.5">₹85,620.00</span>
              </div>
              <span className="text-[9.5px] font-black text-green-400 bg-green-500/10 border border-green-500/25 px-1.5 py-0.5 rounded-md flex items-center gap-0.5">
                +0.52%
              </span>
            </motion.div>

            {/* Live Updates Badge */}
            <div className="glass-card px-4 py-2.5 rounded-xl flex items-center gap-2 bg-[#090909]/80">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-[10px] font-extrabold text-neutral-300 tracking-wider uppercase font-sans">
                Live Updates
              </span>
            </div>

          </div>

          {/* ========================================================
              D. CENTER ILLUSTRATION: Realistic 3D Gold & Silver Bars
             ======================================================== */}
          <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-auto transform -translate-x-[40px] md:-translate-x-[60px] translate-y-[20px] scale-[0.9] md:scale-100">
            <ThreeDBars />
          </div>

          {/* ========================================================
              E. FLOATING MOBILE MOCKUP (Right side overlay)
             ======================================================== */}
          <div className="absolute right-[5px] md:right-[20px] bottom-[10px] md:bottom-[30px] z-30 pointer-events-auto scale-[0.82] md:scale-[0.9] lg:scale-100 origin-bottom-right">
            <MobileMockup />
          </div>

        </div>

      </main>
    </div>
  );
};

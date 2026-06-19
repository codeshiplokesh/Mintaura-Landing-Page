import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Lock, Cpu, Users } from 'lucide-react';
import { Logo } from './Logo';
import heroBannerImg from '../assets/Mintaura main banner1.png';

export const HeroSection: React.FC = () => {

  return (
    <div className="relative w-full lg:min-h-[860px] bg-[#000000] overflow-hidden flex flex-col justify-between select-none pb-12 lg:pb-16">
      
      {/* ========================================================
          CINEMATIC VIGNETTE & GOLD GLOWS (Institutional Depth)
         ======================================================== */}
      {/* Atmospheric Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0)_55%,rgba(0,0,0,0.85)_100%)] pointer-events-none z-20" />
      
      {/* Top Left Gold Atmospheric Glow */}
      <div className="absolute top-[-10%] left-[20%] w-[550px] h-[550px] bg-[radial-gradient(circle,rgba(232,178,76,0.12)_0%,rgba(0,0,0,0)_70%)] blur-[90px] pointer-events-none z-0" />
      
      {/* Bottom Right Gold Atmospheric Glow */}
      <div className="absolute bottom-[5%] right-[5%] w-[650px] h-[650px] bg-[radial-gradient(circle,rgba(200,146,43,0.08)_0%,rgba(0,0,0,0)_70%)] blur-[110px] pointer-events-none z-0" />

      {/* Header/Navbar */}
      <header className="relative w-full px-4 md:px-8 lg:px-12 py-10 flex items-center justify-between z-50">
        <Logo />
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="h-[54px] px-8 rounded-[12px] text-base font-semibold text-[#111111] bg-gradient-to-r from-[#FFE082] via-[#E8B24C] to-[#C8922B] hover:from-[#FFF] hover:to-[#FFE082] transition-all cursor-pointer shadow-[0_6px_18px_rgba(232,178,76,0.3)]"
        >
          Get Early Access
        </motion.button>
      </header>

      {/* Main Hero Content */}
      <main className="relative flex-1 w-full max-w-none px-4 md:px-8 lg:px-12 flex flex-col lg:flex-row items-center justify-between z-40 py-12 lg:py-16 h-full gap-12 lg:gap-16">
        
        {/* Left Side (42% on desktop) */}
        <div className="w-full lg:w-[42%] flex flex-col justify-center items-start text-left gap-7 lg:translate-y-[-10px] relative z-40">
          
          {/* Top Gold Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 h-[40px] rounded-full bg-[rgba(232,178,76,0.12)] border border-[rgba(232,178,76,0.25)] shadow-[0_2px_12px_rgba(232,178,76,0.05)]">
            <span className="w-2.5 h-2.5 rounded-full bg-[#E8B24C] shrink-0 shadow-[0_0_8px_#E8B24C]" />
            <span className="text-xs md:text-sm font-semibold text-[#E8B24C] font-sans tracking-wide">
              India's Premier Bullion Networking Platform
            </span>
          </div>

          {/* Large Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-[84px] font-extrabold text-white font-sans leading-[0.95] text-left tracking-tight m-0 max-w-[560px]">
            India’s Smart Network<br />
            for <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFE082] via-[#E8B24C] to-[#C8922B] drop-shadow-[0_2px_15px_rgba(232,178,76,0.15)]">Gold & Silver</span><br />
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
              whileHover={{ 
                scale: 1.015,
                boxShadow: '0 6px 25px rgba(232, 178, 76, 0.4)'
              }}
              whileTap={{ scale: 0.985 }}
              className="h-[58px] w-[220px] rounded-[10px] text-base font-bold text-[#111111] bg-gradient-to-r from-[#FFE082] via-[#E8B24C] to-[#C8922B] hover:from-[#FFF] hover:to-[#FFE082] shadow-[0_4px_20px_rgba(232,178,76,0.3)] transition-all cursor-pointer flex items-center justify-center"
            >
              Get Early Access Now
            </motion.button>

            {/* Button 2: Book a Demo */}
            <motion.button
              whileHover={{ scale: 1.015, backgroundColor: 'rgba(232,178,76,0.06)', borderColor: '#FFF' }}
              whileTap={{ scale: 0.985 }}
              className="h-[58px] w-[190px] rounded-[10px] text-base font-semibold text-[#E8B24C] border border-[#E8B24C]/60 bg-transparent transition-all cursor-pointer flex items-center justify-center gap-2"
            >
              Book a Demo
              <span className="text-[#E8B24C]">➔</span>
            </motion.button>
          </div>

          {/* Feature Row */}
          <div className="flex flex-wrap gap-x-6 gap-y-3 pt-6 border-t border-neutral-900/80 w-full mt-6">
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
        <div className="w-full lg:w-[58%] relative h-[500px] sm:h-[620px] lg:h-[720px] flex items-center justify-center mt-8 lg:mt-0 z-30">
          <img
            src={heroBannerImg}
            alt="Mintaura Bullion Trading Platform Mockup"
            className="absolute right-[-10px] md:right-[-20px] lg:right-[-40px] xl:right-[-60px] top-1/2 -translate-y-1/2 w-[105%] sm:w-[115%] lg:w-[145%] xl:w-[155%] max-w-[1180px] h-auto object-contain select-none pointer-events-none"
          />
        </div>

      </main>

    </div>
  );
};

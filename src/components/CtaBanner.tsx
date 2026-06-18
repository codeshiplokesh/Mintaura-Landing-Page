import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import goldBarsImg from '../assets/gold_bars_stack.png';

export const CtaBanner: React.FC = () => {
  return (
    <section className="relative w-full min-h-[160px] bg-gradient-to-r from-[#A86E1A] via-[#D7A04A] to-[#A86E1A] overflow-hidden rounded-none flex items-center justify-center py-6 md:py-8 lg:py-0 select-none">
      
      {/* Brushed Metal Texture Overlay */}
      <div 
        className="absolute inset-0 opacity-15 pointer-events-none mix-blend-overlay"
        style={{
          backgroundImage: 'repeating-linear-gradient(90deg, rgba(255, 255, 255, 0.08) 0px, rgba(255, 255, 255, 0.08) 1px, transparent 1px, transparent 4px)'
        }}
      />

      {/* Center Glow Effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.25)_0%,transparent_60%)] pointer-events-none z-0" />

      {/* Left Gold Bars Stack */}
      <div className="absolute left-0 bottom-[-10px] md:bottom-[-20px] z-10 pointer-events-none select-none origin-bottom-left scale-[0.6] md:scale-[0.8] lg:scale-100">
        <img 
          src={goldBarsImg} 
          alt="Gold bars stack left" 
          className="h-[150px] w-auto object-contain filter drop-shadow-[0_8px_16px_rgba(0,0,0,0.4)]"
        />
      </div>

      {/* Right Gold Bars Stack (Mirrored) */}
      <div className="absolute right-0 bottom-[-10px] md:bottom-[-20px] z-10 pointer-events-none select-none origin-bottom-right scale-[0.6] md:scale-[0.8] lg:scale-100">
        <img 
          src={goldBarsImg} 
          alt="Gold bars stack right" 
          className="h-[150px] w-auto object-contain scale-x-[-1] filter drop-shadow-[0_8px_16px_rgba(0,0,0,0.4)]"
        />
      </div>

      {/* Centered Content */}
      <div className="relative z-20 flex flex-col items-center justify-center text-center px-4 md:px-16 lg:h-[160px] w-full max-w-[1320px] mx-auto gap-3.5">
        
        {/* Texts Wrapper */}
        <div className="flex flex-col gap-1 items-center justify-center">
          {/* Main Heading */}
          <h2 className="text-white font-sans font-bold text-[24px] md:text-[32px] lg:text-[42px] leading-tight tracking-tight">
            Ready to Grow Your Bullion Network?
          </h2>
          
          {/* Subheading */}
          <p className="text-white/90 font-sans font-normal text-xs md:text-sm lg:text-[16px] leading-relaxed max-w-[600px]">
            Join dealers, refiners, and bullion professionals across India.
          </p>
        </div>

        {/* CTA Button */}
        <motion.button
          whileHover={{ 
            y: -2, 
            backgroundColor: '#000000',
            boxShadow: '0 0 20px rgba(246, 211, 123, 0.4)' 
          }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className="bg-[#111111] text-[#F6D37B] font-semibold text-[16px] w-[80%] md:w-[240px] h-[54px] rounded-[10px] flex items-center justify-center gap-2 cursor-pointer shadow-md"
        >
          <span>Get Early Access Now</span>
          <ArrowRight size={16} className="text-[#F6D37B]" strokeWidth={2.5} />
        </motion.button>

      </div>

    </section>
  );
};

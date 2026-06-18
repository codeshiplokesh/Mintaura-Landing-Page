import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import goldBarsImg from '../assets/gold_bars_stack.png';

export const CtaBanner: React.FC = () => {
  return (
    <section 
      className="relative w-full h-[78px] overflow-hidden rounded-none flex items-center justify-center select-none"
      style={{ 
        background: 'linear-gradient(to right, #A96E1E, #C58A36, #D49D4A, #C58A36, #A96E1E)' 
      }}
    >
      
      {/* Brushed Metal Texture Overlay */}
      <div 
        className="absolute inset-0 opacity-15 pointer-events-none mix-blend-overlay"
        style={{
          backgroundImage: 'repeating-linear-gradient(90deg, rgba(255, 255, 255, 0.08) 0px, rgba(255, 255, 255, 0.08) 1px, transparent 1px, transparent 4px)'
        }}
      />

      {/* Left Gold Bars Stack */}
      <div className="absolute left-[-10px] top-[-15px] z-10 pointer-events-none select-none origin-top-left scale-[0.6] sm:scale-[0.8] md:scale-[0.9] lg:scale-100">
        <img 
          src={goldBarsImg} 
          alt="Gold bars stack left" 
          className="h-[120px] w-auto object-contain"
        />
      </div>

      {/* Right Gold Bars Stack (Mirrored) */}
      <div className="absolute right-[-10px] top-[-15px] z-10 pointer-events-none select-none origin-top-right scale-[0.6] sm:scale-[0.8] md:scale-[0.9] lg:scale-100">
        <img 
          src={goldBarsImg} 
          alt="Gold bars stack right" 
          className="h-[120px] w-auto object-contain scale-x-[-1]"
        />
      </div>

      {/* Absolute Centered Content */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center justify-center w-full max-w-[600px] text-center px-4">
        
        {/* Heading */}
        <h2 className="text-white font-sans font-bold text-[18px] leading-none tracking-tight m-0 p-0">
          Ready to Grow Your Bullion Network?
        </h2>
        
        {/* Subtext */}
        <p className="text-white/85 font-sans font-normal text-[10px] leading-none mt-[2px] mb-0 p-0">
          Be early. Be connected. Be unstoppable.
        </p>

        {/* CTA Button */}
        <motion.button
          whileHover={{ 
            y: -1, 
            backgroundColor: '#000000'
          }}
          transition={{ duration: 0.2, ease: 'easeInOut' }}
          className="bg-[#111111] text-[#F2C15A] font-semibold text-[12px] w-[170px] h-[32px] rounded-[6px] flex items-center justify-center gap-1.5 shadow-[0_2px_8px_rgba(0,0,0,0.15)] hover:bg-[#000000] transition-all mt-[8px] cursor-pointer"
        >
          <span>Get Early Access Now</span>
          <ArrowRight size={12} className="text-[#F2C15A]" strokeWidth={2.5} />
        </motion.button>

      </div>

    </section>
  );
};

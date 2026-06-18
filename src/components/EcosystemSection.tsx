import React from 'react';
import { motion } from 'framer-motion';
import { UserCheck, Users, Briefcase, Lock, Share2, Compass, LineChart, Rocket } from 'lucide-react';
import handshakeImg from '../assets/gold_refinery_handshake.png';

export const EcosystemSection: React.FC = () => {
  // Stats items config
  const stats = [
    {
      icon: UserCheck,
      number: '10,000+',
      label: 'Verified Members'
    },
    {
      icon: Users,
      number: '5,000+',
      label: 'Active Traders'
    },
    {
      icon: Briefcase,
      number: '15,000+',
      label: 'Bullion Professionals'
    },
    {
      icon: Lock,
      number: '100%',
      label: 'Secure Platform'
    }
  ];

  // Features list config
  const features = [
    {
      icon: Share2,
      title: 'Connect with Industry Leaders',
      desc: 'Expand reach with verified bullion professionals nationwide.'
    },
    {
      icon: Compass,
      title: 'Discover New Opportunities',
      desc: 'Find genuine buyers, sellers and suppliers in your niche.'
    },
    {
      icon: LineChart,
      title: 'Stay Updated',
      desc: 'Real-time bullion prices and insights that help you trade better.'
    },
    {
      icon: Rocket,
      title: 'Trade Smarter & Faster',
      desc: 'Verified leads, smarter tools, and stronger connections.'
    }
  ];

  return (
    <section className="relative w-full bg-[#FAFAFA] pt-24 lg:pt-32 pb-20 px-4 md:px-8 lg:px-12 select-none z-30 flex flex-col gap-16">
      
      {/* ========================================================
          1. TOP STATISTICS BAR (Positioned absolutely overlapping Hero & Ecosystem)
         ======================================================== */}
      <div className="absolute top-0 left-4 right-4 md:left-8 md:right-8 lg:left-12 lg:right-12 -translate-y-1/2 bg-white rounded-[24px] md:rounded-[28px] shadow-[0_20px_50px_rgba(0,0,0,0.06),0_0_1px_rgba(0,0,0,0.1)] border border-neutral-100/50 p-6 md:py-[32px] md:px-[40px] z-40">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-8 gap-x-6">
          {stats.map((stat, i) => (
            <div key={i} className="flex items-center gap-4">
              {/* Rounded square icon container */}
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-[#FAF0DD]/40 border border-[#F3DFB6]/50 flex items-center justify-center shrink-0">
                <stat.icon size={22} className="text-[#C58A36]" strokeWidth={2} />
              </div>
              
              {/* Stat Details */}
              <div className="flex flex-col text-left">
                <span className="text-2xl md:text-3xl font-extrabold text-neutral-900 font-display tracking-tight leading-none">
                  {stat.number}
                </span>
                <span className="text-[11px] md:text-xs font-semibold text-neutral-400 uppercase tracking-widest mt-1.5 leading-snug">
                  {stat.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ========================================================
          2. MAIN CONTENT AREA (Two Columns Grid - Full Width)
         ======================================================== */}
      <div className="w-full max-w-none flex flex-col lg:flex-row items-center justify-between gap-[50px] lg:gap-[70px]">
        
        {/* Left Side (48% width on large screens) */}
        <div className="w-full lg:w-[48%] flex flex-col items-start text-left gap-6">
          
          {/* Section Label */}
          <span className="text-[13px] md:text-sm font-extrabold text-gold-500 tracking-[0.2em] uppercase">
            Why Mintaura
          </span>

          {/* Section Heading */}
          <h2 className="text-3xl md:text-4xl lg:text-[46px] font-extrabold text-neutral-900 font-display leading-[1.15] tracking-tight">
            A Powerful Ecosystem for<br />
            Bullion Professionals
          </h2>

          {/* Section Paragraph */}
          <p className="text-neutral-500 text-sm md:text-base lg:text-[18px] leading-relaxed font-sans max-w-[520px]">
            Whether you're a wholesaler, trader, refiner, importer, supplier or retailer, Mintaura gives you the reach, insights and tools to grow—faster.
          </p>

          {/* Feature Grid (2x2) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-9 mt-6 w-full">
            {features.map((feature, i) => (
              <div key={i} className="flex gap-4">
                {/* Feature Icon container */}
                <div className="w-[52px] h-[52px] rounded-xl bg-neutral-50 border border-neutral-100 flex items-center justify-center shrink-0 shadow-sm">
                  <feature.icon size={20} className="text-gold-500" strokeWidth={2} />
                </div>
                
                {/* Feature Text details */}
                <div className="flex flex-col text-left justify-start">
                  <h3 className="text-[17px] md:text-[18px] font-bold text-neutral-900 leading-snug">
                    {feature.title}
                  </h3>
                  <p className="text-neutral-400 text-xs md:text-sm mt-1.5 leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Right Side (52% width on large screens) */}
        <div className="w-full lg:w-[52%]">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative w-full aspect-[16/10] rounded-[24px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.08)] border border-neutral-100/30 group"
          >
            {/* Partnership Image */}
            <img
              src={handshakeImg}
              alt="Premium bullion partnership handshake"
              className="w-full h-full object-cover object-center transition-transform duration-[4000ms] group-hover:scale-[1.04]"
            />
            
            {/* Thin subtle gold inner glow outline */}
            <div className="absolute inset-0 border border-white/10 rounded-[24px] pointer-events-none" />
          </motion.div>
        </div>

      </div>

    </section>
  );
};

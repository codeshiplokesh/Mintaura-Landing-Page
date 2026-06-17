import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Award, ShieldCheck, Home, BarChart2, Globe, MessageSquare, User } from 'lucide-react';

export const MobileMockup: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{ y: [-6, 6, -6] }}
      transition={{
        duration: 7,
        repeat: Infinity,
        ease: 'easeInOut'
      }}
      className={`relative w-[270px] h-[550px] rounded-[48px] bg-slate-900 border-[10px] border-neutral-800 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8),0_0_40px_rgba(212,160,23,0.08)] overflow-hidden select-none ${className}`}
    >
      {/* Speaker and Camera Notch */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[110px] h-[26px] bg-neutral-800 rounded-b-[20px] z-50 flex items-center justify-center">
        <div className="w-10 h-1 bg-neutral-900 rounded-full mb-1" />
        <div className="w-2.5 h-2.5 bg-neutral-900 rounded-full ml-2 mb-1" />
      </div>

      {/* Screen Reflection Highlight */}
      <div className="absolute inset-y-0 -left-[20%] w-[50%] -skew-x-20 bg-gradient-to-r from-white/3 to-transparent pointer-events-none z-40" />

      {/* Internal Screen Area */}
      <div className="w-full h-full bg-[#050505] flex flex-col justify-between pt-8 pb-3 px-3 text-white font-sans text-xs">
        
        {/* Mockup Header */}
        <div className="flex justify-between items-center px-1.5 py-1">
          {/* Brand Logo */}
          <div className="flex items-center gap-1">
            <svg viewBox="0 0 100 100" fill="none" className="w-4 h-4 text-gold-500 filter drop-shadow-[0_0_3px_rgba(212,160,23,0.5)]" xmlns="http://www.w3.org/2000/svg">
              <rect x="15" y="25" width="22" height="58" rx="11" transform="rotate(-28 15 25)" fill="currentColor" />
              <rect x="42" y="25" width="22" height="58" rx="11" transform="rotate(-28 42 25)" fill="currentColor" />
              <circle cx="75" cy="70" r="12" fill="currentColor" />
            </svg>
            <span className="font-display font-semibold tracking-tight text-[11px]">
              mint<span className="text-gold-500">aura</span>
            </span>
          </div>
          {/* Signal & Battery Status */}
          <div className="flex items-center gap-1.5 text-[8.5px] text-neutral-500">
            <span>5G</span>
            <div className="w-5 h-2.5 rounded-[3px] border border-neutral-600 p-0.5 flex items-center">
              <div className="w-full h-full bg-gold-500 rounded-[1px]" />
            </div>
          </div>
        </div>

        {/* Dashboard Content */}
        <div className="flex-1 flex flex-col gap-3.5 mt-2.5 overflow-y-auto no-scrollbar pb-10">
          
          {/* Segment: Live Price Feeds */}
          <div className="flex flex-col gap-2">
            <div className="flex justify-between items-center px-1">
              <span className="text-[10px] font-bold text-neutral-400 tracking-wide uppercase">Live Bullion Rates</span>
              <div className="flex items-center gap-1 bg-green-500/10 px-1.5 py-0.5 rounded-full border border-green-500/25">
                <span className="w-1 h-1 rounded-full bg-green-400 animate-ping" />
                <span className="text-[7.5px] font-bold text-green-400 uppercase">Live</span>
              </div>
            </div>

            {/* Gold Rate Glass Card */}
            <div className="glass-card p-3 rounded-2xl flex flex-col gap-1 border-white/5 bg-white/3">
              <div className="flex justify-between items-center text-[9px] text-neutral-400 font-medium">
                <span>MCX GOLD 24K (10g)</span>
                <span className="text-green-400 flex items-center gap-0.5 font-bold"><TrendingUp size={10} /> +1.45%</span>
              </div>
              <div className="text-base font-extrabold text-white tracking-wide font-display mt-0.5">
                ₹72,540.00
              </div>
            </div>

            {/* Silver Rate Glass Card */}
            <div className="glass-card p-3 rounded-2xl flex flex-col gap-1 border-white/5 bg-white/3">
              <div className="flex justify-between items-center text-[9px] text-neutral-400 font-medium">
                <span>MCX SILVER (1kg)</span>
                <span className="text-green-400 flex items-center gap-0.5 font-bold"><TrendingUp size={10} /> +0.52%</span>
              </div>
              <div className="text-base font-extrabold text-white tracking-wide font-display mt-0.5">
                ₹85,620.00
              </div>
            </div>

            {/* Forex rate (USD/INR) */}
            <div className="glass-card px-3 py-2.5 rounded-2xl flex justify-between items-center border-white/5 bg-white/3">
              <div className="flex flex-col">
                <span className="text-[8.5px] text-neutral-400 font-medium">USD/INR SPOT</span>
                <span className="text-xs font-bold font-display mt-0.5">₹83.26</span>
              </div>
              <span className="text-[8.5px] font-bold text-green-400 px-1.5 py-0.5 rounded-md bg-green-500/5 border border-green-500/10">+0.38%</span>
            </div>
          </div>

          {/* Segment: Top Online Traders */}
          <div className="flex flex-col gap-2">
            <span className="text-[10px] font-bold text-neutral-400 tracking-wide uppercase px-1">Top Verified Traders</span>
            
            <div className="flex flex-col gap-1.5">
              {[
                { name: 'Shree Bullions', location: 'Mumbai', initial: 'SB' },
                { name: 'Arman Exports', location: 'Delhi, India', initial: 'AE' },
                { name: 'Royal Mint India', location: 'Gujarat', initial: 'RM' }
              ].map((trader, i) => (
                <div key={i} className="flex justify-between items-center glass-card p-2.5 rounded-xl border-white/5 bg-white/2">
                  <div className="flex items-center gap-2">
                    {/* Trader Avatar */}
                    <div className="w-7 h-7 rounded-full bg-gradient-to-br from-gold-500 to-amber-800 p-[1px] flex items-center justify-center font-display text-[9px] font-black text-white">
                      <div className="w-full h-full bg-[#0d0d0d] rounded-full flex items-center justify-center">
                        {trader.initial}
                      </div>
                    </div>
                    {/* Trader Name & Location */}
                    <div className="flex flex-col">
                      <span className="font-bold text-[10.5px] text-white flex items-center gap-1">
                        {trader.name}
                        <ShieldCheck size={10} className="text-gold-500 fill-gold-500/10" />
                      </span>
                      <span className="text-[8px] text-neutral-500">{trader.location}</span>
                    </div>
                  </div>
                  <Award size={13} className="text-gold-500 opacity-80" />
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Mockup Bottom Navigation Bar */}
        <div className="relative glass-card -mx-1 px-3 py-2 rounded-2xl border-white/5 flex justify-between items-center bg-white/5">
          <button className="flex flex-col items-center gap-0.5 text-gold-500">
            <Home size={15} />
            <span className="text-[7.5px] font-bold font-sans">Home</span>
          </button>
          <button className="flex flex-col items-center gap-0.5 text-neutral-500 hover:text-white">
            <BarChart2 size={15} />
            <span className="text-[7.5px] font-sans">Rates</span>
          </button>
          <button className="flex flex-col items-center gap-0.5 text-neutral-500 hover:text-white">
            <Globe size={15} />
            <span className="text-[7.5px] font-sans">Network</span>
          </button>
          <button className="flex flex-col items-center gap-0.5 text-neutral-500 hover:text-white">
            <MessageSquare size={15} />
            <span className="text-[7.5px] font-sans">Chats</span>
          </button>
          <button className="flex flex-col items-center gap-0.5 text-neutral-500 hover:text-white">
            <User size={15} />
            <span className="text-[7.5px] font-sans">Profile</span>
          </button>
        </div>

      </div>
    </motion.div>
  );
};

import React from 'react';
import { motion } from 'framer-motion';
import { 
  ShieldCheck, CircleDollarSign, Building2, TrendingUp, Clock, 
  MapPin, CheckCircle2, ChevronRight, Sparkles, Hammer, Coins, 
  Factory, Globe, Truck, LineChart, Users
} from 'lucide-react';
import piggyBankImg from '../assets/gold_piggy_bank.png';

// App Store SVG Button
const AppStoreButton: React.FC = () => (
  <a href="#app-store" className="inline-flex items-center gap-2 bg-[#050505] hover:bg-neutral-800 border border-neutral-800 text-white px-4 py-2.5 rounded-xl transition-all duration-300 shadow-md">
    <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg">
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 4.17c.66-.81 1.11-1.93.99-3.06-1 .04-2.21.67-2.93 1.49-.62.69-1.16 1.84-1.01 2.96 1.12.09 2.27-.56 2.95-1.39" />
    </svg>
    <div className="flex flex-col items-start text-[8px] leading-tight font-sans tracking-wide">
      <span className="text-neutral-400 font-semibold uppercase">Download on the</span>
      <span className="text-xs font-bold font-display -mt-0.5">App Store</span>
    </div>
  </a>
);

// Google Play SVG Button
const GooglePlayButton: React.FC = () => (
  <a href="#google-play" className="inline-flex items-center gap-2 bg-[#050505] hover:bg-neutral-800 border border-neutral-800 text-white px-4 py-2.5 rounded-xl transition-all duration-300 shadow-md">
    <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg">
      <path d="M3 5.27v13.46c0 .82.68 1.49 1.5 1.49h13.46c.82 0 1.5-.67 1.5-1.49V5.27c0-.82-.68-1.5-1.5-1.5H4.5c-.82 0-1.5.68-1.5 1.5zm10.74 3.73l2.25 2.25-2.25 2.25v-1.5H7.5v-1.5h6.49V9z" className="hidden" />
      <path d="M3.609 1.814L13.782 12 3.609 22.186A1.66 1.66 0 0 1 3 20.91V3.09c0-.528.246-.99.609-1.276zm11.237 9.123l2.84 2.84L4.767 21.84l10.079-10.903zm3.766.452l-2.73-2.73-3.064 3.31 3.064 3.31 2.73-2.73a1.65 1.65 0 0 0 0-1.16zM4.767 2.16l12.919 8.062-2.84 2.84L4.767 2.16z" />
    </svg>
    <div className="flex flex-col items-start text-[8px] leading-tight font-sans tracking-wide">
      <span className="text-neutral-400 font-semibold uppercase">Get it on</span>
      <span className="text-xs font-bold font-display -mt-0.5">Google Play</span>
    </div>
  </a>
);

export const DealsSection: React.FC = () => {
  // Benefits details
  const benefits = [
    {
      icon: ShieldCheck,
      title: 'Better Price Discovery',
      desc: 'Compare offers and get the best rates from verified sources.'
    },
    {
      icon: CircleDollarSign,
      title: 'Lower Transaction Cost',
      desc: 'Reduce middlemen and unnecessary layers.'
    },
    {
      icon: Building2,
      title: 'More Business Opportunities',
      desc: 'Access to verified bulk buyers.'
    },
    {
      icon: TrendingUp,
      title: 'Higher Margins',
      desc: 'Increase your profit potential with the right network.'
    },
    {
      icon: Clock,
      title: 'Time Saving',
      desc: 'Close deals faster, and grow continuously.'
    }
  ];

  // Process timeline details
  const steps = [
    {
      num: 1,
      icon: Sparkles,
      title: 'One Tap Access',
      desc: 'Everything you need, just a tap away.'
    },
    {
      num: 2,
      icon: LineChart,
      title: 'Live Market Info',
      desc: 'Get real-time prices and trends.'
    },
    {
      num: 3,
      icon: Users,
      title: 'Connect & Expand',
      desc: 'Expand your network and your business.'
    },
    {
      num: 4,
      icon: TrendingUp,
      title: 'Grow & Earn',
      desc: 'Your data, your control.'
    }
  ];

  // Categories of Who Uses Mintaura
  const categories = [
    { icon: Coins, text: 'Bullion Dealers' },
    { icon: Factory, text: 'Refiners & Mints' },
    { icon: TrendingUp, text: 'Traders' },
    { icon: Hammer, text: 'Refiners' },
    { icon: Globe, text: 'Melters & Suppliers' },
    { icon: Truck, text: 'Importers & Exporters' }
  ];

  // Bottom Statistics
  const statistics = [
    { icon: Users, num: '10,000+', label: 'Industry Connectors' },
    { icon: ShieldCheck, num: '5,000+', label: 'Verified Bullion Listings' },
    { icon: MapPin, num: '50+', label: 'Cities Covered' },
    { icon: Clock, num: '24/7', label: 'Networking Access' }
  ];

  return (
    <section className="relative w-full bg-[#FAFAFA] pt-20 pb-20 px-6 md:px-10 select-none z-10 overflow-hidden">
      
      {/* ========================================================
          1. TOP ROW: Title, Benefits (68%) & Gold Piggy Bank (32%)
         ======================================================== */}
      <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row gap-8 items-start mb-[70px]">
        
        {/* Left Side (68% width on desktop) */}
        <div className="w-full lg:w-[68%] flex flex-col items-start text-left gap-4">
          <span className="text-[13px] md:text-sm font-extrabold text-gold-500 tracking-[0.2em] uppercase leading-none">
            Mintaura Deals, Faster
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-[46px] font-extrabold text-neutral-900 font-display leading-[1.15] tracking-tight max-w-2xl mb-8">
            Mintaura Helps You Save More on Every Deal
          </h2>
          
          {/* 5-Column Benefits Row with vertical dividers */}
          <div className="grid grid-cols-1 sm:grid-cols-5 gap-6 sm:gap-4 w-full relative">
            {benefits.map((benefit, i) => (
              <div key={i} className="flex flex-col items-center sm:items-start text-center sm:text-left px-2 relative">
                {/* Gold outline icon */}
                <div className="text-gold-500 mb-5 shrink-0">
                  <benefit.icon size={52} strokeWidth={1.5} />
                </div>
                {/* Benefit title */}
                <h3 className="text-[17px] md:text-[18px] font-bold text-neutral-900 leading-snug mb-2 font-display">
                  {benefit.title}
                </h3>
                {/* Description */}
                <p className="text-neutral-500 text-[13.5px] leading-relaxed max-w-[180px]">
                  {benefit.desc}
                </p>
                
                {/* Vertical Divider (displays on tablet/desktop between cards) */}
                {i < benefits.length - 1 && (
                  <div className="hidden sm:block absolute right-0 top-6 bottom-6 w-[1px] bg-[#EAEAEA]" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Right Side (32% width on desktop) - Black Gold Piggy Bank Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-[32%] bg-[#050505] rounded-[24px] p-7 md:p-[35px] shadow-[0_12px_35px_rgba(0,0,0,0.08)] flex items-center justify-between border border-neutral-800/40 relative overflow-hidden h-[280px]"
        >
          {/* Subtle gold glow behind piggy */}
          <div className="absolute -right-10 -bottom-10 w-44 h-44 bg-gold-500/10 blur-[40px] rounded-full pointer-events-none" />

          {/* Left card content */}
          <div className="flex flex-col text-left justify-between h-full z-10 w-[60%]">
            <div className="flex flex-col gap-1">
              <span className="text-gold-500 text-lg md:text-xl font-black font-display tracking-wide uppercase leading-tight">
                Save More.
              </span>
              <span className="text-gold-500 text-lg md:text-xl font-black font-display tracking-wide uppercase leading-tight">
                Profit More.
              </span>
              <span className="text-gold-500 text-lg md:text-xl font-black font-display tracking-wide uppercase leading-tight">
                Grow More.
              </span>
            </div>
            
            <p className="text-neutral-400 text-xs md:text-[13px] leading-relaxed mt-4">
              Mintaura is not just a platform – it's your growth partner in the bullion industry.
            </p>
          </div>

          {/* Right card visual - Tilted Piggy Bank & Floating Coins */}
          <div className="relative w-[40%] h-full flex items-center justify-center">
            {/* Animating Coins (Floating up/down) */}
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                animate={{
                  y: [-10, 10, -10],
                  rotate: [0, 360],
                  scale: [1, 0.95, 1]
                }}
                transition={{
                  duration: 4 + i,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: i * 0.5
                }}
                className="absolute w-4 h-4 rounded-full bg-gradient-to-br from-gold-300 to-gold-600 border border-gold-200/50 shadow-md flex items-center justify-center text-[8px] font-black text-amber-950 font-sans"
                style={{
                  top: `${15 + i * 25}%`,
                  left: `${25 + i * 30}%`,
                  zIndex: 20
                }}
              >
                ₹
              </motion.div>
            ))}

            {/* 3D Piggy Bank Image */}
            <motion.img
              animate={{ y: [-5, 5, -5] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
              src={piggyBankImg}
              alt="Premium 3D gold piggy bank render"
              className="w-[120px] h-[120px] object-contain object-center filter drop-shadow-[0_15px_20px_rgba(212,160,23,0.25)] select-none pointer-events-none z-10"
            />
          </div>
        </motion.div>

      </div>

      {/* ========================================================
          2. MIDDLE ROW: Process Flow Card (45%) & App/Categories (55%)
         ======================================================== */}
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-[30px] items-stretch">
        
        {/* Left Column (45% width) - Dark Card with Horizontal Timeline */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-5 bg-[#050505] rounded-[24px] p-8 md:p-[45px] shadow-[0_12px_35px_rgba(0,0,0,0.08)] border border-neutral-900 flex flex-col justify-between"
        >
          {/* Label */}
          <div className="text-left mb-8 md:mb-12">
            <span className="text-[12px] md:text-sm font-extrabold text-gold-500 tracking-[0.2em] uppercase leading-none">
              Use It & Profit
            </span>
          </div>

          {/* Steps Horizontal Row */}
          <div className="flex flex-col sm:flex-row gap-6 sm:gap-2 items-start justify-between w-full relative">
            {steps.map((step, i) => (
              <div key={i} className="flex-1 flex flex-col items-center sm:items-start text-center sm:text-left relative">
                {/* Numeric Badge in Gold Circle */}
                <div className="w-[52px] h-[52px] rounded-full bg-gold-500/10 border border-gold-500 flex items-center justify-center mb-5 shrink-0 shadow-[0_0_12px_rgba(212,160,23,0.3)]">
                  <step.icon size={20} className="text-gold-500" />
                </div>
                {/* Step details */}
                <h4 className="text-base md:text-[17px] font-bold text-white leading-snug mb-1 font-display">
                  {step.title}
                </h4>
                <p className="text-neutral-400 text-xs md:text-[13px] leading-relaxed max-w-[125px]">
                  {step.desc}
                </p>

                {/* Arrow Connector (except last) */}
                {i < steps.length - 1 && (
                  <div className="hidden sm:flex absolute left-[65px] top-[25px] items-center text-gold-500/45 pointer-events-none">
                    <ChevronRight size={18} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right Column (55% width) - White App Marketing & Categories Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="lg:col-span-7 bg-white rounded-[24px] p-8 md:px-[35px] md:py-[40px] shadow-[0_12px_35px_rgba(0,0,0,0.06)] border border-[#ECECEC] grid grid-cols-1 md:grid-cols-12 gap-8 items-center"
        >
          {/* Sub-Col 1: Categories List (Who uses Mintaura?) - Spans 5 cols */}
          <div className="md:col-span-5 flex flex-col items-start text-left gap-4 h-full justify-between">
            <div className="flex flex-col gap-5 w-full">
              <span className="text-[12px] md:text-sm font-extrabold text-gold-500 tracking-[0.2em] uppercase leading-none">
                Who Uses Mintaura?
              </span>
              
              <div className="grid grid-cols-2 gap-x-4 gap-y-4 mt-1.5 w-full">
                {categories.map((cat, i) => (
                  <div key={i} className="flex flex-col items-start gap-1.5 p-2 rounded-xl bg-neutral-50 border border-neutral-100 hover:border-gold-500/35 transition-all duration-300">
                    <cat.icon size={18} className="text-gold-500 shrink-0" strokeWidth={2} />
                    <span className="text-[12.5px] font-bold text-neutral-800 leading-tight">
                      {cat.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sub-Col 2: Floating Tilted Phone - Spans 3 cols */}
          <div className="md:col-span-3 flex items-center justify-center relative h-[250px] select-none pointer-events-none">
            {/* Miniature Phone representation */}
            <motion.div
              animate={{ y: [-5, 5, -5] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              style={{
                transformStyle: 'preserve-3d',
                transform: 'perspective(800px) rotateY(-18deg) rotateX(8deg) rotateZ(-6deg)'
              }}
              className="w-[120px] h-[230px] rounded-[24px] bg-slate-900 border-[4px] border-neutral-800 shadow-[0_20px_45px_rgba(0,0,0,0.5),0_0_20px_rgba(212,160,23,0.05)] overflow-hidden flex flex-col justify-between py-4 px-2"
            >
              {/* Internal Screen mockup design */}
              <div className="w-full h-full bg-[#050505] rounded-[18px] flex flex-col justify-between p-1 text-white text-[5px]">
                {/* Logo top */}
                <div className="flex justify-between items-center px-1">
                  <span className="font-bold scale-75 text-gold-500 font-display">mint.</span>
                  <span className="scale-75 text-green-400">● Live</span>
                </div>
                {/* Pricing content */}
                <div className="flex flex-col gap-1 mt-2 flex-1">
                  <div className="bg-white/5 p-1 rounded-md border border-white/5 flex flex-col gap-0.5">
                    <span>GOLD 24K</span>
                    <span className="font-bold text-[7px] text-white">₹72,540</span>
                  </div>
                  <div className="bg-white/5 p-1 rounded-md border border-white/5 flex flex-col gap-0.5">
                    <span>SILVER 1K</span>
                    <span className="font-bold text-[7px] text-white">₹85,620</span>
                  </div>
                </div>
                {/* Navigation bottom */}
                <div className="h-2.5 bg-white/5 rounded-full flex justify-around items-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-gold-500" />
                  <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
                  <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
                </div>
              </div>
            </motion.div>
          </div>

          {/* Sub-Col 3: Text Features and Buttons - Spans 4 cols */}
          <div className="md:col-span-4 flex flex-col items-start text-left gap-4 h-full justify-between">
            <div className="flex flex-col gap-3.5">
              <h3 className="text-xl md:text-2xl font-black text-neutral-900 tracking-tight leading-snug font-display">
                Your Bullion Network<br />in Your Pocket
              </h3>
              
              <ul className="flex flex-col gap-1.5 mt-1.5">
                {[
                  'Live Market Updates',
                  'Smart Networking',
                  'Verified Connections',
                  'Trade with Confidence'
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-xs font-bold text-neutral-600">
                    <CheckCircle2 size={13} className="text-gold-500 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Platform Download Buttons */}
            <div className="flex flex-col sm:flex-row gap-2 mt-4 w-full">
              <AppStoreButton />
              <GooglePlayButton />
            </div>
          </div>

        </motion.div>

      </div>

      {/* ========================================================
          3. BOTTOM STATISTICS BAR (Full width)
         ======================================================== */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-7xl mx-auto bg-[#050505] border border-neutral-900/60 rounded-[24px] py-8 px-6 md:px-12 mt-10 shadow-[0_15px_35px_rgba(0,0,0,0.3)]"
      >
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-8 gap-x-6 items-center">
          {statistics.map((stat, i) => (
            <div key={i} className="flex items-center gap-4 justify-start lg:justify-center">
              {/* Gold outline icon */}
              <div className="text-gold-500 shrink-0">
                <stat.icon size={36} strokeWidth={1.5} />
              </div>
              {/* Stat text */}
              <div className="flex flex-col text-left">
                <span className="text-3xl md:text-[38px] font-extrabold text-gold-500 tracking-tight leading-none font-display">
                  {stat.num}
                </span>
                <span className="text-[13px] md:text-sm font-semibold text-neutral-300 tracking-wide mt-1.5 uppercase leading-none">
                  {stat.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

    </section>
  );
};

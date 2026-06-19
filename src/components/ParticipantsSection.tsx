import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Users, LineChart, Target, MessageSquare, Smartphone } from 'lucide-react';

// Laurel Wreath decoration component
const LaurelWreath: React.FC<{ isRight?: boolean }> = ({ isRight = false }) => (
  <svg
    viewBox="0 0 60 160"
    fill="currentColor"
    className={`w-10 h-28 text-gold-500/25 shrink-0 hidden md:block ${isRight ? 'scale-x-[-1]' : ''}`}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M 45,10 C 25,40 15,80 15,120 C 15,135 20,145 25,150"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path d="M 45,10 C 47,15 44,22 38,18 C 36,12 40,8 45,10 Z" />
    <path d="M 36,25 C 40,29 36,36 30,32 C 28,26 31,22 36,25 Z" />
    <path d="M 28,42 C 32,46 28,53 22,48 C 20,42 23,38 28,42 Z" />
    <path d="M 22,60 C 26,64 22,71 16,66 C 14,60 17,56 22,60 Z" />
    <path d="M 18,80 C 22,84 18,91 12,86 C 10,80 13,76 18,80 Z" />
    <path d="M 16,100 C 20,104 16,111 10,106 C 8,100 11,96 16,100 Z" />
    <path d="M 17,120 C 21,124 17,131 11,126 C 9,120 12,116 17,120 Z" />
    <path d="M 21,138 C 25,142 20,148 15,143 C 14,137 17,134 21,138 Z" />
  </svg>
);

export const ParticipantsSection: React.FC = () => {
  // 6 feature cards details
  const cards = [
    {
      icon: ShieldCheck,
      title: 'Verified Member Network',
      desc: 'Only genuine bullion professionals and verified businesses from across India only.'
    },
    {
      icon: Users,
      title: 'Business Discovery',
      desc: 'Find buyers, sellers, suppliers and partners that align with your goals.'
    },
    {
      icon: LineChart,
      title: 'Market Intelligence',
      desc: 'Track live market data and upcoming trends to stay ahead.'
    },
    {
      icon: Target,
      title: 'Lead Generation',
      desc: 'Connect with active buyers and sellers seriously.'
    },
    {
      icon: MessageSquare,
      title: 'Secure Communication',
      desc: 'Chat, share and transact within a trusted environment.'
    },
    {
      icon: Smartphone,
      title: 'Mobile First Do business',
      desc: 'on the platform anytime, anywhere.'
    }
  ];

  // Association logos custom icons
  const associations = [
    {
      logo: (
        <svg viewBox="0 0 100 100" className="w-10 h-10 text-gold-500/80 mb-2" fill="currentColor">
          <path d="M 50,15 L 80,35 L 80,75 L 50,90 L 20,75 L 20,35 Z" fill="none" stroke="currentColor" strokeWidth="2" />
          <path d="M 50,22 L 50,83 M 35,50 L 65,50 M 42,35 L 58,35 M 42,65 L 58,65" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      ),
      name: 'IBJA',
      subtitle: 'India Bullion and Jewellers Association Ltd.'
    },
    {
      logo: (
        <svg viewBox="0 0 100 100" className="w-10 h-10 text-gold-500/80 mb-2" fill="currentColor">
          <circle cx="50" cy="50" r="35" fill="none" stroke="currentColor" strokeWidth="2" />
          <polygon points="50,22 65,45 60,78 40,78 35,45" fill="none" stroke="currentColor" strokeWidth="1.5" />
          <line x1="50" y1="50" x2="50" y2="78" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      ),
      name: 'GJC',
      subtitle: 'Gems & Jewellery Council of India'
    },
    {
      logo: (
        <svg viewBox="0 0 100 100" className="w-10 h-10 text-gold-500/80 mb-2" fill="currentColor">
          <circle cx="50" cy="50" r="35" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="4 2" />
          <path d="M 50,15 A 35,35 0 0 1 50,85 A 35,35 0 0 1 50,15 Z" fill="none" stroke="currentColor" strokeWidth="1" />
          <circle cx="50" cy="50" r="10" />
        </svg>
      ),
      name: 'BFAP',
      subtitle: 'Bullion Federation of Asia Pacific'
    },
    {
      logo: (
        <svg viewBox="0 0 100 100" className="w-10 h-10 text-gold-500/80 mb-2" fill="currentColor">
          <rect x="25" y="25" width="50" height="50" rx="10" fill="none" stroke="currentColor" strokeWidth="2" />
          <circle cx="50" cy="50" r="15" fill="none" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="50" cy="50" r="6" />
        </svg>
      ),
      name: 'AGMP',
      subtitle: 'Association of Gold Makers and Precious Metals'
    },
    {
      logo: (
        <svg viewBox="0 0 100 100" className="w-10 h-10 text-gold-500/80 mb-2" fill="currentColor">
          <polygon points="50,15 85,50 50,85 15,50" fill="none" stroke="currentColor" strokeWidth="2" />
          <line x1="15" y1="50" x2="85" y2="50" stroke="currentColor" strokeWidth="1.5" />
          <line x1="50" y1="15" x2="50" y2="85" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      ),
      name: 'SGBMA',
      subtitle: 'Srets Gold & Bullion Market Association'
    },
    {
      logo: (
        <svg viewBox="0 0 100 100" className="w-10 h-10 text-gold-500/60 mb-2" fill="currentColor">
          <circle cx="50" cy="50" r="35" fill="none" stroke="currentColor" strokeWidth="1.5" />
          <path d="M 20,50 Q 50,20 80,50 Q 50,80 20,50 Z" fill="none" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      ),
      name: 'And many More',
      subtitle: 'Industry Leaders Worldwide'
    }
  ];

  return (
    <section className="relative w-full bg-[#FAFAFA] pt-20 pb-20 px-4 md:px-8 lg:px-12 select-none z-20">
      
      {/* ========================================================
          1. HEADER SECTION
         ======================================================= */}
      <div className="text-center flex flex-col items-center gap-2.5 mb-[60px]">
        {/* Top gold tag */}
        <span className="text-[13px] md:text-sm font-extrabold text-gold-500 tracking-[0.2em] uppercase">
          Participants Across
        </span>
        {/* Main section heading */}
        <h2 className="text-3xl md:text-4xl lg:text-[52px] font-extrabold text-neutral-900 font-display leading-[1.15] tracking-tight max-w-[900px]">
          Built Specifically for the Bullion Industry
        </h2>
      </div>

      {/* ========================================================
          2. FEATURE CARDS GRID (6 cards)
         ======================================================== */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6 w-full max-w-none">
        {cards.map((card, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            whileHover={{ 
              y: -8, 
              borderColor: '#D4A017',
              boxShadow: '0 20px 40px rgba(212,160,23,0.08)'
            }}
            className="flex flex-col items-center justify-start bg-white border border-[#ECECEC] rounded-[22px] py-10 px-6 h-[340px] text-center shadow-[0_10px_35px_rgba(0,0,0,0.03)] transition-all duration-300 group cursor-pointer"
          >
            {/* Outline Gold Icon container */}
            <motion.div 
              variants={{
                hover: { scale: 1.08 }
              }}
              className="text-gold-500 mb-7 drop-shadow-sm transition-transform duration-300"
            >
              <card.icon size={48} strokeWidth={1.5} />
            </motion.div>
            
            {/* Card Title */}
            <h3 className="text-[19px] md:text-[20px] font-bold text-neutral-900 leading-snug font-display mb-4">
              {card.title}
            </h3>
            
            {/* Card Description */}
            <p className="text-neutral-500 text-sm leading-relaxed max-w-[220px]">
              {card.desc}
            </p>
          </motion.div>
        ))}
      </div>

      {/* ========================================================
          3. TRUSTED BY LEADING ASSOCIATIONS BANNER (Bottom)
         ======================================================== */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative mt-[70px] w-full max-w-none bg-[#050505] rounded-[24px] py-[40px] px-6 md:px-[50px] shadow-[0_20px_60px_rgba(0,0,0,0.25)] flex items-center justify-between overflow-hidden"
      >
        {/* Subtle gold vector laurels on left and right borders */}
        <LaurelWreath />
        
        {/* Central Banner Content */}
        <div className="flex-1 flex flex-col items-center gap-[30px] z-10">
          {/* Label */}
          <span className="text-[12px] md:text-sm font-extrabold text-gold-500 tracking-[0.2em] uppercase text-center leading-none">
            Trusted by Leading Bullion Associations
          </span>
          
          {/* Association Logos Columns */}
          <div className="grid grid-cols-2 md:grid-cols-6 gap-x-[40px] gap-y-8 w-full items-center justify-center">
            {associations.map((assoc, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex flex-col items-center text-center group cursor-pointer"
              >
                {/* Monochrome Gold Logo Block */}
                <div className="opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300">
                  {assoc.logo}
                </div>
                {/* Association Acronym Title */}
                <span className="text-gold-500 text-[18px] md:text-[20px] font-bold tracking-wide mt-1 leading-none">
                  {assoc.name}
                </span>
                {/* Full name subtitle */}
                <span className="text-gold-500/50 text-[10px] md:text-[11px] font-medium leading-tight max-w-[125px] mt-1.5 line-clamp-2">
                  {assoc.subtitle}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        <LaurelWreath isRight={true} />
      </motion.div>

    </section>
  );
};

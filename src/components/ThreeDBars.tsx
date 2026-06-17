import React, { useState, useRef, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

interface BarProps {
  width: number;
  height: number;
  depth: number;
  isSilver?: boolean;
  engravings?: {
    logoText?: string;
    purity: string;
    weight: string;
    serial: string;
  };
  style?: React.CSSProperties;
  className?: string;
}

const Bar3D: React.FC<BarProps> = ({
  width,
  height,
  depth,
  isSilver = false,
  engravings = {
    logoText: 'MINTAURA',
    purity: '999.9',
    weight: '1000g',
    serial: 'MT008801'
  },
  style = {},
  className = ''
}) => {
  const zTrans = depth / 2;
  const wTrans = width / 2;
  const hTrans = height / 2;

  // Shimmer animation trigger
  const [shimmer, setShimmer] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setShimmer(true);
      setTimeout(() => setShimmer(false), 2000);
    }, 6000 + Math.random() * 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={`relative preserve-3d select-none transition-shadow duration-500 ${className}`}
      style={{
        width: `${width}px`,
        height: `${height}px`,
        ...style
      }}
      onMouseEnter={() => setShimmer(true)}
    >
      {/* 3D Box Faces */}
      {/* Front Face */}
      <div
        className={`absolute inset-0 rounded-[12px] border-[0.5px] preserve-3d flex flex-col items-center justify-between py-6 px-4 overflow-hidden
          ${isSilver 
            ? 'silver-bar-front border-white/20 text-slate-800 shadow-[inset_0_4px_12px_rgba(255,255,255,0.4),inset_0_-4px_12px_rgba(0,0,0,0.4)]' 
            : 'gold-bar-front border-gold-200/20 text-amber-950 shadow-[inset_0_4px_12px_rgba(255,255,255,0.45),inset_0_-4px_12px_rgba(0,0,0,0.5)]'
          }`}
        style={{ transform: `translateZ(${zTrans}px)` }}
      >
        {/* Shimmer Effect */}
        <div 
          className={`absolute inset-0 w-[300%] h-full -skew-x-25 opacity-40 pointer-events-none transition-transform duration-[2000ms] ease-out
            ${shimmer ? 'translate-x-[100%]' : '-translate-x-[150%]'}
            ${isSilver ? 'bg-gradient-to-r from-transparent via-white/50 to-transparent' : 'bg-gradient-to-r from-transparent via-white/60 to-transparent'}`}
        />

        {/* Highlight Reflection Overlay */}
        <div className="absolute top-0 inset-x-0 h-1/2 bg-gradient-to-b from-white/20 to-transparent pointer-events-none rounded-t-[10px]" />

        {/* Engravings */}
        {/* Logo Icon Stamp */}
        <div className={`w-9 h-9 rounded-full flex items-center justify-center border-[1.5px] p-1.5 opacity-85
          ${isSilver ? 'border-slate-800/70 shadow-sm' : 'border-amber-950/70 shadow-sm'}`}
          style={{ textShadow: isSilver ? '0 1px 0 rgba(255,255,255,0.3)' : '0 1px 0 rgba(255,255,255,0.2)' }}
        >
          <svg viewBox="0 0 100 100" fill="none" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <rect x="15" y="25" width="22" height="58" rx="11" transform="rotate(-28 15 25)" fill="currentColor" />
            <rect x="42" y="25" width="22" height="58" rx="11" transform="rotate(-28 42 25)" fill="currentColor" />
            <circle cx="75" cy="70" r="12" fill="currentColor" />
          </svg>
        </div>

        {/* Brand/Logo Name */}
        <div className="flex flex-col items-center gap-0.5">
          <span className={`text-[11px] font-bold tracking-[0.25em] font-display uppercase opacity-85
            ${isSilver ? 'text-slate-800/80' : 'text-amber-950/80'}`}>
            {engravings.logoText || (isSilver ? 'SILVER' : 'MINTAURA')}
          </span>
          {isSilver && (
            <span className="text-[7px] font-extrabold tracking-[0.4em] text-slate-700/60 font-sans uppercase">
              BULLION
            </span>
          )}
        </div>

        {/* Purity & Stamp Details */}
        <div className="flex flex-col items-center gap-1 my-2">
          <span className="text-xl font-black font-display tracking-wider opacity-90 leading-none">
            {engravings.purity}
          </span>
          <div className={`px-2 py-0.5 rounded text-[7px] font-extrabold tracking-widest uppercase border-[0.5px]
            ${isSilver ? 'border-slate-800/40 bg-slate-800/5 text-slate-800' : 'border-amber-950/40 bg-amber-950/5 text-amber-950'}`}>
            {isSilver ? 'SILVER' : 'FINE GOLD'}
          </div>
          <span className={`text-[10px] font-bold tracking-widest opacity-80 mt-1
            ${isSilver ? 'text-slate-700' : 'text-amber-900'}`}>
            {engravings.weight}
          </span>
        </div>

        {/* Serial Number / Bottom Stamp */}
        <div className="flex flex-col items-center gap-1 w-full border-t-[0.5px] pt-3 opacity-75
          ${isSilver ? 'border-slate-800/15' : 'border-amber-950/15'}">
          {/* Decorative geometric details */}
          <div className="flex gap-2">
            <span className="w-1 h-1 rounded-full bg-current opacity-50" />
            <span className="w-1.5 h-0.5 bg-current opacity-50" />
            <span className="w-1 h-1 rounded-full bg-current opacity-50" />
          </div>
          <span className="text-[7.5px] font-mono tracking-widest opacity-80 uppercase">
            {engravings.serial}
          </span>
        </div>
      </div>

      {/* Back Face */}
      <div
        className={`absolute inset-0 rounded-[12px] border-[0.5px] preserve-3d
          ${isSilver ? 'silver-bar-front border-white/20' : 'gold-bar-front border-gold-200/20'}`}
        style={{ transform: `rotateY(180deg) translateZ(${zTrans}px)` }}
      />

      {/* Left Face */}
      <div
        className={`absolute top-0 rounded-[6px] border-[0.5px]
          ${isSilver ? 'silver-bar-left border-white/10' : 'gold-bar-left border-gold-200/10'}`}
        style={{
          width: `${depth}px`,
          height: `${height}px`,
          left: `50%`,
          marginLeft: `-${depth / 2}px`,
          transform: `rotateY(-90deg) translateZ(${wTrans}px)`
        }}
      />

      {/* Right Face */}
      <div
        className={`absolute top-0 rounded-[6px] border-[0.5px]
          ${isSilver ? 'silver-bar-right border-black/20' : 'gold-bar-right border-black/30'}`}
        style={{
          width: `${depth}px`,
          height: `${height}px`,
          left: `50%`,
          marginLeft: `-${depth / 2}px`,
          transform: `rotateY(90deg) translateZ(${wTrans}px)`
        }}
      />

      {/* Top Face */}
      <div
        className={`absolute left-0 rounded-[6px] border-[0.5px]
          ${isSilver ? 'silver-bar-top border-white/20' : 'gold-bar-top border-gold-200/20'}`}
        style={{
          width: `${width}px`,
          height: `${depth}px`,
          top: `50%`,
          marginTop: `-${depth / 2}px`,
          transform: `rotateX(90deg) translateZ(${hTrans}px)`
        }}
      />

      {/* Bottom Face */}
      <div
        className={`absolute left-0 rounded-[6px] border-[0.5px] bg-black/80`}
        style={{
          width: `${width}px`,
          height: `${depth}px`,
          top: `50%`,
          marginTop: `-${depth / 2}px`,
          transform: `rotateX(-90deg) translateZ(${hTrans}px)`
        }}
      />
    </div>
  );
};

export const ThreeDBars: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Parallax / tilt setup using framer motion
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const springConfig = { damping: 25, stiffness: 150 };
  const tiltX = useSpring(useTransform(mouseY, [-0.5, 0.5], [12, -12]), springConfig);
  const tiltY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-12, 12]), springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5; // range: -0.5 to 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5; // range: -0.5 to 0.5
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full h-[400px] md:h-[460px] flex items-center justify-center perspective-container cursor-grab active:cursor-grabbing select-none"
    >
      {/* Golden bottom glow platform beneath bars */}
      <div className="absolute bottom-[40px] w-[350px] h-[60px] bg-gold-500/15 blur-[45px] rounded-full transform -rotate-x-70 scale-150 pointer-events-none" />
      <div className="absolute bottom-[35px] w-[220px] h-[30px] bg-gold-400/20 blur-[20px] rounded-full transform -rotate-x-70 pointer-events-none" />

      {/* Interactive 3D Wrapper */}
      <motion.div
        style={{
          rotateX: tiltX,
          rotateY: tiltY,
        }}
        className="relative preserve-3d w-[400px] h-[350px] flex items-center justify-center"
      >
        {/* ========================================================
            1. BACKGROUND: Stacked gold bricks (far left)
           ======================================================== */}
        <div className="absolute left-[10px] bottom-[30px] preserve-3d opacity-90 scale-[0.68] origin-bottom-left" style={{ transform: 'rotateY(25deg) rotateX(5deg)' }}>
          {/* Row 1 - Brick 1 */}
          <Bar3D
            width={90}
            height={40}
            depth={180}
            engravings={{ purity: '999.9', weight: '250g', serial: 'GB0012' }}
            className="absolute left-0 bottom-0"
          />
          {/* Row 1 - Brick 2 */}
          <Bar3D
            width={90}
            height={40}
            depth={180}
            engravings={{ purity: '999.9', weight: '250g', serial: 'GB0013' }}
            className="absolute left-[100px] bottom-0"
          />
          {/* Row 2 - Brick 3 (Stacked on top) */}
          <Bar3D
            width={90}
            height={40}
            depth={180}
            engravings={{ purity: '999.9', weight: '250g', serial: 'GB0014' }}
            className="absolute left-[50px] bottom-[42px]"
          />
        </div>

        {/* ========================================================
            2. MIDDLE LEFT: Medium Gold Bar (tilted left, standing)
           ======================================================== */}
        <Bar3D
          width={100}
          height={210}
          depth={42}
          engravings={{
            logoText: 'MINTAURA',
            purity: '999.9',
            weight: '1000g',
            serial: 'MT008802'
          }}
          className="absolute left-[70px] bottom-[40px] z-10"
          style={{
            transform: 'rotateY(20deg) rotateX(10deg) rotateZ(-6deg)',
          }}
        />

        {/* ========================================================
            3. CENTER FRONT: Large Gold Bar (standing main front)
           ======================================================== */}
        <Bar3D
          width={112}
          height={240}
          depth={48}
          engravings={{
            logoText: 'MINTAURA',
            purity: '999.9',
            weight: '1000g',
            serial: 'MT008801'
          }}
          className="absolute left-[140px] bottom-[20px] z-30"
          style={{
            transform: 'rotateY(-15deg) rotateX(12deg) rotateZ(3deg)',
            filter: 'drop-shadow(0 25px 35px rgba(0,0,0,0.65))'
          }}
        />

        {/* ========================================================
            4. MIDDLE RIGHT: Large Silver Bar (tilted right, standing)
           ======================================================== */}
        <Bar3D
          width={105}
          height={220}
          depth={45}
          isSilver={true}
          engravings={{
            logoText: 'MINTAURA',
            purity: '999.0',
            weight: '1 KILO',
            serial: 'TR08250'
          }}
          className="absolute left-[235px] bottom-[40px] z-20"
          style={{
            transform: 'rotateY(-28deg) rotateX(14deg) rotateZ(8deg)',
          }}
        />

        {/* ========================================================
            5. FRONT RIGHT: Small Silver Bar (resting in front of large silver)
           ======================================================== */}
        <Bar3D
          width={65}
          height={135}
          depth={30}
          isSilver={true}
          engravings={{
            logoText: 'MINTAURA',
            purity: '999.0',
            weight: '100g',
            serial: 'TS010'
          }}
          className="absolute left-[255px] bottom-[10px] z-40"
          style={{
            transform: 'rotateY(-10deg) rotateX(8deg) rotateZ(-12deg)',
            filter: 'drop-shadow(0 15px 20px rgba(0,0,0,0.5))'
          }}
        />
      </motion.div>
    </div>
  );
};

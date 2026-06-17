import React from 'react';

export const Logo: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`flex items-center gap-2.5 font-display select-none ${className}`}>
      {/* Icon: Three diagonal gold bars */}
      <div className="relative w-8 h-8 flex items-center justify-center">
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full filter drop-shadow-[0_2px_8px_rgba(212,160,23,0.4)]"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Bar 1 */}
          <rect
            x="15"
            y="25"
            width="22"
            height="58"
            rx="11"
            transform="rotate(-28 15 25)"
            fill="url(#logo-gold-grad-1)"
          />
          {/* Bar 2 */}
          <rect
            x="42"
            y="25"
            width="22"
            height="58"
            rx="11"
            transform="rotate(-28 42 25)"
            fill="url(#logo-gold-grad-2)"
          />
          {/* Bar 3 (smaller/offset) */}
          <circle
            cx="75"
            cy="70"
            r="12"
            fill="url(#logo-silver-grad)"
          />

          <defs>
            <linearGradient id="logo-gold-grad-1" x1="15" y1="25" x2="37" y2="83" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#FFF59D" />
              <stop offset="30%" stopColor="#D4A017" />
              <stop offset="100%" stopColor="#8C620B" />
            </linearGradient>
            <linearGradient id="logo-gold-grad-2" x1="42" y1="25" x2="64" y2="83" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#FFF59D" />
              <stop offset="30%" stopColor="#D4A017" />
              <stop offset="100%" stopColor="#8C620B" />
            </linearGradient>
            <linearGradient id="logo-silver-grad" x1="63" y1="58" x2="87" y2="82" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="50%" stopColor="#D1D5DB" />
              <stop offset="100%" stopColor="#6B7280" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      
      {/* Brand Text */}
      <span className="text-2xl font-bold tracking-tight text-white flex items-center">
        mint<span className="text-gold-500">aura</span>
      </span>
    </div>
  );
};

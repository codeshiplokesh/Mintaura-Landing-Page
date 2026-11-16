import React from 'react';
import { Logo } from './Logo';
import { Mail, Shield, Smartphone, ArrowUpRight, Trash2 } from 'lucide-react';

interface FooterProps {
  onNavigate?: (page: 'home' | 'privacy' | 'delete-account') => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleNav = (page: 'home' | 'privacy' | 'delete-account', e: React.MouseEvent) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate(page);
    } else {
      window.location.hash = page === 'home' ? '' : `/${page}`;
    }
  };

  return (
    <footer className="w-full bg-[#030303] text-neutral-400 border-t border-neutral-900 select-none relative z-30">
      {/* Upper Subtle Gold Horizon Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 max-w-[800px] h-[1px] bg-gradient-to-r from-transparent via-[#E8B24C]/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-12">
          
          {/* Column 1: Brand Info (5 cols) */}
          <div className="lg:col-span-5 flex flex-col items-start text-left">
            <a 
              href="/" 
              onClick={(e) => handleNav('home', e)} 
              className="inline-block mb-4 transition-opacity hover:opacity-90"
              aria-label="Mintaura Home"
            >
              <Logo />
            </a>
            <p className="text-sm leading-relaxed text-neutral-400 max-w-sm mb-6">
              India's premier digital network connecting verified bullion dealers, refiners, mints, and raw material suppliers with precision, transparency, and institutional confidentiality.
            </p>

            {/* App Identification Card */}
            <div className="inline-flex items-center gap-3 px-3.5 py-2 rounded-xl bg-neutral-900/70 border border-neutral-800 text-xs text-neutral-300">
              <div className="w-7 h-7 rounded-lg bg-[#E8B24C]/10 border border-[#E8B24C]/30 flex items-center justify-center shrink-0">
                <Smartphone size={14} className="text-[#E8B24C]" />
              </div>
              <div className="flex flex-col text-left">
                <span className="text-[10px] uppercase font-bold tracking-wider text-neutral-500">Android Application</span>
                <span className="font-mono text-xs text-neutral-200">com.bulliongold.bullion</span>
              </div>
            </div>
          </div>

          {/* Column 2: Navigation Links (2 cols) */}
          <div className="lg:col-span-2 flex flex-col items-start text-left">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#E8B24C] mb-4">
              Platform
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a 
                  href="#ecosystem" 
                  onClick={(e) => {
                    handleNav('home', e);
                    setTimeout(() => {
                      document.getElementById('ecosystem')?.scrollIntoView({ behavior: 'smooth' });
                    }, 100);
                  }}
                  className="hover:text-white transition-colors"
                >
                  Ecosystem
                </a>
              </li>
              <li>
                <a 
                  href="#participants" 
                  onClick={(e) => {
                    handleNav('home', e);
                    setTimeout(() => {
                      document.getElementById('participants')?.scrollIntoView({ behavior: 'smooth' });
                    }, 100);
                  }}
                  className="hover:text-white transition-colors"
                >
                  Verified Network
                </a>
              </li>
              <li>
                <a 
                  href="#deals" 
                  onClick={(e) => {
                    handleNav('home', e);
                    setTimeout(() => {
                      document.getElementById('deals')?.scrollIntoView({ behavior: 'smooth' });
                    }, 100);
                  }}
                  className="hover:text-white transition-colors"
                >
                  Live Deals
                </a>
              </li>
              <li>
                <a 
                  href="#faq" 
                  onClick={(e) => {
                    handleNav('home', e);
                    setTimeout(() => {
                      document.getElementById('faq')?.scrollIntoView({ behavior: 'smooth' });
                    }, 100);
                  }}
                  className="hover:text-white transition-colors"
                >
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Legal & Compliance (2 cols) */}
          <div className="lg:col-span-2 flex flex-col items-start text-left">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#E8B24C] mb-4">
              Legal & Trust
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a 
                  href="/privacy-policy" 
                  onClick={(e) => handleNav('privacy', e)}
                  className="text-white hover:text-[#E8B24C] font-medium transition-colors flex items-center gap-1.5"
                >
                  <Shield size={13} className="text-[#E8B24C]" />
                  Privacy Policy
                </a>
              </li>
              <li>
                <a 
                  href="/delete-account"
                  onClick={(e) => handleNav('delete-account', e)}
                  className="hover:text-[#E8B24C] transition-colors flex items-center gap-1.5"
                >
                  <Trash2 size={13} className="text-red-400" />
                  Account Deletion
                </a>
              </li>
              <li>
                <span className="text-neutral-500 cursor-not-allowed">
                  Terms of Service
                </span>
              </li>
              <li>
                <span className="text-neutral-500 cursor-not-allowed">
                  KYC & Verification
                </span>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Support (3 cols) */}
          <div className="lg:col-span-3 flex flex-col items-start text-left">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#E8B24C] mb-4">
              Contact & Inquiries
            </h4>
            <p className="text-xs text-neutral-400 mb-3">
              Official support and grievance redressal for Mintaura platform & mobile app:
            </p>
            <a 
              href="mailto:mintaurabullion@gmail.com"
              className="inline-flex items-center gap-2 px-3.5 py-2.5 rounded-lg bg-neutral-900 border border-neutral-800 hover:border-[#E8B24C]/40 text-neutral-200 hover:text-white text-xs font-medium transition-all group"
            >
              <Mail size={14} className="text-[#E8B24C] group-hover:scale-110 transition-transform" />
              <span>mintaurabullion@gmail.com</span>
              <ArrowUpRight size={13} className="text-neutral-500 group-hover:text-[#E8B24C] transition-colors ml-auto" />
            </a>
            <div className="mt-4 flex items-center gap-2 text-[11px] text-neutral-500">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>Support desk active (Mon-Sat, 9AM-7PM IST)</span>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Compliance */}
        <div className="pt-8 border-t border-neutral-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <p>© {new Date().getFullYear()} Mintaura Bullion. All rights reserved.</p>
          <div className="flex items-center gap-4 sm:gap-6">
            <a 
              href="/privacy-policy" 
              onClick={(e) => handleNav('privacy', e)}
              className="hover:text-neutral-400 transition-colors"
            >
              Privacy Policy
            </a>
            <span className="text-neutral-700">•</span>
            <a 
              href="/delete-account" 
              onClick={(e) => handleNav('delete-account', e)}
              className="hover:text-neutral-400 transition-colors"
            >
              Account Deletion
            </a>
            <span className="text-neutral-700">•</span>
            <span>Package: <code className="text-neutral-400 font-mono">com.bulliongold.bullion</code></span>
          </div>
        </div>
      </div>
    </footer>
  );
};

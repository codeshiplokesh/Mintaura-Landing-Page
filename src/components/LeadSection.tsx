import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ShieldCheck, Coins, Users, Rocket, ArrowRight, Star
} from 'lucide-react';

// Star Rating Component (5 Gold Stars)
const StarRating: React.FC = () => (
  <div className="flex gap-1 text-gold-500 mb-5 shrink-0">
    {[...Array(5)].map((_, i) => (
      <Star key={i} size={15} fill="currentColor" stroke="none" />
    ))}
  </div>
);

// Styled Initials Avatar
const BusinessAvatar: React.FC<{ name: string; bgGradient: string }> = ({ name, bgGradient }) => {
  const initials = name.split(' ').map(n => n[0]).join('');
  return (
    <div className={`w-11 h-11 rounded-full shrink-0 flex items-center justify-center font-display font-bold text-sm text-white bg-gradient-to-br ${bgGradient} border border-white/10 shadow-sm`}>
      {initials}
    </div>
  );
};

export const LeadSection: React.FC = () => {
  // Form input states
  const [formData, setFormData] = useState({
    fullName: '',
    city: '',
    businessType: '',
    turnover: '',
    email: '',
    heardAboutUs: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('B2B Lead Form Submitted:', formData);
    alert('Thank you! Secure access request has been received.');
  };

  // Testimonials Config
  const testimonials = [
    {
      text: '"Mintaura has helped us connect with reliable business partners faster than traditional channels."',
      name: 'Rahul Mehta',
      role: 'Bullion Dealer',
      gradient: 'from-amber-400 to-amber-700'
    },
    {
      text: '"The platform is becoming a go-to solution for serious bullion businesses."',
      name: 'Vikram B.',
      role: 'Refiner',
      gradient: 'from-neutral-600 to-neutral-800'
    },
    {
      text: '"We\'ve discovered new suppliers and expanded our reach significantly."',
      name: 'Anjali S.',
      role: 'Exporter',
      gradient: 'from-gold-400 to-amber-800'
    }
  ];

  // Form Left Benefits
  const benefits = [
    { icon: ShieldCheck, text: 'Verified Network' },
    { icon: Coins, text: 'Fee-free Insights' },
    { icon: Users, text: 'Direct Connections' },
    { icon: Rocket, text: 'Business Growth' }
  ];

  return (
    <section className="relative w-full bg-[#FAFAFA] pt-20 pb-20 px-6 md:px-10 select-none z-10 overflow-hidden">
      
      {/* ========================================================
          1. TOP AREA: Testimonials
         ======================================================== */}
      <div className="w-full max-w-7xl mx-auto flex flex-col items-center gap-[45px] mb-[75px]">
        {/* Centered Heading */}
        <h2 className="text-3xl md:text-4xl lg:text-[44px] font-extrabold text-neutral-900 font-display text-center leading-tight tracking-tight">
          What Industry Professionals Say
        </h2>
        
        {/* Testimonials 3-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              whileHover={{ y: -4 }}
              className="bg-white border border-[#ECECEC] rounded-[16px] p-8 shadow-[0_8px_30px_rgba(0,0,0,0.02)] flex flex-col justify-between text-left h-[230px] transition-all duration-300"
            >
              <div>
                {/* 5 Stars */}
                <StarRating />
                {/* Testimonial text */}
                <p className="text-neutral-700 text-[14.5px] leading-relaxed font-medium">
                  {t.text}
                </p>
              </div>
              
              {/* Profile Row */}
              <div className="flex items-center gap-3.5 mt-4 pt-4 border-t border-neutral-100">
                <BusinessAvatar name={t.name} bgGradient={t.gradient} />
                <div className="flex flex-col">
                  <span className="font-bold text-neutral-900 text-[14.5px] font-display">
                    {t.name}
                  </span>
                  <span className="text-neutral-400 text-[11.5px] font-bold tracking-wide uppercase mt-0.5">
                    {t.role}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ========================================================
          2. BOTTOM AREA: Lead Capture Form (Black Card)
         ======================================================== */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-7xl mx-auto bg-[#050505] rounded-[24px] p-8 md:p-[50px] shadow-[0_20px_60px_rgba(0,0,0,0.25)] border border-neutral-800/40 relative overflow-hidden"
      >
        {/* Glow decoration */}
        <div className="absolute -left-16 -top-16 w-44 h-44 bg-gold-500/10 blur-[50px] rounded-full pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
          
          {/* Left Column (5 of 12 cols) */}
          <div className="lg:col-span-5 flex flex-col items-start text-left gap-5">
            <h3 className="text-3xl md:text-4xl lg:text-[42px] font-extrabold text-white leading-[1.15] tracking-tight font-display">
              Join India's Fastest Growing Bullion Network
            </h3>
            
            <p className="text-neutral-400 text-sm md:text-base leading-relaxed max-w-[420px]">
              Be a part of a smarter community of bullion professionals. Get early access, grow your network and grow your business.
            </p>
            
            {/* 4 Benefit icons horizontally */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-6 w-full border-t border-neutral-900">
              {benefits.map((b, i) => (
                <div key={i} className="flex flex-col items-center sm:items-start text-center sm:text-left gap-2">
                  <div className="w-10 h-10 rounded-lg bg-gold-500/10 border border-gold-500/20 flex items-center justify-center shrink-0">
                    <b.icon size={18} className="text-gold-500" strokeWidth={1.5} />
                  </div>
                  <span className="text-[10px] md:text-[11px] font-bold text-gold-500 uppercase tracking-widest leading-none mt-1">
                    {b.text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column (7 of 12 cols) - Lead Form */}
          <div className="lg:col-span-7 w-full bg-neutral-950/40 p-6 md:p-8 rounded-[20px] border border-neutral-900/60">
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              
              {/* Form Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                
                {/* Row 1: Full Name & City */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="fullName" className="text-xs font-bold text-neutral-300 uppercase tracking-wider">
                    Full Name *
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      required
                      placeholder="e.g. Rahul Mehta"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      className="w-full bg-[#0d0d0d] border border-white/15 focus:border-gold-500 text-white placeholder-neutral-500 text-sm px-4 h-14 rounded-lg focus:outline-none transition-colors duration-300"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="city" className="text-xs font-bold text-neutral-300 uppercase tracking-wider">
                    City You Operate In *
                  </label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    required
                    placeholder="e.g. Mumbai"
                    value={formData.city}
                    onChange={handleInputChange}
                    className="w-full bg-[#0d0d0d] border border-white/15 focus:border-gold-500 text-white placeholder-neutral-500 text-sm px-4 h-14 rounded-lg focus:outline-none transition-colors duration-300"
                  />
                </div>

                {/* Row 2: Business Type & Turnover */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="businessType" className="text-xs font-bold text-neutral-300 uppercase tracking-wider">
                    Business Type *
                  </label>
                  <select
                    id="businessType"
                    name="businessType"
                    required
                    value={formData.businessType}
                    onChange={handleInputChange}
                    className="w-full bg-[#0d0d0d] border border-white/15 focus:border-gold-500 text-white text-sm px-4 h-14 rounded-lg focus:outline-none transition-colors duration-300 appearance-none cursor-pointer"
                  >
                    <option value="" disabled className="text-neutral-500">Select business type</option>
                    <option value="Dealer" className="bg-[#0d0d0d]">Bullion Dealer</option>
                    <option value="Refiner" className="bg-[#0d0d0d]">Refiner / Mint</option>
                    <option value="Trader" className="bg-[#0d0d0d]">Trader / Wholesaler</option>
                    <option value="Supplier" className="bg-[#0d0d0d]">Raw Material Supplier</option>
                    <option value="Jeweller" className="bg-[#0d0d0d]">Jeweller / Retailer</option>
                  </select>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="turnover" className="text-xs font-bold text-neutral-300 uppercase tracking-wider">
                    Monthly Turnover *
                  </label>
                  <input
                    type="text"
                    id="turnover"
                    name="turnover"
                    required
                    placeholder="e.g. ₹50 Lakhs+"
                    value={formData.turnover}
                    onChange={handleInputChange}
                    className="w-full bg-[#0d0d0d] border border-white/15 focus:border-gold-500 text-white placeholder-neutral-500 text-sm px-4 h-14 rounded-lg focus:outline-none transition-colors duration-300"
                  />
                </div>

                {/* Row 3: Email Address & Heard About Us */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="email" className="text-xs font-bold text-neutral-300 uppercase tracking-wider">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="e.g. name@company.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full bg-[#0d0d0d] border border-white/15 focus:border-gold-500 text-white placeholder-neutral-500 text-sm px-4 h-14 rounded-lg focus:outline-none transition-colors duration-300"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="heardAboutUs" className="text-xs font-bold text-neutral-300 uppercase tracking-wider">
                    How did you hear about us?
                  </label>
                  <input
                    type="text"
                    id="heardAboutUs"
                    name="heardAboutUs"
                    placeholder="e.g. Association, LinkedIn, Friend"
                    value={formData.heardAboutUs}
                    onChange={handleInputChange}
                    className="w-full bg-[#0d0d0d] border border-white/15 focus:border-gold-500 text-white placeholder-neutral-500 text-sm px-4 h-14 rounded-lg focus:outline-none transition-colors duration-300"
                  />
                </div>

              </div>

              {/* Row 4: Submit CTA */}
              <div className="flex flex-col gap-3.5 mt-2">
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.015 }}
                  whileTap={{ scale: 0.985 }}
                  className="w-full h-[58px] rounded-lg text-sm font-bold text-black bg-gradient-to-r from-[#D4A63A] to-[#F4C65D] hover:from-[#E4B64A] hover:to-[#FFD66D] shadow-[0_4px_20px_rgba(212,166,58,0.25)] flex items-center justify-center gap-2 cursor-pointer transition-all duration-300"
                >
                  Secure Access
                  <ArrowRight size={16} strokeWidth={2.5} />
                </motion.button>
                
                {/* Footer Protected Note */}
                <span className="text-[11px] font-bold text-neutral-500 uppercase tracking-widest text-center leading-none">
                  Your information is protected 100%.
                </span>
              </div>

            </form>
          </div>

        </div>
      </motion.div>

    </section>
  );
};

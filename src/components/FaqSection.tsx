import React from 'react';
import { motion } from 'framer-motion';
import { Users, HelpCircle, MapPin, Bookmark } from 'lucide-react';
import { MobileMockup } from './MobileMockup';

export const FaqSection: React.FC = () => {
  const faqs = [
    {
      icon: Users,
      question: "Is Mintaura only for bullion dealers?",
      answer: "No. Mintaura serves dealers, traders, jewelers, refiners, investors, jewelers and exporters."
    },
    {
      icon: HelpCircle,
      question: "How can Mintaura help me?",
      answer: "You can connect with verified buyers, sellers and suppliers and grow your business confidently."
    },
    {
      icon: MapPin,
      question: "Is the platform available across India?",
      answer: "Yes. Mintaura is designed for bullion professionals nationwide."
    },
    {
      icon: Bookmark,
      question: "Is there a mobile app?",
      answer: "Yes. Mintaura is available on both Android and iOS platforms."
    }
  ];

  return (
    <section className="relative w-full bg-white pt-24 pb-20 px-6 md:px-10 select-none z-10 overflow-hidden border-t border-neutral-100">
      <div className="w-full max-w-7xl mx-auto flex flex-col gap-14">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center">
          <h2 className="text-3xl md:text-[38px] font-extrabold text-neutral-900 font-display tracking-tight leading-tight">
            Frequently Asked Questions
          </h2>
        </div>

        {/* Main Content Area */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-6 items-center w-full mt-2">
          
          {/* FAQ Cards: 9 of 12 columns */}
          <div className="lg:col-span-9 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 xl:gap-0 items-start">
            {faqs.map((faq, i) => {
              const IconComponent = faq.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.15 }}
                  className={`flex flex-row items-start gap-4 text-left xl:px-4 ${
                    i < 3 ? 'xl:border-r xl:border-neutral-200/70' : ''
                  }`}
                >
                  {/* Icon Container */}
                  <div className="w-12 h-12 rounded-xl bg-white border border-[#EBEBEB] flex items-center justify-center shrink-0 shadow-[0_4px_12px_rgba(0,0,0,0.02)]">
                    <IconComponent size={20} className="text-gold-500" strokeWidth={2} />
                  </div>

                  {/* Question and Answer */}
                  <div className="flex flex-col text-left">
                    <h3 className="font-display font-bold text-neutral-900 text-[15px] md:text-[16px] leading-snug mb-2 tracking-tight">
                      {faq.question}
                    </h3>
                    <p className="text-neutral-500 text-[13px] md:text-[13.5px] leading-relaxed font-medium">
                      {faq.answer}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Phone Mockup: 3 of 12 columns */}
          <div className="lg:col-span-3 flex justify-center lg:justify-end">
            <div className="relative scale-90 xl:scale-95 origin-center lg:origin-right select-none">
              <MobileMockup />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

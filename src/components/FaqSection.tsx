import React from 'react';
import { motion } from 'framer-motion';
import { User, Lightbulb, MapPin, Smartphone } from 'lucide-react';
import { MobileMockup } from './MobileMockup';

export const FaqSection: React.FC = () => {
  const faqs = [
    {
      icon: User,
      question: "Is Mintaura only for bullion dealers?",
      answer: "No. Mintaura serves dealers, traders, jewelers, refiners, investors, jewelers and exporters."
    },
    {
      icon: Lightbulb,
      question: "How can Mintaura help me?",
      answer: "You can connect with verified buyers, sellers and suppliers and grow your business confidently."
    },
    {
      icon: MapPin,
      question: "Is the platform available across India?",
      answer: "Yes. Mintaura is designed for bullion professionals nationwide."
    },
    {
      icon: Smartphone,
      question: "Is there a mobile app?",
      answer: "Yes. Mintaura is available on both Android and iOS platforms."
    }
  ];

  return (
    <section className="relative w-full bg-white py-24 px-6 md:px-10 z-10 overflow-hidden border-t border-neutral-100">
      <div className="w-full max-w-[1280px] mx-auto flex flex-col">
        
        {/* Section Heading */}
        <div className="text-center mb-[50px]">
          <h2 className="text-[28px] md:text-[32px] font-semibold text-[#111111] font-sans tracking-tight leading-tight">
            Frequently Asked Questions
          </h2>
        </div>

        {/* Main Grid Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch w-full">
          
          {/* FAQ Cards: 9 of 12 columns on large screens */}
          <div className="lg:col-span-9 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 items-stretch">
            {faqs.map((faq, i) => {
              const IconComponent = faq.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="bg-white border border-[#EAEAEA] rounded-[12px] p-6 h-full flex flex-col justify-start transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)]"
                >
                  <div className="flex flex-row items-start gap-4">
                    {/* Icon Container */}
                    <div className="w-[44px] h-[44px] border border-[#F0F0F0] rounded-[12px] bg-white flex items-center justify-center shrink-0">
                      <IconComponent size={20} className="text-[#D89B22]" strokeWidth={2} />
                    </div>

                    {/* Question and Answer */}
                    <div className="flex flex-col text-left">
                      <h3 className="font-sans font-semibold text-[#111111] text-[20px] leading-[1.4] mb-2 tracking-tight">
                        {faq.question}
                      </h3>
                      <p className="text-[#666666] text-[15px] leading-[1.7] font-normal">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Phone Mockup: 3 of 12 columns, hidden on mobile, flex on desktop/tablet */}
          <div className="hidden md:flex lg:col-span-3 justify-center lg:justify-end items-center relative lg:translate-x-4">
            <div className="relative group">
              {/* Soft floor shadow */}
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-[85%] h-6 bg-black/30 blur-xl rounded-full scale-y-50 pointer-events-none opacity-85 z-0" />
              <div className="relative z-10 scale-90 xl:scale-95 origin-center lg:origin-right select-none">
                <MobileMockup />
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

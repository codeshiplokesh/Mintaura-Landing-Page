import React from 'react';
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
    <section className="relative w-full bg-[#FFFFFF] pt-[50px] pb-[50px] px-4 md:px-8 lg:px-12 z-10 overflow-hidden">
      <div className="w-full max-w-none flex flex-col">
        
        {/* Heading */}
        <div className="text-center mb-[40px]">
          <h2 className="text-[26px] font-semibold text-[#111111] font-sans tracking-tight leading-tight">
            Frequently Asked Questions
          </h2>
        </div>

        {/* FAQ Layout & Grid Structure */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_140px] gap-[30px] items-center w-full">
          
          {/* FAQ Cards: 4 columns on desktop */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-8 lg:gap-y-0 lg:gap-x-0 items-start">
            {faqs.map((faq, i) => {
              const IconComponent = faq.icon;
              return (
                <div
                  key={i}
                  className={`bg-[#FFFFFF] rounded-none p-0 flex flex-col justify-start text-left h-full ${
                    i < 3 ? 'lg:pr-[15px] lg:border-r lg:border-[#F1F1F1]' : ''
                  } ${
                    i > 0 ? 'lg:pl-[15px]' : ''
                  }`}
                >
                  <div className="flex flex-row items-start gap-3.5">
                    {/* Icon Box */}
                    <div className="w-[44px] h-[44px] border border-[#EFEFEF] rounded-[10px] bg-[#FFFFFF] flex items-center justify-center shrink-0">
                      <IconComponent size={20} className="text-[#D89B22]" strokeWidth={2} />
                    </div>

                    {/* Question and Answer Content */}
                    <div className="flex flex-col text-left">
                      <h3 className="font-sans font-semibold text-[#111111] text-[18px] leading-[1.35] mb-2 tracking-tight">
                        {faq.question}
                      </h3>
                      <p className="text-[#666666] text-[14px] leading-[1.7] font-normal">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Phone Mockup Column */}
          <div className="hidden lg:flex justify-end items-center w-[140px] shrink-0">
            <div className="w-[90px] h-[180px] flex items-center justify-center relative select-none shrink-0 pointer-events-none">
              {/* Phone mockup scaled down to 90px width */}
              <div className="absolute scale-[0.33] origin-center z-10">
                <MobileMockup />
              </div>
              {/* Subtle shadow beneath the phone */}
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-[70px] h-3 bg-black/25 blur-md rounded-full scale-y-50 pointer-events-none" />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

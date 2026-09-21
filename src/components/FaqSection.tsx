import React, { useState } from 'react';
import { FAQS } from '../data/schoolData';
import { HelpCircle, ChevronDown, Sparkles } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqThemeColors = [
    { border: 'border-sky-300 bg-sky-50/50', iconBg: 'bg-sky-500 text-white', dot: 'bg-sky-400' },
    { border: 'border-rose-300 bg-rose-50/50', iconBg: 'bg-rose-500 text-white', dot: 'bg-rose-400' },
    { border: 'border-lime-300 bg-lime-50/50', iconBg: 'bg-lime-500 text-white', dot: 'bg-lime-400' },
    { border: 'border-amber-300 bg-amber-50/50', iconBg: 'bg-amber-500 text-white', dot: 'bg-amber-400' },
    { border: 'border-purple-300 bg-purple-50/50', iconBg: 'bg-purple-500 text-white', dot: 'bg-purple-400' },
  ];

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faqs" className="py-16 sm:py-20 bg-gradient-to-b from-[#F8FAFC] via-white to-pink-50/20 border-b border-sky-100 relative overflow-hidden">
      {/* Background doodles */}
      <div className="absolute top-10 left-8 text-3xl opacity-70 select-none pointer-events-none animate-balloon">
        💡
      </div>
      <div className="absolute top-16 right-10 text-3xl opacity-70 select-none pointer-events-none animate-float">
        ❓
      </div>
      <div className="absolute bottom-10 right-8 text-3xl opacity-70 select-none pointer-events-none animate-spin-slow">
        ⭐
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-child font-bold bg-amber-100 text-amber-900 border-2 border-amber-300 mb-3 shadow-xs">
            <HelpCircle className="w-3.5 h-3.5 text-amber-700" />
            <span>Parent Questions</span>
          </div>
          <h2 className="font-child text-3xl sm:text-4xl lg:text-5xl font-black text-[#1E3A8A] tracking-tight mb-3">
            Frequently Asked Questions — Montessori Islamabad
          </h2>
          <p className="text-stone-600 text-sm sm:text-base leading-relaxed font-medium">
            Clear answers for parents exploring Montessori education, Playgroup, Nursery, and Kindergarten programs at Little Nest in Sector I-14/3, Islamabad.
          </p>
        </div>

        {/* FAQs list */}
        <div className="space-y-3.5">
          {FAQS.map((faq, idx) => {
            const isOpen = openIdx === idx;
            const theme = faqThemeColors[idx % faqThemeColors.length];

            return (
              <div
                key={idx}
                className={`rounded-3xl border-2 transition-all duration-300 overflow-hidden shadow-xs hover:shadow-md ${
                  isOpen
                    ? `${theme.border} shadow-lg scale-[1.01]`
                    : 'border-stone-200/80 bg-white hover:border-sky-300'
                }`}
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 focus:outline-hidden cursor-pointer"
                >
                  <span className="font-child text-base sm:text-lg font-black text-stone-900 flex items-center gap-2.5">
                    <span className={`w-2.5 h-2.5 rounded-full ${theme.dot} shrink-0`} />
                    <span>{faq.question}</span>
                  </span>
                  <div
                    className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 shadow-xs ${
                      isOpen ? `${theme.iconBg} rotate-180` : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4 stroke-[3]" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 text-sm text-stone-700 leading-relaxed border-t border-stone-200/60 pt-3 font-medium">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

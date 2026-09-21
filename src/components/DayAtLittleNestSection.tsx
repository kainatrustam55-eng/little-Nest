import React, { useState } from 'react';
import { DAILY_RHYTHM } from '../data/schoolData';
import { Sparkles, Clock, ArrowDown, Heart, Sun } from 'lucide-react';

export const DayAtLittleNestSection: React.FC = () => {
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);

  const nodeColors = [
    'border-[#38BDF8] text-sky-600 ring-sky-200',
    'border-[#FB7185] text-rose-600 ring-rose-200',
    'border-[#84CC16] text-lime-600 ring-lime-200',
    'border-[#F59E0B] text-amber-600 ring-amber-200',
    'border-[#A855F7] text-purple-600 ring-purple-200',
    'border-[#14B8A6] text-teal-600 ring-teal-200',
  ];

  return (
    <section id="parents" className="py-16 sm:py-20 bg-gradient-to-b from-[#FDFBF7] via-sky-50/20 to-amber-50/20 border-b border-sky-100 relative overflow-hidden">
      {/* Background doodles */}
      <div className="absolute top-10 left-6 text-3xl opacity-70 select-none pointer-events-none animate-balloon">
        ⭐
      </div>
      <div className="absolute top-20 right-8 text-3xl opacity-70 select-none pointer-events-none animate-spin-slow">
        ☀️
      </div>
      <div className="absolute bottom-12 right-6 text-3xl opacity-70 select-none pointer-events-none animate-float">
        🌈
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-child font-bold bg-amber-100 text-amber-900 border-2 border-amber-300 mb-3 shadow-xs">
            <span>⭐</span>
            <span>Daily Schedule</span>
          </div>
          <h2 className="font-child text-3xl sm:text-4xl lg:text-5xl font-black text-[#1E3A8A] tracking-tight">
            What Your Child's Morning Looks Like
          </h2>
          <p className="text-sm sm:text-base text-stone-600 mt-3 leading-relaxed font-medium">
            Step inside our daily rhythm. We balance quiet, concentrated Montessori discovery with joyful social circles, outdoor play, and creative arts in Sector I-14/3, Islamabad.
          </p>
        </div>

        {/* Timeline Flow */}
        <div className="relative">
          {/* Vertical connecting line on md+ with shimmering rainbow gradient */}
          <div className="hidden md:block absolute left-1/2 top-8 bottom-8 w-2 -translate-x-1/2 bg-gradient-to-b from-[#38BDF8] via-[#FB7185] via-[#84CC16] to-[#F59E0B] rounded-full shadow-xs" />

          <div className="space-y-6 sm:space-y-8">
            {DAILY_RHYTHM.map((step, idx) => {
              const isEven = idx % 2 === 0;
              const isSelected = idx === activeStepIndex;
              const nodeColor = nodeColors[idx % nodeColors.length];

              return (
                <div key={idx} className="relative">
                  <div className={`flex flex-col md:flex-row items-center gap-4 sm:gap-6 ${isEven ? 'md:flex-row-reverse' : ''}`}>
                    {/* Content Card */}
                    <div className="w-full md:w-[calc(50%-2.5rem)]">
                      <div
                        onClick={() => setActiveStepIndex(idx)}
                        className={`p-6 rounded-3xl border-2 transition-all duration-300 cursor-pointer ${
                          isSelected
                            ? 'bg-white border-sky-400 shadow-2xl ring-4 ring-sky-200/80 scale-[1.02]'
                            : 'bg-white/95 border-stone-200 hover:bg-white hover:border-sky-300 hover:shadow-lg'
                        }`}
                      >
                        <div className="flex items-center justify-between gap-2 mb-2">
                          <span className="inline-flex items-center gap-1.5 text-xs font-child font-black text-sky-800 bg-sky-100 px-3 py-1 rounded-full border border-sky-300">
                            <Clock className="w-3.5 h-3.5 text-sky-600" />
                            <span>{step.time}</span>
                          </span>
                          <span className="text-[11px] font-child font-black text-rose-800 bg-rose-100 border border-rose-300 px-3 py-0.5 rounded-full shadow-2xs">
                            {step.badge}
                          </span>
                        </div>

                        <h3 className="font-child text-xl font-black text-[#1E3A8A] tracking-tight mb-2 flex items-center gap-2">
                          <span className="text-2xl">{step.icon}</span>
                          <span>{step.title}</span>
                        </h3>

                        <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-medium">
                          {step.description}
                        </p>
                      </div>
                    </div>

                    {/* Timeline Center Node with vibrant rainbow border */}
                    <div className={`shrink-0 w-14 h-14 rounded-full bg-white border-4 ${nodeColor} shadow-xl flex items-center justify-center text-2xl z-10 transition-transform hover:scale-125 cursor-pointer ring-4`}>
                      {step.icon}
                    </div>

                    {/* Empty spacer for alternating layout */}
                    <div className="hidden md:block w-[calc(50%-2.5rem)]" />
                  </div>

                  {/* Connecting Down Arrow between cards on mobile */}
                  {idx < DAILY_RHYTHM.length - 1 && (
                    <div className="flex justify-center my-2 md:hidden">
                      <ArrowDown className="w-5 h-5 text-sky-500 animate-bounce" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Parent Impression Note */}
        <div className="mt-12 p-6 rounded-3xl bg-white border-2 border-amber-200 shadow-sm text-center max-w-2xl mx-auto flex flex-col items-center">
          <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center text-lg mb-2">
            🌱
          </div>
          <p className="font-child text-sm sm:text-base font-bold text-stone-800 italic">
            “I can actually imagine my child here — happy, calm, focused, and deeply cared for.”
          </p>
          <span className="text-xs text-sky-800 font-bold mt-1">
            Monday through Friday • 8:30 AM to 12:00 PM in Sector I-14/3, Islamabad
          </span>
        </div>
      </div>
    </section>
  );
};

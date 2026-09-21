import React, { useState } from 'react';
import { GROWTH_JOURNEY } from '../data/schoolData';
import { Sparkles, ArrowRight, Heart, Star, CheckCircle, ChevronRight } from 'lucide-react';
import { GrowthJourneyStage } from '../types';

export const WatchMeGrowSection: React.FC = () => {
  const [selectedStage, setSelectedStage] = useState<GrowthJourneyStage>(GROWTH_JOURNEY[0]);

  const stepColors = [
    { activeBg: 'bg-[#38BDF8] border-[#0284C7]', ring: 'ring-sky-200' },
    { activeBg: 'bg-[#FB7185] border-[#E11D48]', ring: 'ring-rose-200' },
    { activeBg: 'bg-[#84CC16] border-[#65A30D]', ring: 'ring-lime-200' },
    { activeBg: 'bg-[#F59E0B] border-[#D97706]', ring: 'ring-amber-200' },
    { activeBg: 'bg-[#A855F7] border-[#7E22CE]', ring: 'ring-purple-200' },
    { activeBg: 'bg-[#14B8A6] border-[#0F766E]', ring: 'ring-teal-200' },
  ];

  return (
    <section id="growth-journey" className="py-16 sm:py-20 bg-gradient-to-b from-white via-sky-50/20 to-pink-50/20 border-b border-sky-100 relative overflow-hidden">
      {/* Background doodles */}
      <div className="absolute top-10 left-8 text-3xl opacity-70 select-none pointer-events-none animate-balloon">
        🌱
      </div>
      <div className="absolute bottom-10 right-8 text-3xl opacity-70 select-none pointer-events-none animate-float">
        🦋
      </div>
      <div className="absolute top-1/2 left-4 text-2xl opacity-60 select-none pointer-events-none animate-spin-slow">
        🌻
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-child font-bold bg-amber-100 text-amber-900 border-2 border-amber-300 mb-3 shadow-xs">
            <span>📏</span>
            <span>Milestone Garden</span>
          </div>
          <h2 className="font-child text-3xl sm:text-4xl lg:text-5xl font-black text-[#1E3A8A] tracking-tight">
            The Little Nest Growth Journey
          </h2>
          <p className="text-sm sm:text-base text-stone-600 mt-3 leading-relaxed font-medium">
            Follow the natural unfolding of your child's innate potential throughout their years in our Montessori nest.
          </p>
        </div>

        {/* Journey Step Trackers with Vibrant Rainbow Buttons */}
        <div className="flex items-center justify-between gap-3 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {GROWTH_JOURNEY.map((stage, idx) => {
            const isSelected = stage.step === selectedStage.step;
            const theme = stepColors[idx % stepColors.length];

            return (
              <button
                key={stage.step}
                onClick={() => setSelectedStage(stage)}
                className={`flex-1 min-w-[135px] p-4 rounded-3xl border-2 text-center transition-all duration-300 flex flex-col items-center gap-1.5 cursor-pointer ${
                  isSelected
                    ? `${theme.activeBg} text-white shadow-xl scale-105 ring-4 ${theme.ring}`
                    : 'bg-white text-stone-700 border-stone-200 hover:bg-stone-50 hover:border-sky-300 hover:scale-102 shadow-xs'
                }`}
              >
                <span className="text-3xl transition-transform hover:scale-125">{stage.icon}</span>
                <span className="font-child text-xs font-black tracking-tight">{stage.pillar}</span>
                <span
                  className={`text-[10px] px-2.5 py-0.5 rounded-full font-child font-black ${
                    isSelected ? 'bg-white/25 text-white' : 'bg-stone-100 text-stone-600 border border-stone-200'
                  }`}
                >
                  Step {stage.step}
                </span>
              </button>
            );
          })}
        </div>

        {/* Selected Stage Spotlight Card with Vivid Kids Glow */}
        <div className="bg-gradient-to-br from-white via-amber-50/40 to-sky-50/40 rounded-3xl p-6 sm:p-10 border-2 border-amber-200 shadow-2xl relative overflow-hidden">
          <div className="max-w-3xl mx-auto flex flex-col md:flex-row items-center gap-8">
            {/* Left Pillar Graphic */}
            <div className="shrink-0 text-center">
              <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-3xl bg-gradient-to-br from-amber-100 to-amber-200 border-4 border-white flex items-center justify-center text-5xl shadow-lg mx-auto mb-3 animate-bounce-gentle">
                {selectedStage.icon}
              </div>
              <span className="font-child text-xs font-black text-[#1E3A8A] bg-sky-100 border border-sky-300 px-4 py-1 rounded-full uppercase tracking-wider shadow-2xs">
                Milestone #{selectedStage.step}
              </span>
            </div>

            {/* Right Details */}
            <div className="space-y-4 text-left">
              <div>
                <span className="text-xs font-black uppercase tracking-wider text-rose-600 block mb-1">
                  Pillar: {selectedStage.pillar}
                </span>
                <h3 className="font-child text-2xl sm:text-3xl font-black text-[#1E3A8A]">
                  {selectedStage.label}
                </h3>
              </div>

              <p className="text-sm sm:text-base text-stone-700 leading-relaxed font-medium">
                {selectedStage.description}
              </p>

              <div className="p-4 bg-white/90 rounded-2xl border-2 border-stone-200 shadow-xs">
                <div className="text-xs font-black text-stone-800 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                  <Heart className="w-4 h-4 text-rose-500 fill-rose-500" />
                  <span>How We Nurture This in Class</span>
                </div>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-medium">
                  {selectedStage.howWeNurture}
                </p>
              </div>

              {/* Progress Flow navigation */}
              <div className="pt-2 flex items-center justify-between">
                <span className="text-xs text-stone-500 font-bold">
                  Step {selectedStage.step} of 6 in our developmental continuum
                </span>
                {selectedStage.step < 6 ? (
                  <button
                    onClick={() => setSelectedStage(GROWTH_JOURNEY[selectedStage.step])}
                    className="font-child text-xs font-black text-[#0284C7] hover:text-[#0369A1] flex items-center gap-1 cursor-pointer hover:translate-x-1 transition-transform"
                  >
                    <span>Next: {GROWTH_JOURNEY[selectedStage.step].pillar}</span>
                    <ChevronRight className="w-4 h-4 stroke-[3]" />
                  </button>
                ) : (
                  <button
                    onClick={() => setSelectedStage(GROWTH_JOURNEY[0])}
                    className="font-child text-xs font-black text-[#0284C7] hover:text-[#0369A1] flex items-center gap-1 cursor-pointer hover:translate-x-1 transition-transform"
                  >
                    <span>Back to Step 1 (Confidence)</span>
                    <ChevronRight className="w-4 h-4 stroke-[3]" />
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

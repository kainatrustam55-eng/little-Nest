import React, { useState } from 'react';
import { LEARNING_AREAS } from '../data/schoolData';
import { Sparkles, Check, ArrowRight, X, ChevronRight } from 'lucide-react';
import { LearningAreaItem } from '../types';

export const LearningAreasSection: React.FC = () => {
  const [selectedArea, setSelectedArea] = useState<LearningAreaItem | null>(null);

  return (
    <section id="learning-areas" className="py-16 sm:py-20 bg-gradient-to-b from-white via-purple-50/25 to-amber-50/25 border-b border-sky-100 relative overflow-hidden">
      {/* Playful background doodles */}
      <div className="absolute top-10 right-8 text-3xl opacity-70 select-none pointer-events-none animate-float">
        🎨
      </div>
      <div className="absolute bottom-12 left-8 text-3xl opacity-70 select-none pointer-events-none animate-balloon" style={{ animationDelay: '2s' }}>
        🧩
      </div>
      <div className="absolute top-1/2 right-4 text-2xl opacity-60 select-none pointer-events-none animate-spin-slow">
        ⭐
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-child font-bold bg-amber-100 text-amber-900 border-2 border-amber-300 mb-3 shadow-xs">
            <span>📚</span>
            <span>Experiential Curriculum</span>
          </div>
          <h2 className="font-child text-3xl sm:text-4xl lg:text-5xl font-black text-[#1E3A8A] tracking-tight">
            Hands-on Montessori Learning Areas
          </h2>
          <p className="text-sm sm:text-base text-stone-600 mt-3 leading-relaxed font-medium">
            At Little Nest, children explore concrete sensorial, linguistic, mathematical, and practical life materials in our prepared classrooms in Sector I-14/3, Islamabad.
          </p>
        </div>

        {/* 9 Experiential Learning Cards with Vibrant Rainbow Theming */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {LEARNING_AREAS.map((area) => (
            <div
              key={area.id}
              onClick={() => setSelectedArea(area)}
              className={`p-6 rounded-3xl border-2 ${area.borderColor} ${area.lightBg} cursor-pointer transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 group flex flex-col justify-between shadow-md relative overflow-hidden`}
              id={`learning-area-${area.id}`}
            >
              <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-white/40 rounded-full pointer-events-none group-hover:scale-150 transition-transform" />
              <div>
                <div className="flex items-center justify-between gap-3 mb-4">
                  <span className="text-3xl p-3.5 bg-white rounded-2xl shadow-sm border border-stone-200/80 group-hover:scale-115 group-hover:rotate-6 transition-transform">
                    {area.icon}
                  </span>
                  <span className="text-[11px] font-child font-black px-3 py-1 rounded-full bg-white text-stone-800 border border-stone-200 shadow-2xs group-hover:bg-amber-100 group-hover:text-amber-900 transition-colors">
                    ✨ Touch to Explore
                  </span>
                </div>

                <h3 className={`font-child text-xl font-black ${area.color} tracking-tight mb-1`}>
                  {area.title}
                </h3>
                <div className="text-xs font-bold text-stone-600 mb-3">
                  {area.subtitle}
                </div>

                <p className="text-xs text-stone-700 leading-relaxed font-medium">
                  {area.experience}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-stone-200/60 flex items-center justify-between text-xs font-child font-bold text-stone-700 group-hover:text-sky-700 transition-colors">
                <span className="group-hover:translate-x-0.5 transition-transform">View Full Experience</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform stroke-[3] text-sky-600" />
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Deep Dive Modal */}
        {selectedArea && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs animate-in fade-in duration-200">
            <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-7 shadow-2xl border-2 border-sky-100 relative">
              <button
                onClick={() => setSelectedArea(null)}
                className="absolute top-4 right-4 p-2 rounded-full text-stone-400 hover:text-stone-700 hover:bg-stone-100 transition-colors cursor-pointer"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-3 mb-4">
                <span className="text-4xl p-3 bg-amber-50 rounded-2xl border border-amber-200">
                  {selectedArea.icon}
                </span>
                <div>
                  <span className="text-[11px] font-child font-bold text-sky-800 bg-sky-50 px-3 py-0.5 rounded-full">
                    Little Nest Experience
                  </span>
                  <h3 className="font-child text-2xl font-black text-stone-900 mt-1">
                    {selectedArea.title}
                  </h3>
                  <div className="text-xs text-stone-500 font-medium">
                    {selectedArea.subtitle}
                  </div>
                </div>
              </div>

              <div className="p-4 bg-stone-50 rounded-2xl border border-stone-200/80 mb-5">
                <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                  {selectedArea.experience}
                </p>
              </div>

              <div className="text-xs text-stone-500 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-amber-500 shrink-0" />
                <span>Nurtured every day in Playgroup, Nursery, and Kindergarten.</span>
              </div>

              <div className="mt-5 pt-3 border-t border-stone-100 flex justify-end">
                <button
                  onClick={() => setSelectedArea(null)}
                  className="px-6 py-2.5 rounded-full font-child font-bold text-xs text-white bg-sky-600 hover:bg-sky-700 transition-colors cursor-pointer"
                >
                  Close Experience
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

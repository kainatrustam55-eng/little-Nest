import React, { useState } from 'react';
import { PROGRAMS } from '../data/schoolData';
import { Program } from '../types';
import { SCHOOL_IMAGES } from '../assets/images';
import { ProgramModal } from './ProgramModal';
import { Sparkles, ArrowRight, Check, CheckCircle2, Heart, Baby, BookOpen, GraduationCap, ChevronRight } from 'lucide-react';

interface ProgramsSectionProps {
  onOpenApply: () => void;
}

export const ProgramsSection: React.FC<ProgramsSectionProps> = ({ onOpenApply }) => {
  const [activeModalProgram, setActiveModalProgram] = useState<Program | null>(null);

  const getCardImage = (key?: string) => {
    if (key === 'learningActivity') return SCHOOL_IMAGES.learningActivity;
    if (key === 'artCreative') return SCHOOL_IMAGES.artCreative;
    return SCHOOL_IMAGES.outdoorPlay;
  };

  const getClassTheme = (id: string) => {
    if (id === 'playgroup') {
      return {
        cardBg: 'bg-gradient-to-b from-sky-50/80 to-white',
        cardBorder: 'border-2 border-sky-300 hover:border-sky-400 shadow-lg shadow-sky-100/60',
        badgeBg: 'bg-gradient-to-r from-sky-400 to-cyan-500',
        badgeText: 'text-white',
        borderHover: 'hover:border-sky-400',
        tagBg: 'bg-sky-100/70 text-sky-950 border-2 border-sky-200',
        btnBg: 'bg-gradient-to-r from-sky-400 to-cyan-600 hover:from-sky-500 hover:to-cyan-700 text-white shadow-md shadow-sky-300/40',
        icon: '🧸',
      };
    }
    if (id === 'nursery') {
      return {
        cardBg: 'bg-gradient-to-b from-rose-50/80 to-white',
        cardBorder: 'border-2 border-rose-300 hover:border-rose-400 shadow-lg shadow-rose-100/60',
        badgeBg: 'bg-gradient-to-r from-rose-400 to-pink-500',
        badgeText: 'text-white',
        borderHover: 'hover:border-rose-400',
        tagBg: 'bg-rose-100/70 text-rose-950 border-2 border-rose-200',
        btnBg: 'bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700 text-white shadow-md shadow-rose-300/40',
        icon: '🎨',
      };
    }
    return {
      cardBg: 'bg-gradient-to-b from-lime-50/80 to-white',
      cardBorder: 'border-2 border-lime-300 hover:border-lime-400 shadow-lg shadow-lime-100/60',
      badgeBg: 'bg-gradient-to-r from-lime-500 to-emerald-500',
      badgeText: 'text-white',
      borderHover: 'hover:border-lime-400',
      tagBg: 'bg-lime-100/70 text-lime-950 border-2 border-lime-200',
      btnBg: 'bg-gradient-to-r from-lime-600 to-emerald-600 hover:from-lime-700 hover:to-emerald-700 text-white shadow-md shadow-lime-300/40',
      icon: '🎓',
    };
  };

  return (
    <section id="programs" className="py-16 sm:py-20 bg-gradient-to-b from-sky-50/20 via-white to-pink-50/20 border-b border-sky-100 relative overflow-hidden">
      {/* Playful background stickers */}
      <div className="absolute top-8 left-4 text-3xl opacity-70 select-none pointer-events-none animate-balloon">
        🎈
      </div>
      <div className="absolute top-12 right-6 text-3xl opacity-70 select-none pointer-events-none animate-float">
        ⭐
      </div>
      <div className="absolute bottom-10 right-8 text-3xl opacity-70 select-none pointer-events-none animate-balloon" style={{ animationDelay: '1s' }}>
        🚀
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-child font-bold bg-amber-100 text-amber-900 border-2 border-amber-300 mb-3 shadow-xs">
            <span>🧸</span>
            <span>Montessori Stages</span>
          </div>
          <h2 className="font-child text-3xl sm:text-4xl lg:text-5xl font-black text-[#1E3A8A] tracking-tight">
            Montessori Programs in I-14 Islamabad
          </h2>
          <p className="text-sm sm:text-base text-stone-600 mt-3 leading-relaxed font-medium">
            Three authentic prepared learning environments catering to the developmental sensitive periods of early childhood in Sector I-14/3, Islamabad — Playgroup, Nursery, and Kindergarten.
          </p>
        </div>

        {/* 3 Beautiful Class Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-stretch mb-12">
          {PROGRAMS.map((program) => {
            const cardImg = getCardImage(program.imageKey);
            const theme = getClassTheme(program.id);

            return (
              <div
                key={program.id}
                className={`${theme.cardBg} rounded-3xl ${theme.cardBorder} transition-all duration-300 flex flex-col overflow-hidden hover:-translate-y-2 hover:shadow-2xl group`}
                id={`class-card-${program.id}`}
              >
                {/* Card Top Image */}
                <div className="relative aspect-[16/10] w-full bg-stone-100 overflow-hidden">
                  <img
                    src={cardImg}
                    alt={`Montessori ${program.name} at Little Nest in Sector I-14/3 Islamabad (${program.age})`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-xs px-3 py-1 rounded-full text-xs font-child font-bold text-stone-800 shadow-xs flex items-center gap-1.5 border border-stone-200">
                    <span>{theme.icon}</span>
                    <span>Age {program.age}</span>
                  </div>
                  <div className="absolute top-3 right-3">
                    <span className={`text-[11px] font-child font-black uppercase tracking-wider ${theme.badgeBg} ${theme.badgeText} px-3 py-1 rounded-full shadow-xs`}>
                      {program.tagline}
                    </span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-5">
                  <div>
                    <div className="mb-2">
                      <h3 className="font-child text-2xl font-black text-[#1E3A8A] tracking-tight">
                        Montessori {program.name}
                      </h3>
                      <div className="text-xs font-bold text-stone-500">
                        {program.tagline} • Little Nest I-14/3
                      </div>
                    </div>

                    {/* Learning Focus */}
                    <div className={`mt-3 p-3.5 rounded-2xl border ${theme.tagBg}`}>
                      <span className="text-[11px] font-child font-bold uppercase tracking-wider block mb-1">
                        🎯 Learning Focus
                      </span>
                      <p className="text-xs leading-relaxed font-medium">
                        {program.learningFocus}
                      </p>
                    </div>

                    {/* Activities */}
                    <div className="mt-4">
                      <span className="text-[11px] font-bold text-stone-800 uppercase tracking-wider block mb-2 flex items-center gap-1">
                        <span>🎨</span>
                        <span>Key Activities</span>
                      </span>
                      <ul className="space-y-1.5">
                        {program.activities.slice(0, 3).map((act, i) => (
                          <li key={i} className="text-xs text-stone-600 flex items-start gap-1.5 leading-snug">
                            <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                            <span>{act}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Skills Developed */}
                    <div className="mt-4">
                      <span className="text-[11px] font-bold text-stone-800 uppercase tracking-wider block mb-2 flex items-center gap-1">
                        <span>🌟</span>
                        <span>Skills Developed</span>
                      </span>
                      <ul className="space-y-1.5">
                        {program.skillsDeveloped.slice(0, 3).map((skill, i) => (
                          <li key={i} className="text-xs text-stone-600 flex items-start gap-1.5 leading-snug">
                            <Heart className="w-3.5 h-3.5 text-rose-500 shrink-0 mt-0.5 fill-rose-100" />
                            <span>{skill}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Card Button: View Program */}
                  <div className="pt-4 border-t border-stone-100">
                    <button
                      onClick={() => setActiveModalProgram(program)}
                      className={`w-full py-3 px-4 rounded-full font-child font-black text-xs ${theme.btnBg} transition-all flex items-center justify-center gap-1.5 shadow-sm hover:shadow-md cursor-pointer`}
                      id={`view-program-btn-${program.id}`}
                    >
                      <span>View Program</span>
                      <ChevronRight className="w-3.5 h-3.5 stroke-[3]" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Modal when a parent clicks View Program */}
        <ProgramModal
          program={activeModalProgram}
          onClose={() => setActiveModalProgram(null)}
          onApply={() => {
            setActiveModalProgram(null);
            onOpenApply();
          }}
        />
      </div>
    </section>
  );
};

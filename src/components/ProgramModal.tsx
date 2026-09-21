import React from 'react';
import { Program } from '../types';
import { SCHOOL_IMAGES } from '../assets/images';
import { X, Sparkles, Check, Heart, ArrowRight } from 'lucide-react';

interface ProgramModalProps {
  program: Program | null;
  onClose: () => void;
  onApply: (programName: string) => void;
}

export const ProgramModal: React.FC<ProgramModalProps> = ({ program, onClose, onApply }) => {
  if (!program) return null;

  const imageSrc =
    program.imageKey === 'learningActivity'
      ? SCHOOL_IMAGES.learningActivity
      : program.imageKey === 'artCreative'
      ? SCHOOL_IMAGES.artCreative
      : SCHOOL_IMAGES.outdoorPlay;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-[#FFFDF9] rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-amber-200/80 relative max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full text-stone-400 hover:text-stone-700 hover:bg-amber-100/50 transition-colors"
          aria-label="Close program details"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6 pb-5 border-b border-amber-900/10">
          <div className="w-20 h-20 rounded-2xl overflow-hidden shrink-0 border border-amber-200 bg-amber-50">
            <img
              src={imageSrc}
              alt={`Montessori ${program.name} at Little Nest Montessori I-14/3 Islamabad`}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full text-xs font-bold bg-amber-100 text-amber-900 mb-1 border border-amber-300/60">
              <Sparkles className="w-3 h-3 text-amber-700" />
              Age {program.age} • Little Nest Montessori
            </div>
            <h3 className="text-2xl font-black text-[#193223]">
              Montessori {program.name}
            </h3>
            <p className="text-sm font-bold text-emerald-800">
              {program.tagline}
            </p>
          </div>
        </div>

        {/* Description */}
        <p className="text-stone-700 text-sm leading-relaxed mb-6">
          {program.description}
        </p>

        {/* Learning Focus */}
        <div className="p-4 rounded-2xl bg-[#FAF6EE] border border-amber-200/70 mb-6">
          <div className="text-xs font-bold text-amber-900 uppercase tracking-wider mb-1 flex items-center gap-1.5">
            <span>🎯</span>
            <span>Learning Focus</span>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed font-medium">
            {program.learningFocus}
          </p>
        </div>

        {/* Two Column Activities & Skills */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-6">
          {/* Activities */}
          <div className="bg-white p-4 rounded-2xl border border-stone-200/80 shadow-xs">
            <div className="text-xs font-bold text-stone-900 uppercase tracking-wider mb-3 flex items-center gap-1.5">
              <span>🎨</span>
              <span>Activities</span>
            </div>
            <ul className="space-y-2">
              {program.activities.map((act, i) => (
                <li key={i} className="text-xs text-stone-600 flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{act}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Skills Developed */}
          <div className="bg-white p-4 rounded-2xl border border-stone-200/80 shadow-xs">
            <div className="text-xs font-bold text-stone-900 uppercase tracking-wider mb-3 flex items-center gap-1.5">
              <span>🌟</span>
              <span>Skills Developed</span>
            </div>
            <ul className="space-y-2">
              {program.skillsDeveloped.map((skill, i) => (
                <li key={i} className="text-xs text-stone-600 flex items-start gap-2">
                  <Heart className="w-3.5 h-3.5 text-rose-500 shrink-0 mt-0.5 fill-rose-50" />
                  <span>{skill}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-amber-900/10">
          <span className="text-xs text-stone-500">
            Timings: Monday – Friday, 8:30 AM – 12:00 PM
          </span>
          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="px-4 py-2.5 rounded-full text-xs font-bold text-stone-600 hover:bg-stone-100 transition-colors"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onApply(program.name);
              }}
              className="px-5 py-2.5 rounded-full text-xs font-bold text-white bg-emerald-700 hover:bg-emerald-800 transition-all shadow-sm flex items-center gap-1.5"
            >
              <span>Apply for {program.name}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

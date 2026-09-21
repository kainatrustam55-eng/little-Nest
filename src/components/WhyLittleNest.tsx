import React from 'react';
import { SCHOOL_IMAGES } from '../assets/images';
import { ChevronRight } from 'lucide-react';

interface WhyLittleNestProps {
  onOpenApply: () => void;
  onScrollTo: (id: string) => void;
}

export const WhyLittleNest: React.FC<WhyLittleNestProps> = ({ onOpenApply, onScrollTo }) => {
  return (
    <section id="about" className="py-16 sm:py-20 bg-gradient-to-b from-white via-amber-50/30 to-sky-50/30 border-b border-sky-100 relative overflow-hidden">
      {/* Playful background doodles */}
      <div className="absolute top-10 right-6 text-3xl opacity-70 select-none pointer-events-none animate-balloon">
        🌈
      </div>
      <div className="absolute bottom-16 left-6 text-3xl opacity-70 select-none pointer-events-none animate-float">
        🦋
      </div>
      <div className="absolute top-1/2 left-4 text-2xl opacity-60 select-none pointer-events-none animate-spin-slow">
        🌻
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="font-child text-3xl sm:text-4xl lg:text-5xl font-black text-[#1E3A8A] tracking-tight">
            Why Little Nest Montessori?
          </h2>
          <p className="text-sm sm:text-base text-stone-600 mt-3 leading-relaxed font-medium">
            An authentic Montessori preschool in Sector I-14/3, Islamabad, dedicated to child-led discovery, bilingual literacy, and practical life independence. Where Little Minds Grow.
          </p>
        </div>

        {/* Feature Grid with Photography */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center mb-12">
          {/* Left Feature Column (Vibrant Pastel Candy Themes) */}
          <div className="lg:col-span-4 space-y-4">
            {/* Card 1: Rose / Bubblegum Pink */}
            <div className="bg-rose-50/90 p-5 rounded-3xl border-2 border-rose-300/90 shadow-md shadow-rose-100 hover:shadow-xl transition-all hover:-translate-y-1.5 hover:border-rose-400 group">
              <div className="w-11 h-11 rounded-2xl bg-rose-200 text-rose-900 flex items-center justify-center text-xl mb-3 shadow-xs group-hover:scale-110 group-hover:rotate-6 transition-transform">
                🌱
              </div>
              <h3 className="font-child text-lg font-black text-rose-950">
                Authentic Child-Led Montessori
              </h3>
              <p className="text-xs text-stone-700 mt-1.5 leading-relaxed font-medium">
                Children learn by manipulating concrete tactile apparatus at their natural developmental pace, igniting deep internal motivation rather than pressure.
              </p>
            </div>

            {/* Card 2: Amber / Sunshine Yellow */}
            <div className="bg-amber-50/90 p-5 rounded-3xl border-2 border-amber-300/90 shadow-md shadow-amber-100 hover:shadow-xl transition-all hover:-translate-y-1.5 hover:border-amber-400 group">
              <div className="w-11 h-11 rounded-2xl bg-amber-200 text-amber-900 flex items-center justify-center text-xl mb-3 shadow-xs group-hover:scale-110 group-hover:-rotate-6 transition-transform">
                💛
              </div>
              <h3 className="font-child text-lg font-black text-amber-950">
                Nurturing, Safe & Loving Nest
              </h3>
              <p className="text-xs text-stone-700 mt-1.5 leading-relaxed font-medium">
                Trained early childhood educators who guide with warmth, empathy, and positive reinforcement, helping little ones transition smoothly from home.
              </p>
            </div>

            {/* Card 3: Emerald / Fresh Mint */}
            <div className="bg-emerald-50/90 p-5 rounded-3xl border-2 border-emerald-300/90 shadow-md shadow-emerald-100 hover:shadow-xl transition-all hover:-translate-y-1.5 hover:border-emerald-400 group">
              <div className="w-11 h-11 rounded-2xl bg-emerald-200 text-emerald-900 flex items-center justify-center text-xl mb-3 shadow-xs group-hover:scale-110 group-hover:rotate-6 transition-transform">
                🕌
              </div>
              <h3 className="font-child text-lg font-black text-emerald-950">
                Character, Adab & Values
              </h3>
              <p className="text-xs text-stone-700 mt-1.5 leading-relaxed font-medium">
                Daily practice of courtesy, greetings (Salam), mutual respect, truthfulness, and sharing woven seamlessly into Montessori Grace & Courtesy.
              </p>
            </div>
          </div>

          {/* Center Visual Feature with Pakistani Children Photography */}
          <div className="lg:col-span-4 flex flex-col items-center">
            <div className="w-full relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-white ring-4 ring-amber-200/90 aspect-[4/5] group hover:rotate-1 transition-transform duration-500">
              <img
                src={SCHOOL_IMAGES.outdoorPlay}
                alt="Montessori preschool children enjoying outdoor play at Little Nest in Sector I-14/3 Islamabad"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent flex flex-col justify-end p-6 text-white">
                <span className="font-child text-xs font-black text-amber-300 uppercase tracking-wider mb-1 flex items-center gap-1">
                  <span>✨</span>
                  <span>Joyful Childhood</span>
                </span>
                <p className="font-child text-base font-bold leading-snug">
                  "Play is the work of the child." — Dr. Maria Montessori
                </p>
              </div>
            </div>
          </div>

          {/* Right Feature Column */}
          <div className="lg:col-span-4 space-y-4">
            {/* Card 4: Lavender Purple */}
            <div className="bg-purple-50/90 p-5 rounded-3xl border-2 border-purple-300/90 shadow-md shadow-purple-100 hover:shadow-xl transition-all hover:-translate-y-1.5 hover:border-purple-400 group">
              <div className="w-11 h-11 rounded-2xl bg-purple-200 text-purple-900 flex items-center justify-center text-xl mb-3 shadow-xs group-hover:scale-110 group-hover:-rotate-6 transition-transform">
                🎨
              </div>
              <h3 className="font-child text-lg font-black text-purple-950">
                Rich Experiential Areas
              </h3>
              <p className="text-xs text-stone-700 mt-1.5 leading-relaxed font-medium">
                From botany jars and sensorial water tables to easel painting and percussion rhythms, learning is a multisensory adventure every day.
              </p>
            </div>

            {/* Card 5: Sky Cyan */}
            <div className="bg-sky-50/90 p-5 rounded-3xl border-2 border-sky-300/90 shadow-md shadow-sky-100 hover:shadow-xl transition-all hover:-translate-y-1.5 hover:border-sky-400 group">
              <div className="w-11 h-11 rounded-2xl bg-sky-200 text-sky-900 flex items-center justify-center text-xl mb-3 shadow-xs group-hover:scale-110 group-hover:rotate-6 transition-transform">
                🧸
              </div>
              <h3 className="font-child text-lg font-black text-sky-950">
                Child-Sized Prepared World
              </h3>
              <p className="text-xs text-stone-700 mt-1.5 leading-relaxed font-medium">
                Low open shelving, miniature wooden tables, child-sized pitchers, and reachable cubbies where toddlers take genuine pride in independence.
              </p>
            </div>

            {/* Card 6: Warm Tangerine / Coral */}
            <div className="bg-orange-50/90 p-5 rounded-3xl border-2 border-orange-300/90 shadow-md shadow-orange-100 hover:shadow-xl transition-all hover:-translate-y-1.5 hover:border-orange-400 group">
              <div className="w-11 h-11 rounded-2xl bg-orange-200 text-orange-900 flex items-center justify-center text-xl mb-3 shadow-xs group-hover:scale-110 group-hover:rotate-6 transition-transform">
                🏡
              </div>
              <h3 className="font-child text-lg font-black text-orange-950">
                I-14/3 Islamabad Campus
              </h3>
              <p className="text-xs text-stone-700 mt-1.5 leading-relaxed font-medium">
                Peaceful, secure neighborhood campus with sunlight, greenery, and dedicated outdoor play area for free, healthy movement.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Callout Banner in Rainbow Cotton Candy Gradient */}
        <div className="bg-gradient-to-r from-pink-100 via-sky-100 via-emerald-100 to-amber-100 p-6 sm:p-8 rounded-3xl border-2 border-white shadow-xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <h4 className="font-child text-xl sm:text-2xl font-black text-[#1E3A8A]">
              Want to see our Montessori classroom in action?
            </h4>
            <p className="text-xs sm:text-sm text-stone-700 mt-1 font-medium">
              We warmly invite parents for a morning walk-through during working hours.
            </p>
          </div>
          <button
            onClick={() => onScrollTo('book-visit')}
            className="px-8 py-3.5 rounded-full font-child font-black text-xs text-white bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 transition-all shadow-md shadow-pink-300/50 hover:shadow-xl shrink-0 flex items-center gap-1.5 cursor-pointer hover:scale-105 active:scale-95"
          >
            <span>Book a Visit</span>
            <ChevronRight className="w-4 h-4 stroke-[3]" />
          </button>
        </div>
      </div>
    </section>
  );
};

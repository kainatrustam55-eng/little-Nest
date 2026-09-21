import React from 'react';
import { SCHOOL_INFO } from '../data/schoolData';
import { SCHOOL_IMAGES } from '../assets/images';
import { CloudPictureFrame } from './CloudPictureFrame';
import { PlayLearnGrowRibbon } from './PlayLearnGrowRibbon';
import { Sparkles, Calendar, ArrowRight, Heart, Sun, MapPin, CheckCircle2, ChevronRight, ShieldCheck, Award, Smile, BookOpen } from 'lucide-react';

interface HeroBannerProps {
  onOpenApply: () => void;
  onScrollTo: (id: string) => void;
}

export const HeroBanner: React.FC<HeroBannerProps> = ({ onOpenApply, onScrollTo }) => {
  return (
    <div id="top" className="relative bg-[#F0F9FF] overflow-hidden">
      {/* 1. TOP OF WEBSITE: Cloud-like Structure Frame for Top Picture */}
      <div className="pt-2 pb-0 px-2 sm:px-6 max-w-6xl mx-auto">
        <CloudPictureFrame
          imageSrc={SCHOOL_IMAGES.logoBanner}
          fallbackSrc={SCHOOL_IMAGES.logoBannerFallback}
          alt="Little Nest Montessori campus banner in Sector I-14/3 Islamabad"
          onOpenApply={onOpenApply}
          onScrollTo={onScrollTo}
        />
      </div>

      {/* 2. VIBRANT HERO SECTION (Inspired by Kindergarten reference layout) */}
      <section className="relative pt-6 pb-12 sm:pb-16 px-4 sm:px-6">
        {/* Playful background doodles: Clouds, sun rays, floating sparkles */}
        <div className="absolute top-10 left-6 text-4xl select-none opacity-80 animate-float pointer-events-none">
          ☁️
        </div>
        <div className="absolute top-20 right-12 text-3xl select-none opacity-80 animate-float pointer-events-none" style={{ animationDelay: '1.5s' }}>
          ☁️
        </div>
        <div className="absolute top-4 right-1/4 text-2xl select-none opacity-90 pointer-events-none">
          ✨
        </div>
        <div className="absolute bottom-16 left-12 text-2xl select-none opacity-80 pointer-events-none">
          💛
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-6 text-center lg:text-left space-y-4">
              {/* Location Tag */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-child font-bold bg-white text-sky-900 border-2 border-sky-200 shadow-xs">
                <span className="text-amber-500">🌱</span>
                <span>Little Nest Montessori • Sector I-14/3, Islamabad</span>
              </div>

              {/* Vibrant Main Headline */}
              <h1 className="font-child text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-[1.15] text-[#1E3A8A]">
                Montessori School in I-14, Islamabad
                <span className="block text-2xl sm:text-3xl lg:text-4xl text-[#F43F5E] mt-1.5 drop-shadow-xs font-black">
                  Nurturing Today, Inspiring Tomorrow
                </span>
              </h1>

              {/* Play Learn Grow in vibrant colors ribbon */}
              <div className="pt-1 flex flex-col items-center lg:items-start gap-1.5">
                <PlayLearnGrowRibbon size="md" onScrollTo={onScrollTo} />
              </div>

              {/* Keyword-Rich Subtitle for SEO & Parents */}
              <p className="text-stone-600 font-medium text-sm sm:text-base max-w-lg leading-relaxed pt-1">
                Welcome to <strong className="font-bold text-stone-800">Little Nest Montessori</strong> — where little minds grow in Sector I-14/3, Islamabad. We offer authentic Montessori <strong className="font-bold text-stone-800">Playgroup, Nursery, and Kindergarten</strong> programs for ages 2 to 6, nurturing joyful independence, bilingual phonics, and hands-on discovery.
              </p>

              {/* Action Buttons (Pill buttons matching reference: Enroll Now pink + Learn More white) */}
              <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-3.5">
                <button
                  onClick={onOpenApply}
                  className="px-7 py-3.5 rounded-full font-child font-black text-sm text-white bg-[#F43F5E] hover:bg-[#E11D48] transition-all shadow-md hover:shadow-xl flex items-center gap-2 hover:scale-105 active:scale-95 cursor-pointer"
                  id="hero-enroll-now-btn"
                >
                  <span>Enroll Now</span>
                  <ChevronRight className="w-4 h-4 stroke-[3]" />
                </button>

                <button
                  onClick={() => onScrollTo('book-visit')}
                  className="px-7 py-3.5 rounded-full font-child font-bold text-sm text-stone-700 bg-white hover:bg-stone-50 transition-all border-2 border-stone-200 hover:border-sky-300 shadow-xs flex items-center gap-2 hover:scale-105 active:scale-95 cursor-pointer"
                  id="hero-learn-more-btn"
                >
                  <span>Book a Visit</span>
                  <ChevronRight className="w-4 h-4 stroke-[3]" />
                </button>

                <button
                  onClick={() => onScrollTo('programs')}
                  className="px-5 py-3.5 rounded-full font-child font-bold text-xs text-sky-700 hover:text-sky-900 transition-colors"
                >
                  Explore Classes 🧸
                </button>
              </div>

              {/* Friendly trust indicators */}
              <div className="pt-3 flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs font-semibold text-stone-600">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Playgroup, Nursery & KG</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>8:30 AM – 12:00 PM Timings</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Loving Female Guides</span>
                </div>
              </div>
            </div>

            {/* Right Visual Composition with Rainbow, Clouds, and Happy Kids */}
            <div className="lg:col-span-6 relative flex items-center justify-center">
              {/* Decorative Rainbow Arch */}
              <div className="absolute -top-6 right-2 w-48 sm:w-64 h-24 sm:h-32 rounded-t-full border-t-8 border-rose-400/70 border-r-8 border-amber-300/70 border-l-8 border-emerald-300/70 pointer-events-none -rotate-6" />

              {/* Sun Badge */}
              <div className="absolute -top-3 left-4 w-12 h-12 rounded-full bg-amber-300 flex items-center justify-center text-2xl shadow-md border-2 border-white animate-bounce pointer-events-none">
                ☀️
              </div>

              {/* Main Photo Card */}
              <div className="relative z-10 w-full max-w-md rounded-3xl overflow-hidden border-4 border-white shadow-2xl bg-white ring-2 ring-sky-200/80">
                <div className="aspect-[4/3] w-full overflow-hidden bg-amber-50 relative">
                  <img
                    src={SCHOOL_IMAGES.learningActivity}
                    alt="Montessori preschool students exploring tactile learning materials at Little Nest Montessori in Sector I-14/3 Islamabad"
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  {/* Bottom overlay pill on photo */}
                  <div className="absolute bottom-3 left-3 right-3 bg-white/90 backdrop-blur-xs px-3.5 py-2 rounded-2xl border border-white/80 shadow-xs flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center text-xs font-bold">
                        ❤️
                      </div>
                      <div className="text-[11px] font-black text-stone-800">
                        Happy Minds • Safe Hands
                      </div>
                    </div>
                    <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full">
                      I-14/3 Islamabad
                    </span>
                  </div>
                </div>
              </div>

              {/* Floating Child Quote Tag */}
              <div className="hidden sm:flex absolute -bottom-4 -left-4 z-20 bg-white p-3 rounded-2xl shadow-xl border-2 border-amber-200 items-center gap-3 animate-float">
                <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center text-lg">
                  🎨
                </div>
                <div className="text-left">
                  <div className="text-xs font-black text-stone-800">Hands-on Learning</div>
                  <div className="text-[10px] text-stone-500">Every child learns at their own pace</div>
                </div>
              </div>
            </div>
          </div>

          {/* 3. FOUR VIBRANT COLOR FEATURE CARDS (Kids Edition with Rich Gradients & Hover Bounce) */}
          <div className="mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {/* Card 1: Play & Learn (Sky Blue to Cyan) */}
            <div className="bg-gradient-to-br from-[#38BDF8] to-[#0284C7] rounded-3xl p-6 text-white shadow-xl relative overflow-hidden flex flex-col justify-between group hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 border-2 border-white/40">
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-white/15 rounded-full pointer-events-none group-hover:scale-125 transition-transform" />
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl group-hover:scale-125 group-hover:rotate-12 transition-transform">🧩</span>
                    <h3 className="font-child text-lg font-black tracking-wide">Play & Learn</h3>
                  </div>
                  <span className="text-[10px] font-child font-black bg-white/25 backdrop-blur-xs px-2.5 py-0.5 rounded-full">
                    Ages 2-6
                  </span>
                </div>

                {/* Circular Photo */}
                <div className="w-24 h-24 mx-auto rounded-full overflow-hidden border-4 border-white shadow-lg mb-4 bg-sky-200 ring-2 ring-white/50">
                  <img
                    src={SCHOOL_IMAGES.learningActivity}
                    alt="Play & Learn Montessori sensorial activities at Little Nest Montessori Islamabad"
                    className="w-full h-full object-cover group-hover:scale-115 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                </div>

                <p className="text-xs text-sky-50 leading-relaxed text-center mb-5 font-medium">
                  Fun Montessori sensorial activities that encourage curiosity, motor skills, and creative problem-solving.
                </p>
              </div>

              <button
                onClick={() => onScrollTo('programs')}
                className="w-full py-2.5 rounded-full font-child font-black text-xs text-[#0284C7] bg-white hover:bg-sky-50 shadow-md flex items-center justify-center gap-1 transition-all cursor-pointer hover:scale-105 active:scale-95"
              >
                <span>Read More</span>
                <ChevronRight className="w-3.5 h-3.5 stroke-[3]" />
              </button>
            </div>

            {/* Card 2: Growing Together (Strawberry Rose to Bubblegum Pink) */}
            <div className="bg-gradient-to-br from-[#FB7185] to-[#F43F5E] rounded-3xl p-6 text-white shadow-xl relative overflow-hidden flex flex-col justify-between group hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 border-2 border-white/40">
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-white/15 rounded-full pointer-events-none group-hover:scale-125 transition-transform" />
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl group-hover:scale-125 group-hover:-rotate-12 transition-transform">💛</span>
                    <h3 className="font-child text-lg font-black tracking-wide">Growing Together</h3>
                  </div>
                  <span className="text-[10px] font-child font-black bg-white/25 backdrop-blur-xs px-2.5 py-0.5 rounded-full">
                    Social Joy
                  </span>
                </div>

                {/* Circular Photo */}
                <div className="w-24 h-24 mx-auto rounded-full overflow-hidden border-4 border-white shadow-lg mb-4 bg-rose-200 ring-2 ring-white/50">
                  <img
                    src={SCHOOL_IMAGES.outdoorPlay}
                    alt="Growing Together in outdoor play and social development at Little Nest I-14 Islamabad"
                    className="w-full h-full object-cover group-hover:scale-115 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                </div>

                <p className="text-xs text-rose-50 leading-relaxed text-center mb-5 font-medium">
                  Building confidence, friendships, sharing, emotional intelligence, and mutual respect in circle time.
                </p>
              </div>

              <button
                onClick={() => onScrollTo('parents')}
                className="w-full py-2.5 rounded-full font-child font-black text-xs text-[#E11D48] bg-white hover:bg-rose-50 shadow-md flex items-center justify-center gap-1 transition-all cursor-pointer hover:scale-105 active:scale-95"
              >
                <span>Read More</span>
                <ChevronRight className="w-3.5 h-3.5 stroke-[3]" />
              </button>
            </div>

            {/* Card 3: Smart Start (Apple Lime to Fresh Green) */}
            <div className="bg-gradient-to-br from-[#A3E635] to-[#65A30D] rounded-3xl p-6 text-white shadow-xl relative overflow-hidden flex flex-col justify-between group hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 border-2 border-white/40">
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-white/15 rounded-full pointer-events-none group-hover:scale-125 transition-transform" />
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl group-hover:scale-125 group-hover:rotate-12 transition-transform">📖</span>
                    <h3 className="font-child text-lg font-black tracking-wide">Smart Start</h3>
                  </div>
                  <span className="text-[10px] font-child font-black bg-white/25 backdrop-blur-xs px-2.5 py-0.5 rounded-full">
                    Phonics & Math
                  </span>
                </div>

                {/* Circular Photo */}
                <div className="w-24 h-24 mx-auto rounded-full overflow-hidden border-4 border-white shadow-lg mb-4 bg-lime-200 ring-2 ring-white/50">
                  <img
                    src={SCHOOL_IMAGES.artCreative}
                    alt="Smart Start phonics and early mathematics at Little Nest Montessori Islamabad"
                    className="w-full h-full object-cover group-hover:scale-115 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                </div>

                <p className="text-xs text-lime-50 leading-relaxed text-center mb-5 font-medium">
                  Early language phonics, mathematical exploration, and practical life skills designed for bright futures.
                </p>
              </div>

              <button
                onClick={() => onScrollTo('programs')}
                className="w-full py-2.5 rounded-full font-child font-black text-xs text-[#65A30D] bg-white hover:bg-lime-50 shadow-md flex items-center justify-center gap-1 transition-all cursor-pointer hover:scale-105 active:scale-95"
              >
                <span>Read More</span>
                <ChevronRight className="w-3.5 h-3.5 stroke-[3]" />
              </button>
            </div>

            {/* Card 4: Safe & Caring (Sunshine Tangerine to Amber) */}
            <div className="bg-gradient-to-br from-[#FBBF24] to-[#D97706] rounded-3xl p-6 text-white shadow-xl relative overflow-hidden flex flex-col justify-between group hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 border-2 border-white/40">
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-white/15 rounded-full pointer-events-none group-hover:scale-125 transition-transform" />
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl group-hover:scale-125 group-hover:-rotate-12 transition-transform">🛡️</span>
                    <h3 className="font-child text-lg font-black tracking-wide">Safe & Caring</h3>
                  </div>
                  <span className="text-[10px] font-child font-black bg-white/25 backdrop-blur-xs px-2.5 py-0.5 rounded-full">
                    Peace of Mind
                  </span>
                </div>

                {/* Circular Photo */}
                <div className="w-24 h-24 mx-auto rounded-full overflow-hidden border-4 border-white shadow-lg mb-4 bg-amber-200 ring-2 ring-white/50">
                  <img
                    src={SCHOOL_IMAGES.learningActivity}
                    alt="Safe and caring Montessori early learning environment in Sector I-14/3 Islamabad"
                    className="w-full h-full object-cover group-hover:scale-115 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                </div>

                <p className="text-xs text-amber-50 leading-relaxed text-center mb-5 font-medium">
                  A safe, happy, and home-like nurturing environment in Sector I-14/3 for every single child to thrive.
                </p>
              </div>

              <button
                onClick={() => onScrollTo('contact')}
                className="w-full py-2.5 rounded-full font-child font-black text-xs text-[#D97706] bg-white hover:bg-amber-50 shadow-md flex items-center justify-center gap-1 transition-all cursor-pointer hover:scale-105 active:scale-95"
              >
                <span>Read More</span>
                <ChevronRight className="w-3.5 h-3.5 stroke-[3]" />
              </button>
            </div>
          </div>

          {/* 4. "WHY CHOOSE US" TRUST STRIP (Matching reference image) */}
          <div className="mt-10 p-5 sm:p-6 bg-white rounded-3xl border border-sky-100 shadow-md">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
              {/* Left label */}
              <div className="text-center lg:text-left shrink-0">
                <div className="font-child text-xl font-black text-[#1E3A8A]">
                  Why <span className="text-[#F43F5E]">Choose Us</span>
                </div>
                <div className="text-[11px] text-stone-500 font-medium">
                  Parents trust Little Nest in Islamabad
                </div>
              </div>

              {/* 4 trust items */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full">
                {/* 1 */}
                <div className="flex items-center gap-3 p-2 rounded-2xl bg-emerald-50/60 border border-emerald-100">
                  <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-lg shrink-0">
                    👩‍🏫
                  </div>
                  <div>
                    <div className="text-xs font-black text-stone-800">Experienced Teachers</div>
                    <div className="text-[10px] text-stone-500">Caring Guides</div>
                  </div>
                </div>

                {/* 2 */}
                <div className="flex items-center gap-3 p-2 rounded-2xl bg-purple-50/60 border border-purple-100">
                  <div className="w-10 h-10 rounded-full bg-purple-100 text-purple-700 flex items-center justify-center text-lg shrink-0">
                    🛡️
                  </div>
                  <div>
                    <div className="text-xs font-black text-stone-800">Safe & Secure</div>
                    <div className="text-[10px] text-stone-500">Child-Proofed</div>
                  </div>
                </div>

                {/* 3 */}
                <div className="flex items-center gap-3 p-2 rounded-2xl bg-amber-50/60 border border-amber-100">
                  <div className="w-10 h-10 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center text-lg shrink-0">
                    🎨
                  </div>
                  <div>
                    <div className="text-xs font-black text-stone-800">Creative Learning</div>
                    <div className="text-[10px] text-stone-500">Sensory & Art</div>
                  </div>
                </div>

                {/* 4 */}
                <div className="flex items-center gap-3 p-2 rounded-2xl bg-sky-50/60 border border-sky-100">
                  <div className="w-10 h-10 rounded-full bg-sky-100 text-sky-700 flex items-center justify-center text-lg shrink-0">
                    🤝
                  </div>
                  <div>
                    <div className="text-xs font-black text-stone-800">Trusted by Parents</div>
                    <div className="text-[10px] text-stone-500">Montessori Way</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

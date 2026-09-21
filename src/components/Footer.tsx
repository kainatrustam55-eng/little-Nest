import React from 'react';
import { SCHOOL_INFO } from '../data/schoolData';
import { MapPin, Phone, Mail, Clock, MessageCircle, Heart, ArrowUp, Calendar, Sparkles, Send, ExternalLink, Smile, Instagram, Facebook } from 'lucide-react';
import { XLogo } from './icons/XLogo';

interface FooterProps {
  onScrollTo: (id: string) => void;
  onOpenApply: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onScrollTo, onOpenApply }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-gradient-to-b from-[#FFF1F2] via-[#FEF3C7]/80 via-[#F0FDF4]/90 via-[#E0F2FE]/90 to-[#F5F3FF] text-stone-800 overflow-hidden">
      {/* 1. TOP VIBRANT RAINBOW ACCENT STRIP (Matching top of page) */}
      <div className="h-2.5 w-full bg-gradient-to-r from-rose-500 via-amber-400 via-emerald-400 via-sky-400 to-purple-500 animate-rainbow-shimmer shadow-sm" />

      {/* Top Scalloped Cloud Wave Transition */}
      <div className="w-full overflow-hidden leading-none pointer-events-none -mt-0.5">
        <svg
          viewBox="0 0 1440 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-8 sm:h-12 object-cover text-white"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0 C120,40 240,55 360,30 C480,8 600,58 720,35 C840,12 960,55 1080,30 C1200,8 1320,45 1440,20 L1440,0 L0,0 Z"
            fill="currentColor"
          />
        </svg>
      </div>

      {/* Luminous Rainbow Filled Glow Spheres (Kids Edition) */}
      <div className="absolute -top-12 -left-12 w-72 h-72 rounded-full bg-rose-400/25 blur-3xl pointer-events-none" />
      <div className="absolute top-10 right-0 w-80 h-80 rounded-full bg-amber-400/25 blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/3 w-96 h-96 rounded-full bg-emerald-400/20 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-4 w-80 h-80 rounded-full bg-sky-400/25 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-10 right-4 w-80 h-80 rounded-full bg-purple-400/25 blur-3xl pointer-events-none" />

      {/* Floating Rainbow Doodles */}
      <div className="absolute top-12 left-6 text-3xl select-none opacity-80 animate-balloon pointer-events-none">
        🎈
      </div>
      <div className="absolute top-16 right-10 text-3xl select-none opacity-80 animate-float pointer-events-none">
        🎨
      </div>
      <div className="absolute bottom-24 left-10 text-3xl select-none opacity-80 animate-float pointer-events-none" style={{ animationDelay: '2s' }}>
        🌈
      </div>
      <div className="absolute bottom-28 right-8 text-3xl select-none opacity-80 animate-balloon pointer-events-none" style={{ animationDelay: '1.5s' }}>
        ⭐
      </div>
      <div className="absolute top-1/2 right-1/4 text-2xl select-none opacity-70 pointer-events-none animate-spin-slow">
        🌸
      </div>

      {/* 2. MAIN FOOTER GRID WITH VIBRANT RAINBOW FILLED CARDS */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-6 pb-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 pb-10 border-b-2 border-pink-300/60">
          {/* Card 1: Brand & Mission with Rose Rainbow Fill */}
          <div className="md:col-span-6 bg-gradient-to-b from-rose-50/95 via-white/95 to-white/95 backdrop-blur-md rounded-3xl p-6 sm:p-8 border-2 border-rose-300 shadow-xl shadow-rose-200/50 space-y-5 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center gap-3.5">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-200 to-rose-200 p-0.5 border-2 border-amber-300 flex items-center justify-center overflow-hidden shrink-0 shadow-md">
                  <img
                    src="/logo.jpeg"
                    alt="Little Nest Montessori School logo - Where Little Minds Grow"
                    className="w-full h-full object-cover rounded-[14px]"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                    onError={(e) => {
                      (e.currentTarget as HTMLElement).style.display = 'none';
                    }}
                  />
                </div>
                <div>
                  <div className="font-child text-2xl sm:text-3xl font-black tracking-tight text-[#1E3A8A]">
                    LITTLE <span className="text-[#F43F5E]">NEST</span>
                  </div>
                  <div className="text-xs font-black text-amber-600 flex items-center gap-1">
                    <span>Where Little Minds Grow</span>
                    <span>🌱</span>
                  </div>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-stone-700 leading-relaxed font-medium">
                A vibrant, joyful early childhood sanctuary in Sector I-14/3, Islamabad, dedicated to authentic Montessori exploration, child-led independence, and gentle Islamic values.
              </p>

              {/* Admission Banner with Bright Rainbow Gradient Fill */}
              <div className="p-4 rounded-2xl bg-gradient-to-r from-rose-100/90 via-amber-100/90 via-emerald-100/80 to-sky-100/90 border-2 border-rose-300 shadow-sm">
                <div className="font-child font-black text-xs text-[#F43F5E] mb-1 flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-amber-500 fill-amber-500" />
                  <span>Admissions Open for Session 2026</span>
                </div>
                <div className="text-stone-800 text-xs font-bold leading-relaxed">
                  Playgroup (2–3 Yrs) • Nursery (3–4 Yrs) • Kindergarten (4–6 Yrs)
                </div>
                <div className="mt-2 text-[11px] text-stone-600 font-medium flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-rose-500 shrink-0" />
                  <span>Campus: House 1460, Street 76, Sector I-14/3, Islamabad</span>
                </div>
              </div>
            </div>

            {/* Bright Rainbow Quick Action Buttons */}
            <div className="flex flex-wrap gap-2.5 pt-2">
              <button
                onClick={onOpenApply}
                className="px-5 py-2.5 rounded-full font-child font-black text-xs text-white bg-gradient-to-r from-rose-500 via-pink-500 to-rose-600 hover:from-rose-600 hover:to-pink-700 transition-all shadow-md shadow-rose-300/60 hover:scale-105 active:scale-95 cursor-pointer flex items-center gap-1.5"
              >
                <span>✨ Apply Online</span>
              </button>
              <button
                onClick={() => onScrollTo('book-visit')}
                className="px-5 py-2.5 rounded-full font-child font-black text-xs text-white bg-gradient-to-r from-sky-500 to-cyan-600 hover:from-sky-600 hover:to-cyan-700 transition-all shadow-md shadow-sky-300/50 hover:scale-105 active:scale-95 cursor-pointer flex items-center gap-1.5"
              >
                <span>📅 Book Visit</span>
              </button>
              <a
                href={`https://wa.me/${SCHOOL_INFO.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 rounded-full font-child font-black text-xs text-white bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 transition-all shadow-md shadow-emerald-300/50 hover:scale-105 active:scale-95 cursor-pointer flex items-center gap-1.5"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
              </a>
            </div>

            {/* Social Media Channels (Instagram & Facebook) */}
            <div className="pt-2 border-t border-rose-200/80">
              <div className="text-[11px] font-bold text-stone-500 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <span>Follow Our Daily Classroom Moments</span>
                <span>📸</span>
              </div>
              <div className="flex flex-wrap items-center gap-2.5">
                <a
                  href={SCHOOL_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-full font-child font-bold text-xs text-white bg-gradient-to-r from-purple-600 via-rose-500 to-amber-500 hover:from-purple-700 hover:to-amber-600 transition-all shadow-md shadow-rose-200/50 flex items-center gap-2 hover:scale-105 active:scale-95 cursor-pointer"
                  title="Follow Little Nest on Instagram"
                >
                  <Instagram className="w-4 h-4" />
                  <span>@littlenestmontessori55</span>
                </a>
                <a
                  href={SCHOOL_INFO.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-full font-child font-bold text-xs text-white bg-[#1877F2] hover:bg-[#166fe5] transition-all shadow-md shadow-blue-200/50 flex items-center gap-2 hover:scale-105 active:scale-95 cursor-pointer"
                  title="Follow Little Nest on Facebook"
                >
                  <Facebook className="w-4 h-4" />
                  <span>Facebook Page</span>
                </a>
                <a
                  href={SCHOOL_INFO.xUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-full font-child font-bold text-xs text-white bg-black hover:bg-stone-900 transition-all shadow-md shadow-stone-300 flex items-center gap-2 hover:scale-105 active:scale-95 cursor-pointer"
                  title="Follow Little Nest on X"
                >
                  <XLogo className="w-4 h-4" />
                  <span>@LittleNest55</span>
                </a>
              </div>
            </div>
          </div>

          {/* Card 2: Campus & Visiting Desk with Amber Rainbow Fill */}
          <div className="md:col-span-6 bg-gradient-to-b from-amber-50/95 via-white/95 to-white/95 backdrop-blur-md rounded-3xl p-6 sm:p-8 border-2 border-amber-300 shadow-xl shadow-amber-200/50 space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-child font-black bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-xs">
              <span>🏫</span>
              <span>Campus & Visiting Desk</span>
            </div>

            <div className="space-y-2.5 text-xs text-stone-800">
              {/* Address with Sky Blue Filling */}
              <div className="flex items-start gap-2.5 p-3 rounded-2xl bg-sky-100/90 border-2 border-sky-300 text-sky-950 shadow-2xs">
                <div className="w-7 h-7 rounded-xl bg-sky-500 text-white flex items-center justify-center shrink-0 shadow-xs mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-child font-black text-sky-900 text-xs uppercase tracking-wider">Campus Address</div>
                  <span className="font-semibold">{SCHOOL_INFO.address}</span>
                </div>
              </div>

              {/* Phone with Rose Pink Filling */}
              <div className="flex items-center gap-2.5 p-3 rounded-2xl bg-rose-100/90 border-2 border-rose-300 text-rose-950 shadow-2xs">
                <div className="w-7 h-7 rounded-xl bg-rose-500 text-white flex items-center justify-center shrink-0 shadow-xs">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-child font-black text-rose-900 text-xs uppercase tracking-wider">Direct Phone Call</div>
                  <a
                    href={`tel:${SCHOOL_INFO.phone}`}
                    className="font-black text-rose-800 hover:underline text-sm"
                  >
                    {SCHOOL_INFO.phoneFormatted}
                  </a>
                </div>
              </div>

              {/* WhatsApp with Emerald Green Filling */}
              <div className="flex items-center gap-2.5 p-3 rounded-2xl bg-emerald-100/90 border-2 border-emerald-300 text-emerald-950 shadow-2xs">
                <div className="w-7 h-7 rounded-xl bg-emerald-500 text-white flex items-center justify-center shrink-0 shadow-xs">
                  <MessageCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-child font-black text-emerald-900 text-xs uppercase tracking-wider">WhatsApp Admissions</div>
                  <a
                    href={`https://wa.me/${SCHOOL_INFO.whatsappNumber}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-black text-emerald-800 hover:underline text-sm"
                  >
                    +92 344 0555262
                  </a>
                </div>
              </div>

              {/* Email with Purple / Indigo Filling */}
              <div className="flex items-center gap-2.5 p-3 rounded-2xl bg-purple-100/90 border-2 border-purple-300 text-purple-950 shadow-2xs">
                <div className="w-7 h-7 rounded-xl bg-purple-600 text-white flex items-center justify-center shrink-0 shadow-xs">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="font-child font-black text-purple-900 text-xs uppercase tracking-wider">Official Email</div>
                  <a
                    href={`mailto:${SCHOOL_INFO.email}`}
                    className="font-black text-purple-800 hover:underline text-xs sm:text-sm truncate block"
                  >
                    {SCHOOL_INFO.email}
                  </a>
                </div>
              </div>

              {/* Timings with Sunny Amber Filling */}
              <div className="flex items-start gap-2.5 p-3 rounded-2xl bg-amber-100/90 border-2 border-amber-300 text-amber-950 shadow-2xs">
                <div className="w-7 h-7 rounded-xl bg-amber-500 text-white flex items-center justify-center shrink-0 shadow-xs mt-0.5">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-child font-black text-amber-900 text-xs uppercase tracking-wider">Campus Timings</div>
                  <div className="font-bold text-stone-800">
                    Class: {SCHOOL_INFO.academicTimings} (Mon–Fri)
                  </div>
                  <div className="text-[11px] text-stone-600 font-medium">
                    Tours/Office: {SCHOOL_INFO.officeHours} (Mon–Fri)
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-1">
              <a
                href={`https://maps.google.com/?q=${encodeURIComponent(SCHOOL_INFO.address)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-full font-child font-black text-xs text-white bg-gradient-to-r from-indigo-600 via-sky-600 to-cyan-600 hover:from-indigo-700 hover:to-cyan-700 transition-all flex items-center justify-center gap-2 shadow-md shadow-sky-300/50 hover:scale-102 cursor-pointer"
              >
                <span>🗺️ Open in Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* 4. VIBRANT SHIMMERING RAINBOW ACCENT STRIP */}
        <div className="my-6 h-3 w-full rounded-full bg-gradient-to-r from-rose-500 via-amber-400 via-emerald-400 via-sky-400 to-purple-500 shadow-md animate-rainbow-shimmer" />

        {/* 5. BOTTOM COPYRIGHT & BACK TO TOP IN RAINBOW PILL CONTAINER */}
        <div className="p-4 sm:p-5 rounded-3xl bg-white/95 backdrop-blur-md border-2 border-pink-200 shadow-md flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-bold text-stone-700">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center sm:text-left">
            <span>© {new Date().getFullYear()} {SCHOOL_INFO.fullName}. Sector I-14/3, Islamabad.</span>
            <div className="flex items-center gap-2">
              <a
                href={SCHOOL_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-7 h-7 rounded-full bg-gradient-to-tr from-purple-600 via-rose-500 to-amber-500 text-white flex items-center justify-center hover:scale-110 transition-transform shadow-xs"
                title="Follow on Instagram"
                aria-label="Instagram"
              >
                <Instagram className="w-3.5 h-3.5" />
              </a>
              <a
                href={SCHOOL_INFO.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-7 h-7 rounded-full bg-[#1877F2] text-white flex items-center justify-center hover:scale-110 transition-transform shadow-xs"
                title="Follow on Facebook"
                aria-label="Facebook"
              >
                <Facebook className="w-3.5 h-3.5" />
              </a>
              <a
                href={SCHOOL_INFO.xUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-7 h-7 rounded-full bg-black text-white flex items-center justify-center hover:scale-110 transition-transform shadow-xs"
                title="Follow on X"
                aria-label="X"
              >
                <XLogo className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-stone-700 font-bold">
              Made with <Heart className="w-4 h-4 text-rose-500 fill-rose-500 inline animate-pulse" /> for Little Learners
            </span>
            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-full bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white shadow-md shadow-rose-300/50 transition-all hover:scale-110 active:scale-95 cursor-pointer flex items-center gap-1"
              aria-label="Scroll to top"
              title="Back to Top"
            >
              <ArrowUp className="w-4 h-4 stroke-[3]" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

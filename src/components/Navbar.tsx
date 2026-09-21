import React, { useState } from 'react';
import { SCHOOL_INFO } from '../data/schoolData';
import { Phone, MessageCircle, MapPin, Menu, X, Sparkles, Sun, Heart, Calendar, Instagram, Facebook } from 'lucide-react';
import { XLogo } from './icons/XLogo';

interface NavbarProps {
  onOpenApply: () => void;
  onScrollTo: (id: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenApply, onScrollTo }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (id: string) => {
    onScrollTo(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-sky-100 shadow-sm">
      {/* Vibrant Rainbow Accent Bar (Kids Edition) */}
      <div className="h-1.5 w-full bg-gradient-to-r from-rose-400 via-amber-400 via-emerald-400 via-sky-400 to-purple-400 animate-rainbow-shimmer" />

      {/* Top Header Bar (Like in reference design: Logo on left, Call Us & Book a Visit on right) */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-2 flex items-center justify-between gap-4">
        {/* Brand Logo & Cute Kindergarten Tagline */}
        <button
          onClick={() => handleNavClick('top')}
          className="flex items-center gap-3 text-left group focus:outline-hidden cursor-pointer"
          id="brand-logo-btn"
        >
          <div className="relative">
            <div className="w-11 h-11 rounded-2xl bg-amber-100/90 border-2 border-amber-300 flex items-center justify-center text-2xl shadow-xs group-hover:scale-105 transition-transform overflow-hidden">
              <img
                src="/logo.jpeg"
                alt="Little Nest Montessori School logo - Sector I-14/3 Islamabad"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  (e.currentTarget as HTMLElement).style.display = 'none';
                }}
              />
            </div>
            <span className="absolute -bottom-1 -right-1 text-sm animate-bounce">
              ☀️
            </span>
          </div>

          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-child text-xl sm:text-2xl font-black tracking-tight text-[#1E3A8A]">
                LITTLE <span className="text-[#F43F5E]">NEST</span>
              </span>
            </div>
            <div className="text-[11px] font-bold text-amber-600 flex items-center gap-1 leading-none">
              <span>Where Little Minds Grow</span>
              <Heart className="w-3 h-3 text-rose-500 fill-rose-500 inline" />
            </div>
          </div>
        </button>

        {/* Right Actions: Call Us (Green) + Book a Visit (Red) + Apply Now (Blue) + Socials */}
        <div className="hidden md:flex items-center gap-2 lg:gap-2.5">
          <a
            href={`tel:${SCHOOL_INFO.phone}`}
            className="px-3.5 lg:px-4 py-2.5 rounded-full font-child font-bold text-xs text-white bg-emerald-600 hover:bg-emerald-700 transition-all shadow-md hover:shadow-lg flex items-center gap-1.5 hover:scale-105 active:scale-95 cursor-pointer"
            id="nav-call-us-top-btn"
            title={`Call Little Nest at ${SCHOOL_INFO.phoneFormatted}`}
          >
            <Phone className="w-3.5 h-3.5 text-white" />
            <span>Call Us</span>
          </a>

          <button
            onClick={() => handleNavClick('book-visit')}
            className="px-4 lg:px-5 py-2.5 rounded-full font-child font-bold text-xs text-white bg-[#F43F5E] hover:bg-[#E11D48] transition-all shadow-md hover:shadow-lg flex items-center gap-1.5 hover:scale-105 active:scale-95 cursor-pointer"
            id="nav-book-visit-top-btn"
          >
            <Calendar className="w-3.5 h-3.5 text-white" />
            <span>Book a Visit</span>
          </button>

          <button
            onClick={onOpenApply}
            className="px-4 lg:px-5 py-2.5 rounded-full font-child font-black text-xs uppercase tracking-wider text-white bg-sky-600 hover:bg-sky-700 transition-all shadow-md hover:shadow-lg flex items-center gap-1.5 hover:scale-105 active:scale-95 cursor-pointer"
            id="nav-apply-top-btn"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            <span>Apply Now</span>
          </button>

          {/* Social Links placed next to Apply Now */}
          <div className="flex items-center gap-1.5 ml-1 pl-2 border-l border-stone-200">
            <a
              href={SCHOOL_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 text-white flex items-center justify-center hover:scale-110 active:scale-95 transition-all shadow-xs"
              title="Follow Little Nest on Instagram (@littlenestmontessori55)"
              aria-label="Instagram"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href={SCHOOL_INFO.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-[#1877F2] text-white flex items-center justify-center hover:scale-110 active:scale-95 transition-all shadow-xs"
              title="Follow Little Nest on Facebook"
              aria-label="Facebook"
            >
              <Facebook className="w-4 h-4" />
            </a>
            <a
              href={SCHOOL_INFO.xUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center hover:scale-110 active:scale-95 transition-all shadow-xs"
              title="Follow Little Nest on X (@LittleNest55)"
              aria-label="X"
            >
              <XLogo className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Mobile menu button */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={onOpenApply}
            className="px-3.5 py-1.5 rounded-full font-child font-bold text-xs text-white bg-[#F43F5E]"
          >
            Apply Now
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl text-stone-700 hover:bg-stone-100"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Primary Navigation Ribbon (Matching the rounded white card with icons in reference image) */}
      <div className="hidden md:block bg-gradient-to-r from-sky-50/80 via-white to-sky-50/80 border-t border-sky-100/80 py-1.5">
        <nav className="max-w-5xl mx-auto px-4 flex items-center justify-center gap-7 text-xs font-bold text-stone-600">
          <button
            onClick={() => handleNavClick('top')}
            className="hover:text-sky-600 transition-colors py-1 flex items-center gap-1 group cursor-pointer"
          >
            <span className="text-sm group-hover:scale-110 transition-transform">🏠</span>
            <span>HOME</span>
          </button>

          <button
            onClick={() => handleNavClick('about')}
            className="hover:text-sky-600 transition-colors py-1 flex items-center gap-1 group cursor-pointer"
          >
            <span className="text-sm group-hover:scale-110 transition-transform">👥</span>
            <span>ABOUT US</span>
          </button>

          <button
            onClick={() => handleNavClick('programs')}
            className="hover:text-sky-600 transition-colors py-1 flex items-center gap-1 group cursor-pointer"
          >
            <span className="text-sm group-hover:scale-110 transition-transform">🧸</span>
            <span>OUR CLASSES</span>
          </button>

          <button
            onClick={() => handleNavClick('learning-areas')}
            className="hover:text-sky-600 transition-colors py-1 flex items-center gap-1 group cursor-pointer"
          >
            <span className="text-sm group-hover:scale-110 transition-transform">📚</span>
            <span>LEARNING AREAS</span>
          </button>

          <button
            onClick={() => handleNavClick('parents')}
            className="hover:text-sky-600 transition-colors py-1 flex items-center gap-1 group cursor-pointer"
          >
            <span className="text-sm group-hover:scale-110 transition-transform">⭐</span>
            <span>DAY AT NEST</span>
          </button>

          <button
            onClick={() => handleNavClick('growth-journey')}
            className="hover:text-sky-600 transition-colors py-1 flex items-center gap-1 group cursor-pointer"
          >
            <span className="text-sm group-hover:scale-110 transition-transform">📏</span>
            <span>WATCH ME GROW</span>
          </button>

          <button
            onClick={() => handleNavClick('admissions')}
            className="hover:text-sky-600 transition-colors py-1 flex items-center gap-1 group cursor-pointer"
          >
            <span className="text-sm group-hover:scale-110 transition-transform">📝</span>
            <span>ADMISSIONS</span>
          </button>

          <button
            onClick={() => handleNavClick('contact')}
            className="hover:text-sky-600 transition-colors py-1 flex items-center gap-1 group cursor-pointer"
          >
            <span className="text-sm group-hover:scale-110 transition-transform">📍</span>
            <span>CONTACT</span>
          </button>
        </nav>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-sky-100 bg-white px-4 py-4 space-y-3 shadow-lg">
          <div className="grid grid-cols-2 gap-2 text-xs font-bold">
            <button
              onClick={() => handleNavClick('top')}
              className="p-2.5 text-left rounded-xl bg-sky-50 text-sky-900 flex items-center gap-2"
            >
              <span>🏠</span>
              <span>Home</span>
            </button>
            <button
              onClick={() => handleNavClick('about')}
              className="p-2.5 text-left rounded-xl bg-amber-50 text-amber-900 flex items-center gap-2"
            >
              <span>👥</span>
              <span>About Us</span>
            </button>
            <button
              onClick={() => handleNavClick('programs')}
              className="p-2.5 text-left rounded-xl bg-rose-50 text-rose-900 flex items-center gap-2"
            >
              <span>🧸</span>
              <span>Our Classes</span>
            </button>
            <button
              onClick={() => handleNavClick('learning-areas')}
              className="p-2.5 text-left rounded-xl bg-emerald-50 text-emerald-900 flex items-center gap-2"
            >
              <span>📚</span>
              <span>Learning Areas</span>
            </button>
            <button
              onClick={() => handleNavClick('parents')}
              className="p-2.5 text-left rounded-xl bg-purple-50 text-purple-900 flex items-center gap-2"
            >
              <span>⭐</span>
              <span>Day at Nest</span>
            </button>
            <button
              onClick={() => handleNavClick('growth-journey')}
              className="p-2.5 text-left rounded-xl bg-teal-50 text-teal-900 flex items-center gap-2"
            >
              <span>📏</span>
              <span>Watch Me Grow</span>
            </button>
            <button
              onClick={() => handleNavClick('admissions')}
              className="p-2.5 text-left rounded-xl bg-orange-50 text-orange-900 flex items-center gap-2"
            >
              <span>📝</span>
              <span>Admissions</span>
            </button>
            <button
              onClick={() => handleNavClick('contact')}
              className="p-2.5 text-left rounded-xl bg-stone-100 text-stone-900 flex items-center gap-2"
            >
              <span>📍</span>
              <span>Contact</span>
            </button>
          </div>

          <div className="pt-2 flex flex-col gap-2">
            {/* Social Links Row for Mobile */}
            <div className="grid grid-cols-3 gap-1.5">
              <a
                href={SCHOOL_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="py-2 px-2 rounded-full font-child font-bold text-xs text-white bg-gradient-to-r from-purple-600 via-rose-500 to-amber-500 flex items-center justify-center gap-1 shadow-xs"
              >
                <Instagram className="w-3.5 h-3.5" />
                <span className="truncate">Insta</span>
              </a>
              <a
                href={SCHOOL_INFO.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="py-2 px-2 rounded-full font-child font-bold text-xs text-white bg-[#1877F2] flex items-center justify-center gap-1 shadow-xs"
              >
                <Facebook className="w-3.5 h-3.5" />
                <span className="truncate">FB</span>
              </a>
              <a
                href={SCHOOL_INFO.xUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="py-2 px-2 rounded-full font-child font-bold text-xs text-white bg-black flex items-center justify-center gap-1 shadow-xs"
                title="Follow on X"
              >
                <XLogo className="w-3 h-3" />
                <span className="truncate">X</span>
              </a>
            </div>

            <a
              href={`tel:${SCHOOL_INFO.phone}`}
              className="w-full py-2.5 rounded-full font-child font-bold text-xs text-white bg-emerald-600 flex items-center justify-center gap-1.5 text-center shadow-xs"
            >
              <Phone className="w-3.5 h-3.5 text-white" />
              <span>Call Us: {SCHOOL_INFO.phoneFormatted}</span>
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenApply();
              }}
              className="w-full py-3 rounded-full font-child font-bold text-sm text-white bg-[#F43F5E] shadow-sm text-center"
            >
              Enroll Now / Apply
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                handleNavClick('book-visit');
              }}
              className="w-full py-2.5 rounded-full font-child font-bold text-xs text-sky-800 bg-sky-100 text-center"
            >
              Book a Visit (Sector I-14/3)
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

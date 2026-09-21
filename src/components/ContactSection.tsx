import React from 'react';
import { SCHOOL_INFO } from '../data/schoolData';
import { MapPin, Phone, MessageCircle, Clock, Navigation, Mail, Heart, Sparkles, ChevronRight, Instagram, Facebook } from 'lucide-react';
import { XLogo } from './icons/XLogo';

interface ContactSectionProps {
  onOpenApply: () => void;
  onScrollTo: (id: string) => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenApply, onScrollTo }) => {
  return (
    <section id="contact" className="py-16 sm:py-20 bg-gradient-to-b from-white via-sky-50/20 to-lime-50/20 border-b border-sky-100 relative overflow-hidden">
      {/* Background doodles */}
      <div className="absolute top-10 left-8 text-3xl opacity-70 select-none pointer-events-none animate-balloon">
        📍
      </div>
      <div className="absolute top-16 right-10 text-3xl opacity-70 select-none pointer-events-none animate-float">
        🧭
      </div>
      <div className="absolute bottom-10 right-8 text-3xl opacity-70 select-none pointer-events-none animate-balloon" style={{ animationDelay: '1.5s' }}>
        🏫
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-child font-bold bg-amber-100 text-amber-900 border-2 border-amber-300 mb-3 shadow-xs">
            <MapPin className="w-3.5 h-3.5 text-amber-700" />
            <span>Visit Our Campus</span>
          </div>
          <h2 className="font-child text-3xl sm:text-4xl lg:text-5xl font-black text-[#1E3A8A] tracking-tight">
            Campus Location & Contact — I-14/3 Islamabad
          </h2>
          <p className="text-sm sm:text-base text-stone-600 mt-2 leading-relaxed font-medium">
            Conveniently situated in Sector I-14/3, Islamabad, close to FAST University, Sector G-13, and Sector G-14. We warmly welcome families for morning campus visits.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Contact Details Cards */}
          <div className="lg:col-span-5 space-y-4 flex flex-col justify-between">
            {/* Campus Address Card */}
            <div className="bg-white p-6 rounded-3xl border-2 border-sky-200 shadow-lg hover:shadow-xl hover:border-sky-300 transition-all">
              <div className="flex items-start gap-3.5">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-sky-400 to-cyan-500 text-white flex items-center justify-center shrink-0 shadow-md shadow-sky-200">
                  <MapPin className="w-7 h-7 text-white" />
                </div>
                <div>
                  <span className="text-xs font-child font-black uppercase tracking-wider text-sky-700">
                    Campus Address
                  </span>
                  <h3 className="font-child text-lg font-black text-[#1E3A8A] mt-0.5">
                    {SCHOOL_INFO.address}
                  </h3>
                  <p className="text-xs text-stone-500 mt-1 font-medium">
                    Near local parks and community center, easily accessible with safe pickup & drop-off zone.
                  </p>
                  <a
                    href={`https://maps.google.com/?q=${encodeURIComponent(SCHOOL_INFO.address)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-child font-black text-sky-600 hover:text-sky-800 mt-3 hover:translate-x-1 transition-transform"
                  >
                    <Navigation className="w-3.5 h-3.5" />
                    <span>Get Directions on Google Maps</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Direct Phone & WhatsApp */}
            <div className="bg-white p-6 rounded-3xl border-2 border-amber-200 shadow-lg hover:shadow-xl hover:border-amber-300 transition-all space-y-4">
              <div className="flex items-center gap-3.5">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-400 to-orange-400 text-white flex items-center justify-center shrink-0 shadow-md shadow-amber-200">
                  <Phone className="w-7 h-7 text-white" />
                </div>
                <div>
                  <span className="text-xs font-child font-black uppercase tracking-wider text-amber-900">
                    Direct Phone Call
                  </span>
                  <div className="font-child text-lg font-black text-[#1E3A8A]">
                    <a href={`tel:${SCHOOL_INFO.phone}`} className="hover:text-sky-600 transition-colors">
                      {SCHOOL_INFO.phoneFormatted}
                    </a>
                  </div>
                  <div className="text-xs text-stone-500 font-medium">
                    Available during visiting hours (8:00 AM – 3:30 PM)
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-stone-100 flex items-center gap-3.5">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-500 text-white flex items-center justify-center shrink-0 shadow-md shadow-emerald-200">
                  <MessageCircle className="w-7 h-7 text-white" />
                </div>
                <div>
                  <span className="text-xs font-child font-black uppercase tracking-wider text-emerald-800">
                    WhatsApp Desk
                  </span>
                  <div className="font-child text-lg font-black text-[#1E3A8A]">
                    <a
                      href={`https://wa.me/${SCHOOL_INFO.whatsappNumber}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-emerald-700 transition-colors"
                    >
                      +92 344 0555262
                    </a>
                  </div>
                  <div className="text-xs text-stone-500 font-medium">
                    Instant message replies for inquiries and tour bookings
                  </div>
                </div>
              </div>
            </div>

            {/* Timings */}
            <div className="bg-gradient-to-r from-amber-100/80 to-rose-100/80 p-5 rounded-3xl border-2 border-amber-300 shadow-md space-y-2">
              <div className="flex items-center gap-2 text-xs font-child font-black text-amber-950">
                <Clock className="w-4 h-4 text-amber-900" />
                <span>School & Office Timings</span>
              </div>
              <div className="text-xs text-stone-800 font-medium space-y-1">
                <div>• <strong>Classroom Hours:</strong> {SCHOOL_INFO.academicTimings} (Monday – Friday)</div>
                <div>• <strong>Office & Visit Hours:</strong> {SCHOOL_INFO.officeHours} (Monday – Friday)</div>
              </div>
            </div>

            {/* Social Media Community Card */}
            <div className="bg-white p-5 rounded-3xl border-2 border-purple-200 shadow-md hover:shadow-lg transition-all space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-child font-black uppercase tracking-wider text-purple-900 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                  <span>Connect On Social Media</span>
                </span>
                <span className="text-[11px] font-bold text-rose-500">Live Classroom Updates</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                <a
                  href={SCHOOL_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-2xl bg-gradient-to-r from-purple-600 via-rose-500 to-amber-500 text-white flex items-center gap-2 font-child font-bold text-xs shadow-md shadow-rose-200/50 hover:scale-102 active:scale-95 transition-all"
                  title="Follow Little Nest on Instagram"
                >
                  <div className="w-7 h-7 rounded-xl bg-white/20 flex items-center justify-center shrink-0">
                    <Instagram className="w-4 h-4 text-white" />
                  </div>
                  <div className="truncate text-left">
                    <div className="text-[10px] text-white/85 leading-none">Instagram</div>
                    <div className="text-xs font-black truncate">@littlenest</div>
                  </div>
                </a>

                <a
                  href={SCHOOL_INFO.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-2xl bg-[#1877F2] text-white flex items-center gap-2 font-child font-bold text-xs shadow-md shadow-blue-200/50 hover:scale-102 active:scale-95 transition-all"
                  title="Follow Little Nest on Facebook"
                >
                  <div className="w-7 h-7 rounded-xl bg-white/20 flex items-center justify-center shrink-0">
                    <Facebook className="w-4 h-4 text-white" />
                  </div>
                  <div className="truncate text-left">
                    <div className="text-[10px] text-white/85 leading-none">Facebook</div>
                    <div className="text-xs font-black truncate">Facebook Page</div>
                  </div>
                </a>

                <a
                  href={SCHOOL_INFO.xUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-2xl bg-black text-white flex items-center gap-2 font-child font-bold text-xs shadow-md shadow-stone-300 hover:scale-102 active:scale-95 transition-all"
                  title="Follow Little Nest on X (@LittleNest55)"
                >
                  <div className="w-7 h-7 rounded-xl bg-white/20 flex items-center justify-center shrink-0">
                    <XLogo className="w-4 h-4" />
                  </div>
                  <div className="truncate text-left">
                    <div className="text-[10px] text-white/85 leading-none">X</div>
                    <div className="text-xs font-black truncate">@LittleNest55</div>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Interactive Map & Campus Photo Display */}
          <div className="lg:col-span-7 bg-white rounded-3xl border-2 border-sky-200 shadow-2xl p-5 sm:p-7 flex flex-col justify-between">
            <div className="mb-4">
              <h3 className="font-child text-xl sm:text-2xl font-black text-[#1E3A8A] mb-1">
                Islamabad Sector I-14/3 Map
              </h3>
              <p className="text-xs text-stone-600 font-medium">
                Conveniently situated in Islamabad for parents in I-14, I-15, I-16, and surrounding sectors.
              </p>
            </div>

            {/* Map iframe embed */}
            <div className="w-full rounded-2xl overflow-hidden border-2 border-stone-200 aspect-[16/10] bg-stone-100 relative shadow-inner mb-4">
              <iframe
                title="Little Nest Montessori Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13292.839217604474!2d72.955!3d33.615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38df971b3e8e7c11%3A0x6b4a39b0a1f0a20!2sSector%20I-14%2F3%20I-14%2C%20Islamabad!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
              <button
                onClick={() => onScrollTo('book-visit')}
                className="px-6 py-3.5 rounded-full font-child font-black text-xs text-amber-950 bg-gradient-to-r from-amber-300 to-yellow-400 hover:from-amber-400 hover:to-yellow-500 transition-all border-2 border-amber-400 shadow-md hover:scale-105 active:scale-95 cursor-pointer"
              >
                ✨ Schedule Visit Date
              </button>
              <a
                href={`https://wa.me/${SCHOOL_INFO.whatsappNumber}?text=Assalam-o-Alaikum!%20I%20would%20like%20directions%20to%20Little%20Nest%20in%20I-14/3.`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-full font-child font-black text-xs text-white bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 transition-all shadow-md shadow-emerald-200 flex items-center gap-1.5 cursor-pointer hover:scale-105 active:scale-95"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Ask for Location on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

import React, { useState } from 'react';
import { SCHOOL_INFO } from '../data/schoolData';
import { MessageCircle, Phone, X, Sparkles, Calendar, Baby, MapPin, Send } from 'lucide-react';

interface FloatingWhatsAppProps {
  onOpenApply: () => void;
  onScrollTo: (id: string) => void;
}

export const FloatingWhatsApp: React.FC<FloatingWhatsAppProps> = ({ onOpenApply, onScrollTo }) => {
  const [isOpen, setIsOpen] = useState(false);

  const quickQuestions = [
    {
      label: 'Book a Campus Visit 🏫',
      text: 'Assalam-o-Alaikum! I would like to book a morning visit to see Little Nest Montessori.',
    },
    {
      label: 'Playgroup Admissions (Age 2–3) 🧸',
      text: 'Assalam-o-Alaikum! I want to inquire about Playgroup admissions for my toddler.',
    },
    {
      label: 'Nursery & Kindergarten 📚',
      text: 'Assalam-o-Alaikum! I would like details about Nursery / Kindergarten admissions.',
    },
    {
      label: 'Campus Location & Timings 📍',
      text: 'Assalam-o-Alaikum! Please share exact location directions for Little Nest in Sector I-14/3, Islamabad.',
    },
  ];

  const handleSendPrompt = (text: string) => {
    window.open(`https://wa.me/${SCHOOL_INFO.whatsappNumber}?text=${encodeURIComponent(text)}`, '_blank');
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-2.5 font-sans">
      {/* Expanded Quick Ask Menu */}
      {isOpen && (
        <div className="bg-white rounded-3xl p-5 shadow-2xl border border-amber-200/90 w-80 mb-2 animate-in slide-in-from-bottom-5 duration-200">
          <div className="flex items-center justify-between pb-3 border-b border-stone-100 mb-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-sm">
                🌱
              </div>
              <div>
                <div className="text-xs font-black text-[#193223]">Ask Little Nest</div>
                <div className="text-[10px] text-emerald-700 font-semibold flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Online • Quick WhatsApp Replies
                </div>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1.5 rounded-full text-stone-400 hover:text-stone-700 hover:bg-stone-100"
              aria-label="Close"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <p className="text-xs text-stone-600 mb-3">
            How can we help you today? Choose a question or send a custom message:
          </p>

          <div className="space-y-2 mb-3">
            {quickQuestions.map((q, idx) => (
              <button
                key={idx}
                onClick={() => handleSendPrompt(q.text)}
                className="w-full text-left p-2.5 rounded-xl text-xs font-bold text-stone-700 bg-stone-50 hover:bg-emerald-50 hover:text-emerald-900 border border-stone-200 hover:border-emerald-200 transition-colors flex items-center justify-between"
              >
                <span>{q.label}</span>
                <Send className="w-3 h-3 opacity-50 shrink-0" />
              </button>
            ))}
          </div>

          <div className="pt-2 border-t border-stone-100 flex items-center justify-between text-xs">
            <a
              href={`tel:${SCHOOL_INFO.phone}`}
              className="font-bold text-stone-600 hover:text-emerald-800 flex items-center gap-1"
            >
              <Phone className="w-3.5 h-3.5 text-stone-500" />
              <span>Call: 0344 0555262</span>
            </a>
            <button
              onClick={() => {
                setIsOpen(false);
                onOpenApply();
              }}
              className="font-bold text-emerald-700 hover:underline"
            >
              Online Apply
            </button>
          </div>
        </div>
      )}

      {/* Action Buttons Row */}
      <div className="flex items-center gap-2">
        {/* Quick Call Button */}
        <a
          href={`tel:${SCHOOL_INFO.phone}`}
          className="w-12 h-12 rounded-full bg-white text-stone-800 shadow-lg border border-stone-200 flex items-center justify-center hover:bg-stone-50 hover:scale-105 transition-all"
          title="Call Little Nest Office (0344 0555262)"
          id="floating-call-btn"
        >
          <Phone className="w-5 h-5 text-emerald-800" />
        </a>

        {/* WhatsApp Button with Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="group flex items-center gap-2.5 px-4 py-3 rounded-full bg-[#25D366] text-white shadow-xl hover:bg-[#20bd5a] hover:scale-105 transition-all cursor-pointer"
          id="floating-whatsapp-btn"
          aria-label="Ask Little Nest on WhatsApp"
        >
          <MessageCircle className="w-5 h-5 fill-white" />
          <span className="text-xs font-bold tracking-wide pr-1">
            Ask Little Nest 🌱
          </span>
        </button>
      </div>
    </div>
  );
};

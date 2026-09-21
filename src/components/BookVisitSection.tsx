import React, { useState } from 'react';
import { SCHOOL_INFO } from '../data/schoolData';
import { Calendar, Clock, User, Phone, CheckCircle2, Sparkles, MessageCircle, MapPin, ChevronRight } from 'lucide-react';

export const BookVisitSection: React.FC = () => {
  const [parentName, setParentName] = useState('');
  const [phone, setPhone] = useState('');
  const [preferredDate, setPreferredDate] = useState('');
  const [preferredTime, setPreferredTime] = useState('09:30 AM (Classroom Work Observation)');
  const [notes, setNotes] = useState('');
  const [booked, setBooked] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setBooked(true);

    const message = encodeURIComponent(
      `Assalam-o-Alaikum Little Nest Admissions!\n\n` +
      `I would like to book a campus visit:\n` +
      `• Parent Name: ${parentName}\n` +
      `• Phone Number: ${phone}\n` +
      `• Preferred Date: ${preferredDate}\n` +
      `• Preferred Time: ${preferredTime}\n` +
      (notes ? `• Note/Child Age: ${notes}\n` : '') +
      `• Location: House No. 1460, Street 76, Sector I-14/3, Islamabad\n\n` +
      `Please confirm my campus visit appointment.`
    );

    window.open(`https://wa.me/${SCHOOL_INFO.whatsappNumber}?text=${message}`, '_blank');
  };

  return (
    <section id="book-visit" className="py-16 sm:py-20 bg-gradient-to-b from-[#FFFDF9] via-amber-50/25 to-sky-50/25 border-b border-sky-100 relative overflow-hidden">
      {/* Background doodles */}
      <div className="absolute top-10 right-10 text-3xl opacity-70 select-none pointer-events-none animate-balloon">
        🏫
      </div>
      <div className="absolute bottom-12 left-6 text-3xl opacity-70 select-none pointer-events-none animate-float">
        🌈
      </div>
      <div className="absolute top-1/2 left-4 text-2xl opacity-60 select-none pointer-events-none animate-spin-slow">
        ✨
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-child font-bold bg-amber-100 text-amber-900 border-2 border-amber-300 mb-3 shadow-xs">
            <Calendar className="w-3.5 h-3.5 text-amber-700" />
            <span>Campus Tours Open</span>
          </div>
          <h2 className="font-child text-3xl sm:text-4xl lg:text-5xl font-black text-[#1E3A8A] tracking-tight">
            Come & See Little Nest
          </h2>
          <p className="text-sm sm:text-base text-stone-600 mt-2 font-medium">
            Experience our sunlit classrooms, touch the Montessori materials, and meet our caring guides in Sector I-14/3, Islamabad.
          </p>
        </div>

        {/* Card Form */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border-2 border-amber-200 shadow-2xl relative overflow-hidden">
          {booked ? (
            <div className="text-center py-8 space-y-4 animate-in fade-in zoom-in-95">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-emerald-100 to-teal-200 text-emerald-700 mx-auto flex items-center justify-center text-4xl shadow-md animate-bounce-gentle">
                🌸
              </div>
              <h3 className="font-child text-2xl sm:text-3xl font-black text-[#1E3A8A]">
                Visit Request Received!
              </h3>
              <p className="text-sm text-stone-600 max-w-md mx-auto leading-relaxed font-medium">
                Thank you, <strong>{parentName}</strong>. We look forward to welcoming you on <strong>{preferredDate}</strong> at <strong>{preferredTime}</strong> at our campus in Sector I-14/3, Islamabad.
              </p>
              <div className="pt-3 flex flex-wrap justify-center gap-3">
                <a
                  href={`https://wa.me/${SCHOOL_INFO.whatsappNumber}?text=Assalam-o-Alaikum!%20I%20have%20booked%20a%20visit%20for%20${encodeURIComponent(parentName)}%20on%20${encodeURIComponent(preferredDate)}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-full font-child font-black text-xs text-white bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 shadow-lg shadow-emerald-200 transition-all flex items-center gap-1.5 cursor-pointer hover:scale-105"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Confirm on WhatsApp</span>
                </a>
                <button
                  onClick={() => {
                    setBooked(false);
                    setParentName('');
                    setPhone('');
                    setPreferredDate('');
                    setNotes('');
                  }}
                  className="px-6 py-3 rounded-full font-child font-bold text-xs text-stone-600 bg-stone-100 hover:bg-stone-200 transition-colors cursor-pointer"
                >
                  Book Another Date
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold text-stone-800 mb-1.5 flex items-center gap-1">
                    <User className="w-3.5 h-3.5 text-stone-400" />
                    <span>Parent / Guardian Name *</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={parentName}
                    onChange={(e) => setParentName(e.target.value)}
                    placeholder="e.g. Fatima Khan"
                    className="w-full px-4 py-3 text-sm rounded-2xl border border-stone-200 focus:border-sky-500 focus:ring-2 focus:ring-sky-200 focus:outline-hidden bg-stone-50/50"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-800 mb-1.5 flex items-center gap-1">
                    <Phone className="w-3.5 h-3.5 text-stone-400" />
                    <span>Phone / WhatsApp Number *</span>
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="e.g. 0344 0555262"
                    className="w-full px-4 py-3 text-sm rounded-2xl border border-stone-200 focus:border-sky-500 focus:ring-2 focus:ring-sky-200 focus:outline-hidden bg-stone-50/50"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold text-stone-800 mb-1.5 flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-stone-400" />
                    <span>Preferred Date *</span>
                  </label>
                  <input
                    type="date"
                    required
                    value={preferredDate}
                    onChange={(e) => setPreferredDate(e.target.value)}
                    className="w-full px-4 py-3 text-sm rounded-2xl border border-stone-200 focus:border-sky-500 focus:ring-2 focus:ring-sky-200 focus:outline-hidden bg-stone-50/50"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-800 mb-1.5 flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-stone-400" />
                    <span>Preferred Time Slot *</span>
                  </label>
                  <select
                    value={preferredTime}
                    onChange={(e) => setPreferredTime(e.target.value)}
                    className="w-full px-4 py-3 text-sm rounded-2xl border border-stone-200 focus:border-sky-500 focus:ring-2 focus:ring-sky-200 focus:outline-hidden bg-stone-50/50"
                  >
                    <option value="09:00 AM (Morning Circle & Arrival)">09:00 AM (Morning Circle & Arrival)</option>
                    <option value="09:30 AM (Classroom Work Observation)">09:30 AM (Classroom Work Observation)</option>
                    <option value="10:30 AM (Creative & Outdoor Play)">10:30 AM (Creative & Outdoor Play)</option>
                    <option value="12:30 PM (After-School Tour & Consultation)">12:30 PM (After-School Tour & Consultation)</option>
                    <option value="02:00 PM (Afternoon Office Appointment)">02:00 PM (Afternoon Office Appointment)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-stone-800 mb-1.5">
                  Child's Age or Inquiries (Optional)
                </label>
                <input
                  type="text"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="e.g. My daughter is 3 years old, interested in Nursery"
                  className="w-full px-4 py-3 text-sm rounded-2xl border border-stone-200 focus:border-sky-500 focus:ring-2 focus:ring-sky-200 focus:outline-hidden bg-stone-50/50"
                />
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-xs text-stone-600 font-medium">
                  <MapPin className="w-4 h-4 text-emerald-700 shrink-0" />
                  <span>Sector I-14/3, Islamabad (Visiting Hours: 8:00 AM – 3:30 PM)</span>
                </div>
                <button
                  type="submit"
                  className="w-full sm:w-auto px-8 py-3.5 rounded-full font-child font-black text-sm text-white bg-gradient-to-r from-[#F43F5E] via-[#FB7185] to-[#F43F5E] hover:from-[#E11D48] hover:to-[#FB7185] transition-all shadow-lg hover:shadow-2xl shadow-rose-300/60 flex items-center justify-center gap-2 cursor-pointer hover:scale-105 active:scale-95"
                  id="submit-book-visit-btn"
                >
                  <Calendar className="w-4 h-4 text-white" />
                  <span>✨ Book a Campus Visit</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

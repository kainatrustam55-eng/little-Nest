import React, { useState } from 'react';
import { SCHOOL_INFO } from '../data/schoolData';
import { SCHOOL_IMAGES } from '../assets/images';
import { Sparkles, Send, CheckCircle2, User, Phone, Baby, ArrowRight, Heart } from 'lucide-react';

interface AdmissionSectionProps {
  initialProgram?: string;
}

export const AdmissionSection: React.FC<AdmissionSectionProps> = ({ initialProgram = 'Playgroup' }) => {
  const [childName, setChildName] = useState('');
  const [childAge, setChildAge] = useState('');
  const [parentName, setParentName] = useState('');
  const [phone, setPhone] = useState('');
  const [program, setProgram] = useState(initialProgram);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    const message = encodeURIComponent(
      `Assalam-o-Alaikum Little Nest Admissions Team!\n\n` +
      `I would like to apply for admission for my child:\n` +
      `• Child's Name: ${childName}\n` +
      `• Child's Age: ${childAge}\n` +
      `• Parent's Name: ${parentName}\n` +
      `• Phone Number: ${phone}\n` +
      `• Program applying for: ${program}\n` +
      `• Campus: House No. 1460, Street 76, Sector I-14/3, Islamabad\n\n` +
      `Please let me know about the next step and available seats.`
    );

    window.open(`https://wa.me/${SCHOOL_INFO.whatsappNumber}?text=${message}`, '_blank');
  };

  return (
    <section id="admissions" className="py-16 sm:py-20 bg-gradient-to-b from-[#F0F9FF] via-[#FDF4FF]/60 to-[#FFFBEB]/80 border-b border-sky-100 relative overflow-hidden">
      {/* Playful doodles */}
      <div className="absolute top-10 right-10 text-3xl opacity-70 select-none pointer-events-none animate-balloon">
        🎈
      </div>
      <div className="absolute bottom-12 left-8 text-3xl opacity-70 select-none pointer-events-none animate-float">
        🌸
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-child font-bold bg-amber-100 text-amber-900 border-2 border-amber-300 mb-3 shadow-xs">
            <span>📝</span>
            <span>Online Admission</span>
          </div>
          <h2 className="font-child text-3xl sm:text-4xl lg:text-5xl font-black text-[#1E3A8A] tracking-tight">
            Apply for Your Child's Seat
          </h2>
          <p className="text-sm sm:text-base text-stone-600 mt-2 leading-relaxed font-medium">
            Fast, easy 1-minute application. Our admissions coordinator will reach out directly to guide your family in Sector I-14/3, Islamabad.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left: Little Nest Atmosphere Card */}
          <div className="lg:col-span-5 space-y-4">
            <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-white ring-4 ring-pink-100 aspect-[4/3] relative group hover:rotate-1 transition-transform">
              <img
                src={SCHOOL_IMAGES.artCreative}
                alt="Pakistani children exploring art at Little Nest"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900/70 via-transparent to-transparent flex items-end p-4">
                <span className="text-xs font-bold text-white flex items-center gap-1.5">
                  <Heart className="w-4 h-4 text-rose-400 fill-rose-400" />
                  Gentle, loving settling period for every child
                </span>
              </div>
            </div>

            <div className="bg-white/95 p-5 rounded-3xl border-2 border-sky-100 shadow-md space-y-3">
              <div className="text-xs font-child font-black text-[#1E3A8A] uppercase tracking-wider flex items-center gap-1.5">
                <span>🌱</span>
                <span>Simple 3-Step Enrollment</span>
              </div>
              <ul className="space-y-2 text-xs text-stone-700">
                <li className="flex items-start gap-2.5">
                  <span className="w-6 h-6 rounded-full bg-rose-100 text-rose-700 font-black flex items-center justify-center shrink-0 text-xs border border-rose-200">1</span>
                  <span><strong>Submit Application:</strong> Fill the simple form on the right.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-6 h-6 rounded-full bg-sky-100 text-sky-700 font-black flex items-center justify-center shrink-0 text-xs border border-sky-200">2</span>
                  <span><strong>Classroom Walk-Through:</strong> Meet the teachers and observe your child with materials.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 font-black flex items-center justify-center shrink-0 text-xs border border-emerald-200">3</span>
                  <span><strong>Welcome to Little Nest:</strong> Receive your student starter pack!</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right: Super Simple Online Admission Form */}
          <div className="lg:col-span-7">
            <div className="bg-white p-6 sm:p-8 rounded-3xl border-2 border-sky-200 shadow-2xl relative">
              {submitted ? (
                <div className="text-center py-8 space-y-4 animate-in fade-in zoom-in-95">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 mx-auto flex items-center justify-center text-3xl">
                    🎉
                  </div>
                  <h3 className="font-child text-2xl font-black text-[#1E3A8A]">
                    Application Sent!
                  </h3>
                  <p className="text-sm text-stone-600 max-w-md mx-auto leading-relaxed">
                    Thank you! We have received the application for <strong>{childName}</strong>. Our admissions coordinator is reviewing your details and will connect shortly on WhatsApp.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setChildName('');
                      setChildAge('');
                      setParentName('');
                      setPhone('');
                    }}
                    className="px-6 py-2.5 rounded-full font-child font-bold text-xs text-white bg-sky-600 hover:bg-sky-700 transition-colors cursor-pointer"
                  >
                    Submit Another Application
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="border-b border-stone-100 pb-3 mb-2 flex items-center justify-between">
                    <span className="text-xs font-child font-bold uppercase tracking-wider text-sky-800">
                      Step 1: Quick Details
                    </span>
                    <span className="text-[11px] font-bold text-rose-500">
                      * Required Fields
                    </span>
                  </div>

                  {/* Child's Name */}
                  <div>
                    <label className="block text-xs font-bold text-stone-800 mb-1 flex items-center gap-1">
                      <Baby className="w-3.5 h-3.5 text-stone-400" />
                      <span>Child's Name *</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={childName}
                      onChange={(e) => setChildName(e.target.value)}
                      placeholder="e.g. Maryam Khan"
                      className="w-full px-4 py-3 text-sm rounded-2xl border border-stone-200 focus:border-sky-500 focus:ring-2 focus:ring-sky-200 focus:outline-hidden bg-stone-50/50"
                    />
                  </div>

                  {/* Child's Age */}
                  <div>
                    <label className="block text-xs font-bold text-stone-800 mb-1">
                      Child's Age *
                    </label>
                    <input
                      type="text"
                      required
                      value={childAge}
                      onChange={(e) => setChildAge(e.target.value)}
                      placeholder="e.g. 3 years 2 months"
                      className="w-full px-4 py-3 text-sm rounded-2xl border border-stone-200 focus:border-sky-500 focus:ring-2 focus:ring-sky-200 focus:outline-hidden bg-stone-50/50"
                    />
                  </div>

                  {/* Parent's Name */}
                  <div>
                    <label className="block text-xs font-bold text-stone-800 mb-1 flex items-center gap-1">
                      <User className="w-3.5 h-3.5 text-stone-400" />
                      <span>Parent's Name *</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={parentName}
                      onChange={(e) => setParentName(e.target.value)}
                      placeholder="e.g. Aisha Malik"
                      className="w-full px-4 py-3 text-sm rounded-2xl border border-stone-200 focus:border-sky-500 focus:ring-2 focus:ring-sky-200 focus:outline-hidden bg-stone-50/50"
                    />
                  </div>

                  {/* Phone Number */}
                  <div>
                    <label className="block text-xs font-bold text-stone-800 mb-1 flex items-center gap-1">
                      <Phone className="w-3.5 h-3.5 text-stone-400" />
                      <span>Phone Number *</span>
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

                  {/* Program applying for */}
                  <div>
                    <label className="block text-xs font-bold text-stone-800 mb-1.5">
                      Program applying for:
                    </label>
                    <div className="grid grid-cols-3 gap-2 sm:gap-3">
                      {[
                        { name: 'Playgroup', icon: '🧸', color: 'bg-gradient-to-r from-sky-400 to-cyan-500 text-white border-sky-400 shadow-md shadow-sky-200/50' },
                        { name: 'Nursery', icon: '🎨', color: 'bg-gradient-to-r from-rose-400 to-pink-500 text-white border-rose-400 shadow-md shadow-rose-200/50' },
                        { name: 'Kindergarten', icon: '🎓', color: 'bg-gradient-to-r from-lime-500 to-emerald-500 text-white border-lime-400 shadow-md shadow-lime-200/50' },
                      ].map((item) => (
                        <button
                          type="button"
                          key={item.name}
                          onClick={() => setProgram(item.name)}
                          className={`py-3 px-2 rounded-2xl text-xs font-child font-black border-2 transition-all cursor-pointer flex flex-col items-center gap-1 ${
                            program.toLowerCase().includes(item.name.toLowerCase())
                              ? `${item.color} scale-105 ring-2 ring-white`
                              : 'bg-stone-50 text-stone-700 border-stone-200 hover:bg-white hover:border-sky-300'
                          }`}
                        >
                          <span className="text-lg">{item.icon}</span>
                          <span>{item.name}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Submit Application Button */}
                  <div className="pt-3">
                    <button
                      type="submit"
                      className="w-full py-4 rounded-full font-child font-black text-sm text-white bg-gradient-to-r from-[#F43F5E] via-[#FB7185] to-[#F43F5E] hover:from-[#E11D48] hover:to-[#F43F5E] transition-all shadow-lg hover:shadow-2xl shadow-rose-300/60 flex items-center justify-center gap-2 group cursor-pointer hover:scale-102 active:scale-98"
                      id="submit-admission-app-btn"
                    >
                      <span className="tracking-wide">✨ Submit Application to Little Nest</span>
                      <Send className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

import React, { useState } from 'react';
import { SCHOOL_INFO } from '../data/schoolData';
import { X, Send, Sparkles, Phone, User, Baby } from 'lucide-react';

interface ApplyModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultProgram?: string;
}

export const ApplyModal: React.FC<ApplyModalProps> = ({ isOpen, onClose, defaultProgram = 'Playgroup' }) => {
  const [childName, setChildName] = useState('');
  const [childAge, setChildAge] = useState('');
  const [parentName, setParentName] = useState('');
  const [phone, setPhone] = useState('');
  const [program, setProgram] = useState(defaultProgram);
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    const message = encodeURIComponent(
      `Assalam-o-Alaikum Little Nest Admissions!\n\n` +
      `I would like to apply for admission:\n` +
      `• Child's Name: ${childName}\n` +
      `• Child's Age: ${childAge}\n` +
      `• Parent's Name: ${parentName}\n` +
      `• Phone Number: ${phone}\n` +
      `• Program applying for: ${program}\n` +
      `• Location: House 1460, Street 76, Sector I-14/3, Islamabad\n\n` +
      `Please guide me with the admission steps.`
    );

    window.open(`https://wa.me/${SCHOOL_INFO.whatsappNumber}?text=${message}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-[#FFFDF9] rounded-3xl max-w-md w-full p-6 sm:p-7 shadow-2xl border border-amber-200/80 relative max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full text-stone-400 hover:text-stone-700 hover:bg-stone-100 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="mb-5">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-100 text-amber-900 mb-2 border border-amber-300">
            <Sparkles className="w-3.5 h-3.5 text-amber-700" />
            <span>Admissions Open 2026</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-black text-[#193223]">
            Apply for Admission
          </h3>
          <p className="text-xs text-stone-600 mt-1">
            Little Nest Montessori • Sector I-14/3, Islamabad
          </p>
        </div>

        {submitted ? (
          <div className="text-center py-6 space-y-3">
            <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 mx-auto flex items-center justify-center text-xl">
              ✓
            </div>
            <h4 className="text-lg font-bold text-stone-900">Application Sent</h4>
            <p className="text-xs text-stone-600">
              We have forwarded your details to our admissions desk on WhatsApp.
            </p>
            <button
              onClick={onClose}
              className="mt-2 px-5 py-2 rounded-full text-xs font-bold text-white bg-emerald-700 hover:bg-emerald-800"
            >
              Done
            </button>
          </div>
        ) : (
          <form onSubmit={handleSend} className="space-y-3.5">
            <div>
              <label className="text-xs font-bold text-stone-700 block mb-1 flex items-center gap-1">
                <Baby className="w-3.5 h-3.5 text-stone-400" />
                <span>Child's Name *</span>
              </label>
              <input
                type="text"
                required
                value={childName}
                onChange={(e) => setChildName(e.target.value)}
                placeholder="e.g. Fatima Tariq"
                className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-stone-300 focus:ring-2 focus:ring-emerald-600 focus:outline-hidden bg-stone-50/60"
              />
            </div>

            <div>
              <label className="text-xs font-bold text-stone-700 block mb-1">
                Child's Age *
              </label>
              <input
                type="text"
                required
                value={childAge}
                onChange={(e) => setChildAge(e.target.value)}
                placeholder="e.g. 3.5 years"
                className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-stone-300 focus:ring-2 focus:ring-emerald-600 focus:outline-hidden bg-stone-50/60"
              />
            </div>

            <div>
              <label className="text-xs font-bold text-stone-700 block mb-1 flex items-center gap-1">
                <User className="w-3.5 h-3.5 text-stone-400" />
                <span>Parent's Name *</span>
              </label>
              <input
                type="text"
                required
                value={parentName}
                onChange={(e) => setParentName(e.target.value)}
                placeholder="e.g. Tariq Mehmood"
                className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-stone-300 focus:ring-2 focus:ring-emerald-600 focus:outline-hidden bg-stone-50/60"
              />
            </div>

            <div>
              <label className="text-xs font-bold text-stone-700 block mb-1 flex items-center gap-1">
                <Phone className="w-3.5 h-3.5 text-stone-400" />
                <span>Phone Number *</span>
              </label>
              <input
                type="tel"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="e.g. 0344 0555262"
                className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-stone-300 focus:ring-2 focus:ring-emerald-600 focus:outline-hidden bg-stone-50/60"
              />
            </div>

            <div>
              <label className="text-xs font-bold text-stone-700 block mb-1">
                Program applying for:
              </label>
              <div className="grid grid-cols-3 gap-1.5">
                {['Playgroup', 'Nursery', 'Kindergarten'].map((prog) => (
                  <button
                    type="button"
                    key={prog}
                    onClick={() => setProgram(prog)}
                    className={`py-2 px-2 text-xs font-bold rounded-xl border transition-all ${
                      program.toLowerCase().includes(prog.toLowerCase())
                        ? 'bg-emerald-700 text-white border-emerald-800'
                        : 'bg-stone-50 text-stone-700 border-stone-200'
                    }`}
                  >
                    {prog}
                  </button>
                ))}
              </div>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-3 px-4 rounded-full font-bold text-sm text-white bg-emerald-700 hover:bg-emerald-800 shadow-md transition-all flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>Submit Application</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

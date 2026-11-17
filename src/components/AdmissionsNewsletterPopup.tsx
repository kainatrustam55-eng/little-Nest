import React, { useEffect, useState } from 'react';
import { SCHOOL_INFO } from '../data/schoolData';
import { X, Mail, CheckCircle2, Sparkles, Calendar, ArrowRight, Loader2 } from 'lucide-react';

interface AdmissionsNewsletterPopupProps {
  isMainPage: boolean;
  onOpenApply: () => void;
  onScrollTo: (id: string) => void;
}

const SESSION_DISMISS_KEY = 'littlenest_newsletter_popup_dismissed';
const SUBSCRIBED_KEY = 'littlenest_newsletter_subscribed';

export const AdmissionsNewsletterPopup: React.FC<AdmissionsNewsletterPopupProps> = ({
  isMainPage,
  onOpenApply,
  onScrollTo,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [selectedProgram, setSelectedProgram] = useState('Playgroup (2–3 Yrs)');
  const [submitting, setSubmitting] = useState(false);
  const [subscribed, setSubscribed] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [posterError, setPosterError] = useState(false);

  useEffect(() => {
    if (!isMainPage) return;

    try {
      const alreadySubscribed = window.localStorage.getItem(SUBSCRIBED_KEY) === 'true';
      const dismissedThisSession = window.sessionStorage.getItem(SESSION_DISMISS_KEY) === 'true';
      if (alreadySubscribed || dismissedThisSession) {
        return;
      }
    } catch {
      // Ignore storage access errors in restricted browsers
    }

    const timer = window.setTimeout(() => {
      setIsOpen(true);
    }, 2200);

    return () => window.clearTimeout(timer);
  }, [isMainPage]);

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  const handleClose = () => {
    setIsOpen(false);
    try {
      window.sessionStorage.setItem(SESSION_DISMISS_KEY, 'true');
    } catch {
      // Ignore storage error
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const trimmedEmail = email.trim();
    if (!trimmedEmail) return;

    setSubmitting(true);
    setErrorMsg('');

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${SCHOOL_INFO.email}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          email: trimmedEmail,
          program_interest: selectedProgram,
          _subject: 'New Parent Newsletter & Admissions 2026-27 Brochure Request - Little Nest Montessori',
          _template: 'table',
          source: 'Admissions Open 2026-27 Popup Newsletter (littlenestschool.com)',
        }),
      });

      if (!response.ok) {
        throw new Error('Subscription request failed');
      }

      setSubscribed(true);
      try {
        window.localStorage.setItem(SUBSCRIBED_KEY, 'true');
        window.localStorage.setItem('littlenest_subscriber_email', trimmedEmail);
      } catch {
        // Ignore storage error
      }
    } catch {
      // Fallback: save locally and still offer immediate confirmation + WhatsApp option
      setErrorMsg('Could not send right now. Please try again or reach us directly on WhatsApp.');
    } finally {
      setSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[70] flex items-center justify-center p-3 sm:p-5 bg-stone-950/65 backdrop-blur-xs animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="admissions-newsletter-heading"
      onClick={(e) => {
        if (e.target === e.currentTarget) handleClose();
      }}
    >
      <div className="relative w-full max-w-4xl bg-[#FFFDF9] rounded-3xl overflow-hidden shadow-2xl border-2 border-amber-200 max-h-[92vh] overflow-y-auto">
        {/* Close Button */}
        <button
          type="button"
          onClick={handleClose}
          className="absolute top-3 right-3 z-20 w-9 h-9 rounded-full bg-white/95 hover:bg-rose-50 text-stone-700 hover:text-[#F43F5E] border border-stone-200 shadow-md flex items-center justify-center transition-all cursor-pointer"
          aria-label="Close admissions newsletter popup"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-12 items-stretch">
          {/* Left Column: Admissions Open 2026-27 Pamphlet Image */}
          <div className="md:col-span-6 bg-gradient-to-br from-amber-50 via-rose-50/70 to-sky-50 flex items-center justify-center p-3 sm:p-4 border-b md:border-b-0 md:border-r border-amber-100">
            <div className="w-full max-w-md aspect-square rounded-2xl overflow-hidden bg-white shadow-md border border-white">
              {!posterError ? (
                <img
                  src="/little-nest-admissions-2026.png"
                  alt="Little Nest Montessori Admissions Open 2026-27 Pamphlet for Playgroup, Nursery and Kindergarten in Sector I-14/3 Islamabad"
                  className="w-full h-full object-contain"
                  referrerPolicy="no-referrer"
                  onError={() => setPosterError(true)}
                />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-gradient-to-br from-amber-100 via-rose-100 to-sky-100">
                  <div className="font-child text-2xl font-extrabold text-[#1E3A8A]">
                    Little Nest Montessori
                  </div>
                  <div className="mt-2 font-child text-lg font-extrabold text-[#F43F5E]">
                    Admissions Open 2026–27
                  </div>
                  <p className="mt-2 text-xs font-semibold text-stone-700">
                    Playgroup • Nursery • Kindergarten · Sector I-14/3, Islamabad
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Right Column: Newsletter Email Sign-Up & Admissions Quick Actions */}
          <div className="md:col-span-6 p-6 sm:p-8 flex flex-col justify-center bg-white">
            {subscribed ? (
              <div className="text-center space-y-4 py-4">
                <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-700 mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-extrabold text-[#1E3A8A]">
                  Thank You for Subscribing!
                </h3>
                <p className="text-sm text-stone-600 leading-relaxed">
                  We have added <strong className="text-stone-900">{email}</strong> to the Little Nest Montessori parent list. Our admissions team will share the <strong className="text-stone-900">2026–27 Admissions Guide</strong>, seat availability for <strong className="text-stone-900">{selectedProgram}</strong>, and Islamabad campus updates.
                </p>

                <div className="pt-2 flex flex-col sm:flex-row gap-2.5 justify-center">
                  <button
                    type="button"
                    onClick={() => {
                      handleClose();
                      onOpenApply();
                    }}
                    className="px-5 py-3 rounded-full font-bold text-xs text-white bg-[#F43F5E] hover:bg-[#E11D48] transition-all shadow-sm cursor-pointer inline-flex items-center justify-center gap-1.5"
                  >
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Apply Online Now</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      handleClose();
                      onScrollTo('book-visit');
                    }}
                    className="px-5 py-3 rounded-full font-bold text-xs text-[#1E3A8A] bg-sky-50 hover:bg-sky-100 border border-sky-200 transition-all cursor-pointer inline-flex items-center justify-center gap-1.5"
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Book Campus Visit</span>
                  </button>
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                <div>
                  <div className="text-xs font-extrabold uppercase tracking-widest text-[#F43F5E] mb-1.5 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                    <span>Admissions Open 2026–27</span>
                  </div>
                  <h2
                    id="admissions-newsletter-heading"
                    className="text-2xl sm:text-[1.65rem] font-extrabold text-[#1E3A8A] leading-tight"
                  >
                    Join Our Parent Newsletter &amp; Admissions List
                  </h2>
                  <p className="mt-2 text-xs sm:text-sm text-stone-600 leading-relaxed">
                    Receive our <strong className="text-stone-800">2026–27 fee structure, seat updates</strong>, and morning campus tour invitations in Sector I-14/3, Islamabad &amp; Rawalpindi.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-3.5 pt-1">
                  {/* Age Group / Program Interest */}
                  <div>
                    <label className="block text-xs font-bold text-stone-800 mb-1.5">
                      Select Child’s Program:
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {['Playgroup (2–3 Yrs)', 'Nursery (3–4 Yrs)', 'Kindergarten (4–6 Yrs)'].map(
                        (prog) => {
                          const shortLabel = prog.split(' ')[0];
                          const ageHint = prog.match(/\(([^)]+)\)/)?.[1] || '';
                          const active = selectedProgram === prog;
                          return (
                            <button
                              key={prog}
                              type="button"
                              onClick={() => setSelectedProgram(prog)}
                              className={`py-2 px-2 rounded-xl text-center border transition-all cursor-pointer ${
                                active
                                  ? 'bg-[#1E3A8A] text-white border-[#1E3A8A] shadow-xs'
                                  : 'bg-stone-50 text-stone-700 border-stone-200 hover:border-sky-300'
                              }`}
                            >
                              <div className="text-xs font-bold leading-tight">{shortLabel}</div>
                              <div
                                className={`text-[10px] mt-0.5 ${
                                  active ? 'text-sky-100' : 'text-stone-500'
                                }`}
                              >
                                {ageHint}
                              </div>
                            </button>
                          );
                        }
                      )}
                    </div>
                  </div>

                  {/* Email Input */}
                  <div>
                    <label
                      htmlFor="newsletter-popup-email"
                      className="block text-xs font-bold text-stone-800 mb-1"
                    >
                      Parent Email Address *
                    </label>
                    <div className="relative">
                      <Mail className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                      <input
                        id="newsletter-popup-email"
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="parent@example.com"
                        className="w-full pl-10 pr-4 py-3 text-sm rounded-2xl border border-stone-300 focus:border-[#1E3A8A] focus:ring-2 focus:ring-sky-200 focus:outline-hidden bg-stone-50/60"
                      />
                    </div>
                  </div>

                  {errorMsg && (
                    <div className="text-xs font-semibold text-rose-600 bg-rose-50 border border-rose-200 rounded-xl px-3 py-2">
                      {errorMsg}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full py-3.5 px-5 rounded-full font-bold text-sm text-white bg-gradient-to-r from-[#F43F5E] to-[#E11D48] hover:from-[#E11D48] hover:to-[#BE123C] transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
                  >
                    {submitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <span>Get Admissions Updates &amp; Subscribe</span>
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>

                {/* Quick Direct Links */}
                <div className="pt-2 border-t border-stone-100 flex flex-wrap items-center justify-between gap-2 text-[11px] text-stone-500">
                  <span>No spam. Direct campus updates only.</span>
                  <button
                    type="button"
                    onClick={() => {
                      handleClose();
                      onOpenApply();
                    }}
                    className="font-bold text-[#1E3A8A] hover:text-[#F43F5E] underline cursor-pointer"
                  >
                    Enroll Directly →
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

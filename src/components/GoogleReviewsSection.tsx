import React from 'react';
import { GOOGLE_REVIEWS } from '../data/reviewsData';
import { SCHOOL_INFO } from '../data/schoolData';
import { Star, ExternalLink, Calendar, Sparkles, Quote } from 'lucide-react';

interface GoogleReviewsSectionProps {
  onOpenApply: () => void;
  onScrollTo: (id: string) => void;
}

const GoogleGIcon: React.FC<{ className?: string }> = ({ className = 'w-5 h-5' }) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
    <path
      fill="#4285F4"
      d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17Z"
    />
    <path
      fill="#34A853"
      d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.11-6.72-4.96H1.29v3.14C3.26 21.3 7.31 24 12 24Z"
    />
    <path
      fill="#FBBC05"
      d="M5.28 14.24c-.24-.72-.38-1.49-.38-2.24s.14-1.52.38-2.24V6.62H1.29C.47 8.24 0 10.06 0 12s.47 3.76 1.29 5.38l3.99-3.14Z"
    />
    <path
      fill="#EA4335"
      d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.31 0 3.26 2.7 1.29 6.62l3.99 3.14c.95-2.85 3.6-4.96 6.72-4.96Z"
    />
  </svg>
);

export const GoogleReviewsSection: React.FC<GoogleReviewsSectionProps> = ({
  onOpenApply,
  onScrollTo,
}) => {

  return (
    <section
      id="reviews"
      className="py-16 sm:py-20 bg-gradient-to-b from-[#FFFDF9] via-amber-50/35 to-[#F0F9FF]/60 border-b border-sky-100 relative overflow-hidden"
      aria-labelledby="google-reviews-heading"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Top Rating Summary Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10 sm:mb-12">
          <div className="max-w-2xl">
            <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-xs font-extrabold uppercase tracking-widest text-stone-500 mb-3">
              <span className="inline-flex items-center gap-1.5 text-[#1E3A8A]">
                <GoogleGIcon className="w-4 h-4" />
                <span>Verified Google Reviews</span>
              </span>
              <span aria-hidden="true">·</span>
              <span>Sector I-14/3, Islamabad</span>
            </div>

            <h2
              id="google-reviews-heading"
              className="font-child text-3xl sm:text-4xl lg:text-5xl font-black text-[#1E3A8A] tracking-tight leading-tight"
            >
              Loved by Islamabad &amp; Rawalpindi Parents
            </h2>
            <p className="mt-2.5 text-sm sm:text-base text-stone-600 font-medium leading-relaxed">
              Real feedback from families who visited our classrooms and watched their children blossom at Little Nest Montessori School.
            </p>
          </div>

          {/* 5.0 Google Summary Card */}
          <div className="bg-white rounded-3xl border-2 border-amber-200 shadow-md px-5 py-4 flex flex-wrap sm:flex-nowrap items-center gap-4 shrink-0">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-2xl bg-stone-50 border border-stone-200 flex items-center justify-center shrink-0">
                <GoogleGIcon className="w-6 h-6" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-2xl font-extrabold text-stone-900 tabular-nums leading-none">
                    5.0
                  </span>
                  <div className="flex items-center gap-0.5" aria-label="5 out of 5 stars">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className="w-4 h-4 text-[#FBBC05] fill-[#FBBC05]"
                      />
                    ))}
                  </div>
                </div>
                <div className="text-xs font-semibold text-stone-500 mt-1">
                  Based on Google Maps Reviews
                </div>
              </div>
            </div>

            <a
              href={SCHOOL_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-full font-bold text-xs text-white bg-[#1E3A8A] hover:bg-blue-900 transition-all shadow-xs inline-flex items-center gap-1.5 cursor-pointer"
            >
              <span>Review Us on Google</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* 4 Google Review Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {GOOGLE_REVIEWS.map((review) => (
            <article
              key={review.id}
              className="bg-white rounded-3xl border border-stone-200/90 shadow-sm hover:shadow-xl transition-all duration-300 p-6 sm:p-7 flex flex-col justify-between gap-5"
            >
              <div className="space-y-4">
                {/* Reviewer Header */}
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3.5">
                    <div className="relative shrink-0">
                      <div
                        className={`w-11 h-11 rounded-full ${review.avatarBg} text-white font-bold text-lg flex items-center justify-center shadow-xs`}
                        aria-hidden="true"
                      >
                        {review.initial}
                      </div>
                      {review.isLocalGuide && (
                        <span
                          className="absolute -bottom-0.5 -right-0.5 w-5 h-5 rounded-full bg-amber-400 border-2 border-white text-[10px] flex items-center justify-center text-white font-black shadow-2xs"
                          title="Google Local Guide"
                        >
                          ★
                        </span>
                      )}
                    </div>

                    <div>
                      <h3 className="font-bold text-base text-stone-950 leading-snug">
                        {review.reviewerName}
                      </h3>
                      <div className="text-xs font-medium text-stone-500 flex flex-wrap items-center gap-x-1.5 mt-0.5">
                        {review.badgeText && <span>{review.badgeText}</span>}
                        {review.badgeText && <span aria-hidden="true">·</span>}
                        <span>{review.timeAgo}</span>
                        {review.isNew && (
                          <>
                            <span aria-hidden="true">·</span>
                            <span className="font-bold text-emerald-700">New</span>
                          </>
                        )}
                      </div>
                    </div>
                  </div>

                  <GoogleGIcon className="w-5 h-5 shrink-0 opacity-90" />
                </div>

                {/* 5-Star Rating Strip */}
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-1" aria-label={`${review.rating} out of 5 stars`}>
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className="w-4 h-4 text-[#FBBC05] fill-[#FBBC05]"
                      />
                    ))}
                  </div>
                  <Quote className="w-5 h-5 text-amber-200 shrink-0" aria-hidden="true" />
                </div>

                {/* Verbatim Review Text */}
                <p className="text-sm sm:text-[15px] text-stone-700 leading-[1.75] font-medium">
                  “{review.text}”
                </p>
              </div>

              {/* Card Footer */}
              <div className="pt-4 border-t border-stone-100 flex items-center justify-between gap-3 text-xs">
                <span className="font-semibold text-stone-500">
                  Verified Google Maps Review
                </span>
                <span className="font-bold text-amber-700">
                  5.0 ★ Rating
                </span>
              </div>
            </article>
          ))}
        </div>

        {/* Parent Conversion Callout */}
        <div className="mt-10 bg-white/95 rounded-3xl border border-sky-100 shadow-sm p-6 sm:p-7 flex flex-col md:flex-row items-center justify-between gap-5">
          <div className="text-center md:text-left">
            <h3 className="font-child text-xl sm:text-2xl font-black text-[#1E3A8A]">
              Want to Experience Little Nest Montessori in Person?
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 mt-1 font-medium">
              Join a calm morning tour in Sector I-14/3, Islamabad (Mon–Fri, 8:30 AM – 12:00 PM) and see why parents recommend us.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
            <button
              type="button"
              onClick={() => onScrollTo('book-visit')}
              className="px-5 py-3 rounded-full font-child font-bold text-xs sm:text-sm text-white bg-[#F43F5E] hover:bg-[#E11D48] transition-all shadow-sm hover:shadow-md cursor-pointer inline-flex items-center gap-1.5"
            >
              <Calendar className="w-4 h-4" />
              <span>Book a Morning Visit</span>
            </button>
            <button
              type="button"
              onClick={onOpenApply}
              className="px-5 py-3 rounded-full font-child font-bold text-xs sm:text-sm text-[#1E3A8A] bg-sky-50 hover:bg-sky-100 border border-sky-200 transition-all cursor-pointer inline-flex items-center gap-1.5"
            >
              <Sparkles className="w-4 h-4 text-amber-500" />
              <span>Apply Online</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

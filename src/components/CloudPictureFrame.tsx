import React, { useState } from 'react';

interface CloudPictureFrameProps {
  imageSrc: string;
  fallbackSrc?: string;
  alt: string;
  onOpenApply?: () => void;
  onScrollTo?: (id: string) => void;
}

export const CloudPictureFrame: React.FC<CloudPictureFrameProps> = ({
  imageSrc,
  fallbackSrc,
  alt,
}) => {
  const [currentSrc, setCurrentSrc] = useState(imageSrc);
  const [imageError, setImageError] = useState(false);

  // Smooth cumulus cloud path coordinates in 1000x560 viewBox
  const cloudPathD =
    'M 130,370 ' +
    'C 45,330 40,240 105,185 ' +
    'C 75,130 135,80 210,90 ' +
    'C 255,35 365,30 435,70 ' +
    'C 485,20 610,20 670,68 ' +
    'C 730,25 835,40 875,100 ' +
    'C 945,105 990,175 970,245 ' +
    'C 1010,310 970,395 895,425 ' +
    'C 855,480 760,500 700,470 ' +
    'C 640,520 515,520 450,475 ' +
    'C 390,510 285,505 225,460 ' +
    'C 160,480 95,430 130,370 Z';

  // Inset cloud path for inner picture clipping with a soft white cloud margin
  const innerCloudPathD =
    'M 148,365 ' +
    'C 75,330 70,250 125,200 ' +
    'C 100,150 150,105 218,112 ' +
    'C 260,62 355,58 420,95 ' +
    'C 468,50 580,50 635,92 ' +
    'C 690,55 785,68 822,120 ' +
    'C 885,125 925,185 910,248 ' +
    'C 945,305 910,378 845,405 ' +
    'C 810,452 728,470 675,445 ' +
    'C 620,490 510,490 452,450 ' +
    'C 400,480 305,475 250,438 ' +
    'C 192,455 135,412 148,365 Z';

  const handleImageError = () => {
    if (fallbackSrc && currentSrc !== fallbackSrc) {
      setCurrentSrc(fallbackSrc);
    } else {
      setImageError(true);
    }
  };

  return (
    <div className="relative w-full max-w-5xl mx-auto pt-2 pb-6 px-2 sm:px-4 select-none">
      {/* Playful Floating Header Pill */}
      <div className="flex items-center justify-center mb-2">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-child font-bold bg-white/95 text-sky-900 border-2 border-sky-200 shadow-md backdrop-blur-xs">
          <span className="animate-spin-slow text-amber-500">☀️</span>
          <span>Montessori Early Years Campus</span>
          <span className="hidden sm:inline text-stone-400">•</span>
          <span className="hidden sm:inline text-emerald-700">Sector I-14/3, Islamabad</span>
          <span>🌸</span>
        </div>
      </div>

      {/* CLOUD STRUCTURE FRAME CONTAINER */}
      <div className="relative group">
        {/* 1. LAYER BEHIND: Cute Smiling Sun peeking behind top-right of cloud */}
        <div className="absolute -top-7 sm:-top-10 right-8 sm:right-16 z-0 pointer-events-none transition-transform duration-500 group-hover:scale-110 group-hover:-translate-y-1">
          <div className="relative w-20 h-20 sm:w-28 sm:h-28 flex items-center justify-center">
            {/* Spinning Golden Sun Rays */}
            <svg
              viewBox="0 0 100 100"
              className="w-full h-full animate-spin-slow text-amber-400 opacity-90 drop-shadow-md"
            >
              {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((deg) => (
                <line
                  key={deg}
                  x1="50"
                  y1="10"
                  x2="50"
                  y2="2"
                  stroke="currentColor"
                  strokeWidth="4"
                  strokeLinecap="round"
                  transform={`rotate(${deg} 50 50)`}
                />
              ))}
            </svg>
            {/* Sun Face Core */}
            <div className="absolute w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-tr from-amber-400 via-amber-300 to-yellow-200 border-2 border-white shadow-lg flex flex-col items-center justify-center">
              {/* Cute Smiling Face */}
              <div className="flex items-center gap-2 mb-0.5">
                <span className="w-1.5 h-2 rounded-full bg-stone-800" />
                <span className="w-1.5 h-2 rounded-full bg-stone-800" />
              </div>
              <div className="w-3.5 h-1.5 border-b-2 border-stone-800 rounded-full" />
              {/* Rosy Cheeks */}
              <div className="absolute left-2.5 top-5 w-2 h-1 rounded-full bg-rose-400/80" />
              <div className="absolute right-2.5 top-5 w-2 h-1 rounded-full bg-rose-400/80" />
            </div>
          </div>
        </div>

        {/* 2. LAYER BEHIND: Cute Pastel Rainbow Arch peeking behind top-left of cloud */}
        <div className="absolute -top-6 sm:-top-8 left-6 sm:left-14 z-0 pointer-events-none opacity-95">
          <svg viewBox="0 0 160 90" className="w-28 sm:w-40 h-16 sm:h-24 drop-shadow-xs">
            {/* Rainbow Arcs */}
            <path d="M 10,85 A 70,70 0 0,1 150,85" fill="none" stroke="#FB7185" strokeWidth="8" strokeLinecap="round" />
            <path d="M 20,85 A 60,60 0 0,1 140,85" fill="none" stroke="#FBBF24" strokeWidth="8" strokeLinecap="round" />
            <path d="M 30,85 A 50,50 0 0,1 130,85" fill="none" stroke="#34D399" strokeWidth="8" strokeLinecap="round" />
            <path d="M 40,85 A 40,40 0 0,1 120,85" fill="none" stroke="#38BDF8" strokeWidth="8" strokeLinecap="round" />
          </svg>
        </div>

        {/* 3. FLOATING MINI-CLOUD COMPANIONS */}
        <div className="hidden md:flex absolute -left-6 top-1/2 -translate-y-1/2 z-20 items-center gap-1 bg-white/95 px-3 py-1.5 rounded-full shadow-lg border-2 border-sky-200 text-xs font-child font-bold text-sky-800 animate-float pointer-events-none">
          <span>☁️</span>
          <span>Joyful Nest</span>
        </div>
        <div
          className="hidden md:flex absolute -right-6 top-1/3 z-20 items-center gap-1 bg-white/95 px-3 py-1.5 rounded-full shadow-lg border-2 border-rose-200 text-xs font-child font-bold text-rose-700 animate-float pointer-events-none"
          style={{ animationDelay: '1.8s' }}
        >
          <span>⭐</span>
          <span>Ages 2 to 6</span>
        </div>

        {/* 4. THE MAIN CLOUD FRAME (SVG with Drop Shadow & Inner Clipped Picture) */}
        <div className="relative z-10 w-full transition-transform duration-500 group-hover:scale-[1.01]">
          {/* Cloud SVG Canvas */}
          <svg
            viewBox="0 0 1000 560"
            className="w-full h-auto overflow-visible filter drop-shadow-[0_20px_35px_rgba(2,132,199,0.22)] drop-shadow-[0_8px_16px_rgba(244,63,94,0.1)]"
          >
            <defs>
              {/* Inset ClipPath for the Picture */}
              <clipPath id="cloudPictureClip">
                <path d={innerCloudPathD} />
              </clipPath>

              {/* Linear Gradient for Cloud Rim */}
              <linearGradient id="cloudRimGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#FFFFFF" />
                <stop offset="70%" stopColor="#FFFFFF" />
                <stop offset="100%" stopColor="#F0F9FF" />
              </linearGradient>

              {/* Sky Reflection Gradient */}
              <linearGradient id="skyReflection" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#E0F2FE" stopOpacity="0.8" />
                <stop offset="50%" stopColor="#FFFFFF" stopOpacity="1" />
                <stop offset="100%" stopColor="#FCE7F3" stopOpacity="0.8" />
              </linearGradient>

              {/* Soft Inner Shadow */}
              <filter id="softCloudDepth" x="-10%" y="-10%" width="120%" height="120%">
                <feDropShadow dx="0" dy="4" stdDeviation="6" floodColor="#0369A1" floodOpacity="0.12" />
              </filter>
            </defs>

            {/* Base Cloud Silhouette (Thick White Fluffy Cloud Rim) */}
            <path
              d={cloudPathD}
              fill="url(#cloudRimGradient)"
              stroke="#BAE6FD"
              strokeWidth="6"
              filter="url(#softCloudDepth)"
            />

            {/* Decorative Cloud Puffs (Overlay circles for extra 3D pillowy fluffiness) */}
            <g fill="#FFFFFF" opacity="0.95">
              <circle cx="210" cy="100" r="45" />
              <circle cx="430" cy="80" r="55" />
              <circle cx="660" cy="78" r="50" />
              <circle cx="865" cy="115" r="45" />
              <circle cx="950" cy="245" r="45" />
              <circle cx="880" cy="415" r="42" />
              <circle cx="690" cy="460" r="48" />
              <circle cx="460" cy="465" r="50" />
              <circle cx="240" cy="450" r="44" />
              <circle cx="115" cy="360" r="42" />
              <circle cx="110" cy="190" r="42" />
            </g>

            {/* Picture Inner Background (Pure White Canvas inside the Cloud) */}
            <path d={innerCloudPathD} fill="#FFFFFF" />

            {/* The Actual Picture Nested Inside the Cloud Clip */}
            <g clipPath="url(#cloudPictureClip)">
              {/* Background fill inside picture container */}
              <rect x="0" y="0" width="1000" height="560" fill="#FFFFFF" />

              {/* Image element */}
              <image
                href={currentSrc}
                xlinkHref={currentSrc}
                x="80"
                y="50"
                width="840"
                height="460"
                preserveAspectRatio="xMidYMid meet"
                onError={handleImageError}
              />

              {/* Subtle gentle bottom gradient overlay to enhance legibility */}
              <rect
                x="0"
                y="430"
                width="1000"
                height="130"
                fill="url(#cloudRimGradient)"
                opacity="0.3"
              />
            </g>

            {/* Inner Cloud Border Stroke to create the embossed picture window */}
            <path
              d={innerCloudPathD}
              fill="none"
              stroke="#E0F2FE"
              strokeWidth="4"
              opacity="0.8"
            />

            {/* Top Cloud Highlights (Soft White Glistening Edge) */}
            <path
              d="M 220,95 C 260,45 360,40 430,75 M 490,28 C 600,28 660,70 670,72 M 740,32 C 825,48 865,100 870,105"
              fill="none"
              stroke="#FFFFFF"
              strokeWidth="6"
              strokeLinecap="round"
              opacity="0.9"
            />
          </svg>

        </div>
      </div>
    </div>
  );
};

import React from 'react';
import { Sparkles, Heart } from 'lucide-react';

interface PlayLearnGrowRibbonProps {
  size?: 'sm' | 'md' | 'lg';
  variant?: 'pills' | 'cards' | 'inline';
  className?: string;
  onScrollTo?: (id: string) => void;
}

export const PlayLearnGrowRibbon: React.FC<PlayLearnGrowRibbonProps> = ({
  size = 'md',
  variant = 'pills',
  className = '',
  onScrollTo,
}) => {
  const words = [
    {
      word: 'PLAY',
      emoji: '🎈',
      textColor: 'text-[#F43F5E]',
      bgGrad: 'from-rose-500 to-pink-500',
      pillBg: 'bg-rose-100 text-rose-700 border-rose-300 hover:bg-rose-200',
      glow: 'shadow-rose-300/60',
      subtitle: 'Sensorial & Joy',
      target: 'programs',
    },
    {
      word: 'LEARN',
      emoji: '📚',
      textColor: 'text-[#0284C7]',
      bgGrad: 'from-sky-500 to-cyan-500',
      pillBg: 'bg-sky-100 text-sky-800 border-sky-300 hover:bg-sky-200',
      glow: 'shadow-sky-300/60',
      subtitle: 'Montessori Discovery',
      target: 'learning-areas',
    },
    {
      word: 'GROW',
      emoji: '🌱',
      textColor: 'text-[#65A30D]',
      bgGrad: 'from-lime-500 to-emerald-500',
      pillBg: 'bg-lime-100 text-lime-800 border-lime-300 hover:bg-lime-200',
      glow: 'shadow-lime-300/60',
      subtitle: 'Holistic Milestone',
      target: 'growth-journey',
    },
    {
      word: 'SHINE',
      emoji: '✨',
      textColor: 'text-[#D97706]',
      bgGrad: 'from-amber-400 to-yellow-500',
      pillBg: 'bg-amber-100 text-amber-800 border-amber-300 hover:bg-amber-200',
      glow: 'shadow-amber-300/60',
      subtitle: 'Every Single Day',
      target: 'parents',
    },
  ];

  if (variant === 'cards') {
    return (
      <div className={`grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 ${className}`}>
        {words.map((item) => (
          <button
            key={item.word}
            onClick={() => onScrollTo?.(item.target)}
            className="group relative p-3 sm:p-4 rounded-3xl bg-white border-2 border-stone-100 hover:border-transparent transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl shadow-md text-center flex flex-col items-center justify-center cursor-pointer overflow-hidden"
          >
            {/* Soft gradient background glow on hover */}
            <div
              className={`absolute inset-0 bg-gradient-to-br ${item.bgGrad} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
            />

            <span className="text-2xl sm:text-3xl mb-1 transform group-hover:scale-125 group-hover:rotate-6 transition-transform duration-300 animate-bounce-gentle">
              {item.emoji}
            </span>

            <span
              className={`font-child text-xl sm:text-2xl font-black tracking-wider ${item.textColor} drop-shadow-xs`}
            >
              {item.word}
            </span>

            <span className="text-[10px] font-bold text-stone-500 mt-0.5">
              {item.subtitle}
            </span>
          </button>
        ))}
      </div>
    );
  }

  // Default 'pills' badge style
  const isSm = size === 'sm';
  const isLg = size === 'lg';

  return (
    <div
      className={`inline-flex flex-wrap items-center justify-center gap-2 sm:gap-3 p-1.5 sm:p-2 rounded-full bg-white/95 backdrop-blur-md border-2 border-white shadow-lg ${className}`}
    >
      {words.map((item, idx) => (
        <React.Fragment key={item.word}>
          <button
            type="button"
            onClick={() => onScrollTo?.(item.target)}
            className={`group inline-flex items-center gap-1.5 rounded-full font-child font-black transition-all duration-300 cursor-pointer border-2 ${
              item.pillBg
            } shadow-xs hover:scale-110 active:scale-95 ${
              isSm
                ? 'px-2.5 py-1 text-xs'
                : isLg
                ? 'px-5 py-2 text-base sm:text-lg shadow-md'
                : 'px-3.5 py-1.5 text-sm sm:text-base'
            }`}
          >
            <span className="transform group-hover:rotate-12 transition-transform">
              {item.emoji}
            </span>
            <span className="tracking-wide">{item.word}</span>
          </button>

          {idx < words.length - 1 && (
            <span className="text-amber-400 font-black text-sm select-none animate-pulse">
              ★
            </span>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

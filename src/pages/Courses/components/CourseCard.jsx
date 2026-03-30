import React from 'react';
import { Clock, BarChart, Folder, CheckCircle } from 'lucide-react';

const CourseCard = ({ course }) => {
  const {
    title,
    description,
    thumbnail,
    isFree,
    price,
    level,
    duration,
    projects,
    isEnrolled,
    progress,
    isComingSoon,
    originalPrice
  } = course;

  return (
    <div className={`group relative bg-[#1A1C23] rounded-[16px] border border-white/5 overflow-hidden flex flex-col transition-all duration-300 ${isComingSoon ? 'opacity-90 grayscale-[0.3]' : 'hover:-translate-y-3 hover:shadow-2xl hover:shadow-black/50 hover:border-white/10'}`}>
      
      {/* 1. TOP: Thumbnail (Visual Hook) */}
      <div className="relative aspect-video overflow-hidden">
        <img 
          src={thumbnail} 
          alt={title} 
          className={`w-full h-full object-cover transition-transform duration-700 ${!isComingSoon && 'group-hover:scale-110'}`}
        />
        
        {/* Overlay Badges */}
        <div className="absolute top-3 left-3 flex gap-2">
          {isComingSoon ? (
            <span className="bg-yellow-500 text-black text-[10px] font-bold px-2 py-0.5 rounded shadow-lg uppercase tracking-wider">
              Coming Soon
            </span>
          ) : (
            <>
              {isFree ? (
                <span className="bg-emerald-500 text-white text-[10px] font-bold px-2 py-0.5 rounded shadow-lg uppercase tracking-wider">
                  Free
                </span>
              ) : (
                <span className="bg-[#FF5722] text-white text-[10px] font-bold px-2 py-0.5 rounded shadow-lg uppercase tracking-wider">
                  Paid
                </span>
              )}
            </>
          )}
          {isEnrolled && (
            <span className="bg-blue-500 text-white text-[10px] font-bold px-2 py-0.5 rounded shadow-lg uppercase tracking-wider flex items-center gap-1">
              <CheckCircle size={10} /> Enrolled
            </span>
          )}
        </div>

        {/* Coming Soon Center Overlay */}
        {isComingSoon && (
          <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px] flex items-center justify-center">
            <div className="bg-white/10 border border-white/20 px-4 py-2 rounded-full backdrop-blur-md">
              <span className="text-white text-xs font-bold uppercase tracking-[0.2em]">Coming Soon</span>
            </div>
          </div>
        )}

        {/* Play Icon Overlay (Only if NOT coming soon) */}
        {!isComingSoon && (
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30 transform scale-75 group-hover:scale-100 transition-transform duration-300">
              <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[12px] border-l-white border-b-[8px] border-b-transparent ml-1" />
            </div>
          </div>
        )}
      </div>

      {/* 2. MIDDLE: Core Info (Decision Layer) */}
      <div className="p-7 flex flex-col grow">
        <h3 className={`text-white text-2xl font-bold leading-tight line-clamp-2 mb-3 transition-colors ${!isComingSoon && 'group-hover:text-[#FFF]'}`}>
          {title}
        </h3>
        
        <p className="text-gray-400 text-base mb-6 line-clamp-2 opacity-80">
          {description}
        </p>

        {/* Metadata Row */}
        <div className="flex flex-wrap items-center gap-x-6 gap-y-3 mb-8">
          <div className="flex items-center gap-2 text-gray-500 text-xs font-semibold uppercase tracking-wider">
            <Clock size={16} className="text-gray-600" />
            <span>{duration}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-500 text-xs font-semibold uppercase tracking-wider">
            <BarChart size={16} className="text-gray-600" />
            <span>{level}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-500 text-xs font-semibold uppercase tracking-wider">
            <Folder size={16} className="text-gray-600" />
            <span>{projects} Projects</span>
          </div>
        </div>

        {/* 3. BOTTOM: Action Layer */}
        <div className="mt-auto pt-6 border-t border-white/5 flex items-center justify-between gap-4">
          <div className="flex flex-col">
            {isComingSoon ? (
              <span className="text-gray-500 text-xl font-bold italic opacity-60 whitespace-nowrap">Launching Soon</span>
            ) : isEnrolled && progress !== undefined ? (
              <div className="w-32">
                <div className="flex justify-between text-xs text-gray-500 font-bold mb-1.5 uppercase tracking-tighter">
                  <span>Progress</span>
                  <span>{progress}%</span>
                </div>
                <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full bg-blue-500 transition-all duration-1000 ease-out" style={{ width: `${progress}%` }} />
                </div>
              </div>
            ) : (
              <div className="flex flex-col">
                {originalPrice && !isFree && (
                  <div className="flex items-center gap-2 mb-0.5">
                    <span className="text-gray-500 text-sm line-through decoration-gray-600">₹{originalPrice}</span>
                    <span className="text-[#000] bg-gradient-to-br px-2 py-0.5 rounded shadow-lg from-[#a7c8ff] to-[#5d9bfa] text-[10px] font-medium uppercase tracking-wider">
                      {Math.round((1 - (parseFloat(price.replace(/,/g, '')) / parseFloat(originalPrice.replace(/,/g, '')))) * 100)}% OFF
                    </span>
                  </div>
                )}
                <span className={`text-2xl font-bold ${isFree ? 'text-emerald-400' : 'text-white'} whitespace-nowrap`}>
                  {isFree ? 'Free' : `₹${price}`}
                </span>
              </div>
            )}
          </div>

          <button 
            disabled={isComingSoon}
            className={`px-6 py-3 rounded-xl text-base font-bold transition-all duration-300 transform active:scale-95 whitespace-nowrap
            ${isComingSoon 
              ? 'bg-white/5 text-gray-600 cursor-not-allowed border border-white/5 px-4' 
              : isEnrolled 
                ? 'bg-white/10 text-white hover:bg-white/20' 
                : 'bg-[#497DFF] text-white hover:bg-[#3269f5] hover:shadow-[0_8px_25px_rgba(73,125,255,0.4)]'
            }
          `}>
            {isComingSoon ? 'Coming Soon' : isEnrolled ? 'Continue' : 'View Course'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;

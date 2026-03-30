import React from 'react';
import { CheckCircle2, X } from 'lucide-react';

const CourseComparison = () => {
  const pros = [
    "You want to master AI for professional work",
    "You're tired of guessing what prompts to write",
    "You value practical skills over academic theory",
    "You need AI skills to stay ahead in your field",
    "You're ready to become your team's AI expert"
  ];

  const cons = [
    "You want a free course with basic AI tips",
    "You prefer theory over practical application",
    "You dislike structured, step-by-step training",
    "You just want to explore AI without purpose",
    "You're seeking a math-heavy AI deep dive"
  ];

  return (
    <section className="max-w-6xl mx-auto px-6 py-24 border-t border-white/5 relative">
      <div className="relative w-full max-w-5xl mx-auto h-[300px] md:h-[450px] mb-8 overflow-hidden rounded-t-3xl">
        <img 
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2000&auto=format&fit=crop" 
          alt="Students learning together" 
          className="w-full h-full object-cover object-top"
        />
        {/* Gradient Overlay for Top-to-Bottom Fade Effect */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0b0c10]/60 to-[#0b0c10]"></div>
      </div>

      <div className="text-center mb-16 relative z-10 -mt-20 md:-mt-32">
        <p className="text-gray-400 font-medium mb-3">Is this for you?</p>
        <h2 className="text-4xl md:text-5xl font-bold text-white font-poppins leading-tight drop-shadow-xl">
          This Course Is a <span className="text-[#497DFF]">Perfect</span><br />
          Fit If You're Ready to ...
        </h2>
      </div>

      <div className="flex flex-col md:flex-row justify-center gap-6 max-w-5xl mx-auto">
        {/* For You Card */}
        <div className="flex-1 bg-[#1A1C23] border hover:border-[#497DFF] border-[#497DFF]/50 transition-all duration-300 rounded-2xl overflow-hidden shadow-[0_0_30px_rgba(73,125,255,0.1)]">
          <div className="bg-[#497DFF] py-4 text-center">
            <h3 className="text-white font-bold text-sm tracking-wider uppercase">
              This Is For You If:
            </h3>
          </div>
          <div className="p-8 pb-10">
            <ul className="space-y-6">
              {pros.map((item, index) => (
                <li key={index} className="flex items-start gap-4">
                  <div className="pt-0.5">
                    <div className="bg-[#497DFF] text-white rounded-full p-0.5">
                      <CheckCircle2 size={18} strokeWidth={3} className="fill-white text-[#497DFF]" />
                    </div>
                  </div>
                  <span className="text-white font-medium leading-tight">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Not For You Card */}
        <div className="flex-1 bg-[#1A1C23] border border-white/5 hover:border-white/10 transition-all duration-300 rounded-2xl overflow-hidden">
          <div className="bg-black/30 py-4 text-center border-b border-white/5">
            <h3 className="text-white font-bold text-sm tracking-wider uppercase">
              This Is Not For You If:
            </h3>
          </div>
          <div className="p-8 pb-10">
            <ul className="space-y-6">
              {cons.map((item, index) => (
                <li key={index} className="flex items-start gap-4">
                  <div className="pt-0.5">
                    <div className="bg-white/5 text-[#ff4d4d] rounded-full p-0.5">
                      <X size={18} strokeWidth={3} />
                    </div>
                  </div>
                  <span className="text-gray-300 font-medium leading-tight">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseComparison;

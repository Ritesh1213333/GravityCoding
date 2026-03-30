import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

const FAQ_DATA = [
  {
    question: "Are these courses suitable for absolute beginners?",
    answer: "Yes! We have dedicated tracks for beginners starting from the fundamentals. Look for the 'Beginner' level badge on our course cards."
  },
  {
    question: "Will I receive a certificate after completing a course?",
    answer: "Every premium course comes with a verified certificate of completion that you can add to your LinkedIn profile or resume."
  },
  {
    question: "How long do I have access to the course content?",
    answer: "Once you enroll, you get lifetime access to the course materials, including all future updates and resources."
  },
  {
    question: "Are the projects based on real-world scenarios?",
    answer: "Absolutely. Our curriculum is built around 'Learning by Doing'. You'll build production-ready applications that you can showcase in your portfolio."
  },
  {
    question: "Is there any mentorship or support if I get stuck?",
    answer: "Yes, we have a dedicated Discord community and Q&A sections where our instructors and mentors help you resolve any doubts within 24 hours."
  },
  {
    question: "Do you offer any discounts for students?",
    answer: "We frequently run seasonal offers. Additionally, we provide special discounts for university students. Contact our support team with your student ID for more details."
  }
];

const CourseFAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="max-w-4xl mx-auto px-4 sm:px-6 py-16 md:py-24">
      <div className="text-center mb-10 md:mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-white/5 border border-white/10 mb-4 md:mb-6 font-poppins">
          <HelpCircle size={16} className="text-[#497DFF] md:w-[18px] md:h-[18px]" />
          <span className="text-xs md:text-sm font-medium text-gray-400 uppercase tracking-wider">Common Questions</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 md:mb-6 font-poppins">
          Frequently Asked Questions
        </h2>
        <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto leading-relaxed px-4">
          Everything you need to know about our courses and learning platform. 
          Can't find the answer? Feel free to reach out.
        </p>
      </div>

      <div className="space-y-3 md:space-y-4">
        {FAQ_DATA.map((item, index) => (
          <div 
            key={index}
            className={`group bg-[#1A1C23] border transition-all duration-300 rounded-xl md:rounded-2xl overflow-hidden ${
              activeIndex === index 
                ? 'border-[#497DFF]/50 shadow-[0_0_30px_rgba(73,125,255,0.1)]' 
                : 'border-white/5 hover:border-white/10'
            }`}
          >
            <button
              onClick={() => toggleAccordion(index)}
              className="w-full px-5 py-4 md:px-8 md:py-6 flex items-center justify-between text-left focus:outline-none"
            >
              <span className={`text-base sm:text-lg md:text-xl pr-4 font-semibold transition-colors duration-300 ${
                activeIndex === index ? 'text-white' : 'text-gray-300 group-hover:text-white'
              }`}>
                {item.question}
              </span>
              <div className={`p-1.5 md:p-2 flex-shrink-0 rounded-full transition-all duration-300 ${
                activeIndex === index ? 'bg-[#497DFF] text-white rotate-180' : 'bg-white/5 text-gray-500 group-hover:bg-white/10 group-hover:text-white'
              }`}>
                <ChevronDown size={18} className="md:w-5 md:h-5" />
              </div>
            </button>
            <div 
              className={`transition-all duration-500 ease-in-out overflow-hidden ${
                activeIndex === index ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <div className="px-5 pb-5 md:px-8 md:pb-8 text-gray-400 text-sm sm:text-base md:text-lg leading-relaxed border-t border-white/5 pt-3 md:pt-4">
                {item.answer}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CourseFAQ;

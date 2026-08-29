import React from 'react';
import { BookOpen, Sparkles, CheckCircle2, HeartHandshake, Layers, Award, ChevronRight } from 'lucide-react';

export default function AcademicPage({ onOpenApplyModal }) {
  const academicPillars = [
    {
      title: "Play-Way Teaching Techniques",
      desc: "We adopt play-way techniques of teaching even the most complicated concepts, making learning joyful, experiential, and intuitive for every child.",
      icon: Sparkles
    },
    {
      title: "English Medium & CBSE Framework",
      desc: "An English medium school affiliated to the CBSE board, delivering high academic standards, strong foundations, and conceptual clarity.",
      icon: BookOpen
    },
    {
      title: "Rooted in Core Indian Values",
      desc: "Values deep rooted in Indian culture, fostering acceptance, tolerance, righteousness, and the timeless ideal of 'Vasudeva Kutumbkam'.",
      icon: HeartHandshake
    },
    {
      title: "Overall Personality Development",
      desc: "Going beyond examinations to develop a child's character, social awareness, empathy, and responsibility as a global citizen.",
      icon: Award
    }
  ];

  return (
    <div className="py-12 sm:py-16 animate-fadeIn">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-royal-100 text-royal-900 border border-royal-200 text-xs font-bold uppercase tracking-wider">
            <BookOpen size={14} className="text-royal-800" />
            <span>Academic Philosophy</span>
          </div>
          <h1 className="font-cinzel text-3xl sm:text-5xl font-bold text-royal-950">
            ACADEMICS & METHODOLOGY
          </h1>
          <p className="text-stone-600 text-base sm:text-lg max-w-2xl mx-auto">
            Simplifying complex concepts through play-way discovery while anchoring character in timeless values.
          </p>
          <div className="w-20 h-1 bg-gold-500 mx-auto rounded-full"></div>
        </div>

        {/* Core Methodology Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {academicPillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div 
                key={idx}
                className="bg-[#FAF9F6] p-8 rounded-3xl border border-stone-200 shadow-sm hover:border-royal-800 transition-all flex flex-col justify-between space-y-4"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-royal-900 text-gold-300 flex items-center justify-center shadow-xs">
                    <Icon size={24} />
                  </div>
                  <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-royal-950">
                    {pillar.title}
                  </h3>
                  <p className="text-base text-stone-700 leading-relaxed font-normal">
                    {pillar.desc}
                  </p>
                </div>
                <div className="pt-4 border-t border-stone-200/80 flex items-center gap-2 text-xs font-bold text-royal-800">
                  <CheckCircle2 size={14} className="text-gold-600" />
                  <span>The Aryans' Academic Standard</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Noble Cause Highlight Box */}
        <div className="bg-royal-950 text-white p-8 sm:p-12 rounded-3xl border-2 border-gold-500/40 shadow-xl space-y-6">
          <div className="flex items-center gap-3 text-gold-400">
            <HeartHandshake size={28} />
            <h3 className="font-cinzel text-2xl font-bold text-white">
              Education is a Noble Cause
            </h3>
          </div>
          <p className="text-base sm:text-lg text-stone-200 leading-relaxed font-light">
            "We believe that education is not a business. It is a very noble cause and we are an institution strongly motivated towards doing our bit for it. The school follows the motto of <strong>giving back to the society</strong> by producing righteous and responsible citizens."
          </p>
          <div className="pt-2 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gold-300">
            <span>The Aryans' School, Jhansi • CBSE Affiliated</span>
          </div>
        </div>

        {/* Apply Callout Footer */}
        <div className="bg-gradient-to-r from-royal-900 to-royal-950 text-white p-8 sm:p-10 rounded-3xl border border-gold-500/30 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left shadow-xl">
          <div>
            <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-white">
              Build a bright future for your Child
            </h3>
            <p className="text-gold-200 text-sm sm:text-base mt-1">
              Now is the perfect time! Apply for admission
            </p>
          </div>

          <button
            onClick={onOpenApplyModal}
            className="btn-gold text-xs sm:text-sm py-3.5 px-7 font-bold uppercase tracking-wider shrink-0"
          >
            <span>APPLY FOR ADMISSION</span>
            <ChevronRight size={16} />
          </button>
        </div>

      </div>
    </div>
  );
}

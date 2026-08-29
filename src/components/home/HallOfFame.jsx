import React from 'react';
import { Award, Trophy, Star, Sparkles, GraduationCap, Quote } from 'lucide-react';
import { studentAchievements } from '../../data/achievementsData';

export default function HallOfFame() {
  return (
    <section id="achievements" className="py-20 bg-gradient-to-b from-royal-950 to-royal-900 text-white relative border-b-4 border-gold-500 overflow-hidden">
      
      {/* Background Watermark */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-5 pointer-events-none translate-x-1/3">
        <img src="/crest-icon.svg" alt="" className="w-[600px] h-[600px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-royal-900 text-gold-300 border border-gold-500/40 text-xs font-bold uppercase tracking-wider mb-3">
            <Trophy size={14} className="text-gold-400" />
            <span>Student Distinction & Laurels</span>
          </div>
          <h2 className="font-cinzel text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Hall of Academic & Athletic Fame
          </h2>
          <p className="text-stone-300 text-sm sm:text-base mt-2">
            Celebrating our scholars who consistently set national benchmarks in Board Examinations, Olympiads, and Global Placements.
          </p>
          <div className="w-20 h-1 bg-gold-400 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Scholar Achievement Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {studentAchievements.map((student, idx) => (
            <div
              key={idx}
              className="bg-royal-900/90 rounded-2xl p-6 border border-gold-500/30 flex flex-col justify-between shadow-xl hover:border-gold-400 transition-all duration-300 group hover:-translate-y-1.5"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-gold-400 bg-royal-950 px-2 py-0.5 rounded border border-gold-500/30">
                    Class of {student.year}
                  </span>
                  <div className="flex text-gold-400">
                    <Star size={12} fill="#C49E31" />
                    <Star size={12} fill="#C49E31" />
                    <Star size={12} fill="#C49E31" />
                  </div>
                </div>

                <div>
                  <h3 className="font-cinzel text-lg font-bold text-white group-hover:text-gold-300 transition-colors">
                    {student.name}
                  </h3>
                  <p className="text-xs text-stone-300 font-medium mt-0.5">
                    {student.stream}
                  </p>
                </div>

                {/* Big Highlight Badge */}
                <div className="bg-royal-950/80 p-3 rounded-xl border border-gold-500/30">
                  <div className="flex items-start gap-2">
                    <Award size={16} className="text-gold-400 shrink-0 mt-0.5" />
                    <p className="text-xs font-bold text-gold-200">
                      {student.achievement}
                    </p>
                  </div>
                </div>

                {/* Quote */}
                <div className="relative pt-1">
                  <Quote size={18} className="text-gold-500/30 mb-1" />
                  <p className="text-xs text-stone-300 italic font-serif leading-relaxed line-clamp-3">
                    "{student.quote}"
                  </p>
                </div>
              </div>

              {/* Destination Placement Footer */}
              <div className="mt-6 pt-4 border-t border-royal-800 flex items-center gap-2 text-xs text-gold-300 font-semibold">
                <GraduationCap size={15} className="shrink-0 text-gold-400" />
                <span className="truncate">{student.destination}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

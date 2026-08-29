import React from 'react';
import { BookOpenCheck, Cpu, ShieldCheck, Trophy, Quote, CheckCircle, Award } from 'lucide-react';
import { pedagogicalPillars } from '../../data/academicsData';

export default function PrincipalWelcome({ onOpenTourModal }) {
  const iconMap = {
    BookOpenCheck,
    Cpu,
    ShieldCheck,
    Trophy
  };

  return (
    <section id="about" className="py-20 bg-ivory-50 relative overflow-hidden">
      
      {/* Decorative background watermark */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 opacity-5 pointer-events-none -translate-x-1/3">
        <img src="/crest-icon.svg" alt="" className="w-[600px] h-[600px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-royal-100 text-royal-900 border border-royal-200 text-xs font-bold uppercase tracking-wider mb-3">
            <Award size={14} className="text-royal-800" />
            <span>Legacy of Educational Distinction</span>
          </div>
          <h2 className="font-cinzel text-3xl sm:text-4xl font-bold text-royal-950 tracking-tight">
            Nurturing Character, Intellect & Purpose
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-royal-800 to-gold-500 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Editorial Split: Principal's Letter & Image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          
          {/* Left: Principal's Portrait & Official Seal */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md">
              
              {/* Decorative Frame */}
              <div className="absolute -inset-3 rounded-2xl bg-gradient-to-tr from-royal-800 via-gold-500 to-royal-900 opacity-80 blur-xs"></div>
              
              <div className="relative rounded-xl overflow-hidden bg-white p-2 shadow-2xl border border-stone-200">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80"
                  alt="Principal Dr. Meenakshi Sundaram"
                  className="w-full h-96 object-cover rounded-lg"
                />
                
                {/* Official Title Badge */}
                <div className="p-4 bg-royal-950 text-white rounded-b-lg border-t-2 border-gold-400">
                  <h4 className="font-cinzel text-lg font-bold text-white">
                    Dr. Meenakshi Sundaram
                  </h4>
                  <p className="text-xs text-gold-300 font-semibold uppercase tracking-wider">
                    Principal & Director of Academics
                  </p>
                  <p className="text-[11px] text-stone-300 font-light mt-0.5">
                    Ph.D. Education (Cambridge), M.Sc. Physics • 24+ Yrs Mentorship
                  </p>
                </div>
              </div>

              {/* Digital School Seal Stamp */}
              <div className="absolute -bottom-6 -right-6 w-24 h-24 rounded-full bg-royal-900 border-4 border-gold-400 shadow-xl flex items-center justify-center p-2 text-center text-[9px] font-bold text-gold-300 uppercase tracking-tighter transform rotate-12">
                <span>Verified Academic Seal</span>
              </div>

            </div>
          </div>

          {/* Right: The Principal's Desk Letter */}
          <div className="lg:col-span-7 space-y-6 text-stone-700">
            <div className="flex items-center gap-2 text-royal-800 font-serif italic text-lg">
              <Quote size={28} className="text-gold-500 rotate-180" />
              <span>Welcome to The Aryans' School, Jhansi</span>
            </div>

            <h3 className="font-cinzel text-2xl sm:text-3xl font-bold text-royal-950 leading-tight">
              "We believe that education is not a business. It is a very noble cause."
            </h3>

            <p className="text-base leading-relaxed text-stone-800 font-normal">
              <strong>The Aryans’ School</strong> is an English medium school, affiliated to CBSE board, in the heart of <strong>Jhansi, Uttar Pradesh</strong>. We adopt play-way techniques of teaching even the most complicated concepts. We are proud of our strong inclination towards core Indian values.
            </p>

            <p className="text-base leading-relaxed text-stone-700 font-light">
              We are an institution strongly motivated towards doing our bit for education. The school follows the motto of <strong>“giving back to the society”</strong> by producing righteous and responsible citizens.
            </p>

            {/* Core Values Bullet List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-2.5 bg-white p-3 rounded-lg border border-stone-200/80 shadow-xs">
                <CheckCircle size={18} className="text-royal-800 shrink-0" />
                <span className="text-xs font-semibold text-stone-800">Play-Way Teaching Techniques</span>
              </div>
              <div className="flex items-center gap-2.5 bg-white p-3 rounded-lg border border-stone-200/80 shadow-xs">
                <CheckCircle size={18} className="text-royal-800 shrink-0" />
                <span className="text-xs font-semibold text-stone-800">Strong Core Indian Values</span>
              </div>
              <div className="flex items-center gap-2.5 bg-white p-3 rounded-lg border border-stone-200/80 shadow-xs">
                <CheckCircle size={18} className="text-royal-800 shrink-0" />
                <span className="text-xs font-semibold text-stone-800">Giving Back to Society Motto</span>
              </div>
              <div className="flex items-center gap-2.5 bg-white p-3 rounded-lg border border-stone-200/80 shadow-xs">
                <CheckCircle size={18} className="text-royal-800 shrink-0" />
                <span className="text-xs font-semibold text-stone-800">Producing Righteous Citizens</span>
              </div>
            </div>

            <div className="pt-4 flex items-center gap-4">
              <button
                onClick={onOpenTourModal}
                className="btn-royal text-sm"
              >
                Schedule an Interaction & Campus Walk
              </button>
            </div>

          </div>

        </div>

        {/* 4 Pedagogical Pillars Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pedagogicalPillars.map((pillar, idx) => {
            const Icon = iconMap[pillar.icon] || BookOpenCheck;
            return (
              <div
                key={idx}
                className="card-prestige p-6 bg-white border border-stone-200/80 flex flex-col justify-between group hover:-translate-y-1.5 transition-all duration-300"
              >
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-xl bg-royal-100/80 text-royal-800 flex items-center justify-center group-hover:bg-royal-800 group-hover:text-gold-300 transition-colors shadow-xs">
                    <Icon size={24} />
                  </div>
                  <h4 className="font-cinzel text-base font-bold text-royal-950 group-hover:text-royal-800 transition-colors">
                    {pillar.title}
                  </h4>
                  <p className="text-xs text-stone-600 leading-relaxed font-normal">
                    {pillar.desc}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between text-xs font-bold text-royal-800">
                  <span>Pillar 0{idx + 1}</span>
                  <span className="w-6 h-0.5 bg-gold-400"></span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

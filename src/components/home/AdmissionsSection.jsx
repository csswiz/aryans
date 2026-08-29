import React from 'react';
import { GraduationCap, Sparkles, Calculator, FileDown, CheckCircle2, ArrowRight, HelpCircle } from 'lucide-react';
import { admissionSteps } from '../../data/admissionsData';

export default function AdmissionsSection({ onOpenApplication, onOpenFeeCalculator }) {
  const handleDownloadProspectus = () => {
    alert("Downloading 'The Aryans International School — Institutional Prospectus 2026-27' (PDF).");
  };

  return (
    <section id="admissions" className="py-20 bg-ivory-100/60 relative border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-royal-100 text-royal-900 border border-royal-200 text-xs font-bold uppercase tracking-wider mb-3">
            <GraduationCap size={14} className="text-royal-800" />
            <span>Admissions Portal 2026–27</span>
          </div>
          <h2 className="font-cinzel text-3xl sm:text-4xl font-bold text-royal-950 tracking-tight">
            Your Child's Journey to Distinction Starts Here
          </h2>
          <p className="text-stone-600 text-sm sm:text-base mt-2">
            A transparent, student-centric admissions process designed to recognize potential and nurture passion.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-royal-800 to-gold-500 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* 4-Step Pathway Process Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {admissionSteps.map((item, idx) => (
            <div
              key={idx}
              className="card-prestige p-6 bg-white border border-stone-200 flex flex-col justify-between relative group hover:-translate-y-1.5 transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-cinzel text-2xl font-black text-gold-600 bg-gold-50 px-3 py-1 rounded-xl border border-gold-200">
                    {item.step}
                  </span>
                  <span className="text-[10px] uppercase font-bold text-royal-800 bg-royal-50 px-2 py-0.5 rounded border border-royal-200">
                    {item.timeframe}
                  </span>
                </div>

                <h3 className="font-cinzel text-base font-bold text-royal-950 mb-2 group-hover:text-royal-800 transition-colors">
                  {item.title}
                </h3>
                
                <p className="text-xs text-stone-600 leading-relaxed font-light">
                  {item.desc}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-stone-100 flex items-center text-xs font-bold text-royal-800">
                <span>Phase {item.step}</span>
                <ArrowRight size={13} className="ml-auto text-gold-500 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>

        {/* Action Banners Split: Online Application vs Fee Estimator */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* Banner 1: Online Application Command */}
          <div className="bg-gradient-to-br from-royal-950 via-royal-900 to-royal-950 text-white rounded-3xl p-8 sm:p-10 shadow-2xl border-2 border-gold-500/50 flex flex-col justify-between relative overflow-hidden">
            <div className="absolute right-0 top-0 opacity-10 pointer-events-none translate-x-1/4 -translate-y-1/4">
              <img src="/crest-icon.svg" alt="" className="w-80 h-80" />
            </div>

            <div className="space-y-4 relative z-10">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-royal-800/90 text-gold-300 text-xs font-bold uppercase tracking-wider border border-gold-500/30">
                <Sparkles size={13} className="text-gold-400" />
                <span>Session 2026–27 Online Registrations</span>
              </div>

              <h3 className="font-cinzel text-2xl sm:text-3xl font-bold text-white">
                Submit Online Admission Application
              </h3>

              <p className="text-stone-300 text-xs sm:text-sm leading-relaxed font-light">
                Fill out our streamlined digital registration form in under 5 minutes. Secure application reference ID and get notified of diagnostic assessment slots instantly.
              </p>

              <div className="space-y-2 pt-2 text-xs text-stone-200">
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-gold-400" />
                  <span>Nursery to Grade 11 (Science, Commerce, Humanities)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-gold-400" />
                  <span>Merit-based scholarships available for 90%+ board scorers</span>
                </div>
              </div>
            </div>

            <div className="pt-8 relative z-10 flex flex-col sm:flex-row gap-3">
              <button
                onClick={onOpenApplication}
                className="btn-gold text-xs sm:text-sm py-3.5 px-6 font-bold"
              >
                <span>Launch Application Wizard</span>
                <ArrowRight size={16} />
              </button>

              <button
                onClick={handleDownloadProspectus}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-lg text-xs font-semibold text-white bg-royal-800/80 hover:bg-royal-800 border border-royal-700 transition-colors"
              >
                <FileDown size={15} />
                <span>Download Prospectus</span>
              </button>
            </div>
          </div>

          {/* Banner 2: Transparent Tuition & Fee Estimator */}
          <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-prestige border border-stone-200 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold-100 text-gold-900 text-xs font-bold uppercase tracking-wider border border-gold-300">
                <Calculator size={13} className="text-gold-700" />
                <span>Financial Transparency</span>
              </div>

              <h3 className="font-cinzel text-2xl sm:text-3xl font-bold text-royal-950">
                Interactive Tuition & Fee Estimator
              </h3>

              <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
                Calculate an exact, transparent quarterly and annual fee breakdown including tuition, transport routes, and optional sports/robotics academies with zero hidden costs.
              </p>

              <div className="bg-ivory-50 p-4 rounded-xl border border-stone-200 space-y-2">
                <div className="flex justify-between text-xs text-stone-700 font-medium">
                  <span>Pre-Primary (Nursery – UKG)</span>
                  <span className="font-bold text-royal-900">₹18,500 / Quarter</span>
                </div>
                <div className="flex justify-between text-xs text-stone-700 font-medium">
                  <span>Primary Wing (Grades 1 – 5)</span>
                  <span className="font-bold text-royal-900">₹22,500 / Quarter</span>
                </div>
                <div className="flex justify-between text-xs text-stone-700 font-medium">
                  <span>Senior Secondary (Grades 11 – 12)</span>
                  <span className="font-bold text-royal-900">₹34,000 / Quarter</span>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <button
                onClick={onOpenFeeCalculator}
                className="w-full btn-outline-royal text-xs sm:text-sm py-3.5 flex items-center justify-center gap-2"
              >
                <Calculator size={16} />
                <span>Open Interactive Fee Calculator</span>
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

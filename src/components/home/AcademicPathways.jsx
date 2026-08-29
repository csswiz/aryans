import React, { useState } from 'react';
import { BookOpen, GraduationCap, CheckCircle2, FileDown, Sparkles, Layers, ArrowRight } from 'lucide-react';
import { academicPrograms } from '../../data/academicsData';

export default function AcademicPathways({ onOpenApplication }) {
  const [selectedTab, setSelectedTab] = useState(academicPrograms[0].id);

  const currentProgram = academicPrograms.find(p => p.id === selectedTab) || academicPrograms[0];

  const handleDownloadCurriculum = (programName) => {
    alert(`Downloading Official Academic Guide & Curriculum Syllabus for "${programName}" (PDF Format).`);
  };

  return (
    <section id="academics" className="py-20 bg-white relative border-y border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-royal-100 text-royal-900 border border-royal-200 text-xs font-bold uppercase tracking-wider mb-3">
            <Layers size={14} className="text-royal-800" />
            <span>Academic Progression Framework</span>
          </div>
          <h2 className="font-cinzel text-3xl sm:text-4xl font-bold text-royal-950 tracking-tight">
            Comprehensive Curricular Pathways
          </h2>
          <p className="text-stone-600 text-sm sm:text-base mt-2 max-w-xl mx-auto">
            From playful inquiry in early childhood to rigorous competitive mastery in senior secondary grades.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-royal-800 to-gold-500 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Pathway Stage Selector Tabs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3 p-1.5 bg-ivory-100/80 rounded-2xl border border-stone-200 mb-10 max-w-5xl mx-auto">
          {academicPrograms.map((program) => {
            const isActive = selectedTab === program.id;
            return (
              <button
                key={program.id}
                onClick={() => setSelectedTab(program.id)}
                className={`py-3.5 px-4 rounded-xl text-left transition-all duration-300 flex flex-col justify-center ${
                  isActive
                    ? 'bg-royal-900 text-white shadow-lg border-2 border-gold-400 -translate-y-0.5'
                    : 'bg-transparent text-stone-700 hover:bg-white/80 hover:text-royal-900'
                }`}
              >
                <span className={`text-[11px] font-bold uppercase tracking-wider ${isActive ? 'text-gold-300' : 'text-stone-500'}`}>
                  {program.grades}
                </span>
                <span className="font-cinzel text-sm sm:text-base font-bold truncate mt-0.5">
                  {program.name.split('&')[0]}
                </span>
              </button>
            );
          })}
        </div>

        {/* Active Stage Deep-Dive Card */}
        <div className="bg-ivory-50 rounded-3xl border border-stone-200/90 shadow-prestige overflow-hidden transition-all duration-500">
          <div className="p-6 sm:p-8 lg:p-10">
            
            {/* Top Bar of Card */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-stone-200">
              <div>
                <span className="badge-royal mb-2">
                  {currentProgram.grades}
                </span>
                <h3 className="font-cinzel text-2xl sm:text-3xl font-bold text-royal-950">
                  {currentProgram.name}
                </h3>
                <p className="text-royal-800 font-medium text-sm mt-1">
                  {currentProgram.tagline}
                </p>
              </div>

              {/* Stat Metric Badges */}
              <div className="flex flex-wrap gap-3">
                {currentProgram.stats.map((stat, idx) => (
                  <div key={idx} className="bg-white px-4 py-2.5 rounded-xl border border-stone-200 shadow-xs text-center">
                    <span className="text-xs text-stone-500 font-medium block">{stat.label}</span>
                    <span className="font-cinzel text-lg font-bold text-royal-900">{stat.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Middle Grid: Overview + Subjects + Highlights */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 py-8 items-start">
              
              {/* Left Column: Description & Pedagogical Approach (6 cols) */}
              <div className="lg:col-span-6 space-y-6">
                <div>
                  <h4 className="font-cinzel text-base font-bold text-stone-900 uppercase tracking-wider mb-2">
                    Curriculum Philosophy
                  </h4>
                  <p className="text-stone-700 text-sm leading-relaxed">
                    {currentProgram.description}
                  </p>
                </div>

                <div className="bg-white p-4.5 rounded-2xl border border-stone-200">
                  <h5 className="text-xs font-bold text-royal-900 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <Sparkles size={14} className="text-gold-600" />
                    Affiliation & Accreditation Framework
                  </h5>
                  <p className="text-xs text-stone-600 font-medium">
                    {currentProgram.curriculumFramework}
                  </p>
                </div>

                {/* Key Pedagogical Highlights */}
                <div>
                  <h4 className="font-cinzel text-base font-bold text-stone-900 uppercase tracking-wider mb-3">
                    Distinctive Learning Highlights
                  </h4>
                  <div className="space-y-2.5">
                    {currentProgram.highlights.map((highlight, index) => (
                      <div key={index} className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-700">
                        <CheckCircle2 size={16} className="text-royal-700 shrink-0 mt-0.5" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Core Subjects & Syllabus Download (6 cols) */}
              <div className="lg:col-span-6 space-y-6 bg-white p-6 rounded-2xl border border-stone-200">
                <h4 className="font-cinzel text-base font-bold text-stone-900 uppercase tracking-wider">
                  Key Disciplines & Subject Matrix
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {currentProgram.subjects.map((subj, index) => (
                    <div
                      key={index}
                      className="p-3 rounded-xl bg-ivory-50 border border-stone-200/80 text-xs font-semibold text-stone-800 flex items-center gap-2"
                    >
                      <BookOpen size={14} className="text-royal-800 shrink-0" />
                      <span>{subj}</span>
                    </div>
                  ))}
                </div>

                {/* CTAs */}
                <div className="pt-4 border-t border-stone-100 flex flex-col sm:flex-row items-center gap-3">
                  <button
                    onClick={() => handleDownloadCurriculum(currentProgram.name)}
                    className="w-full sm:w-auto flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-bold text-royal-900 bg-royal-100/80 hover:bg-royal-200/80 rounded-xl border border-royal-300 transition-colors"
                  >
                    <FileDown size={15} />
                    <span>Download Curriculum Guide (PDF)</span>
                  </button>

                  <button
                    onClick={onOpenApplication}
                    className="w-full sm:w-auto btn-royal text-xs py-2.5 px-5"
                  >
                    <span>Apply for This Stage</span>
                    <ArrowRight size={14} />
                  </button>
                </div>

              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

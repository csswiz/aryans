import React from 'react';
import { BookOpen, Sparkles, CheckCircle2, HeartHandshake, Layers, Award, ChevronRight, Compass, MoveHorizontal } from 'lucide-react';
import CircularGallery from '../components/effects/CircularGallery';

export default function AcademicPage({ onOpenApplyModal }) {
  const academicGalleryItems = [
    { image: "/academics/academic-1.jpg", text: "" },
    { image: "/academics/academic-2.jpg", text: "" },
    { image: "/academics/academic-3.jpg", text: "" },
    { image: "/academics/academic-4.jpg", text: "" },
    { image: "/academics/academic-5.jpg", text: "" },
    { image: "/academics/academic-6.jpg", text: "" },
    { image: "/academics/academic-7.jpg", text: "" },
    { image: "/academics/academic-8.png", text: "" }
  ];

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
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
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

        {/* 3D CIRCULAR GALLERY SECTION */}
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-b from-royal-950 via-royal-900 to-royal-950 border-2 border-gold-500/50 shadow-2xl p-4 sm:p-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-4 border-b border-gold-500/20 text-center sm:text-left">
            <div>
              <div className="inline-flex items-center gap-2 text-gold-400 text-xs font-bold uppercase tracking-widest">
                <Compass size={14} />
                <span>Interactive Visual Showcase</span>
              </div>
              <h2 className="font-cinzel text-xl sm:text-2xl font-bold text-white mt-1">
                Experience Our Academic Environment
              </h2>
            </div>
            <div className="flex items-center gap-2 text-xs font-medium text-gold-200/80 bg-royal-900/80 px-4 py-2 rounded-full border border-gold-500/30">
              <MoveHorizontal size={15} className="text-gold-400 animate-pulse" />
              <span>Drag or scroll horizontally to explore</span>
            </div>
          </div>

          {/* WebGL Circular Gallery Canvas Container */}
          <div className="h-[420px] sm:h-[520px] lg:h-[580px] w-full relative my-2 select-none">
            <CircularGallery
              items={academicGalleryItems}
              bend={3}
              textColor="#F9E8A2"
              borderRadius={0.06}
              scrollEase={0.03}
              scrollSpeed={2}
              font="bold 28px Figtree"
            />
          </div>

          <div className="pt-4 border-t border-gold-500/20 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-stone-300 text-center sm:text-left">
            <span>The Aryans' School, Jhansi • Nurturing Scholastic Excellence</span>
            <div className="flex items-center gap-3">
              <span className="inline-block w-2 h-2 rounded-full bg-gold-400"></span>
              <span className="text-gold-300 font-semibold">Interactive 3D Perspective</span>
            </div>
          </div>
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


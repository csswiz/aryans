import React, { useState, useEffect } from 'react';
import { Sparkles, Compass, ShieldCheck, Download, Award, ArrowRight, CheckCircle2, ChevronRight, MapPin, HeartHandshake, BookOpen } from 'lucide-react';

export default function HeroSection({ onOpenApplication, onOpenTourModal, onOpenFeeCalculator }) {
  const heroSlides = [
    {
      image: "/assets/library.jpg",
      caption: "The Aryans' School Library & Study Archive",
      tagline: "Inspiring reading habits and conceptual mastery from foundational years."
    },
    {
      image: "/assets/primary-classroom.jpg",
      caption: "Play-Way & Experiential Learning Classrooms",
      tagline: "Making even the most complicated concepts engaging, joyful, and intuitive."
    },
    {
      image: "/assets/students-hallway.jpg",
      caption: "The Aryans' School Campus, Jhansi",
      tagline: "Producing righteous and responsible citizens rooted in core Indian values."
    }
  ];

  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  return (
    <section className="relative bg-royal-950 text-white overflow-hidden pt-10 pb-16 lg:pt-16 lg:pb-24 border-b-4 border-gold-500">
      
      {/* Background Subtle Motifs */}
      <div className="absolute inset-0 bg-crest-pattern opacity-15 pointer-events-none"></div>
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-royal-700/30 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gold-600/20 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Authentic Institutional Copy (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Top Pill: Welcome to The Aryans' School, Jhansi */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-royal-900/90 border border-gold-400/50 shadow-inner">
              <MapPin size={13} className="text-gold-400 shrink-0" />
              <span className="text-xs uppercase font-bold tracking-widest text-gold-300">
                Welcome to The Aryans' School, Jhansi
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-white leading-[1.15]">
              Build a bright <br className="hidden sm:inline" />
              <span className="text-gold-shimmer font-serif italic">future for your Child.</span>
            </h1>

            {/* Subtitle & Core Philosophy */}
            <div className="space-y-3">
              <p className="text-gold-200 text-lg sm:text-xl font-medium tracking-wide">
                Now is the perfect time! Apply for admission.
              </p>
              
              <p className="text-stone-300 text-sm sm:text-base font-light leading-relaxed max-w-2xl mx-auto lg:mx-0">
                <strong className="text-white font-semibold">The Aryans’ School</strong> is an English medium school, affiliated to CBSE board, in the heart of <strong className="text-gold-300 font-medium">Jhansi, Uttar Pradesh</strong>. We adopt play-way techniques of teaching even the most complicated concepts. We are proud of our strong inclination towards core Indian values.
              </p>
            </div>

            {/* Core Noble Cause Callout */}
            <div className="p-4 rounded-2xl bg-royal-900/80 border border-gold-500/30 text-xs sm:text-sm text-stone-200 leading-relaxed max-w-2xl mx-auto lg:mx-0 flex items-start gap-3">
              <HeartHandshake size={20} className="text-gold-400 shrink-0 mt-0.5" />
              <div>
                <p>
                  "We believe that education is not a business. It is a very noble cause and we are an institution strongly motivated towards doing our bit for it. The school follows the motto of <strong>giving back to the society</strong> by producing righteous and responsible citizens."
                </p>
              </div>
            </div>

            {/* Key Action CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5">
              <button
                onClick={onOpenApplication}
                className="w-full sm:w-auto relative inline-flex items-center justify-center gap-2.5 px-8 py-4 font-bold text-sm sm:text-base text-stone-900 bg-gradient-to-r from-gold-400 via-gold-300 to-gold-500 hover:from-gold-300 hover:to-gold-400 rounded-xl shadow-lg hover:shadow-gold-glow hover:-translate-y-0.5 transition-all active:translate-y-0 uppercase tracking-wider"
              >
                <Sparkles size={18} className="text-royal-900" />
                <span>APPLY FOR ADMISSION</span>
                <ChevronRight size={18} />
              </button>

              <button
                onClick={onOpenTourModal}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 font-semibold text-sm sm:text-base text-white bg-royal-900/80 hover:bg-royal-800 border border-royal-700/90 rounded-xl hover:-translate-y-0.5 transition-all shadow-md"
              >
                <Compass size={18} className="text-gold-400" />
                <span>Visit Our Jhansi Campus</span>
              </button>
            </div>

            {/* Institutional Pillars */}
            <div className="pt-6 border-t border-royal-900/80 grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
              <div className="flex items-start gap-2">
                <CheckCircle2 size={16} className="text-gold-400 shrink-0 mt-0.5" />
                <div>
                  <h5 className="text-xs font-bold text-white">CBSE Affiliated</h5>
                  <p className="text-[11px] text-stone-400">English Medium Standard</p>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <CheckCircle2 size={16} className="text-gold-400 shrink-0 mt-0.5" />
                <div>
                  <h5 className="text-xs font-bold text-white">Play-Way Techniques</h5>
                  <p className="text-[11px] text-stone-400">Simplifying Complex Concepts</p>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <CheckCircle2 size={16} className="text-gold-400 shrink-0 mt-0.5" />
                <div>
                  <h5 className="text-xs font-bold text-white">Core Indian Values</h5>
                  <p className="text-[11px] text-stone-400">Education as a Noble Cause</p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Photography Showcase Carousel (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-gold-500/50 bg-royal-900 group">
              
              {/* Slide Images */}
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                {heroSlides.map((slide, idx) => (
                  <div
                    key={idx}
                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                      idx === activeSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105 pointer-events-none'
                    }`}
                  >
                    <img
                      src={slide.image}
                      alt={slide.caption}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-royal-950 via-royal-950/20 to-transparent"></div>
                  </div>
                ))}
              </div>

              {/* Slide Caption Box */}
              <div className="p-5 bg-gradient-to-b from-royal-900 to-royal-950 border-t border-royal-800 relative z-10">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-gold-400 bg-royal-800/80 px-2 py-0.5 rounded border border-gold-500/30">
                    The Aryans' School, Jhansi • {activeSlide + 1} of {heroSlides.length}
                  </span>
                  <div className="flex gap-1.5">
                    {heroSlides.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setActiveSlide(i)}
                        className={`h-1.5 rounded-full transition-all ${
                          i === activeSlide ? 'w-6 bg-gold-400' : 'w-2 bg-royal-700'
                        }`}
                        aria-label={`Slide ${i + 1}`}
                      />
                    ))}
                  </div>
                </div>

                <h3 className="font-cinzel text-base font-bold text-white">
                  {heroSlides[activeSlide].caption}
                </h3>
                <p className="text-xs text-stone-300 mt-1 line-clamp-2">
                  {heroSlides[activeSlide].tagline}
                </p>
              </div>

              {/* Quick Location Badge */}
              <div className="absolute top-4 left-4 z-20">
                <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-royal-950/90 text-gold-300 text-xs font-semibold backdrop-blur-xs border border-gold-500/40 shadow-lg">
                  <MapPin size={13} className="text-gold-400" />
                  <span>Jhansi, Uttar Pradesh</span>
                </span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

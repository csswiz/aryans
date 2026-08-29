import React, { useState, useEffect } from 'react';
import { Sparkles, MapPin, CheckCircle2, ChevronRight, ChevronLeft, HeartHandshake, ArrowRight, Award, Trophy, Eye, X } from 'lucide-react';

export default function HomePage({ onOpenApplyModal, onNavigate }) {
  const [activePhoto, setActivePhoto] = useState(0);
  const [activeTopperIndex, setActiveTopperIndex] = useState(0);
  const [selectedBatch, setSelectedBatch] = useState('2024-2025');
  const [topperLightbox, setTopperLightbox] = useState(null);

  const photos = [
    {
      src: "/assets/library.jpg",
      title: "The Aryans' School Library",
      caption: "Cultivating scholarly reading habits and intellectual curiosity."
    },
    {
      src: "/assets/primary-classroom.jpg",
      title: "Play-Way Classrooms",
      caption: "Making even the most complicated concepts joyful and engaging."
    },
    {
      src: "/assets/students-hallway.jpg",
      title: "The Aryans' School Students, Jhansi",
      caption: "Nurturing righteous and responsible future citizens."
    }
  ];

  const topperBatches = {
    '2024-2025': [
      {
        src: "/toppers/2024-2025/topper-13.png",
        title: "CBSE Board Examination Toppers — Session 2024-25 (Part 1)",
        year: "2024–25"
      },
      {
        src: "/toppers/2024-2025/topper-15.png",
        title: "CBSE Board Examination Toppers — Session 2024-25 (Part 2)",
        year: "2024–25"
      },
      {
        src: "/toppers/2024-2025/topper-16.png",
        title: "CBSE Board Examination Toppers — Session 2024-25 (Part 3)",
        year: "2024–25"
      }
    ],
    '2023-2024': [
      {
        src: "/toppers/2023-2024/topper-11.png",
        title: "CBSE Class X Board Toppers — Session 2023-24 (Part 1)",
        year: "2023–24"
      },
      {
        src: "/toppers/2023-2024/topper-12.png",
        title: "CBSE Class X Board Toppers — Session 2023-24 (Part 2)",
        year: "2023–24"
      },
      {
        src: "/toppers/2023-2024/topper-13.png",
        title: "CBSE Class X Board Toppers — Session 2023-24 (Part 3)",
        year: "2023–24"
      }
    ]
  };

  const currentToppersList = topperBatches[selectedBatch];

  // Hero slideshow auto timer
  useEffect(() => {
    const timer = setInterval(() => {
      setActivePhoto((prev) => (prev + 1) % photos.length);
    }, 5500);
    return () => clearInterval(timer);
  }, [photos.length]);

  // Toppers carousel auto timer
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTopperIndex((prev) => (prev + 1) % currentToppersList.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [currentToppersList.length, selectedBatch]);

  const handlePrevTopper = () => {
    setActiveTopperIndex((prev) => (prev === 0 ? currentToppersList.length - 1 : prev - 1));
  };

  const handleNextTopper = () => {
    setActiveTopperIndex((prev) => (prev + 1) % currentToppersList.length);
  };

  return (
    <div className="space-y-16 animate-fadeIn">
      {/* HERO SECTION */}
      <section className="relative bg-royal-950 text-white overflow-hidden py-16 lg:py-24 border-b-4 border-gold-500">
        <div className="absolute inset-0 bg-crest-pattern opacity-10 pointer-events-none"></div>
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Text */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-royal-900/90 border border-gold-400/50 shadow-inner">
                <MapPin size={14} className="text-gold-400" />
                <span className="text-xs uppercase font-bold tracking-widest text-gold-300">
                  Welcome to The Aryans' School, Jhansi
                </span>
              </div>

              <h1 className="font-cinzel text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
                Build a bright <br className="hidden sm:inline" />
                <span className="text-gold-shimmer font-serif italic">future for your Child</span>
              </h1>

              <p className="text-gold-200 text-lg sm:text-xl font-semibold tracking-wide">
                Now is the perfect time! Apply for admission
              </p>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <button
                  onClick={onOpenApplyModal}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 font-bold text-sm sm:text-base text-stone-900 bg-gradient-to-r from-gold-400 via-gold-300 to-gold-500 hover:from-gold-300 hover:to-gold-400 rounded-xl shadow-xl hover:shadow-gold-glow hover:-translate-y-0.5 transition-all uppercase tracking-wider"
                >
                  <Sparkles size={18} className="text-royal-950" />
                  <span>APPLY FOR ADMISSION</span>
                  <ChevronRight size={18} />
                </button>

                <button
                  onClick={() => onNavigate('About')}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 font-semibold text-sm sm:text-base text-white bg-royal-900/80 hover:bg-royal-800 border border-royal-700/90 rounded-xl hover:-translate-y-0.5 transition-all"
                >
                  <span>Learn About Us</span>
                  <ArrowRight size={16} className="text-gold-400" />
                </button>
              </div>

              <div className="pt-6 border-t border-royal-900 text-xs text-stone-300 flex flex-wrap items-center justify-center lg:justify-start gap-6 font-medium">
                <span className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="text-gold-400" />
                  English Medium
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="text-gold-400" />
                  Affiliated to CBSE Board
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="text-gold-400" />
                  Heart of Jhansi, UP
                </span>
              </div>

            </div>

            {/* Right Gallery Showcase */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-gold-500/50 bg-royal-900">
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <img
                    src={photos[activePhoto].src}
                    alt={photos[activePhoto].title}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-royal-950 via-transparent to-transparent"></div>
                </div>

                <div className="p-4 bg-royal-900 text-white flex items-center justify-between border-t border-royal-800">
                  <div>
                    <h4 className="font-cinzel text-sm font-bold text-gold-300">
                      {photos[activePhoto].title}
                    </h4>
                    <p className="text-[11px] text-stone-300 mt-0.5">
                      {photos[activePhoto].caption}
                    </p>
                  </div>
                  <div className="flex gap-1.5 shrink-0 ml-3">
                    {photos.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setActivePhoto(i)}
                        className={`h-2 rounded-full transition-all ${
                          i === activePhoto ? 'w-6 bg-gold-400' : 'w-2 bg-royal-700'
                        }`}
                        aria-label={`Photo ${i + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* TOPPERS CAROUSEL SECTION */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold-100 text-gold-900 border border-gold-300 text-xs font-bold uppercase tracking-wider">
            <Trophy size={15} className="text-gold-700" />
            <span>Academic Excellence & Distinction</span>
          </div>
          <h2 className="font-cinzel text-3xl sm:text-4xl font-bold text-royal-950">
            OUR CBSE BOARD TOPPERS
          </h2>
          <p className="text-stone-600 text-sm sm:text-base">
            Proudly celebrating the outstanding achievements and high scores of our scholars.
          </p>
          <div className="w-20 h-1 bg-gold-500 mx-auto rounded-full"></div>
        </div>

        {/* Batch Selection Tabs */}
        <div className="flex items-center justify-center gap-3">
          <button
            onClick={() => {
              setSelectedBatch('2024-2025');
              setActiveTopperIndex(0);
            }}
            className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 ${
              selectedBatch === '2024-2025'
                ? 'bg-royal-900 text-white shadow-md border-2 border-gold-400'
                : 'bg-white text-stone-700 border border-stone-300 hover:bg-stone-100'
            }`}
          >
            <Award size={16} className={selectedBatch === '2024-2025' ? 'text-gold-300' : 'text-stone-500'} />
            <span>Toppers 2024–2025</span>
          </button>

          <button
            onClick={() => {
              setSelectedBatch('2023-2024');
              setActiveTopperIndex(0);
            }}
            className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 ${
              selectedBatch === '2023-2024'
                ? 'bg-royal-900 text-white shadow-md border-2 border-gold-400'
                : 'bg-white text-stone-700 border border-stone-300 hover:bg-stone-100'
            }`}
          >
            <Award size={16} className={selectedBatch === '2023-2024' ? 'text-gold-300' : 'text-stone-500'} />
            <span>Toppers 2023–2024</span>
          </button>
        </div>

        {/* Main Toppers Carousel Card */}
        <div className="bg-royal-950 rounded-3xl p-4 sm:p-8 shadow-2xl border-4 border-gold-500 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Carousel Viewer (8 cols) */}
            <div className="lg:col-span-8 relative">
              <div 
                onClick={() => setTopperLightbox(currentToppersList[activeTopperIndex].src)}
                className="relative aspect-square sm:aspect-[4/3] rounded-2xl overflow-hidden bg-black/40 border-2 border-gold-400/60 group cursor-pointer shadow-inner"
              >
                <img
                  src={currentToppersList[activeTopperIndex].src}
                  alt={currentToppersList[activeTopperIndex].title}
                  className="w-full h-full object-contain p-2 transition-transform duration-500 group-hover:scale-102"
                />
                
                {/* Hover overlay hint */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="flex items-center gap-2 px-4 py-2 rounded-full bg-royal-900 text-gold-300 text-xs font-bold border border-gold-400 shadow-lg">
                    <Eye size={14} />
                    <span>Click to Enlarge / Fullscreen</span>
                  </span>
                </div>
              </div>

              {/* Carousel Navigation Buttons */}
              <button
                onClick={handlePrevTopper}
                className="absolute left-2 top-1/2 -translate-y-1/2 p-2.5 sm:p-3 rounded-full bg-royal-900/90 text-gold-300 hover:text-white border border-gold-500/50 shadow-lg hover:bg-royal-800 transition-all z-20"
                aria-label="Previous Topper Slide"
              >
                <ChevronLeft size={20} />
              </button>

              <button
                onClick={handleNextTopper}
                className="absolute right-2 top-1/2 -translate-y-1/2 p-2.5 sm:p-3 rounded-full bg-royal-900/90 text-gold-300 hover:text-white border border-gold-500/50 shadow-lg hover:bg-royal-800 transition-all z-20"
                aria-label="Next Topper Slide"
              >
                <ChevronRight size={20} />
              </button>
            </div>

            {/* Carousel Side Info & Thumbnails (4 cols) */}
            <div className="lg:col-span-4 space-y-6 text-white text-left">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-gold-400 bg-royal-900 px-3 py-1 rounded-md border border-gold-500/40 inline-block mb-2">
                  Session {selectedBatch} • Slide {activeTopperIndex + 1} of {currentToppersList.length}
                </span>
                <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-white leading-snug">
                  {currentToppersList[activeTopperIndex].title}
                </h3>
                <p className="text-xs text-stone-300 mt-2 leading-relaxed">
                  Congratulations to our students, management, and teachers for outstanding academic merit and distinction in CBSE Board Examinations.
                </p>
              </div>

              {/* Thumbnail Selector list */}
              <div className="space-y-2.5 pt-2 border-t border-royal-800">
                <p className="text-xs font-bold uppercase tracking-wider text-gold-300">
                  Select Banner:
                </p>
                <div className="grid grid-cols-3 gap-2">
                  {currentToppersList.map((item, idx) => (
                    <div
                      key={idx}
                      onClick={() => setActiveTopperIndex(idx)}
                      className={`relative aspect-square rounded-xl overflow-hidden border-2 cursor-pointer transition-all bg-black/30 ${
                        activeTopperIndex === idx
                          ? 'border-gold-400 ring-2 ring-gold-400/50 scale-105'
                          : 'border-royal-800 opacity-70 hover:opacity-100'
                      }`}
                    >
                      <img src={item.src} alt="" className="w-full h-full object-cover" />
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => onOpenApplyModal()}
                  className="w-full btn-gold text-xs py-3 font-bold uppercase tracking-wider flex items-center justify-center gap-2"
                >
                  <Sparkles size={14} />
                  <span>Join Our Achieving Community</span>
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CORE PHILOSOPHY OVERVIEW */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 pb-12">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="font-cinzel text-2xl sm:text-3xl font-bold text-royal-950">
            Welcome to The Aryans' School, Jhansi
          </h2>
          <div className="w-16 h-1 bg-gold-500 mx-auto mt-3 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          <div className="bg-[#FAF9F6] p-8 rounded-3xl border border-stone-200 shadow-sm relative overflow-hidden flex flex-col justify-between">
            <div className="absolute top-0 left-0 w-2 h-full bg-royal-800"></div>
            <p className="text-base sm:text-lg text-stone-800 leading-relaxed">
              The Aryans’ School is an English medium school, affiliated to CBSE board, in the heart of Jhansi, Uttar Pradesh. We adopt play-way techniques of teaching even the most complicated concepts. We are proud of our strong inclination towards core Indian values.
            </p>
            <div className="pt-4 mt-4 border-t border-stone-200/60 flex items-center justify-between text-xs font-bold text-royal-800">
              <span>English Medium • CBSE</span>
              <button onClick={() => onNavigate('Academic')} className="hover:underline flex items-center gap-1">
                <span>View Academic Approach</span>
                <ChevronRight size={14} />
              </button>
            </div>
          </div>

          <div className="bg-royal-950 text-white p-8 rounded-3xl border-2 border-gold-500/40 shadow-xl relative overflow-hidden flex flex-col justify-between">
            <div className="absolute top-0 left-0 w-2 h-full bg-gold-400"></div>
            <div className="flex items-start gap-4">
              <HeartHandshake size={32} className="text-gold-400 shrink-0 mt-1" />
              <p className="text-base sm:text-lg text-stone-100 leading-relaxed font-light">
                We believe that education is not a business. It is a very noble cause and we are an institution strongly motivated towards doing our bit for it. The school follows the motto of <strong className="text-gold-300 font-semibold">“giving back to the society”</strong> by producing righteous and responsible citizens.
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-royal-800 flex items-center justify-between text-xs text-gold-300 font-semibold">
              <span>Estd 2011 • Seva Parmodharma</span>
              <button onClick={() => onNavigate('About')} className="hover:text-white underline flex items-center gap-1">
                <span>Read Full History</span>
                <ChevronRight size={14} />
              </button>
            </div>
          </div>
        </div>

        {/* Home Bottom Callout */}
        <div className="bg-gradient-to-r from-royal-900 via-royal-800 to-royal-950 text-white p-8 sm:p-10 rounded-3xl border border-gold-500/30 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left shadow-xl">
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
      </section>

      {/* Lightbox for Toppers Banners */}
      {topperLightbox && (
        <div 
          onClick={() => setTopperLightbox(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn"
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            className="bg-royal-950 rounded-3xl overflow-hidden shadow-2xl border-2 border-gold-500/50 max-w-4xl w-full animate-scaleUp p-3 relative"
          >
            <button 
              onClick={() => setTopperLightbox(null)}
              className="absolute top-5 right-5 p-2 text-white/80 hover:text-white bg-black/60 hover:bg-black/90 rounded-full transition-colors z-10"
              aria-label="Close"
            >
              <X size={22} />
            </button>
            <div className="max-h-[80vh] flex items-center justify-center overflow-auto">
              <img 
                src={topperLightbox} 
                alt="The Aryans' School Topper Banner" 
                className="max-h-[78vh] w-auto object-contain rounded-xl"
              />
            </div>
          </div>
        </div>
      )}

    </div>
  );
}

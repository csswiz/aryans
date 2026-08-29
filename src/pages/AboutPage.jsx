import React from 'react';
import { BookOpen, History, Quote, Target, Compass, HeartHandshake, ChevronRight } from 'lucide-react';
import Waves from '../components/effects/Waves';

export default function AboutPage({ onOpenApplyModal }) {
  return (
    <div className="relative min-h-screen py-12 sm:py-16 animate-fadeIn overflow-hidden bg-[#FAF9F6]">
      
      {/* REACT BITS WAVES BACKGROUND */}
      <Waves
        lineColor="rgba(117, 20, 33, 0.15)"
        backgroundColor="transparent"
        waveSpeedX={0.014}
        waveSpeedY={0.006}
        waveAmpX={36}
        waveAmpY={18}
        friction={0.92}
        tension={0.005}
        maxCursorMove={110}
        xGap={14}
        yGap={34}
        className="z-0 pointer-events-none opacity-90"
      />

      {/* CONTENT LAYER */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Page Banner / Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md text-royal-900 border border-royal-200/90 text-xs font-extrabold uppercase tracking-wider shadow-sm">
            <BookOpen size={14} className="text-royal-800" />
            <span>The Aryans' School, Jhansi</span>
          </div>
          
          <h1 className="font-cinzel text-3xl sm:text-5xl lg:text-6xl font-bold text-royal-950 tracking-tight drop-shadow-xs">
            ABOUT US
          </h1>
          
          <p className="text-stone-700 text-sm sm:text-base max-w-xl mx-auto font-medium">
            Discover our founding legacy, core Indian values, and forward-looking educational philosophy.
          </p>

          <div className="w-20 h-1.5 bg-gold-500 mx-auto rounded-full shadow-xs"></div>
        </div>

        {/* 1. ABOUT US Core Statements with Glassmorphism Cards */}
        <div className="space-y-6">
          <div className="bg-white/92 backdrop-blur-md p-8 sm:p-10 rounded-3xl border border-stone-200 shadow-md relative overflow-hidden">
            <div className="absolute top-0 left-0 w-2.5 h-full bg-royal-800"></div>
            <p className="text-base sm:text-xl text-stone-900 leading-relaxed font-normal">
              The Aryans’ School is an English medium school, affiliated to CBSE board, in the heart of Jhansi, Uttar Pradesh. We adopt play-way techniques of teaching even the most complicated concepts. We are proud of our strong inclination towards core Indian values.
            </p>
          </div>

          <div className="bg-royal-950/95 backdrop-blur-md text-white p-8 sm:p-10 rounded-3xl border-2 border-gold-500/50 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-2.5 h-full bg-gold-400"></div>
            <div className="flex items-start gap-4">
              <HeartHandshake size={32} className="text-gold-400 shrink-0 mt-1" />
              <p className="text-base sm:text-xl text-stone-100 leading-relaxed font-light">
                We believe that education is not a business. It is a very noble cause and we are an institution strongly motivated towards doing our bit for it. The school follows the motto of <strong className="text-gold-300 font-bold">“giving back to the society”</strong> by producing righteous and responsible citizens.
              </p>
            </div>
          </div>
        </div>

        {/* 2. BRIEF HISTORY */}
        <div className="pt-6 space-y-6">
          <div className="flex items-center gap-3 border-b-2 border-royal-800/20 pb-3">
            <History size={26} className="text-royal-800" />
            <h2 className="font-cinzel text-2xl sm:text-3xl font-bold text-royal-950">
              BRIEF HISTORY
            </h2>
          </div>

          <div className="space-y-5 text-base sm:text-lg text-stone-800 leading-relaxed">
            <div className="p-6 sm:p-8 bg-white/90 backdrop-blur-md rounded-2xl border border-stone-200/90 shadow-sm">
              <p>
                The Aryans’ School was established formally in the year <strong className="text-royal-900 font-extrabold">2011</strong>. The foundation of this institution lies in the idea of <strong className="text-stone-900 font-bold">“Giving back to the society”</strong> and <strong className="text-royal-900 font-bold">“Seva Parmodharma”</strong> (Service is the highest form of dharma).
              </p>
            </div>

            <div className="p-6 sm:p-8 bg-white/85 backdrop-blur-sm rounded-2xl border border-stone-200/80 shadow-xs space-y-4">
              <p>
                Since its inception the institution, through its super dedicated & passionate management and its team of highly qualified and hardworking teachers, has been working to produce righteous and upright global citizens.
              </p>

              <p>
                The school recognises the challenges that we face at the local, regional, national and even at global levels like environmental pollution, divisions in society, gender discrimination etc. Thus, it not only focuses on academic development but also, and more importantly, on the overall personality development of the child so that he/she may become a more aware and considerate person.
              </p>

              <p>
                The school also recognises the rich cultural heritage of our beloved country and has its values deep rooted in the Indian culture. Be it the ideals of <strong className="text-royal-950 font-bold">“Vasudeva Kutumbkam”</strong> (the entire world is one family) or <strong className="text-royal-950 font-bold">“Aa no bhadra kratvo yantu vishrwat”</strong> (let noble thoughts come from all directions), the institution aims to spread the true Indian culture of acceptance and tolerance.
              </p>
            </div>

            {/* Sanskrit Shloka Card */}
            <div className="my-10 bg-gradient-to-r from-royal-950 via-royal-900 to-royal-950 text-white p-8 sm:p-12 rounded-3xl border-2 border-gold-400 shadow-2xl relative overflow-hidden">
              <Quote size={48} className="text-gold-500/20 absolute top-4 right-4 pointer-events-none" />
              
              <div className="text-center space-y-5 max-w-3xl mx-auto">
                <p className="font-serif italic text-lg sm:text-2xl text-gold-300 tracking-wide leading-relaxed">
                  “Kartavyam Aacharam Kaamam Akartavyam Anacharam<br />
                  Tishthati Prakritacharo Ya Sah Arya Iti”
                </p>
                
                <div className="w-24 h-0.5 bg-gold-400 mx-auto opacity-70"></div>

                <p className="text-xs sm:text-base text-stone-200 leading-relaxed font-light">
                  A person who does things which are to be done and who doesn’t do the things which are not to be done; a person who stands by tradition is called <strong className="text-gold-300 font-semibold">“Arya”</strong>. In short, he/she who follows the path of dharma (the right action) is <strong className="text-gold-300 font-semibold">“Aryan”</strong>.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 3. MISSION & VISION */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
          
          {/* Mission Card */}
          <div className="bg-white/92 backdrop-blur-md p-8 sm:p-10 rounded-3xl border-2 border-royal-800/30 shadow-md flex flex-col justify-between space-y-5">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-royal-100 text-royal-800 flex items-center justify-center shadow-xs">
                <Target size={24} />
              </div>
              <h3 className="font-cinzel text-2xl font-bold text-royal-950">
                Mission
              </h3>
              <p className="text-base text-stone-700 leading-relaxed font-normal">
                Helping children to achieve their true potential and to make them responsible, considerate, and compassionate human beings.
              </p>
            </div>
            <div className="w-12 h-1.5 bg-royal-800 rounded-full"></div>
          </div>

          {/* Vision Card */}
          <div className="bg-white/92 backdrop-blur-md p-8 sm:p-10 rounded-3xl border-2 border-gold-500/50 shadow-md flex flex-col justify-between space-y-5">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-gold-100 text-gold-900 flex items-center justify-center shadow-xs">
                <Compass size={24} />
              </div>
              <h3 className="font-cinzel text-2xl font-bold text-royal-950">
                Vision
              </h3>
              <p className="text-base text-stone-700 leading-relaxed font-normal">
                To be an internationally recognised educational institution.
              </p>
            </div>
            <div className="w-12 h-1.5 bg-gold-500 rounded-full"></div>
          </div>

        </div>

        {/* Apply Callout Footer */}
        <div className="pt-8 bg-gradient-to-r from-royal-900 to-royal-950 text-white p-8 sm:p-10 rounded-3xl border-2 border-gold-500/40 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left shadow-2xl">
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
            className="btn-gold text-xs sm:text-sm py-3.5 px-7 font-bold uppercase tracking-wider shrink-0 shadow-lg"
          >
            <span>APPLY FOR ADMISSION</span>
            <ChevronRight size={16} />
          </button>
        </div>

      </div>
    </div>
  );
}

import React from 'react';
import { Camera, Sparkles, Move } from 'lucide-react';
import DriftWall from '../components/gallery/DriftWall';

export default function GalleryPage({ onOpenApplyModal }) {
  const galleryItems = [
    { image: '/gallery/400M-race-division-A-12.png' },
    { image: '/assets/library.jpg' },
    { image: '/gallery/basketball-match-31.png' },
    { image: '/gallery/Swach-bharat-mission.png' },
    { image: '/assets/primary-classroom.jpg' },
    { image: '/gallery/Copy-of-Personal-and-Professional-Growth-Workshop-for-Teachers.png' },
    { image: '/gallery/Reunion-Party.png' },
    { image: '/assets/students-hallway.jpg' },
    { image: '/gallery/400M-race-division-A-2.png' },
    { image: '/gallery/400M-race-division-A-5.png' },
    { image: '/gallery/400M-race-division-A-9.png' },
    { image: '/assets/footer.jpg' }
  ];

  return (
    <div className="relative w-full min-h-[calc(100vh-70px)] bg-royal-950 text-white overflow-hidden animate-fadeIn flex flex-col justify-between">
      
      {/* 1. TOP FLOATING HEADER & CONTROLS OVERLAY */}
      <div className="relative z-20 pt-8 pb-4 px-4 sm:px-8 max-w-7xl mx-auto w-full text-center pointer-events-none">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/60 backdrop-blur-md text-gold-300 border border-gold-500/40 text-xs font-bold uppercase tracking-wider mb-2 shadow-lg">
          <Camera size={14} className="text-gold-400" />
          <span>Interactive 3D Canvas</span>
        </div>

        <h1 className="font-cinzel text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white drop-shadow-lg">
          CAMPUS GALLERY
        </h1>
        
        <p className="text-stone-300 text-xs sm:text-sm max-w-xl mx-auto mt-2 drop-shadow-md">
          Move your cursor or touch to pan through our infinite 3D gallery in real-time.
        </p>

        <div className="mt-3 inline-flex items-center gap-2 bg-royal-900/80 backdrop-blur-md px-3.5 py-1 rounded-full border border-gold-500/30 text-[11px] text-gold-200">
          <Move size={12} className="animate-pulse text-gold-400" />
          <span>Tilt • Parallax • Hover to lift</span>
        </div>
      </div>

      {/* 2. FULL-PAGE EDGE-TO-EDGE DRIFT WALL CANVAS */}
      <div className="absolute inset-0 w-full h-full z-10">
        <DriftWall
          items={galleryItems}
          columns={7}
          tileWidth={230}
          tileHeight={155}
          gap={20}
          radius={16}
          tilt={12}
          turn={-10}
          perspective={1000}
          depth={90}
          speed={36}
          direction="up"
          variance={0.45}
          parallax={0.7}
          lift={72}
          fade={0.4}
          dim={0.65}
          overlayColor="#3D070E"
          pauseOnHover={false}
          className="w-full h-full"
        />
      </div>

      {/* 3. BOTTOM FLOATING ACTION BAR OVERLAY */}
      <div className="relative z-20 pb-8 pt-4 px-4 max-w-4xl mx-auto w-full flex flex-col sm:flex-row items-center justify-between gap-4 pointer-events-none">
        <div className="bg-black/70 backdrop-blur-md px-5 py-2.5 rounded-2xl border border-gold-500/40 text-left pointer-events-auto shadow-xl">
          <p className="text-xs font-bold text-white uppercase tracking-wider font-cinzel">
            The Aryans' School, Jhansi
          </p>
          <p className="text-[11px] text-gold-300">
            CBSE Affiliated • English Medium • Estd 2011
          </p>
        </div>

        <button
          onClick={onOpenApplyModal}
          className="pointer-events-auto btn-gold text-xs sm:text-sm py-3 px-6 font-bold uppercase tracking-wider flex items-center gap-2 shadow-2xl"
        >
          <Sparkles size={16} />
          <span>Apply for Admission</span>
        </button>
      </div>

    </div>
  );
}

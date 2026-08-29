import React, { useState } from 'react';
import { MapPin, Compass, Building, CheckCircle2, Eye } from 'lucide-react';
import { campusZones } from '../../data/facilitiesData';

export default function InteractiveCampusMap({ onOpenTourModal }) {
  const [activeZone, setActiveZone] = useState(campusZones[0]);

  return (
    <section id="campus-map" className="py-20 bg-white relative border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-royal-100 text-royal-900 border border-royal-200 text-xs font-bold uppercase tracking-wider mb-3">
            <Compass size={14} className="text-royal-800" />
            <span>Virtual Campus Masterplan</span>
          </div>
          <h2 className="font-cinzel text-3xl sm:text-4xl font-bold text-royal-950 tracking-tight">
            Explore Our 12-Acre Green Campus
          </h2>
          <p className="text-stone-600 text-sm sm:text-base mt-2">
            Click on the interactive hotspots below to inspect facilities across our purpose-built academic campus.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-royal-800 to-gold-500 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Map Container & Zone Inspector Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left: Interactive Campus Blueprint Diagram (7 cols) */}
          <div className="lg:col-span-7 bg-royal-950 rounded-3xl p-6 sm:p-8 relative overflow-hidden shadow-2xl border-2 border-gold-500/40 flex flex-col justify-between min-h-[460px]">
            
            {/* Blueprint Grid Lines */}
            <div className="absolute inset-0 bg-[radial-gradient(#C49E31_1px,transparent_1px)] [background-size:24px_24px] opacity-15 pointer-events-none"></div>

            {/* Top Bar Header */}
            <div className="relative z-10 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-gold-400 animate-ping"></div>
                <span className="text-xs font-bold uppercase tracking-widest text-gold-300">
                  Interactive Campus Hotspots
                </span>
              </div>
              <span className="text-[11px] font-mono text-stone-400 bg-royal-900 px-2.5 py-1 rounded border border-royal-800">
                12 ACRE MASTERPLAN
              </span>
            </div>

            {/* Simulated Campus Layout SVG & Hotspot Nodes */}
            <div className="relative z-10 my-8 h-72 sm:h-80 w-full rounded-2xl bg-royal-900/60 border border-royal-800/80 p-4">
              
              {/* Campus architectural graphic tracks */}
              <svg className="absolute inset-0 w-full h-full stroke-gold-500/20 fill-none pointer-events-none">
                <rect x="10%" y="15%" width="80%" height="70%" rx="16" strokeDasharray="4 4" />
                <path d="M 20% 50% Q 50% 20% 80% 50% T 50% 80% Z" strokeDasharray="2 4" />
              </svg>

              {/* Hotspot Markers */}
              {campusZones.map((zone, idx) => {
                const isSelected = activeZone.id === zone.id;
                return (
                  <button
                    key={zone.id}
                    onClick={() => setActiveZone(zone)}
                    style={{ left: zone.x, top: zone.y }}
                    className={`absolute -translate-x-1/2 -translate-y-1/2 group transition-all duration-300 ${
                      isSelected ? 'scale-125 z-30' : 'hover:scale-110 z-20'
                    }`}
                    title={zone.name}
                  >
                    <span className="relative flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center">
                      <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${
                        isSelected ? 'bg-gold-400' : 'bg-royal-500'
                      }`}></span>
                      <span className={`relative inline-flex rounded-full h-8 w-8 sm:h-9 sm:w-9 items-center justify-center font-bold text-xs shadow-lg border-2 ${
                        isSelected 
                          ? 'bg-gold-400 text-royal-950 border-white ring-4 ring-gold-400/30' 
                          : 'bg-royal-800 text-gold-300 border-gold-400/60'
                      }`}>
                        0{idx + 1}
                      </span>
                    </span>
                    <span className="absolute top-full left-1/2 -translate-x-1/2 mt-1 px-2 py-0.5 rounded bg-royal-950/95 text-[10px] font-bold text-white whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none border border-gold-500/30 shadow-md">
                      {zone.name}
                    </span>
                  </button>
                );
              })}

            </div>

            {/* Bottom Status bar */}
            <div className="relative z-10 flex items-center justify-between text-xs text-stone-300 pt-2 border-t border-royal-900">
              <span>Select any numbered marker to inspect zone specs</span>
              <button 
                onClick={onOpenTourModal}
                className="text-gold-300 hover:text-white font-bold underline text-xs"
              >
                Schedule On-Campus Guided Tour →
              </button>
            </div>

          </div>

          {/* Right: Zone Detail Panel (5 cols) */}
          <div className="lg:col-span-5 card-prestige p-6 sm:p-8 bg-ivory-50 border border-stone-200 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="badge-royal">
                  {activeZone.type} Facility
                </span>
                <span className="text-xs font-mono font-bold text-royal-800 bg-white px-2.5 py-1 rounded border border-stone-200">
                  Zone 0{campusZones.findIndex(z => z.id === activeZone.id) + 1}
                </span>
              </div>

              <h3 className="font-cinzel text-2xl font-bold text-royal-950">
                {activeZone.name}
              </h3>

              <p className="text-stone-700 text-sm leading-relaxed font-light">
                {activeZone.desc}
              </p>

              <div className="bg-white p-4 rounded-xl border border-stone-200 shadow-xs">
                <h5 className="text-xs font-bold uppercase tracking-wider text-royal-900 mb-1">
                  Architectural Specifications
                </h5>
                <p className="text-xs text-stone-600 font-medium">
                  {activeZone.specs}
                </p>
              </div>

              <div className="space-y-2 pt-2">
                <div className="flex items-center gap-2 text-xs text-stone-700">
                  <CheckCircle2 size={15} className="text-royal-800" />
                  <span>24x7 HD CCTV Surveillance & Secure Access Control</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-stone-700">
                  <CheckCircle2 size={15} className="text-royal-800" />
                  <span>Centrally Climate-Regulated & Acoustically Enhanced</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-stone-700">
                  <CheckCircle2 size={15} className="text-royal-800" />
                  <span>Full Accessibility with Barrier-Free Ramps & Elevators</span>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-stone-200 mt-6 flex flex-col sm:flex-row gap-3">
              <button
                onClick={onOpenTourModal}
                className="btn-royal text-xs py-3 w-full"
              >
                <span>Book a Guided In-Person Walkthrough</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

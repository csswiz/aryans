import React, { useState } from 'react';
import { Building2, Eye, Sparkles, Check, ChevronRight, Layers } from 'lucide-react';
import { facilitiesList } from '../../data/facilitiesData';

export default function CampusLifeShowcase({ onOpenLightbox, onOpenTourModal }) {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Academic & Research', 'Early Learning', 'Campus Architecture', 'STEM & Tech', 'Athletics', 'Arts & Culture'];

  const filteredFacilities = selectedCategory === 'All'
    ? facilitiesList
    : facilitiesList.filter(f => f.category === selectedCategory);

  return (
    <section id="campus-life" className="py-20 bg-ivory-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-royal-100 text-royal-900 border border-royal-200 text-xs font-bold uppercase tracking-wider mb-3">
              <Building2 size={14} className="text-royal-800" />
              <span>World-Class Infrastructure</span>
            </div>
            <h2 className="font-cinzel text-3xl sm:text-4xl font-bold text-royal-950 tracking-tight">
              An Ecosystem Built for Discovery
            </h2>
            <p className="text-stone-600 text-sm sm:text-base mt-2 max-w-xl">
              12 acres of purpose-designed learning studios, athletic complexes, STEM maker hubs, and tranquil research archives.
            </p>
          </div>

          <button
            onClick={onOpenTourModal}
            className="btn-royal text-xs sm:text-sm py-3 px-6 shrink-0 self-start lg:self-auto"
          >
            <span>Book Campus Tour</span>
            <ChevronRight size={16} />
          </button>
        </div>

        {/* Filter Categories */}
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  isActive
                    ? 'bg-royal-900 text-white shadow-md border border-royal-950'
                    : 'bg-white text-stone-700 border border-stone-200 hover:bg-royal-50 hover:text-royal-900'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Facilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredFacilities.map((facility) => (
            <div
              key={facility.id}
              className="card-prestige overflow-hidden group flex flex-col justify-between bg-white border border-stone-200/90 hover:-translate-y-1.5 transition-all duration-300"
            >
              <div>
                {/* Image Container with Zoom & Lightbox Trigger */}
                <div 
                  onClick={() => onOpenLightbox(facility.image, facility.title, facility.description)}
                  className="relative aspect-[16/10] overflow-hidden cursor-pointer bg-stone-100"
                >
                  <img
                    src={facility.image}
                    alt={facility.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-royal-950/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="flex items-center gap-1.5 text-xs font-bold text-white bg-royal-950/80 px-3.5 py-1.5 rounded-full backdrop-blur-xs border border-gold-400/50 shadow-lg">
                      <Eye size={14} className="text-gold-300" />
                      <span>View Gallery</span>
                    </span>
                  </div>

                  {/* Top Badge */}
                  <span className="absolute top-3 left-3 text-[10px] font-bold uppercase tracking-wider bg-royal-950/90 text-gold-300 px-2.5 py-1 rounded-md border border-gold-500/40 backdrop-blur-xs">
                    {facility.badge}
                  </span>
                </div>

                {/* Content Details */}
                <div className="p-5 space-y-3">
                  <span className="text-[11px] font-bold text-stone-400 uppercase tracking-widest block">
                    {facility.category}
                  </span>
                  <h3 className="font-cinzel text-lg font-bold text-royal-950 group-hover:text-royal-800 transition-colors">
                    {facility.title}
                  </h3>
                  <p className="text-xs text-stone-600 leading-relaxed font-light">
                    {facility.description}
                  </p>

                  {/* Bullet Highlights */}
                  <div className="pt-2 space-y-1.5 border-t border-stone-100">
                    {facility.features.map((feat, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-stone-700">
                        <Check size={13} className="text-royal-700 shrink-0" />
                        <span className="font-medium">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer Metric */}
              <div className="px-5 py-3 bg-ivory-100/70 border-t border-stone-200 text-[11px] font-semibold text-royal-900 flex items-center justify-between">
                <span>{facility.stats}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

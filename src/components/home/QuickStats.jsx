import React from 'react';
import { institutionStats } from '../../data/achievementsData';

export default function QuickStats() {
  return (
    <section className="bg-gradient-to-r from-royal-950 via-royal-900 to-royal-950 py-10 border-b border-royal-800 text-white relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 lg:gap-4 text-center divide-y md:divide-y-0 md:divide-x divide-royal-800/80">
          {institutionStats.map((stat, idx) => (
            <div key={idx} className="pt-4 md:pt-0 px-2 flex flex-col items-center justify-center space-y-1">
              <span className="font-cinzel text-2xl sm:text-3xl lg:text-4xl font-bold text-gold-shimmer tracking-tight">
                {stat.value}
              </span>
              <h4 className="text-xs sm:text-sm font-bold text-white uppercase tracking-wider">
                {stat.label}
              </h4>
              <p className="text-[11px] text-stone-400 font-light">
                {stat.sub}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

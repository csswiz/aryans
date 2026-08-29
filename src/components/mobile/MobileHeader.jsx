import React from 'react';
import { Phone, Navigation, Sparkles, MapPin } from 'lucide-react';

export default function MobileHeader({ onOpenApply, onNavigate }) {
  const schoolContact = {
    phone: "+91 81123 61361",
    phoneHref: "tel:+918112361361",
    mapsUrl: "https://maps.app.goo.gl/Dv1o4KT7rBDw3zMT9"
  };

  return (
    <div className="md:hidden sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-stone-200 shadow-xs">
      {/* Top Brand & Action Bar */}
      <div className="px-4 py-2.5 flex items-center justify-between">
        
        {/* Brand */}
        <div 
          onClick={() => onNavigate('Home')}
          className="flex items-center gap-2 cursor-pointer active:scale-95 transition-transform"
        >
          <img 
            src="/logo.png" 
            alt="The Aryans' School" 
            className="h-9 w-auto max-w-[200px] object-contain drop-shadow-xs" 
          />
          <span className="text-[9px] uppercase font-bold tracking-widest bg-gold-100 text-gold-900 px-1.5 py-0.5 rounded border border-gold-300">
            JHANSI
          </span>
        </div>

        {/* Fast Action Shortcuts */}
        <div className="flex items-center gap-2">
          <a
            href={schoolContact.phoneHref}
            className="w-8 h-8 rounded-full bg-royal-50 text-royal-800 border border-royal-200 flex items-center justify-center shadow-xs active:bg-royal-800 active:text-white transition-colors"
            title="Call School"
          >
            <Phone size={14} />
          </a>

          <a
            href={schoolContact.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 rounded-full bg-gold-50 text-gold-800 border border-gold-300 flex items-center justify-center shadow-xs active:bg-gold-400 active:text-stone-900 transition-colors"
            title="Directions"
          >
            <Navigation size={14} />
          </a>
        </div>

      </div>

      {/* Mini Ticker */}
      <div className="bg-royal-950 text-gold-200 text-[11px] font-medium px-4 py-1.5 flex items-center justify-between border-t border-royal-900">
        <span className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-gold-400 animate-ping"></span>
          <span>Now is the perfect time! Apply for admission</span>
        </span>
        <button
          onClick={onOpenApply}
          className="text-white font-bold underline uppercase text-[10px] tracking-wider"
        >
          Apply →
        </button>
      </div>
    </div>
  );
}

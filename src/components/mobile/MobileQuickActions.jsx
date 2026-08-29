import React from 'react';
import { Phone, Mail, Navigation, Sparkles } from 'lucide-react';

export default function MobileQuickActions({ onOpenApply }) {
  const schoolContact = {
    phoneHref: "tel:+918112361361",
    emailHref: "mailto:school.aryans1@gmail.com?subject=Admission%20Inquiry%20-%20The%20Aryans'%20School%20Jhansi",
    mapsUrl: "https://maps.app.goo.gl/Dv1o4KT7rBDw3zMT9"
  };

  return (
    <div className="md:hidden px-4 my-6">
      <div className="bg-gradient-to-r from-royal-950 via-royal-900 to-royal-950 p-4 rounded-2xl border border-gold-500/40 shadow-lg text-white">
        <div className="text-center mb-3">
          <span className="text-[10px] uppercase font-bold tracking-widest text-gold-300">
            Quick Parent Helpline • Jhansi
          </span>
        </div>

        <div className="grid grid-cols-4 gap-2">
          {/* Call */}
          <a
            href={schoolContact.phoneHref}
            className="flex flex-col items-center justify-center p-2 rounded-xl bg-royal-900/90 border border-royal-800 text-gold-300 active:bg-royal-800 transition-colors"
          >
            <div className="w-8 h-8 rounded-full bg-royal-800 flex items-center justify-center mb-1 text-gold-400">
              <Phone size={15} />
            </div>
            <span className="text-[10px] font-bold text-white">Call</span>
          </a>

          {/* Email */}
          <a
            href={schoolContact.emailHref}
            className="flex flex-col items-center justify-center p-2 rounded-xl bg-royal-900/90 border border-royal-800 text-gold-300 active:bg-royal-800 transition-colors"
          >
            <div className="w-8 h-8 rounded-full bg-royal-800 flex items-center justify-center mb-1 text-gold-400">
              <Mail size={15} />
            </div>
            <span className="text-[10px] font-bold text-white">Email</span>
          </a>

          {/* Directions */}
          <a
            href={schoolContact.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center p-2 rounded-xl bg-royal-900/90 border border-royal-800 text-gold-300 active:bg-royal-800 transition-colors"
          >
            <div className="w-8 h-8 rounded-full bg-royal-800 flex items-center justify-center mb-1 text-gold-400">
              <Navigation size={15} />
            </div>
            <span className="text-[10px] font-bold text-white">Maps</span>
          </a>

          {/* Apply */}
          <button
            onClick={onOpenApply}
            className="flex flex-col items-center justify-center p-2 rounded-xl bg-gradient-to-tr from-gold-400 to-gold-300 text-stone-900 font-bold active:scale-95 transition-transform shadow-md"
          >
            <div className="w-8 h-8 rounded-full bg-stone-900 text-gold-300 flex items-center justify-center mb-1">
              <Sparkles size={15} />
            </div>
            <span className="text-[10px] font-black uppercase">Apply</span>
          </button>
        </div>
      </div>
    </div>
  );
}

import React, { useState, useEffect } from 'react';
import { Bell, Phone, Mail, UserCheck, ShieldAlert, Sparkles } from 'lucide-react';

export default function TopAlertBar({ onOpenPortal, onOpenApplication }) {
  const alerts = [
    "🎓 Welcome to The Aryans' School, Jhansi — Admissions Open for Session 2026–27",
    "✨ Now is the perfect time! Apply for admission to build a bright future for your child",
    "📚 English Medium • Affiliated to CBSE Board • Core Indian Values & Play-Way Learning"
  ];

  const [currentAlertIndex, setCurrentAlertIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentAlertIndex((prev) => (prev + 1) % alerts.length);
    }, 5500);
    return () => clearInterval(timer);
  }, [alerts.length]);

  return (
    <div className="bg-royal-950 text-ivory-100 text-xs border-b border-royal-900/80 px-4 py-2 transition-all">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2">
        
        {/* Urgent Announcement Ticker */}
        <div className="flex items-center gap-2 overflow-hidden w-full md:w-auto">
          <span className="inline-flex items-center gap-1 bg-royal-800 text-gold-300 font-bold px-2 py-0.5 rounded text-[10px] uppercase tracking-wider shrink-0 animate-pulse">
            <Bell size={11} className="text-gold-300" />
            Live Notice
          </span>
          <p className="truncate text-stone-200 font-medium transition-all duration-500 ease-in-out">
            {alerts[currentAlertIndex]}
          </p>
        </div>

        {/* Institutional Affiliation & Quick Actions */}
        <div className="flex items-center gap-4 shrink-0 font-medium">
          <div className="hidden lg:flex items-center gap-3 text-stone-300 border-r border-royal-800 pr-4">
            <a href="tel:+919876543210" className="flex items-center gap-1.5 hover:text-gold-300 transition-colors">
              <Phone size={12} className="text-gold-400" />
              <span>+91 98765 43210</span>
            </a>
            <a href="mailto:admissions@aryans.edu.in" className="flex items-center gap-1.5 hover:text-gold-300 transition-colors">
              <Mail size={12} className="text-gold-400" />
              <span>admissions@aryans.edu.in</span>
            </a>
          </div>

          <div className="flex items-center gap-3">
            <span className="hidden sm:inline-block text-[11px] text-stone-300">
              CBSE Affil. No: <strong className="text-gold-300 font-semibold">2132984</strong>
            </span>
            <button 
              onClick={onOpenPortal}
              className="flex items-center gap-1 text-gold-300 hover:text-white font-semibold bg-royal-900/80 hover:bg-royal-800 px-2.5 py-1 rounded transition-colors"
            >
              <UserCheck size={12} />
              <span>Parent / Student Portal</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}

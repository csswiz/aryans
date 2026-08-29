import React, { useState, useEffect } from 'react';
import { Search, Menu, X, ChevronDown, GraduationCap, Calendar, Compass, PhoneCall, Sparkles, BookOpen, ShieldCheck, MapPin } from 'lucide-react';

export default function Navbar({ 
  onOpenSearch, 
  onOpenApplication, 
  onOpenFeeCalculator, 
  onOpenTourModal,
  activeSection 
}) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About & Legacy', href: '#about' },
    { name: 'Academics', href: '#academics' },
    { name: 'Admissions', href: '#admissions' },
    { name: 'Campus Life', href: '#campus-life' },
    { name: 'Events & Notices', href: '#notices' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Contact & Visit', href: '#contact' },
  ];

  return (
    <header className={`sticky top-0 z-40 w-full transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-stone-200/80 py-2.5' 
        : 'bg-white border-b border-stone-100 py-3.5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo & Crest */}
          <a href="#" className="flex items-center gap-3.5 group">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-royal-800 to-royal-950 p-1.5 shadow-md flex items-center justify-center border border-gold-400/40 group-hover:scale-105 transition-transform duration-300">
              <img src="/crest-icon.svg" alt="The Aryans' School Crest" className="w-full h-full object-contain drop-shadow" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-cinzel text-xl sm:text-2xl font-bold tracking-tight text-royal-900 leading-none">
                  THE ARYANS'
                </span>
                <span className="text-[10px] uppercase font-bold tracking-widest bg-gold-100 text-gold-800 px-1.5 py-0.5 rounded border border-gold-300">
                  JHANSI
                </span>
              </div>
              <p className="font-sans text-[11px] sm:text-xs font-semibold tracking-wider text-stone-500 uppercase mt-0.5">
                English Medium • CBSE Affiliated
              </p>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3 py-2 text-sm font-semibold text-stone-700 hover:text-royal-800 rounded-lg hover:bg-royal-50/70 transition-all"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-2.5">
            {/* Quick Search Button */}
            <button
              onClick={onOpenSearch}
              title="Search curriculum, circulars, fees (Ctrl+K)"
              className="flex items-center gap-2 px-3 py-2 text-xs font-medium text-stone-600 bg-stone-100/90 hover:bg-stone-200/80 rounded-lg border border-stone-200 transition-colors"
            >
              <Search size={14} className="text-stone-500" />
              <span>Search...</span>
              <kbd className="text-[10px] bg-white border border-stone-300 text-stone-500 px-1.5 py-0.5 rounded shadow-xs font-mono">
                ⌘K
              </kbd>
            </button>

            {/* Book Tour CTA */}
            <button
              onClick={onOpenTourModal}
              className="hidden xl:inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-royal-900 bg-royal-50 hover:bg-royal-100 rounded-lg border border-royal-200 transition-all hover:-translate-y-0.5"
            >
              <Compass size={14} className="text-royal-700" />
              <span>Book Campus Tour</span>
            </button>

            {/* Apply Now Primary Button */}
            <button
              onClick={onOpenApplication}
              className="relative inline-flex items-center justify-center gap-1.5 px-4.5 py-2 text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-royal-800 via-royal-700 to-royal-900 hover:from-royal-900 hover:to-royal-950 rounded-lg shadow-md hover:shadow-royal-glow hover:-translate-y-0.5 transition-all active:translate-y-0 border border-royal-700"
            >
              <Sparkles size={14} className="text-gold-300" />
              <span>Apply for 2026–27</span>
            </button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={onOpenSearch}
              className="p-2 text-stone-600 hover:text-royal-800 rounded-lg hover:bg-stone-100"
              aria-label="Search"
            >
              <Search size={18} />
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-stone-700 hover:text-royal-800 rounded-lg hover:bg-stone-100"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-white border-b border-stone-200 shadow-xl px-4 pt-3 pb-6 space-y-3 animate-fadeIn">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 text-base font-semibold text-stone-800 hover:text-royal-800 hover:bg-royal-50 rounded-lg transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-stone-100 flex flex-col gap-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenTourModal();
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold text-royal-900 bg-royal-50 border border-royal-200 rounded-lg"
            >
              <Compass size={16} />
              <span>Schedule Campus Visit</span>
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenFeeCalculator();
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold text-stone-800 bg-stone-100 border border-stone-200 rounded-lg"
            >
              <GraduationCap size={16} />
              <span>Fee & Tuition Estimator</span>
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenApplication();
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 text-sm font-bold text-white bg-gradient-to-r from-royal-800 to-royal-950 rounded-lg shadow-md"
            >
              <Sparkles size={16} className="text-gold-300" />
              <span>Apply for Admissions 2026–27</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

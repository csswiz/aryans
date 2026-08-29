import React, { useState, useEffect } from 'react';
import { Search, X, BookOpen, GraduationCap, Calendar, FileText, Building2, ArrowRight } from 'lucide-react';
import { academicPrograms } from '../../data/academicsData';
import { facilitiesList } from '../../data/facilitiesData';
import { circularsList } from '../../data/eventsData';

export default function SearchModal({ isOpen, onClose, onSelectAction }) {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
        else onSelectAction('open_search');
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, onSelectAction]);

  if (!isOpen) return null;

  const searchableItems = [
    { type: 'Quick Action', title: 'Apply for Online Admissions 2026–27', action: 'application', icon: GraduationCap },
    { type: 'Quick Action', title: 'Tuition & Transport Fee Estimator', action: 'calculator', icon: GraduationCap },
    { type: 'Quick Action', title: 'Schedule a Guided Campus Tour', action: 'tour', icon: Building2 },
    { type: 'Quick Action', title: 'Parent & Student Portal Login', action: 'portal', icon: GraduationCap },
    ...academicPrograms.map(p => ({
      type: 'Academic Program',
      title: `${p.name} (${p.grades})`,
      action: 'jump_academics',
      icon: BookOpen,
      desc: p.tagline
    })),
    ...facilitiesList.map(f => ({
      type: 'Campus Facility',
      title: f.title,
      action: 'jump_facilities',
      icon: Building2,
      desc: f.category
    })),
    ...circularsList.map(c => ({
      type: 'Notice / Circular',
      title: `${c.title} [Ref: ${c.refNumber}]`,
      action: 'jump_notices',
      icon: FileText,
      desc: c.summary
    }))
  ];

  const filtered = query.trim() === '' 
    ? searchableItems.slice(0, 7)
    : searchableItems.filter(item => 
        item.title.toLowerCase().includes(query.toLowerCase()) || 
        (item.desc && item.desc.toLowerCase().includes(query.toLowerCase())) ||
        item.type.toLowerCase().includes(query.toLowerCase())
      );

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white rounded-2xl shadow-2xl border border-stone-200 w-full max-w-2xl overflow-hidden animate-scaleUp">
        
        {/* Search Input Bar */}
        <div className="relative flex items-center px-4 border-b border-stone-200 bg-ivory-50">
          <Search size={20} className="text-royal-800 shrink-0 mr-3" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search curricula, circulars, fees, facilities, admissions..."
            className="w-full py-4 bg-transparent text-stone-800 placeholder-stone-400 focus:outline-none text-base font-medium"
          />
          <button 
            onClick={onClose}
            className="p-1.5 text-stone-400 hover:text-stone-700 rounded-lg hover:bg-stone-200/60 transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Results List */}
        <div className="max-h-96 overflow-y-auto p-3 divide-y divide-stone-100">
          {filtered.length > 0 ? (
            filtered.map((item, index) => {
              const IconComp = item.icon;
              return (
                <button
                  key={index}
                  onClick={() => {
                    onSelectAction(item.action);
                    onClose();
                  }}
                  className="w-full text-left p-3 rounded-xl hover:bg-royal-50/80 transition-all flex items-start justify-between group"
                >
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-royal-100/70 text-royal-800 group-hover:bg-royal-800 group-hover:text-gold-300 transition-colors shrink-0 mt-0.5">
                      <IconComp size={16} />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold uppercase tracking-wider text-gold-700 bg-gold-50 px-2 py-0.5 rounded border border-gold-200">
                          {item.type}
                        </span>
                        <h4 className="text-sm font-semibold text-stone-900 group-hover:text-royal-900">
                          {item.title}
                        </h4>
                      </div>
                      {item.desc && (
                        <p className="text-xs text-stone-500 mt-1 line-clamp-1">
                          {item.desc}
                        </p>
                      )}
                    </div>
                  </div>
                  <ArrowRight size={16} className="text-stone-400 group-hover:text-royal-800 group-hover:translate-x-1 transition-all shrink-0 ml-2 mt-1" />
                </button>
              );
            })
          ) : (
            <div className="py-10 text-center text-stone-500">
              <p className="text-sm font-medium">No direct matches found for "{query}"</p>
              <p className="text-xs text-stone-400 mt-1">Try searching for "fee", "robotics", "admissions", or "syllabus"</p>
            </div>
          )}
        </div>

        {/* Footer shortcuts */}
        <div className="bg-stone-50 px-4 py-2.5 border-t border-stone-200 text-xs text-stone-500 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span>Navigate with click</span>
            <span>•</span>
            <span><kbd className="font-mono bg-white border border-stone-300 px-1.5 py-0.5 rounded">ESC</kbd> to close</span>
          </div>
          <span className="text-gold-700 font-semibold">The Aryans Institutional Navigator</span>
        </div>

      </div>
    </div>
  );
}

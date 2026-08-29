import React, { useState } from 'react';
import { Bell, Calendar, FileText, Download, Search, AlertCircle, Clock, MapPin, CheckCircle, ExternalLink } from 'lucide-react';
import { circularsList, academicEvents } from '../../data/eventsData';

export default function NoticeBoard() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeView, setActiveView] = useState('circulars'); // 'circulars' or 'events'

  const categories = ['All', 'Admissions', 'Examinations', 'Competitions', 'General', 'Transport'];

  const filteredCirculars = circularsList.filter(c => {
    const matchesCat = selectedCategory === 'All' || c.category === selectedCategory;
    const matchesSearch = c.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          c.refNumber.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  const handleDownloadPDF = (title, refNum) => {
    alert(`Downloading official circular: "${title}" [Ref: ${refNum}].\nIn PDF Format.`);
  };

  const handleAddToCalendar = (eventTitle, date) => {
    alert(`Added "${eventTitle}" on ${date} to your Academic Calendar (.ics generated).`);
  };

  return (
    <section id="notices" className="py-20 bg-white relative border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-royal-100 text-royal-900 border border-royal-200 text-xs font-bold uppercase tracking-wider mb-3">
              <Bell size={14} className="text-royal-800" />
              <span>Official Institutional Dispatches</span>
            </div>
            <h2 className="font-cinzel text-3xl sm:text-4xl font-bold text-royal-950 tracking-tight">
              Notice Board & Academic Calendar
            </h2>
            <p className="text-stone-600 text-sm sm:text-base mt-2 max-w-xl">
              Stay informed with verified school circulars, examination date sheets, and upcoming campus events.
            </p>
          </div>

          {/* View Toggle Tabs */}
          <div className="flex p-1.5 bg-ivory-100 rounded-xl border border-stone-200 self-start lg:self-auto">
            <button
              onClick={() => setActiveView('circulars')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-bold transition-all ${
                activeView === 'circulars'
                  ? 'bg-royal-900 text-white shadow-md'
                  : 'text-stone-700 hover:text-royal-900'
              }`}
            >
              <FileText size={15} />
              <span>Official Circulars ({circularsList.length})</span>
            </button>

            <button
              onClick={() => setActiveView('events')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-bold transition-all ${
                activeView === 'events'
                  ? 'bg-royal-900 text-white shadow-md'
                  : 'text-stone-700 hover:text-royal-900'
              }`}
            >
              <Calendar size={15} />
              <span>Events Calendar ({academicEvents.length})</span>
            </button>
          </div>
        </div>

        {/* View 1: Circulars Notice Board */}
        {activeView === 'circulars' && (
          <div className="space-y-6">
            
            {/* Search & Category Filter */}
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-between bg-ivory-50 p-4 rounded-2xl border border-stone-200">
              {/* Category Pills */}
              <div className="flex flex-wrap gap-1.5 w-full sm:w-auto">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                      selectedCategory === cat
                        ? 'bg-royal-800 text-white'
                        : 'bg-white text-stone-600 border border-stone-200 hover:bg-stone-100'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* Search Bar */}
              <div className="relative w-full sm:w-72">
                <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-400" />
                <input
                  type="text"
                  placeholder="Search circulars by title..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-3 py-2 text-xs rounded-lg bg-white border border-stone-300 focus:outline-none focus:border-royal-800"
                />
              </div>
            </div>

            {/* Circulars List */}
            <div className="divide-y divide-stone-200 bg-white rounded-2xl border border-stone-200 shadow-xs overflow-hidden">
              {filteredCirculars.length > 0 ? (
                filteredCirculars.map((circ) => (
                  <div
                    key={circ.id}
                    className="p-5 hover:bg-royal-50/50 transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-4 group"
                  >
                    <div className="space-y-1.5 max-w-3xl">
                      <div className="flex items-center gap-2">
                        {circ.isUrgent && (
                          <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider bg-royal-100 text-royal-800 px-2 py-0.5 rounded border border-royal-200">
                            <AlertCircle size={11} />
                            Urgent Notice
                          </span>
                        )}
                        <span className="text-[11px] font-bold text-stone-500 uppercase">
                          {circ.category}
                        </span>
                        <span className="text-stone-300">•</span>
                        <span className="text-xs text-stone-500 font-mono">
                          {circ.refNumber}
                        </span>
                      </div>

                      <h4 className="font-cinzel text-base font-bold text-stone-900 group-hover:text-royal-900 transition-colors">
                        {circ.title}
                      </h4>

                      <p className="text-xs text-stone-600 font-light">
                        {circ.summary}
                      </p>

                      <p className="text-[11px] text-stone-400 pt-0.5">
                        Published on {circ.date} • Verified Institutional Dispatch
                      </p>
                    </div>

                    <div className="shrink-0 flex sm:flex-col items-end justify-between sm:justify-center gap-2 border-t sm:border-t-0 pt-3 sm:pt-0 border-stone-100">
                      <span className="text-[11px] font-mono text-stone-400">
                        {circ.fileSize} PDF
                      </span>
                      <button
                        onClick={() => handleDownloadPDF(circ.title, circ.refNumber)}
                        className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-bold text-royal-900 bg-royal-100 hover:bg-royal-200 rounded-lg border border-royal-300 transition-all hover:shadow-xs"
                      >
                        <Download size={13} />
                        <span>Download PDF</span>
                      </button>
                    </div>
                  </div>
                ))
              ) : (
                <div className="py-12 text-center text-stone-500">
                  <p className="text-sm font-medium">No circulars matching your search query.</p>
                </div>
              )}
            </div>

          </div>
        )}

        {/* View 2: Events Calendar */}
        {activeView === 'events' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {academicEvents.map((evt) => (
              <div
                key={evt.id}
                className="card-prestige p-6 bg-white border border-stone-200 flex flex-col justify-between group hover:-translate-y-1 transition-all"
              >
                <div>
                  {/* Event Date Block */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-14 h-14 rounded-2xl bg-royal-900 text-white flex flex-col items-center justify-center shadow-md border-2 border-gold-400">
                        <span className="font-cinzel text-lg font-bold leading-none">{evt.day}</span>
                        <span className="text-[10px] uppercase font-bold tracking-widest text-gold-300">{evt.month}</span>
                      </div>
                      <div>
                        <span className="badge-royal text-[10px]">
                          {evt.category}
                        </span>
                        <h4 className="text-xs font-semibold text-stone-500 mt-1">
                          {evt.date}
                        </h4>
                      </div>
                    </div>

                    <span className="text-[10px] font-bold uppercase tracking-wider text-gold-800 bg-gold-50 px-2 py-0.5 rounded border border-gold-200">
                      {evt.badge}
                    </span>
                  </div>

                  <h3 className="font-cinzel text-base font-bold text-royal-950 mb-2 group-hover:text-royal-800 transition-colors">
                    {evt.title}
                  </h3>

                  <p className="text-xs text-stone-600 leading-relaxed font-light mb-4">
                    {evt.description}
                  </p>

                  <div className="space-y-1 text-xs text-stone-500 border-t border-stone-100 pt-3">
                    <div className="flex items-center gap-2">
                      <Clock size={13} className="text-royal-700 shrink-0" />
                      <span>{evt.time}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin size={13} className="text-royal-700 shrink-0" />
                      <span>{evt.venue}</span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-stone-100">
                  <button
                    onClick={() => handleAddToCalendar(evt.title, evt.date)}
                    className="w-full flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-semibold text-royal-800 bg-royal-50 hover:bg-royal-100 rounded-lg transition-colors border border-royal-200"
                  >
                    <Calendar size={13} />
                    <span>Add to Calendar (.ics)</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
}

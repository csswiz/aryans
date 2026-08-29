import React from 'react';
import { X, Sparkles, CheckCircle2, Mail, Phone, MapPin } from 'lucide-react';

export default function MobileBottomSheet({ 
  isOpen, 
  onClose, 
  formData, 
  setFormData, 
  onSubmit, 
  isSubmitted 
}) {
  if (!isOpen) return null;

  const schoolContact = {
    email: "school.aryans1@gmail.com"
  };

  return (
    <div className="md:hidden fixed inset-0 z-50 flex flex-col justify-end bg-black/75 backdrop-blur-xs animate-fadeIn">
      
      {/* Background click to close */}
      <div className="flex-1" onClick={onClose}></div>

      {/* Bottom Sheet Modal Container */}
      <div className="bg-white rounded-t-3xl shadow-2xl border-t-4 border-gold-500 max-h-[85vh] overflow-y-auto animate-slideUp flex flex-col">
        
        {/* Swipe Handle & Header */}
        <div className="sticky top-0 bg-royal-950 text-white p-4 shrink-0 flex items-center justify-between border-b border-royal-800">
          <div className="flex items-center gap-2.5">
            <img src="/logo.png" alt="The Aryans' School" className="h-8 w-auto object-contain brightness-0 invert" />
            <div>
              <span className="text-[9px] uppercase font-bold text-gold-300 tracking-wider block">
                Jhansi • Estd 2011
              </span>
              <h3 className="font-cinzel text-sm font-bold text-white">
                Apply for Admission
              </h3>
            </div>
          </div>

          <button 
            onClick={onClose}
            className="p-1.5 text-stone-400 hover:text-white rounded-full bg-royal-900 transition-colors"
          >
            <X size={18} />
          </button>
        </div>

        {/* Sheet Content */}
        <div className="p-5 pb-8">
          {isSubmitted ? (
            <div className="text-center py-6 space-y-4">
              <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto shadow-md">
                <CheckCircle2 size={32} />
              </div>

              <h4 className="font-cinzel text-lg font-bold text-royal-950">
                Application Email Prepared!
              </h4>

              <p className="text-xs text-stone-600 max-w-xs mx-auto">
                Your admission application was prepared and dispatched to <strong>{schoolContact.email}</strong>.
              </p>

              <button
                onClick={onClose}
                className="w-full btn-royal text-xs py-3 font-bold uppercase tracking-wider mt-3"
              >
                Done
              </button>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="space-y-3.5">
              <p className="text-xs text-stone-600 font-medium bg-ivory-100 p-2.5 rounded-xl border border-stone-200">
                ✨ Now is the perfect time! Submit this form to email your details directly to the school desk.
              </p>

              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-stone-700 mb-1">
                  Parent / Guardian Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Ramesh Sharma"
                  value={formData.parentName}
                  onChange={(e) => setFormData({...formData, parentName: e.target.value})}
                  className="w-full text-xs px-3 py-2.5 rounded-xl border border-stone-300 focus:outline-none focus:border-royal-800 bg-stone-50/50"
                />
              </div>

              <div className="grid grid-cols-2 gap-2.5">
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-stone-700 mb-1">
                    Student Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Child's name"
                    value={formData.studentName}
                    onChange={(e) => setFormData({...formData, studentName: e.target.value})}
                    className="w-full text-xs px-3 py-2.5 rounded-xl border border-stone-300 focus:outline-none focus:border-royal-800 bg-stone-50/50"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-stone-700 mb-1">
                    Phone *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 81123 61361"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full text-xs px-3 py-2.5 rounded-xl border border-stone-300 focus:outline-none focus:border-royal-800 bg-stone-50/50"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2.5">
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-stone-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="email@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full text-xs px-3 py-2.5 rounded-xl border border-stone-300 focus:outline-none focus:border-royal-800 bg-stone-50/50"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-stone-700 mb-1">
                    Grade
                  </label>
                  <select
                    value={formData.grade}
                    onChange={(e) => setFormData({...formData, grade: e.target.value})}
                    className="w-full text-xs px-3 py-2.5 rounded-xl border border-stone-300 focus:outline-none focus:border-royal-800 bg-stone-50/50"
                  >
                    <option>Nursery / Play-Way</option>
                    <option>LKG / UKG</option>
                    <option>Primary Grades</option>
                    <option>Middle Grades</option>
                    <option>Secondary Grades</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-stone-700 mb-1">
                  Message / Queries
                </label>
                <textarea
                  rows="2"
                  placeholder="Questions for admissions desk..."
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full text-xs px-3 py-2 rounded-xl border border-stone-300 focus:outline-none focus:border-royal-800 bg-stone-50/50"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full btn-royal text-xs py-3 font-bold uppercase tracking-wider mt-2 flex items-center justify-center gap-2"
              >
                <Mail size={15} />
                <span>Submit via Email</span>
              </button>
            </form>
          )}
        </div>

      </div>
    </div>
  );
}

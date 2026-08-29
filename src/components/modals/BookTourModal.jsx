import React, { useState } from 'react';
import { X, Compass, Calendar, Clock, CheckCircle2, User, Phone, Mail } from 'lucide-react';

export default function BookTourModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    parentName: '',
    phone: '',
    email: '',
    date: '',
    timeSlot: '10:00 AM – 11:30 AM (Morning Tour)',
    attendees: '2 Adults, 1 Child',
    interests: 'STEM Labs & Sports Complex'
  });
  const [confirmed, setConfirmed] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setConfirmed(true);
  };

  const handleReset = () => {
    setConfirmed(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white rounded-3xl shadow-2xl border border-stone-200 w-full max-w-lg overflow-hidden animate-scaleUp">
        
        {/* Modal Header */}
        <div className="bg-royal-950 text-white p-6 relative border-b-2 border-gold-500">
          <button 
            onClick={onClose}
            className="absolute top-5 right-5 p-2 text-stone-400 hover:text-white rounded-lg hover:bg-royal-900 transition-colors"
          >
            <X size={20} />
          </button>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-royal-900 p-1.5 flex items-center justify-center border border-gold-400/40 text-gold-400">
              <Compass size={22} />
            </div>
            <div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-gold-400">
                Personalized On-Campus Experience
              </span>
              <h3 className="font-cinzel text-xl font-bold text-white">
                Schedule Guided Campus Tour
              </h3>
            </div>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8">
          {confirmed ? (
            <div className="text-center py-6 space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto shadow-md">
                <CheckCircle2 size={36} />
              </div>

              <span className="badge-royal">Tour Pass Confirmed</span>

              <h3 className="font-cinzel text-2xl font-bold text-royal-950">
                We Look Forward to Welcoming You!
              </h3>

              <div className="bg-ivory-50 p-4 rounded-2xl border border-stone-200 text-left space-y-2 text-xs text-stone-700">
                <div className="flex justify-between">
                  <span className="text-stone-500">Scheduled Date:</span>
                  <strong className="text-stone-900">{formData.date || 'Upcoming Saturday'}</strong>
                </div>
                <div className="flex justify-between">
                  <span className="text-stone-500">Selected Slot:</span>
                  <strong className="text-stone-900">{formData.timeSlot}</strong>
                </div>
                <div className="flex justify-between">
                  <span className="text-stone-500">Visitor Pass SMS sent to:</span>
                  <strong className="text-stone-900">{formData.phone}</strong>
                </div>
              </div>

              <p className="text-xs text-stone-500">
                Our Academic Host will receive you at the Central Administration Atrium. Free visitor parking is available at Gate No. 2.
              </p>

              <button
                onClick={handleReset}
                className="btn-royal text-xs py-2.5 px-6"
              >
                Close & Done
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1">
                  Parent / Visitor Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Dr. Anil Verma"
                  value={formData.parentName}
                  onChange={(e) => setFormData({...formData, parentName: e.target.value})}
                  className="w-full text-xs px-3.5 py-2.5 rounded-lg border border-stone-300 focus:outline-none focus:border-royal-800 bg-stone-50/50"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1">
                    Mobile Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full text-xs px-3.5 py-2.5 rounded-lg border border-stone-300 focus:outline-none focus:border-royal-800 bg-stone-50/50"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="parent@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full text-xs px-3.5 py-2.5 rounded-lg border border-stone-300 focus:outline-none focus:border-royal-800 bg-stone-50/50"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1">
                    Preferred Date *
                  </label>
                  <input
                    type="date"
                    required
                    value={formData.date}
                    onChange={(e) => setFormData({...formData, date: e.target.value})}
                    className="w-full text-xs px-3.5 py-2.5 rounded-lg border border-stone-300 focus:outline-none focus:border-royal-800 bg-stone-50/50"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1">
                    Time Slot
                  </label>
                  <select
                    value={formData.timeSlot}
                    onChange={(e) => setFormData({...formData, timeSlot: e.target.value})}
                    className="w-full text-xs px-3.5 py-2.5 rounded-lg border border-stone-300 focus:outline-none focus:border-royal-800 bg-stone-50/50"
                  >
                    <option>10:00 AM – 11:30 AM (Morning Tour)</option>
                    <option>01:30 PM – 03:00 PM (Afternoon Tour)</option>
                    <option>03:30 PM – 05:00 PM (Evening Sports Tour)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1">
                  Primary Areas of Interest
                </label>
                <input
                  type="text"
                  placeholder="e.g. Science Laboratories, Central Library, Swimming Pool..."
                  value={formData.interests}
                  onChange={(e) => setFormData({...formData, interests: e.target.value})}
                  className="w-full text-xs px-3.5 py-2.5 rounded-lg border border-stone-300 focus:outline-none focus:border-royal-800 bg-stone-50/50"
                />
              </div>

              <button
                type="submit"
                className="w-full btn-royal text-xs py-3 font-bold mt-2"
              >
                Confirm Campus Visit Booking
              </button>
            </form>
          )}
        </div>

      </div>
    </div>
  );
}

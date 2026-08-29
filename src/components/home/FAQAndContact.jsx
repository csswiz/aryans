import React, { useState } from 'react';
import { HelpCircle, ChevronDown, Phone, Mail, MapPin, Send, CheckCircle2, Clock } from 'lucide-react';
import { schoolFaqs } from '../../data/achievementsData';

export default function FAQAndContact({ onOpenTourModal }) {
  const [openFaq, setOpenFaq] = useState(0);
  const [formData, setFormData] = useState({
    parentName: '',
    email: '',
    phone: '',
    gradeSeeking: 'Grade 1',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 bg-ivory-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-royal-100 text-royal-900 border border-royal-200 text-xs font-bold uppercase tracking-wider mb-3">
            <HelpCircle size={14} className="text-royal-800" />
            <span>Admissions & Campus Inquiries</span>
          </div>
          <h2 className="font-cinzel text-3xl sm:text-4xl font-bold text-royal-950 tracking-tight">
            Frequently Asked Questions & Contact
          </h2>
          <p className="text-stone-600 text-sm sm:text-base mt-2">
            Have questions about admissions, curricula, or transport routes? We are here to assist.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-royal-800 to-gold-500 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* 2-Column Split: FAQ Accordion vs Direct Inquiry Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: FAQ Accordion (7 cols) */}
          <div className="lg:col-span-7 space-y-3.5">
            <h3 className="font-cinzel text-xl font-bold text-royal-950 mb-4">
              Parent Admissions FAQ
            </h3>

            {schoolFaqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="card-prestige overflow-hidden bg-white border border-stone-200"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? -1 : idx)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 font-semibold text-stone-900 hover:text-royal-900 transition-colors"
                  >
                    <span className="font-cinzel text-sm sm:text-base font-bold text-royal-950">
                      {faq.question}
                    </span>
                    <ChevronDown
                      size={18}
                      className={`text-royal-800 shrink-0 transition-transform duration-300 ${
                        isOpen ? 'rotate-180 text-gold-600' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 text-xs sm:text-sm text-stone-600 leading-relaxed border-t border-stone-100 pt-3 bg-ivory-50/50">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right Column: Direct Quick Inquiry Form (5 cols) */}
          <div className="lg:col-span-5 card-prestige p-6 sm:p-8 bg-white border-2 border-royal-800/20 shadow-prestige-lg">
            <h3 className="font-cinzel text-xl font-bold text-royal-950 mb-1">
              Direct Admissions Desk
            </h3>
            <p className="text-xs text-stone-500 mb-6">
              Fill out your details to receive an instant callback and customized admission brochure.
            </p>

            {submitted ? (
              <div className="p-6 bg-emerald-50 rounded-2xl border border-emerald-200 text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                  <CheckCircle2 size={24} />
                </div>
                <h4 className="font-cinzel text-base font-bold text-emerald-950">
                  Inquiry Received Successfully!
                </h4>
                <p className="text-xs text-emerald-800">
                  Our Admissions Officer will contact you on <strong>{formData.phone || 'your phone number'}</strong> within 2 business hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-xs font-bold text-emerald-900 underline mt-2"
                >
                  Send another inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1">
                    Parent / Guardian Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Rajesh Kumar"
                    value={formData.parentName}
                    onChange={(e) => setFormData({...formData, parentName: e.target.value})}
                    className="w-full text-xs px-3.5 py-2.5 rounded-lg border border-stone-300 focus:outline-none focus:border-royal-800 bg-stone-50/50"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1">
                      Phone Number *
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
                      Grade Seeking
                    </label>
                    <select
                      value={formData.gradeSeeking}
                      onChange={(e) => setFormData({...formData, gradeSeeking: e.target.value})}
                      className="w-full text-xs px-3.5 py-2.5 rounded-lg border border-stone-300 focus:outline-none focus:border-royal-800 bg-stone-50/50"
                    >
                      <option>Nursery / Pre-K</option>
                      <option>LKG / UKG</option>
                      <option>Grade 1 to 5</option>
                      <option>Grade 6 to 8</option>
                      <option>Grade 9 or 10</option>
                      <option>Grade 11 (Science PCM/PCB)</option>
                      <option>Grade 11 (Commerce / Humanities)</option>
                    </select>
                  </div>
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

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1">
                    Specific Queries / Academic Focus
                  </label>
                  <textarea
                    rows="3"
                    placeholder="Ask regarding transport routes, hostel/day-boarding, or syllabus..."
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full text-xs px-3.5 py-2.5 rounded-lg border border-stone-300 focus:outline-none focus:border-royal-800 bg-stone-50/50"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full btn-royal text-xs py-3 font-bold flex items-center justify-center gap-2"
                >
                  <Send size={14} />
                  <span>Request Instant Admissions Callback</span>
                </button>
              </form>
            )}

            {/* Quick Contact Helpline Info */}
            <div className="mt-6 pt-4 border-t border-stone-100 flex items-center justify-between text-xs text-stone-600">
              <div className="flex items-center gap-1.5 font-semibold text-royal-900">
                <Phone size={13} className="text-gold-600" />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center gap-1 text-stone-500">
                <Clock size={12} />
                <span>08:00 AM – 04:00 PM</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

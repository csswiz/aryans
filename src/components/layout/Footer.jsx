import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, ArrowRight, ShieldCheck, Award, Heart, CheckCircle2 } from 'lucide-react';

export default function Footer({ onOpenApplication, onOpenFeeCalculator, onOpenTourModal }) {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (newsletterEmail) {
      setSubscribed(true);
      setTimeout(() => {
        setNewsletterEmail('');
        setSubscribed(false);
      }, 4000);
    }
  };

  return (
    <footer className="bg-royal-950 text-stone-300 border-t-2 border-gold-500/40 relative overflow-hidden">
      {/* Subtle Crest Watermark Background */}
      <div className="absolute right-0 bottom-0 opacity-5 pointer-events-none translate-x-1/4 translate-y-1/4">
        <img src="/crest-icon.svg" alt="" className="w-96 h-96 object-contain" />
      </div>

      {/* Main Footer Body */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          
          {/* Column 1: School Identity & Philosophy (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-royal-900 p-1.5 shadow-md flex items-center justify-center border border-gold-500/40">
                <img src="/crest-icon.svg" alt="Aryans Emblem" className="w-full h-full object-contain drop-shadow" />
              </div>
              <div>
                <h3 className="font-cinzel text-xl font-bold tracking-wider text-white">
                  THE ARYANS' SCHOOL
                </h3>
                <p className="text-xs uppercase tracking-widest text-gold-400 font-semibold">
                  Jhansi, Uttar Pradesh
                </p>
              </div>
            </div>

            <p className="text-sm text-stone-300 leading-relaxed font-light">
              An English medium CBSE affiliated school in the heart of Jhansi. We believe education is a noble cause, adopting play-way teaching techniques and giving back to society by producing righteous and responsible citizens.
            </p>

            <div className="pt-2 flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-1 text-[11px] font-semibold bg-royal-900/90 text-gold-300 px-2.5 py-1 rounded border border-gold-500/30">
                <ShieldCheck size={12} className="text-gold-400" />
                CBSE Affiliation #2132984
              </span>
              <span className="inline-flex items-center gap-1 text-[11px] font-semibold bg-royal-900/90 text-gold-300 px-2.5 py-1 rounded border border-gold-500/30">
                <Award size={12} className="text-gold-400" />
                School Code: 70142
              </span>
            </div>
          </div>

          {/* Column 2: Academic Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-cinzel text-sm font-bold text-white uppercase tracking-wider border-b border-royal-800 pb-2">
              Academics
            </h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#academics" className="hover:text-gold-300 transition-colors">Early Foundation (Pre-K)</a></li>
              <li><a href="#academics" className="hover:text-gold-300 transition-colors">Preparatory School</a></li>
              <li><a href="#academics" className="hover:text-gold-300 transition-colors">Middle Years Academy</a></li>
              <li><a href="#academics" className="hover:text-gold-300 transition-colors">Senior Secondary Streams</a></li>
              <li><a href="#academics" className="hover:text-gold-300 transition-colors">Competitive Coaching (JEE/NEET)</a></li>
              <li><a href="#academics" className="hover:text-gold-300 transition-colors">Robotics & AI Hub</a></li>
            </ul>
          </div>

          {/* Column 3: Admissions & Portals (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-cinzel text-sm font-bold text-white uppercase tracking-wider border-b border-royal-800 pb-2">
              Admissions & Quick Tools
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button onClick={onOpenApplication} className="hover:text-gold-300 transition-colors text-left flex items-center gap-1.5">
                  <ArrowRight size={13} className="text-gold-400" />
                  <span>Online Admission Form 2026–27</span>
                </button>
              </li>
              <li>
                <button onClick={onOpenFeeCalculator} className="hover:text-gold-300 transition-colors text-left flex items-center gap-1.5">
                  <ArrowRight size={13} className="text-gold-400" />
                  <span>Transparent Fee Estimator</span>
                </button>
              </li>
              <li>
                <button onClick={onOpenTourModal} className="hover:text-gold-300 transition-colors text-left flex items-center gap-1.5">
                  <ArrowRight size={13} className="text-gold-400" />
                  <span>Schedule Guided Campus Tour</span>
                </button>
              </li>
              <li>
                <a href="#notices" className="hover:text-gold-300 transition-colors flex items-center gap-1.5">
                  <ArrowRight size={13} className="text-gold-400" />
                  <span>Official Circulars & Date Sheets</span>
                </a>
              </li>
              <li>
                <a href="#campus-map" className="hover:text-gold-300 transition-colors flex items-center gap-1.5">
                  <ArrowRight size={13} className="text-gold-400" />
                  <span>Interactive Campus Floor Map</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Office Hours (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-cinzel text-sm font-bold text-white uppercase tracking-wider border-b border-royal-800 pb-2">
              Campus & Inquiries
            </h4>
            <div className="space-y-2.5 text-sm text-stone-300">
              <div className="flex items-start gap-2.5">
                <MapPin size={16} className="text-gold-400 shrink-0 mt-0.5" />
                <span>The Aryans' School, Heart of Jhansi, Uttar Pradesh, India</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone size={15} className="text-gold-400 shrink-0" />
                <a href="tel:+919876543210" className="hover:text-gold-300 font-medium">+91 98765 43210 / 11</a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail size={15} className="text-gold-400 shrink-0" />
                <a href="mailto:info@aryans.edu.in" className="hover:text-gold-300">info@aryans.edu.in</a>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-stone-400 pt-1">
                <Clock size={14} className="text-gold-400 shrink-0" />
                <span>Mon – Sat: 08:00 AM – 04:00 PM</span>
              </div>
            </div>

            {/* Newsletter Subscription */}
            <div className="pt-3">
              <p className="text-xs font-semibold text-stone-200 mb-2">Subscribe to Quarterly Academic Bulletin</p>
              {subscribed ? (
                <div className="flex items-center gap-1.5 text-xs text-emerald-400 bg-emerald-950/60 p-2 rounded border border-emerald-800">
                  <CheckCircle2 size={14} />
                  <span>Subscribed successfully!</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex gap-1.5">
                  <input
                    type="email"
                    required
                    placeholder="Enter parent email..."
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    className="w-full text-xs px-3 py-2 rounded bg-royal-900/90 text-white placeholder-stone-400 border border-royal-700 focus:outline-none focus:border-gold-400"
                  />
                  <button type="submit" className="px-3 py-2 text-xs font-bold text-stone-900 bg-gold-400 hover:bg-gold-300 rounded transition-colors">
                    Join
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Mandatory Disclosures */}
        <div className="mt-12 pt-6 border-t border-royal-900 text-xs text-stone-400 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} The Aryans International School. All Rights Reserved.</p>
          <div className="flex flex-wrap items-center gap-4 text-stone-400">
            <a href="#" className="hover:text-gold-300 transition-colors">CBSE Mandatory Public Disclosure</a>
            <span>•</span>
            <a href="#" className="hover:text-gold-300 transition-colors">Privacy Policy</a>
            <span>•</span>
            <a href="#" className="hover:text-gold-300 transition-colors">Fee Refund Policy</a>
            <span>•</span>
            <a href="#" className="hover:text-gold-300 transition-colors">POSH & Anti-Bullying Charter</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

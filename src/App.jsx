import React, { useState } from 'react';
import { Sparkles, Menu, X, CheckCircle2, ChevronRight, MapPin, Phone, Mail, Clock, HeartHandshake, ArrowRight } from 'lucide-react';
import confetti from 'canvas-confetti';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import AcademicPage from './pages/AcademicPage';
import GalleryPage from './pages/GalleryPage';
import DownloadPage from './pages/DownloadPage';
import ContactPage from './pages/ContactPage';

import MobileHeader from './components/mobile/MobileHeader';
import MobileBottomNav from './components/mobile/MobileBottomNav';
import MobileQuickActions from './components/mobile/MobileQuickActions';
import MobileBottomSheet from './components/mobile/MobileBottomSheet';
import ElectricBorder from './components/effects/ElectricBorder';

export default function App() {
  const [activeNav, setActiveNav] = useState('Home');
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);

  const navItems = ['Home', 'About', 'Academic', 'Gallery', 'Download', 'Contact'];

  const schoolContact = {
    phone: "+91 81123 61361",
    phoneHref: "tel:+918112361361",
    email: "school.aryans1@gmail.com",
    address: "Atri gardens, Sipri Bazar,, Jhansi 284003, India, Uttar Pradesh",
    mapsUrl: "https://maps.app.goo.gl/Dv1o4KT7rBDw3zMT9",
    instagramUrl: "https://www.instagram.com/thearyansschooljhansi/",
    facebookUrl: "https://www.facebook.com/thearyansschooljhansi/"
  };

  const handleNavClick = (item) => {
    setActiveNav(item);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Admission Form State
  const [formData, setFormData] = useState({
    parentName: '',
    studentName: '',
    phone: '',
    email: '',
    grade: 'Nursery / Kindergarten',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    
    // Construct pre-filled mailto
    const subject = encodeURIComponent(`Admission Application: ${formData.studentName} (${formData.grade}) - The Aryans' School, Jhansi`);
    const body = encodeURIComponent(
      `Respected Admissions Officer,\n\n` +
      `I would like to apply for admission at The Aryans' School, Jhansi.\n\n` +
      `Applicant Details:\n` +
      `- Student Name: ${formData.studentName}\n` +
      `- Grade / Class: ${formData.grade}\n` +
      `- Parent / Guardian Name: ${formData.parentName}\n` +
      `- Phone Number: ${formData.phone}\n` +
      `- Parent Email: ${formData.email || 'N/A'}\n` +
      `- Queries / Message: ${formData.message || 'N/A'}\n\n` +
      `Please let us know the next steps for enrollment.\n\n` +
      `Warm regards,\n${formData.parentName}`
    );

    // Trigger Mailto client
    window.location.href = `mailto:${schoolContact.email}?subject=${subject}&body=${body}`;

    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
  };

  const handleResetForm = () => {
    setIsSubmitted(false);
    setIsApplyModalOpen(false);
    setFormData({
      parentName: '',
      studentName: '',
      phone: '',
      email: '',
      grade: 'Nursery / Kindergarten',
      message: ''
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF9F6] text-stone-900 font-sans selection:bg-royal-800 selection:text-gold-200 pb-20 md:pb-0">
      
      {/* 1. MOBILE-ONLY NATIVE APP HEADER */}
      <MobileHeader 
        onOpenApply={() => setIsApplyModalOpen(true)}
        onNavigate={handleNavClick}
      />

      {/* 2. DESKTOP / PC HEADER */}
      <header className="hidden md:block sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-stone-200 shadow-xs">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between">
          
          {/* Logo & School Name */}
          <div 
            onClick={() => handleNavClick('Home')}
            className="flex items-center gap-3.5 cursor-pointer group"
          >
            <img 
              src="/logo.png" 
              alt="The Aryans' School" 
              className="h-11 sm:h-12 w-auto object-contain drop-shadow-xs group-hover:scale-102 transition-transform duration-300" 
            />
            <span className="text-[10px] uppercase font-bold tracking-widest bg-gold-100 text-gold-900 px-2 py-0.5 rounded border border-gold-300 self-center">
              JHANSI
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="flex items-center gap-1.5">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => handleNavClick(item)}
                className={`px-3.5 py-2 text-sm font-bold transition-all rounded-xl ${
                  activeNav === item 
                    ? 'text-white bg-royal-900 shadow-md border border-royal-950' 
                    : 'text-stone-700 hover:text-royal-800 hover:bg-stone-100'
                }`}
              >
                {item}
              </button>
            ))}
          </nav>

          {/* Header Action CTA */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsApplyModalOpen(true)}
              className="relative inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-royal-800 via-royal-700 to-royal-900 hover:from-royal-900 hover:to-royal-950 rounded-xl shadow-md hover:shadow-royal-glow hover:-translate-y-0.5 transition-all border border-royal-700 uppercase tracking-wider"
            >
              <Sparkles size={15} className="text-gold-300" />
              <span>APPLY FOR ADMISSION</span>
            </button>
          </div>

        </div>
      </header>

      {/* 3. MOBILE QUICK ACTION DIALER STRIP */}
      <MobileQuickActions onOpenApply={() => setIsApplyModalOpen(true)} />

      {/* 4. DYNAMIC PAGE CONTENT */}
      <main className="flex-1">
        {activeNav === 'Home' && (
          <HomePage 
            onOpenApplyModal={() => setIsApplyModalOpen(true)}
            onNavigate={handleNavClick}
          />
        )}
        {activeNav === 'About' && (
          <AboutPage 
            onOpenApplyModal={() => setIsApplyModalOpen(true)}
          />
        )}
        {activeNav === 'Academic' && (
          <AcademicPage 
            onOpenApplyModal={() => setIsApplyModalOpen(true)}
          />
        )}
        {activeNav === 'Gallery' && (
          <GalleryPage 
            onOpenApplyModal={() => setIsApplyModalOpen(true)}
          />
        )}
        {activeNav === 'Download' && (
          <DownloadPage 
            onOpenApplyModal={() => setIsApplyModalOpen(true)}
          />
        )}
        {activeNav === 'Contact' && (
          <ContactPage 
            onOpenApplyModal={() => setIsApplyModalOpen(true)}
          />
        )}
      </main>

      {/* 5. HIGH-VISIBILITY FOOTER WITH SOCIAL LINKS */}
      <footer 
        className="relative text-white border-t-4 border-gold-500 overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/assets/footer.jpg')" }}
      >
        {/* Solid Deep Royal Red dark background */}
        <div className="absolute inset-0 bg-gradient-to-b from-royal-950/98 via-royal-950/96 to-royal-950/98"></div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-12 space-y-10">
          
          {/* Main Footer Top Grid with High-Contrast Cards */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            
            {/* Column 1: School Brand, Philosophy & Social Links (6 cols) */}
            <div className="md:col-span-6 bg-royal-950/90 backdrop-blur-md p-6 sm:p-7 rounded-3xl border-2 border-gold-500/40 shadow-xl space-y-4 text-left">
              <div className="flex items-center gap-3.5">
                <div className="bg-white p-2 rounded-2xl shadow-md border-2 border-gold-400">
                  <img src="/logo.png" alt="The Aryans' School Logo" className="h-10 sm:h-11 w-auto object-contain" />
                </div>
                <div>
                  <h3 className="font-cinzel text-lg sm:text-xl font-bold tracking-tight text-white">
                    THE ARYANS' SCHOOL
                  </h3>
                  <p className="text-xs uppercase tracking-widest text-gold-300 font-extrabold">
                    Jhansi, Uttar Pradesh • Estd 2011
                  </p>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-stone-100 font-medium leading-relaxed">
                The Aryans’ School is an English medium school, affiliated to CBSE board, in the heart of Jhansi, Uttar Pradesh. We adopt play-way techniques of teaching even the most complicated concepts and are proud of our strong inclination towards core Indian values.
              </p>

              <div className="pt-2 border-t border-royal-800/90 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex items-center gap-2 text-xs text-gold-300 font-serif font-bold italic">
                  <HeartHandshake size={18} className="text-gold-400 shrink-0" />
                  <span>"Seva Parmodharma"</span>
                </div>

                {/* Social Links */}
                <div className="flex items-center gap-2.5">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-stone-300">
                    Follow Us:
                  </span>
                  
                  {/* Instagram Button */}
                  <a
                    href={schoolContact.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-gradient-to-r from-pink-600 via-rose-600 to-purple-600 hover:from-pink-500 hover:to-purple-500 text-white font-bold text-xs shadow-md hover:scale-105 transition-all border border-pink-400/40"
                    title="Follow on Instagram"
                  >
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                    <span>Instagram</span>
                  </a>

                  {/* Facebook Button */}
                  <a
                    href={schoolContact.facebookUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-blue-700 hover:bg-blue-600 text-white font-bold text-xs shadow-md hover:scale-105 transition-all border border-blue-400/40"
                    title="Follow on Facebook"
                  >
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                    <span>Facebook</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Column 2: Quick Links (3 cols) */}
            <div className="md:col-span-3 bg-royal-950/90 backdrop-blur-md p-6 sm:p-7 rounded-3xl border-2 border-gold-500/40 shadow-xl space-y-4 text-left">
              <h4 className="font-cinzel text-sm font-extrabold uppercase tracking-wider text-gold-300 border-b-2 border-gold-500/40 pb-2.5 flex items-center gap-2">
                <span>Navigation</span>
              </h4>
              <ul className="space-y-2.5 text-sm">
                {navItems.map((item) => (
                  <li key={item}>
                    <button
                      onClick={() => handleNavClick(item)}
                      className={`w-full text-left font-bold transition-all flex items-center justify-between py-1 px-2.5 rounded-lg ${
                        activeNav === item 
                          ? 'text-royal-950 bg-gold-400 font-extrabold shadow-sm' 
                          : 'text-white hover:text-gold-300 hover:bg-royal-900/80'
                      }`}
                    >
                      <span>{item}</span>
                      <ChevronRight size={14} className={activeNav === item ? 'text-royal-950' : 'text-gold-400'} />
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Contact & Desk (3 cols) */}
            <div className="md:col-span-3 bg-royal-950/90 backdrop-blur-md p-6 sm:p-7 rounded-3xl border-2 border-gold-500/40 shadow-xl space-y-4 text-left">
              <h4 className="font-cinzel text-sm font-extrabold uppercase tracking-wider text-gold-300 border-b-2 border-gold-500/40 pb-2.5">
                Campus Desk
              </h4>
              
              <div className="space-y-3 text-xs text-stone-100 font-semibold">
                <div className="flex items-start gap-2.5">
                  <MapPin size={16} className="text-gold-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-white font-bold block">{schoolContact.address}</span>
                    <a 
                      href={schoolContact.mapsUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-block text-gold-300 hover:text-white font-extrabold underline mt-1"
                    >
                      Get Directions on Maps →
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-2.5 pt-1">
                  <Phone size={15} className="text-gold-400 shrink-0" />
                  <a href={schoolContact.phoneHref} className="text-white hover:text-gold-300 font-bold text-xs tracking-wide">
                    {schoolContact.phone}
                  </a>
                </div>

                <div className="flex items-center gap-2.5">
                  <Mail size={15} className="text-gold-400 shrink-0" />
                  <a href={`mailto:${schoolContact.email}?subject=Inquiry%20-%20The%20Aryans'%20School%20Jhansi`} className="text-white hover:text-gold-300 font-bold text-xs underline truncate">
                    {schoolContact.email}
                  </a>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => setIsApplyModalOpen(true)}
                  className="w-full btn-gold text-xs py-2.5 font-black uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-md"
                >
                  <Sparkles size={14} />
                  <span>Apply for Admission</span>
                </button>
              </div>
            </div>

          </div>

          {/* Bottom Copyright Bar */}
          <div className="pt-2">
            <div className="bg-royal-950 px-6 py-4 rounded-2xl border-2 border-gold-500/50 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left shadow-2xl">
              <p className="text-white font-bold text-xs sm:text-sm tracking-wide">
                © {new Date().getFullYear()} <span className="text-gold-300 font-extrabold">The Aryans' School, Jhansi</span>. All Rights Reserved.
              </p>
              <p className="text-white text-xs sm:text-sm font-bold">
                Affiliated to <span className="text-gold-300 font-extrabold">CBSE Board</span> • English Medium • Core Indian Values
              </p>
            </div>
          </div>

        </div>
      </footer>

      {/* 6. MOBILE BOTTOM NAVIGATION TAB BAR */}
      <MobileBottomNav 
        activeNav={activeNav}
        onNavigate={handleNavClick}
      />

      {/* 7. MOBILE BOTTOM SHEET APPLICATION DRAWER */}
      <MobileBottomSheet 
        isOpen={isApplyModalOpen}
        onClose={handleResetForm}
        formData={formData}
        setFormData={setFormData}
        onSubmit={handleFormSubmit}
        isSubmitted={isSubmitted}
      />

      {/* 8. DESKTOP ADMISSION MODAL WITH ELECTRIC BORDER */}
      {isApplyModalOpen && (
        <div className="hidden md:flex fixed inset-0 z-50 items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
          <div className="w-full max-w-lg animate-scaleUp">
            <ElectricBorder
              color="#C49E31"
              speed={1}
              chaos={0.12}
              borderRadius={24}
              className="w-full shadow-2xl"
            >
              <div className="bg-white rounded-3xl overflow-hidden shadow-2xl border border-gold-500/50">
                
                {/* Header */}
                <div className="bg-royal-950 text-white p-6 relative border-b-2 border-gold-500">
                  <button 
                    onClick={handleResetForm}
                    className="absolute top-5 right-5 p-2 text-stone-400 hover:text-white rounded-lg hover:bg-royal-900 transition-colors z-20"
                  >
                    <X size={20} />
                  </button>

                  <div className="flex items-center gap-3">
                    <div className="bg-white/95 p-1.5 rounded-xl border border-gold-400/80">
                      <img src="/logo.png" alt="The Aryans' School" className="h-9 w-auto object-contain" />
                    </div>
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-widest text-gold-400">
                        Jhansi (Estd 2011)
                      </span>
                      <h3 className="font-cinzel text-lg font-bold text-white">
                        Apply for Admission
                      </h3>
                    </div>
                  </div>
                </div>

                {/* Body */}
                <div className="p-6">
                  {isSubmitted ? (
                    <div className="text-center py-6 space-y-4">
                      <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto shadow-md">
                        <CheckCircle2 size={36} />
                      </div>

                      <h4 className="font-cinzel text-xl font-bold text-royal-950">
                        Admission Inquiry Dispatched!
                      </h4>

                      <p className="text-xs text-stone-600 max-w-xs mx-auto font-medium">
                        Your email application was prepared and sent to <strong>{schoolContact.email}</strong>. Our admissions desk will review and contact you promptly.
                      </p>

                      <div className="pt-2 flex flex-col gap-2">
                        <a
                          href={`mailto:${schoolContact.email}?subject=Follow-up:%20Admission%20Application%20for%20${encodeURIComponent(formData.studentName)}`}
                          className="text-xs font-bold text-royal-900 underline"
                        >
                          Click here to send direct follow-up email
                        </a>
                        <button
                          onClick={handleResetForm}
                          className="btn-royal text-xs py-2.5 px-6 uppercase tracking-wider mt-2"
                        >
                          Done
                        </button>
                      </div>
                    </div>
                  ) : (
                    <form onSubmit={handleFormSubmit} className="space-y-4">
                      <p className="text-xs text-stone-600 font-medium">
                        Now is the perfect time! Fill out this form to email your admission application directly to <strong>{schoolContact.email}</strong>.
                      </p>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1">
                          Parent / Guardian Name *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Ramesh Sharma"
                          value={formData.parentName}
                          onChange={(e) => setFormData({...formData, parentName: e.target.value})}
                          className="w-full text-xs px-3.5 py-2.5 rounded-lg border border-stone-300 focus:outline-none focus:border-royal-800 bg-stone-50/50"
                        />
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div>
                          <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1">
                            Child / Student Name *
                          </label>
                          <input
                            type="text"
                            required
                            placeholder="Child's full name"
                            value={formData.studentName}
                            onChange={(e) => setFormData({...formData, studentName: e.target.value})}
                            className="w-full text-xs px-3.5 py-2.5 rounded-lg border border-stone-300 focus:outline-none focus:border-royal-800 bg-stone-50/50"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1">
                            Phone Number *
                          </label>
                          <input
                            type="tel"
                            required
                            placeholder="+91 81123 61361"
                            value={formData.phone}
                            onChange={(e) => setFormData({...formData, phone: e.target.value})}
                            className="w-full text-xs px-3.5 py-2.5 rounded-lg border border-stone-300 focus:outline-none focus:border-royal-800 bg-stone-50/50"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div>
                          <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1">
                            Email Address
                          </label>
                          <input
                            type="email"
                            placeholder="parent@example.com"
                            value={formData.email}
                            onChange={(e) => setFormData({...formData, email: e.target.value})}
                            className="w-full text-xs px-3.5 py-2.5 rounded-lg border border-stone-300 focus:outline-none focus:border-royal-800 bg-stone-50/50"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1">
                            Grade / Class
                          </label>
                          <select
                            value={formData.grade}
                            onChange={(e) => setFormData({...formData, grade: e.target.value})}
                            className="w-full text-xs px-3.5 py-2.5 rounded-lg border border-stone-300 focus:outline-none focus:border-royal-800 bg-stone-50/50"
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
                        <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1">
                          Message / Queries
                        </label>
                        <textarea
                          rows="2"
                          placeholder="Any specific questions about admissions..."
                          value={formData.message}
                          onChange={(e) => setFormData({...formData, message: e.target.value})}
                          className="w-full text-xs px-3.5 py-2.5 rounded-lg border border-stone-300 focus:outline-none focus:border-royal-800 bg-stone-50/50"
                        ></textarea>
                      </div>

                      <button
                        type="submit"
                        className="w-full btn-royal text-xs py-3 font-bold uppercase tracking-wider mt-2 flex items-center justify-center gap-2"
                      >
                        <Mail size={15} />
                        <span>Submit via Email (mailto)</span>
                      </button>
                    </form>
                  )}
                </div>

              </div>
            </ElectricBorder>
          </div>
        </div>
      )}

    </div>
  );
}

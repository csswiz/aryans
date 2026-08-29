import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, Navigation, ExternalLink, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function ContactPage({ onOpenApplyModal }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const schoolContact = {
    phone: "+91 81123 61361",
    phoneHref: "tel:+918112361361",
    email: "school.aryans1@gmail.com",
    address: "Atri gardens, Sipri Bazar,, Jhansi 284003, India, Uttar Pradesh",
    mapsUrl: "https://maps.app.goo.gl/Dv1o4KT7rBDw3zMT9"
  };

  const mapEmbedUrl = "https://maps.google.com/maps?q=The%20Aryans'%20School%20Jhansi%20Uttar%20Pradesh&t=&z=15&ie=UTF8&iwloc=&output=embed";

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    const subject = encodeURIComponent(`General Inquiry from ${formData.name} - The Aryans' School, Jhansi`);
    const body = encodeURIComponent(
      `Hello The Aryans' School Jhansi Team,\n\n` +
      `I am writing to inquire about the school.\n\n` +
      `My Details:\n` +
      `- Name: ${formData.name}\n` +
      `- Phone: ${formData.phone}\n` +
      `- Email: ${formData.email || 'N/A'}\n\n` +
      `Message / Query:\n${formData.message}\n\n` +
      `Looking forward to hearing from you.\n\n` +
      `Best regards,\n${formData.name}`
    );

    // Trigger direct mailto
    window.location.href = `mailto:${schoolContact.email}?subject=${subject}&body=${body}`;

    confetti({
      particleCount: 80,
      spread: 60,
      origin: { y: 0.6 }
    });
  };

  return (
    <div className="py-12 sm:py-16 animate-fadeIn">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-royal-100 text-royal-900 border border-royal-200 text-xs font-bold uppercase tracking-wider">
            <MapPin size={14} className="text-royal-800" />
            <span>Jhansi, Uttar Pradesh</span>
          </div>
          <h1 className="font-cinzel text-3xl sm:text-5xl font-bold text-royal-950">
            CONTACT & LOCATION
          </h1>
          <p className="text-stone-600 text-base sm:text-lg max-w-2xl mx-auto">
            Find directions to our campus or email our admissions desk directly in the heart of Jhansi.
          </p>
          <div className="w-20 h-1 bg-gold-500 mx-auto rounded-full"></div>
        </div>

        {/* 2-Column Split: Contact Cards & Inquiry Form */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: School Details (5 cols) */}
          <div className="md:col-span-5 space-y-6">
            
            <div className="bg-[#FAF9F6] p-8 rounded-3xl border border-stone-200 shadow-sm space-y-6">
              <h3 className="font-cinzel text-xl font-bold text-royal-950 border-b border-stone-200 pb-3">
                The Aryans' School, Jhansi
              </h3>

              <div className="space-y-4 text-sm text-stone-700">
                <div className="flex items-start gap-3">
                  <MapPin size={18} className="text-royal-800 shrink-0 mt-1" />
                  <div>
                    <strong className="text-stone-900 block">Campus Address:</strong>
                    <span>{schoolContact.address}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone size={18} className="text-royal-800 shrink-0 mt-1" />
                  <div>
                    <strong className="text-stone-900 block">Admissions Helpline:</strong>
                    <a href={schoolContact.phoneHref} className="hover:text-royal-800 font-semibold text-royal-900">{schoolContact.phone}</a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail size={18} className="text-royal-800 shrink-0 mt-1" />
                  <div>
                    <strong className="text-stone-900 block">Official Email:</strong>
                    <a 
                      href={`mailto:${schoolContact.email}?subject=General%20Inquiry%20-%20The%20Aryans'%20School%20Jhansi`} 
                      className="hover:text-royal-800 font-medium text-royal-900 underline"
                    >
                      {schoolContact.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock size={18} className="text-royal-800 shrink-0 mt-1" />
                  <div>
                    <strong className="text-stone-900 block">Visiting Hours:</strong>
                    <span>Monday to Saturday: 08:30 AM – 03:30 PM</span>
                  </div>
                </div>
              </div>

              {/* Get Directions Button */}
              <div className="pt-2">
                <a
                  href={schoolContact.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full btn-gold text-xs py-3 font-bold uppercase tracking-wider flex items-center justify-center gap-2"
                >
                  <Navigation size={15} />
                  <span>Get Directions on Google Maps</span>
                  <ExternalLink size={13} />
                </a>
              </div>
            </div>

            <div className="p-6 rounded-3xl bg-royal-950 text-white border-2 border-gold-500/40 space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-gold-300">
                Admissions Note
              </span>
              <p className="text-xs text-stone-200 leading-relaxed font-light">
                "Build a bright future for your child. Now is the perfect time! Apply for admission today."
              </p>
            </div>

          </div>

          {/* Right Column: Message Form (7 cols) */}
          <div className="md:col-span-7 bg-white p-8 sm:p-10 rounded-3xl border border-stone-200 shadow-sm">
            <h3 className="font-cinzel text-2xl font-bold text-royal-950 mb-2">
              Send an Inquiry
            </h3>
            <p className="text-xs text-stone-500 mb-6">
              Submitting this form prepares an email directly to <strong>{schoolContact.email}</strong>.
            </p>

            {submitted ? (
              <div className="p-6 bg-emerald-50 rounded-2xl border border-emerald-200 text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                  <CheckCircle2 size={24} />
                </div>
                <h4 className="font-cinzel text-lg font-bold text-emerald-950">
                  Inquiry Dispatched via Email!
                </h4>
                <p className="text-xs text-emerald-800">
                  Your message has been sent to <strong>{schoolContact.email}</strong>. We will review and respond promptly.
                </p>
                <div className="pt-2">
                  <a
                    href={`mailto:${schoolContact.email}?subject=Direct%20Message%20from%20${encodeURIComponent(formData.name)}&body=${encodeURIComponent(formData.message)}`}
                    className="text-xs font-bold text-royal-900 underline block mb-3"
                  >
                    Click to resend or open in your email client
                  </a>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="btn-royal text-xs py-2 px-5"
                  >
                    Send another message
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Anand Sharma"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
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
                      placeholder="+91 81123 61361"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="w-full text-xs px-3.5 py-2.5 rounded-lg border border-stone-300 focus:outline-none focus:border-royal-800 bg-stone-50/50"
                    />
                  </div>
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
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1">
                    Message / Question *
                  </label>
                  <textarea
                    rows="4"
                    required
                    placeholder="Write your message here..."
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full text-xs px-3.5 py-2.5 rounded-lg border border-stone-300 focus:outline-none focus:border-royal-800 bg-stone-50/50"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full btn-royal text-xs py-3 font-bold uppercase tracking-wider flex items-center justify-center gap-2"
                >
                  <Mail size={15} />
                  <span>Send Message to school.aryans1@gmail.com</span>
                </button>
              </form>
            )}

          </div>

        </div>

        {/* INTERACTIVE GOOGLE MAP EMBED SECTION */}
        <div className="space-y-4 pt-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-2.5">
              <MapPin size={22} className="text-royal-800" />
              <h2 className="font-cinzel text-2xl font-bold text-royal-950">
                Campus Location on Google Maps
              </h2>
            </div>

            <a
              href={schoolContact.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-royal-900 text-gold-300 hover:text-white text-xs font-bold transition-all border border-gold-500/40 shadow-sm"
            >
              <Navigation size={14} className="text-gold-400" />
              <span>Open in Google Maps App</span>
              <ExternalLink size={13} />
            </a>
          </div>

          <div className="rounded-3xl overflow-hidden shadow-xl border-2 border-gold-500/40 bg-stone-100 h-96 w-full relative">
            <iframe
              title="The Aryans' School Jhansi Location Map"
              src={mapEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            ></iframe>
          </div>
        </div>

      </div>
    </div>
  );
}

import React, { useState } from 'react';
import { X, Sparkles, CheckCircle2, ChevronRight, ChevronLeft, User, BookOpen, Users, FileUp, Award } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function AdmissionApplicationModal({ isOpen, onClose }) {
  const [currentStep, setCurrentStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [appId, setAppId] = useState('');

  const [formData, setFormData] = useState({
    studentName: '',
    dob: '',
    gender: 'Male',
    gradeApplying: 'Grade 1',
    stream: 'Science (PCM + CS)',
    previousSchool: '',
    lastGradePercentage: '',
    parentName: '',
    parentPhone: '',
    parentEmail: '',
    address: '',
    transportRequired: 'Yes',
    specialInterests: ''
  });

  if (!isOpen) return null;

  const handleNext = (e) => {
    e.preventDefault();
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    } else {
      // Final Submit
      const generatedId = `AIS-2026-${Math.floor(100000 + Math.random() * 900000)}`;
      setAppId(generatedId);
      setSubmitted(true);
      
      // Trigger celebratory confetti
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    }
  };

  const handleBack = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const handleReset = () => {
    setSubmitted(false);
    setCurrentStep(1);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white rounded-3xl shadow-2xl border border-stone-200 w-full max-w-3xl overflow-hidden animate-scaleUp max-h-[90vh] flex flex-col">
        
        {/* Modal Header */}
        <div className="bg-royal-950 text-white p-6 relative border-b-2 border-gold-500 shrink-0">
          <button 
            onClick={onClose}
            className="absolute top-5 right-5 p-2 text-stone-400 hover:text-white rounded-lg hover:bg-royal-900 transition-colors"
          >
            <X size={20} />
          </button>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-royal-900 p-1 flex items-center justify-center border border-gold-400/40">
              <img src="/crest-icon.svg" alt="" className="w-full h-full object-contain" />
            </div>
            <div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-gold-400">
                Official Admissions Portal 2026–27
              </span>
              <h3 className="font-cinzel text-xl font-bold text-white">
                Online Application for Admission
              </h3>
            </div>
          </div>

          {/* Step Progress Bar */}
          {!submitted && (
            <div className="mt-4 flex items-center justify-between gap-2 pt-3 border-t border-royal-900/80">
              {[
                { num: 1, label: "Applicant Info", icon: User },
                { num: 2, label: "Academic History", icon: BookOpen },
                { num: 3, label: "Parent Details", icon: Users },
                { num: 4, label: "Review & Submit", icon: FileUp },
              ].map((step) => {
                const Icon = step.icon;
                const isPassed = currentStep >= step.num;
                const isCurrent = currentStep === step.num;
                return (
                  <div key={step.num} className="flex items-center gap-2 flex-1">
                    <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold shrink-0 transition-colors ${
                      isCurrent 
                        ? 'bg-gold-400 text-royal-950 font-black ring-2 ring-gold-300' 
                        : isPassed 
                        ? 'bg-royal-800 text-gold-300' 
                        : 'bg-royal-900 text-stone-500'
                    }`}>
                      {step.num}
                    </div>
                    <span className={`text-[11px] font-semibold hidden sm:inline ${
                      isCurrent ? 'text-gold-300' : isPassed ? 'text-stone-300' : 'text-stone-500'
                    }`}>
                      {step.label}
                    </span>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 overflow-y-auto flex-1">
          {submitted ? (
            <div className="text-center py-6 space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto shadow-md">
                <CheckCircle2 size={36} />
              </div>

              <span className="badge-royal">Application Registered</span>

              <h3 className="font-cinzel text-2xl font-bold text-royal-950">
                Application Submitted Successfully!
              </h3>

              <div className="bg-ivory-50 p-4 rounded-2xl border border-stone-200 max-w-md mx-auto space-y-2 text-left">
                <div className="flex justify-between text-xs text-stone-600">
                  <span>Application Reference ID:</span>
                  <strong className="font-mono font-bold text-royal-900 text-sm">{appId}</strong>
                </div>
                <div className="flex justify-between text-xs text-stone-600">
                  <span>Student Name:</span>
                  <strong className="text-stone-900">{formData.studentName}</strong>
                </div>
                <div className="flex justify-between text-xs text-stone-600">
                  <span>Grade Applied:</span>
                  <strong className="text-stone-900">{formData.gradeApplying}</strong>
                </div>
                <div className="flex justify-between text-xs text-stone-600">
                  <span>Contact Notification:</span>
                  <strong className="text-stone-900">{formData.parentPhone}</strong>
                </div>
              </div>

              <p className="text-xs text-stone-600 max-w-md mx-auto leading-relaxed">
                An official confirmation SMS and Email with your downloadable acknowledgment slip and diagnostic evaluation slot have been dispatched.
              </p>

              <div className="pt-4 flex justify-center gap-3">
                <button
                  onClick={handleReset}
                  className="btn-royal text-xs py-2.5 px-6"
                >
                  Return to Home
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleNext} className="space-y-5">
              
              {/* STEP 1: Applicant Info */}
              {currentStep === 1 && (
                <div className="space-y-4 animate-fadeIn">
                  <h4 className="font-cinzel text-base font-bold text-royal-950 border-b border-stone-100 pb-2">
                    Step 1: Student Demographics
                  </h4>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1">
                      Full Legal Name of Student *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Aarav Sharma"
                      value={formData.studentName}
                      onChange={(e) => setFormData({...formData, studentName: e.target.value})}
                      className="w-full text-xs px-3.5 py-2.5 rounded-lg border border-stone-300 focus:outline-none focus:border-royal-800 bg-stone-50/50"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1">
                        Date of Birth *
                      </label>
                      <input
                        type="date"
                        required
                        value={formData.dob}
                        onChange={(e) => setFormData({...formData, dob: e.target.value})}
                        className="w-full text-xs px-3.5 py-2.5 rounded-lg border border-stone-300 focus:outline-none focus:border-royal-800 bg-stone-50/50"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1">
                        Gender
                      </label>
                      <select
                        value={formData.gender}
                        onChange={(e) => setFormData({...formData, gender: e.target.value})}
                        className="w-full text-xs px-3.5 py-2.5 rounded-lg border border-stone-300 focus:outline-none focus:border-royal-800 bg-stone-50/50"
                      >
                        <option>Male</option>
                        <option>Female</option>
                        <option>Other</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1">
                        Grade Applying For *
                      </label>
                      <select
                        value={formData.gradeApplying}
                        onChange={(e) => setFormData({...formData, gradeApplying: e.target.value})}
                        className="w-full text-xs px-3.5 py-2.5 rounded-lg border border-stone-300 focus:outline-none focus:border-royal-800 bg-stone-50/50"
                      >
                        <option>Nursery (Ages 3+)</option>
                        <option>LKG / UKG (Ages 4-5)</option>
                        <option>Grade 1</option>
                        <option>Grade 2</option>
                        <option>Grade 3</option>
                        <option>Grade 4</option>
                        <option>Grade 5</option>
                        <option>Grade 6</option>
                        <option>Grade 7</option>
                        <option>Grade 8</option>
                        <option>Grade 9</option>
                        <option>Grade 10</option>
                        <option>Grade 11</option>
                      </select>
                    </div>

                    {formData.gradeApplying.includes('11') && (
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1">
                          Chosen Senior Stream
                        </label>
                        <select
                          value={formData.stream}
                          onChange={(e) => setFormData({...formData, stream: e.target.value})}
                          className="w-full text-xs px-3.5 py-2.5 rounded-lg border border-stone-300 focus:outline-none focus:border-royal-800 bg-stone-50/50"
                        >
                          <option>Science (PCM + Computer Science/AI)</option>
                          <option>Science (PCB + Biotechnology)</option>
                          <option>Commerce with Applied Mathematics</option>
                          <option>Humanities & Liberal Arts</option>
                        </select>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* STEP 2: Academic History */}
              {currentStep === 2 && (
                <div className="space-y-4 animate-fadeIn">
                  <h4 className="font-cinzel text-base font-bold text-royal-950 border-b border-stone-100 pb-2">
                    Step 2: Prior Schooling & Interests
                  </h4>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1">
                      Current / Previous School Name
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. St. Xavier's School"
                      value={formData.previousSchool}
                      onChange={(e) => setFormData({...formData, previousSchool: e.target.value})}
                      className="w-full text-xs px-3.5 py-2.5 rounded-lg border border-stone-300 focus:outline-none focus:border-royal-800 bg-stone-50/50"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1">
                      Last Academic Grade / Percentage Obtained
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. 94.5% or Grade A+"
                      value={formData.lastGradePercentage}
                      onChange={(e) => setFormData({...formData, lastGradePercentage: e.target.value})}
                      className="w-full text-xs px-3.5 py-2.5 rounded-lg border border-stone-300 focus:outline-none focus:border-royal-800 bg-stone-50/50"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1">
                      Special Interests, Talents, or Sports
                    </label>
                    <textarea
                      rows="2"
                      placeholder="e.g. Swimming, Chess, Robotics, Classical Music..."
                      value={formData.specialInterests}
                      onChange={(e) => setFormData({...formData, specialInterests: e.target.value})}
                      className="w-full text-xs px-3.5 py-2.5 rounded-lg border border-stone-300 focus:outline-none focus:border-royal-800 bg-stone-50/50"
                    ></textarea>
                  </div>
                </div>
              )}

              {/* STEP 3: Parent Info */}
              {currentStep === 3 && (
                <div className="space-y-4 animate-fadeIn">
                  <h4 className="font-cinzel text-base font-bold text-royal-950 border-b border-stone-100 pb-2">
                    Step 3: Parent & Contact Information
                  </h4>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1">
                      Primary Parent / Guardian Name *
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

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1">
                        Mobile Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        value={formData.parentPhone}
                        onChange={(e) => setFormData({...formData, parentPhone: e.target.value})}
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
                        value={formData.parentEmail}
                        onChange={(e) => setFormData({...formData, parentEmail: e.target.value})}
                        className="w-full text-xs px-3.5 py-2.5 rounded-lg border border-stone-300 focus:outline-none focus:border-royal-800 bg-stone-50/50"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1">
                      Residential Address *
                    </label>
                    <textarea
                      rows="2"
                      required
                      placeholder="Street, Landmark, City, Pincode"
                      value={formData.address}
                      onChange={(e) => setFormData({...formData, address: e.target.value})}
                      className="w-full text-xs px-3.5 py-2.5 rounded-lg border border-stone-300 focus:outline-none focus:border-royal-800 bg-stone-50/50"
                    ></textarea>
                  </div>
                </div>
              )}

              {/* STEP 4: Review & Final Submission */}
              {currentStep === 4 && (
                <div className="space-y-4 animate-fadeIn">
                  <h4 className="font-cinzel text-base font-bold text-royal-950 border-b border-stone-100 pb-2">
                    Step 4: Application Verification
                  </h4>

                  <div className="bg-ivory-50 p-4 rounded-2xl border border-stone-200 space-y-2 text-xs text-stone-700">
                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <span className="text-stone-400 block">Applicant:</span>
                        <strong className="text-stone-900">{formData.studentName || 'Not entered'}</strong>
                      </div>
                      <div>
                        <span className="text-stone-400 block">Grade Seeking:</span>
                        <strong className="text-stone-900">{formData.gradeApplying}</strong>
                      </div>
                      <div>
                        <span className="text-stone-400 block">Parent / Guardian:</span>
                        <strong className="text-stone-900">{formData.parentName || 'Not entered'}</strong>
                      </div>
                      <div>
                        <span className="text-stone-400 block">Contact Phone:</span>
                        <strong className="text-stone-900">{formData.parentPhone || 'Not entered'}</strong>
                      </div>
                    </div>
                  </div>

                  <div className="p-3 bg-amber-50 rounded-xl border border-amber-200 text-xs text-amber-900 flex items-start gap-2">
                    <Award size={16} className="text-amber-700 shrink-0 mt-0.5" />
                    <span>
                      By clicking submit, you confirm the veracity of all provided credentials. No application fee is charged at this preliminary stage.
                    </span>
                  </div>
                </div>
              )}

              {/* Modal Actions Footer */}
              <div className="pt-4 border-t border-stone-200 flex items-center justify-between">
                {currentStep > 1 ? (
                  <button
                    type="button"
                    onClick={handleBack}
                    className="flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-stone-700 hover:text-stone-900 bg-stone-100 hover:bg-stone-200 rounded-lg transition-colors"
                  >
                    <ChevronLeft size={16} />
                    <span>Back</span>
                  </button>
                ) : (
                  <div></div>
                )}

                <button
                  type="submit"
                  className="btn-royal text-xs py-2.5 px-6 font-bold flex items-center gap-2"
                >
                  <span>{currentStep === 4 ? 'Complete & Submit Application' : 'Proceed to Next Step'}</span>
                  <ChevronRight size={16} />
                </button>
              </div>

            </form>
          )}
        </div>

      </div>
    </div>
  );
}

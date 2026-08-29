import React, { useState } from 'react';
import { X, UserCheck, Lock, Bus, CreditCard, BookOpen, AlertCircle } from 'lucide-react';

export default function PortalLoginModal({ isOpen, onClose }) {
  const [activeTab, setActiveTab] = useState('parent');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLogged, setIsLogged] = useState(false);

  if (!isOpen) return null;

  const handleLogin = (e) => {
    e.preventDefault();
    setIsLogged(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white rounded-3xl shadow-2xl border border-stone-200 w-full max-w-md overflow-hidden animate-scaleUp">
        
        {/* Header */}
        <div className="bg-royal-950 text-white p-6 relative border-b-2 border-gold-500">
          <button 
            onClick={onClose}
            className="absolute top-5 right-5 p-2 text-stone-400 hover:text-white rounded-lg hover:bg-royal-900 transition-colors"
          >
            <X size={20} />
          </button>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-royal-900 p-1.5 flex items-center justify-center border border-gold-400/40 text-gold-400">
              <UserCheck size={22} />
            </div>
            <div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-gold-400">
                Aryans Digital Campus Suite
              </span>
              <h3 className="font-cinzel text-xl font-bold text-white">
                Institutional Portal Login
              </h3>
            </div>
          </div>
        </div>

        {/* Tab selector */}
        <div className="grid grid-cols-2 bg-stone-100 p-1.5 border-b border-stone-200 text-xs font-bold">
          <button
            onClick={() => { setActiveTab('parent'); setIsLogged(false); }}
            className={`py-2 rounded-lg transition-all ${
              activeTab === 'parent' ? 'bg-white text-royal-900 shadow-xs' : 'text-stone-600'
            }`}
          >
            Parent / Guardian Portal
          </button>
          <button
            onClick={() => { setActiveTab('student'); setIsLogged(false); }}
            className={`py-2 rounded-lg transition-all ${
              activeTab === 'student' ? 'bg-white text-royal-900 shadow-xs' : 'text-stone-600'
            }`}
          >
            Student & Faculty Portal
          </button>
        </div>

        {/* Body */}
        <div className="p-6">
          {isLogged ? (
            <div className="space-y-4 text-center py-4">
              <div className="p-3 bg-emerald-50 rounded-2xl border border-emerald-200 text-emerald-800 text-xs font-semibold">
                Welcome back to Aryans Smart Campus!
              </div>

              <div className="grid grid-cols-2 gap-3 text-left">
                <div className="p-3 bg-ivory-50 rounded-xl border border-stone-200 flex items-center gap-2 text-xs font-bold text-stone-800">
                  <BookOpen size={16} className="text-royal-800" />
                  <span>Academic Gradebook</span>
                </div>
                <div className="p-3 bg-ivory-50 rounded-xl border border-stone-200 flex items-center gap-2 text-xs font-bold text-stone-800">
                  <CreditCard size={16} className="text-royal-800" />
                  <span>Online Fee Payment</span>
                </div>
                <div className="p-3 bg-ivory-50 rounded-xl border border-stone-200 flex items-center gap-2 text-xs font-bold text-stone-800">
                  <Bus size={16} className="text-royal-800" />
                  <span>Live GPS Bus Tracking</span>
                </div>
                <div className="p-3 bg-ivory-50 rounded-xl border border-stone-200 flex items-center gap-2 text-xs font-bold text-stone-800">
                  <UserCheck size={16} className="text-royal-800" />
                  <span>Attendance & LMS</span>
                </div>
              </div>

              <button
                onClick={() => setIsLogged(false)}
                className="text-xs font-semibold text-royal-800 underline"
              >
                Log Out
              </button>
            </div>
          ) : (
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1">
                  {activeTab === 'parent' ? 'Registered Parent Mobile / User ID' : 'Student Scholar ID / Faculty ID'}
                </label>
                <input
                  type="text"
                  required
                  placeholder={activeTab === 'parent' ? 'e.g. 9876543210' : 'e.g. AIS/2026/8942'}
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full text-xs px-3.5 py-2.5 rounded-lg border border-stone-300 focus:outline-none focus:border-royal-800 bg-stone-50/50"
                />
              </div>

              <div>
                <div className="flex justify-between items-center mb-1">
                  <label className="block text-xs font-bold uppercase tracking-wider text-stone-700">
                    Password / OTP
                  </label>
                  <a href="#" className="text-[11px] text-royal-800 hover:underline">Forgot password?</a>
                </div>
                <input
                  type="password"
                  required
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full text-xs px-3.5 py-2.5 rounded-lg border border-stone-300 focus:outline-none focus:border-royal-800 bg-stone-50/50"
                />
              </div>

              <button
                type="submit"
                className="w-full btn-royal text-xs py-3 font-bold mt-2"
              >
                Sign In to Portal
              </button>

              <div className="text-center pt-2">
                <span className="text-[11px] text-stone-500">
                  New parent? <a href="#admissions" onClick={onClose} className="text-royal-800 font-bold underline">Apply for admissions</a>
                </span>
              </div>
            </form>
          )}
        </div>

      </div>
    </div>
  );
}

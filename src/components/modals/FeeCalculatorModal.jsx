import React, { useState } from 'react';
import { X, Calculator, Check, ShieldCheck, Printer, ArrowRight, Download } from 'lucide-react';
import { feeTiers, transportZones, optionalAddons } from '../../data/admissionsData';

export default function FeeCalculatorModal({ isOpen, onClose, onOpenApplication }) {
  const [selectedTier, setSelectedTier] = useState('primary');
  const [selectedTransport, setSelectedTransport] = useState('none');
  const [selectedAddons, setSelectedAddons] = useState(['robotics-club']);

  if (!isOpen) return null;

  const currentTierData = feeTiers[selectedTier] || feeTiers['primary'];
  const currentTransportData = transportZones.find(t => t.id === selectedTransport) || transportZones[0];

  const handleToggleAddon = (addonId) => {
    if (selectedAddons.includes(addonId)) {
      setSelectedAddons(selectedAddons.filter(id => id !== addonId));
    } else {
      setSelectedAddons([...selectedAddons, addonId]);
    }
  };

  // Calculations
  const tuitionQuarterly = currentTierData.tuitionPerQuarter;
  const transportQuarterly = currentTransportData.feePerQuarter;
  const addonsQuarterly = selectedAddons.reduce((sum, id) => {
    const addon = optionalAddons.find(a => a.id === id);
    return sum + (addon ? addon.feePerQuarter : 0);
  }, 0);

  const totalQuarterlyFee = tuitionQuarterly + transportQuarterly + addonsQuarterly;
  
  // Annual calculation (4 Quarters + One-Time Admission + Annual Development + Activity Kit)
  const totalAnnualTuitionAndTransport = totalQuarterlyFee * 4;
  const oneTimeAndAnnualFixed = currentTierData.admissionFee + currentTierData.annualDevelopmentFee + currentTierData.activityAndKitFee;
  const estimatedFirstYearTotal = totalAnnualTuitionAndTransport + oneTimeAndAnnualFixed;

  const handlePrintQuotation = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white rounded-3xl shadow-2xl border border-stone-200 w-full max-w-4xl overflow-hidden animate-scaleUp max-h-[90vh] flex flex-col">
        
        {/* Modal Header */}
        <div className="bg-royal-950 text-white p-6 relative border-b-2 border-gold-500 shrink-0">
          <button 
            onClick={onClose}
            className="absolute top-5 right-5 p-2 text-stone-400 hover:text-white rounded-lg hover:bg-royal-900 transition-colors"
          >
            <X size={20} />
          </button>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-royal-900 p-1.5 flex items-center justify-center border border-gold-400/40 text-gold-400">
              <Calculator size={22} />
            </div>
            <div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-gold-400">
                Institutional Financial Transparency
              </span>
              <h3 className="font-cinzel text-xl font-bold text-white">
                Tuition & Campus Fee Estimator
              </h3>
            </div>
          </div>
        </div>

        {/* Modal Body Grid */}
        <div className="p-6 sm:p-8 overflow-y-auto flex-1 grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Controls (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* 1. Grade Tier Selector */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-2">
                1. Select Academic Grade Level
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {Object.entries(feeTiers).map(([key, tier]) => {
                  const isSelected = selectedTier === key;
                  return (
                    <button
                      key={key}
                      onClick={() => setSelectedTier(key)}
                      className={`p-3 rounded-xl text-left transition-all border ${
                        isSelected
                          ? 'bg-royal-900 text-white border-gold-400 shadow-md'
                          : 'bg-stone-50 hover:bg-stone-100 border-stone-200 text-stone-800'
                      }`}
                    >
                      <span className={`text-xs font-bold block ${isSelected ? 'text-gold-300' : 'text-stone-900'}`}>
                        {tier.name}
                      </span>
                      <span className="text-[11px] opacity-80 mt-0.5 block">
                        ₹{tier.tuitionPerQuarter.toLocaleString()} / qtr
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 2. Transport Zone Selector */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-2">
                2. School Transport Route (GPS & Attendant)
              </label>
              <div className="space-y-2">
                {transportZones.map((zone) => {
                  const isSelected = selectedTransport === zone.id;
                  return (
                    <button
                      key={zone.id}
                      onClick={() => setSelectedTransport(zone.id)}
                      className={`w-full p-2.5 rounded-xl text-left transition-all border flex items-center justify-between text-xs ${
                        isSelected
                          ? 'bg-royal-50 border-royal-800 text-royal-900 font-bold'
                          : 'bg-stone-50 hover:bg-stone-100 border-stone-200 text-stone-700 font-medium'
                      }`}
                    >
                      <span>{zone.name}</span>
                      <span className="font-semibold text-royal-950">
                        {zone.feePerQuarter === 0 ? '₹0' : `₹${zone.feePerQuarter.toLocaleString()} / qtr`}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 3. Optional Add-ons */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-2">
                3. Optional Co-Curricular & Day-Boarding Modules
              </label>
              <div className="space-y-2">
                {optionalAddons.map((addon) => {
                  const isChecked = selectedAddons.includes(addon.id);
                  return (
                    <div
                      key={addon.id}
                      onClick={() => handleToggleAddon(addon.id)}
                      className={`p-2.5 rounded-xl cursor-pointer transition-all border flex items-center justify-between text-xs ${
                        isChecked
                          ? 'bg-gold-50/80 border-gold-400 text-stone-900 font-semibold'
                          : 'bg-stone-50 hover:bg-stone-100 border-stone-200 text-stone-600'
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <div className={`w-4 h-4 rounded flex items-center justify-center border ${
                          isChecked ? 'bg-gold-500 border-gold-600 text-white' : 'border-stone-400'
                        }`}>
                          {isChecked && <Check size={12} strokeWidth={3} />}
                        </div>
                        <span>{addon.name}</span>
                      </div>
                      <span className="font-bold text-royal-900">
                        +₹{addon.feePerQuarter.toLocaleString()} / qtr
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Right Summary Breakdown Card (5 cols) */}
          <div className="lg:col-span-5 bg-ivory-50 rounded-2xl p-6 border border-stone-200 flex flex-col justify-between shadow-xs">
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-stone-200 pb-3">
                <h4 className="font-cinzel text-base font-bold text-royal-950">
                  Fee Summary Quotation
                </h4>
                <span className="badge-gold">
                  Session 2026–27
                </span>
              </div>

              {/* Quarterly Breakdown */}
              <div className="space-y-2 text-xs">
                <div className="flex justify-between text-stone-600">
                  <span>Tuition Fee (Quarterly):</span>
                  <span className="font-bold text-stone-900">₹{tuitionQuarterly.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-stone-600">
                  <span>Transport (Quarterly):</span>
                  <span className="font-bold text-stone-900">₹{transportQuarterly.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-stone-600">
                  <span>Co-Curricular Addons:</span>
                  <span className="font-bold text-stone-900">₹{addonsQuarterly.toLocaleString()}</span>
                </div>

                <div className="pt-2 border-t border-stone-200 flex justify-between text-sm font-bold text-royal-900">
                  <span>Total Per Quarter:</span>
                  <span className="text-base font-cinzel">₹{totalQuarterlyFee.toLocaleString()}</span>
                </div>
                <p className="text-[10px] text-stone-400 italic">Payable in 4 equal quarterly installments.</p>
              </div>

              {/* One-Time & Annual Fees */}
              <div className="p-3 bg-white rounded-xl border border-stone-200 space-y-1.5 text-xs">
                <span className="text-[10px] font-bold uppercase tracking-wider text-stone-400 block">
                  One-Time & Annual Components
                </span>
                <div className="flex justify-between text-stone-600">
                  <span>One-Time Admission Fee:</span>
                  <span className="font-semibold text-stone-900">₹{currentTierData.admissionFee.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-stone-600">
                  <span>Annual Development:</span>
                  <span className="font-semibold text-stone-900">₹{currentTierData.annualDevelopmentFee.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-stone-600">
                  <span>Activity & Learning Kit:</span>
                  <span className="font-semibold text-stone-900">₹{currentTierData.activityAndKitFee.toLocaleString()}</span>
                </div>
              </div>

              {/* Grand Estimated First Year Total */}
              <div className="p-4 bg-royal-950 text-white rounded-2xl border-2 border-gold-400">
                <span className="text-[10px] uppercase font-bold tracking-widest text-gold-300 block">
                  Estimated Total 1st Year Outlay
                </span>
                <span className="font-cinzel text-2xl font-black text-gold-shimmer block mt-1">
                  ₹{estimatedFirstYearTotal.toLocaleString()}
                </span>
                <p className="text-[10px] text-stone-400 mt-1">
                  Includes all 4 quarters, admission, development, and selected modules.
                </p>
              </div>
            </div>

            {/* Action buttons */}
            <div className="pt-6 space-y-2">
              <button
                onClick={() => {
                  onClose();
                  onOpenApplication();
                }}
                className="w-full btn-royal text-xs py-3 font-bold flex items-center justify-center gap-2"
              >
                <span>Proceed to Apply with this Plan</span>
                <ArrowRight size={14} />
              </button>

              <button
                onClick={handlePrintQuotation}
                className="w-full flex items-center justify-center gap-1.5 py-2 text-xs font-semibold text-stone-700 hover:text-stone-900"
              >
                <Printer size={13} />
                <span>Print / Save Fee Estimate</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}

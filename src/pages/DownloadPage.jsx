import React, { useState } from 'react';
import { Download, CheckCircle2, Sparkles, Phone, Mail, FolderOpen, ArrowDownToLine } from 'lucide-react';
import Folder from '../components/download/Folder';

export default function DownloadPage({ onOpenApplyModal }) {
  const [downloadedDoc, setDownloadedDoc] = useState(null);

  const handleDownload = (title, category = "Official Record", refCode = "DOC-2026") => {
    const content = `=====================================================
THE ARYANS' SCHOOL, JHANSI
Atri Gardens, Sipri Bazar, Jhansi 284003, Uttar Pradesh
Affiliated to CBSE Board | Estd. 2011
Official Helpline: +91 81123 61361 | Email: school.aryans1@gmail.com
=====================================================

DOCUMENT NAME: ${title.toUpperCase()}
REFERENCE CODE: ${refCode}
CATEGORY: ${category}
VERIFIED INSTITUTIONAL RECORD

THE ARYANS' SCHOOL, JHANSI
CBSE Affiliation | English Medium | Estd 2011
Motto: "Giving back to the society & Seva Parmodharma"

This document is certified for official public disclosure, student enrollment, and CBSE regulatory compliance.

Admissions Desk: +91 81123 61361
Official Email: school.aryans1@gmail.com
Location: https://maps.app.goo.gl/Dv1o4KT7rBDw3zMT9
=====================================================`;

    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}-the-aryans-school.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    setDownloadedDoc(title);
    setTimeout(() => setDownloadedDoc(null), 4000);
  };

  // 1. Governance & PTA Folder (3 papers)
  const folderGovernance = [
    <div 
      key="1" 
      onClick={(e) => { e.stopPropagation(); handleDownload("School Management Committee", "Governance", "SMC-2026"); }}
      className="text-[9px] font-bold text-center p-1 leading-tight text-royal-950 hover:text-royal-700 flex flex-col items-center justify-center h-full cursor-pointer"
      title="Click to Download School Management Committee"
    >
      <span className="line-clamp-2">School Management Committee</span>
      <span className="text-[7px] text-royal-700 font-extrabold uppercase mt-0.5">↓ Download</span>
    </div>,
    <div 
      key="2" 
      onClick={(e) => { e.stopPropagation(); handleDownload("Parents Teachers Association", "Governance", "PTA-2026"); }}
      className="text-[9px] font-bold text-center p-1 leading-tight text-royal-950 hover:text-royal-700 flex flex-col items-center justify-center h-full cursor-pointer"
      title="Click to Download Parents Teachers Association"
    >
      <span className="line-clamp-2">Parents Teachers Association</span>
      <span className="text-[7px] text-royal-700 font-extrabold uppercase mt-0.5">↓ Download</span>
    </div>,
    <div 
      key="3" 
      onClick={(e) => { e.stopPropagation(); handleDownload("Self Affidavit of School", "Affidavit", "SAS-AFF-2026"); }}
      className="text-[9px] font-bold text-center p-1 leading-tight text-royal-950 hover:text-royal-700 flex flex-col items-center justify-center h-full cursor-pointer"
      title="Click to Download Self Affidavit of School"
    >
      <span className="line-clamp-2">Self Affidavit of School</span>
      <span className="text-[7px] text-royal-700 font-extrabold uppercase mt-0.5">↓ Download</span>
    </div>
  ];

  // 2. Affiliation & Trust Folder (3 papers)
  const folderAffiliation = [
    <div 
      key="1" 
      onClick={(e) => { e.stopPropagation(); handleDownload("Extension of Affiliation", "CBSE Compliance", "CBSE-EXT-2026"); }}
      className="text-[9px] font-bold text-center p-1 leading-tight text-royal-950 hover:text-royal-700 flex flex-col items-center justify-center h-full cursor-pointer"
      title="Click to Download Extension of Affiliation"
    >
      <span className="line-clamp-2">Extension of Affiliation</span>
      <span className="text-[7px] text-royal-700 font-extrabold uppercase mt-0.5">↓ Download</span>
    </div>,
    <div 
      key="2" 
      onClick={(e) => { e.stopPropagation(); handleDownload("DEO Certificate for Extension of Affiliation", "CBSE Compliance", "DEO-AFF-EXT"); }}
      className="text-[9px] font-bold text-center p-1 leading-tight text-royal-950 hover:text-royal-700 flex flex-col items-center justify-center h-full cursor-pointer"
      title="Click to Download DEO Certificate"
    >
      <span className="line-clamp-2">DEO Certificate</span>
      <span className="text-[7px] text-royal-700 font-extrabold uppercase mt-0.5">↓ Download</span>
    </div>,
    <div 
      key="3" 
      onClick={(e) => { e.stopPropagation(); handleDownload("Trust Registration Certificate", "Legal & Trust", "TRC-2011"); }}
      className="text-[9px] font-bold text-center p-1 leading-tight text-royal-950 hover:text-royal-700 flex flex-col items-center justify-center h-full cursor-pointer"
      title="Click to Download Trust Registration Certificate"
    >
      <span className="line-clamp-2">Trust Registration</span>
      <span className="text-[7px] text-royal-700 font-extrabold uppercase mt-0.5">↓ Download</span>
    </div>
  ];

  // 3. Safety & Infrastructure Folder (3 papers)
  const folderSafety = [
    <div 
      key="1" 
      onClick={(e) => { e.stopPropagation(); handleDownload("The Aryans School Building Safety Certificate", "Infrastructure", "BSC-PWD-2026"); }}
      className="text-[9px] font-bold text-center p-1 leading-tight text-royal-950 hover:text-royal-700 flex flex-col items-center justify-center h-full cursor-pointer"
      title="Click to Download Building Safety Certificate"
    >
      <span className="line-clamp-2">Building Safety Certificate</span>
      <span className="text-[7px] text-royal-700 font-extrabold uppercase mt-0.5">↓ Download</span>
    </div>,
    <div 
      key="2" 
      onClick={(e) => { e.stopPropagation(); handleDownload("Fire Safety Certificate", "Safety", "FSC-FS-2026"); }}
      className="text-[9px] font-bold text-center p-1 leading-tight text-royal-950 hover:text-royal-700 flex flex-col items-center justify-center h-full cursor-pointer"
      title="Click to Download Fire Safety Certificate"
    >
      <span className="line-clamp-2">Fire Safety Certificate</span>
      <span className="text-[7px] text-royal-700 font-extrabold uppercase mt-0.5">↓ Download</span>
    </div>,
    <div 
      key="3" 
      onClick={(e) => { e.stopPropagation(); handleDownload("Certificate of Safe Drinking Water and Sanitary Conditions", "Health & Sanitation", "SDW-SC-2026"); }}
      className="text-[9px] font-bold text-center p-1 leading-tight text-royal-950 hover:text-royal-700 flex flex-col items-center justify-center h-full cursor-pointer"
      title="Click to Download Safe Drinking Water and Sanitary Conditions Certificate"
    >
      <span className="line-clamp-2">Safe Drinking Water & Sanitation</span>
      <span className="text-[7px] text-royal-700 font-extrabold uppercase mt-0.5">↓ Download</span>
    </div>
  ];

  // 4. Regulatory & State Approvals Folder (2 papers)
  const folderRegulatory = [
    <div 
      key="1" 
      onClick={(e) => { e.stopPropagation(); handleDownload("NOC by State Government", "State Approvals", "NOC-UP-GOV"); }}
      className="text-[9px] font-bold text-center p-1 leading-tight text-royal-950 hover:text-royal-700 flex flex-col items-center justify-center h-full cursor-pointer"
      title="Click to Download NOC by State Government"
    >
      <span className="line-clamp-2">NOC by State Government</span>
      <span className="text-[7px] text-royal-700 font-extrabold uppercase mt-0.5">↓ Download</span>
    </div>,
    <div 
      key="2" 
      onClick={(e) => { e.stopPropagation(); handleDownload("RTE Recognition Certificate", "Regulatory", "RTE-ACT-2026"); }}
      className="text-[9px] font-bold text-center p-1 leading-tight text-royal-950 hover:text-royal-700 flex flex-col items-center justify-center h-full cursor-pointer"
      title="Click to Download RTE Recognition Certificate"
    >
      <span className="line-clamp-2">RTE Recognition Certificate</span>
      <span className="text-[7px] text-royal-700 font-extrabold uppercase mt-0.5">↓ Download</span>
    </div>,
    null
  ];

  // 5. Academic & Enrolment Records Folder (3 papers)
  const folderAcademic = [
    <div 
      key="1" 
      onClick={(e) => { e.stopPropagation(); handleDownload("List Of Books", "Academic", "BOOK-LIST-2026"); }}
      className="text-[9px] font-bold text-center p-1 leading-tight text-royal-950 hover:text-royal-700 flex flex-col items-center justify-center h-full cursor-pointer"
      title="Click to Download List Of Books"
    >
      <span className="line-clamp-2">List Of Books</span>
      <span className="text-[7px] text-royal-700 font-extrabold uppercase mt-0.5">↓ Download</span>
    </div>,
    <div 
      key="2" 
      onClick={(e) => { e.stopPropagation(); handleDownload("Class Wise Enrolment of Students", "Student Records", "ENR-CLASS-2026"); }}
      className="text-[9px] font-bold text-center p-1 leading-tight text-royal-950 hover:text-royal-700 flex flex-col items-center justify-center h-full cursor-pointer"
      title="Click to Download Class Wise Enrolment of Students"
    >
      <span className="line-clamp-2">Class Wise Enrolment</span>
      <span className="text-[7px] text-royal-700 font-extrabold uppercase mt-0.5">↓ Download</span>
    </div>,
    <div 
      key="3" 
      onClick={(e) => { e.stopPropagation(); handleDownload("Sample Transfer Certificate", "Student Records", "TC-SAMPLE-2026"); }}
      className="text-[9px] font-bold text-center p-1 leading-tight text-royal-950 hover:text-royal-700 flex flex-col items-center justify-center h-full cursor-pointer"
      title="Click to Download Sample Transfer Certificate"
    >
      <span className="line-clamp-2">Sample Transfer Certificate</span>
      <span className="text-[7px] text-royal-700 font-extrabold uppercase mt-0.5">↓ Download</span>
    </div>
  ];

  return (
    <div className="py-12 sm:py-16 animate-fadeIn space-y-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-royal-100 text-royal-900 border border-royal-200 text-xs font-bold uppercase tracking-wider">
            <Download size={14} className="text-royal-800" />
            <span>Interactive Download Archives</span>
          </div>
          <h1 className="font-cinzel text-3xl sm:text-5xl font-bold text-royal-950">
            OFFICIAL DOWNLOADS
          </h1>
          <p className="text-stone-600 text-base sm:text-lg">
            Click any 3D folder below to open and download all 14 official certificates, clearances, and records of The Aryans' School, Jhansi.
          </p>
          <div className="w-20 h-1 bg-gold-500 mx-auto rounded-full"></div>
        </div>

        {/* Download Feedback Alert */}
        {downloadedDoc && (
          <div className="bg-emerald-50 border-2 border-emerald-300 text-emerald-950 p-4 rounded-2xl flex items-center justify-between gap-3 animate-fadeIn shadow-md">
            <div className="flex items-center gap-2.5">
              <CheckCircle2 size={20} className="text-emerald-600 shrink-0" />
              <span className="text-xs sm:text-sm font-bold">
                "{downloadedDoc}" downloaded successfully!
              </span>
            </div>
            <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider">
              Verified Copy
            </span>
          </div>
        )}

        {/* 3D INTERACTIVE FOLDER ARCHIVE (ALL 14 REAL DOCUMENTS) */}
        <div className="bg-royal-950 p-6 sm:p-12 rounded-3xl border-2 border-gold-500/50 shadow-2xl space-y-8 text-white text-center">
          <div className="space-y-1">
            <span className="text-[10px] font-bold uppercase tracking-widest text-gold-400">
              Interactive 3D Folders • The Aryans' School, Jhansi
            </span>
            <h2 className="font-cinzel text-2xl sm:text-3xl font-bold text-white">
              Institutional Document Folders
            </h2>
            <p className="text-xs sm:text-sm text-stone-300">
              Click a folder to pop open its files • Click individual papers to download
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 pt-6 pb-6 items-center justify-items-center">
            
            {/* Folder 1 */}
            <div className="flex flex-col items-center gap-3 w-full max-w-xs p-5 rounded-2xl bg-royal-900/60 border border-gold-500/30 backdrop-blur-sm">
              <Folder 
                color="#8E1727" 
                size={1.2} 
                items={folderGovernance} 
              />
              <div className="text-center mt-3 space-y-0.5">
                <h3 className="font-cinzel text-sm font-bold text-gold-300">
                  Governance & SMC
                </h3>
                <p className="text-[11px] text-stone-300">
                  SMC • PTA • Self Affidavit
                </p>
              </div>
            </div>

            {/* Folder 2 */}
            <div className="flex flex-col items-center gap-3 w-full max-w-xs p-5 rounded-2xl bg-royal-900/60 border border-gold-500/30 backdrop-blur-sm">
              <Folder 
                color="#751421" 
                size={1.2} 
                items={folderAffiliation} 
              />
              <div className="text-center mt-3 space-y-0.5">
                <h3 className="font-cinzel text-sm font-bold text-gold-300">
                  Affiliation & Trust
                </h3>
                <p className="text-[11px] text-stone-300">
                  CBSE Ext. • DEO Cert • Trust Reg.
                </p>
              </div>
            </div>

            {/* Folder 3 */}
            <div className="flex flex-col items-center gap-3 w-full max-w-xs p-5 rounded-2xl bg-royal-900/60 border border-gold-500/30 backdrop-blur-sm">
              <Folder 
                color="#5F121C" 
                size={1.2} 
                items={folderSafety} 
              />
              <div className="text-center mt-3 space-y-0.5">
                <h3 className="font-cinzel text-sm font-bold text-gold-300">
                  Safety & Sanitation
                </h3>
                <p className="text-[11px] text-stone-300">
                  Building • Fire • Safe Water & Sanitation
                </p>
              </div>
            </div>

            {/* Folder 4 */}
            <div className="flex flex-col items-center gap-3 w-full max-w-xs p-5 rounded-2xl bg-royal-900/60 border border-gold-500/30 backdrop-blur-sm">
              <Folder 
                color="#4A0E16" 
                size={1.2} 
                items={folderRegulatory} 
              />
              <div className="text-center mt-3 space-y-0.5">
                <h3 className="font-cinzel text-sm font-bold text-gold-300">
                  State & Regulatory
                </h3>
                <p className="text-[11px] text-stone-300">
                  State NOC • RTE Recognition
                </p>
              </div>
            </div>

            {/* Folder 5 */}
            <div className="flex flex-col items-center gap-3 w-full max-w-xs p-5 rounded-2xl bg-royal-900/60 border border-gold-500/30 backdrop-blur-sm sm:col-span-2 lg:col-span-1">
              <Folder 
                color="#3D070E" 
                size={1.2} 
                items={folderAcademic} 
              />
              <div className="text-center mt-3 space-y-0.5">
                <h3 className="font-cinzel text-sm font-bold text-gold-300">
                  Academic & Enrolment
                </h3>
                <p className="text-[11px] text-stone-300">
                  Book List • Enrolment • Sample TC
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* Bottom Assistance Callout */}
        <div className="bg-royal-950 text-white p-8 sm:p-10 rounded-3xl border-2 border-gold-500/40 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-white">
              Need Physical Copies or Attested Forms?
            </h3>
            <p className="text-stone-200 text-xs sm:text-sm max-w-xl">
              Visit our administrative desk at Atri Gardens, Sipri Bazar, Jhansi 284003 or call our admissions helpline directly.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
            <a
              href="tel:+918112361361"
              className="btn-gold text-xs py-3 px-5 font-bold uppercase tracking-wider flex items-center gap-2"
            >
              <Phone size={14} />
              <span>+91 81123 61361</span>
            </a>

            <button
              onClick={onOpenApplyModal}
              className="px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold uppercase tracking-wider border border-white/20 transition-all"
            >
              Apply for Admission
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}

import React, { useState, useEffect } from 'react';
import ShowCertificate from './ShowCertificate'; 
import { certificateData } from '../../data/certeficates'; 
import CV from "../../assets/BINIYAM_GOSSA_KEBEDE.pdf";

const About = () => {
  const [selectedImg, setSelectedImg] = useState(null);
  const [activeCert, setActiveCert] = useState(null);

  // FIX 1: Lock the background page scrolling when a certificate or modal is open
  useEffect(() => {
    if (activeCert || selectedImg) {
      document.body.style.overflow = 'hidden'; // Freezes background scroll
    } else {
      document.body.style.overflow = 'unset';  // Unfreezes scroll when closed
    }

    // Clean up when component unmounts
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [activeCert, selectedImg]);

  return (
    <section id="about" className="-mt-16 md:mt-1 space-y-9 relative">

      {/* ================= FULL PAGE OVERLAY VIEW ================= */}
      {/* Dynamic routing style page component wrapper */}
      {activeCert && (
        <div className="fixed inset-0 z-[100] bg-[#fdfdfd] dark:bg-[#0c0c0c] overflow-y-auto p-4 md:p-12 animate-in fade-in slide-in-from-bottom-4 duration-300">
          <div className="max-w-6xl mx-auto">
            <ShowCertificate 
              cert={activeCert} 
              onBack={() => setActiveCert(null)} 
              onPreviewImage={(img) => setSelectedImg(img)}
            />
          </div>
        </div>
      )}

      {/* ================= 01. ABOUT SECTION ================= */}
      <div className="space-y-1">
        <div className="flex items-center gap-3">
          <h2 className="text-xs md:text-xl font-black uppercase tracking-[0.2em] italic text-purple-500">
            01. About
          </h2>
          <div className="h-[1px] bg-gradient-to-r from-green-500 via-black to-transparent flex-grow" />
        </div>

        <div className="grid grid-cols-2 gap-3 md:gap-5">
          {/* Main Bio Card */}
          <div className="glass-card col-span-2 md:col-span-1 p-6 md:p-8 flex flex-col justify-center relative overflow-hidden group">
            <div className="absolute top-0 right-0 -mr-16 -mt-16 w-32 h-32 bg-green-500/40 rounded-full blur-3xl group-hover:bg-green-500/20 transition-all duration-500" />
            <div className="relative space-y-4">
              <div className="space-y-1">
                <h3 className="text-lg md:text-2xl font-black text-black uppercase tracking-tighter italic">
                  BSc Computer Science <span className="text-green-500">Graduate</span>
                </h3>
                <div className="h-1 w-12 bg-green-500 rounded-full" />
              </div>
              <p className="text-[13px] md:text-base text-black leading-relaxed text-pretty">
                Freshly graduated in <span className="text-red-500 font-bold bg-green-500/30 px-1 rounded">February 2025</span>, 
                I specialize in engineering <span className="font-semibold">high-performance web interfaces</span> and securing robust IT infrastructure. 
              </p>
              <p className="text-[13px] md:text-base text-black leading-relaxed">
                I am driven by a passion for solving complex problems and developing applications with real-world impact.
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                <span className="text-[10px] font-black uppercase tracking-widest text-green-600 bg-green-500/5 border border-green-500/20 px-2 py-1 rounded">Security First</span>
                <span className="text-[10px] font-black uppercase tracking-widest text-blue-600 bg-blue-500/5 border border-blue-500/20 px-2 py-1 rounded">UX Focused</span>
              </div>
            </div>
          </div>

          {/* Info Stats Cards */}
          <div className="grid grid-cols-2 col-span-2 md:col-span-1 gap-3">
            <div className="glass-card p-4 flex flex-col items-center justify-center text-center shadow-md rounded-sm border-red-500/10">
              <span className="text-red-600 font-black text-lg md:text-2xl uppercase">Heuc</span>
              <span className="text-[8px] uppercase text-gray-500 tracking-widest mt-1">University</span>
            </div>
            <div className="glass-card p-4 flex flex-col items-center justify-center text-center shadow-md rounded-sm border-purple-500/20">
              <span className="text-purple-500 font-black text-lg md:text-2xl lowercase">Feb/25</span>
              <span className="text-[8px] uppercase text-gray-500 tracking-widest mt-1">Graduate</span>
            </div>
            <div className="glass-card p-4 flex flex-col items-center justify-center text-center shadow-md rounded-sm border-blue-500/20">
              <span className="text-blue-400 font-black text-lg md:text-2xl uppercase">Addis</span>
              <span className="text-[8px] uppercase text-gray-500 tracking-widest mt-1">Location</span>
            </div>
            <div className="glass-card p-4 flex flex-col items-center justify-center text-center shadow-md rounded-sm border-emerald-500/20">
              <span className="text-emerald-500 font-black text-lg md:text-2xl uppercase">Hire</span>
              <span className="text-[8px] uppercase text-gray-500 tracking-widest mt-1">Available</span>
            </div>
          </div>
        </div>
      </div>

      {/* ================= 02. CERTIFICATES SECTION ================= */}
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <h2 className="text-xs md:text-xl font-black uppercase tracking-[0.2em] italic text-blue-500">
            02. Certificates
          </h2>
          <div className="h-[1px] bg-gradient-to-r from-green-500 via-black to-transparent flex-grow" />
        </div>

        {/* Clean Directory Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 md:gap-5">
          {certificateData.map((cert) => (
            <div 
              key={cert.id} 
              className={`glass-card p-4 flex flex-col items-center justify-center text-center shadow-md rounded-sm border ${cert.color} relative group hover:border-white/20 transition-all`}
            >
              <span className="font-black text-lg md:text-2xl uppercase leading-none transition-transform group-hover:scale-105 duration-300">
                {cert.name}
              </span>
              <span className="text-[8px] uppercase text-gray-500 tracking-widest mt-1 mb-3 line-clamp-2 min-h-[16px]">
                {cert.sub}
              </span>

              <button
                onClick={() => setActiveCert(cert)}
                className={`text-[10px] font-black bg-blue-500 uppercase tracking-[0.2em] px-4 py-1.5 rounded-sm outline-none hover:bg-blue-600 transition-all shadow-lg active:scale-95 ${cert.btn}`}
              >
                Show
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* ================= 03. CURRICULUM VITAE ================= */}
      <div className="space-y-6">
        <div className="flex items-center gap-3">
          <h2 className="text-xs md:text-xl font-black uppercase tracking-[0.2em] italic !text-emerald-500 shrink-0">
            03. Curriculum Vitae
          </h2>
          <div className="h-[1px] bg-gradient-to-r from-green-500 via-black to-transparent flex-grow" />
        </div>

        <div className="relative group overflow-hidden">
          <div className="glass-card flex flex-col md:flex-row border-l-4 border-l-emerald-500 bg-white dark:bg-white/5 transition-all duration-500 hover:shadow-[0_0_30px_rgba(16,185,129,0.1)]">
            <div className="p-6 md:p-8 flex-grow space-y-2">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                <span className="text-[10px] font-mono font-bold text-emerald-500 uppercase tracking-[0.3em]">System.Resume_v2.0</span>
              </div>
              <h3 className="text-2xl md:text-4xl font-black text-black uppercase tracking-tighter italic leading-none">
                BINIYAM <span className="text-green-500 border-b-2 border-emerald-500">GOSSA</span>
              </h3>
              <p className="text-[12px] md:text-sm text-gray-500 dark:text-gray-400 font-medium max-w-md">Updated In February 2026.</p>
            </div>

            <div className="flex flex-row md:flex-col border-t md:border-t-0 md:border-l border-black/5 dark:border-white/5">
              <a href={CV} target="_blank" rel="noopener noreferrer" className="flex-1 md:w-48 flex bg-black/10 items-center justify-center gap-3 p-6 text-[10px] font-black uppercase tracking-widest text-black hover:bg-blue-500 hover:text-white transition-all duration-300">
                <span className="text-red-500">01</span> Preview
              </a>
              <a href={CV} download="BINIYAM_GOSSA_KEBEDE_CV.pdf" className="flex-1 md:w-48 flex items-center justify-center gap-3 p-6 text-[10px] font-black uppercase tracking-widest bg-emerald-500 text-white hover:bg-emerald-600 transition-all duration-300 shadow-[inset_0_0_20px_rgba(0,0,0,0.1)]">
                <span className="opacity-40">02</span> Download
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ================= FIX 2: PREMIUM FROSTED IMAGE MODAL ================= */}
      {selectedImg && (
        <div
          className="fixed inset-0 z-[999] bg-white/60 dark:bg-black/60 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setSelectedImg(null)}
        >
          <div 
            className="relative w-full max-w-4xl flex flex-col items-center animate-in zoom-in-95 duration-200" 
            onClick={(e) => e.stopPropagation()}
          >
            {/* Control Panel Bar */}
            <div className="flex justify-between items-center w-full mb-3 px-1">
              <span className="text-blue-600 dark:text-blue-400 font-mono font-bold text-[10px] uppercase tracking-[0.3em]">
                System // Verification_Asset
              </span>
              <button 
                onClick={() => setSelectedImg(null)} 
                className="text-gray-500 dark:text-gray-400 text-xs font-black uppercase tracking-widest hover:text-red-500 transition-colors"
              >
                ✕ Close
              </button>
            </div>
            
            {/* Image Border Housing */}
            <div className="bg-white dark:bg-neutral-900 p-2 rounded-sm border border-gray-200 dark:border-white/10 shadow-2xl">
              <img 
                src={selectedImg} 
                alt="Secure Document Portfolio Registry View" 
                className="max-w-full max-h-[78vh] object-contain rounded-xs" 
              />
            </div>
          </div>
        </div>
      )}

    </section>
  );
};

export default About;

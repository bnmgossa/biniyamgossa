<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
import ShowCertificate from './ShowCertificate'; 
import { certificateData } from '../../data/certeficates'; 
import resume from "../../assets/BINIYAM GOSSA MASTER CV.pdf";

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
=======
import React, { useState } from 'react';
import legal from "../../assets/certificates/legal.jpg"
import udacity from "../../assets/certificates/udacity.png"
import resume from "../../assets/BINIYAM GOSSA MASTER CV.pdf"

const About = () => {
  const [selectedImg, setSelectedImg] = useState(null);

  const certificates = [
    {
      name: "BSc",
      sub: "Hope Enterprise University College",
      color: "border-orange-500/20 text-orange-500",
      img: legal,
      btn: "text-white"
    },
    {
      name: "Nanodegree",
      sub: "Programming Fundamentals",
      color: "border-cyan-500/20 text-cyan-400",
      img: udacity,
      btn: "text-white"
    }
  ];

  return (
    <section id="about" className="-mt-16 md:mt-1 space-y-9">
>>>>>>> e32605157459ccce10491a06384bb676d380ce21

      {/* ================= 01. ABOUT SECTION ================= */}
      <div className="space-y-1">
        <div className="flex items-center gap-3">
          <h2 className="text-xs md:text-xl font-black uppercase tracking-[0.2em] italic text-purple-500">
            01. About
          </h2>
<<<<<<< HEAD
          <div className="h-[1px] bg-gradient-to-r from-green-500 via-black to-transparent flex-grow" />
=======
          <div className="h-[1px] bg-gradient-to-r from-green-500 via-black to-transparent  flex-grow" />
>>>>>>> e32605157459ccce10491a06384bb676d380ce21
        </div>

        <div className="grid grid-cols-2 gap-3 md:gap-5">
          {/* Main Bio Card */}
          <div className="glass-card col-span-2 md:col-span-1 p-6 md:p-8 flex flex-col justify-center relative overflow-hidden group">
<<<<<<< HEAD
            <div className="absolute top-0 right-0 -mr-16 -mt-16 w-32 h-32 bg-green-500/40 rounded-full blur-3xl group-hover:bg-green-500/20 transition-all duration-500" />
            <div className="relative space-y-4">
              <div className="space-y-1">
                <h3 className="text-lg md:text-2xl font-black text-black uppercase tracking-tighter italic">
=======
            <div className="absolute top-0 right-0 -mr-16 -mt-16 w-32 h-32 dark:bg-green-500/40  bg-green-500/40 rounded-full blur-3xl group-hover:bg-green-500/20 transition-all duration-500" />

            <div className="relative space-y-4">
              <div className="space-y-1">
                <h3 className="text-lg md:text-2xl font-black text-gray-900 text-black uppercase tracking-tighter italic">
>>>>>>> e32605157459ccce10491a06384bb676d380ce21
                  BSc Computer Science <span className="text-green-500">Graduate</span>
                </h3>
                <div className="h-1 w-12 bg-green-500 rounded-full" />
              </div>
<<<<<<< HEAD
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
=======

              <p className="text-[13px] md:text-base text-black text-black leading-relaxed text-pretty">
                Freshly graduated in <span className=" text-red-500 font-bold bg-green-500/30 px-1 rounded">February 2025</span>, 
                I specialize in engineering <span className="text-gray-900  font-semibold">high-performance web interfaces</span> and 
                securing robust IT infrastructure. 
              </p>

              <p className="text-[13px] md:text-base text-black  leading-relaxed">
                I am driven by a passion for solving complex problems and 
                <span className="text-green-600 dark:text-green-400 font-medium"> developing applications with real-world impact</span>. 
                Eager to contribute technical expertise to innovative teams and push the boundaries of modern technology.
              </p>

              <div className="flex flex-wrap gap-2 pt-2">
                <span className="text-[10px] font-black uppercase tracking-widest text-green-600 dark:text-green-400 bg-green-500/5 border border-green-500/20 px-2 py-1 rounded">
                  Security First
                </span>
                <span className="text-[10px] font-black uppercase tracking-widest text-blue-600 dark:text-blue-400 bg-blue-500/5 border border-blue-500/20 px-2 py-1 rounded">
                  UX Focused
                </span>
>>>>>>> e32605157459ccce10491a06384bb676d380ce21
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
<<<<<<< HEAD
              <span className="text-blue-400 font-black text-lg md:text-2xl uppercase">Addis</span>
=======
              <span className="text-blue-400 font-black text-lg md:text-2xl uppercase">Adis</span>
>>>>>>> e32605157459ccce10491a06384bb676d380ce21
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
<<<<<<< HEAD
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
=======
          <div className="h-[1px] bg-gradient-to-r from-green-500 via-black to-transparent  flex-grow" />
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 md:gap-5">
          {certificates.map((cert, idx) => (
            <div key={idx} className={`glass-card p-4 flex flex-col items-center justify-center text-center shadow-md rounded-sm border ${cert.color} relative group hover:border-white/20 transition-all`}>
              <span className="font-black text-lg md:text-2xl uppercase leading-none transition-transform group-hover:scale-105 duration-300">{cert.name}</span>
              <span className="text-[8px] uppercase text-gray-500 tracking-widest mt-1 mb-3">{cert.sub}</span>

              <button
                onClick={() => setSelectedImg(cert.img)}
                className={`text-[10px] font-black bg-blue-500 uppercase tracking-[0.2em] px-4 py-1.5 rounded-sm outline-none hover:bg-blue-500 transition-all shadow-lg active:scale-95 ${cert.btn}`}
>>>>>>> e32605157459ccce10491a06384bb676d380ce21
              >
                Show
              </button>
            </div>
          ))}
<<<<<<< HEAD
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
              <p className="text-[12px] md:text-sm text-gray-500 dark:text-gray-400 font-medium max-w-md">Updated In February 2025.</p>
            </div>

            <div className="flex flex-row md:flex-col border-t md:border-t-0 md:border-l border-black/5 dark:border-white/5">
              <a href={resume} target="_blank" rel="noopener noreferrer" className="flex-1 md:w-48 flex bg-black/10 items-center justify-center gap-3 p-6 text-[10px] font-black uppercase tracking-widest text-black hover:bg-blue-500 hover:text-white transition-all duration-300">
                <span className="text-red-500">01</span> Preview
              </a>
              <a href={resume} download="BINIYAM_GOSSA_KEBEDE_CV.pdf" className="flex-1 md:w-48 flex items-center justify-center gap-3 p-6 text-[10px] font-black uppercase tracking-widest bg-emerald-500 text-white hover:bg-emerald-600 transition-all duration-300 shadow-[inset_0_0_20px_rgba(0,0,0,0.1)]">
                <span className="opacity-40">02</span> Download
              </a>
            </div>
=======

          <div className="hidden sm:flex glass-card p-4 border-dashed border-white/5 items-center justify-center text-gray-700 text-[10px] uppercase font-bold italic">
            More Cert...
          </div>
          <div className="hidden sm:flex glass-card p-4 border-dashed border-white/5 items-center justify-center text-gray-700 text-[10px] uppercase font-bold italic">
            More Cert...
>>>>>>> e32605157459ccce10491a06384bb676d380ce21
          </div>
        </div>
      </div>

<<<<<<< HEAD
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
=======
    {/* ================= 03. CURRICULUM VITAE ================= */}
<div className="space-y-6">
  {/* Section Header */}
  <div className="flex items-center gap-3">
    <h2 className="text-xs md:text-xl font-black uppercase tracking-[0.2em] italic !text-emerald-500 shrink-0">
      03. Curriculum Vitae
    </h2>
    <div className="h-[1px] bg-gradient-to-r from-green-500 via-black to-transparent  flex-grow" />
  </div>

  <div className="relative group overflow-hidden">
    {/* The Card Body */}
    <div className="glass-card flex flex-col md:flex-row border-l-4 border-l-emerald-500 bg-white dark:bg-white/5 transition-all duration-500 hover:shadow-[0_0_30px_rgba(16,185,129,0.1)]">
      
      {/* Visual Identity Side (Left) */}
      <div className="p-6 md:p-8 flex-grow space-y-2">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
          <span className="text-[10px] font-mono font-bold text-emerald-500 uppercase tracking-[0.3em]">
            System.Resume_v2.0
          </span>
        </div>
        
        <h3 className="text-2xl md:text-4xl font-black !text-black uppercase tracking-tighter italic leading-none">
          BINIYAM <span className="text-green-500 border-b-2 border-emerald-500" s>GOSSA</span>
        </h3>
        
        <p className="text-[12px] md:text-sm !text-gray-500 dark:!text-gray-400 font-medium max-w-md">
          
          Updated In February 2025.
        </p>
      </div>

      {/* Action Side (Right) */}
      <div className="flex flex-row md:flex-col border-t md:border-t-0 md:border-l border-black/5 dark:border-white/5">
        
        {/* VIEW ACTION */}
        <a 
          href={resume} 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex-1 md:w-48 flex bg-black/10   items-center justify-center gap-3 p-6 text-[10px] font-black uppercase tracking-widest !text-black hover:bg-blue-500 hover:!text-yellow-500 transition-all duration-300"
        >
          <span className="text-red-500">01</span>
          Preview
        </a>

        {/* DOWNLOAD ACTION */}
        <a 
          href={resume}
          download="BINIYAM_GOSSA_KEBEDE_CV.pdf"
          className="flex-1 md:w-48 flex items-center justify-center gap-3 p-6 text-[10px] font-black uppercase tracking-widest bg-emerald-500 !text-white hover:bg-emerald-600 transition-all duration-300 shadow-[inset_0_0_20px_rgba(0,0,0,0.1)]"
        >
          <span className="opacity-40">02</span>
          Download
        </a>
      </div>
    </div>

    {/* Background Decorative Element */}
    <div className="absolute -bottom-4 -right-2 opacity-[0.03] dark:opacity-[0.05] pointer-events-none select-none">
      <h4 className="text-8xl font-black italic">CERTIFIED</h4>
    </div>
  </div>
</div>

      {/* ================= MODAL OVERLAY ================= */}
      {selectedImg && (
        <div
          className="fixed inset-0 z-[999] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4"
          onClick={() => setSelectedImg(null)}
        >
          <div 
            className="relative w-full max-w-4xl flex flex-col items-center animate-in fade-in zoom-in duration-300"
            onClick={(e) => e.stopPropagation()} 
          >
            {/* Minimalist Premium Header */}
            <div className="flex justify-between items-center w-full mb-4 px-2">
              <div className="flex flex-col">
                <span className="text-blue-500 font-black text-[10px] uppercase tracking-[0.3em]">Verification</span>
                <div className="h-[1px] w-8 bg-blue-500 mt-1" />
              </div>
              
              <button 
                onClick={() => setSelectedImg(null)}
                className="flex items-center gap-3 group transition-all"
              >
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40 group-hover:text-white transition-colors">Close</span>
                <div className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center group-hover:border-white/40 group-hover:rotate-90 transition-all duration-500">
                  <span className="text-white text-xs font-light">✕</span>
                </div>
              </button>
            </div>

            {/* Image Container */}
            <div className="relative glass-card p-1 border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.8)]">
              <img
                src={selectedImg}
                alt="Certificate Preview"
                className="max-w-full max-h-[75vh] rounded-sm object-contain"
              />
            </div>
            
            <p className="mt-6 text-[8px] text-white/20 uppercase tracking-[0.5em] font-mono">
              Click backdrop to return
            </p>
>>>>>>> e32605157459ccce10491a06384bb676d380ce21
          </div>
        </div>
      )}

    </section>
  );
};

<<<<<<< HEAD
export default About;
=======
export default About;
>>>>>>> e32605157459ccce10491a06384bb676d380ce21

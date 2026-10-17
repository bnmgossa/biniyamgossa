import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import ShowCertificate from './ShowCertificate'; 
import { certificateData } from '../../data/certeficates';
import CV from "../../assets/BINIYAM_GOSSA_KEBEDE.pdf";

const About = () => {
  const [selectedImg, setSelectedImg] = useState(null);
  const [activeCert, setActiveCert] = useState(null);
  const degreeCertificate = certificateData.find((cert) => cert.id === 'bsc');
  const nanodegreeCertificate = certificateData.find((cert) => cert.id === 'udacity');
  const infrastructureCertificate = certificateData.find((cert) => cert.id === 'infrastructure');

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

  useEffect(() => {
    if (!activeCert) return undefined;

    window.history.pushState({ certificateOverlay: true }, '', '#about');
    const closeOverlayOnBack = () => {
      setSelectedImg(null);
      setActiveCert(null);
    };

    window.addEventListener('popstate', closeOverlayOnBack);
    return () => {
      window.removeEventListener('popstate', closeOverlayOnBack);
      if (window.history.state?.certificateOverlay) {
        window.history.replaceState(null, '', window.location.pathname + window.location.search);
      }
    };
  }, [activeCert]);

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
                <h3 className="text-lg md:text-2xl font-black text-gray-950 dark:text-white uppercase tracking-tighter italic">
                  BSc Computer Science <span className="text-green-500">Graduate</span>
                </h3>
                <div className="h-1 w-12 bg-green-500 rounded-full" />
              </div>
              <p className="text-[13px] md:text-base text-gray-800 dark:text-gray-200 leading-relaxed text-pretty">
                Freshly graduated in <span className="text-red-500 font-bold bg-green-500/30 px-1 rounded">February 2025</span>, 
                I specialize in engineering <span className="font-semibold">high-performance web interfaces</span> and securing robust IT infrastructure. 
              </p>
              <p className="text-[13px] md:text-base text-gray-800 dark:text-gray-200 leading-relaxed">
                I am driven by a passion for solving complex problems and developing applications with real-world impact.
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                <span className="text-[10px] font-black uppercase tracking-widest text-green-600 bg-green-500/5 border border-green-500/20 px-2 py-1 rounded">Security First</span>
                <span className="text-[10px] font-black uppercase tracking-widest text-blue-600 bg-blue-500/5 border border-blue-500/20 px-2 py-1 rounded">UX Focused</span>
              </div>
            </div>
          </div>
          {/* ================= PREMIUM CREDENTIALS GALLERY ================= */}
          <div className="relative col-span-2 md:col-span-1 overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-xl shadow-slate-900/5 dark:border-white/10 dark:bg-slate-950">
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-cyan-400 via-emerald-400 to-violet-500" />
            <div className="relative overflow-hidden bg-slate-950 px-5 pb-5 pt-6 text-white sm:px-6">
              <div className="pointer-events-none absolute -right-8 -top-14 h-44 w-44 rounded-full bg-cyan-400/20 blur-3xl" />
              <div className="pointer-events-none absolute bottom-0 right-24 h-24 w-24 rounded-full bg-emerald-400/15 blur-2xl" />
              <div className="relative flex items-end justify-between gap-3">
                <div>
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[9px] font-bold uppercase tracking-[0.2em] text-cyan-200">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    Learning milestones
                  </span>
                  <h3 className="mt-3 text-2xl font-black tracking-tight sm:text-3xl">Credentials<span className="text-cyan-300">.</span></h3>
                  <p className="mt-1 max-w-xs text-xs leading-relaxed text-slate-300">Degrees and hands-on training that support my technical journey.</p>
                </div>
                <div className="shrink-0 rounded-2xl border border-white/10 bg-white/5 px-3 py-2 text-right backdrop-blur">
                  <span className="block text-2xl font-black leading-none">{certificateData.length.toString().padStart(2, '0')}</span>
                  <span className="mt-1 block text-[8px] font-bold uppercase tracking-[0.18em] text-slate-400">Records</span>
                </div>
              </div>
            </div>

            <div className="space-y-4 p-4 sm:p-5">
              {degreeCertificate && (
                <button
                  type="button"
                  onClick={() => setActiveCert(degreeCertificate)}
                  className="group grid w-full grid-cols-[104px_minmax(0,1fr)] items-center gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-3 text-left transition-all duration-300 hover:-translate-y-0.5 hover:border-violet-300 hover:bg-violet-50/60 hover:shadow-lg dark:border-white/10 dark:bg-white/[0.03] dark:hover:border-violet-400/40 dark:hover:bg-violet-400/5 sm:grid-cols-[124px_minmax(0,1fr)] sm:p-4"
                >
                  <span className="relative flex h-[86px] items-center justify-center overflow-hidden rounded-xl border border-violet-200 bg-white p-1.5 dark:border-white/10 sm:h-[100px]">
                    <img src={degreeCertificate.img} alt="BSc degree certificate" className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105" loading="lazy" />
                    <span className="absolute bottom-1 right-1 rounded-md bg-violet-600 px-1.5 py-0.5 text-[7px] font-black uppercase tracking-wide text-white">Degree</span>
                  </span>
                  <span className="min-w-0 py-1">
                    <span className="inline-flex rounded-full bg-violet-500/10 px-2 py-1 text-[8px] font-black uppercase tracking-[0.15em] text-violet-600 dark:text-violet-300">01 / Academic</span>
                    <span className="mt-2 block text-sm font-black leading-snug text-slate-900 dark:text-white sm:text-base">BSc Computer Science</span>
                    <span className="mt-1 block text-[10px] leading-relaxed text-slate-500 dark:text-slate-400">Hope Enterprise University College</span>
                    <span className="mt-3 inline-flex items-center gap-1.5 text-[9px] font-black uppercase tracking-[0.15em] text-violet-600 transition-all group-hover:gap-2.5 dark:text-violet-300">Open credential <span aria-hidden="true">↗</span></span>
                  </span>
                </button>
              )}

              {infrastructureCertificate && (
                <button
                  type="button"
                  onClick={() => setActiveCert(infrastructureCertificate)}
                  className="group relative w-full overflow-hidden rounded-2xl border border-emerald-300/70 bg-gradient-to-br from-emerald-50 via-white to-cyan-50 p-3 text-left transition-all duration-300 hover:-translate-y-0.5 hover:border-emerald-400 hover:shadow-xl hover:shadow-emerald-900/10 dark:border-emerald-400/20 dark:from-emerald-400/[0.08] dark:via-slate-900 dark:to-cyan-400/[0.06] sm:p-4"
                >
                  <span className="absolute right-0 top-0 rounded-bl-xl bg-emerald-600 px-3 py-1.5 text-[8px] font-black uppercase tracking-[0.18em] text-white">Featured training</span>
                  <span className="relative mb-3 mt-5 block aspect-[16/9] overflow-hidden rounded-xl border border-slate-200 bg-white p-2 shadow-inner dark:border-white/10">
                    <img
                      src={infrastructureCertificate.img}
                      alt="QIYAS IT Infrastructure and System Support training certificate, displayed horizontally"
                      className="absolute left-1/2 top-1/2 max-w-none object-contain transition-transform duration-500 group-hover:scale-[1.025]"
                      style={{ height: 'min(140%, 420px)', width: 'auto', transform: 'translate(-50%, -50%) rotate(90deg)' }}
                      loading="lazy"
                    />
                  </span>
                  <span className="flex items-start justify-between gap-3">
                    <span className="min-w-0">
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-600/15 bg-emerald-600/10 px-2.5 py-1 text-[8px] font-black uppercase tracking-[0.12em] text-emerald-700 dark:text-emerald-300">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" /> QIYAS · Skills for Jobs
                      </span>
                      <span className="mt-2 block text-base font-black leading-tight tracking-tight text-slate-900 dark:text-white sm:text-lg">IT Infrastructure &amp; System Support</span>
                      <span className="mt-1.5 block text-[10px] leading-relaxed text-slate-600 dark:text-slate-300">EASE–QIYAS II boot camp · Addis Ababa</span>
                    </span>
                    <span className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-slate-950 text-lg text-white transition-transform duration-300 group-hover:translate-x-1 dark:bg-emerald-400 dark:text-slate-950" aria-hidden="true">↗</span>
                  </span>
                  <span className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-3">
                    {['Networking', 'Device maintenance', 'Server systems', 'Biometrics', 'CCTV systems'].map((skill) => (
                      <span key={skill} className="rounded-lg border border-emerald-900/5 bg-white/80 px-2 py-2 text-[9px] font-bold leading-tight text-slate-700 dark:border-white/10 dark:bg-white/[0.04] dark:text-slate-200 sm:text-[10px]">{skill}</span>
                    ))}
                  </span>
                  <span className="mt-4 flex items-center justify-between border-t border-emerald-900/10 pt-3 text-[9px] font-black uppercase tracking-[0.16em] text-emerald-700 dark:border-white/10 dark:text-emerald-300">
                    View full certificate <span className="transition-transform group-hover:translate-x-1" aria-hidden="true">→</span>
                  </span>
                </button>
              )}

              {nanodegreeCertificate && (
                <div className="rounded-2xl border border-slate-200 p-3 dark:border-white/10 sm:p-4">
                  <div className="mb-3 flex items-center justify-between gap-2">
                    <div>
                      <p className="text-[9px] font-black uppercase tracking-[0.18em] text-cyan-600 dark:text-cyan-300">Online learning</p>
                      <p className="mt-1 text-xs font-bold text-slate-800 dark:text-slate-100">Udacity certificates</p>
                    </div>
                    <button type="button" onClick={() => setActiveCert(nanodegreeCertificate)} className="rounded-full border border-cyan-500/20 px-3 py-1.5 text-[8px] font-black uppercase tracking-wider text-cyan-700 transition-colors hover:bg-cyan-500 hover:text-white dark:text-cyan-300">View all ↗</button>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    {nanodegreeCertificate.subDegrees?.map((degree) => {
                      const degreeImage = degree.links?.find((link) => link.type === 'image');
                      return (
                        <button key={degree.title} type="button" onClick={() => setSelectedImg(degreeImage?.target)} className="group relative aspect-[16/10] cursor-zoom-in overflow-hidden rounded-xl border border-slate-200 bg-slate-100 dark:border-white/10 dark:bg-white/5" aria-label={`View full ${degree.title} certificate image`}>
                          <img src={degreeImage?.target} alt={`${degree.title} certificate`} className="h-full w-full object-cover object-top transition-transform duration-300 group-hover:scale-105" loading="lazy" />
                          <span className="absolute inset-x-0 bottom-0 bg-slate-950/80 px-2 py-2 text-left text-[8px] font-bold uppercase tracking-wide text-white">{degree.title}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}
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

      {/* ================= 02. CURRICULUM VITAE ================= */}
      <div className="space-y-6">
        <div className="flex items-center gap-3">
          <h2 className="text-xs md:text-xl font-black uppercase tracking-[0.2em] italic !text-emerald-500 shrink-0">
            02. Curriculum Vitae
          </h2>
          <div className="h-[1px] bg-gradient-to-r from-green-500 via-black to-transparent flex-grow" />
        </div>

        <div className="relative group overflow-hidden">
          <div className="glass-card flex flex-col md:flex-row border-l-4 border-l-emerald-500 bg-white dark:bg-gray-900/80 transition-all duration-500 hover:shadow-[0_0_30px_rgba(16,185,129,0.1)]">
            <div className="p-6 md:p-8 flex-grow space-y-2">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                <span className="text-[10px] font-mono font-bold text-emerald-500 uppercase tracking-[0.3em]">System.Resume_v2.0</span>
              </div>
              <h3 className="text-2xl md:text-4xl font-black text-gray-950 dark:text-white uppercase tracking-tighter italic leading-none">
                BINIYAM <span className="text-green-500 border-b-2 border-emerald-500">GOSSA</span>
              </h3>
              <p className="text-[12px] md:text-sm text-gray-500 dark:text-gray-400 font-medium max-w-md">Updated In February 2026.</p>
            </div>

            <div className="flex flex-row md:flex-col border-t md:border-t-0 md:border-l border-black/5 dark:border-white/5">
              <a href={CV} target="_blank" rel="noopener noreferrer" className="flex-1 md:w-48 flex bg-black/10 items-center justify-center gap-3 p-6 text-[10px] font-black uppercase tracking-widest text-gray-900 dark:text-white hover:bg-blue-500 hover:text-white transition-all duration-300">
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
      {selectedImg && createPortal(
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/85 p-3 backdrop-blur-sm sm:p-6"
          onClick={() => setSelectedImg(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Certificate image preview"
        >
          <div
            className="relative flex max-h-[94vh] w-full max-w-5xl flex-col items-center rounded-xl border border-white/20 bg-neutral-950 p-3 shadow-2xl sm:p-5"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="mb-3 flex w-full items-center justify-between gap-3">
              <span className="truncate font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-cyan-300">
                Certificate Preview
              </span>
              <button
                type="button"
                onClick={() => setSelectedImg(null)}
                className="shrink-0 rounded-lg border border-white/20 px-3 py-2 text-[10px] font-black uppercase tracking-widest text-white transition-colors hover:bg-red-500"
              >
                Close
              </button>
            </div>
            <div className="flex min-h-0 w-full items-center justify-center overflow-auto rounded-lg bg-black/40 p-1">
              <img
                src={selectedImg}
                alt="Certificate preview"
                className="block max-h-[calc(94vh-90px)] max-w-full object-contain"
                onError={(event) => {
                  event.currentTarget.alt = 'Certificate image could not be loaded';
                }}
              />
            </div>
          </div>
        </div>,
        document.body,
      )}

    </section>
  );
};

export default About;

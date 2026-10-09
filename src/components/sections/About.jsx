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
          {/*certeficates */}
          <div className="glass-card col-span-2 md:col-span-1 w-full overflow-hidden p-4 md:p-5">
            <div className="flex items-start justify-between gap-3 border-b border-black/10 pb-3">
              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-cyan-500">Credential Status</p>
                <p className="mt-1 text-xs text-gray-500">Academic and specialist training</p>
              </div>
              <span className="shrink-0 rounded-full border border-emerald-500/25 bg-emerald-500/10 px-2 py-1 text-[9px] font-black uppercase tracking-wider text-emerald-600">
                4 credentials
              </span>
            </div>

            <div className="space-y-3 border-b border-black/10 py-3">
              {degreeCertificate && (
                <button
                  type="button"
                  onClick={() => setActiveCert(degreeCertificate)}
                  className="group flex w-full items-center gap-3 rounded-2xl border border-orange-500/15 bg-white/70 dark:bg-gray-900/80 p-3 text-left shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-orange-500/40 hover:shadow-lg"
                >
                  <img
                    src={degreeCertificate.img}
                    alt="BSc degree certificate"
                    className="h-16 w-16 shrink-0 rounded-xl border border-orange-500/15 object-cover object-top sm:h-20 sm:w-20"
                  />
                  <span className="min-w-0 flex-1">
                    <span className="mb-1 inline-flex rounded-full bg-orange-500/10 px-2 py-1 text-[8px] font-black uppercase tracking-[0.15em] text-orange-600">Academic credential</span>
                    <span className="block text-sm font-black tracking-tight text-gray-900 dark:text-white">BSc Computer Science</span>
                    <span className="mt-1 block text-[10px] leading-relaxed text-gray-500">Hope Enterprise University College</span>
                  </span>
                  <span className="shrink-0 text-lg text-orange-500 transition-transform group-hover:translate-x-1" aria-hidden="true">↗</span>
                </button>
              )}

              {infrastructureCertificate && (
                <button
                  type="button"
                  onClick={() => setActiveCert(infrastructureCertificate)}
                  className="group relative w-full overflow-hidden rounded-2xl border border-emerald-500/25 bg-gradient-to-br from-emerald-500/10 via-cyan-500/5 to-white/70 p-4 text-left shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-emerald-500/50 hover:shadow-xl"
                >
                  <span className="pointer-events-none absolute -right-8 -top-10 h-28 w-28 rounded-full bg-emerald-400/20 blur-3xl transition-all duration-500 group-hover:bg-emerald-400/35" />
                  <span className="relative flex items-start justify-between gap-3">
                    <span className="min-w-0">
                      <span className="mb-2 inline-flex items-center gap-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-2.5 py-1 text-[8px] font-black uppercase tracking-[0.12em] text-emerald-700">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                        QIYAS · Skills for Jobs
                      </span>
                      <span className="block text-base font-black leading-tight tracking-tight text-gray-900 dark:text-white sm:text-lg">IT Infrastructure &amp; System Support</span>
                      <span className="mt-1.5 block text-[10px] leading-relaxed text-gray-600">Practical training in Nifas Silk Lafto · World Bank-supported EASE project</span>
                    </span>
                    <span className="shrink-0 rounded-xl border border-emerald-500/20 bg-white/70 p-2 text-lg text-emerald-600 transition-transform group-hover:translate-x-0.5" aria-hidden="true">↗</span>
                  </span>

                  <span className="relative mt-4 grid grid-cols-2 gap-2 sm:grid-cols-3">
                    {[
                      'Networking',
                      'Device maintenance',
                      'Server systems',
                      'Biometrics',
                      'CCTV systems',
                    ].map((skill) => (
                      <span key={skill} className="rounded-lg border border-emerald-500/15 bg-white/75 dark:bg-gray-900/80 px-2 py-2 text-[9px] font-bold leading-tight text-gray-700 dark:text-gray-200 sm:text-[10px]">
                        {skill}
                      </span>
                    ))}
                  </span>
                  <span className="relative mt-3 flex items-center justify-between border-t border-emerald-500/15 pt-3 text-[9px] font-black uppercase tracking-[0.16em] text-emerald-700">
                    Explore training
                    <span className="transition-transform group-hover:translate-x-1" aria-hidden="true">→</span>
                  </span>
                </button>
              )}
            </div>

            {nanodegreeCertificate && (
              <div className="pt-3">
                <div className="mb-2 flex items-center justify-between">
                  <p className="text-[9px] font-black uppercase tracking-[0.18em] text-cyan-600">Nanodegrees</p>
                  <button
                    type="button"
                    onClick={() => setActiveCert(nanodegreeCertificate)}
                    className="text-[9px] font-black uppercase tracking-wider text-blue-500 hover:text-blue-700"
                  >
                    View all
                  </button>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {nanodegreeCertificate.subDegrees?.map((degree) => {
                    const degreeImage = degree.links?.find((link) => link.type === 'image');

                    return (
                      <button
                        key={degree.title}
                        type="button"
                        onClick={() => setSelectedImg(degreeImage?.target)}
                        className="group relative overflow-hidden rounded-sm border border-cyan-500/20 bg-black/5 aspect-[16/9] cursor-zoom-in"
                        aria-label={`View full ${degree.title} certificate image`}
                      >
                        <img src={degreeImage?.target} alt={`${degree.title} certificate`} className="h-full w-full object-cover object-top transition-transform duration-300 group-hover:scale-105" />
                        <span className="absolute inset-x-0 bottom-0 bg-black/70 px-1.5 py-1 text-left text-[8px] font-bold uppercase tracking-wide text-white">
                          {degree.title}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

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

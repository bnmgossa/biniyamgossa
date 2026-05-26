import React from "react";
import { motion } from "framer-motion";

const ShowCertificate = ({ cert, onBack, onPreviewImage }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
      className="w-full space-y-8 text-left"
    >
      {/* HEADER */}
      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl">
        
        {/* Glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-cyan-500/10 pointer-events-none" />

        <div className="relative z-10 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 p-6 md:p-8">
          
          {/* LEFT */}
          <div>
            <div className="flex items-center gap-2 text-[10px] font-mono tracking-[0.3em] uppercase text-blue-400 mb-3">
              <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse shadow-[0_0_12px_#3b82f6]" />
              VERIFIED_SECURITY_REGISTRY
            </div>

            <h3 className="text-3xl md:text-5xl font-black text-white tracking-tight leading-none">
              {cert.name}
            </h3>

            <div className="mt-3 flex flex-wrap items-center gap-3">
              <span className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-semibold tracking-wider uppercase text-blue-300">
                {cert.sub}
              </span>

              <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-semibold tracking-wider uppercase text-emerald-300">
                Verified Credentials
              </span>
            </div>
          </div>

          {/* RETURN BUTTON */}
          <button
            onClick={onBack}
            className="
              group relative overflow-hidden
              px-6 py-3 rounded-2xl
              border border-red-500/20
              bg-red-500/5
              text-red-400
              text-xs font-bold uppercase tracking-[0.2em]
              transition-all duration-300
              hover:bg-red-500 hover:text-white
              hover:shadow-[0_0_30px_rgba(239,68,68,0.4)]
              active:scale-95
            "
          >
            ← Return
          </button>
        </div>
      </div>

      {/* MAIN GRID */}
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-6">

        {/* SIDEBAR */}
        <div className="xl:col-span-4">
          <div
            className="
              sticky top-6
              rounded-3xl
              border border-white/10
              bg-white/5
              backdrop-blur-xl
              p-6
              shadow-2xl
              overflow-hidden
            "
          >
            {/* Glow */}
            <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 via-transparent to-transparent pointer-events-none" />

            <div className="relative z-10 space-y-6">
              
              <div>
                <span
                  className="
                    inline-flex items-center gap-2
                    px-3 py-1 rounded-full
                    bg-blue-500/10
                    border border-blue-500/20
                    text-blue-300
                    text-xs font-bold uppercase tracking-widest
                  "
                >
                  <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
                  Verified Issuer
                </span>
              </div>

              <div className="space-y-4">
                <h4 className="text-white text-lg font-bold tracking-tight">
                  Credentials Overview
                </h4>

                <p className="text-sm leading-relaxed text-neutral-300">
                  This archive stores official certificates, validated learning
                  achievements, and specialized program credentials acquired
                  through{" "}
                  <span className="text-blue-400 font-semibold">
                    {cert.sub}
                  </span>.
                </p>
              </div>

              {/* STATS */}
              <div className="grid grid-cols-2 gap-4 pt-4">
                
                <div
                  className="
                    rounded-2xl border border-white/10
                    bg-white/[0.03]
                    p-4
                  "
                >
                  <div className="text-2xl font-black text-white">
                    {cert.subDegrees?.length || cert.links?.length || 1}
                  </div>

                  <div className="text-xs uppercase tracking-wider text-neutral-400 mt-1">
                    Assets
                  </div>
                </div>

                <div
                  className="
                    rounded-2xl border border-white/10
                    bg-white/[0.03]
                    p-4
                  "
                >
                  <div className="text-2xl font-black text-emerald-400">
                    100%
                  </div>

                  <div className="text-xs uppercase tracking-wider text-neutral-400 mt-1">
                    Verified
                  </div>
                </div>
              </div>

              {/* FOOTER */}
              <div className="pt-6 border-t border-white/10">
                <p className="text-[11px] uppercase tracking-[0.25em] text-neutral-500 font-mono">
                  Additional certifications coming soon...
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CONTENT */}
        <div className="xl:col-span-8 space-y-5">

          {/* COLLECTION CERTIFICATES */}
          {cert.isCollection ? (
            <>
              <div className="flex items-center justify-between">
                <h4 className="text-sm font-black tracking-[0.25em] uppercase text-blue-400">
                  Specialized Tracks
                </h4>

                <div className="text-xs text-neutral-500 uppercase tracking-widest">
                  {cert.subDegrees?.length} Programs
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {cert.subDegrees?.map((subDegree, sIdx) => (
                  <motion.div
                    key={sIdx}
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.25 }}
                    className="
                      group relative overflow-hidden
                      rounded-3xl
                      border border-white/10
                      bg-white/5
                      backdrop-blur-xl
                      shadow-2xl
                    "
                  >
                    {/* Glow */}
                    <div
                      className="
                        absolute inset-0 opacity-0
                        group-hover:opacity-100
                        transition duration-700
                        bg-gradient-to-br from-blue-500/10 to-cyan-500/10
                      "
                    />

                    <div className="relative z-10 p-5 space-y-4">

                      {/* TITLE */}
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <h5 className="text-lg font-bold text-white leading-tight">
                            {subDegree.title}
                          </h5>

                          <p className="text-sm text-neutral-400 mt-1">
                            Verified Program Credential
                          </p>
                        </div>

                        <div
                          className="
                            px-3 py-1 rounded-full
                            bg-blue-500/10
                            border border-blue-500/20
                            text-blue-300
                            text-xs font-bold
                          "
                        >
                          Certified
                        </div>
                      </div>

                      {/* IMAGE */}
                      {subDegree.links
                        ?.filter(asset => asset.type === "image")
                        .map((asset, index) => {

                          // Find source link
                          const sourceLink = subDegree.links?.find(
                            link => link.type === "link"
                          );

                          return (
                            <div key={index} className="space-y-3">

                              {/* IMAGE CARD */}
                              <div
                                onClick={() => onPreviewImage(asset.target)}
                                className="
                                  relative overflow-hidden
                                  rounded-2xl
                                  border border-white/10
                                  aspect-[4/3]
                                  cursor-zoom-in
                                  bg-black/20
                                  group/image
                                "
                              >
                                <img
                                  src={asset.target}
                                  alt={subDegree.title}
                                  className="
                                    w-full h-full object-cover object-top
                                    transition-transform duration-700
                                    group-hover/image:scale-105
                                  "
                                />

                                {/* OVERLAY */}
                                <div
                                  className="
                                    absolute inset-0
                                    bg-black/50
                                    opacity-0
                                    group-hover/image:opacity-100
                                    transition-all duration-300
                                    flex items-center justify-center
                                  "
                                >
                                  <div
                                    className="
                                      px-5 py-2 rounded-full
                                      bg-blue-500
                                      text-white text-xs
                                      font-bold uppercase tracking-widest
                                      shadow-2xl
                                    "
                                  >
                                    👁 Preview Certificate
                                  </div>
                                </div>
                              </div>

                              {/* SOURCE BUTTON */}
                              {sourceLink && (
                                <a
                                  href={sourceLink.target}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="
                                    inline-flex items-center gap-2
                                    px-4 py-2 rounded-xl
                                    bg-cyan-500/10
                                    border border-cyan-500/20
                                    text-cyan-300
                                    text-xs font-bold uppercase tracking-widest
                                    transition-all duration-300
                                    hover:bg-cyan-500
                                    hover:text-white
                                    hover:shadow-[0_0_20px_rgba(6,182,212,0.4)]
                                    active:scale-95
                                  "
                                >
                                  🔗 Go To Source
                                </a>
                              )}
                            </div>
                          );
                        })}
                    </div>
                  </motion.div>
                ))}
              </div>
            </>
          ) : (
            /* SINGLE CERTIFICATE */
            cert.links
              ?.filter(asset => asset.type === "image")
              .map((asset, index) => {

                const sourceLink = cert.links?.find(
                  link => link.type === "link"
                );

                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4 }}
                    className="
                      group relative overflow-hidden
                      rounded-3xl
                      border border-white/10
                      bg-white/5
                      backdrop-blur-xl
                      shadow-2xl
                      p-5
                    "
                  >
                    <div
                      className="
                        absolute inset-0 opacity-0
                        group-hover:opacity-100
                        transition duration-700
                        bg-gradient-to-br from-blue-500/10 to-cyan-500/10
                      "
                    />

                    <div className="relative z-10 space-y-4">

                      {/* TITLE */}
                      <div className="flex items-center justify-between">
                        <h4 className="text-sm font-black tracking-[0.25em] uppercase text-blue-400">
                          {asset.label}
                        </h4>

                        <div
                          className="
                            px-3 py-1 rounded-full
                            bg-emerald-500/10
                            border border-emerald-500/20
                            text-emerald-300
                            text-xs font-bold
                          "
                        >
                          Verified
                        </div>
                      </div>

                      {/* IMAGE */}
                      <div
                        onClick={() => onPreviewImage(asset.target)}
                        className="
                          relative overflow-hidden
                          rounded-2xl
                          border border-white/10
                          aspect-[16/10]
                          cursor-zoom-in
                          bg-black/20
                          group/image
                        "
                      >
                        <img
                          src={asset.target}
                          alt={asset.label}
                          className="
                            w-full h-full object-cover object-top
                            transition-transform duration-700
                            group-hover/image:scale-105
                          "
                        />

                        {/* OVERLAY */}
                        <div
                          className="
                            absolute inset-0
                            bg-black/50
                            opacity-0
                            group-hover/image:opacity-100
                            transition duration-300
                            flex items-center justify-center
                          "
                        >
                          <div
                            className="
                              px-6 py-3 rounded-full
                              bg-blue-500
                              text-white text-xs font-black
                              uppercase tracking-[0.2em]
                              shadow-2xl
                            "
                          >
                            👁 Open Fullscreen
                          </div>
                        </div>
                      </div>

                      {/* SOURCE BUTTON */}
                      {sourceLink && (
                        <a
                          href={sourceLink.target}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="
                            inline-flex items-center gap-2
                            px-4 py-2 rounded-xl
                            bg-cyan-500/10
                            border border-cyan-500/20
                            text-cyan-300
                            text-xs font-bold uppercase tracking-widest
                            transition-all duration-300
                            hover:bg-cyan-500
                            hover:text-white
                            hover:shadow-[0_0_20px_rgba(6,182,212,0.4)]
                            active:scale-95
                          "
                        >
                          🔗 Go To Source
                        </a>
                      )}
                    </div>
                  </motion.div>
                );
              })
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ShowCertificate;
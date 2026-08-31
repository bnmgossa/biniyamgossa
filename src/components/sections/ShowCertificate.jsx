import React from "react";
import { motion } from "framer-motion";

const ShowCertificate = ({ cert, onBack, onPreviewImage }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
      className="
        w-full
        space-y-4 sm:space-y-7
        text-left

        /* UI FIX: Opaque background values to completely block out your app's underlying white background */
        bg-[#dfe6ef] max-sm:bg-[#cad2dd]
        dark:bg-[#030712] max-sm:dark:bg-[#000000]

        rounded-3xl
        p-3 sm:p-5 md:p-6
        border border-black/10 dark:border-white/5
        shadow-sm transition-colors duration-300
      "
    >
      {/* ================= HEADER PANEL ================= */}
      <div
        className="
          relative overflow-hidden
          rounded-2xl sm:rounded-3xl
          border border-black/10 dark:border-white/10
          bg-white/90 dark:bg-[#0b1120]/95
          backdrop-blur-xl
          shadow-md sm:shadow-2xl
        "
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-cyan-500/10 pointer-events-none" />

        <div
          className="
            relative z-10
            flex flex-row
            justify-between
            items-center
            gap-3
            p-3.5 sm:p-6 md:p-8
          "
        >
          <div className="min-w-0 flex-1">
            <div
              className="
                flex items-center gap-1.5
                text-[8px] sm:text-[10px]
                font-mono
                tracking-[0.1em] sm:tracking-[0.25em]
                uppercase
                text-blue-500 dark:text-blue-400
                mb-0.5 sm:mb-3
              "
            >
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
              <span className="max-sm:hidden">VERIFIED_SECURITY_REGISTRY</span>
              <span className="sm:hidden">REGISTRY</span>
            </div>

            <h3
              className="
                text-lg sm:text-3xl md:text-5xl
                font-black
                text-black dark:text-white
                tracking-tight
                leading-tight
                break-words
                line-clamp-1
              "
            >
              {cert.name}
            </h3>

            <div className="mt-1 sm:mt-3 flex flex-wrap items-center gap-1.5">
              <span
                className="
                  px-2 py-0.5 sm:px-3 sm:py-1
                  rounded-full
                  bg-blue-500/10
                  border border-blue-500/20
                  text-[8px] sm:text-xs
                  font-bold
                  tracking-wide
                  uppercase
                  text-blue-600 dark:text-blue-400
                "
              >
                {cert.sub}
              </span>

              <span
                className="
                  max-sm:hidden
                  px-3 py-1
                  rounded-full
                  bg-emerald-500/10
                  border border-emerald-500/20
                  text-[10px] sm:text-xs
                  font-bold
                  tracking-wide
                  uppercase
                  text-emerald-600 dark:text-emerald-400
                "
              >
                Verified
              </span>
            </div>
          </div>

          <button
            onClick={onBack}
            className="
              shrink-0
              flex items-center justify-center
              h-9 w-9 sm:h-auto sm:w-auto
              sm:px-6 sm:py-3
              rounded-xl sm:rounded-2xl
              border border-red-500/30
              bg-red-500/5
              text-red-500 dark:text-red-400
              text-[10px] sm:text-xs
              font-black
              uppercase
              tracking-[0.15em]
              transition-all duration-300
              hover:bg-red-500
              hover:text-white
              hover:shadow-lg hover:shadow-red-500/20
              active:scale-95
            "
            title="Return"
          >
            <span className="sm:hidden text-sm font-bold">←</span>
            <span className="max-sm:hidden">← Return</span>
          </button>
        </div>
      </div>

      {/* ================= MAIN CONTAINER GRID ================= */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6">

        {/* ================= SIDEBAR INFO ================= */}
        <div className="lg:col-span-4">
          <div
            className="
              lg:sticky lg:top-6
              relative overflow-hidden
              rounded-2xl sm:rounded-3xl
              border border-black/10 dark:border-white/10
              bg-white/90 dark:bg-[#0b1120]/95
              backdrop-blur-xl
              p-4 sm:p-6
              shadow-lg sm:shadow-2xl
            "
          >
            <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 via-transparent to-transparent pointer-events-none" />

            <div className="relative z-10 space-y-4 sm:space-y-5">
              <div>
                <span
                  className="
                    inline-flex items-center gap-2
                    px-3 py-1
                    rounded-full
                    bg-blue-500/10
                    border border-blue-500/20
                    text-blue-600 dark:text-blue-400
                    text-[10px] sm:text-xs
                    font-bold
                    uppercase
                    tracking-wide
                  "
                >
                  <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                  Verified Issuer
                </span>
              </div>

              <div className="space-y-2 sm:space-y-3">
                <h4 className="text-black dark:text-white text-base sm:text-lg font-bold tracking-tight">
                  Credentials Overview
                </h4>
                <p className="text-xs sm:text-sm leading-relaxed text-neutral-700 dark:text-neutral-300">
                  This archive stores official certificates, validated learning
                  achievements, and specialized program credentials acquired
                  through{" "}
                  <span className="font-bold text-blue-600 dark:text-blue-400">
                    {cert.sub}
                  </span>.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-1">
                <div
                  className="
                    rounded-2xl
                    border border-black/10 dark:border-white/10
                    bg-black/[0.02] dark:bg-white/[0.02]
                    p-3 sm:p-4
                  "
                >
                  <div className="text-xl sm:text-2xl font-black text-black dark:text-white">
                    {cert.subDegrees?.length || cert.links?.length || 1}
                  </div>
                  <div className="text-[9px] sm:text-xs uppercase tracking-wide text-neutral-500 mt-0.5 font-medium">
                    Assets
                  </div>
                </div>

                <div
                  className="
                    rounded-2xl
                    border border-black/10 dark:border-white/10
                    bg-black/[0.02] dark:bg-white/[0.02]
                    p-3 sm:p-4
                  "
                >
                  <div className="text-xl sm:text-2xl font-black text-emerald-500">
                    100%
                  </div>
                  <div className="text-[9px] sm:text-xs uppercase tracking-wide text-neutral-500 mt-0.5 font-medium">
                    Verified
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-black/5 dark:border-white/10 max-sm:hidden">
                <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.15em] text-neutral-500 font-mono">
                  Additional certifications coming soon...
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ================= CERTIFICATES CONTENT PANELS ================= */}
        <div className="lg:col-span-8 space-y-4">
          {cert.isCollection ? (
            <>
              <div className="flex items-center justify-between gap-3 px-1">
                <h4 className="text-[10px] sm:text-sm font-black tracking-[0.15em] uppercase text-blue-600 dark:text-blue-400">
                  // Specialized Tracks
                </h4>
                <div className="text-[9px] sm:text-xs uppercase tracking-wide text-neutral-500 font-medium">
                  {cert.subDegrees?.length} Programs
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2.5 sm:gap-4 w-full">
                {cert.subDegrees?.map((subDegree, sIdx) => {
                  const sourceLink = subDegree.links?.find(link => link.type === "link");
                  const imageAssets = subDegree.links?.filter(asset => asset.type === "image") || [];

                  return (
                    <motion.div
                      key={sIdx}
                      whileHover={{ y: -2 }}
                      transition={{ duration: 0.2 }}
                      className="
                        group relative overflow-hidden
                        rounded-xl sm:rounded-2xl
                        border border-black/10 dark:border-white/10
                        bg-white/95 dark:bg-[#0b1120]/95
                        backdrop-blur-md
                        shadow-md hover:shadow-xl
                        transition-all duration-300
                        p-2.5 sm:p-4
                        flex flex-col justify-between
                      "
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                      <div className="relative z-10 space-y-2.5 flex flex-col justify-between h-full w-full">
                        <div className="space-y-0.5">
                          <h5 className="text-[11px] sm:text-sm md:text-base font-extrabold text-black dark:text-white tracking-tight line-clamp-2 leading-tight">
                            {subDegree.title}
                          </h5>
                          <p className="text-[8px] sm:text-[10px] uppercase tracking-wider text-neutral-400 dark:text-neutral-500 font-medium">
                            Module
                          </p>
                        </div>

                        <div className="space-y-2 w-full">
                          {imageAssets.map((asset, index) => (
                            <div
                              key={index}
                              onClick={() => onPreviewImage(asset.target)}
                              className="
                                relative overflow-hidden
                                rounded-lg sm:rounded-xl
                                border border-black/5 dark:border-white/10
                                aspect-[16/11]
                                w-full
                                cursor-zoom-in
                                bg-neutral-200 dark:bg-black/40
                                group/image
                              "
                            >
                              <img
                                src={asset.target}
                                alt={subDegree.title}
                                className="w-full h-full object-cover object-top transition-transform duration-500 group-hover/image:scale-[1.02]"
                              />
                              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/image:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <div className="px-2 py-1 rounded-full bg-blue-500 text-white text-[8px] font-bold uppercase tracking-wider shadow-md">
                                  👁 Preview
                                </div>
                              </div>
                            </div>
                          ))}

                          {sourceLink && (
                            <div className="w-full pt-0.5">
                              <a
                                href={sourceLink.target}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="
                                  flex items-center justify-center gap-1
                                  w-full
                                  px-2 py-1.5 sm:py-2
                                  rounded-lg sm:rounded-xl
                                  bg-neutral-100 dark:bg-white/[0.03]
                                  border border-black/5 dark:border-white/5
                                  text-neutral-700 dark:text-neutral-300
                                  text-[8px] sm:text-xs
                                  font-bold
                                  uppercase
                                  tracking-wider
                                  transition-all duration-200
                                  hover:bg-blue-500 hover:text-white
                                  hover:border-blue-500
                                  active:scale-[0.98]
                                "
                              >
                                🔗 Verify
                              </a>
                            </div>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </>
          ) : (
            /* ================= SINGLE DEGREE DISPLAY PANEL ================= */
            cert.links
              ?.filter(asset => asset.type === "image")
              .map((asset, index) => {
                const sourceLink = cert.links?.find(link => link.type === "link");

                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.35 }}
                    className="
                      group relative overflow-hidden
                      rounded-2xl sm:rounded-3xl
                      border border-black/10 dark:border-white/10
                      bg-white/95 dark:bg-[#0b1120]/95
                      backdrop-blur-md
                      shadow-xl
                      p-4 sm:p-6
                      space-y-4
                    "
                  >
                    <div className="flex items-center justify-between gap-3">
                      <h4 className="text-xs sm:text-sm font-black tracking-[0.15em] uppercase text-blue-600 dark:text-blue-400">
                        {asset.label}
                      </h4>
                      <div className="px-3 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-[10px] font-bold uppercase">
                        Verified
                      </div>
                    </div>

                    <div
                      onClick={() => onPreviewImage(asset.target)}
                      className="
                        relative overflow-hidden
                        rounded-xl sm:rounded-2xl
                        border border-black/5 dark:border-white/10
                        aspect-[16/11]
                        cursor-zoom-in
                        bg-neutral-200 dark:bg-black/40
                        group/image
                      "
                    >
                      <img
                        src={asset.target}
                        alt={asset.label}
                        className="w-full h-full object-cover object-top transition-transform duration-500 group-hover/image:scale-[1.015]"
                      />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/image:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <div className="px-5 py-2 rounded-full bg-blue-500 text-white text-xs font-bold uppercase tracking-widest shadow-lg">
                          👁 View Full Image
                        </div>
                      </div>
                    </div>

                    {sourceLink && (
                      <a
                        href={sourceLink.target}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                          inline-flex items-center justify-center gap-2
                          w-full sm:w-auto
                          px-5 py-3
                          rounded-xl
                          bg-neutral-100 dark:bg-white/[0.03]
                          border border-black/5 dark:border-white/5
                          text-neutral-700 dark:text-neutral-300
                          text-[10px] sm:text-xs
                          font-bold
                          uppercase
                          tracking-wider
                          transition-all duration-200
                          hover:bg-blue-500 hover:text-white
                          hover:border-blue-500
                          active:scale-95
                        "
                      >
                        🔗 Verify Document Source
                      </a>
                    )}
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
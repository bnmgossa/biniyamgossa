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
        space-y-5 sm:space-y-7
        text-left

        bg-[#dfe6ef]
        dark:bg-[#030712]

        rounded-3xl
        p-3 sm:p-5 md:p-6

        border border-black/10 dark:border-white/5
      "
    >
      {/* ================= HEADER ================= */}
      <div
        className="
          relative overflow-hidden
          rounded-2xl sm:rounded-3xl
          border border-black/10 dark:border-white/10
          bg-white/70 dark:bg-[#0b1120]
          backdrop-blur-xl
          shadow-lg sm:shadow-2xl
        "
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-cyan-500/10 pointer-events-none" />

        <div
          className="
            relative z-10
            flex flex-col md:flex-row
            justify-between
            items-start md:items-center
            gap-5
            p-4 sm:p-6 md:p-8
          "
        >
          <div className="min-w-0 w-full">
            <div
              className="
                flex items-center gap-2
                text-[9px] sm:text-[10px]
                font-mono
                tracking-[0.15em] sm:tracking-[0.25em]
                uppercase
                text-blue-500
                mb-2 sm:mb-3
              "
            >
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
              VERIFIED_SECURITY_REGISTRY
            </div>

            <h3
              className="
                text-2xl sm:text-3xl md:text-5xl
                font-black
                text-black dark:text-white
                tracking-tight
                leading-none
                break-words
              "
            >
              {cert.name}
            </h3>

            <div className="mt-3 flex flex-wrap items-center gap-2">
              <span
                className="
                  px-3 py-1
                  rounded-full
                  bg-blue-500/10
                  border border-blue-500/20
                  text-[10px] sm:text-xs
                  font-semibold
                  tracking-wide
                  uppercase
                  text-blue-500
                "
              >
                {cert.sub}
              </span>

              <span
                className="
                  px-3 py-1
                  rounded-full
                  bg-emerald-500/10
                  border border-emerald-500/20
                  text-[10px] sm:text-xs
                  font-semibold
                  tracking-wide
                  uppercase
                  text-emerald-500
                "
              >
                Verified Credentials
              </span>
            </div>
          </div>

          <button
            onClick={onBack}
            className="
              w-full md:w-auto
              flex items-center justify-center
              px-4 py-2.5 sm:px-5 sm:py-3
              rounded-xl sm:rounded-2xl
              border border-red-500/20
              bg-red-500/5
              text-red-500
              text-[10px] sm:text-xs
              font-bold
              uppercase
              tracking-[0.15em]
              transition-all duration-300
              hover:bg-red-500
              hover:text-white
              active:scale-95
            "
          >
            ← Return
          </button>
        </div>
      </div>

      {/* ================= MAIN ================= */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6">

        {/* ================= SIDEBAR ================= */}
        <div className="lg:col-span-4">
          <div
            className="
              lg:sticky lg:top-6
              relative overflow-hidden
              rounded-2xl sm:rounded-3xl
              border border-black/10 dark:border-white/10
              bg-white/70 dark:bg-[#0b1120]
              backdrop-blur-xl
              p-4 sm:p-6
              shadow-lg sm:shadow-2xl
            "
          >
            <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 via-transparent to-transparent pointer-events-none" />

            <div className="relative z-10 space-y-5">

              <div>
                <span
                  className="
                    inline-flex items-center gap-2
                    px-3 py-1
                    rounded-full
                    bg-blue-500/10
                    border border-blue-500/20
                    text-blue-500
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

              <div className="space-y-3">
                <h4 className="text-black dark:text-white text-lg font-bold">
                  Credentials Overview
                </h4>

                <p className="text-sm leading-relaxed text-neutral-600 dark:text-neutral-300">
                  This archive stores official certificates, validated learning
                  achievements, and specialized program credentials acquired
                  through{" "}
                  <span className="font-semibold text-blue-500">
                    {cert.sub}
                  </span>.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-2">

                <div
                  className="
                    rounded-2xl
                    border border-black/10 dark:border-white/10
                    bg-black/[0.03] dark:bg-white/[0.03]
                    p-4
                  "
                >
                  <div className="text-2xl font-black text-black dark:text-white">
                    {cert.subDegrees?.length || cert.links?.length || 1}
                  </div>

                  <div className="text-[10px] sm:text-xs uppercase tracking-wide text-neutral-500 mt-1">
                    Assets
                  </div>
                </div>

                <div
                  className="
                    rounded-2xl
                    border border-black/10 dark:border-white/10
                    bg-black/[0.03] dark:bg-white/[0.03]
                    p-4
                  "
                >
                  <div className="text-2xl font-black text-emerald-500">
                    100%
                  </div>

                  <div className="text-[10px] sm:text-xs uppercase tracking-wide text-neutral-500 mt-1">
                    Verified
                  </div>
                </div>
              </div>

              <div className="pt-5 border-t border-black/5 dark:border-white/10">
                <p
                  className="
                    text-[10px] sm:text-[11px]
                    uppercase
                    tracking-[0.15em]
                    text-neutral-500
                    font-mono
                  "
                >
                  Additional certifications coming soon...
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ================= CONTENT ================= */}
        <div className="lg:col-span-8 space-y-5">

          {cert.isCollection ? (
            <>
              <div className="flex items-center justify-between gap-3">
                <h4
                  className="
                    text-xs sm:text-sm
                    font-black
                    tracking-[0.15em]
                    uppercase
                    text-blue-500
                  "
                >
                  Specialized Tracks
                </h4>

                <div className="text-[10px] sm:text-xs uppercase tracking-wide text-neutral-500">
                  {cert.subDegrees?.length} Programs
                </div>
              </div>

              {/* MOBILE 2 COLUMN */}
              <div className="grid grid-cols-2 gap-3 sm:gap-5">

                {cert.subDegrees?.map((subDegree, sIdx) => (
                  <motion.div
                    key={sIdx}
                    whileHover={{ y: -3 }}
                    transition={{ duration: 0.2 }}
                    className="
                      group relative overflow-hidden
                      rounded-2xl
                      border border-black/10 dark:border-white/10
                      bg-white/70 dark:bg-[#0b1120]
                      backdrop-blur-xl
                      shadow-lg
                    "
                  >
                    <div
                      className="
                        absolute inset-0
                        opacity-0 group-hover:opacity-100
                        transition duration-500
                        bg-gradient-to-br from-blue-500/10 to-cyan-500/10
                      "
                    />

                    <div className="relative z-10 p-3 sm:p-5 space-y-3">

                      <div className="space-y-1">
                        <h5
                          className="
                            text-[11px] sm:text-lg
                            font-bold
                            text-black dark:text-white
                            leading-tight
                            line-clamp-2
                          "
                        >
                          {subDegree.title}
                        </h5>

                        <p className="hidden sm:block text-sm text-neutral-500">
                          Verified Program Credential
                        </p>
                      </div>

                      {subDegree.links
                        ?.filter(asset => asset.type === "image")
                        .map((asset, index) => {

                          const sourceLink = subDegree.links?.find(
                            link => link.type === "link"
                          );

                          return (
                            <div key={index} className="space-y-3">

                              <div
                                onClick={() => onPreviewImage(asset.target)}
                                className="
                                  relative overflow-hidden
                                  rounded-xl sm:rounded-2xl
                                  border border-black/10 dark:border-white/10
                                  aspect-square sm:aspect-[4/3]
                                  cursor-zoom-in
                                  bg-black/10 dark:bg-black/20
                                  group/image
                                "
                              >
                                <img
                                  src={asset.target}
                                  alt={subDegree.title}
                                  className="
                                    w-full h-full
                                    object-cover object-top
                                    transition-transform duration-500
                                    group-hover/image:scale-105
                                  "
                                />

                                <div
                                  className="
                                    absolute inset-0
                                    bg-black/40
                                    opacity-0
                                    group-hover/image:opacity-100
                                    transition duration-300
                                    flex items-center justify-center
                                  "
                                >
                                  <div
                                    className="
                                      px-3 py-1.5
                                      rounded-full
                                      bg-blue-500
                                      text-white
                                      text-[9px]
                                      font-bold
                                      uppercase
                                    "
                                  >
                                    Preview
                                  </div>
                                </div>
                              </div>

                              {sourceLink && (
                                <a
                                  href={sourceLink.target}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="
                                    flex items-center justify-center gap-2
                                    w-full
                                    px-3 py-2
                                    rounded-xl
                                    bg-cyan-500/10
                                    border border-cyan-500/20
                                    text-cyan-500
                                    text-[9px] sm:text-xs
                                    font-bold
                                    uppercase
                                    tracking-wide
                                    transition-all duration-300
                                    hover:bg-cyan-500
                                    hover:text-white
                                    active:scale-95
                                  "
                                >
                                  🔗 Source
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
                    transition={{ duration: 0.35 }}
                    className="
                      group relative overflow-hidden
                      rounded-2xl sm:rounded-3xl
                      border border-black/10 dark:border-white/10
                      bg-white/70 dark:bg-[#0b1120]
                      backdrop-blur-xl
                      shadow-lg sm:shadow-2xl
                      p-4 sm:p-5
                    "
                  >
                    <div className="relative z-10 space-y-4">

                      <div className="flex items-center justify-between gap-3">
                        <h4
                          className="
                            text-xs sm:text-sm
                            font-black
                            tracking-[0.15em]
                            uppercase
                            text-blue-500
                          "
                        >
                          {asset.label}
                        </h4>

                        <div
                          className="
                            px-3 py-1
                            rounded-full
                            bg-emerald-500/10
                            border border-emerald-500/20
                            text-emerald-500
                            text-[10px]
                            font-bold
                          "
                        >
                          Verified
                        </div>
                      </div>

                      <div
                        onClick={() => onPreviewImage(asset.target)}
                        className="
                          relative overflow-hidden
                          rounded-2xl
                          border border-black/10 dark:border-white/10
                          aspect-[16/11]
                          cursor-zoom-in
                          bg-black/10 dark:bg-black/20
                          group/image
                        "
                      >
                        <img
                          src={asset.target}
                          alt={asset.label}
                          className="
                            w-full h-full
                            object-cover object-top
                            transition-transform duration-500
                            group-hover/image:scale-105
                          "
                        />

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
                              px-5 py-2
                              rounded-full
                              bg-blue-500
                              text-white
                              text-[10px] sm:text-xs
                              font-bold
                              uppercase
                            "
                          >
                            👁 Open
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
                            px-4 py-2.5
                            rounded-xl
                            bg-cyan-500/10
                            border border-cyan-500/20
                            text-cyan-500
                            text-[10px] sm:text-xs
                            font-bold
                            uppercase
                            tracking-wide
                            transition-all duration-300
                            hover:bg-cyan-500
                            hover:text-white
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
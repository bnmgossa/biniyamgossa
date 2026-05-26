import React, { useEffect, useState } from "react";
import profile from "../../assets/images/profile/profile.jpeg";

const texts = [
  "BINIYAM GOSSA",
  "BSc Graduate — Feb 2025"
];

const Hero = () => {
  const [textIndex, setTextIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const currentText = texts[textIndex];
    const typingSpeed = isDeleting ? 50 : 90;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayedText(currentText.slice(0, charIndex + 1));
        setCharIndex(charIndex + 1);

        if (charIndex + 1 === currentText.length) {
          setTimeout(() => setIsDeleting(true), 1200);
        }
      } else {
        setDisplayedText(currentText.slice(0, charIndex - 1));
        setCharIndex(charIndex - 1);

        if (charIndex - 1 === 0) {
          setIsDeleting(false);
          setTextIndex((prev) => (prev + 1) % texts.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, textIndex]);

  // LOGIC TO RENDER COLORED TEXT
  const renderStyledText = () => {
    if (textIndex === 0) {
      
      const splitAt = "BINIYAM".length;
      if (displayedText.length <= splitAt) {
        return <span>{displayedText}</span>;
      }
      return (
        <>
          <span>{displayedText.slice(0, splitAt)}</span>
          <span className="text-black dark:text-blue-500 ">{displayedText.slice(splitAt)}</span>
        </> 
      );
    } else {
      // Logic for "BSc Graduate — Feb 2025"
      // We want "Feb 2025" to be red
      const splitAt = "BSc Graduate — ".length;
      if (displayedText.length <= splitAt) {
        return <span>{displayedText}</span>;
      }
      return (
        <>
          <span>{displayedText.slice(0, splitAt)}</span>
          <span className="text-red-500 dark:text-red-500">{displayedText.slice(splitAt)}</span>
        </>
      );
    }
  };

  return (
    <section className="px-4 sm:px-6 lg:px-6 -mt-20 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-6 sm:gap-8 md:gap-12">

          {/* ================= LEFT - PROFILE ================= */}
          <div className="relative flex-shrink-0">
            <div className="absolute inset-0 rounded-3xl bg-green-500/20 blur-3xl opacity-70" />
            <div
              className="relative rounded-3xl p-[4px] bg-gradient-to-br from-green-400 to-emerald-600 shadow-2xl"
              style={{
                width: "clamp(140px, 25vw, 280px)",
                height: "clamp(140px, 25vw, 280px)",
              }}
            >
              <div className="w-full h-full rounded-3xl overflow-hidden bg-black">
                <img src={profile} alt="Biniyam Gossa" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>

          {/* ================= RIGHT - TEXT ================= */}
          <div className="flex flex-col flex-1 min-w-0 justify-center">
            
            <div className="min-h-[80px] sm:min-h-[120px] flex flex-col justify-center">
              <h1 className="font-black tracking-tight text-gray-900 dark:text-white leading-[1.1]">
                <div
                  className="text-green-500 break-words"
                  style={{ fontSize: "clamp(1.3rem, 6vw, 3.8rem)" }}
                >
                  {renderStyledText()}
                  <span className="inline-block animate-pulse ml-1 text-blue-400">|</span>
                </div>
              </h1>
            </div>

            <div className="mt-2 sm:mt-4">
              <p
                className="uppercase tracking-[0.15em] sm:tracking-[0.3em] text-gray-600 font-mono"
                style={{ fontSize: "clamp(0.65rem, 2vw, 1rem)" }}
              >
                Computer Science • Frontend • IT Security
              </p>

              <div className="mt-4 px-4 py-2 w-fit rounded-full bg-green-500/10 border border-green-500/30 text-[10px] sm:text-xs font-bold font-black animate-pulse  uppercase tracking-wider flex items-center gap-2">
                <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                Available for Work
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
import { ArrowDownRight, ArrowUpRight, MapPin } from "lucide-react";
import profile from "../../assets/images/profile/profile.jpeg";
import resume from "../../assets/BINIYAM_GOSSA_KEBEDE.pdf";

const Hero = () => (
  <section className="relative overflow-hidden px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
    <div aria-hidden="true" className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-emerald-400/15 blur-3xl" />
    <div aria-hidden="true" className="pointer-events-none absolute -bottom-20 left-1/4 h-56 w-56 rounded-full bg-blue-500/10 blur-3xl" />

    <div className="relative mx-auto grid max-w-6xl items-center gap-8 md:grid-cols-[minmax(0,1.2fr)_minmax(240px,0.8fr)] md:gap-12">
      <div className="order-2 min-w-0 md:order-1">
        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-500/25 bg-emerald-500/10 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-emerald-700 dark:text-emerald-300 sm:text-xs">
          <span className="h-2 w-2 rounded-full bg-emerald-500" />
          Open to entry-level opportunities
        </div>

        <p className="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-gray-500 dark:text-gray-400">
          Hello, I’m
        </p>
        <h1 className="text-4xl font-black leading-[1.02] tracking-tight text-gray-950 dark:text-white sm:text-5xl lg:text-7xl">
          Biniyam <span className="text-emerald-500">Gossa</span>
        </h1>
        <h2 className="mt-4 max-w-2xl text-lg font-semibold leading-snug text-gray-700 dark:text-gray-200 sm:text-2xl">
          Computer Science Graduate <span className="text-emerald-500">|</span> Frontend Development & IT Infrastructure
        </h2>
        <p className="mt-5 max-w-2xl text-sm leading-7 text-gray-600 dark:text-gray-300 sm:text-base">
          I build responsive web experiences and develop practical skills in networking, system support, and IT infrastructure. I enjoy learning by building, troubleshooting, and documenting real technical projects.
        </p>

        <div className="mt-5 flex items-center gap-2 text-xs font-medium text-gray-500 dark:text-gray-400 sm:text-sm">
          <MapPin size={16} className="text-emerald-500" aria-hidden="true" />
          Addis Ababa, Ethiopia · Open to junior roles and internships
        </div>

        <div className="mt-7 flex flex-wrap gap-3">
          <a href="#showcase" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-emerald-500 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-emerald-500/20 transition hover:-translate-y-0.5 hover:bg-emerald-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2">
            Explore my work <ArrowDownRight size={17} aria-hidden="true" />
          </a>
          <a href={resume} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-gray-300 bg-white/80 px-5 py-3 text-sm font-bold text-gray-800 transition hover:-translate-y-0.5 hover:border-emerald-500 hover:text-emerald-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 dark:border-white/15 dark:bg-white/5 dark:text-white">
            View résumé <ArrowUpRight size={17} aria-hidden="true" />
          </a>
        </div>

        <div className="mt-8 flex flex-wrap gap-2" aria-label="Core focus areas">
          {["React & JavaScript", "Networking", "IT Support", "System Administration"].map((item) => (
            <span key={item} className="rounded-lg border border-gray-200 bg-white/70 px-3 py-2 text-[10px] font-semibold text-gray-600 dark:border-white/10 dark:bg-white/5 dark:text-gray-300 sm:text-xs">
              {item}
            </span>
          ))}
        </div>
      </div>

      <div className="order-1 mx-auto w-full max-w-xs md:order-2 md:max-w-sm">
        <div className="relative mx-auto aspect-[4/5] max-h-[430px] overflow-hidden rounded-[2rem] border border-white/70 bg-gradient-to-br from-emerald-400/30 via-white/10 to-blue-500/20 p-2 shadow-2xl shadow-emerald-950/10 dark:border-white/10">
          <div className="absolute inset-2 rounded-[1.6rem] border border-white/40 dark:border-white/10" />
          <img src={profile} alt="Portrait of Biniyam Gossa" fetchPriority="high" className="h-full w-full rounded-[1.55rem] object-cover object-center" />
          <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/30 bg-white/90 p-4 shadow-xl backdrop-blur-md dark:border-white/10 dark:bg-gray-950/85">
            <p className="text-xs font-black uppercase tracking-wider text-gray-900 dark:text-white">Learn · Build · Troubleshoot</p>
            <p className="mt-1 text-[11px] leading-relaxed text-gray-600 dark:text-gray-300">Focused on practical technology and continuous improvement.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;

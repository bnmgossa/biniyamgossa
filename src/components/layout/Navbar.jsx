import { Home, UserRound, Zap, BriefcaseBusiness, Mail, FileText } from "lucide-react";
import logoImg from "../../../public/logo.png";
import resume from "../../assets/BINIYAM_GOSSA_KEBEDE.pdf";

const navLinks = [
  { name: "Home", href: "home", icon: Home },
  { name: "About", href: "about", icon: UserRound },
  { name: "Work", href: "showcase", icon: BriefcaseBusiness },
  { name: "Skills", href: "skills", icon: Zap },
  { name: "Contact", href: "contact", icon: Mail },
];

const Navbar = () => (
  <>
    <a href="#home" aria-label="B-Prime portfolio home" className="fixed left-4 top-4 z-[100] inline-flex items-center gap-2 rounded-xl border border-white/30 bg-white/85 px-3 py-2 shadow-lg backdrop-blur-xl transition hover:-translate-y-0.5 dark:border-white/10 dark:bg-gray-950/80 sm:left-6 sm:top-5">
      <img src={logoImg} alt="" className="h-7 w-7 rounded-md object-contain" />
      <span className="text-sm font-black tracking-tight text-gray-950 dark:text-white">B<span className="text-emerald-500">-PRIME</span></span>
    </a>

    <nav aria-label="Main navigation" className="fixed bottom-3 left-1/2 z-[100] -translate-x-1/2 md:bottom-auto md:left-auto md:right-5 md:top-1/2 md:-translate-y-1/2 md:translate-x-0">
      <div className="flex items-center gap-1.5 rounded-2xl border border-white/60 bg-white/90 p-2 shadow-2xl shadow-gray-950/10 backdrop-blur-xl dark:border-white/10 dark:bg-gray-950/90 md:flex-col md:gap-2">
        {navLinks.map(({ name, href, icon: Icon }) => (
          <a
            key={name}
            href={`#${href}`}
            aria-label={name}
            title={name}
            className="group flex h-11 w-11 items-center justify-center rounded-xl text-gray-600 transition hover:bg-emerald-500 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 dark:text-gray-300 sm:h-12 sm:w-12"
          >
            <Icon size={19} aria-hidden="true" />
            <span className="sr-only">{name}</span>
          </a>
        ))}
        <a href={resume} target="_blank" rel="noopener noreferrer" aria-label="Open résumé PDF" title="Open résumé" className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-500 text-white shadow-md transition hover:bg-emerald-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 sm:h-12 sm:w-12">
          <FileText size={19} aria-hidden="true" />
        </a>
      </div>
    </nav>
  </>
);

export default Navbar;

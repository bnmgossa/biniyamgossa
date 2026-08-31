import React from 'react';
import { Home, User, Zap, Briefcase, MessageSquare, FileText } from 'lucide-react';
import logoImg from "../../../public/logo.png"
import resume from "../../assets/BINIYAM GOSSA MASTER CV.pdf"

const Navbar = () => {
  const navLinks = [
    { name: 'Home', href: 'home', icon: <Home size={20} /> },
    { name: 'About', href: 'about', icon: <User size={20} /> },
    { name: 'Skills', href: 'skills', icon: <Zap size={20} /> },
    { name: 'Works', href: 'projects', icon: <Briefcase size={20} /> },
    { name: 'Contact', href: 'contact', icon: <MessageSquare size={20} /> },
  ];

  // This is the most reliable smooth scroll function for PC
  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start', // Ensures it aligns to the top
      });
    }
  };

  return (
    <>
      {/* Brand Logo */}
      <div className="absolute top-3 left-6 z-[100] mix-blend-difference flex items-center gap-2">
        <img src={logoImg} alt="Logo" className="w-7 h-7 object-contain rounded-sm" />
        <span className="text-xl font-black tracking-tighter !text-black uppercase">
          B<span className="!text-green-500">-PRIME</span>
        </span>
      </div>

      <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 md:left-auto md:right-8 md:top-1/2 md:-translate-y-1/2 md:translate-x-0 z-[100]">
        <div className="flex md:flex-col items-center gap-2 p-2 bg-gradient-to-l from-green-300 to-blue-400 dark:bg-white backdrop-blur-2xl rounded-3xl border border-white/10 dark:border-black/10 shadow-2xl">
          
          {navLinks.map((link) => (
            <button 
              key={link.name} 
              onClick={() => handleScroll(link.href)} // Using the new function
              className="group relative w-12 h-12 flex items-center justify-center rounded-2xl hover:bg-purple-600 transition-all duration-300"
            >
              <div className="!text-white  group-hover:!text-white transition-colors">
                {link.icon}
              </div>
              
              <span className="hidden md:block absolute right-16 px-3 py-1 rounded-lg bg-gray-900 !text-white text-[10px] font-bold opacity-0 group-hover:opacity-100 transition-opacity uppercase tracking-widest pointer-events-none">
                {link.name}
              </span>
            </button>
          ))}

          {/* CV Button */}
          <a 
            href={resume}
            target="_blank"
            rel="noopener noreferrer" 
            className="group relative w-12 h-12 rounded-2xl bg-purple-600 !text-white flex items-center justify-center shadow-lg active:scale-90 transition-all hover:bg-purple-700"
          >
            <FileText size={20} />
          </a>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
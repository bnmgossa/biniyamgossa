import React from 'react';

const Footer = () => {
  return (
    <footer className="py-12 border-t border-white/5 text-center">
      <div className="text-gray-500 text-sm">
        <p>© {new Date().getFullYear()} Biniyam Gossa. Built with React & Tailwind.</p>
        <p className="mt-2 text-[10px] uppercase tracking-widest">BSc Computer Science Graduate · HUEC</p>
      </div>
    </footer>
  );
};

export default Footer;
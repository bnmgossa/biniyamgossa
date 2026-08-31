import React from 'react';

const Card = ({ children, className = "" }) => {
  return (
    <div className={`
      bg-white/5 backdrop-blur-xl 
      border border-white/10 
      rounded-3xl p-8 
      shadow-[0_8px_32px_0_rgba(31,38,135,0.37)]
      hover:border-purple-500/50 transition-all duration-500
      ${className}
    `}>
      {children}
    </div>
  );
};

export default Card;
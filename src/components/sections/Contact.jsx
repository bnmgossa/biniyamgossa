import React from 'react';

const Contact = () => {
  const socials = [
    { 
      name: 'LinkedIn', 
      link: 'https://linkedin.com/in/biniyamgossa',
      username: 'biniyamgossa',
      img: 'https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png',
      shadow: 'shadow-md shadow-blue-500',
      hoverShadow: 'hover:shadow-sky-500/40',
      border: 'hover:border-sky-500/50'
    },
    { 
      name: 'Email', 
      link: 'mailto:binigossa1@gmail.com',
      username: 'binigoss...',
      img: 'https://upload.wikimedia.org/wikipedia/commons/7/7e/Gmail_icon_%282020%29.svg',
      shadow: 'shadow-[box-shadow:-15px_10px_30px_-10px_rgba(59,130,246,0.5),0px_10px_30px_-10px_rgba(239,68,68,0.5),15px_10px_30px_-10px_rgba(234,179,8,0.5),30px_10px_30px_-10px_rgba(34,197,94,0.5)]',
      hoverShadow: 'hover:shadow-sky-500/40',
      border: 'hover:border-sky-500/50'
    },
    { 
      name: 'Telegram', 
      link: 'https://t.me/biniyamgossa',
      username: '@biniyamgossa',
      img: 'https://upload.wikimedia.org/wikipedia/commons/8/82/Telegram_logo.svg',
      shadow: 'shadow-md shadow-sky-500',
      hoverShadow: 'hover:shadow-blue-500',
      border: 'hover:border-sky-500/50'
    },
    { 
      name: 'Instagram', 
      link: 'https://instagram.com/biniyamgossa',
      username: '@biniyamgossa',
      img: 'https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png',
      shadow: 'shadow-md shadow-red-500',
      hoverShadow: 'hover:shadow-pink-500/40',
      border: 'hover:border-pink-500/50'
    },
    { 
      name: 'TikTok', 
      link: 'https://tiktok.com/@biniyamgossa',
      username: '@biniyamgossa',
      img: 'https://upload.wikimedia.org/wikipedia/commons/3/34/Ionicons_logo-tiktok.svg',
      shadow: 'shadow-md shadow-black',
      hoverShadow: 'hover:shadow-blue-600/40',
      border: 'hover:border-blue-600/50'
    },
    { 
      name: 'Facebook', 
      link: 'https://facebook.com/biniyamgossa',
      username: 'biniyamgossa',
      img: 'https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png',
      shadow: 'shadow-md shadow-sky-800',
      hoverShadow: 'hover:shadow-blue-600/40',
      border: 'hover:border-blue-600/50'
    },
  ];

  return (
    <div className=" bg-black/10 rounded-t-2xl -mt-16 pt-10">
      <section id="contact" className="px-4 md:px-8 max-w-6xl mx-auto">

        {/* Header */}
        <div className="flex items-center gap-4 mb-10">
          <h2 className="text-xs md:text-sm font-black uppercase tracking-[0.4em] text-gray-500 dark:text-gray-400 italic whitespace-nowrap">
            04. Let’s Connect
          </h2>
          <div className="flex-grow h-px bg-gradient-to-r from-red-500 via-black to-transparent  " />
        </div>

        {/* ✅ Grid back to 2 columns on small screens */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {socials.map((social) => (
            <a 
              key={social.name}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative flex items-center gap-3 md:gap-4 p-4 md:p-5
                          bg-white dark:bg-white/5
                          border border-white/10
                          rounded-2xl
                          backdrop-blur-md   /* ✅ strong bg on small too */
                          transition-all duration-300
                          hover:-translate-y-1
                          ${social.shadow} ${social.hoverShadow} ${social.border}`}
            >
              {/* subtle gradient overlay */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-white/10 to-transparent pointer-events-none" />

              <img 
                src={social.img}
                alt={social.name}
                className="w-8 h-8 md:w-10 md:h-10 object-contain transition-transform duration-300 group-hover:scale-110"
              />

              <div className="flex flex-col">
                <p className="text-gray-900 dark:text-white font-bold text-xs md:text-sm uppercase tracking-wider">
                  {social.name}
                </p>
                <span className="text-[10px] md:text-xs text-gray-500 font-mono mt-1 truncate">
                  {social.username}
                </span>
              </div>
            </a>
          ))}
        </div>

        {/* Bottom */}
        <div className="pt-10 pb-8 text-center">
          <div className="h-[1px] w-full bg-gradient-to-r from-red-500 via-black  to-transparent mb-6" />
          
          <p className="text-xs tracking-[0.3em] text-gray-500 dark:text-gray-600 font-semibold uppercase">
            © {new Date().getFullYear()} Biniyam Gossa
          </p>

          <p className="text-[10px] text-gray-400 mt-2 tracking-wide">
            Built with React & Tailwind • Designed with Precision
          </p>
        </div>

      </section>
    </div>
  );
};

export default Contact;

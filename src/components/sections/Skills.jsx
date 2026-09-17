import React from 'react';

const Skills = () => {
  const categories = [
    {
      title: "Frontend Development",
      color: "purple",
      skills: ["React.js", "JavaScript", "Tailwind CSS", "HTML5/CSS3", "Vite"],
      border:"purple-500",
      shadow: "shadow-purple-500/50" // Added full class
    },
    {
      title: "IT & Systems",
      color: "blue",
      skills: ["Networking", "System Security", "Hardware Fix", "Windows OS", ],
      border:"blue-500",
      shadow: "shadow-blue-500/50" // Added full class
    },
    {
      title: "Workflow Tools",
      color: "yellow",
      skills: ["Git/GitHub", "Vercel", "VS Code", "Microsoft Office","Blender3D","..."],
      border:"emerald-500",
      shadow: "shadow-yellow-500/50" // Added full class
    }
  ];

  const textColors = {
    purple: "text-purple-500",
    blue: "text-blue-500",
    yellow: "text-yellow-500",
  };

  return (
    <section id="skills" className="space-y-4 md:space-y-8 -mt-19">
      
      <div className="flex items-center gap-3">
        <h2 className="text-xs md:text-xl font-black uppercase tracking-[0.2em] italic text-emerald-400">
          04. Technical Skills
        </h2>
        <div className="h-[1px] bg-black/50 flex-grow" />
      </div>

      <div className=" grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
        {categories.map((cat) => (
          <div 
            key={cat.title} 
            className={`relative p-5 md:p-6 rounded-sm bg-gradient-to-br from-${cat.color}-50/10 via-${cat.color}-100/20 to-${cat.color}-200/20 
              backdrop-blur-lg overflow-hidden group hover:scale-105 transition-transform duration-500 shadow-sm ${cat.shadow} hover:shadow-2xl`}
          >
            <div className={`absolute -top-10 -right-10 w-28 h-28 rounded-full opacity-40 
              bg-gradient-to-tr from-${cat.color}-400 via-${cat.color}-500 to-${cat.color}-600 
              blur-3xl group-hover:opacity-70 transition-all duration-500`} />

            <h3 className={`text-sm md:text-base font-mono font-bold uppercase mb-4 text-${cat.color}-600 tracking-widest`}>
              {cat.title}
            </h3>

            <div className="flex flex-wrap gap-2">
              {cat.skills.map((skill, i) => (
                <span 
                  key={skill} 
                  className={`px-3 py-1 rounded-md bg-gradient-to-r from-${cat.color}-300 to-${cat.color}-500 
                    border border-${cat.color}-600 ${textColors[cat.color]} font-semibold text-[10px] md:text-xs 
                    hover:from-${cat.color}-400 hover:to-${cat.color}-600 hover:scale-105 transition-all duration-300 cursor-default`}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
import React from 'react';
import { ExternalLink } from 'lucide-react';
import { personalProjects } from '../../data/personalProjects';
import { academicProjects } from '../../data/academicProjects';

const ProjectCard = ({ project, accent }) => {
  const accentColor = accent === 'purple' ? 'purple' : 'blue';

  return (
    <>
      <div className="glass-card group flex flex-col overflow-hidden h-full border-2 border-transparent transition-all duration-300 active:scale-95 shadow-lg">
        
        {/* 1. Header Area - Now with Image Support */}
        <div className={`h-24 md:h-32 bg-${accentColor}-500/10 flex items-center justify-center relative overflow-hidden`}>
          {project.image ? (
            <img 
              src={project.image} 
              alt={project.title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          ) : (
            <span className={`text-${accentColor}-500/20 font-black text-2xl md:text-4xl uppercase tracking-tighter`}>
              {project.tags[0]}
            </span>
          )}
          
          {/* Decorative Overlay to ensure the dot is visible */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
          
          <div className={`absolute top-2 right-2 w-2 h-2 rounded-full bg-${accentColor}-500 shadow-[0_0_8px_rgba(168,85,247,0.5)] z-10`} />
        </div>

        {/* 2. Info & Action Area */}
        <div className="p-4 md:p-6 flex flex-col flex-grow bg-white ">
          <div className="flex-grow">
            <h3 className="text-sm md:text-xl font-black text-gray-900  leading-tight mb-2 line-clamp-1">
              {project.title}
            </h3>
            
            <p className="text-[10px] md:text-sm text-gray-600 dark:text-gray-400 line-clamp-2 mb-4 leading-snug">
              {project.description}
            </p>
          </div>

          {/* 3. The Button */}
          <a 
            href={project.link || "#"} 
            target="_blank" 
            rel="noopener noreferrer"
            className={`w-full py-2 items-center md:py-3 bg-${accentColor}-600 hover:bg-${accentColor}-500 text-white rounded-xl flex items-center justify-center gap-2 font-black uppercase tracking-widest text-[9px] md:text-xs transition-all shadow-md shadow-${accentColor}-500/20`}
          >
            <span>Live</span>
            <ExternalLink size={12} className="md:w-4 md:h-4" />
          </a>
        </div>
      </div>
    </>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="space-y-4 -mt-16 md:-mt-8" >
      {/* PERSONAL PROJECTS */}
      <div>
        <div className="flex items-center justify-between mb-6 px-2 gap-1">
          <h2 className="text-lg md:text-3xl font-black uppercase tracking-tighter italic text-gray-900 ">
            Personal <span className="text-purple-500">Labs</span>
          </h2>
          <div className="h-[1px] bg-gradient-to-r from-green-500 via-black to-transparent  flex-grow" />

          <span className="text-[10px] md:text-xs text-black font-mono font-bold uppercase">
            QTY: {personalProjects.length}
          </span>
        </div>
        
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
          {personalProjects.map((p, i) => (
            <ProjectCard key={i} project={p} accent="purple" />
          ))}
        </div>
      </div>

      {/* ACADEMIC PROJECTS */}
      <div>
        <div className="flex items-center justify-between mb-6 px-2 gap-1">
          <h2 className="text-lg md:text-3xl font-black uppercase tracking-tighter italic text-blue-500">
            Academic
          </h2>
          <div className="h-[1px] bg-gradient-to-r from-green-500 via-black to-transparent  flex-grow" />

          <span className="text-[10px] md:text-xs text-gray-500 font-mono font-bold uppercase">
            QTY: {academicProjects.length}
          </span>
        </div>
        
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
          {academicProjects.map((p, i) => (
            <ProjectCard key={i} project={p} accent="blue" />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
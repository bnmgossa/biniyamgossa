import React from 'react';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import ProjectShowcase from './components/sections/ProjectShowcase';
import Skills from './components/sections/Skills';
import Contact from './components/sections/Contact';

function App() {
  return (
    <div className="min-h-screen bg-transparent scroll-smooth transition-colors duration-500">
        <Navbar />
        <main id="main-content" className="mx-auto max-w-6xl space-y-20 px-4 pb-28 pt-24 sm:px-6 sm:pt-28 lg:px-8">
          <section id="home"><Hero /></section>
          <About />
          <ProjectShowcase />
          <section id="skills"><Skills /></section>
          <section id="contact"><Contact /></section>
        </main>
    </div>
  );
}
export default App;
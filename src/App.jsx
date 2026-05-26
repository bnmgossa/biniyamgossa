import React from 'react';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Contact from './components/sections/Contact';

function App() {
  return (
    <div className="min-h-screen bg-transparent scroll-smooth transition-colors duration-500">
      <Navbar />
      <main className="max-w-5xl mx-auto px-6 pt-32 space-y-24 ">
        <section id="home"><Hero /></section>
        <section id="about" ><About /></section>
        <section id="skills"><Skills /></section>
        <section id="projects"><Projects /></section>
        <section id="contact"><Contact /></section>
        <div className="h-[20vh] pointer-events-none" />
      </main>
    </div>
  );
}
export default App;
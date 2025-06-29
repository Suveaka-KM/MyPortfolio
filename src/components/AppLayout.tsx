import React from 'react';
import Navigation from './Navigation';
import Hero from './Hero';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Footer from './Footer';

const AppLayout: React.FC = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navigation />
      <div id="home" className="w-full">
        <Hero />
      </div>
      <div id="about" className="w-full">
        <About />
      </div>
      <div id="skills" className="w-full">
        <Skills />
      </div>
      <div id="projects" className="w-full">
        <Projects />
      </div>
      <div id="contact" className="w-full">
        <Footer />
      </div>
    </div>
  );
};

export default AppLayout;
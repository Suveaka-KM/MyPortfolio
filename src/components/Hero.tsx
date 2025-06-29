import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Hero: React.FC = () => {
  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToProjects = () => {
    const element = document.querySelector('#projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-100/20 to-gray-200/20 backdrop-blur-3xl"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-gray-300/20 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-gray-400/20 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
      
      <div className="max-w-4xl mx-auto text-center w-full relative z-10">
        {/* Profile Photo */}
        <div className="mb-6 sm:mb-8">
          <div className="w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 mx-auto rounded-full bg-gradient-to-r from-gray-300 via-gray-400 to-gray-500 p-1 shadow-2xl hover:shadow-gray-400/25 transition-all duration-300">
            <img 
              src="https://d64gsuwffb70l.cloudfront.net/685eb3696f064b236e85eafc_1751173443987_3e15525c.jpg" 
              alt="Suveaka K M" 
              className="w-full h-full rounded-full object-cover"
            />
          </div>
        </div>
        
        {/* Name and Title */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-600 bg-clip-text text-transparent leading-tight">
          SUVEAKA K M
        </h1>
        <p className="text-lg sm:text-xl lg:text-2xl text-gray-700 mb-2 font-medium text-center">
          Full Stack Web Developer
        </p>
        <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 px-4 text-center">
          An aspiring software developer with a solid foundation in programming and a commitment to creating innovative software solutions. Proven skills problem solving and critical thinking enhance contributions in fast-paced development environments. Focused on delivering impactful projects that achieve positive results.
        </p>
        
        {/* Skills Preview */}
        <div className="flex flex-wrap justify-center gap-2 mb-6 sm:mb-8 px-4">
          <Badge variant="secondary" className="bg-gradient-to-r from-gray-200 to-gray-300 text-gray-800 text-xs sm:text-sm border-0 shadow-sm">Java</Badge>
          <Badge variant="secondary" className="bg-gradient-to-r from-gray-300 to-gray-400 text-gray-800 text-xs sm:text-sm border-0 shadow-sm">Spring Boot</Badge>
          <Badge variant="secondary" className="bg-gradient-to-r from-gray-100 to-gray-200 text-gray-800 text-xs sm:text-sm border-0 shadow-sm">Hibernate</Badge>
          <Badge variant="secondary" className="bg-gradient-to-r from-gray-200 to-gray-300 text-gray-800 text-xs sm:text-sm border-0 shadow-sm">HTML/CSS</Badge>
          <Badge variant="secondary" className="bg-gradient-to-r from-gray-300 to-gray-400 text-gray-800 text-xs sm:text-sm border-0 shadow-sm">JavaScript</Badge>
          <Badge variant="secondary" className="bg-gradient-to-r from-gray-100 to-gray-200 text-gray-800 text-xs sm:text-sm border-0 shadow-sm">MySQL</Badge>
        </div>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-gray-600 via-gray-700 to-gray-800 hover:from-gray-700 hover:via-gray-800 hover:to-gray-900 text-white w-full sm:w-auto shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            onClick={scrollToProjects}
          >
            View My Work
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-2 border-gray-600 text-gray-700 hover:bg-gradient-to-r hover:from-gray-100 hover:to-gray-200 hover:text-gray-800 w-full sm:w-auto shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            onClick={scrollToContact}
          >
            Contact Me
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
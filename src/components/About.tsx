import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Code, Briefcase, GraduationCap } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-gray-100/20 to-gray-200/20"></div>
      <div className="absolute top-10 right-10 w-64 h-64 bg-gray-300/20 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-10 left-10 w-64 h-64 bg-gray-400/20 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-1000"></div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-600 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed px-4 text-center">
            An aspiring software developer with a solid foundation in programming and a commitment to creating innovative 
            software solutions. Proven skills in problem solving and critical thinking enhance contributions in fast-paced 
            development environments. Focused on delivering impactful projects that achieve positive results.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <Card className="hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-white/80 backdrop-blur-sm border-gray-300 shadow-lg hover:bg-white/90">
            <CardContent className="p-6 sm:p-8 text-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 sm:mb-6 bg-gradient-to-r from-gray-400 via-gray-500 to-gray-600 rounded-full flex items-center justify-center shadow-lg">
                <Code className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-gray-800">Development</h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-center">
                Full-stack web development experience with Java, Spring Boot, Hibernate, 
                and modern front-end technologies including HTML, CSS, and JavaScript.
              </p>
            </CardContent>
          </Card>
          
          <Card className="hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-white/80 backdrop-blur-sm border-gray-300 shadow-lg hover:bg-white/90">
            <CardContent className="p-6 sm:p-8 text-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 sm:mb-6 bg-gradient-to-r from-gray-500 via-gray-600 to-gray-400 rounded-full flex items-center justify-center shadow-lg">
                <Briefcase className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-gray-800">Experience</h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-center">
                Internship experience at TAP Academy and TAS Textiles, working on 
                full-stack applications and database management systems.
              </p>
            </CardContent>
          </Card>
          
          <Card className="hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 md:col-span-2 lg:col-span-1 bg-white/80 backdrop-blur-sm border-gray-300 shadow-lg hover:bg-white/90">
            <CardContent className="p-6 sm:p-8 text-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 sm:mb-6 bg-gradient-to-r from-gray-600 via-gray-400 to-gray-500 rounded-full flex items-center justify-center shadow-lg">
                <GraduationCap className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-gray-800">Education</h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-center">
                BTech in Information Technology from Sri Ramakrishna Institute of Technology 
                with CGPA 8.35. HSC in Maths-CS with 91.5% from Vivekananda Vidyalaya.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
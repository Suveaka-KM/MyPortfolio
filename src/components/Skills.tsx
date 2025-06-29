import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["Java Programming"],
      gradient: "from-gray-300 to-gray-400"
    },
    {
      title: "Frontend Technologies",
      skills: ["HTML", "CSS", "JavaScript"],
      gradient: "from-gray-400 to-gray-500"
    },
    {
      title: "Backend & Frameworks",
      skills: ["Spring Boot", "Hibernate", "Core Java", "JDBC", "Java Servlets", "JSP"],
      gradient: "from-gray-200 to-gray-300"
    },
    {
      title: "Database Systems",
      skills: ["SQL", "MySQL", "Oracle"],
      gradient: "from-gray-100 to-gray-200"
    },
    {
      title: "Tools & Technologies",
      skills: ["Tomcat", "Version Control"],
      gradient: "from-gray-300 to-gray-400"
    },
    {
      title: "Certifications",
      skills: ["Full Stack Web Developer", "Business English Certificate"],
      gradient: "from-gray-400 to-gray-500"
    }
  ];

  return (
    <section id="skills" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-l from-gray-200/20 to-gray-300/20 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-r from-gray-300/20 to-gray-400/20 rounded-full filter blur-3xl"></div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-600 bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <p className="text-lg sm:text-xl text-gray-700 text-center max-w-3xl mx-auto">
            Technologies and tools I work with to create innovative software solutions and deliver impactful projects.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {skillCategories.map((category, index) => (
            <Card key={index} className="hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 bg-white/90 backdrop-blur-sm border-gray-300 shadow-lg">
              <CardHeader className="pb-3 sm:pb-4">
                <CardTitle className="text-base sm:text-lg font-semibold text-center text-gray-800">
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="flex flex-wrap gap-2 justify-center">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex} 
                      variant="secondary"
                      className={`bg-gradient-to-r ${category.gradient} text-white hover:shadow-lg transition-all duration-200 transform hover:scale-105 text-xs sm:text-sm px-3 py-1 border-0 font-medium`}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
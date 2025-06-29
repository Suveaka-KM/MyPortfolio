import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Github } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: "Crop Yield Prediction",
      description: "Developed a robust predictive machine learning model for crop yield, utilizing gradient boosting techniques, and incorporating diverse environmental and agricultural data, implemented in Python using scikit-learn and Pandas, significantly enhancing the accuracy of agricultural forecasts.",
      technologies: ["Python", "Machine Learning", "Scikit-learn", "Pandas", "Gradient Boosting"],
      githubUrl: "https://github.com/Suveaka-KM"
    },
    {
      title: "Full Stack Web Application",
      description: "Developed a full-stack web application for an academic project, managing front-end and back-end components. Created interactive user interfaces using HTML, CSS, and JavaScript for enhanced user experience and implemented server-side logic using Java Servlets and JSP.",
      technologies: ["Java", "HTML", "CSS", "JavaScript", "Java Servlets", "JSP", "MySQL"],
      githubUrl: "https://github.com/Suveaka-KM"
    },
    {
      title: "Database Management System",
      description: "Designed and developed a database-driven web application for efficient data management. Structured relational databases using MySQL and implemented CRUD operations through JDBC. Ensured data integrity and optimized queries to enhance performance.",
      technologies: ["MySQL", "JDBC", "Java", "Database Design", "SQL"],
      githubUrl: "https://github.com/Suveaka-KM"
    }
  ];

  return (
    <section id="projects" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-4">
            Featured Projects
          </h2>
          <p className="text-lg sm:text-xl text-gray-700 text-center max-w-3xl mx-auto">
            Some of my recent work and academic projects showcasing technical skills and innovative problem-solving approaches.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 h-full flex flex-col bg-white/80 backdrop-blur-sm border-gray-300 shadow-lg hover:bg-white/90">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg sm:text-xl font-bold text-gray-800 leading-tight">
                  {project.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                <p className="text-gray-600 mb-4 text-sm sm:text-base leading-relaxed flex-1 text-center">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-1 sm:gap-2 mb-4 sm:mb-6 justify-center">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge 
                      key={techIndex} 
                      variant="secondary"
                      className="bg-gradient-to-r from-gray-200 to-gray-300 text-gray-800 text-xs px-2 py-1 border-0"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex justify-center">
                  <Button 
                    size="sm" 
                    className="bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800 text-white border-0 px-6 py-2 text-xs sm:text-sm" 
                    onClick={() => window.open(project.githubUrl, '_blank')}
                  >
                    <Github className="mr-1 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                    View Code
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
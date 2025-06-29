import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Mail, MapPin, Download, Linkedin, Github } from 'lucide-react';

const Footer: React.FC = () => {
  const handleViewResume = () => {
    const resumeUrl = 'https://d64gsuwffb70l.cloudfront.net/685eb3696f064b236e85eafc_1751172987396_c93ed232.jpg';
    window.open(resumeUrl, '_blank');
  };

  return (
    <footer id="contact" className="bg-gradient-to-br from-gray-100 via-white to-gray-50 text-gray-800 py-12 sm:py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-gray-100/20 to-gray-200/20"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-200/20 via-transparent to-transparent"></div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-8 sm:mb-12">
          <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-gray-700 to-gray-800 bg-clip-text text-transparent">View My Resume</h3>
          <Button 
            onClick={handleViewResume}
            size="lg"
            className="bg-gradient-to-r from-gray-600 via-gray-700 to-gray-800 hover:from-gray-700 hover:via-gray-800 hover:to-gray-900 text-white font-semibold px-6 sm:px-8 py-2 sm:py-3 rounded-lg shadow-2xl hover:shadow-gray-400/25 transition-all duration-300 w-full sm:w-auto transform hover:-translate-y-1"
          >
            <Download className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
            View Resume
          </Button>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
          <Card className="bg-white/50 backdrop-blur-md border-gray-300 hover:bg-white/70 transition-all duration-300 hover:shadow-lg hover:shadow-gray-400/10">
            <CardContent className="p-4 sm:p-6 text-center">
              <div className="w-12 h-12 mx-auto mb-3 sm:mb-4 bg-gradient-to-r from-gray-400 to-gray-500 rounded-full flex items-center justify-center">
                <Mail className="h-6 w-6 text-white" />
              </div>
              <h4 className="font-semibold mb-2 text-sm sm:text-base text-gray-800">Email</h4>
              <p className="text-gray-600 text-xs sm:text-sm break-all">suveaka.mahalingam@gmail.com</p>
            </CardContent>
          </Card>
          
          <Card className="bg-white/50 backdrop-blur-md border-gray-300 hover:bg-white/70 transition-all duration-300 hover:shadow-lg hover:shadow-gray-400/10">
            <CardContent className="p-4 sm:p-6 text-center">
              <div className="w-12 h-12 mx-auto mb-3 sm:mb-4 bg-gradient-to-r from-gray-600 to-gray-700 rounded-full flex items-center justify-center">
                <MapPin className="h-6 w-6 text-white" />
              </div>
              <h4 className="font-semibold mb-2 text-sm sm:text-base text-gray-800">Location</h4>
              <p className="text-gray-600 text-sm sm:text-base">Coimbatore</p>
            </CardContent>
          </Card>
          
          <Card className="bg-white/50 backdrop-blur-md border-gray-300 sm:col-span-2 lg:col-span-1 hover:bg-white/70 transition-all duration-300 hover:shadow-lg hover:shadow-gray-400/10">
            <CardContent className="p-4 sm:p-6 text-center">
              <div className="flex justify-center space-x-4 mb-3 sm:mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-gray-500 to-gray-600 rounded-full flex items-center justify-center cursor-pointer hover:shadow-lg transition-all duration-200 transform hover:scale-110"
                  onClick={() => window.open('https://www.linkedin.com/in/suveaka-k-m', '_blank')}>
                  <Linkedin className="h-4 w-4 text-white" />
                </div>
                <div className="w-8 h-8 bg-gradient-to-r from-gray-700 to-gray-800 rounded-full flex items-center justify-center cursor-pointer hover:shadow-lg transition-all duration-200 transform hover:scale-110"
                  onClick={() => window.open('https://github.com/Suveaka-KM', '_blank')}>
                  <Github className="h-4 w-4 text-white" />
                </div>
              </div>
              <h4 className="font-semibold mb-2 text-sm sm:text-base text-gray-800">Social</h4>
              <p className="text-gray-600 text-xs sm:text-sm">LinkedIn & GitHub</p>
            </CardContent>
          </Card>
        </div>
        
        <div className="text-center pt-6 sm:pt-8 border-t border-gray-300">
          <p className="text-gray-600 text-sm sm:text-base">
            © 2024 Suveaka K M. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
import React from 'react';
import { Twitter, Instagram, Linkedin, Github } from 'lucide-react';

interface FooterProps {
  scrollToSection: (id: string) => void;
}

const Footer: React.FC<FooterProps> = ({ scrollToSection }) => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { icon: <Twitter size={20} />, url: '#' },
    { icon: <Instagram size={20} />, url: '#' },
    { icon: <Linkedin size={20} />, url: '#' },
    { icon: <Github size={20} />, url: 'https://github.com/Not404devs' },
  ];

  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 md:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 
              className="text-2xl font-bold mb-4 cursor-pointer clickable"
              onClick={() => scrollToSection('hero')}
            >
              <span className="text-white">NØT</span>
              <span className="text-red-600">404</span>
            </h3>
            <p className="text-gray-400 mb-4">
            Smart, scalable web solutions built for impact.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <a 
                  key={index} 
                  href={link.url} 
                  className="text-gray-400 hover:text-red-600 transition-colors duration-300 clickable"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="text-gray-400 hover:text-red-600 transition-colors duration-300 clickable"
                >
                  Web Development
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="text-gray-400 hover:text-red-600 transition-colors duration-300 clickable"
                >
                  SEO Optimization
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="text-gray-400 hover:text-red-600 transition-colors duration-300 clickable"
                >
                  UI/UX Designing
                </button>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="text-gray-400 hover:text-red-600 transition-colors duration-300 clickable"
                >
                  About Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('work')}
                  className="text-gray-400 hover:text-red-600 transition-colors duration-300 clickable"
                >
                  Our Work
                </button>
              </li>
              <li>
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSfxUedbD61-YyCh_xImbvOqdqEf7ypyxv03cH174PR-cyJ3eg/viewform?usp=header" // Replace with your actual Google Form URL
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-red-600 transition-colors duration-300 clickable"
                >
                  Careers
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <button className="text-gray-400 hover:text-red-600 transition-colors duration-300 clickable">
                  Privacy Policy
                </button>
              </li>
              <li>
                <button className="text-gray-400 hover:text-red-600 transition-colors duration-300 clickable">
                  Terms of Service
                </button>
              </li>
              <li>
                <button className="text-gray-400 hover:text-red-600 transition-colors duration-300 clickable">
                  Cookie Policy
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="text-gray-400 hover:text-red-600 transition-colors duration-300 clickable"
                >
                  Contact Us
                </button>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {currentYear} NØT404. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <button className="text-gray-400 hover:text-red-600 text-sm transition-colors duration-300 clickable">
              Privacy Policy
            </button>
            <button className="text-gray-400 hover:text-red-600 text-sm transition-colors duration-300 clickable">
              Terms of Service
            </button>
            <button className="text-gray-400 hover:text-red-600 text-sm transition-colors duration-300 clickable">
              Cookie Policy
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
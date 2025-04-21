import React, { useEffect, useRef } from 'react';
import { Code, Users, Zap, Globe } from 'lucide-react';

const AboutSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (textRef.current) observer.observe(textRef.current);
    if (statsRef.current) observer.observe(statsRef.current);

    return () => {
      if (textRef.current) observer.unobserve(textRef.current);
      if (statsRef.current) observer.unobserve(statsRef.current);
    };
  }, []);

  const stats = [
    { icon: <Code size={24} />, number: '7+', text: 'Projects Completed' },
    { icon: <Users size={24} />, number: '5+', text: 'Number of Clients' },
    { icon: <Zap size={24} />, number: '97%', text: 'Client Satisfaction' },
    { icon: <Globe size={24} />, number: '2+', text: 'Countries Served' },
  ];

  return (
    <section id="about" ref={sectionRef} className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row md:space-x-16 items-center">
          <div 
            ref={textRef}
            className="md:w-1/2 mb-12 md:mb-0 opacity-0 transform translate-y-12 transition-all duration-1000"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Crafting <span className="text-red-600">Digital Experiences</span> Since 2025
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            At NØT404, we don’t just build websites — we conjure up digital experiences with the perfect mix of caffeine, code, and questionable memes.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            We’re the kind of team that cares about pixel-perfect design, buttery-smooth performance, and making sure your site doesn’t crash at 2 AM (you're welcome).
            </p>
            <div className="mt-10 space-y-4">
              <div className="flex items-center">
                <div className="w-12 h-1 bg-red-600 mr-4"></div>
                <p className="text-lg font-medium">Insight-Driven Strategy</p>
              </div>
              <div className="flex items-center">
                <div className="w-12 h-1 bg-red-600 mr-4"></div>
                <p className="text-lg font-medium">Thoughtful, User-Centered Design</p>
              </div>
              <div className="flex items-center">
                <div className="w-12 h-1 bg-red-600 mr-4"></div>
                <p className="text-lg font-medium">Robust, Scalable Code Architecture</p>
              </div>
            </div>
          </div>
          
          <div 
            ref={statsRef}
            className="md:w-1/2 grid grid-cols-2 gap-6 md:gap-10 opacity-0 transform translate-y-12 transition-all duration-1000 delay-300"
          >
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="bg-white p-6 md:p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
              >
                <div className="text-red-600 mb-4">{stat.icon}</div>
                <h3 className="text-3xl md:text-4xl font-bold mb-2">{stat.number}</h3>
                <p className="text-gray-600">{stat.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .animate-in {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
      `}</style>
    </section>
  );
};

export default AboutSection;
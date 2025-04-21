import React, { useEffect, useRef } from 'react';
import { Monitor, Smartphone, Search, Code, Figma, Database } from 'lucide-react';

const ServicesSection: React.FC = () => {
  const titleRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);

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

    if (titleRef.current) observer.observe(titleRef.current);
    if (servicesRef.current) observer.observe(servicesRef.current);

    return () => {
      if (titleRef.current) observer.unobserve(titleRef.current);
      if (servicesRef.current) observer.unobserve(servicesRef.current);
    };
  }, []);

  const services = [
    {
      icon: <Monitor className="w-8 h-8" />,
      title: 'Web Design & Development',
      description: 'Beautiful, functional websites tailored to your brand and business goals.',
    },
    {
      icon: <Search className="w-8 h-8" />,
      title: 'SEO Optimization',
      description: 'Enhance your online visibility and drive organic traffic to your website.',
    },
    {
      icon: <Figma className="w-8 h-8" />,
      title: 'UI/UX Designing',
      description: 'Creating user-friendly interfaces that enhance user experience and engagement.',
    },
  ];

  return (
    <section id="services" className="py-5 md:py-5 bg-gray-50">
      <div className="container mx-auto px-4 md:px-8">
        <div 
          ref={titleRef}
          className="text-center max-w-3xl mx-auto mb-16 opacity-0 transform translate-y-12 transition-all duration-1000"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Our <span className="text-red-600">Services</span>
          </h2>
          <p className="text-lg text-gray-700">
            We offer comprehensive digital solutions to help businesses thrive in the online world. Our services are tailored to meet your unique needs and objectives.
          </p>
        </div>
        
        <div 
          ref={servicesRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 opacity-0 transform translate-y-12 transition-all duration-1000 delay-300"
        >
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 group"
            >
              <div className="text-red-600 mb-6 transform group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 group-hover:text-red-600 transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-gray-600">
                {service.description}
              </p>
            </div>
          ))}
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

export default ServicesSection;
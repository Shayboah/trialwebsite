import React from 'react';


const WorkSection: React.FC = () => {
  const projects = [
    { title: '/assets/images/prettypatty.png', video: '/assets/videos/prettypatty.mp4' },
    { title: '/assets/images/zuri.png', video: '/assets/videos/zuri.mp4' },
    { title: '/assets/images/trucking.png', video: '/assets/videos/trucking.mp4' },
    { title: '/assets/images/motors.png', video: '/assets/videos/motors.mp4' },
    { title: '/assets/images/animalcare.png', video: '/assets/videos/animalcare.mp4' },
    { title: '/assets/images/clothing.png', video: '/assets/videos/clothing.mp4' },
  ];

  return (
    <section id="work" className="py-20 md:py-32 bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Our <span className="text-red-600">Work</span>
          </h2>
          <p className="text-lg text-gray-700">
           Work we’ve collaborated on or been inspired by, while growing our portfolio.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-lg shadow-md bg-gray-200"
            >
              {/* Video */}
              <video
                src={project.video}
                autoPlay
                loop
                muted
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              ></video>

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              {/* Logo */}
              <div className="absolute inset-0 flex items-center justify-center">
                <img
                  src={project.title}
                  alt="Project Logo"
                  className={`${
                    project.title.includes('trucking.png')
                      ? 'w-40'
                      : project.title.includes('animalcare.png')
                      ? 'w-40'
                      : project.title.includes('clothing.png')
                      ? 'w-40'
                      : 'w-28'
                  } opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
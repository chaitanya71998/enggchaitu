
import React from 'react';
import { Box, Layers, AtomIcon } from 'lucide-react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="absolute inset-0 grid-lines opacity-30"></div>
      <div className="container mx-auto relative z-10">
        <h2 className="section-title">About Me</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
          <div className="lg:col-span-2">
            <p className="text-lg leading-relaxed mb-6">
              I'm a hybrid engineer with a strong foundation in 
              <span className="text-portfolio-green"> Mechanical Engineering </span> 
              and a passion for 
              <span className="text-portfolio-orange"> Software Development</span>. 
              With 4+ years of experience in building scalable frontend applications 
              using React, TypeScript, and Tailwind CSS, I bring engineering precision 
              and problem-solving into the world of web development.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              I love blending the real-world logic of mechanical systems with the 
              virtual problem-solving world of tech to create impactful, efficient, 
              and user-centric digital solutions.
            </p>
            <div className="flex flex-wrap gap-3 mt-8">
              <span className="tech-pill">React</span>
              <span className="tech-pill">TypeScript</span>
              <span className="tech-pill">Tailwind CSS</span>
              <span className="tech-pill">JavaScript</span>
              <span className="tech-pill">Cypress</span>
              <span className="tech-pill">Docker</span>
              <span className="tech-pill">Mechanical CAD</span>
              <span className="tech-pill">MATLAB</span>
              <span className="tech-pill">SolidWorks</span>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="futuristic-card hover-glow">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-portfolio-green/10 rounded-lg">
                  <AtomIcon className="h-8 w-8 text-portfolio-green" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Problem Solver</h3>
                  <p className="text-portfolio-gray">Applying engineering principles to solve complex software challenges.</p>
                </div>
              </div>
            </div>
            
            <div className="futuristic-card hover-glow">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-portfolio-orange/10 rounded-lg">
                  <Box className="h-8 w-8 text-portfolio-orange" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">3D Modeler</h3>
                  <p className="text-portfolio-gray">Creating complex mechanical designs with precision and clarity.</p>
                </div>
              </div>
            </div>
            
            <div className="futuristic-card hover-glow">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-white/10 rounded-lg">
                  <Layers className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Full Stack</h3>
                  <p className="text-portfolio-gray">Building end-to-end web solutions with a focus on user experience.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

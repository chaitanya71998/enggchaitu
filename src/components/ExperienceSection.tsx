
import React from 'react';
import { Badge } from "@/components/ui/badge";

interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  description: string;
}

interface EducationItem {
  degree: string;
  institution: string;
  year: string;
}

const experiences: ExperienceItem[] = [
  {
    title: "Software Development Engineer (Frontend)",
    company: "NxtWave",
    period: "Current",
    description: "Building scalable frontend applications using React, TypeScript, and Tailwind CSS. Leading UI/UX initiatives and implementing responsive designs."
  },
  {
    title: "Full Stack Training",
    company: "iB Hubs",
    period: "Previous",
    description: "Comprehensive training in full-stack development, gaining hands-on experience with modern web technologies and development methodologies."
  }
];

const education: EducationItem[] = [
  {
    degree: "B.Tech in Mechanical Engineering",
    institution: "SRKR Engineering College",
    year: "2018"
  }
];

const TimelineItem: React.FC<{ year: string; isLast?: boolean }> = ({ year, isLast = false }) => (
  <div className="relative">
    <div className="h-4 w-4 rounded-full bg-portfolio-green absolute left-0 -translate-x-1/2"></div>
    {!isLast && <div className="h-full w-0.5 bg-portfolio-green/30 absolute left-0 top-4 -translate-x-1/2"></div>}
    <div className="text-sm font-medium text-portfolio-green ml-6">{year}</div>
  </div>
);

const ExperienceSection: React.FC = () => {
  return (
    <section className="py-24 px-4 relative bg-portfolio-dark/70">
      <div className="absolute inset-0 grid-lines opacity-30"></div>
      <div className="container mx-auto relative z-10">
        <h2 className="section-title">Experience & Education</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
          <div>
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <span className="inline-block w-6 h-6 rounded-full bg-portfolio-green mr-3"></span>
              Work Experience
            </h3>
            
            <div className="ml-3 space-y-12">
              {experiences.map((exp, index) => (
                <div key={index} className="relative pl-10">
                  <TimelineItem year={exp.period} isLast={index === experiences.length - 1} />
                  <div className="mt-4 futuristic-card">
                    <h4 className="text-xl font-bold">{exp.title}</h4>
                    <Badge variant="outline" className="mt-1 mb-3">{exp.company}</Badge>
                    <p className="text-portfolio-gray">{exp.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <span className="inline-block w-6 h-6 rounded-full bg-portfolio-orange mr-3"></span>
              Education
            </h3>
            
            <div className="ml-3 space-y-12">
              {education.map((edu, index) => (
                <div key={index} className="relative pl-10">
                  <TimelineItem year={edu.year} isLast={index === education.length - 1} />
                  <div className="mt-4 futuristic-card">
                    <h4 className="text-xl font-bold">{edu.degree}</h4>
                    <Badge variant="outline" className="mt-1 mb-3">{edu.institution}</Badge>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;

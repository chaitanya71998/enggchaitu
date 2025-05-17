
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { DiamondIcon, LayersIcon, ZapIcon } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  icon: React.ReactNode;
  bgClass: string;
}

const projects: Project[] = [
  {
    title: "E-Commerce Dashboard",
    description: "A comprehensive admin dashboard for managing products, orders, and customer data with real-time analytics.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Recharts"],
    icon: <DiamondIcon className="h-8 w-8" />,
    bgClass: "from-portfolio-green/20 to-transparent"
  },
  {
    title: "Mechanical Simulation App",
    description: "Web-based application for simulating mechanical systems with real-time physics calculations and 3D visualization.",
    technologies: ["Three.js", "React", "WebGL", "MATLAB Integration"],
    icon: <LayersIcon className="h-8 w-8" />,
    bgClass: "from-white/20 to-transparent"
  },
  {
    title: "Smart Home Control System",
    description: "IoT dashboard for controlling and monitoring connected home devices with automation rules and energy usage tracking.",
    technologies: ["React", "Node.js", "WebSockets", "IoT Protocols"],
    icon: <ZapIcon className="h-8 w-8" />,
    bgClass: "from-portfolio-orange/20 to-transparent"
  }
];

const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="absolute inset-0 grid-lines opacity-30"></div>
      <div className="container mx-auto relative z-10">
        <h2 className="section-title">Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {projects.map((project, index) => (
            <Card key={index} className="bg-black/30 border border-white/10 backdrop-blur-sm overflow-hidden group hover:border-white/20 transition-all duration-300">
              <div className={`h-2 w-full bg-gradient-to-r ${project.bgClass}`}></div>
              <CardHeader className="relative pt-8">
                <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm p-2 rounded-full">
                  {project.icon}
                </div>
                <CardTitle className="text-xl font-bold">{project.title}</CardTitle>
                <CardDescription className="text-portfolio-gray">{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.technologies.map((tech, i) => (
                    <Badge key={i} variant="secondary" className="bg-white/5 hover:bg-white/10">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full group-hover:border-portfolio-green/50 transition-all duration-300">
                  View Project
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;


import React, { useRef } from 'react';
import { Github, Linkedin, Briefcase, School } from 'lucide-react';
import { motion } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { Text3D, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

const FloatingName = () => {
  const textRef = useRef<THREE.Mesh>(null);
  
  useFrame(({ clock }) => {
    if (!textRef.current) return;
    textRef.current.position.y = Math.sin(clock.getElapsedTime() * 0.5) * 0.2;
    textRef.current.rotation.y = Math.sin(clock.getElapsedTime() * 0.3) * 0.1;
  });

  return (
    <Text3D
      ref={textRef}
      font="/fonts/Inter_Bold.json"
      size={0.8}
      height={0.1}
      curveSegments={12}
      bevelEnabled
      bevelThickness={0.01}
      bevelSize={0.02}
      bevelOffset={0}
      bevelSegments={5}
    >
      CHAITANYA
      <meshStandardMaterial 
        color="white"
        metalness={0.5}
        roughness={0.1} 
        emissive="#4ADE80"
        emissiveIntensity={0.2}
      />
    </Text3D>
  );
};

const BackgroundGraphs = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame(({ clock }) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.x = clock.getElapsedTime() * 0.1;
    meshRef.current.rotation.y = clock.getElapsedTime() * 0.15;
  });

  return (
    <group ref={meshRef}>
      <gridHelper args={[20, 20, "#4ADE80", "#1A1A1A"]} position={[0, -2, 0]} />
      <gridHelper args={[20, 20, "#F97316", "#1A1A1A"]} rotation={[0, Math.PI / 4, 0]} position={[0, -2, 0]} />
      
      {/* Add some floating objects */}
      {[...Array(10)].map((_, i) => (
        <mesh key={i} position={[
          (Math.random() - 0.5) * 10,
          (Math.random() - 0.5) * 5,
          (Math.random() - 0.5) * 10
        ]}>
          <sphereGeometry args={[0.1, 16, 16]} />
          <meshStandardMaterial color={i % 2 === 0 ? "#4ADE80" : "#F97316"} />
        </mesh>
      ))}
    </group>
  );
};

const ExperienceItem = ({ title, company, period }: { title: string, company: string, period: string }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.8, duration: 0.6 }}
    className="mb-3 border-l-2 border-portfolio-green pl-4 py-2"
  >
    <h3 className="text-lg font-semibold">{title}</h3>
    <p className="text-portfolio-gray">{company} • {period}</p>
  </motion.div>
);

const EducationItem = ({ degree, institution, year }: { degree: string, institution: string, year: string }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 1.0, duration: 0.6 }}
    className="mb-3 border-l-2 border-portfolio-orange pl-4 py-2"
  >
    <h3 className="text-lg font-semibold">{degree}</h3>
    <p className="text-portfolio-gray">{institution} • {year}</p>
  </motion.div>
);

const Index = () => {
  return (
    <div className="min-h-screen bg-portfolio-dark text-white">
      {/* 3D Background */}
      <div className="fixed inset-0 -z-10">
        <Canvas camera={{ position: [0, 0, 10], fov: 75 }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <BackgroundGraphs />
          <OrbitControls 
            enableZoom={false} 
            enablePan={false} 
            enableRotate={true}
            autoRotate={true}
            autoRotateSpeed={0.5}
          />
        </Canvas>
      </div>
      
      <div className="container mx-auto flex flex-col items-center justify-center min-h-screen px-4">
        {/* Name in 3D */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="h-[200px] w-full max-w-[500px] mb-8"
        >
          <Canvas camera={{ position: [0, 0, 5], fov: 40 }}>
            <ambientLight intensity={0.8} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
            <FloatingName />
            <OrbitControls enableZoom={false} enablePan={false} />
          </Canvas>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-xl text-portfolio-gray mb-8"
        >
          Software Development Engineer (Frontend) | Mechanical Engineer
        </motion.div>
        
        {/* Social Links */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="flex justify-center space-x-6 mb-12"
        >
          <a 
            href="https://www.linkedin.com/in/chaitanya-sai-terli-1b3038122/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 border border-portfolio-gray/30 rounded-full hover:border-portfolio-green hover:text-portfolio-green transition-colors"
          >
            <Linkedin size={24} />
          </a>
          <a 
            href="https://github.com/chaitanya71998" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 border border-portfolio-gray/30 rounded-full hover:border-portfolio-green hover:text-portfolio-green transition-colors"
          >
            <Github size={24} />
          </a>
        </motion.div>
        
        {/* Experience & Education */}
        <div className="w-full max-w-2xl space-y-8 mb-12">
          {/* Experience */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            <h2 className="text-xl font-bold mb-4 flex items-center">
              <Briefcase className="mr-2 text-portfolio-green" size={20} />
              Experience
            </h2>
            <ExperienceItem 
              title="Software Development Engineer (Frontend)" 
              company="NxtWave" 
              period="Current"
            />
            <ExperienceItem 
              title="Full Stack Training" 
              company="iB Hubs" 
              period="Previous"
            />
          </motion.div>
          
          {/* Education */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
          >
            <h2 className="text-xl font-bold mb-4 flex items-center">
              <School className="mr-2 text-portfolio-orange" size={20} />
              Education
            </h2>
            <EducationItem 
              degree="B.Tech in Mechanical Engineering" 
              institution="SRKR Engineering College" 
              year="2018"
            />
          </motion.div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="text-xl text-portfolio-gray animate-pulse"
        >
          Complete website coming soon...
        </motion.div>
      </div>
    </div>
  );
};

export default Index;

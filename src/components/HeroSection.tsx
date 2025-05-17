
import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useIsMobile } from '@/hooks/use-mobile';
import { OrbitControls, Text3D, Center } from '@react-three/drei';
import * as THREE from 'three';

const MeshWithRotation = ({ position = [0, 0, 0], color = "white", shape = "box" }: 
  { position?: [number, number, number], color?: string, shape?: "box" | "sphere" | "torus" }) => {
  const mesh = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (!mesh.current) return;
    mesh.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.3) * 0.2;
    mesh.current.rotation.y += 0.002;
  });

  return (
    <mesh position={position} ref={mesh}>
      {shape === "box" && <boxGeometry args={[1, 1, 1]} />}
      {shape === "sphere" && <sphereGeometry args={[0.7, 32, 32]} />}
      {shape === "torus" && <torusGeometry args={[0.7, 0.2, 16, 32]} />}
      <meshStandardMaterial color={color} />
    </mesh>
  );
};

const GridLines = () => {
  return (
    <>
      <gridHelper args={[40, 40, '#4ADE80', '#2D2D2D']} position={[0, -2, 0]} />
      <gridHelper args={[40, 40, '#F97316', '#2D2D2D']} rotation={[0, Math.PI / 4, 0]} position={[0, -2, 0]} />
    </>
  );
};

const FloatingName = () => {
  const textRef = useRef<THREE.Mesh>(null);
  
  useFrame(({ clock }) => {
    if (!textRef.current) return;
    textRef.current.position.y = Math.sin(clock.getElapsedTime() * 0.5) * 0.2 + 0.2;
    textRef.current.rotation.y = Math.sin(clock.getElapsedTime() * 0.3) * 0.1;
  });

  return (
    <Center position={[0, 0.5, 0]}>
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
    </Center>
  );
};

const HeroSection: React.FC = () => {
  const isMobile = useIsMobile();

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0 grid-lines z-0"></div>
      
      <div className="absolute inset-0 z-10">
        <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
          <ambientLight intensity={0.5} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
          <pointLight position={[-10, -10, -10]} intensity={0.5} />
          
          <GridLines />
          
          <MeshWithRotation position={[-2.5, 0, 0]} color="#4ADE80" shape="sphere" />
          <MeshWithRotation position={[0, 0, -2]} color="white" shape="box" />
          <MeshWithRotation position={[2.5, 0, 0]} color="#F97316" shape="torus" />
          
          <FloatingName />
          
          <OrbitControls 
            enableZoom={false} 
            enablePan={false}
            autoRotate
            autoRotateSpeed={0.5}
            minPolarAngle={Math.PI / 3}
            maxPolarAngle={Math.PI / 1.8}
          />
        </Canvas>
      </div>

      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 z-20 pointer-events-none">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 drop-shadow-lg">
          <span className="highlight-text">Chaitanya Sai Terli</span>
        </h1>
        <p className="text-xl md:text-2xl text-portfolio-gray animate-pulse-slow mb-6 max-w-2xl">
          Mechanical & Software Engineer | Frontend Developer | Tech Enthusiast
        </p>
        <div className="flex gap-4 pointer-events-auto">
          <a href="#about" className="futuristic-border">
            <span className="relative z-10 px-6 py-2 block">About Me</span>
          </a>
          <a href="#projects" className="futuristic-border">
            <span className="relative z-10 px-6 py-2 block">Projects</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

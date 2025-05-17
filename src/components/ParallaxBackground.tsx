
import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useScroll } from 'framer-motion';
import * as THREE from 'three';

interface ParticleProps {
  count: number;
  color: string;
}

const Particles = ({ count = 1000, color = "#ffffff" }: ParticleProps) => {
  const mesh = useRef<THREE.Points>(null);
  const positions = React.useMemo(() => {
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 2] = (Math.random() - 0.8) * 8;
    }
    return positions;
  }, [count]);

  useFrame((state) => {
    if (!mesh.current) return;
    mesh.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.1) * 0.2;
    mesh.current.rotation.y = Math.sin(state.clock.getElapsedTime() * 0.05) * 0.1;
  });

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.05} color={color} transparent opacity={0.6} />
    </points>
  );
};

interface GridProps {
  color1?: string;
  color2?: string;
  fadeDistance?: number;
}

const Grid = ({ color1 = "#4ADE80", color2 = "#F97316", fadeDistance = 30 }: GridProps) => {
  const gridRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (!gridRef.current) return;
    gridRef.current.position.z = -Math.sin(state.clock.getElapsedTime() * 0.2) * 2;
  });

  return (
    <group ref={gridRef}>
      <gridHelper args={[40, 40, color1, "#2D2D2D"]} position={[0, -3, 0]} />
      <gridHelper args={[40, 40, color2, "#2D2D2D"]} rotation={[0, Math.PI / 4, 0]} position={[0, -3, 0]} />
    </group>
  );
};

interface ParallaxBackgroundProps {
  variant?: 'about' | 'projects' | 'experience' | 'contact';
  intensity?: number;
}

const ParallaxBackground: React.FC<ParallaxBackgroundProps> = ({ 
  variant = 'about',
  intensity = 1.0
}) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  
  // Different color schemes for different sections
  const colorSchemes = {
    about: { primary: "#4ADE80", particles: "#4ADE80" },
    projects: { primary: "#F97316", particles: "#F97316" },
    experience: { primary: "#FFFFFF", particles: "#FFFFFF" },
    contact: { primary: "#4ADE80", particles: "#F97316" },
  };
  
  const scheme = colorSchemes[variant];
  
  return (
    <div ref={scrollRef} className="absolute inset-0 -z-10 overflow-hidden">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <ambientLight intensity={0.4} />
        <pointLight position={[10, 10, 10]} intensity={0.6} />
        
        <Grid color1={scheme.primary} />
        <Particles count={800} color={scheme.particles} />
      </Canvas>
    </div>
  );
};

export default ParallaxBackground;

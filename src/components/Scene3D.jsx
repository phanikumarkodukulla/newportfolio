import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Stars } from '@react-three/drei';
import * as THREE from 'three';
import { useTheme } from '../context/ThemeContext';

function AnimatedPoints({ isDark }) {
  const pointsRef = useRef();

  useFrame(({ clock }) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = clock.getElapsedTime() * 0.05;
      pointsRef.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.1) * 0.1;
    }
  });

  // Create some custom floating particles
  const particlesCount = 200;
  const positions = new Float32Array(particlesCount * 3);
  for (let i = 0; i < particlesCount * 3; i++) {
    positions[i] = (Math.random() - 0.5) * 20;
  }

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particlesCount}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        color={isDark ? "#3B82F6" : "#2563EB"}
        sizeAttenuation={true}
        transparent={true}
        opacity={isDark ? 0.6 : 0.8}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

export default function Scene3D() {
  const { isDark } = useTheme();

  return (
    <div className={`fixed inset-0 z-0 pointer-events-none transition-colors duration-500 ${isDark ? 'bg-gradient-to-br from-[#020817] to-[#0A1929]' : 'bg-gradient-to-br from-[#F9FAFB] to-[#F3F4F6]'}`}>
      <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
        <color attach="background" args={[isDark ? '#020817' : '#F9FAFB']} />
        <ambientLight intensity={isDark ? 0.5 : 0.8} />
        {isDark && <Stars radius={100} depth={50} count={3000} factor={4} saturation={0} fade speed={1} />}
        <AnimatedPoints isDark={isDark} />
      </Canvas>
    </div>
  );
}

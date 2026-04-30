import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Stars } from '@react-three/drei';
import * as THREE from 'three';

function AnimatedPoints() {
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
        color="#3B82F6"
        sizeAttenuation={true}
        transparent={true}
        opacity={0.6}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

export default function Scene3D() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none bg-gradient-to-br from-[#020817] to-[#0A1929]">
      <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
        <color attach="background" args={['#020817']} />
        <ambientLight intensity={0.5} />
        <Stars radius={100} depth={50} count={3000} factor={4} saturation={0} fade speed={1} />
        <AnimatedPoints />
      </Canvas>
    </div>
  );
}

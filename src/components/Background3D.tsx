import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

const BigDonut = ({ 
  position, 
  rotation, 
  scale, 
  config 
}: {
  position: [number, number, number];
  rotation: [number, number, number];
  scale: number;
  config: {
    floatSpeed: number;
    floatAmplitude: number;
    rotationSpeed: { x: number; y: number };
    hoverOffset: number;
    pulseSpeed: number;
    pulseAmplitude: number;
  }
}) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (!meshRef.current) return;
    const time = state.clock.getElapsedTime();
    const { floatSpeed, floatAmplitude, rotationSpeed, hoverOffset, pulseSpeed, pulseAmplitude } = config;

    // Floating motion based on vanilla code logic
    const floatY = Math.sin(time * floatSpeed + hoverOffset) * floatAmplitude;
    // Adding subtle drift
    const driftX = Math.sin(time * floatSpeed * 0.5) * 0.5;
    
    meshRef.current.position.y = position[1] + floatY;
    meshRef.current.position.x = position[0] + driftX;
    
    // Continuous Rotation
    meshRef.current.rotation.x += rotationSpeed.x;
    meshRef.current.rotation.y += rotationSpeed.y;

    // Gentle Pulsing
    const pulse = Math.sin(time * pulseSpeed) * pulseAmplitude + 1;
    meshRef.current.scale.setScalar(scale * pulse);
  });

  return (
    <mesh ref={meshRef} position={position} rotation={rotation} castShadow receiveShadow>
      {/* Large Torus: radius ~3.5, tube ~1.0 */}
      <torusGeometry args={[3.5, 1.0, 64, 128]} />
      <meshPhysicalMaterial 
        color="black" // Lighter base color for visibility
        roughness={0.2} // Smoother surface
        metalness={0.6} // Reduced metalness to avoid pitch black reflections without env map
        clearcoat={1.0}
        clearcoatRoughness={0.1}
        reflectivity={1.0}
        transparent={true}
        opacity={0.9}
        side={THREE.DoubleSide}
      />
    </mesh>
  );
};

const Scene = () => {
  const { camera, pointer } = useThree();

  // Mouse interaction rig
  useFrame(() => {
    // Smoothly interpolate camera position based on pointer
    camera.position.x += (pointer.x * 2 - camera.position.x) * 0.05;
    camera.position.y += (pointer.y * 2 - camera.position.y) * 0.05;
    camera.lookAt(0, 0, 0);
  });

  // Generate exactly 5 Big Donuts
  const donuts = useMemo(() => {
    return new Array(5).fill(0).map((_, i) => ({
      position: [
        (Math.random() - 0.5) * 40, // Spread out more in X to clear text area
        (Math.random() - 0.5) * 20, 
        (Math.random() - 0.5) * 15 - 5 
      ] as [number, number, number],
      rotation: [
        Math.random() * Math.PI * 2, 
        Math.random() * Math.PI * 2, 
        Math.random() * Math.PI * 2
      ] as [number, number, number],
      scale: Math.random() * 0.3 + 0.9,
      config: {
        floatSpeed: Math.random() * 0.2 + 0.1,
        floatAmplitude: Math.random() * 1.5 + 0.5,
        rotationSpeed: {
          x: (Math.random() - 0.5) * 0.01,
          y: (Math.random() - 0.5) * 0.01,
        },
        hoverOffset: Math.random() * Math.PI * 2,
        pulseSpeed: Math.random() * 0.5 + 0.2,
        pulseAmplitude: 0.05
      }
    }));
  }, []);

  return (
    <>
      <ambientLight intensity={0.8} />
      <directionalLight position={[20, 30, 20]} intensity={2.0} castShadow />
      
      {/* Intense colored lights to make the metallic surface pop */}
      <pointLight position={[15, 10, 15]} color="#4488ff" intensity={5.0} distance={100} />
      <pointLight position={[-15, 5, -10]} color="#ff8844" intensity={5.0} distance={100} />
      <pointLight position={[10, -10, 15]} color="#88ff44" intensity={4.0} distance={100} />
      <pointLight position={[-10, 15, -15]} color="#ff44ff" intensity={4.0} distance={100} />

      {donuts.map((props, i) => (
        <BigDonut key={i} {...props} />
      ))}
    </>
  );
};

const Background3D: React.FC = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10 bg-black">
      <Canvas 
        shadows
        camera={{ position: [0, 0, 30], fov: 60 }} 
        dpr={[1, 2]}
        gl={{ 
          antialias: true, 
          alpha: true,
          powerPreference: "high-performance"
        }}
      >
        <fog attach="fog" args={['#000000', 20, 90]} />
        <Scene />
      </Canvas>
    </div>
  );
};

export default Background3D;
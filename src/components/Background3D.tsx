import React, { useRef, useMemo, useState, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

// Smooth easing function
const smoothstep = (t: number) => t * t * (3 - 2 * t);

// Device detection for performance optimization
const getDevicePerformance = () => {
  if (typeof window === 'undefined') return 'high';
  
  const width = window.innerWidth;
  const isMobile = width < 768;
  const isTablet = width >= 768 && width < 1024;
  const hasReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const isLowEndDevice = navigator.hardwareConcurrency ? navigator.hardwareConcurrency <= 4 : false;
  const hasLowMemory = (navigator as unknown as { deviceMemory?: number }).deviceMemory ? (navigator as unknown as { deviceMemory: number }).deviceMemory < 4 : false;
  
  if (hasReducedMotion) return 'minimal';
  if (isMobile || isLowEndDevice || hasLowMemory) return 'low';
  if (isTablet) return 'medium';
  return 'high';
};

// Performance-based configuration
const getPerformanceConfig = (level: string) => {
  switch (level) {
    case 'minimal':
      return { particles: 0, nodes: 0, rings: 0, orbs: 0, dpr: 1, animate: false };
    case 'low':
      return { particles: 300, nodes: 10, rings: 2, orbs: 2, dpr: 1, animate: true };
    case 'medium':
      return { particles: 500, nodes: 20, rings: 3, orbs: 4, dpr: 1.5, animate: true };
    default:
      return { particles: 800, nodes: 30, rings: 5, orbs: 6, dpr: 2, animate: true };
  }
};

// Neural network-style flowing particles
const NeuralParticles = ({ count = 1200 }: { count?: number }) => {
  const mesh = useRef<THREE.Points>(null);
  const originalPositions = useRef<Float32Array | null>(null);
  
  const [positions, sizes, colors, phases] = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const sizes = new Float32Array(count);
    const colors = new Float32Array(count * 3);
    const phases = new Float32Array(count * 3); // For smooth wave motion
    
    // Elegant color palette - deep space tech aesthetic
    const colorPalette = [
      new THREE.Color('#60a5fa'), // Soft blue
      new THREE.Color('#34d399'), // Emerald
      new THREE.Color('#a78bfa'), // Violet
      new THREE.Color('#38bdf8'), // Sky
      new THREE.Color('#f0f9ff'), // White blue
      new THREE.Color('#818cf8'), // Indigo
    ];
    
    for (let i = 0; i < count; i++) {
      // Create flowing streams of particles
      const stream = Math.floor(i / (count / 8)); // 8 streams
      const angle = (stream / 8) * Math.PI * 2;
      const streamSpread = 15;
      
      // Spiral distribution with organic spread
      const t = (i % (count / 8)) / (count / 8);
      const radius = 10 + t * 50 + (Math.random() - 0.5) * streamSpread;
      const spiralAngle = angle + t * Math.PI * 4;
      const heightVariation = (Math.random() - 0.5) * 40;
      
      positions[i * 3] = Math.cos(spiralAngle) * radius + (Math.random() - 0.5) * 10;
      positions[i * 3 + 1] = heightVariation + Math.sin(t * Math.PI) * 10;
      positions[i * 3 + 2] = Math.sin(spiralAngle) * radius - 30 + (Math.random() - 0.5) * 10;
      
      // Varied sizes for depth
      const depth = (positions[i * 3 + 2] + 80) / 100;
      sizes[i] = (Math.random() * 2 + 0.5) * (0.5 + depth * 0.5);
      
      // Assign gradient colors based on position
      const colorIndex = Math.floor((angle / (Math.PI * 2)) * colorPalette.length + Math.random() * 2) % colorPalette.length;
      const color = colorPalette[colorIndex];
      const brightness = 0.7 + Math.random() * 0.3;
      colors[i * 3] = color.r * brightness;
      colors[i * 3 + 1] = color.g * brightness;
      colors[i * 3 + 2] = color.b * brightness;
      
      // Unique phase offsets for smooth wave motion
      phases[i * 3] = Math.random() * Math.PI * 2; // X phase
      phases[i * 3 + 1] = Math.random() * Math.PI * 2; // Y phase
      phases[i * 3 + 2] = Math.random() * 0.5 + 0.3; // Speed multiplier
    }
    
    return [positions, sizes, colors, phases];
  }, [count]);

  // Store original positions for wave animation
  useMemo(() => {
    originalPositions.current = new Float32Array(positions);
  }, [positions]);

  useFrame((state) => {
    if (!mesh.current || !originalPositions.current) return;
    const time = state.clock.getElapsedTime();
    
    // Smooth global rotation
    mesh.current.rotation.y = time * 0.015;
    mesh.current.rotation.x = Math.sin(time * 0.008) * 0.08;
    
    const posArray = mesh.current.geometry.attributes.position.array as Float32Array;
    const sizeArray = mesh.current.geometry.attributes.size.array as Float32Array;
    
    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      const orig = originalPositions.current;
      
      // Smooth flowing wave motion
      const xPhase = phases[i3];
      const yPhase = phases[i3 + 1];
      const speedMult = phases[i3 + 2];
      
      const waveTime = time * speedMult;
      
      // Multi-layered smooth waves
      const xWave = Math.sin(waveTime * 0.5 + xPhase) * 2 + 
                    Math.sin(waveTime * 0.3 + xPhase * 1.5) * 1;
      const yWave = Math.cos(waveTime * 0.4 + yPhase) * 2.5 + 
                    Math.sin(waveTime * 0.2 + yPhase * 0.7) * 1.5;
      const zWave = Math.sin(waveTime * 0.35 + xPhase + yPhase) * 1.5;
      
      // Apply smooth motion with easing
      posArray[i3] = orig[i3] + xWave;
      posArray[i3 + 1] = orig[i3 + 1] + yWave;
      posArray[i3 + 2] = orig[i3 + 2] + zWave;
      
      // Subtle size pulsing for shimmer effect
      const baseSizeFactor = 0.85 + Math.sin(waveTime * 2 + i * 0.1) * 0.15;
      sizeArray[i] = sizes[i] * baseSizeFactor;
    }
    
    mesh.current.geometry.attributes.position.needsUpdate = true;
    mesh.current.geometry.attributes.size.needsUpdate = true;
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
        <bufferAttribute
          attach="attributes-size"
          count={count}
          array={sizes}
          itemSize={1}
        />
        <bufferAttribute
          attach="attributes-color"
          count={count}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={2}
        sizeAttenuation={true}
        vertexColors={true}
        transparent={true}
        opacity={0.85}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
};

// Glowing connection lines between nearby particles
const ConnectionLines = ({ nodeCount = 30 }: { nodeCount?: number }) => {
  const linesRef = useRef<THREE.LineSegments>(null);
  const nodesRef = useRef<{ pos: THREE.Vector3; vel: THREE.Vector3; phase: number }[]>([]);
  
  const geometry = useMemo(() => {
    // Initialize nodes
    nodesRef.current = Array.from({ length: nodeCount }, () => ({
      pos: new THREE.Vector3(
        (Math.random() - 0.5) * 80,
        (Math.random() - 0.5) * 40,
        (Math.random() - 0.5) * 60 - 20
      ),
      vel: new THREE.Vector3(
        (Math.random() - 0.5) * 0.03,
        (Math.random() - 0.5) * 0.02,
        (Math.random() - 0.5) * 0.02
      ),
      phase: Math.random() * Math.PI * 2
    }));
    
    // Pre-allocate geometry for max possible connections
    const maxConnections = (nodeCount * (nodeCount - 1)) / 2;
    const positions = new Float32Array(maxConnections * 6); // 2 points * 3 coords
    const colors = new Float32Array(maxConnections * 6);
    
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geo.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    geo.setDrawRange(0, 0);
    
    return geo;
  }, []);

  useFrame((state) => {
    if (!linesRef.current) return;
    const time = state.clock.getElapsedTime();
    
    const nodes = nodesRef.current;
    const connectionDistance = 25;
    
    // Update node positions with smooth motion
    nodes.forEach((node, i) => {
      // Smooth orbital motion
      const orbitSpeed = 0.1 + (i % 5) * 0.02;
      node.pos.x += Math.sin(time * orbitSpeed + node.phase) * 0.05;
      node.pos.y += Math.cos(time * orbitSpeed * 0.7 + node.phase) * 0.04;
      node.pos.z += Math.sin(time * orbitSpeed * 0.5 + node.phase * 1.3) * 0.03;
      
      // Boundary bounce with smoothing
      if (Math.abs(node.pos.x) > 45) node.vel.x *= -0.8;
      if (Math.abs(node.pos.y) > 25) node.vel.y *= -0.8;
      if (Math.abs(node.pos.z + 20) > 35) node.vel.z *= -0.8;
    });
    
    // Build connection lines
    const posArray = geometry.attributes.position.array as Float32Array;
    const colorArray = geometry.attributes.color.array as Float32Array;
    let lineIndex = 0;
    
    const lineColor = new THREE.Color('#60a5fa');
    
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const dist = nodes[i].pos.distanceTo(nodes[j].pos);
        
        if (dist < connectionDistance) {
          const opacity = smoothstep(1 - dist / connectionDistance);
          
          // Start point
          posArray[lineIndex * 6] = nodes[i].pos.x;
          posArray[lineIndex * 6 + 1] = nodes[i].pos.y;
          posArray[lineIndex * 6 + 2] = nodes[i].pos.z;
          
          // End point
          posArray[lineIndex * 6 + 3] = nodes[j].pos.x;
          posArray[lineIndex * 6 + 4] = nodes[j].pos.y;
          posArray[lineIndex * 6 + 5] = nodes[j].pos.z;
          
          // Colors with distance-based fade
          colorArray[lineIndex * 6] = lineColor.r * opacity;
          colorArray[lineIndex * 6 + 1] = lineColor.g * opacity;
          colorArray[lineIndex * 6 + 2] = lineColor.b * opacity;
          colorArray[lineIndex * 6 + 3] = lineColor.r * opacity;
          colorArray[lineIndex * 6 + 4] = lineColor.g * opacity;
          colorArray[lineIndex * 6 + 5] = lineColor.b * opacity;
          
          lineIndex++;
        }
      }
    }
    
    geometry.setDrawRange(0, lineIndex * 2);
    geometry.attributes.position.needsUpdate = true;
    geometry.attributes.color.needsUpdate = true;
  });

  return (
    <lineSegments ref={linesRef} geometry={geometry}>
      <lineBasicMaterial vertexColors transparent opacity={0.4} blending={THREE.AdditiveBlending} />
    </lineSegments>
  );
};

// Floating holographic rings
const HoloRings = ({ count = 5 }: { count?: number }) => {
  const groupRef = useRef<THREE.Group>(null);
  const colors = ['#60a5fa', '#34d399', '#a78bfa', '#38bdf8', '#818cf8'];
  
  const rings = useMemo(() => {
    return Array.from({ length: count }, (_, i) => ({
      radius: 8 + i * 6,
      position: [
        (Math.random() - 0.5) * 30,
        (Math.random() - 0.5) * 15,
        -20 - i * 8
      ] as [number, number, number],
      rotationSpeed: (Math.random() - 0.5) * 0.3,
      phase: Math.random() * Math.PI * 2,
      color: colors[i % colors.length]
    }));
  }, [count]);

  useFrame((state) => {
    if (!groupRef.current) return;
    const time = state.clock.getElapsedTime();
    
    groupRef.current.children.forEach((ring, i) => {
      const config = rings[i];
      ring.rotation.x = Math.sin(time * 0.2 + config.phase) * 0.5 + 0.3;
      ring.rotation.y = time * config.rotationSpeed;
      ring.rotation.z = Math.cos(time * 0.15 + config.phase) * 0.3;
      
      // Gentle floating
      ring.position.y = config.position[1] + Math.sin(time * 0.3 + config.phase) * 2;
    });
  });

  return (
    <group ref={groupRef}>
      {rings.map((ring, i) => (
        <mesh key={i} position={ring.position}>
          <torusGeometry args={[ring.radius, 0.08, 16, 64]} />
          <meshBasicMaterial
            color={ring.color}
            transparent
            opacity={0.25}
            side={THREE.DoubleSide}
          />
        </mesh>
      ))}
    </group>
  );
};

// Ambient glow orbs
const GlowOrbs = ({ count = 6 }: { count?: number }) => {
  const groupRef = useRef<THREE.Group>(null);
  const colors = ['#60a5fa', '#34d399', '#a78bfa', '#38bdf8', '#f0f9ff', '#818cf8'];
  
  const orbs = useMemo(() => {
    return Array.from({ length: count }, (_, i) => ({
      position: [
        (Math.random() - 0.5) * 60,
        (Math.random() - 0.5) * 30,
        (Math.random() - 0.5) * 40 - 25
      ] as [number, number, number],
      scale: 3 + Math.random() * 4,
      color: colors[i % colors.length],
      speed: 0.2 + Math.random() * 0.3,
      phase: Math.random() * Math.PI * 2
    }));
  }, [count]);

  useFrame((state) => {
    if (!groupRef.current) return;
    const time = state.clock.getElapsedTime();
    
    groupRef.current.children.forEach((orb, i) => {
      const config = orbs[i];
      // Smooth floating motion
      orb.position.x = config.position[0] + Math.sin(time * config.speed + config.phase) * 5;
      orb.position.y = config.position[1] + Math.cos(time * config.speed * 0.7 + config.phase) * 4;
      orb.position.z = config.position[2] + Math.sin(time * config.speed * 0.5 + config.phase * 1.5) * 3;
      
      // Pulsing scale
      const pulse = 1 + Math.sin(time * 2 + config.phase) * 0.15;
      orb.scale.setScalar(config.scale * pulse);
    });
  });

  return (
    <group ref={groupRef}>
      {orbs.map((orb, i) => (
        <mesh key={i} position={orb.position}>
          <sphereGeometry args={[1, 16, 16]} />
          <meshBasicMaterial
            color={orb.color}
            transparent
            opacity={0.08}
          />
        </mesh>
      ))}
    </group>
  );
};

interface SceneProps {
  config: ReturnType<typeof getPerformanceConfig>;
}

const Scene: React.FC<SceneProps> = ({ config }) => {
  const { camera, pointer } = useThree();
  const frameSkip = useRef(0);

  // Ultra-smooth camera parallax with frame skipping on low-end devices
  useFrame(() => {
    // Skip frames on low-performance devices
    if (config.particles < 500) {
      frameSkip.current++;
      if (frameSkip.current % 2 !== 0) return;
    }
    
    const targetX = pointer.x * 4;
    const targetY = pointer.y * 3;
    camera.position.x += (targetX - camera.position.x) * 0.015;
    camera.position.y += (targetY - camera.position.y) * 0.015;
    camera.lookAt(0, 0, -10);
  });

  if (!config.animate) {
    return (
      <>
        <ambientLight intensity={0.2} />
        <pointLight position={[0, 0, 10]} color="#60a5fa" intensity={2} />
      </>
    );
  }

  return (
    <>
      {/* Soft ambient */}
      <ambientLight intensity={0.15} />
      
      {/* Accent lights for depth - reduced on low-end */}
      <pointLight position={[-30, 20, 10]} color="#60a5fa" intensity={4} distance={100} decay={2} />
      {config.particles >= 500 && (
        <>
          <pointLight position={[30, -15, -20]} color="#a78bfa" intensity={3} distance={80} decay={2} />
          <pointLight position={[0, 25, -40]} color="#34d399" intensity={2} distance={60} decay={2} />
        </>
      )}
      
      {/* Main particle system */}
      <NeuralParticles count={config.particles} />
      
      {/* Connection network - only on medium+ devices */}
      {config.nodes >= 20 && <ConnectionLines nodeCount={config.nodes} />}
      
      {/* Decorative elements - only on higher-end devices */}
      {config.rings > 0 && <HoloRings count={config.rings} />}
      {config.orbs > 0 && <GlowOrbs count={config.orbs} />}
    </>
  );
};

const Background3D: React.FC = () => {
  const [performanceLevel, setPerformanceLevel] = useState<string>('high');
  const [isVisible, setIsVisible] = useState(true);
  
  useEffect(() => {
    // Detect device performance on mount
    const level = getDevicePerformance();
    setPerformanceLevel(level);
    
    // Listen for visibility changes to pause rendering when tab is hidden
    const handleVisibilityChange = () => {
      setIsVisible(!document.hidden);
    };
    
    // Listen for resize to re-evaluate performance
    const handleResize = () => {
      const newLevel = getDevicePerformance();
      setPerformanceLevel(newLevel);
    };
    
    document.addEventListener('visibilitychange', handleVisibilityChange);
    window.addEventListener('resize', handleResize);
    
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  const config = useMemo(() => getPerformanceConfig(performanceLevel), [performanceLevel]);
  
  // Don't render 3D on minimal performance or when tab is hidden
  if (performanceLevel === 'minimal' || !isVisible) {
    return (
      <div 
        aria-hidden="true" 
        className="fixed top-0 left-0 w-full h-full -z-10"
        style={{
          background: 'radial-gradient(ellipse at center, #0a1628 0%, #000000 70%)'
        }}
      />
    );
  }

  return (
    <div aria-hidden="true" className="fixed top-0 left-0 w-full h-full -z-10 bg-black">
      <Canvas 
        camera={{ position: [0, 0, 40], fov: 50 }} 
        dpr={[1, config.dpr]}
        frameloop={isVisible ? 'always' : 'demand'}
        gl={{ 
          antialias: config.dpr > 1,
          alpha: true,
          powerPreference: "high-performance",
          stencil: false,
          depth: true,
          failIfMajorPerformanceCaveat: true
        }}
        onCreated={({ gl }) => {
          // Additional WebGL optimizations
          gl.setClearColor(0x000000, 1);
        }}
      >
        <fog attach="fog" args={['#000000', 35, 120]} />
        <Scene config={config} />
      </Canvas>
    </div>
  );
};

export default Background3D;

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const MetallicBackground: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const container = containerRef.current;

    // Cleanup existing canvas
    while (container.firstChild) {
      container.removeChild(container.firstChild);
    }

    // Detect device capabilities
    const isSmall = window.innerWidth <= 768 ||
      window.matchMedia('(pointer: coarse)').matches ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Scene Setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: !isSmall,
      powerPreference: "high-performance"
    });

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, isSmall ? 1 : 1.5));
    container.appendChild(renderer.domElement);

    // Particle counts based on device
    const particleCount = isSmall ? 600 : 1500;
    const connectionDistance = isSmall ? 60 : 80;
    const maxConnections = isSmall ? 2 : 3;

    // Create particles
    const particlesGeometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const velocities = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    const sizes = new Float32Array(particleCount);

    // Tech color palette
    const techColors = [
      new THREE.Color(0x00d4ff),
      new THREE.Color(0x0088ff),
      new THREE.Color(0x4444ff),
      new THREE.Color(0x8844ff),
      new THREE.Color(0xffffff),
    ];

    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;

      positions[i3] = (Math.random() - 0.5) * 400;
      positions[i3 + 1] = (Math.random() - 0.5) * 400;
      positions[i3 + 2] = (Math.random() - 0.5) * 200 - 100;

      velocities[i3] = (Math.random() - 0.5) * 0.12;
      velocities[i3 + 1] = (Math.random() - 0.5) * 0.12;
      velocities[i3 + 2] = (Math.random() - 0.5) * 0.06;

      const colorIndex = Math.random() < 0.7 ? Math.floor(Math.random() * 3) : Math.floor(Math.random() * 5);
      const color = techColors[colorIndex];
      colors[i3] = color.r;
      colors[i3 + 1] = color.g;
      colors[i3 + 2] = color.b;

      sizes[i] = Math.random() * 2 + 1;
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particlesGeometry.setAttribute('aColor', new THREE.BufferAttribute(colors, 3));
    particlesGeometry.setAttribute('aSize', new THREE.BufferAttribute(sizes, 1));

    // Shader material for particles
    const particlesMaterial = new THREE.ShaderMaterial({
      uniforms: {
        time: { value: 0 },
        pixelRatio: { value: renderer.getPixelRatio() }
      },
      vertexShader: `
        attribute float aSize;
        attribute vec3 aColor;
        varying vec3 vColor;
        varying float vAlpha;
        uniform float time;
        
        void main() {
          vColor = aColor;
          vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
          float pulse = sin(time * 2.0 + position.x * 0.01 + position.y * 0.01) * 0.3 + 0.7;
          vAlpha = pulse;
          gl_PointSize = aSize * (200.0 / -mvPosition.z) * pulse;
          gl_Position = projectionMatrix * mvPosition;
        }
      `,
      fragmentShader: `
        varying vec3 vColor;
        varying float vAlpha;
        
        void main() {
          vec2 center = gl_PointCoord - vec2(0.5);
          float dist = length(center);
          if (dist > 0.5) discard;
          float alpha = smoothstep(0.5, 0.0, dist) * vAlpha * 0.8;
          float core = smoothstep(0.3, 0.0, dist);
          vec3 finalColor = mix(vColor, vec3(1.0), core * 0.5);
          gl_FragColor = vec4(finalColor, alpha);
        }
      `,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending
    });

    const particles = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particles);

    // Connection lines
    const linesMaterial = new THREE.LineBasicMaterial({
      color: 0x00d4ff,
      transparent: true,
      opacity: 0.12,
      blending: THREE.AdditiveBlending
    });

    let linesGeometry = new THREE.BufferGeometry();
    let lines = new THREE.LineSegments(linesGeometry, linesMaterial);
    scene.add(lines);

    // Grid for tech feel
    const gridSize = 400;
    const gridDivisions = isSmall ? 20 : 40;
    const gridHelper = new THREE.GridHelper(gridSize, gridDivisions, 0x004466, 0x002233);
    gridHelper.position.y = -100;
    (gridHelper.material as THREE.Material).transparent = true;
    (gridHelper.material as THREE.Material).opacity = 0.12;
    scene.add(gridHelper);

    camera.position.z = 150;

    // Mouse interaction
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      targetX = (e.clientX - window.innerWidth / 2) * 0.0003;
      targetY = (e.clientY - window.innerHeight / 2) * 0.0003;
    };

    if (!isSmall) document.addEventListener('mousemove', handleMouseMove);

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    // Animation
    const clock = new THREE.Clock();
    let animationId: number;
    let frameCount = 0;

    const animate = () => {
      animationId = requestAnimationFrame(animate);
      const time = clock.getElapsedTime();
      frameCount++;

      particlesMaterial.uniforms.time.value = time;

      mouseX += (targetX - mouseX) * 0.02;
      mouseY += (targetY - mouseY) * 0.02;

      camera.rotation.x = -mouseY * 0.3 + Math.sin(time * 0.1) * 0.02;
      camera.rotation.y = -mouseX * 0.3 + Math.cos(time * 0.08) * 0.02;
      camera.position.x = Math.sin(time * 0.05) * 5;
      camera.position.y = Math.cos(time * 0.04) * 3;

      const posArray = particlesGeometry.attributes.position.array as Float32Array;

      for (let i = 0; i < particleCount; i++) {
        const i3 = i * 3;
        posArray[i3] += velocities[i3];
        posArray[i3 + 1] += velocities[i3 + 1];
        posArray[i3 + 2] += velocities[i3 + 2];

        if (posArray[i3] > 200) posArray[i3] = -200;
        if (posArray[i3] < -200) posArray[i3] = 200;
        if (posArray[i3 + 1] > 200) posArray[i3 + 1] = -200;
        if (posArray[i3 + 1] < -200) posArray[i3 + 1] = 200;
        if (posArray[i3 + 2] > 50) posArray[i3 + 2] = -150;
        if (posArray[i3 + 2] < -150) posArray[i3 + 2] = 50;
      }
      particlesGeometry.attributes.position.needsUpdate = true;

      // Update lines periodically
      if (frameCount % (isSmall ? 5 : 3) === 0) {
        const linePositions: number[] = [];
        const checkCount = Math.min(particleCount, isSmall ? 150 : 300);

        for (let i = 0; i < checkCount; i++) {
          const i3 = i * 3;
          let connections = 0;

          for (let j = i + 1; j < checkCount && connections < maxConnections; j++) {
            const j3 = j * 3;
            const dx = posArray[i3] - posArray[j3];
            const dy = posArray[i3 + 1] - posArray[j3 + 1];
            const dz = posArray[i3 + 2] - posArray[j3 + 2];
            const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

            if (dist < connectionDistance) {
              linePositions.push(
                posArray[i3], posArray[i3 + 1], posArray[i3 + 2],
                posArray[j3], posArray[j3 + 1], posArray[j3 + 2]
              );
              connections++;
            }
          }
        }

        linesGeometry.dispose();
        linesGeometry = new THREE.BufferGeometry();
        linesGeometry.setAttribute('position', new THREE.Float32BufferAttribute(linePositions, 3));
        lines.geometry = linesGeometry;
      }

      gridHelper.rotation.y = time * 0.02;
      renderer.render(scene, camera);
    };

    animate();

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationId);
      particlesGeometry.dispose();
      particlesMaterial.dispose();
      linesGeometry.dispose();
      linesMaterial.dispose();
      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      id="canvas-container"
      className="fixed top-0 left-0 w-full h-full -z-20 bg-black pointer-events-none"
      aria-hidden="true"
      role="presentation"
    />
  );
};

export default MetallicBackground;

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const MetallicBackground: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const container = containerRef.current;

    // Cleanup existing canvas if any
    while (container.firstChild) {
      container.removeChild(container.firstChild);
    }

    // 1. Scene Setup
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x000000, 0.01);

    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ 
        alpha: true, 
        antialias: true,
        powerPreference: "high-performance"
    });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    container.appendChild(renderer.domElement);

    // 2. Lighting - Boosted for Modern Three.js (Physical Units)
    // Legacy Three.js used arbitrary units. Modern uses physical units (candela/lumens).
    // We boost intensities significantly to replicate the look of the template's r128 version.
    
    const ambientLight = new THREE.AmbientLight(0xffffff, 2.0); // Boosted ambient
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 10.0); // Boosted directional
    directionalLight.position.set(20, 30, 20);
    directionalLight.castShadow = true;
    directionalLight.shadow.mapSize.width = 2048;
    directionalLight.shadow.mapSize.height = 2048;
    scene.add(directionalLight);

    const pointLights = [
        { color: 0x4488ff, intensity: 600, position: [15, 10, 15] },
        { color: 0xff8844, intensity: 500, position: [-15, 5, -10] },
        { color: 0x88ff44, intensity: 400, position: [10, -10, 15] },
        { color: 0xff44ff, intensity: 300, position: [-10, 15, -15] }
    ];

    pointLights.forEach(lightConfig => {
        const light = new THREE.PointLight(lightConfig.color, lightConfig.intensity, 40);
        light.position.set(lightConfig.position[0], lightConfig.position[1], lightConfig.position[2]);
        light.castShadow = true;
        scene.add(light);
    });

    // 3. Material Setup
    const baseMaterial = new THREE.MeshPhysicalMaterial({
        color: 0x333333,
        roughness: 0.05,      // Very low roughness for high shine
        metalness: 0.95,      // Very high metalness for metallic look
        clearcoat: 1.0,
        clearcoatRoughness: 0.03,
        reflectivity: 1.0,
        envMapIntensity: 3.0,
        transparent: true,
        opacity: 0.9
    });

    // Create environment map
    // Using empty strings as in template, but lighting boost compensates for lack of real reflection
    const envMap = new THREE.CubeTextureLoader().load([
        '', '', '', '', '', '' 
    ]);
    baseMaterial.envMap = envMap;

    const shapes: THREE.Mesh[] = [];
    
    // 4. Create Geometry - Loop 1: 25 Large Floating Donuts
    for (let i = 0; i < 25; i++) {
        const radius = Math.random() * 1.5 + 1.5; // Larger donuts: 1.5 to 3.0
        const tube = radius * 0.3; // Proportional tube size
        const geometry = new THREE.TorusGeometry(radius, tube, 32, 64);
        // Clone material so each donut can have independent color animations
        const mesh = new THREE.Mesh(geometry, baseMaterial.clone());

        mesh.position.set(
            (Math.random() - 0.5) * 120,
            (Math.random() - 0.5) * 80,
            (Math.random() - 0.5) * 60 - 30
        );

        mesh.rotation.set(
            Math.random() * Math.PI * 2,
            Math.random() * Math.PI * 2,
            Math.random() * Math.PI * 2
        );

        mesh.userData = {
            baseY: mesh.position.y,
            baseX: mesh.position.x,
            baseZ: mesh.position.z,
            floatSpeed: Math.random() * 0.002 + 0.003,
            floatAmplitude: Math.random() * 8 + 4,
            rotationSpeed: {
                x: (Math.random() - 0.5) * 0.005,
                y: (Math.random() - 0.5) * 0.005,
                z: (Math.random() - 0.5) * 0.005
            },
            hoverOffset: Math.random() * Math.PI * 2,
            driftSpeed: Math.random() * 0.001 + 0.0005,
            pulseSpeed: Math.random() * 0.003 + 0.002,
            pulseAmplitude: Math.random() * 0.1 + 0.05
        };

        mesh.castShadow = true;
        mesh.receiveShadow = true;
        shapes.push(mesh);
        scene.add(mesh);
    }

    // Loop 2: 5 Extra Large Centerpiece Donuts
    for (let i = 0; i < 5; i++) {
        const radius = Math.random() * 2 + 3; // Very large: 3 to 5
        const tube = radius * 0.25;
        const geometry = new THREE.TorusGeometry(radius, tube, 48, 96);
        const mesh = new THREE.Mesh(geometry, baseMaterial.clone());

        mesh.position.set(
            (Math.random() - 0.5) * 40,
            (Math.random() - 0.5) * 30,
            (Math.random() - 0.5) * 20 - 10
        );

        mesh.rotation.set(
            Math.random() * Math.PI * 2,
            Math.random() * Math.PI * 2,
            Math.random() * Math.PI * 2
        );

        mesh.userData = {
            baseY: mesh.position.y,
            baseX: mesh.position.x,
            baseZ: mesh.position.z,
            floatSpeed: Math.random() * 0.001 + 0.002,
            floatAmplitude: Math.random() * 6 + 3,
            rotationSpeed: {
                x: (Math.random() - 0.5) * 0.003,
                y: (Math.random() - 0.5) * 0.003,
                z: (Math.random() - 0.5) * 0.003
            },
            hoverOffset: Math.random() * Math.PI * 2,
            driftSpeed: Math.random() * 0.0005 + 0.0003,
            pulseSpeed: Math.random() * 0.002 + 0.001,
            pulseAmplitude: Math.random() * 0.08 + 0.04
        };

        mesh.castShadow = true;
        mesh.receiveShadow = true;
        shapes.push(mesh);
        scene.add(mesh);
    }

    camera.position.z = 25;

    // 5. Interaction
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;
    const mouseStrength = 0.0008;

    const handleMouseMove = (e: MouseEvent) => {
        targetX = (e.clientX - window.innerWidth / 2) * mouseStrength;
        targetY = (e.clientY - window.innerHeight / 2) * mouseStrength;
    };
    document.addEventListener('mousemove', handleMouseMove);

    const handleResize = () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    const handleClick = () => {
        shapes.forEach((donut, index) => {
            const originalScale = donut.scale.x;
            donut.scale.setScalar(originalScale * 1.2);
            
            setTimeout(() => {
                donut.scale.setScalar(originalScale);
            }, 200);
            
            (donut.material as THREE.MeshPhysicalMaterial).color.setHSL(0.6, 0.8, 0.5);
            setTimeout(() => {
                (donut.material as THREE.MeshPhysicalMaterial).color.setHSL(0.1, 0.3, 0.2);
            }, 100);
        });
    };
    document.addEventListener('click', handleClick);

    // 6. Animation Loop
    const clock = new THREE.Clock();
    let animationId: number;

    const animate = () => {
        animationId = requestAnimationFrame(animate);
        const time = clock.getElapsedTime();

        // Mouse follow smoothing
        mouseX += (targetX - mouseX) * 0.02;
        mouseY += (targetY - mouseY) * 0.02;

        // Camera movement
        camera.rotation.x = -mouseY * 0.6;
        camera.rotation.y = -mouseX * 0.6;
        camera.position.x = Math.sin(time * 0.05) * 1 + mouseX * 10;
        camera.position.y = Math.cos(time * 0.03) * 0.5 + mouseY * 10;

        // Shape animation
        shapes.forEach((donut, index) => {
            const data = donut.userData;
            const mat = donut.material as THREE.MeshPhysicalMaterial;
            
            // Floating motion
            const floatY = Math.sin(time * data.floatSpeed + data.hoverOffset) * data.floatAmplitude;
            const floatX = Math.cos(time * data.floatSpeed * 0.7 + data.hoverOffset) * data.floatAmplitude * 0.3;
            const floatZ = Math.sin(time * data.floatSpeed * 0.5 + data.hoverOffset) * data.floatAmplitude * 0.2;
            
            donut.position.y = data.baseY + floatY;
            donut.position.x = data.baseX + floatX;
            donut.position.z = data.baseZ + floatZ;
            
            // Drift
            donut.position.x += Math.sin(time * data.driftSpeed) * 0.05;
            donut.position.z += Math.cos(time * data.driftSpeed * 0.8) * 0.03;
            
            // Rotation
            donut.rotation.x += data.rotationSpeed.x;
            donut.rotation.y += data.rotationSpeed.y;
            donut.rotation.z += data.rotationSpeed.z;
            
            // Mouse influence on rotation
            donut.rotation.x += mouseY * 0.02;
            donut.rotation.y += mouseX * 0.02;
            
            // Pulse
            const pulse = Math.sin(time * data.pulseSpeed + index) * data.pulseAmplitude + 1;
            donut.scale.setScalar(pulse);
            
            // Color shift
            const hueShift = (Math.sin(time * 0.1 + index * 0.5) + 1) * 0.1;
            mat.color.setHSL(0.1 + hueShift, 0.3, 0.2);
        });

        renderer.render(scene, camera);
    };

    animate();

    return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('click', handleClick);
        window.removeEventListener('resize', handleResize);
        cancelAnimationFrame(animationId);
        container.removeChild(renderer.domElement);
        renderer.dispose();
    };
  }, []);

  return <div ref={containerRef} id="canvas-container" className="fixed top-0 left-0 w-full h-full z-0 bg-black pointer-events-none" />;
};

export default MetallicBackground;
import React, { useEffect, useRef, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { Environment } from '@react-three/drei';

// ✅ Actual 3D model loader using .glb file
const BraceletModel = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Check initial window size
    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const { scene } = useGLTF('/ring.glb');
  const clonedScene = scene.clone(true);

  clonedScene.traverse((child) => {
    if ((child as THREE.Mesh).isMesh) {
      const mesh = child as THREE.Mesh;
      mesh.castShadow = true;
      mesh.receiveShadow = true;

      if (Array.isArray(mesh.material)) {
        mesh.material.forEach((m) => {
          m.metalness = 1;
          m.roughness = 0.2;
          m.envMapIntensity = 1.5;
        });
      } else {
        mesh.material.metalness = 1;
        mesh.material.roughness = 0.2;
        mesh.material.envMapIntensity = 1.5;
      }
    }
  });

  const scale = isMobile ? 8 : 8;
  return <primitive object={clonedScene} scale={scale} rotation={[6, Math.PI / 4, 0]} />;
};

// ✅ Preload for performance
useGLTF.preload('/ring.glb');

const HeroSection: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  return (
    <section className="bg-[#fca5c5] relative overflow-visible w-full min-h-screen">
      <div className="relative flex items-center justify-center text-center min-h-screen px-4 md:px-6">
        {/* Text */}
        <h1 className="font-nimbus italic text-7xl md:text-[12rem] text-white z-10">
          Stay Golden
        </h1>

        {/* Floating 3D Ring */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20 md:mt-32">
          <div className="w-[300px] md:w-full h-[300px] md:h-full">
            <Canvas shadows>
              <ambientLight intensity={0.5} />
              <directionalLight position={[5, 5, 5]} intensity={0.8} castShadow />
              <pointLight position={[-3, -3, 3]} intensity={0.3} />
              <Environment preset="sunset" background={false} />
              <BraceletModel />
              <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1} />
            </Canvas>
          </div>
        </div>
      </div>

      {/* Optional blurred background elements */}
      <div className="absolute top-1/2 left-1/4 w-64 h-64 rounded-full bg-blue-primary/10 filter blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-pink-primary/10 filter blur-3xl"></div>
    </section>


  );
};

export default HeroSection;

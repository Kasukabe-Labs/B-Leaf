import React, { useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { Environment } from '@react-three/drei';


// ✅ Actual 3D model loader using .glb file
const BraceletModel = () => {
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


  return <primitive object={clonedScene} scale={8} rotation={[6, Math.PI / 4, 0]} />;
};

// ✅ Preload for performance
useGLTF.preload('/ring.glb');

const HeroSection: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  return (
    <section className="bg-[#fca5c5] relative overflow-hidden w-full h-screen">
      <div className="mx-auto px-4 md:px-6 h-full w-full">
        <div className="flex flex-col lg:flex-row items-center relative justify-center h-full w-full">
          {/* Text content */}
          <div className="w-full text-center lg:text-left flex items-center justify-center">
            <h1 className="w-full font-nimbus italic text-5xl md:text-[12rem] mb-6 text-white text-center">
              Stay Golden
            </h1>
          </div>

          {/* 3D Model */}
          <div className="absolute z-20 w-full h-full lg:mt-32">
            <div className="absolute inset-0 animate-float ">
              <Canvas ref={canvasRef} shadows className="w-full h-full">
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
      </div>

      {/* Background decorative elements */}
      <div className="absolute top-1/2 left-1/4 w-64 h-64 rounded-full bg-blue-primary/10 filter blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-pink-primary/10 filter blur-3xl"></div>
    </section>
  );
};

export default HeroSection;

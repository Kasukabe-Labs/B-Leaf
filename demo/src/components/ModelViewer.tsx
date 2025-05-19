import React, { useEffect, useRef, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment, OrbitControls, useGLTF } from '@react-three/drei';

interface JewelryModelProps {
  type: 'bracelet' | 'necklace' | 'ring';
}



// This is a placeholder component that would be replaced with actual models
const JewelryModel: React.FC<JewelryModelProps> = ({ type }) => {
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


  const braceletModel = useGLTF('/bracelet.glb');
  const scaleOfBracelet = isMobile ? 2.8 : 3;

  const necklaceModel = useGLTF('/necklace.glb');
  const scaleOfNecklace = isMobile ? 3 : 3;

  const ringModel = useGLTF('/ring.glb');
  const scaleOfRing = isMobile ? 8.3 : 8;

  switch (type) {
    case 'bracelet':
      braceletModel.scene.traverse((child) => {
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
      return <primitive object={braceletModel.scene} scale={scaleOfBracelet} rotation={[25, Math.PI / 7, 0]} />;

    case 'necklace':
      necklaceModel.scene.traverse((child) => {
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
      return <primitive object={necklaceModel.scene} scale={scaleOfNecklace} rotation={[25, Math.PI / 7, 0]} />;

    case 'ring':
      ringModel.scene.traverse((child) => {
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
      return <primitive object={ringModel.scene} scale={scaleOfRing} rotation={[4, Math.PI / 6, 3]} />;

    default:
      return null;
  }
};

interface ModelViewerProps {
  type: 'bracelet' | 'necklace' | 'ring';
  className?: string;
}

const ModelViewer: React.FC<ModelViewerProps> = ({ type, className = '' }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

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

  return (
    <div className={`relative ${className} ${isMobile ? 'h-[200px]' : 'h-[400px]'}`}>
      <Canvas ref={canvasRef}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={0.8} castShadow />
        <pointLight position={[-3, -3, 3]} intensity={0.3} />
        <Environment preset="sunset" background={false} />
        <JewelryModel type={type} />
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={1} />
      </Canvas>
    </div>
  );
};

export default ModelViewer;
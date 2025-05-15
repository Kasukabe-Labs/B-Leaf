import React, { useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

interface JewelryModelProps {
  type: 'bracelet' | 'necklace' | 'ring' | 'earring';
}

// This is a placeholder component that would be replaced with actual models
const JewelryModel: React.FC<JewelryModelProps> = ({ type }) => {
  switch (type) {
    case 'bracelet':
      return (
        <mesh rotation={[0, Math.PI / 2, 0]}>
          <torusGeometry args={[1, 0.2, 16, 50]} />
          <meshStandardMaterial 
            color="#FCA5C5"
            metalness={0.9}
            roughness={0.1}
          />
        </mesh>
      );
    case 'necklace':
      return (
        <group>
          <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
            <torusGeometry args={[1, 0.1, 16, 50]} />
            <meshStandardMaterial 
              color="#34C4FD"
              metalness={0.9}
              roughness={0.1}
            />
          </mesh>
          <mesh position={[0, -1.2, 0]}>
            <sphereGeometry args={[0.3, 32, 32]} />
            <meshStandardMaterial 
              color="#FFFFFF"
              metalness={0.9}
              roughness={0.1}
            />
          </mesh>
        </group>
      );
    case 'ring':
      return (
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[0.5, 0.1, 16, 50]} />
          <meshStandardMaterial 
            color="#FFA500"
            metalness={0.9}
            roughness={0.1}
          />
        </mesh>
      );
    case 'earring':
      return (
        <group>
          <mesh position={[0, 0.3, 0]}>
            <sphereGeometry args={[0.15, 32, 32]} />
            <meshStandardMaterial 
              color="#FFFFFF"
              metalness={0.9}
              roughness={0.1}
            />
          </mesh>
          <mesh position={[0, 0, 0]}>
            <sphereGeometry args={[0.25, 32, 32]} />
            <meshStandardMaterial 
              color="#34C4FD"
              metalness={0.9}
              roughness={0.1}
            />
          </mesh>
        </group>
      );
    default:
      return null;
  }
};

interface ModelViewerProps {
  type: 'bracelet' | 'necklace' | 'ring' | 'earring';
  className?: string;
}

const ModelViewer: React.FC<ModelViewerProps> = ({ type, className = '' }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  return (
    <div className={`relative ${className}`}>
      <Canvas ref={canvasRef}>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
        <JewelryModel type={type} />
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={1} />
      </Canvas>
    </div>
  );
};

export default ModelViewer;
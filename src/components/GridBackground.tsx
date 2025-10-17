import { Canvas } from '@react-three/fiber';
import { useMediaQuery } from '../hooks/useMediaQuery';

const GridBackground = () => {
  const isMobile = useMediaQuery('(max-width: 768px)');

  // Define brighter colors for mobile for better visibility
  const centerLineColor = isMobile ? '#555555' : '#2a2a2a';
  const gridColor = isMobile ? '#333333' : '#101010';

  return (
    <Canvas orthographic dpr={[1, 2]} camera={{ position: [0, 0, 10], zoom: 200 }}>
      <group
        position={isMobile ? [0, 0, 0] : [2.5, 0, 0]}
        rotation={[Math.PI / 5, -Math.PI / 5, Math.PI / 2]}
      >
        <gridHelper
          args={[40, 100, centerLineColor, gridColor]}
          position={[-0.25, 0, 0]}
          rotation={[0, 0, Math.PI / 2]}
        />
      </group>
    </Canvas>
  );
};

export default GridBackground;
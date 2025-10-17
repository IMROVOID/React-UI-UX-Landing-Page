import { Canvas } from '@react-three/fiber';

const GridBackground = () => (
  <Canvas orthographic dpr={[1, 2]} camera={{ position: [0, 0, 10], zoom: 200 }}>
    {/* 
      This is the direct fix. 
      We move the entire <group> to the right on the x-axis.
      This shifts the whole rotated grid system into the correct position.
    */}
    <group position={[2.5, 0, 0]} rotation={[Math.PI / 5, -Math.PI / 5, Math.PI / 2]}>
      <gridHelper
        args={[40, 100, '#2a2a2a', '#101010']}
        position={[-0.25, 0, 0]}
        rotation={[0, 0, Math.PI / 2]}
      />
    </group>
  </Canvas>
);

export default GridBackground;
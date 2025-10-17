import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, Bounds, Edges } from '@react-three/drei';
import { LayerMaterial, Depth, Fresnel } from 'lamina';
import { LayerMaterial as LayerMaterialImpl } from 'lamina/vanilla';
import { Leva } from 'leva';
import * as THREE from 'three';
import cursorUrl from '../assets/cursor.glb';

interface GLTFResult {
  nodes: {
    Cube: THREE.Mesh;
  };
  materials: {
    [name: string]: THREE.Material;
  };
}

interface MaterialWithLayers {
  layers: {
    origin: THREE.Vector3;
  }[];
}

function Cursor(props: React.ComponentProps<'mesh'>) {
  const ref = useRef<LayerMaterialImpl>(null);
  const { nodes } = useGLTF(cursorUrl) as unknown as GLTFResult;
  const gradient = 0.7; // Hardcoded value since leva is hidden

  useFrame((state) => {
    if (ref.current) {
      const material = ref.current as unknown as MaterialWithLayers;
      const sin = Math.sin(state.clock.elapsedTime / 2);
      const cos = Math.cos(state.clock.elapsedTime / 2);
      
      material.layers[0].origin.set(cos / 2, 0, 0);
      material.layers[1].origin.set(cos, sin, cos);
      material.layers[2].origin.set(sin, cos, sin);
      material.layers[3].origin.set(cos, sin, cos);
    }
  });

  return (
    <mesh {...props} geometry={nodes.Cube.geometry}>
      <LayerMaterial ref={ref} toneMapped={false}>
        <Depth colorA="#ff0080" colorB="black" alpha={1} mode="normal" near={0.5 * gradient} far={0.5} origin={[0, 0, 0]} />
        <Depth colorA="blue" colorB="#f7b955" alpha={1} mode="add" near={2 * gradient} far={2} origin={[0, 1, 1]} />
        <Depth colorA="green" colorB="#f7b955" alpha={1} mode="add" near={3 * gradient} far={3} origin={[0, 1, -1]} />
        <Depth colorA="white" colorB="red" alpha={1} mode="overlay" near={1.5 * gradient} far={1.5} origin={[1, -1, -1]} />
        <Fresnel mode="add" color="white" intensity={0.5} power={1.5} bias={0.05} />
      </LayerMaterial>
      <Edges color="white" />
    </mesh>
  );
}

const ThreeScene = () => (
  <>
    <Leva hidden />
    <Canvas orthographic dpr={[1, 2]} camera={{ position: [0, 0, 10], zoom: 200 }}>
      {/* Restoring original group rotation for the correct perspective */}
      <group rotation={[Math.PI / 5, -Math.PI / 5, Math.PI / 2]}>
        <Bounds fit clip observe margin={1.25}>
          <Cursor scale={[0.5, 1, 0.5]} />
        </Bounds>
        {/* Resized grid and placed inside the group to match the cursor's angle */}
        <gridHelper args={[10, 40, '#2a2a2a', '#101010']} position={[-0.25, 0, 0]} rotation={[0, 0, Math.PI / 2]} />
      </group>
    </Canvas>
  </>
);

export default ThreeScene;
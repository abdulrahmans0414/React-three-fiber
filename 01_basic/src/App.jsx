import { Canvas } from '@react-three/fiber';
import './App.css'

import React from "react";

const Cube = ({ position, size, color }) => {
  return (
    <mesh position={position}>
      <boxGeometry args={size} />
      <meshStandardMaterial color={color} />
    </mesh>
  )
}

const App = () => {
  return (
    <Canvas>
      {/* add lighting for meshStandardMaterial */}
      <directionalLight position={[0, 0, 2]} />

      <Cube position={[1, 0, 0]} size={[1, 1, 1]} color={"hotpink"} />
      <Cube position={[-1, 0, 0]} size={[1, 1, 1]} color={"hotpink"} />
      <Cube position={[1, 2, 0]} size={[1, 1, 1]} color={"hotpink"} />
      <Cube position={[-1, 2, 0]} size={[1, 1, 1]} color={"hotpink"} />

    </Canvas>
  )
};

export default App;

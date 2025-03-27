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
      <directionalLight position={[0, 0, 2]} intensity={0.5} />

      {/* ambientLight -> is a global light*/}
      {/* This light cant used cast shadows as it does not have a direction */}
      <ambientLight intensity={0.5} />

      <Cube position={[1, 0, 0]} size={[1, 1, 1]} color={"hotpink"} />
      <Cube position={[-1, 0, 0]} size={[1, 1, 1]} color={"green"} />
      <Cube position={[1, 2, 0]} size={[1, 1, 1]} color={"skyblue"} />
      <Cube position={[-1, 2, 0]} size={[1, 1, 1]} color={"yellow"} />

    </Canvas>
  )
};

export default App;

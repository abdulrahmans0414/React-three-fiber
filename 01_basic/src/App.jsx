import { Canvas, useFrame } from '@react-three/fiber';
import './App.css'

import React, { useRef } from "react";

const Cube = ({ position, size, color }) => {

  const ref = useRef()
  useFrame((state, delta) => {
    // console.log(delta);
    // console.log(state);

    // rotating the cube
    ref.current.rotation.x += delta;
    ref.current.rotation.y += delta * 0.5; // Rotate Y axis at half speed

    // moving the cube
    // console.log(state.clock.elapsedTime);
    ref.current.position.x = Math.sin(state.clock.elapsedTime) * 2
  })

  return (
    <mesh position={position} ref={ref}>
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

      {/* <group position={[0, -1, 0]}>
        <Cube position={[1, 0, 0]} size={[1, 1, 1]} color={"hotpink"} />
        <Cube position={[-1, 0, 0]} size={[1, 1, 1]} color={"green"} />
        <Cube position={[1, 2, 0]} size={[1, 1, 1]} color={"skyblue"} />
        <Cube position={[-1, 2, 0]} size={[1, 1, 1]} color={"yellow"} />
      </group> */}

      <Cube position={[1, 0, 0]} size={[1, 1, 1]} color={"hotpink"} />

    </Canvas>
  )
};

export default App;

import { Canvas, useFrame } from '@react-three/fiber';
import './App.css'
import React, { useRef } from "react";

const Sphare = ({ position, size, color }) => {
  const ref = useRef()
  useFrame((state, delta) => {
    // rotating the cube
    ref.current.rotation.x += delta;
    ref.current.rotation.y += delta * 0.5; // Rotate Y axis at half speed

    // moving the cube
    ref.current.position.y = Math.sin(state.clock.elapsedTime) * 2
  })

  return (
    <mesh position={position} ref={ref}>
      <sphereGeometry args={size} />
      <meshStandardMaterial color={color} wireframe />
    </mesh>
  )
}
const Torus = ({ position, size, color }) => {
  return (
    <mesh position={position}>
      <torusGeometry args={size} />
      <meshStandardMaterial color={color} />
    </mesh>
  )
}
const TorusKnot = ({ position, size, color }) => {
  const ref = useRef()
  useFrame((state, delta) => {
    // rotating the cube
    ref.current.rotation.x += delta;
    ref.current.rotation.y += delta * 0.5; // Rotate Y axis at half speed

    // moving the cube
    ref.current.position.z = Math.sin(state.clock.elapsedTime) * 2
  })

  return (
    <mesh position={position} ref={ref}>
      <torusKnotGeometry args={size} />
      <meshStandardMaterial color={color} />
    </mesh>
  )
}

const App = () => {
  return (
    <Canvas>
      <directionalLight position={[0, 0, 2]} intensity={0.5} />
      <ambientLight intensity={0.5} />

      <Sphare position={[0, 0, 0]} size={[1, 32, 32]} color={"hotpink"} />
      <Torus position={[2, 0, 0]} size={[0.7, 0.1, 30, 30]} color={"blue"} />
      <TorusKnot position={[-2, 0, 0]} size={[0.5, 0.1, 1000, 50]} color={"green"} />

    </Canvas>
  )
};

export default App;

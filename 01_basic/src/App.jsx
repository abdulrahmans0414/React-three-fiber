import { Canvas } from '@react-three/fiber';
import './App.css'

import React from "react";


const App = () => {
  return (
    <Canvas>
      {/* add lighting for meshStandardMaterial */}
      <directionalLight position={[0, 0, 2]} />

      <mesh position={[1, 0, 0]}>
        <boxGeometry />   {/* args = [x, y, z] for size*/}
        {/* <meshBasicMaterial /> */}
        <meshStandardMaterial color={"hotpink"} />
      </mesh>

      <mesh position={[-1, 0, 0]}>
        <boxGeometry />
        <meshStandardMaterial color={"hotpink"} />
      </mesh>

      <mesh position={[1, 2, 0]}>
        <boxGeometry />
        <meshStandardMaterial color={"hotpink"} />
      </mesh>

      <mesh position={[-1, 2, 0]}>
        <boxGeometry />
        <meshStandardMaterial color={"hotpink"} />
      </mesh>


    </Canvas>
  )
};

export default App;

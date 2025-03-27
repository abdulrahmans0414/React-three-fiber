import { Canvas } from '@react-three/fiber';
import './App.css'

import React from "react";


const App = () => {
  return (
    <Canvas>
      <mesh>
        <boxGeometry args={[2, 2, 4]} />   {/* args = [x, y, z] for size*/}
        <meshBasicMaterial />
        {/* <meshStandardMaterial /> */}
      </mesh>

    </Canvas>
  )
};

export default App;

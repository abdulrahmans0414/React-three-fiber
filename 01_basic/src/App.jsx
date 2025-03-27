import { Canvas } from '@react-three/fiber';
import './App.css'

import React from "react";


const App = () => {
  return (
    <Canvas>
      {/* add lighting for meshStandardMaterial */}
      <directionalLight position={[1, 1, 1]} />


      <mesh>
        <boxGeometry args={[2, 2, 4]} />   {/* args = [x, y, z] for size*/}
        {/* <meshBasicMaterial /> */}
        <meshStandardMaterial color={"hotpink"} />
      </mesh>



    </Canvas>
  )
};

export default App;

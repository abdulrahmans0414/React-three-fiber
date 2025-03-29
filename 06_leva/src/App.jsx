import { Canvas } from '@react-three/fiber'
import './App.css'
import { MeshWobbleMaterial, OrbitControls, useHelper } from '@react-three/drei'
import { useRef } from 'react'
import { DirectionalLightHelper } from 'three'
import { useControls } from 'leva'

const TorusKnot = ({ position, size, color }) => {
  return (
    <mesh position={position}>
      <torusKnotGeometry args={size} />
      {/* <meshStandardMaterial color={color} /> */}
      <MeshWobbleMaterial color={color} factor={0.5} speed={1.5} />
    </mesh>
  )
}


const Scene = () => {

  const directionalLightRef = useRef()

  const { lightColer, lightIntensity } = useControls({
    lightColer: '#ffffff',
    lightIntensity: { value: 0.5, min: 0, max: 5 }
  })

  useHelper(directionalLightRef, DirectionalLightHelper, 0.5, 'white')


  return (
    <>
      <directionalLight
        position={[0, 1, 2]}
        // intensity={0.5}
        intensity={lightIntensity}
        ref={directionalLightRef}
        color={lightColer}

      />
      <ambientLight intensity={0.5} />


      <TorusKnot position={[0, 0, 0]} size={[0.9, 0.1, 1000, 50]} color={"green"} />
      <OrbitControls enableZoom={false} />
    </>
  )
}

function App() {


  return (
    <Canvas>
      <Scene />
    </Canvas>
  )
}

export default App

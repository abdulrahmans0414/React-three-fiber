import { Canvas } from '@react-three/fiber';
import './App.css'
import { MeshWobbleMaterial, OrbitControls } from '@react-three/drei'

const TorusKnot = ({ position, size, color }) => {
  return (
    <mesh position={position}>
      <torusKnotGeometry args={size} />
      {/* <meshStandardMaterial color={color} /> */}
      <MeshWobbleMaterial color={color} factor={0.5} speed={1.5} />
    </mesh>
  )
}


function App() {
  return (

    <Canvas>
      <directionalLight position={[0, 0, 2]} intensity={0.5} />
      <ambientLight intensity={0.5} />
      <TorusKnot position={[0, 0, 0]} size={[0.9, 0.1, 1000, 50]} color={"green"} />

      <OrbitControls enableZoom={false} />
    </Canvas>
  )
}

export default App

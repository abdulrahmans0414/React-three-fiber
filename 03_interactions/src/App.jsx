import { Canvas, useFrame } from '@react-three/fiber';
import './App.css'
import { useRef, useState } from 'react';

const Sphare = ({ position, size, color }) => {
  const ref = useRef()

  // Hovered effect on sphere
  const [isHovered, setIsHover] = useState(false)
  const [isClicked, setIsClicked] = useState(false)

  useFrame((state, delta) => {
    const speed = isHovered ? 1 : 0.2
    // rotating the cube
    ref.current.rotation.y += delta * speed;
  })

  return (
    <mesh
      position={position}
      ref={ref}
      onPointerOver={(e) => (e.stopPropagation(), setIsHover(true))}
      onPointerOut={() => setIsHover(false)}
      onClick={() => setIsClicked(!isClicked)}
      scale={isClicked ? 1.5 : 1}

    >
      <sphereGeometry args={size} />
      <meshStandardMaterial color={isHovered ? "orange" : color} wireframe />
    </mesh>
  )
}
function App() {

  return (
    <Canvas>
      <directionalLight position={[0, 0, 2]} intensity={0.5} />
      <ambientLight intensity={0.5} />

      <Sphare position={[0, 0, 0]} size={[1, 32, 32]} color={"lightblue"} />
    </Canvas>
  )
}

export default App

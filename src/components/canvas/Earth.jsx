import React from 'react'
import { Suspense, useState, useEffect } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload, useGLTF, Html } from '@react-three/drei'
import CanvasLoader from '../Loader'

const Earth = ({isMobile}) => {
  const earth = useGLTF('/planet/scene.gltf')
  if (isMobile) {
    return null; // explicitly return null for mobile devices
  }
  return (
    <primitive object={earth.scene} scale={2.5} position-y={0} rotation-y={0}/>
  )
}
const EarthCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);
    const handleMediaQueryChange = (event)=>{
      setIsMobile(event.matches);
    };
    mediaQuery.addEventListener('change', handleMediaQueryChange);
    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    };
  }, []);
  return (
    <Canvas
      shadows
      frameloop='demand'
      camera={{ near: 0.1, fov: 45, far: 200, position: [-4, 3, 6] }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0]} />
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Earth isMobile={isMobile}/>
      </Suspense>
    </Canvas>
  )
}

export default EarthCanvas
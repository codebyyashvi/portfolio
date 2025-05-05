import { Suspense, useEffect, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload, useGLTF } from '@react-three/drei'
import CanvasLoader from '../Loader'
import { Html } from '@react-three/drei'
import { Desktop } from './Scene'

const Computers = ({isMobile}) => {
  if (isMobile) {
    // Option 1: Render an image instead of the 3D model
    return (
      <mesh>
        <Html center>
          <img
            src="/mobile.jpg" // must be in /public folder
            alt="Mobile"
            style={{
              maxWidth: '300px',
              borderRadius: '10px',
            }}
          />
        </Html>

      </mesh>
    );
    
    // Option 2: Use a simpler mobile model
    // const mobileModel = useGLTF('/mobile/scene.gltf');
    // return (
    //   <mesh>
    //     <hemisphereLight intensity={1}/>
    //     <pointLight intensity={3} position={[0, -0.25, 0.4]} />
    //     <primitive
    //       object={mobileModel.scene}
    //       scale={0.7}
    //       position={[0, -1.80, -2]}
    //       rotation={[0, Math.PI, 0]}
    //     />
    //   </mesh>
    // );
  }
  const computer = useGLTF('/desktop_pc/scene-optimized-v1.glb')
  return (
    <mesh>
      <hemisphereLight intensity={1} groundColor="black"/>
      <pointLight intensity={3} position={[0, -0.25, 0.4]} />
      <spotLight position={[0, -10, 20]} angle={0.12} penumbra={1} intensity={1} castShadow shadow-mapsize={1024} />
      <primitive object={computer.scene} scale={isMobile? 0.7 : 0.75} position={isMobile? [0, -1.80, -2]:[0, -3, -1]} rotation={[-0.01, -0.2, -0.1]}/>
    </mesh>
  )
}
const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);
    const handleMediaQueryChange = (event)=>{
      setIsMobile(event.matches);
    };
    mediaQuery.addEventListener('change', handleMediaQueryChange);
    return () =>{
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    };
  }, []);
  
  if (isMobile) {
    return (
      <div className="w-full h-[500px] flex justify-center items-center pt-[700px]">
        <img
          src="/mobile.jpg"
          alt="Mobile fallback"
          className="max-w-[80%] rounded-lg shadow-lg"
        />
      </div>
    );
  }
  return (
    <Canvas
      frameloop='demand'
      shadows
      camera={{position: [20, 3, 5], fov: 25}}
      gl={{preserveDrawingBuffer: true}}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false}
        maxPolarAngle={Math.PI/2}
        minPolarAngle={Math.PI/2}
        />
        <Computers isMobile={isMobile}/>
      </Suspense>
      <Preload all />
    </Canvas>
  )
}
export default ComputersCanvas
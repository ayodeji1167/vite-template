import { angleToRadians } from '@/utils/angletoradians';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { RootState, useFrame } from '@react-three/fiber';
import { useEffect, useRef } from 'react';

export default function Three() {
  const orbitControl: any = useRef(null);
  useFrame((state: RootState) => {
    if (orbitControl.current) {
      const { x, y } = state.mouse;
      orbitControl.current.setAzimuthalAngle(-angleToRadians(x * 360));
    }
    // console.log(state.mouse);
  });

  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 1, 5]} />
      <OrbitControls ref={orbitControl} />
      <mesh position={[0, 1, 0]}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial color="#ffffff" />
      </mesh>
      <mesh rotation={[-angleToRadians(90), 0, 0]}>
        <planeGeometry args={[7, 7]} />
        <meshStandardMaterial color="blue" />
      </mesh>
      <ambientLight args={['#ffffff', 1]} />
    </>
  );
}

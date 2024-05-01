import { Suspense } from 'react';
import './App.css';
import { Canvas } from '@react-three/fiber';
import Three from './components/three/Three';

function App() {
  return (
    <Canvas id="my-canvas">
      <Suspense fallback={null}>
        <Three />
      </Suspense>
    </Canvas>
  );
}

export default App;

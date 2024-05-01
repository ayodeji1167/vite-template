import { Suspense } from 'react';
import './App.css';
import { Canvas } from '@react-three/fiber';

function App() {
  return (
    <Canvas id="my-canvas">
      <Suspense fallback={null}></Suspense>
    </Canvas>
  );
}

export default App;

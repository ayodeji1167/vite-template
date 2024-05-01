import { Suspense } from 'react';
import './App.css';

function App() {
  return (
    <div id="my-canvas">
      <Suspense fallback={null}></Suspense>
    </div>
  );
}

export default App;

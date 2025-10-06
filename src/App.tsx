import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

 import GeoWorld3 from './GeoWorld/index';
   
function App() {

  useEffect(() => {

const dom: HTMLElement = document.querySelector('#earth-canvas')!;
new GeoWorld3({
  dom
});


  }, [])

  return (
    <div id="earth-canvas">
      <div id="tooltip">这是什么</div>
    </div>
  );
}

export default App;

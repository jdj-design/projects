import { useState, useRef, useEffect } from 'react';
import { select } from 'd3';
import './App.css';
import NCMap from './NCMap';
import Header from './assets/components/Header';




function App() {


  return (
    <>
    <div>
    <Header/>
   
    </div>
    <div className='mapContainer' style={{display:"flex", outlineColor: "red"}}>
    <NCMap/>
    </div>
      
    </>
  )
}

export default App

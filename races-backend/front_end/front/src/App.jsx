import { useState } from 'react'
import './App.css'
import Add from './Add'
import Header from './Header'
import History from './History'
import NCMap from './NCMap';
function App() {
  

  return (
    <>
    <div className='header'>
     <Header/>

    </div>
     <div className='add'>
      <Add/>
      <div>
      <NCMap/>

      </div>
     </div>
<div>
  <History/>
</div>
    </>
  )
}

export default App

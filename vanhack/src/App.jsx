
import React, { useState } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import About from './components/About'
import Home from './components/Home'
import Vans from './components/Vans'
import SignIn from './components/SignIn'
import VanDetails from './components/VanDetails'
import Error from './components/Error'

function App() {
  const[state, setState] = useState(false);

  function onClick (){
    setState(!state);
  }


  return (
    <>
    <div className=''>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<Error />}/>
        <Route path='/vans' element={<Vans />} />
        <Route path='/host' element={""} />
        <Route path='/profile' element={""} />
      </Routes>
      </div>
      
    </>
  )
}

export default App
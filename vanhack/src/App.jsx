
import React, { useState } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import About from './pages/About'
import Home from './pages/Home'
import Vans from './pages/Vans'
import SignIn from './pages/SignIn'
import VanDetails from './pages/VanDetails'
import Error from './pages/Error'
import Layout from './components/Layout'
import Dashboard from './pages/host/Dashboard'
import Review from './pages/host/Review'
import Income from './pages/host/Income'
import HostLayout from './pages/host/HostLayout'
import HostVan from './pages/host/HostVan'
import HostVansDetails from './pages/host/HostVansDetails'
import Details from './pages/host/vans-details/Details'
import Photos from './pages/host/vans-details/Photos'
import Pricing from './pages/host/vans-details/Pricing'

function App() {


  return (
    <>
    <div className=''>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />}/>
          <Route path='about' element={<About />}/>
          <Route path='vans' element={<Vans />} />
          <Route path='vans/:id' element={<VanDetails />} />
          <Route path='vans/*' element={<Error />} />

          <Route path='/host' element={<HostLayout />}>
            <Route index element={<Dashboard />} />
            <Route path='reviews' element={<Review />} />
            <Route path='income' element={<Income />} />
            <Route path='vans' element={<HostVan />} />
            <Route path='vans/:id' element={<HostVansDetails />}>
              <Route index element={<Details />}/>
              <Route path='pricing' element={<Pricing />}/>
              <Route path='photos' element={<Photos />}/>
            </Route>
          </Route>
          <Route path='/profile' element={""} />
          <Route path='*' element={<Error />} />
        </Route>
        
      </Routes>
      </div>
      
    </>
  )
}

export default App
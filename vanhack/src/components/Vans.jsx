
import React from 'react'
import Nav from './Nav'
import Footer from './Footer'
import VanCard from './VanCard'
import VanDetails from './VanDetails'

function Vans() {
  return (
    <>
        <Nav />
            <header className='p-6 mb-2'>
              <h1 className='font-bold text-2xl mb-4'>
                Explore our van options
              </h1>
              <div className='flex justify-between flex-wrap'>
                <div className='flex gap-3'>
                  <div className='bg-orange-100 hover:text-white focus:text-white px-4 py-1 hover:bg-orange-600 focus:bg-orange-600 rounded-sm font-medium text-black text-sm'>
                    Simple
                  </div>
                  <div className='bg-orange-100 px-4 hover:bg-black hover:text-white focus:text-white focus:bg-black py-1 rounded-sm font-medium text-black text-sm'>
                    Luxery
                  </div>
                  <div className='bg-orange-100 px-4 py-1 hover:bg-green-900 hover:text-white focus:text-white focus:bg-green-900 rounded-sm font-medium text-black text-sm'>
                    Rugged
                  </div>
                </div>
                <div className=' underline py-1  font-medium text-black text-sm'>
                  Clear Filter
                </div>
              </div>
            </header>
            <div className='p-6 flex gap-5'>
              <VanCard />
              <VanCard />
            </div>
            
        <Footer />
    </>
  )
}

export default Vans

import React from 'react'

import Nav from './Nav'
import Footer from './Footer'

function About() {
  return (
    <>
      <Nav />
        <section>
          <div className='bg-[url(./assets/about.png)] w-full h-56 bg-no-repeat bg-cover bg-center'/>

          

          <div className='flex justify-center text-left items-center flex-col my-10 px-8'>
            <h1 className='text-2xl font-bold max-w-md'>
            Don’t squeeze in a sedan when you could relax in a van.
            </h1>
            <p className='max-w-md'>
              Our mission is to enliven your road trip with the 
              perfect travel van rental. Our vans are recertified 
              before each trip to ensure your travel plans can go off without a hitch.
              (Hitch costs extra 😉)

            </p>

            <p className='max-w-md mt-6'>
              Our team is full of vanlife enthusiasts who 
              know firsthand the magic of touring the world
              on 4 wheels.
            </p>
          </div>

          <div className='mb-20 px-6 py-8 mx-8 rounded-md bg-orange-300'>
              <h2 className='text-black text-2xl font-semibold'>
              Your destination is waiting. Your van is ready.
              </h2>

              <button className='py-2 font-semibold px-6 rounded-md mt-5 bg-black text-slate-200'>
                Explore our vans
              </button>

            </div>

        </section>
      <Footer />
    </>
  )
}

export default About
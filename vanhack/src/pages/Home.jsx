
import React from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'


function HomePage() {
  return (
    <>
      {/* <Nav /> */}
      <section className="w-full bg-[url(./assets/hero.png)] bg-no-repeat
      bg-center bg-cover bg-fixed h-screen overflow-hidden">

        <div className='flex justify-center item-center flex-col text-white'>
            <div className='mx-auto my-[10%]'>
            <h1 className='text-3xl font-semibold max-w-md mb-6'>
              You got the travel plans, we got the travel vans.
            </h1>
            <p className='max-w-md mb-6'>Add adventure to your life by joining the #vanlife movement.
              Rent the perfect van to make your perfect road trip.</p>
            <button className='text-center w-full font-bold h-12 bg-orange-400 rounded-md'>
              Find your Van
            </button>
            </div>
        </div>
      </section>
    </>
  )
}

export default HomePage

import React from 'react'
import vanImg from '../assets/van.png'

function VanCard() {


  return (
    <>
        <section className='w-40'>
            <div>
                <img src={vanImg} className='w-full aspect-square'/>
            </div>

            <div className='mt-2 flex  justify-between '>
                <h2 className='font-semibold text-sm'>
                    Modest Explorer
                </h2>
                <p className='font-semibold text-sm'>$60 <sup className='font-normal'>/day</sup></p>
            </div>
            <button className='mt-2 px-5 text-white text-sm py-2 rounded bg-orange-500'>
                Simple
            </button>
        </section>
    </>
  )
}

export default VanCard
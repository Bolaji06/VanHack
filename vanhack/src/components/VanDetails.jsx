import React from 'react'
import Nav from './Nav'
import Footer from './Footer'
import { IoIosArrowRoundBack } from "react-icons/io";
import vanImage from "../assets/van.png";
import Button from './Button';

import { Link } from 'react-router-dom';

function VanDetails() {
  return (
    <>
        <Nav/>
            <header className='px-2'>
                <Link to="/" className='flex items-center gap-1 mt-4 mb-6'>
                    <IoIosArrowRoundBack size={26}/>
                    <p className='text-sm underline text-black'>Back to all vans</p>
                </Link>
            </header>

            <section className='px-2 mt-3'>
                <div className='w-full aspect-square mb-2'>
                    <img src={vanImage} className='w-full'/>
                </div>

                <div className='mt-6'>
                    <button className='px-2 py-1 rounded text-sm  bg-orange-500 text-white'>
                        Simple
                    </button>
                    <h2 className='font-bold py-2 text-black'>
                        Modest Explorer
                    </h2>
                    <p className='font-semibold'>$60 <sub className='font-normal'>/day</sub></p>
                </div>

                <div className='my-3'>
                <p className='text-sm text-left text-black'>The Modest Explorer is a van designed to get you out
                of the house and into nature. This beauty is equipped
                 with solar panels, a composting toilet, a water tank
                and kitchenette. The idea is that you can pack up your 
                home and escape for a weekend or even longer!</p>
                </div>
                <div className='my-6'>
                    <Button text={"Rent this van"}/>
                </div>
               
                

            </section>

            <div className='absolute bottom-0 w-full'>
                <Footer />
            </div>

       
    </>

  )
}

export default VanDetails
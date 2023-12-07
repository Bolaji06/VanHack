
import React from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'
import Button from '../components/Button'

function Error() {
  return (
    <>
        <div className='bg-orange-100 h-screen'>
            <section className='px-4 mb-5'>
                <div className='flex justify-center py-32 mx-auto items-center'>
                    <div>
                        <h1 className='text-left text-2xl max-w-md py-2 font-bold mb-3'>
                        Sorry, the page you were looking
                        for was not found.
                        </h1>
                        <Link to="/">
                            <button className='bg-black text-white w-full
                                py-2'>
                                    Return home
                            </button>
                        </Link>
                       
                    </div>

                </div>
            </section>
        </div>
        
    </>
  )
}

export default Error

import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <>
        <nav className='flex justify-between items-center py-4 px-4 bg-white shadow-sm'>
            <div>
                <Link to="/" className='uppercase font-bold text-2xl'>#Vanlife</Link>
            </div>
            <div className='flex gap-6 mr-5'>
                <Link to="/about" className='hover:underline'>About</Link>
                <Link to="/vans" className='hover:underline'>Vans</Link>
            </div>
        </nav>
    </>
  )
}

export default Nav
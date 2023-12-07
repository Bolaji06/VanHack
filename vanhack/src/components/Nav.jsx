
import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function Nav() {
  return (
    <>
        <nav className='flex justify-between items-center py-4 px-4 bg-white shadow-sm'>
            <div>
                <Link to="/" className='uppercase font-bold text-2xl'>#Vanlife</Link>
            </div>
            <div className='flex gap-6 mr-5'>
                <NavLink to="/host" className={({ isActive }) => isActive ? 'text-green-900 font-bold underline' : null}>Host</NavLink>
                <NavLink to="/about" className={({ isActive })=> isActive ? 'text-green-900 font-bold underline' : null}>About</NavLink>
                <NavLink to="/vans" className={({ isActive }) => isActive ? 'text-green-900 font-bold underline' : null}>Vans</NavLink>
            </div>
        </nav>
    </>
  )
}

export default Nav
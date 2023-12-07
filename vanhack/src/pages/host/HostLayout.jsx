
import React from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'

function HostLayout() {
  return (
    <>
        <nav className='flex gap-4 my-3 px-4'>
            <NavLink to="/host" end className={({ isActive }) => isActive ? 'text-green-950 underline font-bold' : null}>Dashboard</NavLink>
            <NavLink to="/host/reviews" className={({ isActive }) => isActive ? 'text-green-950 underline font-bold' : null}>Reviews</NavLink>
            <NavLink to="/host/vans" className={({ isActive }) => isActive ? 'text-green-950 underline font-bold' : null}>Vans</NavLink>
            <NavLink to="/host/income" className={({ isActive })=> isActive ? 'text-green-950 underline font-bold' : null}>Income</NavLink>  
        </nav>
        <Outlet />
    </>
  )
}

export default HostLayout

import React from 'react'

import { RxAvatar } from "react-icons/rx";
import { Link } from 'react-router-dom';

function HostNav() {
  return (
    <>
         <nav className='flex justify-between items-center py-4 px-4 bg-white shadow-sm'>
            <div>
                <Link to="/" className='uppercase font-bold text-2xl'>#Vanlife</Link>
            </div>
            <div className='flex items-center gap-6 mr-5'>
                <Link to="/host">Host</Link>
                <Link to="/about">About</Link>
                <Link to="/vans">Vans</Link>
                <Link to="/profile">
                    <RxAvatar size={26}/>
                </Link> 
            </div>
        </nav>
    </>
  )
}

export default HostNav

import React from 'react'
import { useOutletContext } from 'react-router-dom'

function Pricing() {
  const van = useOutletContext()
  return (
    <div>
      <p className='text-lg font-bold'>${van.price} <span className='font-normal text-base'>/day</span></p>
    </div>
  )
}

export default Pricing

import React from 'react'
import { useOutletContext } from 'react-router-dom'

function Photos() {
  const van = useOutletContext()
  return (
    <>
      <picture>
        <source srcSet={van.imageUrl} alt={`${van.name} van`}/>
        <img className='w-32 mt-10' src={van.imageUrl} alt={`${van.name} van`}/>
      </picture>
    </>
  )
}

export default Photos
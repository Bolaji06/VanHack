
import React from 'react'
import { useOutletContext } from 'react-router-dom'

function Details() {
  const van = useOutletContext()
  return (
    <>
      <section>
        <div className='flex flex-col gap-4'>
          <p className='font-bold text-base'>Name: 
          <span className='font-normal'> {van?.name}</span></p>
          <p className='font-bold text-base'>Category: 
          <span className='font-normal capitalize'> {van?.type}</span></p>
          <p className='font-bold text-base'>Description: 
          <span className='font-normal'> {van?.description}</span></p>
          <p className='font-bold text-base'>Visibilty: 
          <span className='font-normal'> {"Public"}</span></p>
        </div>
      </section>
    </>
  )
}

export default Details
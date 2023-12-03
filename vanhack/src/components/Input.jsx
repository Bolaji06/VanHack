
import React from 'react'

function Input( {name, value, type,
     holder, handleChange}) {
  return (
    <>
        <input
            className='w-full px-2 py-1 border rounded border-slate-300
            mb-2'
            placeholder={holder}
            name={name}
            value={value}
            type={type}
            onChange={handleChange}
        />
    </>
  )
}

export default Input
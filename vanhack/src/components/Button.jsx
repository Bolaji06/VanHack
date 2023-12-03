
import React from 'react'

function Button({ text, type, isLoading}) {
  return (
    <>
        <button
            className='w-full py-2 text-white rounded bg-orange-400 mb-3'>
                {isLoading ? 'Please wait...' : text}
        </button>
    </>
  )
}

export default Button
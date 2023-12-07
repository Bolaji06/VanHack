
import React from 'react'
import vanImg from '../assets/van.png'

function VanCard( {
    name, type,
    imgUrl, id, price
}) {
    let style = ""

    if (type === "simple") {
         style = {
            backgroundColor: "red"
        }
    }else if (type === "rugged") {
        style = {
            backgroundColor: "green"
        }
    }else {
        style = {
            backgroundColor: "black"
        }
    }

  return (
    <>
        <section className='w-40'>
            <div>
                <img src={imgUrl} className='w-full aspect-square'/>
            </div>

            <div className='mt-2 flex  justify-between '>
                <h2 className='font-semibold text-sm'>
                    {name}
                </h2>
                <p className='font-semibold text-sm'>{price} <sup className='font-normal'>/day</sup></p>
            </div>
            <button className='mt-2 px-5 text-white text-sm py-2 rounded' style={style}>
                {type}
            </button>
        </section>
    </>
  )
}

export default VanCard
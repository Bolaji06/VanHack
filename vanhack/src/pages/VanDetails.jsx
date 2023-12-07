import React, { useEffect, useState } from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import { IoIosArrowRoundBack } from "react-icons/io";
import vanImage from "../assets/van.png";
import Button from '../components/Button';

import { Link, useNavigate, useParams } from 'react-router-dom';


function VanDetails() {
    const { id } = useParams();
    const navigate = useNavigate();

    console.log(id)

    const [data, setData] = useState(null);

    useEffect(() => {
        fetch(`/api/vans/${id}`)
            .then((response) => response.json())
            .then((data) => setData(data.vans));
    }, []);
  
  return (
    <>
        {/* <Nav/> */}
            <header className='px-2'>
                <div onClick={()=> navigate(-1)} className='flex items-center cursor-pointer gap-1 mt-4 mb-6'>
                    <IoIosArrowRoundBack size={26}/>
                    <p className='text-sm underline text-black'>Back to all vans</p>
                </div>
            </header>
            { data ?
            (<section className='px-2 mt-3'>
                
                <div className='w-full aspect-square mb-2'>
                    <img src={data.imageUrl} className='w-full rounded'/>
                </div>

                <div className='mt-6'>
                    <button className='px-2 py-1 rounded text-sm  bg-orange-500 text-white'>
                        {data.type}
                    </button>
                    <h2 className='font-bold py-2 text-black'>
                        {data.name}
                    </h2>
                    <p className='font-semibold'>${data.price} <sub className='font-normal'>/day</sub></p>
                </div>

                <div className='my-3'>
                <p className='text-sm text-left text-black'>{data.description}</p>
                </div>
                <div className='my-6'>
                    <Button text={"Rent this van"}/>
                </div>
            </section>) : "Loading..."}

       
    </>

  )
}

export default VanDetails
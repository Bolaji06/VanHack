
import React, { useEffect, useState } from 'react'
import { useFetch } from '../../hooks/useFetch'
import { Link } from 'react-router-dom';

function HostVan() {
    const url = "/api/host/vans";

    const { data, isLoading } = useFetch(url);

  return (
    <>
        <section className='px-4 my-4 mb-10'>
            {isLoading ? <p>Loading...</p> : (
                <div>
                     <h1 className='font-bold text-2xl mb-5'>Your listed vans</h1>
                     <div className='flex gap-3 flex-col'>

                        {
                            data?.vans?.map((van) => {
                                return (
                                    <Link to={`/host/vans/${van.id}`} key={van.id} className=''>
                            <div className='flex gap-1 bg-white rounded-md p-3'>
                                <div>
                                    <img className='aspect-square w-14' src={van.imageUrl} alt="Image" />
                                </div>
                                <div className='p-2'>
                                    <p className='text-base text-black font-semibold'>{van.name}</p>
                                    <p className='text-slate-400 py-1 text-sm'>${van.price} /day</p>
                                </div>
                            </div>

                        </Link>
                                )
                            })
                        }
                        </div>
                        
                </div>
                
            )}
           
        </section>

    </>
  )
}

export default HostVan
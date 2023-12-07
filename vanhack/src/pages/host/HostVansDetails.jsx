
import React from 'react'
import { useNavigate, useParams, Link, NavLink, Outlet } from 'react-router-dom'
import { useFetch } from '../../hooks/useFetch';
import { FaArrowLeftLong } from "react-icons/fa6";
import Loader from '../../components/Loader';


function HostVansDetails() {
    const url = "/api/host/vans"
    const params = useParams();
    const navigate = useNavigate();

    const { data, isLoading } = useFetch(`${url}/${params.id}`);

    console.log(data.vans)
  return (
    <>
        <header className='mx-4'>
            <div className='flex gap-3 items-center my-6'>
                <FaArrowLeftLong size={20} />
                <Link onClick={()=> navigate(-1)} >Back to all vans</Link>
            </div>
        </header>

        {
            isLoading ? <Loader title={"Loading van details"}/> : (
                data?.vans?.map((van) => {
                    return (
                        <main key={van.id} className='mx-4 mb-6 rounded-md bg-white p-5'>
                        <div className='flex gap-5 items-center'>
                            <div>
                                <img className='w-32' src={van?.imageUrl} alt={van?.name}/>
                            </div>
            
                            <div className='my-3'>
                                <button className='bg-orange-500
                                px-2 py-1 rounded text-white'>
                                    {van?.type}
                                </button>
                                <div className=''>
                                    <h1 className='text-2xl font-bold pt-2'>
                                        {van?.name}
                                    </h1>
                                    <p className='py-1 font-semibold'>
                                        <span className='font-bold text-xl'>${van?.price}</span> /day
                                    </p>
                                </div>
                            </div>
                        </div>
                        <section className='my-4'>
                            <div className='flex gap-3 items-center my-2'>
                                <NavLink to='.'
                                    end
                                    className={({ isActive }) => isActive ? 'underline font-bold' : null}>
                                    Details
                                </NavLink>

                                <NavLink to='pricing' className={({ isActive }) => 
                                    isActive ? 'underline font-bold' : null}>
                                    Pricing
                                </NavLink>

                                <NavLink to='photos' className={({ isActive }) =>
                                isActive ? 'underline font-bold' : null}>
                                    Photos
                                </NavLink>
                            </div>
                        </section>
                        <Outlet context={ van }/>
            
            
                    </main>
                    )
                })
            
            )
        }
        
    </>
  )
}

export default HostVansDetails
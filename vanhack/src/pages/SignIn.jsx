
import React from 'react';

import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Input from '../components/Input';
import Button from '../components/Button';
import HostNav from '../components/HostNav';
import { Link } from 'react-router-dom';


function SignIn() {
  return (
    <>
        <div className='bg-orange-100 h-screen'>
            <HostNav />

            <section className='mt-4 px-3 mb-5'>
                <div className='flex justify-center items-center
                my-6 mx-auto'>
                    <div>
                        <h1 className='py-3 mb-4 text-2xl font-bold text-center'>
                            Sign in to your account 
                        </h1>

                        <Input />
                        <Input />
                        <div className='mt-4'>
                            <Button text={"Sign In"}/>
                        </div>
                        

                        <p className='text-sm text-black text-center'>
                            {"Don't have an account?"}
                            <Link to='/signup' className='text-orange-500'> Create one now</Link>
                        </p>
                        
                    </div>
                    
                </div>

            </section>
            
        </div>
    
    
    </>
  )
}

export default SignIn
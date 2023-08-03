import React from 'react'
import {FaFacebook, FaLinkedinIn, FaInstagram} from 'react-icons/fa'

import { Link } from 'react-router-dom'

function Footer() {
  return (
    <>
            <footer className='bg-stone-900'>
                <div className='w-80 mx-auto py-12 text-white'>
                <div className=''>
                        <h4 className='font-bold font-poppins text-[1.5rem]'>Honors</h4>
                        <p className='text-[.8rem] mt-2 mb-4 leading-5 text-gray-300'>Honors organization prevent look which means to <span className='text-white font-mada font-medium text-[1rem]'> STOP </span> and <span className='text-white font-mada font-medium text-[1rem]'>PREVENT</span> Gender Based Violence in our community.</p>
                      <div className='flex flex-row gap-4'>
                        <FaFacebook/>
                        <FaLinkedinIn/>
                        <FaInstagram/>
                      </div>
                        
                </div> 
                <div className='mt-7'>
                    <h4 className='font-bold font-poppins mb-4 text-[1.5rem]'>Permalinks</h4>
                    <ul> 
                        <li><Link to='/' className='text-gray-300 font-medium font-lato'>Home</Link></li>
                        <li><Link to='/ourvision' className='text-gray-300 font-medium font-lato'>Our Vision</Link></li>
                    </ul>
                </div>
                <div className='mt-7'>
                    <h4 className='font-bold font-poppins mb-4 text-[1.5rem]'>Join Us</h4>
                    <ul>
                        <li><button className='border-2 border-gray-400 bg-opacity-50 px-7 rounded-lg py-1 bg-orange-500'>Donate</button></li>
                    </ul>
                </div>

                </div>
                
            </footer>

    </>
  )
}

export default Footer
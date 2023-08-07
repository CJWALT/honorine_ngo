import React from 'react'
import {FaFacebook} from 'react-icons/fa'

import { Link } from 'react-router-dom'
import Button from './Button'

function Footer(prop) {
  return (
    <>
            <footer className='bg-stone-900'>
                <div className='w-80 md:w-85 mx-auto md:flex md:flex-row md:flex-wrap md:justify-between gap-2 py-12 text-white'>
                  <div className='md:w-40 w-auto'>
                          <img src='./img/honors.jpg' className='w-14'
                            alt='honor logo'/>
                            <p className='text-[.8rem] mt-2 mb-4 self-center leading-5 text-gray-300'>Honors organization prevent look which means to <span className='text-white font-mada font-medium text-[1rem]'> STOP </span> and <span className='text-white font-mada font-medium text-[1rem]'>PREVENT</span> Gender Based Violence in our community.</p>
                         
                        <div className='flex flex-row gap-4'>
                          <a href='https://web.facebook.com/profile.php?id=100071156164175'> <FaFacebook/></a>
                        </div>
                          
                  </div> 
                  
                  <div className='mt-7 md:mt-0'>
                      <h4 className='font-bold font-poppins mb-4 text-[1.5rem]'>Permalinks</h4>
                      <ul> 
                          <li><Link to='/' className='text-gray-300 font-medium font-lato'>Home</Link></li>
                          <li><Link to='/ourvision' className='text-gray-300 font-medium font-lato'>Our Vision</Link></li>
                          <li><Link to='/projects' className='text-gray-300 font-medium font-lato'>Projects</Link></li>
                      </ul>
                  </div>
                  <div className='mt-7 md:mt-0'>
                      <h4 className='font-bold font-poppins mb-4 text-[1.5rem]'>Join Us</h4>
                      <Button children='Donate' bgColor='bg-orange-500' btnBorderColor='border-orange-400' border='border-2' bdRad='rounded-lg' btnOpacity='bg-opacity-30' btnPad='px-5 py-1' onclick={prop.onclick}/>
                  </div>

                  
                    
                </div>
                <small className='text-center text-white font-bold font-mada flex justify-center'><a href='https://www.github.com/cjwalt'>cjwalt 2023</a></small>
            </footer>

    </>
  )
}

export default Footer
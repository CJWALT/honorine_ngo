import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Header() {

    const [openNav, setOpenNav] = useState(false)


    const toggleNav = () => {
        setOpenNav(!openNav)
    }

    

  return (
    <div className='bg-white h-24 w-full flex'>
        
            <div className=' flex  justify-between items-center w-80 mx-auto md:w-85  relative'>
                <div>
                  <img src='./img/honors.jpg' alt='honors logo' className='w-24 h-auto'/>
                </div>

                <div className={`${openNav ? 'block' : 'hidden' } h-auto px-4 py-3 z-30 self-center rounded bg-black text-white lg:text-black font-bold absolute top-0 right-0 md:right-0 flex flex-col gap-4 lg:px-0 lg:py-0 lg:bg-transparent lg:flex lg:gap-3 lg:flex-row lg:relative md:absolute`}>
                    <Link to='/' onClick={toggleNav}>Home</Link>
                    <Link to='/ourvision' onClick={toggleNav}>Our Vision</Link>
                    <Link to='/projects' onClick={toggleNav}>Projects</Link>
                </div>  
                 <span className=' bg-red-700 w-5 h-5 rounded cursor-pointer lg:hidden sm:block' onClick={toggleNav}></span> 
            </div>
                            
    </div>
  )
}

export default Header
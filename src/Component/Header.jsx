import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Header() {

    const [openNav, setOpenNav] = useState(false)


    const toggleNav = () => {
        setOpenNav(!openNav)
    }

    

  return (
    <div className='bg-orange-400 h-10 w-full flex '>
            <div className='mx-auto items-center justify-between flex w-80 relative'>
                <div>Ho<span className='text-white font-bold text-xl'>nor</span></div>

                <div className={`${openNav ? 'block' : 'hidden' } h-auto px-4 py-3 z-10 rounded bg-black text-white font-bold absolute top-0 right-0 flex flex-col gap-4 lg:block`}>
                    <Link to='/' onClick={toggleNav}>Home</Link>
                    <Link to='/' onClick={toggleNav}>About us</Link>
                    <Link to='/ourvision' onClick={toggleNav}>Our Vision</Link>
                </div>  
                <span className='bg-red-700 w-3 h-3 rounded cursor-pointer' onClick={toggleNav}></span>  
            </div>
            
    </div>
  )
}

export default Header
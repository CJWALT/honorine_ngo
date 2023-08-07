import React from 'react'
import OurVision from './OurVision'
import Projects from './Projects'
import bgImage from '../gbv.jpg'
import Button from '../Component/Button'

function Home(prop) {
  return (
    <div>
        <main className='bg-black h-screen md:h-96 bg-no-repeat bg-contain md:bg-right bg-bottom overflow-hidden relative text-white flex pt-10 md:py-10'
            style={{backgroundImage: `url(${bgImage})`}}> 
            <div className=' w-80 mx-auto flex flex-col md:w-85  md:flex-row gap-3'>
                <div className=' self-center  md:w-50'>
                    <h2 className='text-[2rem] font-bold leading-10 font-poppins mb-4'>Empower, <br/> Eradicate, Educate.</h2>
                    <p className='text-[.8rem] font-mada mb-8 font-medium font-regular'>Raise Your Voice: Fight Gender-Based Violence with <span> Love and Kindness,</span> Spreading Empathy Through Community</p>
                    
                  <Button onclick={prop.onclick} children='Donate' bgColor='orange' bdRad='rounded-[1.2rem]' />
                </div>
              </div>
        </main>
        
            <OurVision onclick={prop.onclick} />
            <Projects/>
        
       

    </div>
  )
}

export default Home
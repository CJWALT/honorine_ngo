import React from 'react'
import OurVision from './OurVision'
import Projects from './Projects'

function Home() {
  return (
    <div>
        <main className='bg-black overflow-hidden relative text-white flex pt-10 flex-col'> 
            <div className=' w-80 mx-auto flex flex-col gap-3'>
                <div>
                    <h2 className='text-[2rem] font-bold leading-10 font-poppins mb-4'>Empower, <br/> Eradicate, Educate.</h2>
                    <p className='text-[.8rem] font-mada mb-8 font-medium font-regular'>Raise Your Voice: Fight Gender-Based Violence with <span> Love and Kindness,</span> Spreading Empathy Through Community</p>
                    <button className='px-4 py-1 rounded-[1.2rem] cursor-pointer font-medium bg-amber-400'>Donate</button>
                </div>
                <div className='flex items-center h-96 top-5 justify-center relative'>
                    <img src="/img/gbv.png" alt="girls" className='  h-auto absolute bottom-0 w-full' />
                </div>
            </div>
        </main>

        <OurVision />
        <Projects/>
       

    </div>
  )
}

export default Home
import React from 'react'
import {TbCircleDotFilled} from 'react-icons/tb'
function Projects() {
  return (
    <>
        <div className=' flex py-10 bg-orange-300 '>
            <div className=' mx-auto w-80  flex justify-center flex-col'>

                <div className='flex flex-row gap-5 items-center'>
                    
                    <TbCircleDotFilled  className='text-[1.7rem] text-white'/> 
                    <h3 className='inline text-[2rem] font-bold font-mada text-white'>Projects</h3>
                </div>
            
                <div className=' px-4 py-14'>
                    <img src='/img/fampl.jpg' className='w-80 mb-4 opacity-50 h-auto'  alt='family planing'/>
                    <h6 className='font-bold font-lato text-yellow-700'>Family Planning Method: </h6>
                    <small className='text-[.6rem] font-mada leading-tight'>Our Gender-Based Violence (GBV) initiative is committed to offering comprehensive family planning services to women aged 10-25.
                    As we advocate for gender equality and address the issues surrounding GBV, our family planning program plays a vital role in empowering women and fostering a brighter, more inclusive future for all.
                   </small>
                   <button className='block bg-orange-600 px-4 py-1 mt-3 rounded font-bold text-white'>whatsapp</button>
                </div>
                <div>
                    <img src='/img/ante.jpg' className='w-80 mb-4 opacity-50 h-auto' alt='family planing'/>
                    <h6 className='font-bold font-lato text-yellow-700'>Antenatal, Prenatal Support: </h6>
                    <small className='text-[.6rem] font-mada leading-tight'>Our primary focus is to provide unwavering support to expectant mothers, ensuring they receive the necessary care and guidance throughout their pregnancy journey 
                        Our commitment to promoting maternal health and fostering a supportive environment for pregnant women is central to our mission in combatting GBV.
                   </small>
                   <button className='block bg-orange-600 px-4 py-1 mt-3 rounded font-bold text-white'>whatsapp</button>
                </div>
            </div>
        </div>
    </>
  )
}

export default Projects
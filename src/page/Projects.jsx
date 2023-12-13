import React from 'react'
import {TbCircleDotFilled} from 'react-icons/tb'
import Button from '../Component/Button';

function Projects() {

        const handleWhatsAppClick = (projName) =>{

            const phoneNum = '+237653886282'; 
            const defaultMessage =`Care to share more about this ${projName} project?`;
            const url =  `https://api.whatsapp.com/send?phone=${phoneNum}&text=${defaultMessage}`
            window.open(url)
        }


  return (
    <>
        <div className=' flex py-10 bg-orange-300 '>
            <div className=' mx-auto w-80 md:w-85    flex justify-center flex-col'>

                <div className='flex flex-row gap-5 mb-5 items-center'>
                    
                    <TbCircleDotFilled  className='text-[1.7rem] text-white'/> 
                    <h3 className='inline text-[2rem] font-bold font-mada text-white'>Projects</h3>
                </div>
                <div className='md:flex md:flex-row gap-2 px-5 justify-center'>
                    <div className=' md:w-50 px-0 py-0 mb-10 md:mb-0 md:px-5 md:py-5'>
                        <img src='/img/fampl.jpg' className='w-80 mb-4 opacity-70 md:w-full object-cover'   alt='family planing'/>
                        <h6 className='font-bold font-lato text-yellow-700'>Family Planning Method: </h6>
                        <small className='text-[.8rem] md:text-justify align-center font-mada leading-tight'>As we advocate for gender equality and address the issues surrounding GBV, our family planning program plays a vital role in empowering women and fostering a brighter, more inclusive future for all.
                        </small>
                        <div className='mt-3'>
                        <Button children='Learn More' bgColor='bg-orange-600' onclick={()=>handleWhatsAppClick('Family Planning')} />
                        </div>
                        
                    </div>
                    <div className='  md:w-50 px-0 py-0 md:px-5 md:py-5'>
                        <img src='/img/ante.jpg' className='w-80 mb-4 opacity-70 md:w-full  object-cover'  alt='family planing'/>
                        <h6 className='font-bold font-lato text-yellow-700'>Antenatal, Prenatal Support: </h6>
                        <small className='text-[.8rem] md:text-justify align-center font-mada leading-tight'>
                            We provide unwavering support to expectant mothers,
                            Our commitment to promoting maternal health and fostering a supportive environment for pregnant women is central to our mission in combatting GBV.
                        </small>

                        <div className='mt-3'>
                        <Button children='Learn More' bgColor='bg-orange-600' onclick={()=>handleWhatsAppClick('Antenatal')} />
                        </div>
                        
                    </div>
                </div>
                
            </div>
        </div>
    </>
  )
}

export default Projects

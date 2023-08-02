import React from 'react'

function OurVision() {
  return (
    <>
        <div className='w-80 flex mx-auto py-10 '>
                <div className='flex flex-col'>
                    <h3 className='text-center text-amber-500 text-[2rem] font-bold font-mada'>
                        Our Vision
                    </h3>
                    <img src='/img/visi-divi.png' className='w-24 mb-3 self-center' alt='divider'/>
                    <p className='text-center font-light mb-8 leading-5 text-[.9rem] font-lato'>Our organization's vision is to empower and uplift young girls and women affected by gender-based violence, providing them with comprehensive support and opportunities for personal and academic growth. 
                    Additionally, we envision the establishment of a dedicated training center that will serve as a safe and nurturing space for learning and skill development.
                    By fostering an environment of support, education, and skill-building, we aspire to break the cycle of violence and create lasting positive change within our community. Together, we strive towards a society where every young girl and woman can thrive and reach their full potential.</p>
                    <button className='px-14 text-white font-medium text-[1.1rem] w-auto self-center py-2 rounded bg-orange-500'>Donate</button>
                </div>
            </div>    
    </>
  )
}

export default OurVision
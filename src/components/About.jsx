import React from 'react'
import headshot from '../assets/circle-headshot.jpg'

const About = () => {
  return (
    <section name="about" className='bg-primary w-full text-secondary
    flex flex-col md:px-24 px-6 py-24 items-center'>
      <div className='max-w-[1000px]  w-full h-full'>
        <div name='header' className='flex w-full mb-4'>
          <h1 className='text-[36px] md:text-[56px] font-black'>
            About<span className='text-tertiary'>.</span>
          </h1>
          <div className=' flex-grow grid grid-cols-1 grid-rows-2 px-4'>
            <div></div>
            <div className='border-t-[1px] border-secondary opacity-40'></div>
          </div>
        </div>

        <div className='w-full flex flex-col items-center gap-4'>
          <div className=' rounded-md
          flex flex-col items-center '>
            <img src={headshot} alt="" className='h-[30vh] rounded-full'/>
            <p className='p-4 text-[18px] font-light max-w-[500px]'>
              I'm a West Chester graduate looking to persue a career in the information 
              technology sector. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui iusto dignissimos at maxime cumque quod deserunt sapiente nemo aperiam. Doloribus exercitationem debitis quos quasi corrupti dolores quae eius reiciendis libero.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
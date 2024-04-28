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
          <div className=' rounded-md flex flex-col items-center gap-8 text-[18px]
          md:text-[26px] font-light max-w-[700px]'>
            <img src={headshot} alt="" className='h-[30vh] rounded-full'/>
            <p className=''>
              I'm a West Chester graduate looking to persue a career in IT. I've been 
              fascinated by technology from age 5 when I first interacted with a computer, 
              and wondered how it worked. 
            </p>
            <p className=''>
              Throughtout my school years I always had a talent
              from math and science, but it was the unique blend of creativity and
              problem-solving that lead me to computer science.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
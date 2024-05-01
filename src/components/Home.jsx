import React from 'react'
import {Link} from "react-scroll"
import { GoArrowRight } from "react-icons/go";

const Home = () => {
  const homeBlurb = `Welcome to my portfolio! I'm on the verge of graduating from West Chester 
  University, eagerly anticipating diving into the tech industry. While I've always had a knack for math, physics, and 
  chemistry, it was the unique blend of creativity and problem-solving in computer science that 
  truly captivated me.`

  return (
    <div name='home' className='w-full min-h-screen bg-primary text-quaternary flex flex-col items-center
     justify-center relative overflow-hidden'>

      <div className=' w-[80%] max-w-[1000px]  flex flex-col items-start '>
        <h1 className='text-[56px]/[61.6px] md:text-[96px]/[105.6px] font-black z-10'>
          Andrew Lodise
        </h1>

        <h3 className='text-[36px]/[39.6px] font-bold pb-4 text-secondary z-10'>
          Software Developer
        </h3>

        {/**<p className='text-[14px]/[21px] md:text-[18px]/[21.6px] pb-4 lg:pb-8 font-medium'>
          {homeBlurb}
  </p>**/}

        <Link to="projects" spy={true} smooth={true} duration={500} 
        className='group flex items-center self-start text-[16px] md:text-[24px]
        cursor-pointer mt-2 p-4 bg-tertiary text-[#0f0f32]  border-tertiary
        duration-300 border-[1px] rounded-md ease-in-out z-10'>
          <h4 className='px-2 font-semibold'>
            View projects
          </h4>
          <GoArrowRight className='transition-transform group-hover:rotate-90 
          duration-300'/>
        </Link>
      </div>
      
      
    </div>
  )
}


export default Home
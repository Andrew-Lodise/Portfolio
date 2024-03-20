import React from 'react'
import {Link} from "react-scroll"
import { GoArrowRight } from "react-icons/go";

const Home = () => {
  const homeBlurb = `Welcome to my portfolio! I'm on the verge of graduating from West Chester 
  University, eagerly anticipating diving into the tech industry. My journey into programming 
  began with an engineering class early in my college career, sparking a curiosity that led me 
  to switch my major to computer science. While I've always had a knack for math, physics, and 
  chemistry, it was the unique blend of creativity and problem-solving in computer science that 
  truly captivated me.`

  return (
    <div name='home' className='w-full h-screen bg-gray-300 text-gray-900'>
      <div className='h-full w-[80%] ml-[10%]  flex flex-col justify-center 
      '>
        <h1 className='text-responsive-xl font-bold leading-none'>
          Andrew Lodise
        </h1>

        <h3 className=' text-responsive-md font-semibold leading-none'>
          Software Developer
        </h3>

        <p className=' text-responsive-sm lg:w-2/3 my-4 font-medium'>
        {homeBlurb}
        </p>

        <Link to="projects" spy={true} smooth={true} duration={500} 
        className='group md:text-button sm:text-md flex items-center self-start border-[1px] border-gray-900 
        cursor-pointer mt-2 hover:bg-gray-900 hover:text-gray-300
        pr-1'>
          <h4 className='px-2'>
            View Projects
          </h4>
          <GoArrowRight size={30} className='transition-transform group-hover:rotate-90 
          duration-300'/>
        </Link>
      </div>
      
      
    </div>
  )
}


export default Home
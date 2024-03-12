import React from 'react'
import {Link} from "react-scroll"
import { GoArrowRight } from "react-icons/go";

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-gray-300 text-gray-900'>
      <div className='h-full w-[80%] ml-[10%]  flex flex-col justify-center 
      pt-[10vh]'>
        <h1 className='text-responsive-xl font-bold leading-none'>
          Andrew Lodise
        </h1>

        <h3 className=' text-responsive-md font-semibold leading-none'>
          Software Developer
        </h3>

        <p className=' text-responsive-sm lg:w-2/3 my-4'>
        Welcome to my portfolio website. I am a soon-to-be graduate from West Chester University and
        I'm excited to enter the field. I was first introduced to programming during an engineering 
        class I took at the beginning of my college journey. The very next semester I switched my major 
        to computer science. Growing up in school I had a talents in subjects such math, physics, and 
        chemistry, but I also love building things. To me computer science is a creative process
        that you can improve at as you gain more and more knowledge surronding software development.
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
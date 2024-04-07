import React from 'react'
import {Link} from "react-scroll"
import { GoArrowRight } from "react-icons/go";
import Navbar from './navbar'

const Home = () => {
  const homeBlurb = `Welcome to my portfolio! I'm on the verge of graduating from West Chester 
  University, eagerly anticipating diving into the tech industry. My journey into programming 
  began with an engineering class early in my college career, sparking a curiosity that led me 
  to switch my major to computer science. While I've always had a knack for math, physics, and 
  chemistry, it was the unique blend of creativity and problem-solving in computer science that 
  truly captivated me.`

  return (
    <div name='home' className='w-full h-screen bg-gray-300 text-gray-900 flex flex-col'>
      <Navbar />

      <div className='h-full w-[80%] ml-[10%]  flex flex-col justify-center flex-grow'>
        <h1 className='text-[48px]/[54px] md:text-[72px]/[72px] font-bold'>
          Andrew Lodise
        </h1>

        <h3 className='text-[26px]/[36px] md:text-[46px]/[46px] font-semibold pb-4 lg:pb-8'>
          Front-end Software Developer
        </h3>

        <p className='text-[16px]/[24px] md:text-[24px]/[30px] lg:w-[80%] pb-4 lg:pb-8 font-semibold '>
        {homeBlurb}
        </p>

        <Link to="projects" spy={true} smooth={true} duration={500} 
        className='group flex items-center self-start text-[24px] md:text-[30px]
        cursor-pointer mt-2 pr-1 rounded-sm bg-blue-900 text-gray-300 hover:scale-[105%] duration-200'>
          <h4 className='px-2  '>
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
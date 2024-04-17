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
    <div name='home' className='w-full h-screen bg-primary text-quaternary flex flex-col items-center
    border-b-[1px] border-tertiary'>
      <Navbar />

      <div className='h-full w-[80%]  flex flex-col justify-center'>
        <h1 className='text-[48px]/[54px] lg:text-[72px]/[72px] font-bold'>
          Andrew Lodise
        </h1>

        <h3 className='text-[26px]/[36px] lg:text-[36px]/[46px] font-semibold pb-4 lg:pb-8'>
          Front-end Software Developer
        </h3>

        <p className='text-[16px]/[24px] lg:text-[24px]/[30px] lg:w-[80%] pb-4 lg:pb-8 font-hind font-medium'>
        {homeBlurb}
        </p>

        <Link to="projects" spy={true} smooth={true} duration={500} 
        className='group flex items-center self-start text-[16px] md:text-[24px]
        cursor-pointer mt-2 p-8 bg-tertiary text-[#0f0f32]  border-tertiary
        duration-300 border-[1px] shadow-basedSmallt rounded-md
        hover:shadow-basedHover  ease-in-out'>
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
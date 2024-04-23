import React from 'react'
import {Link} from "react-scroll"
import { GoArrowRight } from "react-icons/go";
import Navbar from './navbar'
//import profilePic from '../assets/pic-for-website-circle.jpg'

const Home = () => {
  const homeBlurb = `Welcome to my portfolio! I'm on the verge of graduating from West Chester 
  University, eagerly anticipating diving into the tech industry. While I've always had a knack for math, physics, and 
  chemistry, it was the unique blend of creativity and problem-solving in computer science that 
  truly captivated me.`

  return (
    <div name='home' className='w-full h-screen bg-primary text-quaternary flex flex-col items-center
    border-b-[1px] border-tertiary'>
      <Navbar />

      <div className='h-full w-[80%]  flex flex-col items-center pt-[6vh]'>
        {/*<img src={profilePic} alt="" 
        className='h-[30vh] rounded-full'/>*/}
        <h1 className='text-[36px]/[48px] xl:text-[72px]/[72px] font-bold text-center'>
          Andrew Lodise
        </h1>

        <h3 className='text-[20px]/[30px] xl:text-[36px]/[46px] font-semibold pb-4 lg:pb-8 text-center'>
          Software Developer
        </h3>

        <p className='text-[14px]/[20px] xl:text-[24px]/[30px] pb-4 lg:pb-8 font-hind font-medium'>
        {homeBlurb}
        </p>

        <Link to="projects" spy={true} smooth={true} duration={500} 
        className='group flex items-center self-start text-[16px] md:text-[24px]
        cursor-pointer mt-2 p-4 bg-tertiary text-[#0f0f32]  border-tertiary
        duration-300 border-[1px] rounded-md ease-in-out'>
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
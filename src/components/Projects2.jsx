import React from 'react'
import {Link as RouterLink} from 'react-router-dom'
import { Link as ScrollLink} from 'react-scroll'
import { MdKeyboardArrowUp } from 'react-icons/md'
import wtw1 from "../assets/wtw1.JPG"

export default function Projects2() {
  return (
    <section name='projects' className='w-full h-screen bg-gray-900 
     text-gray-300 pt-[1vh] flex-col'>
      <div className='h-full w-full flex flex-col items-center'>
        {/** title and up arrow */}
        <div name="header" className='w-full h-[10vh] flex items-center
        justify-between'>
          <h1 className='text-head ml-[10vw] '>
            Projects
          </h1>
          <div name="backtotop" className='absolute right-[6%] hover:bg-gray-300
        hover:text-gray-900 duration-200 cursor-pointer rounded-sm'>
            <ScrollLink to="home" spy={true} smooth={true} duration={500}
            className='flex items-center pl-1'>
              <h3>Back to home</h3>
              <MdKeyboardArrowUp size={40}/>
            </ScrollLink>
          </div>
        </div>

        <ul className='w-full flex-grow text-gray-900 flex flex-col items-center'>
          <RouterLink to='/Portfolio/whattowear'
          className=' bg-gray-300 rounded-sm w-[80%] h-[20%] mt-4 flex items-center justify-between hover:translate-y-2 duration-200'>
            <span className='text-2xl font-semibold text-center underline w-[20%] '>
              Outfit Recommender
            </span>
            <span className='text-lg w-[50%] '>
              Short Description of the project that creates some interest and makes the user want to click and learn more
            </span>
            <span className='h-full w-[20%] flex items-center justify-end'>
              <img src={wtw1} alt="project" className='h-full object-scale-down p-[2px]'/>
            </span>
          </RouterLink>
        </ul>

      </div>

      
    </section>
  )
}
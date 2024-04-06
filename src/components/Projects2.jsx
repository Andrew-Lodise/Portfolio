import React from 'react'
import { Link as RouterLink} from 'react-router-dom'
import { Link as ScrollLink} from 'react-scroll'
import { MdKeyboardArrowUp } from 'react-icons/md'
import { FaWandSparkles } from "react-icons/fa6"
import ProjectList from '../data/ProjectList'

export default function Projects2() {
  return (
    <section name='projects' className='w-full h-screen bg-gray-900 
     text-gray-300 pt-[1vh]'>
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
              <h3 className='hidden md:block'>Back to home</h3>
              <MdKeyboardArrowUp size={40}/>
            </ScrollLink>
          </div>
        </div>

        <ul className='w-full flex-grow max-h-[80%] text-gray-900 flex flex-col items-center justify-evenly gap-y-4'>
          {ProjectList.map(project => (
            <RouterLink to={`/Portfolio/Projects/${project.id}`} key={project.id}
            className=' rounded-sm w-[80%] h-[20%] mt-4 flex items-center justify-between 
            hover:scale-[98%] duration-200 text-gray-300 border-2 border-gray-300'>
              <span className='text-base md:text-2xl font-semibold text-center flex-grow max-w-[45%]'>
                {project.title}
              </span>
              <span className='text-lg w-[50%] hidden lg:flex px-4 justify-center text-center'>
                {project.shortDescription}
              </span>
              <span className='h-full w-[25%] flex items-center justify-end flex-grow p-[1px]'>
                <img src={project.images[0]} alt="project" className='h-full object-scale-down'/>
              </span>
            </RouterLink>
          ))}
        </ul>
        <footer className=' h-[10vh] w-full self-end'>
          <ScrollLink to="skills" spy={true} smooth={true} duration={500} 
          className='group text-button flex items-center border-[1px] border-gray-300 w-fit rounded-sm
          cursor-pointer ml-[10%] mt-2 hover:bg-gray-300 hover:text-gray-900 overflow-hidden z-10'>
            <h4 className='px-2'>
              View Skills
            </h4>
            <FaWandSparkles size={25} className='transition-transform group-hover:rotate-[495deg]
            duration-700 mx-2'/>
          </ScrollLink>
        </footer>
      </div>  
    </section>
  )
}
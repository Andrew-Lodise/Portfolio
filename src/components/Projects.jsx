import React, {useState} from 'react'
import {Link} from 'react-scroll'
import {MdKeyboardArrowUp} from "react-icons/md"
import ProjectList from "../data/ProjectList"
import {FaWandSparkles} from "react-icons/fa6"


const Projects = () => {
  const [projectIndex, setProjectIndex] = useState(0)

  return (
    <div name="projects" className='w-full h-screen text-gray-300  pt-[10vh] bg-gray-900'>
      <div name="page contents" className='w-full h-full flex flex-col'>
        <div name = "header" className='w-full h-[10vh] flex items-center
        justify-between '>
          <h1 name="title" className='text-head ml-[10vw] '>
            Projects
          </h1>

          <div name="backtotop" className=' hover:bg-gray-300 hover:text-gray-900
          duration-200 cursor-pointer mr-[6%] '>
            <Link to="home" spy={true} smooth={true} duration={500}>
              <MdKeyboardArrowUp size={40}/>
            </Link>
          </div>
        </div>

        <div name="project content" className='w-full h-[75%] flex flex-col '>
          <ul name="number menu" className='flex w-full justify-start 
          text-base gap-x-8 pl-[10vw]'>
            {ProjectList.map((_, index) => (
              <li key={index} className={`border-[1px] border-gray-300 
              cursor-pointer hover:bg-gray-300 hover:text-gray-900 duration-300
              text-xl size-[1.5rem] lg:size-[2.5rem] flex items-center justify-center
              ${projectIndex === index ? " bg-gray-300 text-gray-900" : ""}`}
              onClick={() => setProjectIndex(index)}>
                {index + 1}
              </li>
              ))}
          </ul>

          <div name='outter project contents' className='w-full h-full 
          pt-2 overflow-hidden'>
            <div name='inner project contents' className='w-full h-full 
            flex transition-transform duration-500 ease-in-out '
            style={{transform: `translateX(-${100 * projectIndex}%)`}}>
              {ProjectList.map(project => (
                <div key={project.id} className='w-full h-full flex-shrink-0 flex-grow-0
                flex justify-center '>
                  <div className='h-full w-[80%] flex flex-col'>
                    <h3 className='text-project-lg w-full text-center underline'>
                      {project.title}
                    </h3>

                    <div name="everything but title" className=' w-full h-full flex flex-col
                    lg:pt-2'>
                      <div className='w-full h-project-pic flex justify-evenly'>
                        <img src={project.images[0]} alt="project img" 
                        className='h-full border-[1px] border-gray-300'/>
                        <img src={project.images[1]} alt="project img" 
                        className='hidden md:block h-full border-[1px] border-gray-300'/>
                      </div>

                      <div name="tech" className='text-base md:text-project-tech w-full flex justify-center'>
                        <div className='flex w-full md:w-[50%] justify-evenly lg:py-2'>
                          {project.tech.map(skill => (
                            <div key={skill} className='font-semibold underline'>
                              {skill}
                            </div>
                          ))}
                        </div>
                      </div>

                      <div name="description" className='text-sm md:text-project-sm w-full flex justify-center'>
                        <div className='md:w-[80%] 2xl:w-[70%] leading-normal'>
                          {project.description}
                        </div>
                      </div>  

                      <div name="buttons" className='flex justify-center
                      text-project-button  gap-x-2 mt-auto mb-2'>
                        <a href={project.codeLink} className='border-[1px] border-gray-300
                        hover:text-gray-900 hover:bg-gray-300 text-center px-2'>
                          View Code
                        </a>
                        <a href={project.demoLink} className='border-[1px] border-gray-300
                        hover:text-gray-900 hover:bg-gray-300 text-center px-2'>
                          View Demo
                        </a>
                      </div>
                    </div>
                  </div>
                  
                </div>
              ))}
            </div>
          </div>
        </div>

        <Link to="skills" spy={true} smooth={true} duration={500} 
        className='group text-button flex items-center self-start border-[1px] border-gray-300 
        cursor-pointer ml-[10%] mt-2 hover:bg-gray-300 
        hover:text-gray-900 pr-1 mb-8 overflow-hidden z-10'>
          <h4 className='px-2'>
            View Skills
          </h4>
          <FaWandSparkles size={25} className='transition-transform group-hover:rotate-[495deg]
          duration-700'/>
        </Link>
      </div>
    </div>
  )
}

export default Projects
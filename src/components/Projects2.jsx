import React from 'react'
import ProjectItem from './ProjectItem'
import ProjectList from '../data/ProjectList'
import ImageCarousel from './ImageCarousel'
import {Link} from "react-scroll"
import { FaWandSparkles } from "react-icons/fa6";

const Projects2 = () => {
  return (
    <div name="projects" className='w-full h-screen bg-gray-900 text-gray-300 flex 
    flex-col items-center'>
      <h1 className='self-start text-6xl pt-[125px] pl-[10%]' >
        Projects
      </h1>
      {/** remake from ProjectItem.jsx */}
      <div className='mt-8 flex justify-center'>
        <div name="project-item" className='w-[96%] md:w-[80%]
        border-2 border-gray-300'>

          <h3 name="title" className='text-4xl text-center my-4 '>
            {ProjectList[0].title}
          </h3>
          <div name="otherThanTitle" className='flex flex-col lg:flex-row'>
            <div name="img" className='lg:w-1/2 flex justify-center
            '>
              <ImageCarousel images={ProjectList[0].images}
              className=''/>
            </div>

            <div className='lg:w-1/2 flex flex-col'>
              <div className='py-2 flex justify-evenly border-b-[1px] border-gray-300 text-md
              lg:text-xl'>
              {ProjectList[0].tech.map(item => (
                <span className='font-semibold'>
                  {item} 
                </span>
              ))}
              </div>
              <p className=' flex-grow flex items-center text-sm lg:text-lg xl:text-lg 
              h-[200px] px-2 overflow-hidden'>
                {ProjectList[0].description}
              </p>
            </div>
          </div>
          
        </div>
      </div>  

      <div className='text-4xl'>
        ••••••
      </div>

      <Link to="skills" spy={true} smooth={true} duration={500} 
      className='group text-2xl flex items-center self-start border-2 border-gray-300 
      cursor-pointer ml-[2%] md:ml-[10%] mt-2 text-gray-300 hover:bg-gray-300 
      hover:text-gray-900 pr-1 mb-8'>
        <h4 className='px-2'>
          View Skills
        </h4>
        <FaWandSparkles size={25} className='transition-transform group-hover:rotate-[495deg]
        duration-700'/>
      </Link>
      
    </div>
  )
}

export default Projects2
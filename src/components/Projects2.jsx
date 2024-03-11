import React from 'react'
import ProjectItem from './ProjectItem'
import {useState} from 'react'
import ProjectList from '../data/ProjectList'
import ImageCarousel from './ImageCarousel'
import {Link} from "react-scroll"
import { FaWandSparkles } from "react-icons/fa6";
import { FaAngleDoubleLeft, FaAngleDoubleRight } from "react-icons/fa";
import { MdKeyboardArrowUp } from "react-icons/md";


const Projects2 = () => {
  const [projectIndex, setProjectIndex] = useState(2)
  function showNextProject() {
    setProjectIndex(index => {
      if (index === ProjectList.length -1) return 0
      return index + 1
    })
  } 

  function showPrevProject() {
    setProjectIndex(index => {
      if (index === 0) return ProjectList.length - 1
      return index - 1
    })
  }

  return (
    <div name="projects" className='w-full h-screen bg-gray-900 text-gray-300 flex 
    flex-col items-center'>
      <h1 className='self-start text-6xl pt-[125px] pl-[10%]' >
        Projects
      </h1>

      <div name="backtotop" className='absolute mt-[135px] right-[6%] hover:bg-gray-300
      hover:text-gray-900 cursor-pointer'>
        <Link to="home" spy={true} smooth={true} duration={500}>
          <MdKeyboardArrowUp size={40}/>
        </Link>
      </div>

      <div className='w-full flex relative ease-in-out duration-500'
      style={{translate: `${-100 * projectIndex}%`}}>
      {ProjectList.map(project => (
          <ProjectItem 
          key={project}
          images={project.images}
          title={project.title}
          tech={project.tech}
          description={project.description}
          codeLink={project.codeLink}
          demoLink={project.demoLink}/>
        ))}
      </div>
      

      <div className='text-4xl text-gray-300 flex gap-x-2 mt-2'>
        <FaAngleDoubleLeft onClick={showPrevProject}
        className='border-[1px] border-gray-300 m-2 
        hover:text-gray-900 hover:bg-gray-300 duration-200 cursor-pointer'
        />
        <FaAngleDoubleRight onClick={showNextProject}
        className='border-[1px] border-gray-300 m-2 
        hover:text-gray-900 hover:bg-gray-300 duration-200 cursor-pointer'/>
      </div>

      <div name='footer' className='w-full h-[100px] mt-auto
      flex flex-col'>
        <Link to="skills" spy={true} smooth={true} duration={500} 
        className='group text-2xl flex items-center self-start border-[1px] border-gray-300 
        cursor-pointer ml-[2%] md:ml-[10%] mt-2 text-gray-300 hover:bg-gray-300 
        hover:text-gray-900 pr-1 mb-8'>
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

export default Projects2
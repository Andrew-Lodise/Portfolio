import React from 'react'
import { Link } from 'react-router-dom'
import ProjectList from '../data/ProjectList'

const ProjectItem = (props) => {
  let project = ProjectList[props.projectId]

  return (
    <Link to={`/Portfolio/projects/${props.projectId}`} 
    className='size-full text-center rounded-md flex flex-col items-center
   text-secondary hover:scale-[102%] duration-200 '>

    <div className='w-full bg-[#272799] pt-8 px-4 rounded-md'>
      <img src={project.images[0]} alt="" 
      className='w-full rounded-t-md'/>
    </div>
      

      <div name="title-bar" className='w-full flex'>

        <div className=' flex-grow grid grid-cols-1 grid-rows-2 px-4'>
          <div></div>
          <div className='border-t-[1px] border-[#272799] opacity-100'></div>
        </div>

        <h3 className='text-[22px] font-bold'>
          {project.title}
        </h3>

        <div className=' flex-grow grid grid-cols-1 grid-rows-2 px-4'>
          <div></div>
          <div className='border-t-[1px] border-[#272799] opacity-100'></div>
        </div>

      </div>

      <div>

      </div>
      
    </Link>
  )
}

export default ProjectItem
import React from 'react'
import { Link } from 'react-router-dom'
import ProjectList from '../data/ProjectList'

const ProjectItem = (props) => {

  const project = ProjectList[props.projectId]
  const techLength = project.tech.length;

  return (
    <Link to={`/Portfolio/projects/${props.projectId}`} 
    className='size-full  hover:scale-[102%] text-center relative
    duration-300 ease-in-out rounded-md flex flex-col items-center justify-center
    text-2xl sm:text-3xl font-medium  bg-tertiary text-primary'>
      <p>
        {project.title}{}
      </p>
      <div className={`absolute bottom-2 sm:grid grid-rows-1 grid-cols-${techLength} text-sm w-full gap-2 px-2 hidden`}>
        {project.tech.map(item => (
          <p key={item} className='border-black border-[1px] rounded-md'>
            {item}
          </p>
        ))}
      </div>
    </Link>
  )
}

export default ProjectItem
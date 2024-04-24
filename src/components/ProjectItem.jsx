import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import ProjectList from '../data/ProjectList'

const ProjectItem = (props) => {

  useEffect(() => {
    
  }, []);

  let project = ProjectList[props.projectId]

  return (
    <Link to={`/Portfolio/projects/${props.projectId}`} 
    className='size-full  hover:scale-[102%] text-center
    duration-300 ease-in-out rounded-md flex flex-col items-center justify-center
    text-2xl sm:text-3xl font-medium  bg-tertiary text-primary'>
      <p>
        {project.title}
      </p>
    </Link>
  )
}

export default ProjectItem
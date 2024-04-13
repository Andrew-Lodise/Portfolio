import React from 'react'
import { Link } from 'react-router-dom'

const ProjectItem = (props) => {
  return (
    <Link to={`/Portfolio/projects/${props.projectId}`} 
    className='size-full border-secondary hover:border-tertiary border-[1px] shadow-basedSmall hover:scale-[102%]
    duration-200 ease-in-out rounded-md hover:shadow-basedHover flex items-center justify-center
    text-2xl sm:text-3xl font-medium hover:text-tertiary'>
      <p>
        {props.title}
      </p>
       
    </Link>
    
    
  )
}

export default ProjectItem
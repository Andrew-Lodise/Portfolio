import React from 'react'
import ProjectList from '../data/ProjectList'
import { Link } from 'react-router-dom'
import ProjectItem from './ProjectItem'

const Projects3 = () => {
  return (
    <div name='projects' className='w-full h-screen bg-primary text-secondary 
    flex flex-col items-center justify-center'>
      <div className='h-[80vh] w-full max-w-[1200px] grid grid-rows-2 grid-cols-2 gap-8'>
        {ProjectList.map(project => (
          <ProjectItem key={project.id} projectId={project.id} name={project.name} className='size-full bg-blue-400'/>
        ))}
        
      </div>

    </div>
  )
}

export default Projects3
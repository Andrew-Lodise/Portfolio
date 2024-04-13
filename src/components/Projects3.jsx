import React from 'react'
import ProjectList from '../data/ProjectList'
import { Link } from 'react-router-dom'
import ProjectItem from './ProjectItem'
import Break from './Break'

const Projects3 = () => {
  return (
    <div name='projects' className='w-full h-screen bg-primary text-secondary 
    flex flex-col items-center justify-center'>
      <div className={`h-[80vh] w-full max-w-[1200px] grid md:grid-rows-2 md:grid-cols-2 gap-8 grid-rows-${ProjectList.length}
      p-4`}>
        {ProjectList.map(project => (
          <ProjectItem key={project.id} projectId={project.id} title={project.title} className='size-full bg-blue-400'/>
        ))}
        
      </div>
      <Break />

    </div>
  )
}

export default Projects3
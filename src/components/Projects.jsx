import React from 'react'
import Project from '../data/Project'
import ProjectItem from './ProjectItem'

const Projects2 = () => {
  return (
    <div>
      <h1 className='text-6xl font-greatVibes text-blue-300 text-center bg-gray-800 pt-5 border-t-4 border-gray-900'>Projects</h1>
      <div className=' flex felx-col md: flex:row items-center justify-center bg-gray-800 py-4'>
        <div className=' gird grid cols-1 md:grid-cols-2 gap-4 lg:gap-12' >
          {Project.map(project => (
            <ProjectItem 
              imgUrl={project.imgUrl}
              title={project.title}
              tech={project.tech}
              codeLink={project.codeLink}
              demoLink={project.demoLink}/>
            ))}
        </div>
      </div>
    </div>
    
  )
}

export default Projects2
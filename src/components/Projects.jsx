import React from 'react'
import projectList from '../data/Project'
import ProjectItem from './ProjectItem'

const Projects = () => {
  return (
    <div name='projects'>
      <h1 className=' text-[60px] md:text-[80px] lg:text-[90px] mb-[-20px] font-greatVibes text-blue-300 text-center bg-gray-800 pt-5 border-t-4 
      border-gray-900'>
        Projects
      </h1>
      <div className=' flex felx-col md: flex:row items-center justify-center bg-gray-800 pt-4 pb-8'>
        <div className=' gird grid cols-1 md:grid-cols-2 gap-4 lg:gap-12' >
          {projectList.map(project => (
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

export default Projects
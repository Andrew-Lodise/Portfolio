import React from 'react'
import ProjectItem from './ProjectItem'
import ProjectList from '../data/ProjectList'

const Projects = () => {
  return (
    <div name="projects" className='w-full h-screen bg-gray-800 text-white flex flex-col
    items-center'>
      
      <div name='title/heading' className='w-full border-t-4 border-gray-900'>
        <h1 className='text-[60px] md:text-[80px] lg:text-[90px] font-greatVibes 
        pt-4 text-center'>
          Projects
        </h1>
      </div>

      <div className='w-full h-full flex bg-blue-900 relative'>
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
    </div>
  )
}

export default Projects
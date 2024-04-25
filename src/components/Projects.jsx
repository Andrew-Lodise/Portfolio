import React from 'react'
import ProjectList from '../data/ProjectList'
import ProjectItem from './ProjectItem'

const Projects = () => {
  return (
    <section name='projects' className='w-full h-screen bg-primary text-secondary 
    flex flex-col items-center justify-center border-b-[1px] border-tertiary'>
      <h1 className=' w-full max-w-[1200px] text-[16px]/[24px] lg:text-[24px]/[30px]
      pl-16 '>
        Explore the projects I've created
      </h1>
      <div className={`h-[80vh] w-full max-w-[1200px] grid md:grid-rows-${Math.ceil(ProjectList.length/2)} 
      md:grid-cols-2 gap-16 grid-rows-${ProjectList.length/2} px-16 py-8`}>
        {ProjectList.map(project => (
          <ProjectItem key={project.id} projectId={project.id} title={project.title} />
        ))}
        
      </div>

    </section>
  )
}

export default Projects
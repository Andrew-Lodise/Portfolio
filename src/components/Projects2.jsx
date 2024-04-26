import React from 'react';
import ProjectList from '../data/ProjectList';
import ProjectItem from './ProjectItem';

const Projects2 = () => {
  return (
    <section name="projects" className='bg-primary w-full min-h-screen text-secondary
    flex flex-col md:px-24 px-6 py-24 items-center'>
      <div className='max-w-[1000px] w-full h-full'>
        <div name='header' className='flex w-full'>
          <div className=' flex-grow grid grid-cols-1 grid-rows-2 px-4'>
            <div></div>
            <div className='border-t-[1px] border-secondary opacity-40'></div>
          </div>
          <h1 className='text-[36px] md:text-[56px] font-black mb-4'>
            Projects<span className='text-[#272799]'>.</span>
          </h1>
        </div>

        <div className='w-full grid grid-flow-row grid-cols-1 md:grid-cols-2 gap-4'>
          {ProjectList.map(project => {
            return (
              <ProjectItem key={project.id} projectId={project.id} />
            )
          })}
          
        </div>
      </div>
    </section>
  )
}

export default Projects2 
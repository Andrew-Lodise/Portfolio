import React from 'react'
import ImageCarousel from './ImageCarousel'

const ProjectItem = ({title, images, tech, description, codeLink, demoLink}) => {
  return (
    <div className='mt-4 flex justify-evenly w-full flex-shrink-0'>
        <div name="project-item" className='w-full
        '>
          <h3 name="title" className='text-2xl lg:text-4xl text-center mt-2 '>
            {title}
          </h3>
          <div name="otherThanTitle" className='flex flex-col md:flex-row w-full'>
            <div name="img" className='md:w-1/2 border-[1px] border-gray-300 flex justify-center'>
              <ImageCarousel images={images} />
            </div>

            <div className='md:w-1/2 flex flex-col '>
              <div className='py-2 flex justify-evenly  border-gray-300 text-md
              lg:text-xl'>
              {tech.map(item => (
                <span className='font-semibold'>
                  {item} 
                </span>
              ))}
              </div>
              <p className=' flex-grow flex text-xs lg:text-lg xl:text-lg 
              h-[120px] md:max-h-none px-2 overflow-hidden lg:items-center'>
                {description}
              </p>

              <div className='w-full flex justify-center gap-x-[10%] lg:text-xl mt-2'>
                <a href={codeLink} className='border-[1px] border-gray-300
                px-2 hover:text-gray-900 hover:bg-gray-300 duration-200'>
                  View Code
                </a>
                <a href={demoLink} className='border-[1px] border-gray-300
                px-2 hover:text-gray-900 hover:bg-gray-300 duration-200'>
                  View Demo
                </a>
              </div>
            </div>
          </div>
        </div>
      </div> 
  )
}

export default ProjectItem
import React from 'react'
import ImageCarousel from './ImageCarousel'

const ProjectItem = ({title, images, tech, description, codeLink, demoLink}) => {
  return (
    <div name="project container" className='border-2 border-gray-300
      m-2 md:w-[90%] lg:w-[70%] mt-[40px] '>
        <h1 name="title" className='text-center text-4xl
        md:text-4xl lg:text-5xl md:py-2'>
          {title}        
          {/**What to Wear title */}
        </h1>

        <div name="content" className='flex flex-col md:flex-row'>
          <div name="images/col1" className='w-[100%] md:w-1/2 h-full flex flex-col
          items-center justify-center z-0 '>
            <ImageCarousel images={images}/>
          </div>

          <div name="text" className='w-[100%] md:w-1/2 flex flex-col justify-between'>  
            <div name="technologies" className='flex justify-evenly border-b-[1px]
            border-gray-300 py-2 lg:text-lg'>
              {tech.map(item => (
              <span className='border-2 border-gray-300 px-1 '>
                {item}
              </span>
            ))}
            </div>   

            <p name="description" className='text-lg md:text-xl lg:text-2xl px-4 '>
              {description}
            </p>

            <div name="buttons" className='text-xl flex flex-col border-t-[1px]
            border-gray-300 text-blue-300 duration-200 font-semibold lg:text-2xl'>
              <ul className='flex justify-evenly py-2'>
                <li className='hover:scale-125 duration-200'>
                  <a href={codeLink} target='_' 
                  className='px-2 underline underline-offset-2'> 
                    View Code {/** codeLink */}
                  </a>
                </li>
                <li className='hover:scale-125 duration-200'>
                  <a href={demoLink} target='_' 
                  className='px-2 underline underline-offset-2'> 
                    View Demo {/** demoLink */}
                  </a>
                </li>
              </ul>
            </div> {/** buttons div */}
          </div> {/** text div */}
        </div> {/** content container */}
      </div>
  )
}

export default ProjectItem
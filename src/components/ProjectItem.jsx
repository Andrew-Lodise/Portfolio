import React from 'react'

const ProjectItem = ({title, imgUrl, tech, codeLink, demoLink}) => {
  return (
     /** entire item */
    <div className='border-2 border-white rounded-md overflow-hidden w-[330px] h-[360px] shadow-lg
     shadow-black'>
      <h3 className='text-lg md:text-xl font-semibold text-center text-white'>{title}</h3>
      <div className='flex flex-col items-center'>
        <img src={imgUrl} 
        alt="Project" 
        className='w-[99%] h-[240px] object-cover'/>
      </div>
        <div className='w-full p-2 '>
          <p className=' flex flex-wrap gap-2 flex-row items-center justify-center text-xs text-blue-300 md:text-sm '>
            {tech.map(item => (
              <span className='inline-block px-2 font-semibold border-2 border-blue-300 rounded-md'>
                {item}
              </span>
            ))}
          </p>
        </div>
        <div>
          <ul className='flex flex-row items-center justify-evenly border-t-2 py-3  border-white'>
            <li>
              <a href={codeLink} target='_' className='px-2 py-1 border-white border-2 font-semibold rounded-full 
              text-sm text-white  hover:border-blue-300 hover:text-blue-300 duration-200'> View Code </a>
            </li>
            <li>
            <a href={demoLink} target='_' className='px-2 py-1 border-white border-2 font-semibold rounded-full 
            text-sm text-white hover:border-blue-300 hover:text-blue-300 duration-200'> View Demo </a>
            </li>
          </ul>
        </div>
    </div>
    
  )
}

export default ProjectItem
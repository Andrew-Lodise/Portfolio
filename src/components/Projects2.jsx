import React from 'react'

const Projects2 = () => {
  return (
    <div name='contact' className='w-full bg-gray-800' >
        {/** Title container */}
        <div name='title div' className=' '>
            <h1 className='text-[60px] md:text-[80px] lg:text-[90px] font-greatVibes 
            text-blue-300  text-center border-t-4 border-gray-900'>
            Projects
            </h1>
        </div>

        <div name="content container" className='flex flex-col w-auto items-center align-middle 
        bg-gray-800' >
          <div className='border-2 border-white rounded-md overflow-hidden w-[400px] h-[400px] shadow-lg
     shadow-black'>
      <h3 className='text-lg md:text-xl font-semibold text-center text-white'>Example Title</h3>
      <div className='flex flex-col items-center'>
        <img src="public/assets/pup1.PNG" 
        alt="Project" 
        className='w-[99%] h-[240px] object-cover'/>
      </div>
        <div className='w-full p-2 '>
          <p className=' flex flex-wrap gap-2 flex-row items-center justify-center text-xs text-blue-300 md:text-sm '>
              <span className='inline-block px-2 font-semibold border-2 border-blue-300 rounded-md'>
                Example Item
              </span>
          </p>
        </div>
        <div>
          <ul className='flex flex-row items-center justify-evenly border-t-2 py-3  border-white'>
            <li>
              <a href="" target='_' className='px-2 py-1 border-white border-2 font-semibold rounded-full 
              text-sm text-white  hover:border-blue-300 hover:text-blue-300 duration-200'> View Code </a>
            </li>
            <li>
            <a href='' target='_' className='px-2 py-1 border-white border-2 font-semibold rounded-full 
            text-sm text-white hover:border-blue-300 hover:text-blue-300 duration-200'> View Demo </a>
            </li>
          </ul>
        </div>
    </div>
          
  
        </div>
    </div>
  )
}

export default Projects2
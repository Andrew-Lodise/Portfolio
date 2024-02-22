import {React, useState} from 'react'
import whattowear from "../assets/whattowearpic.PNG"


const Projects = () => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div className='w-full h-1600px bg-gray-300 flex flex-col justify-center items-center space-y-5'>
      {/* Title */}
      <div className='w-[100%] h-[100px] bg-gray-400 flex items-center justify-center text-[80px] font-greatVibes mb-[-10px] '>
        Projects
      </div>
      {/** grid container */}
      <div className=' w-[300px] h-[1200px] md:w-[600px] md:h-[600px] bg-gray-900 flex flex-wrap p-2 gap-2'>{/** grid grid-cols-1 grid-rows-4 md:grid-cols-2 md:grid-rows-2 */}
        {/** project 1 */}
        <div className=' w-[100%] md:w-[50%] h-300 md:h-[50%] rounded-lg bg-white text-4xl border-gray-600 border-2'
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}>
          {isHovered ? 
          /** this shows when mouse is hovering parent div */
          <div>
            { /** flex container for projects */}
            <ul className=' h-[289px] w-[100%] rounded-md flex flex-col items-center justify-center bg-pink-200 gap-[65px]'>
              <li>
                <a href="/" className=' border-2 rounded-full border-black px-5'> Code </a>
              </li>
              <li>
                <a href="/" className=' border-2 rounded-full border-black px-5'> Demo </a>
              </li>
            </ul>
          </div>
          
          : 
          /** this shows when mouse is NOT hovering parent div*/
          <div className='flex flex-col'>
            <h3 className='text-center text-xl bg-gray-800 rounded-t-md text-white text-semibold'>
              What to Wear
            </h3>
            <img src={whattowear} alt="application" className='rounded-b-lg h-[262px]' />
          </div>}

        </div>
        <div className='w-[100%] h-[100%] rounded-lg bg-red-400'>
          cap2
        </div>
        <div className=' w-[100%] h-[100%] rounded-lg bg-blue-400'>
          cap3
        </div>
        <div className=' w-[100%] h-[100%] rounded-lg bg-purple-400'>
          cap4
        </div>
      </div>
    </div>
  )
}

export default Projects
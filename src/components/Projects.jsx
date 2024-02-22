import {React, useState} from 'react'
import whattowear from "../assets/whattowearpic.PNG"


const Projects = () => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div className='w-full h-1600px bg-gray-800 flex flex-col justify-center items-center space-y-5'>
      {/* Title */}
      <div className='w-[100%] h-[100px] bg-gray-400 flex items-center justify-center text-[80px] font-greatVibes mb-[-10px] '>
        Projects
      </div>
      {/** grid container */}
      <div className=' w-[500px] h-[1200px] md:w-[600px] md:h-[1200px] bg-gray-900 flex flex-wrap p-2 gap-2'>{/** grid grid-cols-1 grid-rows-4 md:grid-cols-2 md:grid-rows-2 */}

        {/** project 1 */}
        <div className=' w-[100%] md:w-[100%] h-[617px] md:h-[699px] rounded-lg bg-white text-4xl border-gray-600 border-2'>
            { /** flex container for project */}
          <div className='flex flex-col'>
            {/** title/name of project */}
            <h3 className='text-center text-4xl bg-gray-800 rounded-t-md text-white text-semibold'>
              What to Wear
            </h3>
            {/** description of project */}
            <p className='text-lg px-4 font-semibold bg-gray-300'>
              description of the projects I'll put more in later Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque, optio reiciendis. 
            </p>
            {/** image */}
            <div className='flex w-full bg-gray-800 justify-center py-2'>
              <img src={whattowear} alt="application" className='w-[95%] border-2 border-gray-200 rounded-lg'/>
            </div>           
            {/** technologies */}
            <div className='flex justify-between py-1 bg-gray-900 text-white'>
              <p className='text-lg font-semibold px-2'>
                Tech:
              </p>
              <ul className='flex text-lg justify-evenly w-[400px] '>
                <li className='border-2 rounded-full border-white px-2 hover:border-blue-300 hover:text-blue-300 duration-200'>
                  <a href="/">Python </a> 
                </li>
                <li className=' border-2 rounded-full border-white px-2 hover:border-blue-300 hover:text-blue-300 duration-200'>
                  <a href="/">Pandas</a>
                </li>
                <li className=' border-2 rounded-full border-white px-2 hover:border-blue-300 hover:text-blue-300 duration-200'>
                  <a href="/">REST Api</a>
                </li>
              </ul>
            </div>
            {/** bottom buttons */}
            <div className='flex justify-between border-t-2 border-white py-1 rounded-b-md bg-gray-900 text-white'>
              <p className='text-lg font-semibold px-2'>See More: </p>
              <ul className='flex  justify-evenly w-[370px] text-xl'>
                <li>
                  <a href="/" className='border-2 border-white rounded-full px-2 hover:border-blue-300 hover:text-blue-300 duration-200'>Code</a>
                </li>
                <li>
                  <a href="/" className='border-2 border-white rounded-full px-2 hover:border-blue-300 hover:text-blue-300 duration-200'>Demo</a>
                </li>
              </ul>
            </div>    
          </div>
        </div>

        {/** project 1 */}
        <div className=' w-[100%] md:w-[100%] h-[617px] md:h-[699px] rounded-lg bg-white text-4xl border-gray-600 border-2'>
            { /** flex container for project */}
          <div className='flex flex-col'>

            {/** title/name of project */}
            <h3 className='text-center text-4xl bg-gray-800 rounded-t-md text-white text-semibold'>
              What to Wear
            </h3>

            {/** description of project */}
            <p className='text-lg px-4 font-semibold bg-gray-300'>
              description of the projects I'll put more in later Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque, optio reiciendis. 
            </p>

            {/** image */}
            <div className='flex w-full bg-gray-800 justify-center py-2'>
              <img src={whattowear} alt="application" className='w-[95%] border-gray-900 rounded-lg'/>
            </div>
            

            {/** technologies */}
            <div className='flex justify-between py-1 bg-gray-900 text-white'>
              <p className='text-lg font-semibold px-2'>
                Tech:
              </p>
              <ul className='flex text-lg justify-evenly w-[400px] '>
                <li className='border-2 rounded-full border-white px-2 hover:border-blue-300 hover:text-blue-300 duration-200'>
                  <a href="/">Python </a> 
                </li>
                <li className=' border-2 rounded-full border-white px-2 hover:border-blue-300 hover:text-blue-300 duration-200'>
                  <a href="/">Pandas</a>
                </li>
                <li className=' border-2 rounded-full border-white px-2 hover:border-blue-300 hover:text-blue-300 duration-200'>
                  <a href="/">REST Api</a>
                </li>
              </ul>
            </div>

            {/** bottom buttons */}
            <div className='flex justify-between border-t-2 border-white py-1 rounded-b-md bg-gray-900 text-white'>
              <p className='text-lg font-semibold px-2'>See More: </p>
              <ul className='flex  justify-evenly w-[370px] text-xl'>
                <li>
                  <a href="/" className='border-2 border-white rounded-full px-2 hover:border-blue-300 hover:text-blue-300 duration-200'>Code</a>
                </li>
                <li>
                  <a href="/" className='border-2 border-white rounded-full px-2 hover:border-blue-300 hover:text-blue-300 duration-200'>Demo</a>
                </li>
              </ul>
            </div>
            
          </div>
        </div>


      </div>
    </div>
  )
}

export default Projects
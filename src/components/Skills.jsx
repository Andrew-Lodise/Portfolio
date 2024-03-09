import React from 'react'
import { FaGithubSquare, FaDocker, FaPython, FaJava, FaReact, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { SiKubernetes } from "react-icons/si";
import { DiHaskell, DiMongodb, DiMysql } from "react-icons/di";
import { SiCplusplus } from "react-icons/si";
import { SiC, SiTailwindcss  } from "react-icons/si";
import { TbBrandJavascript } from "react-icons/tb";
import { Tooltip } from 'react-tooltip';
import { CiServer } from "react-icons/ci";


const Skills = () => {
  return (
    <div name='skills' className='w-full text-gray-900 bg-gray-300 flex flex-col 
    items-center'>
      {/** Title container */}
      <div name='title div' className='w-[90%]'>
        <h1 className='text-6xl font-roboto pt-[50px] pb-[30px]'>
          Skills
        </h1>
      </div>
      {/** content container */}
      <div name="content div" className='flex flex-col items-center align-middle w-full
      border-t-[1px] border-gray-900'>

          <div className='w-[100%] lg:w-[70%]'>          
            <h1 className='text-2xl md:text-3xl lg:text-4xl font-semibold pl-[5%] pt-2'>
            General Languages
            </h1>
            <div className='flex w-full pt-4'>
              <div className='flex flex-col w-1/2 items-center '>
                <h1 className='text-lg md:text-xl lg:text-2xl text-center font-semibold 
                border-b-[1px] w-full border-gray-900'>
                  Most Experience
                </h1>
                <ul className='flex flex-col items-center text-xl lg:text-2xl gap-y-2 pt-2'>
                  <li className='flex flex-col items-center hover:scale-110 text-blue-900 
                  font-semibold'
                  data-tooltip-id="pythontt">
                    <FaPython size={50}/>
                    Python
                  </li>
                  <Tooltip id="pythontt" place="bottom" 
                  content="The language I used for my personal projects"/>
                  <li className='flex flex-col items-center hover:scale-110 text-red-900 font-semibold'
                  data-tooltip-id="javatt">
                    <FaJava size={50}/>
                    Java
                  </li>
                  <Tooltip id="javatt" place="bottom" 
                  content="The laguage I was taught in school"/>
                </ul>
              </div>

              <div className='flex flex-col border-l-[1px] border-gray-900 items-center w-1/2'>
                <h1 className='text-lg md:text-xl lg:text-2xl text-center font-semibold 
                border-b-[1px] w-full border-gray-900'>
                  Some Experience
                </h1>
                <ul className=' flex flex-col items-center text-xl lg:text-2xl justify-evenly h-full
                hover:scale-110'
                data-tooltip-id="somett" >
                  <li className='flex items-center text-[#A08FB8]'>
                    Haskell <DiHaskell size={45} className='inline '/>
                  </li>
                  <li>
                    C <SiC size={30} className='inline'/>
                  </li>
                  <li className='text-xl lg:text-2xl flex items-center text-[#007ACC]'>
                    C++ <SiCplusplus size={35} className='inline'/>
                  </li>
                </ul>
                <Tooltip id="somett" place="bottom" 
                  content="Limited experience, Only used in 1 or 2 classes"/>
              </div>
            </div>
          </div>

          {/**  Web Dev */}
          <div className='p-4 w-[95%] md:w-[80%] lg:w-[70%] my-4 border-2 border-gray-900
          bg-gray-300 lg:max-w-[1000px]'>
            <h1 className='text-3xl md:text-4xl lg:text-5xl text-center font-bold'>
            WebDev
            </h1>
            <div className='flex py-2 w-full'>
              <div className='flex flex-col w-1/3 items-center'>
                <h1 className='text-xl md:text-2xl lg:text-3xl text-center font-semibold 
                border-b-[1px] border-gray-900 w-full'>
                  General
                </h1>
                <ul className='flex flex-col items-center text-xl lg:text-2xl gap-y-2 py-2
                bg-gray-900 w-full h-[200px] justify-evenly'>
                  <li className='flex items-center text-[#FF7F50]'>
                    Html <FaHtml5 size={40}className='inline '/>
                  </li>
                  <li className='flex items-center text-[#1572B6]'>
                    Css <FaCss3Alt size={40}className='inline'/>
                  </li>
                  <li li className='flex items-center text-[#F7DF1E]'>
                    JS <TbBrandJavascript size={40}className='inline'/>
                  </li>
                </ul>
              </div>

              <div className='flex flex-col border-x-[1px] border-gray-900 items-center w-1/3'>
                <h1 className='text-xl md:text-2xl lg:text-3xl text-center font-semibold 
                border-b-[1px] border-gray-900 w-full'>
                  Front End
                </h1>
                <ul className=' flex flex-col items-center text-xl lg:text-2xl pt-2
                bg-gray-900 w-full py-2 h-[200px] justify-evenly border-x-[1px]
                border-gray-300'>
                  <li className='flex flex-col items-center text-[#61DAFB]'>
                    <FaReact size={40}/>
                    React
                  </li>
                  <li className='flex flex-col items-center text-[#38B2AC]'>
                    <SiTailwindcss size={40}className=''/>
                    Tailwind
                  </li>
                </ul>
              </div>

              <div className='flex flex-col w-1/3 items-center'>
                <h1 className='text-xl md:text-2xl lg:text-3xl text-center font-semibold 
                border-b-[1px] border-gray-900 w-full'>
                  Back End
                </h1>
                <ul className='flex flex-col items-center text-xl lg:text-2xl
                justify-evenly bg-gray-900 w-full h-[200px]'>
                  <li className='text-sm md:text-xl lg:text-2xl flex items-center text-[#7AB35C]'>
                    Express <CiServer size={30}/>
                  </li>
                  <li className='text-sm md:text-xl lg:text-2xl flex items-center text-[#008BAC]'>
                    SQL <DiMysql size={40}/>
                  </li>
                  <li className='text-sm md:text-xl lg:text-2xl text-[#d1d5db]'>
                    MongoDB <DiMongodb size={30}/>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/** DevOps Tools */}
          <div className='p-4 w-[95%] md:w-[80%] lg:w-[70%] my-4 text-white border-2 border-white rounded-lg
           shadow-lg shadow-gray-950 bg-gray-900 lg:max-w-[1000px]'>
            <h1 className='text-3xl md:text-4xl lg:text-5xl text-center font-bold'>
            DevOps Tools
            </h1>
            <ul className='flex justify-evenly text-xl md:text-2xl lg:text-3xl'>
              <li className='rounded-md p-2 m-2 flex flex-col items-center min-w-[25%] md:min-w-1/3 '>
                <FaGithubSquare size={70} color='#f5f5f5'/>
                <p>Git</p>
              </li>
              <li className=' rounded-md p-2 m-2 flex flex-col items-center min-w-1/3 '>
                <FaDocker size={70} color='#0db7ed' />
                <p>Docker</p>
              </li>
              <li className=' rounded-md p-2 m-2 flex flex-col items-center min-w-1/3 '>
                <SiKubernetes size={70} color='#3970e4'/>
                <p>Kubernetes</p>
              </li>
            </ul>
          </div>
      </div>
    </div>
  )
}

export default Skills
import React from 'react'
import { FaGithubSquare, FaDocker, FaPython, FaJava, FaReact } from "react-icons/fa";
import { SiKubernetes } from "react-icons/si";
import { DiHaskell, DiMongodb, DiMysql } from "react-icons/di";
import { SiCplusplus } from "react-icons/si";
import { SiC, SiTailwindcss  } from "react-icons/si";
import { CiServer } from "react-icons/ci";

const Skills2 = () => {

  return (
    <div name="skills" className='w-full h-screen bg-gray-300 text-gray-900
    flex flex-col items-center'>
      <h1 className='self-start text-6xl pt-[125px] pl-[10%]'>
        Skills
      </h1>

      <div className='bg-green-200 w-[300px] h-[300px] relative'>
        <div className='absolute top-[50%] translate-y-[-50%] left-2 bg-black/20 cursor-pointer'>
          <FaPython size={30}/>
        </div>
      </div>

      <div name="general languages" className='flex lg:w-[80%] w-full justify-between 
      mt-[30px]'>
        <div className='border-2 size-[90px] md:size-[150px] border-gray-900 flex flex-col 
        items-center justify-center text-3xl md:text-6xl hover:bg-gray-900 
        hover:text-gray-300 cursor-default'>
          <FaPython/>
          <h3 className='text-lg md:text-2xl'>
            Python
          </h3>
        </div>
        <div className='border-2 size-[90px] md:size-[150px] border-gray-900 flex flex-col 
        items-center justify-center text-3xl md:text-6xl hover:bg-gray-900 
        hover:text-gray-300 cursor-default'>
          <FaJava/>
          <h3 className='text-lg md:text-2xl'>
            Java
          </h3>
        </div>
        <div className='border-2 size-[90px] md:size-[150px] border-gray-900 flex flex-col 
        items-center justify-center text-3xl md:text-6xl hover:bg-gray-900 
        hover:text-gray-300 cursor-default'>
          <DiHaskell/>
          <h3 className='text-lg md:text-2xl'>
            Haskell
          </h3>
        </div>
        <div className='border-2 size-[90px] md:size-[150px] border-gray-900 flex flex-col 
        items-center justify-center text-3xl md:text-6xl hover:bg-gray-900 
        hover:text-gray-300 cursor-default'>
          <SiCplusplus/>
          <h3 className='text-lg md:text-2xl'>
            C++
          </h3>
        </div>
        <div className='border-2 size-[90px] md:size-[150px] border-gray-900 flex flex-col 
        items-center justify-center text-3xl md:text-6xl hover:bg-gray-900 
        hover:text-gray-300 cursor-default'>
         
          <SiC/>
          <h3 className='text-lg md:text-2xl'>
            C
          </h3>
        </div>
      </div>

      <div name="webdev" className='flex lg:w-[80%] w-full justify-between mt-[50px]'>
        <div className='border-2 size-[90px] md:size-[150px] border-gray-900 flex flex-col 
        items-center justify-center text-3xl md:text-6xl hover:bg-gray-900 
        hover:text-gray-300 cursor-default'>
          <FaReact/>
          <h3 className='text-lg md:text-2xl'>
            React
          </h3>
        </div>
        <div className='border-2 size-[90px] md:size-[150px] border-gray-900 flex flex-col 
        items-center justify-center text-3xl md:text-6xl hover:bg-gray-900 
        hover:text-gray-300 cursor-default'>
          <SiTailwindcss/>
          <h3 className='text-lg md:text-2xl'>
            Tailwind
          </h3>
        </div>
        <div className='border-2 size-[90px] md:size-[150px] border-gray-900 flex flex-col 
        items-center justify-center text-3xl md:text-6xl hover:bg-gray-900 
        hover:text-gray-300 cursor-default'>
          <CiServer/>
          <h3 className='text-lg md:text-2xl'>
            Express
          </h3>
        </div>
        <div className='border-2 size-[90px] md:size-[150px] border-gray-900 flex flex-col 
        items-center justify-center text-3xl md:text-6xl hover:bg-gray-900 
        hover:text-gray-300 cursor-default'>
          <DiMysql/>
          <h3 className='text-lg md:text-2xl'>
            SQL
          </h3>
        </div>
        <div className='border-2 size-[90px] md:size-[150px] border-gray-900 flex flex-col 
        items-center justify-center text-3xl md:text-6xl hover:bg-gray-900 
        hover:text-gray-300 cursor-default'>
         
          <DiMongodb/>
          <h3 className='text-lg md:text-2xl'>
            MongoDB
          </h3>
        </div>
      </div>

      <div name="devops" className='flex lg:w-[60%] w-full justify-between mt-[50px]'>
        <div className='border-2 size-[90px] md:size-[150px] border-gray-900 flex flex-col 
        items-center justify-center text-3xl md:text-6xl hover:bg-gray-900 
        hover:text-gray-300 cursor-default'>
          <FaGithubSquare/>
          <h3 className='text-lg md:text-2xl'>
            Git
          </h3>
        </div>
        <div className='border-2 size-[90px] md:size-[150px] border-gray-900 flex flex-col 
        items-center justify-center text-3xl md:text-6xl hover:bg-gray-900 
        hover:text-gray-300 cursor-default'>
          <FaDocker/>
          <h3 className='text-lg md:text-2xl'>
            Docker
          </h3>
        </div>
        <div className='border-2 h-[90px] w-[110px] md:size-[150px] border-gray-900 flex flex-col 
        items-center justify-center text-3xl md:text-6xl hover:bg-gray-900 
        hover:text-gray-300 cursor-default'>
          <SiKubernetes/>
          <h3 className='text-lg md:text-2xl'>
            Kubernetes
          </h3>
        </div>  
      </div>
    </div>
  )
}

export default Skills2
import React, {useState} from 'react'
import { FaGithub, FaDocker, FaPython, FaJava, FaReact, FaNode } from "react-icons/fa";
import { SiKubernetes } from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import { SiTailwindcss } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";

const Skills = () => {
  const [pageIndex, setPageIndex] = useState(0);

  return (
    <section name='skills' className='w-full h-screen bg-primary text-secondary 
    border-b-[1px] border-tertiary flex flex-col items-center'>
      <h3 className='mt-2 w-full max-w-[1000px] text-[16px]/[24px] lg:text-[24px]/[30px]
      text-center'>
        Skills I've acuired along the way
      </h3>
      {/** navigation */}
      <ul name='nav' className='w-full h-[10vh] grid grid-rows-1 grid-cols-3 gap-2 text-2xl p-2
      max-w-[1000px] mt-2 font-medium'>
        <li onClick={() => setPageIndex(0)}
        className={`flex items-center justify-center border-[1px] border-secondary rounded-md
        cursor-pointer shadow-basedSmall duration-300 ease-in-out
        hover:text-tertiary hover:border-tertiary hover:shadow-basedHover
        ${pageIndex === 0 ? `text-tertiary border-tertiary shadow-basedHover 
        duration-300 ease-in-out`: ''}`}>
          General
        </li>
        <li onClick={() => setPageIndex(1)}
        className={`flex items-center justify-center border-[1px] border-secondary rounded-md
        cursor-pointer shadow-basedSmall duration-300 ease-in-out
        hover:text-tertiary hover:border-tertiary hover:shadow-basedHover
        ${pageIndex === 1 ? `text-tertiary border-tertiary shadow-basedHover 
        duration-300 ease-in-out`: ''}`}>
          Web
        </li>
        <li onClick={() => setPageIndex(2)}
        className={`flex items-center justify-center border-[1px] border-secondary rounded-md
        cursor-pointer shadow-basedSmall duration-300 ease-in-out
        hover:text-tertiary hover:border-tertiary hover:shadow-basedHover
        ${pageIndex === 2 ? `text-tertiary border-tertiary shadow-basedHover 
        duration-300 ease-in-out`: ''}`}>
          Devops
        </li>
      </ul>

      <div className='w-full max-w-[1200px] h-[90vh] relative transition-opacity lg:text-xl'>
        {/** general */}
        <div className={`w-full h-full  absolute duration-500 ease-in-out
        grid grid-cols-1 grid-rows-3 p-8 md:p-16 gap-16 
        ${pageIndex === 0 ? `opacity-100`: `opacity-0`}`}>
          {/** Java */}
          <div className=' rounded-md border-secondary border-[1px]
          flex items-center shadow-basedSmall'>
            <FaJava  className='w-[30%] h-[90%] max-h-[130px] p-4 text-[#EB2025]'/>
            <p className='w-[70%] pr-4'>
            Strong foundation in object-oriented programming
            using <strong className='text-[#EB2025]'>Java</strong>
            
            </p>
          </div>
          {/** JavaScript */}
          <div className=' rounded-md border-secondary border-[1px]
          flex items-center shadow-basedSmall'>
            <IoLogoJavascript  className='w-[30%] h-[90%] max-h-[130px] p-4 text-[#F0DB4F]'/>
            <p className='w-[70%] p-2'>
              Studying <strong className='text-[#F0DB4F]'>JavaScript</strong> to aid my front-end
              web development journey 
            </p>
          </div>
          {/** JavaScript */}
          <div className=' rounded-md border-secondary border-[1px]
          flex items-center shadow-basedSmall'>
            <FaPython  className='w-[30%] h-[90%] max-h-[130px] p-4 text-[#3872A1]'/>
            <p className='w-[70%] p-2'>
              Used <strong className='text-[#3872A1]'>Python</strong> for personal projects,
              image processing, and solving leetcode problems
            </p>
          </div>
        </div>

        {/** web */}
        <div className={`w-full h-full  absolute duration-500 ease-in-out
        grid grid-cols-1 grid-rows-4 p-8 md:p-16 gap-16
        ${pageIndex === 1 ? `opacity-100`: `opacity-0`}`}>
          {/** React */}
          <div className=' rounded-md border-secondary border-[1px]
          flex items-center shadow-basedSmall'>
            <FaReact  className='w-[30%] h-[90%] max-h-[130px] p-4 text-[#03D8FF]'/>
            <p className='w-[70%] pr-4'>
            Focusing heavily on <strong className='text-[#03D8FF]'>React</strong> to 
            develope front-end user interfaces and single-page applications        
            
            </p>
          </div>
          {/** Tailwind */}
          <div className=' rounded-md border-secondary border-[1px]
          flex items-center shadow-basedSmall'>
            <SiTailwindcss  className='w-[30%] h-[90%] max-h-[130px] p-4 text-[#3BB2AF]'/>
            <p className='w-[70%] pr-4'>
            Implementing CSS fast and efficiently with <strong className='text-[#3BB2AF]'>Tailwind</strong>
            </p>
          </div>
          {/** Node */}
          <div className=' rounded-md border-secondary border-[1px]
          flex items-center shadow-basedSmall'>
            <FaNode  className='w-[30%] h-[90%] max-h-[130px] p-4 text-[#8FC53F]'/>
            <p className='w-[70%] p-2'>
              Implemented servers, API's and database
              connections with <strong className='text-[#8FC53F]'>Node js</strong>
            </p>
          </div>
          {/** MongoDB */}
          <div className=' rounded-md border-secondary border-[1px]
          flex items-center shadow-basedSmall'>
            <DiMongodb  className='w-[30%] h-[90%] max-h-[130px] p-4 text-[#429E39]'/>
            <p className='w-[70%] p-2'>
              <strong className='text-[#429E39]'>MongoDB</strong> is
               what I use if I need a database for my projects
            </p>
          </div>
        </div>

        {/** devops */}
        <div className={`w-full h-full  absolute duration-500 ease-in-out
        grid grid-cols-1 grid-rows-3 p-8 md:p-16 gap-16
        ${pageIndex === 2 ? `opacity-100`: `opacity-0`}`}>
          {/** Git */}
          <div className=' rounded-md border-secondary border-[1px]
          flex items-center shadow-basedSmall'>
            <FaGithub  className='w-[30%] h-[90%] max-h-[130px] p-4 text-[#03D8FF]'/>
            <p className='w-[70%] pr-4'>
            Using <strong className='text-tertiary'>Git</strong> for version control over the past 5 
            years, I've mastered its functionalities       
            </p>
          </div>
          {/** Docker */}
          <div className=' rounded-md border-secondary border-[1px]
          flex items-center shadow-basedSmall'>
            <FaDocker  className='w-[30%] h-[90%] max-h-[130px] p-4 text-[#1D63ED]'/>
            <p className='w-[70%] p-2'>
              With <strong className='text-[#1D63ED]'>Docker</strong>, I understand 
              the fundamentals of containerization
            </p>
          </div>
          {/** Kubernetes */}
          <div className=' rounded-md border-secondary border-[1px]
          flex items-center shadow-basedSmall'>
            <SiKubernetes  className='w-[30%] h-[90%] max-h-[130px] p-4 text-[#2F6CE5]'/>
            <p className='w-[70%] p-2'>
              Familiar with how <strong className='text-[#2F6CE5]'>Kubernetes</strong> deploys 
              and orchestrates pods
            </p>
          </div>
        </div>
      </div>


    </section>
  )
}

export default Skills
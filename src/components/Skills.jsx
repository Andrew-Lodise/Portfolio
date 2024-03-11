import {React, useState} from 'react';
import { FaGithub, FaDocker, FaPython, FaJava, FaReact, FaNode } from "react-icons/fa";
import { SiKubernetes } from "react-icons/si";
import { DiHaskell, DiMongodb, DiMysql } from "react-icons/di";
import { SiC, SiTailwindcss, SiCplusplus  } from "react-icons/si";
import {Link} from "react-scroll";
import {GiUfo} from "react-icons/gi";
import { MdKeyboardArrowUp } from "react-icons/md";

const Skills = () => {
  const [pageIndex, setPageIndex] = useState(0)

  return (
    <div name="skills" className='w-full h-screen bg-gray-300 text-gray-900
    flex flex-col items-center'>
      <h1 className='self-start text-6xl pt-[125px] pl-[10%] cursor-default'>
        Skills
      </h1>
      
      <div name="backtotop" className='absolute mt-[135px] right-[6%] hover:bg-gray-900
      hover:text-gray-300 duration-200 cursor-pointer'>
        <Link to="home" spy={true} smooth={true} duration={500}>
          <MdKeyboardArrowUp size={40}/>
        </Link>
      </div>


      <ul name="nav" className='flex w-[96%] mt-8 justify-evenly text-lg
       border-b-[1px] border-gray-900 font-semibold md:text-xl lg:text-2xl'>
        <li className='text-center w-1/3 border-r-[1px] border-gray-900
        cursor-pointer transition-opacity'
        onClick={() => setPageIndex(0)}>
          <p className={pageIndex === 0 ? "duration-300 opacity-100" : 
          "duration-300 opacity-30 hover:opacity-100"}>
            General
          </p>
        </li>
        <li className='text-center w-1/3 border-r-[1px] border-gray-900
        cursor-pointer hover:opacity-100'
        onClick={() => setPageIndex(1)}>
          <p className={pageIndex === 1 ? "duration-300 opacity-100" : 
          "duration-300 opacity-30 hover:opacity-100"}>
            Web Dev
          </p>
        </li>
        <li className='text-center w-1/3 cursor-pointer'
        onClick={() => setPageIndex(2)}>
          <p className={pageIndex === 2 ? "duration-300 opacity-100" : 
          "duration-300 opacity-30 hover:opacity-100"}>
            Dev Ops
          </p>
        </li>
      </ul>

      <div name="page content" className='transition-opacity flex flex-col self-start text-xs'>
        <div name="general language" className={pageIndex === 0 ? "absolute duration-500" :
         " absolute duration-500 opacity-0"}>
          <div name="gen lang content" className='w-full h-[550px] flex flex-col justify-evenly'>
            <div name="java" className='w-[100%] flex items-center
            justify-center md:text-lg lg:text-xl'>
              <FaJava size={80} className='mr-4'/>
              <p className='max-w-[70%]'>
                Java is the language I was taught at university. I have a very deep understanding 
                of the object oriented programming paradigm used by this language.  
              </p>
            </div>
            <div name="python" className='w-[100%] flex items-center
            justify-center md:text-lg lg:text-xl'>
              <FaPython size={80} className='mr-4'/>
              <p className='max-w-[70%]'>
                Python is the language I used for the majority of my person projects. I've
                frequently used this language for things like connecting to apis, manipulating
                and plotting data, creating user interfaces, and practicing leetcode.  
              </p>
            </div>
            <div name="haskell" className='w-[100%] flex items-center
            justify-center md:text-lg lg:text-xl'>
              <DiHaskell size={70} className='mr-4'/>
              <p className='max-w-[70%]'>
                Haskell is the language I was taught during a functional programming class
                I took during my junior year. I really enjoyed that class and this class 
                allowed me to deepen my understanding of recurssion.
              </p>
            </div>
            <div name="c/c++" className='w-[100%] flex items-center
            justify-center md:text-lg lg:text-xl'>
              <SiCplusplus size={35} className='mr-2'/>
              <SiC size={35} className='mr-4'/>
              <p className='max-w-[70%]'>
                C and C++ are both languages I was introduced to early in my career,
                one of the first computer science. I learned comp sci basics with C++
                and learned about low level memory management/machine code with C 
                code as the example. 
              </p>
            </div>
          </div>
        </div>

        <div name="Web Dev" className={pageIndex === 1 ? "absolute duration-500" :
         " absolute duration-500 opacity-0"}>
          <div name="web dev content" className='w-full h-[550px] flex flex-col justify-evenly'>
            <div name="react" className='w-[100%] flex items-center
            justify-center md:text-lg lg:text-xl'>
              <FaReact size={80} className='mr-4'/>
              <p className='max-w-[70%]'>
                React is the front end library I have the most experience with. I took a 400 level
                "user interfaces" class that focused completely on react, and I built this websit 
                using it.  
              </p>
            </div>

            <div name="tailwind" className='w-[100%] flex items-center
            justify-center md:text-lg lg:text-xl'>
              <SiTailwindcss size={80} className='mr-4'/>
              <p className='max-w-[70%]'>
                Tailwind is the CSS framework that I have the most experience with. I build this website
                with it's help and it's helped me learn css during the process.
              </p>
            </div>

            <div name="express/node" className='w-[100%] flex items-center
            justify-center md:text-lg lg:text-xl'>
              <FaNode size={80} className='mr-4'/>
              <p className='max-w-[70%]'>
                Node and express are what I've used when learning backend development.
                This includes creating servers and apis, along with connecting everything
                together with the use of a database.
              </p>
            </div>

            <div name="sql/mongo" className='w-[100%] flex items-center
            justify-center md:text-lg lg:text-xl'>
              <DiMysql size={40} className=''/>
              <DiMongodb size={40} className='mr-4'/>
              <p className='max-w-[70%]'>
                Mongodb and sql are data tools I've used for classes and projects. I have
                used them each about the same and don't feel more or less comfortable with
                one or the other.
              </p>
            </div>
          </div>
        </div>

        <div name="Dev ops" className={pageIndex === 2 ? "absolute duration-500" :
         " absolute duration-500 opacity-0"}>
          <div name="dev ops content" className='w-full h-[550px] flex flex-col justify-evenly'>
            <div name="git" className='w-[100%] flex items-center
            justify-center md:text-lg lg:text-xl'>
              <FaGithub size={80} className='mr-4'/>
              <p className='max-w-[70%]'>
                Github/git is the only version control system I've ever used. I've been using it
                consistently since I learned about it over 5 years ago. There's no better way to 
                store my code for my projects and I'd say I have a strong understanding of it. 
              </p>
            </div>
            <div name="docker" className='w-[100%] flex items-center
            justify-center md:text-lg lg:text-xl'>
              <FaDocker size={80} className='mr-4'/>
              <p className='max-w-[70%]'>
                Docker is a containerization platform I'm most familiar with. I understand the basics 
                of containerizing an application in order to deploy it easily in the future.
              </p>
            </div>
            <div name="kubernetes" className='w-[100%] flex items-center
            justify-center md:text-lg lg:text-xl'>
              <SiKubernetes size={80} className='mr-4'/>
              <p className='max-w-[70%]'>
                Kubernetes is the deployment tool I'm familiar with. In a cloud computing class
                we were taught the basics of running and deploying kubernetes pods in 
                kubernetes clusters.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div name='footer' className='w-full h-[100px] mt-auto 
      flex flex-col'>
        <Link to="contact" spy={true} smooth={true} duration={500} 
        className='group text-2xl flex items-center self-start border-[1px] border-gray-900 
        cursor-pointer ml-[2%] md:ml-[10%] mt-2 text-gray-900 hover:bg-gray-900 
        hover:text-gray-300 pr-1 mb-8 overflow-hidden'>
          <h4 className='px-2'>
            View Contact Page
          </h4>
          <GiUfo size={30} className='transition-transform group-hover:translate-y-[14px]
          duration-700'/>
        </Link>
      </div>
    </div>
  )
}

export default Skills
import {React, useState} from 'react';
import { FaGithub, FaDocker, FaPython, FaJava, FaReact, FaNode } from "react-icons/fa";
import { SiKubernetes } from "react-icons/si";
import { DiHaskell, DiMongodb } from "react-icons/di";
import { SiTailwindcss, SiCplusplus  } from "react-icons/si";
import {Link as ScrollLink} from "react-scroll";
import {GiUfo} from "react-icons/gi";
import { MdKeyboardArrowUp } from "react-icons/md";

const Skills = () => {
  const [pageIndex, setPageIndex] = useState(0)

  return (
    <div name="skills" className='w-full h-screen bg-primary text-secondary relative'>
      <div className='h-full w-full flex flex-col'>
        {/** title and up arrow */}
        <div name="header" className='w-full h-[10vh] flex items-center
        justify-between'>
          <h1 className='text-head ml-[10vw] '>
            Skills
          </h1>
          <div name="backtotop" className='absolute right-[6%] hover:bg-gray-900
        hover:text-gray-300 duration-200 cursor-pointer rounded-sm'>
            <ScrollLink to="home" spy={true} smooth={true} duration={500}
            className='flex items-center pl-1'>
              <h3 className='hidden md:block'>Back to home</h3>
              <MdKeyboardArrowUp size={40}/>
            </ScrollLink>
          </div>
        </div>


        <ul name="nav" className='flex mt-2 justify-evenly text-skill-nav
        border-b-[1px] border-tertiary  font-semibold'>
          <li className='text-center w-1/3 border-r-[1px] border-tertiary
          cursor-pointer transition-opacity'
          onClick={() => setPageIndex(0)}>
            <p className={pageIndex === 0 ? "duration-300 opacity-100 bg-secondary text-black" : 
            "duration-300 opacity-30 hover:opacity-100"}>
              General
            </p>
          </li>
          <li className='text-center w-1/3 border-r-[1px] border-tertiary
          cursor-pointer hover:opacity-100'
          onClick={() => setPageIndex(1)}>
            <p className={pageIndex === 1 ? "duration-300 opacity-100 bg-tertiary text-black" : 
            "duration-300 opacity-30 hover:opacity-100"}>
              Web Dev
            </p>
          </li>
          <li className='text-center w-1/3 cursor-pointer'
          onClick={() => setPageIndex(2)}>
            <p className={pageIndex === 2 ? "duration-300 opacity-100 bg-tertiary text-black" : 
            "duration-300 opacity-30 hover:opacity-100"}>
              Dev Ops
            </p>
          </li>
        </ul>

        <div name="page content" className='relative transition-opacity w-full h-full
         text-sm lg:text-base xl:text-lg font-hind'>
          <div name="general language" className={`absolute h-full duration-500 
          ${pageIndex === 0 ? 'opacity-100' : 'opacity-0'}`}>
            <div name="gen lang content" className='w-full h-full flex flex-col 
             justify-evenly overflow-hidden'>
              <div name="java" className='flex items-center
              justify-left md:pl-[10vw] pl-[2%]'>
                <FaJava className='mr-4 text-skill-icon text-tertiary'/>
                <p className='max-w-[70%]'>
                Experienced with <strong>Java</strong>, I have a solid foundation in 
                object-oriented programming from university studies, with practical experience 
                in developing efficient, scalable software solutions.
                </p>
              </div>
              <div name="python" className='w-[100%] flex items-center
              justify-left md:pl-[10vw] pl-[2%]'>
                <FaPython className='mr-4 text-skill-icon text-tertiary'/>
                <p className='max-w-[70%]'>
                <strong>Python</strong>, my go-to for personal projects, I’ve used in API 
                integration, data manipulation, UI development, and algorithmic problem-solving.  
                </p>
              </div>
              <div name="haskell" className='w-[100%] flex items-center
              justify-left md:pl-[10vw] pl-[2%]'>
                <DiHaskell className='mr-4 text-skill-icon text-tertiary'/>
                <p className='max-w-[70%]'>
                Introduced to <strong>Haskell</strong> in a functional programming class during 
                my junior year, I developed a deeper understanding of recursion and 
                functional paradigms.
                </p>
              </div>
              <div name="c/c++" className='w-[100%] flex items-center
              justify-left md:pl-[10vw] pl-[2%]'>
                <SiCplusplus className='mr-2 text-skill-icon text-tertiary'/>
                <p className='max-w-[70%]'>
                <strong>C++</strong> layed the groundwork for understanding programming 
                fundamentals, while <strong>C</strong> deepened my insights into system-level 
                concepts and assembly code conversion. 
                </p>
              </div>
            </div>
          </div>

          <div name="Web Dev" className={`absolute h-full duration-500 
          ${pageIndex === 1 ? 'opacity-100' : 'opacity-0'}`}>
            <div name="web dev content" className='w-full h-full flex flex-col justify-evenly'>
              <div name="react" className='w-[100%] flex items-center
              justify-left md:pl-[10vw] pl-[2%]'>
                <FaReact className='mr-4 text-skill-icon text-tertiary'/>
                <p className='max-w-[70%]'>
                <strong>React</strong>, my most experienced front-end library, was extensively 
                covered in a 400-level user interfaces class and is the foundation of this 
                website's development.  
                </p>
              </div>

              <div name="tailwind" className='w-[100%] flex items-center
              justify-left md:pl-[10vw] pl-[2%]'>
                <SiTailwindcss className='mr-4 text-skill-icon text-tertiary'/>
                <p className='max-w-[70%]'>
                <strong>Tailwind</strong>, the CSS framework I'm most versed in, was instrumental 
                in building this website and significantly enhanced my CSS skills.
                </p>
              </div>

              <div name="express/node" className='w-[100%] flex items-center
              justify-left md:pl-[10vw] pl-[2%]'>
                <FaNode className='mr-4 text-skill-icon text-tertiary'/>
                <p className='max-w-[70%]'>
                Experienced in backend development with <strong>Node</strong> and <strong>Express</strong>, I've crafted servers and APIs, integrating
                them seamlessly with databases for full-stack functionality.
                </p>
              </div>

              <div name="sql/mongo" className='w-[100%] flex items-center
              justify-left md:pl-[10vw] pl-[2%]'>
                <DiMongodb className='mr-4 text-skill-icon text-tertiary'/>
                <p className='max-w-[70%]'>
                Equally confortable with <strong>MongoDB</strong> and <strong>SQL</strong>, 
                I've utilized these databases across various classes and projects,
                demonstrating versatility and adaptability in data management.
                </p>
              </div>
            </div>
          </div>

          <div name="Dev ops" className={`absolute h-full duration-500 
          ${pageIndex === 2 ? 'opacity-100' : 'opacity-0'} `}>
            <div name="dev ops content" className='w-full h-full flex flex-col justify-evenly'>
              <div name="git" className='w-[100%] flex items-center
              justify-left md:pl-[10vw] pl-[2%]'>
                <FaGithub className='mr-4 text-skill-icon text-tertiary'/>
                <p className='max-w-[70%]'>
                Exclusively using <strong>Git</strong> for version control over the past 5 
                years, I've mastered its functionalities, making it indispensable for
                managing my project code with proficiency. 
                </p>
              </div>
              <div name="docker" className='w-[100%] flex items-center
              justify-left md:pl-[10vw] pl-[2%]'>
                <FaDocker className='mr-4 text-skill-icon text-tertiary'/>
                <p className='max-w-[70%]'>
                Proficient with <strong>Docker</strong>, I grasp the fundamentals of 
                containerization, streamlining the deployment process of applications
                for future scalability and efficiency.
                </p>
              </div>
              <div name="kubernetes" className='w-[100%] flex items-center
              justify-left md:pl-[10vw] pl-[2%]'>
                <SiKubernetes className='mr-4 text-skill-icon text-tertiary'/>
                <p className='max-w-[70%]'>
                Familiar with <strong>Kubernetes</strong>, I've learned the essentials 
                of orchestrating and deploying pods within clusters during a cloud
                computing class.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div name='footer' className='w-full h-[16vh] mt-auto 
        flex flex-col'>
          <ScrollLink to="contact" spy={true} smooth={true} duration={500} 
          className='group text-button flex items-center self-start border-[1px] border-gray-900 
          cursor-pointer ml-[2%] md:ml-[10%] mt-2 text-gray-900 hover:bg-gray-900 
          hover:text-gray-300 pr-1 mb-8 overflow-hidden rounded-sm'>
            <h4 className='px-2'>
              View Contact Page
            </h4>
            <GiUfo size={30} className='transition-transform group-hover:translate-y-[16px]
            duration-700'/>
          </ScrollLink>
        </div>
      </div>
    </div>
  )
}

export default Skills
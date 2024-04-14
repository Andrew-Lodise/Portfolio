import React, {useEffect} from 'react'
import { Link, useParams } from 'react-router-dom'
import ProjectList from '../../data/ProjectList'
import { FaArrowLeft, FaGithub } from "react-icons/fa";

export default function Project2() {

  const openGithubLink = (link) => {
    window.open(link,'_blank');
  };

  const params = useParams()
  const id = params.projectId
  const project = ProjectList[id]
  
  return (
    <section className='w-full bg-primary text-secondary'>
      <header className='w-full flex items-center font-semibold justify-center py-4
       h-[10vh]'>
        <Link to='/Portfolio' className='absolute left-2 hover:bg-gray-300 hover:text-gray-900
        rounded-sm duration-200 px-2 text-3xl flex items-center'>
          <FaArrowLeft className='mr-1'/>
          <span className='hidden lg:block'>
            Homepage
          </span>
        </Link>
        <h1 className='cursor-default text-3xl md:text-4xl w-full text-center bg-black'>
          {project.title}
        </h1>
      </header>
      <div className='w-full h-auto bg-black flex flex-col items-center'>
        <div className=' grid grid-rows-1 grid-cols-1 lg:grid-cols-2 w-full p-4 gap-4'>
          <img src={project.images[0]} alt="" className=' h-full object-fill border-[1px] 
          border-secondary rounded-md shadow-basedSmall'/>
          <img src={project.images[1]} alt="" className=' h-full object-cover hidden lg:block border-[1px] 
          border-secondary rounded-md shadow-basedSmall'/>
        </div>
        <div className='w-full flex flex-col gap-6'>
          <div className='w-full flex flex-col px-4 max-w-[1000px]'>
            <h2 className='w-full text-2xl font-bold'>
              Purpose 
            </h2>
            <p className='w-full text-lg'>
              {project.purpose}
            </p>
          </div>
          <div className='w-full flex flex-col px-4 items-center'>
            <h2 className='w-full text-2xl font-bold text-center'>
              Technology
            </h2>
            <ul className='w-full text-lg grid grid-rows-2 grid-cols-2 max-w-[600px]'>
              {project.tech.map(skill => (
                <li key={skill} className='w-full text-center'>
                  {skill} 
                </li>
              ))}  
            </ul>
          </div>
          <div className='w-full flex flex-col px-4'>
            <h2 className='w-full text-2xl font-bold'>
              About 
            </h2>
            <p className='w-full text-lg'>
              {project.description}
            </p>
          </div>
        </div>
        

      </div>
      




      {/*old*/}
      <div name='content' className='w-full  flex flex-col items-center mt-64'>
        <div name='images' className='h-[30vh] md:h-[40vh] w-full xl:w-[70%]  flex justify-evenly my-4'>
          <img src={project.images[0]} alt="" className=' h-full object-fill border-[1px] 
          border-secondary rounded-sm'/>
          <img src={project.images[1]} alt="" className=' h-full object-cover hidden lg:block border-[1px] 
          border-secondary rounded-sm'/>
        </div>
        

        <div name='text-content' className='flex flex-col text-base lg:text-xl lg:px-12 gap-y-4 w-[90%] lg:w-[80%] my-8
        font-hind'>
          <div>
            <strong>Purpose: </strong>
            <span>{project.purpose}</span>
          </div>
          <div className='flex'>
            <strong>Technology: </strong>
            <span className='flex'>
            {project.tech.map(skill => (
              <div key={skill} className='px-1'>
                {skill} 
              </div>
            ))}  
            </span>
          </div>
          <div>
            <strong>Description: </strong>
            <span>{project.description}</span>
          </div>
        </div>

        <button onClick={() => openGithubLink(project.codeLink)}
        className=' text-2xl md:text-3xl border-[1px] border-gray-300 px-2 rounded-sm my-8
        hover:bg-gray-300 hover:text-gray-900 duration-200 ease-in-out
        flex items-center'>
          <span>
            View Github Repository
          </span>
          <FaGithub className=' ml-2'/>
        </button>

        <div name='video-content' className='flex w-full flex-col items-center justify-center py-8'>
          <h1 className='text-3xl'>
            Video Demo
          </h1>
          <iframe src={project.embedLink} title={`${project.name} Demo`} frameBorder="0"
          allow= "autoplay; clipboard-write" allowFullScreen
          className='w-[98%] h-[30vh] sm:w-[80%] sm:h-[40vh] md:h-[50vh] lg:w-[60%] lg:h-[50vh]
          xl:w-[60%] xl:h-[70vh] 
          border-[1px] border-secondary rounded-sm'>
          </iframe>
        </div>


      </div>
    </section>
  )
}

import React, {useEffect} from 'react'
import { Link, useParams } from 'react-router-dom'
import ProjectList from '../../data/ProjectList'
import { FaArrowLeft, FaGithub } from "react-icons/fa";

export default function Project() {

  const openGithubLink = (link) => {
    window.open(link,'_blank');
  };

  // always be at the top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const params = useParams()
  const id = params.projectId
  const project = ProjectList[id]
  
  return (
    <section className='w-full bg-gray-900 text-gray-300'>
      <header className='w-full flex items-center font-semibold justify-center py-4
       h-[10vh]'>
        <Link to='/Portfolio' className='absolute left-2 hover:bg-gray-300 hover:text-gray-900
        rounded-sm duration-200 px-2 text-3xl flex items-center'>
          <FaArrowLeft className=''/>
          <span className='hidden lg:block'>
            Homepage
          </span>
        </Link>
        <h1 className='cursor-default text-3xl md:text-4xl max-w-[50%] text-center'>
          {project.title}
        </h1>
      </header>
      <div name='content' className='w-full  flex flex-col items-center'>
        <div name='images' className='h-[30vh] md:h-[40vh] w-full xl:w-[70%]  flex justify-evenly mt-4'>
          <img src={project.images[0]} alt="" className=' h-full object-fill border-[1px] 
          border-gray-300 rounded-sm'/>
          <img src={project.images[1]} alt="" className=' h-full object-cover hidden lg:block border-[1px] 
          border-gray-300 rounded-sm'/>
        </div>

        <div name='text-content' className='flex flex-col text-base lg:text-xl lg:px-12 gap-y-4'>
          <div>
            <strong>Purpose: </strong>
            <span>{project.purpose}</span>
          </div>
          <div>
            <strong>Technology: </strong>
            <span>{project.tech}</span>
          </div>
          <div>
            <strong>Description: </strong>
            <span>{project.description}</span>
          </div>
        </div>

        <div name='video-content' className='flex w-full flex-col items-center justify-center'>
          <h1 className='text-4xl'>
            Video Demo
          </h1>
          <iframe src={project.embedLink} title={`${project.name} Demo`} frameBorder="0"
          allow= "autoplay; clipboard-write" allowFullScreen
          className='w-[98%] h-[30vh] sm:w-[80%] sm:h-[40vh] md:h-[50vh] lg:w-[60%] lg:h-[50vh]
          xl:w-[60%] xl:h-[70vh] 
          border-[1px] border-gray-300 rounded-sm'>

          </iframe>
        </div>

        <button onClick={() => openGithubLink(project.codeLink)}
        className=' text-4xl border-[1px] border-gray-300 px-2 rounded-sm my-4
        hover:bg-gray-300 hover:text-gray-900 duration-200 ease-in-out
        flex items-center'>
          <span>
            View Github Repository
          </span>
          <FaGithub className=' ml-2'/>
        </button>

      </div>
    </section>
  )
}

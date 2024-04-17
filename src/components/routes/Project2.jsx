import React, {useEffect} from 'react'
import { Link, useParams } from 'react-router-dom'
import ProjectList from '../../data/ProjectList'
import { FaArrowLeft, FaGithub } from "react-icons/fa";

export default function Project2() {

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top when the component mounts
  }, []); // Empty dependency array ensures this effect only runs once


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
        <Link to='/Portfolio' className='absolute left-2 hover:text-tertiary
        rounded-sm duration-200 px-2 text-3xl flex items-center'>
          <FaArrowLeft className='mr-1'/>
          <span className='hidden lg:block'>
            Homepage
          </span>
        </Link>
        <h1 className='cursor-default text-3xl md:text-4xl w-full text-center '>
          {project.title}
        </h1>
      </header>
      <div className='w-full h-auto  flex flex-col items-center'>
        <div className='w-full px-4 m-4 flex justify-center'>
          <button onClick={() => openGithubLink(project.codeLink)}
          className='w-full max-w-[600px] border-[1px] border-secodnary text-2xl font-medium
          rounded-md py-4 shadow-basedSmall hover:text-tertiary hover:border-tertiary
          hover:shadow-basedHover duration-300 ease-in-out flex items-center justify-center'>
            Github Repository
            <FaGithub className='ml-2'/>
          </button>
        </div>
        
        <div className=' grid grid-rows-1 grid-cols-1 lg:grid-cols-2 w-full p-4 gap-4'>
          <img src={project.images[0]} alt="" className=' h-full object-fill border-[1px] 
          border-secondary rounded-md shadow-basedSmall'/>
          <img src={project.images[1]} alt="" className=' h-full object-cover hidden lg:block border-[1px] 
          border-secondary rounded-md shadow-basedSmall'/>
        </div>
        <div className='w-full flex flex-col gap-6 items-center'>
          <div className='w-full flex flex-col px-4 max-w-[750px]'>
            <h2 className='w-full text-2xl font-bold text-center '>
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
            <ul className={`w-full text-lg grid grid-rows-${Math.ceil(project.tech.length / 2)} 
            grid-cols-2 max-w-[600px]`}>
              {project.tech.map(skill => (
                <li key={skill} className='w-full text-center'>
                  {skill} 
                </li>
              ))}  
            </ul>
          </div>
          <div className='w-full flex flex-col px-4 max-w-[750px]'>
            <h2 className='w-full text-2xl font-bold'>
              About 
            </h2>
            <p className='w-full text-lg'>
              {project.description}
            </p>
          </div>
        </div>

        <div name='video-content' className='flex w-full flex-col items-center justify-center py-8 px-2'>
          <h1 className='text-2xl font-semibold'>
            Video Demo
          </h1>
          <iframe src={project.embedLink} title={`${project.name} Demo`} frameBorder="0"
          allow="autoplay; clipboard-write" allowFullScreen
          className='w-full border-[1px] border-secondary rounded-md aspect-video
          shadow-basedSmall max-w-[1000px]'>
          </iframe>
        </div>
      </div>
    </section>
  )
}

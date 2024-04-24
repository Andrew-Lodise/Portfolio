import React, {useEffect} from 'react'
import { Link, useParams } from 'react-router-dom'
import ProjectList from '../../data/ProjectList'
import { FaArrowLeft, FaGithub } from "react-icons/fa";

export default function Project() {

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
    <section className='w-full bg-primary text-secondary flex flex-col items-center'>
      <header className='w-full flex items-center font-semibold justify-center py-4
       h-[10vh]'>
        <Link to='/Portfolio' className='absolute left-2 hover:text-tertiary
        ease-in-out duration-300 px-2 text-3xl flex items-center'>
          <FaArrowLeft className='mr-1'/>
          <span className='hidden lg:block'>
            Homepage
          </span>
        </Link>
        <h1 className='cursor-default text-3xl md:text-4xl w-[75%] text-center '>
          {project.title}
        </h1>
      </header>
      {/** video */}
      <div name='video-content' className='flex w-full flex-col items-center justify-center px-2'>
        <h1 className='text-2xl font-semibold'>
          Video Demo
        </h1>
        <iframe src={project.embedLink} title={`${project.name} Demo`} frameBorder="0"
        allow="autoplay; clipboard-write" allowFullScreen
        className='w-full border-[1px] border-secondary rounded-md aspect-video
         max-w-[1200px]'>
        </iframe>
      </div>
      <div className='w-full h-auto flex flex-col items-center'>
        {/** purpose */}
        <div className='w-full flex flex-col max-w-[1000px] mt-8 px-4'>
          <p className='w-full text-2xl text-center'>
            {project.purpose}
          </p>
        </div>
        {/** github button */}
        <div className='w-full px-4 mt-8 flex justify-center'>
          <button onClick={() => openGithubLink(project.codeLink)}
          className='w-full max-w-[600px] border-[1px] border-tertiary text-2xl font-medium
          rounded-md py-4  bg-tertiary text-black
           flex items-center justify-center'>
            Github Repository
            <FaGithub className='ml-2'/>
          </button>
        </div>
        {/** technology used */}
        <div className='w-full flex flex-col px-4 items-center mt-8'>
          <h2 className='w-full text-2xl font-bold text-center'>
            Technologies 
          </h2>
          <ul className={`w-full text-xl max-w-[800px] grid gap-4 
          grid-cols-1 grid-flow-row sm:grid-cols-2 p-4`}>
            {project.tech.map(skill => (
              <li key={skill} className='w-full text-center border-[1px] border-tertiary
              rounded-md py-2'>
                {skill}
              </li>
            ))}  
          </ul>
        </div>
        {/** picture(s), maybe carosel in the future? */}
        <div className='hidden md:grid grid-rows-1 grid-cols-1 lg:grid-cols-2 w-full px-4 
        gap-4 mt-8 max-w-[1200px]'>

          <img src={project.images[0]} alt="" className=' h-full object-fill border-[1px] 
          border-secondary rounded-md'/>
          <img src={project.images[1]} alt="" className=' h-full object-cover hidden lg:block border-[1px] 
          border-secondary rounded-md'/>
        </div>
        {/** about section */}
        <div className='w-full flex flex-col px-4 max-w-[1200px] mt-8'>
          <h2 className='w-full text-2xl font-bold'>
            Extra Details 
          </h2>
          <p className='w-full text-lg'>
            {project.description}
          </p>
        </div>
        {/** back to home button */}
        <div className=' w-full py-8 h-auto items-center justify-start max-w-[1200px] box-border'>
          <Link to='/Portfolio' className='w-fit text-2xl border-[1px] border-tertiary bg-tertiary text-black
          font-semibold rounded-md p-4 mx-4'>
            back to projects
          </Link>
        </div>
        
      </div>
    </section>
  )
}

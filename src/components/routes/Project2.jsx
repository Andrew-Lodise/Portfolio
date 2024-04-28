import React, {useEffect} from 'react'
import { Link, useParams } from 'react-router-dom'
import ProjectList from '../../data/ProjectList'
import { FaArrowLeft, FaGithub } from "react-icons/fa";

const Project2 = () => {

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top when the component mounts
  }, []); // Empty dependency array ensures this effect only runs once

  const params = useParams();
  const id = params.projectId;
  const project = ProjectList[id];

  const openGithubLink = (link) => {
    window.open(link,'_blank');
  };
  return (
    <section className=' min-h-screen bg-primary text-secondary flex flex-col items-center'>
      <div className='w-full max-w-[1000px] h-full flex flex-col p-4'>
        {/** title and description */}
        <div className='w-full border-b-[1px] border-secondary border-opacity-40 pb-8'>
          <h1 className='text-[36px] md:text-[64px] font-black'>
            {project.title}
          </h1>
          <h3 className='text-[18px] md:text-[24px] font-black text-tertiary'>
            {project.purpose}
          </h3>
        </div>
        {/** video and technology? */}
        <div className='w-full flex flex-col items-center border-b-[1px]
        border-secondary border-opacity-40 pb-8'>
          <iframe src={project.embedLink} title={`${project.name} Demo`} frameBorder="0"
          allow="autoplay; clipboard-write" allowFullScreen
          className='w-full aspect-video mt-8 border-[1px] 
          border-secondary border-opacity-40'>
          </iframe>
          <ul className='w-full flex justify-between max-w-[600px] pt-8'>
            {project.tech.map(tech => (
              <li className='text-[16px] md:text-[24px] font-medium'
              key={tech}>
                {tech}
              </li>
            ))}
          </ul>
        </div>
        {/** repository  */}
        <div className='w-full py-8 border-b-[1px] border-secondary border-opacity-40
        flex justify-center items-center gap-4'>
          <h3 className='text-[16px] md:text-[24px]'>
            View Code Repository
          </h3>
          <button onClick={() => {openGithubLink(project.codeLink)}}
          className=' box-border border-[1px] border-tertiary 
          text-center rounded-md bg-primary text-tertiary font-bold
          p-2 duration-300 ease-in-out hover:bg-tertiary hover:text-black
          text-[20px] md:text-[30px]'>
            Github
          </button>
        </div>
        {/** images */}
        <div className='w-full py-8 border-b-[1px] border-secondary border-opacity-40
        flex flex-col justify-center items-center gap-8'>
          <img src={project.images[0]} alt="" className='w-full object-fill border-[1px] 
          border-secondary border-opacity-40'/>
          <img src={project.images[1]} alt="" className='w-full object-fill border-[1px] 
          border-secondary border-opacity-40'/>
        </div>
        {/** return home? */}
        <div className='w-full py-8'>
          <Link to='/Portfolio' className='w-fit box-border border-[1px] border-tertiary 
          text-center rounded-md bg-primary text-tertiary font-bold
          p-2 duration-300 ease-in-out hover:bg-tertiary hover:text-black
          text-[20px] md:text-[30px]'>
            back to Home
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Project2
import React, { useState } from 'react';
import { RxCross1 } from "react-icons/rx";
import { Link } from "react-scroll"
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoDocumentTextOutline } from "react-icons/io5";
import resume from '../assets/Andrew-Lodise-Resume.pdf'

const Navbar = () => {
  const [miniMenu, setMiniMenu] = useState(false);
  const handleBarClick = () => setMiniMenu(!miniMenu);

  const openResume = () => {
    window.open(resume,'_blank');
  };
  const openGithub = () => {
    window.open('https://github.com/Andrew-Lodise','_blank');
  };
  const openLinkedin = () => {
    window.open('https://www.linkedin.com/in/andrew-lodise','_blank');
  };

  return (
    <header className='relative z-50 w-full bg-primary text-quaterany'>
      {/** navbar */}
      <div className="w-full pt-4 flex items-center justify-end  text-base font-semibold">
        {/** menu buttons and external links */}
        <div className='w-full hidden md:flex text-2xl'>
          {/* menu/main buttons (home/projects/skills/contact) */}
          <ul className='flex flex-grow justify-center gap-x-8'>
            <li>
              <Link to="home" spy={true} smooth={true} duration={500}
              className='cursor-pointer hover:text-tertiary  duration-300
              min-w-fit text-center px-2 py-1 ease-in-out rounded-sm'>
                Home
              </Link>
            </li>
            <li>
              <Link to="projects" spy={true} smooth={true} duration={500} 
              className='cursor-pointer hover:text-tertiary duration-300
              min-w-fit text-center px-2 py-1 ease-in-out rounded-sm'>
                Projects
              </Link>
            </li> 
            <li>
              <Link to="skills" spy={true} smooth={true} duration={500} 
              className='cursor-pointer hover:text-tertiary duration-300
              min-w-fit text-center px-2 py-1 ease-in-out rounded-sm'>
                Skills
              </Link>
            </li>
            <li>
              <Link to="contact" spy={true} smooth={true} duration={500} 
              className='cursor-pointer hover:text-tertiary duration-300
              min-w-fit text-center px-2 py-1 ease-in-out rounded-sm'>
                Contact
              </Link>
            </li>      
          </ul>

            {/** external links (ghub, Linked in, Resume) */}
          <ul className='flex gap-x-2 absolute right-[1vw]'>
            <li>
              <button onClick={openGithub}
              className='hover:text-tertiary duration-300 ease-out rounded-sm'>
              <FaGithub  className='m-[4px]'/>
              </button>
            </li>

            <li>
              <button onClick={openLinkedin}
              className='hover:text-tertiary duration-300 ease-out rounded-sm'>
              <FaLinkedin  className='m-[4px]'/>
              </button>
            </li>

            <li>
              <button onClick={openResume}
              className='hover:text-tertiary duration-300 ease-out rounded-sm'>
              <IoDocumentTextOutline  className='m-[4px]'/>
              </button>
            </li>
          </ul>
        </div>
        
          
        {/* bar toggle button for small screens*/}
        <div className='md:hidden cursor-pointer rounded-md
        z-10 mr-4 hover:text-tertiary duration-300 
        max-h-[100%] p-1 text-xl  '
        onClick={handleBarClick}>
          <div className={!miniMenu ? 'flex items-center gap-2' : 'hidden'}>
            <h1>Menu</h1>
          </div>

          <div className={miniMenu ? `flex hover:text-tertiary rounded p-1` : 'hidden'}>
            <RxCross1 />
          </div>
          
        </div>

        {/** mini popout menu */}
        <ul className={!miniMenu ? 'hidden' : `absolute top-0 left-0 w-full h-screen bg-primary 
        flex flex-col gap-y-6 items-center justify-center duration-200 text-2xl text-secondary`}>
            <Link to="home" spy={true} smooth={true} duration={500}
            onClick={handleBarClick} 
            className='cursor-pointer text-center hover:text-tertiary 
            duration-300 ease-in-out rounded-sm px-2'>
              Home
            </Link>
            <Link to="projects" spy={true} smooth={true} duration={500}
            onClick={handleBarClick} 
            className='cursor-pointer text-center hover:text-tertiary 
            duration-300 ease-in-out rounded-sm px-2'>
              Projects
            </Link>
            <Link to="skills" spy={true} smooth={true} duration={500}
            onClick={handleBarClick} 
            className='cursor-pointer text-center hover:text-tertiary 
            duration-300 ease-in-out rounded-sm px-2'>
              Skills
            </Link>
            <Link to="contact" spy={true} smooth={true} duration={500}
            onClick={handleBarClick} 
            className='cursor-pointer text-center hover:text-tertiary 
            duration-300 ease-in-out rounded-sm px-2'>
              Contact
            </Link>
        </ul>
      </div>
    </header>
  )
}
export default Navbar
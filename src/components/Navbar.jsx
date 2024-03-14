import React, { useState } from 'react';
import { FaBars } from "react-icons/fa6";
import {Link} from "react-scroll"
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoDocumentTextOutline } from "react-icons/io5";

const Navbar = () => {
  const [miniMenu, setMiniMenu] = useState(false);
  const handleBarClick = () => setMiniMenu(!miniMenu);

  return (
    <div className='relative z-50 w-full'>
      {/** navbar */}
      <div className="fixed w-[100%] flex md:justify-between justify-end items-center bg-gray-900
       text-gray-300 h-[10%] max-h-[10%] border-b-[1px] border-gray-300">
        {/* menu */}
        <ul className='hidden md:flex ml-[10vw] w-[50%] text-button
        justify-between'>     
            <Link to="home" spy={true} smooth={true} duration={500}
            className='border-[1px] border-gray-300 cursor-pointer 
            hover:text-gray-900 hover:bg-gray-300 duration-300 w-[10vw]
             min-w-fit text-center px-2 ease-in-out'>
              Home
            </Link>
            <Link to="projects" spy={true} smooth={true} duration={500} 
            className='border-[1px] border-gray-300 cursor-pointer 
            hover:text-gray-900 hover:bg-gray-300 duration-200 w-[10vw]
             min-w-fit text-center px-2'>
              Projects
            </Link>
            <Link to="skills" spy={true} smooth={true} duration={500} 
            className='border-[1px] border-gray-300 cursor-pointer 
            hover:text-gray-900 hover:bg-gray-300 duration-200 w-[10vw]
             min-w-fit text-center px-2'>
              Skills
            </Link>
            <Link to="contact" spy={true} smooth={true} duration={500} 
            className='border-[1px] border-gray-300 cursor-pointer 
            hover:text-gray-900 hover:bg-gray-300 duration-200 w-[10vw]
             min-w-fit text-center px-2'>
              Contact
            </Link>
        </ul>

        <ul className='hidden md:flex justify-evenly w-[15%] pr-[5vw] text-button '>
          <a href="https://github.com/Andrew-Lodise" target='_'
          className='border-[1px] border-gray-300 hover:bg-gray-300 hover:text-gray-900
          duration-300 ease-out'>
            <FaGithub  className='m-[4px]'/>
          </a>
          <a href="https://www.linkedin.com/in/andrew-lodise/" target='_'
          className='border-[1px] border-gray-300 hover:bg-gray-300 hover:text-gray-900
          duration-300 ease-out'>
            <FaLinkedin  className='m-[4px]'/>
          </a>
          <a href="http://tinyurl.com/5n7nw8xn" target='_'
          className='border-[1px] border-gray-300 hover:bg-gray-300 hover:text-gray-900
          duration-300 ease-out'>
            <IoDocumentTextOutline  className='m-[4px]'/>
          </a>
        </ul>
          
        {/* bar toggle for small screens*/}
        <div className='md:hidden cursor-pointer border-[1px] p-2 border-gray-300
        z-10 mr-2 hover:bg-gray-300 text-gray-300 hover:text-gray-800 duration-200
        max-h-[100%]'
        onClick={handleBarClick}>
          <FaBars size={20}
          className=' max-h-[100%]'/> 
        </div>
        <ul className={!miniMenu ? 'hidden' : `absolute top-0 left-0 w-full h-screen bg-gray-900 
        flex flex-col gap-y-6 items-center justify-center duration-200 text-2xl text-gray-300`}>
            <Link to="home" spy={true} smooth={true} duration={500}
            onClick={handleBarClick} 
            className='border-[1px] border-gray-300 px-[5px] cursor-pointer text-center
            hover:text-gray-900 hover:bg-gray-300 duration-200 w-[60%]'>
              Home
            </Link>
            <Link to="projects" spy={true} smooth={true} duration={500}
            onClick={handleBarClick} 
            className='border-[1px] border-gray-300 px-[5px] cursor-pointer text-center
            hover:text-gray-900 hover:bg-gray-300 duration-200 w-[60%]'>
              Projects
            </Link>
            <Link to="skills" spy={true} smooth={true} duration={500}
            onClick={handleBarClick} 
            className='border-[1px] border-gray-300 px-[5px] cursor-pointer text-center
            hover:text-gray-900 hover:bg-gray-300 duration-200 w-[60%]'>
              Skills
            </Link>
            <Link to="contact" spy={true} smooth={true} duration={500}
            onClick={handleBarClick} 
            className='border-[1px] border-gray-300 px-[5px] cursor-pointer text-center
            hover:text-gray-900 hover:bg-gray-300 duration-200 w-[60%]'>
              Contact
            </Link>
        </ul>
      </div>
    </div>
  )
}
export default Navbar
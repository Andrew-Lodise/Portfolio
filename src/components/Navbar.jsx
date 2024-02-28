import React, { useState } from 'react';
import { FaBars } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
import {Link} from "react-scroll"

const Navbar = () => {

  const [isHovered, setIsHovered] = useState(false);
  const [miniMenu, setMiniMenu] = useState(false);
  const handleBarClick = () => setMiniMenu(!miniMenu)

  return (
    <div>
      {/** navbar */}
      <div className="fixed w-[100%] h-[80px] flex justify-between items-center bg-gray-900
       text-white shadow-lg shadow-gray-950 lg:h-[100px]">
        {/* logo */}
        <div className="flex h-[60px] w-[100px] cursor-default">
          <h1 className='font-greatVibes text-[50px] lg:text-[60px] ml-4 lg:mt-[-10px] text-blue-300'>
          AL
          </h1>
        </div>
        {/* menu */}
        <div className='w-[85%]'>
          <ul className='hidden md:flex w-full justify-evenly text-4xl'>
            <li className='py-2 mx-5 lg:mx-12 m-2 text-white bg-gray-900 
             cursor-pointer hover:border-blue-300 hover:text-blue-300 duration-200
             underline-offset-2 underline hover:scale-125'>
              <Link to="home" spy={true} smooth={true} offset={-70} duration={500}>
                Home
              </Link>
            </li>
            <li className='py-2 mx-5 lg:mx-12 m-2 text-white bg-gray-900 
             cursor-pointer hover:border-blue-300 hover:text-blue-300 duration-200
             underline-offset-2 underline hover:scale-125 '>
              <Link to="projects" spy={true} smooth={true} offset={-78} duration={500} >
                Projects
              </Link>
            </li>
            <li className='py-2 mx-5 lg:mx-12 m-2 text-white bg-gray-900 
             cursor-pointer hover:border-blue-300 hover:text-blue-300 duration-200
             underline-offset-2 underline hover:scale-125 '>
              <Link to="skills" spy={true} smooth={true} offset={-95} duration={500} >
                Skills
              </Link>
            </li>
            <li className='py-2 mx-5 lg:mx-12 m-2 text-white bg-gray-900 
             cursor-pointer hover:border-blue-300 hover:text-blue-300 duration-200
             underline-offset-2 underline hover:scale-125 '>
              <Link to="contact" spy={true} smooth={true} offset={-70} duration={500} >
                Contact
              </Link>
            </li>
          </ul>
        </div>
        {/* bar toggle for small screens*/}
        <div className='md:hidden cursor-pointer border-2 p-2 border-white rounded 
        hover:border-blue-300 z-10 mr-2'
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              onClick={handleBarClick}>
        {!miniMenu ? <FaBars size={30} color={isHovered ? "#98c4fc" : "white"}/> : <RxCross2 size={30} color={isHovered ? "#98c4fc" : "white"}/>}
        </div>
        {/* mobile pop-out menu*/}
        <ul className={!miniMenu ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-gray-900 flex flex-col items-center justify-center duration-700'}>
          <li className='text-4xl py-2 mx-5 lg:mx-12 m-2 text-white bg-gray-900 
             cursor-pointer hover:border-blue-300 hover:text-blue-300 duration-200
             underline-offset-2 underline hover:scale-125'>
            <Link to="home" spy={true} smooth={true} offset={-70} duration={500}
            onClick={handleBarClick} >
              Home
            </Link>
          </li>
          <li className='text-4xl py-2 mx-5 lg:mx-12 m-2 text-white bg-gray-900 
             cursor-pointer hover:border-blue-300 hover:text-blue-300 duration-200
             underline-offset-2 underline hover:scale-125'>
            <Link to="projects" spy={true} smooth={true} offset={-70} duration={500}
            onClick={handleBarClick} >
              Projects
            </Link>
          </li>
          <li className='text-4xl py-2 mx-5 lg:mx-12 m-2 text-white bg-gray-900 
             cursor-pointer hover:border-blue-300 hover:text-blue-300 duration-200
             underline-offset-2 underline hover:scale-125'>
            <Link to="skills" spy={true} smooth={true} offset={-80} duration={500}
            onClick={handleBarClick} >
              Skills
            </Link>
          </li>
          <li className='text-4xl py-2 mx-5 lg:mx-12 m-2 text-white bg-gray-900 
             cursor-pointer hover:border-blue-300 hover:text-blue-300 duration-200
             underline-offset-2 underline hover:scale-125'>
            <Link to="contact" spy={true} smooth={true} offset={-70} duration={500}
            onClick={handleBarClick} >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}
export default Navbar
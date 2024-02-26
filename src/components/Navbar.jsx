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
      <div className="fixed w-[100%] h-[80px] flex justify-between items-center p-4 bg-gray-900
       text-white">
        {/* logo */}
        <div className="flex h-[60px] w-[100px] ">
          <h1 className='font-greatVibes text-[50px] text-blue-300'>
          AL
          </h1>
        </div>
        {/* menu */}
        <div>
          <ul className='hidden md:flex'>
            <li className='py-2 px-5 lg:px-12 m-2 rounded-full text-xl text-white hover: 
            bg-gray-900 cursor-pointer hover:border-blue-300 hover:text-blue-300 duration-200
             underline-offset-1 underline hover:underline-offset-8'>
              <Link  
              to="home" 
              spy={true} 
              smooth={true} 
              offset={-70} 
              duration={500} >
                Home
              </Link>
            </li>
            <li className='py-2 px-5 lg:px-12 m-2 rounded-full text-xl text-white hover: 
            bg-gray-900 cursor-pointer hover:border-blue-300 hover:text-blue-300 duration-200
             underline-offset-1 underline hover:underline-offset-8'>
              <Link to="projects" spy={true} smooth={true} offset={-70} duration={500} >
                Projects
              </Link>
            </li>
            <li className='py-2 px-5 lg:px-12 m-2 rounded-full text-xl text-white hover: 
            bg-gray-900 cursor-pointer hover:border-blue-300 hover:text-blue-300 duration-200
             underline-offset-1 underline hover:underline-offset-8'>
              <Link to="skills" spy={true} smooth={true} offset={-70} duration={500} >
                Skills
              </Link>
            </li>
            <li className='py-2 px-5 lg:px-12 m-2 rounded-full text-xl text-white hover: 
            bg-gray-900 cursor-pointer hover:border-blue-300 hover:text-blue-300 duration-200
             underline-offset-1 underline hover:underline-offset-8'>
              <Link to="timeline" spy={true} smooth={true} offset={-60} duration={500} >
                Timeline
              </Link>
            </li>
            <li className='py-2 px-5 lg:px-12 m-2 rounded-full text-xl text-white hover: 
            bg-gray-900 cursor-pointer hover:border-blue-300 hover:text-blue-300 duration-200
             underline-offset-1 underline hover:underline-offset-8'>
              <Link to="contact" spy={true} smooth={true} offset={-70} duration={500} >
                Contact
              </Link>
            </li>
          </ul>
        </div>
        {/* bar toggle for small screens*/}
        <div className='md:hidden cursor-pointer border-2 p-2 border-white rounded hover:border-blue-300 z-10'
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              onClick={handleBarClick}>
        {!miniMenu ? <FaBars size={30} color={isHovered ? "#98c4fc" : "white"}/> : <RxCross2 size={30} color={isHovered ? "#98c4fc" : "white"}/>}
        </div>
        {/* mobile pop-out menu  ITS NOT THIS THATS THE PROBLEM*/}
        <ul className={!miniMenu ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-gray-900 flex flex-col items-center justify-center duration-700'}>
          <li className='my-4 p-2 text-4xl border-2 cursor-pointer border-white rounded-lg hover:border-blue-300 
          hover:text-blue-300 duration-200'>
            <Link to="home" spy={true} smooth={true} offset={-70} duration={500}
            onClick={handleBarClick} >
              Home
            </Link>
          </li>
          <li className='my-4 p-2 text-4xl border-2 cursor-pointer border-white rounded-lg hover:border-blue-300 
          hover:text-blue-300 duration-200'>
            <Link to="projects" spy={true} smooth={true} offset={-70} duration={500}
            onClick={handleBarClick} >
              Projects
            </Link>
          </li>
          <li className='my-4 p-2 text-4xl border-2 cursor-pointer border-white rounded-lg hover:border-blue-300 
          hover:text-blue-300 duration-200'>
            <Link to="timeline" spy={true} smooth={true} offset={-70} duration={500}
            onClick={handleBarClick} >
              Timeline
            </Link>
          </li>
          <li className='my-4 p-2 text-4xl border-2 cursor-pointer border-white rounded-lg hover:border-blue-300 
          hover:text-blue-300 duration-200'>
            <Link to="skills" spy={true} smooth={true} offset={-70} duration={500}
            onClick={handleBarClick} >
              Skills
            </Link>
          </li>
          <li className='my-4 p-2 text-4xl border-2 cursor-pointer border-white rounded-lg hover:border-blue-300 
          hover:text-blue-300 duration-200'>
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
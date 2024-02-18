import React, { useState } from 'react';
import { FaBars } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoDocumentTextOutline } from "react-icons/io5";

const Navbar = () => {
  // state for FaBars color change to work
  const [isHovered, setIsHovered] = useState(false);
  const [miniMenu, setMiniMenu] = useState(false);
  const handleBarClick = () => setMiniMenu(!miniMenu)

  return (
    <div>
      {/** navbar */}
      <div className="fixed w-[100%] h-[80px] flex justify-between items-center p-4 bg-gray-900 text-white">
        {/* logo */}
        <div className="flex h-[60px] w-[100px] ">
          <div className='font-greatVibes text-[50px] text-blue-300'>
          AL
          </div>
        </div>

        {/* menu */}
        <div>
          <ul className='hidden md:flex'>
            <li className='py-2 px-5 m-2 rounded-full border-2 border-white text-white bg-gray-900 cursor-pointer hover:border-blue-300 hover:text-blue-300 duration-200'>Projects</li>
            <li className='py-2 px-5 m-2 rounded-full border-2 border-white text-white bg-gray-900 cursor-pointer hover:border-blue-300 hover:text-blue-300 duration-200'>Timeline</li>
            <li className='py-2 px-5 m-2 rounded-full border-2 border-white text-white bg-gray-900 cursor-pointer hover:border-blue-300 hover:text-blue-300 duration-200'>Skills</li>
            <li className='py-2 px-5 m-2 rounded-full border-2 border-white text-white bg-gray-900 cursor-pointer hover:border-blue-300 hover:text-blue-300 duration-200'>About</li>
            <li className='py-2 px-5 m-2 rounded-full border-2 border-white text-white bg-gray-900 cursor-pointer hover:border-blue-300 hover:text-blue-300 duration-200'>Contact</li>
          </ul>
        </div>

        {/* bar icon for small screens */}
        <div className='md:hidden cursor-pointer border-2 p-2 border-white rounded hover:border-blue-300 z-10'
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              onClick={handleBarClick}>
        {!miniMenu ? <FaBars size={30} color={isHovered ? "#98c4fc" : "white"}/> : <RxCross2 size={30} color={isHovered ? "#98c4fc" : "white"}/>}
        </div>

        {/* mobile menu */}
        <ul className={!miniMenu ? 'hidden' : 'absolute top-0 left-0 w-full h-screen flex flex-col items-center justify-center bg-gray-900 duration-700'}>
          <li className='my-4 p-2 text-4xl border-2 cursor-pointer border-white rounded-lg hover:border-blue-300 hover:text-blue-300 duration-200'>Projects</li>
          <li className='my-4 p-2 text-4xl border-2 cursor-pointer border-white rounded-lg hover:border-blue-300 hover:text-blue-300 duration-200'>Timeline</li>
          <li className='my-4 p-2 text-4xl border-2 cursor-pointer border-white rounded-lg hover:border-blue-300 hover:text-blue-300 duration-200'>Skills</li>
          <li className='my-4 p-2 text-4xl border-2 cursor-pointer border-white rounded-lg hover:border-blue-300 hover:text-blue-300 duration-200'>About</li>
          <li className='my-4 p-2 text-4xl border-2 cursor-pointer border-white rounded-lg hover:border-blue-300 hover:text-blue-300 duration-200'>Contact</li>
        </ul>

        {/* sidebar */}
        <div className={miniMenu ? 'hidden' : 'fixed top-[20%] flex flex-col left-0 text-3xl'}>
          <ul>
            <div className='flex items-center justify-between w-[200px] ml-[-150px] hover:ml-[-40px] my-2 border-2 border-white hover:border-blue-300 px-2 rounded-full hover:text-blue-300 pl-10 duration-200'>
              <a href="/">Github</a>
              <FaGithub/>
            </div>
            <li className='flex items-center justify-between w-[230px] ml-[-180px] hover:ml-[-40px] my-2 border-2 border-white hover:border-blue-300 px-2 rounded-full hover:text-blue-300 pl-10 duration-200'>
              <a href="/" >Linkedin</a>
              <FaLinkedin/>
            </li>
            <li className='flex items-center justify-between w-[230px] ml-[-180px] hover:ml-[-40px] my-2 border-2 border-white hover:border-blue-300 px-2 rounded-full hover:text-blue-300 pl-10 duration-200'>
              <a href="/" >Resume</a>
              <IoDocumentTextOutline />
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar
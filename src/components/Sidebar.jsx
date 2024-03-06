import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoDocumentTextOutline } from "react-icons/io5";

const Sidebar = () => {

  return (
    <div className='hidden  md:block md:bg-gray-900 md:text-white relative z-40'>
        <div className={'fixed top-[20%] flex flex-col left-0 text-3xl py-3'}>
          <ul className=''>
            <li className='flex items-center justify-between w-[200px] ml-[-150px] hover:ml-[-40px]
            my-2 border-2 border-blue-300 px-2 rounded-full text-blue-300 pl-10 duration-200
            bg-gray-900 shadow-lg shadow-gray-950'>
              <a href="https://github.com/Andrew-Lodise" target='_'>Github</a>
              <FaGithub color="#98c4fc"/>
            </li>
            <li className='flex items-center justify-between w-[230px] ml-[-180px] hover:ml-[-40px]
            my-2 border-2 border-blue-300 px-2 rounded-full text-blue-300 pl-10 duration-200
            bg-gray-900 shadow-lg shadow-gray-950'>
              <a href="https://www.linkedin.com/in/andrew-lodise/" target='_'>Linkedin</a>
              <FaLinkedin/>
            </li>
            <li className='flex items-center justify-between w-[230px] ml-[-180px] hover:ml-[-40px]
            my-2 border-2 border-blue-300 px-2 rounded-full text-blue-300 pl-10 duration-200
            bg-gray-900 shadow-lg shadow-gray-950 '>
              <a href="http://tinyurl.com/5n7nw8xn" target="_blank" rel="noreferrer">Resume</a>
              <IoDocumentTextOutline />
            </li>
          </ul>
        </div>
    </div>
  )
}

export default Sidebar
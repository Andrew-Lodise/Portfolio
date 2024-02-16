import React from 'react'
//import FaBars from "react-icons/fa"
import { FaGithub, FaTwitter, FaBars } from 'react-icons/fa';


const Navbar = () => {
  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-gray-800 text-white">
        {/* logo */}
        <div className="flex justify-center h-[60px] w-[60px] items-center bg-gray-900 text-white font-extrabold ">
          Logo
        </div>

        {/* menu */}
        <div>
          <ul className='hidden md:flex p-1 bg-gray-900'>
            <li className='px-2 bg-blue-800 my-4 mx-6 cursor-pointer'>Projects</li>
            <li className='px-2 bg-blue-800 my-4 mx-6 cursor-pointer'>Timeline</li>
            <li className='px-2 bg-blue-800 my-4 mx-6 cursor-pointer'>Skills</li>
            <li className='px-2 bg-blue-800 my-4 mx-6 cursor-pointer'>About</li>
            <li className='px-2 bg-blue-800 my-4 mx-6 cursor-pointer'>Contact</li>
          </ul>
        </div>

        <div className='md:hidden'>
        <FaBars />
        </div>


    </div>
  )
}

export default Navbar
import React, { useState } from 'react'
import{ FaBars } from 'react-icons/fa';


const Navbar = () => {
  // state for FaBars color change to work
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div>
      <div className="fixed w-[100%] h-[80px] flex justify-between p-4 items-center bg-gray-800
      text-white">
          {/* logo */}
          <div className="flex h-[60px] w-[100px] ">
            <div className='font-greatVibes text-[50px] text-blue-300'>
            AL
            </div>
          </div>

          {/* menu */}
          <div>
            <ul className='hidden md:flex'>
              <li className='py-2 px-5 m-2 rounded-full border-2 border-white text-white bg-gray-900 cursor-pointer hover:border-blue-300 hover:text-blue-300'>Contact</li>
              <li className='py-2 px-5 m-2 rounded-full border-2 border-white text-white bg-gray-900 cursor-pointer hover:border-blue-300 hover:text-blue-300'>Projects</li>
              <li className='py-2 px-5 m-2 rounded-full border-2 border-white text-white bg-gray-900 cursor-pointer hover:border-blue-300 hover:text-blue-300'>Timeline</li>
              <li className='py-2 px-5 m-2 rounded-full border-2 border-white text-white bg-gray-900 cursor-pointer hover:border-blue-300 hover:text-blue-300'>Skills</li>
              <li className='py-2 px-5 m-2 rounded-full border-2 border-white text-white bg-gray-900 cursor-pointer hover:border-blue-300 hover:text-blue-300'>About</li>
            </ul>
          </div>

          <div className='md:hidden cursor-pointer border-2 p-2 border-white rounded hover:border-blue-300'
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}>
          <FaBars size={30} color={isHovered ? "#98c4fc" : "white"}/>
          </div>
      </div>
    </div>
  )
}

export default Navbar
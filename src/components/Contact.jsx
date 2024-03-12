import React from 'react'
import { MdKeyboardArrowUp } from "react-icons/md";
import {Link} from "react-scroll"

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-gray-900 
     text-gray-300'>
      <div name="backtotop" className='absolute mt-[12vh] right-[6%] hover:bg-gray-300
      hover:text-gray-900 duration-200 cursor-pointer '>
        <Link to="home" spy={true} smooth={true} duration={500}>
          <MdKeyboardArrowUp size={40}/>
        </Link>
      </div>

      <div className='w-full h-full flex flex-col items-center justify-center '>
        <h1 className='text-4xl text-center'>
          Connect with me!
        </h1> 
        <form action="POST" className='flex flex-col gap-y-4 text-md md:text-lg 
        lg:text-xl text-gray-300 w-[80%] md:w-[60%] lg:w-[50%] mt-2'>
          <input type="text" placeholder='Name' className='text-2xl bg-gray-900 
          border-[1px] border-gray-300 px-2 '/>
          <input type="text" placeholder='Email' className='text-2xl bg-gray-900 
          border-[1px] border-gray-300 px-2'/>
          <textarea type="text" rows="10" placeholder='Message' className='text-lg 
          bg-gray-900 border-[1px] border-gray-300 px-2 focus:rounded-none'/>
          <button className='self-start border-[1px] border-gray-300 text-2xl
          px-2 hover:bg-gray-300 hover:text-gray-900'>
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}

export default Contact